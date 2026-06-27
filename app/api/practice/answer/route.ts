import { NextResponse } from 'next/server'
import { sql } from '@vercel/postgres'
import { ensureSeeded } from '@/lib/ensure-seeded'

export async function POST(req: Request) {
  try {
    await ensureSeeded()
    const { session_id, question_id, user_answer, time_spent_sec } = await req.json()

    // Get question
    const qRow = await sql`
      SELECT answer_text, explanation, topic_id, subject, question_text
      FROM questions WHERE id = ${question_id}
    `
    const question = qRow.rows[0]
    if (!question) return NextResponse.json({ error: 'Question not found' }, { status: 404 })

    const is_correct = user_answer === question.answer_text ? 1 : 0

    // Record attempt
    await sql`
      INSERT INTO attempts (session_id, question_id, user_answer, is_correct, time_spent_sec)
      VALUES (${session_id}, ${question_id}, ${user_answer}, ${is_correct}, ${time_spent_sec})
    `

    // Update streak
    const today = new Date().toISOString().slice(0, 10)
    await sql`
      INSERT INTO streaks (date, problems_solved) VALUES (${today}, 1)
      ON CONFLICT (date) DO UPDATE SET problems_solved = streaks.problems_solved + 1
    `

    // Update session count
    await sql`
      UPDATE sessions SET total_questions = total_questions + 1 WHERE id = ${session_id}
    `

    let mastery_change = 0
    if (is_correct === 1) {
      await sql`
        UPDATE topics SET mastery_pct = LEAST(100, mastery_pct + 5), updated_at = NOW()
        WHERE id = ${question.topic_id}
      `
      mastery_change = 5
      // Decrement error if exists
      await sql`
        UPDATE errors SET times_missed = GREATEST(0, times_missed - 1), last_seen = NOW()
        WHERE question_id = ${question_id}
      `
    } else {
      await sql`
        UPDATE topics SET mastery_pct = GREATEST(0, mastery_pct - 3), updated_at = NOW()
        WHERE id = ${question.topic_id}
      `
      mastery_change = -3
      // Upsert error
      const existing = await sql`SELECT id FROM errors WHERE question_id = ${question_id}`
      if (existing.rows.length > 0) {
        await sql`
          UPDATE errors SET times_missed = times_missed + 1, user_answer = ${user_answer}, last_seen = NOW()
          WHERE question_id = ${question_id}
        `
      } else {
        await sql`
          INSERT INTO errors (question_id, topic_id, question_text, correct_answer, user_answer, subject)
          VALUES (${question_id}, ${question.topic_id}, ${question.question_text},
                  ${question.answer_text}, ${user_answer}, ${question.subject})
        `
      }
    }

    return NextResponse.json({
      is_correct: is_correct === 1,
      correct_answer: question.answer_text,
      explanation: question.explanation,
      mastery_change,
    })
  } catch (err) {
    console.error('[practice/answer:POST]', err)
    return NextResponse.json({ error: String(err) }, { status: 500 })
  }
}
