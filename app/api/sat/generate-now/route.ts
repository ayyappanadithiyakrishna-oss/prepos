import { NextResponse } from 'next/server'
import { getUserId } from '@/lib/require-auth'
import { runGenerationPipeline } from '@/lib/sat-generate/pipeline'
import { hasGeminiKey } from '@/lib/sat-generate/gemini-client'
import type { Difficulty } from '@/lib/sat-practice/verified-schema'

// On-demand top-up when a student exhausts a bank mid-session. Awaited (Vercel
// kills background work after the response), so it returns once the fresh,
// verified questions have landed — usually ~15–30s.
export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'
export const maxDuration = 9

const DIFFS = ['Easy', 'Medium', 'Hard']

export async function POST(request: Request) {
  const userId = await getUserId()
  if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  if (!hasGeminiKey()) {
    return NextResponse.json({ error: 'Generation is not configured yet.' }, { status: 503 })
  }

  let body: { subSkill?: unknown; difficulty?: unknown }
  try { body = await request.json() } catch { body = {} }
  const subSkill = typeof body.subSkill === 'string' ? body.subSkill : undefined
  const difficulty = typeof body.difficulty === 'string' && DIFFS.includes(body.difficulty) ? (body.difficulty as Difficulty) : undefined

  try {
    const reports = await runGenerationPipeline(
      subSkill && difficulty ? { only: { subSkill, difficulty }, force: true, maxTargets: 1 } : { maxTargets: 1 },
    )
    const inserted = reports.reduce((s, r) => s + r.insertedIds.length, 0)
    return NextResponse.json({
      inserted,
      message: inserted > 0 ? `${inserted} new questions are ready.` : 'No new questions passed verification this time — try again shortly.',
    })
  } catch (error) {
    console.error('[generate-now] failed', error)
    return NextResponse.json({ error: String(error) }, { status: 500 })
  }
}
