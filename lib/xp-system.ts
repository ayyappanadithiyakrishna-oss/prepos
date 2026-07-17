export interface LevelInfo {
  level: number
  name: string
  emoji: string        // used in gamified UI only (not as an icon)
  color: string        // hex accent color for this level
  glowColor: string    // rgba for glow effects
  minXP: number
  maxXP: number        // Infinity for max level
}

export const LEVELS: LevelInfo[] = [
  { level: 1,  name: 'Math Seed',       emoji: '🌱', color: '#6b7280', glowColor: 'rgba(107,114,128,0.3)', minXP: 0,     maxXP: 149    },
  { level: 2,  name: 'Number Rookie',   emoji: '🔢', color: '#22c55e', glowColor: 'rgba(34,197,94,0.3)',   minXP: 150,   maxXP: 399    },
  { level: 3,  name: 'Variable Hunter', emoji: '🎯', color: '#3b82f6', glowColor: 'rgba(59,130,246,0.3)',  minXP: 400,   maxXP: 799    },
  { level: 4,  name: 'Equation Slayer', emoji: '⚡', color: '#8b5cf6', glowColor: 'rgba(139,92,246,0.3)',  minXP: 800,   maxXP: 1499   },
  { level: 5,  name: 'Function Wizard', emoji: '🧙', color: '#f59e0b', glowColor: 'rgba(245,158,11,0.3)',  minXP: 1500,  maxXP: 2999   },
  { level: 6,  name: 'Graph Master',    emoji: '📈', color: '#ef4444', glowColor: 'rgba(239,68,68,0.3)',   minXP: 3000,  maxXP: 5499   },
  { level: 7,  name: 'Trig Titan',      emoji: '🔺', color: '#ec4899', glowColor: 'rgba(236,72,153,0.3)',  minXP: 5500,  maxXP: 8999   },
  { level: 8,  name: 'AP Champion',     emoji: '🏆', color: '#f97316', glowColor: 'rgba(249,115,22,0.3)',  minXP: 9000,  maxXP: 13999  },
  { level: 9,  name: 'SAT Conqueror',   emoji: '👑', color: '#ffd700', glowColor: 'rgba(255,215,0,0.3)',   minXP: 14000, maxXP: 19999  },
  { level: 10, name: 'PrepOS Legend',   emoji: '🌟', color: '#ff6ef7', glowColor: 'rgba(255,110,247,0.3)', minXP: 20000, maxXP: Infinity },
]

export function getLevelInfo(totalXP: number): {
  current: LevelInfo
  next: LevelInfo | null
  xpIntoLevel: number
  xpForLevel: number
  progress: number   // 0–1
  xpToNext: number
} {
  const current = LEVELS.findLast(l => totalXP >= l.minXP) ?? LEVELS[0]
  const nextIdx = LEVELS.indexOf(current) + 1
  const next = nextIdx < LEVELS.length ? LEVELS[nextIdx] : null

  const xpIntoLevel = totalXP - current.minXP
  const xpForLevel = current.maxXP === Infinity ? 5000 : current.maxXP - current.minXP + 1
  const progress = Math.min(xpIntoLevel / xpForLevel, 1)
  const xpToNext = next ? next.minXP - totalXP : 0

  return { current, next, xpIntoLevel, xpForLevel, progress, xpToNext }
}

// XP rewards for different actions
export const XP_REWARDS = {
  correctEasy: 10,
  correctMedium: 20,
  correctHard: 35,
  lessonComplete: 100,
  dailyStreak: 50,
  perfectLesson: 200,    // 100% on a lesson
  satTestComplete: 500,
  aiDrillComplete: 75,
}
