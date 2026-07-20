/**
 * Bulk nightly generation — runs on GitHub Actions (not Vercel).
 *
 * Unlike the Vercel cron (1 sub-skill, 6 questions, bound by the 9s function
 * limit), GitHub Actions has no such ceiling, so this fills EVERY (sub-skill,
 * difficulty) bank that is below GITHUB_THRESHOLD, requesting GITHUB_BATCH_SIZE
 * questions per bank. pipeline.ts keeps its own BATCH_SIZE=6 for Vercel; the two
 * contexts never share a limit — this passes its values in explicitly.
 *
 * Exit 1 if nothing was inserted (so the Actions run goes red), 0 otherwise.
 */
import { runGenerationPipeline } from '../lib/sat-generate/pipeline'

const GITHUB_BATCH_SIZE = 20 // questions requested per bank (vs. 6 on Vercel)
const GITHUB_THRESHOLD = 20 // top up any bank holding fewer than this

async function main(): Promise<void> {
  const started = Date.now()
  const reports = await runGenerationPipeline({
    batchSize: GITHUB_BATCH_SIZE,
    threshold: GITHUB_THRESHOLD,
    maxTargets: Number.MAX_SAFE_INTEGER, // no cap — process every thin bank
  })

  let totalInserted = 0
  for (const r of reports) {
    totalInserted += r.insertedIds.length
    console.log(
      `${r.subSkill} ${r.difficulty}: ${r.passed}/${r.generated} passed, ${r.insertedIds.length} inserted` +
        (r.failureReasons.length ? ` | first failure: ${r.failureReasons[0]}` : ''),
    )
  }

  const runtimeS = ((Date.now() - started) / 1000).toFixed(1)
  console.log(
    `\nBulk generation complete: ${reports.length} bank(s) processed, ` +
      `${totalInserted} question(s) inserted in ${runtimeS}s.`,
  )

  if (totalInserted === 0) {
    console.error('No questions inserted — failing the run.')
    process.exit(1)
  }
  process.exit(0)
}

main().catch((err) => {
  console.error('generate failed:', err instanceof Error ? err.message : err)
  process.exit(1)
})
