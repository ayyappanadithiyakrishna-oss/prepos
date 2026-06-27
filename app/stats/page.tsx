'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Flame, BookOpen, Zap, Target, Star, AlertTriangle } from 'lucide-react'
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from 'recharts'

interface DailyAttempt {
  date: string
  correct: number
  total: number
}

interface TopicMastery {
  id: number
  name: string
  subject: string
  mastery_pct: number
}

interface StreakRow {
  date: string
  problems_solved: number
  study_time_sec: number
}

interface Totals {
  total_attempts: number
  total_correct: number
  total_sessions: number
}

interface StatsData {
  daily_attempts: DailyAttempt[]
  topic_mastery: TopicMastery[]
  streak_data: StreakRow[]
  totals: Totals
  weakest_topics: TopicMastery[]
  strongest_topics: TopicMastery[]
}

function masteryColor(pct: number): string {
  if (pct >= 91) return '#58cc02'
  if (pct >= 71) return '#1cb0f6'
  if (pct >= 41) return '#f97316'
  return '#ff4b4b'
}

const tooltipStyle = {
  contentStyle: {
    background: '#16161f',
    border: '1px solid #2a2a38',
    borderRadius: 10,
    color: '#f0f0f5',
    fontSize: 12,
  },
  labelStyle: { color: '#8888aa' },
}

export default function StatsPage() {
  const [data, setData] = useState<StatsData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/stats')
      .then((r) => r.json())
      .then((d: StatsData) => {
        setData(d)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  if (loading || !data) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div
          className="w-8 h-8 rounded-full border-2 animate-spin"
          style={{ borderColor: 'var(--green)', borderTopColor: 'transparent' }}
        />
      </div>
    )
  }

  const last14 = data.daily_attempts.slice(-14)

  const accuracyData = last14.map((d) => ({
    date: d.date.slice(5),
    accuracy: d.total > 0 ? Math.round((d.correct / d.total) * 100) : 0,
    total: d.total,
  }))

  const longestStreak = (() => {
    let best = 0
    let cur = 0
    let prev = ''
    for (const s of data.streak_data) {
      const d = new Date(s.date)
      const prevD = prev ? new Date(prev) : null
      if (prevD) {
        const diff = (d.getTime() - prevD.getTime()) / 86400000
        cur = diff === 1 ? cur + 1 : 1
      } else {
        cur = 1
      }
      if (cur > best) best = cur
      prev = s.date
    }
    return best
  })()

  const bestAccuracyDay = last14.reduce(
    (best, d) => {
      const acc = d.total > 0 ? Math.round((d.correct / d.total) * 100) : 0
      return acc > best.acc ? { date: d.date.slice(5), acc } : best
    },
    { date: '—', acc: 0 }
  )

  const overallAccuracy =
    data.totals.total_attempts > 0
      ? Math.round((data.totals.total_correct / data.totals.total_attempts) * 100)
      : 0

  const summaryCards = [
    { label: 'Longest Streak', value: `${longestStreak} days`, icon: <Flame size={20} color="#f97316" /> },
    { label: 'Total Problems', value: data.totals.total_attempts, icon: <BookOpen size={20} color="var(--blue)" /> },
    { label: 'Total Sessions', value: data.totals.total_sessions, icon: <Zap size={20} color="var(--gold)" /> },
    {
      label: 'Best Accuracy Day',
      value: bestAccuracyDay.acc > 0 ? `${bestAccuracyDay.acc}% (${bestAccuracyDay.date})` : '—',
      icon: <Target size={20} color="var(--green)" />,
    },
  ]

  return (
    <div className="px-8 py-8 max-w-[1000px]">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="mb-8"
      >
        <h1 className="text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>
          Statistics
        </h1>
        <p className="text-sm mt-1" style={{ color: 'var(--text-muted)' }}>
          Your performance at a glance — overall accuracy {overallAccuracy}%
        </p>
      </motion.div>

      {/* Summary cards */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.05, duration: 0.35 }}
        className="grid grid-cols-4 gap-4 mb-8"
      >
        {summaryCards.map((c) => (
          <div
            key={c.label}
            className="rounded-xl p-4"
            style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}
          >
            <div className="mb-1">{c.icon}</div>
            <p className="text-base font-bold truncate" style={{ color: 'var(--text-primary)' }}>
              {c.value}
            </p>
            <p className="text-xs mt-0.5" style={{ color: 'var(--text-muted)' }}>
              {c.label}
            </p>
          </div>
        ))}
      </motion.div>

      <div className="grid grid-cols-2 gap-6 mb-6">
        {/* Problems Solved bar chart */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.35 }}
          className="rounded-2xl p-5"
          style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}
        >
          <p className="text-sm font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            Problems Solved — Last 14 Days
          </p>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={last14} margin={{ top: 4, right: 4, bottom: 0, left: -20 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#2a2a38" vertical={false} />
              <XAxis
                dataKey="date"
                tick={{ fill: '#555570', fontSize: 10 }}
                tickFormatter={(v: string) => v.slice(5)}
                axisLine={false}
                tickLine={false}
              />
              <YAxis tick={{ fill: '#555570', fontSize: 10 }} axisLine={false} tickLine={false} />
              <Tooltip {...tooltipStyle} formatter={(v) => [v, 'Problems']} />
              <Bar dataKey="total" fill="#58cc02" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Accuracy line chart */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.35 }}
          className="rounded-2xl p-5"
          style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}
        >
          <p className="text-sm font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            Accuracy Over Time
          </p>
          <ResponsiveContainer width="100%" height={220}>
            <LineChart data={accuracyData} margin={{ top: 4, right: 4, bottom: 0, left: -20 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#2a2a38" vertical={false} />
              <XAxis
                dataKey="date"
                tick={{ fill: '#555570', fontSize: 10 }}
                axisLine={false}
                tickLine={false}
              />
              <YAxis
                tick={{ fill: '#555570', fontSize: 10 }}
                axisLine={false}
                tickLine={false}
                domain={[0, 100]}
                tickFormatter={(v) => `${v}%`}
              />
              <Tooltip
                {...tooltipStyle}
                formatter={(v) => [`${v}%`, 'Accuracy']}
              />
              <Line
                type="monotone"
                dataKey="accuracy"
                stroke="#58cc02"
                strokeWidth={2}
                dot={{ fill: '#58cc02', r: 3 }}
                activeDot={{ r: 5 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>
      </div>

      {/* Topic mastery horizontal bar */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.35 }}
        className="rounded-2xl p-5 mb-6"
        style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}
      >
        <p className="text-sm font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
          Topic Mastery
        </p>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={data.topic_mastery}
            layout="vertical"
            margin={{ top: 0, right: 16, bottom: 0, left: 120 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#2a2a38" horizontal={false} />
            <XAxis
              type="number"
              domain={[0, 100]}
              tick={{ fill: '#555570', fontSize: 10 }}
              axisLine={false}
              tickLine={false}
              tickFormatter={(v: number) => `${v}%`}
            />
            <YAxis
              type="category"
              dataKey="name"
              tick={{ fill: '#8888aa', fontSize: 11 }}
              axisLine={false}
              tickLine={false}
              width={116}
            />
            <Tooltip
              {...tooltipStyle}
              formatter={(v) => [typeof v === 'number' ? `${Math.round(v)}%` : v, 'Mastery']}
            />
            <Bar
              dataKey="mastery_pct"
              radius={[0, 4, 4, 0]}
              fill="#58cc02"
              // Color each bar by mastery level
              label={false}
            />
          </BarChart>
        </ResponsiveContainer>
      </motion.div>

      {/* Weakest / Strongest */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25, duration: 0.35 }}
        className="grid grid-cols-2 gap-6"
      >
        {[
          { title: 'Weakest Topics', icon: <AlertTriangle size={14} color="#f97316" />, topics: data.weakest_topics },
          { title: 'Strongest Topics', icon: <Star size={14} color="var(--gold)" />, topics: data.strongest_topics },
        ].map((section) => (
          <div
            key={section.title}
            className="rounded-2xl p-5"
            style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}
          >
            <p className="text-sm font-bold mb-4 flex items-center gap-1.5" style={{ color: 'var(--text-primary)' }}>
              {section.icon}{section.title}
            </p>
            <div className="flex flex-col gap-3">
              {section.topics.map((t) => (
                <div key={t.id} className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>
                      {t.name}
                    </p>
                    <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
                      {t.subject === 'ap_precalc' ? 'AP Precalc' : 'SAT Math'}
                    </p>
                  </div>
                  <span
                    className="text-sm font-bold"
                    style={{ color: masteryColor(t.mastery_pct) }}
                  >
                    {Math.round(t.mastery_pct)}%
                  </span>
                </div>
              ))}
              {section.topics.length === 0 && (
                <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                  No data yet
                </p>
              )}
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  )
}
