// One-shot runner: apply verified-SAT migration + seed to the Postgres DB.
// Idempotent (additive DDL + upsert by external_id). Mirrors the SQL in
// lib/migrate-verified-sat.ts, which is the app-runtime path via ensureSeeded().
//
//   node scripts/migrate_verified_sat.mjs
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, '..')

// Load .env.local
for (const line of fs.readFileSync(path.join(root, '.env.local'), 'utf8').split('\n')) {
  const m = line.match(/^([A-Z_]+)=(.*)$/)
  if (m) process.env[m[1]] = m[2].replace(/^"|"$/g, '')
}

const { sql } = await import('@vercel/postgres')

const BAND_TO_INT = { Easy: 1, Medium: 2, Hard: 3 }
const dataDir = path.join(root, 'lib', 'sat-practice', 'data')

async function migrateColumns() {
  await sql`ALTER TABLE questions ADD COLUMN IF NOT EXISTS external_id TEXT`
  await sql`ALTER TABLE questions ADD COLUMN IF NOT EXISTS domain TEXT`
  await sql`ALTER TABLE questions ADD COLUMN IF NOT EXISTS sub_skill TEXT`
  await sql`ALTER TABLE questions ADD COLUMN IF NOT EXISTS difficulty_band TEXT`
  await sql`ALTER TABLE questions ADD COLUMN IF NOT EXISTS calculator_strategy TEXT`
  await sql`ALTER TABLE questions ADD COLUMN IF NOT EXISTS verified BOOLEAN DEFAULT FALSE`
  // Plain unique index (not partial): Postgres treats NULLs as distinct, so the
  // existing external_id-less rows coexist, and ON CONFLICT can infer from it.
  await sql`DROP INDEX IF EXISTS questions_external_id_uidx`
  await sql`CREATE UNIQUE INDEX IF NOT EXISTS questions_external_id_uidx ON questions (external_id)`
  await sql`ALTER TABLE errors ADD COLUMN IF NOT EXISTS sub_skill TEXT`
  await sql`ALTER TABLE errors ADD COLUMN IF NOT EXISTS domain TEXT`
  await sql`ALTER TABLE errors ADD COLUMN IF NOT EXISTS difficulty_band TEXT`
  await sql`ALTER TABLE errors ADD COLUMN IF NOT EXISTS trap TEXT`
}

async function topicIdForDomain(domain) {
  const { rows } = await sql`
    SELECT id FROM topics
    WHERE subject = 'sat_math' AND (name = ${domain} OR ${domain} LIKE name || '%')
    ORDER BY id LIMIT 1`
  return rows[0]?.id ?? null
}

async function upsert(p, topicId) {
  const choicesJson = p.type === 'mc' && p.choices ? JSON.stringify(p.choices) : null
  const explanation = p.explanation.join('\n')
  const difficultyInt = BAND_TO_INT[p.difficulty] ?? 1
  await sql`
    INSERT INTO questions
      (external_id, subject, topic_id, question_text, answer_text, choices,
       difficulty, difficulty_band, explanation, domain, sub_skill,
       calculator_strategy, verified)
    VALUES
      (${p.id}, 'sat_math', ${topicId}, ${p.question}, ${p.answer}, ${choicesJson},
       ${difficultyInt}, ${p.difficulty}, ${explanation}, ${p.domain}, ${p.subSkill},
       ${p.calculatorStrategy}, TRUE)
    ON CONFLICT (external_id) DO UPDATE SET
      question_text = EXCLUDED.question_text, answer_text = EXCLUDED.answer_text,
      choices = EXCLUDED.choices, difficulty = EXCLUDED.difficulty,
      difficulty_band = EXCLUDED.difficulty_band, explanation = EXCLUDED.explanation,
      domain = EXCLUDED.domain, sub_skill = EXCLUDED.sub_skill,
      calculator_strategy = EXCLUDED.calculator_strategy, verified = TRUE`
}

await migrateColumns()
console.log('✓ columns migrated')
let n = 0
for (const file of fs.readdirSync(dataDir).filter(f => f.endsWith('.json'))) {
  const lesson = JSON.parse(fs.readFileSync(path.join(dataDir, file), 'utf8'))
  const topicId = await topicIdForDomain(lesson.domain)
  for (const p of lesson.problems) { await upsert(p, topicId); n++ }
  console.log(`✓ seeded ${lesson.problems.length} from ${file} (topic ${topicId})`)
}
console.log(`✓ ${n} verified problems upserted`)
process.exit(0)
