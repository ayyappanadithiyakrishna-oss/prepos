export type SATDomain =
  | 'Algebra'
  | 'Advanced Math'
  | 'Problem Solving & Data Analysis'
  | 'Geometry & Trigonometry'

export type SATDifficulty = 'Easy' | 'Medium' | 'Hard'
export type SATQuestionType = 'mc' | 'spr'  // multiple-choice or student-produced response

export interface SATQuestion {
  id: string
  module: 1 | 2
  domain: SATDomain
  skill: string
  difficulty: SATDifficulty
  type: SATQuestionType
  context?: string        // optional data table / graph description in text
  question: string
  choices?: [string, string, string, string]  // only for mc
  answer: string          // 'A'|'B'|'C'|'D' for mc, numeric string for spr (e.g. '7' or '3/4')
  explanation: string     // step-by-step solution
  strategy?: string       // optional test-taking tip
}

export interface SATTest {
  id: string
  name: string
  module1: SATQuestion[]  // 22 questions
  module2Hard: SATQuestion[]  // 22 questions (adaptive hard path — default)
  module2Easy: SATQuestion[]  // 22 questions (adaptive easy path)
}

export interface SATTestResult {
  testId: string
  module1Answers: Record<string, string>
  module2Answers: Record<string, string>
  module1Score: number   // raw, out of 22
  module2Score: number   // raw, out of 22
  totalRaw: number       // out of 44
  scaledScore: number    // 200-800
  domainScores: Record<SATDomain, { correct: number; total: number }>
  completedAt: string
  tookHardModule2: boolean
}

// Score table: raw correct (0-44) → scaled score (200-800)
// Based on approximate College Board conversion curve
export const RAW_TO_SCALED: Record<number, number> = {
  44: 800, 43: 790, 42: 780, 41: 770, 40: 760,
  39: 750, 38: 740, 37: 730, 36: 720, 35: 710,
  34: 700, 33: 690, 32: 680, 31: 670, 30: 660,
  29: 650, 28: 640, 27: 630, 26: 620, 25: 610,
  24: 600, 23: 590, 22: 580, 21: 560, 20: 540,
  19: 530, 18: 510, 17: 490, 16: 470, 15: 450,
  14: 430, 13: 420, 12: 410, 11: 400, 10: 390,
   9: 380,  8: 370,  7: 360,  6: 350,  5: 340,
   4: 320,  3: 300,  2: 280,  1: 250,  0: 200,
}

export function calculateScaledScore(raw: number): number {
  return RAW_TO_SCALED[Math.min(44, Math.max(0, raw))] ?? 200
}

// Module 2 routing: if Module 1 raw >= 14, take hard module; else easy
export function shouldTakeHardModule2(module1Raw: number): boolean {
  return module1Raw >= 14
}

// Domain breakdown display names
export const DOMAIN_COLORS: Record<SATDomain, string> = {
  'Algebra': '#ef4444',
  'Advanced Math': '#f97316',
  'Problem Solving & Data Analysis': '#f43f5e',
  'Geometry & Trigonometry': '#fb923c',
}

export const DOMAIN_ABBREVIATIONS: Record<SATDomain, string> = {
  'Algebra': 'ALG',
  'Advanced Math': 'ADV',
  'Problem Solving & Data Analysis': 'PS&DA',
  'Geometry & Trigonometry': 'GEO',
}

// SAT formula reference sheet (shown during test)
export const SAT_REFERENCE_FORMULAS = [
  { name: 'Circle Area', formula: 'A = πr²' },
  { name: 'Circle Circumference', formula: 'C = 2πr' },
  { name: 'Rectangle Area', formula: 'A = lw' },
  { name: 'Triangle Area', formula: 'A = ½bh' },
  { name: 'Pythagorean Theorem', formula: 'a² + b² = c²' },
  { name: '30-60-90 Triangle', formula: 'sides: x, x√3, 2x' },
  { name: '45-45-90 Triangle', formula: 'sides: x, x, x√2' },
  { name: 'Cylinder Volume', formula: 'V = πr²h' },
  { name: 'Cone Volume', formula: 'V = ⅓πr²h' },
  { name: 'Sphere Volume', formula: 'V = (4/3)πr³' },
  { name: 'Pyramid Volume', formula: 'V = ⅓lwh' },
  { name: 'Quadratic Formula', formula: 'x = (-b ± √(b²-4ac)) / 2a' },
]
