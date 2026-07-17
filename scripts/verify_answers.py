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


def main() -> int:
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
