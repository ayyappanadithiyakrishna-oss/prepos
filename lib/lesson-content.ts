export interface LessonContent {
  essentialQuestion?: string

  // ── Three expert perspectives ───────────────────────────────────────────
  apBoardNote?: string      // AP College Board Director: CED alignment, exam focus
  teacherNote?: string      // AP Teacher: prerequisites, misconceptions, scaffolding
  studentVoice?: string     // Student: plain-English aha-moment explanation

  // ── Deep narrative teaching (the "actual lesson") ──────────────────────
  narration?: string[]      // Conversational paragraphs that build understanding WHY before HOW
  priorKnowledge?: string[] // What student must already know — displayed as prereq checklist
  connections?: string[]    // Links to past/future lessons and real-world context

  // ── Structured concept summary (short bullets after narration) ─────────
  concepts?: string[]
  keyFormula?: string
  keyTerms?: Array<{ term: string; definition: string }>

  // ── Worked examples (support two for escalating difficulty) ────────────
  workedExample?: {
    problem: string
    steps: string[]
    answer: string
  }
  workedExample2?: {
    problem: string
    steps: string[]
    answer: string
  }

  // ── Supporting content ──────────────────────────────────────────────────
  table?: {
    caption: string
    headers: string[]
    rows: string[][]
  }
  commonMistakes?: string[]
  tip?: string
  graphType?: string
  visualType?: string

  // ── Practice questions (10-15 per lesson, no diagram-dependent answers) ─
  questions?: Array<{
    question_text: string
    difficulty?: 'Easy' | 'Medium' | 'Hard'
    choices: string[]
    answer_text: string
    explanation: string
  }>
}

import { UNIT1_CONTENT } from './content-unit1'
import { UNIT2_CONTENT } from './content-unit2'
import { UNIT3A_CONTENT } from './content-unit3a'
import { UNIT3B_CONTENT } from './content-unit3b'
import { SAT_UNIT5_CONTENT } from './content-sat-unit5'
import { SAT_UNIT6_CONTENT } from './content-sat-unit6'
import { SAT_UNIT7_CONTENT } from './content-sat-unit7'
import { SAT_UNIT8_CONTENT } from './content-sat-unit8'

export const LESSON_CONTENT: Record<string, LessonContent> = {
  ...UNIT1_CONTENT,
  ...UNIT2_CONTENT,
  ...UNIT3A_CONTENT,
  ...UNIT3B_CONTENT,
  ...SAT_UNIT5_CONTENT,
  ...SAT_UNIT6_CONTENT,
  ...SAT_UNIT7_CONTENT,
  ...SAT_UNIT8_CONTENT,
}
