'use client'

import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react'
import { C, UI, uvPill, glassPill } from '@/components/wope'

const ROSE = '#ff7a93'

function GoogleG({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" aria-hidden>
      <path fill="#EA4335" d="M24 9.5c3.54 0 6.7 1.22 9.2 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
      <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
      <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
      <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
    </svg>
  )
}

const label: React.CSSProperties = { fontFamily: UI, fontSize: 12, fontWeight: 500, color: C.fog, letterSpacing: '0.06em', textTransform: 'uppercase', display: 'block', marginBottom: 8, textAlign: 'left' }
const help = (color = C.fog): React.CSSProperties => ({ fontFamily: UI, fontSize: 12.5, color, marginTop: 8, letterSpacing: '-0.16px', textAlign: 'left' })

// Password strength as a violet-intensity ramp (on-brand: no green/amber).
function strengthOf(pw: string): { score: number; label: string; color: string } {
  if (!pw) return { score: 0, label: '', color: 'rgba(255,255,255,0.1)' }
  let s = 0
  if (pw.length >= 12) s++
  if (/[A-Z]/.test(pw)) s++
  if (/[0-9]/.test(pw)) s++
  if (/[^A-Za-z0-9]/.test(pw)) s++
  if (pw.length < 8) return { score: 1, label: 'Too short', color: '#5b5570' }
  const map = [
    { label: 'Weak', color: '#5b5570' },
    { label: 'Weak', color: '#6f649b' },
    { label: 'Fair', color: '#8b7fd0' },
    { label: 'Good', color: C.lilac },
    { label: 'Strong', color: C.uv },
  ]
  return { score: Math.max(1, s), ...map[Math.max(1, s)] }
}

export default function AuthPanel() {
  const router = useRouter()
  const [tab, setTab] = useState<'create' | 'signin'>('create')
  return (
    <div style={{ width: '100%', maxWidth: 420, margin: '0 auto' }}>
      <div role="tablist" style={{ display: 'flex', gap: 28, borderBottom: `1px solid ${C.border}`, marginBottom: 26 }}>
        {(['create', 'signin'] as const).map((t) => (
          <button key={t} role="tab" aria-selected={tab === t} onClick={() => setTab(t)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '0 0 12px', fontFamily: UI, fontSize: 13, fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', color: tab === t ? C.text : C.fog, borderBottom: `2px solid ${tab === t ? C.uv : 'transparent'}`, marginBottom: -1 }}>
            {t === 'create' ? 'Create account' : 'Sign in'}
          </button>
        ))}
      </div>
      {tab === 'create' ? <CreateForm router={router} /> : <SignInForm router={router} />}
    </div>
  )
}

const primaryBtn: React.CSSProperties = { ...uvPill, width: '100%', padding: '12px 20px', marginTop: 6, justifyContent: 'center' }
const googleBtn: React.CSSProperties = { ...glassPill, width: '100%', padding: '11px 20px', justifyContent: 'center' }

function Divider() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, margin: '22px 0' }}>
      <div style={{ flex: 1, height: 1, background: C.border }} />
      <span style={{ fontFamily: UI, fontSize: 13, color: C.fog }}>or</span>
      <div style={{ flex: 1, height: 1, background: C.border }} />
    </div>
  )
}
function SchoolNote() {
  return <p style={{ ...help(C.fog), textAlign: 'center', marginTop: 12 }}>Google sign-in may be blocked on school Chromebooks — use email instead.</p>
}

function CreateForm({ router }: { router: ReturnType<typeof useRouter> }) {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const [showPw, setShowPw] = useState(false)
  const [avail, setAvail] = useState<null | 'checking' | 'ok' | 'taken' | 'invalid'>(null)
  const [error, setError] = useState('')
  const [busy, setBusy] = useState(false)
  const debounce = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    if (debounce.current) clearTimeout(debounce.current)
    if (!username) { setAvail(null); return }
    if (!/^[a-zA-Z0-9_]{3,20}$/.test(username)) { setAvail('invalid'); return }
    setAvail('checking')
    debounce.current = setTimeout(async () => {
      try {
        const r = await fetch(`/api/auth/check-username?username=${encodeURIComponent(username)}`)
        const j = await r.json()
        setAvail(!j.valid ? 'invalid' : j.available ? 'ok' : 'taken')
      } catch { setAvail(null) }
    }, 500)
    return () => { if (debounce.current) clearTimeout(debounce.current) }
  }, [username])

  const strength = strengthOf(password)
  const matches = confirm.length > 0 && confirm === password

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    if (avail === 'taken') return setError('That username is already taken.')
    if (avail === 'invalid') return setError('Username must be 3–20 characters: letters, numbers, underscores.')
    if (password.length < 8) return setError('Password must be at least 8 characters.')
    if (password !== confirm) return setError('Passwords do not match.')
    setBusy(true)
    try {
      const r = await fetch('/api/auth/signup', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ username, email, password, confirmPassword: confirm }) })
      const j = await r.json()
      if (!r.ok) { setError(j.error ?? 'Something went wrong.'); setBusy(false); return }
      const res = await signIn('credentials', { email, password, redirect: false })
      if (res?.error) { setError('Account created — please sign in.'); setBusy(false); return }
      router.push('/'); router.refresh()
    } catch { setError('Network error. Try again.'); setBusy(false) }
  }

  const availUi = {
    checking: <span style={help(C.fog)}>Checking…</span>,
    ok: <span style={help(C.lilac)}>✓ Available</span>,
    taken: <span style={help(ROSE)}>✕ Taken</span>,
    invalid: <span style={help(ROSE)}>3–20 chars · letters, numbers, underscores</span>,
  } as const

  return (
    <form onSubmit={submit} noValidate>
      <div style={{ marginBottom: 20 }}>
        <label style={label} htmlFor="lp-username">Username</label>
        <input id="lp-username" className="wope-input" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="your_username" autoComplete="username" />
        {avail ? availUi[avail] : <p style={help()}>How you’ll appear on PrepOS. No spaces.</p>}
      </div>
      <div style={{ marginBottom: 20 }}>
        <label style={label} htmlFor="lp-email">Email</label>
        <input id="lp-email" className="wope-input" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" autoComplete="email" />
      </div>
      <div style={{ marginBottom: 20 }}>
        <label style={label} htmlFor="lp-password">Password</label>
        <div style={{ position: 'relative' }}>
          <input id="lp-password" className="wope-input" type={showPw ? 'text' : 'password'} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="At least 8 characters" autoComplete="new-password" style={{ paddingRight: 52 }} />
          <button type="button" onClick={() => setShowPw((s) => !s)} style={{ position: 'absolute', right: 2, top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: C.fog, fontFamily: UI, fontSize: 11, fontWeight: 600, letterSpacing: '0.08em' }}>{showPw ? 'HIDE' : 'SHOW'}</button>
        </div>
        {password && (
          <div style={{ marginTop: 10 }}>
            <div style={{ display: 'flex', gap: 4 }}>
              {[0, 1, 2, 3].map((i) => <div key={i} style={{ flex: 1, height: 3, borderRadius: 999, background: i < strength.score ? strength.color : 'rgba(255,255,255,0.08)' }} />)}
            </div>
            <span style={{ ...help(strength.color), fontWeight: 500 }}>{strength.label}</span>
          </div>
        )}
      </div>
      <div style={{ marginBottom: 24 }}>
        <label style={label} htmlFor="lp-confirm">Confirm password</label>
        <input id="lp-confirm" className="wope-input" type={showPw ? 'text' : 'password'} value={confirm} onChange={(e) => setConfirm(e.target.value)} placeholder="Repeat password" autoComplete="new-password" />
        {confirm && <span style={help(matches ? C.lilac : ROSE)}>{matches ? '✓ Passwords match' : 'Passwords do not match'}</span>}
      </div>
      {error && <p style={{ ...help(ROSE), fontWeight: 500, marginTop: 0, marginBottom: 14 }}>{error}</p>}
      <button type="submit" className="wope-uv" style={{ ...primaryBtn, opacity: busy ? 0.7 : 1 }} disabled={busy}>{busy ? 'Creating…' : 'Create my account'}</button>
      <p style={{ ...help(C.fog), textAlign: 'center', marginTop: 12 }}>By signing up you agree to actually use this to study.</p>
      <Divider />
      <button type="button" className="wope-glass" style={googleBtn} onClick={() => signIn('google', { callbackUrl: '/' })}><GoogleG /> Continue with Google</button>
      <SchoolNote />
    </form>
  )
}

function SignInForm({ router }: { router: ReturnType<typeof useRouter> }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [busy, setBusy] = useState(false)

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    setError(''); setBusy(true)
    const res = await signIn('credentials', { email, password, redirect: false })
    if (res?.error) { setError('Wrong email or password.'); setBusy(false); return }
    router.push('/'); router.refresh()
  }

  return (
    <form onSubmit={submit} noValidate>
      <div style={{ marginBottom: 20 }}>
        <label style={label} htmlFor="si-email">Email</label>
        <input id="si-email" className="wope-input" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" autoComplete="email" />
      </div>
      <div style={{ marginBottom: 24 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
          <label style={label} htmlFor="si-password">Password</label>
          <a href="mailto:ayyappan.adithiyakrishna@gmail.com?subject=PrepOS%20password%20reset" style={{ fontFamily: UI, fontSize: 12.5, color: C.lilac, textDecoration: 'none', letterSpacing: '-0.16px' }}>Forgot password?</a>
        </div>
        <input id="si-password" className="wope-input" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Your password" autoComplete="current-password" />
      </div>
      {error && <p style={{ ...help(ROSE), fontWeight: 500, marginTop: 0, marginBottom: 14 }}>{error}</p>}
      <button type="submit" className="wope-uv" style={{ ...primaryBtn, opacity: busy ? 0.7 : 1 }} disabled={busy}>{busy ? 'Signing in…' : 'Sign in'}</button>
      <Divider />
      <button type="button" className="wope-glass" style={googleBtn} onClick={() => signIn('google', { callbackUrl: '/' })}><GoogleG /> Continue with Google</button>
      <SchoolNote />
    </form>
  )
}
