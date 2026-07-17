import { NextResponse } from 'next/server'
import { sql } from '@vercel/postgres'
import { ensureSeeded } from '@/lib/ensure-seeded'

export async function GET() {
  try {
    await ensureSeeded()
    const { rows: lessons } = await sql`
      SELECT l.id, l.unit_number, l.lesson_number, l.title, l.description,
             l.learning_objectives, l.key_concepts, l.unit_title, l.subject, l.order_index,
             lp.completed_at, lp.score, lp.xp_earned, lp.attempts
      FROM lessons l
      LEFT JOIN lesson_progress lp ON lp.lesson_id = l.id
      ORDER BY l.order_index
    `
    const { rows: qcounts } = await sql`
      SELECT lesson_id, COUNT(*) as question_count FROM lesson_questions GROUP BY lesson_id
    `
    const countMap = Object.fromEntries(qcounts.map(r => [r.lesson_id, Number(r.question_count)]))
    const enriched = lessons.map(l => {
      const { completed_at, score, xp_earned, attempts, ...rest } = l
      return {
        ...rest,
        question_count: countMap[l.id] ?? 0,
        progress: (completed_at || score != null || xp_earned != null)
          ? { completed_at, score, xp_earned, attempts }
          : undefined,
      }
    })
    return NextResponse.json({ lessons: enriched })
  } catch (err) {
    console.error('[api/lessons]', err)
    return NextResponse.json({ error: String(err) }, { status: 500 })
  }
}
