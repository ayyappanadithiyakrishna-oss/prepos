'use client'

import { motion } from 'framer-motion'
import { FlaskConical, Clock, ChevronRight } from 'lucide-react'

const upcomingTests = [
  {
    title: 'AP Precalculus Diagnostic',
    description: 'Full-length 40-question diagnostic covering all AP Precalc units',
    duration: '50 min',
    questions: 40,
    color: 'var(--blue)',
    colorRaw: '#1cb0f6',
  },
  {
    title: 'SAT Math Diagnostic',
    description: 'Module-style SAT Math diagnostic with mixed difficulty',
    duration: '35 min',
    questions: 27,
    color: 'var(--green)',
    colorRaw: '#58cc02',
  },
]

export default function DiagnosticsPage() {
  return (
    <div style={{ padding: '32px', maxWidth: 760 }}>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        style={{ marginBottom: 36 }}
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
          Diagnostics
        </h1>
        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 14,
            color: 'var(--text-muted)',
            margin: 0,
          }}
        >
          Benchmark your readiness with a full-length timed test
        </p>
      </motion.div>

      {/* Coming soon notice */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.05, duration: 0.35 }}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 12,
          padding: '14px 18px',
          borderRadius: 14,
          background: 'rgba(255,215,0,0.07)',
          border: '1px solid rgba(255,215,0,0.2)',
          marginBottom: 32,
        }}
      >
        <FlaskConical size={18} color="var(--gold)" />
        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 13,
            color: 'var(--gold)',
            margin: 0,
            fontWeight: 500,
          }}
        >
          Diagnostic tests are in development — expected soon
        </p>
      </motion.div>

      {/* Upcoming test cards */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        {upcomingTests.map((test, i) => (
          <motion.div
            key={test.title}
            initial={{ opacity: 0, y: 20, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.1 + i * 0.1, type: 'spring', stiffness: 200 }}
            style={{
              background: `linear-gradient(135deg, ${test.colorRaw}12 0%, ${test.colorRaw}04 100%)`,
              border: `1px solid ${test.colorRaw}28`,
              borderRadius: 20,
              padding: 28,
              position: 'relative',
              overflow: 'hidden',
              opacity: 0.65,
            }}
          >
            {/* Icon */}
            <div
              style={{
                width: 48,
                height: 48,
                borderRadius: 14,
                background: `${test.colorRaw}18`,
                border: `1px solid ${test.colorRaw}30`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 16,
                color: test.color,
              }}
            >
              <FlaskConical size={22} />
            </div>

            <h3
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 18,
                fontWeight: 600,
                color: 'var(--text-primary)',
                margin: 0,
                marginBottom: 6,
              }}
            >
              {test.title}
            </h3>

            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 13,
                color: 'var(--text-secondary)',
                margin: 0,
                marginBottom: 20,
                lineHeight: 1.5,
              }}
            >
              {test.description}
            </p>

            {/* Meta pills */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <span
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 5,
                  padding: '4px 10px',
                  borderRadius: 999,
                  fontSize: 12,
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 600,
                  background: 'var(--bg-elevated)',
                  color: 'var(--text-muted)',
                  border: '1px solid var(--border)',
                }}
              >
                <Clock size={12} />
                {test.duration}
              </span>
              <span
                style={{
                  padding: '4px 10px',
                  borderRadius: 999,
                  fontSize: 12,
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 700,
                  background: `${test.colorRaw}14`,
                  color: test.color,
                  border: `1px solid ${test.colorRaw}28`,
                }}
              >
                {test.questions} questions
              </span>

              <span
                style={{
                  marginLeft: 'auto',
                  padding: '4px 12px',
                  borderRadius: 999,
                  fontSize: 11,
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 700,
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase' as const,
                  background: 'var(--bg-elevated)',
                  color: 'var(--text-muted)',
                  border: '1px solid var(--border)',
                }}
              >
                Coming soon
              </span>
            </div>

            {/* Arrow */}
            <div
              style={{
                position: 'absolute',
                right: 24,
                top: 28,
                color: test.color,
                opacity: 0.4,
                display: 'flex',
              }}
            >
              <ChevronRight size={20} />
            </div>

            {/* Decorative glow */}
            <div
              style={{
                position: 'absolute',
                right: -20,
                bottom: -20,
                width: 140,
                height: 140,
                borderRadius: '50%',
                background: test.colorRaw,
                opacity: 0.05,
                pointerEvents: 'none',
              }}
            />
          </motion.div>
        ))}
      </div>
    </div>
  )
}
