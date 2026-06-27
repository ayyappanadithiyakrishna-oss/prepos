'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'

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
  }, [])

  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  })

  const cards = [
    {
      icon: '📐',
      title: 'AP Precalculus',
      count: breakdown.ap_count,
      label: 'questions',
      accent: 'var(--blue)',
      accentDim: 'rgba(28, 176, 246, 0.08)',
      topics: ['Functions', 'Polynomials', 'Trigonometry', 'Conics', 'Modeling'],
      subtitle: 'Covering all AP topics',
    },
    {
      icon: '🧮',
      title: 'SAT Math',
      count: breakdown.sat_count,
      label: 'questions',
      accent: 'var(--green)',
      accentDim: 'rgba(88, 204, 2, 0.08)',
      topics: ['Algebra', 'Advanced Math', 'Geometry', 'Data Analysis'],
      subtitle: 'Full SAT Math coverage',
    },
    {
      icon: '🔄',
      title: 'Review',
      count: breakdown.review_count,
      label: 'questions',
      accent: 'var(--purple)',
      accentDim: 'rgba(139, 92, 246, 0.08)',
      topics: ['From your mistake log'],
      subtitle: 'Targeting your weak spots',
    },
  ]

  return (
    <div className="px-8 py-8 max-w-[800px]">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mb-10"
      >
        <h1 className="text-3xl font-bold tracking-tight" style={{ color: 'var(--text-primary)' }}>
          Daily Practice
        </h1>
        <p className="text-sm mt-2" style={{ color: 'var(--text-muted)' }}>
          {today} &nbsp;·&nbsp; {breakdown.total} questions ready
        </p>
      </motion.div>

      <div className="flex flex-col gap-4 mb-10">
        {cards.map((card, i) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.35 }}
            className="rounded-2xl p-6"
            style={{
              background: card.accentDim,
              border: `1px solid ${card.accent}33`,
            }}
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <span className="text-2xl">{card.icon}</span>
                <div>
                  <h2 className="text-lg font-bold" style={{ color: 'var(--text-primary)' }}>
                    {card.title}
                  </h2>
                  <p className="text-xs mt-0.5" style={{ color: 'var(--text-muted)' }}>
                    {card.subtitle}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <span className="text-3xl font-black" style={{ color: card.accent }}>
                  {card.count}
                </span>
                <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
                  {card.label}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mt-4">
              {card.topics.map((t) => (
                <span
                  key={t}
                  className="text-xs px-2 py-1 rounded-full"
                  style={{
                    background: 'var(--bg-elevated)',
                    color: 'var(--text-secondary)',
                    border: '1px solid var(--border)',
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35, duration: 0.35 }}
      >
        <button
          onClick={() => router.push('/practice/session')}
          className="w-full py-4 rounded-2xl text-base font-bold cursor-pointer transition-all duration-200"
          style={{
            background: 'var(--green)',
            color: 'var(--bg-base)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.opacity = '0.9'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.opacity = '1'
          }}
        >
          Begin Practice →
        </button>
        <p className="text-center text-xs mt-3" style={{ color: 'var(--text-muted)' }}>
          Estimated time: ~45 minutes
        </p>
      </motion.div>
    </div>
  )
}
