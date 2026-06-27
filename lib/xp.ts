export const XP_LEVELS = [
  { level: 1, name: 'Novice', xpRequired: 0 },
  { level: 2, name: 'Apprentice', xpRequired: 100 },
  { level: 3, name: 'Student', xpRequired: 300 },
  { level: 4, name: 'Scholar', xpRequired: 600 },
  { level: 5, name: 'Expert', xpRequired: 1000 },
  { level: 6, name: 'Master', xpRequired: 1500 },
  { level: 7, name: 'Champion', xpRequired: 2200 },
  { level: 8, name: 'Legend', xpRequired: 3000 },
]

export function getLevelInfo(totalXP: number) {
  let current = XP_LEVELS[0]
  let next: (typeof XP_LEVELS)[number] | null = XP_LEVELS[1]
  for (let i = XP_LEVELS.length - 1; i >= 0; i--) {
    if (totalXP >= XP_LEVELS[i].xpRequired) {
      current = XP_LEVELS[i]
      next = XP_LEVELS[i + 1] ?? null
      break
    }
  }
  const progress = next
    ? ((totalXP - current.xpRequired) / (next.xpRequired - current.xpRequired)) * 100
    : 100
  return { current, next, progress: Math.round(progress), totalXP }
}

export function xpForCorrect(combo: number): number {
  if (combo >= 5) return 30
  if (combo >= 3) return 20
  if (combo >= 2) return 15
  return 10
}
