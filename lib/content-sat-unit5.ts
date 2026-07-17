interface LessonContent {
  essentialQuestion: string
  concepts: string[]
  keyTerms: Array<{ term: string; definition: string }>
  workedExample: {
    problem: string
    steps: string[]
    answer: string
  }
  commonMistakes: string[]
  tip: string
  graphType: string
  questions: Array<{
    question_text: string
    difficulty: 'Easy' | 'Medium' | 'Hard'
    choices: string[]
    answer_text: string
    explanation: string
  }>
}

export const SAT_UNIT5_CONTENT: Record<string, LessonContent> = {
  "5.1": {
    essentialQuestion:
      "How do you isolate a variable and know whether an equation has one solution, no solution, or infinitely many solutions?",
    concepts: [
      "Solving a linear equation means doing the same operation to both sides until x is alone — like peeling an onion from the outside in.",
      "When you simplify both sides and get something true like 0 = 0, every real number is a solution — infinitely many solutions.",
      "When you get something false like 3 = 7, there is no solution — the equation is a contradiction.",
      "Word problems are just equations in disguise: find the unknown, write the equation, then solve the same way.",
      "Fractional coefficients look scary but multiplying every term by the LCD clears them immediately.",
    ],
    keyTerms: [
      {
        term: "Solution",
        definition: "A value of the variable that makes the equation true when substituted in.",
      },
      {
        term: "No Solution",
        definition: "When simplifying leads to a false statement (like 5 = 9), meaning no value of x can satisfy the equation.",
      },
      {
        term: "Infinitely Many Solutions",
        definition: "When simplifying leads to a true statement (like 0 = 0), meaning every real number satisfies the equation.",
      },
      {
        term: "Inverse Operations",
        definition: "Operations that undo each other — addition undoes subtraction, multiplication undoes division — used to isolate the variable.",
      },
    ],
    workedExample: {
      problem: "Solve for x: 3(2x − 4) = 2(x + 6) − 2",
      steps: [
        "Step 1: Distribute on both sides. Left side: 6x − 12. Right side: 2x + 12 − 2 = 2x + 10.",
        "Step 2: Write the simplified equation: 6x − 12 = 2x + 10.",
        "Step 3: Subtract 2x from both sides: 4x − 12 = 10.",
        "Step 4: Add 12 to both sides: 4x = 22.",
        "Step 5: Divide both sides by 4: x = 22/4 = 11/2 = 5.5.",
        "Step 6: Check — plug x = 5.5 back in: 3(11 − 4) = 3(7) = 21 and 2(5.5 + 6) − 2 = 2(11.5) − 2 = 23 − 2 = 21. Confirmed.",
      ],
      answer: "x = 5.5",
    },
    commonMistakes: [
      "Forgetting to distribute to every term in parentheses — 3(2x − 4) is 6x − 12, not 6x − 4.",
      "Adding or subtracting before distributing — always simplify inside grouping symbols first.",
      "Stopping after finding x = 0 and thinking there is no solution — x = 0 is a valid solution; no solution means you get a false statement like 4 = 7.",
    ],
    tip: "On the SAT, if you see 'which of the following equations has no solution,' quickly simplify both sides and check if the variable terms cancel to leave a false number statement — you do not need to fully solve it.",
    graphType: "number-line",
    questions: [
      {
        question_text: "Solve for x: 5x − 3 = 17",
        difficulty: "Easy",
        choices: ["A) x = 2", "B) x = 3", "C) x = 4", "D) x = 5"],
        answer_text: "C) x = 4",
        explanation: "Add 3 to both sides: 5x = 20. Divide by 5: x = 4. Check: 5(4) − 3 = 20 − 3 = 17. Correct.",
      },
      {
        question_text: "Solve for x: x/3 + 4 = 7",
        difficulty: "Easy",
        choices: ["A) x = 1", "B) x = 9", "C) x = 11", "D) x = 33"],
        answer_text: "B) x = 9",
        explanation: "Subtract 4 from both sides: x/3 = 3. Multiply both sides by 3: x = 9.",
      },
      {
        question_text: "What is the value of x if 2(x + 5) = 18?",
        difficulty: "Easy",
        choices: ["A) x = 4", "B) x = 6.5", "C) x = 9", "D) x = 14"],
        answer_text: "A) x = 4",
        explanation: "Distribute: 2x + 10 = 18. Subtract 10: 2x = 8. Divide by 2: x = 4.",
      },
      {
        question_text: "A number is increased by 12, and the result is three times the number. What is the number?",
        difficulty: "Easy",
        choices: ["A) 3", "B) 4", "C) 6", "D) 12"],
        answer_text: "C) 6",
        explanation: "Let the number be n. Then n + 12 = 3n. Subtract n: 12 = 2n. Divide by 2: n = 6. Check: 6 + 12 = 18 = 3(6). Correct.",
      },
      {
        question_text: "Solve for x: 4x + 9 = 4(x − 1) + 13",
        difficulty: "Medium",
        choices: ["A) x = 0", "B) x = 1", "C) No solution", "D) Infinitely many solutions"],
        answer_text: "D) Infinitely many solutions",
        explanation: "Distribute the right side: 4x − 4 + 13 = 4x + 9. Both sides equal 4x + 9. This is always true, so x can be any real number — infinitely many solutions.",
      },
      {
        question_text: "Solve for x: 3x − 5 = 3(x + 1)",
        difficulty: "Medium",
        choices: ["A) x = −4", "B) x = 4", "C) Infinitely many solutions", "D) No solution"],
        answer_text: "D) No solution",
        explanation: "Distribute: 3x − 5 = 3x + 3. Subtract 3x from both sides: −5 = 3. This is a false statement, so there is no solution.",
      },
      {
        question_text: "Solve for x: (x − 2)/4 = (x + 6)/8",
        difficulty: "Medium",
        choices: ["A) x = 10", "B) x = 14", "C) x = −10", "D) x = 16"],
        answer_text: "A) x = 10",
        explanation: "Multiply both sides by 8 (the LCD): 2(x − 2) = x + 6. Distribute: 2x − 4 = x + 6. Subtract x: x − 4 = 6. Add 4: x = 10.",
      },
      {
        question_text: "Maya earns $15 per hour and receives a $50 bonus. She wants to earn $230 total. How many hours does she need to work?",
        difficulty: "Medium",
        choices: ["A) 10 hours", "B) 12 hours", "C) 15 hours", "D) 18 hours"],
        answer_text: "B) 12 hours",
        explanation: "Set up the equation: 15h + 50 = 230. Subtract 50: 15h = 180. Divide by 15: h = 12 hours.",
      },
      {
        question_text: "Solve for x: 0.4(x + 5) = 0.5x − 1",
        difficulty: "Hard",
        choices: ["A) x = 10", "B) x = 20", "C) x = 30", "D) x = 40"],
        answer_text: "C) x = 30",
        explanation: "Multiply everything by 10 to clear decimals: 4(x + 5) = 5x − 10. Distribute: 4x + 20 = 5x − 10. Subtract 4x: 20 = x − 10. Add 10: x = 30.",
      },
      {
        question_text: "A school sells adult tickets for $8 and student tickets for $5. If 200 tickets were sold and the total revenue was $1,300, how many adult tickets were sold?",
        difficulty: "Hard",
        choices: ["A) 50", "B) 75", "C) 100", "D) 125"],
        answer_text: "C) 100",
        explanation: "Let a = adult tickets, so student tickets = 200 − a. Equation: 8a + 5(200 − a) = 1300. Expand: 8a + 1000 − 5a = 1300. Simplify: 3a = 300. So a = 100.",
      },
      {
        question_text: "For what value of k does the equation 2(3x − k) = 6x − 10 have infinitely many solutions?",
        difficulty: "Hard",
        choices: ["A) k = −5", "B) k = 5", "C) k = 10", "D) k = −10"],
        answer_text: "B) k = 5",
        explanation: "Distribute: 6x − 2k = 6x − 10. For infinitely many solutions, both sides must be identical: −2k = −10, so k = 5.",
      },
      {
        question_text: "Two consecutive even integers have a sum of 106. What is the larger integer?",
        difficulty: "Hard",
        choices: ["A) 50", "B) 52", "C) 54", "D) 56"],
        answer_text: "C) 54",
        explanation: "Let the integers be n and n + 2. Then n + (n + 2) = 106. Simplify: 2n + 2 = 106. Subtract 2: 2n = 104. Divide: n = 52. The larger integer is 52 + 2 = 54.",
      },
    ],
  },

  "5.2": {
    essentialQuestion:
      "How does the equation of a line let you predict any output and understand the real-world meaning of slope and y-intercept?",
    concepts: [
      "Slope-intercept form y = mx + b tells you the slope m (how steep the line is) and the y-intercept b (where the line crosses the y-axis at x = 0).",
      "Standard form Ax + By = C is less intuitive but easy to convert — just solve for y and you have slope-intercept form.",
      "In context, slope is always a rate: miles per hour, dollars per item, degrees per minute. Units matter on the SAT.",
      "The y-intercept is the starting value — what you have before any time passes or any items are bought.",
      "From two points, find slope with m = (y₂ − y₁)/(x₂ − x₁), then substitute one point into y = mx + b to find b.",
    ],
    keyTerms: [
      {
        term: "Slope",
        definition: "The rate of change of a line — how much y changes for every 1-unit increase in x. Calculated as rise/run or (y₂ − y₁)/(x₂ − x₁).",
      },
      {
        term: "y-intercept",
        definition: "The point where the line crosses the y-axis (x = 0). In context, it represents the initial or starting value.",
      },
      {
        term: "Slope-Intercept Form",
        definition: "The equation y = mx + b where m is the slope and b is the y-intercept. The most useful form for graphing and interpreting lines.",
      },
      {
        term: "Standard Form",
        definition: "The equation Ax + By = C where A, B, and C are integers. Useful for finding intercepts quickly by setting each variable to zero.",
      },
    ],
    workedExample: {
      problem: "A car rental company charges a $40 flat fee plus $0.30 per mile driven. Write an equation for the total cost C in terms of miles m, then find the cost for 150 miles.",
      steps: [
        "Step 1: Identify the structure. There is a flat fee (y-intercept) and a per-mile rate (slope).",
        "Step 2: The flat fee is $40, so b = 40. The rate is $0.30 per mile, so m = 0.30.",
        "Step 3: Write the equation: C = 0.30m + 40.",
        "Step 4: Substitute m = 150: C = 0.30(150) + 40 = 45 + 40 = 85.",
        "Step 5: The total cost for 150 miles is $85.",
      ],
      answer: "C = 0.30m + 40; the cost for 150 miles is $85.",
    },
    commonMistakes: [
      "Confusing slope and y-intercept when reading a context problem — the y-intercept is always the value when x = 0, not the recurring rate.",
      "Computing slope as (x₂ − x₁)/(y₂ − y₁) — flipping the fraction gives the wrong slope every time.",
      "Forgetting that a horizontal line has slope 0 and a vertical line has undefined slope — the SAT tests this.",
    ],
    tip: "When the SAT gives you two points in a table, compute slope first, then plug one point into y = mx + b to find the y-intercept. This two-step method is faster than memorizing the point-slope formula.",
    graphType: "coordinate-plane",
    questions: [
      {
        question_text: "What is the slope of the line y = −3x + 7?",
        difficulty: "Easy",
        choices: ["A) 7", "B) −7", "C) 3", "D) −3"],
        answer_text: "D) −3",
        explanation: "In y = mx + b form, the slope is the coefficient of x. Here m = −3.",
      },
      {
        question_text: "What is the y-intercept of the line 2x + 4y = 12?",
        difficulty: "Easy",
        choices: ["A) (0, 2)", "B) (0, 3)", "C) (0, 6)", "D) (0, 12)"],
        answer_text: "B) (0, 3)",
        explanation: "Set x = 0: 4y = 12, so y = 3. The y-intercept is (0, 3). Alternatively, solve for y: y = −(1/2)x + 3, confirming b = 3.",
      },
      {
        question_text: "A line passes through (0, −2) and has slope 4. What is its equation?",
        difficulty: "Easy",
        choices: ["A) y = 4x + 2", "B) y = 4x − 2", "C) y = −2x + 4", "D) y = 2x − 4"],
        answer_text: "B) y = 4x − 2",
        explanation: "The y-intercept is −2 (since the line passes through (0, −2)), and the slope is 4. So y = 4x − 2.",
      },
      {
        question_text: "Which of the following lines has a negative slope?",
        difficulty: "Easy",
        choices: ["A) y = 2x + 5", "B) y = 5", "C) y = −x + 3", "D) x = −2"],
        answer_text: "C) y = −x + 3",
        explanation: "A negative slope means the line falls as you move right. y = −x + 3 has slope −1, which is negative. y = 5 is horizontal (slope 0), and x = −2 is vertical (undefined slope).",
      },
      {
        question_text: "A line passes through (2, 5) and (6, 13). What is the equation of the line?",
        difficulty: "Medium",
        choices: ["A) y = 2x + 1", "B) y = 2x − 1", "C) y = 3x − 1", "D) y = 2x + 3"],
        answer_text: "A) y = 2x + 1",
        explanation: "Slope = (13 − 5)/(6 − 2) = 8/4 = 2. Use point (2, 5): 5 = 2(2) + b → 5 = 4 + b → b = 1. Equation: y = 2x + 1.",
      },
      {
        question_text: "A plumber charges a $75 service fee plus $50 per hour. Which equation models the total charge C for h hours?",
        difficulty: "Medium",
        choices: ["A) C = 75h + 50", "B) C = 50h + 75", "C) C = 50h − 75", "D) C = 125h"],
        answer_text: "B) C = 50h + 75",
        explanation: "The $75 service fee is a flat charge (y-intercept), and the $50/hour is the rate (slope). So C = 50h + 75.",
      },
      {
        question_text: "What is the x-intercept of the line 3x − 6y = 18?",
        difficulty: "Medium",
        choices: ["A) (3, 0)", "B) (6, 0)", "C) (9, 0)", "D) (18, 0)"],
        answer_text: "B) (6, 0)",
        explanation: "Set y = 0: 3x = 18, so x = 6. The x-intercept is (6, 0).",
      },
      {
        question_text: "The table below shows values of a linear function: x = 1, f(1) = 3; x = 3, f(3) = 9; x = 5, f(5) = 15. Which equation represents this function?",
        difficulty: "Medium",
        choices: ["A) f(x) = 2x + 1", "B) f(x) = 3x", "C) f(x) = 3x − 1", "D) f(x) = 2x + 3"],
        answer_text: "B) f(x) = 3x",
        explanation: "Slope = (9 − 3)/(3 − 1) = 6/2 = 3. Using point (1, 3): 3 = 3(1) + b → b = 0. So f(x) = 3x. Verify: f(5) = 15. Correct.",
      },
      {
        question_text: "A gym membership costs $120 to join and $30 per month. A second gym has no joining fee but costs $50 per month. After how many months will the total costs be equal?",
        difficulty: "Hard",
        choices: ["A) 4 months", "B) 5 months", "C) 6 months", "D) 8 months"],
        answer_text: "C) 6 months",
        explanation: "Set up equations: Gym 1: C = 30m + 120. Gym 2: C = 50m. Set equal: 30m + 120 = 50m → 120 = 20m → m = 6 months.",
      },
      {
        question_text: "In the equation y = mx + b, the slope m represents the change in y for each unit increase in x. If a line has slope −4 and passes through (3, 2), what is the y-value when x = 5?",
        difficulty: "Hard",
        choices: ["A) −6", "B) −4", "C) −2", "D) 10"],
        answer_text: "A) −6",
        explanation: "Each step right by 1 decreases y by 4 (slope = −4). From x = 3 to x = 5 is 2 steps, so y decreases by 8: 2 − 8 = −6. Alternatively, find b: 2 = −4(3) + b → b = 14. Then y(5) = −4(5) + 14 = −6.",
      },
      {
        question_text: "A water tank holds 500 gallons. It drains at a rate of 25 gallons per hour. Which equation gives the gallons G remaining after t hours, and when will the tank be empty?",
        difficulty: "Hard",
        choices: ["A) G = 500 − 25t; empty after 20 hours", "B) G = 25t − 500; empty after 20 hours", "C) G = 500 + 25t; never empty", "D) G = 25t; empty after 20 hours"],
        answer_text: "A) G = 500 − 25t; empty after 20 hours",
        explanation: "The tank starts at 500 gallons (y-intercept) and loses 25 per hour (slope = −25). Equation: G = 500 − 25t. Set G = 0: 500 = 25t → t = 20 hours.",
      },
      {
        question_text: "The line through points (k, 1) and (2k, 7) has slope 2. What is the value of k?",
        difficulty: "Hard",
        choices: ["A) k = 2", "B) k = 3", "C) k = 4", "D) k = 6"],
        answer_text: "B) k = 3",
        explanation: "Slope = (7 − 1)/(2k − k) = 6/k = 2. Solve: 6 = 2k → k = 3.",
      },
    ],
  },

  "5.3": {
    essentialQuestion:
      "What does the rate of change of a linear function tell you, and how do you find equations for lines that are parallel or perpendicular to a given line?",
    concepts: [
      "A linear function f(x) = mx + b is just a line where x is the input and f(x) is the output — function notation is just a cleaner way to write y.",
      "The rate of change (slope) tells you how much the output changes per unit of input — it is constant for any linear function.",
      "Parallel lines have exactly the same slope — they run in the same direction and never intersect.",
      "Perpendicular lines have slopes that are negative reciprocals of each other — if one slope is 2/3, the perpendicular slope is −3/2.",
      "To write the equation of a new line through a given point, use the correct slope and substitute the point into y = mx + b to find b.",
    ],
    keyTerms: [
      {
        term: "Rate of Change",
        definition: "How much the output (y) changes for every 1-unit increase in the input (x). For a linear function, this equals the slope.",
      },
      {
        term: "Parallel Lines",
        definition: "Two lines with the same slope that never intersect. They look like train tracks — always the same distance apart.",
      },
      {
        term: "Perpendicular Lines",
        definition: "Two lines that intersect at a 90-degree angle. Their slopes are negative reciprocals: if one slope is m, the other is −1/m.",
      },
      {
        term: "Negative Reciprocal",
        definition: "The number you get by flipping a fraction and changing its sign. The negative reciprocal of 3/4 is −4/3.",
      },
    ],
    workedExample: {
      problem: "Line g passes through (−1, 4) and is perpendicular to the line y = (3/2)x − 5. Write the equation of line g.",
      steps: [
        "Step 1: Find the slope of the given line: m = 3/2.",
        "Step 2: The perpendicular slope is the negative reciprocal: m⊥ = −2/3.",
        "Step 3: Use point-slope approach. Line g passes through (−1, 4) with slope −2/3.",
        "Step 4: Substitute into y = mx + b: 4 = (−2/3)(−1) + b → 4 = 2/3 + b → b = 4 − 2/3 = 10/3.",
        "Step 5: Equation of line g: y = (−2/3)x + 10/3.",
      ],
      answer: "y = (−2/3)x + 10/3",
    },
    commonMistakes: [
      "Finding the reciprocal but forgetting to change the sign — the perpendicular slope of 2 is −1/2, not +1/2.",
      "Thinking parallel lines have slopes that are equal in absolute value but opposite in sign — no, parallel lines have the EXACT same slope.",
      "Evaluating f(3) and plugging in x = 3 for y instead of for x — always substitute the input value for x.",
    ],
    tip: "When you need to find if two lines are perpendicular, just multiply their slopes — if the product equals −1, they are perpendicular. This is faster than computing negative reciprocals from scratch.",
    graphType: "coordinate-plane",
    questions: [
      {
        question_text: "If f(x) = 5x − 8, what is f(3)?",
        difficulty: "Easy",
        choices: ["A) 7", "B) 9", "C) 15", "D) 22"],
        answer_text: "A) 7",
        explanation: "Substitute x = 3: f(3) = 5(3) − 8 = 15 − 8 = 7.",
      },
      {
        question_text: "What is the slope of the line f(x) = −2x + 9?",
        difficulty: "Easy",
        choices: ["A) 9", "B) 2", "C) −2", "D) −9"],
        answer_text: "C) −2",
        explanation: "In f(x) = mx + b form, the slope m is the coefficient of x. Here m = −2.",
      },
      {
        question_text: "A delivery service charges f(x) = 3x + 10 where x is the number of packages and f(x) is the total charge in dollars. What does the 3 represent?",
        difficulty: "Easy",
        choices: ["A) The total charge", "B) The base fee", "C) The charge per package", "D) The number of packages"],
        answer_text: "C) The charge per package",
        explanation: "In this context, 3 is the slope — it represents the rate of change, which is $3 per additional package.",
      },
      {
        question_text: "If g(x) = 6x − 4, what is g(0)?",
        difficulty: "Easy",
        choices: ["A) −4", "B) 0", "C) 4", "D) 6"],
        answer_text: "A) −4",
        explanation: "Substitute x = 0: g(0) = 6(0) − 4 = −4. This is just the y-intercept.",
      },
      {
        question_text: "Line p has equation y = 4x − 3. Which of the following lines is parallel to line p?",
        difficulty: "Medium",
        choices: ["A) y = −4x + 3", "B) y = (1/4)x − 3", "C) y = 4x + 7", "D) y = 3x − 3"],
        answer_text: "C) y = 4x + 7",
        explanation: "Parallel lines have the same slope. Line p has slope 4. Only y = 4x + 7 also has slope 4 (with a different y-intercept, so they do not coincide).",
      },
      {
        question_text: "What is the slope of a line perpendicular to y = −(2/5)x + 1?",
        difficulty: "Medium",
        choices: ["A) −5/2", "B) 2/5", "C) 5/2", "D) −2/5"],
        answer_text: "C) 5/2",
        explanation: "The given slope is −2/5. The perpendicular slope is the negative reciprocal: flip to get 5/2, then change the sign to get +5/2.",
      },
      {
        question_text: "A line parallel to f(x) = 3x − 7 passes through the point (2, 4). What is the y-intercept of this new line?",
        difficulty: "Medium",
        choices: ["A) −7", "B) −2", "C) 2", "D) −3"],
        answer_text: "B) −2",
        explanation: "Parallel line has slope 3. Substitute (2, 4): 4 = 3(2) + b → 4 = 6 + b → b = −2.",
      },
      {
        question_text: "If f(x) = 2x + 1 and g(x) = −x + 4, for what value of x does f(x) = g(x)?",
        difficulty: "Medium",
        choices: ["A) x = 1", "B) x = 2", "C) x = 3", "D) x = 4"],
        answer_text: "A) x = 1",
        explanation: "Set equal: 2x + 1 = −x + 4. Add x: 3x + 1 = 4. Subtract 1: 3x = 3. Divide: x = 1.",
      },
      {
        question_text: "A line perpendicular to y = 3x + 2 passes through (3, −1). What is its equation?",
        difficulty: "Hard",
        choices: ["A) y = (1/3)x − 2", "B) y = −(1/3)x", "C) y = (1/3)x + 2", "D) y = −3x + 8"],
        answer_text: "B) y = −(1/3)x",
        explanation: "Perpendicular slope = −1/3. Substitute (3, −1): −1 = −(1/3)(3) + b → −1 = −1 + b → b = 0. Equation: y = −(1/3)x.",
      },
      {
        question_text: "A temperature conversion function is F(c) = (9/5)c + 32, where c is degrees Celsius and F is degrees Fahrenheit. What is the rate of change, and what does it mean?",
        difficulty: "Hard",
        choices: ["A) 32; the freezing point in Fahrenheit", "B) 9/5; for every 1°C increase, Fahrenheit increases by 1.8°F", "C) 5/9; for every 1°F increase, Celsius increases by 5/9°C", "D) 32; the slope of the conversion"],
        answer_text: "B) 9/5; for every 1°C increase, Fahrenheit increases by 1.8°F",
        explanation: "The rate of change is the slope, m = 9/5 = 1.8. This means each additional degree Celsius corresponds to 1.8 additional degrees Fahrenheit. The 32 is the y-intercept (the Fahrenheit value at 0°C, which is the freezing point).",
      },
      {
        question_text: "Line j has equation y = (2/3)x + 4. Line m is perpendicular to line j and passes through the point (4, 1). What is the y-intercept of line m?",
        difficulty: "Hard",
        choices: ["A) 3", "B) 5", "C) 7", "D) 10"],
        answer_text: "C) 7",
        explanation: "The slope of line j is 2/3, so the perpendicular slope is −3/2. Use point (4, 1): 1 = (−3/2)(4) + b → 1 = −6 + b → b = 7. Line m: y = (−3/2)x + 7, so the y-intercept is 7.",
      },
      {
        question_text: "The function h(x) = −(1/2)x + 7 gives the height (in feet) of a ball t seconds after being thrown. At what time does the ball reach a height of 4 feet?",
        difficulty: "Hard",
        choices: ["A) t = 4", "B) t = 5", "C) t = 6", "D) t = 8"],
        answer_text: "C) t = 6",
        explanation: "Set h(x) = 4: −(1/2)x + 7 = 4. Subtract 7: −(1/2)x = −3. Multiply by −2: x = 6. The ball reaches 4 feet at t = 6 seconds.",
      },
    ],
  },

  "5.4": {
    essentialQuestion:
      "How do you find the point where two linear equations are satisfied at the same time, and what does that point mean in a real-world context?",
    concepts: [
      "A system of two linear equations asks: is there an (x, y) point that satisfies BOTH equations simultaneously? Graphically, it is the intersection point.",
      "Substitution works best when one variable is already isolated — replace it in the other equation and solve for the remaining variable.",
      "Elimination works best when coefficients line up — add or subtract the equations to cancel one variable completely.",
      "A system has no solution when the lines are parallel (same slope, different intercepts) — they never cross.",
      "A system has infinitely many solutions when the equations describe the same line — every point on the line works.",
    ],
    keyTerms: [
      {
        term: "System of Equations",
        definition: "Two or more equations that must be true at the same time. The solution is the set of values that satisfies every equation.",
      },
      {
        term: "Substitution Method",
        definition: "Solve one equation for one variable, then plug that expression into the other equation to reduce to one variable.",
      },
      {
        term: "Elimination Method",
        definition: "Add or subtract the equations (sometimes after multiplying by a constant) to cancel one variable, then solve for the other.",
      },
      {
        term: "Consistent / Inconsistent System",
        definition: "A consistent system has at least one solution; an inconsistent system has no solution (parallel lines).",
      },
    ],
    workedExample: {
      problem: "Solve the system: 3x + 2y = 16 and x − y = 1.",
      steps: [
        "Step 1: Use substitution. From x − y = 1, solve for x: x = y + 1.",
        "Step 2: Substitute x = y + 1 into the first equation: 3(y + 1) + 2y = 16.",
        "Step 3: Distribute: 3y + 3 + 2y = 16 → 5y + 3 = 16 → 5y = 13 → y = 13/5.",
        "Step 4: Substitute back: x = 13/5 + 1 = 18/5.",
        "Step 5: Check in both equations: 3(18/5) + 2(13/5) = 54/5 + 26/5 = 80/5 = 16 ✓ and 18/5 − 13/5 = 5/5 = 1 ✓.",
      ],
      answer: "x = 18/5, y = 13/5  (or x = 3.6, y = 2.6)",
    },
    commonMistakes: [
      "After finding one variable, forgetting to substitute back to find the second variable — always find both x and y.",
      "In elimination, subtracting equations incorrectly — especially with negatives. Write out the subtraction carefully term by term.",
      "Checking the solution in only one equation instead of both — a value might satisfy one equation but not the other.",
    ],
    tip: "On the SAT, if a system looks messy, check whether the answer choices are simple numbers. If they are, try plugging the answer choices into both equations — elimination by testing is often faster than full algebraic elimination.",
    graphType: "coordinate-plane",
    questions: [
      {
        question_text: "Which ordered pair is the solution to the system y = 2x − 1 and y = −x + 5?",
        difficulty: "Easy",
        choices: ["A) (1, 4)", "B) (2, 3)", "C) (3, 5)", "D) (0, 5)"],
        answer_text: "B) (2, 3)",
        explanation: "Set equal: 2x − 1 = −x + 5 → 3x = 6 → x = 2. Then y = 2(2) − 1 = 3. Check in second: y = −2 + 5 = 3. Solution: (2, 3).",
      },
      {
        question_text: "If x + y = 10 and x − y = 4, what is the value of x?",
        difficulty: "Easy",
        choices: ["A) 3", "B) 5", "C) 7", "D) 9"],
        answer_text: "C) 7",
        explanation: "Add the two equations: 2x = 14 → x = 7. Then y = 10 − 7 = 3. Check: 7 − 3 = 4 ✓.",
      },
      {
        question_text: "Two lines are graphed on a coordinate plane. One has slope 3 and y-intercept −2, and the other has slope 3 and y-intercept 5. How many solutions does this system have?",
        difficulty: "Easy",
        choices: ["A) Exactly one", "B) Exactly two", "C) Infinitely many", "D) No solution"],
        answer_text: "D) No solution",
        explanation: "Both lines have slope 3 but different y-intercepts (−2 and 5), so they are parallel and never intersect. A parallel system has no solution.",
      },
      {
        question_text: "By inspection, what is the solution to: y = 3x + 1 and y = 3x + 1?",
        difficulty: "Easy",
        choices: ["A) No solution", "B) (0, 1) only", "C) (1, 4) only", "D) Infinitely many solutions"],
        answer_text: "D) Infinitely many solutions",
        explanation: "Both equations are identical — they describe the same line. Every point on the line y = 3x + 1 is a solution, so there are infinitely many solutions.",
      },
      {
        question_text: "Solve by elimination: 2x + 3y = 12 and 4x − 3y = 6.",
        difficulty: "Medium",
        choices: ["A) (2, 3)", "B) (3, 2)", "C) (3, 3)", "D) (1, 4)"],
        answer_text: "B) (3, 2)",
        explanation: "Add the equations: 6x = 18 → x = 3. Substitute into 2x + 3y = 12: 6 + 3y = 12 → 3y = 6 → y = 2. Solution: (3, 2).",
      },
      {
        question_text: "Solve the system: x + 2y = 7 and x = y + 1.",
        difficulty: "Medium",
        choices: ["A) (1, 3)", "B) (3, 2)", "C) (5, 1)", "D) (2, 3)"],
        answer_text: "B) (3, 2)",
        explanation: "Substitute x = y + 1 into x + 2y = 7: (y + 1) + 2y = 7 → 3y + 1 = 7 → 3y = 6 → y = 2. Then x = 2 + 1 = 3. Solution: (3, 2). Check: 3 + 2(2) = 7 ✓ and 3 = 2 + 1 ✓.",
      },
      {
        question_text: "A store sells pens for $2 each and notebooks for $5 each. Maria bought 8 items and spent $25. How many pens did she buy?",
        difficulty: "Medium",
        choices: ["A) 3", "B) 4", "C) 5", "D) 7"],
        answer_text: "C) 5",
        explanation: "Let p = pens, n = notebooks. System: p + n = 8 and 2p + 5n = 25. From first equation: n = 8 − p. Substitute: 2p + 5(8 − p) = 25 → 2p + 40 − 5p = 25 → −3p = −15 → p = 5. She bought 5 pens.",
      },
      {
        question_text: "For what value of k does the system 2x + ky = 4 and 6x + 3y = 12 have infinitely many solutions?",
        difficulty: "Medium",
        choices: ["A) k = 1", "B) k = 2", "C) k = 3", "D) k = 6"],
        answer_text: "A) k = 1",
        explanation: "Infinitely many solutions means the equations are multiples of each other. Multiply the first by 3: 6x + 3ky = 12. For this to match 6x + 3y = 12, we need 3k = 3, so k = 1.",
      },
      {
        question_text: "Two friends, Alex and Sam, are saving money. Alex has $200 and saves $15 per week. Sam has $80 and saves $25 per week. After how many weeks will they have the same amount?",
        difficulty: "Hard",
        choices: ["A) 10 weeks", "B) 12 weeks", "C) 14 weeks", "D) 16 weeks"],
        answer_text: "B) 12 weeks",
        explanation: "Alex: A = 200 + 15w. Sam: S = 80 + 25w. Set equal: 200 + 15w = 80 + 25w → 120 = 10w → w = 12 weeks.",
      },
      {
        question_text: "Solve the system: 3x − 2y = 7 and 6x − 4y = 9.",
        difficulty: "Hard",
        choices: ["A) (1, −2)", "B) (3, 1)", "C) No solution", "D) Infinitely many solutions"],
        answer_text: "C) No solution",
        explanation: "Multiply the first equation by 2: 6x − 4y = 14. The second equation gives 6x − 4y = 9. Since 14 ≠ 9 but the left sides are identical, this is a contradiction — no solution (parallel lines).",
      },
      {
        question_text: "An airplane flies with the wind at 480 mph and against the wind at 360 mph. What is the speed of the wind?",
        difficulty: "Hard",
        choices: ["A) 40 mph", "B) 60 mph", "C) 80 mph", "D) 120 mph"],
        answer_text: "B) 60 mph",
        explanation: "Let p = plane speed and w = wind speed. With wind: p + w = 480. Against wind: p − w = 360. Add equations: 2p = 840 → p = 420. Then w = 480 − 420 = 60 mph.",
      },
      {
        question_text: "The solution to the system ax + 3y = 9 and 2x + y = 3 is (0, 3). What is the value of a?",
        difficulty: "Hard",
        choices: ["A) a = 0", "B) a = 3", "C) a = 6", "D) a can be any value"],
        answer_text: "D) a can be any value",
        explanation: "Substitute (0, 3) into ax + 3y = 9: a(0) + 3(3) = 9 → 9 = 9. This is true for any value of a. Check in second: 2(0) + 3 = 3 ✓. So a can be any real number.",
      },
    ],
  },

  "5.5": {
    essentialQuestion:
      "How do you solve and graph inequalities, and what does flipping the inequality sign really mean?",
    concepts: [
      "Solving an inequality works just like solving an equation — except when you multiply or divide BOTH sides by a negative number, you flip the inequality sign.",
      "The solution to an inequality is a whole range of values, not just one number — graph it on a number line using open circles (strict) or closed circles (inclusive).",
      "Compound inequalities join two inequalities: AND means both must be true (intersection), OR means at least one is true (union).",
      "Absolute value inequalities |x| < a split into −a < x < a, while |x| > a splits into x < −a OR x > a.",
      "Always check your answer by plugging a value from the solution set back into the original inequality.",
    ],
    keyTerms: [
      {
        term: "Linear Inequality",
        definition: "A statement like 3x + 2 > 8 that shows one expression is greater than (or less than) another, with infinitely many solutions.",
      },
      {
        term: "Compound Inequality",
        definition: "Two inequalities connected by AND (both true) or OR (at least one true). Example: −3 < x ≤ 7.",
      },
      {
        term: "Absolute Value Inequality",
        definition: "An inequality involving |expression|. Represents how far a value is from zero — splits into two cases.",
      },
      {
        term: "Solution Set",
        definition: "All the values of the variable that make an inequality true. Usually written in interval notation or shown on a number line.",
      },
    ],
    workedExample: {
      problem: "Solve and graph: −3x + 6 ≥ −9",
      steps: [
        "Step 1: Subtract 6 from both sides: −3x ≥ −15.",
        "Step 2: Divide both sides by −3. Because we divide by a negative, FLIP the inequality: x ≤ 5.",
        "Step 3: The solution is all x-values less than or equal to 5: (−∞, 5].",
        "Step 4: Graph: draw a number line, place a closed circle (filled dot) at 5, and shade everything to the LEFT.",
        "Step 5: Check with x = 0 (which should work): −3(0) + 6 = 6 ≥ −9 ✓. Check x = 6 (should NOT work): −3(6) + 6 = −12, and −12 ≥ −9 is FALSE ✓.",
      ],
      answer: "x ≤ 5, or (−∞, 5]",
    },
    commonMistakes: [
      "Forgetting to flip the inequality sign when multiplying or dividing by a negative number — the most tested mistake on this topic.",
      "Using a closed circle when the inequality is strict (< or >) or an open circle when it is inclusive (≤ or ≥).",
      "In compound AND inequalities, not applying the operations to all three parts — for −2 < 3x + 1 < 10, you must subtract 1 from ALL three sections.",
    ],
    tip: "When you see a negative coefficient in front of the variable, mentally flag it before you start solving — remind yourself to flip the sign at that exact step. One tiny error here changes the entire solution set.",
    graphType: "number-line",
    questions: [
      {
        question_text: "Solve for x: x + 9 > 14",
        difficulty: "Easy",
        choices: ["A) x > 5", "B) x > 23", "C) x < 5", "D) x ≥ 5"],
        answer_text: "A) x > 5",
        explanation: "Subtract 9 from both sides: x > 14 − 9 = 5. The inequality sign does not flip because we subtracted (not multiplied/divided by negative).",
      },
      {
        question_text: "Which number line correctly graphs x ≤ −2?",
        difficulty: "Easy",
        choices: ["A) Open circle at −2, shaded left", "B) Closed circle at −2, shaded right", "C) Closed circle at −2, shaded left", "D) Open circle at −2, shaded right"],
        answer_text: "C) Closed circle at −2, shaded left",
        explanation: "Since the inequality is ≤ (less than or equal to), use a closed circle at −2. The shading goes to the LEFT because we want all values less than or equal to −2.",
      },
      {
        question_text: "Solve: 4x < 20",
        difficulty: "Easy",
        choices: ["A) x < 5", "B) x > 5", "C) x < 80", "D) x ≤ 5"],
        answer_text: "A) x < 5",
        explanation: "Divide both sides by 4 (positive, so no flip): x < 20/4 = 5.",
      },
      {
        question_text: "Which value of x satisfies 2x − 3 ≥ 7?",
        difficulty: "Easy",
        choices: ["A) x = 4", "B) x = 3", "C) x = 5", "D) x = 2"],
        answer_text: "C) x = 5",
        explanation: "Solve: 2x ≥ 10 → x ≥ 5. Among the choices, only x = 5 satisfies x ≥ 5. Check: 2(5) − 3 = 7 ≥ 7 ✓.",
      },
      {
        question_text: "Solve: −5x + 10 < 25",
        difficulty: "Medium",
        choices: ["A) x < −3", "B) x > −3", "C) x < 3", "D) x > 3"],
        answer_text: "B) x > −3",
        explanation: "Subtract 10: −5x < 15. Divide by −5 and FLIP the sign: x > −3.",
      },
      {
        question_text: "Solve the compound inequality: −1 < 2x + 3 < 11",
        difficulty: "Medium",
        choices: ["A) −2 < x < 4", "B) 1 < x < 7", "C) −4 < x < 2", "D) −1 < x < 4"],
        answer_text: "A) −2 < x < 4",
        explanation: "Subtract 3 from all parts: −4 < 2x < 8. Divide all parts by 2: −2 < x < 4.",
      },
      {
        question_text: "Solve: 3x − 1 ≥ 5 OR 2x + 4 ≤ 0",
        difficulty: "Medium",
        choices: ["A) x ≥ 2 or x ≤ −2", "B) −2 ≤ x ≤ 2", "C) x ≥ 2 only", "D) x ≤ −2 only"],
        answer_text: "A) x ≥ 2 or x ≤ −2",
        explanation: "Solve each: 3x − 1 ≥ 5 → 3x ≥ 6 → x ≥ 2. And 2x + 4 ≤ 0 → 2x ≤ −4 → x ≤ −2. The OR union is x ≥ 2 or x ≤ −2.",
      },
      {
        question_text: "A store requires customers to spend at least $50 to get free shipping, but the cart can hold at most $200 worth of items. Which inequality models the cart total c for free shipping?",
        difficulty: "Medium",
        choices: ["A) c ≤ 50", "B) c > 200", "C) 50 ≤ c ≤ 200", "D) c < 50 or c > 200"],
        answer_text: "C) 50 ≤ c ≤ 200",
        explanation: "The customer must spend at least $50 (c ≥ 50) and at most $200 (c ≤ 200). Combined: 50 ≤ c ≤ 200.",
      },
      {
        question_text: "Solve: |x − 3| < 5",
        difficulty: "Hard",
        choices: ["A) −2 < x < 8", "B) x < −2 or x > 8", "C) −8 < x < 2", "D) x < 2 or x > 8"],
        answer_text: "A) −2 < x < 8",
        explanation: "|x − 3| < 5 means −5 < x − 3 < 5. Add 3 to all parts: −2 < x < 8.",
      },
      {
        question_text: "Solve: |2x + 1| ≥ 7",
        difficulty: "Hard",
        choices: ["A) −4 ≤ x ≤ 3", "B) x ≤ −4 or x ≥ 3", "C) x ≤ −3 or x ≥ 4", "D) −3 ≤ x ≤ 4"],
        answer_text: "B) x ≤ −4 or x ≥ 3",
        explanation: "|2x + 1| ≥ 7 splits into two cases: 2x + 1 ≥ 7 → x ≥ 3, OR 2x + 1 ≤ −7 → 2x ≤ −8 → x ≤ −4.",
      },
      {
        question_text: "A delivery driver earns $12 per hour plus $0.50 per mile driven. She wants to earn at least $150 in an 8-hour shift. Write and solve an inequality for the minimum miles m she must drive.",
        difficulty: "Hard",
        choices: ["A) m ≥ 108", "B) m ≥ 204", "C) m ≥ 150", "D) m ≥ 60"],
        answer_text: "A) m ≥ 108",
        explanation: "Earnings: 12(8) + 0.50m ≥ 150 → 96 + 0.50m ≥ 150 → 0.50m ≥ 54 → m ≥ 108 miles.",
      },
      {
        question_text: "For which values of x is −2(x − 4) > 3(x + 1)?",
        difficulty: "Hard",
        choices: ["A) x > 1", "B) x < 1", "C) x > −1", "D) x < −1"],
        answer_text: "B) x < 1",
        explanation: "Distribute: −2x + 8 > 3x + 3. Subtract 3x: −5x + 8 > 3. Subtract 8: −5x > −5. Divide by −5 and FLIP: x < 1.",
      },
    ],
  },

  "5.6": {
    essentialQuestion:
      "How do you represent multiple constraints simultaneously with a system of inequalities, and how do you find the region where all constraints are satisfied?",
    concepts: [
      "A system of inequalities is a set of two or more inequalities that must ALL be satisfied — the solution is the region where the shaded areas overlap (the feasible region).",
      "To graph one inequality: draw the boundary line (solid if ≤/≥, dashed if </>) then shade the correct side by testing a point like (0, 0).",
      "The feasible region is the set of all (x, y) points that satisfy every inequality in the system — it is always an intersection of half-planes.",
      "In optimization problems, the maximum or minimum of an objective function always occurs at a corner point (vertex) of the feasible region.",
      "Real-world constraints use words like 'at least', 'no more than', 'must exceed' — translate these carefully into ≥, ≤, and > respectively.",
    ],
    keyTerms: [
      {
        term: "System of Inequalities",
        definition: "Two or more inequalities that must all be true simultaneously. The solution is the overlapping region on a graph.",
      },
      {
        term: "Feasible Region",
        definition: "The set of all points (x, y) that satisfy every inequality in the system. Shown as the shaded overlap on a coordinate plane.",
      },
      {
        term: "Boundary Line",
        definition: "The line that forms the edge of the solution region for an inequality. Solid if the inequality includes equality (≤ or ≥), dashed if strict (< or >).",
      },
      {
        term: "Test Point",
        definition: "A specific point (usually the origin (0,0)) substituted into an inequality to determine which side of the boundary line to shade.",
      },
    ],
    workedExample: {
      problem: "Graph the system: y > 2x − 1 and y ≤ −x + 4. Determine whether (1, 2) is in the feasible region.",
      steps: [
        "Step 1: Graph y = 2x − 1 as a dashed line (strict inequality >). Graph y = −x + 4 as a solid line (includes equality ≤).",
        "Step 2: For y > 2x − 1: test (0, 0): 0 > −1 is TRUE. Shade above the dashed line.",
        "Step 3: For y ≤ −x + 4: test (0, 0): 0 ≤ 4 is TRUE. Shade below (and on) the solid line.",
        "Step 4: The feasible region is where both shadings overlap.",
        "Step 5: Test (1, 2): Check first: 2 > 2(1) − 1 = 1 ✓. Check second: 2 ≤ −1 + 4 = 3 ✓. Both satisfied — (1, 2) IS in the feasible region.",
      ],
      answer: "(1, 2) is in the feasible region.",
    },
    commonMistakes: [
      "Using a solid line for a strict inequality (< or >) — the boundary should be dashed to show those points are NOT included.",
      "Shading the wrong side — always use a test point. The origin (0, 0) works unless the boundary line passes through it.",
      "Forgetting that the feasible region must satisfy ALL inequalities at once — check every inequality before concluding a point is in the region.",
    ],
    tip: "When a SAT problem asks which ordered pair satisfies a system of inequalities, skip the graph and just plug each answer choice into all the inequalities — the one that makes every inequality true is the answer. It takes 30 seconds.",
    graphType: "coordinate-plane",
    questions: [
      {
        question_text: "Which ordered pair satisfies the inequality y < 3x − 2?",
        difficulty: "Easy",
        choices: ["A) (0, 0)", "B) (1, 2)", "C) (2, 5)", "D) (3, 1)"],
        answer_text: "D) (3, 1)",
        explanation: "Test each: (0, 0): 0 < −2? No. (1, 2): 2 < 1? No. (2, 5): 5 < 4? No. (3, 1): 1 < 7? Yes. Answer is (3, 1).",
      },
      {
        question_text: "The graph of y ≥ −2x + 5 includes which type of boundary line?",
        difficulty: "Easy",
        choices: ["A) Dashed, because the inequality is strict", "B) Solid, because the inequality includes equality", "C) Dashed, because slope is negative", "D) Solid, because the y-intercept is positive"],
        answer_text: "B) Solid, because the inequality includes equality",
        explanation: "The ≥ symbol means 'greater than or equal to,' so points ON the line are included in the solution. This means the boundary line is solid.",
      },
      {
        question_text: "Which ordered pair is NOT a solution to the system y > x + 1 and y < −x + 5?",
        difficulty: "Easy",
        choices: ["A) (1, 3)", "B) (0, 2)", "C) (2, 4)", "D) (3, 5)"],
        answer_text: "D) (3, 5)",
        explanation: "Test (3, 5): First: 5 > 3 + 1 = 4? Yes. Second: 5 < −3 + 5 = 2? No. So (3, 5) fails the second inequality and is NOT in the feasible region.",
      },
      {
        question_text: "Which ordered pair satisfies both x ≥ 0 and y ≥ 0 and x + y ≤ 6?",
        difficulty: "Easy",
        choices: ["A) (−1, 4)", "B) (3, 4)", "C) (2, 3)", "D) (7, 0)"],
        answer_text: "C) (2, 3)",
        explanation: "Test (2, 3): x ≥ 0 → 2 ≥ 0 ✓. y ≥ 0 → 3 ≥ 0 ✓. x + y ≤ 6 → 5 ≤ 6 ✓. All three satisfied.",
      },
      {
        question_text: "Which of the following systems of inequalities has (2, 3) as a solution?",
        difficulty: "Medium",
        choices: ["A) y > 2x and y < x", "B) y ≥ x + 1 and y ≤ 2x − 1", "C) y ≤ x + 2 and y ≥ 2x − 1", "D) y > 3x and y < x + 1"],
        answer_text: "C) y ≤ x + 2 and y ≥ 2x − 1",
        explanation: "Test (2, 3) in option C: y ≤ x + 2 → 3 ≤ 4 ✓. y ≥ 2x − 1 → 3 ≥ 3 ✓. Both satisfied. (Check others to confirm they fail.)",
      },
      {
        question_text: "A student wants to study math (m hours) and English (e hours) each week. She must study at least 2 hours of math and at least 1 hour of English, but no more than 8 hours total. Which system models these constraints?",
        difficulty: "Medium",
        choices: [
          "A) m ≥ 2, e ≥ 1, m + e ≤ 8",
          "B) m > 2, e > 1, m + e < 8",
          "C) m ≤ 2, e ≤ 1, m + e ≥ 8",
          "D) m ≥ 2, e ≥ 1, m + e ≥ 8"
        ],
        answer_text: "A) m ≥ 2, e ≥ 1, m + e ≤ 8",
        explanation: "'At least 2 hours of math' means m ≥ 2. 'At least 1 hour of English' means e ≥ 1. 'No more than 8 hours total' means m + e ≤ 8. The ≥ and ≤ signs are used because the bounds are inclusive.",
      },
      {
        question_text: "The feasible region for a system of inequalities has corner points at (0, 0), (4, 0), (3, 5), and (0, 6). If the objective function is P = 2x + 3y, what is the maximum value of P?",
        difficulty: "Medium",
        choices: ["A) 8", "B) 15", "C) 21", "D) 18"],
        answer_text: "C) 21",
        explanation: "Evaluate P = 2x + 3y at each corner: (0,0): 0. (4,0): 8. (3,5): 6+15=21. (0,6): 18. The maximum is 21 at (3, 5).",
      },
      {
        question_text: "Which ordered pair lies on the boundary of y ≤ 2x + 3 and y ≥ −x + 1 but NOT strictly inside the feasible region?",
        difficulty: "Medium",
        choices: ["A) (1, 5)", "B) (0, 1)", "C) (2, 3)", "D) (−1, 2)"],
        answer_text: "A) (1, 5)",
        explanation: "Test (1, 5): First: 5 ≤ 2(1) + 3 = 5 — on the boundary (equal). Second: 5 ≥ −1 + 1 = 0 ✓. So (1, 5) is on the boundary but satisfies both inequalities; it's at the edge of the feasible region, not strictly inside.",
      },
      {
        question_text: "A bakery makes at most 100 total items per day. It makes at least 30 cakes (c) and at least 20 pies (p). Which system of inequalities models this situation, and how many pies can they make if they make exactly 30 cakes?",
        difficulty: "Hard",
        choices: [
          "A) c ≥ 30, p ≥ 20, c + p ≤ 100; up to 70 pies",
          "B) c ≤ 30, p ≤ 20, c + p ≤ 100; exactly 50 pies",
          "C) c ≥ 30, p ≥ 20, c + p ≥ 100; at least 70 pies",
          "D) c ≥ 30, p ≥ 20, c + p = 100; exactly 70 pies"
        ],
        answer_text: "A) c ≥ 30, p ≥ 20, c + p ≤ 100; up to 70 pies",
        explanation: "System: c ≥ 30, p ≥ 20, and c + p ≤ 100. If c = 30: 30 + p ≤ 100 → p ≤ 70. Since p ≥ 20, the range is 20 ≤ p ≤ 70. The maximum is 70 pies.",
      },
      {
        question_text: "A company produces two products, X and Y. Each unit of X takes 2 hours and each unit of Y takes 3 hours. Total production time is at most 12 hours. They must produce at least 1 unit of each. Which feasible point maximizes the total units produced (x + y)?",
        difficulty: "Hard",
        choices: ["A) (1, 1)", "B) (1, 3)", "C) (2, 2)", "D) (3, 2)"],
        answer_text: "D) (3, 2)",
        explanation: "Constraints: x ≥ 1, y ≥ 1, 2x + 3y ≤ 12. Check each choice: (1,1): feasible, x+y=2. (1,3): 2+9=11 ≤ 12 ✓, x+y=4. (2,2): 4+6=10 ≤ 12 ✓, x+y=4. (3,2): 6+6=12 ≤ 12 ✓, x+y=5. The maximum total is 5 at (3, 2).",
      },
      {
        question_text: "Which system of inequalities is represented by the feasible region where x ≥ 0, y ≥ 0, and the region is bounded above-left by y ≤ −x + 6?",
        difficulty: "Hard",
        choices: [
          "A) x ≥ 0, y ≥ 0, y ≤ −x + 6",
          "B) x ≤ 0, y ≤ 0, y ≥ −x + 6",
          "C) x ≥ 0, y ≥ 0, y ≥ −x + 6",
          "D) x ≤ 0, y ≥ 0, y ≤ −x + 6"
        ],
        answer_text: "A) x ≥ 0, y ≥ 0, y ≤ −x + 6",
        explanation: "The feasible region is in the first quadrant (x ≥ 0 and y ≥ 0) and below the line y = −x + 6 (y ≤ −x + 6). This is a triangle with vertices at (0,0), (6,0), and (0,6).",
      },
      {
        question_text: "A point (a, b) is in the feasible region of y > 3x − 6 and y ≤ −(2/3)x + 4. Which of the following could be (a, b)?",
        difficulty: "Hard",
        choices: ["A) (4, 6)", "B) (3, 5)", "C) (1, 2)", "D) (2, 3)"],
        answer_text: "C) (1, 2)",
        explanation: "Test each: (4,6): y > 3(4)−6=6 → 6>6? No (strict). (3,5): y ≤ −2+4=2 → 5≤2? No. (1,2): y > 3−6=−3 → 2>−3 ✓ and y ≤ −2/3+4=10/3 → 2≤3.33 ✓. Both satisfied. (2,3): y ≤ −4/3+4=8/3 → 3≤2.67? No. Answer: (1, 2).",
      },
    ],
  },

  "5.7": {
    essentialQuestion:
      "How can you tell when two algebraic expressions are equivalent, and what strategies help you simplify or transform them?",
    concepts: [
      "Two expressions are equivalent if they produce the same output for every value of the variable — you can verify this by substituting a specific number.",
      "Combining like terms means adding or subtracting terms with the same variable part: 3x² and 7x² are like terms, but 3x² and 7x are not.",
      "The distributive property is the engine behind expanding: a(b + c) = ab + ac. Use it to multiply every term inside the parentheses.",
      "Factoring is the reverse of distributing — find a common factor and pull it out: 6x + 9 = 3(2x + 3).",
      "Algebraic identities like (a + b)² = a² + 2ab + b² and (a − b)(a + b) = a² − b² appear frequently on the SAT as 'which expression is equivalent to...'",
    ],
    keyTerms: [
      {
        term: "Like Terms",
        definition: "Terms that have the same variable(s) raised to the same power. Only like terms can be combined by addition or subtraction.",
      },
      {
        term: "Distributive Property",
        definition: "The rule a(b + c) = ab + ac that allows you to multiply a factor across the terms inside parentheses.",
      },
      {
        term: "Factoring",
        definition: "Rewriting an expression as a product of simpler factors. The reverse of distributing — find what is common and pull it out.",
      },
      {
        term: "Algebraic Identity",
        definition: "An equation that is true for all values of the variable, such as (a + b)² = a² + 2ab + b² or (a + b)(a − b) = a² − b².",
      },
    ],
    workedExample: {
      problem: "Which expression is equivalent to (2x + 3)² − (x − 1)²?",
      steps: [
        "Step 1: Expand (2x + 3)² using (a + b)² = a² + 2ab + b²: (2x)² + 2(2x)(3) + 3² = 4x² + 12x + 9.",
        "Step 2: Expand (x − 1)² using (a − b)² = a² − 2ab + b²: x² − 2x + 1.",
        "Step 3: Subtract: (4x² + 12x + 9) − (x² − 2x + 1). Distribute the minus sign: 4x² + 12x + 9 − x² + 2x − 1.",
        "Step 4: Combine like terms: (4x² − x²) + (12x + 2x) + (9 − 1) = 3x² + 14x + 8.",
        "Step 5: The equivalent expression is 3x² + 14x + 8. Verify by substituting x = 1: (2+3)² − (1−1)² = 25 − 0 = 25. Check: 3(1) + 14(1) + 8 = 25 ✓.",
      ],
      answer: "3x² + 14x + 8",
    },
    commonMistakes: [
      "Squaring a binomial incorrectly: (a + b)² ≠ a² + b². You must include the 2ab middle term — this is the most common algebra error on the SAT.",
      "Distributing a negative sign improperly: −(x² − 2x + 1) becomes −x² + 2x − 1, NOT −x² − 2x − 1.",
      "Combining unlike terms: you cannot add 3x² and 5x — they have different powers and must stay separate.",
    ],
    tip: "When the SAT asks which expression is equivalent, plug in a simple value like x = 1 or x = 2 into the original expression, compute the number, then check which answer choice gives the same number. This works 100% of the time for equivalence questions.",
    graphType: "none",
    questions: [
      {
        question_text: "Simplify: 4x + 7y − 2x + 3y",
        difficulty: "Easy",
        choices: ["A) 2x + 10y", "B) 6x + 10y", "C) 2x + 4y", "D) 6x + 4y"],
        answer_text: "A) 2x + 10y",
        explanation: "Combine x-terms: 4x − 2x = 2x. Combine y-terms: 7y + 3y = 10y. Result: 2x + 10y.",
      },
      {
        question_text: "Which expression is equivalent to 3(2x − 5)?",
        difficulty: "Easy",
        choices: ["A) 6x − 5", "B) 6x − 15", "C) 5x − 15", "D) 6x + 15"],
        answer_text: "B) 6x − 15",
        explanation: "Distribute: 3 × 2x = 6x and 3 × (−5) = −15. Result: 6x − 15.",
      },
      {
        question_text: "Which expression is equivalent to 8x² + 12x?",
        difficulty: "Easy",
        choices: ["A) 4(2x² + 3x)", "B) 4x(2x + 3)", "C) 2x(4x + 6)", "D) All of the above"],
        answer_text: "D) All of the above",
        explanation: "Check each: 4(2x² + 3x) = 8x² + 12x ✓. 4x(2x + 3) = 8x² + 12x ✓. 2x(4x + 6) = 8x² + 12x ✓. All three are equivalent forms of the original expression.",
      },
      {
        question_text: "Simplify: 5x² − 3x + 2x² + 7x − 4",
        difficulty: "Easy",
        choices: ["A) 7x² + 4x − 4", "B) 7x² − 10x − 4", "C) 3x² + 4x − 4", "D) 7x² + 10x − 4"],
        answer_text: "A) 7x² + 4x − 4",
        explanation: "Combine x²-terms: 5x² + 2x² = 7x². Combine x-terms: −3x + 7x = 4x. Constant: −4. Result: 7x² + 4x − 4.",
      },
      {
        question_text: "Which expression is equivalent to (x + 4)(x − 3)?",
        difficulty: "Medium",
        choices: ["A) x² + x − 12", "B) x² − 12", "C) x² + 7x − 12", "D) x² − x − 12"],
        answer_text: "A) x² + x − 12",
        explanation: "FOIL: x·x = x², x·(−3) = −3x, 4·x = 4x, 4·(−3) = −12. Combine: x² + (−3x + 4x) − 12 = x² + x − 12.",
      },
      {
        question_text: "Which expression is equivalent to (3x − 2)²?",
        difficulty: "Medium",
        choices: ["A) 9x² − 4", "B) 9x² − 6x + 4", "C) 9x² − 12x + 4", "D) 3x² − 12x + 4"],
        answer_text: "C) 9x² − 12x + 4",
        explanation: "Use (a − b)² = a² − 2ab + b²: (3x)² − 2(3x)(2) + 2² = 9x² − 12x + 4.",
      },
      {
        question_text: "Factor completely: x² − 9",
        difficulty: "Medium",
        choices: ["A) (x − 3)²", "B) (x + 3)(x − 3)", "C) (x − 9)(x + 1)", "D) x(x − 9)"],
        answer_text: "B) (x + 3)(x − 3)",
        explanation: "x² − 9 is a difference of squares: a² − b² = (a + b)(a − b). Here a = x and b = 3, so x² − 9 = (x + 3)(x − 3).",
      },
      {
        question_text: "Which expression is equivalent to (2x + 1)(3x − 4)?",
        difficulty: "Medium",
        choices: ["A) 6x² − 5x − 4", "B) 6x² + 5x − 4", "C) 5x² − 5x − 4", "D) 6x² − 8x − 4"],
        answer_text: "A) 6x² − 5x − 4",
        explanation: "FOIL: 2x·3x = 6x², 2x·(−4) = −8x, 1·3x = 3x, 1·(−4) = −4. Combine: 6x² + (−8x + 3x) − 4 = 6x² − 5x − 4.",
      },
      {
        question_text: "If x² − bx + 16 = (x − 4)², what is the value of b?",
        difficulty: "Hard",
        choices: ["A) b = 4", "B) b = 8", "C) b = 16", "D) b = 2"],
        answer_text: "B) b = 8",
        explanation: "Expand (x − 4)²: x² − 8x + 16. Comparing to x² − bx + 16, we get b = 8.",
      },
      {
        question_text: "Which expression is equivalent to (x + 5)² − 25?",
        difficulty: "Hard",
        choices: ["A) x²", "B) x² + 10x", "C) x² + 25", "D) x² + 10x + 25"],
        answer_text: "B) x² + 10x",
        explanation: "Expand (x + 5)²: x² + 10x + 25. Then subtract 25: x² + 10x + 25 − 25 = x² + 10x.",
      },
      {
        question_text: "The expression (4x² + 6x) / (2x) simplifies to which of the following (assume x ≠ 0)?",
        difficulty: "Hard",
        choices: ["A) 4x + 6", "B) 2x + 3", "C) 2x² + 3", "D) 4x + 3"],
        answer_text: "B) 2x + 3",
        explanation: "Divide each term: 4x²/(2x) = 2x and 6x/(2x) = 3. Result: 2x + 3.",
      },
      {
        question_text: "Which of the following is equivalent to 2(x + 3)² − 3(x − 1)²?",
        difficulty: "Hard",
        choices: ["A) −x² + 18x + 15", "B) −x² + 18x − 15", "C) x² + 18x + 15", "D) −x² − 18x + 15"],
        answer_text: "A) −x² + 18x + 15",
        explanation: "Expand: 2(x + 3)² = 2(x² + 6x + 9) = 2x² + 12x + 18. And 3(x − 1)² = 3(x² − 2x + 1) = 3x² − 6x + 3. Subtract: (2x² + 12x + 18) − (3x² − 6x + 3) = 2x² − 3x² + 12x + 6x + 18 − 3 = −x² + 18x + 15.",
      },
    ],
  },
}
