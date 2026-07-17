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
  sub_skill: string | null
  domain: string | null
  difficulty_band: string | null
  trap: string | null
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
    <div style={{ display: 'flex', gap: 4 }}>
      {Array.from({ length: 5 }).map((_, i) => (
        <button
          key={i}
          onClick={() => onChange(i + 1)}
          style={{
            cursor: 'pointer',
            background: 'none',
            border: 'none',
            padding: 0,
            transition: 'all 0.15s ease',
          }}
        >
          <span style={{ color: i < value ? 'var(--gold)' : 'var(--border)', fontSize: 16 }}>
            ★
          </span>
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

function missedBadgeColorRaw(times: number): string {
  if (times > 3) return '#ff4b4b'
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
    <div style={{ padding: '32px', maxWidth: 860 }}>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        style={{ marginBottom: 32 }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 6 }}>
          <h1
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 28,
              fontWeight: 700,
              color: 'var(--text-primary)',
              margin: 0,
            }}
          >
            Error Log
          </h1>
          {errors.length > 0 && (
            <span
              style={{
                padding: '3px 10px',
                borderRadius: 999,
                fontSize: 12,
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700,
                background: 'rgba(255,75,75,0.15)',
                color: 'var(--red)',
                border: '1px solid rgba(255,75,75,0.3)',
              }}
            >
              {errors.length}
            </span>
          )}
        </div>
        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 14,
            color: 'var(--text-muted)',
            margin: 0,
          }}
        >
          Questions you&apos;ve missed — sorted by frequency
        </p>
      </motion.div>

      {/* Stats row */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.05, duration: 0.35 }}
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 14,
          marginBottom: 24,
        }}
      >
        {[
          { label: 'Total Errors', value: errors.length },
          { label: 'Most Missed Topic', value: mostMissedTopic },
          { label: 'Avg Confidence', value: avgConfidence === '—' ? '—' : `${avgConfidence} / 5` },
        ].map((s) => (
          <div
            key={s.label}
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
              borderRadius: 14,
              padding: '16px 18px',
            }}
          >
            <p
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 18,
                fontWeight: 700,
                color: 'var(--text-primary)',
                margin: 0,
                marginBottom: 4,
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
              }}
            >
              {s.value}
            </p>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 12,
                color: 'var(--text-muted)',
                margin: 0,
              }}
            >
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
        style={{ display: 'flex', gap: 8, marginBottom: 24 }}
      >
        {(['all', 'ap_precalc', 'sat_math'] as SubjectFilter[]).map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            style={{
              padding: '8px 16px',
              borderRadius: 12,
              fontSize: 13,
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.18s ease',
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
        <div style={{ display: 'flex', justifyContent: 'center', padding: '80px 0' }}>
          <div
            style={{
              width: 32,
              height: 32,
              borderRadius: '50%',
              border: '2px solid var(--green)',
              borderTopColor: 'transparent',
              animation: 'spin 0.8s linear infinite',
            }}
          />
        </div>
      ) : filtered.length === 0 ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '80px 0',
            textAlign: 'center',
          }}
        >
          <div
            style={{
              width: 80,
              height: 80,
              borderRadius: '50%',
              background: 'rgba(88,204,2,0.12)',
              border: '2px solid rgba(88,204,2,0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 20,
            }}
          >
            <CheckCircle2 size={40} color="var(--green)" />
          </div>
          <p
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 18,
              fontWeight: 700,
              color: 'var(--text-primary)',
              margin: 0,
              marginBottom: 8,
            }}
          >
            No errors yet — great work!
          </p>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 14,
              color: 'var(--text-muted)',
              margin: 0,
            }}
          >
            Keep practicing to see your error log here.
          </p>
        </motion.div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {filtered.map((entry, i) => (
            <motion.div
              key={entry.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.04, duration: 0.25 }}
              style={{
                background: 'linear-gradient(135deg, rgba(255,75,75,0.04) 0%, var(--bg-card) 60%)',
                border: '1px solid var(--border)',
                borderRadius: 16,
                padding: 20,
                transition: 'border-color 0.18s ease, box-shadow 0.18s ease',
              }}
              whileHover={{ borderColor: 'var(--border-accent)', boxShadow: '0 4px 20px rgba(255,75,75,0.06)' } as Record<string, string>}
            >
              {/* Question text + missed badge */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  justifyContent: 'space-between',
                  gap: 16,
                  marginBottom: 12,
                }}
              >
                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 14,
                    fontWeight: 500,
                    color: 'var(--text-primary)',
                    lineHeight: 1.5,
                    margin: 0,
                    flex: 1,
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                  }}
                >
                  {entry.question_text}
                </p>
                <span
                  style={{
                    flexShrink: 0,
                    padding: '3px 9px',
                    borderRadius: 999,
                    fontSize: 11,
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 700,
                    background: `${missedBadgeColorRaw(entry.times_missed)}20`,
                    color: missedBadgeColor(entry.times_missed),
                    border: `1px solid ${missedBadgeColorRaw(entry.times_missed)}40`,
                  }}
                >
                  Missed {entry.times_missed}&times;
                </span>
              </div>

              {/* Tags row */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  flexWrap: 'wrap',
                  marginBottom: 12,
                }}
              >
                <span
                  style={{
                    padding: '2px 8px',
                    borderRadius: 999,
                    fontSize: 11,
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: 600,
                    background: 'var(--bg-elevated)',
                    color: 'var(--text-muted)',
                    border: '1px solid var(--border)',
                  }}
                >
                  {entry.subject === 'ap_precalc' ? 'AP Precalc' : 'SAT Math'}
                </span>
                {entry.topic_name && (
                  <span
                    style={{
                      padding: '2px 8px',
                      borderRadius: 999,
                      fontSize: 11,
                      fontFamily: "'DM Sans', sans-serif",
                      fontWeight: 600,
                      background: 'rgba(28,176,246,0.1)',
                      color: 'var(--blue)',
                      border: '1px solid rgba(28,176,246,0.2)',
                    }}
                  >
                    {entry.topic_name}
                  </span>
                )}
                {(entry.sub_skill ?? entry.subtopic) && (
                  <span
                    style={{
                      padding: '2px 8px',
                      borderRadius: 999,
                      fontSize: 11,
                      fontFamily: "'DM Sans', sans-serif",
                      fontWeight: 600,
                      background: 'var(--sat-accent-dim)',
                      color: 'var(--sat-accent)',
                      border: '1px solid var(--sat-accent-border)',
                    }}
                  >
                    {entry.sub_skill ?? entry.subtopic}
                  </span>
                )}
                {entry.difficulty_band && (
                  <span
                    style={{
                      padding: '2px 8px',
                      borderRadius: 999,
                      fontSize: 11,
                      fontFamily: "'DM Sans', sans-serif",
                      fontWeight: 600,
                      background: 'var(--bg-elevated)',
                      color: 'var(--text-muted)',
                      border: '1px solid var(--border)',
                    }}
                  >
                    {entry.difficulty_band}
                  </span>
                )}
                <span
                  style={{
                    marginLeft: 'auto',
                    fontSize: 12,
                    fontFamily: "'DM Sans', sans-serif",
                    color: 'var(--text-muted)',
                  }}
                >
                  {formatDate(entry.last_seen)}
                </span>
              </div>

              {/* Bottom row: answers + confidence + action */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 20,
                  flexWrap: 'wrap',
                }}
              >
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12 }}>
                  <span style={{ color: 'var(--text-muted)' }}>Correct: </span>
                  <span style={{ color: 'var(--green)', fontWeight: 700 }}>
                    {entry.correct_answer}
                  </span>
                  <span style={{ color: 'var(--text-muted)', margin: '0 8px' }}>·</span>
                  <span style={{ color: 'var(--text-muted)' }}>Yours: </span>
                  <span style={{ color: 'var(--red)', fontWeight: 700 }}>
                    {entry.user_answer}
                  </span>
                </div>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                    marginLeft: 'auto',
                  }}
                >
                  <span
                    style={{
                      fontSize: 12,
                      fontFamily: "'DM Sans', sans-serif",
                      color: 'var(--text-muted)',
                    }}
                  >
                    Confidence:
                  </span>
                  <StarRating
                    value={entry.confidence_level}
                    onChange={(v) => handleConfidence(entry.id, v)}
                  />
                </div>

                <button
                  onClick={() => router.push(`/review?topic_id=${entry.topic_id}`)}
                  style={{
                    padding: '5px 12px',
                    borderRadius: 10,
                    fontSize: 12,
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.18s ease',
                    background: 'rgba(139,92,246,0.12)',
                    color: 'var(--purple)',
                    border: '1px solid rgba(139,92,246,0.25)',
                  }}
                >
                  Practice Similar
                </button>
              </div>

              {/* Trap callout — the specific SAT misconception this wrong answer
                  targets. Deliberately distinct (amber, own panel + icon) from the
                  answer row above so it reads as "here's why you fell for it". */}
              {entry.trap && (
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 10,
                    marginTop: 14,
                    padding: '10px 14px',
                    borderRadius: 12,
                    background: 'rgba(245,158,11,0.10)',
                    border: '1px solid rgba(245,158,11,0.30)',
                  }}
                >
                  <span style={{ fontSize: 14, lineHeight: '20px', flexShrink: 0 }} aria-hidden>
                    ⚠️
                  </span>
                  <div>
                    <p
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontSize: 11,
                        fontWeight: 700,
                        letterSpacing: '0.04em',
                        textTransform: 'uppercase',
                        color: '#f59e0b',
                        margin: 0,
                        marginBottom: 3,
                      }}
                    >
                      The trap you fell for
                    </p>
                    <p
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: 13,
                        lineHeight: 1.5,
                        color: 'var(--text-secondary)',
                        margin: 0,
                      }}
                    >
                      {entry.trap}
                    </p>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      )}
    </div>
  )
}
