'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

function AnimatedNumber({ target }: { target: number }) {
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (target === 0) { setDisplay(0); return }
    const duration = 900
    const start = Date.now()
    let rafId: number
    const tick = () => {
      const elapsed = Date.now() - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplay(Math.round(eased * target))
      if (progress < 1) rafId = requestAnimationFrame(tick)
    }
    rafId = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafId)
  }, [target])

  return <>{display}</>
}

interface StatsCardProps {
  icon: React.ReactNode
  value: string | number
  label: string
  sublabel?: string
  iconBg?: string
  accentColor?: string
}

export default function StatsCard({
  icon,
  value,
  label,
  sublabel,
  iconBg = 'rgba(255,255,255,0.06)',
  accentColor = 'var(--blue)',
}: StatsCardProps) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.01 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      style={{
        background: 'var(--bg-card)',
        border: `1px solid ${hovered ? 'var(--border-accent)' : 'var(--border)'}`,
        borderRadius: '16px',
        padding: '20px',
        cursor: 'default',
        transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
        boxShadow: hovered ? `0 4px 24px rgba(0,0,0,0.4), 0 0 0 1px ${accentColor}22` : 'none',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Top accent line */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: '16px',
        right: '16px',
        height: '2px',
        borderRadius: '0 0 2px 2px',
        background: accentColor,
        opacity: hovered ? 0.7 : 0.3,
        transition: 'opacity 0.2s ease',
      }} />

      <div style={{
        width: '36px',
        height: '36px',
        borderRadius: '10px',
        background: iconBg,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
      }}>
        {icon}
      </div>

      <div>
        <div style={{
          fontFamily: 'var(--font-heading)',
          fontSize: '28px',
          fontWeight: 700,
          color: 'var(--text-primary)',
          lineHeight: 1,
          letterSpacing: '-0.01em',
        }}>
          {typeof value === 'number' ? <AnimatedNumber target={value} /> : value}
        </div>
        <div style={{
          fontFamily: 'var(--font-body)',
          fontSize: '12px',
          color: 'var(--text-muted)',
          marginTop: '6px',
        }}>
          {label}
        </div>
        {sublabel && (
          <div style={{
            fontFamily: 'var(--font-body)',
            fontSize: '11px',
            color: 'var(--text-muted)',
            marginTop: '3px',
            opacity: 0.55,
          }}>
            {sublabel}
          </div>
        )}
      </div>
    </motion.div>
  )
}
