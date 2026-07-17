'use client'

import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useState } from 'react'

interface AssignmentItem {
  label: string
  count: number
  color: string
}

const items: AssignmentItem[] = [
  { label: 'AP Precalculus', count: 25, color: 'var(--blue)' },
  { label: 'SAT Math', count: 20, color: 'var(--green)' },
  { label: 'Review', count: 10, color: 'var(--purple)' },
]

const total = items.reduce((sum, i) => sum + i.count, 0)

export default function TodayAssignment() {
  const router = useRouter()
  const [btnHovered, setBtnHovered] = useState(false)

  return (
    <div
      style={{
        background: 'linear-gradient(135deg, rgba(28,176,246,0.08) 0%, rgba(88,204,2,0.05) 100%)',
        border: '1px solid var(--border)',
        borderRadius: '16px',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
      }}
    >
      <div>
        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '11px',
            fontWeight: 600,
            color: 'var(--text-muted)',
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
          }}
        >
          Today&apos;s Goal
        </p>
        <p
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: '24px',
            fontWeight: 700,
            color: 'var(--text-primary)',
            marginTop: '2px',
            lineHeight: 1.1,
          }}
        >
          {total} Problems
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {items.map(({ label, count, color }, i) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 + i * 0.07, duration: 0.3 }}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  background: color,
                  flexShrink: 0,
                  boxShadow: `0 0 6px ${color}`,
                }}
              />
              <span
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '13px',
                  color: 'var(--text-secondary)',
                }}
              >
                {label}
              </span>
            </div>
            <span
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '13px',
                fontWeight: 600,
                color: 'var(--text-primary)',
              }}
            >
              {count}
              <span
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 400,
                  color: 'var(--text-muted)',
                  marginLeft: '3px',
                }}
              >
                q
              </span>
            </span>
          </motion.div>
        ))}
      </div>

      <div style={{ height: '1px', background: 'var(--border)', opacity: 0.5 }} />

      <button
        onClick={() => router.push('/practice')}
        onMouseEnter={() => setBtnHovered(true)}
        onMouseLeave={() => setBtnHovered(false)}
        style={{
          width: '100%',
          padding: '10px 24px',
          borderRadius: '12px',
          border: 'none',
          background: 'var(--blue)',
          color: '#fff',
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: '14px',
          fontWeight: 700,
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px',
          transition: 'opacity 0.15s ease, box-shadow 0.15s ease',
          opacity: btnHovered ? 0.88 : 1,
          boxShadow: btnHovered
            ? '0 0 20px rgba(28,176,246,0.35), 0 4px 12px rgba(0,0,0,0.3)'
            : '0 2px 8px rgba(0,0,0,0.2)',
        }}
      >
        Start Practice
        <ArrowRight size={15} />
      </button>
    </div>
  )
}
