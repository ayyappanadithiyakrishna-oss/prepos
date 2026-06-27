interface StatsCardProps {
  emoji: string
  value: string | number
  label: string
  sublabel?: string
}

export default function StatsCard({ emoji, value, label, sublabel }: StatsCardProps) {
  return (
    <div
      className="flex flex-col gap-3 p-5 rounded-2xl"
      style={{
        background: 'var(--bg-card)',
        border: '1px solid var(--border)',
      }}
    >
      <span className="text-2xl">{emoji}</span>
      <div>
        <p
          className="text-3xl font-bold tracking-tight"
          style={{ color: 'var(--text-primary)' }}
        >
          {value}
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
    </div>
  )
}
