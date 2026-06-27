'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

function AnimatedNumber({ target }: { target: number }) {
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (target === 0) {
      setDisplay(0)
      return
    }
    const duration = 800
    const start = Date.now()
    let rafId: number
    const tick = () => {
      const elapsed = Date.now() - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3) // ease-out cubic
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
}

export default function StatsCard({ icon, value, label, sublabel }: StatsCardProps) {
  return (
    <motion.div
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col gap-3 p-5 rounded-2xl"
      style={{
        background: 'var(--bg-card)',
        border: '1px solid var(--border)',
      }}
    >
      <div
        className="w-9 h-9 rounded-xl flex items-center justify-center"
        style={{ background: 'var(--bg-elevated)' }}
      >
        {icon}
      </div>
      <div>
        <p
          className="text-3xl font-bold tracking-tight"
          style={{ color: 'var(--text-primary)' }}
        >
          {typeof value === 'number' ? <AnimatedNumber target={value} /> : value}
        </p>
        <p className="text-sm font-medium mt-0.5" style={{ color: 'var(--text-secondary)' }}>
          {label}
        </p>
        {sublabel && (
          <p className="text-xs mt-0.5" style={{ color: 'var(--text-muted)' }}>
            {sublabel}
          </p>
        )}
      </div>
    </motion.div>
  )
}
