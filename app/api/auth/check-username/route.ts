import { NextResponse } from 'next/server'
import { sql } from '@vercel/postgres'

const USERNAME_RE = /^[a-zA-Z0-9_]{3,20}$/

// GET /api/auth/check-username?username=foo -> { available: boolean, valid: boolean }
export async function GET(req: Request) {
  const username = (new URL(req.url).searchParams.get('username') ?? '').trim()

  if (!USERNAME_RE.test(username)) {
    return NextResponse.json({ available: false, valid: false })
  }

  const { rows } = await sql`
    SELECT EXISTS (SELECT 1 FROM users WHERE LOWER(username) = ${username.toLowerCase()}) AS taken`
  return NextResponse.json({ available: !rows[0].taken, valid: true })
}
