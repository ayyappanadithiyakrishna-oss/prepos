// DB-facing mastery layer: pulls attempt rows and runs them through the pure
// model (lib/mastery-model.ts). Excludes is_test sessions by construction, so
// testing the answer loop cannot affect real mastery.

import { sql } from '@vercel/postgres'
import {
  computeSkillMastery,
  type Band,
  type MasteryAttempt,
  type SkillMastery,
} from './mastery-model'

export interface SkillMasteryRow extends SkillMastery {
  subSkill: string
  domain: string
}

/** Per-sub-skill mastery for all verified content, computed from real
 *  (non-test) attempts. This is the source of truth — no +5/−3 counter. */
export async function getSkillMasteries(now: Date = new Date()): Promise<SkillMasteryRow[]> {
  const bySkill = new Map<string, { domain: string; attempts: MasteryAttempt[] }>()

  // Seed every verified sub-skill so unattempted ones still appear (score 0),
  // giving the Mastery dashboard a complete list rather than only-practiced ones.
  const { rows: skillRows } = await sql`
    SELECT DISTINCT sub_skill, domain FROM questions
    WHERE verified = TRUE AND sub_skill IS NOT NULL
  `
  for (const r of skillRows) {
    bySkill.set(r.sub_skill as string, { domain: r.domain as string, attempts: [] })
  }

  const { rows } = await sql`
    SELECT q.sub_skill, q.domain, a.question_id, a.is_correct,
           q.difficulty_band, a.attempted_at
    FROM attempts a
    JOIN questions q ON q.id = a.question_id
    JOIN sessions  s ON s.id = a.session_id
    WHERE q.verified = TRUE AND q.sub_skill IS NOT NULL AND s.is_test = FALSE
  `
  for (const r of rows) {
    const key = r.sub_skill as string
    if (!bySkill.has(key)) bySkill.set(key, { domain: r.domain as string, attempts: [] })
    bySkill.get(key)!.attempts.push({
      questionId: Number(r.question_id),
      correct: r.is_correct === 1 || r.is_correct === true,
      band: (r.difficulty_band as Band) ?? 'Medium',
      ts: r.attempted_at as string,
    })
  }
  const out: SkillMasteryRow[] = []
  for (const [subSkill, { domain, attempts }] of bySkill) {
    out.push({ subSkill, domain, ...computeSkillMastery(attempts, now) })
  }
  return out.sort((a, b) => a.subSkill.localeCompare(b.subSkill))
}

// NOTE: intentionally no "roll verified mastery up into topics.mastery_pct".
// A topic's mastery_pct also reflects legacy (pre-sub-skill) practice on older
// questions; overwriting it with a verified-content-only mean would wipe that
// real signal. Per-sub-skill mastery is the source of truth for verified
// content and is exposed separately via getSkillMasteries().
