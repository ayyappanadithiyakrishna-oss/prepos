'use client'

import { useEffect, useState } from 'react'
import { motion, type Variants } from 'framer-motion'
import { Star, AlertTriangle } from 'lucide-react'
import {
  AreaChart,
  Area,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from 'recharts'

// ─── Interfaces ──────────────────────────────────────────────────────────────

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

interface TopicSummary {
  name: string
  subject: string
  mastery_pct: number
}

interface Totals {
  total_attempts: number
  total_correct: number
  total_sessions: number
  longest_streak: number
}

interface StatsData {
  daily_attempts: DailyAttempt[]
  topic_mastery: TopicMastery[]
  totals: Totals
  weakest_topics: TopicSummary[]
  strongest_topics: TopicSummary[]
  isSample?: boolean
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

function masteryColor(pct: number): string {
  if (pct >= 91) return '#58cc02'
  if (pct >= 71) return '#1cb0f6'
  if (pct >= 41) return '#f97316'
  return '#ff4b4b'
}

function masteryGradient(pct: number): string {
  if (pct >= 91) return 'linear-gradient(90deg, #58cc02, #a5ed6e)'
  if (pct >= 71) return 'linear-gradient(90deg, #1cb0f6, #38bdf8)'
  if (pct >= 41) return 'linear-gradient(90deg, #f97316, #fbbf24)'
  return 'linear-gradient(90deg, #ff4b4b, #ff6b6b)'
}

// ─── Animation variants ───────────────────────────────────────────────────────

const container: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
}

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
}

// ─── CustomTooltip ────────────────────────────────────────────────────────────

interface TooltipEntry {
  value: number
  name: string
  color: string
}

function CustomTooltip({
  active,
  payload,
  label,
}: {
  active?: boolean
  payload?: TooltipEntry[]
  label?: string
}) {
  if (!active || !payload?.length) return null
  return (
    <div
      className="rounded-xl px-4 py-3 shadow-2xl"
      style={{
        background: 'var(--bg-elevated)',
        border: '1px solid var(--border-accent, var(--border))',
        minWidth: 120,
      }}
    >
      <p className="text-xs mb-2" style={{ color: 'var(--text-muted)' }}>
        {label}
      </p>
      {payload.map((p) => (
        <p key={p.name} className="text-sm font-semibold" style={{ color: p.color }}>
          {p.value} {p.name}
        </p>
      ))}
    </div>
  )
}

// ─── StatRing ─────────────────────────────────────────────────────────────────

interface StatRingProps {
  value: number
  max: number
  label: string
  color: string
  suffix?: string
}

function StatRing({ value, max, label, color, suffix = '' }: StatRingProps) {
  const r = 40
  const circ = 2 * Math.PI * r
  const pct = Math.min(value / max, 1)
  const offset = circ - pct * circ

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="relative w-24 h-24">
        <svg
          width="96"
          height="96"
          viewBox="0 0 96 96"
          style={{ transform: 'rotate(-90deg)' }}
        >
          <circle
            cx="48"
            cy="48"
            r={r}
            fill="none"
            stroke="var(--border)"
            strokeWidth="8"
          />
          <motion.circle
            cx="48"
            cy="48"
            r={r}
            fill="none"
            stroke={color}
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={circ}
            initial={{ strokeDashoffset: circ }}
            animate={{ strokeDashoffset: offset }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-lg font-black" style={{ color: 'var(--text-primary)' }}>
            {value}
            {suffix}
          </span>
        </div>
      </div>
      <p className="text-xs text-center" style={{ color: 'var(--text-muted)' }}>
        {label}
      </p>
    </div>
  )
}

// ─── Shimmer skeleton ─────────────────────────────────────────────────────────

function ShimmerBlock({ className }: { className?: string }) {
  return (
    <div
      className={`animate-pulse rounded-xl ${className ?? ''}`}
      style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}
    />
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function StatsPage() {
  const [data, setData] = useState<StatsData | null>(null)
  const [loading, setLoading] = useState(true)
  const [topicTab, setTopicTab] = useState<'all' | 'ap' | 'sat'>('all')

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
      <div className="px-8 py-8 max-w-[1000px]">
        <div className="mb-8">
          <ShimmerBlock className="h-8 w-40 mb-2" />
          <ShimmerBlock className="h-4 w-64 mt-2" />
        </div>
        <ShimmerBlock className="h-40 mb-6" />
        <div className="grid grid-cols-2 gap-6 mb-6">
          <ShimmerBlock className="h-64" />
          <ShimmerBlock className="h-64" />
        </div>
        <ShimmerBlock className="h-80 mb-6" />
        <div className="grid grid-cols-2 gap-6">
          <ShimmerBlock className="h-36" />
          <ShimmerBlock className="h-36" />
        </div>
      </div>
    )
  }

  const last14 = data.daily_attempts.slice(-14)

  const overallAccuracy =
    data.totals.total_attempts > 0
      ? Math.round((data.totals.total_correct / data.totals.total_attempts) * 100)
      : 0

  const filteredTopics = data.topic_mastery.filter((t) => {
    if (topicTab === 'ap') return t.subject === 'ap_precalc'
    if (topicTab === 'sat') return t.subject === 'sat_math'
    return true
  })

  const tabs = [
    { key: 'all', label: 'All' },
    { key: 'ap', label: 'AP Precalc' },
    { key: 'sat', label: 'SAT Math' },
  ] as const

  return (
    <div className="px-8 py-8 max-w-[1000px]">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="mb-8"
      >
        <h1 className="text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>
          Statistics
        </h1>
        <p className="text-sm mt-1 flex items-center gap-2" style={{ color: 'var(--text-muted)' }}>
          Your learning analytics — {overallAccuracy}% overall accuracy
          {data.isSample && (
            <span
              className="px-2 py-0.5 text-xs rounded-full"
              style={{
                background: 'var(--bg-elevated)',
                color: 'var(--text-muted)',
                border: '1px solid var(--border)',
              }}
            >
              sample data
            </span>
          )}
        </p>
      </motion.div>

      <motion.div variants={container} initial="hidden" animate="show">
        {/* Performance Rings */}
        <motion.div
          variants={item}
          className="rounded-2xl p-6 mb-6"
          style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}
        >
          <p className="text-xs font-semibold uppercase tracking-widest mb-6" style={{ color: 'var(--text-muted)' }}>
            Performance Overview
          </p>
          <div className="flex items-center justify-around">
            <StatRing
              value={data.totals.total_attempts}
              max={500}
              label="Total Problems"
              color="#58cc02"
            />
            <StatRing
              value={overallAccuracy}
              max={100}
              label="Accuracy"
              color="#1cb0f6"
              suffix="%"
            />
            <StatRing
              value={data.totals.longest_streak ?? 0}
              max={30}
              label="Longest Streak"
              color="#f97316"
            />
            <StatRing
              value={data.totals.total_sessions}
              max={50}
              label="Sessions"
              color="#a855f7"
            />
          </div>
        </motion.div>

        {/* Charts row */}
        <div className="grid grid-cols-2 gap-6 mb-6">
          {/* Study Activity — AreaChart */}
          <motion.div
            variants={item}
            className="rounded-2xl p-5"
            style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}
          >
            <p className="text-sm font-bold mb-0.5" style={{ color: 'var(--text-primary)' }}>
              Study Activity
            </p>
            <p className="text-xs mb-4" style={{ color: 'var(--text-muted)' }}>
              Problems solved — last 14 days
            </p>
            <ResponsiveContainer width="100%" height={200}>
              <AreaChart data={last14} margin={{ top: 4, right: 4, bottom: 0, left: -10 }}>
                <defs>
                  <linearGradient id="greenGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#58cc02" stopOpacity={0.35} />
                    <stop offset="100%" stopColor="#58cc02" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="var(--border)"
                  vertical={false}
                />
                <XAxis
                  dataKey="date"
                  tick={{ fill: 'var(--text-muted)', fontSize: 10 }}
                  axisLine={false}
                  tickLine={false}
                  interval="preserveStartEnd"
                  tickFormatter={(val: string) => val}
                  angle={-30}
                  textAnchor="end"
                  height={40}
                />
                <YAxis
                  tick={{ fill: 'var(--text-muted)', fontSize: 11 }}
                  axisLine={false}
                  tickLine={false}
                  width={30}
                />
                <Tooltip content={<CustomTooltip />} />
                <Area
                  type="monotone"
                  dataKey="total"
                  name="problems"
                  stroke="#58cc02"
                  strokeWidth={2}
                  fill="url(#greenGradient)"
                  dot={{ fill: '#58cc02', r: 3, strokeWidth: 0 }}
                  activeDot={{ r: 5, fill: '#58cc02', strokeWidth: 3, stroke: 'rgba(88,204,2,0.3)' }}
                  isAnimationActive={true}
                />
              </AreaChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Accuracy Trend — LineChart */}
          <motion.div
            variants={item}
            className="rounded-2xl p-5"
            style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}
          >
            <p className="text-sm font-bold mb-0.5" style={{ color: 'var(--text-primary)' }}>
              Accuracy Trend
            </p>
            <p className="text-xs mb-4" style={{ color: 'var(--text-muted)' }}>
              Correct vs total — last 14 days
            </p>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={last14} margin={{ top: 4, right: 4, bottom: 0, left: -10 }}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="var(--border)"
                  vertical={false}
                />
                <XAxis
                  dataKey="date"
                  tick={{ fill: 'var(--text-muted)', fontSize: 10 }}
                  axisLine={false}
                  tickLine={false}
                  interval="preserveStartEnd"
                  tickFormatter={(val: string) => val}
                  angle={-30}
                  textAnchor="end"
                  height={40}
                />
                <YAxis
                  tick={{ fill: 'var(--text-muted)', fontSize: 11 }}
                  axisLine={false}
                  tickLine={false}
                  width={30}
                />
                <Tooltip content={<CustomTooltip />} />
                <Line
                  type="monotone"
                  dataKey="correct"
                  name="correct"
                  stroke="#58cc02"
                  strokeWidth={2}
                  dot={false}
                  activeDot={{ r: 5, fill: '#58cc02' }}
                  isAnimationActive={true}
                />
                <Line
                  type="monotone"
                  dataKey="total"
                  name="total"
                  stroke="var(--text-muted)"
                  strokeWidth={1.5}
                  strokeDasharray="4 4"
                  dot={false}
                  activeDot={{ r: 4 }}
                  isAnimationActive={true}
                />
              </LineChart>
            </ResponsiveContainer>
          </motion.div>
        </div>

        {/* Topic Mastery */}
        <motion.div
          variants={item}
          className="rounded-2xl p-5 mb-6"
          style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}
        >
          <div className="flex items-center justify-between mb-5">
            <p className="text-sm font-bold" style={{ color: 'var(--text-primary)' }}>
              Topic Mastery
            </p>
            <div
              className="flex gap-1"
              style={{
                background: 'var(--bg-elevated)',
                borderRadius: 8,
                padding: '3px',
              }}
            >
              {tabs.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setTopicTab(tab.key)}
                  className="px-3 py-1 text-xs font-medium rounded-md transition-all"
                  style={{
                    background: topicTab === tab.key ? 'var(--bg-card)' : 'transparent',
                    color: topicTab === tab.key ? 'var(--text-primary)' : 'var(--text-muted)',
                    border:
                      topicTab === tab.key
                        ? '1px solid var(--border)'
                        : '1px solid transparent',
                  }}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="max-h-72 overflow-y-auto">
            {filteredTopics.length === 0 ? (
              <p
                className="text-sm py-8 text-center"
                style={{ color: 'var(--text-muted)' }}
              >
                No topics yet
              </p>
            ) : (
              filteredTopics.map((topic, i) => (
                <motion.div
                  key={topic.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, ease: 'easeOut' }}
                  className="flex items-center gap-4 py-3"
                  style={{ borderBottom: '1px solid var(--border)' }}
                >
                  <div
                    className="w-32 text-xs truncate"
                    style={{ color: 'var(--text-secondary, var(--text-muted))' }}
                  >
                    {topic.name}
                  </div>
                  <div
                    className="flex-1 h-2 rounded-full overflow-hidden"
                    style={{ background: 'var(--border)' }}
                  >
                    <motion.div
                      className="h-full rounded-full"
                      style={{ background: masteryGradient(topic.mastery_pct) }}
                      initial={{ width: '0%' }}
                      animate={{ width: `${topic.mastery_pct}%` }}
                      transition={{
                        delay: 0.3 + i * 0.04,
                        duration: 0.7,
                        ease: 'easeOut',
                      }}
                    />
                  </div>
                  <div
                    className="w-10 text-right text-xs font-bold"
                    style={{ color: masteryColor(topic.mastery_pct) }}
                  >
                    {Math.round(topic.mastery_pct)}%
                  </div>
                </motion.div>
              ))
            )}
          </div>
        </motion.div>

        {/* Weakest / Strongest */}
        <motion.div variants={item} className="grid grid-cols-2 gap-6">
          {(
            [
              {
                title: 'Weakest Topics',
                icon: <AlertTriangle size={14} color="#f97316" />,
                topics: data.weakest_topics,
              },
              {
                title: 'Strongest Topics',
                icon: <Star size={14} color="var(--gold, #f5a623)" />,
                topics: data.strongest_topics,
              },
            ] as const
          ).map((section) => (
            <div
              key={section.title}
              className="rounded-2xl p-5"
              style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}
            >
              <p
                className="text-sm font-bold mb-4 flex items-center gap-1.5"
                style={{ color: 'var(--text-primary)' }}
              >
                {section.icon}
                {section.title}
              </p>
              <div className="flex flex-wrap gap-2">
                {section.topics.length === 0 ? (
                  <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                    No data yet
                  </p>
                ) : (
                  section.topics.map((t) => (
                    <span
                      key={t.name}
                      className="px-3 py-1.5 rounded-full text-xs font-semibold"
                      style={{
                        background: `${masteryColor(t.mastery_pct)}1a`,
                        color: masteryColor(t.mastery_pct),
                        border: `1px solid ${masteryColor(t.mastery_pct)}40`,
                      }}
                    >
                      {t.name} · {Math.round(t.mastery_pct)}%
                    </span>
                  ))
                )}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}
