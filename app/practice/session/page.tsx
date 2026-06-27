'use client'

import { useEffect, useState, useRef, useCallback } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Suspense } from 'react'

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

function formatTime(seconds: number): string {
  const m = Math.floor(seconds / 60)
  const s = seconds % 60
  return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`
}

function DifficultyDots({ level }: { level: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <div
          key={i}
          className="w-2 h-2 rounded-full"
          style={{
            background: i < level ? 'var(--green)' : 'var(--border)',
          }}
        />
      ))}
    </div>
  )
}

function SessionContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const mode = searchParams.get('mode')

  const [questions, setQuestions] = useState<Question[]>([])
  const [sessionId, setSessionId] = useState<number>(0)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [isAnswered, setIsAnswered] = useState(false)
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null)
  const [correctAnswer, setCorrectAnswer] = useState<string>('')
  const [explanation, setExplanation] = useState<string>('')
  const [results, setResults] = useState<Result[]>([])
  const [phase, setPhase] = useState<Phase>('loading')
  const [timer, setTimer] = useState(0)
  const [shakeAnswer, setShakeAnswer] = useState<string | null>(null)
  const [streak, setStreak] = useState(0)
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

  const handleAnswer = useCallback(
    async (choice: string) => {
      if (isAnswered) return
      setSelectedAnswer(choice)
      setIsAnswered(true)

      const timeSpent = Math.round((Date.now() - startTimeRef.current) / 1000)
      const question = questions[currentIndex]
      // The answer is the letter prefix e.g. "A"
      const letter = choice.charAt(0)

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

        if (!data.is_correct) {
          setShakeAnswer(choice)
          setTimeout(() => setShakeAnswer(null), 500)
        }

        setPhase('feedback')
      } catch {
        setIsCorrect(false)
        setPhase('feedback')
      }
    },
    [isAnswered, questions, currentIndex, sessionId]
  )

  const handleContinue = useCallback(async () => {
    const next = currentIndex + 1

    if (next >= questions.length) {
      // Complete session
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
      // Fetch streak count
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
    setSelectedAnswer(null)
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

  if (phase === 'complete') {
    const correctCount = results.filter((r) => r.is_correct).length
    const accuracy = results.length > 0 ? Math.round((correctCount / results.length) * 100) : 0
    const xp = correctCount * 10
    const circumference = 2 * Math.PI * 40

    return (
      <div className="flex items-center justify-center min-h-screen px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="w-full max-w-md rounded-3xl p-8 text-center"
          style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}
        >
          <div className="text-5xl mb-4">🎉</div>
          <h1 className="text-2xl font-black mb-1" style={{ color: 'var(--text-primary)' }}>
            Session Complete!
          </h1>
          <p className="text-sm mb-8" style={{ color: 'var(--text-muted)' }}>
            Great work — keep the streak alive
          </p>

          {/* Circular progress */}
          <div className="flex justify-center mb-8">
            <div className="relative w-28 h-28">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 96 96">
                <circle cx="48" cy="48" r="40" fill="none" stroke="var(--border)" strokeWidth="8" />
                <circle
                  cx="48"
                  cy="48"
                  r="40"
                  fill="none"
                  stroke="var(--green)"
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeDasharray={circumference}
                  strokeDashoffset={circumference - (accuracy / 100) * circumference}
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-2xl font-black" style={{ color: 'var(--green)' }}>
                  {accuracy}%
                </span>
                <span className="text-xs" style={{ color: 'var(--text-muted)' }}>
                  accuracy
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3 mb-8">
            <div
              className="rounded-xl p-4"
              style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border)' }}
            >
              <p className="text-xl font-black" style={{ color: 'var(--text-primary)' }}>
                {correctCount} / {results.length}
              </p>
              <p className="text-xs mt-1" style={{ color: 'var(--text-muted)' }}>
                Score
              </p>
            </div>
            <div
              className="rounded-xl p-4"
              style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border)' }}
            >
              <p className="text-xl font-black" style={{ color: 'var(--gold)' }}>
                +{xp}
              </p>
              <p className="text-xs mt-1" style={{ color: 'var(--text-muted)' }}>
                XP earned
              </p>
            </div>
            <div
              className="rounded-xl p-4"
              style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border)' }}
            >
              <p className="text-xl font-black" style={{ color: 'var(--text-primary)' }}>
                🔥 {streak}
              </p>
              <p className="text-xs mt-1" style={{ color: 'var(--text-muted)' }}>
                Day streak
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <button
              onClick={() => router.push('/')}
              className="w-full py-3 rounded-xl font-bold cursor-pointer transition-all duration-200"
              style={{ background: 'var(--green)', color: 'var(--bg-base)' }}
            >
              Back to Dashboard
            </button>
            <button
              onClick={() => router.push('/errors')}
              className="w-full py-3 rounded-xl font-semibold cursor-pointer transition-all duration-200"
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
      </div>
    )
  }

  const question = questions[currentIndex]
  const correctLetter = correctAnswer || question.answer_text

  const getChoiceStyle = (choice: string): React.CSSProperties => {
    const letter = choice.charAt(0)
    if (!isAnswered) {
      return {
        background: 'var(--bg-elevated)',
        border: '1px solid var(--border)',
        color: 'var(--text-primary)',
      }
    }
    if (letter === correctLetter) {
      return {
        background: 'rgba(88,204,2,0.15)',
        border: '1px solid var(--green)',
        color: 'var(--green)',
      }
    }
    if (choice === selectedAnswer) {
      return {
        background: 'rgba(255,75,75,0.15)',
        border: '1px solid var(--red)',
        color: 'var(--red)',
      }
    }
    return {
      background: 'var(--bg-elevated)',
      border: '1px solid var(--border)',
      color: 'var(--text-muted)',
      opacity: 0.5,
    }
  }

  return (
    <div className="flex flex-col min-h-screen" style={{ background: 'var(--bg-base)' }}>
      {/* Header bar */}
      <div
        className="fixed top-0 left-0 right-0 z-50 px-6 py-3 flex items-center gap-4"
        style={{ background: 'var(--bg-surface)', borderBottom: '1px solid var(--border)' }}
      >
        <span className="text-sm font-bold" style={{ color: 'var(--green)' }}>
          PrepOS
        </span>

        {question && (
          <span
            className="text-xs px-2 py-1 rounded-full font-medium"
            style={{
              background: question.subject === 'ap_precalc' ? 'rgba(28,176,246,0.15)' : 'rgba(88,204,2,0.15)',
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

        <div className="flex items-center gap-4 text-xs" style={{ color: 'var(--text-muted)' }}>
          <span>⏱ {formatTime(timer)}</span>
          <span style={{ color: 'var(--text-secondary)' }}>
            {currentIndex + 1} / {questions.length}
          </span>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 pt-20 pb-8">
        <div className="w-full max-w-2xl">
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
                  {/* Subject + question number */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-medium uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>
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

                  {/* Question text */}
                  <div
                    className="rounded-2xl p-6 mb-6"
                    style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}
                  >
                    <p className="text-lg leading-relaxed font-medium" style={{ color: 'var(--text-primary)' }}>
                      {question.question_text}
                    </p>
                  </div>

                  {/* Answer choices */}
                  <div className="flex flex-col gap-3 mb-6">
                    {question.choices.map((choice) => {
                      const letter = choice.charAt(0)
                      const isShaking = shakeAnswer === choice
                      return (
                        <button
                          key={choice}
                          onClick={() => handleAnswer(choice)}
                          disabled={isAnswered}
                          className={`w-full text-left p-4 rounded-xl font-medium cursor-pointer transition-all duration-200 flex items-center gap-3${isShaking ? ' animate-shake' : ''}`}
                          style={getChoiceStyle(choice)}
                        >
                          <span
                            className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
                            style={{
                              background: 'var(--bg-base)',
                              color: isAnswered && letter === correctLetter ? 'var(--green)' : 'inherit',
                            }}
                          >
                            {letter}
                          </span>
                          <span>{choice.substring(3)}</span>
                          {isAnswered && letter === correctLetter && (
                            <span className="ml-auto text-green-400">✓</span>
                          )}
                          {isAnswered && choice === selectedAnswer && letter !== correctLetter && (
                            <span className="ml-auto text-red-400">✗</span>
                          )}
                        </button>
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
                          border: `1px solid ${isCorrect ? 'var(--green)' : 'var(--red)'}33`,
                        }}
                      >
                        <p
                          className="font-bold mb-2"
                          style={{ color: isCorrect ? 'var(--green)' : 'var(--red)' }}
                        >
                          {isCorrect ? '✓ Correct!' : `✗ Incorrect — Correct answer: ${correctLetter}`}
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
                          {currentIndex + 1 < questions.length ? 'Continue →' : 'Finish Session →'}
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
