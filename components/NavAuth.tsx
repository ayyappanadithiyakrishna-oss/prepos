'use client'

import { useSession, signIn, signOut } from 'next-auth/react'
import { LogIn, LogOut } from 'lucide-react'

// Google "G" mark (official 4-color), sized for the nav button.
function GoogleG({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" aria-hidden>
      <path fill="#EA4335" d="M24 9.5c3.54 0 6.7 1.22 9.2 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
      <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
      <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
      <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
    </svg>
  )
}

export default function NavAuth() {
  const { data: session, status } = useSession()

  const box = { borderTop: '1px solid var(--border)' } as const

  if (status === 'loading') {
    return <div className="px-4 py-3" style={box}><span style={{ fontSize: 11, color: 'var(--text-muted)' }}>…</span></div>
  }

  if (session?.user) {
    return (
      <div className="px-4 py-3 flex items-center gap-2" style={box}>
        {session.user.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={session.user.image} alt="" width={26} height={26} style={{ borderRadius: '50%', flexShrink: 0 }} />
        ) : (
          <div style={{ width: 26, height: 26, borderRadius: '50%', background: 'var(--primary-theme-dim)', flexShrink: 0 }} />
        )}
        <div style={{ flex: 1, minWidth: 0 }}>
          <p style={{ fontSize: 11, fontWeight: 600, color: 'var(--text-primary)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', margin: 0 }}>
            {session.user.name ?? session.user.email}
          </p>
        </div>
        <button
          onClick={() => signOut({ callbackUrl: '/' })}
          title="Sign out"
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)', display: 'flex', padding: 4 }}
        >
          <LogOut size={15} />
        </button>
      </div>
    )
  }

  return (
    <div className="px-4 py-3" style={box}>
      <button
        onClick={() => signIn('google', { callbackUrl: '/sat' })}
        className="w-full flex items-center justify-center gap-2 cursor-pointer"
        style={{
          padding: '9px 12px', borderRadius: 10, border: '1px solid var(--border)',
          background: 'var(--bg-card)', color: 'var(--text-primary)',
          fontFamily: 'var(--font-heading, Space Grotesk, sans-serif)', fontSize: 12, fontWeight: 600,
        }}
      >
        <GoogleG size={15} /> Sign in with Google
      </button>
    </div>
  )
}
