// Additive, idempotent auth migration for the live Neon DB.
//   node scripts/migrate_auth.mjs
//
// Creates the NextAuth tables (users, accounts, auth_sessions — the auth
// session table is prefixed to avoid colliding with the existing practice
// `sessions` table) and adds a NULLABLE user_id to the per-user data tables
// (sessions, errors). No drops, no renames, no NOT NULL on existing tables —
// safe to run against production and safe to re-run.
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
for (const line of fs.readFileSync(path.join(root, '.env.local'), 'utf8').split('\n')) {
  const m = line.match(/^([A-Z_]+)=(.*)$/)
  if (m) process.env[m[1]] = m[2].replace(/^"|"$/g, '')
}

const { sql } = await import('@vercel/postgres')

async function run() {
  await sql`
    CREATE TABLE IF NOT EXISTS users (
      id TEXT PRIMARY KEY DEFAULT gen_random_uuid()::text,
      name TEXT,
      email TEXT UNIQUE,
      email_verified TIMESTAMPTZ,
      image TEXT
    )`
  await sql`
    CREATE TABLE IF NOT EXISTS accounts (
      id TEXT PRIMARY KEY DEFAULT gen_random_uuid()::text,
      user_id TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
      type TEXT NOT NULL,
      provider TEXT NOT NULL,
      provider_account_id TEXT NOT NULL,
      refresh_token TEXT,
      access_token TEXT,
      expires_at BIGINT,
      token_type TEXT,
      scope TEXT,
      id_token TEXT,
      session_state TEXT,
      UNIQUE (provider, provider_account_id)
    )`
  await sql`
    CREATE TABLE IF NOT EXISTS auth_sessions (
      id TEXT PRIMARY KEY DEFAULT gen_random_uuid()::text,
      session_token TEXT NOT NULL UNIQUE,
      user_id TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
      expires TIMESTAMPTZ NOT NULL
    )`

  // Additive per-user columns (nullable so existing June rows are untouched).
  await sql`ALTER TABLE sessions ADD COLUMN IF NOT EXISTS user_id TEXT REFERENCES users(id)`
  await sql`ALTER TABLE errors   ADD COLUMN IF NOT EXISTS user_id TEXT REFERENCES users(id)`

  // Lookup indexes.
  await sql`CREATE INDEX IF NOT EXISTS idx_accounts_user_id      ON accounts(user_id)`
  await sql`CREATE INDEX IF NOT EXISTS idx_auth_sessions_user_id ON auth_sessions(user_id)`
  await sql`CREATE INDEX IF NOT EXISTS idx_auth_sessions_token   ON auth_sessions(session_token)`
  await sql`CREATE INDEX IF NOT EXISTS idx_sessions_user_id      ON sessions(user_id)`
  await sql`CREATE INDEX IF NOT EXISTS idx_errors_user_id        ON errors(user_id)`

  console.log('✓ auth migration applied (idempotent)')
}

run().then(() => process.exit(0)).catch((e) => { console.error(e); process.exit(1) })
