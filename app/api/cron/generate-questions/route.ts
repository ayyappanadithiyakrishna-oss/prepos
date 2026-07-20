import { NextResponse } from 'next/server'
import { runGenerationPipeline } from '@/lib/sat-generate/pipeline'
import { hasGeminiKey } from '@/lib/sat-generate/llm-client'

// Real-time top-up only — a lightweight safety net for bank exhaustion (small
// batch, 1 target, fits the 9s Hobby limit). BULK nightly generation is handled
// by GitHub Actions (scripts/generate.ts, batch 20, all thin banks). The
// on-demand mid-session top-up when a student empties a bank lives in
// /api/sat/generate-now. Node runtime required (@vercel/postgres + TS verifier).
// Schedule/purpose can't be commented in vercel.json (JSON) — documented here.
export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'
export const maxDuration = 9

export async function GET(request: Request) {
  // Vercel Cron sends `Authorization: Bearer <CRON_SECRET>` when CRON_SECRET is
  // set. Reject anything else so the endpoint can't be triggered by randoms.
  const secret = process.env.CRON_SECRET
  const auth = request.headers.get('authorization')
  if (secret && auth !== `Bearer ${secret}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  if (!hasGeminiKey()) {
    return NextResponse.json({ skipped: true, reason: 'GROQ_API_KEY not set' }, { status: 200 })
  }

  try {
    const reports = await runGenerationPipeline()
    const summary = {
      timestamp: new Date().toISOString(),
      targetsRun: reports.length,
      totalGenerated: reports.reduce((s, r) => s + r.generated, 0),
      totalPassed: reports.reduce((s, r) => s + r.passed, 0),
      totalInserted: reports.reduce((s, r) => s + r.insertedIds.length, 0),
      flagged: reports.filter((r) => r.flagged).map((r) => ({ subSkill: r.subSkill, difficulty: r.difficulty, passRate: r.passRate })),
      details: reports,
    }
    console.log('[cron:generate] complete', JSON.stringify({ ...summary, details: undefined }))
    return NextResponse.json(summary)
  } catch (error) {
    console.error('[cron:generate] failed', error)
    return NextResponse.json({ error: String(error) }, { status: 500 })
  }
}
