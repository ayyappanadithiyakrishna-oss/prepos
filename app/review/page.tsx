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
    <div style={{ padding: '32px', maxWidth: 760 }}>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        style={{ marginBottom: 32 }}
      >
        <h1
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 28,
            fontWeight: 700,
            color: 'var(--text-primary)',
            margin: 0,
            marginBottom: 6,
          }}
        >
          Review Mode
        </h1>
        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 14,
            color: 'var(--text-muted)',
            margin: 0,
          }}
        >
          Practice your weak spots — drawn from your error log
        </p>
      </motion.div>

      {/* Topic filter pills */}
      {groups.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05, duration: 0.35 }}
          style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 24 }}
        >
          <button
            onClick={() => setSelectedTopic(null)}
            style={{
              padding: '6px 14px',
              borderRadius: 12,
              fontSize: 12,
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.18s ease',
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
              style={{
                padding: '6px 14px',
                borderRadius: 12,
                fontSize: 12,
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.18s ease',
                background: selectedTopic === g.topic_id ? 'var(--purple)' : 'var(--bg-card)',
                color: selectedTopic === g.topic_id ? '#fff' : 'var(--text-secondary)',
                border: `1px solid ${selectedTopic === g.topic_id ? 'var(--purple)' : 'var(--border)'}`,
              }}
            >
              {g.topic_name}
              <span
                style={{
                  marginLeft: 6,
                  padding: '1px 6px',
                  borderRadius: 999,
                  fontSize: 11,
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
        <div style={{ display: 'flex', justifyContent: 'center', padding: '80px 0' }}>
          <div
            style={{
              width: 32,
              height: 32,
              borderRadius: '50%',
              border: '2px solid var(--green)',
              borderTopColor: 'transparent',
              animation: 'spin 0.8s linear infinite',
            }}
          />
        </div>
      ) : questions.length === 0 ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '80px 0',
            textAlign: 'center',
          }}
        >
          <div
            style={{
              width: 80,
              height: 80,
              borderRadius: '50%',
              background: 'rgba(88,204,2,0.12)',
              border: '2px solid rgba(88,204,2,0.25)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 20,
            }}
          >
            <CheckCircle2 size={40} color="var(--green)" />
          </div>
          <p
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 18,
              fontWeight: 700,
              color: 'var(--text-primary)',
              margin: 0,
              marginBottom: 8,
            }}
          >
            No errors to review
          </p>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 14,
              color: 'var(--text-muted)',
              margin: 0,
              marginBottom: 28,
            }}
          >
            Complete a practice session first to build your error log.
          </p>
          <button
            onClick={() => router.push('/practice')}
            style={{
              padding: '12px 28px',
              borderRadius: 14,
              fontSize: 14,
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 700,
              cursor: 'pointer',
              transition: 'all 0.18s ease',
              background: 'var(--green)',
              color: 'var(--bg-base)',
              border: 'none',
            }}
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
            style={{ marginBottom: 28 }}
          >
            <button
              onClick={handleStartReview}
              style={{
                width: '100%',
                padding: '16px 0',
                borderRadius: 16,
                fontSize: 16,
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 700,
                cursor: 'pointer',
                transition: 'opacity 0.18s ease',
                background: 'var(--purple)',
                color: '#fff',
                border: 'none',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.88' }}
              onMouseLeave={(e) => { e.currentTarget.style.opacity = '1' }}
            >
              Start Review Session
            </button>
            <p
              style={{
                textAlign: 'center',
                fontSize: 12,
                fontFamily: "'DM Sans', sans-serif",
                color: 'var(--text-muted)',
                marginTop: 10,
                margin: '10px 0 0',
              }}
            >
              {questions.length} question{questions.length !== 1 ? 's' : ''} in queue
            </p>
          </motion.div>

          {/* Topic breakdown */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.35 }}
          >
            <p
              style={{
                fontSize: 11,
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700,
                letterSpacing: '0.08em',
                textTransform: 'uppercase' as const,
                color: 'var(--text-muted)',
                marginBottom: 12,
                margin: '0 0 12px',
              }}
            >
              Error breakdown by topic
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {groups.map((g, i) => (
                <button
                  key={g.topic_id}
                  onClick={() => setSelectedTopic(selectedTopic === g.topic_id ? null : g.topic_id)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '16px 18px',
                    borderRadius: 14,
                    cursor: 'pointer',
                    transition: 'all 0.18s ease',
                    textAlign: 'left',
                    background: selectedTopic === g.topic_id ? 'rgba(139,92,246,0.1)' : 'var(--bg-card)',
                    border: `1px solid ${selectedTopic === g.topic_id ? 'rgba(139,92,246,0.35)' : 'var(--border)'}`,
                    animationDelay: `${i * 0.04}s`,
                  }}
                  onMouseEnter={(e) => {
                    if (selectedTopic !== g.topic_id) {
                      e.currentTarget.style.borderColor = 'var(--border-accent)'
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (selectedTopic !== g.topic_id) {
                      e.currentTarget.style.borderColor = 'var(--border)'
                    }
                  }}
                >
                  <div>
                    <p
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: 14,
                        fontWeight: 600,
                        color: 'var(--text-primary)',
                        margin: 0,
                        marginBottom: 3,
                      }}
                    >
                      {g.topic_name}
                    </p>
                    <p
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: 12,
                        color: 'var(--text-muted)',
                        margin: 0,
                      }}
                    >
                      {g.subject === 'ap_precalc' ? 'AP Precalculus' : 'SAT Math'}
                    </p>
                  </div>
                  <span
                    style={{
                      padding: '4px 12px',
                      borderRadius: 999,
                      fontSize: 12,
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontWeight: 700,
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
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
          <div
            style={{
              width: 32,
              height: 32,
              borderRadius: '50%',
              border: '2px solid var(--green)',
              borderTopColor: 'transparent',
              animation: 'spin 0.8s linear infinite',
            }}
          />
        </div>
      }
    >
      <ReviewContent />
    </Suspense>
  )
}
