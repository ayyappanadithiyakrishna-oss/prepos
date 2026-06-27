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
  const radius = 54
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (pct / 100) * circumference
  const size = 140

  return (
    <div
      className="flex flex-col gap-4 p-6 rounded-2xl"
      style={{
        background: 'var(--bg-card)',
        border: '1px solid var(--border)',
      }}
    >
      <p className="text-sm font-semibold" style={{ color: 'var(--text-secondary)' }}>
        {title}
      </p>
      <div className="flex items-center gap-6">
        <div className="relative flex-shrink-0" style={{ width: size, height: size }}>
          <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
            <circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              fill="none"
              stroke="var(--border)"
              strokeWidth="10"
            />
            <circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              fill="none"
              stroke={accentColor}
              strokeWidth="10"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              transform={`rotate(-90 ${size / 2} ${size / 2})`}
              style={{ transition: 'stroke-dashoffset 0.6s ease' }}
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span
              className="text-2xl font-bold"
              style={{ color: 'var(--text-primary)' }}
            >
              {pct}%
            </span>
          </div>
        </div>
        <div>
          <p
            className="text-2xl font-bold"
            style={{ color: accentColor }}
          >
            {subtitle}
          </p>
          <p className="text-xs mt-1" style={{ color: 'var(--text-muted)' }}>
            estimated
          </p>
        </div>
      </div>
    </div>
  )
}
