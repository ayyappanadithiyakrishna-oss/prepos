import { NextResponse } from 'next/server'
import { sql } from '@vercel/postgres'
import { ensureSeeded } from '@/lib/ensure-seeded'

function formatDate(isoDate: string): string {
  const d = new Date(isoDate + 'T00:00:00Z')
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', timeZone: 'UTC' })
}

function computeLongestStreak(dates: string[]): number {
  const sorted = [...dates].sort()
  let best = 0
  let cur = 0
  let prev = ''
  for (const d of sorted) {
    if (prev) {
      const diff = (new Date(d).getTime() - new Date(prev).getTime()) / 86400000
      cur = diff === 1 ? cur + 1 : 1
    } else {
      cur = 1
    }
    if (cur > best) best = cur
    prev = d
  }
  return best
}

export async function GET() {
  try {
    await ensureSeeded()
    const thirtyDaysAgo = new Date()
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30)
    const cutoff = thirtyDaysAgo.toISOString().slice(0, 10)

    const [dailyRows, topicRows, streakRows, totalRow, weakRows, strongRows] = await Promise.all([
      sql`
        SELECT DATE(attempted_at) as date,
               SUM(is_correct) as correct,
               COUNT(*) as total
        FROM attempts
        WHERE attempted_at >= ${cutoff}
        GROUP BY DATE(attempted_at)
        ORDER BY date ASC
      `,
      sql`SELECT id, name, subject, mastery_pct FROM topics ORDER BY subject, name`,
      sql`SELECT date, problems_solved FROM streaks ORDER BY date DESC`,
      sql`SELECT COUNT(*) as total_attempts, SUM(is_correct) as total_correct FROM attempts`,
      sql`SELECT name, subject, mastery_pct FROM topics ORDER BY mastery_pct ASC LIMIT 3`,
      sql`SELECT name, subject, mastery_pct FROM topics ORDER BY mastery_pct DESC LIMIT 3`,
    ])

    const sessionRow = await sql`SELECT COUNT(*) as total_sessions FROM sessions WHERE completed_at IS NOT NULL`

    const longestStreak = computeLongestStreak(
      streakRows.rows.map((r) => String(r.date).slice(0, 10))
    )

    let dailyAttempts: Array<{ date: string; correct: number; total: number }>
    let isSample = false

    if (dailyRows.rows.length === 0) {
      isSample = true
      dailyAttempts = Array.from({ length: 14 }, (_, i) => {
        const d = new Date()
        d.setDate(d.getDate() - (13 - i))
        const total = Math.floor(Math.random() * 15 + 3)
        const correct = Math.floor(total * (0.6 + Math.random() * 0.3))
        return {
          date: formatDate(d.toISOString().slice(0, 10)),
          correct,
          total,
        }
      })
    } else {
      dailyAttempts = dailyRows.rows.map((r) => ({
        date: formatDate(String(r.date).slice(0, 10)),
        correct: parseInt(String(r.correct ?? '0')),
        total: parseInt(String(r.total ?? '0')),
      }))
    }

    return NextResponse.json({
      daily_attempts: dailyAttempts,
      topic_mastery: topicRows.rows,
      streak_data: streakRows.rows,
      totals: {
        total_attempts: parseInt(String(totalRow.rows[0].total_attempts ?? '0')),
        total_correct: parseInt(String(totalRow.rows[0].total_correct ?? '0')),
        total_sessions: parseInt(String(sessionRow.rows[0].total_sessions ?? '0')),
        longest_streak: longestStreak,
      },
      weakest_topics: weakRows.rows,
      strongest_topics: strongRows.rows,
      isSample,
    })
  } catch (err) {
    console.error('[stats:GET]', err)
    return NextResponse.json({ error: String(err) }, { status: 500 })
  }
}
