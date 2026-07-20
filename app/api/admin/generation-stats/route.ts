import { NextResponse } from 'next/server'
import { sql } from '@vercel/postgres'
import { auth } from '@/lib/auth'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

// Only these accounts can read generation quality data.
const ADMIN_EMAILS = new Set([
  'ayyappan.adithiyakrishna@gmail.com',
  'ayyappanpreeya@gmail.com',
])

export async function GET() {
  const session = await auth()
  const email = session?.user?.email?.toLowerCase()
  if (!email || !ADMIN_EMAILS.has(email)) {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
  }

  const [recent, byDay, banks] = await Promise.all([
    sql`SELECT run_at, sub_skill, difficulty, generated, passed, failed, pass_rate, flagged, failure_reasons
        FROM generation_log ORDER BY run_at DESC LIMIT 50`,
    sql`SELECT DATE(run_at) AS day, SUM(generated)::int AS generated, SUM(passed)::int AS passed,
               ROUND(AVG(pass_rate), 3) AS avg_pass_rate, BOOL_OR(flagged) AS any_flagged
        FROM generation_log GROUP BY DATE(run_at) ORDER BY day DESC LIMIT 30`,
    sql`SELECT sub_skill, difficulty_band, COUNT(*)::int AS n
        FROM questions WHERE verified = TRUE AND subject = 'sat_math'
        GROUP BY sub_skill, difficulty_band ORDER BY sub_skill, difficulty_band`,
  ])

  const overall = await sql`
    SELECT COUNT(*)::int AS runs, COALESCE(SUM(generated),0)::int AS generated,
           COALESCE(SUM(passed),0)::int AS passed, ROUND(AVG(pass_rate), 3) AS avg_pass_rate
    FROM generation_log`

  return NextResponse.json({
    overall: overall.rows[0],
    recentRuns: recent.rows,
    byDay: byDay.rows,
    bankSizes: banks.rows,
    hint: 'If avg_pass_rate trends below 0.6, tighten the generation prompt.',
  })
}
