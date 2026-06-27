import { NextResponse } from 'next/server'
import { sql } from '@vercel/postgres'
import { ensureSeeded } from '@/lib/ensure-seeded'

export async function GET() {
  try {
    await ensureSeeded()
    const rows = await sql`SELECT id, name, subject, mastery_pct FROM topics ORDER BY subject, name`
    return NextResponse.json({ topics: rows.rows })
  } catch (err) {
    console.error('[mastery:GET]', err)
    return NextResponse.json({ error: String(err) }, { status: 500 })
  }
}

export async function PATCH(req: Request) {
  try {
    await ensureSeeded()
    const { topic_id, mastery_pct } = await req.json()
    await sql`UPDATE topics SET mastery_pct = ${mastery_pct}, updated_at = NOW() WHERE id = ${topic_id}`
    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[mastery:PATCH]', err)
    return NextResponse.json({ error: String(err) }, { status: 500 })
  }
}
