import { NextResponse } from 'next/server'
import { sql } from '@vercel/postgres'
import { ensureSeeded } from '@/lib/ensure-seeded'
import { getUserId } from '@/lib/require-auth'

function shuffleChoicesForQuestion(
  choices: string[],
  originalAnswerText: string
): { choices: string[]; answer_text: string } {
  const letters = ['A', 'B', 'C', 'D'] as const
  const originalIdx = letters.indexOf(originalAnswerText as 'A' | 'B' | 'C' | 'D')
  const correctText = choices[originalIdx >= 0 ? originalIdx : 0] ?? choices[0]

  // Fisher-Yates shuffle
  const shuffled = [...choices]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j]!, shuffled[i]!]
  }

  const newIdx = shuffled.indexOf(correctText!)
  const newAnswerText = newIdx >= 0 ? letters[newIdx] : 'A'

  return { choices: shuffled, answer_text: newAnswerText ?? 'A' }
}

export async function GET() {
  try {
    const userId = await getUserId()
    if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    await ensureSeeded()
    const today = new Date().toISOString().slice(0, 10)

    // AP Precalculus: 25 questions, prioritize weak topics, exclude already attempted today
    let apRows = await sql`
      SELECT q.id, q.subject, q.topic_id, t.name as topic_name,
             q.question_text, q.answer_text, q.choices, q.difficulty, q.explanation
      FROM questions q
      JOIN topics t ON q.topic_id = t.id
      WHERE q.subject = 'ap_precalc'
        AND q.id NOT IN (
          SELECT a.question_id FROM attempts a
          WHERE DATE(a.attempted_at) = ${today}
        )
      ORDER BY t.mastery_pct ASC, RANDOM()
      LIMIT 25
    `
    if (apRows.rows.length === 0) {
      apRows = await sql`
        SELECT q.id, q.subject, q.topic_id, t.name as topic_name,
               q.question_text, q.answer_text, q.choices, q.difficulty, q.explanation
        FROM questions q
        JOIN topics t ON q.topic_id = t.id
        WHERE q.subject = 'ap_precalc'
        ORDER BY t.mastery_pct ASC, RANDOM()
        LIMIT 25
      `
    }

    // SAT Math: 20 questions, exclude already attempted today
    let satRows = await sql`
      SELECT q.id, q.subject, q.topic_id, t.name as topic_name,
             q.question_text, q.answer_text, q.choices, q.difficulty, q.explanation
      FROM questions q
      JOIN topics t ON q.topic_id = t.id
      WHERE q.subject = 'sat_math'
        AND q.id NOT IN (
          SELECT a.question_id FROM attempts a
          WHERE DATE(a.attempted_at) = ${today}
        )
      ORDER BY t.mastery_pct ASC, RANDOM()
      LIMIT 20
    `
    if (satRows.rows.length === 0) {
      satRows = await sql`
        SELECT q.id, q.subject, q.topic_id, t.name as topic_name,
               q.question_text, q.answer_text, q.choices, q.difficulty, q.explanation
        FROM questions q
        JOIN topics t ON q.topic_id = t.id
        WHERE q.subject = 'sat_math'
        ORDER BY t.mastery_pct ASC, RANDOM()
        LIMIT 20
      `
    }

    // Review: up to 10 from errors
    const reviewRows = await sql`
      SELECT q.id, q.subject, q.topic_id, t.name as topic_name,
             q.question_text, q.answer_text, q.choices, q.difficulty, q.explanation
      FROM errors e
      JOIN questions q ON e.question_id = q.id
      JOIN topics t ON q.topic_id = t.id
      ORDER BY e.times_missed DESC
      LIMIT 10
    `

    let reviewQuestions = reviewRows.rows

    // Fill review to 10 if fewer errors (client-side dedup)
    if (reviewQuestions.length < 10) {
      const fill = await sql`
        SELECT q.id, q.subject, q.topic_id, t.name as topic_name,
               q.question_text, q.answer_text, q.choices, q.difficulty, q.explanation
        FROM questions q
        JOIN topics t ON q.topic_id = t.id
        ORDER BY RANDOM()
        LIMIT 30
      `
      const existingIds = new Set([
        ...apRows.rows.map(q => q.id),
        ...satRows.rows.map(q => q.id),
        ...reviewRows.rows.map(q => q.id),
      ])
      const fillFiltered = fill.rows
        .filter(q => !existingIds.has(q.id))
        .slice(0, 10 - reviewQuestions.length)
      reviewQuestions = [...reviewQuestions, ...fillFiltered]
    }

    // Create session
    const sessionRow = await sql`
      INSERT INTO sessions (session_type, user_id) VALUES ('daily', ${userId}) RETURNING id
    `
    const sessionId = sessionRow.rows[0].id

    const parseQ = (q: Record<string, unknown>, source: string) => {
      const rawChoices: string[] =
        typeof q.choices === 'string'
          ? (JSON.parse(q.choices as string) as string[])
          : (q.choices as string[]) ?? []
      const { choices, answer_text } = shuffleChoicesForQuestion(rawChoices, String(q.answer_text ?? 'A'))
      return { ...q, choices, answer_text, source }
    }

    const questions = [
      ...apRows.rows.map(q => parseQ(q as Record<string, unknown>, 'new')),
      ...satRows.rows.map(q => parseQ(q as Record<string, unknown>, 'new')),
      ...reviewQuestions.map(q => parseQ(q as Record<string, unknown>, 'review')),
    ]

    return NextResponse.json({ questions, session_id: sessionId })
  } catch (err) {
    console.error('[practice/today:GET]', err)
    return NextResponse.json({ error: String(err) }, { status: 500 })
  }
}
