interface Topic {
  id: number
  name: string
  subject: 'ap_precalc' | 'sat_math'
  mastery_pct: number
}

interface TopicGridProps {
  topics: Topic[]
}

export default function TopicGrid({ topics }: TopicGridProps) {
  return (
    <div
      className="rounded-2xl p-6"
      style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}
    >
      <h2 className="text-base font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
        Mastery Overview
      </h2>
      <div className="grid grid-cols-2 gap-3">
        {topics.map((topic) => {
          const isAP = topic.subject === 'ap_precalc'
          return (
            <div
              key={topic.id}
              className="flex flex-col gap-2 p-4 rounded-xl"
              style={{
                background: 'var(--bg-elevated)',
                border: '1px solid var(--border)',
              }}
            >
              <div className="flex items-center justify-between gap-2">
                <span
                  className="text-sm font-medium truncate"
                  style={{ color: 'var(--text-primary)' }}
                >
                  {topic.name}
                </span>
                <span
                  className="text-[10px] font-bold px-1.5 py-0.5 rounded flex-shrink-0"
                  style={{
                    background: isAP ? 'rgba(28, 176, 246, 0.15)' : 'rgba(88, 204, 2, 0.12)',
                    color: isAP ? 'var(--blue)' : 'var(--green)',
                  }}
                >
                  {isAP ? 'AP' : 'SAT'}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div
                  className="flex-1 h-1.5 rounded-full overflow-hidden"
                  style={{ background: 'var(--border)' }}
                >
                  <div
                    className="h-full rounded-full transition-all duration-500"
                    style={{
                      width: `${topic.mastery_pct}%`,
                      background: isAP ? 'var(--blue)' : 'var(--green)',
                    }}
                  />
                </div>
                <span
                  className="text-xs font-medium w-8 text-right flex-shrink-0"
                  style={{ color: 'var(--text-muted)' }}
                >
                  {Math.round(topic.mastery_pct)}%
                </span>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
