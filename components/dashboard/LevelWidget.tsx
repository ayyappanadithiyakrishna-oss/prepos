'use client'
import { getLevelInfo } from '@/lib/xp'
import { Star } from 'lucide-react'
import { motion } from 'framer-motion'

export default function LevelWidget({ totalXP }: { totalXP: number }) {
  const info = getLevelInfo(totalXP)
  return (
    <div
      className="rounded-2xl p-5 flex flex-col gap-3"
      style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Star size={16} color="var(--gold)" />
          <span className="text-sm font-bold" style={{ color: 'var(--text-primary)' }}>
            Level {info.current.level} — {info.current.name}
          </span>
        </div>
        <span className="text-xs font-medium" style={{ color: 'var(--text-muted)' }}>
          {info.totalXP} XP
        </span>
      </div>
      <div className="h-2 rounded-full overflow-hidden" style={{ background: 'var(--border)' }}>
        <motion.div
          className="h-full rounded-full"
          style={{ background: 'linear-gradient(90deg, var(--green), var(--blue))' }}
          initial={{ width: 0 }}
          animate={{ width: `${info.progress}%` }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
        />
      </div>
      {info.next && (
        <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
          {info.next.xpRequired - info.totalXP} XP to {info.next.name}
        </p>
      )}
    </div>
  )
}
