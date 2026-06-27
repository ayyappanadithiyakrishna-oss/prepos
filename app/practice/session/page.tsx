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

function DifficultyDots({ level }: { level: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <div
          key={i}
          className="w-2 h-2 rounded-full"
          style={{ background: i < level ? 'var(--green)' : 'var(--border)' }}
        />
      ))}
    </div>
  )
}

const LETTER_MAP = ['A', 'B', 'C', 'D'] as const
type OptionLetter = (typeof LETTER_MAP)[number]

function getButtonState(
  letter: OptionLetter,
  isAnswered: boolean,
  selectedLetter: string | null,
  correctLetter: string
): AnswerState {
  if (!isAnswered) return 'idle'
  if (letter === correctLetter) return 'correct'
  if (letter === selectedLetter) return 'wrong'
  return 'disabled'
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

  // Gamification state
  const [combo, setCombo] = useState(0)
  const [xp, setXp] = useState(0)
  const [xpFlash, setXpFlash] = useState<{ amount: number; id: number } | null>(null)
  const xpFlashId = useRef(0)

  const startTimeRef = useRef<number>(Date.now())
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  // Load questions
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

  // Per-question timer
  useEffect(() => {
    if (phase !== 'question') return
    setTimer(0)
    timerRef.current = setInterval(() => setTimer((t) => t + 1), 1000)
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [phase, currentIndex])

  // Confetti on complete
  useEffect(() => {
    if (phase !== 'complete') return
    const correct = results.filter((r) => r.is_correct).length
    const accuracy = results.length > 0 ? Math.round((correct / results.length) * 100) : 0
    if (accuracy >= 60) {
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#58cc02', '#1cb0f6', '#ffd700', '#ff4b4b', '#8b5cf6'],
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase])

  const handleAnswer = useCallback(
    async (letter: OptionLetter) => {
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
            time_spent_sec: timeSpent,
          }),
        })
        const data = (await res.json()) as {
          is_correct: boolean
          correct_answer: string
          explanation: string
        }

        setIsCorrect(data.is_correct)
        setCorrectAnswer(data.correct_answer)
        setExplanation(data.explanation)
        setResults((prev) => [...prev, { question_id: question.id, is_correct: data.is_correct }])

        if (data.is_correct) {
          const newCombo = combo + 1
          setCombo(newCombo)
          const earned = xpForCorrect(newCombo)
          setXp((prev) => prev + earned)
          xpFlashId.current += 1
          setXpFlash({ amount: earned, id: xpFlashId.current })
          setTimeout(() => setXpFlash(null), 1100)
        } else {
          setCombo(0)
        }

        setPhase('feedback')
      } catch {
        setIsCorrect(false)
        setCombo(0)
        setPhase('feedback')
      }
    },
    [isAnswered, questions, currentIndex, sessionId, combo]
  )

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
        } catch {
          // ignore
        }
      }
      try {
        const res = await fetch('/api/dashboard')
        const d = (await res.json()) as { streak?: number }
        setStreak(d.streak ?? 0)
      } catch {
        // ignore
      }
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

  // ── Loading ──────────────────────────────────────────────────────────────
  if (phase === 'loading') {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="flex flex-col items-center gap-3">
          <div
            className="w-8 h-8 rounded-full border-2 animate-spin"
            style={{ borderColor: 'var(--green)', borderTopColor: 'transparent' }}
          />
          <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
            Loading questions…
          </p>
        </div>
      </div>
    )
  }

  // ── Complete ─────────────────────────────────────────────────────────────
  if (phase === 'complete') {
    const correct = results.filter((r) => r.is_correct).length
    const total = results.length
    const accuracy = total > 0 ? Math.round((correct / total) * 100) : 0

    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center min-h-screen gap-8 text-center px-8"
      >
        <motion.div
          animate={{ rotate: [0, -10, 10, -5, 5, 0] }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <Trophy size={80} color="var(--gold)" />
        </motion.div>

        <div>
          <h1 className="text-4xl font-black" style={{ color: 'var(--text-primary)' }}>
            Session Complete!
          </h1>
          <p className="text-lg mt-2" style={{ color: 'var(--text-muted)' }}>
            Here&apos;s how you did
          </p>
        </div>

        {/* Score cards */}
        <div className="grid grid-cols-3 gap-4 w-full max-w-lg">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="rounded-2xl p-5 text-center"
            style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}
          >
            <p className="text-3xl font-black" style={{ color: 'var(--green)' }}>
              {correct}/{total}
            </p>
            <p className="text-xs mt-1" style={{ color: 'var(--text-muted)' }}>
              Score
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="rounded-2xl p-5 text-center"
            style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}
          >
            <p className="text-3xl font-black" style={{ color: 'var(--blue)' }}>
              {accuracy}%
            </p>
            <p className="text-xs mt-1" style={{ color: 'var(--text-muted)' }}>
              Accuracy
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="rounded-2xl p-5 text-center"
            style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}
          >
            <p className="text-3xl font-black" style={{ color: 'var(--gold)' }}>
              {xp}
            </p>
            <p className="text-xs mt-1" style={{ color: 'var(--text-muted)' }}>
              XP Earned
            </p>
          </motion.div>
        </div>

        {/* Streak pill */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.7, type: 'spring' }}
          className="flex items-center gap-2 px-6 py-3 rounded-full"
          style={{ background: 'rgba(249,115,22,0.15)', border: '1px solid #f97316' }}
        >
          <Flame size={20} color="#f97316" />
          <span className="font-bold" style={{ color: '#f97316' }}>
            {streak} day streak
          </span>
        </motion.div>

        {/* Action buttons */}
        <div className="flex gap-3">
          <button
            onClick={() => router.push('/')}
            className="px-6 py-3 rounded-xl font-bold cursor-pointer transition-all duration-200"
            style={{ background: 'var(--green)', color: 'var(--bg-base)' }}
          >
            Back to Dashboard
          </button>
          <button
            onClick={() => router.push('/errors')}
            className="px-6 py-3 rounded-xl font-semibold cursor-pointer transition-all duration-200"
            style={{
              background: 'var(--bg-elevated)',
              color: 'var(--text-secondary)',
              border: '1px solid var(--border)',
            }}
          >
            Review Mistakes
          </button>
        </div>
      </motion.div>
    )
  }

  // ── Question / Feedback ──────────────────────────────────────────────────
  const question = questions[currentIndex]
  const correctLetter = (correctAnswer || question.answer_text) as OptionLetter

  return (
    <div className="flex flex-col min-h-screen" style={{ background: 'var(--bg-base)' }}>
      {/* XP burst overlay */}
      <AnimatePresence>
        {xpFlash && (
          <motion.div
            key={xpFlash.id}
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 0, y: -60 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="fixed pointer-events-none font-bold text-2xl z-50"
            style={{ color: 'var(--green)', right: 120, top: '40%' }}
          >
            +{xpFlash.amount} XP
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header bar */}
      <div
        className="fixed top-0 left-0 right-0 z-40 px-6 py-3 flex items-center gap-4"
        style={{ background: 'var(--bg-surface)', borderBottom: '1px solid var(--border)' }}
      >
        <span className="text-sm font-bold" style={{ color: 'var(--green)' }}>
          PrepOS
        </span>

        {question && (
          <span
            className="text-xs px-2 py-1 rounded-full font-medium"
            style={{
              background:
                question.subject === 'ap_precalc'
                  ? 'rgba(28,176,246,0.15)'
                  : 'rgba(88,204,2,0.15)',
              color: question.subject === 'ap_precalc' ? 'var(--blue)' : 'var(--green)',
              border: `1px solid ${question.subject === 'ap_precalc' ? 'var(--blue)' : 'var(--green)'}33`,
            }}
          >
            {question.topic_name}
          </span>
        )}

        {/* Progress bar */}
        <div className="flex-1 mx-4">
          <div className="w-full h-2 rounded-full" style={{ background: 'var(--border)' }}>
            <div
              className="h-2 rounded-full transition-all duration-500"
              style={{
                background: 'var(--green)',
                width: `${questions.length > 0 ? ((currentIndex + (isAnswered ? 1 : 0)) / questions.length) * 100 : 0}%`,
              }}
            />
          </div>
        </div>

        <div className="flex items-center gap-4 text-xs">
          {/* Color-coded timer */}
          <motion.span
            animate={timer >= 60 ? { opacity: [1, 0.5, 1] } : { opacity: 1 }}
            transition={timer >= 60 ? { repeat: Infinity, duration: 0.8 } : {}}
            style={{ color: timerColor(timer), fontWeight: 600 }}
          >
            ⏱ {formatTime(timer)}
          </motion.span>
          <span style={{ color: 'var(--text-secondary)' }}>
            {currentIndex + 1} / {questions.length}
          </span>
          {/* Session XP */}
          <span className="font-bold" style={{ color: 'var(--gold)' }}>
            {xp} XP
          </span>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 pt-20 pb-8">
        <div className="w-full max-w-2xl">
          {/* Combo badge row */}
          <div className="flex justify-center mb-4 h-9">
            <AnimatePresence>
              {combo >= 2 && (
                <motion.div
                  key={combo}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 1.5, opacity: 0 }}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-bold"
                  style={{
                    background: combo >= 5 ? 'var(--red)' : 'var(--gold)',
                    color: '#0a0a0f',
                  }}
                >
                  <Flame size={14} />
                  {combo}x COMBO{combo >= 5 ? ' 🔥 ON FIRE!' : ''}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
            >
              {question && (
                <>
                  {/* Subject + difficulty */}
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className="text-xs font-medium uppercase tracking-wider"
                      style={{ color: 'var(--text-muted)' }}
                    >
                      {question.subject === 'ap_precalc' ? 'AP Precalculus' : 'SAT Math'}
                      {question.source === 'review' && (
                        <span className="ml-2 text-purple-400">· Review</span>
                      )}
                    </span>
                    <DifficultyDots level={question.difficulty} />
                  </div>

                  <p className="text-xs mb-5" style={{ color: 'var(--text-muted)' }}>
                    Question {currentIndex + 1} of {questions.length}
                  </p>

                  {/* Question card */}
                  <div
                    className="rounded-2xl p-6 mb-6"
                    style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}
                  >
                    <p
                      className="text-lg leading-relaxed font-medium"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      {question.question_text}
                    </p>
                  </div>

                  {/* Kahoot-style answer buttons */}
                  <div className="flex flex-col gap-3 mb-6">
                    {question.choices.map((choice, idx) => {
                      const letter = LETTER_MAP[idx]
                      if (!letter) return null
                      const btnState = getButtonState(
                        letter,
                        isAnswered,
                        selectedLetter,
                        correctLetter
                      )
                      return (
                        <AnswerButton
                          key={choice}
                          letter={letter}
                          text={choice}
                          state={btnState}
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
                          background: isCorrect
                            ? 'rgba(88,204,2,0.08)'
                            : 'rgba(255,75,75,0.08)',
                          border: `1px solid ${isCorrect ? 'var(--green)' : 'var(--red)'}33`,
                        }}
                      >
                        <p
                          className="font-bold mb-2"
                          style={{ color: isCorrect ? 'var(--green)' : 'var(--red)' }}
                        >
                          {isCorrect
                            ? '✓ Correct!'
                            : `✗ Incorrect — Correct answer: ${correctLetter}`}
                        </p>
                        {explanation && (
                          <p className="text-sm mb-4" style={{ color: 'var(--text-secondary)' }}>
                            {explanation}
                          </p>
                        )}
                        <button
                          onClick={handleContinue}
                          className="px-6 py-2 rounded-xl text-sm font-bold cursor-pointer transition-all duration-200"
                          style={{ background: 'var(--green)', color: 'var(--bg-base)' }}
                        >
                          {currentIndex + 1 < questions.length
                            ? 'Continue →'
                            : 'Finish Session →'}
                        </button>
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
    <Suspense
      fallback={
        <div className="flex items-center justify-center min-h-screen">
          <div
            className="w-8 h-8 rounded-full border-2 animate-spin"
            style={{ borderColor: 'var(--green)', borderTopColor: 'transparent' }}
          />
        </div>
      }
    >
      <SessionContent />
    </Suspense>
  )
}
