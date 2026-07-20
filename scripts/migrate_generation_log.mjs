// Additive, idempotent: the generation_log table the autonomous pipeline writes
// one row per (sub-skill, difficulty) generation attempt.
//   node scripts/migrate_generation_log.mjs
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
for (const line of fs.readFileSync(path.join(root, '.env.local'), 'utf8').split('\n')) {
  const m = line.match(/^([A-Z_]+)=(.*)$/)
  if (m) process.env[m[1]] = m[2].replace(/^"|"$/g, '')
}
const { sql } = await import('@vercel/postgres')

await sql`
  CREATE TABLE IF NOT EXISTS generation_log (
    id TEXT PRIMARY KEY DEFAULT gen_random_uuid()::text,
    run_at TIMESTAMPTZ DEFAULT NOW(),
    sub_skill TEXT,
    difficulty TEXT,
    generated INTEGER,
    passed INTEGER,
    failed INTEGER,
    pass_rate NUMERIC,
    flagged BOOLEAN,
    failure_reasons JSONB
  )`
await sql`CREATE INDEX IF NOT EXISTS idx_generation_log_run_at ON generation_log (run_at DESC)`
const { rows } = await sql`SELECT COUNT(*)::int AS n FROM generation_log`
console.log('✓ generation_log ready — existing rows:', rows[0].n)
process.exit(0)
