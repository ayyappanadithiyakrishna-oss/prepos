// ─────────────────────────────────────────────────────────────────────────────
// Runtime answer-key verifier (TypeScript port of scripts/verify_answers.py).
//
// Vercel serverless functions have no python/sympy at runtime, so the autonomous
// generation pipeline can't shell out to the Python verifier. This re-derives
// each question's answer from its declarative `check` spec — independently of the
// authored key — and asserts the key agrees, plus the same structural checks the
// Python gate enforces (labels A–D, exactly one matching choice, correct choice
// has no trap, every distractor names a trap).
//
// Algebra checks (solve_linear / evaluate / system_linear / solution_count) are
// exact-linear-rational. geometry_ratio / trig_evaluate use tight-tolerance
// numerics (only reached once Geometry/Trig content is authored). The gate is
// equivalent in strength to the Python one: it proves the KEY matches the CHECK.
// It does not prove the prose stem matches the check — that is the generator
// prompt's job, exactly as with the hand-authored Python gate.
// ─────────────────────────────────────────────────────────────────────────────

import type { VerifiedProblem, ProblemCheck } from '../sat-practice/verified-schema'

const TOL = 1e-7

// ── Safe arithmetic evaluator (no eval): + - * / ^, parens, unary ±, vars,
//    and sqrt/sin/cos/tan/pi. Returns a JS number. ──────────────────────────
type Scope = Record<string, number>
const FUNCS: Record<string, (x: number) => number> = { sqrt: Math.sqrt, sin: Math.sin, cos: Math.cos, tan: Math.tan, abs: Math.abs }
const CONSTS: Record<string, number> = { pi: Math.PI }

function evalExpr(src: string, scope: Scope = {}): number {
  let i = 0
  const s = src
  const peek = () => s[i]
  const skip = () => { while (i < s.length && s[i] === ' ') i++ }

  function parseExpr(): number {
    let v = parseTerm()
    for (;;) {
      skip()
      const c = peek()
      if (c === '+') { i++; v += parseTerm() }
      else if (c === '-') { i++; v -= parseTerm() }
      else return v
    }
  }
  function parseTerm(): number {
    let v = parseFactor()
    for (;;) {
      skip()
      const c = peek()
      if (c === '*') { i++; v *= parseFactor() }
      else if (c === '/') { i++; v /= parseFactor() }
      else return v
    }
  }
  function parseFactor(): number {
    const base = parseBase()
    skip()
    if (peek() === '^') { i++; return Math.pow(base, parseFactor()) }
    return base
  }
  function parseBase(): number {
    skip()
    const c = peek()
    if (c === '+') { i++; return parseBase() }
    if (c === '-') { i++; return -parseBase() }
    if (c === '(') { i++; const v = parseExpr(); skip(); if (peek() !== ')') throw new Error('unbalanced parens'); i++; return v }
    if (/[0-9.]/.test(c)) {
      let j = i
      while (j < s.length && /[0-9.]/.test(s[j])) j++
      const num = Number(s.slice(i, j)); i = j
      if (!isFinite(num)) throw new Error(`bad number in ${src}`)
      return num
    }
    if (/[a-zA-Z]/.test(c)) {
      let j = i
      while (j < s.length && /[a-zA-Z0-9_]/.test(s[j])) j++
      const name = s.slice(i, j); i = j
      skip()
      if (peek() === '(') { i++; const arg = parseExpr(); skip(); if (peek() !== ')') throw new Error('unbalanced fn parens'); i++; const fn = FUNCS[name]; if (!fn) throw new Error(`unknown function ${name}`); return fn(arg) }
      if (name in CONSTS) return CONSTS[name]
      if (name in scope) return scope[name]
      throw new Error(`unknown symbol ${name}`)
    }
    throw new Error(`unexpected '${c ?? 'EOF'}' in ${src}`)
  }

  const out = parseExpr()
  skip()
  if (i !== s.length) throw new Error(`trailing input in ${src}`)
  if (!isFinite(out)) throw new Error(`non-finite result for ${src}`)
  return out
}

/** Linear coefficients of `expr` in one variable: expr ≈ a*v + b. Throws if not
 *  linear (second difference non-zero). */
function linear1(expr: string, v: string): { a: number; b: number } {
  const f0 = evalExpr(expr, { [v]: 0 })
  const f1 = evalExpr(expr, { [v]: 1 })
  const f2 = evalExpr(expr, { [v]: 2 })
  const a = f1 - f0
  if (Math.abs((f2 - f1) - a) > 1e-6) throw new Error(`${expr} is not linear in ${v}`)
  return { a, b: f0 }
}

export type Expected = { type: 'value'; value: number } | { type: 'category'; value: string }

export function computeExpected(check: ProblemCheck): Expected {
  switch (check.kind) {
    case 'evaluate':
      return { type: 'value', value: evalExpr(check.expression) }
    case 'solve_linear': {
      const { a, b } = linear1(check.expression, check.variable)
      if (Math.abs(a) < 1e-12) throw new Error('no unique solution (zero slope)')
      return { type: 'value', value: -b / a }
    }
    case 'solution_count': {
      const v = check.variable
      const diff = `(${check.lhs}) - (${check.rhs})`
      const { a, b } = linear1(diff, v)
      if (Math.abs(a) > TOL) return { type: 'category', value: 'one' }
      return { type: 'category', value: Math.abs(b) > TOL ? 'none' : 'infinite' }
    }
    case 'system_linear': {
      const [v1, v2] = check.variables
      if (check.equations.length !== 2 || check.variables.length !== 2) throw new Error('system_linear expects 2 equations and 2 variables')
      const coeff = (expr: string) => {
        const c = evalExpr(expr, { [v1]: 0, [v2]: 0 })
        const a = evalExpr(expr, { [v1]: 1, [v2]: 0 }) - c
        const b = evalExpr(expr, { [v1]: 0, [v2]: 1 }) - c
        const chk = evalExpr(expr, { [v1]: 1, [v2]: 1 }) - c
        if (Math.abs(chk - (a + b)) > 1e-6) throw new Error(`${expr} not linear in ${v1},${v2}`)
        return { a, b, c }
      }
      const e1 = coeff(check.equations[0])
      const e2 = coeff(check.equations[1])
      const det = e1.a * e2.b - e2.a * e1.b
      if (Math.abs(det) < 1e-12) throw new Error('system has no unique solution')
      const s1 = (-e1.c * e2.b + e2.c * e1.b) / det
      const s2 = (e1.a * -e2.c - e2.a * -e1.c) / det
      return { type: 'value', value: evalExpr(check.target, { [v1]: s1, [v2]: s2 }) }
    }
    case 'geometry_ratio': {
      const v = check.variable
      const h = (x: number) => evalExpr(check.ratio1, { [v]: x }) - evalExpr(check.ratio2, { [v]: x })
      const root = positiveRoot(h)
      return { type: 'value', value: root }
    }
    case 'trig_evaluate': {
      const fmap: Record<string, (x: number) => number> = { sin: Math.sin, cos: Math.cos, tan: Math.tan }
      const fn = fmap[check.func]
      if (!fn) throw new Error(`unknown trig func ${check.func}`)
      if (check.angleDeg != null) return { type: 'value', value: fn((check.angleDeg * Math.PI) / 180) }
      const { opposite: o, adjacent: adj, hypotenuse: hyp } = check
      if (check.func === 'sin') { if (o == null || hyp == null) throw new Error('sin needs opposite+hypotenuse'); return { type: 'value', value: o / hyp } }
      if (check.func === 'cos') { if (adj == null || hyp == null) throw new Error('cos needs adjacent+hypotenuse'); return { type: 'value', value: adj / hyp } }
      if (o == null || adj == null) throw new Error('tan needs opposite+adjacent'); return { type: 'value', value: o / adj }
    }
  }
}

// Bisection for a single positive root of a continuous h on (0, hi].
function positiveRoot(h: (x: number) => number): number {
  let lo = 1e-6, hlo = h(lo)
  const HI = 1e6
  let prev = lo, hprev = hlo
  for (let x = 0.001; x <= HI; x *= 1.5) {
    const hx = h(x)
    if (isFinite(hprev) && isFinite(hx) && hprev * hx <= 0) {
      let a = prev, b = x
      for (let k = 0; k < 100; k++) { const m = (a + b) / 2, hm = h(m); if (Math.abs(hm) < 1e-12) return m; if (h(a) * hm <= 0) b = m; else a = m }
      return (a + b) / 2
    }
    prev = x; hprev = hx
  }
  throw new Error('no positive root found')
}

function numEqual(a: number, bStr: string | number): boolean {
  let b: number
  try { b = typeof bStr === 'number' ? bStr : evalExpr(String(bStr)) } catch { return false }
  return Math.abs(a - b) <= TOL + 1e-9 * Math.max(Math.abs(a), Math.abs(b))
}

/** Mirror of Python verify_problem: returns a list of errors ([] === verified). */
export function verifyProblem(p: VerifiedProblem): string[] {
  const errs: string[] = []
  const id = p.id ?? '<no id>'
  if (!p.subSkill) errs.push(`${id}: missing subSkill`)
  if (!['Easy', 'Medium', 'Hard'].includes(p.difficulty)) errs.push(`${id}: invalid difficulty ${p.difficulty}`)
  if (!p.calculatorStrategy) errs.push(`${id}: missing calculatorStrategy`)
  if (!p.question) errs.push(`${id}: missing question`)

  let expected: Expected
  try { expected = computeExpected(p.check) } catch (e) { errs.push(`${id}: check failed to evaluate: ${e instanceof Error ? e.message : e}`); return errs }

  if (p.type === 'spr') {
    const ok = expected.type === 'value' ? numEqual(expected.value, p.answer) : String(expected.value) === String(p.answer)
    if (!ok) errs.push(`${id}: SPR answer ${p.answer} != computed ${expected.value}`)
  } else if (p.type === 'mc') {
    const choices = p.choices ?? []
    const labels = choices.map((c) => c.label)
    if (JSON.stringify(labels) !== JSON.stringify(['A', 'B', 'C', 'D'])) errs.push(`${id}: choices must be labelled A,B,C,D in order, got ${labels.join(',')}`)
    const matches = expected.type === 'value' ? choices.filter((c) => numEqual(expected.value, c.value)) : choices.filter((c) => c.value === expected.value)
    if (matches.length !== 1) {
      errs.push(`${id}: expected exactly one choice matching ${expected.value}, matched ${matches.map((c) => c.label).join(',') || 'none'}`)
    } else {
      const correct = matches[0]
      if (correct.label !== p.answer) errs.push(`${id}: answer key says ${p.answer} but computed answer is ${correct.label} (${expected.value})`)
      if (correct.trap) errs.push(`${id}: correct choice ${correct.label} should not carry a trap`)
      for (const c of choices) if (c.label !== correct.label && !c.trap) errs.push(`${id}: distractor ${c.label} is missing a named trap`)
    }
  } else {
    errs.push(`${id}: invalid type ${(p as { type?: string }).type}`)
  }
  return errs
}

/** Convenience: true iff the problem passes every check. */
export function isVerified(p: VerifiedProblem): boolean {
  return verifyProblem(p).length === 0
}

/** Self-test mirroring the Python selftest — proves each check kind computes the
 *  expected value before the gate is trusted. Returns [] on success. */
export function selftest(): string[] {
  const fails: string[] = []
  const cases: Array<[ProblemCheck, string | number]> = [
    [{ kind: 'evaluate', expression: '75 + 50*3' }, 225],
    [{ kind: 'solve_linear', expression: '40 + 25*m - 240', variable: 'm' }, 8],
    [{ kind: 'system_linear', equations: ['m*2 + b - 7', 'm*6 + b - 19'], variables: ['m', 'b'], target: 'b' }, 1],
    [{ kind: 'geometry_ratio', ratio1: '6/9', ratio2: '8/x', variable: 'x' }, 12],
    [{ kind: 'geometry_ratio', ratio1: 'x/4', ratio2: '9/x', variable: 'x' }, 6],
    [{ kind: 'trig_evaluate', func: 'cos', angleDeg: 30 }, Math.sqrt(3) / 2],
    [{ kind: 'trig_evaluate', func: 'sin', angleDeg: 30 }, 0.5],
    [{ kind: 'trig_evaluate', func: 'sin', opposite: 3, hypotenuse: 5 }, 0.6],
  ]
  for (const [check, exp] of cases) {
    try {
      const got = computeExpected(check)
      if (got.type !== 'value' || !numEqual(got.value, exp)) fails.push(`${check.kind}: got ${JSON.stringify(got)}, expected ${exp}`)
    } catch (e) { fails.push(`${check.kind}: raised ${e instanceof Error ? e.message : e}`) }
  }
  // category + negative cases
  try { const c = computeExpected({ kind: 'solution_count', lhs: '2*x + 3', rhs: '2*x + 5', variable: 'x' }); if (c.value !== 'none') fails.push(`solution_count none: got ${c.value}`) } catch (e) { fails.push(`solution_count none raised ${e}`) }
  try { const c = computeExpected({ kind: 'solution_count', lhs: '2*(x + 1)', rhs: '2*x + 2', variable: 'x' }); if (c.value !== 'infinite') fails.push(`solution_count infinite: got ${c.value}`) } catch (e) { fails.push(`solution_count infinite raised ${e}`) }
  return fails
}
