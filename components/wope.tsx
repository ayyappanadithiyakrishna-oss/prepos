'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

// ── Wope "violet horizon" tokens ─────────────────────────────────────────
export const C = {
  bg: '#0a0118',
  text: '#ffffff',
  steel: '#d2d0dd',
  muted: '#9b96b0',
  fog: '#85808c',
  uv: '#713dff',
  lilac: '#b7a4fb',
  horizon: '#8562ff',
  veil: '#16092a',
  border: 'rgba(255,255,255,0.10)',
  borderSoft: 'rgba(255,255,255,0.06)',
  glass04: 'rgba(255,255,255,0.04)',
  glass02: 'rgba(255,255,255,0.02)',
}
export const DISPLAY = 'var(--font-rebond)'
export const UI = 'var(--font-inter)'
export const MAXW = 1248

export const glassPill: React.CSSProperties = {
  fontFamily: UI, fontSize: 14, fontWeight: 500, color: C.text, letterSpacing: '-0.16px',
  background: C.glass04, border: `1px solid ${C.border}`, borderRadius: 999, padding: '8px 20px',
  textDecoration: 'none', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 8,
  transition: 'background 0.18s, border-color 0.18s',
}
export const ghostPill: React.CSSProperties = {
  fontFamily: UI, fontSize: 14, fontWeight: 500, color: C.muted, letterSpacing: '-0.16px',
  background: 'transparent', border: `1px solid ${C.border}`, borderRadius: 999, padding: '8px 18px',
  textDecoration: 'none', cursor: 'pointer', display: 'inline-flex', alignItems: 'center',
  transition: 'color 0.18s, border-color 0.18s',
}
// The one saturated action — a lit violet pill with a soft glow.
export const uvPill: React.CSSProperties = {
  fontFamily: UI, fontSize: 15, fontWeight: 500, color: C.text, letterSpacing: '-0.16px',
  background: `linear-gradient(180deg, ${C.horizon}, ${C.uv})`, border: `1px solid rgba(183,164,251,0.4)`,
  borderRadius: 999, padding: '9px 24px', textDecoration: 'none', cursor: 'pointer',
  display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8,
  boxShadow: '0 6px 30px rgba(113,61,255,0.45)', transition: 'filter 0.18s, box-shadow 0.18s',
}

export function OwlMark({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden>
      <g transform="translate(16 16) scale(1.1) translate(-16 -16)">
        <path d="M5.5 12 L10 3 L14.5 12.5 Z" fill={C.horizon} />
        <path d="M26.5 12 L22 3 L17.5 12.5 Z" fill={C.horizon} />
        <path d="M16 5.5 C24 5.5 27.5 11.5 27.5 18 C27.5 25 22.2 29.5 16 29.5 C9.8 29.5 4.5 25 4.5 18 C4.5 11.5 8 5.5 16 5.5 Z" fill={C.uv} />
        <circle cx="11.6" cy="16" r="4.3" fill="#fff" /><circle cx="20.4" cy="16" r="4.3" fill="#fff" />
        <circle cx="12.3" cy="16.4" r="2" fill="#1a0838" /><circle cx="19.7" cy="16.4" r="2" fill="#1a0838" />
        <path d="M16 19 L18.1 21.6 L16 24 L13.9 21.6 Z" fill={C.lilac} />
      </g>
    </svg>
  )
}

export function WopeHeader() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24)
    on(); window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])
  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50, height: 78,
      transition: 'background 0.25s, border-color 0.25s',
      // Near-opaque solid instead of backdrop-filter: a blurred fixed bar
      // re-samples the big violet gradients every scroll frame, which is the
      // main source of scroll jank on this page. The dark canvas makes the
      // solid read almost identically.
      background: scrolled ? 'rgba(9,2,20,0.92)' : 'transparent',
      borderBottom: `1px solid ${scrolled ? C.borderSoft : 'transparent'}`,
    }}>
      <div style={{ maxWidth: MAXW, margin: '0 auto', padding: '0 24px', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          <OwlMark size={30} />
          <span style={{ fontFamily: UI, fontWeight: 700, fontSize: 20, color: C.text, letterSpacing: '-0.4px' }}>PrepOS</span>
        </Link>
        <nav className="wope-nav" style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          <a href="/#how" className="wope-navlink" style={{ fontFamily: UI, fontSize: 14, color: C.muted, textDecoration: 'none', padding: '4px 16px', letterSpacing: '-0.28px' }}>How it works</a>
          <a href="/#covers" className="wope-navlink" style={{ fontFamily: UI, fontSize: 14, color: C.muted, textDecoration: 'none', padding: '4px 16px', letterSpacing: '-0.28px' }}>What&apos;s covered</a>
          <a href="/#faq" className="wope-navlink" style={{ fontFamily: UI, fontSize: 14, color: C.muted, textDecoration: 'none', padding: '4px 16px', letterSpacing: '-0.28px' }}>FAQ</a>
        </nav>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <a href="/#auth" className="wope-ghost wope-loginpill" style={ghostPill}>Log in</a>
          <a href="/#auth" className="wope-glass" style={glassPill}>Sign up free</a>
        </div>
      </div>
    </header>
  )
}

const FOOT_COLS = [
  { title: 'Product', links: [['How it works', '/#how'], ['What’s covered', '/#covers'], ['FAQ', '/#faq'], ['Create account', '/#auth']] },
  { title: 'Company', links: [['Who we are', '/about'], ['Contact', '/contact']] },
  { title: 'Legal', links: [['Terms of Service', '/terms'], ['Privacy Policy', '/privacy']] },
]

export function WopeFooter() {
  return (
    <footer style={{ borderTop: `1px solid ${C.borderSoft}`, background: C.bg, position: 'relative', zIndex: 1 }}>
      <div style={{ maxWidth: MAXW, margin: '0 auto', padding: '64px 24px 40px', display: 'grid', gridTemplateColumns: '1.5fr repeat(3, 1fr)', gap: 40 }} className="wope-foot-grid">
        <div style={{ maxWidth: 300 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <OwlMark size={26} />
            <span style={{ fontFamily: UI, fontWeight: 700, fontSize: 18, color: C.text, letterSpacing: '-0.36px' }}>PrepOS</span>
          </div>
          <p style={{ fontFamily: UI, fontSize: 14, color: C.muted, lineHeight: 1.6, marginTop: 14, letterSpacing: '-0.28px' }}>
            A personal prep tool for the digital SAT Math and AP Precalculus. Built by one brother for another.
          </p>
        </div>
        {FOOT_COLS.map((col) => (
          <div key={col.title}>
            <h4 style={{ fontFamily: UI, fontSize: 13, fontWeight: 500, color: C.fog, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 16 }}>{col.title}</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 11 }}>
              {col.links.map(([label, href]) => (
                <li key={label}>
                  <Link href={href} className="wope-navlink" style={{ fontFamily: UI, fontSize: 14, color: C.muted, textDecoration: 'none', letterSpacing: '-0.28px' }}>{label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div style={{ maxWidth: MAXW, margin: '0 auto', padding: '0 24px 40px', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
        <span style={{ fontFamily: UI, fontSize: 13, color: C.fog, letterSpacing: '-0.28px' }}>© {new Date().getFullYear()} PrepOS. Made for studying, not for sale.</span>
        <a href="mailto:ayyappan.adithiyakrishna@gmail.com" className="wope-navlink" style={{ fontFamily: UI, fontSize: 13, color: C.fog, textDecoration: 'none', letterSpacing: '-0.28px' }}>ayyappan.adithiyakrishna@gmail.com</a>
      </div>
    </footer>
  )
}

// Shared interaction + responsive CSS for all Wope surfaces.
export function WopeStyle() {
  return (
    <style>{`
      html { scroll-behavior: smooth; }
      @media (prefers-reduced-motion: reduce) { html { scroll-behavior: auto; } }
      .wope-navlink:hover { color: #fff !important; }
      .wope-glass:hover { background: rgba(255,255,255,0.08) !important; border-color: rgba(255,255,255,0.2) !important; }
      .wope-ghost:hover { color: #fff !important; border-color: rgba(255,255,255,0.24) !important; }
      .wope-uv:hover { filter: brightness(1.08); box-shadow: 0 8px 40px rgba(113,61,255,0.6) !important; }
      .wope-input { background: transparent; border: none; border-bottom: 1px solid rgba(255,255,255,0.14); border-radius: 0; color: #fff; font-family: var(--font-inter); font-size: 16px; letter-spacing: -0.16px; padding: 12px 2px; width: 100%; outline: none; transition: border-color 0.18s; }
      .wope-input::placeholder { color: #85808c; }
      .wope-input:focus { border-bottom-color: #713dff; }
      @media (max-width: 860px) {
        .wope-nav { display: none !important; }
        .wope-foot-grid { grid-template-columns: 1fr 1fr !important; }
      }
      @media (max-width: 560px) {
        .wope-foot-grid { grid-template-columns: 1fr !important; }
        .wope-loginpill { display: none !important; }
      }
    `}</style>
  )
}
