'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { ClipboardList, Target, Zap, BookOpen, TrendingUp, Clock, ChevronRight, Star, Shield } from 'lucide-react'
import { SATTestResult, DOMAIN_COLORS, calculateScaledScore } from '@/lib/sat-practice'

// Score gauge component showing current score vs 1500 target
function ScoreGauge({ score }: { score: number }) {
  const pct = ((score - 200) / 600) * 100  // 200-800 → 0-100%
  const target1500Math = 750  // Math portion of 1500 is roughly 750
  const targetPct = ((target1500Math - 200) / 600) * 100

  // SVG arc gauge — semicircle, r=76, cx=110, cy=100 gives plenty of room above and below
  const r = 76, cx = 110, cy = 100
  const circ = Math.PI * r
  const offset = circ - (pct / 100) * circ
  const targetOffset = circ - (targetPct / 100) * circ

  // Color based on score
  const color = score >= 750 ? '#58cc02' : score >= 650 ? '#1cb0f6' : score >= 550 ? '#f97316' : '#ef4444'

  // Labels at the arc endpoints
  const leftX = cx - r   // 34
  const rightX = cx + r  // 186

  return (
    <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {/* viewBox taller (145) so endpoint labels + stroke cap are fully visible */}
      <svg width={220} height={145} viewBox="0 0 220 145">
        {/* Endpoint labels: 200 and 800 */}
        <text x={leftX} y={116} textAnchor="middle" fill="var(--text-muted)"
          style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 10 }}>200</text>
        <text x={rightX} y={116} textAnchor="middle" fill="var(--text-muted)"
          style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 10 }}>800</text>

        {/* Track */}
        <path
          d={`M ${leftX} ${cy} A ${r} ${r} 0 0 1 ${rightX} ${cy}`}
          fill="none" stroke="var(--border)" strokeWidth={13} strokeLinecap="round"
        />
        {/* Target marker (gold = 750) */}
        <path
          d={`M ${leftX} ${cy} A ${r} ${r} 0 0 1 ${rightX} ${cy}`}
          fill="none" stroke="rgba(255,215,0,0.35)" strokeWidth={13} strokeLinecap="round"
          strokeDasharray={`${circ - targetOffset} ${targetOffset}`}
        />
        {/* Score fill */}
        <motion.path
          d={`M ${leftX} ${cy} A ${r} ${r} 0 0 1 ${rightX} ${cy}`}
          fill="none" stroke={color} strokeWidth={13} strokeLinecap="round"
          strokeDasharray={`${circ} ${circ}`}
          initial={{ strokeDashoffset: circ }}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 1.3, ease: 'easeOut', delay: 0.3 }}
        />
        {/* Score number */}
        <text x={cx} y={cy - 4} textAnchor="middle" fill={color}
          style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 38, fontWeight: 800 }}>
          {score}
        </text>
        {/* "/ 800" sub-label */}
        <text x={cx} y={cy + 18} textAnchor="middle" fill="var(--text-muted)"
          style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 12 }}>
          out of 800
        </text>
        {/* Gold target tick */}
        <text x={cx} y={137} textAnchor="middle" fill="rgba(255,215,0,0.7)"
          style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 10 }}>
          — target: 750
        </text>
      </svg>
      <p style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '2px' }}>
        SAT Math Score Projection
      </p>
      {score >= 750 && (
        <span style={{ marginTop: '8px', padding: '3px 12px', borderRadius: '20px', fontSize: '11px', fontWeight: 600, background: 'rgba(88,204,2,0.15)', color: '#58cc02', border: '1px solid rgba(88,204,2,0.3)' }}>
          1500+ Range
        </span>
      )}
    </div>
  )
}

export default function SATHub() {
  const router = useRouter()
  const [results, setResults] = useState<SATTestResult[]>([])

  useEffect(() => {
    try {
      const stored = JSON.parse(localStorage.getItem('prepos_sat_results') ?? '[]')
      setResults(Array.isArray(stored) ? stored : [])
    } catch { setResults([]) }
  }, [])

  const bestScore = results.length > 0 ? Math.max(...results.map(r => r.scaledScore)) : 0
  const displayScore = bestScore > 0 ? bestScore : 520  // placeholder for new users
  const lastResult = results[results.length - 1]

  const tests = [
    { id: 'test1', name: 'Practice Test 1', questions: 44, time: '70 min', difficulty: 'Official Style' },
    { id: 'test2', name: 'Practice Test 2', questions: 44, time: '70 min', difficulty: 'Official Style' },
  ]

  const strategyTips = [
    { tip: 'Never leave a question blank', detail: 'No penalty for wrong answers on the SAT. Always guess.', icon: <Shield size={16} color="#58cc02" /> },
    { tip: 'Master linear equations first', detail: 'Algebra is 35% of the test — these are the highest-leverage points.', icon: <Target size={16} color="#1cb0f6" /> },
    { tip: 'Time yourself strictly', detail: '35 minutes = 1 min 35 sec per question. Practice at this pace.', icon: <Clock size={16} color="#f97316" /> },
    { tip: 'Use the reference sheet', detail: 'All geometry formulas are given. You never need to memorize them.', icon: <BookOpen size={16} color="#8b5cf6" /> },
    { tip: 'Backsolve on hard questions', detail: 'Plug answer choices into the question to check — faster than algebra.', icon: <Zap size={16} color="#ffd700" /> },
    { tip: 'Grid-in answers carefully', detail: 'No partial credit. For fractions, write 3/4 not 0.75 if possible.', icon: <Star size={16} color="var(--sat-accent)" /> },
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="px-8 py-8"
      style={{ maxWidth: '1000px' }}
    >
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }} className="mb-8">
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
          <div style={{ width: 40, height: 40, borderRadius: '12px', background: 'rgba(99,102,241,0.15)', border: '1px solid rgba(99,102,241,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <ClipboardList size={20} color="var(--sat-accent)" />
          </div>
          <h1 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '28px', fontWeight: 700, color: 'var(--text-primary)' }}>
            SAT Practice
          </h1>
          <span style={{ padding: '3px 10px', borderRadius: '20px', fontSize: '11px', fontWeight: 600, background: 'rgba(99,102,241,0.12)', color: 'var(--sat-accent)', border: '1px solid rgba(99,102,241,0.25)' }}>
            Official CollegeBoard Style
          </span>
        </div>
        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '14px', color: 'var(--text-muted)' }}>
          Full-length timed practice tests · Adaptive scoring · 1500+ strategy
        </p>
      </motion.div>

      {/* Top row: Score gauge + Domain breakdown */}
      <div style={{ display: 'grid', gridTemplateColumns: '260px 1fr', gap: '20px', marginBottom: '20px' }}>

        {/* Score gauge card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '20px', padding: '24px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
        >
          <ScoreGauge score={displayScore} />
          {results.length === 0 && (
            <p style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop: '8px', textAlign: 'center' }}>
              Take a practice test to see your real score
            </p>
          )}
          {results.length > 0 && (
            <p style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop: '8px' }}>
              Best score from {results.length} test{results.length > 1 ? 's' : ''}
            </p>
          )}
        </motion.div>

        {/* Domain breakdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}
          style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '20px', padding: '24px' }}
        >
          <p style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600, fontSize: '14px', color: 'var(--text-primary)', marginBottom: '16px' }}>
            Domain Breakdown
          </p>
          {([
            { domain: 'Algebra', pct: 35, color: '#6366f1', desc: '~15 questions' },
            { domain: 'Advanced Math', pct: 35, color: '#8b5cf6', desc: '~13 questions' },
            { domain: 'Problem Solving & Data Analysis', pct: 15, color: '#14b8a6', desc: '~7 questions' },
            { domain: 'Geometry & Trigonometry', pct: 15, color: '#38bdf8', desc: '~6 questions' },
          ] as const).map((d, i) => {
            const domainResult = lastResult?.domainScores?.[d.domain as keyof typeof lastResult.domainScores]
            const masteryPct = domainResult ? Math.round((domainResult.correct / domainResult.total) * 100) : null
            return (
              <motion.div
                key={d.domain}
                initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 + i * 0.07 }}
                style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}
              >
                <div style={{ width: '60px', fontSize: '10px', fontWeight: 600, color: d.color, textAlign: 'right', flexShrink: 0 }}>
                  {d.pct}%
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                    <span style={{ fontSize: '12px', fontWeight: 500, color: 'var(--text-primary)' }}>{d.domain}</span>
                    <span style={{ fontSize: '11px', color: masteryPct !== null ? d.color : 'var(--text-muted)' }}>
                      {masteryPct !== null ? `${masteryPct}%` : d.desc}
                    </span>
                  </div>
                  <div style={{ height: '6px', borderRadius: '3px', background: 'var(--border)', overflow: 'hidden' }}>
                    <motion.div
                      style={{ height: '100%', borderRadius: '3px', background: d.color }}
                      initial={{ width: '0%' }}
                      animate={{ width: masteryPct !== null ? `${masteryPct}%` : `${d.pct}%` }}
                      transition={{ duration: 0.8, delay: 0.4 + i * 0.1 }}
                    />
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>

      {/* SAT Lessons CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
        style={{ marginBottom: '20px' }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
          <BookOpen size={15} color="var(--text-muted)" />
          <p style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600, fontSize: '14px', color: 'var(--text-primary)', margin: 0 }}>
            Study First, Then Practice
          </p>
        </div>
        <motion.div
          whileHover={{ y: -2, boxShadow: '0 8px 32px rgba(99,102,241,0.12)' }}
          onClick={() => router.push('/sat/lessons')}
          style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            padding: '18px 22px',
            background: 'linear-gradient(135deg, rgba(99,102,241,0.08) 0%, rgba(99,102,241,0.03) 100%)',
            border: '1px solid rgba(99,102,241,0.2)',
            borderRadius: '16px', cursor: 'pointer',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div style={{ width: 44, height: 44, borderRadius: '12px', background: 'rgba(99,102,241,0.15)', border: '1px solid rgba(99,102,241,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <BookOpen size={22} color="var(--sat-accent)" />
            </div>
            <div>
              <p style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '15px', fontWeight: 600, color: 'var(--text-primary)', margin: 0 }}>
                SAT Math Lessons
              </p>
              <p style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '2px', marginBottom: 0 }}>
                7 Algebra lessons available · Advanced Math coming soon
              </p>
            </div>
          </div>
          <ChevronRight size={18} color="var(--sat-accent)" />
        </motion.div>
      </motion.div>

      {/* Practice Tests row */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }} style={{ marginBottom: '20px' }}>
        <p style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600, fontSize: '14px', color: 'var(--text-primary)', marginBottom: '12px' }}>
          Full-Length Practice Tests
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
          {tests.map((test, i) => {
            const result = results.find(r => r.testId === test.id)
            return (
              <motion.div
                key={test.id}
                whileHover={{ y: -2, boxShadow: '0 8px 32px rgba(99,102,241,0.15)' }}
                transition={{ duration: 0.18 }}
                onClick={() => router.push(`/sat/test?id=${test.id}`)}
                style={{
                  background: 'linear-gradient(135deg, rgba(99,102,241,0.08) 0%, rgba(99,102,241,0.03) 100%)',
                  border: '1px solid rgba(99,102,241,0.2)',
                  borderRadius: '16px',
                  padding: '20px',
                  cursor: 'pointer',
                  position: 'relative',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px' }}>
                  <span style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600, fontSize: '15px', color: 'var(--text-primary)' }}>
                    {test.name}
                  </span>
                  {result && (
                    <span style={{ padding: '2px 8px', borderRadius: '12px', fontSize: '11px', fontWeight: 700, background: 'rgba(88,204,2,0.15)', color: '#58cc02' }}>
                      {result.scaledScore}
                    </span>
                  )}
                </div>
                <p style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '12px' }}>
                  {test.questions} questions · {test.time} · {test.difficulty}
                </p>
                <div style={{ display: 'flex', gap: '6px' }}>
                  {['Module 1', 'Module 2 (Adaptive)'].map(m => (
                    <span key={m} style={{ padding: '2px 8px', borderRadius: '8px', fontSize: '10px', background: 'rgba(99,102,241,0.1)', color: 'var(--sat-accent)', border: '1px solid rgba(99,102,241,0.2)' }}>
                      {m}
                    </span>
                  ))}
                </div>
                <ChevronRight size={16} color="var(--sat-accent)" style={{ position: 'absolute', right: '16px', bottom: '16px' }} />
              </motion.div>
            )
          })}
        </div>
      </motion.div>

      {/* 1500+ Strategy Tips */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
          <TrendingUp size={16} color="#ffd700" />
          <p style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600, fontSize: '14px', color: 'var(--text-primary)' }}>
            1500+ Strategy Guide
          </p>
          <span style={{ padding: '2px 8px', borderRadius: '10px', fontSize: '10px', fontWeight: 600, background: 'rgba(255,215,0,0.12)', color: '#ffd700' }}>
            Math Section
          </span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
          {strategyTips.map((tip, i) => (
            <motion.div
              key={tip.tip}
              initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 + i * 0.06 }}
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: '14px',
                padding: '14px 16px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                {tip.icon}
                <span style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '12px', fontWeight: 600, color: 'var(--text-primary)' }}>
                  {tip.tip}
                </span>
              </div>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                {tip.detail}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}
