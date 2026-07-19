import { NextResponse } from 'next/server'
import { sql } from '@vercel/postgres'
import bcrypt from 'bcryptjs'
import { rateLimit, clientIp } from '@/lib/rate-limit'

const USERNAME_RE = /^[a-zA-Z0-9_]{3,20}$/
// Deliberately permissive email shape check — real validation is the account
// working, not a regex. Rejects the obviously-malformed.
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function bad(error: string, status = 400) {
  return NextResponse.json({ error }, { status })
}

export async function POST(req: Request) {
  // Rate limit: 5 signups per IP per 15 minutes.
  const limit = rateLimit(`signup:${clientIp(req)}`, 5, 15 * 60 * 1000)
  if (!limit.allowed) {
    return NextResponse.json(
      { error: 'Too many attempts. Try again in 15 minutes.' },
      { status: 429, headers: { 'Retry-After': String(limit.retryAfterSec) } },
    )
  }

  let body: { username?: unknown; email?: unknown; password?: unknown; confirmPassword?: unknown }
  try {
    body = await req.json()
  } catch {
    return bad('Invalid request body.')
  }

  const username = typeof body.username === 'string' ? body.username.trim() : ''
  const email = typeof body.email === 'string' ? body.email.trim() : ''
  const password = typeof body.password === 'string' ? body.password : ''
  const confirmPassword = typeof body.confirmPassword === 'string' ? body.confirmPassword : ''

  if (!USERNAME_RE.test(username)) {
    return bad('Username must be 3–20 characters: letters, numbers, and underscores only.')
  }
  if (!EMAIL_RE.test(email)) {
    return bad('Enter a valid email address.')
  }
  if (password.length < 8) {
    return bad('Password must be at least 8 characters.')
  }
  if (password !== confirmPassword) {
    return bad('Passwords do not match.')
  }

  // Uniqueness (case-insensitive for both, matching the login lookups).
  const taken = await sql`
    SELECT
      EXISTS (SELECT 1 FROM users WHERE LOWER(username) = ${username.toLowerCase()}) AS username_taken,
      EXISTS (SELECT 1 FROM users WHERE LOWER(email) = ${email.toLowerCase()}) AS email_taken`
  if (taken.rows[0].username_taken) return bad('That username is already taken.', 409)
  if (taken.rows[0].email_taken) return bad('An account with that email already exists.', 409)

  const passwordHash = await bcrypt.hash(password, 12)

  try {
    const inserted = await sql`
      INSERT INTO users (username, email, password_hash, created_at)
      VALUES (${username}, ${email}, ${passwordHash}, NOW())
      RETURNING id`
    return NextResponse.json({ success: true, userId: inserted.rows[0].id, redirect: '/' })
  } catch (err) {
    // Unique-index race (two requests slipped past the EXISTS check).
    console.error('[auth:signup]', err)
    return bad('That username or email is already taken.', 409)
  }
}
