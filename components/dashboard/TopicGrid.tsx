'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

interface Topic {
  id: number
  name: string
  subject: 'ap_precalc' | 'sat_math'
  mastery_pct: number
}

interface TopicGridProps {
  topics: Topic[]
}

type Filter = 'all' | 'ap_precalc' | 'sat_math'

function masteryLabel(pct: number): { text: string; color: string; bg: string } {
  if (pct >= 80) return { text: 'Mastered', color: 'var(--green)', bg: 'rgba(88,204,2,0.12)' }
  if (pct >= 60) return { text: 'Proficient', color: 'var(--blue)', bg: 'rgba(28,176,246,0.12)' }
  if (pct >= 40) return { text: 'Learning', color: 'var(--orange)', bg: 'rgba(249,115,22,0.12)' }
  return { text: 'Beginner', color: 'var(--red)', bg: 'rgba(255,75,75,0.12)' }
}

const FILTERS: { value: Filter; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'ap_precalc', label: 'AP' },
  { value: 'sat_math', label: 'SAT' },
]

export default function TopicGrid({ topics }: TopicGridProps) {
  const [filter, setFilter] = useState<Filter>('all')

  const visible = filter === 'all' ? topics : topics.filter((t) => t.subject === filter)

  return (
    <div
      style={{
        background: 'var(--bg-card)',
        border: '1px solid var(--border)',
        borderRadius: '16px',
        padding: '20px',
      }}
    >
      {/* header */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '16px',
        }}
      >
        <h2
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: '15px',
            fontWeight: 700,
            color: 'var(--text-primary)',
          }}
        >
          Topic Mastery
        </h2>

        {/* filter tabs */}
        <div
          style={{
            display: 'flex',
            gap: '4px',
            background: 'var(--bg-elevated)',
            border: '1px solid var(--border)',
            borderRadius: '10px',
            padding: '3px',
          }}
        >
          {FILTERS.map(({ value, label }) => (
            <button
              key={value}
              onClick={() => setFilter(value)}
              style={{
                padding: '4px 12px',
                borderRadius: '7px',
                border: 'none',
                background: filter === value ? 'var(--bg-surface)' : 'transparent',
                color: filter === value ? 'var(--text-primary)' : 'var(--text-muted)',
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '12px',
                fontWeight: filter === value ? 600 : 400,
                cursor: 'pointer',
                transition: 'background 0.15s ease, color 0.15s ease',
                boxShadow: filter === value ? '0 1px 3px rgba(0,0,0,0.3)' : 'none',
              }}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '10px',
        }}
      >
        {visible.map((topic, i) => {
          const isAP = topic.subject === 'ap_precalc'
          const barColor = isAP ? 'var(--blue)' : 'var(--green)'
          const badge = masteryLabel(topic.mastery_pct)

          return (
            <motion.div
              key={topic.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.04, duration: 0.25 }}
              style={{
                background: 'var(--bg-elevated)',
                border: '1px solid var(--border)',
                borderRadius: '12px',
                padding: '14px',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  justifyContent: 'space-between',
                  gap: '8px',
                }}
              >
                <span
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '13px',
                    fontWeight: 500,
                    color: 'var(--text-primary)',
                    lineHeight: 1.3,
                  }}
                >
                  {topic.name}
                </span>
                <span
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '10px',
                    fontWeight: 700,
                    padding: '2px 7px',
                    borderRadius: '5px',
                    background: isAP ? 'rgba(28,176,246,0.15)' : 'rgba(88,204,2,0.12)',
                    color: isAP ? 'var(--blue)' : 'var(--green)',
                    flexShrink: 0,
                    letterSpacing: '0.03em',
                  }}
                >
                  {isAP ? 'AP' : 'SAT'}
                </span>
              </div>

              {/* progress bar */}
              <div>
                <div
                  style={{
                    height: '5px',
                    borderRadius: '99px',
                    background: 'var(--border)',
                    overflow: 'hidden',
                  }}
                >
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${topic.mastery_pct}%` }}
                    transition={{ delay: 0.1 + i * 0.04, duration: 0.5, ease: 'easeOut' }}
                    style={{
                      height: '100%',
                      borderRadius: '99px',
                      background: `linear-gradient(90deg, ${barColor}, ${barColor}cc)`,
                    }}
                  />
                </div>
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <span
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '10px',
                    fontWeight: 600,
                    padding: '2px 8px',
                    borderRadius: '20px',
                    background: badge.bg,
                    color: badge.color,
                  }}
                >
                  {badge.text}
                </span>
                <span
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: '13px',
                    fontWeight: 700,
                    color: 'var(--text-muted)',
                  }}
                >
                  {Math.round(topic.mastery_pct)}%
                </span>
              </div>
            </motion.div>
          )
        })}
      </div>

      {visible.length === 0 && (
        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '13px',
            color: 'var(--text-muted)',
            textAlign: 'center',
            padding: '32px 0',
          }}
        >
          No topics yet.
        </p>
      )}
    </div>
  )
}
