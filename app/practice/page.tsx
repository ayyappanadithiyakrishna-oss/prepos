'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { BookOpen, Target, RefreshCw, Zap, ChevronRight } from 'lucide-react'

interface PracticeBreakdown {
  ap_count: number
  sat_count: number
  review_count: number
  total: number
}

export default function PracticeLaunchPad() {
  const router = useRouter()
  const [breakdown, setBreakdown] = useState<PracticeBreakdown>({
    ap_count: 25,
    sat_count: 20,
    review_count: 10,
    total: 55,
  })
  const [ready, setReady] = useState(false)

  useEffect(() => {
    fetch('/api/practice/today')
      .then((r) => r.json())
      .then((data: { questions?: Array<{ subject: string; source: string }> }) => {
        if (!data.questions) return
        const ap = data.questions.filter((q) => q.subject === 'ap_precalc').length
        const sat = data.questions.filter((q) => q.subject === 'sat_math').length
        const review = data.questions.filter((q) => q.source === 'review').length
        setBreakdown({ ap_count: ap, sat_count: sat, review_count: review, total: data.questions.length })
      })
      .catch(() => {})
      .finally(() => setReady(true))
  }, [])

  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  })

  const modes = [
    {
      title: 'AP Precalculus',
      count: breakdown.ap_count,
      icon: <BookOpen size={28} />,
      color: 'var(--blue)',
      colorRaw: '#1cb0f6',
      description: 'Functions, Trig, Polynomials & more',
      route: '/practice/session?mode=ap',
    },
    {
      title: 'SAT Math',
      count: breakdown.sat_count,
      icon: <Target size={28} />,
      color: 'var(--green)',
      colorRaw: '#58cc02',
      description: 'Algebra, Geometry & Data Analysis',
      route: '/practice/session?mode=sat',
    },
    {
      title: 'Review Mode',
      count: breakdown.review_count,
      icon: <RefreshCw size={28} />,
      color: 'var(--purple)',
      colorRaw: '#8b5cf6',
      description: 'Questions from your mistake log',
      route: '/practice/session?mode=review',
    },
  ]

  return (
    <div style={{ padding: '32px', maxWidth: 860 }}>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        style={{ marginBottom: 36 }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
          <h1
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 28,
              fontWeight: 700,
              color: 'var(--text-primary)',
              margin: 0,
              lineHeight: 1.2,
            }}
          >
            Daily Practice
          </h1>

          <AnimatePresence>
            {ready && (
              <motion.span
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 260, damping: 18 }}
                style={{
                  padding: '3px 10px',
                  borderRadius: 999,
                  fontSize: 11,
                  fontWeight: 800,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  background: 'rgba(88,204,2,0.15)',
                  color: 'var(--green)',
                  border: '1px solid var(--green)',
                  boxShadow: '0 0 10px rgba(88,204,2,0.2)',
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                <motion.span
                  animate={{ opacity: [1, 0.5, 1] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                  style={{ display: 'inline-block' }}
                >
                  Ready
                </motion.span>
              </motion.span>
            )}
          </AnimatePresence>

          {/* Total pill */}
          <span
            style={{
              marginLeft: 'auto',
              padding: '5px 14px',
              borderRadius: 999,
              fontSize: 12,
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              background: 'var(--bg-card)',
              color: 'var(--text-secondary)',
              border: '1px solid var(--border)',
            }}
          >
            {breakdown.total} total
          </span>
        </div>

        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 13,
            color: 'var(--text-muted)',
            margin: 0,
          }}
        >
          {today}&nbsp;&nbsp;·&nbsp;&nbsp;{breakdown.total} questions ready
        </p>
      </motion.div>

      {/* Mode cards grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 20,
          marginBottom: 32,
        }}
      >
        {modes.map((mode, i) => (
          <motion.div
            key={mode.title}
            initial={{ opacity: 0, y: 24, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: i * 0.12, type: 'spring', stiffness: 200 }}
            whileHover={{ y: -4, boxShadow: `0 12px 40px ${mode.colorRaw}25` }}
            onClick={() => router.push(mode.route)}
            style={{
              background: `linear-gradient(135deg, ${mode.colorRaw}15 0%, ${mode.colorRaw}05 100%)`,
              border: `1px solid ${mode.colorRaw}30`,
              borderRadius: 20,
              padding: 28,
              cursor: 'pointer',
              position: 'relative',
              overflow: 'hidden',
              transition: 'all 0.18s ease',
            }}
          >
            {/* Icon circle */}
            <div
              style={{
                width: 56,
                height: 56,
                borderRadius: 16,
                background: `${mode.colorRaw}20`,
                border: `1px solid ${mode.colorRaw}30`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 16,
                color: mode.color,
              }}
            >
              {mode.icon}
            </div>

            {/* Title */}
            <h3
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 20,
                fontWeight: 600,
                color: 'var(--text-primary)',
                margin: 0,
                lineHeight: 1.3,
              }}
            >
              {mode.title}
            </h3>

            {/* Description */}
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 13,
                color: 'var(--text-secondary)',
                marginTop: 4,
                marginBottom: 0,
                lineHeight: 1.5,
              }}
            >
              {mode.description}
            </p>

            {/* Count badge */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 20 }}>
              <span
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: 26,
                  fontWeight: 700,
                  color: mode.color,
                  lineHeight: 1,
                }}
              >
                {mode.count}
              </span>
              <span
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 12,
                  color: 'var(--text-muted)',
                }}
              >
                questions
              </span>
            </div>

            {/* Arrow */}
            <div
              style={{
                position: 'absolute',
                right: 24,
                bottom: 24,
                color: mode.color,
                display: 'flex',
              }}
            >
              <ChevronRight size={20} />
            </div>

            {/* Decorative glow circle */}
            <div
              style={{
                position: 'absolute',
                right: -20,
                top: -20,
                width: 160,
                height: 160,
                borderRadius: '50%',
                background: mode.colorRaw,
                opacity: 0.06,
                pointerEvents: 'none',
              }}
            />
          </motion.div>
        ))}
      </div>

      {/* Begin button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.42, duration: 0.35 }}
      >
        <motion.button
          onClick={() => router.push('/practice/session')}
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.98 }}
          animate={{
            boxShadow: [
              '0 0 0px rgba(88,204,2,0)',
              '0 0 24px rgba(88,204,2,0.45)',
              '0 0 0px rgba(88,204,2,0)',
            ],
          }}
          transition={{
            boxShadow: { repeat: Infinity, duration: 2.2, ease: 'easeInOut' },
          }}
          style={{
            width: '100%',
            padding: '16px 0',
            borderRadius: 16,
            fontSize: 16,
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 700,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 8,
            background: 'var(--green)',
            color: 'var(--bg-base)',
            border: 'none',
          }}
        >
          <Zap size={18} />
          Begin Practice
        </motion.button>
        <p
          style={{
            textAlign: 'center',
            fontSize: 12,
            marginTop: 12,
            color: 'var(--text-muted)',
            fontFamily: "'DM Sans', sans-serif",
          }}
        >
          Estimated time: ~45 minutes
        </p>
      </motion.div>
    </div>
  )
}
