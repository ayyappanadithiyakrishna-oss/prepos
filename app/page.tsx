'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { BookOpen, Zap, Target, Flame, Rocket } from 'lucide-react'
import StatsCard from '@/components/dashboard/StatsCard'
import MasteryCard from '@/components/dashboard/MasteryCard'
import TopicGrid from '@/components/dashboard/TopicGrid'
import TodayAssignment from '@/components/dashboard/TodayAssignment'
import LevelWidget from '@/components/dashboard/LevelWidget'

interface Topic {
  id: number
  name: string
  subject: 'ap_precalc' | 'sat_math'
  mastery_pct: number
}

interface Session {
  id: number
  session_type: string
  started_at: string
  completed_at: string | null
  total_questions: number
}

interface DashboardData {
  streak: number
  today_count: number
  total_count: number
  accuracy: number
  ap_mastery: number
  sat_mastery: number
  topics: Topic[]
  recent_sessions: Session[]
}

function estimateSATScore(pct: number): string {
  const score = Math.round(200 + (pct / 100) * 600)
  return `${score} / 800`
}

function estimateAPGrade(pct: number): string {
  if (pct >= 90) return 'A+'
  if (pct >= 80) return 'A'
  if (pct >= 70) return 'B+'
  if (pct >= 60) return 'B'
  return 'C+'
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
}

function sessionTypeLabel(type: string): string {
  if (type === 'daily') return 'Daily Practice'
  if (type === 'review') return 'Review Session'
  if (type === 'diagnostic') return 'Diagnostic'
  return type
}

function StreakHero({ streak }: { streak: number }) {
  const today = new Date()
  const days = Array.from({ length: 7 }, (_, i) => {
    const d = new Date(today)
    d.setDate(today.getDate() - (6 - i))
    const isToday = i === 6
    const isActive = streak > 0 && i >= (7 - Math.min(streak, 7))
    return {
      label: d.toLocaleDateString('en-US', { weekday: 'short' }).slice(0, 2),
      isToday,
      isActive,
    }
  })

  const message =
    streak === 0 ? 'Start your streak today.' :
    streak === 1 ? 'Day one. Keep it rolling.' :
    streak < 5  ? `${streak} days straight. Build the habit.` :
    streak < 10 ? `${streak} days — momentum is everything.` :
    streak < 20 ? `${streak} days. You're in the zone.` :
    `${streak} days. Legendary.`

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      style={{
        background: streak > 0
          ? 'linear-gradient(135deg, rgba(249,115,22,0.09) 0%, rgba(255,75,75,0.04) 60%, transparent 100%)'
          : 'var(--bg-card)',
        border: `1px solid ${streak > 0 ? 'rgba(249,115,22,0.28)' : 'var(--border)'}`,
        borderRadius: '20px',
        padding: '22px 28px',
        marginBottom: '16px',
        display: 'flex',
        alignItems: 'center',
        gap: '28px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Streak count */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2px', flexShrink: 0, minWidth: 64 }}>
        <Flame
          size={streak >= 7 ? 28 : 22}
          color="#f97316"
          className="animate-streak-fire"
          style={{ filter: streak >= 7 ? 'drop-shadow(0 0 10px rgba(249,115,22,0.7))' : undefined }}
        />
        <motion.span
          key={streak}
          className="animate-streak-num"
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '52px',
            fontWeight: 800,
            color: streak > 0 ? '#f97316' : 'var(--text-muted)',
            lineHeight: 1,
            letterSpacing: '-0.02em',
          }}
        >
          {streak}
        </motion.span>
        <span style={{
          fontFamily: 'var(--font-body)',
          fontSize: '10px',
          color: 'var(--text-muted)',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          fontWeight: 600,
        }}>
          {streak === 1 ? 'day' : 'days'}
        </span>
      </div>

      <div style={{ width: '1px', height: '56px', background: 'var(--border)', flexShrink: 0 }} />

      {/* Heatmap */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
        <span className="section-label">This Week</span>
        <div style={{ display: 'flex', gap: '6px', alignItems: 'flex-end' }}>
          {days.map((day, i) => (
            <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '5px' }}>
              <motion.div
                className={`heatmap-cell ${day.isToday ? 'h-today' : day.isActive ? 'h-active' : 'h-empty'}`}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.25 + i * 0.05, type: 'spring', stiffness: 320, damping: 18 }}
              >
                {(day.isActive || day.isToday) ? '✓' : ''}
              </motion.div>
              <span style={{ fontSize: '9px', color: 'var(--text-muted)', fontFamily: 'var(--font-body)', fontWeight: 500 }}>
                {day.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Message */}
      <div style={{ flex: 1, textAlign: 'right' }}>
        <p style={{
          fontFamily: 'var(--font-heading)',
          fontSize: '15px',
          fontWeight: 600,
          color: streak > 0 ? '#f97316' : 'var(--text-secondary)',
          lineHeight: 1.3,
        }}>
          {message}
        </p>
        {streak > 0 && (
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '12px', color: 'var(--text-muted)', marginTop: '5px' }}>
            Complete today&apos;s practice to extend it.
          </p>
        )}
      </div>
    </motion.div>
  )
}

export default function Dashboard() {
  const [data, setData] = useState<DashboardData | null>(null)

  useEffect(() => {
    fetch('/api/dashboard')
      .then((r) => r.json())
      .then(setData)
      .catch(console.error)
  }, [])

  if (!data) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
          <div style={{
            width: '28px', height: '28px', borderRadius: '50%',
            border: '2px solid var(--green)', borderTopColor: 'transparent',
            animation: 'spin 0.7s linear infinite',
          }} />
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'var(--text-muted)' }}>
            Loading PrepOS
          </p>
        </div>
      </div>
    )
  }

  const dateString = new Date().toLocaleDateString('en-US', {
    weekday: 'long', month: 'long', day: 'numeric',
  })

  const hour = new Date().getHours()
  const greeting =
    hour < 6  ? { text: 'Late Night Grind',   sub: "The dedication is real." } :
    hour < 12 ? { text: 'Good Morning',        sub: "Let's crush some problems." } :
    hour < 17 ? { text: 'Good Afternoon',      sub: 'Perfect time for a session.' } :
    hour < 21 ? { text: 'Good Evening',        sub: "Evening grind — you've got this." } :
                { text: 'Good Night',           sub: 'Respect the late-night dedication.' }

  const totalXP = Math.round(data.total_count * (data.accuracy / 100)) * 10

  return (
    <div style={{ position: 'relative' }}>
      {/* Ambient background orbs */}
      <div
        className="ambient-orb animate-orb"
        style={{
          width: 600, height: 600,
          background: 'radial-gradient(circle, rgba(28,176,246,0.06) 0%, transparent 70%)',
          top: '-200px', left: '-100px',
        }}
      />
      <div
        className="ambient-orb animate-orb-alt"
        style={{
          width: 500, height: 500,
          background: 'radial-gradient(circle, rgba(88,204,2,0.05) 0%, transparent 70%)',
          top: '200px', right: '-150px',
        }}
      />
      <div
        className="ambient-orb"
        style={{
          width: 400, height: 400,
          background: 'radial-gradient(circle, rgba(139,92,246,0.04) 0%, transparent 70%)',
          bottom: '100px', left: '30%',
          animation: 'orb-drift-alt 18s ease-in-out 5s infinite',
        }}
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        style={{ padding: '32px', maxWidth: '1100px', position: 'relative', zIndex: 1 }}
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          style={{ marginBottom: '24px' }}
        >
          <h1 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '28px',
            fontWeight: 700,
            color: 'var(--text-primary)',
            lineHeight: 1.1,
            letterSpacing: '-0.01em',
          }}>
            {greeting.text}
          </h1>
          <p style={{
            fontFamily: 'var(--font-body)',
            color: 'var(--text-muted)',
            fontSize: '13px',
            marginTop: '4px',
          }}>
            {dateString} — {greeting.sub}
          </p>
        </motion.div>

        {/* Streak hero */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05, duration: 0.35 }}
        >
          <StreakHero streak={data.streak} />
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.35 }}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '14px', marginBottom: '16px' }}
        >
          <StatsCard
            icon={<BookOpen size={18} color="var(--blue)" />}
            iconBg="rgba(28,176,246,0.12)"
            accentColor="var(--blue)"
            value={data.today_count}
            label="problems today"
            sublabel="/ 55 daily goal"
          />
          <StatsCard
            icon={<Zap size={18} color="var(--gold)" />}
            iconBg="rgba(255,215,0,0.1)"
            accentColor="var(--gold)"
            value={data.total_count}
            label="total problems"
            sublabel="all time"
          />
          <StatsCard
            icon={<Target size={18} color="var(--green)" />}
            iconBg="rgba(88,204,2,0.1)"
            accentColor="var(--green)"
            value={`${data.accuracy}%`}
            label="accuracy"
            sublabel="last 7 days"
          />
          <StatsCard
            icon={<Flame size={18} color="var(--orange)" />}
            iconBg="rgba(249,115,22,0.1)"
            accentColor="var(--orange)"
            value={data.streak}
            label="day streak"
            sublabel="keep it up"
          />
        </motion.div>

        {/* Mastery row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.35 }}
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '16px' }}
        >
          <MasteryCard
            title="AP Precalculus Readiness"
            pct={data.ap_mastery}
            subtitle={estimateAPGrade(data.ap_mastery)}
            accentColor="var(--blue)"
          />
          <MasteryCard
            title="SAT Math Readiness"
            pct={data.sat_mastery}
            subtitle={estimateSATScore(data.sat_mastery)}
            accentColor="var(--green)"
          />
        </motion.div>

        {/* Today's Assignment */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.35 }}
          style={{ marginBottom: '16px' }}
        >
          <TodayAssignment />
        </motion.div>

        {/* Level widget */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.35 }}
          style={{ marginBottom: '16px' }}
        >
          <LevelWidget totalXP={totalXP} />
        </motion.div>

        {/* Topic grid + recent activity */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.35 }}
          style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '14px' }}
        >
          <TopicGrid topics={data.topics} />

          {/* Recent activity */}
          <div style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border)',
            borderRadius: '16px',
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            gap: '14px',
          }}>
            <h2 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '15px',
              fontWeight: 700,
              color: 'var(--text-primary)',
            }}>
              Recent Activity
            </h2>

            {data.recent_sessions.length === 0 ? (
              <div style={{
                flex: 1, display: 'flex', flexDirection: 'column',
                alignItems: 'center', justifyContent: 'center',
                textAlign: 'center', gap: '8px', padding: '32px 0',
              }}>
                <Rocket size={28} color="var(--text-muted)" />
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '13px', fontWeight: 500, color: 'var(--text-secondary)' }}>
                  No sessions yet
                </p>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '12px', color: 'var(--text-muted)', lineHeight: 1.4 }}>
                  Start today&apos;s practice to see your history here
                </p>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {data.recent_sessions.map((s, i) => (
                  <motion.div
                    key={s.id}
                    initial={{ opacity: 0, x: 8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.35 + i * 0.05, duration: 0.25 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '10px 12px',
                      borderRadius: '10px',
                      background: 'var(--bg-elevated)',
                      border: '1px solid var(--border)',
                    }}
                  >
                    <div>
                      <p style={{ fontFamily: 'var(--font-body)', fontSize: '13px', fontWeight: 500, color: 'var(--text-primary)' }}>
                        {sessionTypeLabel(s.session_type)}
                      </p>
                      <p style={{ fontFamily: 'var(--font-body)', fontSize: '11px', color: 'var(--text-muted)', marginTop: '1px' }}>
                        {formatDate(s.started_at)}
                      </p>
                    </div>
                    <span style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '12px',
                      fontWeight: 700,
                      color: 'var(--green)',
                      background: 'rgba(88,204,2,0.1)',
                      padding: '3px 8px',
                      borderRadius: '6px',
                    }}>
                      {s.total_questions}q
                    </span>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
