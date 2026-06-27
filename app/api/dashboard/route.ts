import { NextResponse } from 'next/server'
import { sql } from '@vercel/postgres'
import { ensureSeeded } from '@/lib/ensure-seeded'

function calcStreak(rows: { date: string; problems_solved: number }[]): number {
  if (rows.length === 0) return 0
  const today = new Date().toISOString().slice(0, 10)
  let streak = 0
  const cursor = new Date(today)
  for (const row of rows) {
    if (row.date === cursor.toISOString().slice(0, 10)) {
      streak++
      cursor.setDate(cursor.getDate() - 1)
    } else break
  }
  return streak
}

export async function GET() {
  try {
    await ensureSeeded()
    const today = new Date().toISOString().slice(0, 10)
    const sevenDaysAgo = new Date()
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7)
    const sevenDaysAgoStr = sevenDaysAgo.toISOString().slice(0, 10)

    const [streakRows, todayRow, totalRow, accuracyRow, apRow, satRow, topicRows, sessionRows] = await Promise.all([
      sql`SELECT date, problems_solved FROM streaks WHERE problems_solved > 0 ORDER BY date DESC`,
      sql`SELECT COALESCE(problems_solved, 0) as count FROM streaks WHERE date = ${today}`,
      sql`SELECT COUNT(*) as count FROM attempts`,
      sql`SELECT SUM(is_correct) as correct, COUNT(*) as total FROM attempts WHERE attempted_at >= ${sevenDaysAgoStr}`,
      sql`SELECT AVG(mastery_pct) as avg_mastery FROM topics WHERE subject = 'ap_precalc'`,
      sql`SELECT AVG(mastery_pct) as avg_mastery FROM topics WHERE subject = 'sat_math'`,
      sql`SELECT id, name, subject, mastery_pct FROM topics ORDER BY subject, name`,
      sql`SELECT id, session_type, started_at, completed_at, total_questions FROM sessions ORDER BY started_at DESC LIMIT 5`,
    ])

    const acc = accuracyRow.rows[0]
    const accuracy = acc.total > 0 ? Math.round((Number(acc.correct) / Number(acc.total)) * 100) : 0

    return NextResponse.json({
      streak: calcStreak(streakRows.rows as { date: string; problems_solved: number }[]),
      today_count: todayRow.rows[0]?.count ?? 0,
      total_count: totalRow.rows[0].count,
      accuracy,
      ap_mastery: Math.round(Number(apRow.rows[0].avg_mastery) ?? 0),
      sat_mastery: Math.round(Number(satRow.rows[0].avg_mastery) ?? 0),
      topics: topicRows.rows,
      recent_sessions: sessionRows.rows,
    })
  } catch (err) {
    console.error('[dashboard]', err)
    return NextResponse.json({ error: String(err) }, { status: 500 })
  }
}
