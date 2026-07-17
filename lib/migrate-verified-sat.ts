// ─────────────────────────────────────────────────────────────────────────────
// Migration + loader: verified SAT problems (JSON) -> Postgres `questions`.
//
// Adds the master-prompt tag columns the base schema lacked, then upserts each
// verified problem (idempotent, keyed by external_id). The per-distractor traps
// ride along inside the `choices` JSON so the Error Log can surface the exact
// trap a student fell for. Safe to run repeatedly — additive DDL only, no drops.
// ─────────────────────────────────────────────────────────────────────────────

import { sql } from '@vercel/postgres'
import type { VerifiedLesson, VerifiedProblem } from './sat-practice/verified-schema'
import algebraLinearOneVar from './sat-practice/data/algebra-linear-one-variable.json'
import algebraSystemsTwoLinear from './sat-practice/data/algebra-systems-two-linear.json'
import algebraLinearFunctions from './sat-practice/data/algebra-linear-functions.json'

const VERIFIED_LESSONS: VerifiedLesson[] = [
  algebraLinearOneVar as VerifiedLesson,
  algebraSystemsTwoLinear as VerifiedLesson,
  algebraLinearFunctions as VerifiedLesson,
]

const BAND_TO_INT: Record<string, number> = { Easy: 1, Medium: 2, Hard: 3 }

/** Total verified problems across all lessons — used by the seed guard so it
 *  re-seeds when new verticals are added, without a magic number. */
export const VERIFIED_PROBLEM_COUNT = VERIFIED_LESSONS.reduce(
  (n, l) => n + l.problems.length,
  0,
)

/** Additive, idempotent column adds on questions + errors. */
export async function migrateVerifiedSatColumns(): Promise<void> {
  await sql`ALTER TABLE questions ADD COLUMN IF NOT EXISTS external_id TEXT`
  await sql`ALTER TABLE questions ADD COLUMN IF NOT EXISTS domain TEXT`
  await sql`ALTER TABLE questions ADD COLUMN IF NOT EXISTS sub_skill TEXT`
  await sql`ALTER TABLE questions ADD COLUMN IF NOT EXISTS difficulty_band TEXT`
  await sql`ALTER TABLE questions ADD COLUMN IF NOT EXISTS calculator_strategy TEXT`
  await sql`ALTER TABLE questions ADD COLUMN IF NOT EXISTS verified BOOLEAN DEFAULT FALSE`
  // Plain unique index enables ON CONFLICT upsert by external_id. Not partial:
  // ON CONFLICT can't infer from a partial index. Postgres treats NULLs as
  // distinct, so the pre-existing external_id-less rows coexist fine.
  await sql`DROP INDEX IF EXISTS questions_external_id_uidx`
  await sql`CREATE UNIQUE INDEX IF NOT EXISTS questions_external_id_uidx ON questions (external_id)`

  // Error Log carries the trap + tags denormalized, captured at miss time.
  await sql`ALTER TABLE errors ADD COLUMN IF NOT EXISTS sub_skill TEXT`
  await sql`ALTER TABLE errors ADD COLUMN IF NOT EXISTS domain TEXT`
  await sql`ALTER TABLE errors ADD COLUMN IF NOT EXISTS difficulty_band TEXT`
  await sql`ALTER TABLE errors ADD COLUMN IF NOT EXISTS trap TEXT`

  // Structural test isolation: attempts under an is_test session are excluded
  // from all mastery/stats computation, so testing the answer loop can never
  // pollute a real learner's numbers (see the 2026-07-17 incident).
  await sql`ALTER TABLE sessions ADD COLUMN IF NOT EXISTS is_test BOOLEAN DEFAULT FALSE`
}

async function topicIdForDomain(domain: string): Promise<number | null> {
  // SAT domain names map to seeded sat_math topic rows; Geometry topic is
  // seeded as 'Geometry', so accept both the full and short name.
  const { rows } = await sql`
    SELECT id FROM topics
    WHERE subject = 'sat_math' AND (name = ${domain} OR ${domain} LIKE name || '%')
    ORDER BY id LIMIT 1
  `
  return rows[0]?.id ?? null
}

/** Upsert every verified problem. Returns the number processed. */
export async function seedVerifiedSat(): Promise<number> {
  await migrateVerifiedSatColumns()
  let n = 0
  for (const lesson of VERIFIED_LESSONS) {
    const topicId = await topicIdForDomain(lesson.domain)
    for (const p of lesson.problems) {
      await upsertProblem(p, topicId)
      n++
    }
  }
  return n
}

async function upsertProblem(p: VerifiedProblem, topicId: number | null): Promise<void> {
  // Store the rich choices (text + canonical value + trap) as JSON for MC;
  // null for SPR. Explanation steps join into the existing TEXT column.
  const choicesJson = p.type === 'mc' && p.choices ? JSON.stringify(p.choices) : null
  const explanation = p.explanation.join('\n')
  const difficultyInt = BAND_TO_INT[p.difficulty] ?? 1

  await sql`
    INSERT INTO questions
      (external_id, subject, topic_id, question_text, answer_text, choices,
       difficulty, difficulty_band, explanation, domain, sub_skill,
       calculator_strategy, verified)
    VALUES
      (${p.id}, 'sat_math', ${topicId}, ${p.question}, ${p.answer}, ${choicesJson},
       ${difficultyInt}, ${p.difficulty}, ${explanation}, ${p.domain}, ${p.subSkill},
       ${p.calculatorStrategy}, TRUE)
    ON CONFLICT (external_id) DO UPDATE SET
      question_text = EXCLUDED.question_text,
      answer_text = EXCLUDED.answer_text,
      choices = EXCLUDED.choices,
      difficulty = EXCLUDED.difficulty,
      difficulty_band = EXCLUDED.difficulty_band,
      explanation = EXCLUDED.explanation,
      domain = EXCLUDED.domain,
      sub_skill = EXCLUDED.sub_skill,
      calculator_strategy = EXCLUDED.calculator_strategy,
      verified = TRUE
  `
}
