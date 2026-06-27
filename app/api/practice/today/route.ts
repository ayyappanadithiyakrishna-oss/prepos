import { NextResponse } from 'next/server'
import { sql } from '@vercel/postgres'
import { ensureSeeded } from '@/lib/ensure-seeded'

export async function GET() {
  await ensureSeeded()
  // AP Precalculus: 25 questions, prioritize weak topics
  const apRows = await sql`
    SELECT q.id, q.subject, q.topic_id, t.name as topic_name,
           q.question_text, q.answer_text, q.choices, q.difficulty, q.explanation
    FROM questions q
    JOIN topics t ON q.topic_id = t.id
    WHERE q.subject = 'ap_precalc'
    ORDER BY t.mastery_pct ASC, RANDOM()
    LIMIT 25
  `

  // SAT Math: 20 questions
  const satRows = await sql`
    SELECT q.id, q.subject, q.topic_id, t.name as topic_name,
           q.question_text, q.answer_text, q.choices, q.difficulty, q.explanation
    FROM questions q
    JOIN topics t ON q.topic_id = t.id
    WHERE q.subject = 'sat_math'
    ORDER BY t.mastery_pct ASC, RANDOM()
    LIMIT 20
  `

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
    INSERT INTO sessions (session_type) VALUES ('daily') RETURNING id
  `
  const sessionId = sessionRow.rows[0].id

  const parseQ = (q: Record<string, unknown>, source: string) => ({
    ...q,
    choices: typeof q.choices === 'string' ? JSON.parse(q.choices as string) : q.choices,
    source,
  })

  const questions = [
    ...apRows.rows.map(q => parseQ(q as Record<string, unknown>, 'new')),
    ...satRows.rows.map(q => parseQ(q as Record<string, unknown>, 'new')),
    ...reviewQuestions.map(q => parseQ(q as Record<string, unknown>, 'review')),
  ]

  return NextResponse.json({ questions, session_id: sessionId })
}
