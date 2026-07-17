import { NextResponse } from 'next/server'
import { sql } from '@vercel/postgres'
import { ensureSeeded } from '@/lib/ensure-seeded'

export async function GET(_req: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    await ensureSeeded()
    const { id } = await params
    const lessonId = parseInt(id)
    if (isNaN(lessonId)) return NextResponse.json({ error: 'Invalid id' }, { status: 400 })

    const [{ rows: lessonRows }, { rows: questionRows }, { rows: progressRows }] = await Promise.all([
      sql`SELECT * FROM lessons WHERE id = ${lessonId}`,
      sql`SELECT * FROM lesson_questions WHERE lesson_id = ${lessonId} ORDER BY order_index`,
      sql`SELECT * FROM lesson_progress WHERE lesson_id = ${lessonId}`,
    ])

    if (lessonRows.length === 0) return NextResponse.json({ error: 'Not found' }, { status: 404 })

    return NextResponse.json({
      lesson: lessonRows[0],
      questions: questionRows,
      progress: progressRows[0] ?? null,
    })
  } catch (err) {
    console.error('[api/lessons/[id]]', err)
    return NextResponse.json({ error: String(err) }, { status: 500 })
  }
}

export async function POST(req: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    await ensureSeeded()
    const { id } = await params
    const lessonId = parseInt(id)
    if (isNaN(lessonId)) return NextResponse.json({ error: 'Invalid id' }, { status: 400 })

    const { score, xp_earned } = await req.json()

    const today = new Date().toISOString().slice(0, 10)

    await Promise.all([
      sql`
        INSERT INTO lesson_progress (lesson_id, completed_at, score, xp_earned, attempts)
        VALUES (${lessonId}, NOW(), ${score ?? 0}, ${xp_earned ?? 0}, 1)
        ON CONFLICT (lesson_id) DO UPDATE SET
          completed_at = NOW(),
          score = GREATEST(lesson_progress.score, EXCLUDED.score),
          xp_earned = lesson_progress.xp_earned + EXCLUDED.xp_earned,
          attempts = lesson_progress.attempts + 1
      `,
      sql`
        INSERT INTO streaks (date, problems_solved) VALUES (${today}, 1)
        ON CONFLICT (date) DO UPDATE SET problems_solved = streaks.problems_solved + 1
      `,
    ])

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[api/lessons/[id] POST]', err)
    return NextResponse.json({ error: String(err) }, { status: 500 })
  }
}
