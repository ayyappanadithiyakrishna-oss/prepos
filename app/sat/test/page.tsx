'use client'

import { Suspense, useState, useEffect, useRef } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Clock, Flag, ChevronLeft, ChevronRight, Check, X } from 'lucide-react'
import { TEST1 } from '@/lib/sat-practice/test1'
import { TEST2 } from '@/lib/sat-practice/test2'
import {
  SAT_REFERENCE_FORMULAS,
  calculateScaledScore,
  shouldTakeHardModule2,
} from '@/lib/sat-practice'
import type { SATQuestion, SATTestResult, SATDomain, SATTest } from '@/lib/sat-practice'

type Phase = 'module1' | 'transition' | 'module2' | 'done'

function SATTestInner() {
  const router = useRouter()
  const params = useSearchParams()
  const testId = params.get('id') ?? 'test1'
  const test: SATTest = testId === 'test2' ? TEST2 : TEST1

  const [phase, setPhase] = useState<Phase>('module1')
  const [currentQ, setCurrentQ] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [flagged, setFlagged] = useState<Set<string>>(new Set())
  const [showRef, setShowRef] = useState(false)
  const [secondsLeft, setSecondsLeft] = useState(35 * 60)
  const [module1Score, setModule1Score] = useState(0)
  const [usingHardM2, setUsingHardM2] = useState(true)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  // We need stable refs for the finish functions so the timer closure can call them
  const phaseRef = useRef(phase)
  phaseRef.current = phase

  function doFinishModule1() {
    const m1 = test.module1
    const score = m1.filter(q => answers[q.id] === q.answer).length
    setModule1Score(score)
    const hard = shouldTakeHardModule2(score)
    setUsingHardM2(hard)
    setPhase('transition')
    setSecondsLeft(35 * 60)
    setTimeout(() => { setCurrentQ(0); setPhase('module2') }, 6000)
  }

  function doFinishModule2() {
    const m1Qs = test.module1
    const m2Qs = usingHardM2 ? test.module2Hard : test.module2Easy
    const m1Score = m1Qs.filter(q => answers[q.id] === q.answer).length
    const m2Score = m2Qs.filter(q => answers[q.id] === q.answer).length
    const totalRaw = m1Score + m2Score
    const scaledScore = calculateScaledScore(totalRaw)

    const domainScores = {} as Record<SATDomain, { correct: number; total: number }>
    for (const domain of ['Algebra', 'Advanced Math', 'Problem Solving & Data Analysis', 'Geometry & Trigonometry'] as SATDomain[]) {
      domainScores[domain] = { correct: 0, total: 0 }
    }
    for (const q of [...m1Qs, ...m2Qs]) {
      domainScores[q.domain].total++
      if (answers[q.id] === q.answer) domainScores[q.domain].correct++
    }

    const result: SATTestResult = {
      testId: test.id,
      module1Answers: Object.fromEntries(m1Qs.map(q => [q.id, answers[q.id] ?? ''])),
      module2Answers: Object.fromEntries(m2Qs.map(q => [q.id, answers[q.id] ?? ''])),
      module1Score: m1Score,
      module2Score: m2Score,
      totalRaw,
      scaledScore,
      domainScores,
      completedAt: new Date().toISOString(),
      tookHardModule2: usingHardM2,
    }

    try {
      const prev = JSON.parse(localStorage.getItem('prepos_sat_results') ?? '[]')
      prev.push(result)
      localStorage.setItem('prepos_sat_results', JSON.stringify(prev))
      localStorage.setItem('prepos_sat_last', JSON.stringify(result))
    } catch {}
    router.push('/sat/results')
  }

  // Store finish functions in refs so the timer can call current versions
  const doFinishModule1Ref = useRef(doFinishModule1)
  const doFinishModule2Ref = useRef(doFinishModule2)
  doFinishModule1Ref.current = doFinishModule1
  doFinishModule2Ref.current = doFinishModule2

  useEffect(() => {
    if (phase === 'transition' || phase === 'done') return
    if (timerRef.current) clearInterval(timerRef.current)
    timerRef.current = setInterval(() => {
      setSecondsLeft(s => {
        if (s <= 1) {
          clearInterval(timerRef.current!)
          if (phaseRef.current === 'module1') doFinishModule1Ref.current()
          else doFinishModule2Ref.current()
          return 0
        }
        return s - 1
      })
    }, 1000)
    return () => { if (timerRef.current) clearInterval(timerRef.current) }
  }, [phase])

  function formatTime(s: number) {
    const m = Math.floor(s / 60)
    const sec = s % 60
    return `${m}:${sec.toString().padStart(2, '0')}`
  }

  function toggleFlag(id: string) {
    setFlagged(f => { const n = new Set(f); n.has(id) ? n.delete(id) : n.add(id); return n })
  }

  const activeQuestions: SATQuestion[] = phase === 'module2'
    ? (usingHardM2 ? test.module2Hard : test.module2Easy)
    : test.module1
  const activeQ = activeQuestions[currentQ] ?? activeQuestions[0]
  const answeredCount = activeQuestions.filter(q => answers[q.id]).length

  // Transition screen
  if (phase === 'transition') {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', gap: '16px', background: 'var(--bg-base)' }}>
        <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ type: 'spring', stiffness: 200 }}>
          <div style={{ width: 80, height: 80, borderRadius: '50%', background: 'rgba(88,204,2,0.15)', border: '2px solid #58cc02', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Check size={36} color="#58cc02" />
          </div>
        </motion.div>
        <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '28px', fontWeight: 700, color: 'var(--text-primary)' }}>Module 1 Complete</h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '16px' }}>Score: {module1Score} / 22</p>
        {usingHardM2
          ? <p style={{ color: '#ffd700', fontSize: '14px', fontWeight: 600 }}>Excellent — you unlocked the Advanced Module 2</p>
          : <p style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>Loading Standard Module 2…</p>
        }
        <p style={{ color: 'var(--text-muted)', fontSize: '13px', marginTop: '8px' }}>Module 2 starts in 6 seconds…</p>
      </div>
    )
  }

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-base)' }}>
      {/* Top bar */}
      <div style={{ position: 'sticky', top: 0, zIndex: 50, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 24px', background: 'var(--bg-surface)', borderBottom: '1px solid var(--border)' }}>
        {/* Timer */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Clock size={16} color={secondsLeft < 300 ? '#ef4444' : 'var(--text-muted)'} />
          <span style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '20px', fontWeight: 700, color: secondsLeft < 300 ? '#ef4444' : 'var(--text-primary)', fontVariantNumeric: 'tabular-nums' }}>
            {formatTime(secondsLeft)}
          </span>
          {secondsLeft < 300 && <span style={{ fontSize: '11px', color: '#ef4444', fontWeight: 600 }}>LOW TIME</span>}
        </div>

        {/* Center: module label + dot nav */}
        <div style={{ textAlign: 'center' }}>
          <p style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '5px' }}>
            {phase === 'module1' ? 'Module 1' : `Module 2 ${usingHardM2 ? '· Advanced' : '· Standard'}`} &nbsp;·&nbsp; Question {currentQ + 1} of {activeQuestions.length}
          </p>
          <div style={{ display: 'flex', gap: '4px', justifyContent: 'center' }}>
            {activeQuestions.map((q, i) => (
              <button
                key={q.id}
                onClick={() => setCurrentQ(i)}
                title={`Q${i + 1}${flagged.has(q.id) ? ' (flagged)' : ''}`}
                style={{
                  width: 10, height: 10, borderRadius: '50%', border: 'none', cursor: 'pointer', padding: 0,
                  background: answers[q.id]
                    ? 'var(--sat-accent)'
                    : (flagged.has(q.id) ? '#ffd700' : (i === currentQ ? 'var(--text-primary)' : 'var(--border)'))
                }}
              />
            ))}
          </div>
        </div>

        {/* Right: reference + flag */}
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          <button onClick={() => setShowRef(true)} style={{ fontSize: '12px', color: 'var(--text-muted)', cursor: 'pointer', background: 'var(--bg-elevated)', border: '1px solid var(--border)', borderRadius: '8px', padding: '5px 10px' }}>
            Reference
          </button>
          <button
            onClick={() => toggleFlag(activeQ.id)}
            style={{
              fontSize: '12px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px',
              background: flagged.has(activeQ.id) ? 'rgba(255,215,0,0.12)' : 'var(--bg-elevated)',
              border: `1px solid ${flagged.has(activeQ.id) ? '#ffd700' : 'var(--border)'}`,
              color: flagged.has(activeQ.id) ? '#ffd700' : 'var(--text-muted)',
              borderRadius: '8px', padding: '5px 10px'
            }}>
            <Flag size={12} /> {flagged.has(activeQ.id) ? 'Flagged' : 'Flag'}
          </button>
        </div>
      </div>

      {/* Question area */}
      <div style={{ maxWidth: 680, margin: '0 auto', padding: '32px 24px', minHeight: 'calc(100vh - 120px)' }}>
        {/* Domain + difficulty badges */}
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '16px' }}>
          <span style={{ padding: '3px 10px', borderRadius: '20px', fontSize: '11px', fontWeight: 600, background: 'var(--sat-accent-dim)', color: 'var(--sat-accent)', border: '1px solid var(--sat-accent-border)' }}>
            {activeQ.domain}
          </span>
          <span style={{ padding: '3px 10px', borderRadius: '20px', fontSize: '11px', background: 'var(--bg-elevated)', color: 'var(--text-muted)', border: '1px solid var(--border)' }}>
            {activeQ.difficulty}
          </span>
          {flagged.has(activeQ.id) && (
            <span style={{ padding: '3px 10px', borderRadius: '20px', fontSize: '11px', background: 'rgba(255,215,0,0.1)', color: '#ffd700', border: '1px solid rgba(255,215,0,0.25)' }}>
              Marked for review
            </span>
          )}
        </div>

        {/* Context block */}
        {activeQ.context && (
          <div style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border)', borderRadius: '12px', padding: '16px 18px', marginBottom: '20px', fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.65, whiteSpace: 'pre-line' }}>
            {activeQ.context}
          </div>
        )}

        {/* Question text */}
        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '18px', lineHeight: 1.65, color: 'var(--text-primary)', marginBottom: '28px', fontWeight: 400 }}>
          {activeQ.question}
        </p>

        {/* MC choices */}
        {activeQ.type === 'mc' && activeQ.choices && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {(['A', 'B', 'C', 'D'] as const).map((letter, i) => {
              const selected = answers[activeQ.id] === letter
              return (
                <motion.button
                  key={letter}
                  whileHover={{ x: 3 }}
                  transition={{ duration: 0.12 }}
                  onClick={() => setAnswers(a => ({ ...a, [activeQ.id]: letter }))}
                  style={{
                    display: 'flex', alignItems: 'center', gap: '14px', padding: '14px 18px',
                    borderRadius: '14px', cursor: 'pointer', textAlign: 'left', width: '100%',
                    background: selected ? 'rgba(99,102,241,0.1)' : 'var(--bg-card)',
                    border: `2px solid ${selected ? 'var(--sat-accent)' : 'var(--border)'}`,
                    transition: 'border-color 0.15s ease, background 0.15s ease'
                  }}>
                  <span style={{
                    width: 30, height: 30, borderRadius: '50%', flexShrink: 0,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontFamily: 'Space Grotesk, sans-serif', fontSize: '13px', fontWeight: 700,
                    background: selected ? 'var(--sat-accent)' : 'var(--bg-elevated)',
                    color: selected ? 'white' : 'var(--text-muted)',
                    border: `1px solid ${selected ? 'var(--sat-accent)' : 'var(--border)'}`
                  }}>
                    {letter}
                  </span>
                  <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', color: 'var(--text-primary)' }}>
                    {activeQ.choices![i]}
                  </span>
                </motion.button>
              )
            })}
          </div>
        )}

        {/* SPR input */}
        {activeQ.type === 'spr' && (
          <div>
            <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '12px' }}>
              Enter your answer below. Fractions like 3/4 are accepted.
            </p>
            <input
              type="text"
              value={answers[activeQ.id] ?? ''}
              onChange={e => setAnswers(a => ({ ...a, [activeQ.id]: e.target.value.trim() }))}
              placeholder="Your answer…"
              style={{
                width: '220px', padding: '14px 18px', borderRadius: '14px',
                background: 'var(--bg-card)', border: '2px solid var(--border)',
                color: 'var(--text-primary)', fontFamily: 'Space Grotesk, sans-serif',
                fontSize: '22px', fontWeight: 600, outline: 'none',
                transition: 'border-color 0.15s ease'
              }}
              onFocus={e => { e.target.style.borderColor = 'var(--sat-accent)' }}
              onBlur={e => { e.target.style.borderColor = answers[activeQ.id] ? 'var(--sat-accent)' : 'var(--border)' }}
            />
          </div>
        )}
      </div>

      {/* Bottom bar */}
      <div style={{ position: 'sticky', bottom: 0, display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 24px', background: 'var(--bg-surface)', borderTop: '1px solid var(--border)' }}>
        <button
          onClick={() => setCurrentQ(q => Math.max(0, q - 1))}
          disabled={currentQ === 0}
          style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '8px 18px', borderRadius: '10px', border: '1px solid var(--border)', background: 'var(--bg-card)', color: 'var(--text-secondary)', cursor: 'pointer', opacity: currentQ === 0 ? 0.4 : 1 }}>
          <ChevronLeft size={16} /> Back
        </button>

        <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
          {answeredCount} / {activeQuestions.length} answered
          {flagged.size > 0 && ` · ${flagged.size} flagged`}
        </span>

        {currentQ < activeQuestions.length - 1 ? (
          <button
            onClick={() => setCurrentQ(q => q + 1)}
            style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '8px 22px', borderRadius: '10px', border: 'none', background: 'var(--sat-accent)', color: 'white', cursor: 'pointer', fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600, fontSize: '14px' }}>
            Next <ChevronRight size={16} />
          </button>
        ) : (
          <button
            onClick={phase === 'module1' ? doFinishModule1 : doFinishModule2}
            style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '8px 22px', borderRadius: '10px', border: 'none', background: '#58cc02', color: 'white', cursor: 'pointer', fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600, fontSize: '14px' }}>
            <Check size={16} /> {phase === 'module1' ? 'Submit Module 1' : 'Submit & Score'}
          </button>
        )}
      </div>

      {/* Reference modal */}
      {showRef && (
        <div
          style={{ position: 'fixed', inset: 0, zIndex: 100, background: 'rgba(0,0,0,0.75)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          onClick={() => setShowRef(false)}>
          <div
            style={{ background: 'var(--bg-elevated)', borderRadius: '20px', padding: '28px', maxWidth: '500px', width: '90%', border: '1px solid var(--border)' }}
            onClick={e => e.stopPropagation()}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <h3 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '18px', fontWeight: 700, color: 'var(--text-primary)' }}>Reference Sheet</h3>
              <button onClick={() => setShowRef(false)} style={{ background: 'none', border: 'none', cursor: 'pointer' }}><X size={20} color="var(--text-muted)" /></button>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
              {SAT_REFERENCE_FORMULAS.map(f => (
                <div key={f.name} style={{ background: 'var(--bg-card)', borderRadius: '10px', padding: '10px 14px', border: '1px solid var(--border)' }}>
                  <p style={{ fontSize: '10px', color: 'var(--text-muted)', marginBottom: '4px' }}>{f.name}</p>
                  <p style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '14px', fontWeight: 600, color: 'var(--sat-accent)' }}>{f.formula}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default function SATTestPage() {
  return (
    <Suspense fallback={
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', color: 'var(--text-muted)', fontFamily: 'DM Sans, sans-serif' }}>
        Loading test…
      </div>
    }>
      <SATTestInner />
    </Suspense>
  )
}
