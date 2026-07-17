'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sparkles, Loader2, ChevronRight, Check, X, RefreshCw, Trophy } from 'lucide-react'
import type { SATDomain } from '@/lib/sat-practice'
import { DOMAIN_COLORS } from '@/lib/sat-practice'

// ── Types ────────────────────────────────────────────────────────────────────

interface AIQuestion {
  id: string
  domain: string
  skill: string
  difficulty: 'Easy' | 'Medium' | 'Hard'
  type: 'mc' | 'spr'
  question: string
  choices?: string[]
  answer: string
  explanation: string
  strategy?: string
}

type Phase = 'setup' | 'quiz' | 'results'

const DOMAINS: SATDomain[] = [
  'Algebra',
  'Advanced Math',
  'Problem Solving & Data Analysis',
  'Geometry & Trigonometry',
]

const DIFFICULTIES = ['Easy', 'Mixed', 'Hard'] as const
type DifficultyChoice = typeof DIFFICULTIES[number]

// ── Helpers ──────────────────────────────────────────────────────────────────

function getScoreColor(score: number, total: number) {
  const pct = score / total
  if (pct >= 0.8) return '#22c55e'  // green
  if (pct >= 0.6) return '#3b82f6'  // blue
  return '#ef4444'                   // red
}

function DifficultyBadge({ d }: { d: string }) {
  const color = d === 'Easy' ? '#22c55e' : d === 'Medium' ? '#f97316' : '#ef4444'
  return (
    <span style={{
      fontSize: '11px',
      fontWeight: 600,
      color,
      background: `${color}22`,
      border: `1px solid ${color}44`,
      borderRadius: '4px',
      padding: '2px 7px',
      letterSpacing: '0.05em',
      textTransform: 'uppercase',
    }}>
      {d}
    </span>
  )
}

// ── Main Page ─────────────────────────────────────────────────────────────────

export default function AIDrillPage() {
  const [selectedDomain, setSelectedDomain] = useState<SATDomain | null>(null)
  const [difficulty, setDifficulty] = useState<DifficultyChoice>('Mixed')
  const [loading, setLoading] = useState(false)
  const [questions, setQuestions] = useState<AIQuestion[]>([])
  const [currentQ, setCurrentQ] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [submitted, setSubmitted] = useState<Record<string, boolean>>({})
  const [phase, setPhase] = useState<Phase>('setup')
  const [error, setError] = useState<string | null>(null)
  const [sprInput, setSprInput] = useState('')

  // ── Generate ──────────────────────────────────────────────────────────────

  async function generate() {
    if (!selectedDomain) return
    setLoading(true)
    setError(null)
    try {
      const difficultyParam = difficulty === 'Mixed'
        ? 'mixed (2 Easy, 2 Medium, 1 Hard)'
        : difficulty
      const res = await fetch('/api/ai/drill', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ domain: selectedDomain, difficulty: difficultyParam, count: 5 }),
      })
      const data = await res.json()
      if (data.questions && Array.isArray(data.questions)) {
        setQuestions(data.questions as AIQuestion[])
        setCurrentQ(0)
        setAnswers({})
        setSubmitted({})
        setSprInput('')
        setPhase('quiz')
      } else {
        setError(data.error ?? 'Failed to generate questions')
      }
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Network error')
    }
    setLoading(false)
  }

  // ── Quiz actions ──────────────────────────────────────────────────────────

  function selectAnswer(qId: string, choice: string) {
    if (submitted[qId]) return
    setAnswers(a => ({ ...a, [qId]: choice }))
  }

  function submitCurrent() {
    const q = questions[currentQ]
    if (!q) return
    const ans = q.type === 'spr' ? sprInput.trim() : answers[q.id]
    if (!ans) return
    setAnswers(a => ({ ...a, [q.id]: ans }))
    setSubmitted(s => ({ ...s, [q.id]: true }))
  }

  function next() {
    if (currentQ < questions.length - 1) {
      setCurrentQ(i => i + 1)
      setSprInput('')
    } else {
      setPhase('results')
    }
  }

  function reset() {
    setPhase('setup')
    setQuestions([])
    setAnswers({})
    setSubmitted({})
    setSprInput('')
    setCurrentQ(0)
    setError(null)
  }

  // ── Score ─────────────────────────────────────────────────────────────────

  const score = questions.reduce((acc, q) => {
    const userAns = answers[q.id] ?? ''
    const correct = q.type === 'spr'
      ? userAns.trim() === q.answer.trim()
      : userAns === q.answer
    return acc + (correct ? 1 : 0)
  }, 0)

  const q = questions[currentQ]
  const isSubmitted = q ? submitted[q.id] : false
  const userAnswer = q ? (answers[q.id] ?? '') : ''
  const isCorrect = q && isSubmitted
    ? (q.type === 'spr' ? userAnswer.trim() === q.answer.trim() : userAnswer === q.answer)
    : false

  // ── Render ────────────────────────────────────────────────────────────────

  return (
    <div style={{
      minHeight: '100vh',
      background: 'var(--bg)',
      color: 'var(--text-primary)',
      fontFamily: 'DM Sans, sans-serif',
      padding: '24px 16px 60px',
      maxWidth: '680px',
      margin: '0 auto',
    }}>

      {/* ── Header ── */}
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        style={{ marginBottom: '28px' }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
          <div style={{
            width: '36px', height: '36px', borderRadius: '10px',
            background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 0 16px #6366f144',
          }}>
            <Sparkles size={18} color="#fff" />
          </div>
          <div>
            <h1 style={{ fontSize: '20px', fontWeight: 700, margin: 0, fontFamily: 'Space Grotesk, sans-serif' }}>
              AI Practice Drill
            </h1>
            <p style={{ fontSize: '12px', color: 'var(--text-muted)', margin: 0 }}>
              Claude generates targeted questions for you
            </p>
          </div>
        </div>
      </motion.div>

      <AnimatePresence mode="wait">

        {/* ── Setup Phase ── */}
        {phase === 'setup' && (
          <motion.div
            key="setup"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
          >
            {/* Domain selector */}
            <div style={{ marginBottom: '24px' }}>
              <p style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '10px', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                Choose Domain
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                {DOMAINS.map(domain => {
                  const color = DOMAIN_COLORS[domain]
                  const selected = selectedDomain === domain
                  return (
                    <motion.button
                      key={domain}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setSelectedDomain(domain)}
                      style={{
                        background: selected ? `${color}18` : 'var(--card)',
                        border: `1.5px solid ${selected ? color : 'var(--border)'}`,
                        borderRadius: '12px',
                        padding: '14px 12px',
                        cursor: 'pointer',
                        textAlign: 'left',
                        transition: 'all 0.15s',
                        boxShadow: selected ? `0 0 12px ${color}33` : 'none',
                      }}
                    >
                      <div style={{
                        width: '8px', height: '8px', borderRadius: '50%',
                        background: color, marginBottom: '8px',
                      }} />
                      <p style={{
                        fontSize: '13px', fontWeight: 600, margin: 0,
                        color: selected ? color : 'var(--text-primary)',
                        lineHeight: 1.3,
                      }}>
                        {domain}
                      </p>
                    </motion.button>
                  )
                })}
              </div>
            </div>

            {/* Difficulty selector */}
            <div style={{ marginBottom: '28px' }}>
              <p style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '10px', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                Difficulty
              </p>
              <div style={{ display: 'flex', gap: '8px' }}>
                {DIFFICULTIES.map(d => (
                  <button
                    key={d}
                    onClick={() => setDifficulty(d)}
                    style={{
                      flex: 1,
                      padding: '10px',
                      borderRadius: '10px',
                      border: `1.5px solid ${difficulty === d ? '#6366f1' : 'var(--border)'}`,
                      background: difficulty === d ? '#6366f115' : 'var(--card)',
                      color: difficulty === d ? '#818cf8' : 'var(--text-secondary)',
                      fontSize: '13px',
                      fontWeight: difficulty === d ? 700 : 500,
                      cursor: 'pointer',
                      transition: 'all 0.15s',
                    }}
                  >
                    {d}
                  </button>
                ))}
              </div>
            </div>

            {/* Error */}
            {error && (
              <div style={{
                background: '#ef444415', border: '1px solid #ef444433',
                borderRadius: '10px', padding: '12px 14px',
                marginBottom: '16px', fontSize: '13px', color: '#f87171',
              }}>
                {error}
              </div>
            )}

            {/* Generate button */}
            <motion.button
              whileHover={{ scale: selectedDomain && !loading ? 1.02 : 1 }}
              whileTap={{ scale: selectedDomain && !loading ? 0.98 : 1 }}
              onClick={generate}
              disabled={!selectedDomain || loading}
              style={{
                width: '100%',
                padding: '16px',
                borderRadius: '14px',
                border: 'none',
                background: selectedDomain
                  ? 'linear-gradient(135deg, #6366f1, #8b5cf6)'
                  : 'var(--card)',
                color: selectedDomain ? '#fff' : 'var(--text-muted)',
                fontSize: '15px',
                fontWeight: 700,
                cursor: selectedDomain && !loading ? 'pointer' : 'default',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                boxShadow: selectedDomain ? '0 4px 20px #6366f133' : 'none',
                transition: 'all 0.2s',
              }}
            >
              {loading ? (
                <>
                  <Loader2 size={18} style={{ animation: 'spin 1s linear infinite' }} />
                  Claude is writing your questions…
                </>
              ) : (
                <>
                  <Sparkles size={18} />
                  Generate 5 Questions
                </>
              )}
            </motion.button>

            <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
          </motion.div>
        )}

        {/* ── Quiz Phase ── */}
        {phase === 'quiz' && q && (
          <motion.div
            key={`quiz-${currentQ}`}
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -24 }}
          >
            {/* Progress bar */}
            <div style={{ marginBottom: '20px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
                  Question {currentQ + 1} of {questions.length}
                </span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <DifficultyBadge d={q.difficulty} />
                </div>
              </div>
              <div style={{ height: '4px', background: 'var(--border)', borderRadius: '2px', overflow: 'hidden' }}>
                <motion.div
                  style={{
                    height: '100%', borderRadius: '2px',
                    background: 'linear-gradient(90deg, #6366f1, #8b5cf6)',
                    originX: 0,
                  }}
                  animate={{ scaleX: (currentQ + 1) / questions.length }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                />
              </div>
            </div>

            {/* Question card */}
            <div style={{
              background: 'var(--card)',
              border: '1px solid var(--border)',
              borderRadius: '16px',
              padding: '20px',
              marginBottom: '16px',
            }}>
              <p style={{ fontSize: '11px', color: '#818cf8', fontWeight: 600, marginBottom: '8px', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                {q.domain} · {q.skill}
              </p>
              <p style={{ fontSize: '15px', lineHeight: 1.6, margin: 0 }}>
                {q.question}
              </p>
            </div>

            {/* MC choices */}
            {q.type === 'mc' && q.choices && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '16px' }}>
                {q.choices.map((choice, i) => {
                  const letter = ['A', 'B', 'C', 'D'][i]
                  const isSelected = userAnswer === letter
                  const wasCorrect = isSubmitted && letter === q.answer
                  const wasWrong = isSubmitted && isSelected && letter !== q.answer

                  let borderColor = 'var(--border)'
                  let bg = 'var(--card)'
                  let textColor = 'var(--text-primary)'

                  if (wasCorrect) { borderColor = '#22c55e'; bg = '#22c55e15'; textColor = '#4ade80' }
                  else if (wasWrong) { borderColor = '#ef4444'; bg = '#ef444415'; textColor = '#f87171' }
                  else if (isSelected && !isSubmitted) { borderColor = '#6366f1'; bg = '#6366f115'; textColor = '#818cf8' }

                  return (
                    <motion.button
                      key={letter}
                      whileHover={{ scale: isSubmitted ? 1 : 1.01 }}
                      whileTap={{ scale: isSubmitted ? 1 : 0.99 }}
                      onClick={() => selectAnswer(q.id, letter)}
                      style={{
                        display: 'flex', alignItems: 'flex-start', gap: '12px',
                        padding: '14px 16px', borderRadius: '12px',
                        border: `1.5px solid ${borderColor}`,
                        background: bg, cursor: isSubmitted ? 'default' : 'pointer',
                        textAlign: 'left', transition: 'all 0.15s',
                      }}
                    >
                      <span style={{
                        minWidth: '26px', height: '26px', borderRadius: '50%',
                        background: isSelected || wasCorrect ? borderColor + '33' : 'var(--border)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: '12px', fontWeight: 700,
                        color: isSelected || wasCorrect ? borderColor : 'var(--text-muted)',
                      }}>
                        {letter}
                      </span>
                      <span style={{ fontSize: '14px', color: textColor, lineHeight: 1.5, flex: 1 }}>
                        {choice}
                      </span>
                      {wasCorrect && <Check size={16} color="#22c55e" style={{ marginTop: '5px', flexShrink: 0 }} />}
                      {wasWrong && <X size={16} color="#ef4444" style={{ marginTop: '5px', flexShrink: 0 }} />}
                    </motion.button>
                  )
                })}
              </div>
            )}

            {/* SPR input */}
            {q.type === 'spr' && (
              <div style={{ marginBottom: '16px' }}>
                <p style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '8px' }}>
                  Student-Produced Response — enter your numeric answer:
                </p>
                <input
                  type="text"
                  value={sprInput}
                  onChange={e => setSprInput(e.target.value)}
                  disabled={isSubmitted}
                  placeholder="Enter answer (e.g. 7 or 3/4)"
                  style={{
                    width: '100%',
                    padding: '14px 16px',
                    borderRadius: '12px',
                    border: `1.5px solid ${isSubmitted
                      ? (isCorrect ? '#22c55e' : '#ef4444')
                      : (sprInput ? '#6366f1' : 'var(--border)')}`,
                    background: isSubmitted
                      ? (isCorrect ? '#22c55e15' : '#ef444415')
                      : 'var(--card)',
                    color: isSubmitted
                      ? (isCorrect ? '#4ade80' : '#f87171')
                      : 'var(--text-primary)',
                    fontSize: '16px',
                    fontFamily: 'Space Grotesk, monospace',
                    outline: 'none',
                    boxSizing: 'border-box',
                  }}
                />
                {isSubmitted && (
                  <p style={{ fontSize: '13px', marginTop: '6px', color: isCorrect ? '#4ade80' : '#f87171' }}>
                    {isCorrect ? 'Correct!' : `Correct answer: ${q.answer}`}
                  </p>
                )}
              </div>
            )}

            {/* Explanation */}
            <AnimatePresence>
              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  style={{
                    background: isCorrect ? '#22c55e0c' : '#6366f10c',
                    border: `1px solid ${isCorrect ? '#22c55e33' : '#6366f133'}`,
                    borderRadius: '12px',
                    padding: '14px 16px',
                    marginBottom: '16px',
                  }}
                >
                  <p style={{ fontSize: '12px', fontWeight: 700, color: isCorrect ? '#4ade80' : '#818cf8', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    {isCorrect ? 'Great work!' : `Correct answer: ${q.answer}`}
                  </p>
                  <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                    {q.explanation}
                  </p>
                  {q.strategy && (
                    <p style={{ fontSize: '12px', color: '#a78bfa', marginTop: '8px', margin: '8px 0 0' }}>
                      Tip: {q.strategy}
                    </p>
                  )}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Action buttons */}
            <div style={{ display: 'flex', gap: '10px' }}>
              {!isSubmitted ? (
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={submitCurrent}
                  disabled={q.type === 'mc' ? !userAnswer : !sprInput.trim()}
                  style={{
                    flex: 1, padding: '14px', borderRadius: '12px',
                    border: '1px solid var(--border)',
                    background: (q.type === 'mc' ? userAnswer : sprInput.trim())
                      ? 'linear-gradient(135deg, #6366f1, #8b5cf6)'
                      : 'var(--bg-card)',
                    color: (q.type === 'mc' ? userAnswer : sprInput.trim()) ? '#fff' : 'var(--text-muted)',
                    fontSize: '14px', fontWeight: 700,
                    cursor: (q.type === 'mc' ? userAnswer : sprInput.trim()) ? 'pointer' : 'default',
                  }}
                >
                  Submit Answer
                </motion.button>
              ) : (
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={next}
                  style={{
                    flex: 1, padding: '14px', borderRadius: '12px', border: 'none',
                    background: currentQ < questions.length - 1
                      ? 'linear-gradient(135deg, #6366f1, #8b5cf6)'
                      : 'linear-gradient(135deg, #58cc02, #46a302)',
                    color: '#fff', fontSize: '14px', fontWeight: 700, cursor: 'pointer',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px',
                  }}
                >
                  {currentQ < questions.length - 1 ? (
                    <><span>Next Question</span><ChevronRight size={16} /></>
                  ) : (
                    <><Trophy size={16} /><span>See Results</span></>
                  )}
                </motion.button>
              )}
            </div>
          </motion.div>
        )}

        {/* ── Results Phase ── */}
        {phase === 'results' && (
          <motion.div
            key="results"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            {/* Score card */}
            <div style={{
              background: 'var(--card)',
              border: `2px solid ${getScoreColor(score, questions.length)}44`,
              borderRadius: '20px',
              padding: '28px 24px',
              marginBottom: '20px',
              textAlign: 'center',
              boxShadow: `0 0 24px ${getScoreColor(score, questions.length)}22`,
            }}>
              <div style={{
                width: '64px', height: '64px', borderRadius: '50%',
                background: `${getScoreColor(score, questions.length)}22`,
                border: `3px solid ${getScoreColor(score, questions.length)}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                margin: '0 auto 12px',
              }}>
                <Trophy size={28} color={getScoreColor(score, questions.length)} />
              </div>
              <h2 style={{
                fontSize: '48px', fontWeight: 800,
                fontFamily: 'Space Grotesk, sans-serif',
                color: getScoreColor(score, questions.length),
                margin: 0, lineHeight: 1,
              }}>
                {score}/{questions.length}
              </h2>
              <p style={{ fontSize: '14px', color: 'var(--text-muted)', marginTop: '6px' }}>
                {score >= 4 ? 'Excellent! You\'ve mastered this domain.' :
                 score >= 3 ? 'Good job! A bit more practice will sharpen you.' :
                 'Keep grinding — review the explanations above.'}
              </p>
            </div>

            {/* Per-question breakdown */}
            <div style={{ marginBottom: '20px' }}>
              {questions.map((qItem, idx) => {
                const userAns = answers[qItem.id] ?? ''
                const correct = qItem.type === 'spr'
                  ? userAns.trim() === qItem.answer.trim()
                  : userAns === qItem.answer
                return (
                  <div key={qItem.id} style={{
                    background: 'var(--card)',
                    border: `1px solid ${correct ? '#22c55e33' : '#ef444433'}`,
                    borderRadius: '12px',
                    padding: '14px 16px',
                    marginBottom: '8px',
                    display: 'flex', gap: '12px', alignItems: 'flex-start',
                  }}>
                    <div style={{
                      width: '28px', height: '28px', borderRadius: '50%', flexShrink: 0,
                      background: correct ? '#22c55e22' : '#ef444422',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      {correct
                        ? <Check size={14} color="#22c55e" />
                        : <X size={14} color="#ef4444" />}
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '4px' }}>
                        <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>Q{idx + 1}</span>
                        <DifficultyBadge d={qItem.difficulty} />
                        <span style={{ fontSize: '11px', color: '#818cf8' }}>{qItem.skill}</span>
                      </div>
                      <p style={{ fontSize: '13px', margin: '0 0 6px', color: 'var(--text-secondary)', lineHeight: 1.4 }}>
                        {qItem.question.length > 80
                          ? qItem.question.slice(0, 80) + '…'
                          : qItem.question}
                      </p>
                      <p style={{ fontSize: '12px', margin: 0, color: 'var(--text-muted)' }}>
                        Your answer: <span style={{ color: correct ? '#4ade80' : '#f87171', fontWeight: 600 }}>
                          {userAns || 'skipped'}
                        </span>
                        {!correct && (
                          <> · Correct: <span style={{ color: '#4ade80', fontWeight: 600 }}>{qItem.answer}</span></>
                        )}
                      </p>
                      {!correct && (
                        <p style={{ fontSize: '12px', margin: '6px 0 0', color: 'var(--text-muted)', lineHeight: 1.5, borderTop: '1px solid var(--border)', paddingTop: '6px' }}>
                          {qItem.explanation.length > 120
                            ? qItem.explanation.slice(0, 120) + '…'
                            : qItem.explanation}
                        </p>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Generate another */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={reset}
              style={{
                width: '100%', padding: '16px', borderRadius: '14px', border: 'none',
                background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                color: '#fff', fontSize: '15px', fontWeight: 700, cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                boxShadow: '0 4px 20px #6366f133',
              }}
            >
              <RefreshCw size={16} />
              Generate Another Drill
            </motion.button>
          </motion.div>
        )}

      </AnimatePresence>
    </div>
  )
}
