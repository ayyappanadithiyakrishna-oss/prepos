'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
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
} from 'lucide-react'
import Logo from './Logo'

const navItems = [
  { label: 'Dashboard', icon: LayoutDashboard, href: '/' },
  { label: 'Daily Practice', icon: BookOpen, href: '/practice' },
  { label: 'Error Log', icon: AlertCircle, href: '/errors' },
  { label: 'Mastery', icon: Target, href: '/mastery' },
  { label: 'Diagnostics', icon: Activity, href: '/diagnostics' },
  { label: 'Statistics', icon: BarChart2, href: '/stats' },
  { label: 'Review Mode', icon: RefreshCw, href: '/review' },
]

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <aside
      className="fixed left-0 top-0 h-screen w-[220px] flex flex-col z-40"
      style={{
        background: 'var(--bg-surface)',
        borderRight: '1px solid var(--border)',
      }}
    >
      <div className="px-5 py-6" style={{ borderBottom: '1px solid var(--border)' }}>
        <div className="flex items-center gap-2.5">
          <Logo size={28} />
          <span
            className="text-base font-bold tracking-tight"
            style={{ color: 'var(--text-primary)' }}
          >
            Prep<span style={{ color: 'var(--green)' }}>OS</span>
          </span>
        </div>
      </div>

      <nav className="flex-1 px-3 py-4 space-y-1">
        {navItems.map(({ label, icon: Icon, href }) => {
          const active = pathname === href
          return (
            <motion.div key={href} whileHover={{ x: 2 }} transition={{ duration: 0.15 }}>
              <Link
                href={href}
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-150 relative"
                style={{
                  color: active ? 'var(--green)' : 'var(--text-secondary)',
                  background: active ? 'rgba(88, 204, 2, 0.08)' : 'transparent',
                }}
              >
                {active && (
                  <span
                    className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-5 rounded-r"
                    style={{ background: 'var(--green)' }}
                  />
                )}
                <Icon size={18} strokeWidth={active ? 2.5 : 2} />
                {label}
              </Link>
            </motion.div>
          )
        })}
      </nav>

      <div
        className="px-5 py-4 flex items-center gap-2"
        style={{ borderTop: '1px solid var(--border)' }}
      >
        <Flame size={16} color="#f97316" />
        <span className="text-sm font-semibold" style={{ color: 'var(--gold)' }}>
          0
        </span>
        <span className="text-xs" style={{ color: 'var(--text-muted)' }}>
          day streak
        </span>
      </div>
    </aside>
  )
}
