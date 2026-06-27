'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'

interface ErrorEntry {
  id: number
  question_id: number
  topic_id: number
  topic_name: string
  question_text: string
  correct_answer: string
  user_answer: string
  subject: string
  subtopic: string | null
  times_missed: number
  confidence_level: number
  last_seen: string
}

type SubjectFilter = 'all' | 'ap_precalc' | 'sat_math'

function StarRating({
  value,
  onChange,
}: {
  value: number
  onChange: (v: number) => void
}) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <button
          key={i}
          onClick={() => onChange(i + 1)}
          className="cursor-pointer transition-all duration-150"
          style={{ background: 'none', border: 'none', padding: 0 }}
        >
          <span style={{ color: i < value ? 'var(--gold)' : 'var(--border)', fontSize: 16 }}>★</span>
        </button>
      ))}
    </div>
  )
}

function missedBadgeColor(times: number): string {
  if (times > 3) return 'var(--red)'
  if (times >= 2) return '#f97316'
  return '#eab308'
}

export default function ErrorLogPage() {
  const router = useRouter()
  const [errors, setErrors] = useState<ErrorEntry[]>([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState<SubjectFilter>('all')

  useEffect(() => {
    fetch('/api/errors')
      .then((r) => r.json())
      .then((d: { errors?: ErrorEntry[] }) => {
        setErrors(d.errors ?? [])
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  const handleConfidence = async (errorId: number, level: number) => {
    setErrors((prev) =>
      prev.map((e) => (e.id === errorId ? { ...e, confidence_level: level } : e))
    )
    await fetch('/api/errors', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ error_id: errorId, confidence_level: level }),
    }).catch(() => {})
  }

  const filtered = filter === 'all' ? errors : errors.filter((e) => e.subject === filter)

  const topicCounts = errors.reduce<Record<string, number>>((acc, e) => {
    const key = e.topic_name ?? 'Unknown'
    acc[key] = (acc[key] ?? 0) + e.times_missed
    return acc
  }, {})
  const mostMissedTopic = Object.entries(topicCounts).sort((a, b) => b[1] - a[1])[0]?.[0] ?? '—'
  const avgConfidence =
    errors.length > 0
      ? (errors.reduce((s, e) => s + e.confidence_level, 0) / errors.length).toFixed(1)
      : '—'

  const formatDate = (iso: string) =>
    new Date(iso).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })

  return (
    <div className="px-8 py-8 max-w-[860px]">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="mb-8"
      >
        <h1 className="text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>
          Error Log
        </h1>
        <p className="text-sm mt-1" style={{ color: 'var(--text-muted)' }}>
          Questions you've missed — sorted by frequency
        </p>
      </motion.div>

      {/* Stats row */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.05, duration: 0.35 }}
        className="grid grid-cols-3 gap-4 mb-6"
      >
        {[
          { label: 'Total Errors', value: errors.length },
          { label: 'Most Missed Topic', value: mostMissedTopic },
          { label: 'Avg Confidence', value: avgConfidence === '—' ? '—' : `${avgConfidence} / 5` },
        ].map((s) => (
          <div
            key={s.label}
            className="rounded-xl p-4"
            style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}
          >
            <p className="text-lg font-bold truncate" style={{ color: 'var(--text-primary)' }}>
              {s.value}
            </p>
            <p className="text-xs mt-1" style={{ color: 'var(--text-muted)' }}>
              {s.label}
            </p>
          </div>
        ))}
      </motion.div>

      {/* Filter bar */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.35 }}
        className="flex gap-2 mb-6"
      >
        {(['all', 'ap_precalc', 'sat_math'] as SubjectFilter[]).map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className="px-4 py-2 rounded-xl text-sm font-medium cursor-pointer transition-all duration-200"
            style={{
              background: filter === f ? 'var(--green)' : 'var(--bg-card)',
              color: filter === f ? 'var(--bg-base)' : 'var(--text-secondary)',
              border: `1px solid ${filter === f ? 'var(--green)' : 'var(--border)'}`,
            }}
          >
            {f === 'all' ? 'All Subjects' : f === 'ap_precalc' ? 'AP Precalculus' : 'SAT Math'}
          </button>
        ))}
      </motion.div>

      {/* Error cards */}
      {loading ? (
        <div className="flex justify-center py-20">
          <div
            className="w-8 h-8 rounded-full border-2 animate-spin"
            style={{ borderColor: 'var(--green)', borderTopColor: 'transparent' }}
          />
        </div>
      ) : filtered.length === 0 ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex flex-col items-center justify-center py-24 text-center"
        >
          <div className="mb-4">
            <CheckCircle2 size={48} color="var(--green)" />
          </div>
          <p className="text-lg font-bold" style={{ color: 'var(--text-primary)' }}>
            No mistakes yet!
          </p>
          <p className="text-sm mt-2" style={{ color: 'var(--text-muted)' }}>
            Keep practicing to see your error log here.
          </p>
        </motion.div>
      ) : (
        <div className="flex flex-col gap-3">
          {filtered.map((entry, i) => (
            <motion.div
              key={entry.id}
              className="animate-fade-slide-in rounded-2xl p-5"
              style={{
                animationDelay: `${i * 0.04}s`,
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
              }}
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <p
                  className="text-sm font-medium leading-snug line-clamp-2 flex-1"
                  style={{ color: 'var(--text-primary)' }}
                >
                  {entry.question_text}
                </p>
                <span
                  className="text-xs px-2 py-1 rounded-full font-bold flex-shrink-0"
                  style={{
                    background: `${missedBadgeColor(entry.times_missed)}22`,
                    color: missedBadgeColor(entry.times_missed),
                    border: `1px solid ${missedBadgeColor(entry.times_missed)}44`,
                  }}
                >
                  Missed {entry.times_missed}×
                </span>
              </div>

              <div className="flex items-center gap-2 mb-3 flex-wrap">
                <span
                  className="text-xs px-2 py-0.5 rounded-full"
                  style={{ background: 'var(--bg-elevated)', color: 'var(--text-muted)', border: '1px solid var(--border)' }}
                >
                  {entry.subject === 'ap_precalc' ? 'AP Precalc' : 'SAT Math'}
                </span>
                {entry.topic_name && (
                  <span
                    className="text-xs px-2 py-0.5 rounded-full"
                    style={{ background: 'rgba(28,176,246,0.1)', color: 'var(--blue)', border: '1px solid rgba(28,176,246,0.2)' }}
                  >
                    {entry.topic_name}
                  </span>
                )}
                {entry.subtopic && (
                  <span
                    className="text-xs px-2 py-0.5 rounded-full"
                    style={{ background: 'var(--bg-elevated)', color: 'var(--text-muted)', border: '1px solid var(--border)' }}
                  >
                    {entry.subtopic}
                  </span>
                )}
                <span className="text-xs ml-auto" style={{ color: 'var(--text-muted)' }}>
                  {formatDate(entry.last_seen)}
                </span>
              </div>

              <div className="flex items-center gap-6 flex-wrap">
                <div>
                  <span className="text-xs" style={{ color: 'var(--text-muted)' }}>
                    Correct:{' '}
                  </span>
                  <span className="text-xs font-bold" style={{ color: 'var(--green)' }}>
                    {entry.correct_answer}
                  </span>
                  <span className="text-xs mx-2" style={{ color: 'var(--text-muted)' }}>
                    ·
                  </span>
                  <span className="text-xs" style={{ color: 'var(--text-muted)' }}>
                    Your answer:{' '}
                  </span>
                  <span className="text-xs font-bold" style={{ color: 'var(--red)' }}>
                    {entry.user_answer}
                  </span>
                </div>

                <div className="flex items-center gap-2 ml-auto">
                  <span className="text-xs" style={{ color: 'var(--text-muted)' }}>
                    Confidence:
                  </span>
                  <StarRating
                    value={entry.confidence_level}
                    onChange={(v) => handleConfidence(entry.id, v)}
                  />
                </div>

                <button
                  onClick={() => router.push(`/review?topic_id=${entry.topic_id}`)}
                  className="text-xs px-3 py-1 rounded-lg cursor-pointer transition-all duration-200"
                  style={{
                    background: 'rgba(139,92,246,0.12)',
                    color: 'var(--purple)',
                    border: '1px solid rgba(139,92,246,0.25)',
                  }}
                >
                  Practice Similar
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  )
}
