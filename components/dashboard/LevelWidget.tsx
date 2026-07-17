'use client'

import { getLevelInfo } from '@/lib/xp-system'
import { motion } from 'framer-motion'

const TIER_GRADIENTS: Record<number, string> = {
  1:  'linear-gradient(135deg, rgba(107,114,128,0.12) 0%, rgba(107,114,128,0.04) 100%)',
  2:  'linear-gradient(135deg, rgba(34,197,94,0.12) 0%, rgba(34,197,94,0.04) 100%)',
  3:  'linear-gradient(135deg, rgba(59,130,246,0.12) 0%, rgba(59,130,246,0.04) 100%)',
  4:  'linear-gradient(135deg, rgba(139,92,246,0.12) 0%, rgba(139,92,246,0.04) 100%)',
  5:  'linear-gradient(135deg, rgba(245,158,11,0.12) 0%, rgba(245,158,11,0.04) 100%)',
  6:  'linear-gradient(135deg, rgba(239,68,68,0.12) 0%, rgba(239,68,68,0.04) 100%)',
  7:  'linear-gradient(135deg, rgba(236,72,153,0.12) 0%, rgba(236,72,153,0.04) 100%)',
  8:  'linear-gradient(135deg, rgba(249,115,22,0.12) 0%, rgba(249,115,22,0.04) 100%)',
  9:  'linear-gradient(135deg, rgba(255,215,0,0.12) 0%, rgba(255,215,0,0.04) 100%)',
  10: 'linear-gradient(135deg, rgba(255,110,247,0.14) 0%, rgba(99,102,241,0.06) 100%)',
}

export default function LevelWidget({ totalXP }: { totalXP: number }) {
  const { current, next, progress, xpToNext, xpIntoLevel, xpForLevel } = getLevelInfo(totalXP)
  const pct = Math.round(progress * 100)
  const gradient = TIER_GRADIENTS[current.level] ?? TIER_GRADIENTS[1]

  return (
    <div style={{
      background: gradient,
      border: `1px solid ${current.color}30`,
      borderRadius: '20px',
      padding: '24px 28px',
      display: 'grid',
      gridTemplateColumns: 'auto 1fr auto',
      gap: '24px',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Subtle corner glow */}
      <div style={{
        position: 'absolute',
        top: '-40px',
        right: '-40px',
        width: '180px',
        height: '180px',
        borderRadius: '50%',
        background: `radial-gradient(circle, ${current.glowColor} 0%, transparent 70%)`,
        pointerEvents: 'none',
      }} />

      {/* Level badge */}
      <div style={{
        width: '64px',
        height: '64px',
        borderRadius: '18px',
        background: `${current.color}18`,
        border: `2px solid ${current.color}40`,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0px',
        flexShrink: 0,
        boxShadow: `0 0 24px ${current.glowColor}`,
      }}>
        <span style={{ fontSize: '24px', lineHeight: 1 }}>{current.emoji}</span>
        <span style={{
          fontFamily: 'var(--font-heading)',
          fontSize: '10px',
          fontWeight: 700,
          color: current.color,
          letterSpacing: '0.06em',
          textTransform: 'uppercase',
          marginTop: '2px',
        }}>
          Lv.{current.level}
        </span>
      </div>

      {/* Progress section */}
      <div style={{ minWidth: 0 }}>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: '10px' }}>
          <span style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '18px',
            fontWeight: 700,
            color: 'var(--text-primary)',
          }}>
            {current.name}
          </span>
          <span style={{
            fontFamily: 'var(--font-body)',
            fontSize: '12px',
            color: 'var(--text-muted)',
          }}>
            {xpIntoLevel.toLocaleString()} / {xpForLevel === 5001 ? '∞' : xpForLevel.toLocaleString()} XP
          </span>
        </div>

        {/* XP bar */}
        <div style={{ position: 'relative', height: '10px', borderRadius: '99px', background: 'var(--border)', overflow: 'hidden' }}>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${pct}%` }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            style={{
              position: 'absolute',
              top: 0, left: 0,
              height: '100%',
              borderRadius: '99px',
              background: `linear-gradient(90deg, ${current.color}cc, ${current.color})`,
              boxShadow: `0 0 12px ${current.glowColor}`,
            }}
          >
            {/* Shimmer */}
            <div className="progress-shimmer" style={{ position: 'absolute', inset: 0, borderRadius: '99px' }} />
          </motion.div>
        </div>

        {next ? (
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '12px', color: 'var(--text-muted)', marginTop: '8px' }}>
            <span style={{ color: current.color, fontWeight: 600 }}>{xpToNext.toLocaleString()} XP</span>
            {' '}until{' '}
            <span style={{ color: 'var(--text-secondary)', fontWeight: 500 }}>{next.emoji} {next.name}</span>
          </p>
        ) : (
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '12px', color: current.color, marginTop: '8px', fontWeight: 600 }}>
            Max rank reached
          </p>
        )}
      </div>

      {/* Total XP */}
      <div style={{ textAlign: 'right', flexShrink: 0 }}>
        <p style={{
          fontFamily: 'var(--font-heading)',
          fontSize: '22px',
          fontWeight: 800,
          color: current.color,
          lineHeight: 1,
          letterSpacing: '-0.01em',
        }}>
          {totalXP.toLocaleString()}
        </p>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: '11px', color: 'var(--text-muted)', marginTop: '3px' }}>
          total XP
        </p>
      </div>
    </div>
  )
}
