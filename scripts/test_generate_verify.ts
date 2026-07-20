// Proves the runtime verifier: self-tests every check kind, then confirms it
// ACCEPTS a correct question and REJECTS a wrong answer key / missing trap.
//   node scripts/test_generate_verify.ts
import { selftest, verifyProblem } from '../lib/sat-generate/verify.ts'
import type { VerifiedProblem } from '../lib/sat-practice/verified-schema.ts'

let bad = 0
const fails = selftest()
if (fails.length) { bad++; console.log('❌ selftest failures:\n  ' + fails.join('\n  ')) }
else console.log('✓ selftest: all check kinds compute correctly')

const good: VerifiedProblem = {
  id: 'test-good-1', domain: 'Algebra', subSkill: 'Linear equations in one variable', difficulty: 'Easy',
  type: 'mc', scoreBand: '470-540',
  question: 'A parking garage charges $3 to enter plus $2 per hour. If the total was $11, for how many hours h did the car stay? 3 + 2h = 11.',
  choices: [
    { label: 'A', text: '3', value: '3', trap: 'divided_11_by_3_ignored_structure' },
    { label: 'B', text: '4', value: '4' },
    { label: 'C', text: '5.5', value: '11/2', trap: 'forgot_to_subtract_entry_fee' },
    { label: 'D', text: '7', value: '7', trap: 'added_entry_fee_instead_of_subtracting' },
  ],
  answer: 'B', explanation: ['3 + 2h = 11', '2h = 8', 'h = 4'],
  calculatorStrategy: 'solve by hand — one-step linear.',
  check: { kind: 'solve_linear', expression: '3 + 2*h - 11', variable: 'h' },
}
const gErr = verifyProblem(good)
if (gErr.length) { bad++; console.log('❌ good question REJECTED (should pass):\n  ' + gErr.join('\n  ')) }
else console.log('✓ correct question accepted')

// Wrong key: computed answer is B(4) but key says C.
const wrongKey: VerifiedProblem = { ...good, id: 'test-wrongkey', answer: 'C' }
const wkErr = verifyProblem(wrongKey)
if (!wkErr.length) { bad++; console.log('❌ wrong-key question ACCEPTED (should be rejected!)') }
else console.log('✓ wrong answer key rejected: ' + wkErr[0])

// Missing trap on a distractor.
const noTrap: VerifiedProblem = { ...good, id: 'test-notrap', choices: good.choices!.map((c) => (c.label === 'D' ? { ...c, trap: undefined } : c)) }
const ntErr = verifyProblem(noTrap)
if (!ntErr.length) { bad++; console.log('❌ missing-trap distractor ACCEPTED (should be rejected!)') }
else console.log('✓ missing-trap distractor rejected: ' + ntErr[0])

// Correct choice carrying a trap.
const trapOnCorrect: VerifiedProblem = { ...good, id: 'test-trapcorrect', choices: good.choices!.map((c) => (c.label === 'B' ? { ...c, trap: 'oops' } : c)) }
const tcErr = verifyProblem(trapOnCorrect)
if (!tcErr.length) { bad++; console.log('❌ trap-on-correct ACCEPTED (should be rejected!)') }
else console.log('✓ trap-on-correct rejected: ' + tcErr[0])

console.log(bad === 0 ? '\n✅ VERIFIER GATE PROVEN' : `\n❌ ${bad} gate failure(s)`)
process.exit(bad === 0 ? 0 : 1)
