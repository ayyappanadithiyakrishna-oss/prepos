/**
 * Nightly cron watcher → email report (runs on GitHub Actions, not Vercel).
 *
 * Reads POSTGRES_URL, RESEND_API_KEY, REPORT_EMAIL from the environment, queries
 * how many questions the 2am generation cron added in the last 3 hours plus the
 * total verified bank size, and emails a summary via Resend. Exits non-zero if
 * any required env is missing or the email fails, so the Actions run goes red.
 *
 * Set DRY_RUN=1 to compute + print the numbers without sending (local testing).
 */
import { sql } from '@vercel/postgres'

async function main(): Promise<void> {
  const RESEND_API_KEY = process.env.RESEND_API_KEY
  const REPORT_EMAIL = process.env.REPORT_EMAIL
  if (!process.env.POSTGRES_URL) throw new Error('POSTGRES_URL not set')
  if (!RESEND_API_KEY) throw new Error('RESEND_API_KEY not set')
  if (!REPORT_EMAIL) throw new Error('REPORT_EMAIL not set')

  const last3h = (
    await sql.query(
      `SELECT COUNT(*)::int AS n FROM questions WHERE created_at > NOW() - INTERVAL '3 hours'`,
    )
  ).rows[0].n as number
  const totalVerified = (
    await sql.query(`SELECT COUNT(*)::int AS n FROM questions WHERE verified = TRUE`)
  ).rows[0].n as number
  const recentRows = (
    await sql.query(
      `SELECT sub_skill, difficulty_band FROM questions
       WHERE created_at > NOW() - INTERVAL '3 hours' AND sub_skill IS NOT NULL
       ORDER BY created_at DESC LIMIT 1`,
    )
  ).rows as Array<{ sub_skill: string; difficulty_band: string }>
  const recent = recentRows[0] ?? { sub_skill: '—', difficulty_band: '—' }

  const date = new Date().toISOString().slice(0, 10)
  const healthy = last3h > 0
  const status = healthy ? '✅ Healthy' : '⚠️ No questions added'

  const text = `PrepOS Cron Report — ${date} 03:00 UTC
─────────────────────────────────
New questions added (last 3h): ${last3h}
Total verified bank:           ${totalVerified}
Sub-skill (most recent):       ${recent.sub_skill}
Difficulty:                    ${recent.difficulty_band}

STATUS: ${status}${
    healthy ? '' : '\nACTION NEEDED: Check Vercel logs for errors at https://vercel.com/dashboard'
  }`

  const actionRow = healthy
    ? ''
    : `<tr><td colspan="2" style="padding:12px 0 0;color:#b45309;font-size:13px;">ACTION NEEDED: Check Vercel logs at <a href="https://vercel.com/dashboard">vercel.com/dashboard</a></td></tr>`

  const html = `<!doctype html><html><body style="margin:0;background:#f6f7f9;padding:24px;font-family:-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;color:#0f172a;">
  <table role="presentation" width="100%" style="max-width:560px;margin:0 auto;background:#fff;border:1px solid #e2e8f0;border-radius:12px;">
    <tr><td style="padding:24px 28px;">
      <div style="font-size:13px;letter-spacing:.02em;color:#64748b;">PrepOS · Generation pipeline</div>
      <div style="font-size:20px;font-weight:700;margin-top:2px;">Cron Report — ${date}</div>
      <div style="font-size:12px;color:#94a3b8;margin-top:2px;">Nightly watcher · 03:00 UTC</div>
      <hr style="border:none;border-top:1px solid #e2e8f0;margin:18px 0;">
      <table role="presentation" width="100%" style="font-size:14px;line-height:1.9;">
        <tr><td style="color:#475569;">New questions added (last 3h)</td><td align="right" style="font-weight:700;">${last3h}</td></tr>
        <tr><td style="color:#475569;">Total verified bank</td><td align="right" style="font-weight:700;">${totalVerified}</td></tr>
        <tr><td style="color:#475569;">Sub-skill (most recent)</td><td align="right" style="font-weight:700;">${recent.sub_skill}</td></tr>
        <tr><td style="color:#475569;">Difficulty</td><td align="right" style="font-weight:700;">${recent.difficulty_band}</td></tr>
        ${actionRow}
      </table>
      <div style="margin-top:18px;padding:12px 14px;border-radius:8px;background:${healthy ? '#ecfdf5' : '#fffbeb'};border:1px solid ${healthy ? '#a7f3d0' : '#fde68a'};font-weight:700;">STATUS: ${status}</div>
    </td></tr>
  </table>
</body></html>`

  if (process.env.DRY_RUN) {
    console.log('DRY_RUN — not sending. Numbers:', { last3h, totalVerified, recent })
    return
  }

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${RESEND_API_KEY}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from: 'PrepOS <onboarding@resend.dev>',
      to: [REPORT_EMAIL],
      subject: `PrepOS Cron Report — ${date}`,
      html,
      text,
    }),
  })
  const body = (await res.json().catch(() => ({}))) as { id?: string }
  console.log('Resend status:', res.status, JSON.stringify(body))
  if (!res.ok) throw new Error(`Resend send failed: ${res.status}`)
  console.log('Email sent, id:', body.id)
}

main().catch((err) => {
  console.error('cron-report failed:', err instanceof Error ? err.message : err)
  process.exit(1)
})
