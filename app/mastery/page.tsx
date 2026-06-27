'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface Topic {
  id: number
  name: string
  subject: string
  mastery_pct: number
}

function masteryColor(pct: number): string {
  if (pct >= 91) return 'var(--green)'
  if (pct >= 71) return 'var(--blue)'
  if (pct >= 41) return '#f97316'
  return 'var(--red)'
}

function masteryLabel(pct: number): string {
  if (pct >= 91) return 'Mastered'
  if (pct >= 71) return 'Proficient'
  if (pct >= 41) return 'Developing'
  return 'Beginner'
}

function CircularProgress({
  pct,
  color,
  size = 80,
}: {
  pct: number
  color: string
  size?: number
}) {
  const r = size / 2 - 6
  const circ = 2 * Math.PI * r
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="-rotate-90">
      <circle
        cx={size / 2}
        cy={size / 2}
        r={r}
        fill="none"
        stroke="var(--border)"
        strokeWidth="5"
      />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={r}
        fill="none"
        stroke={color}
        strokeWidth="5"
        strokeLinecap="round"
        strokeDasharray={circ}
        strokeDashoffset={circ - (pct / 100) * circ}
        style={{ transition: 'stroke-dashoffset 0.8s ease-out' }}
      />
    </svg>
  )
}

function TopicCard({ topic, delay }: { topic: Topic; delay: number }) {
  const color = masteryColor(topic.mastery_pct)
  const label = masteryLabel(topic.mastery_pct)

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.3 }}
      className="rounded-xl p-4"
      style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border)' }}
    >
      <div className="flex items-center justify-between mb-3">
        <div>
          <p className="text-sm font-bold" style={{ color: 'var(--text-primary)' }}>
            {topic.name}
          </p>
          <span
            className="text-xs font-medium"
            style={{ color }}
          >
            {label}
          </span>
        </div>
        <span className="text-2xl font-black" style={{ color }}>
          {Math.round(topic.mastery_pct)}%
        </span>
      </div>

      <div className="w-full h-2 rounded-full" style={{ background: 'var(--border)' }}>
        <div
          className="h-2 rounded-full transition-all duration-700"
          style={{ width: `${topic.mastery_pct}%`, background: color }}
        />
      </div>
    </motion.div>
  )
}

function SummaryArc({
  title,
  pct,
  color,
}: {
  title: string
  pct: number
  color: string
}) {
  return (
    <div
      className="rounded-2xl p-6 flex items-center gap-5"
      style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}
    >
      <div className="relative flex-shrink-0">
        <CircularProgress pct={pct} color={color} size={80} />
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{ transform: 'rotate(90deg)' }}
        >
          <span className="text-sm font-black" style={{ color }}>
            {Math.round(pct)}%
          </span>
        </div>
      </div>
      <div>
        <p className="text-sm font-bold" style={{ color: 'var(--text-primary)' }}>
          {title}
        </p>
        <p className="text-xs mt-1" style={{ color: 'var(--text-muted)' }}>
          {masteryLabel(pct)}
        </p>
      </div>
    </div>
  )
}

export default function MasteryPage() {
  const [topics, setTopics] = useState<Topic[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/mastery')
      .then((r) => r.json())
      .then((d: { topics?: Topic[] }) => {
        setTopics(d.topics ?? [])
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  const apTopics = topics.filter((t) => t.subject === 'ap_precalc')
  const satTopics = topics.filter((t) => t.subject === 'sat_math')

  const avg = (arr: Topic[]) =>
    arr.length > 0 ? arr.reduce((s, t) => s + t.mastery_pct, 0) / arr.length : 0

  const apAvg = avg(apTopics)
  const satAvg = avg(satTopics)

  return (
    <div className="px-8 py-8 max-w-[1000px]">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="mb-8"
      >
        <h1 className="text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>
          Mastery Map
        </h1>
        <p className="text-sm mt-1" style={{ color: 'var(--text-muted)' }}>
          Your topic-by-topic readiness overview
        </p>
      </motion.div>

      {/* Summary cards */}
      {!loading && (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05, duration: 0.35 }}
          className="grid grid-cols-2 gap-4 mb-8"
        >
          <SummaryArc title="AP Precalculus" pct={apAvg} color="var(--blue)" />
          <SummaryArc title="SAT Math" pct={satAvg} color="var(--green)" />
        </motion.div>
      )}

      {loading ? (
        <div className="flex justify-center py-20">
          <div
            className="w-8 h-8 rounded-full border-2 animate-spin"
            style={{ borderColor: 'var(--green)', borderTopColor: 'transparent' }}
          />
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-8">
          {/* AP Precalculus */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-base font-bold" style={{ color: 'var(--blue)' }}>
                AP Precalculus
              </span>
              <span
                className="text-xs px-2 py-0.5 rounded-full"
                style={{
                  background: 'rgba(28,176,246,0.12)',
                  color: 'var(--blue)',
                  border: '1px solid rgba(28,176,246,0.25)',
                }}
              >
                {apTopics.length} topics
              </span>
            </div>
            <div className="flex flex-col gap-3">
              {apTopics.map((t, i) => (
                <TopicCard key={t.id} topic={t} delay={0.1 + i * 0.05} />
              ))}
            </div>
          </div>

          {/* SAT Math */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-base font-bold" style={{ color: 'var(--green)' }}>
                SAT Math
              </span>
              <span
                className="text-xs px-2 py-0.5 rounded-full"
                style={{
                  background: 'rgba(88,204,2,0.12)',
                  color: 'var(--green)',
                  border: '1px solid rgba(88,204,2,0.25)',
                }}
              >
                {satTopics.length} topics
              </span>
            </div>
            <div className="flex flex-col gap-3">
              {satTopics.map((t, i) => (
                <TopicCard key={t.id} topic={t} delay={0.1 + i * 0.05} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
