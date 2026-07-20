'use client'

import AuthPanel from './AuthPanel'
import { C, UI, DISPLAY, MAXW, OwlMark, WopeHeader, WopeFooter, WopeStyle, uvPill, glassPill, ghostPill } from '@/components/wope'

const wrap: React.CSSProperties = { maxWidth: MAXW, margin: '0 auto', padding: '0 24px' }
const display = (size: number, tracking = -1.44): React.CSSProperties => ({
  fontFamily: DISPLAY, fontWeight: 700, fontSize: size, lineHeight: 1.05, letterSpacing: `${tracking}px`, color: C.text,
})
const kicker: React.CSSProperties = { fontFamily: UI, fontSize: 13, fontWeight: 500, color: C.lilac, textTransform: 'uppercase', letterSpacing: '0.14em' }
const body: React.CSSProperties = { fontFamily: UI, fontSize: 18, fontWeight: 400, lineHeight: 1.6, color: C.muted, letterSpacing: '-0.36px' }

// ── The signature: a real slice of the PrepOS workspace, lit from beneath ──
function ProductFrame() {
  return (
    <div style={{ position: 'relative', maxWidth: 920, margin: '64px auto 0' }}>
      {/* underglow beam */}
      <div aria-hidden style={{ position: 'absolute', inset: '-8% -6% -22% -6%', background: 'radial-gradient(60% 55% at 50% 8%, rgba(133,98,255,0.55), rgba(113,61,255,0.18) 45%, transparent 72%)', filter: 'blur(28px)', zIndex: 0 }} />
      <div style={{ position: 'relative', zIndex: 1, background: C.bg, border: `1px solid ${C.border}`, borderRadius: 16, overflow: 'hidden', boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.06)' }}>
        {/* window bar */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '13px 18px', borderBottom: `1px solid ${C.borderSoft}` }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
            <OwlMark size={20} />
            <span style={{ fontFamily: UI, fontWeight: 700, fontSize: 14, color: C.text, letterSpacing: '-0.28px' }}>PrepOS</span>
          </div>
          <div style={{ display: 'flex', gap: 18 }}>
            <span style={{ fontFamily: UI, fontSize: 12, fontWeight: 600, color: C.text, letterSpacing: '0.06em', borderBottom: `2px solid ${C.uv}`, paddingBottom: 4 }}>SAT</span>
            <span style={{ fontFamily: UI, fontSize: 12, fontWeight: 500, color: C.fog, letterSpacing: '0.06em', paddingBottom: 4 }}>AP PRECALC</span>
          </div>
          <span style={{ fontFamily: UI, fontSize: 12, color: C.fog, letterSpacing: '-0.28px' }}>Krish</span>
        </div>
        {/* body */}
        <div className="pf-body" style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: 14, padding: 18 }}>
          {/* today's session */}
          <div style={{ background: 'rgba(255,255,255,0.02)', border: `1px solid rgba(255,255,255,0.07)`, borderRadius: 14, padding: 18 }}>
            <span style={{ fontFamily: UI, fontSize: 11, fontWeight: 600, color: C.fog, textTransform: 'uppercase', letterSpacing: '0.12em' }}>Today&apos;s session</span>
            <h3 style={{ fontFamily: UI, fontWeight: 700, fontSize: 22, color: C.text, letterSpacing: '-0.4px', margin: '10px 0 4px' }}>Linear inequalities</h3>
            <p style={{ fontFamily: UI, fontSize: 13, color: C.muted, letterSpacing: '-0.16px' }}>
              <span style={{ color: '#f0b23a' }}>Medium</span> · 5 questions · ~15 min
            </p>
            <div style={{ marginTop: 16 }}>
              <div style={{ height: 8, borderRadius: 999, background: 'rgba(255,255,255,0.06)', overflow: 'hidden' }}>
                <div style={{ width: '42%', height: '100%', borderRadius: 999, background: `linear-gradient(90deg, ${C.horizon}, ${C.uv})` }} />
              </div>
              <span style={{ fontFamily: UI, fontSize: 12, color: C.muted, marginTop: 7, display: 'inline-block', letterSpacing: '-0.16px' }}>42% mastery · climbing</span>
            </div>
            <div style={{ marginTop: 18, display: 'inline-flex', alignItems: 'center', gap: 8, background: `linear-gradient(180deg, ${C.horizon}, ${C.uv})`, borderRadius: 999, padding: '9px 18px', boxShadow: '0 6px 22px rgba(113,61,255,0.4)' }}>
              <span style={{ fontFamily: UI, fontSize: 13, fontWeight: 500, color: '#fff', letterSpacing: '-0.16px' }}>▶ Start session</span>
            </div>
          </div>
          {/* right column: trap + weak spots */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <div style={{ background: 'rgba(113,61,255,0.10)', border: `1px solid rgba(183,164,251,0.28)`, borderRadius: 12, padding: 14 }}>
              <span style={{ fontFamily: UI, fontSize: 10, fontWeight: 700, color: C.lilac, textTransform: 'uppercase', letterSpacing: '0.12em' }}>The trap you fell for</span>
              <p style={{ fontFamily: UI, fontSize: 12.5, color: C.steel, lineHeight: 1.5, marginTop: 7, letterSpacing: '-0.16px' }}>
                You flipped the inequality sign — but you divided by a positive number, so it stays the same.
              </p>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.02)', border: `1px solid rgba(255,255,255,0.07)`, borderRadius: 12, padding: 14 }}>
              <span style={{ fontFamily: UI, fontSize: 10, fontWeight: 700, color: C.fog, textTransform: 'uppercase', letterSpacing: '0.12em' }}>Weak spots</span>
              {[['Absolute value', 18], ['Two-variable systems', 34], ['Linear inequalities', 42]].map(([n, p]) => (
                <div key={n as string} style={{ marginTop: 10 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                    <span style={{ fontFamily: UI, fontSize: 11.5, color: C.steel, letterSpacing: '-0.16px' }}>{n}</span>
                    <span style={{ fontFamily: UI, fontSize: 11, color: C.fog }}>{p}%</span>
                  </div>
                  <div style={{ height: 5, borderRadius: 999, background: 'rgba(255,255,255,0.06)', overflow: 'hidden' }}>
                    <div style={{ width: `${p}%`, height: '100%', borderRadius: 999, background: C.horizon }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const FEATURES = [
  {
    h: 'Verified, not scraped',
    b: 'Every question is machine-checked by a symbolic solver before it reaches you. No wrong answer keys, no typos in the math — the thing you practice is the thing that’s true.',
  },
  {
    h: 'The trap, not just the answer',
    b: 'Miss one and PrepOS names the exact mistake the test wanted you to make — sign flips, off-by-one on the boundary, the distractor built for your habit. You stop repeating it.',
  },
  {
    h: 'Mastery you can’t fake',
    b: 'A skill only counts as mastered after enough correct reps across difficulty bands, including a hard one. Twenty easy questions won’t light it green. Real signal, not a streak.',
  },
]

const STEPS = [
  { n: '01', h: 'Place yourself', b: 'A short diagnostic across all four SAT domains finds the sub-skills draining your score — not just “Algebra,” but which piece of it.' },
  { n: '02', h: 'Drill the leaks', b: 'Verified questions at your exact difficulty. Every wrong answer shows the trap. The set adapts as you go, never wasting a rep on what you already own.' },
  { n: '03', h: 'Watch it close', b: 'Mastery updates in real time, questions get harder as you improve, and the next thing to study is always one tap away on your dashboard.' },
]

type Domain = { name: string; weight: string; sentence: string; band: [number, number] | null }
const DOMAINS: Domain[] = [
  { name: 'Algebra', weight: '35%', sentence: 'Linear equations, systems, inequalities. Where your points are hiding right now.', band: [470, 540] },
  { name: 'Advanced Math', weight: '35%', sentence: 'Quadratics, polynomials, nonlinear functions. The other half of the pool.', band: null },
  { name: 'Problem-Solving & Data', weight: '15%', sentence: 'Ratios, rates, percentages, and reading data without the setup fooling you.', band: null },
  { name: 'Geometry & Trig', weight: '15%', sentence: 'Angles, triangles, circles, right-triangle trig. High priority for you.', band: [470, 540] },
]

const FAQ = [
  { q: 'Is it actually free?', a: 'Yes. No trial, no card, no upsell. It was built for one student and opened up for anyone who wants it. The footer means it: made for studying, not for sale.' },
  { q: 'Will it work on a school Chromebook?', a: 'That’s the whole reason email sign-up exists. If your district blocks Google sign-in, make an account with an email and password in ten seconds — no school account required.' },
  { q: 'What does it cover?', a: 'The digital SAT Math section (all four domains) and AP Precalculus (Units 1–3). SAT questions are verified by a symbolic solver; AP runs on full lessons with worked examples and practice.' },
  { q: 'Who made this?', a: 'An older brother built it for his younger brother after a rough freshman year and a 470–540 PSAT. It’s a real tool in daily use, not a demo. Questions? Email us — a person answers.' },
]

export default function Landing({ stats }: { stats: { verifiedQuestions: number; subSkills: number; domains: number } }) {
  return (
    <div style={{ background: C.bg, minHeight: '100vh', position: 'relative', overflowX: 'hidden' }}>
      <WopeStyle />
      <style>{`
        @media (max-width: 820px){
          .lp-hero-h { font-size: 44px !important; letter-spacing: -1px !important; }
          .lp-features, .lp-domains { grid-template-columns: 1fr !important; }
          .pf-body { grid-template-columns: 1fr !important; }
          .lp-steps-row { flex-direction: column !important; gap: 28px !important; }
          .lp-steps-row > div { border-left: none !important; padding: 0 !important; }
        }
        @media (max-width: 560px){
          .lp-hero-h { font-size: 34px !important; letter-spacing: -0.6px !important; }
        }
      `}</style>
      <WopeHeader />

      {/* ambient hero bloom */}
      <div aria-hidden style={{ position: 'absolute', top: -180, left: '50%', transform: 'translateX(-50%)', width: 1100, height: 720, background: 'radial-gradient(50% 50% at 50% 40%, rgba(113,61,255,0.32), rgba(133,98,255,0.10) 45%, transparent 70%)', pointerEvents: 'none', zIndex: 0 }} />

      {/* HERO */}
      <section style={{ position: 'relative', zIndex: 1, paddingTop: 168, paddingBottom: 40 }}>
        <div style={{ ...wrap, textAlign: 'center' }}>
          <a href="#auth" style={{ ...glassPill, fontSize: 13, padding: '5px 14px', color: C.steel }}>
            <span style={{ width: 6, height: 6, borderRadius: 999, background: C.horizon, boxShadow: `0 0 8px ${C.horizon}` }} /> Free · no school-account login needed
          </a>
          <h1 className="lp-hero-h" style={{ ...display(72), maxWidth: 880, margin: '26px auto 0', textWrap: 'balance' }}>
            Know exactly where your points are hiding.
          </h1>
          <p style={{ ...body, maxWidth: 620, margin: '24px auto 0' }}>
            PrepOS finds the sub-skills quietly draining your SAT Math score, then drills verified questions — with the real trap behind every wrong answer — until those weak spots close. AP Precalculus too.
          </p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', marginTop: 34, flexWrap: 'wrap' }}>
            <a href="#auth" className="wope-uv" style={uvPill}>Create your free account</a>
            <a href="#how" className="wope-glass" style={glassPill}>See how it works</a>
          </div>
          <p style={{ fontFamily: UI, fontSize: 14, color: C.fog, marginTop: 22, letterSpacing: '-0.16px', fontVariantNumeric: 'tabular-nums' }}>
            {stats.verifiedQuestions} verified questions · {stats.subSkills} Algebra sub-skills · 4 SAT domains
          </p>
          <ProductFrame />
        </div>
      </section>

      {/* WHAT'S COVERED strip */}
      <section id="covers" style={{ position: 'relative', zIndex: 1, padding: '40px 0' }}>
        <div style={{ ...wrap, display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px 32px', borderTop: `1px solid ${C.borderSoft}`, borderBottom: `1px solid ${C.borderSoft}`, paddingTop: 28, paddingBottom: 28 }}>
          {['Digital SAT Math', 'AP Precalculus', 'Verified answer keys', 'Real trap explanations', 'Mastery tracking', 'Works on Chromebooks'].map((t) => (
            <span key={t} style={{ fontFamily: UI, fontSize: 14, color: C.fog, letterSpacing: '-0.16px', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
              <span style={{ width: 4, height: 4, borderRadius: 999, background: C.uv }} /> {t}
            </span>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section style={{ position: 'relative', zIndex: 1, padding: '68px 0' }}>
        <div style={wrap}>
          <p style={kicker}>Why it works</p>
          <h2 style={{ ...display(44, -1), maxWidth: 620, marginTop: 16 }}>Most prep apps throw questions at you. This one tells the truth.</h2>
          <div className="lp-features" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginTop: 44 }}>
            {FEATURES.map((f) => (
              <div key={f.h} style={{ background: C.bg, border: `1px solid ${C.border}`, borderRadius: 16, padding: 28 }}>
                <h3 style={{ fontFamily: UI, fontWeight: 700, fontSize: 20, color: C.text, letterSpacing: '-0.4px' }}>{f.h}</h3>
                <p style={{ fontFamily: UI, fontSize: 15, color: C.muted, lineHeight: 1.6, marginTop: 12, letterSpacing: '-0.16px' }}>{f.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS — connected process */}
      <section id="how" style={{ position: 'relative', zIndex: 1, padding: '68px 0' }}>
        <div style={wrap}>
          <p style={kicker}>How it works</p>
          <h2 style={{ ...display(44, -1), maxWidth: 560, marginTop: 16, marginBottom: 48 }}>Three moves, on repeat, until the score moves.</h2>
          <div className="lp-steps-row" style={{ display: 'flex', gap: 0, alignItems: 'stretch' }}>
            {STEPS.map((s, i) => (
              <div key={s.n} style={{ flex: 1, position: 'relative', padding: '0 28px', borderLeft: i === 0 ? 'none' : `1px solid ${C.borderSoft}` }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <span style={{ fontFamily: DISPLAY, fontWeight: 700, fontSize: 15, color: C.uv, letterSpacing: '0.04em' }}>{s.n}</span>
                  <span style={{ height: 1, flex: 1, background: `linear-gradient(90deg, ${C.uv}, transparent)` }} />
                </div>
                <h3 style={{ fontFamily: UI, fontWeight: 700, fontSize: 22, color: C.text, letterSpacing: '-0.4px', marginTop: 18 }}>{s.h}</h3>
                <p style={{ fontFamily: UI, fontSize: 15, color: C.muted, lineHeight: 1.6, marginTop: 10, letterSpacing: '-0.16px' }}>{s.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DOMAIN BREAKDOWN */}
      <section style={{ position: 'relative', zIndex: 1, padding: '68px 0' }}>
        <div style={wrap}>
          <p style={kicker}>The test, mapped</p>
          <h2 style={{ ...display(44, -1), maxWidth: 560, marginTop: 16 }}>Where your points are — and where you’re starting from.</h2>
          <div className="lp-domains" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginTop: 44, maxWidth: 940 }}>
            {DOMAINS.map((d) => {
              const lo = d.band ? ((d.band[0] - 200) / 600) * 100 : 0
              const w = d.band ? ((d.band[1] - d.band[0]) / 600) * 100 : 0
              return (
                <div key={d.name} style={{ background: C.bg, border: `1px solid ${C.border}`, borderRadius: 16, padding: 28 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12 }}>
                    <h3 style={{ fontFamily: UI, fontWeight: 700, fontSize: 18, color: C.text, letterSpacing: '-0.36px' }}>{d.name}</h3>
                    <span style={{ fontFamily: UI, fontSize: 12, fontWeight: 600, color: C.lilac, background: 'rgba(113,61,255,0.14)', border: `1px solid rgba(183,164,251,0.24)`, padding: '3px 12px', borderRadius: 999, letterSpacing: '0.02em' }}>{d.weight} of exam</span>
                  </div>
                  <p style={{ fontFamily: UI, fontSize: 13, color: C.fog, marginTop: 12, letterSpacing: '-0.16px' }}>
                    {d.band ? `Your starting band: ${d.band[0]}–${d.band[1]}` : 'Not yet diagnosed'}
                  </p>
                  <div style={{ position: 'relative', height: 8, borderRadius: 999, background: 'rgba(255,255,255,0.05)', marginTop: 10, overflow: 'hidden' }}>
                    {d.band && <div style={{ position: 'absolute', left: `${lo}%`, width: `${w}%`, top: 0, bottom: 0, background: `linear-gradient(90deg, ${C.horizon}, ${C.uv})`, borderRadius: 999 }} />}
                  </div>
                  <p style={{ fontFamily: UI, fontSize: 14, color: C.muted, lineHeight: 1.55, marginTop: 16, letterSpacing: '-0.16px' }}>{d.sentence}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" style={{ position: 'relative', zIndex: 1, padding: '68px 0' }}>
        <div style={{ ...wrap, maxWidth: 820 }}>
          <p style={kicker}>Straight answers</p>
          <h2 style={{ ...display(44, -1), marginTop: 16, marginBottom: 40 }}>Questions, answered plainly.</h2>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {FAQ.map((f, i) => (
              <div key={f.q} style={{ padding: '26px 0', borderTop: i === 0 ? `1px solid ${C.borderSoft}` : 'none', borderBottom: `1px solid ${C.borderSoft}` }}>
                <h3 style={{ fontFamily: UI, fontWeight: 700, fontSize: 19, color: C.text, letterSpacing: '-0.36px' }}>{f.q}</h3>
                <p style={{ fontFamily: UI, fontSize: 16, color: C.muted, lineHeight: 1.65, marginTop: 10, letterSpacing: '-0.16px', maxWidth: 700 }}>{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AUTH */}
      <section id="auth" style={{ position: 'relative', zIndex: 1, padding: '68px 0 100px' }}>
        <div aria-hidden style={{ position: 'absolute', top: -40, left: '50%', transform: 'translateX(-50%)', width: 800, height: 500, background: 'radial-gradient(50% 50% at 50% 40%, rgba(113,61,255,0.22), transparent 68%)', pointerEvents: 'none', zIndex: 0 }} />
        <div style={{ ...wrap, position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <h2 style={{ ...display(48, -1), marginBottom: 10 }}>Start closing the gaps.</h2>
          <p style={{ ...body, fontSize: 16, maxWidth: 460, margin: '0 auto 40px' }}>Make an account and your first session is waiting. No card, no school login.</p>
          <div style={{ background: 'rgba(255,255,255,0.02)', border: `1px solid ${C.border}`, borderRadius: 16, padding: '40px 30px', maxWidth: 500, margin: '0 auto', backdropFilter: 'blur(4px)', WebkitBackdropFilter: 'blur(4px)' }}>
            <AuthPanel />
          </div>
        </div>
      </section>

      <WopeFooter />
    </div>
  )
}
