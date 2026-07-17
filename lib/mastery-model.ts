// ─────────────────────────────────────────────────────────────────────────────
// Mastery model — recency-weighted, difficulty-weighted, gated per sub-skill.
//
// Replaces the naive +5/−3 per-topic counter (which reported 100% mastery for
// 20 easy corrects). Spec: docs/sat-known-debt.md §1.
//
// PURE FUNCTION — no DB, no clock except the injectable `now`. This is what makes
// it unit-testable off production (see scripts/test_mastery_model.ts). The API
// layer feeds it attempt rows; it never reads or writes anything itself.
// ─────────────────────────────────────────────────────────────────────────────

export type Band = 'Easy' | 'Medium' | 'Hard'

export interface MasteryAttempt {
  questionId: number
  correct: boolean
  band: Band
  ts: string | Date
}

export interface SkillMastery {
  /** Recency- and difficulty-weighted accuracy, 0..1. */
  score: number
  /** Distinct questions answered correctly within the recency window. */
  distinctCorrectReps: number
  /** Difficulty bands with ≥1 correct answer in the window. */
  bandsCorrect: Band[]
  totalAttempts: number
  /** The gated "mastered" verdict — the anti-fake signal. */
  mastered: boolean
}

export const HALF_LIFE_DAYS = 14
export const RECENCY_WINDOW_DAYS = 90
export const DIFFICULTY_WEIGHT: Record<Band, number> = { Easy: 1.0, Medium: 1.6, Hard: 2.4 }

// "Mastered" gate — ALL must hold. This is what a pile of easy corrects can't fake.
export const MASTERY_SCORE_THRESHOLD = 0.85
export const MIN_DISTINCT_CORRECT_REPS = 4
export const MIN_DISTINCT_BANDS = 2
export const REQUIRE_HARD_BAND = true

const DAY_MS = 86_400_000

export function computeSkillMastery(
  attempts: MasteryAttempt[],
  now: Date = new Date(),
): SkillMastery {
  let weightSum = 0
  let weightedCorrect = 0
  const correctQuestionsInWindow = new Set<number>()
  const bandsCorrectInWindow = new Set<Band>()

  for (const a of attempts) {
    const ageDays = (now.getTime() - new Date(a.ts).getTime()) / DAY_MS
    const recency = Math.pow(0.5, Math.max(0, ageDays) / HALF_LIFE_DAYS)
    const w = recency * (DIFFICULTY_WEIGHT[a.band] ?? 1)
    weightSum += w
    weightedCorrect += w * (a.correct ? 1 : 0)
    if (a.correct && ageDays <= RECENCY_WINDOW_DAYS) {
      correctQuestionsInWindow.add(a.questionId)
      bandsCorrectInWindow.add(a.band)
    }
  }

  const score = weightSum > 0 ? weightedCorrect / weightSum : 0
  const distinctCorrectReps = correctQuestionsInWindow.size
  const bandsCorrect = [...bandsCorrectInWindow]

  const mastered =
    score >= MASTERY_SCORE_THRESHOLD &&
    distinctCorrectReps >= MIN_DISTINCT_CORRECT_REPS &&
    bandsCorrect.length >= MIN_DISTINCT_BANDS &&
    (!REQUIRE_HARD_BAND || bandsCorrect.includes('Hard'))

  return { score, distinctCorrectReps, bandsCorrect, totalAttempts: attempts.length, mastered }
}

/** Round a 0..1 score to a 0..100 integer for display / the legacy mastery_pct column. */
export function scoreToPct(score: number): number {
  return Math.round(score * 100)
}
