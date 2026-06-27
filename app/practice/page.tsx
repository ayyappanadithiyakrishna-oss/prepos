'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { BookOpen, Target, RefreshCw, Zap } from 'lucide-react'

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
      icon: <BookOpen size={36} color="white" />,
      bg: 'var(--blue)',
      description: 'Functions, Trig, Polynomials & more',
      route: '/practice/session?mode=ap',
    },
    {
      title: 'SAT Math',
      count: breakdown.sat_count,
      icon: <Target size={36} color="white" />,
      bg: 'var(--green)',
      description: 'Algebra, Geometry & Data Analysis',
      route: '/practice/session?mode=sat',
    },
    {
      title: 'Review Mode',
      count: breakdown.review_count,
      icon: <RefreshCw size={36} color="white" />,
      bg: 'var(--purple)',
      description: 'Questions from your mistake log',
      route: '/practice/session?mode=review',
    },
  ]

  return (
    <div className="px-8 py-8 max-w-[800px]">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mb-3"
      >
        <div className="flex items-center gap-3 mb-2">
          <h1 className="text-3xl font-bold tracking-tight" style={{ color: 'var(--text-primary)' }}>
            Daily Practice
          </h1>
          {/* Pulsing READY TO PLAY badge */}
          <AnimatePresence>
            {ready && (
              <motion.span
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 260, damping: 18 }}
                className="px-3 py-1 rounded-full text-xs font-black tracking-wider uppercase"
                style={{
                  background: 'rgba(88,204,2,0.18)',
                  color: 'var(--green)',
                  border: '1px solid var(--green)',
                  boxShadow: '0 0 10px rgba(88,204,2,0.25)',
                }}
              >
                <motion.span
                  animate={{ opacity: [1, 0.5, 1] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                  style={{ display: 'inline-block' }}
                >
                  ● READY TO PLAY
                </motion.span>
              </motion.span>
            )}
          </AnimatePresence>
        </div>
        <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
          {today} &nbsp;·&nbsp; {breakdown.total} questions ready
        </p>
      </motion.div>

      {/* Blooket-style card grid */}
      <div className="grid grid-cols-3 gap-5 mb-10 mt-8">
        {modes.map((m, i) => (
          <motion.div
            key={m.title}
            initial={{ opacity: 0, y: 24, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: i * 0.12, type: 'spring', stiffness: 200 }}
            className="rounded-2xl overflow-hidden cursor-pointer"
            style={{ border: '1px solid var(--border)' }}
            whileHover={{ scale: 1.02, y: -2 }}
            onClick={() => router.push(m.route)}
          >
            {/* Top colored area */}
            <div
              className="flex flex-col items-center justify-center gap-3 py-10"
              style={{ background: m.bg }}
            >
              {m.icon}
              <span className="text-3xl font-black text-white">{m.count}</span>
              <span className="text-sm font-medium" style={{ color: 'rgba(255,255,255,0.8)' }}>
                questions
              </span>
            </div>
            {/* Bottom info */}
            <div className="p-4" style={{ background: 'var(--bg-card)' }}>
              <p className="font-bold" style={{ color: 'var(--text-primary)' }}>
                {m.title}
              </p>
              <p className="text-xs mt-1" style={{ color: 'var(--text-muted)' }}>
                {m.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Begin button with glow */}
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
          className="w-full py-4 rounded-2xl text-base font-bold cursor-pointer flex items-center justify-center gap-2"
          style={{
            background: 'var(--green)',
            color: 'var(--bg-base)',
          }}
        >
          <Zap size={18} />
          Begin Practice →
        </motion.button>
        <p className="text-center text-xs mt-3" style={{ color: 'var(--text-muted)' }}>
          Estimated time: ~45 minutes
        </p>
      </motion.div>
    </div>
  )
}
