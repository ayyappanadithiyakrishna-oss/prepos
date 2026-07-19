import type { Band } from './mastery-model'

// Canonical order of the authored Algebra sub-skills (exact DB sub_skill
// strings). This is the study-path spine for the SAT track: earlier skills
// gate later ones.
export const SAT_ALGEBRA_ORDER: string[] = [
  'Linear equations in one variable',
  'Systems of two linear equations',
  'Linear functions (slope and intercept in context)',
  'Linear equations in two variables',
  'Linear inequalities in one and two variables',
  'Absolute value equations and inequalities',
]

// Short display labels for the dense study-path list.
export const SAT_SKILL_LABEL: Record<string, string> = {
  'Linear equations in one variable': 'Linear equations — one variable',
  'Systems of two linear equations': 'Systems of two linear equations',
  'Linear functions (slope and intercept in context)': 'Linear functions',
  'Linear equations in two variables': 'Linear equations — two variables',
  'Linear inequalities in one and two variables': 'Linear inequalities',
  'Absolute value equations and inequalities': 'Absolute value',
}

// Domains with no authored verified content yet — shown locked, honestly.
export const SAT_LOCKED_DOMAINS: { name: string; note: string }[] = [
  { name: 'Advanced Math', note: 'Content in progress — finish Algebra first' },
  { name: 'Problem-Solving & Data', note: 'Content in progress' },
  { name: 'Geometry & Trig', note: 'Content in progress — high priority for you' },
]

// The next difficulty band to practice for a sub-skill, given the bands the
// student has already answered correctly. Never serves Easy once Easy is done.
export function nextBand(bandsCorrect: Band[]): Band {
  if (!bandsCorrect.includes('Easy')) return 'Easy'
  if (!bandsCorrect.includes('Medium')) return 'Medium'
  return 'Hard'
}
