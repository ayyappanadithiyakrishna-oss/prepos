#!/usr/bin/env python3
"""
Programmatic answer-key verifier for PrepOS SAT content (master-prompt rule #3).

Reads every verified-problem JSON file under lib/sat-practice/data/, and for each
problem independently RE-DERIVES the correct answer with sympy from the declarative
`check` spec — then asserts the authored answer key agrees. A wrong key, a
mistagged problem, or an internally inconsistent multiple-choice set fails the run
with a non-zero exit code, so this can gate CI.

It does NOT trust the authored `answer`; it recomputes and compares.

Usage:  python3 scripts/verify_answers.py
"""

from __future__ import annotations

import json
import sys
from pathlib import Path

import sympy as sp

DATA_DIR = Path(__file__).resolve().parent.parent / "lib" / "sat-practice" / "data"
VALID_DOMAINS = {
    "Algebra",
    "Advanced Math",
    "Problem Solving & Data Analysis",
    "Geometry & Trigonometry",
}
VALID_DIFFICULTY = {"Easy", "Medium", "Hard"}


class CheckError(Exception):
    pass


def parse(expr: str):
    return sp.sympify(expr, rational=True)


def compute_expected(check: dict) -> tuple[str, object]:
    """Return (kind_result_type, value). For solve/evaluate -> ('value', sympy num).
    For solution_count -> ('category', 'one'|'none'|'infinite')."""
    kind = check.get("kind")
    if kind == "solve_linear":
        var = sp.Symbol(check["variable"])
        sols = sp.solve(sp.Eq(parse(check["expression"]), 0), var)
        if len(sols) != 1:
            raise CheckError(f"expected exactly one solution, got {sols}")
        return "value", sp.nsimplify(sols[0])
    if kind == "evaluate":
        return "value", sp.nsimplify(parse(check["expression"]))
    if kind == "system_linear":
        syms = [sp.Symbol(v) for v in check["variables"]]
        eqs = [sp.Eq(parse(e), 0) for e in check["equations"]]
        sol = sp.solve(eqs, syms, dict=True)
        if len(sol) != 1:
            raise CheckError(f"expected a unique system solution, got {sol}")
        target = parse(check["target"]).subs(sol[0])
        return "value", sp.nsimplify(target)
    if kind == "solution_count":
        var = sp.Symbol(check["variable"])
        diff = sp.simplify(parse(check["lhs"]) - parse(check["rhs"]))
        if diff == 0:
            return "category", "infinite"
        # diff is either a nonzero constant (no solution) or contains var (one solution)
        if var in diff.free_symbols:
            sols = sp.solve(sp.Eq(diff, 0), var)
            return "category", "one" if len(sols) == 1 else "infinite"
        return "category", "none"
    if kind == "geometry_ratio":
        # Proportional-sides / similar-triangle problems: solve ratio1 = ratio2
        # for `variable`. Geometry lengths are positive, so a negative extraneous
        # root is discarded; exactly one positive real solution must remain.
        var = sp.Symbol(check["variable"])
        sols = sp.solve(sp.Eq(parse(check["ratio1"]), parse(check["ratio2"])), var)
        positive = [s for s in sols if s.is_positive]
        if len(positive) == 1:
            chosen = positive[0]
        elif not positive and any(s.is_positive is None for s in sols) and len(sols) == 1:
            # sign is symbolically indeterminate — can't filter; require a lone solution
            chosen = sols[0]
        else:
            raise CheckError(f"expected exactly one positive solution, got {sols}")
        return "value", sp.nsimplify(chosen)
    if kind == "trig_evaluate":
        # Right-triangle trig (SOH-CAH-TOA). Either evaluate func(angleDeg)
        # exactly, or compute the ratio from two given sides. Exact surds
        # (e.g. sqrt(3)/2 for cos 30) are preserved, not decimal-approximated.
        func = check.get("func")
        fmap = {"sin": sp.sin, "cos": sp.cos, "tan": sp.tan}
        if func not in fmap:
            raise CheckError(f"unknown trig func {func!r}")
        if "angleDeg" in check:
            val = fmap[func](parse(str(check["angleDeg"])) * sp.pi / 180)
            return "value", sp.nsimplify(sp.simplify(val))
        sides = {k: parse(str(check[k])) for k in ("opposite", "adjacent", "hypotenuse") if k in check}
        try:
            if func == "sin":
                ratio = sides["opposite"] / sides["hypotenuse"]
            elif func == "cos":
                ratio = sides["adjacent"] / sides["hypotenuse"]
            else:  # tan
                ratio = sides["opposite"] / sides["adjacent"]
        except KeyError as e:
            raise CheckError(f"trig_evaluate {func} missing side {e}")
        return "value", sp.nsimplify(sp.simplify(ratio))
    raise CheckError(f"unknown check kind: {kind!r}")


def values_equal(a, b_str: str) -> bool:
    try:
        return sp.simplify(a - parse(b_str)) == 0
    except Exception:
        return False


def verify_problem(p: dict) -> list[str]:
    errs: list[str] = []
    pid = p.get("id", "<no id>")

    # ── structural tags (rule #6) ────────────────────────────────────────────
    if p.get("domain") not in VALID_DOMAINS:
        errs.append(f"{pid}: invalid/missing domain {p.get('domain')!r}")
    if not p.get("subSkill"):
        errs.append(f"{pid}: missing subSkill")
    if p.get("difficulty") not in VALID_DIFFICULTY:
        errs.append(f"{pid}: invalid/missing difficulty {p.get('difficulty')!r}")
    if not p.get("calculatorStrategy"):
        errs.append(f"{pid}: missing calculatorStrategy")

    try:
        result_type, expected = compute_expected(p["check"])
    except Exception as e:
        errs.append(f"{pid}: check failed to evaluate: {e}")
        return errs

    qtype = p.get("type")
    if qtype == "spr":
        if result_type == "value":
            ok = values_equal(expected, str(p["answer"]))
        else:
            ok = str(expected) == str(p["answer"])
        if not ok:
            errs.append(f"{pid}: SPR answer {p['answer']!r} != computed {expected}")
    elif qtype == "mc":
        choices = p.get("choices", [])
        labels = [c["label"] for c in choices]
        if labels != ["A", "B", "C", "D"]:
            errs.append(f"{pid}: choices must be labelled A,B,C,D in order, got {labels}")
        # find the choice(s) matching the computed answer
        if result_type == "value":
            matches = [c for c in choices if values_equal(expected, c["value"])]
        else:  # category
            matches = [c for c in choices if c["value"] == expected]
        if len(matches) != 1:
            errs.append(f"{pid}: expected exactly one choice matching {expected}, matched {[c['label'] for c in matches]}")
        else:
            correct = matches[0]
            if correct["label"] != p["answer"]:
                errs.append(f"{pid}: answer key says {p['answer']} but computed answer is {correct['label']} ({expected})")
            if correct.get("trap"):
                errs.append(f"{pid}: correct choice {correct['label']} should not carry a trap")
            for c in choices:
                if c["label"] != correct["label"] and not c.get("trap"):
                    errs.append(f"{pid}: distractor {c['label']} is missing a named trap")
    else:
        errs.append(f"{pid}: invalid type {qtype!r}")

    return errs


def selftest() -> int:
    """Prove each check kind computes the expected value. Run before authoring
    content for a new kind, so the verifier is trusted before it gates anything."""
    cases: list[tuple[dict, str]] = [
        # existing kinds — regression guards
        ({"kind": "evaluate", "expression": "75 + 50*3"}, "225"),
        ({"kind": "solve_linear", "expression": "40 + 25*m - 240", "variable": "m"}, "8"),
        ({"kind": "system_linear", "equations": ["m*2 + b - 7", "m*6 + b - 19"],
          "variables": ["m", "b"], "target": "b"}, "1"),
        # geometry_ratio — similar triangles: 6/9 = 8/x -> x = 12
        ({"kind": "geometry_ratio", "ratio1": "6/9", "ratio2": "8/x", "variable": "x"}, "12"),
        # geometry_ratio discards the negative extraneous root: x/4 = 9/x -> x = 6 (not -6)
        ({"kind": "geometry_ratio", "ratio1": "x/4", "ratio2": "9/x", "variable": "x"}, "6"),
        # trig_evaluate from an angle — exact surds
        ({"kind": "trig_evaluate", "func": "cos", "angleDeg": 30}, "sqrt(3)/2"),
        ({"kind": "trig_evaluate", "func": "sin", "angleDeg": 30}, "1/2"),
        ({"kind": "trig_evaluate", "func": "tan", "angleDeg": 45}, "1"),
        # trig_evaluate from sides — 3-4-5 right triangle
        ({"kind": "trig_evaluate", "func": "sin", "opposite": 3, "hypotenuse": 5}, "3/5"),
        ({"kind": "trig_evaluate", "func": "tan", "opposite": 4, "adjacent": 3}, "4/3"),
    ]
    errs = 0
    for check, expected in cases:
        try:
            _, got = compute_expected(check)
            if not values_equal(got, expected):
                print(f"   ✗ {check['kind']}: got {got}, expected {expected}")
                errs += 1
            else:
                print(f"   ✓ {check['kind']}: {expected}")
        except Exception as e:
            print(f"   ✗ {check['kind']}: raised {e}")
            errs += 1
    # negative case: geometry_ratio with no positive solution must raise
    try:
        compute_expected({"kind": "geometry_ratio", "ratio1": "1/x", "ratio2": "-1/2", "variable": "x"})
        print("   ✗ geometry_ratio negative-only root should have raised")
        errs += 1
    except CheckError:
        print("   ✓ geometry_ratio rejects negative-only solution")
    print("✅ all check-kind self-tests passed" if not errs else f"❌ {errs} self-test failure(s)")
    return 1 if errs else 0


def main() -> int:
    if "--selftest" in sys.argv:
        return selftest()
    files = sorted(DATA_DIR.glob("*.json"))
    if not files:
        print(f"No JSON found under {DATA_DIR}", file=sys.stderr)
        return 1

    total = 0
    all_errs: list[str] = []
    for f in files:
        lesson = json.loads(f.read_text())
        problems = lesson.get("problems", [])
        for p in problems:
            total += 1
            all_errs.extend(verify_problem(p))
        print(f"  {f.name}: {len(problems)} problems")

    print(f"\nVerified {total} problems across {len(files)} file(s).")
    if all_errs:
        print(f"\n❌ {len(all_errs)} problem(s) FAILED verification:")
        for e in all_errs:
            print(f"   - {e}")
        return 1
    print("✅ All answer keys verified correct and fully tagged.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
