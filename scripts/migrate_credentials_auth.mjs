// Additive, idempotent migration adding email/password (credentials) auth to
// the live Neon DB.
//   node scripts/migrate_credentials_auth.mjs
//
// Adds password_hash / username / created_at to the existing NextAuth `users`
// table and a partial UNIQUE index on username. No drops, no renames, no
// NOT NULL on existing columns — safe to run against production and re-run.
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
  await sql`ALTER TABLE users ADD COLUMN IF NOT EXISTS password_hash TEXT`
  await sql`ALTER TABLE users ADD COLUMN IF NOT EXISTS username TEXT`
  await sql`ALTER TABLE users ADD COLUMN IF NOT EXISTS created_at TIMESTAMPTZ DEFAULT NOW()`

  // Case-insensitive uniqueness so "Krish" and "krish" can't both exist.
  // Partial: only enforced once a username is set (Google-only rows stay NULL).
  await sql`
    CREATE UNIQUE INDEX IF NOT EXISTS users_username_unique
      ON users (LOWER(username))
      WHERE username IS NOT NULL`

  // Verify the columns landed.
  const cols = await sql`
    SELECT column_name FROM information_schema.columns
    WHERE table_name = 'users'
      AND column_name IN ('password_hash','username','created_at')
    ORDER BY column_name`
  console.log('✓ credentials-auth migration applied (idempotent)')
  console.log('  users columns present:', cols.rows.map((r) => r.column_name).join(', '))
}

run().then(() => process.exit(0)).catch((e) => { console.error(e); process.exit(1) })
