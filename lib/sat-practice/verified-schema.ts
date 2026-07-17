// ─────────────────────────────────────────────────────────────────────────────
// Verified SAT problem schema
//
// Extends the existing SATTopic / LessonContent model with the fields the
// master-prompt requires but the old shape lacked:
//   • per-distractor named TRAP (the misconception each wrong answer catches)
//   • a Desmos / calculator-strategy note
//   • independent domain / subSkill / difficulty tags on every problem
//     (so Error Log, Mastery, and Diagnostics can consume a problem in isolation)
//   • a machine-checkable `check` spec + canonical `value` on each choice, so
//     scripts/verify_answers.py can re-derive the answer with sympy and prove
//     the answer key before anything ships (master-prompt rule #3).
//
// Problems are authored as JSON (data-driven — rule #5) under ./data and loaded
// through this typed surface. The Python verifier reads the same JSON.
// ─────────────────────────────────────────────────────────────────────────────

export type SATDomain =
  | 'Algebra'
  | 'Advanced Math'
  | 'Problem Solving & Data Analysis'
  | 'Geometry & Trigonometry'

export type Difficulty = 'Easy' | 'Medium' | 'Hard'
export type QuestionType = 'mc' | 'spr'

/** A multiple-choice option. `value` is the canonical machine-comparable answer
 *  (a sympy-parseable string, e.g. "11/2"); `trap` names the misconception a
 *  wrong option targets and is omitted on the correct option. */
export interface Choice {
  label: 'A' | 'B' | 'C' | 'D'
  text: string
  value: string
  trap?: string
}

/** Declarative, machine-checkable specification of the correct answer. The
 *  verifier recomputes from this independently of the authored answer key. */
export type ProblemCheck =
  /** Solve `expression` = 0 for `variable`; the single real solution is the answer. */
  | { kind: 'solve_linear'; expression: string; variable: string }
  /** Classify solutions of lhs = rhs: 'one' | 'none' | 'infinite'. */
  | { kind: 'solution_count'; lhs: string; rhs: string; variable: string }
  /** Evaluate a closed-form numeric `expression`. */
  | { kind: 'evaluate'; expression: string }

export interface VerifiedProblem {
  id: string
  domain: SATDomain
  subSkill: string
  difficulty: Difficulty
  type: QuestionType
  /** College Board Skills-Insight score band this item is calibrated to. */
  scoreBand: string
  question: string
  /** Present for `mc`; omitted for `spr`. */
  choices?: Choice[]
  /** 'A'|'B'|'C'|'D' for mc; canonical numeric string for spr. */
  answer: string
  explanation: string[]
  /** When to lean on Desmos vs. solve by hand. */
  calculatorStrategy: string
  check: ProblemCheck
}

export interface VerifiedLesson {
  id: string
  domain: SATDomain
  subSkill: string
  lessonNumber: string
  title: string
  /** Written for a student who has never seen this skill — the "why", not just steps. */
  concept: string
  workedExamples: Array<{ problem: string; steps: string[]; answer: string }>
  /** The SAT's specific trap patterns for this skill, named explicitly. */
  trapPatterns: string[]
  calculatorStrategy: string
  problems: VerifiedProblem[]
}

/** Difficulty ladder helper for the practice-set builder / Mastery model. */
export const DIFFICULTY_ORDER: Record<Difficulty, number> = {
  Easy: 0,
  Medium: 1,
  Hard: 2,
}
