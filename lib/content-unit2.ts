import type { LessonContent } from './lesson-content'
import { UNIT2_PART1 } from './content-unit2-part1'
import { UNIT2_PART2 } from './content-unit2-part2'
import { UNIT2_PART3 } from './content-unit2-part3'

export const UNIT2_CONTENT: Record<string, LessonContent> = {
  ...UNIT2_PART1,
  ...UNIT2_PART2,
  ...UNIT2_PART3,
}
