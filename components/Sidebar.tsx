'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  LayoutDashboard,
  BookOpen,
  AlertCircle,
  Target,
  Activity,
  BarChart2,
  RefreshCw,
  Flame,
  GraduationCap,
  ClipboardList,
} from 'lucide-react'
import Logo from './Logo'
import { getLevelInfo } from '@/lib/xp-system'

const navItems = [
  { label: 'Dashboard',      icon: LayoutDashboard, href: '/' },
  { label: 'Daily Practice', icon: BookOpen,         href: '/practice' },
  { label: 'AP Lessons',     icon: GraduationCap,   href: '/lessons' },
  { label: 'SAT Practice',   icon: ClipboardList,   href: '/sat' },
  { label: 'SAT Lessons',    icon: BookOpen,         href: '/sat/lessons' },
  { label: 'Error Log',      icon: AlertCircle,      href: '/errors' },
  { label: 'Mastery',        icon: Target,           href: '/mastery' },
  { label: 'Diagnostics',    icon: Activity,         href: '/diagnostics' },
  { label: 'Statistics',     icon: BarChart2,        href: '/stats' },
  { label: 'Review Mode',    icon: RefreshCw,        href: '/review' },
]

const mobileNavItems = [
  { label: 'Dashboard',    icon: LayoutDashboard, href: '/' },
  { label: 'AP Lessons',   icon: GraduationCap,   href: '/lessons' },
  { label: 'SAT Practice', icon: ClipboardList,   href: '/sat' },
  { label: 'Error Log',    icon: AlertCircle,      href: '/errors' },
  { label: 'Review',       icon: RefreshCw,        href: '/review' },
]

export default function Sidebar() {
  const pathname = usePathname()
  const [totalXP, setTotalXP] = useState(0)
  const [streak, setStreak] = useState(0)
  useEffect(() => {
    fetch('/api/dashboard')
      .then(r => r.json())
      .then((d: { total_xp?: number; streak?: number }) => {
        if (d.total_xp) setTotalXP(d.total_xp)
        if (d.streak !== undefined) setStreak(d.streak)
      })
      .catch(() => {})
  }, [])

  return (
    <>
    <aside
      className="sidebar-desktop fixed left-0 top-0 h-screen w-[220px] flex flex-col z-40"
      style={{
        background: 'linear-gradient(180deg, #111118 0%, #0d0d15 100%)',
        borderRight: '1px solid var(--border)',
      }}
    >
      {/* Logo */}
      <div className="px-5 py-5" style={{ borderBottom: '1px solid var(--border)' }}>
        <div className="flex items-center gap-2.5">
          <Logo size={28} />
          <span
            style={{
              fontFamily: 'var(--font-heading, Space Grotesk, sans-serif)',
              fontWeight: 700,
              fontSize: '17px',
              color: 'var(--text-primary)',
            }}
          >
            Prep<span style={{ color: 'var(--primary-theme)' }}>OS</span>
          </span>
        </div>
        <p
          className="mt-1.5"
          style={{
            fontSize: '9px',
            letterSpacing: '0.04em',
            color: 'var(--text-muted)',
            paddingLeft: '38px',
          }}
        >
          AP Precalc · SAT Math
        </p>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-5">
        <div
          className="px-3 mb-2"
          style={{
            fontSize: '9px',
            fontWeight: 600,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--text-muted)',
          }}
        >
          Learn
        </div>

        <div className="space-y-0.5">
          {navItems.map(({ label, icon: Icon, href }) => {
            const active = pathname === href
            return (
              <motion.div key={href} whileHover={{ x: 2 }} transition={{ duration: 0.15 }}>
                <Link
                  href={href}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm relative cursor-pointer"
                  style={{
                    fontFamily: 'var(--font-body, DM Sans, sans-serif)',
                    fontWeight: 500,
                    color: active ? 'var(--primary-theme)' : 'var(--text-secondary)',
                    background: active ? 'var(--primary-theme-dim)' : 'transparent',
                    transition: 'color 0.15s ease, background 0.15s ease',
                  }}
                  onMouseEnter={e => {
                    if (!active) {
                      const el = e.currentTarget
                      el.style.color = 'var(--text-primary)'
                      el.style.background = 'rgba(255,255,255,0.04)'
                    }
                  }}
                  onMouseLeave={e => {
                    if (!active) {
                      const el = e.currentTarget
                      el.style.color = 'var(--text-secondary)'
                      el.style.background = 'transparent'
                    }
                  }}
                >
                  {active && (
                    <span
                      className="absolute left-0 top-1/2 -translate-y-1/2 rounded-r"
                      style={{
                        width: '3px',
                        height: '20px',
                        background: 'var(--primary-theme)',
                      }}
                    />
                  )}
                  <Icon size={18} strokeWidth={active ? 2.5 : 2} />
                  {label}
                </Link>
              </motion.div>
            )
          })}
        </div>
      </nav>

      {/* XP / Level */}
      {(() => {
        const { current, next, progress, xpToNext, xpIntoLevel, xpForLevel } = getLevelInfo(totalXP)
        return (
          <div className="px-4 py-3" style={{ borderTop: '1px solid var(--border)' }}>
            {/* Level badge row */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              {/* Emoji badge circle */}
              <div style={{
                width: 28, height: 28, borderRadius: '50%',
                background: `${current.glowColor}`,
                border: `1.5px solid ${current.color}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '14px', flexShrink: 0,
                boxShadow: `0 0 8px ${current.glowColor}`,
              }}>
                {current.emoji}
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                  <span style={{
                    fontFamily: 'var(--font-heading, Space Grotesk, sans-serif)',
                    fontSize: '12px', fontWeight: 700, color: current.color,
                    whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
                  }}>
                    {current.name}
                  </span>
                  <span style={{ fontSize: '10px', color: 'var(--text-muted)', flexShrink: 0, marginLeft: '4px' }}>
                    Lv.{current.level}
                  </span>
                </div>
              </div>
            </div>

            {/* XP bar */}
            <div style={{ position: 'relative', height: '5px', borderRadius: '3px', background: 'var(--border)', overflow: 'hidden', marginBottom: '5px' }}>
              <motion.div
                style={{
                  position: 'absolute', top: 0, left: 0, height: '100%', borderRadius: '3px',
                  background: `linear-gradient(90deg, ${current.color}, ${current.color}cc)`,
                  boxShadow: `0 0 6px ${current.glowColor}`,
                  originX: 0,
                }}
                animate={{ scaleX: progress }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
              />
            </div>

            {/* XP numbers */}
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ fontSize: '10px', color: 'var(--text-muted)' }}>
                {xpIntoLevel.toLocaleString()} / {xpForLevel === 5000 ? '∞' : xpForLevel.toLocaleString()} XP
              </span>
              {next && (
                <span style={{ fontSize: '10px', color: 'var(--text-muted)' }}>
                  {xpToNext} → {next.emoji}
                </span>
              )}
              {!next && (
                <span style={{ fontSize: '10px', color: current.color, fontWeight: 600 }}>MAX</span>
              )}
            </div>
          </div>
        )
      })()}

      {/* Streak */}
      <div
        className="px-4 py-3 flex items-center gap-2"
        style={{ borderTop: '1px solid var(--border)' }}
      >
        <Flame
          size={15}
          color="var(--orange)"
          strokeWidth={2}
          className="animate-streak-fire"
        />
        <span
          style={{
            fontSize: '12px',
            fontWeight: 600,
            color: 'var(--gold)',
            fontFamily: 'var(--font-heading, Space Grotesk, sans-serif)',
          }}
        >
          {streak}
        </span>
        <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>day streak</span>
      </div>

      {/* Footer */}
      <div className="px-4 py-3" style={{ borderTop: '1px solid var(--border)' }}>
        <p style={{ fontSize: '10px', color: 'var(--text-muted)', lineHeight: 1.5 }}>
          Made by{' '}
          <span style={{ color: 'var(--primary-theme)', fontWeight: 500 }}>
            Adithiyakrishna Ayyappan
          </span>
        </p>
      </div>
    </aside>

    {/* Mobile Bottom Nav */}
    <nav
      className="mobile-bottom-nav fixed bottom-0 left-0 right-0 z-50 items-center justify-around"
      style={{
        height: '64px',
        background: '#111118',
        borderTop: '1px solid #2a2a38',
      }}
    >
      {mobileNavItems.map(({ label, icon: Icon, href }) => {
        const active = pathname === href
        return (
          <Link
            key={href}
            href={href}
            className="flex flex-col items-center justify-center gap-1 flex-1 h-full"
            style={{
              color: active ? 'var(--primary-theme)' : 'var(--text-muted)',
              transition: 'color 0.15s ease',
              fontFamily: 'var(--font-body, DM Sans, sans-serif)',
            }}
          >
            <Icon size={20} strokeWidth={active ? 2.5 : 1.8} />
            <span style={{ fontSize: '9px', fontWeight: active ? 700 : 500, letterSpacing: '0.03em' }}>
              {label}
            </span>
          </Link>
        )
      })}
    </nav>
    </>
  )
}
