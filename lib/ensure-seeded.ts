import { sql } from '@vercel/postgres'
import { seedQuestions } from './questions-seed'
import { seedLessons } from './lessons-seed'
import { seedVerifiedSat } from './migrate-verified-sat'

const AP_TOPICS = [
  'Functions', 'Polynomial Functions', 'Rational Functions',
  'Exponential Functions', 'Trigonometry', 'Transformations', 'Conics', 'Modeling',
]
const SAT_TOPICS = ['Algebra', 'Advanced Math', 'Geometry', 'Problem Solving & Data Analysis']

let seeded = false
let verifiedSeeded = false

/** Idempotent: apply the verified-SAT column migration + upsert the JSON problem
 *  bank. Guarded so it runs at most once per warm process. */
async function ensureVerifiedSat(): Promise<void> {
  if (verifiedSeeded) return
  try {
    const { rows } = await sql`SELECT COUNT(*) AS c FROM questions WHERE verified = TRUE`
    if (Number(rows[0].c) < 8) await seedVerifiedSat()
  } catch {
    // `verified` column doesn't exist yet on a fresh DB — seedVerifiedSat migrates then seeds.
    await seedVerifiedSat()
  }
  verifiedSeeded = true
}

export async function ensureSeeded(): Promise<void> {
  if (seeded) return
  try {
    await createTables()
    await ensureVerifiedSat()
    const [{ rows: tc }, { rows: lc }] = await Promise.all([
      sql`SELECT COUNT(*) as c FROM topics`,
      sql`SELECT COUNT(*) as c FROM lessons`,
    ])
    if (parseInt(tc[0].c) > 0 && parseInt(lc[0].c) >= 42) {
      seeded = true
      return
    }
  } catch {
    // ignore — createTables already ran
  }
  await seedData()
  seeded = true
}

async function createTables(): Promise<void> {
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
  await sql`CREATE TABLE IF NOT EXISTS lessons (
    id SERIAL PRIMARY KEY,
    unit_number INTEGER NOT NULL,
    lesson_number TEXT NOT NULL,
    title TEXT NOT NULL,
    description TEXT,
    learning_objectives TEXT,
    key_concepts TEXT,
    unit_title TEXT,
    subject TEXT DEFAULT 'ap_precalc',
    order_index INTEGER NOT NULL
  )`
  await sql`CREATE TABLE IF NOT EXISTS lesson_progress (
    id SERIAL PRIMARY KEY,
    lesson_id INTEGER REFERENCES lessons(id),
    completed_at TIMESTAMPTZ,
    score INTEGER DEFAULT 0,
    xp_earned INTEGER DEFAULT 0,
    attempts INTEGER DEFAULT 0,
    UNIQUE(lesson_id)
  )`
  await sql`CREATE TABLE IF NOT EXISTS lesson_questions (
    id SERIAL PRIMARY KEY,
    lesson_id INTEGER REFERENCES lessons(id),
    question_text TEXT NOT NULL,
    answer_text TEXT NOT NULL,
    choices TEXT,
    explanation TEXT,
    difficulty INTEGER DEFAULT 1,
    order_index INTEGER DEFAULT 0
  )`
}

async function migrateLessonTitles(): Promise<void> {
  // Fix CED-aligned lesson titles for Unit 3 topics 3.11–3.14 that were misnamed in the original seed
  const fixes = [
    { lesson_number: '3.11', title: 'The Secant, Cosecant, and Cotangent Functions', description: 'Define and evaluate the three reciprocal trigonometric functions.', key_concepts: 'secant, cosecant, cotangent, reciprocal functions, asymptotes, range (−∞,−1]∪[1,∞)' },
    { lesson_number: '3.12', title: 'Equivalent Representations of Trigonometric Functions', description: 'Apply Pythagorean, co-function, even/odd, periodicity, and sum identities to rewrite trig expressions.', key_concepts: 'Pythagorean identity, co-function, even/odd, periodicity, sum identities sin(α+β), cos(α+β), double-angle' },
    { lesson_number: '3.13', title: 'Trigonometry and Polar Coordinates', description: 'Represent points and equations using polar coordinates; convert between coordinate systems.', key_concepts: 'polar coordinates (r, θ), polar-to-rectangular, rectangular-to-polar, r²=x²+y², arctan quadrant check' },
    { lesson_number: '3.14', title: 'Polar Function Graphs', description: 'Graph and analyze polar curves including circles, rose curves, and limaçons.', key_concepts: 'polar graph, rose curve (n/2n petals), limaçon, cardioid, symmetry tests' },
  ]
  for (const fix of fixes) {
    await sql`UPDATE lessons SET title = ${fix.title}, description = ${fix.description}, key_concepts = ${fix.key_concepts} WHERE lesson_number = ${fix.lesson_number} AND subject = 'ap_precalc' AND title != ${fix.title}`
  }
  // Add lesson 3.15 if missing
  const { rows: exist } = await sql`SELECT id FROM lessons WHERE lesson_number = '3.15' AND subject = 'ap_precalc' LIMIT 1`
  if (exist.length === 0) {
    await sql`INSERT INTO lessons (unit_number, lesson_number, title, description, learning_objectives, key_concepts, unit_title, subject, order_index)
      VALUES (3, '3.15', 'Rates of Change in Polar Functions', 'Analyze how r changes as θ changes in polar functions.',
              'Interpret rate of change of r with respect to θ; find where r is increasing/decreasing; relate to graph features.',
              'dr/dθ, average rate of change in polar, increasing/decreasing r, maximum/minimum r, interpreting polar change',
              'Trigonometric and Polar Functions', 'ap_precalc', 42)`
  }
}

async function seedData(): Promise<void> {
  const { rows: tc } = await sql`SELECT COUNT(*) as c FROM topics`
  if (parseInt(tc[0].c) === 0) {
    for (const name of AP_TOPICS) {
      await sql`INSERT INTO topics (name, subject) VALUES (${name}, 'ap_precalc')`
    }
    for (const name of SAT_TOPICS) {
      await sql`INSERT INTO topics (name, subject) VALUES (${name}, 'sat_math')`
    }
  }
  const { rows: lc } = await sql`SELECT COUNT(*) as c FROM lessons`
  if (parseInt(lc[0].c) === 0) {
    await seedLessons()
  } else {
    await migrateLessonTitles()
  }
  const { rows: qc } = await sql`SELECT COUNT(*) as c FROM questions`
  if (parseInt(qc[0].c) === 0) {
    for (const q of seedQuestions) {
      const { rows: tRows } = await sql`
        SELECT id FROM topics WHERE name = ${q.topic} AND subject = ${q.subject} LIMIT 1
      `
      const topicId: number | null = tRows[0]?.id ?? null
      await sql`
        INSERT INTO questions (subject, topic_id, question_text, answer_text, choices, difficulty, explanation)
        VALUES (${q.subject}, ${topicId}, ${q.question_text}, ${q.answer_text},
                ${JSON.stringify(q.choices)}, ${q.difficulty}, ${q.explanation})
      `
    }
  }
}
