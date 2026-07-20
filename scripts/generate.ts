/**
 * Bulk nightly generation — runs on GitHub Actions (not Vercel).
 *
 * Unlike the Vercel cron (1 sub-skill, 6 questions, bound by the 9s function
 * limit), GitHub Actions has no such ceiling, so this fills every (sub-skill,
 * difficulty) bank below GITHUB_THRESHOLD, requesting GITHUB_BATCH_SIZE questions
 * per bank. pipeline.ts keeps its own BATCH_SIZE=6 for Vercel; the two contexts
 * never share a limit — this passes its values in explicitly.
 *
 * Exit codes:
 *   0 — questions inserted, OR no thin banks to fill (nothing needed).
 *   1 — a Groq call errored or a DB insert failed.
 */
import { runGenerationPipeline } from '../lib/sat-generate/pipeline'
import type { Difficulty } from '../lib/sat-practice/verified-schema'

const GITHUB_BATCH_SIZE = 12 // questions requested per bank (vs. 6 on Vercel)
const GITHUB_THRESHOLD = 20 // top up any bank holding fewer than this
const GITHUB_PAUSE_MS = 60000 // ~1 request/minute so the run stays under 12k TPM
const BULK_DIFFICULTIES: Difficulty[] = ['Easy', 'Medium']
// Hard excluded: 70B pass rate too low (<10%) — the verifier rejects nearly all
// of them, so generating Hard just burns the daily token budget.
// Re-enable when switching to Claude Haiku. Hard bands need a stronger model.
// Enable after August diagnostic.

async function main(): Promise<void> {
  const started = Date.now()
  const reports = await runGenerationPipeline({
    batchSize: GITHUB_BATCH_SIZE,
    threshold: GITHUB_THRESHOLD,
    pauseMs: GITHUB_PAUSE_MS,
    difficulties: BULK_DIFFICULTIES,
    maxTargets: Number.MAX_SAFE_INTEGER, // no cap — process every thin bank
  })

  let totalInserted = 0
  let groqErrors = 0
  let dbErrors = 0
  for (const r of reports) {
    totalInserted += r.insertedIds.length
    for (const reason of r.failureReasons) {
      if (reason.startsWith('gemini/parse error')) groqErrors++
      else if (reason.startsWith('insert ')) dbErrors++
    }
    console.log(
      `${r.subSkill} ${r.difficulty}: ${r.passed}/${r.generated} passed, ${r.insertedIds.length} inserted` +
        (r.failureReasons.length ? ` | first failure: ${r.failureReasons[0]}` : ''),
    )
  }

  const runtimeS = ((Date.now() - started) / 1000).toFixed(1)

  // Nothing to do — every scanned bank was already at/above the threshold.
  if (reports.length === 0) {
    console.log('No thin banks found — all sub-skills have ≥ 20 questions (Easy/Medium).')
    process.exit(0)
  }

  // Fail ONLY on a real error: a Groq call threw, or a DB insert failed. A bank
  // that generated but whose questions all failed verification is not an error —
  // the gate did its job — so it does not fail the run.
  if (groqErrors > 0 || dbErrors > 0) {
    console.error(
      `Generation error: ${groqErrors} Groq call failure(s), ${dbErrors} insert failure(s) ` +
        `across ${reports.length} bank(s) — failing the run.`,
    )
    process.exit(1)
  }

  console.log(
    `Generation complete: ${reports.length} bank(s) processed, ` +
      `${totalInserted} question(s) inserted in ${runtimeS}s.`,
  )
  process.exit(0)
}

main().catch((err) => {
  console.error('generate failed:', err instanceof Error ? err.message : err)
  process.exit(1)
})
