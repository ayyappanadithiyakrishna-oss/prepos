import { NextResponse } from 'next/server'
import { sql } from '@vercel/postgres'
import { ensureSeeded } from '@/lib/ensure-seeded'
import { getUserId } from '@/lib/require-auth'

export async function GET() {
  try {
    const userId = await getUserId()
    if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    await ensureSeeded()
    const rows = await sql`
      SELECT e.id, e.question_text, e.correct_answer, e.user_answer,
             e.times_missed, e.confidence_level, e.last_seen, e.subject,
             e.sub_skill, e.domain, e.difficulty_band, e.trap,
             t.name as topic_name, t.id as topic_id
      FROM errors e
      LEFT JOIN topics t ON e.topic_id = t.id
      WHERE e.user_id = ${userId}
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
    const userId = await getUserId()
    if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    await ensureSeeded()
    const { error_id, confidence_level } = await req.json()
    await sql`UPDATE errors SET confidence_level = ${confidence_level} WHERE id = ${error_id} AND user_id = ${userId}`
    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[errors:PATCH]', err)
    return NextResponse.json({ error: String(err) }, { status: 500 })
  }
}
