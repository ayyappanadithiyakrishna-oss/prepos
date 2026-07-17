'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { ChevronRight, CheckCircle2, BookOpen } from 'lucide-react'

interface Lesson {
  id: number
  unit_number: number
  unit_title: string
  lesson_number: string
  title: string
  subject: string
  progress?: { completed_at?: string; score?: number; xp_earned?: number }
}

interface DomainConfig {
  unit: number
  badge: string
  label: string
  subtitle: string
  color: string
  pct: string
}

const DOMAINS: DomainConfig[] = [
  {
    unit: 5,
    badge: 'ALGEBRA',
    label: 'Algebra',
    subtitle: 'Linear Equations, Systems & Expressions',
    color: '#6366f1',
    pct: '~35%',
  },
  {
    unit: 6,
    badge: 'ADVANCED MATH',
    label: 'Advanced Math',
    subtitle: 'Quadratics, polynomials, exponentials, radicals',
    color: '#f97316',
    pct: '~35%',
  },
  {
    unit: 7,
    badge: 'PROBLEM SOLVING & DATA',
    label: 'Problem Solving & Data Analysis',
    subtitle: 'Ratios, statistics, probability, scatterplots',
    color: '#f43f5e',
    pct: '~15%',
  },
  {
    unit: 8,
    badge: 'GEOMETRY & TRIG',
    label: 'Geometry & Trigonometry',
    subtitle: 'Area, triangles, trig ratios, circles',
    color: '#fb923c',
    pct: '~15%',
  },
]

function DomainSection({
  domain,
  lessons,
  delay,
  onLessonClick,
}: {
  domain: DomainConfig
  lessons: Lesson[]
  delay: number
  onLessonClick: (id: number) => void
}) {
  const { color, badge, subtitle, pct } = domain
  const completedCount = lessons.filter(l => !!l.progress?.completed_at).length
  const totalXP = lessons.reduce((acc, l) => acc + (l.progress?.xp_earned ?? 0), 0)

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      style={{ marginBottom: '20px' }}
    >
      {/* Domain header card */}
      <div
        style={{
          background: `linear-gradient(135deg, ${color}1e 0%, ${color}08 100%)`,
          border: `1px solid ${color}40`,
          borderRadius: '18px',
          padding: '20px 24px',
          marginBottom: '10px',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div style={{ flex: 1, minWidth: 0, marginRight: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px', flexWrap: 'wrap' }}>
              <span
                style={{
                  padding: '2px 10px',
                  borderRadius: '20px',
                  fontSize: '10px',
                  fontWeight: 700,
                  background: `${color}25`,
                  color,
                  border: `1px solid ${color}4d`,
                  letterSpacing: '0.06em',
                  whiteSpace: 'nowrap',
                }}
              >
                {badge}
              </span>
              <span style={{ fontSize: '11px', color: 'var(--text-muted)', whiteSpace: 'nowrap' }}>{pct} of SAT Math</span>
            </div>
            <h2
              style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontSize: '18px',
                fontWeight: 700,
                color: 'var(--text-primary)',
                marginBottom: '8px',
                marginTop: 0,
              }}
            >
              {subtitle}
            </h2>
            {/* Progress bar */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div
                style={{
                  width: '160px',
                  height: '5px',
                  borderRadius: '3px',
                  background: 'var(--border)',
                  overflow: 'hidden',
                }}
              >
                <motion.div
                  style={{ height: '100%', borderRadius: '3px', background: color, originX: 0 }}
                  animate={{ scaleX: lessons.length > 0 ? completedCount / lessons.length : 0 }}
                  transition={{ duration: 0.8, delay: delay + 0.3 }}
                />
              </div>
              <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
                {completedCount} / {lessons.length} complete
              </span>
            </div>
          </div>
          <div style={{ textAlign: 'right', flexShrink: 0 }}>
            <p style={{ fontSize: '11px', color: 'var(--text-muted)', marginBottom: '2px', marginTop: 0 }}>
              {lessons.length} lessons
            </p>
            <p style={{ fontSize: '11px', color: '#ffd700', margin: 0 }}>★ {totalXP} XP</p>
          </div>
        </div>
      </div>

      {/* Lesson rows */}
      {lessons.length === 0 ? (
        <div
          style={{
            padding: '20px 18px',
            background: 'var(--bg-card)',
            border: '1px solid var(--border)',
            borderRadius: '13px',
            textAlign: 'center',
          }}
        >
          <p style={{ fontSize: '13px', color: 'var(--text-muted)', margin: 0 }}>No lessons yet for this domain.</p>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          {lessons.map((lesson, i) => {
            const completed = !!lesson.progress?.completed_at
            const score = lesson.progress?.score ?? 0
            const xp = lesson.progress?.xp_earned ?? 0
            return (
              <motion.div
                key={lesson.id}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: delay + 0.1 + i * 0.05 }}
                whileHover={{ x: 4 }}
                onClick={() => onLessonClick(lesson.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px',
                  minHeight: '56px',
                  padding: '13px 18px',
                  background: 'var(--bg-card)',
                  border: `1px solid ${completed ? `${color}33` : 'var(--border)'}`,
                  borderRadius: '13px',
                  cursor: 'pointer',
                  transition: 'border-color 0.18s ease',
                }}
              >
                {/* Status circle */}
                <div
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: '50%',
                    flexShrink: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: completed ? `${color}26` : 'var(--bg-elevated)',
                    border: `2px solid ${completed ? color : 'var(--border)'}`,
                  }}
                >
                  {completed ? (
                    <CheckCircle2 size={15} color={color} />
                  ) : (
                    <span
                      style={{
                        fontFamily: 'Space Grotesk, sans-serif',
                        fontSize: '11px',
                        fontWeight: 600,
                        color: 'var(--text-muted)',
                      }}
                    >
                      {lesson.lesson_number}
                    </span>
                  )}
                </div>

                {/* Title + meta */}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <p
                    style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontSize: '14px',
                      fontWeight: 500,
                      color: 'var(--text-primary)',
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      margin: 0,
                    }}
                  >
                    {lesson.title}
                  </p>
                  {completed && (
                    <p style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop: '2px', marginBottom: 0 }}>
                      Score: {score}% · {xp} XP earned
                    </p>
                  )}
                </div>

                {/* Right side */}
                {completed ? (
                  <span
                    style={{
                      padding: '2px 8px',
                      borderRadius: '10px',
                      fontSize: '11px',
                      fontWeight: 700,
                      background: `${color}1e`,
                      color,
                      border: `1px solid ${color}33`,
                      flexShrink: 0,
                    }}
                  >
                    Done
                  </span>
                ) : (
                  <ChevronRight size={15} color="var(--text-muted)" style={{ flexShrink: 0 }} />
                )}
              </motion.div>
            )
          })}
        </div>
      )}
    </motion.section>
  )
}

export default function SATLessonsPage() {
  const router = useRouter()
  const [allLessons, setAllLessons] = useState<Lesson[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/lessons')
      .then(r => r.json())
      .then((data: Lesson[] | { lessons: Lesson[] }) => {
        const list = Array.isArray(data) ? data : (data.lessons ?? [])
        setAllLessons(list)
      })
      .catch(() => {})
      .finally(() => setLoading(false))
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.35 }}
      style={{ maxWidth: '860px', padding: '32px' }}
    >
      {/* Page header */}
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        style={{ marginBottom: '36px' }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px', flexWrap: 'wrap' }}>
          <div
            style={{
              width: 40,
              height: 40,
              borderRadius: '12px',
              background: 'rgba(99,102,241,0.15)',
              border: '1px solid rgba(99,102,241,0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            <BookOpen size={20} color="var(--sat-accent)" />
          </div>
          <h1
            style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontSize: '28px',
              fontWeight: 700,
              color: 'var(--text-primary)',
              margin: 0,
            }}
          >
            SAT Math Lessons
          </h1>
          <span
            style={{
              padding: '3px 10px',
              borderRadius: '20px',
              fontSize: '11px',
              fontWeight: 600,
              background: 'var(--sat-accent-dim)',
              color: 'var(--sat-accent)',
              border: '1px solid var(--sat-accent-border)',
            }}
          >
            4 Domains
          </span>
        </div>
        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '14px', color: 'var(--text-muted)', margin: 0 }}>
          Study every topic tested on the SAT — then practice with real questions.
        </p>
      </motion.div>

      {/* Loading shimmer */}
      {loading && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {[1, 2, 3, 4].map(i => (
            <div key={i} className="shimmer" style={{ height: 160, borderRadius: 18 }} />
          ))}
        </div>
      )}

      {!loading &&
        DOMAINS.map((domain, idx) => {
          const lessons = allLessons.filter(l => l.unit_number === domain.unit)
          return (
            <DomainSection
              key={domain.unit}
              domain={domain}
              lessons={lessons}
              delay={0.1 + idx * 0.08}
              onLessonClick={id => router.push(`/lessons/${id}`)}
            />
          )
        })}
    </motion.div>
  )
}
