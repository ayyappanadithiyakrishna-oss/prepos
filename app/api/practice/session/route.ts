import { NextResponse } from 'next/server'
import { sql } from '@vercel/postgres'

export async function POST(req: Request) {
  const { session_id } = await req.json()
  await sql`UPDATE sessions SET completed_at = NOW() WHERE id = ${session_id}`

  const summary = await sql`
    SELECT COUNT(*) as total, SUM(is_correct) as correct
    FROM attempts WHERE session_id = ${session_id}
  `
  const total = Number(summary.rows[0].total ?? 0)
  const correct = Number(summary.rows[0].correct ?? 0)

  return NextResponse.json({
    session_id,
    total,
    correct,
    accuracy: total > 0 ? Math.round((correct / total) * 100) : 0,
  })
}

export async function GET() {
  const rows = await sql`
    SELECT s.id, s.session_type, s.started_at, s.completed_at, s.total_questions,
           COUNT(a.id) as attempt_count,
           SUM(a.is_correct) as correct_count
    FROM sessions s
    LEFT JOIN attempts a ON a.session_id = s.id
    GROUP BY s.id
    ORDER BY s.started_at DESC
    LIMIT 20
  `
  return NextResponse.json({ sessions: rows.rows })
}
