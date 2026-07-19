import { NextResponse } from 'next/server'
import { sql } from '@vercel/postgres'
import { ensureSeeded } from '@/lib/ensure-seeded'
import { getUserId } from '@/lib/require-auth'

export async function GET(req: Request) {
  try {
    const userId = await getUserId()
    if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    await ensureSeeded()
    const { searchParams } = new URL(req.url)
    const topicId = searchParams.get('topic_id')

    const rows = topicId
      ? await sql`
          SELECT q.id, q.subject, q.topic_id, t.name as topic_name,
                 q.question_text, q.answer_text, q.choices, q.difficulty, q.explanation,
                 e.times_missed
          FROM errors e
          JOIN questions q ON e.question_id = q.id
          JOIN topics t ON q.topic_id = t.id
          WHERE q.topic_id = ${parseInt(topicId)}
          ORDER BY e.times_missed DESC
        `
      : await sql`
          SELECT q.id, q.subject, q.topic_id, t.name as topic_name,
                 q.question_text, q.answer_text, q.choices, q.difficulty, q.explanation,
                 e.times_missed
          FROM errors e
          JOIN questions q ON e.question_id = q.id
          JOIN topics t ON q.topic_id = t.id
          ORDER BY e.times_missed DESC
        `

    const sessionRow = await sql`INSERT INTO sessions (session_type, user_id) VALUES ('review', ${userId}) RETURNING id`

    return NextResponse.json({
      questions: rows.rows.map(q => ({
        ...q,
        choices: typeof q.choices === 'string' ? JSON.parse(q.choices as string) : q.choices,
        source: 'review',
      })),
      session_id: sessionRow.rows[0].id,
    })
  } catch (err) {
    console.error('[review:GET]', err)
    return NextResponse.json({ error: String(err) }, { status: 500 })
  }
}
