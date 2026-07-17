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

function masteryColorRaw(pct: number): string {
  if (pct >= 91) return '#58cc02'
  if (pct >= 71) return '#1cb0f6'
  if (pct >= 41) return '#f97316'
  return '#ff4b4b'
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
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} style={{ transform: 'rotate(-90deg)' }}>
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
  const colorRaw = masteryColorRaw(topic.mastery_pct)
  const label = masteryLabel(topic.mastery_pct)

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.3 }}
      style={{
        background: 'var(--bg-card)',
        border: '1px solid var(--border)',
        borderRadius: 16,
        padding: 20,
        display: 'flex',
        alignItems: 'center',
        gap: 16,
        transition: 'border-color 0.18s ease, box-shadow 0.18s ease',
        cursor: 'default',
      }}
      whileHover={{
        borderColor: 'var(--border-accent)',
      }}
    >
      {/* Circular progress ring */}
      <div style={{ position: 'relative', flexShrink: 0 }}>
        <CircularProgress pct={topic.mastery_pct} color={color} size={64} />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transform: 'rotate(90deg)',
          }}
        >
          <span
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 11,
              fontWeight: 800,
              color,
            }}
          >
            {Math.round(topic.mastery_pct)}%
          </span>
        </div>
      </div>

      {/* Info */}
      <div style={{ flex: 1, minWidth: 0 }}>
        <p
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 14,
            fontWeight: 600,
            color: 'var(--text-primary)',
            margin: 0,
            marginBottom: 6,
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          {topic.name}
        </p>

        {/* Mastery badge */}
        <span
          style={{
            display: 'inline-block',
            padding: '2px 9px',
            borderRadius: 999,
            fontSize: 11,
            fontWeight: 700,
            fontFamily: "'DM Sans', sans-serif",
            color,
            background: `${colorRaw}18`,
            border: `1px solid ${colorRaw}35`,
          }}
        >
          {label}
        </span>
      </div>

      {/* Pct large */}
      <span
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: 22,
          fontWeight: 800,
          color,
          flexShrink: 0,
        }}
      >
        {Math.round(topic.mastery_pct)}%
      </span>
    </motion.div>
  )
}

function SummaryArc({
  title,
  pct,
  color,
  colorRaw,
}: {
  title: string
  pct: number
  color: string
  colorRaw: string
}) {
  return (
    <div
      style={{
        background: `linear-gradient(135deg, ${colorRaw}12 0%, ${colorRaw}04 100%)`,
        border: `1px solid ${colorRaw}30`,
        borderRadius: 20,
        padding: '24px 28px',
        display: 'flex',
        alignItems: 'center',
        gap: 20,
      }}
    >
      <div style={{ position: 'relative', flexShrink: 0 }}>
        <CircularProgress pct={pct} color={color} size={80} />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transform: 'rotate(90deg)',
          }}
        >
          <span
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 13,
              fontWeight: 800,
              color,
            }}
          >
            {Math.round(pct)}%
          </span>
        </div>
      </div>
      <div>
        <p
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 16,
            fontWeight: 700,
            color: 'var(--text-primary)',
            margin: 0,
            marginBottom: 4,
          }}
        >
          {title}
        </p>
        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 13,
            color,
            margin: 0,
            fontWeight: 500,
          }}
        >
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
    <div style={{ padding: '32px', maxWidth: 1000 }}>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        style={{ marginBottom: 32 }}
      >
        <h1
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 28,
            fontWeight: 700,
            color: 'var(--text-primary)',
            margin: 0,
            marginBottom: 6,
          }}
        >
          Mastery Map
        </h1>
        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 14,
            color: 'var(--text-muted)',
            margin: 0,
          }}
        >
          Track your skills across all topics
        </p>
      </motion.div>

      {/* Summary arcs */}
      {!loading && (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05, duration: 0.35 }}
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 16,
            marginBottom: 36,
          }}
        >
          <SummaryArc title="AP Precalculus" pct={apAvg} color="var(--blue)" colorRaw="#1cb0f6" />
          <SummaryArc title="SAT Math" pct={satAvg} color="var(--green)" colorRaw="#58cc02" />
        </motion.div>
      )}

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
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40 }}>
          {/* AP Precalculus column */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <span
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: 15,
                  fontWeight: 700,
                  color: 'var(--blue)',
                }}
              >
                AP Precalculus
              </span>
              <span
                style={{
                  padding: '2px 8px',
                  borderRadius: 999,
                  fontSize: 11,
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 600,
                  background: 'rgba(28,176,246,0.12)',
                  color: 'var(--blue)',
                  border: '1px solid rgba(28,176,246,0.25)',
                }}
              >
                {apTopics.length} topics
              </span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {apTopics.map((t, i) => (
                <TopicCard key={t.id} topic={t} delay={0.1 + i * 0.05} />
              ))}
              {apTopics.length === 0 && (
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: 'var(--text-muted)', padding: '16px 0' }}>
                  No topics yet — complete some practice.
                </p>
              )}
            </div>
          </div>

          {/* SAT Math column */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <span
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: 15,
                  fontWeight: 700,
                  color: 'var(--green)',
                }}
              >
                SAT Math
              </span>
              <span
                style={{
                  padding: '2px 8px',
                  borderRadius: 999,
                  fontSize: 11,
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 600,
                  background: 'rgba(88,204,2,0.12)',
                  color: 'var(--green)',
                  border: '1px solid rgba(88,204,2,0.25)',
                }}
              >
                {satTopics.length} topics
              </span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {satTopics.map((t, i) => (
                <TopicCard key={t.id} topic={t} delay={0.1 + i * 0.05} />
              ))}
              {satTopics.length === 0 && (
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: 'var(--text-muted)', padding: '16px 0' }}>
                  No topics yet — complete some practice.
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
