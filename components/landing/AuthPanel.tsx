'use client'

import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react'

const V = '#6b53ff'
const INK = '#2b2a35'
const FOG = '#6f7387'
const MIST = '#dddfe5'

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

const label: React.CSSProperties = {
  fontFamily: 'var(--font-inter)', fontSize: 13, fontWeight: 600, color: INK,
  letterSpacing: '0.06em', textTransform: 'uppercase', display: 'block', marginBottom: 6,
}
const help: React.CSSProperties = { fontFamily: 'var(--font-inter)', fontSize: 12.5, color: FOG, marginTop: 6, letterSpacing: '0.02em' }

function strengthOf(pw: string): { score: number; label: string; color: string } {
  if (!pw) return { score: 0, label: '', color: MIST }
  let s = 0
  if (pw.length >= 12) s++
  if (/[A-Z]/.test(pw)) s++
  if (/[0-9]/.test(pw)) s++
  if (/[^A-Za-z0-9]/.test(pw)) s++
  if (pw.length < 8) return { score: 1, label: 'Weak', color: '#EF4444' }
  const map = [
    { label: 'Weak', color: '#EF4444' },
    { label: 'Weak', color: '#EF4444' },
    { label: 'Fair', color: '#F59E0B' },
    { label: 'Good', color: '#ffd02c' },
    { label: 'Strong', color: '#22C55E' },
  ]
  return { score: Math.max(1, s), ...map[Math.max(1, s)] }
}

export default function AuthPanel() {
  const router = useRouter()
  const [tab, setTab] = useState<'create' | 'signin'>('create')

  return (
    <div style={{ width: '100%', maxWidth: 460, margin: '0 auto' }}>
      <div role="tablist" style={{ display: 'flex', gap: 28, borderBottom: `1px solid ${MIST}`, marginBottom: 28 }}>
        {(['create', 'signin'] as const).map((t) => (
          <button
            key={t}
            role="tab"
            aria-selected={tab === t}
            onClick={() => setTab(t)}
            className="lp-tab"
            style={{
              background: 'none', border: 'none', cursor: 'pointer', padding: '0 0 12px',
              fontFamily: 'var(--font-inter)', fontSize: 13, fontWeight: 600, letterSpacing: '0.1em',
              textTransform: 'uppercase', color: tab === t ? V : FOG,
              borderBottom: `2px solid ${tab === t ? V : 'transparent'}`, marginBottom: -1,
            }}
          >
            {t === 'create' ? 'Create account' : 'Sign in'}
          </button>
        ))}
      </div>
      {tab === 'create' ? <CreateForm router={router} /> : <SignInForm router={router} />}
    </div>
  )
}

function inputStyle(state: 'default' | 'ok' | 'err' = 'default'): React.CSSProperties {
  return {
    width: '100%', padding: '12px 16px', borderRadius: 6, fontSize: 16,
    fontFamily: 'var(--font-inter)', letterSpacing: '0.02em', color: INK, background: '#fff',
    border: `1px solid ${state === 'ok' ? '#22C55E' : state === 'err' ? '#EF4444' : MIST}`,
    outline: 'none',
  }
}

const primaryBtn: React.CSSProperties = {
  width: '100%', padding: '13px 20px', borderRadius: 20, border: 'none', cursor: 'pointer',
  background: V, color: '#fff', fontFamily: 'var(--font-inter)', fontSize: 15, fontWeight: 600,
  letterSpacing: '0.1em', marginTop: 4,
}
const googleBtn: React.CSSProperties = {
  width: '100%', padding: '12px 20px', borderRadius: 20, cursor: 'pointer',
  background: '#fff', color: INK, border: `1px solid ${MIST}`, fontFamily: 'var(--font-inter)',
  fontSize: 15, fontWeight: 600, letterSpacing: '0.06em', display: 'flex', alignItems: 'center',
  justifyContent: 'center', gap: 10,
}

function Divider() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, margin: '20px 0' }}>
      <div style={{ flex: 1, height: 1, background: MIST }} />
      <span style={{ fontFamily: 'var(--font-inter)', fontSize: 13, color: FOG, letterSpacing: '0.1em' }}>or</span>
      <div style={{ flex: 1, height: 1, background: MIST }} />
    </div>
  )
}

function SchoolNote() {
  return (
    <p style={{ ...help, textAlign: 'center', marginTop: 10 }}>
      Note: Google sign-in may be blocked on school Chromebooks. Use email signup instead.
    </p>
  )
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
      const r = await fetch('/api/auth/signup', {
        method: 'POST', headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ username, email, password, confirmPassword: confirm }),
      })
      const j = await r.json()
      if (!r.ok) { setError(j.error ?? 'Something went wrong.'); setBusy(false); return }
      // Auto sign-in with the credentials we just created.
      const res = await signIn('credentials', { email, password, redirect: false })
      if (res?.error) { setError('Account created — please sign in.'); setBusy(false); return }
      router.push('/')
      router.refresh()
    } catch {
      setError('Network error. Try again.')
      setBusy(false)
    }
  }

  const availUi = {
    checking: <span style={{ ...help, color: FOG }}>Checking…</span>,
    ok: <span style={{ ...help, color: '#22C55E', fontWeight: 600 }}>✓ Available</span>,
    taken: <span style={{ ...help, color: '#EF4444', fontWeight: 600 }}>✕ Taken</span>,
    invalid: <span style={{ ...help, color: '#EF4444' }}>3–20 chars · letters, numbers, underscores</span>,
  } as const

  return (
    <form onSubmit={submit} noValidate>
      <div style={{ marginBottom: 18 }}>
        <label style={label} htmlFor="lp-username">Username</label>
        <input id="lp-username" className="lp-input" value={username} onChange={(e) => setUsername(e.target.value)}
          placeholder="your_username" autoComplete="username"
          style={inputStyle(avail === 'ok' ? 'ok' : avail === 'taken' || avail === 'invalid' ? 'err' : 'default')} />
        {avail ? availUi[avail] : <p style={help}>This is how you&apos;ll appear on PrepOS. No spaces.</p>}
      </div>

      <div style={{ marginBottom: 18 }}>
        <label style={label} htmlFor="lp-email">Email</label>
        <input id="lp-email" className="lp-input" type="email" value={email} onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com" autoComplete="email" style={inputStyle()} />
      </div>

      <div style={{ marginBottom: 18 }}>
        <label style={label} htmlFor="lp-password">Password</label>
        <div style={{ position: 'relative' }}>
          <input id="lp-password" className="lp-input" type={showPw ? 'text' : 'password'} value={password}
            onChange={(e) => setPassword(e.target.value)} placeholder="Min. 8 characters" autoComplete="new-password"
            style={{ ...inputStyle(), paddingRight: 64 }} />
          <button type="button" onClick={() => setShowPw((s) => !s)}
            style={{ position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: FOG, fontFamily: 'var(--font-inter)', fontSize: 12, fontWeight: 600, letterSpacing: '0.08em' }}>
            {showPw ? 'HIDE' : 'SHOW'}
          </button>
        </div>
        {password && (
          <div style={{ marginTop: 8 }}>
            <div style={{ display: 'flex', gap: 4 }}>
              {[0, 1, 2, 3].map((i) => (
                <div key={i} style={{ flex: 1, height: 4, borderRadius: 2, background: i < strength.score ? strength.color : MIST }} />
              ))}
            </div>
            <span style={{ ...help, color: strength.color, fontWeight: 600, marginTop: 5 }}>{strength.label}</span>
          </div>
        )}
      </div>

      <div style={{ marginBottom: 22 }}>
        <label style={label} htmlFor="lp-confirm">Confirm password</label>
        <input id="lp-confirm" className="lp-input" type={showPw ? 'text' : 'password'} value={confirm}
          onChange={(e) => setConfirm(e.target.value)} placeholder="Repeat password" autoComplete="new-password"
          style={inputStyle(matches ? 'ok' : confirm ? 'err' : 'default')} />
        {confirm && <span style={{ ...help, color: matches ? '#22C55E' : '#EF4444', fontWeight: 600 }}>{matches ? '✓ Passwords match' : 'Passwords do not match'}</span>}
      </div>

      {error && <p style={{ ...help, color: '#EF4444', fontWeight: 600, marginBottom: 12, marginTop: 0 }}>{error}</p>}

      <button type="submit" className="lp-primary" style={{ ...primaryBtn, opacity: busy ? 0.7 : 1 }} disabled={busy}>
        {busy ? 'Creating…' : 'Create my PrepOS account'}
      </button>
      <p style={{ ...help, textAlign: 'center', marginTop: 12 }}>By signing up you agree to use this tool to actually study.</p>

      <Divider />
      <button type="button" className="lp-google" style={googleBtn} onClick={() => signIn('google', { callbackUrl: '/' })}>
        <GoogleG /> Continue with Google
      </button>
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
      <div style={{ marginBottom: 18 }}>
        <label style={label} htmlFor="si-email">Email</label>
        <input id="si-email" className="lp-input" type="email" value={email} onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com" autoComplete="email" style={inputStyle()} />
      </div>
      <div style={{ marginBottom: 22 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
          <label style={label} htmlFor="si-password">Password</label>
          <a href="mailto:ayyappan.adithiyakrishna@gmail.com?subject=PrepOS%20password%20reset"
            style={{ fontFamily: 'var(--font-inter)', fontSize: 13, color: V, letterSpacing: '0.04em', textDecoration: 'none' }}>
            Forgot password?
          </a>
        </div>
        <input id="si-password" className="lp-input" type="password" value={password} onChange={(e) => setPassword(e.target.value)}
          placeholder="Your password" autoComplete="current-password" style={inputStyle()} />
      </div>
      {error && <p style={{ ...help, color: '#EF4444', fontWeight: 600, marginBottom: 12, marginTop: 0 }}>{error}</p>}
      <button type="submit" className="lp-primary" style={{ ...primaryBtn, opacity: busy ? 0.7 : 1 }} disabled={busy}>
        {busy ? 'Signing in…' : 'Sign in to PrepOS'}
      </button>
      <Divider />
      <button type="button" className="lp-google" style={googleBtn} onClick={() => signIn('google', { callbackUrl: '/' })}>
        <GoogleG /> Continue with Google
      </button>
      <SchoolNote />
    </form>
  )
}
