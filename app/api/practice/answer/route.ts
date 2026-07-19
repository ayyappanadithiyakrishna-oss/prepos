import { NextResponse } from 'next/server'
import { sql } from '@vercel/postgres'
import { ensureSeeded } from '@/lib/ensure-seeded'
import { getUserId } from '@/lib/require-auth'

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
    const userId = await getUserId()
    if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    await ensureSeeded()
    const { session_id, question_id, user_answer, user_answer_text, time_spent_sec } = await req.json()

    const qRow = await sql`
      SELECT answer_text, choices, explanation, topic_id, subject, question_text,
             sub_skill, domain, difficulty_band, verified
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

    // Error Log applies to both verified and legacy content, scoped per-student
    // so two users missing the same question keep separate error rows.
    if (is_correct === 1) {
      await sql`
        UPDATE errors SET times_missed = GREATEST(0, times_missed - 1), last_seen = NOW()
        WHERE question_id = ${question_id} AND user_id = ${userId}
      `
    } else {
      const existing = await sql`SELECT id FROM errors WHERE question_id = ${question_id} AND user_id = ${userId}`
      if (existing.rows.length > 0) {
        await sql`
          UPDATE errors SET times_missed = times_missed + 1, user_answer = ${user_answer},
                 trap = COALESCE(${trap}, trap), last_seen = NOW()
          WHERE question_id = ${question_id} AND user_id = ${userId}
        `
      } else {
        await sql`
          INSERT INTO errors (question_id, topic_id, question_text, correct_answer, user_answer,
                              subject, sub_skill, domain, difficulty_band, trap, user_id)
          VALUES (${question_id}, ${question.topic_id}, ${question.question_text},
                  ${question.answer_text}, ${user_answer}, ${question.subject},
                  ${question.sub_skill}, ${question.domain}, ${question.difficulty_band}, ${trap}, ${userId})
        `
      }
    }

    // Mastery: verified content is scored by the recency/difficulty-weighted
    // model (compute-on-read via /api/mastery -> getSkillMasteries; is_test
    // sessions excluded there). The naive +5/−3 no longer touches verified
    // sub-skills — it only governs legacy (untagged) content until that migrates.
    let mastery_change = 0
    if (question.verified) {
      // no-op: sub-skill mastery is computed from attempts on read
    } else if (is_correct === 1) {
      await sql`UPDATE topics SET mastery_pct = LEAST(100, mastery_pct + 5), updated_at = NOW() WHERE id = ${question.topic_id}`
      mastery_change = 5
    } else {
      await sql`UPDATE topics SET mastery_pct = GREATEST(0, mastery_pct - 3), updated_at = NOW() WHERE id = ${question.topic_id}`
      mastery_change = -3
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
