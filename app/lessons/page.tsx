'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { GraduationCap, CheckCircle2, ChevronRight, Lock } from 'lucide-react'

interface LessonProgress {
  completed_at?: string
  xp_earned?: number
  score?: number
}

interface Lesson {
  id: number
  unit_number: number
  unit_title: string
  lesson_number: string
  title: string
  progress?: LessonProgress
}

function unitColor(unit: number): string {
  switch (unit) {
    case 1: return '#1cb0f6'
    case 2: return '#f97316'
    case 3: return '#8b5cf6'
    case 5: return '#ef4444'
    case 6: return '#f87171'
    case 7: return '#f43f5e'
    case 8: return '#fb923c'
    default: return '#1cb0f6'
  }
}

function unitSubject(unit: number): string {
  return unit <= 4 ? 'AP Precalculus' : 'SAT Math'
}

function scoreToStars(score: number): number {
  if (score >= 90) return 3
  if (score >= 70) return 2
  if (score >= 50) return 1
  return 1
}

function Stars({ score }: { score: number }) {
  const filled = scoreToStars(score)
  return (
    <div style={{ display: 'flex', gap: '2px' }}>
      {[1, 2, 3].map((n) => (
        <svg key={n} width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path
            d="M6 1l1.236 2.506L10 3.82l-2 1.95.472 2.75L6 7.25l-2.472 1.27L4 5.77 2 3.82l2.764-.314z"
            fill={n <= filled ? '#ffd700' : 'var(--border-accent)'}
          />
        </svg>
      ))}
    </div>
  )
}

function groupByUnit(lessons: Lesson[]): Map<number, { title: string; lessons: Lesson[] }> {
  const map = new Map<number, { title: string; lessons: Lesson[] }>()
  for (const lesson of lessons) {
    const entry = map.get(lesson.unit_number)
    if (entry) {
      entry.lessons.push(lesson)
    } else {
      map.set(lesson.unit_number, { title: lesson.unit_title, lessons: [lesson] })
    }
  }
  return map
}

function LessonRow({
  lesson,
  color,
  delay,
  isFirst,
  isLast,
  onClick,
}: {
  lesson: Lesson
  color: string
  delay: number
  isFirst: boolean
  isLast: boolean
  onClick: () => void
}) {
  const completed = !!lesson.progress?.completed_at
  const score = lesson.progress?.score ?? 0
  const xp = lesson.progress?.xp_earned ?? 0
  const [hovered, setHovered] = useState(false)

  return (
    <div style={{ position: 'relative', display: 'flex', gap: '0' }}>
      {/* Path connector */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '40px', flexShrink: 0, marginRight: '16px' }}>
        {/* Vertical line above */}
        <div style={{
          width: '2px',
          height: isFirst ? '50%' : '100%',
          background: completed ? `${color}50` : 'var(--border)',
          alignSelf: 'center',
          visibility: isFirst ? 'hidden' : 'visible',
          marginBottom: '-1px',
        }} />
        {/* Node circle */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: delay + 0.1, type: 'spring', stiffness: 320, damping: 18 }}
          style={{
            width: '32px',
            height: '32px',
            borderRadius: '50%',
            background: completed ? `${color}20` : hovered ? 'var(--bg-elevated)' : 'var(--bg-surface)',
            border: `2px solid ${completed ? color : hovered ? 'var(--border-accent)' : 'var(--border)'}`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            zIndex: 1,
            transition: 'all 0.18s ease',
            boxShadow: completed ? `0 0 10px ${color}30` : 'none',
          }}
        >
          {completed ? (
            <CheckCircle2 size={15} color={color} />
          ) : (
            <span style={{ fontFamily: 'var(--font-heading)', fontSize: '10px', color: 'var(--text-muted)', fontWeight: 700 }}>
              {lesson.lesson_number}
            </span>
          )}
        </motion.div>
        {/* Vertical line below */}
        <div style={{
          width: '2px',
          flex: 1,
          background: completed ? `${color}50` : 'var(--border)',
          alignSelf: 'center',
          marginTop: '-1px',
          visibility: isLast ? 'hidden' : 'visible',
        }} />
      </div>

      {/* Lesson card */}
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay, duration: 0.3 }}
        whileHover={{ x: 3 }}
        onClick={onClick}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          gap: '14px',
          padding: '13px 16px',
          background: hovered ? 'var(--bg-elevated)' : 'var(--bg-card)',
          border: `1px solid ${hovered ? 'var(--border-accent)' : 'var(--border)'}`,
          borderRadius: '14px',
          cursor: 'pointer',
          transition: 'all 0.18s ease',
          marginBottom: '8px',
          boxShadow: hovered ? '0 4px 16px rgba(0,0,0,0.3)' : 'none',
        }}
      >
        <div style={{ flex: 1, minWidth: 0 }}>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '14px',
            fontWeight: 500,
            color: 'var(--text-primary)',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}>
            {lesson.title}
          </p>
          {completed ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '4px' }}>
              <Stars score={score} />
              <span style={{ fontFamily: 'var(--font-body)', fontSize: '11px', color: 'var(--text-muted)' }}>
                {score}% · {xp} XP
              </span>
            </div>
          ) : (
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '11px', color: 'var(--text-muted)', marginTop: '3px' }}>
              Not started
            </p>
          )}
        </div>

        {completed ? (
          <span style={{
            padding: '3px 10px',
            borderRadius: '20px',
            fontSize: '11px',
            fontWeight: 600,
            background: `${color}18`,
            color: color,
            border: `1px solid ${color}30`,
            flexShrink: 0,
            fontFamily: 'var(--font-body)',
          }}>
            Done
          </span>
        ) : (
          <ChevronRight size={16} color="var(--text-muted)" style={{ flexShrink: 0 }} />
        )}
      </motion.div>
    </div>
  )
}

export default function LessonsPage() {
  const router = useRouter()
  const [lessons, setLessons] = useState<Lesson[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/lessons')
      .then((r) => r.json())
      .then((data: Lesson[] | { lessons: Lesson[] }) => {
        const list = Array.isArray(data) ? data : (data.lessons ?? [])
        setLessons(list)
      })
      .catch(() => {})
      .finally(() => setLoading(false))
  }, [])

  const totalCompleted = lessons.filter((l) => l.progress?.completed_at).length
  const totalXP = lessons.reduce((acc, l) => acc + (l.progress?.xp_earned ?? 0), 0)
  const grouped = groupByUnit(lessons)
  const unitNumbers = Array.from(grouped.keys()).sort((a, b) => a - b)
  const pct = lessons.length > 0 ? Math.round((totalCompleted / lessons.length) * 100) : 0

  return (
    <div style={{ maxWidth: '780px', padding: '32px' }}>
      {/* Page header */}
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        style={{ marginBottom: '36px' }}
      >
        <h1 style={{
          fontFamily: 'var(--font-heading)',
          fontSize: '30px',
          fontWeight: 700,
          color: 'var(--text-primary)',
          margin: 0,
          lineHeight: 1.15,
          letterSpacing: '-0.01em',
        }}>
          AP &amp; SAT Lessons
        </h1>
        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: '14px',
          color: 'var(--text-muted)',
          marginTop: '6px',
        }}>
          AP Precalculus (Units 1–3) · SAT Math (Units 5–8)
        </p>

        {/* Stat pills */}
        <div style={{ display: 'flex', gap: '10px', marginTop: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
          <span style={{
            padding: '7px 14px', borderRadius: '9999px', fontSize: '13px',
            fontFamily: 'var(--font-body)', fontWeight: 500,
            background: 'var(--bg-card)', border: '1px solid var(--border)', color: 'var(--text-primary)',
          }}>
            {totalCompleted} / {lessons.length} lessons
          </span>
          <span style={{
            padding: '7px 14px', borderRadius: '9999px', fontSize: '13px',
            fontFamily: 'var(--font-body)', fontWeight: 500,
            background: 'rgba(255,215,0,0.08)', border: '1px solid rgba(255,215,0,0.3)', color: 'var(--gold)',
          }}>
            {totalXP.toLocaleString()} XP
          </span>
          <span style={{
            padding: '7px 14px', borderRadius: '9999px', fontSize: '13px',
            fontFamily: 'var(--font-body)', fontWeight: 500,
            background: 'rgba(28,176,246,0.08)', border: '1px solid rgba(28,176,246,0.3)', color: 'var(--blue)',
          }}>
            {pct}% complete
          </span>
        </div>
      </motion.div>

      {/* Loading shimmer */}
      {loading && (
        <div className="flex flex-col gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="shimmer" style={{ height: 180, borderRadius: 20 }} />
          ))}
        </div>
      )}

      {/* Empty state */}
      {!loading && lessons.length === 0 && (
        <div style={{
          display: 'flex', flexDirection: 'column', alignItems: 'center',
          justifyContent: 'center', padding: '80px 0', gap: '12px',
        }}>
          <GraduationCap size={40} color="var(--text-muted)" />
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--text-muted)' }}>
            No lessons found.
          </p>
        </div>
      )}

      {/* Unit sections */}
      {!loading && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
          {unitNumbers.map((unit, index) => {
            const { title: unitTitle, lessons: unitLessons } = grouped.get(unit)!
            const completedCount = unitLessons.filter((l) => l.progress?.completed_at).length
            const totalCount = unitLessons.length
            const unitXP = unitLessons.reduce((acc, l) => acc + (l.progress?.xp_earned ?? 0), 0)
            const color = unitColor(unit)
            const progressPct = totalCount > 0 ? (completedCount / totalCount) * 100 : 0
            const subject = unitSubject(unit)

            return (
              <motion.section
                key={unit}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.12, duration: 0.35 }}
              >
                {/* Unit header */}
                <div style={{
                  background: `linear-gradient(135deg, ${color}14 0%, ${color}06 100%)`,
                  border: `1px solid ${color}28`,
                  borderRadius: '20px',
                  padding: '22px 26px',
                  marginBottom: '20px',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
                    <span style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '10px',
                      textTransform: 'uppercase',
                      fontWeight: 700,
                      letterSpacing: '0.08em',
                      background: `${color}20`,
                      color: color,
                      padding: '3px 10px',
                      borderRadius: '9999px',
                    }}>
                      {subject} · Unit {unit}
                    </span>
                    {completedCount === totalCount && totalCount > 0 && (
                      <span style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '10px',
                        textTransform: 'uppercase',
                        fontWeight: 700,
                        letterSpacing: '0.06em',
                        background: 'rgba(88,204,2,0.15)',
                        color: 'var(--green)',
                        padding: '3px 10px',
                        borderRadius: '9999px',
                      }}>
                        Complete
                      </span>
                    )}
                  </div>

                  <h2 style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '20px',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                    margin: '0 0 14px 0',
                    letterSpacing: '-0.01em',
                  }}>
                    {unitTitle}
                  </h2>

                  {/* Progress bar */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ flex: 1, height: '7px', borderRadius: '9999px', background: 'var(--border)', overflow: 'hidden' }}>
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${progressPct}%` }}
                        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: index * 0.12 + 0.2 }}
                        style={{
                          height: '100%',
                          borderRadius: '9999px',
                          background: color,
                          boxShadow: `0 0 8px ${color}50`,
                        }}
                      />
                    </div>
                    <span style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'var(--text-secondary)', flexShrink: 0, fontWeight: 500 }}>
                      {completedCount}/{totalCount}
                    </span>
                    {unitXP > 0 && (
                      <span style={{ fontFamily: 'var(--font-body)', fontSize: '12px', color: 'var(--gold)', flexShrink: 0, fontWeight: 600 }}>
                        {unitXP} XP
                      </span>
                    )}
                  </div>
                </div>

                {/* Lesson path */}
                <div style={{ paddingLeft: '4px' }}>
                  {unitLessons.map((lesson, lessonIdx) => (
                    <LessonRow
                      key={lesson.id}
                      lesson={lesson}
                      color={color}
                      delay={index * 0.12 + lessonIdx * 0.04}
                      isFirst={lessonIdx === 0}
                      isLast={lessonIdx === unitLessons.length - 1}
                      onClick={() => router.push(`/lessons/${lesson.id}`)}
                    />
                  ))}
                </div>
              </motion.section>
            )
          })}
        </div>
      )}
    </div>
  )
}
