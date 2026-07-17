'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Calculator, CheckCircle2, XCircle, ArrowRight } from 'lucide-react'

interface Choice {
  label: string
  text: string
}
interface VQuestion {
  id: number
  question_text: string
  difficulty_band: string
  sub_skill: string
  domain: string
  calculator_strategy: string
  type: 'mc' | 'spr'
  choices: Choice[] | null
}
interface AnswerResult {
  is_correct: boolean
  correct_answer: string
  explanation: string
  trap: string | null
}

const bandColor: Record<string, string> = {
  Easy: '#58cc02',
  Medium: '#f97316',
  Hard: '#ff4b4b',
}

export default function VerifiedPracticePage() {
  const [sessionId, setSessionId] = useState<number | null>(null)
  const [questions, setQuestions] = useState<VQuestion[]>([])
  const [idx, setIdx] = useState(0)
  const [loading, setLoading] = useState(true)
  const [selected, setSelected] = useState<Choice | null>(null)
  const [sprValue, setSprValue] = useState('')
  const [result, setResult] = useState<AnswerResult | null>(null)
  const [startedAt, setStartedAt] = useState(Date.now())

  useEffect(() => {
    fetch('/api/sat/verified', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ subSkill: 'Linear equations in one variable' }),
    })
      .then((r) => r.json())
      .then((d: { session_id: number; questions: VQuestion[] }) => {
        setSessionId(d.session_id)
        setQuestions(d.questions ?? [])
        setLoading(false)
        setStartedAt(Date.now())
      })
      .catch(() => setLoading(false))
  }, [])

  const q = questions[idx]

  const submit = async () => {
    if (!q || sessionId == null || result) return
    const answerText = q.type === 'mc' ? selected?.text : sprValue.trim()
    const answerLabel = q.type === 'mc' ? selected?.label : sprValue.trim()
    if (!answerText) return
    const res = await fetch('/api/practice/answer', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        session_id: sessionId,
        question_id: q.id,
        user_answer: answerLabel,
        user_answer_text: answerText,
        time_spent_sec: Math.round((Date.now() - startedAt) / 1000),
      }),
    }).then((r) => r.json())
    setResult(res)
  }

  const next = () => {
    setResult(null)
    setSelected(null)
    setSprValue('')
    setStartedAt(Date.now())
    setIdx((i) => Math.min(i + 1, questions.length - 1))
  }

  if (loading) {
    return (
      <div style={{ padding: 32, color: 'var(--text-muted)', fontFamily: "'DM Sans', sans-serif" }}>
        Loading verified practice…
      </div>
    )
  }
  if (!q) {
    return (
      <div style={{ padding: 32, color: 'var(--text-muted)', fontFamily: "'DM Sans', sans-serif" }}>
        No verified questions found.
      </div>
    )
  }

  const isLast = idx === questions.length - 1

  return (
    <div style={{ padding: 32, maxWidth: 760 }}>
      {/* Header + progress */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
        <span
          style={{
            padding: '3px 10px',
            borderRadius: 999,
            fontSize: 11,
            fontWeight: 700,
            fontFamily: "'Space Grotesk', sans-serif",
            background: 'var(--sat-accent-dim)',
            color: 'var(--sat-accent)',
            border: '1px solid var(--sat-accent-border)',
          }}
        >
          {q.sub_skill}
        </span>
        <span
          style={{
            padding: '3px 10px',
            borderRadius: 999,
            fontSize: 11,
            fontWeight: 700,
            fontFamily: "'Space Grotesk', sans-serif",
            background: `${bandColor[q.difficulty_band] ?? '#888'}22`,
            color: bandColor[q.difficulty_band] ?? '#888',
            border: `1px solid ${bandColor[q.difficulty_band] ?? '#888'}44`,
          }}
        >
          {q.difficulty_band}
        </span>
        <span style={{ marginLeft: 'auto', fontSize: 12, color: 'var(--text-muted)', fontFamily: "'DM Sans', sans-serif" }}>
          {idx + 1} / {questions.length}
        </span>
      </div>

      {/* Question */}
      <motion.p
        key={q.id}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: 18,
          fontWeight: 500,
          lineHeight: 1.5,
          color: 'var(--text-primary)',
          margin: '10px 0 18px',
        }}
      >
        {q.question_text}
      </motion.p>

      {/* Calculator strategy — shown BEFORE the student answers */}
      <div
        style={{
          display: 'flex',
          gap: 10,
          alignItems: 'flex-start',
          padding: '12px 14px',
          borderRadius: 12,
          background: 'rgba(28,176,246,0.08)',
          border: '1px solid rgba(28,176,246,0.25)',
          marginBottom: 20,
        }}
      >
        <Calculator size={17} color="var(--blue)" style={{ flexShrink: 0, marginTop: 2 }} />
        <div>
          <p
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              color: 'var(--blue)',
              margin: '0 0 3px',
            }}
          >
            Calculator strategy
          </p>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, lineHeight: 1.5, color: 'var(--text-secondary)', margin: 0 }}>
            {q.calculator_strategy}
          </p>
        </div>
      </div>

      {/* Choices / SPR input */}
      {q.type === 'mc' && q.choices ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 20 }}>
          {q.choices.map((c) => {
            const chosen = selected?.label === c.label
            const showCorrect = result && result.correct_answer === c.text
            const showWrongPick = result && chosen && !result.is_correct
            const borderCol = showCorrect
              ? 'var(--green)'
              : showWrongPick
                ? 'var(--red)'
                : chosen
                  ? 'var(--sat-accent)'
                  : 'var(--border)'
            return (
              <button
                key={c.label}
                disabled={!!result}
                onClick={() => setSelected(c)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12,
                  padding: '13px 16px',
                  borderRadius: 12,
                  textAlign: 'left',
                  cursor: result ? 'default' : 'pointer',
                  background: chosen && !result ? 'var(--sat-accent-dim)' : 'var(--bg-card)',
                  border: `2px solid ${borderCol}`,
                  transition: 'border-color 0.15s ease, background 0.15s ease',
                }}
              >
                <span
                  style={{
                    width: 26,
                    height: 26,
                    borderRadius: '50%',
                    flexShrink: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: 12,
                    fontWeight: 700,
                    background: chosen && !result ? 'var(--sat-accent)' : 'var(--bg-elevated)',
                    color: chosen && !result ? '#fff' : 'var(--text-muted)',
                  }}
                >
                  {c.label}
                </span>
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, color: 'var(--text-primary)' }}>
                  {c.text}
                </span>
              </button>
            )
          })}
        </div>
      ) : (
        <input
          value={sprValue}
          disabled={!!result}
          onChange={(e) => setSprValue(e.target.value)}
          placeholder="Type your answer"
          style={{
            width: '100%',
            padding: '13px 16px',
            borderRadius: 12,
            marginBottom: 20,
            background: 'var(--bg-card)',
            border: '2px solid var(--border)',
            color: 'var(--text-primary)',
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 16,
          }}
        />
      )}

      {/* Submit / Next */}
      {!result ? (
        <button
          onClick={submit}
          disabled={q.type === 'mc' ? !selected : !sprValue.trim()}
          style={{
            padding: '11px 24px',
            borderRadius: 10,
            border: 'none',
            background: (q.type === 'mc' ? selected : sprValue.trim()) ? 'var(--sat-accent)' : 'var(--bg-elevated)',
            color: (q.type === 'mc' ? selected : sprValue.trim()) ? '#fff' : 'var(--text-muted)',
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 600,
            fontSize: 14,
            cursor: (q.type === 'mc' ? selected : sprValue.trim()) ? 'pointer' : 'default',
          }}
        >
          Check answer
        </button>
      ) : (
        <div>
          {/* Correct / incorrect banner */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
            {result.is_correct ? (
              <>
                <CheckCircle2 size={20} color="var(--green)" />
                <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, color: 'var(--green)' }}>Correct</span>
              </>
            ) : (
              <>
                <XCircle size={20} color="var(--red)" />
                <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, color: 'var(--red)' }}>
                  Not quite — correct answer: {result.correct_answer}
                </span>
              </>
            )}
          </div>

          {/* Trap callout — distinct amber panel, only when the student fell for a named trap */}
          {result.trap && (
            <div
              style={{
                display: 'flex',
                gap: 10,
                alignItems: 'flex-start',
                padding: '12px 14px',
                borderRadius: 12,
                background: 'rgba(245,158,11,0.10)',
                border: '1px solid rgba(245,158,11,0.30)',
                marginBottom: 14,
              }}
            >
              <span style={{ fontSize: 14, lineHeight: '20px', flexShrink: 0 }} aria-hidden>⚠️</span>
              <div>
                <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: '0.04em', textTransform: 'uppercase', color: '#f59e0b', margin: '0 0 3px' }}>
                  The trap you fell for
                </p>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, lineHeight: 1.5, color: 'var(--text-secondary)', margin: 0 }}>
                  {result.trap}
                </p>
              </div>
            </div>
          )}

          {/* Step-by-step explanation — neutral panel, visually separate from the trap */}
          <div
            style={{
              padding: '14px 16px',
              borderRadius: 12,
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
              marginBottom: 18,
            }}
          >
            <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: '0.04em', textTransform: 'uppercase', color: 'var(--text-muted)', margin: '0 0 6px' }}>
              Step-by-step solution
            </p>
            {result.explanation.split('\n').map((line, i) => (
              <p key={i} style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, lineHeight: 1.6, color: 'var(--text-secondary)', margin: '0 0 4px' }}>
                {line}
              </p>
            ))}
          </div>

          {!isLast && (
            <button
              onClick={next}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
                padding: '11px 24px',
                borderRadius: 10,
                border: 'none',
                background: 'var(--sat-accent)',
                color: '#fff',
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 600,
                fontSize: 14,
                cursor: 'pointer',
              }}
            >
              Next question <ArrowRight size={16} />
            </button>
          )}
        </div>
      )}
    </div>
  )
}
