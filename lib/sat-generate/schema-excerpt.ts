// A concrete, correct VerifiedProblem the model must mirror exactly. Using the
// real authored shape (not an idealized one) keeps generated questions
// storage-compatible and verifiable by lib/sat-generate/verify.ts.
export const VERIFIED_SCHEMA_EXCERPT = `[
  {
    "id": "alg-lov-e7",
    "domain": "Algebra",
    "subSkill": "Linear equations in one variable",
    "difficulty": "Easy",
    "type": "mc",
    "scoreBand": "470-540",
    "question": "A parking garage charges a $3 flat entry fee plus $2 for each hour parked. Marcus paid $11 in total. For how many hours h did he park? (The situation is modeled by 3 + 2h = 11.)",
    "choices": [
      { "label": "A", "text": "3", "value": "3", "trap": "divided_total_by_hourly_ignored_entry_fee" },
      { "label": "B", "text": "4", "value": "4" },
      { "label": "C", "text": "5.5", "value": "11/2", "trap": "divided_total_by_hourly_before_removing_fee" },
      { "label": "D", "text": "7", "value": "7", "trap": "added_entry_fee_instead_of_subtracting" }
    ],
    "answer": "B",
    "explanation": ["Set total equal to 11: 3 + 2h = 11.", "Subtract the entry fee: 2h = 8.", "Divide by the hourly rate: h = 4."],
    "calculatorStrategy": "solve_algebraically — a one-step linear equation is faster by hand than graphing.",
    "check": { "kind": "solve_linear", "expression": "3 + 2*h - 11", "variable": "h" }
  },
  {
    "id": "alg-lov-m4",
    "domain": "Algebra",
    "subSkill": "Linear equations in one variable",
    "difficulty": "Medium",
    "type": "spr",
    "scoreBand": "540-600",
    "question": "A phone plan costs $15 per month plus $0.10 per text. In a month where the bill was $32, how many texts were sent? (15 + 0.10t = 32.)",
    "answer": "170",
    "explanation": ["15 + 0.10t = 32.", "0.10t = 17.", "t = 170."],
    "calculatorStrategy": "use_desmos_table — enter y = 15 + 0.10x and read where y = 32 if unsure by hand.",
    "check": { "kind": "solve_linear", "expression": "15 + 0.10*t - 32", "variable": "t" }
  }
]`
