'use client'

import { useEffect, useState, useRef, useCallback } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Suspense } from 'react'
import { Flame, Trophy } from 'lucide-react'
import confetti from 'canvas-confetti'
import AnswerButton from '@/components/practice/AnswerButton'
import { xpForCorrect } from '@/lib/xp'

interface Question {
  id: number
  subject: string
  topic_id: number
  topic_name: string
  question_text: string
  answer_text: string
  choices: string[]
  difficulty: number
  explanation: string
  source: 'new' | 'review'
}

interface Result {
  question_id: number
  is_correct: boolean
}

interface XPParticle {
  id: number
  amount: number
  x: number
  rot: number
}

type Phase = 'loading' | 'question' | 'feedback' | 'complete'
type AnswerState = 'idle' | 'correct' | 'wrong' | 'reveal' | 'disabled'

function formatTime(seconds: number): string {
  const m = Math.floor(seconds / 60)
  const s = seconds % 60
  return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`
}

function timerColor(elapsed: number): string {
  if (elapsed >= 60) return '#e83b3b'
  if (elapsed >= 30) return '#f5a623'
  return '#58cc02'
}

function DifficultyBadge({ level }: { level: number }) {
  const label = level <= 2 ? 'Easy' : level === 3 ? 'Medium' : 'Hard'
  const color = level <= 2 ? 'var(--green)' : level === 3 ? 'var(--blue)' : 'var(--purple)'
  const colorRaw = level <= 2 ? '#58cc02' : level === 3 ? '#1cb0f6' : '#8b5cf6'
  return (
    <span style={{
      padding: '3px 10px', borderRadius: 999, fontSize: 11, fontWeight: 700,
      fontFamily: 'var(--font-body)', color,
      background: `${colorRaw}18`, border: `1px solid ${colorRaw}35`,
    }}>
      {label}
    </span>
  )
}

const LETTER_MAP = ['A', 'B', 'C', 'D'] as const
type OptionLetter = (typeof LETTER_MAP)[number]

function getButtonState(
  letter: OptionLetter,
  isAnswered: boolean,
  selectedLetter: string | null,
  correctLetter: string,
): AnswerState {
  if (!isAnswered) return 'idle'
  if (letter === correctLetter) return 'correct'
  if (letter === selectedLetter) return 'wrong'
  return 'disabled'
}

function comboStyle(combo: number): { bg: string; border: string; color: string; size: string } {
  if (combo >= 8) return { bg: 'rgba(255,75,75,0.18)', border: 'rgba(255,75,75,0.5)', color: 'var(--red)', size: '18px' }
  if (combo >= 5) return { bg: 'rgba(249,115,22,0.15)', border: 'rgba(249,115,22,0.45)', color: 'var(--orange)', size: '16px' }
  return { bg: 'rgba(255,215,0,0.12)', border: 'rgba(255,215,0,0.4)', color: 'var(--gold)', size: '15px' }
}

function SessionContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const mode = searchParams.get('mode')

  const [questions, setQuestions] = useState<Question[]>([])
  const [sessionId, setSessionId] = useState<number>(0)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedLetter, setSelectedLetter] = useState<string | null>(null)
  const [isAnswered, setIsAnswered] = useState(false)
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null)
  const [correctAnswer, setCorrectAnswer] = useState<string>('')
  const [explanation, setExplanation] = useState<string>('')
  const [results, setResults] = useState<Result[]>([])
  const [phase, setPhase] = useState<Phase>('loading')
  const [timer, setTimer] = useState(0)
  const [streak, setStreak] = useState(0)
  const [combo, setCombo] = useState(0)
  const [xp, setXp] = useState(0)
  const [xpParticles, setXpParticles] = useState<XPParticle[]>([])
  const [flashState, setFlashState] = useState<'correct' | 'wrong' | null>(null)
  const particleIdRef = useRef(0)
  const startTimeRef = useRef<number>(Date.now())
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    const endpoint = mode === 'review' ? '/api/review' : '/api/practice/today'
    fetch(endpoint)
      .then((r) => r.json())
      .then((data: { questions?: Question[]; session_id?: number }) => {
        if (data.questions && data.questions.length > 0) {
          setQuestions(data.questions)
          setSessionId(data.session_id ?? 0)
          setPhase('question')
          startTimeRef.current = Date.now()
        } else {
          setPhase('complete')
        }
      })
      .catch(() => setPhase('complete'))
  }, [mode])

  useEffect(() => {
    if (phase !== 'question') return
    setTimer(0)
    timerRef.current = setInterval(() => setTimer((t) => t + 1), 1000)
    return () => { if (timerRef.current) clearInterval(timerRef.current) }
  }, [phase, currentIndex])

  // Keyboard: Space/Enter to continue
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (phase === 'feedback' && (e.code === 'Space' || e.code === 'Enter')) {
        e.preventDefault()
        handleContinue()
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase, currentIndex, questions.length, sessionId])

  useEffect(() => {
    if (phase !== 'complete') return
    const correct = results.filter((r) => r.is_correct).length
    const accuracy = results.length > 0 ? Math.round((correct / results.length) * 100) : 0
    if (accuracy >= 60) {
      confetti({
        particleCount: 160,
        spread: 90,
        origin: { y: 0.55 },
        colors: ['#58cc02', '#1cb0f6', '#ffd700', '#ff4b4b', '#8b5cf6'],
      })
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase])

  const spawnXPParticles = useCallback((amount: number) => {
    const count = combo >= 5 ? 5 : combo >= 3 ? 4 : 3
    const newParticles: XPParticle[] = Array.from({ length: count }, (_, i) => ({
      id: ++particleIdRef.current,
      amount: i === 0 ? amount : Math.round(amount * (0.3 + Math.random() * 0.4)),
      x: 80 + Math.random() * 160 - 80,
      rot: -15 + Math.random() * 30,
    }))
    setXpParticles((prev) => [...prev, ...newParticles])
    setTimeout(() => {
      setXpParticles((prev) => prev.filter((p) => !newParticles.find((n) => n.id === p.id)))
    }, 1500)
  }, [combo])

  const handleAnswer = useCallback(async (letter: OptionLetter) => {
    if (isAnswered) return
    setSelectedLetter(letter)
    setIsAnswered(true)

    const timeSpent = Math.round((Date.now() - startTimeRef.current) / 1000)
    const question = questions[currentIndex]

    try {
      const res = await fetch('/api/practice/answer', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          session_id: sessionId,
          question_id: question.id,
          user_answer: letter,
          user_answer_text: question.choices[LETTER_MAP.indexOf(letter)] ?? '',
          time_spent_sec: timeSpent,
        }),
      })
      const data = (await res.json()) as { is_correct: boolean; correct_answer: string; explanation: string }

      setIsCorrect(data.is_correct)
      const correctIdx = question.choices.indexOf(data.correct_answer)
      const newCorrectLetter = correctIdx >= 0 ? LETTER_MAP[correctIdx] : 'A'
      setCorrectAnswer(newCorrectLetter ?? 'A')
      setExplanation(data.explanation)
      setResults((prev) => [...prev, { question_id: question.id, is_correct: data.is_correct }])

      if (data.is_correct) {
        const newCombo = combo + 1
        setCombo(newCombo)
        const earned = xpForCorrect(newCombo)
        setXp((prev) => prev + earned)
        setFlashState('correct')
        spawnXPParticles(earned)
        // Extra confetti burst on high combo
        if (newCombo % 5 === 0 && newCombo > 0) {
          confetti({ particleCount: 60, spread: 60, origin: { y: 0.5 }, colors: ['#ffd700', '#f97316'] })
        }
      } else {
        setCombo(0)
        setFlashState('wrong')
      }
      setTimeout(() => setFlashState(null), 750)
      setPhase('feedback')
    } catch {
      setIsCorrect(false)
      setCombo(0)
      setPhase('feedback')
    }
  }, [isAnswered, questions, currentIndex, sessionId, combo, spawnXPParticles])

  const handleContinue = useCallback(async () => {
    const next = currentIndex + 1
    if (next >= questions.length) {
      if (sessionId) {
        try {
          await fetch('/api/practice/session', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ session_id: sessionId }),
          })
        } catch { /* ignore */ }
      }
      try {
        const res = await fetch('/api/dashboard')
        const d = (await res.json()) as { streak?: number }
        setStreak(d.streak ?? 0)
      } catch { /* ignore */ }
      setPhase('complete')
      return
    }
    setPhase('question')
    setCurrentIndex(next)
    setSelectedLetter(null)
    setIsAnswered(false)
    setIsCorrect(null)
    setCorrectAnswer('')
    setExplanation('')
    startTimeRef.current = Date.now()
  }, [currentIndex, questions.length, sessionId])

  if (phase === 'loading') {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="flex flex-col items-center gap-3">
          <div className="w-8 h-8 rounded-full border-2 animate-spin"
            style={{ borderColor: 'var(--green)', borderTopColor: 'transparent' }} />
          <p className="text-sm" style={{ color: 'var(--text-muted)' }}>Loading questions…</p>
        </div>
      </div>
    )
  }

  if (phase === 'complete') {
    const correct = results.filter((r) => r.is_correct).length
    const total = results.length
    const accuracy = total > 0 ? Math.round((correct / total) * 100) : 0

    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center min-h-screen gap-8 text-center px-8"
      >
        <motion.div
          animate={{ rotate: [0, -10, 10, -5, 5, 0] }}
          transition={{ delay: 0.3, duration: 0.7 }}
          style={{ filter: 'drop-shadow(0 0 24px rgba(255,215,0,0.5))' }}
        >
          <Trophy size={80} color="var(--gold)" />
        </motion.div>

        <div>
          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '36px', fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '-0.02em' }}>
            Session Complete
          </h1>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '15px', color: 'var(--text-muted)', marginTop: '6px' }}>
            Here&apos;s how you did
          </p>
        </div>

        <div className="grid grid-cols-3 gap-4 w-full max-w-lg">
          {[
            { value: `${correct}/${total}`, label: 'Score', color: 'var(--green)' },
            { value: `${accuracy}%`, label: 'Accuracy', color: 'var(--blue)' },
            { value: `${xp}`, label: 'XP Earned', color: 'var(--gold)' },
          ].map(({ value, label, color }, i) => (
            <motion.div
              key={label}
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.35 + i * 0.1 }}
              className="rounded-2xl p-5 text-center"
              style={{ background: 'var(--bg-card)', border: `1px solid ${color}30` }}
            >
              <p style={{ fontFamily: 'var(--font-heading)', fontSize: '32px', fontWeight: 800, color, lineHeight: 1, letterSpacing: '-0.02em' }}>
                {value}
              </p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '12px', color: 'var(--text-muted)', marginTop: '6px' }}>
                {label}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.7, type: 'spring', stiffness: 300 }}
          className="flex items-center gap-2 px-6 py-3 rounded-full"
          style={{ background: 'rgba(249,115,22,0.14)', border: '1px solid rgba(249,115,22,0.4)' }}
        >
          <Flame size={18} color="#f97316" className="animate-streak-fire" />
          <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, color: '#f97316' }}>
            {streak} day streak
          </span>
        </motion.div>

        <div className="flex gap-3">
          <button
            onClick={() => router.push('/')}
            className="px-6 py-3 rounded-xl font-bold cursor-pointer transition-all duration-200"
            style={{ background: 'var(--green)', color: 'var(--bg-base)', fontFamily: 'var(--font-heading)' }}
          >
            Dashboard
          </button>
          <button
            onClick={() => router.push('/errors')}
            className="px-6 py-3 rounded-xl font-semibold cursor-pointer transition-all duration-200"
            style={{ background: 'var(--bg-elevated)', color: 'var(--text-secondary)', border: '1px solid var(--border)', fontFamily: 'var(--font-body)' }}
          >
            Review Mistakes
          </button>
        </div>
      </motion.div>
    )
  }

  const question = questions[currentIndex]
  const correctLetter = (correctAnswer || question.answer_text) as OptionLetter
  const cs = comboStyle(combo)

  return (
    <div className="flex flex-col min-h-screen" style={{ background: 'var(--bg-base)' }}>
      {/* Screen flash overlay */}
      <AnimatePresence>
        {flashState && (
          <motion.div
            key={flashState}
            className={flashState === 'correct' ? 'screen-flash-correct' : 'screen-flash-wrong'}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.12 }}
          />
        )}
      </AnimatePresence>

      {/* XP particles */}
      <AnimatePresence>
        {xpParticles.map((p) => (
          <motion.div
            key={p.id}
            className="animate-xp-rise"
            initial={{ opacity: 1, y: 0, x: p.x, rotate: p.rot }}
            animate={{ opacity: 0, y: -110, x: p.x + (Math.random() * 30 - 15) }}
            transition={{ duration: 1.3, ease: 'easeOut' }}
            style={{
              position: 'fixed',
              right: '10%',
              top: '38%',
              pointerEvents: 'none',
              zIndex: 60,
              fontFamily: 'var(--font-heading)',
              fontSize: p.id % 3 === 0 ? '22px' : '17px',
              fontWeight: 800,
              color: 'var(--green)',
              textShadow: '0 0 12px rgba(88,204,2,0.6)',
            }}
          >
            +{p.amount} XP
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Header bar */}
      <div
        className="fixed top-0 left-0 right-0 z-40 px-6 py-3 flex items-center gap-4"
        style={{ background: 'var(--bg-surface)', borderBottom: '1px solid var(--border)' }}
      >
        <span style={{ fontFamily: 'var(--font-heading)', fontSize: '14px', fontWeight: 700, color: 'var(--green)' }}>
          PrepOS
        </span>

        {question && (
          <span className="text-xs px-2 py-1 rounded-full font-medium" style={{
            fontFamily: 'var(--font-body)',
            background: question.subject === 'ap_precalc' ? 'rgba(28,176,246,0.15)' : 'rgba(88,204,2,0.15)',
            color: question.subject === 'ap_precalc' ? 'var(--blue)' : 'var(--green)',
            border: `1px solid ${question.subject === 'ap_precalc' ? 'var(--blue)' : 'var(--green)'}33`,
          }}>
            {question.topic_name}
          </span>
        )}

        <div className="flex-1 mx-4">
          <div className="w-full rounded-full" style={{ background: 'var(--border)', height: 5 }}>
            <motion.div
              className="rounded-full"
              style={{ background: 'var(--green)', height: 5, boxShadow: '0 0 8px rgba(88,204,2,0.4)' }}
              animate={{ width: `${questions.length > 0 ? ((currentIndex + (isAnswered ? 1 : 0)) / questions.length) * 100 : 0}%` }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            />
          </div>
        </div>

        <div className="flex items-center gap-4 text-xs">
          <motion.span
            animate={timer >= 60 ? { opacity: [1, 0.4, 1] } : { opacity: 1 }}
            transition={timer >= 60 ? { repeat: Infinity, duration: 0.7 } : {}}
            style={{ color: timerColor(timer), fontWeight: 600, fontFamily: 'var(--font-heading)' }}
          >
            {formatTime(timer)}
          </motion.span>
          <span style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-body)' }}>
            {currentIndex + 1} / {questions.length}
          </span>
          <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, color: 'var(--gold)' }}>
            {xp} XP
          </span>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 pt-20 pb-8">
        <div className="w-full max-w-2xl">
          {/* Combo badge */}
          <div className="flex justify-center mb-4 h-10">
            <AnimatePresence mode="wait">
              {combo >= 2 && (
                <motion.div
                  key={combo}
                  className="animate-combo-burst flex items-center gap-2 px-4 py-2 rounded-full font-bold"
                  style={{
                    background: cs.bg,
                    border: `1.5px solid ${cs.border}`,
                    color: cs.color,
                    fontSize: cs.size,
                    fontFamily: 'var(--font-heading)',
                    boxShadow: `0 0 20px ${cs.bg}`,
                    letterSpacing: '0.02em',
                  }}
                  exit={{ scale: 1.4, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Flame size={combo >= 8 ? 18 : 15} color={cs.color} />
                  {combo}x COMBO{combo >= 8 ? ' — ON FIRE' : combo >= 5 ? ' — BLAZING' : ''}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.22 }}
            >
              {question && (
                <>
                  <div className="flex items-center justify-between mb-3">
                    <span style={{ fontFamily: 'var(--font-body)', fontSize: '11px', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                      {question.subject === 'ap_precalc' ? 'AP Precalculus' : 'SAT Math'}
                      {question.source === 'review' && (
                        <span style={{ color: 'var(--purple)', marginLeft: '8px' }}>· Review</span>
                      )}
                    </span>
                    <DifficultyBadge level={question.difficulty} />
                  </div>

                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '12px', color: 'var(--text-muted)', marginBottom: '16px' }}>
                    Question {currentIndex + 1} of {questions.length}
                  </p>

                  {/* Question card */}
                  <div
                    className="rounded-2xl p-6 mb-6"
                    style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}
                  >
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: '18px', lineHeight: 1.65, fontWeight: 500, color: 'var(--text-primary)' }}>
                      {question.question_text}
                    </p>
                  </div>

                  {/* Answer buttons */}
                  <div className="flex flex-col gap-3 mb-6">
                    {question.choices.map((choice, idx) => {
                      const letter = LETTER_MAP[idx]
                      if (!letter) return null
                      return (
                        <AnswerButton
                          key={choice}
                          letter={letter}
                          text={choice}
                          state={getButtonState(letter, isAnswered, selectedLetter, correctLetter)}
                          onClick={() => handleAnswer(letter)}
                          disabled={isAnswered}
                        />
                      )
                    })}
                  </div>

                  {/* Feedback bar */}
                  <AnimatePresence>
                    {phase === 'feedback' && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.2 }}
                        className="rounded-2xl p-5"
                        style={{
                          background: isCorrect ? 'rgba(88,204,2,0.08)' : 'rgba(255,75,75,0.08)',
                          border: `1px solid ${isCorrect ? 'rgba(88,204,2,0.3)' : 'rgba(255,75,75,0.3)'}`,
                        }}
                      >
                        <p style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, marginBottom: '8px', fontSize: '16px', color: isCorrect ? 'var(--green)' : 'var(--red)' }}>
                          {isCorrect ? '✓ Correct!' : `✗ Incorrect — Answer: ${correctLetter}`}
                        </p>
                        {explanation && (
                          <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', marginBottom: '16px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                            {explanation}
                          </p>
                        )}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                          <button
                            onClick={handleContinue}
                            className="px-6 py-2.5 rounded-xl text-sm font-bold cursor-pointer transition-all duration-200"
                            style={{
                              background: isCorrect ? 'var(--green)' : 'var(--bg-elevated)',
                              color: isCorrect ? 'var(--bg-base)' : 'var(--text-primary)',
                              border: isCorrect ? 'none' : '1px solid var(--border)',
                              fontFamily: 'var(--font-heading)',
                            }}
                          >
                            {currentIndex + 1 < questions.length ? 'Continue →' : 'Finish →'}
                          </button>
                          <span style={{ fontFamily: 'var(--font-body)', fontSize: '11px', color: 'var(--text-muted)' }}>
                            or press Space
                          </span>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}

export default function SessionPage() {
  return (
    <Suspense fallback={
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-8 h-8 rounded-full border-2 animate-spin"
          style={{ borderColor: 'var(--green)', borderTopColor: 'transparent' }} />
      </div>
    }>
      <SessionContent />
    </Suspense>
  )
}
