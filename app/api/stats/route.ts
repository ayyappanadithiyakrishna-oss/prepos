import { NextResponse } from 'next/server'
import { sql } from '@vercel/postgres'
import { ensureSeeded } from '@/lib/ensure-seeded'

export async function GET() {
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

  return NextResponse.json({
    daily_attempts: dailyRows.rows,
    topic_mastery: topicRows.rows,
    streak_data: streakRows.rows,
    totals: {
      total_attempts: parseInt(String(totalRow.rows[0].total_attempts ?? '0')),
      total_correct: parseInt(String(totalRow.rows[0].total_correct ?? '0')),
      total_sessions: parseInt(String(sessionRow.rows[0].total_sessions ?? '0')),
    },
    weakest_topics: weakRows.rows,
    strongest_topics: strongRows.rows,
  })
}
