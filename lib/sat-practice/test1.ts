import type { SATTest, SATQuestion } from './index'

// ─── MODULE 1 (22 questions, mixed Easy–Medium) ───────────────────────────────
// Algebra ×8 (Q1–Q8, 2 SPR), Advanced Math ×7 (Q9–Q15, 1 SPR),
// PS&DA ×4 (Q16–Q19, 1 SPR), Geometry ×3 (Q20–Q22)

const module1: SATQuestion[] = [
  // ── Algebra ──────────────────────────────────────────────────────────────
  {
    id: 't1m1q1',
    module: 1,
    domain: 'Algebra',
    skill: 'Linear equations in one variable',
    difficulty: 'Easy',
    type: 'mc',
    question: 'If 2x + 5 = 17, what is the value of x?',
    choices: ['4', '5', '6', '8'],
    answer: 'C',
    explanation:
      'Subtract 5 from both sides: 2x = 12. Divide both sides by 2: x = 6. The answer is C.',
    strategy: 'After solving, plug the answer back in to verify: 2(6) + 5 = 17. ✓',
  },
  {
    id: 't1m1q2',
    module: 1,
    domain: 'Algebra',
    skill: 'Linear functions',
    difficulty: 'Easy',
    type: 'mc',
    question:
      'The equation of a line is y = 3x − 7. What is the slope of this line?',
    choices: ['-7', '-3', '3', '7'],
    answer: 'C',
    explanation:
      'The equation is in slope-intercept form y = mx + b, where m is the slope and b is the y-intercept. Here m = 3, so the slope is 3. The answer is C.',
    strategy: 'In y = mx + b, the coefficient of x is always the slope.',
  },
  {
    id: 't1m1q3',
    module: 1,
    domain: 'Algebra',
    skill: 'Linear equations in one variable',
    difficulty: 'Easy',
    type: 'mc',
    question:
      'A store sells notebooks for $3 each. Maria spent exactly $27 on notebooks. How many notebooks did she buy?',
    choices: ['7', '8', '9', '10'],
    answer: 'C',
    explanation:
      'Let n = number of notebooks. The equation is 3n = 27. Dividing both sides by 3 gives n = 9. The answer is C.',
  },
  {
    id: 't1m1q4',
    module: 1,
    domain: 'Algebra',
    skill: 'Systems of two linear equations in two variables',
    difficulty: 'Medium',
    type: 'mc',
    question:
      'At a farmers market, apples cost $2 each and oranges cost $3 each. Carlos bought a total of 10 pieces of fruit and spent $24. How many apples did he buy?',
    choices: ['4', '5', '6', '7'],
    answer: 'C',
    explanation:
      'Let a = apples and o = oranges. The system is a + o = 10 and 2a + 3o = 24. From the first equation, o = 10 − a. Substituting: 2a + 3(10 − a) = 24 → 2a + 30 − 3a = 24 → −a = −6 → a = 6. The answer is C.',
    strategy: 'Set up two equations from the two conditions (count and cost), then use substitution.',
  },
  {
    id: 't1m1q5',
    module: 1,
    domain: 'Algebra',
    skill: 'Systems of two linear equations in two variables',
    difficulty: 'Medium',
    type: 'spr',
    question:
      'In a system of two equations, x + y = 10 and x − y = 4. What is the value of x? Enter your answer as an integer.',
    answer: '7',
    explanation:
      'Add the two equations: (x + y) + (x − y) = 10 + 4 → 2x = 14 → x = 7. Verify: if x = 7 then y = 3, and 7 − 3 = 4. ✓',
    strategy: 'Adding equations to eliminate y (elimination method) is faster than substitution here.',
  },
  {
    id: 't1m1q6',
    module: 1,
    domain: 'Algebra',
    skill: 'Linear inequalities in one variable',
    difficulty: 'Medium',
    type: 'mc',
    question: 'Which of the following describes all values of x that satisfy 3x − 4 > 11?',
    choices: ['x > 3', 'x > 4', 'x > 5', 'x > 7'],
    answer: 'C',
    explanation:
      'Add 4 to both sides: 3x > 15. Divide both sides by 3: x > 5. The answer is C.',
    strategy: 'Dividing or multiplying an inequality by a positive number preserves the direction of the inequality.',
  },
  {
    id: 't1m1q7',
    module: 1,
    domain: 'Algebra',
    skill: 'Linear equations in one variable',
    difficulty: 'Easy',
    type: 'spr',
    question: 'If 5x − 8 = 22, what is the value of x? Enter your answer as an integer.',
    answer: '6',
    explanation:
      'Add 8 to both sides: 5x = 30. Divide both sides by 5: x = 6. Verify: 5(6) − 8 = 30 − 8 = 22. ✓',
  },
  {
    id: 't1m1q8',
    module: 1,
    domain: 'Algebra',
    skill: 'Linear equations in two variables',
    difficulty: 'Medium',
    type: 'mc',
    question:
      'The line 2x + 4y = 20 crosses the y-axis at the point (0, k). What is the value of k?',
    choices: ['4', '5', '10', '20'],
    answer: 'B',
    explanation:
      'Set x = 0: 2(0) + 4y = 20 → 4y = 20 → y = 5. The line crosses the y-axis at (0, 5), so k = 5. The answer is B.',
    strategy: 'To find the y-intercept, substitute x = 0 into the equation.',
  },

  // ── Advanced Math ─────────────────────────────────────────────────────────
  {
    id: 't1m1q9',
    module: 1,
    domain: 'Advanced Math',
    skill: 'Quadratic functions',
    difficulty: 'Easy',
    type: 'mc',
    question:
      'The function f(x) = (x − 3)² + 5 is written in vertex form. What is the vertex of the parabola?',
    choices: ['(−3, 5)', '(3, −5)', '(3, 5)', '(5, 3)'],
    answer: 'C',
    explanation:
      'In vertex form f(x) = (x − h)² + k, the vertex is (h, k). Here h = 3 and k = 5, so the vertex is (3, 5). The answer is C.',
    strategy: 'Note the sign flip: (x − 3)² gives h = +3, not −3.',
  },
  {
    id: 't1m1q10',
    module: 1,
    domain: 'Advanced Math',
    skill: 'Polynomial operations',
    difficulty: 'Easy',
    type: 'mc',
    question: 'Which of the following is equivalent to (x + 4)(x − 3)?',
    choices: ['x² + 7x − 12', 'x² + x − 12', 'x² − x − 12', 'x² + x + 12'],
    answer: 'B',
    explanation:
      'Expand using FOIL: x·x + x·(−3) + 4·x + 4·(−3) = x² − 3x + 4x − 12 = x² + x − 12. The answer is B.',
    strategy: 'FOIL: First, Outer, Inner, Last. Then combine like terms.',
  },
  {
    id: 't1m1q11',
    module: 1,
    domain: 'Advanced Math',
    skill: 'Quadratic equations',
    difficulty: 'Medium',
    type: 'mc',
    question: 'What are the solutions to x² − 5x + 6 = 0?',
    choices: ['x = 1 and x = 6', 'x = 2 and x = 3', 'x = −2 and x = −3', 'x = −1 and x = 6'],
    answer: 'B',
    explanation:
      'Factor the quadratic: find two numbers that multiply to 6 and add to −5. Those numbers are −2 and −3, giving (x − 2)(x − 3) = 0. So x = 2 or x = 3. The answer is B.',
    strategy: 'Always check by substituting back: (2)² − 5(2) + 6 = 4 − 10 + 6 = 0. ✓',
  },
  {
    id: 't1m1q12',
    module: 1,
    domain: 'Advanced Math',
    skill: 'Exponential functions',
    difficulty: 'Medium',
    type: 'mc',
    question:
      'A colony of bacteria doubles in count every hour. If the colony starts with 500 bacteria, how many bacteria will there be after 3 hours?',
    choices: ['1,500', '2,000', '3,000', '4,000'],
    answer: 'D',
    explanation:
      'The count after t hours is 500 · 2^t. After 3 hours: 500 · 2³ = 500 · 8 = 4,000. The answer is D.',
    strategy: 'Exponential growth: multiply by the growth factor once per time period, not add.',
  },
  {
    id: 't1m1q13',
    module: 1,
    domain: 'Advanced Math',
    skill: 'Quadratic equations',
    difficulty: 'Medium',
    type: 'spr',
    question:
      'If x² − 9 = 0 and x > 0, what is the value of x? Enter your answer as an integer.',
    answer: '3',
    explanation:
      'Add 9 to both sides: x² = 9. Take the positive square root (since x > 0): x = 3. Verify: 3² − 9 = 9 − 9 = 0. ✓',
  },
  {
    id: 't1m1q14',
    module: 1,
    domain: 'Advanced Math',
    skill: 'Exponential functions',
    difficulty: 'Medium',
    type: 'mc',
    question: 'The function g(x) = 2^x. What is g(4)?',
    choices: ['8', '12', '16', '24'],
    answer: 'C',
    explanation: 'g(4) = 2^4 = 2 · 2 · 2 · 2 = 16. The answer is C.',
  },
  {
    id: 't1m1q15',
    module: 1,
    domain: 'Advanced Math',
    skill: 'Polynomial factors',
    difficulty: 'Easy',
    type: 'mc',
    question: 'Which of the following is a factor of x² − 16?',
    choices: ['(x − 8)', '(x + 2)', '(x + 8)', '(x − 4)'],
    answer: 'D',
    explanation:
      'x² − 16 is a difference of squares: x² − 4² = (x − 4)(x + 4). Both (x − 4) and (x + 4) are factors. Of the choices given, (x − 4) appears. The answer is D.',
    strategy: 'Memorize the difference of squares pattern: a² − b² = (a − b)(a + b).',
  },

  // ── Problem Solving & Data Analysis ───────────────────────────────────────
  {
    id: 't1m1q16',
    module: 1,
    domain: 'Problem Solving & Data Analysis',
    skill: 'Measures of center',
    difficulty: 'Easy',
    type: 'mc',
    question:
      'A student recorded five test scores: 4, 7, 9, 12, and 18. What is the mean of these scores?',
    choices: ['9', '10', '11', '12'],
    answer: 'B',
    explanation:
      'Sum the scores: 4 + 7 + 9 + 12 + 18 = 50. Divide by the count of 5: 50 ÷ 5 = 10. The answer is B.',
    strategy: 'Mean = sum of all values ÷ number of values.',
  },
  {
    id: 't1m1q17',
    module: 1,
    domain: 'Problem Solving & Data Analysis',
    skill: 'Percentages',
    difficulty: 'Easy',
    type: 'mc',
    question: 'What is 15% of 240?',
    choices: ['24', '30', '36', '40'],
    answer: 'C',
    explanation:
      'Convert the percent to a decimal: 15% = 0.15. Multiply: 0.15 × 240 = 36. The answer is C.',
    strategy: 'A quick way: 10% of 240 = 24, and 5% of 240 = 12. Add them: 24 + 12 = 36.',
  },
  {
    id: 't1m1q18',
    module: 1,
    domain: 'Problem Solving & Data Analysis',
    skill: 'Two-way tables and conditional probability',
    difficulty: 'Medium',
    type: 'mc',
    context:
      'A survey of 100 students found: of the 40 who play sports, 30 also participate in music. Of the 60 who do not play sports, 20 participate in music.',
    question:
      'Based on the survey, if a student who participates in music is chosen at random, what is the probability that the student also plays sports?',
    choices: ['1/5', '2/5', '3/5', '4/5'],
    answer: 'C',
    explanation:
      'Total students in music: 30 (sports + music) + 20 (no sports + music) = 50. Of those, 30 play sports. P(sports | music) = 30/50 = 3/5. The answer is C.',
    strategy: 'For conditional probability, restrict the sample space to the given condition (music students only).',
  },
  {
    id: 't1m1q19',
    module: 1,
    domain: 'Problem Solving & Data Analysis',
    skill: 'Scatterplots and linear models',
    difficulty: 'Medium',
    type: 'spr',
    question:
      'A line of best fit for a data set is given by y = 2x + 1, where x is hours studied and y is the predicted test score. According to this model, how many hours must a student study to achieve a predicted score of 21? Enter your answer as an integer.',
    answer: '10',
    explanation:
      'Set y = 21: 21 = 2x + 1. Subtract 1: 2x = 20. Divide by 2: x = 10. The student must study 10 hours.',
  },

  // ── Geometry & Trigonometry ────────────────────────────────────────────────
  {
    id: 't1m1q20',
    module: 1,
    domain: 'Geometry & Trigonometry',
    skill: 'Area and volume',
    difficulty: 'Easy',
    type: 'mc',
    question:
      'A triangle has a base of 12 cm and a height of 8 cm. What is the area of the triangle in square centimeters?',
    choices: ['24', '40', '48', '96'],
    answer: 'C',
    explanation:
      'Area of a triangle = (1/2) × base × height = (1/2) × 12 × 8 = 48 cm². The answer is C.',
    strategy: 'Do not forget the 1/2 factor — a common error is to compute base × height without halving.',
  },
  {
    id: 't1m1q21',
    module: 1,
    domain: 'Geometry & Trigonometry',
    skill: 'Angle relationships in triangles',
    difficulty: 'Easy',
    type: 'mc',
    question:
      'In a triangle, two of the angles measure 45° and 72°. What is the measure of the third angle in degrees?',
    choices: ['53°', '63°', '73°', '83°'],
    answer: 'B',
    explanation:
      'The sum of all angles in a triangle is 180°. Third angle = 180° − 45° − 72° = 63°. The answer is B.',
  },
  {
    id: 't1m1q22',
    module: 1,
    domain: 'Geometry & Trigonometry',
    skill: 'Circles',
    difficulty: 'Medium',
    type: 'mc',
    question:
      'A circle has a circumference of 10π centimeters. What is the area of the circle in square centimeters?',
    choices: ['10π', '20π', '25π', '100π'],
    answer: 'C',
    explanation:
      'Circumference C = 2πr = 10π, so r = 5. Area = πr² = π(5²) = 25π cm². The answer is C.',
    strategy: 'Always find the radius first; it connects circumference and area.',
  },
]

// ─── MODULE 2 — HARD PATH (22 questions, Medium–Hard) ────────────────────────
// For students who scored ≥ 14/22 on Module 1
// Algebra ×6 (Q1–Q6, 1 SPR), Advanced Math ×7 (Q7–Q13, 2 SPR),
// PS&DA ×5 (Q14–Q18, 1 SPR), Geometry ×4 (Q19–Q22, 1 SPR)

const module2Hard: SATQuestion[] = [
  // ── Algebra ──────────────────────────────────────────────────────────────
  {
    id: 't1m2hq1',
    module: 2,
    domain: 'Algebra',
    skill: 'Systems of two linear equations in two variables',
    difficulty: 'Hard',
    type: 'mc',
    question:
      'What is the value of x + y for the system of equations (1/2)x + y = 7 and x − 2y = 2?',
    choices: ['7', '9', '11', '13'],
    answer: 'C',
    explanation:
      'From the first equation, multiply by 2: x + 2y = 14. Add to the second equation (x − 2y = 2): 2x = 16, so x = 8. Substitute back into x − 2y = 2: 8 − 2y = 2 → y = 3. Therefore x + y = 8 + 3 = 11. The answer is C.',
    strategy: 'Multiplying to clear fractions first makes the algebra cleaner.',
  },
  {
    id: 't1m2hq2',
    module: 2,
    domain: 'Algebra',
    skill: 'Linear equations in two variables',
    difficulty: 'Hard',
    type: 'mc',
    question:
      'For what value of k does the system 2x + ky = 6 and 4x + 6y = 10 have no solution?',
    choices: ['2', '3', '4', '6'],
    answer: 'B',
    explanation:
      'A system has no solution when the lines are parallel: same slope but different y-intercepts. The ratio of x-coefficients must equal the ratio of y-coefficients but not equal the ratio of constants: 2/4 = k/6 → k = 3. Check constants: 6/10 = 3/5 ≠ 2/4 = 1/2, confirming the lines are parallel. The answer is B.',
    strategy: 'No solution means parallel lines: coefficient ratios are equal but constant ratio differs.',
  },
  {
    id: 't1m2hq3',
    module: 2,
    domain: 'Algebra',
    skill: 'Equivalent expressions',
    difficulty: 'Hard',
    type: 'mc',
    question: 'Which expression is equivalent to 3(2x − 4) − 2(x + 1)?',
    choices: ['4x − 10', '4x − 14', '8x − 10', '8x − 14'],
    answer: 'B',
    explanation:
      'Distribute: 3(2x − 4) = 6x − 12 and 2(x + 1) = 2x + 2. Subtract: (6x − 12) − (2x + 2) = 4x − 14. The answer is B.',
    strategy: 'The subtraction sign distributes to every term in the second parentheses.',
  },
  {
    id: 't1m2hq4',
    module: 2,
    domain: 'Algebra',
    skill: 'Linear functions',
    difficulty: 'Medium',
    type: 'mc',
    question:
      'A line passes through the points (2, 5) and (6, 13). Which of the following is the equation of this line?',
    choices: ['y = 2x − 1', 'y = 2x + 1', 'y = 4x − 3', 'y = 4x + 1'],
    answer: 'B',
    explanation:
      'Slope m = (13 − 5) / (6 − 2) = 8/4 = 2. Using point-slope form with (2, 5): y − 5 = 2(x − 2) → y = 2x − 4 + 5 = 2x + 1. The answer is B.',
    strategy: 'Verify with the second point: 2(6) + 1 = 13. ✓',
  },
  {
    id: 't1m2hq5',
    module: 2,
    domain: 'Algebra',
    skill: 'Systems of two linear equations in two variables',
    difficulty: 'Hard',
    type: 'spr',
    question:
      'In the system 3x + 2y = 16 and x − y = 2, what is the value of y? Enter your answer as an integer.',
    answer: '2',
    explanation:
      'From the second equation, x = y + 2. Substitute into the first: 3(y + 2) + 2y = 16 → 3y + 6 + 2y = 16 → 5y = 10 → y = 2. Verify: x = 4 and 3(4) + 2(2) = 12 + 4 = 16. ✓',
  },
  {
    id: 't1m2hq6',
    module: 2,
    domain: 'Algebra',
    skill: 'Linear functions',
    difficulty: 'Hard',
    type: 'mc',
    question:
      'The function f(x) = mx + b satisfies f(0) = 4 and f(3) = 13. What is the value of m + b?',
    choices: ['5', '6', '7', '8'],
    answer: 'C',
    explanation:
      'f(0) = b = 4, so b = 4. f(3) = 3m + 4 = 13 → 3m = 9 → m = 3. Therefore m + b = 3 + 4 = 7. The answer is C.',
  },

  // ── Advanced Math ─────────────────────────────────────────────────────────
  {
    id: 't1m2hq7',
    module: 2,
    domain: 'Advanced Math',
    skill: 'Completing the square',
    difficulty: 'Hard',
    type: 'mc',
    question: 'Which of the following is the vertex form of x² − 8x + 7?',
    choices: ['(x − 4)² − 9', '(x − 4)² + 7', '(x + 4)² − 9', '(x − 8)² + 7'],
    answer: 'A',
    explanation:
      'Complete the square: x² − 8x + 7 = (x² − 8x + 16) − 16 + 7 = (x − 4)² − 9. The vertex is (4, −9). The answer is A.',
    strategy: 'Add and subtract (b/2)² inside the expression. Here b = −8, so (b/2)² = 16.',
  },
  {
    id: 't1m2hq8',
    module: 2,
    domain: 'Advanced Math',
    skill: 'Discriminant and number of solutions',
    difficulty: 'Hard',
    type: 'mc',
    question:
      'For which value(s) of k does the equation x² + kx + 9 = 0 have exactly one real solution?',
    choices: ['k = 3 only', 'k = 6 only', 'k = 6 or k = −6', 'k = 9 or k = −9'],
    answer: 'C',
    explanation:
      'Exactly one real solution means the discriminant equals zero: b² − 4ac = k² − 4(1)(9) = 0 → k² = 36 → k = ±6. Both k = 6 and k = −6 produce exactly one solution. The answer is C.',
    strategy: 'Discriminant = 0 → one repeated root; > 0 → two real roots; < 0 → no real roots.',
  },
  {
    id: 't1m2hq9',
    module: 2,
    domain: 'Advanced Math',
    skill: 'Systems of linear and nonlinear equations',
    difficulty: 'Hard',
    type: 'spr',
    question:
      'The graphs of y = x² and y = x + 2 intersect at two points. What is the larger x-coordinate of the intersection points? Enter your answer as an integer.',
    answer: '2',
    explanation:
      'Set equal: x² = x + 2 → x² − x − 2 = 0 → (x − 2)(x + 1) = 0. The solutions are x = 2 and x = −1. The larger value is 2.',
    strategy: 'Substitute one expression into the other to get a quadratic, then factor.',
  },
  {
    id: 't1m2hq10',
    module: 2,
    domain: 'Advanced Math',
    skill: 'Rational exponents',
    difficulty: 'Hard',
    type: 'mc',
    question: 'Which of the following is equivalent to x^(2/3) · x^(1/3)?',
    choices: ['x^(1/3)', 'x^(2/9)', 'x', 'x²'],
    answer: 'C',
    explanation:
      'When multiplying powers with the same base, add the exponents: x^(2/3) · x^(1/3) = x^(2/3 + 1/3) = x^(3/3) = x^1 = x. The answer is C.',
    strategy: 'a^m · a^n = a^(m+n). Always add exponents when the base is the same.',
  },
  {
    id: 't1m2hq11',
    module: 2,
    domain: 'Advanced Math',
    skill: 'Quadratic equations',
    difficulty: 'Hard',
    type: 'spr',
    question:
      'The equation 2x² − 8x = 0 has two solutions: x = 0 and x = n. What is the value of n? Enter your answer as an integer.',
    answer: '4',
    explanation:
      'Factor out 2x: 2x(x − 4) = 0. Setting each factor equal to zero gives x = 0 or x = 4. So n = 4.',
    strategy: 'Never divide both sides by x to cancel it — that would lose the x = 0 solution.',
  },
  {
    id: 't1m2hq12',
    module: 2,
    domain: 'Advanced Math',
    skill: 'Polynomial factors and zeros',
    difficulty: 'Hard',
    type: 'mc',
    question:
      'Which of the following is a factor of f(x) = x³ − 2x² − 5x + 6?',
    choices: ['(x + 1)', '(x − 2)', '(x + 3)', '(x − 3)'],
    answer: 'D',
    explanation:
      'Use the Remainder Theorem — test x = 3: f(3) = 27 − 18 − 15 + 6 = 0. Since f(3) = 0, (x − 3) is a factor. Testing the other choices: f(−1) = −1 − 2 + 5 + 6 = 8 ≠ 0; f(2) = 8 − 8 − 10 + 6 = −4 ≠ 0. The answer is D.',
    strategy: 'Remainder Theorem: (x − c) is a factor if and only if f(c) = 0.',
  },
  {
    id: 't1m2hq13',
    module: 2,
    domain: 'Advanced Math',
    skill: 'Exponential equations',
    difficulty: 'Hard',
    type: 'mc',
    question: 'If 2^x = 32, what is the value of 2^(x + 2)?',
    choices: ['64', '128', '256', '512'],
    answer: 'B',
    explanation:
      '2^x = 32 = 2^5, so x = 5. Then 2^(x + 2) = 2^7 = 128. Alternatively, 2^(x + 2) = 2^x · 2² = 32 · 4 = 128. The answer is B.',
    strategy: 'Using exponent properties (2^(x+2) = 2^x · 4) avoids having to solve for x.',
  },

  // ── Problem Solving & Data Analysis ───────────────────────────────────────
  {
    id: 't1m2hq14',
    module: 2,
    domain: 'Problem Solving & Data Analysis',
    skill: 'Interpreting regression models and residuals',
    difficulty: 'Hard',
    type: 'mc',
    question:
      'A line of best fit for a data set is given by ŷ = 3x + 2. One data point has x = 4 and an observed y-value of 17. What is the residual for this data point?',
    choices: ['−3', '1', '3', '5'],
    answer: 'C',
    explanation:
      'The predicted value is ŷ = 3(4) + 2 = 14. The residual = observed − predicted = 17 − 14 = 3. The answer is C.',
    strategy: 'Residual = y_observed − y_predicted. A positive residual means the point lies above the line.',
  },
  {
    id: 't1m2hq15',
    module: 2,
    domain: 'Problem Solving & Data Analysis',
    skill: 'Two-way tables and conditional probability',
    difficulty: 'Hard',
    type: 'mc',
    context:
      'A study of 100 people found: of the 60 who exercise regularly, 45 report good health. Of the 40 who do not exercise, 20 report good health.',
    question:
      'What is the probability that a randomly selected person who reports good health exercises regularly?',
    choices: ['3/5', '3/4', '9/13', '45/60'],
    answer: 'C',
    explanation:
      'Total reporting good health: 45 + 20 = 65. Of those, 45 exercise regularly. P(exercises | good health) = 45/65 = 9/13. The answer is C.',
    strategy: 'Condition on the subset of interest (good-health group), then find the fraction within that subset.',
  },
  {
    id: 't1m2hq16',
    module: 2,
    domain: 'Problem Solving & Data Analysis',
    skill: 'Statistical inference and margin of error',
    difficulty: 'Hard',
    type: 'mc',
    question:
      'A survey of 400 randomly selected adults found that 58% support a new policy, with a margin of error of ±4 percentage points at a 95% confidence level. Which of the following is a valid conclusion?',
    choices: [
      'Exactly 58% of all adults support the policy.',
      'At least 54% of all adults definitely support the policy.',
      'The true proportion of all adults who support the policy is likely between 54% and 62%.',
      'Decreasing the sample size would reduce the margin of error.',
    ],
    answer: 'C',
    explanation:
      'The 95% confidence interval is 58% ± 4%, giving a range of 54% to 62%. This means we are 95% confident the true proportion falls in that range. Saying "exactly 58%" or "at least 54% definitely" overreaches the data. Smaller samples increase, not decrease, the margin of error. The answer is C.',
    strategy: 'A confidence interval gives a plausible range for the true value — it is not a guarantee.',
  },
  {
    id: 't1m2hq17',
    module: 2,
    domain: 'Problem Solving & Data Analysis',
    skill: 'Measures of center and outliers',
    difficulty: 'Medium',
    type: 'mc',
    question:
      'A data set has a mean of 20 and a median of 18. An additional data point of 100 is added to the set. Which of the following best describes the effect on the mean and median?',
    choices: [
      'Both the mean and the median increase significantly.',
      'The mean increases and the median remains relatively unchanged.',
      'The mean decreases and the median increases.',
      'Both the mean and the median remain unchanged.',
    ],
    answer: 'B',
    explanation:
      'Adding an extreme outlier (100) pulls the mean up substantially because the mean uses all values. The median depends only on the middle value(s) and shifts very little when one new point is added. The answer is B.',
    strategy: 'The mean is sensitive to outliers; the median is resistant to them.',
  },
  {
    id: 't1m2hq18',
    module: 2,
    domain: 'Problem Solving & Data Analysis',
    skill: 'Probability',
    difficulty: 'Hard',
    type: 'spr',
    question:
      'A bag contains 5 red marbles, 3 blue marbles, and 2 green marbles. Two marbles are drawn one at a time without replacement. What is the probability that both marbles are red? Enter your answer as a fraction.',
    answer: '2/9',
    explanation:
      'P(first red) = 5/10 = 1/2. After removing one red marble, 4 red remain out of 9 total. P(second red | first red) = 4/9. P(both red) = (1/2) × (4/9) = 4/18 = 2/9.',
    strategy: 'Without replacement means the denominator decreases by 1 for the second draw.',
  },

  // ── Geometry & Trigonometry ────────────────────────────────────────────────
  {
    id: 't1m2hq19',
    module: 2,
    domain: 'Geometry & Trigonometry',
    skill: 'Circles',
    difficulty: 'Hard',
    type: 'mc',
    question:
      'Which of the following is the standard form of the circle defined by x² + y² − 6x + 4y − 3 = 0?',
    choices: [
      '(x − 3)² + (y + 2)² = 4',
      '(x − 3)² + (y + 2)² = 16',
      '(x + 3)² + (y − 2)² = 16',
      '(x − 3)² + (y − 2)² = 16',
    ],
    answer: 'B',
    explanation:
      'Complete the square for x: x² − 6x → add 9: (x − 3)² − 9. For y: y² + 4y → add 4: (y + 2)² − 4. Rewrite: (x − 3)² − 9 + (y + 2)² − 4 = 3 → (x − 3)² + (y + 2)² = 16. The answer is B.',
    strategy: 'Complete the square for x and y separately, then collect constants on the right side.',
  },
  {
    id: 't1m2hq20',
    module: 2,
    domain: 'Geometry & Trigonometry',
    skill: 'Inscribed angles and arc relationships',
    difficulty: 'Hard',
    type: 'mc',
    question:
      'An inscribed angle in a circle intercepts an arc of 120°. What is the measure of the inscribed angle?',
    choices: ['30°', '60°', '90°', '120°'],
    answer: 'B',
    explanation:
      'The Inscribed Angle Theorem states that an inscribed angle is half the measure of its intercepted arc. Inscribed angle = 120° ÷ 2 = 60°. The answer is B.',
    strategy: 'Central angle = arc measure; inscribed angle = half the arc measure.',
  },
  {
    id: 't1m2hq21',
    module: 2,
    domain: 'Geometry & Trigonometry',
    skill: 'Area and volume',
    difficulty: 'Hard',
    type: 'mc',
    question:
      'A solid is formed by taking a cylinder with radius 3 and height 10, then removing a hemisphere with radius 3 from one end. What is the volume of the remaining solid? (Express your answer in terms of π.)',
    choices: ['54π', '63π', '72π', '81π'],
    answer: 'C',
    explanation:
      'Volume of cylinder = πr²h = π(9)(10) = 90π. Volume of hemisphere = (2/3)πr³ = (2/3)π(27) = 18π. Remaining volume = 90π − 18π = 72π. The answer is C.',
    strategy: 'For composite solids, compute each part separately then add or subtract as needed.',
  },
  {
    id: 't1m2hq22',
    module: 2,
    domain: 'Geometry & Trigonometry',
    skill: 'Trigonometric identities and cofunctions',
    difficulty: 'Hard',
    type: 'spr',
    question:
      'If sin(x°) = cos(40°), where 0 < x < 90, what is the value of x? Enter your answer as an integer.',
    answer: '50',
    explanation:
      'Cofunction identity: sin(θ) = cos(90° − θ). So sin(x°) = cos(40°) = sin(90° − 40°) = sin(50°). Therefore x = 50.',
    strategy: 'sin(x) = cos(90 − x). When you see sin equal to cos, find the complementary angle.',
  },
]

// ─── MODULE 2 — EASY PATH (22 questions, Easy–Medium) ────────────────────────
// For students who scored < 14/22 on Module 1
// Algebra ×8 (Q1–Q8, 1 SPR), Advanced Math ×6 (Q9–Q14, 1 SPR),
// PS&DA ×5 (Q15–Q19, 1 SPR), Geometry ×3 (Q20–Q22)

const module2Easy: SATQuestion[] = [
  // ── Algebra ──────────────────────────────────────────────────────────────
  {
    id: 't1m2eq1',
    module: 2,
    domain: 'Algebra',
    skill: 'Linear equations in one variable',
    difficulty: 'Easy',
    type: 'mc',
    question: 'If x + 9 = 15, what is the value of x?',
    choices: ['4', '5', '6', '7'],
    answer: 'C',
    explanation: 'Subtract 9 from both sides: x = 15 − 9 = 6. The answer is C.',
  },
  {
    id: 't1m2eq2',
    module: 2,
    domain: 'Algebra',
    skill: 'Linear functions',
    difficulty: 'Easy',
    type: 'mc',
    question: 'What is the slope of the line defined by y = −2x + 5?',
    choices: ['−5', '−2', '2', '5'],
    answer: 'B',
    explanation:
      'The equation is in slope-intercept form y = mx + b. The slope m = −2. The answer is B.',
    strategy: 'The coefficient of x is the slope; the constant term is the y-intercept.',
  },
  {
    id: 't1m2eq3',
    module: 2,
    domain: 'Algebra',
    skill: 'Linear equations in one variable',
    difficulty: 'Easy',
    type: 'mc',
    question:
      'Tickets to a school play cost $5 each. A group spent exactly $45 on tickets. How many tickets did the group buy?',
    choices: ['7', '8', '9', '10'],
    answer: 'C',
    explanation: 'Let n = number of tickets. 5n = 45 → n = 9. The answer is C.',
  },
  {
    id: 't1m2eq4',
    module: 2,
    domain: 'Algebra',
    skill: 'Linear functions',
    difficulty: 'Easy',
    type: 'mc',
    question: 'Which of the following points lies on the line y = 4x − 1?',
    choices: ['(1, 5)', '(2, 7)', '(3, 10)', '(0, 4)'],
    answer: 'B',
    explanation:
      'Test each point. For (2, 7): y = 4(2) − 1 = 8 − 1 = 7. ✓ For (1, 5): 4(1) − 1 = 3 ≠ 5. For (3, 10): 4(3) − 1 = 11 ≠ 10. For (0, 4): 4(0) − 1 = −1 ≠ 4. The answer is B.',
    strategy: 'Substitute each x-value into the equation and check if it matches the given y-value.',
  },
  {
    id: 't1m2eq5',
    module: 2,
    domain: 'Algebra',
    skill: 'Linear equations in one variable',
    difficulty: 'Easy',
    type: 'spr',
    question: 'If 3x + 6 = 18, what is the value of x? Enter your answer as an integer.',
    answer: '4',
    explanation:
      'Subtract 6 from both sides: 3x = 12. Divide by 3: x = 4. Verify: 3(4) + 6 = 12 + 6 = 18. ✓',
  },
  {
    id: 't1m2eq6',
    module: 2,
    domain: 'Algebra',
    skill: 'Linear equations in two variables',
    difficulty: 'Easy',
    type: 'mc',
    question:
      'The total cost C (in dollars) of renting a bicycle is given by C = 5h + 10, where h is the number of hours rented. What does the value 10 represent in this equation?',
    choices: [
      'The cost per hour of renting the bicycle.',
      'The total number of hours rented.',
      'The flat fee charged regardless of how long the bicycle is rented.',
      'The maximum rental fee.',
    ],
    answer: 'C',
    explanation:
      'When h = 0 hours, C = 10. A charge of $10 applies before any hours are counted, making it a fixed or flat fee. The 5 represents the hourly rate. The answer is C.',
    strategy: 'In y = mx + b, the constant b is the value when x = 0, representing a starting or fixed amount.',
  },
  {
    id: 't1m2eq7',
    module: 2,
    domain: 'Algebra',
    skill: 'Linear inequalities in one variable',
    difficulty: 'Easy',
    type: 'mc',
    question: 'Which of the following describes all values of x that satisfy 2x + 1 ≤ 9?',
    choices: ['x ≤ 3', 'x ≤ 4', 'x ≤ 5', 'x ≤ 8'],
    answer: 'B',
    explanation:
      'Subtract 1 from both sides: 2x ≤ 8. Divide by 2: x ≤ 4. The answer is B.',
  },
  {
    id: 't1m2eq8',
    module: 2,
    domain: 'Algebra',
    skill: 'Linear functions',
    difficulty: 'Easy',
    type: 'mc',
    question: 'If f(x) = 5x − 2, what is f(4)?',
    choices: ['16', '17', '18', '20'],
    answer: 'C',
    explanation: 'f(4) = 5(4) − 2 = 20 − 2 = 18. The answer is C.',
  },

  // ── Advanced Math ─────────────────────────────────────────────────────────
  {
    id: 't1m2eq9',
    module: 2,
    domain: 'Advanced Math',
    skill: 'Polynomial factors',
    difficulty: 'Easy',
    type: 'mc',
    question: 'Which of the following is the factored form of x² + 5x + 6?',
    choices: ['(x + 1)(x + 6)', '(x + 2)(x + 3)', '(x − 2)(x − 3)', '(x + 1)(x + 5)'],
    answer: 'B',
    explanation:
      'Find two numbers that multiply to 6 and add to 5: those are 2 and 3. So x² + 5x + 6 = (x + 2)(x + 3). The answer is B.',
    strategy: 'To factor x² + bx + c, find two numbers with product c and sum b.',
  },
  {
    id: 't1m2eq10',
    module: 2,
    domain: 'Advanced Math',
    skill: 'Quadratic functions',
    difficulty: 'Easy',
    type: 'mc',
    question: 'If g(x) = x² − 4, what is g(−3)?',
    choices: ['1', '5', '7', '13'],
    answer: 'B',
    explanation: 'g(−3) = (−3)² − 4 = 9 − 4 = 5. The answer is B.',
    strategy: 'Remember: (−3)² = 9, not −9. Squaring a negative number gives a positive result.',
  },
  {
    id: 't1m2eq11',
    module: 2,
    domain: 'Advanced Math',
    skill: 'Quadratic equations',
    difficulty: 'Easy',
    type: 'spr',
    question:
      'If x² = 49 and x > 0, what is the value of x? Enter your answer as an integer.',
    answer: '7',
    explanation:
      'Take the positive square root of both sides: x = √49 = 7. Since x > 0, the answer is 7.',
  },
  {
    id: 't1m2eq12',
    module: 2,
    domain: 'Advanced Math',
    skill: 'Polynomial operations',
    difficulty: 'Easy',
    type: 'mc',
    question: 'Which of the following is equivalent to (x + 2)(x + 5)?',
    choices: ['x² + 7x + 7', 'x² + 3x + 10', 'x² + 7x + 10', 'x² + 10x + 7'],
    answer: 'C',
    explanation:
      'Expand using FOIL: x·x + x·5 + 2·x + 2·5 = x² + 5x + 2x + 10 = x² + 7x + 10. The answer is C.',
  },
  {
    id: 't1m2eq13',
    module: 2,
    domain: 'Advanced Math',
    skill: 'Exponential functions',
    difficulty: 'Easy',
    type: 'mc',
    question:
      'A savings account balance doubles every year. If the starting balance is $200, what will the balance be after 3 years?',
    choices: ['$600', '$800', '$1,200', '$1,600'],
    answer: 'D',
    explanation:
      'After 3 years the balance is 200 × 2³ = 200 × 8 = $1,600. The answer is D.',
    strategy: 'Doubling 3 times means multiplying by 2³ = 8, not by 3.',
  },
  {
    id: 't1m2eq14',
    module: 2,
    domain: 'Advanced Math',
    skill: 'Quadratic functions',
    difficulty: 'Medium',
    type: 'mc',
    question:
      'The function h(x) = −(x − 2)² + 9. What is the maximum value of h(x)?',
    choices: ['2', '5', '7', '9'],
    answer: 'D',
    explanation:
      'This is in vertex form h(x) = a(x − h)² + k with a = −1, h = 2, k = 9. Since a < 0 the parabola opens downward and the vertex (2, 9) is the maximum. The maximum value is 9. The answer is D.',
    strategy: 'When a < 0, the vertex gives the maximum; when a > 0, the vertex gives the minimum.',
  },

  // ── Problem Solving & Data Analysis ───────────────────────────────────────
  {
    id: 't1m2eq15',
    module: 2,
    domain: 'Problem Solving & Data Analysis',
    skill: 'Measures of center',
    difficulty: 'Easy',
    type: 'mc',
    question:
      'The ages of five students are 14, 15, 16, 17, and 18. What is the mean age?',
    choices: ['14', '15', '16', '17'],
    answer: 'C',
    explanation:
      'Sum = 14 + 15 + 16 + 17 + 18 = 80. Mean = 80 ÷ 5 = 16. The answer is C.',
    strategy: 'For an evenly spaced list of numbers, the mean equals the middle value.',
  },
  {
    id: 't1m2eq16',
    module: 2,
    domain: 'Problem Solving & Data Analysis',
    skill: 'Percentages',
    difficulty: 'Easy',
    type: 'mc',
    question:
      'A shirt originally costs $40. It is on sale for 25% off. What is the sale price?',
    choices: ['$10', '$25', '$30', '$35'],
    answer: 'C',
    explanation:
      'Discount amount = 25% × $40 = 0.25 × 40 = $10. Sale price = $40 − $10 = $30. The answer is C.',
    strategy: 'Find the discount amount first, then subtract from the original price.',
  },
  {
    id: 't1m2eq17',
    module: 2,
    domain: 'Problem Solving & Data Analysis',
    skill: 'Probability',
    difficulty: 'Easy',
    type: 'mc',
    question:
      'A bag contains 3 red marbles, 4 blue marbles, and 3 yellow marbles. If one marble is selected at random, what is the probability of selecting a blue marble?',
    choices: ['1/5', '2/5', '3/5', '4/5'],
    answer: 'B',
    explanation:
      'Total marbles = 3 + 4 + 3 = 10. Number of blue marbles = 4. P(blue) = 4/10 = 2/5. The answer is B.',
  },
  {
    id: 't1m2eq18',
    module: 2,
    domain: 'Problem Solving & Data Analysis',
    skill: 'Interpreting tables',
    difficulty: 'Easy',
    type: 'spr',
    context:
      'A frequency table shows test score ranges: 70–79 had 5 students, 80–89 had 12 students, and 90–100 had 8 students.',
    question:
      'According to the table, what is the total number of students who scored 80 or above? Enter your answer as an integer.',
    answer: '20',
    explanation:
      'Students scoring 80–89: 12. Students scoring 90–100: 8. Total at or above 80: 12 + 8 = 20.',
  },
  {
    id: 't1m2eq19',
    module: 2,
    domain: 'Problem Solving & Data Analysis',
    skill: 'Ratios and proportions',
    difficulty: 'Easy',
    type: 'mc',
    question:
      'If 3 pencils cost $0.75, how much do 8 pencils cost at the same rate?',
    choices: ['$1.50', '$1.75', '$2.00', '$2.25'],
    answer: 'C',
    explanation:
      'Cost per pencil = $0.75 ÷ 3 = $0.25. Cost for 8 pencils = 8 × $0.25 = $2.00. The answer is C.',
    strategy: 'Find the unit rate (cost per one item), then multiply by the desired quantity.',
  },

  // ── Geometry & Trigonometry ────────────────────────────────────────────────
  {
    id: 't1m2eq20',
    module: 2,
    domain: 'Geometry & Trigonometry',
    skill: 'Area and volume',
    difficulty: 'Easy',
    type: 'mc',
    question:
      'A rectangle has a length of 9 meters and a width of 4 meters. What is the area of the rectangle in square meters?',
    choices: ['13', '26', '36', '72'],
    answer: 'C',
    explanation: 'Area = length × width = 9 × 4 = 36 m². The answer is C.',
    strategy:
      'Do not confuse area (length × width = 36) with perimeter (2 × length + 2 × width = 26).',
  },
  {
    id: 't1m2eq21',
    module: 2,
    domain: 'Geometry & Trigonometry',
    skill: 'Angle relationships',
    difficulty: 'Easy',
    type: 'mc',
    question:
      'Two angles are supplementary. One angle measures 115°. What is the measure of the other angle in degrees?',
    choices: ['45°', '55°', '65°', '75°'],
    answer: 'C',
    explanation:
      'Supplementary angles sum to 180°. Other angle = 180° − 115° = 65°. The answer is C.',
    strategy: 'Supplementary angles sum to 180°; complementary angles sum to 90°.',
  },
  {
    id: 't1m2eq22',
    module: 2,
    domain: 'Geometry & Trigonometry',
    skill: 'Right triangles and the Pythagorean theorem',
    difficulty: 'Medium',
    type: 'mc',
    question:
      'A right triangle has legs of length 6 and 8. What is the length of the hypotenuse?',
    choices: ['7', '9', '10', '14'],
    answer: 'C',
    explanation:
      'Apply the Pythagorean theorem: c² = a² + b² = 6² + 8² = 36 + 64 = 100. So c = √100 = 10. The answer is C.',
    strategy:
      '6-8-10 is a Pythagorean triple (a 2× scaling of 3-4-5). Recognizing common triples saves time.',
  },
]

// ─── Export ───────────────────────────────────────────────────────────────────

export const TEST1: SATTest = {
  id: 'test1',
  name: 'Practice Test 1',
  module1,
  module2Hard,
  module2Easy,
}
