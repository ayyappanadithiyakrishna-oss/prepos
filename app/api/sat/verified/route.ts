import { NextResponse } from 'next/server'
import { sql } from '@vercel/postgres'
import { ensureSeeded } from '@/lib/ensure-seeded'

type RichChoice = { label: string; text: string; value?: string; trap?: string }

// POST: start a verified-practice session and return its questions.
// Answers, canonical values, and traps are NOT sent to the client — the
// server judges correctness (see /api/practice/answer) and only then reveals
// the trap for the option the student actually chose.
export async function POST(req: Request) {
  try {
    await ensureSeeded()
    const body = await req.json().catch(() => ({}))
    const subSkill: string | undefined = body?.subSkill
    // Callers may pass { test: true } to create an is_test session whose attempts
    // are structurally excluded from mastery/stats (see lib/mastery-query.ts).
    const isTest = body?.test === true

    const { rows: sessionRows } = await sql`
      INSERT INTO sessions (session_type, is_test) VALUES ('sat_verified', ${isTest}) RETURNING id
    `
    const session_id = sessionRows[0].id

    const { rows } = subSkill
      ? await sql`
          SELECT id, question_text, choices, difficulty_band, sub_skill, domain,
                 calculator_strategy, answer_text
          FROM questions
          WHERE verified = TRUE AND sub_skill = ${subSkill}
          ORDER BY difficulty, id`
      : await sql`
          SELECT id, question_text, choices, difficulty_band, sub_skill, domain,
                 calculator_strategy, answer_text
          FROM questions
          WHERE verified = TRUE
          ORDER BY difficulty, id`

    const questions = rows.map((q) => {
      const raw = typeof q.choices === 'string' ? JSON.parse(q.choices) : q.choices
      const rich: RichChoice[] | null =
        Array.isArray(raw) && raw.length && typeof raw[0] === 'object' ? raw : null
      return {
        id: q.id,
        question_text: q.question_text,
        difficulty_band: q.difficulty_band,
        sub_skill: q.sub_skill,
        domain: q.domain,
        calculator_strategy: q.calculator_strategy,
        type: rich ? 'mc' : 'spr',
        // Strip value + trap before sending to the client.
        choices: rich ? rich.map((c) => ({ label: c.label, text: c.text })) : null,
      }
    })

    return NextResponse.json({ session_id, questions })
  } catch (err) {
    console.error('[sat/verified:POST]', err)
    return NextResponse.json({ error: String(err) }, { status: 500 })
  }
}
