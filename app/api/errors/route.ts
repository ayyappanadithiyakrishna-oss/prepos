import { NextResponse } from 'next/server'
import { sql } from '@vercel/postgres'
import { ensureSeeded } from '@/lib/ensure-seeded'

export async function GET() {
  try {
    await ensureSeeded()
    const rows = await sql`
      SELECT e.id, e.question_text, e.correct_answer, e.user_answer,
             e.times_missed, e.confidence_level, e.last_seen, e.subject,
             t.name as topic_name, t.id as topic_id
      FROM errors e
      LEFT JOIN topics t ON e.topic_id = t.id
      ORDER BY e.times_missed DESC, e.last_seen DESC
    `
    return NextResponse.json({ errors: rows.rows })
  } catch (err) {
    console.error('[errors:GET]', err)
    return NextResponse.json({ error: String(err) }, { status: 500 })
  }
}

export async function PATCH(req: Request) {
  try {
    await ensureSeeded()
    const { error_id, confidence_level } = await req.json()
    await sql`UPDATE errors SET confidence_level = ${confidence_level} WHERE id = ${error_id}`
    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[errors:PATCH]', err)
    return NextResponse.json({ error: String(err) }, { status: 500 })
  }
}
