'use client'

import { motion } from 'framer-motion'

interface MasteryCardProps {
  title: string
  pct: number
  subtitle: string
  accentColor?: string
}

export default function MasteryCard({
  title,
  pct,
  subtitle,
  accentColor = 'var(--green)',
}: MasteryCardProps) {
  const radius = 48
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (pct / 100) * circumference
  const size = 124

  return (
    <div
      style={{
        background: 'var(--bg-card)',
        border: '1px solid var(--border)',
        borderRadius: '16px',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* subtle top accent strip */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: '20px',
          right: '20px',
          height: '2px',
          borderRadius: '0 0 2px 2px',
          background: `linear-gradient(90deg, transparent, ${accentColor}, transparent)`,
          opacity: 0.5,
        }}
      />
      <p
        style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: '12px',
          fontWeight: 600,
          color: 'var(--text-secondary)',
          textTransform: 'uppercase',
          letterSpacing: '0.06em',
        }}
      >
        {title}
      </p>

      <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        <div style={{ position: 'relative', flexShrink: 0, width: size, height: size }}>
          <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
            {/* track */}
            <circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              fill="none"
              stroke="var(--border)"
              strokeWidth="8"
            />
            {/* glow layer */}
            <circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              fill="none"
              stroke={accentColor}
              strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              transform={`rotate(-90 ${size / 2} ${size / 2})`}
              style={{
                transition: 'stroke-dashoffset 0.7s cubic-bezier(0.22, 1, 0.36, 1)',
                filter: `drop-shadow(0 0 6px ${accentColor})`,
                opacity: 0.4,
              }}
            />
            {/* fill layer */}
            <circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              fill="none"
              stroke={accentColor}
              strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              transform={`rotate(-90 ${size / 2} ${size / 2})`}
              style={{ transition: 'stroke-dashoffset 0.7s cubic-bezier(0.22, 1, 0.36, 1)' }}
            />
          </svg>
          <div
            style={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <span
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '22px',
                fontWeight: 700,
                color: 'var(--text-primary)',
                lineHeight: 1,
              }}
            >
              {pct}%
            </span>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <motion.div
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.4 }}
          >
            <span
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '20px',
                fontWeight: 700,
                color: 'var(--gold)',
                display: 'block',
              }}
            >
              {subtitle}
            </span>
            <span
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '11px',
                color: 'var(--text-muted)',
                marginTop: '2px',
                display: 'block',
              }}
            >
              projected score
            </span>
          </motion.div>

          <div
            style={{
              marginTop: '4px',
              padding: '4px 10px',
              borderRadius: '20px',
              background: `color-mix(in srgb, ${accentColor} 12%, transparent)`,
              border: `1px solid color-mix(in srgb, ${accentColor} 25%, transparent)`,
              display: 'inline-block',
            }}
          >
            <span
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '11px',
                fontWeight: 600,
                color: accentColor,
              }}
            >
              {pct >= 80 ? 'On track' : pct >= 60 ? 'Progressing' : 'Needs work'}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
