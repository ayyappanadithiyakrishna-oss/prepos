import type { LessonContent } from './lesson-content'
import { UNIT1_PART1 } from './content-unit1-part1'
import { UNIT1_PART2 } from './content-unit1-part2'
import { UNIT1_PART3 } from './content-unit1-part3'

export const UNIT1_CONTENT: Record<string, LessonContent> = {
  ...UNIT1_PART1,
  ...UNIT1_PART2,
  ...UNIT1_PART3,
}
