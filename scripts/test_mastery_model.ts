// Unit tests for the mastery model. PURE — no DB, deterministic clock.
// Run: node scripts/test_mastery_model.ts   (Node ≥23 strips TS types natively)
//
// The centerpiece is the negative test: "20 easy corrects" must NOT reach
// mastered — the exact fake-mastery hole the naive counter left open.

import { computeSkillMastery, type Band, type MasteryAttempt } from '../lib/mastery-model.ts'

const NOW = new Date('2026-07-17T00:00:00Z')
const daysAgo = (n: number) => new Date(NOW.getTime() - n * 86_400_000).toISOString()

let failures = 0
function check(name: string, cond: boolean, detail = '') {
  if (cond) {
    console.log(`  ✓ ${name}`)
  } else {
    console.log(`  ✗ ${name}  ${detail}`)
    failures++
  }
}

function attempts(specs: Array<[number, boolean, Band, number]>): MasteryAttempt[] {
  // [questionId, correct, band, daysAgo]
  return specs.map(([questionId, correct, band, d]) => ({ questionId, correct, band, ts: daysAgo(d) }))
}

// ── 1. THE NEGATIVE TEST: 20 easy corrects on distinct recent questions ──
{
  const a = attempts(Array.from({ length: 20 }, (_, i) => [i + 1, true, 'Easy', 1] as [number, boolean, Band, number]))
  const m = computeSkillMastery(a, NOW)
  console.log('\n[1] 20 distinct easy corrects (the fake-mastery attack):')
  check('score is high (all correct)', m.score > 0.99, `score=${m.score}`)
  check('but NOT mastered (only Easy band, no Hard, <2 bands)', m.mastered === false, `mastered=${m.mastered}`)
}

// ── 2. 20 easy corrects on the SAME question → 1 distinct rep ──
{
  const a = attempts(Array.from({ length: 20 }, () => [42, true, 'Easy', 1] as [number, boolean, Band, number]))
  const m = computeSkillMastery(a, NOW)
  console.log('\n[2] 20 easy corrects on ONE question:')
  check('distinctCorrectReps === 1', m.distinctCorrectReps === 1, `reps=${m.distinctCorrectReps}`)
  check('NOT mastered (fails rep + band gate)', m.mastered === false)
}

// ── 3. POSITIVE: distinct recent corrects spanning Easy/Medium/Hard ──
{
  const a = attempts([
    [1, true, 'Easy', 2], [2, true, 'Easy', 3],
    [3, true, 'Medium', 2], [4, true, 'Medium', 4],
    [5, true, 'Hard', 1], [6, true, 'Hard', 5],
  ])
  const m = computeSkillMastery(a, NOW)
  console.log('\n[3] 6 distinct recent corrects across all three bands:')
  check('score ≥ 0.85', m.score >= 0.85, `score=${m.score}`)
  check('reps ≥ 4', m.distinctCorrectReps >= 4, `reps=${m.distinctCorrectReps}`)
  check('≥2 bands incl Hard', m.bandsCorrect.length >= 2 && m.bandsCorrect.includes('Hard'), `bands=${m.bandsCorrect}`)
  check('MASTERED === true', m.mastered === true)
}

// ── 4. ACCURACY GATE: reps + bands present, but recent Hard misses drag score < 0.85 ──
{
  const a = attempts([
    [1, true, 'Easy', 40], [2, true, 'Medium', 38], [3, true, 'Hard', 41], [4, true, 'Hard', 39],
    // recent Hard misses dominate via recency weighting
    [5, false, 'Hard', 1], [6, false, 'Hard', 1], [7, false, 'Hard', 2], [8, false, 'Medium', 1],
  ])
  const m = computeSkillMastery(a, NOW)
  console.log('\n[4] Has reps+bands but recent misses:')
  check('score < 0.85 (recency-weighted misses)', m.score < 0.85, `score=${m.score.toFixed(3)}`)
  check('NOT mastered', m.mastered === false)
}

// ── 5. RECENCY WINDOW: strong history but all > 90 days old ──
{
  const a = attempts([
    [1, true, 'Easy', 200], [2, true, 'Medium', 210], [3, true, 'Hard', 205], [4, true, 'Hard', 220], [5, true, 'Medium', 215],
  ])
  const m = computeSkillMastery(a, NOW)
  console.log('\n[5] Strong but stale (>90d) history:')
  check('distinctCorrectReps === 0 (outside window)', m.distinctCorrectReps === 0, `reps=${m.distinctCorrectReps}`)
  check('NOT mastered', m.mastered === false)
}

// ── 6. MINIMUM PASSING GATE: exactly 4 distinct corrects, 2 bands incl Hard, recent ──
{
  const a = attempts([
    [1, true, 'Easy', 3], [2, true, 'Easy', 2], [3, true, 'Hard', 1], [4, true, 'Hard', 4],
  ])
  const m = computeSkillMastery(a, NOW)
  console.log('\n[6] Exactly-minimum gate (4 reps, Easy+Hard):')
  check('MASTERED === true', m.mastered === true, `reps=${m.distinctCorrectReps} bands=${m.bandsCorrect} score=${m.score}`)
}

console.log(`\n${failures === 0 ? '✅ all mastery-model tests passed' : `❌ ${failures} assertion(s) failed`}`)
process.exit(failures === 0 ? 0 : 1)
