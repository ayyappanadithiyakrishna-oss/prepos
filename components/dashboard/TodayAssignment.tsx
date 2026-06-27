'use client'

import { useRouter } from 'next/navigation'

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

export default function TodayAssignment() {
  const router = useRouter()

  return (
    <div
      className="rounded-2xl p-6 flex flex-col gap-5"
      style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}
    >
      <h2 className="text-base font-semibold" style={{ color: 'var(--text-primary)' }}>
        Today&apos;s Assignment
      </h2>

      <div className="flex flex-col gap-3">
        {items.map(({ label, count, color }) => (
          <div key={label} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span
                className="w-2 h-2 rounded-full flex-shrink-0"
                style={{ background: color }}
              />
              <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                {label}
              </span>
            </div>
            <span className="text-sm font-bold" style={{ color: 'var(--text-primary)' }}>
              {count} <span style={{ color: 'var(--text-muted)', fontWeight: 400 }}>questions</span>
            </span>
          </div>
        ))}
      </div>

      <div
        className="h-px"
        style={{ background: 'var(--border)' }}
      />

      <div className="flex items-center justify-between">
        <span className="text-sm" style={{ color: 'var(--text-muted)' }}>
          Total: <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>55 questions</span>
        </span>
        <button
          onClick={() => router.push('/practice')}
          className="px-5 py-2.5 rounded-xl text-sm font-bold transition-all active:scale-95"
          style={{
            background: 'var(--green)',
            color: '#0a0a0f',
          }}
        >
          Start Today&apos;s Practice →
        </button>
      </div>
    </div>
  )
}
