import { NextResponse } from 'next/server'
import { sql } from '@vercel/postgres'
import { ensureSeeded } from '@/lib/ensure-seeded'
import { getSkillMasteries } from '@/lib/mastery-query'
import { getUserId } from '@/lib/require-auth'

export async function GET() {
  try {
    const userId = await getUserId()
    if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    await ensureSeeded()
    const rows = await sql`SELECT id, name, subject, mastery_pct FROM topics ORDER BY subject, name`
    // Per-sub-skill mastery from the real model (verified content), scoped to
    // this student. Source of truth for SAT sub-skills; `topics` is legacy view.
    const skills = await getSkillMasteries(userId)
    return NextResponse.json({ topics: rows.rows, skills })
  } catch (err) {
    console.error('[mastery:GET]', err)
    return NextResponse.json({ error: String(err) }, { status: 500 })
  }
}

export async function PATCH(req: Request) {
  try {
    const userId = await getUserId()
    if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    await ensureSeeded()
    const { topic_id, mastery_pct } = await req.json()
    await sql`UPDATE topics SET mastery_pct = ${mastery_pct}, updated_at = NOW() WHERE id = ${topic_id}`
    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[mastery:PATCH]', err)
    return NextResponse.json({ error: String(err) }, { status: 500 })
  }
}
