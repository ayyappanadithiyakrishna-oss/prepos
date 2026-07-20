// Strict runtime validation of model output BEFORE it reaches the math verifier.
// Rejects anything structurally malformed so the verifier only ever sees
// well-formed VerifiedProblem objects (and never throws on garbage).
import type { VerifiedProblem, ProblemCheck, Choice, SATDomain, Difficulty } from '../sat-practice/verified-schema'

const DOMAINS: SATDomain[] = ['Algebra', 'Advanced Math', 'Problem Solving & Data Analysis', 'Geometry & Trigonometry']
const DIFFS: Difficulty[] = ['Easy', 'Medium', 'Hard']
const CHECK_KINDS = ['solve_linear', 'solution_count', 'evaluate', 'system_linear', 'geometry_ratio', 'trig_evaluate']
const LABELS = ['A', 'B', 'C', 'D']

const isStr = (v: unknown): v is string => typeof v === 'string' && v.length > 0

function validateCheck(c: unknown): string | null {
  if (!c || typeof c !== 'object') return 'check missing'
  const k = (c as { kind?: string }).kind
  if (!k || !CHECK_KINDS.includes(k)) return `check.kind invalid: ${k}`
  const o = c as Record<string, unknown>
  switch (k) {
    case 'solve_linear': return isStr(o.expression) && isStr(o.variable) ? null : 'solve_linear needs expression+variable'
    case 'evaluate': return isStr(o.expression) ? null : 'evaluate needs expression'
    case 'solution_count': return isStr(o.lhs) && isStr(o.rhs) && isStr(o.variable) ? null : 'solution_count needs lhs+rhs+variable'
    case 'system_linear': return Array.isArray(o.equations) && o.equations.length === 2 && o.equations.every(isStr) && Array.isArray(o.variables) && o.variables.length === 2 && o.variables.every(isStr) && isStr(o.target) ? null : 'system_linear needs 2 equations, 2 variables, target'
    case 'geometry_ratio': return isStr(o.ratio1) && isStr(o.ratio2) && isStr(o.variable) ? null : 'geometry_ratio needs ratio1+ratio2+variable'
    case 'trig_evaluate': return isStr(o.func) ? null : 'trig_evaluate needs func'
    default: return `unhandled kind ${k}`
  }
}

function validateChoices(raw: unknown): string | null {
  if (!Array.isArray(raw) || raw.length !== 4) return 'mc needs exactly 4 choices'
  for (let i = 0; i < 4; i++) {
    const c = raw[i] as Record<string, unknown>
    if (!c || typeof c !== 'object') return `choice ${i} not an object`
    if (c.label !== LABELS[i]) return `choice ${i} label must be ${LABELS[i]}, got ${c.label}`
    if (!isStr(c.text)) return `choice ${c.label} missing text`
    if (!isStr(c.value)) return `choice ${c.label} missing value (arithmetic string)`
    if (c.trap != null && typeof c.trap !== 'string') return `choice ${c.label} trap must be a string`
  }
  return null
}

/** Returns a typed VerifiedProblem or an error string. Does NOT check the math
 *  (that's verify.ts) — only shape/tags, and that the answer references a real
 *  choice for mc. */
export function validateGenerated(raw: unknown, opts?: { expectSubSkill?: string; expectDifficulty?: Difficulty; expectDomain?: SATDomain }): { problem?: VerifiedProblem; error?: string } {
  if (!raw || typeof raw !== 'object') return { error: 'not an object' }
  const r = raw as Record<string, unknown>
  if (!isStr(r.id)) return { error: 'missing id' }
  if (!DOMAINS.includes(r.domain as SATDomain)) return { error: `${r.id}: invalid domain ${r.domain}` }
  if (!isStr(r.subSkill)) return { error: `${r.id}: missing subSkill` }
  if (!DIFFS.includes(r.difficulty as Difficulty)) return { error: `${r.id}: invalid difficulty ${r.difficulty}` }
  if (r.type !== 'mc' && r.type !== 'spr') return { error: `${r.id}: invalid type ${r.type}` }
  if (!isStr(r.question)) return { error: `${r.id}: missing question` }
  if (!isStr(r.answer)) return { error: `${r.id}: missing answer` }
  if (!isStr(r.calculatorStrategy)) return { error: `${r.id}: missing calculatorStrategy` }
  // explanation may arrive as string or string[] — normalize to string[].
  const explanation = Array.isArray(r.explanation) ? r.explanation.filter(isStr) : isStr(r.explanation) ? [r.explanation] : []
  if (explanation.length === 0) return { error: `${r.id}: missing explanation` }

  const checkErr = validateCheck(r.check)
  if (checkErr) return { error: `${r.id}: ${checkErr}` }

  // Keep generated content aligned to the requested target (so it lands in the
  // right bank / mastery bucket). Reject drift.
  if (opts?.expectSubSkill && r.subSkill !== opts.expectSubSkill) return { error: `${r.id}: subSkill drift "${r.subSkill}" != "${opts.expectSubSkill}"` }
  if (opts?.expectDifficulty && r.difficulty !== opts.expectDifficulty) return { error: `${r.id}: difficulty drift ${r.difficulty} != ${opts.expectDifficulty}` }
  if (opts?.expectDomain && r.domain !== opts.expectDomain) return { error: `${r.id}: domain drift ${r.domain} != ${opts.expectDomain}` }

  let choices: Choice[] | undefined
  if (r.type === 'mc') {
    const chErr = validateChoices(r.choices)
    if (chErr) return { error: `${r.id}: ${chErr}` }
    choices = r.choices as Choice[]
    if (!LABELS.includes(r.answer as string)) return { error: `${r.id}: mc answer must be A–D, got ${r.answer}` }
  }

  const problem: VerifiedProblem = {
    id: r.id, domain: r.domain as SATDomain, subSkill: r.subSkill, difficulty: r.difficulty as Difficulty,
    type: r.type, scoreBand: isStr(r.scoreBand) ? r.scoreBand : '470-540', question: r.question,
    choices, answer: r.answer, explanation, calculatorStrategy: r.calculatorStrategy, check: r.check as ProblemCheck,
  }
  return { problem }
}
