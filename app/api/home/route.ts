import { NextResponse } from 'next/server'
import { sql } from '@vercel/postgres'
import { ensureSeeded } from '@/lib/ensure-seeded'
import { getUserId } from '@/lib/require-auth'
import { getSkillMasteries } from '@/lib/mastery-query'
import { SAT_ALGEBRA_ORDER, SAT_SKILL_LABEL, SAT_LOCKED_DOMAINS, nextBand } from '@/lib/sat-path'

export const dynamic = 'force-dynamic'

type PathItem = { name: string; state: 'mastered' | 'current' | 'locked' | 'available'; pct: number }
type PathSection = { title: string; done: number; total: number; locked: boolean; note?: string; items: PathItem[] }

function computeStreak(dates: string[]): { current: number; best: number; last: string | null } {
  if (dates.length === 0) return { current: 0, best: 0, last: null }
  const uniq = [...new Set(dates)].sort() // ascending YYYY-MM-DD
  const last = uniq[uniq.length - 1]

  // Best run of consecutive calendar days.
  let best = 1, run = 1
  for (let i = 1; i < uniq.length; i++) {
    const prev = new Date(uniq[i - 1] + 'T00:00:00Z')
    const cur = new Date(uniq[i] + 'T00:00:00Z')
    const gap = Math.round((cur.getTime() - prev.getTime()) / 86400000)
    run = gap === 1 ? run + 1 : 1
    if (run > best) best = run
  }

  // Current streak: alive only if last activity was today or yesterday.
  const today = new Date().toISOString().slice(0, 10)
  const yday = new Date(Date.now() - 86400000).toISOString().slice(0, 10)
  let current = 0
  if (last === today || last === yday) {
    current = 1
    for (let i = uniq.length - 1; i > 0; i--) {
      const prev = new Date(uniq[i - 1] + 'T00:00:00Z')
      const cur = new Date(uniq[i] + 'T00:00:00Z')
      if (Math.round((cur.getTime() - prev.getTime()) / 86400000) === 1) current++
      else break
    }
  }
  return { current, best, last }
}

export async function GET(req: Request) {
  try {
    const userId = await getUserId()
    if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    await ensureSeeded()

    const track = new URL(req.url).searchParams.get('track') === 'ap' ? 'ap' : 'sat'
    const now = new Date()
    const d7 = new Date(now.getTime() - 7 * 86400000).toISOString().slice(0, 10)
    const d30 = new Date(now.getTime() - 30 * 86400000).toISOString().slice(0, 10)

    const [streakRows, statAnswered, statWeek, stat30, errRow] = await Promise.all([
      sql`SELECT DISTINCT TO_CHAR(completed_at, 'YYYY-MM-DD') AS d FROM sessions
          WHERE user_id = ${userId} AND completed_at IS NOT NULL AND is_test = FALSE`,
      sql`SELECT COUNT(*)::int AS n FROM attempts a JOIN sessions s ON s.id = a.session_id
          WHERE s.user_id = ${userId} AND s.is_test = FALSE`,
      sql`SELECT COUNT(*)::int AS n FROM attempts a JOIN sessions s ON s.id = a.session_id
          WHERE s.user_id = ${userId} AND s.is_test = FALSE
            AND a.is_correct::int = 1 AND a.attempted_at >= ${d7}`,
      sql`SELECT SUM(CASE WHEN a.is_correct::int = 1 THEN 1 ELSE 0 END)::int AS correct,
                 COUNT(*)::int AS total
          FROM attempts a JOIN sessions s ON s.id = a.session_id
          WHERE s.user_id = ${userId} AND s.is_test = FALSE AND a.attempted_at >= ${d30}`,
      sql`SELECT COUNT(*)::int AS n FROM errors WHERE user_id = ${userId}`,
    ])

    const streak = computeStreak(streakRows.rows.map((r) => r.d as string))
    const acc = stat30.rows[0]
    const stats = {
      answered: statAnswered.rows[0].n as number,
      correctWeek: statWeek.rows[0].n as number,
      accuracy30: acc.total > 0 ? Math.round((Number(acc.correct) / Number(acc.total)) * 100) : 0,
    }
    const errorReviews = Math.min(2, errRow.rows[0].n as number)

    let today: {
      name: string; label: string; band: string; questions: number; masteryPct: number; errorReviews: number
    } | null = null
    let weakSpots: { name: string; band: string; pct: number }[] = []
    let path: PathSection[] = []
    let pathProgress = { done: 0, total: 0 }

    if (track === 'sat') {
      const masteries = await getSkillMasteries(userId, now)
      const bySkill = new Map(masteries.map((m) => [m.subSkill, m]))

      // Study path: Algebra Foundation (gated) + locked domains.
      const items: PathItem[] = []
      let currentSkill: { name: string; band: string; pct: number } | null = null
      let sawCurrent = false
      let done = 0
      for (const skill of SAT_ALGEBRA_ORDER) {
        const m = bySkill.get(skill)
        const pct = m ? Math.round(m.score * 100) : 0
        const label = SAT_SKILL_LABEL[skill] ?? skill
        if (m?.mastered) {
          items.push({ name: label, state: 'mastered', pct })
          done++
        } else if (!sawCurrent) {
          items.push({ name: label, state: 'current', pct })
          currentSkill = { name: skill, band: nextBand(m?.bandsCorrect ?? []), pct }
          sawCurrent = true
        } else {
          items.push({ name: label, state: 'locked', pct })
        }
      }
      path = [
        { title: 'Algebra Foundation', done, total: SAT_ALGEBRA_ORDER.length, locked: false, items },
        ...SAT_LOCKED_DOMAINS.map((dom) => ({
          title: dom.name, done: 0, total: 0, locked: true, note: dom.note, items: [] as PathItem[],
        })),
      ]
      pathProgress = { done, total: SAT_ALGEBRA_ORDER.length }

      weakSpots = masteries
        .filter((m) => !m.mastered)
        .sort((a, b) => a.score - b.score)
        .slice(0, 3)
        .map((m) => ({ name: SAT_SKILL_LABEL[m.subSkill] ?? m.subSkill, band: nextBand(m.bandsCorrect), pct: Math.round(m.score * 100) }))

      if (currentSkill) {
        today = {
          name: SAT_SKILL_LABEL[currentSkill.name] ?? currentSkill.name,
          label: currentSkill.name, band: currentSkill.band,
          questions: 5, masteryPct: currentSkill.pct, errorReviews,
        }
      }
    } else {
      // AP track: topic-based mastery from the topics table.
      const { rows } = await sql`SELECT name, mastery_pct FROM topics WHERE subject = 'ap_precalc' ORDER BY mastery_pct DESC, name`
      const topics = rows.map((r) => ({ name: r.name as string, pct: Number(r.mastery_pct) }))
      const items: PathItem[] = []
      let currentTopic: { name: string; pct: number } | null = null
      let sawCurrent = false
      let done = 0
      for (const t of topics) {
        if (t.pct >= 85) { items.push({ name: t.name, state: 'mastered', pct: t.pct }); done++ }
        else if (!sawCurrent) { items.push({ name: t.name, state: 'current', pct: t.pct }); currentTopic = t; sawCurrent = true }
        else items.push({ name: t.name, state: 'available', pct: t.pct })
      }
      path = [{ title: 'AP Precalculus', done, total: topics.length, locked: false, items }]
      pathProgress = { done, total: topics.length }
      weakSpots = [...topics].sort((a, b) => a.pct - b.pct).slice(0, 3).map((t) => ({ name: t.name, band: 'Mixed', pct: t.pct }))
      const focus = currentTopic ?? topics[topics.length - 1]
      if (focus) today = { name: focus.name, label: focus.name, band: 'Mixed', questions: 5, masteryPct: focus.pct, errorReviews }
    }

    return NextResponse.json({ track, streak, stats, today, weakSpots, path, pathProgress })
  } catch (err) {
    console.error('[home]', err)
    return NextResponse.json({ error: String(err) }, { status: 500 })
  }
}
