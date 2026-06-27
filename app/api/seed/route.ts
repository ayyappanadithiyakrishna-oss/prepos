import { NextResponse } from 'next/server'
import { sql } from '@vercel/postgres'
import { seedQuestions } from '@/lib/questions-seed'

const AP_TOPICS = [
  'Functions', 'Polynomial Functions', 'Rational Functions',
  'Exponential Functions', 'Trigonometry', 'Transformations', 'Conics', 'Modeling',
]
const SAT_TOPICS = ['Algebra', 'Advanced Math', 'Geometry', 'Problem Solving & Data Analysis']

export async function GET() {
  // Create tables
  await sql`CREATE TABLE IF NOT EXISTS topics (
    id SERIAL PRIMARY KEY, name TEXT NOT NULL, subject TEXT NOT NULL,
    subtopic TEXT, mastery_pct REAL DEFAULT 0, updated_at TIMESTAMPTZ DEFAULT NOW()
  )`
  await sql`CREATE TABLE IF NOT EXISTS questions (
    id SERIAL PRIMARY KEY, subject TEXT NOT NULL, topic_id INTEGER REFERENCES topics(id),
    question_text TEXT NOT NULL, answer_text TEXT NOT NULL, choices TEXT,
    difficulty INTEGER DEFAULT 1, explanation TEXT, created_at TIMESTAMPTZ DEFAULT NOW()
  )`
  await sql`CREATE TABLE IF NOT EXISTS sessions (
    id SERIAL PRIMARY KEY, session_type TEXT NOT NULL,
    started_at TIMESTAMPTZ DEFAULT NOW(), completed_at TIMESTAMPTZ, total_questions INTEGER DEFAULT 0
  )`
  await sql`CREATE TABLE IF NOT EXISTS attempts (
    id SERIAL PRIMARY KEY, session_id INTEGER REFERENCES sessions(id),
    question_id INTEGER REFERENCES questions(id), user_answer TEXT,
    is_correct INTEGER DEFAULT 0, time_spent_sec INTEGER DEFAULT 0,
    attempted_at TIMESTAMPTZ DEFAULT NOW()
  )`
  await sql`CREATE TABLE IF NOT EXISTS errors (
    id SERIAL PRIMARY KEY, question_id INTEGER REFERENCES questions(id),
    topic_id INTEGER REFERENCES topics(id), question_text TEXT NOT NULL,
    correct_answer TEXT NOT NULL, user_answer TEXT NOT NULL, subject TEXT NOT NULL,
    subtopic TEXT, times_missed INTEGER DEFAULT 1, confidence_level INTEGER DEFAULT 1,
    last_seen TIMESTAMPTZ DEFAULT NOW()
  )`
  await sql`CREATE TABLE IF NOT EXISTS streaks (
    id SERIAL PRIMARY KEY, date TEXT UNIQUE NOT NULL,
    problems_solved INTEGER DEFAULT 0, study_time_sec INTEGER DEFAULT 0
  )`
  await sql`CREATE TABLE IF NOT EXISTS achievements (
    id SERIAL PRIMARY KEY, key TEXT UNIQUE NOT NULL,
    name TEXT NOT NULL, description TEXT NOT NULL, earned_at TIMESTAMPTZ
  )`
  await sql`CREATE TABLE IF NOT EXISTS settings (
    key TEXT PRIMARY KEY, value TEXT NOT NULL
  )`

  // Seed topics (idempotent)
  const { rows: topicRows } = await sql`SELECT COUNT(*) as c FROM topics`
  if (parseInt(topicRows[0].c) === 0) {
    for (const name of AP_TOPICS) {
      await sql`INSERT INTO topics (name, subject) VALUES (${name}, 'ap_precalc')`
    }
    for (const name of SAT_TOPICS) {
      await sql`INSERT INTO topics (name, subject) VALUES (${name}, 'sat_math')`
    }
  }

  // Seed questions (idempotent)
  const { rows: qRows } = await sql`SELECT COUNT(*) as c FROM questions`
  if (parseInt(qRows[0].c) === 0) {
    for (const q of seedQuestions) {
      const { rows: tRows } = await sql`
        SELECT id FROM topics WHERE name = ${q.topic} AND subject = ${q.subject} LIMIT 1
      `
      const topicId = tRows[0]?.id ?? null
      await sql`
        INSERT INTO questions (subject, topic_id, question_text, answer_text, choices, difficulty, explanation)
        VALUES (${q.subject}, ${topicId}, ${q.question_text}, ${q.answer_text},
                ${JSON.stringify(q.choices)}, ${q.difficulty}, ${q.explanation})
      `
    }
  }

  return NextResponse.json({ ok: true, message: 'Database seeded' })
}
