'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import StatsCard from '@/components/dashboard/StatsCard'
import MasteryCard from '@/components/dashboard/MasteryCard'
import TopicGrid from '@/components/dashboard/TopicGrid'
import TodayAssignment from '@/components/dashboard/TodayAssignment'

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
  return new Date(iso).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
  })
}

function sessionTypeLabel(type: string): string {
  if (type === 'daily') return 'Daily Practice'
  if (type === 'review') return 'Review Session'
  if (type === 'diagnostic') return 'Diagnostic'
  return type
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
      <div className="flex items-center justify-center min-h-screen">
        <div className="flex flex-col items-center gap-3">
          <div
            className="w-8 h-8 rounded-full border-2 border-t-transparent animate-spin"
            style={{ borderColor: 'var(--green)', borderTopColor: 'transparent' }}
          />
          <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
            Loading PrepOS…
          </p>
        </div>
      </div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="px-8 py-8 max-w-[1100px]"
    >
      <div className="mb-8">
        <h1 className="text-2xl font-bold tracking-tight" style={{ color: 'var(--text-primary)' }}>
          Good morning 👋
        </h1>
        <p className="text-sm mt-1" style={{ color: 'var(--text-muted)' }}>
          {new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
        </p>
      </div>

      {/* Hero stats */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.35 }}
        className="grid grid-cols-4 gap-4 mb-6"
      >
        <StatsCard emoji="🔥" value={data.streak} label="day streak" sublabel="keep it up" />
        <StatsCard
          emoji="📚"
          value={data.today_count}
          label="problems today"
          sublabel={`/ 55 daily goal`}
        />
        <StatsCard emoji="⚡" value={data.total_count} label="total problems" sublabel="all time" />
        <StatsCard
          emoji="🎯"
          value={`${data.accuracy}%`}
          label="accuracy"
          sublabel="last 7 days"
        />
      </motion.div>

      {/* Readiness + Today's Assignment */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.35 }}
        className="grid grid-cols-3 gap-4 mb-6"
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
        <TodayAssignment />
      </motion.div>

      {/* Mastery grid + Recent activity */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.35 }}
        className="grid grid-cols-3 gap-4"
      >
        <div className="col-span-2">
          <TopicGrid topics={data.topics} />
        </div>

        <div
          className="rounded-2xl p-6 flex flex-col gap-4"
          style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}
        >
          <h2 className="text-base font-semibold" style={{ color: 'var(--text-primary)' }}>
            Recent Activity
          </h2>

          {data.recent_sessions.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center text-center gap-2 py-8">
              <span className="text-3xl">🚀</span>
              <p className="text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>
                No sessions yet
              </p>
              <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
                Start today's practice to see your history here
              </p>
            </div>
          ) : (
            <div className="flex flex-col gap-2">
              {data.recent_sessions.map((s) => (
                <div
                  key={s.id}
                  className="flex items-center justify-between p-3 rounded-xl"
                  style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border)' }}
                >
                  <div>
                    <p className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>
                      {sessionTypeLabel(s.session_type)}
                    </p>
                    <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
                      {formatDate(s.started_at)}
                    </p>
                  </div>
                  <span
                    className="text-xs font-semibold"
                    style={{ color: 'var(--green)' }}
                  >
                    {s.total_questions}q
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  )
}
