import { VERIFIED_SCHEMA_EXCERPT } from './schema-excerpt'
import type { SATDomain, Difficulty } from '../sat-practice/verified-schema'

export type GenerationParams = {
  subSkill: string // EXACT DB sub_skill string, e.g. "Linear inequalities in one and two variables"
  domain: SATDomain
  difficulty: Difficulty
  count: number
  existingExternalIds: string[]
  scoreBandContext: string // e.g. "470-540"
  idPrefix: string // e.g. "alg-lineq" -> ids like alg-lineq-e1
}

export function buildGenerationPrompt(p: GenerationParams): string {
  const letter = p.difficulty === 'Easy' ? 'e' : p.difficulty === 'Medium' ? 'm' : 'h'
  return `You are a senior Digital SAT Math item writer. Write ${p.count} ORIGINAL, high-quality questions.

TARGET
- Sub-skill: ${p.subSkill}
- Domain: ${p.domain}
- Difficulty: ${p.difficulty}
- Score band: ${p.scoreBandContext}

DIFFICULTY CALIBRATION
- Easy: a student at 470–540 solves it in one clean step. Real context, single operation, one avoidable trap.
- Medium: needs two steps and avoiding one trap. Embedded in a word problem, table, or scenario — never naked "solve for x".
- Hard: multi-step reasoning where the setup is disguised; the student must first model the situation, then solve.

WHAT MAKES THESE GOOD (non-negotiable)
1. ORIGINAL. Never reproduce or lightly paraphrase a real College Board item. Write from scratch.
2. REAL-WORLD CONTEXT. The Digital SAT embeds math in scenarios: a catering bill, a lab measurement, a phone plan, a road trip, ticket sales, a recipe scaled up. Vary the scenario across the batch — do not reuse the same story.
3. THE CHECK MUST MATCH THE STEM. The numbers in "check" MUST be the exact numbers in the question, so that re-deriving the answer from "check" reproduces the keyed answer. An automated verifier recomputes every answer from "check" and rejects the whole item if it disagrees — so a mismatch wastes the item.
4. NAMED TRAPS. Every distractor names the SPECIFIC misconception a student who picks it made, in snake_case. Good: "sign_flip_on_negative_multiply", "used_diameter_instead_of_radius", "solved_for_x_not_y", "ignored_setup_fee". Bad: "wrong", "distractor", "miscalculation". The CORRECT choice has NO trap field. Every one of the other three choices has a trap.
5. HELPFUL EXPLANATION. "explanation" is an array of short step strings a struggling student can follow — show the reasoning, not just the arithmetic.
6. calculatorStrategy starts with one of: solve_algebraically | use_desmos_graph | use_desmos_table | either — then a dash and a one-sentence reason.

FORMAT RULES
- MC: type "mc", exactly 4 choices labelled "A","B","C","D" in order; "answer" is the correct label. Exactly ONE choice is correct.
- SPR (student-produced response): type "spr", NO choices field, "answer" is the numeric answer as a plain string.
- Every "value" (on choices) and every SPR "answer" is a PLAIN arithmetic string: an integer, decimal, or fraction like "11/2". No "$", no units, no words, no "%".
- Use ONLY these check kinds, with these EXACT field names. In every expression use * for multiply, / for divide, ^ for power; single-letter variables; and write the expression that EQUALS ZERO at the answer (do not include "= 0"):
  - solve_linear: { "kind":"solve_linear", "expression":"3 + 2*h - 11", "variable":"h" }   // one linear solution
  - evaluate:     { "kind":"evaluate", "expression":"75 + 50*3" }                            // closed-form value
  - solution_count: { "kind":"solution_count", "lhs":"2*x + 3", "rhs":"2*x + 5", "variable":"x" }  // reach for this when the answer IS the number of solutions — e.g. absolute-value or linear-inequality "how many solutions does this equation have" items. Verifier classifies lhs vs rhs -> one|none|infinite; the item's "answer" must be that exact word for spr, or the matching choice "value" ("one"|"none"|"infinite") for mc. There is NO separate "expected" field — the category lives in the answer/choice value.
  - system_linear: { "kind":"system_linear", "equations":["2*x + y - 10", "x - y - 2"], "variables":["x","y"], "target":"x + y" }
- For this sub-skill and domain, use solve_linear / evaluate / system_linear / solution_count. Do not use geometry or trig checks.

EXTERNAL IDS
- Pattern: ${p.idPrefix}-${letter}<number>, e.g. ${p.idPrefix}-${letter}1, ${p.idPrefix}-${letter}2.
- Do NOT reuse any of these existing ids: ${p.existingExternalIds.join(', ') || '(none)'}

SCHEMA — return a JSON OBJECT of the form {"questions": [ ... ]}, where each element of the "questions" array EXACTLY matches this shape (same field names and shapes):
${VERIFIED_SCHEMA_EXCERPT}

Return ONLY the JSON object. No prose, no markdown fences. Start with { and end with }. The "questions" array must contain exactly ${p.count} items.`
}
