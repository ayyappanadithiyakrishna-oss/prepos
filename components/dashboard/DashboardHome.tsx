'use client'

import { useState } from 'react'
import useSWR from 'swr'
import { useSession, signOut } from 'next-auth/react'

// ── Pitch dark workspace tokens ──────────────────────────────────────────
const BG0 = '#0A0A0F', BG1 = '#111118', BG2 = '#1A1A24'
const BORDER = 'rgba(255,255,255,0.07)', BORDER2 = 'rgba(255,255,255,0.14)'
const T1 = '#F0F0F8', T2 = '#8888AA', T3 = '#555570'
const SAT = '#6366F1', AP = '#6b53ff', EMBER = '#ffa000'
const BAND: Record<string, { c: string }> = {
  Easy: { c: '#22C55E' }, Medium: { c: '#F59E0B' }, Hard: { c: '#EF4444' }, Mixed: { c: SAT },
}

type Track = 'sat' | 'ap'
interface HomeData {
  track: Track
  streak: { current: number; best: number; last: string | null }
  stats: { answered: number; correctWeek: number; accuracy30: number }
  today: null | { name: string; label: string; band: string; questions: number; masteryPct: number; errorReviews: number }
  weakSpots: { name: string; band: string; pct: number }[]
  path: { title: string; done: number; total: number; locked: boolean; note?: string; items: { name: string; state: string; pct: number }[] }[]
  pathProgress: { done: number; total: number }
}

const fetcher = (u: string) => fetch(u).then((r) => r.json())
const ui = (extra?: React.CSSProperties): React.CSSProperties => ({ fontFamily: 'var(--font-inter)', letterSpacing: '0.06em', ...extra })
const eyebrow: React.CSSProperties = { fontFamily: 'var(--font-inter)', fontSize: 12, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: T3 }

function OwlMark({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden>
      <path d="M5.5 12 L10 3 L14.5 12.5 Z" fill={AP} /><path d="M26.5 12 L22 3 L17.5 12.5 Z" fill={AP} />
      <path d="M16 5.5 C24 5.5 27.5 11.5 27.5 18 C27.5 25 22.2 29.5 16 29.5 C9.8 29.5 4.5 25 4.5 18 C4.5 11.5 8 5.5 16 5.5 Z" fill={AP} />
      <circle cx="11.6" cy="16" r="4.3" fill="#fff" /><circle cx="20.4" cy="16" r="4.3" fill="#fff" />
      <circle cx="12.3" cy="16.4" r="2" fill="#371789" /><circle cx="19.7" cy="16.4" r="2" fill="#371789" />
      <path d="M16 19 L18.1 21.6 L16 24 L13.9 21.6 Z" fill="#371789" />
    </svg>
  )
}

export default function DashboardHome() {
  const [track, setTrack] = useState<Track>('sat')
  const { data: session } = useSession()
  const { data, isLoading } = useSWR<HomeData>(`/api/home?track=${track}`, fetcher, {
    revalidateOnFocus: false, keepPreviousData: true,
  })
  const accent = track === 'sat' ? SAT : AP
  const name = session?.user?.name ?? 'Student'
  const practiceHref = track === 'sat' ? '/sat/verified' : '/lessons'

  return (
    <div style={{ background: BG0, minHeight: '100vh', color: T1, fontFamily: 'var(--font-inter)' }}>
      <style>{`
        .dh-a:hover { filter: brightness(1.12); }
        .dh-row:hover { background: ${BG2}; }
        .dh-link { text-decoration: none; }
        .dh-link:hover { text-decoration: underline; }
        @media (max-width: 940px){ .dh-grid{ grid-template-columns: 1fr !important; } }
      `}</style>

      {/* TOP BAR */}
      <div style={{ borderBottom: `1px solid ${BORDER}`, position: 'sticky', top: 0, zIndex: 20, background: 'rgba(10,10,15,0.85)', backdropFilter: 'blur(12px)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', height: 60, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
            <OwlMark size={22} /><span style={ui({ fontWeight: 700, fontSize: 17, color: T1, letterSpacing: '0.08em' })}>PrepOS</span>
          </div>
          <TrackToggle track={track} setTrack={setTrack} />
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <span style={ui({ fontSize: 13, color: T2 })} className="dh-name">{name}</span>
            <button onClick={() => signOut({ callbackUrl: '/' })} style={ui({ fontSize: 12, fontWeight: 600, color: T3, background: 'transparent', border: `1px solid ${BORDER2}`, borderRadius: 20, padding: '6px 14px', cursor: 'pointer', letterSpacing: '0.08em' })}>Sign out</button>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '28px 24px 80px' }}>
        {isLoading && !data ? (
          <Skeleton />
        ) : !data || 'error' in data ? (
          <p style={ui({ color: T2 })}>Couldn&apos;t load your workspace. Refresh to try again.</p>
        ) : (
          <div className="dh-grid" style={{ display: 'grid', gridTemplateColumns: '1.85fr 1fr', gap: 20, alignItems: 'start' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              <TodaySession data={data} accent={accent} href={practiceHref} />
              <StudyPath data={data} accent={accent} href={practiceHref} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              <StreakCard streak={data.streak} />
              <StatsRow stats={data.stats} />
              <WeakSpots data={data} accent={accent} href={practiceHref} />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

function TrackToggle({ track, setTrack }: { track: Track; setTrack: (t: Track) => void }) {
  return (
    <div style={{ display: 'flex', gap: 24 }}>
      {(['sat', 'ap'] as const).map((t) => {
        const active = track === t
        const c = t === 'sat' ? SAT : AP
        return (
          <button key={t} onClick={() => setTrack(t)}
            style={ui({ background: 'none', border: 'none', cursor: 'pointer', padding: '18px 0', fontSize: 13, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: active ? T1 : T3, borderBottom: `2px solid ${active ? c : 'transparent'}` })}>
            {t === 'sat' ? 'SAT' : 'AP Precalc'}
          </button>
        )
      })}
    </div>
  )
}

function card(accentTop?: string): React.CSSProperties {
  return { background: BG1, border: `1px solid ${BORDER}`, borderRadius: 16, padding: 20, boxShadow: 'rgba(0,0,0,0.4) 0px 8px 32px', ...(accentTop ? { borderTop: `2px solid ${accentTop}` } : {}) }
}

function TodaySession({ data, accent, href }: { data: HomeData; accent: string; href: string }) {
  const t = data.today
  return (
    <div style={{ ...card(accent), padding: 24, borderRadius: 26 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={eyebrow}>Today&apos;s Session</span>
        <span style={ui({ fontSize: 12, fontWeight: 600, color: accent, letterSpacing: '0.1em' })}>{data.track === 'sat' ? 'SAT ●' : 'AP ●'}</span>
      </div>
      {!t ? (
        <div style={{ padding: '18px 0 6px' }}>
          <h2 style={ui({ fontSize: 24, fontWeight: 800, color: T1, letterSpacing: '-0.01em' })}>All caught up.</h2>
          <p style={ui({ fontSize: 14, color: T2, marginTop: 8 })}>You&apos;ve mastered every authored skill on this track. New content unlocks more.</p>
        </div>
      ) : (
        <>
          <h2 style={ui({ fontSize: 28, fontWeight: 800, color: T1, letterSpacing: '-0.01em', margin: '14px 0 6px' })}>{t.name}</h2>
          <p style={ui({ fontSize: 14, color: T2 })}>
            <span style={{ color: BAND[t.band]?.c ?? T2, fontWeight: 600 }}>{t.band}</span> difficulty · {t.questions} questions · ~{t.questions * 3} min
          </p>
          <div style={{ marginTop: 18 }}>
            <div style={{ height: 8, borderRadius: 6, background: BG2, overflow: 'hidden' }}>
              <div style={{ width: '100%', height: '100%', background: accent, borderRadius: 6, transform: `scaleX(${t.masteryPct / 100})`, transformOrigin: 'left', transition: 'transform 0.5s' }} />
            </div>
            <span style={ui({ fontSize: 12, color: T2, marginTop: 6, display: 'inline-block' })}>{t.masteryPct}% mastery</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginTop: 20, flexWrap: 'wrap' }}>
            <a href={href} className="dh-a" style={ui({ background: accent, color: '#fff', fontWeight: 600, fontSize: 15, letterSpacing: '0.08em', borderRadius: 20, padding: '13px 28px', textDecoration: 'none' })}>▶ Start Session</a>
            {t.errorReviews > 0 && <span style={ui({ fontSize: 13, color: T2 })}>+ {t.errorReviews} Error Log review{t.errorReviews > 1 ? 's' : ''}</span>}
          </div>
        </>
      )}
    </div>
  )
}

function StreakCard({ streak }: { streak: HomeData['streak'] }) {
  const on = streak.current > 0
  const today = new Date().toISOString().slice(0, 10)
  return (
    <div style={{ ...card(), background: on ? 'linear-gradient(135deg, rgba(255,160,0,0.10), rgba(255,160,0,0.02))' : BG1, borderColor: on ? 'rgba(255,160,0,0.28)' : BORDER }}>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 10 }}>
        <span style={{ fontSize: 26, opacity: on ? 1 : 0.5 }}>🔥</span>
        <span style={ui({ fontSize: 40, fontWeight: 800, color: on ? EMBER : T3, lineHeight: 1, fontVariantNumeric: 'tabular-nums' })}>{streak.current}</span>
        {on && <span style={ui({ fontSize: 15, color: T2 })}>day streak</span>}
      </div>
      {on ? (
        <div style={{ marginTop: 12 }}>
          <p style={ui({ fontSize: 13, color: T3 })}>Best: {streak.best} day{streak.best === 1 ? '' : 's'}</p>
          <p style={ui({ fontSize: 13, color: T3, marginTop: 2 })}>Last: {streak.last === today ? 'Today' : streak.last}</p>
        </div>
      ) : (
        <p style={ui({ fontSize: 14, color: T2, marginTop: 12 })}>Start your streak today.</p>
      )}
    </div>
  )
}

function StatsRow({ stats }: { stats: HomeData['stats'] }) {
  const items = [
    { v: stats.answered, l: 'Questions answered' },
    { v: stats.correctWeek, l: 'Correct this week' },
    { v: `${stats.accuracy30}%`, l: 'Accuracy (30d)' },
  ]
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12 }}>
      {items.map((s) => (
        <div key={s.l} style={{ ...card(), padding: 16 }}>
          <div style={ui({ fontSize: 26, fontWeight: 700, color: T1, fontVariantNumeric: 'tabular-nums' })}>{s.v}</div>
          <div style={{ ...eyebrow, fontSize: 11, marginTop: 6 }}>{s.l}</div>
        </div>
      ))}
    </div>
  )
}

function WeakSpots({ data, accent, href }: { data: HomeData; accent: string; href: string }) {
  return (
    <div style={card()}>
      <span style={eyebrow}>Your weak spots</span>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginTop: 16 }}>
        {data.weakSpots.length === 0 && <p style={ui({ fontSize: 13, color: T2 })}>No weak spots — nice.</p>}
        {data.weakSpots.map((w) => {
          const c = BAND[w.band]?.c ?? accent
          return (
            <div key={w.name}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6, gap: 8 }}>
                <span style={ui({ fontSize: 14, fontWeight: 500, color: T1 })}>{w.name}</span>
                <span style={ui({ fontSize: 11, fontWeight: 600, color: c, background: `${c}22`, padding: '2px 8px', borderRadius: 20, letterSpacing: '0.06em', whiteSpace: 'nowrap' })}>{w.band}</span>
              </div>
              <div style={{ height: 8, borderRadius: 6, background: BG2, overflow: 'hidden' }}>
                <div style={{ width: `${Math.max(w.pct, 3)}%`, height: '100%', background: c, borderRadius: 6 }} />
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 5 }}>
                <span style={ui({ fontSize: 12, color: T2 })}>{w.pct}%</span>
                <a href={href} className="dh-link" style={ui({ fontSize: 12, color: accent })}>Practice →</a>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

function StudyPath({ data, accent, href }: { data: HomeData; accent: string; href: string }) {
  return (
    <div style={card()}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 18 }}>
        <span style={eyebrow}>Your path</span>
        <span style={ui({ fontSize: 12, color: T2 })}>{data.pathProgress.done} / {data.pathProgress.total} {data.track === 'sat' ? 'sub-skills' : 'topics'}</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
        {data.path.map((sec) => (
          <div key={sec.title}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10, gap: 8 }}>
              <span style={{ ...eyebrow, color: sec.locked ? T3 : T2 }}>{sec.title}</span>
              <span style={ui({ fontSize: 11, color: T3, textAlign: 'right' })}>{sec.locked ? sec.note : `${sec.done}/${sec.total} complete`}</span>
            </div>
            {sec.items.map((it) => <PathRow key={it.name} it={it} accent={accent} href={href} />)}
          </div>
        ))}
      </div>
    </div>
  )
}

function PathRow({ it, accent, href }: { it: { name: string; state: string; pct: number }; accent: string; href: string }) {
  const mastered = it.state === 'mastered', current = it.state === 'current', locked = it.state === 'locked'
  const clickable = current || it.state === 'available'
  const content = (
    <div className={clickable ? 'dh-row' : ''} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '9px 10px', borderRadius: 10, opacity: locked ? 0.45 : 1, cursor: clickable ? 'pointer' : 'default', transition: 'background 0.15s' }}>
      <span style={{ width: 18, textAlign: 'center', color: mastered ? '#22C55E' : current ? accent : T3, fontSize: 13 }}>
        {mastered ? '✓' : current ? '▶' : locked ? '🔒' : '○'}
      </span>
      <span style={ui({ fontSize: 14, flex: 1, color: mastered ? T3 : current ? T1 : locked ? T3 : T2, fontWeight: current ? 600 : 400 })}>{it.name}</span>
      <span style={ui({ fontSize: 12, color: mastered ? '#22C55E' : current ? accent : T3 })}>
        {mastered ? 'Mastered' : locked ? 'Locked' : `${it.pct}%`}
      </span>
    </div>
  )
  return clickable ? <a href={href} style={{ textDecoration: 'none' }}>{content}</a> : content
}

function Skeleton() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '50vh' }}>
      <div style={{ width: 26, height: 26, borderRadius: '50%', border: `2px solid ${SAT}`, borderTopColor: 'transparent', animation: 'spin 0.7s linear infinite' }} />
    </div>
  )
}
