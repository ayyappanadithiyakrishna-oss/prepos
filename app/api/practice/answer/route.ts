import { NextResponse } from 'next/server'
import { sql } from '@vercel/postgres'
import { ensureSeeded } from '@/lib/ensure-seeded'

type RichChoice = { label: string; text: string; value?: string; trap?: string }

/** Choices may be legacy string[] or the verified RichChoice[]. Normalize both. */
function parseChoices(raw: unknown): { texts: string[]; rich: RichChoice[] | null } {
  const arr = typeof raw === 'string' ? JSON.parse(raw) : raw
  if (!Array.isArray(arr) || arr.length === 0) return { texts: [], rich: null }
  if (typeof arr[0] === 'object' && arr[0] !== null) {
    const rich = arr as RichChoice[]
    return { texts: rich.map((c) => c.text), rich }
  }
  return { texts: arr as string[], rich: null }
}

const norm = (s: unknown) => String(s ?? '').trim()

export async function POST(req: Request) {
  try {
    await ensureSeeded()
    const { session_id, question_id, user_answer, user_answer_text, time_spent_sec } = await req.json()

    const qRow = await sql`
      SELECT answer_text, choices, explanation, topic_id, subject, question_text,
             sub_skill, domain, difficulty_band
      FROM questions WHERE id = ${question_id}
    `
    const question = qRow.rows[0]
    if (!question) return NextResponse.json({ error: 'Question not found' }, { status: 404 })

    const { texts, rich } = parseChoices(question.choices)
    const letters = ['A', 'B', 'C', 'D'] as const

    let correctChoiceText: string
    let is_correct: number
    let trap: string | null = null

    if (texts.length > 0) {
      // Multiple choice. answer_text is the correct letter.
      const idx = letters.indexOf(question.answer_text as (typeof letters)[number])
      correctChoiceText = texts[idx >= 0 ? idx : 0] ?? texts[0]
      is_correct = norm(user_answer_text) === norm(correctChoiceText) ? 1 : 0
      // Trap: look up the misconception attached to the distractor the student picked.
      if (is_correct === 0 && rich) {
        trap = rich.find((c) => norm(c.text) === norm(user_answer_text))?.trap ?? null
      }
    } else {
      // Student-Produced Response. answer_text is the canonical numeric string.
      correctChoiceText = String(question.answer_text)
      is_correct = norm(user_answer_text) === norm(correctChoiceText) ? 1 : 0
    }

    await sql`
      INSERT INTO attempts (session_id, question_id, user_answer, is_correct, time_spent_sec)
      VALUES (${session_id}, ${question_id}, ${user_answer}, ${is_correct}, ${time_spent_sec})
    `

    const today = new Date().toISOString().slice(0, 10)
    await sql`
      INSERT INTO streaks (date, problems_solved) VALUES (${today}, 1)
      ON CONFLICT (date) DO UPDATE SET problems_solved = streaks.problems_solved + 1
    `
    await sql`UPDATE sessions SET total_questions = total_questions + 1 WHERE id = ${session_id}`

    let mastery_change = 0
    if (is_correct === 1) {
      await sql`
        UPDATE topics SET mastery_pct = LEAST(100, mastery_pct + 5), updated_at = NOW()
        WHERE id = ${question.topic_id}
      `
      mastery_change = 5
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
      const existing = await sql`SELECT id FROM errors WHERE question_id = ${question_id}`
      if (existing.rows.length > 0) {
        await sql`
          UPDATE errors SET times_missed = times_missed + 1, user_answer = ${user_answer},
                 trap = COALESCE(${trap}, trap), last_seen = NOW()
          WHERE question_id = ${question_id}
        `
      } else {
        await sql`
          INSERT INTO errors (question_id, topic_id, question_text, correct_answer, user_answer,
                              subject, sub_skill, domain, difficulty_band, trap)
          VALUES (${question_id}, ${question.topic_id}, ${question.question_text},
                  ${question.answer_text}, ${user_answer}, ${question.subject},
                  ${question.sub_skill}, ${question.domain}, ${question.difficulty_band}, ${trap})
        `
      }
    }

    return NextResponse.json({
      is_correct: is_correct === 1,
      correct_answer: correctChoiceText,
      explanation: question.explanation,
      trap,
      mastery_change,
    })
  } catch (err) {
    console.error('[practice/answer:POST]', err)
    return NextResponse.json({ error: String(err) }, { status: 500 })
  }
}
