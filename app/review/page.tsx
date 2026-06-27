'use client'

import { useEffect, useState, Suspense } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'

interface ReviewQuestion {
  id: number
  topic_id: number
  topic_name: string
  question_text: string
  times_missed: number
  subject: string
}

interface TopicGroup {
  topic_id: number
  topic_name: string
  subject: string
  count: number
}

function ReviewContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const initialTopic = searchParams.get('topic_id')

  const [questions, setQuestions] = useState<ReviewQuestion[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedTopic, setSelectedTopic] = useState<number | null>(
    initialTopic ? Number(initialTopic) : null
  )

  useEffect(() => {
    const url = selectedTopic ? `/api/review?topic_id=${selectedTopic}` : '/api/review'
    fetch(url)
      .then((r) => r.json())
      .then((d: { questions?: ReviewQuestion[] }) => {
        setQuestions(d.questions ?? [])
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [selectedTopic])

  // Build topic groups from all errors (fetch without filter for pills)
  const [allQuestions, setAllQuestions] = useState<ReviewQuestion[]>([])
  useEffect(() => {
    fetch('/api/review')
      .then((r) => r.json())
      .then((d: { questions?: ReviewQuestion[] }) => setAllQuestions(d.questions ?? []))
      .catch(() => {})
  }, [])

  const topicGroups = allQuestions.reduce<Record<number, TopicGroup>>((acc, q) => {
    if (!acc[q.topic_id]) {
      acc[q.topic_id] = {
        topic_id: q.topic_id,
        topic_name: q.topic_name,
        subject: q.subject,
        count: 0,
      }
    }
    acc[q.topic_id].count += 1
    return acc
  }, {})

  const groups = Object.values(topicGroups).sort((a, b) => b.count - a.count)

  const handleStartReview = () => {
    const url = selectedTopic
      ? `/practice/session?mode=review&topic_id=${selectedTopic}`
      : '/practice/session?mode=review'
    router.push(url)
  }

  return (
    <div className="px-8 py-8 max-w-[760px]">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="mb-8"
      >
        <h1 className="text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>
          Review Mode
        </h1>
        <p className="text-sm mt-1" style={{ color: 'var(--text-muted)' }}>
          Practice your weak spots — drawn from your error log
        </p>
      </motion.div>

      {/* Topic filter pills */}
      {groups.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05, duration: 0.35 }}
          className="flex flex-wrap gap-2 mb-6"
        >
          <button
            onClick={() => setSelectedTopic(null)}
            className="px-3 py-1.5 rounded-xl text-xs font-medium cursor-pointer transition-all duration-200"
            style={{
              background: selectedTopic === null ? 'var(--green)' : 'var(--bg-card)',
              color: selectedTopic === null ? 'var(--bg-base)' : 'var(--text-secondary)',
              border: `1px solid ${selectedTopic === null ? 'var(--green)' : 'var(--border)'}`,
            }}
          >
            All Topics
          </button>
          {groups.map((g) => (
            <button
              key={g.topic_id}
              onClick={() => setSelectedTopic(g.topic_id)}
              className="px-3 py-1.5 rounded-xl text-xs font-medium cursor-pointer transition-all duration-200"
              style={{
                background: selectedTopic === g.topic_id ? 'var(--purple)' : 'var(--bg-card)',
                color: selectedTopic === g.topic_id ? '#fff' : 'var(--text-secondary)',
                border: `1px solid ${selectedTopic === g.topic_id ? 'var(--purple)' : 'var(--border)'}`,
              }}
            >
              {g.topic_name}
              <span
                className="ml-1.5 px-1.5 py-0.5 rounded-full text-xs"
                style={{
                  background: selectedTopic === g.topic_id ? 'rgba(255,255,255,0.2)' : 'var(--bg-elevated)',
                  color: selectedTopic === g.topic_id ? '#fff' : 'var(--text-muted)',
                }}
              >
                {g.count}
              </span>
            </button>
          ))}
        </motion.div>
      )}

      {loading ? (
        <div className="flex justify-center py-20">
          <div
            className="w-8 h-8 rounded-full border-2 animate-spin"
            style={{ borderColor: 'var(--green)', borderTopColor: 'transparent' }}
          />
        </div>
      ) : questions.length === 0 ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex flex-col items-center justify-center py-24 text-center"
        >
          <div className="mb-4">
            <CheckCircle2 size={48} color="var(--green)" />
          </div>
          <p className="text-lg font-bold" style={{ color: 'var(--text-primary)' }}>
            No errors to review
          </p>
          <p className="text-sm mt-2 mb-6" style={{ color: 'var(--text-muted)' }}>
            Complete a practice session first to build your error log.
          </p>
          <button
            onClick={() => router.push('/practice')}
            className="px-6 py-3 rounded-xl font-bold cursor-pointer transition-all duration-200"
            style={{ background: 'var(--green)', color: 'var(--bg-base)' }}
          >
            Start Practice
          </button>
        </motion.div>
      ) : (
        <>
          {/* Start button */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.35 }}
            className="mb-6"
          >
            <button
              onClick={handleStartReview}
              className="w-full py-4 rounded-2xl font-bold text-base cursor-pointer transition-all duration-200"
              style={{ background: 'var(--purple)', color: '#fff' }}
              onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.9' }}
              onMouseLeave={(e) => { e.currentTarget.style.opacity = '1' }}
            >
              Start Review Session →
            </button>
            <p className="text-center text-xs mt-2" style={{ color: 'var(--text-muted)' }}>
              {questions.length} question{questions.length !== 1 ? 's' : ''} in queue
            </p>
          </motion.div>

          {/* Topic breakdown */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.35 }}
          >
            <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: 'var(--text-muted)' }}>
              Error breakdown by topic
            </p>
            <div className="flex flex-col gap-2">
              {groups.map((g, i) => (
                <button
                  key={g.topic_id}
                  onClick={() => setSelectedTopic(selectedTopic === g.topic_id ? null : g.topic_id)}
                  className="flex items-center justify-between p-4 rounded-xl cursor-pointer transition-all duration-200 text-left"
                  style={{
                    background: selectedTopic === g.topic_id ? 'rgba(139,92,246,0.1)' : 'var(--bg-card)',
                    border: `1px solid ${selectedTopic === g.topic_id ? 'rgba(139,92,246,0.35)' : 'var(--border)'}`,
                    animationDelay: `${i * 0.04}s`,
                  }}
                >
                  <div>
                    <p className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>
                      {g.topic_name}
                    </p>
                    <p className="text-xs mt-0.5" style={{ color: 'var(--text-muted)' }}>
                      {g.subject === 'ap_precalc' ? 'AP Precalculus' : 'SAT Math'}
                    </p>
                  </div>
                  <span
                    className="text-sm font-bold px-3 py-1 rounded-full"
                    style={{
                      background: 'rgba(255,75,75,0.12)',
                      color: 'var(--red)',
                    }}
                  >
                    {g.count} mistake{g.count !== 1 ? 's' : ''}
                  </span>
                </button>
              ))}
            </div>
          </motion.div>
        </>
      )}
    </div>
  )
}

export default function ReviewPage() {
  return (
    <Suspense
      fallback={
        <div className="flex justify-center items-center min-h-screen">
          <div
            className="w-8 h-8 rounded-full border-2 animate-spin"
            style={{ borderColor: 'var(--green)', borderTopColor: 'transparent' }}
          />
        </div>
      }
    >
      <ReviewContent />
    </Suspense>
  )
}
