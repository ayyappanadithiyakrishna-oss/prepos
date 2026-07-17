'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { Trophy, TrendingUp, RotateCcw, ChevronRight, Sparkles, Target, BookOpen, AlertTriangle } from 'lucide-react'
import type { SATTestResult, SATDomain } from '@/lib/sat-practice'
import { DOMAIN_COLORS } from '@/lib/sat-practice'

const DOMAIN_ADVICE: Record<SATDomain, { lesson: string; tip: string }> = {
  'Algebra': {
    lesson: 'Study Unit 5 lessons — especially Systems of Equations (5.4) and Equivalent Expressions (5.7).',
    tip: 'On linear equation questions, always isolate the variable in one clean move. Write every step.',
  },
  'Advanced Math': {
    lesson: 'Review Unit 6 — focus on Quadratic Equations (6.2) and Exponential Functions (6.5).',
    tip: 'For quadratics: check if it factors before reaching for the quadratic formula. Saves 30 seconds.',
  },
  'Problem Solving & Data Analysis': {
    lesson: 'Work through Unit 7 — Data Distributions (7.4) and Probability (7.6) are highest-yield.',
    tip: 'Read every table or graph description twice before answering. The numbers are always there.',
  },
  'Geometry & Trigonometry': {
    lesson: 'Practice Unit 8 — Right Triangles (8.3) and Circles (8.5) appear most on the test.',
    tip: 'All formulas are on the reference sheet. Never memorize them — use the sheet every time.',
  },
}

const DOMAIN_ORDER: SATDomain[] = [
  'Algebra',
  'Advanced Math',
  'Problem Solving & Data Analysis',
  'Geometry & Trigonometry',
]

function ScoreRing({ score }: { score: number }) {
  const pct = ((score - 200) / 600) * 100
  const r = 70
  const circ = 2 * Math.PI * r
  const offset = circ - (pct / 100) * circ
  const color = score >= 750 ? '#58cc02' : score >= 650 ? '#1cb0f6' : score >= 550 ? '#f97316' : '#ef4444'

  return (
    <div style={{ position: 'relative', width: 180, height: 180 }}>
      <svg width={180} height={180} viewBox="0 0 180 180" style={{ transform: 'rotate(-90deg)' }}>
        <circle cx={90} cy={90} r={r} fill="none" stroke="var(--border)" strokeWidth={12} />
        <motion.circle
          cx={90} cy={90} r={r} fill="none"
          stroke={color} strokeWidth={12} strokeLinecap="round"
          strokeDasharray={circ}
          initial={{ strokeDashoffset: circ }}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 1.4, ease: 'easeOut', delay: 0.3 }}
        />
      </svg>
      <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <motion.span
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, type: 'spring', stiffness: 200 }}
          style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '40px', fontWeight: 800, color, lineHeight: 1 }}
        >
          {score}
        </motion.span>
        <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', color: 'var(--text-muted)', marginTop: '4px' }}>/ 800</span>
      </div>
    </div>
  )
}

export default function SATResultsPage() {
  const router = useRouter()
  const [result, setResult] = useState<SATTestResult | null>(null)

  useEffect(() => {
    try {
      const raw = localStorage.getItem('prepos_sat_last')
      if (raw) setResult(JSON.parse(raw))
    } catch {}
  }, [])

  if (!result) {
    return (
      <div className="px-8 py-8" style={{ maxWidth: '680px' }}>
        <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '20px', padding: '48px', textAlign: 'center' }}>
          <Target size={48} color="var(--text-muted)" style={{ margin: '0 auto 16px' }} />
          <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '22px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '8px' }}>
            No test completed yet
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '14px', marginBottom: '24px' }}>
            Take a full practice test to see your score breakdown and personalized study plan.
          </p>
          <button
            onClick={() => router.push('/sat/test?id=test1')}
            style={{ padding: '12px 28px', borderRadius: '12px', border: 'none', background: 'var(--sat-accent)', color: 'white', fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600, fontSize: '15px', cursor: 'pointer' }}
          >
            Take Practice Test 1
          </button>
        </div>
      </div>
    )
  }

  const { scaledScore, totalRaw, module1Score, module2Score, domainScores, tookHardModule2, testId } = result
  const above1500 = scaledScore >= 750
  const scoreColor = scaledScore >= 750 ? '#58cc02' : scaledScore >= 650 ? '#1cb0f6' : scaledScore >= 550 ? '#f97316' : '#ef4444'

  // Sort domains weakest first
  const sortedDomains = [...DOMAIN_ORDER].sort((a, b) => {
    const aScore = domainScores[a] ? domainScores[a].correct / Math.max(domainScores[a].total, 1) : 0
    const bScore = domainScores[b] ? domainScores[b].correct / Math.max(domainScores[b].total, 1) : 0
    return aScore - bScore
  })
  const weakestTwo = sortedDomains.slice(0, 2)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="px-8 py-8"
      style={{ maxWidth: '720px' }}
    >
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
          <Trophy size={22} color="#ffd700" />
          <h1 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '26px', fontWeight: 700, color: 'var(--text-primary)' }}>
            Test Results
          </h1>
        </div>
        <p style={{ color: 'var(--text-muted)', fontSize: '13px' }}>
          {testId === 'test2' ? 'Practice Test 2' : 'Practice Test 1'} · {tookHardModule2 ? 'Advanced Module 2' : 'Standard Module 2'}
        </p>
      </motion.div>

      {/* Score hero */}
      <motion.div
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
        style={{
          background: above1500
            ? 'linear-gradient(135deg, rgba(88,204,2,0.1) 0%, rgba(88,204,2,0.04) 100%)'
            : 'linear-gradient(135deg, rgba(239,68,68,0.08) 0%, rgba(239,68,68,0.03) 100%)',
          border: `1px solid ${above1500 ? 'rgba(88,204,2,0.25)' : 'rgba(239,68,68,0.2)'}`,
          borderRadius: '20px', padding: '32px',
          display: 'flex', alignItems: 'center', gap: '32px',
          marginBottom: '20px',
        }}
      >
        <ScoreRing score={scaledScore} />

        <div style={{ flex: 1 }}>
          {above1500 ? (
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '4px 12px', borderRadius: '20px', background: 'rgba(88,204,2,0.15)', border: '1px solid rgba(88,204,2,0.3)', marginBottom: '10px' }}>
              <span style={{ fontSize: '12px', fontWeight: 700, color: '#58cc02' }}>1500+ Range</span>
            </div>
          ) : (
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '4px 12px', borderRadius: '20px', background: 'rgba(249,115,22,0.12)', border: '1px solid rgba(249,115,22,0.25)', marginBottom: '10px' }}>
              <span style={{ fontSize: '12px', fontWeight: 600, color: '#f97316' }}>
                {750 - scaledScore} pts to 1500+ range
              </span>
            </div>
          )}

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
            {[
              { label: 'Module 1', value: `${module1Score}/22`, color: '#1cb0f6' },
              { label: 'Module 2', value: `${module2Score}/22`, color: '#8b5cf6' },
              { label: 'Total Raw', value: `${totalRaw}/44`, color: scoreColor },
            ].map(s => (
              <div key={s.label} style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px', padding: '12px 14px' }}>
                <p style={{ fontSize: '11px', color: 'var(--text-muted)', marginBottom: '4px' }}>{s.label}</p>
                <p style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '20px', fontWeight: 700, color: s.color }}>{s.value}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Domain breakdown */}
      <motion.div
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
        style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '20px', padding: '24px', marginBottom: '20px' }}
      >
        <p style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600, fontSize: '14px', color: 'var(--text-primary)', marginBottom: '16px' }}>
          Domain Breakdown
        </p>
        {DOMAIN_ORDER.map((domain, i) => {
          const ds = domainScores[domain]
          if (!ds) return null
          const pct = ds.total > 0 ? Math.round((ds.correct / ds.total) * 100) : 0
          const color = DOMAIN_COLORS[domain]
          return (
            <motion.div
              key={domain}
              initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.25 + i * 0.08 }}
              style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}
            >
              <div style={{ width: '130px', fontSize: '12px', color: 'var(--text-secondary)', flexShrink: 0, lineHeight: 1.3 }}>
                {domain}
              </div>
              <div style={{ flex: 1, height: '8px', borderRadius: '4px', background: 'var(--border)', overflow: 'hidden' }}>
                <motion.div
                  style={{ height: '100%', borderRadius: '4px', background: color }}
                  initial={{ width: '0%' }}
                  animate={{ width: `${pct}%` }}
                  transition={{ duration: 0.8, delay: 0.4 + i * 0.08 }}
                />
              </div>
              <div style={{ width: '60px', display: 'flex', justifyContent: 'space-between', flexShrink: 0 }}>
                <span style={{ fontSize: '12px', fontWeight: 700, color }}>{pct}%</span>
                <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>{ds.correct}/{ds.total}</span>
              </div>
            </motion.div>
          )
        })}
      </motion.div>

      {/* What to study next */}
      <motion.div
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}
        style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '20px', padding: '24px', marginBottom: '24px' }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
          <AlertTriangle size={16} color="#f97316" />
          <p style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600, fontSize: '14px', color: 'var(--text-primary)' }}>
            Focus Areas
          </p>
        </div>
        {weakestTwo.map((domain, i) => {
          const advice = DOMAIN_ADVICE[domain]
          const color = DOMAIN_COLORS[domain]
          return (
            <div key={domain} style={{ display: 'flex', gap: '12px', padding: '14px', borderRadius: '12px', background: 'var(--bg-elevated)', border: '1px solid var(--border)', marginBottom: i === 0 ? '10px' : 0 }}>
              <div style={{ width: 32, height: 32, borderRadius: '8px', background: `${color}20`, border: `1px solid ${color}30`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <BookOpen size={14} color={color} />
              </div>
              <div>
                <p style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '13px', fontWeight: 600, color, marginBottom: '4px' }}>{domain}</p>
                <p style={{ fontSize: '12px', color: 'var(--text-muted)', lineHeight: 1.5, marginBottom: '4px' }}>{advice.lesson}</p>
                <p style={{ fontSize: '11px', color: 'var(--text-secondary)', lineHeight: 1.5, fontStyle: 'italic' }}>Tip: {advice.tip}</p>
              </div>
            </div>
          )
        })}
      </motion.div>

      {/* AI drill CTA */}
      <motion.div
        initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }}
        style={{ background: 'linear-gradient(135deg, rgba(99,102,241,0.12) 0%, rgba(139,92,246,0.06) 100%)', border: '1px solid rgba(99,102,241,0.25)', borderRadius: '16px', padding: '20px', marginBottom: '20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ width: 36, height: 36, borderRadius: '10px', background: 'rgba(99,102,241,0.2)', border: '1px solid rgba(99,102,241,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Sparkles size={18} color="#6366f1" />
          </div>
          <div>
            <p style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '14px', fontWeight: 600, color: 'var(--text-primary)' }}>
              AI Practice Drill
            </p>
            <p style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
              Claude generates 5 custom questions targeting your weak spots
            </p>
          </div>
        </div>
        <button
          onClick={() => router.push('/sat/ai-drill')}
          style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '8px 16px', borderRadius: '10px', border: 'none', background: '#6366f1', color: 'white', fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600, fontSize: '13px', cursor: 'pointer' }}
        >
          Start <ChevronRight size={14} />
        </button>
      </motion.div>

      {/* Action buttons */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
        style={{ display: 'flex', gap: '12px' }}
      >
        <button
          onClick={() => router.push('/sat')}
          style={{ display: 'flex', alignItems: 'center', gap: '6px', flex: 1, justifyContent: 'center', padding: '12px', borderRadius: '12px', border: '1px solid var(--border)', background: 'var(--bg-card)', color: 'var(--text-secondary)', fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600, fontSize: '14px', cursor: 'pointer' }}
        >
          <RotateCcw size={15} /> Back to Hub
        </button>
        <button
          onClick={() => router.push(`/sat/test?id=${testId === 'test2' ? 'test1' : 'test2'}`)}
          style={{ display: 'flex', alignItems: 'center', gap: '6px', flex: 1, justifyContent: 'center', padding: '12px', borderRadius: '12px', border: 'none', background: 'var(--sat-accent)', color: 'white', fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600, fontSize: '14px', cursor: 'pointer' }}
        >
          Try {testId === 'test2' ? 'Test 1' : 'Test 2'} <ChevronRight size={15} />
        </button>
      </motion.div>
    </motion.div>
  )
}
