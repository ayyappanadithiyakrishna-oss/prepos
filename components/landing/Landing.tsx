'use client'

import { useEffect, useState } from 'react'
import AuthPanel from './AuthPanel'

const V = '#6b53ff'
const INDIGO = '#371789'
const INK = '#2b2a35'
const STEEL = '#3f4250'
const FOG = '#6f7387'
const MIST = '#dddfe5'
const MARBLE = '#f0eff4'

function OwlMark({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden>
      <path d="M5.5 12 L10 3 L14.5 12.5 Z" fill={V} />
      <path d="M26.5 12 L22 3 L17.5 12.5 Z" fill={V} />
      <path d="M16 5.5 C24 5.5 27.5 11.5 27.5 18 C27.5 25 22.2 29.5 16 29.5 C9.8 29.5 4.5 25 4.5 18 C4.5 11.5 8 5.5 16 5.5 Z" fill={V} />
      <circle cx="11.6" cy="16" r="4.3" fill="#fff" />
      <circle cx="20.4" cy="16" r="4.3" fill="#fff" />
      <circle cx="12.3" cy="16.4" r="2" fill={INDIGO} />
      <circle cx="19.7" cy="16.4" r="2" fill={INDIGO} />
      <path d="M16 19 L18.1 21.6 L16 24 L13.9 21.6 Z" fill={INDIGO} />
    </svg>
  )
}

const wrap: React.CSSProperties = { maxWidth: 1200, margin: '0 auto', padding: '0 24px' }
const ui: React.CSSProperties = { fontFamily: 'var(--font-inter)', letterSpacing: '0.1em' }
const display = (size: number): React.CSSProperties => ({
  fontFamily: 'var(--font-inter)', fontWeight: 900, letterSpacing: '-0.02em', lineHeight: 1.02,
  fontSize: size,
})

type Domain = { name: string; weight: string; sentence: string; band: [number, number] | null }
const DOMAINS: Domain[] = [
  { name: 'Algebra', weight: '35% of exam', sentence: 'Linear equations, systems, and inequalities — the foundation everything else builds on.', band: [470, 540] },
  { name: 'Advanced Math', weight: '35% of exam', sentence: 'Nonlinear functions, quadratics, and polynomials. The other half of the point pool.', band: null },
  { name: 'Problem-Solving & Data', weight: '15% of exam', sentence: 'Ratios, rates, percentages, and reading real data without falling for the setup.', band: null },
  { name: 'Geometry & Trig', weight: '15% of exam', sentence: 'Angles, triangles, circles, and right-triangle trig. High priority for you.', band: [470, 540] },
]

function DomainCard({ d }: { d: Domain }) {
  const lo = d.band ? ((d.band[0] - 200) / 600) * 100 : 0
  const width = d.band ? ((d.band[1] - d.band[0]) / 600) * 100 : 0
  return (
    <div style={{ background: '#fff', borderRadius: 26, padding: 24, border: `1px solid ${MIST}`, boxShadow: 'rgba(0,0,0,0.05) 0px 3px 10px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12 }}>
        <h3 style={{ ...ui, letterSpacing: '0.02em', fontSize: 18, fontWeight: 700, color: INK }}>{d.name}</h3>
        <span style={{ ...ui, fontSize: 12, fontWeight: 600, textTransform: 'uppercase', color: '#fff', background: V, padding: '4px 12px', borderRadius: 20, whiteSpace: 'nowrap' }}>{d.weight}</span>
      </div>
      <p style={{ ...ui, letterSpacing: '0.04em', fontSize: 13, color: FOG, marginTop: 12 }}>
        {d.band ? `Typical starting range: ${d.band[0]}–${d.band[1]}` : 'Not yet diagnosed — take the placement'}
      </p>
      <div style={{ position: 'relative', height: 8, borderRadius: 6, background: MARBLE, marginTop: 10, overflow: 'hidden' }}>
        {d.band && <div style={{ position: 'absolute', left: `${lo}%`, width: `${width}%`, top: 0, bottom: 0, background: V, borderRadius: 6 }} />}
      </div>
      <p style={{ ...ui, letterSpacing: '0.03em', fontSize: 14, color: STEEL, marginTop: 14, lineHeight: 1.5 }}>{d.sentence}</p>
    </div>
  )
}

const STEPS = [
  { n: '01', h: 'Take the diagnostic', b: '15 questions across all four SAT domains. PrepOS maps exactly which sub-skills you’re losing points on — not just which domain.' },
  { n: '02', h: 'Practice what’s broken', b: 'Verified questions at your exact difficulty band. Every wrong answer shows you the trap you fell for — the specific mistake the SAT designed to catch you making.' },
  { n: '03', h: 'Watch mastery compound', b: 'Your mastery score updates in real time. Questions get harder as you improve. Locked domains unlock when you’re ready for them.' },
]

export default function Landing({ stats }: { stats: { verifiedQuestions: number; subSkills: number; domains: number } }) {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const goAuth = () => document.getElementById('auth')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <div style={{ background: MARBLE, minHeight: '100vh', fontFamily: 'var(--font-inter)' }}>
      <style>{`
        .lp-input:focus { border-color: ${V} !important; box-shadow: 0 0 0 3px rgba(107,83,255,0.15); }
        .lp-primary:hover { background: #5a41f0; }
        .lp-google:hover, .lp-ghost:hover { background: rgba(255,255,255,0.08); }
        .lp-white:hover { background: #f3f2f8; }
        .lp-nav-cta:hover { transform: translateY(-1px); }
        html { scroll-behavior: smooth; }
        @media (prefers-reduced-motion: reduce) { html { scroll-behavior: auto; } }
        @media (max-width: 720px) {
          .lp-hero-h { font-size: 42px !important; }
          .lp-nav-links { display: none !important; }
          .lp-stats-bar { grid-template-columns: repeat(2, 1fr) !important; }
          .lp-domains { grid-template-columns: 1fr !important; }
          .lp-steps { grid-template-columns: 1fr !important; }
          .lp-hero-stats { flex-direction: column !important; gap: 10px !important; }
        }
      `}</style>

      {/* NAV */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50, transition: 'background 0.25s, box-shadow 0.25s',
        background: scrolled ? 'rgba(10,10,15,0.9)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none', WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'none',
      }}>
        <div style={{ ...wrap, display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 68 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 11 }}>
            <OwlMark size={32} />
            <span style={{ ...ui, fontWeight: 700, fontSize: 23, color: '#fff' }}>PrepOS</span>
          </div>
          <div className="lp-nav-links" style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <button onClick={goAuth} className="lp-ghost lp-nav-cta" style={{ ...ui, fontWeight: 600, fontSize: 14, color: '#fff', background: 'transparent', border: '1.5px solid rgba(255,255,255,0.6)', borderRadius: 20, padding: '9px 18px', cursor: 'pointer', transition: 'transform 0.15s, background 0.15s' }}>Sign in</button>
            <button onClick={goAuth} className="lp-white lp-nav-cta" style={{ ...ui, fontWeight: 600, fontSize: 14, color: INK, background: '#fff', border: 'none', borderRadius: 20, padding: '10px 18px', cursor: 'pointer', transition: 'transform 0.15s, background 0.15s' }}>Sign up free</button>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <header style={{ position: 'relative', overflow: 'hidden', background: 'linear-gradient(90deg, rgb(83,24,235), rgb(171,110,249))', padding: '150px 0 96px' }}>
        <div aria-hidden style={{ position: 'absolute', top: -80, left: -60, width: 280, height: 280, borderRadius: '50%', background: INDIGO, opacity: 0.16, filter: 'blur(8px)' }} />
        <div aria-hidden style={{ position: 'absolute', top: 40, right: -70, width: 220, height: 220, borderRadius: 48, background: INDIGO, opacity: 0.14, transform: 'rotate(20deg)' }} />
        <div style={{ ...wrap, position: 'relative', textAlign: 'center' }}>
          <div style={{ maxWidth: 680, margin: '0 auto' }}>
            <span style={{ ...ui, display: 'inline-block', fontSize: 13, fontWeight: 600, textTransform: 'uppercase', color: '#fff', background: 'rgba(255,255,255,0.16)', border: '1px solid rgba(255,255,255,0.25)', padding: '5px 14px', borderRadius: 20 }}>SAT Math · AP Precalculus</span>
            <h1 className="lp-hero-h" style={{ ...display(66), color: '#fff', margin: '24px 0 0', textWrap: 'balance' }}>
              Stop losing points you already know how to get.
            </h1>
            <p style={{ ...ui, letterSpacing: '0.04em', fontSize: 20, fontWeight: 400, lineHeight: 1.6, color: 'rgba(255,255,255,0.88)', maxWidth: 540, margin: '22px auto 0' }}>
              PrepOS finds your exact weak spots and serves verified practice questions until they stop being weak spots. Built for the SAT and AP Precalculus. Free forever.
            </p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', marginTop: 34, flexWrap: 'wrap' }}>
              <button onClick={goAuth} className="lp-white lp-nav-cta" style={{ ...ui, fontWeight: 600, fontSize: 15, color: INK, background: '#fff', border: 'none', borderRadius: 20, padding: '13px 26px', cursor: 'pointer', transition: 'transform 0.15s, background 0.15s' }}>Sign up free</button>
              <button onClick={goAuth} className="lp-ghost lp-nav-cta" style={{ ...ui, fontWeight: 600, fontSize: 15, color: '#fff', background: 'transparent', border: '1.5px solid rgba(255,255,255,0.6)', borderRadius: 20, padding: '13px 26px', cursor: 'pointer', transition: 'transform 0.15s, background 0.15s' }}>Sign in</button>
            </div>
            <div className="lp-hero-stats" style={{ display: 'flex', gap: 24, justifyContent: 'center', marginTop: 40, color: '#fff' }}>
              <HeroStat value={`${stats.verifiedQuestions}`} label="verified questions" />
              <Dot />
              <HeroStat value={`${stats.subSkills}`} label="sub-skills" />
              <Dot />
              <HeroStat value="4" label="SAT domains" />
            </div>
          </div>
        </div>
      </header>

      {/* STATS BAR */}
      <section style={{ background: '#fff', borderTop: `1px solid ${MIST}`, borderBottom: `1px solid ${MIST}` }}>
        <div className="lp-stats-bar" style={{ ...wrap, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', padding: '56px 24px' }}>
          <BarStat value={`${stats.verifiedQuestions}+`} label="Verified Questions" />
          <BarStat value={`${stats.subSkills}`} label="Algebra Sub-skills" />
          <BarStat value="4" label="SAT Domains" />
          <BarStat value="Free" label="Forever" />
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section style={{ background: MARBLE, padding: '80px 0' }}>
        <div style={wrap}>
          <h2 style={{ ...display(40), color: INK, textAlign: 'center', marginBottom: 48 }}>How PrepOS works</h2>
          <div className="lp-steps" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
            {STEPS.map((s) => (
              <div key={s.n} style={{ background: '#fff', borderRadius: 26, padding: 24, border: `1px solid ${MIST}`, boxShadow: 'rgba(0,0,0,0.05) 0px 3px 10px' }}>
                <div style={{ ...display(48), color: V, marginBottom: 10 }}>{s.n}</div>
                <h3 style={{ ...ui, letterSpacing: '0.02em', fontSize: 20, fontWeight: 700, color: INK, marginBottom: 10 }}>{s.h}</h3>
                <p style={{ ...ui, letterSpacing: '0.03em', fontSize: 15, color: STEEL, lineHeight: 1.6 }}>{s.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DOMAIN BREAKDOWN */}
      <section style={{ background: '#fff', padding: '80px 0' }}>
        <div style={wrap}>
          <h2 style={{ ...display(40), color: INK, textAlign: 'center', marginBottom: 12 }}>Where your points are</h2>
          <p style={{ ...ui, letterSpacing: '0.04em', fontSize: 16, color: FOG, textAlign: 'center', marginBottom: 44, maxWidth: 520, marginLeft: 'auto', marginRight: 'auto' }}>
            The digital SAT Math section is four domains. Here&apos;s the structure — and where you&apos;re starting from.
          </p>
          <div className="lp-domains" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, maxWidth: 900, margin: '0 auto' }}>
            {DOMAINS.map((d) => <DomainCard key={d.name} d={d} />)}
          </div>
        </div>
      </section>

      {/* AUTH */}
      <section id="auth" style={{ background: MARBLE, padding: '80px 0 96px' }}>
        <div style={wrap}>
          <h2 style={{ ...display(40), color: INK, textAlign: 'center', marginBottom: 40 }}>Start grinding</h2>
          <div style={{ background: '#fff', borderRadius: 26, padding: '40px 28px', maxWidth: 520, margin: '0 auto', boxShadow: 'rgba(103,110,144,0.2) 0px 8px 26px' }}>
            <AuthPanel />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: '#0A0A0F', padding: '32px 0' }}>
        <div style={{ ...wrap, display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <OwlMark size={24} />
            <span style={{ ...ui, fontWeight: 700, fontSize: 18, color: '#fff' }}>PrepOS</span>
          </div>
          <span style={{ ...ui, letterSpacing: '0.04em', fontSize: 13, color: '#8888AA' }}>Built for one student. From 470 to 800, one sub-skill at a time.</span>
        </div>
      </footer>
    </div>
  )
}

function HeroStat({ value, label }: { value: string; label: string }) {
  return (
    <div style={{ textAlign: 'center' }}>
      <span style={{ fontFamily: 'var(--font-inter)', fontWeight: 700, fontSize: 22, fontVariantNumeric: 'tabular-nums' }}>{value}</span>{' '}
      <span style={{ ...ui, letterSpacing: '0.06em', fontSize: 14, opacity: 0.85 }}>{label}</span>
    </div>
  )
}
function Dot() { return <span aria-hidden style={{ opacity: 0.5 }}>·</span> }

function BarStat({ value, label }: { value: string; label: string }) {
  return (
    <div style={{ textAlign: 'center' }}>
      <div style={{ fontFamily: 'var(--font-inter)', fontWeight: 800, fontSize: 40, color: '#6b53ff', letterSpacing: '-0.01em', fontVariantNumeric: 'tabular-nums' }}>{value}</div>
      <div style={{ ...ui, fontSize: 13, fontWeight: 400, textTransform: 'uppercase', color: FOG, marginTop: 6 }}>{label}</div>
    </div>
  )
}
