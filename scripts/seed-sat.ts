/**
 * Seed every verified SAT problem (the JSON in lib/sat-practice/data) into the
 * `questions` table. Idempotent — upserts by external_id, so it is safe to run
 * repeatedly and after adding a new sub-skill vertical.
 *
 *   npm run seed:sat
 *
 * Reads POSTGRES_URL from .env.local when present (local runs); in CI it comes
 * from the ambient environment.
 */
import { readFileSync } from 'node:fs'

try {
  for (const line of readFileSync('.env.local', 'utf8').split('\n')) {
    if (line.startsWith('#') || !line.includes('=')) continue
    const i = line.indexOf('=')
    const k = line.slice(0, i).trim()
    let v = line.slice(i + 1).trim()
    if (v.startsWith('"') && v.endsWith('"')) v = v.slice(1, -1)
    if (/^[A-Z0-9_]+$/.test(k) && !process.env[k]) process.env[k] = v
  }
} catch {
  /* no .env.local — rely on the ambient environment (CI) */
}

async function main(): Promise<void> {
  if (!process.env.POSTGRES_URL) throw new Error('POSTGRES_URL not set')
  const { seedVerifiedSat, VERIFIED_PROBLEM_COUNT } = await import('../lib/migrate-verified-sat')
  const n = await seedVerifiedSat()
  console.log(`Seeded ${n} verified problems (expected ${VERIFIED_PROBLEM_COUNT}).`)
  process.exit(0)
}

main().catch((e) => {
  console.error('seed failed:', e instanceof Error ? e.message : e)
  process.exit(1)
})
