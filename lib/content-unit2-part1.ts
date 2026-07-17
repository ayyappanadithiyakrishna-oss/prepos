import type { LessonContent } from './lesson-content'

export const UNIT2_PART1: Record<string, LessonContent> = {
  "2.1": {
    essentialQuestion:
      "How do arithmetic and geometric sequences model real-world change, and why are they the discrete counterparts of linear and exponential functions?",

    apBoardNote:
      "CED Topic 2.1 establishes the foundational parallel between sequences and continuous functions. Students must be able to identify sequence type from a table by computing differences or ratios, write explicit formulas, and articulate the conceptual link between arithmetic sequences and linear functions, and geometric sequences and exponential functions. This parallel is tested directly on the AP exam through table interpretation and context problems.",

    teacherNote:
      "Start with a concrete side-by-side table: one column showing a savings account adding $50 each month (arithmetic) and another showing bacteria doubling each hour (geometric). Have students compute the differences and ratios by hand before introducing the vocabulary. The key pedagogical move is showing the explicit formula a_n = a₁ + (n−1)d alongside f(x) = mx + b so students see they are the same structure — one discrete, one continuous. Most misconceptions here come from students computing differences when they should compute ratios, or vice versa.",

    studentVoice:
      "Oh — so arithmetic sequences are just linear functions that only live at whole-number inputs! And geometric sequences are exponential functions doing the same thing. They're the same ideas, just one jumps and one flows.",

    narration: [
      "A sequence is an ordered list of numbers called terms. When mathematicians study sequences, one of the first questions they ask is: what rule governs how each term changes from the previous one? Two patterns dominate the AP Precalculus curriculum, and both have deep connections to function families you already know.",
      "An arithmetic sequence is one where you add the same constant — called the common difference, d — to get from any term to the next. Think of a savings account where you deposit exactly $50 every month. If you start with $200, your balances after each month are $200, $250, $300, $350, ... The difference between consecutive terms is always $50. Because the change is constant, the explicit formula is a_n = a₁ + (n−1)d, where a₁ is the first term and n is the term number.",
      "A geometric sequence is one where you multiply by the same constant — called the common ratio, r — to get from any term to the next. Consider a bacterium that doubles every hour. If you start with 1 bacterium, you have 1, 2, 4, 8, 16, ... after each hour. The ratio between consecutive terms is always 2. The explicit formula is a_n = a₁ · r^(n−1). Notice the exponent: the ratio is applied n−1 times to reach the nth term.",
      "To identify a sequence type from a table, compute consecutive differences (subtract) and consecutive ratios (divide). If the differences are all equal, the sequence is arithmetic. If the ratios are all equal, the sequence is geometric. If neither is constant, the sequence is neither type. This is a skill tested directly on the AP exam — always check BOTH differences and ratios before concluding.",
      "Here is the deepest insight of this lesson: arithmetic sequences and linear functions are the same concept in different settings. A linear function f(x) = mx + b adds the slope m for every one-unit increase in x. An arithmetic sequence adds d for every one-step increase in n. They are structurally identical; the sequence just lives only at integer inputs. Similarly, a geometric sequence and an exponential function are the same concept: one multiplies by r at each integer step, the other multiplies by a base b for every real-number step.",
      "This parallel is not cosmetic — it tells you that everything you know about linear functions (constant rate of change, straight-line graph) applies conceptually to arithmetic sequences, and everything about exponential functions (percent growth, horizontal asymptote) applies to geometric sequences. Building this mental bridge now makes Unit 2 far more coherent."
    ],

    priorKnowledge: [
      "Writing and evaluating linear functions f(x) = mx + b",
      "Understanding slope as a constant rate of change",
      "Basic exponent rules (b^n means b multiplied n times)",
      "Reading and interpreting input-output tables",
      "Familiarity with percent increase and decrease as multiplicative change"
    ],

    connections: [
      "Lesson 2.2: arithmetic sequences ↔ linear functions; geometric sequences ↔ exponential functions (the continuous version of this lesson)",
      "Lesson 2.3: the base b in f(x) = ab^x is the same as the common ratio r in a geometric sequence",
      "Lesson 2.5: fitting an exponential model to data uses the same ratio logic as identifying geometric sequences",
      "Calculus preview: the discrete sum of an arithmetic sequence becomes integration of a linear function"
    ],

    concepts: [
      "Arithmetic sequence: each term is found by adding a constant difference d to the previous term",
      "Geometric sequence: each term is found by multiplying the previous term by a constant ratio r",
      "Explicit formula for arithmetic: a_n = a₁ + (n−1)d",
      "Explicit formula for geometric: a_n = a₁ · r^(n−1)",
      "Identifying type from a table: constant differences → arithmetic; constant ratios → geometric",
      "Conceptual parallel: arithmetic ↔ linear (adding); geometric ↔ exponential (multiplying)"
    ],

    keyFormula:
      "Arithmetic: a_n = a₁ + (n−1)d  |  Geometric: a_n = a₁ · r^(n−1)  |  Common difference: d = a_{n+1} − a_n  |  Common ratio: r = a_{n+1} / a_n",

    keyTerms: [
      { term: "Sequence", definition: "An ordered list of numbers, each called a term, typically indexed by positive integers." },
      { term: "Arithmetic sequence", definition: "A sequence in which consecutive terms differ by a constant amount called the common difference d." },
      { term: "Common difference (d)", definition: "The constant value added to each term of an arithmetic sequence to obtain the next term." },
      { term: "Geometric sequence", definition: "A sequence in which consecutive terms have a constant ratio r, found by dividing any term by the one before it." },
      { term: "Common ratio (r)", definition: "The constant factor multiplied by each term of a geometric sequence to obtain the next term." },
      { term: "Explicit formula", definition: "A formula that expresses the nth term of a sequence directly in terms of n, without needing previous terms." }
    ],

    workedExample: {
      problem:
        "A table shows the following sequence: n = 1, 2, 3, 4, 5 with terms 6, 10, 14, 18, 22. Determine whether the sequence is arithmetic or geometric, and write an explicit formula for the nth term.",
      steps: [
        "Step 1 — Compute consecutive differences: 10−6 = 4, 14−10 = 4, 18−14 = 4, 22−18 = 4. All differences equal 4.",
        "Step 2 — Compute consecutive ratios (to check): (10) / (6) ≈ 1.67, (14) / (10) = 1.4. Ratios are NOT constant.",
        "Step 3 — Conclude: The sequence is ARITHMETIC with first term a₁ = 6 and common difference d = 4.",
        "Step 4 — Apply the explicit formula: a_n = a₁ + (n−1)d = 6 + (n−1)·4.",
        "Step 5 — Simplify: a_n = 6 + 4n − 4 = 4n + 2.",
        "Step 6 — Verify with n = 3: a₃ = 4(3) + 2 = 14. ✓ Matches the table."
      ],
      answer: "The sequence is arithmetic. Explicit formula: a_n = 4n + 2."
    },

    workedExample2: {
      problem:
        "A sequence has terms a₁ = 3 and a₄ = 81. Determine whether the sequence could be geometric, find the common ratio, and write the explicit formula.",
      steps: [
        "Step 1 — Assume the sequence is geometric with first term a₁ = 3 and common ratio r.",
        "Step 2 — Use the explicit formula: a_n = a₁ · r^(n−1). For n = 4: a₄ = 3 · r^(4−1) = 3r³.",
        "Step 3 — Set equal to given value: 3r³ = 81.",
        "Step 4 — Solve for r: r³ = (81) / (3) = 27, so r = ∛27 = 3.",
        "Step 5 — Write the explicit formula: a_n = 3 · 3^(n−1) = 3^1 · 3^(n−1) = 3^n.",
        "Step 6 — Verify: a₁ = 3¹ = 3 ✓, a₄ = 3⁴ = 81 ✓.",
        "Step 7 — List the sequence: 3, 9, 27, 81, ... Each term is multiplied by 3."
      ],
      answer: "The sequence is geometric with r = 3. Explicit formula: a_n = 3^n."
    },

    commonMistakes: [
      "Computing differences when the sequence is geometric, or ratios when it is arithmetic — always test BOTH to avoid misidentifying the type.",
      "Using n instead of (n−1) in the explicit formulas: a_n = a₁ + nd and a_n = a₁ · r^n are both off by one step.",
      "Confusing the common ratio r with the common difference d — ratio comes from division (a_{n+1}/a_n), difference comes from subtraction (a_{n+1} − a_n).",
      "Assuming a sequence must be one of the two types — some sequences are neither arithmetic nor geometric.",
      "In a geometric sequence, computing r as a₂ − a₁ (subtraction) instead of a₂/a₁ (division)."
    ],

    tip: "When given a table, always compute both differences and ratios — do not stop after one. If differences are constant, it's arithmetic. If ratios are constant, it's geometric. If both happen to be constant, you likely have a trivial constant sequence.",

    questions: [
      {
        question_text: "The first four terms of a sequence are 5, 8, 11, 14. Which of the following best describes this sequence?",
        difficulty: "Easy",
        choices: [
          "A) Geometric with common ratio 3",
          "B) Arithmetic with common difference 3",
          "C) Geometric with common ratio (8) / (5)",
          "D) Arithmetic with common difference 5"
        ],
        answer_text: "B) Arithmetic with common difference 3",
        explanation: "Consecutive differences: 8−5=3, 11−8=3, 14−11=3. All equal 3, confirming arithmetic with d=3. Consecutive ratios are (8) / (5), (11) / (8), (14) / (11) — not constant, so it is not geometric."
      },
      {
        question_text: "A sequence has first term a₁ = 4 and common difference d = −3. What is a₅?",
        difficulty: "Easy",
        choices: [
          "A) −8",
          "B) 7",
          "C) −11",
          "D) −7"
        ],
        answer_text: "A) −8",
        explanation: "Using a_n = a₁ + (n−1)d: a₅ = 4 + (5−1)(−3) = 4 + (4)(−3) = 4 − 12 = −8."
      },
      {
        question_text: "The table below shows values of a sequence. n: 1, 2, 3, 4. Values: 2, 6, 18, 54. Which explicit formula represents this sequence?",
        difficulty: "Easy",
        choices: [
          "A) a_n = 2 + 4(n−1)",
          "B) a_n = 2 · 3^n",
          "C) a_n = 2 · 3^(n−1)",
          "D) a_n = 3 · 2^(n−1)"
        ],
        answer_text: "C) a_n = 2 · 3^(n−1)",
        explanation: "Ratios: (6) / (2)=3, (18) / (6)=3, (54) / (18)=3. Geometric with a₁=2, r=3. Formula: a_n = 2·3^(n−1). Check: a₁=2·3⁰=2 ✓, a₂=2·3¹=6 ✓. Choice B gives a₁=2·3=6, which is wrong."
      },
      {
        question_text: "Which of the following is true of both arithmetic sequences and linear functions?",
        difficulty: "Easy",
        choices: [
          "A) Their outputs change by a constant multiplicative factor",
          "B) Their graphs are exponential curves",
          "C) Their outputs change by a constant additive amount for each equal-sized step in input",
          "D) They have a horizontal asymptote at y = 0"
        ],
        answer_text: "C) Their outputs change by a constant additive amount for each equal-sized step in input",
        explanation: "Arithmetic sequences add the same difference d at each step; linear functions add slope m for each unit increase in x. Both change by addition of a constant — this is their defining parallel. Multiplicative change and asymptotes describe geometric/exponential behavior."
      },
      {
        question_text: "A geometric sequence has a₁ = 80 and common ratio r = (1) / (2). What is a₄?",
        difficulty: "Medium",
        choices: [
          "A) 20",
          "B) 40",
          "C) 10",
          "D) 5"
        ],
        answer_text: "C) 10",
        explanation: "a_n = a₁ · r^(n−1). a₄ = 80 · (1/2)^(4−1) = 80 · (1/2)³ = 80 · (1/8) = 10. A common mistake is using r^n instead of r^(n−1), which gives 80·(1/2)⁴ = 5 — that's choice D."
      },
      {
        question_text: "A sequence has terms a₂ = 12 and a₅ = 96. If the sequence is geometric, what is the common ratio?",
        difficulty: "Medium",
        choices: [
          "A) 2",
          "B) 3",
          "C) 4",
          "D) 8"
        ],
        answer_text: "A) 2",
        explanation: "From a₂ to a₅ is 3 steps, so a₅ = a₂ · r³. Thus r³ = (96) / (12) = 8, giving r = ∛8 = 2. Verify: 12, 24, 48, 96 — each term doubles. ✓"
      },
      {
        question_text: "A student claims the sequence 3, 6, 9, 12, ... is geometric because each term is a multiple of 3. Which of the following best explains why the student is incorrect?",
        difficulty: "Medium",
        choices: [
          "A) The sequence has no first term",
          "B) The consecutive ratios are not constant: (6) / (3)=2 but (9) / (6)=1.5",
          "C) The sequence is neither arithmetic nor geometric",
          "D) The common difference is not positive"
        ],
        answer_text: "B) The consecutive ratios are not constant: (6) / (3)=2 but (9) / (6)=1.5",
        explanation: "A geometric sequence requires constant consecutive ratios. Here, (6) / (3)=2 but (9) / (6)=1.5 — the ratios differ. The consecutive differences ARE constant (all equal 3), making this an arithmetic sequence with d=3, not geometric."
      },
      {
        question_text: "The table shows values of a function f at integer inputs. n: 1, 2, 3, 4. f(n): 100, 90, 81, 72.9. Which type of sequence does this represent, and what is the value of f(5)?",
        difficulty: "Medium",
        choices: [
          "A) Arithmetic; f(5) = 63.9",
          "B) Geometric; f(5) = 65.61",
          "C) Arithmetic; f(5) = 65",
          "D) Geometric; f(5) = 63.9"
        ],
        answer_text: "B) Geometric; f(5) = 65.61",
        explanation: "Differences: 90−100=−10, 81−90=−9, 72.9−81=−8.1. Not constant. Ratios: (90) / (100)=0.9, (81) / (90)=0.9, 72.(9) / (81)=0.9. Constant ratio r=0.9, so this is geometric. f(5) = 72.9 · 0.9 = 65.61."
      },
      {
        question_text: "An arithmetic sequence has a₁ = p and a₁₀ = p + 36. In terms of p, what is a₇?",
        difficulty: "Hard",
        choices: [
          "A) p + 24",
          "B) p + 21",
          "C) p + 28",
          "D) p + 18"
        ],
        answer_text: "A) p + 24",
        explanation: "Using a₁₀ = a₁ + 9d: p + 36 = p + 9d, so 9d = 36, giving d = 4. Then a₇ = a₁ + 6d = p + 6(4) = p + 24."
      },
      {
        question_text: "A geometric sequence has a₁ = k and a₃ = 4k where k > 0. Which of the following gives all possible values of the common ratio r?",
        difficulty: "Hard",
        choices: [
          "A) r = 2 only",
          "B) r = 2 or r = −2",
          "C) r = 4 only",
          "D) r = √2 only"
        ],
        answer_text: "B) r = 2 or r = −2",
        explanation: "a₃ = a₁ · r² = k · r². Setting kr² = 4k gives r² = 4, so r = ±2. Both r = 2 and r = −2 are valid since the sequence is defined for all reals. With r = −2: k, −2k, 4k, −8k, ... — ratios of consecutive terms are −2 consistently, which is a valid geometric sequence."
      }
    ]
  },

  "2.2": {
    essentialQuestion:
      "What is the fundamental difference between how linear and exponential functions change, and how can you identify each type from a table of values?",

    apBoardNote:
      "CED Topic 2.2 focuses on the conceptual distinction between additive change (linear) and multiplicative change (exponential) over equal-length intervals. Students must be able to look at a table and determine function type by examining differences versus ratios, and must understand doubling time and half-life as natural consequences of multiplicative change. This distinction is the conceptual backbone for all of Unit 2.",

    teacherNote:
      "The most important thing to communicate in this lesson is the WHY behind the difference: linear functions add the same amount because the rate of change is constant; exponential functions multiply by the same factor because the rate of change is proportional to the current value. Use two savings scenarios: one where you add $100/year (linear) and one where you earn 10% interest (exponential). Compute a 10-year table for both — the numbers tell the story more powerfully than any definition. Then introduce the formal statement about equal-length intervals.",

    studentVoice:
      "I always heard 'exponential growth is fast' but now I get WHY — it multiplies, so the more you have, the more you gain. And doubling time blew my mind: it doesn't matter how much you start with, the time to double is always the same.",

    narration: [
      "The most important distinction in all of precalculus is this: linear functions change by ADDING, exponential functions change by MULTIPLYING. This single sentence separates two fundamentally different worlds of mathematical behavior.",
      "For a linear function f(x) = mx + b, every time x increases by Δx, the output increases by m·Δx — the exact same amount, regardless of where you are. If you earn $15/hour, working 2 extra hours always earns exactly $30 more, whether that's hours 1–3 or hours 40–42. The function adds a fixed amount over any fixed-length time interval.",
      "For an exponential function f(x) = ab^x, every time x increases by Δx, the output is multiplied by b^(Δx) — the exact same factor, regardless of where you are. If your savings grows at 7% annually, after any 1-year period your balance is 1.07 times what it was — whether that period is years 1 to 2 or years 30 to 31. The function multiplies by a fixed factor over any fixed-length interval.",
      "This is why exponential growth eventually dominates any linear function: adding a constant amount falls farther and farther behind multiplying by a factor greater than 1. At first the linear function may be larger (if b is close to 1), but eventually the exponential catches up and surpasses it permanently.",
      "Two special cases arise naturally from multiplicative change. The doubling time is the time it takes for an exponential function to double in value: t_d = ln(2)/ln(b). The half-life is the time it takes to decay to half its value: t_h = ln(0.5)/ln(b) (applicable when 0 < b < 1). Crucially, these are constant — the doubling time is the same regardless of the starting amount, because the entire function is being scaled by the same factor.",
      "To identify function type from a table: if you compute differences of consecutive outputs and they are constant, the function is linear. If you compute ratios of consecutive outputs and they are constant, the function is exponential. If you have unequal input spacing, normalize by checking whether Δy/Δx is constant (linear) or whether the ratio y_{n+1}/y_n is constant (exponential, when inputs are equally spaced).",
      "Understanding this lesson deeply makes the rest of Unit 2 feel inevitable rather than arbitrary. The horizontal asymptote, the domain, the graph shape — all of these properties of exponential functions flow directly from the fact that the function multiplies rather than adds."
    ],

    priorKnowledge: [
      "Linear functions f(x) = mx + b and slope as constant rate of change",
      "Basic properties of exponents, including b^0 = 1",
      "Computing differences and ratios from a table",
      "Understanding that multiplication by a factor greater than 1 produces growth, less than 1 produces decay",
      "Familiarity with natural logarithm ln as the inverse of e^x (conceptual level)"
    ],

    connections: [
      "Lesson 2.1: additive change in linear functions mirrors arithmetic sequences; multiplicative change in exponential mirrors geometric",
      "Lesson 2.3: the properties of f(x) = ab^x established here (asymptote, domain, end behavior) are explored graphically",
      "Lesson 2.5: the constant-ratio test used here is the same method used to fit exponential models to data",
      "Later calculus: the derivative of an exponential function is proportional to itself — a direct algebraic consequence of multiplicative change"
    ],

    concepts: [
      "Linear functions change by a constant additive amount over any equal-length interval: f(x+Δx) − f(x) = m·Δx",
      "Exponential functions change by a constant multiplicative factor over any equal-length interval: f(x+Δx)/f(x) = b^(Δx)",
      "From a table: constant differences → linear; constant ratios → exponential",
      "Doubling time formula: t_d = ln(2)/ln(b) for f(x) = ab^x with b > 1",
      "Half-life formula: t_h = ln(0.5)/ln(b) for f(x) = ab^x with 0 < b < 1",
      "Exponential growth eventually outpaces any linear function because multiplication compounds while addition does not"
    ],

    keyFormula:
      "Linear: f(x+Δx) − f(x) = m·Δx (constant difference)  |  Exponential: f(x+Δx)/f(x) = b^(Δx) (constant ratio)  |  Doubling time: t_d = ln(2)/ln(b)  |  Half-life: t_h = ln(0.5)/ln(b)",

    keyTerms: [
      { term: "Additive change", definition: "Change in which a constant amount is added to the output for each equal-length increase in input; characteristic of linear functions." },
      { term: "Multiplicative change", definition: "Change in which the output is multiplied by a constant factor for each equal-length increase in input; characteristic of exponential functions." },
      { term: "Doubling time", definition: "The constant time interval required for an exponential growth function to double in value, given by t_d = ln(2)/ln(b)." },
      { term: "Half-life", definition: "The constant time interval required for an exponential decay function to decrease to half its current value, given by t_h = ln(0.5)/ln(b)." },
      { term: "Constant ratio", definition: "In a table of an exponential function with equally spaced inputs, the ratio of any consecutive output to the previous output is the same constant b^(Δx)." }
    ],

    workedExample: {
      problem:
        "The table below shows values of a function g. x: 0, 2, 4, 6. g(x): 5, 20, 80, 320. Determine whether g is linear or exponential, and write an equation for g(x).",
      steps: [
        "Step 1 — Check inputs: x increases by 2 each time (equally spaced, Δx = 2).",
        "Step 2 — Compute differences: 20−5=15, 80−20=60, 320−80=240. NOT constant → not linear.",
        "Step 3 — Compute ratios: (20) / (5)=4, (80) / (20)=4, (320) / (80)=4. Constant ratio = 4 over each interval of Δx=2.",
        "Step 4 — Conclude: g is exponential. The ratio over Δx=2 equals b² = 4, so b = √4 = 2.",
        "Step 5 — Find a: g(0) = 5, and for exponential f(x) = ab^x, g(0) = a·b⁰ = a = 5.",
        "Step 6 — Write equation: g(x) = 5 · 2^x.",
        "Step 7 — Verify: g(2) = 5·2² = 5·4 = 20 ✓, g(4) = 5·2⁴ = 5·16 = 80 ✓."
      ],
      answer: "g is exponential. g(x) = 5 · 2^x."
    },

    workedExample2: {
      problem:
        "A population of bacteria is modeled by an exponential function with b = 1.5 (measured in hours). A scientist wants to know the doubling time. Additionally, if the bacteria count is currently 200, how long until it reaches 800?",
      steps: [
        "Step 1 — Find the doubling time using the formula: t_d = ln(2)/ln(b) = ln(2)/ln(1.5).",
        "Step 2 — Compute: ln(2) ≈ 0.6931, ln(1.5) ≈ 0.4055. So t_d ≈ 0.(6931) / (0).4055 ≈ 1.71 hours.",
        "Step 3 — Interpret: the population doubles every ≈ 1.71 hours, regardless of starting amount.",
        "Step 4 — To reach 800 from 200: 800 = 200 · (factor). Factor = (800) / (200) = 4. Need to quadruple.",
        "Step 5 — Quadrupling is two doublings: time = 2 × t_d = 2 × 1.71 ≈ 3.42 hours.",
        "Step 6 — Verify algebraically: 200 · (1.5)^t = 800 → (1.5)^t = 4 → t = ln(4)/ln(1.5) ≈ 1.(3863) / (0).4055 ≈ 3.42 hours ✓."
      ],
      answer: "Doubling time ≈ 1.71 hours. The population reaches 800 after approximately 3.42 hours."
    },

    commonMistakes: [
      "Checking only differences OR only ratios — always check both to correctly classify the function.",
      "When inputs are not equally spaced, computing ratios of outputs directly (this only works for equally spaced inputs); you must account for Δx.",
      "Confusing doubling time with the base b — the doubling time is a calculated value ln(2)/ln(b), not b itself.",
      "Thinking that a larger base b always means a shorter doubling time — remember, t_d = ln(2)/ln(b) DECREASES as b increases (larger b → faster doubling → shorter time).",
      "Saying 'the function adds more each period' to describe exponential growth — it MULTIPLIES; the amounts being added look larger, but the operation is multiplication."
    ],

    tip: "A powerful check: for a linear function, the second differences (differences of the differences) are zero. For an exponential function, the ratios of consecutive outputs are constant. Train yourself to compute both in under 30 seconds from any table.",

    questions: [
      {
        question_text: "A table shows values of a function h: x = 0, 1, 2, 3 and h(x) = 3, 7, 11, 15. Which of the following best describes h?",
        difficulty: "Easy",
        choices: [
          "A) Exponential, because the outputs are increasing",
          "B) Linear, because consecutive outputs have a constant difference of 4",
          "C) Exponential, because consecutive outputs have a constant ratio",
          "D) Linear, because the outputs are all odd numbers"
        ],
        answer_text: "B) Linear, because consecutive outputs have a constant difference of 4",
        explanation: "Differences: 7−3=4, 11−7=4, 15−11=4. Constant difference of 4 → linear. Ratios: (7) / (3)≈2.33, (11) / (7)≈1.57 — not constant, so not exponential."
      },
      {
        question_text: "For a linear function f(x) = 3x + 1, by how much does the output change when x increases from 5 to 8?",
        difficulty: "Easy",
        choices: [
          "A) 3",
          "B) 9",
          "C) 24",
          "D) 6"
        ],
        answer_text: "B) 9",
        explanation: "For a linear function, the change over any interval Δx is m·Δx = 3·(8−5) = 3·3 = 9. You can verify: f(8) = 25, f(5) = 16, difference = 9."
      },
      {
        question_text: "An exponential function f(x) = a·b^x satisfies f(0) = 10 and f(1) = 14. What is the value of b?",
        difficulty: "Easy",
        choices: [
          "A) 4",
          "B) 1.4",
          "C) 10",
          "D) 0.7"
        ],
        answer_text: "B) 1.4",
        explanation: "f(0) = a·b⁰ = a = 10. f(1) = 10·b = 14, so b = (14) / (10) = 1.4. Since b > 1, this represents growth."
      },
      {
        question_text: "Which statement correctly describes the behavior of an exponential function f(x) = ab^x with b > 1 over equal-length intervals?",
        difficulty: "Easy",
        choices: [
          "A) The output increases by the same constant amount over each interval",
          "B) The output is multiplied by the same factor b^(Δx) over each interval",
          "C) The output increases faster at first, then slows down",
          "D) The rate of change is constant"
        ],
        answer_text: "B) The output is multiplied by the same factor b^(Δx) over each interval",
        explanation: "This is the defining property of exponential functions: f(x+Δx)/f(x) = b^(Δx), a constant multiplicative factor. Constant additive change describes linear functions (choice A). Constant rate of change also describes linear functions (choice D)."
      },
      {
        question_text: "A function g is exponential with g(0) = 50 and g(3) = 400. What is the ratio g(x+3)/g(x) for any value of x?",
        difficulty: "Medium",
        choices: [
          "A) 6",
          "B) 8",
          "C) 350",
          "D) 4"
        ],
        answer_text: "B) 8",
        explanation: "g(0) = 50, g(3) = 400. Ratio over interval of length 3: (400) / (50) = 8. By the constant-ratio property of exponential functions, this ratio b³ = 8 applies for ANY x: g(x+3)/g(x) = 8 always."
      },
      {
        question_text: "An exponential function has a base of b = 3. What is the doubling time? (Use ln(2) ≈ 0.693 and ln(3) ≈ 1.099.)",
        difficulty: "Medium",
        choices: [
          "A) approximately 3.0",
          "B) approximately 0.63",
          "C) approximately 1.58",
          "D) approximately 2.0"
        ],
        answer_text: "B) approximately 0.63",
        explanation: "t_d = ln(2)/ln(3) ≈ 0.(693) / (1).099 ≈ 0.631. Since b = 3 is a large base (fast growth), the doubling time is less than 1 unit. A common mistake is dividing ln(3) by ln(2) instead, giving ≈1.585 — that's the wrong ratio."
      },
      {
        question_text: "A table shows values of two functions at equally spaced inputs. Function p has constant differences; function q has constant ratios. A third function r has output values 1, 2, 4, 7, 11 at x = 0, 1, 2, 3, 4. What can be concluded about r?",
        difficulty: "Medium",
        choices: [
          "A) r is linear",
          "B) r is exponential",
          "C) r is neither linear nor exponential",
          "D) r could be either linear or exponential"
        ],
        answer_text: "C) r is neither linear nor exponential",
        explanation: "Differences: 2−1=1, 4−2=2, 7−4=3, 11−7=4. Not constant → not linear. Ratios: (2) / (1)=2, (4) / (2)=2, (7) / (4)=1.75. Not constant → not exponential. Therefore r is neither type."
      },
      {
        question_text: "A radioactive substance decays exponentially with b = 0.5 and time measured in years. If the initial amount is 200 grams, how long until 25 grams remain?",
        difficulty: "Medium",
        choices: [
          "A) 2 years",
          "B) 3 years",
          "C) 4 years",
          "D) 5 years"
        ],
        answer_text: "B) 3 years",
        explanation: "200 · (0.5)^t = 25 → (0.5)^t = (25) / (200) = (1) / (8) = (0.5)³ → t = 3 years. Alternatively: 200 → 100 (1 half-life) → 50 (2) → 25 (3). Three half-life periods."
      },
      {
        question_text: "Functions f and g are defined by f(x) = 2x + 100 and g(x) = 100·(1.02)^x. For large values of x, which statement is true?",
        difficulty: "Hard",
        choices: [
          "A) f(x) > g(x) because f has a larger initial slope",
          "B) g(x) > f(x) because exponential growth eventually exceeds linear growth",
          "C) f(x) = g(x) for all large x",
          "D) It depends on the initial value a"
        ],
        answer_text: "B) g(x) > f(x) because exponential growth eventually exceeds linear growth",
        explanation: "Even a slow exponential (b=1.02, only 2% growth) will eventually surpass any linear function. At x=0: f=100, g=100. At x=100: f=300, g=100·(1.02)^100 ≈ 100·7.24 = 724. The exponential wins for large x. This is a fundamental mathematical fact: exponential growth always eventually dominates polynomial (including linear) growth."
      },
      {
        question_text: "A function h satisfies h(x+5)/h(x) = 32 for all values of x, and h(0) = 3. What is the value of h(10)?",
        difficulty: "Hard",
        choices: [
          "A) 3072",
          "B) 96",
          "C) 480",
          "D) 1536"
        ],
        answer_text: "A) 3072",
        explanation: "The condition h(x+5)/h(x) = 32 means the function multiplies by 32 every time x increases by 5 — this is an exponential function. Starting from h(0) = 3: h(5) = h(0) · 32 = 3 · 32 = 96. h(10) = h(5) · 32 = 96 · 32 = 3072. Alternatively, h(10) = h(0) · 32^(10/5) = 3 · 32² = 3 · 1024 = 3072. To verify with an explicit formula: b^5 = 32 → b = 32^(1/5) = 2, so h(x) = 3 · 2^x. Then h(10) = 3 · 2^10 = 3 · 1024 = 3072 ✓.",
      },
    ]
  },

  "2.3": {
    essentialQuestion:
      "What are the essential graphical and algebraic features of exponential functions, and why can an exponential function with a positive initial value never equal zero?",

    apBoardNote:
      "CED Topic 2.3 establishes the complete function portrait of f(x) = ab^x: domain, range, intercepts, horizontal asymptote, and end behavior. Students must be able to describe all these features given an equation, and must understand WHY the range excludes zero when a > 0 and b > 0. End behavior using limit notation or arrow notation is expected. The asymptote and the distinction between growth (b > 1) and decay (0 < b < 1) are high-frequency AP exam targets.",

    teacherNote:
      "Graph f(x) = 2^x and f(x) = (1/2)^x side by side immediately. Ask students what they notice: both approach y = 0 but from different sides, both pass through (0, 1), both are always positive. Then modify the initial value: graph 3·2^x. The y-intercept shifts to (0, 3) but the asymptote stays at y = 0. This hands-on approach makes the algebraic properties feel discovered rather than delivered. The crucial argument for why the range excludes zero: b^x is always positive, so a·b^x is always positive when a > 0. The function gets closer and closer to zero but never arrives.",

    studentVoice:
      "The horizontal asymptote finally makes sense to me — you can never multiply a positive number by another positive number and get zero. So the function just keeps getting closer but literally cannot touch y = 0. It's not a rule they invented, it's just math.",

    narration: [
      "The general exponential function has the form f(x) = ab^x, where a and b are constants satisfying a > 0, b > 0, and b ≠ 1. Each constant plays a specific role: a is the initial value (the output when x = 0, since b⁰ = 1), and b is the base, which determines whether the function grows or decays and how quickly.",
      "When b > 1, the function models exponential growth. As x increases, b^x increases without bound. As x decreases toward negative infinity, b^x approaches 0. When 0 < b < 1, the function models exponential decay. As x increases, b^x approaches 0. As x decreases toward negative infinity, b^x increases without bound. The roles of the two ends of the x-axis are swapped between growth and decay.",
      "The domain of f(x) = ab^x is all real numbers: you can raise a positive base to any real power. The range is (0, ∞) when a > 0 — that is, all positive real numbers, not including zero. Why? Because b^x is always a positive number for any real x and positive b, and a positive times a positive is always positive. The function can never reach zero.",
      "The horizontal asymptote is the line y = 0. As the exponential function approaches 0 from above (when x → −∞ for growth, or x → +∞ for decay), it gets arbitrarily close but never touches. This is what an asymptote means: a line that a function approaches but never reaches. For f(x) = ab^x with a > 0, the horizontal asymptote is ALWAYS y = 0, regardless of the value of b.",
      "End behavior summary: for f(x) = ab^x with a > 0 and b > 1 (growth): as x → +∞, f(x) → +∞; as x → −∞, f(x) → 0. For decay (0 < b < 1): as x → +∞, f(x) → 0; as x → −∞, f(x) → +∞. The y-intercept is always (0, a), since f(0) = a·b⁰ = a·1 = a.",
      "Context helps anchor these abstract properties. The function P(t) = 500·(1.06)^t models a population starting at 500 that grows 6% per year. The initial value a = 500 is the starting population. The base b = 1.06 means 6% growth each year. The domain is all real t (though only t ≥ 0 makes physical sense), the range is all positive values, and as t → +∞ the population grows without bound — an idealized model that eventually breaks down due to resource constraints, but mathematically sound."
    ],

    priorKnowledge: [
      "Basic exponent rules: b⁰ = 1, b¹ = b, and b^x for positive b and real x",
      "Reading graphs: intercepts, asymptotes, and end behavior",
      "Understanding that a positive number raised to any real power remains positive",
      "Interval notation for domain and range: (0, ∞) means all positive reals",
      "Evaluating f(x) = ab^x for given values of x"
    ],

    connections: [
      "Lesson 2.2: the constant-ratio property established there explains why the range excludes zero — you can never multiply your way to zero with a positive base",
      "Lesson 2.4: transformations of ab^x (via exponent manipulation) shift or scale the graph but preserve the asymptote at y = 0",
      "Lesson 2.5: interpreting a and b in context is the central skill of modeling with exponential functions",
      "Algebra 2 review: horizontal asymptotes of rational functions are also approached but not crossed — same concept, different function family"
    ],

    concepts: [
      "Standard form: f(x) = ab^x, where a > 0 is the initial value, b > 0 and b ≠ 1 is the base",
      "b > 1 means growth; 0 < b < 1 means decay",
      "Domain: all real numbers (−∞, +∞)",
      "Range: (0, ∞) when a > 0 — the function is always positive, never zero",
      "Horizontal asymptote: y = 0 (the x-axis); the function approaches but never touches it",
      "y-intercept: (0, a); there is no x-intercept"
    ],

    keyFormula:
      "f(x) = ab^x  |  f(0) = a (y-intercept)  |  Horizontal asymptote: y = 0  |  Growth: b > 1; Decay: 0 < b < 1  |  Range: (0, ∞) when a > 0",

    keyTerms: [
      { term: "Initial value (a)", definition: "The value of the exponential function when x = 0, equal to a in f(x) = ab^x. It is the y-intercept." },
      { term: "Base (b)", definition: "The constant multiplicative factor in f(x) = ab^x. Must satisfy b > 0 and b ≠ 1; determines growth (b > 1) or decay (0 < b < 1)." },
      { term: "Horizontal asymptote", definition: "A horizontal line y = c that a function approaches as x → +∞ or x → −∞ but never reaches. For f(x) = ab^x with a > 0, this is y = 0." },
      { term: "End behavior", definition: "A description of what the function value approaches as x increases or decreases without bound, written using → notation." },
      { term: "Exponential decay", definition: "An exponential function f(x) = ab^x where 0 < b < 1, causing the output to decrease toward 0 as x → +∞." },
      { term: "Exponential growth", definition: "An exponential function f(x) = ab^x where b > 1, causing the output to increase without bound as x → +∞." }
    ],

    workedExample: {
      problem:
        "A function f is defined by f(x) = 4·(0.6)^x. Identify the initial value, base, whether the function represents growth or decay, the horizontal asymptote, domain, and range. Then describe the end behavior.",
      steps: [
        "Step 1 — Identify a and b: a = 4 (initial value), b = 0.6 (base).",
        "Step 2 — Growth or decay? Since b = 0.6 and 0 < 0.6 < 1, this is exponential DECAY.",
        "Step 3 — y-intercept: f(0) = 4·(0.6)⁰ = 4·1 = 4. The y-intercept is (0, 4).",
        "Step 4 — Horizontal asymptote: y = 0 (the x-axis). The function approaches but never reaches zero.",
        "Step 5 — Domain: all real numbers, (−∞, +∞).",
        "Step 6 — Range: since a = 4 > 0 and b > 0, f(x) > 0 always. Range: (0, +∞).",
        "Step 7 — End behavior: as x → +∞, f(x) → 0 (decay toward asymptote). As x → −∞, f(x) → +∞ (function grows without bound)."
      ],
      answer: "Initial value: 4. Base: 0.6 (decay). y-intercept: (0, 4). Horizontal asymptote: y = 0. Domain: all reals. Range: (0, ∞). As x → +∞, f(x) → 0; as x → −∞, f(x) → +∞."
    },

    workedExample2: {
      problem:
        "A population is modeled by P(t) = 300·(1.08)^t, where t is measured in years. (a) What was the initial population? (b) Is the population growing or shrinking? (c) What is the population after 10 years? (d) Will the population ever equal zero? Justify your answer.",
      steps: [
        "Step 1 — Read initial value: P(0) = 300·(1.08)⁰ = 300. Initial population is 300.",
        "Step 2 — Determine growth/decay: b = 1.08 > 1, so the population is GROWING at 8% per year.",
        "Step 3 — Population after 10 years: P(10) = 300·(1.08)^10.",
        "Step 4 — Compute (1.08)^10 ≈ 2.1589. So P(10) ≈ 300·2.1589 ≈ 647.7, approximately 648 individuals.",
        "Step 5 — Will P(t) ever equal zero? No. Since b = 1.08 > 0, (1.08)^t > 0 for all real t. And a = 300 > 0. A positive number times a positive number is always positive. The horizontal asymptote of this function as t → −∞ is y = 0, but for t ≥ 0 the function is always at least 300 and growing. It NEVER equals zero.",
        "Step 6 — Formal justification: The range of P(t) = 300·(1.08)^t is (0, ∞). Zero is not in the range."
      ],
      answer: "(a) 300. (b) Growing at 8% per year. (c) Approximately 648. (d) No — the range is (0, ∞), so P(t) is always positive."
    },

    commonMistakes: [
      "Thinking the range of f(x) = ab^x includes zero — it does not when a > 0 and b > 0; the function has a horizontal asymptote at y = 0.",
      "Stating the horizontal asymptote as x = 0 (vertical) instead of y = 0 (horizontal) — the asymptote is horizontal.",
      "Confusing end behavior for growth versus decay — for growth (b > 1), the large-x end goes to +∞; for decay (0 < b < 1), the large-x end goes to 0.",
      "Writing the range as [0, ∞) with a bracket — the bracket would include 0, but zero is excluded; the correct range uses a parenthesis: (0, ∞).",
      "Thinking there is an x-intercept — there is none, because the function never crosses the x-axis."
    ],

    tip: "To quickly classify an exponential function's behavior: if b > 1, the right end goes UP (growth) and the left end hugs y = 0. If 0 < b < 1, the right end hugs y = 0 (decay) and the left end shoots UP. The asymptote y = 0 is always on the side that the function is approaching as output shrinks.",

    questions: [
      {
        question_text: "A function f is defined by f(x) = 7·(0.4)^x. What is the horizontal asymptote of f?",
        difficulty: "Easy",
        choices: [
          "A) x = 0",
          "B) y = 7",
          "C) y = 0",
          "D) y = 0.4"
        ],
        answer_text: "C) y = 0",
        explanation: "For any exponential function f(x) = ab^x with a > 0 and b > 0, the horizontal asymptote is y = 0. The function approaches but never reaches the x-axis. Choice B (y = 7) would be the y-intercept, not the asymptote. Choice A is a vertical line, not horizontal."
      },
      {
        question_text: "A function g is defined by g(x) = 5·(3)^x. What is the range of g?",
        difficulty: "Easy",
        choices: [
          "A) All real numbers",
          "B) (0, ∞)",
          "C) [5, ∞)",
          "D) (5, ∞)"
        ],
        answer_text: "B) (0, ∞)",
        explanation: "Since g(x) = 5·3^x and both 5 and 3^x are positive for all real x, g(x) > 0 for all x. The range is all positive real numbers, (0, ∞). The minimum value is not 5 — in fact, g can be arbitrarily small (as x → −∞). So choices C and D are wrong."
      },
      {
        question_text: "A function f is defined by f(x) = 12·(2)^x. What is the value of f(0)?",
        difficulty: "Easy",
        choices: [
          "A) 2",
          "B) 24",
          "C) 0",
          "D) 12"
        ],
        answer_text: "D) 12",
        explanation: "f(0) = 12·2⁰ = 12·1 = 12. In general, f(0) = a·b⁰ = a·1 = a. So the y-intercept of any exponential function f(x) = ab^x is simply (0, a)."
      },
      {
        question_text: "Which of the following correctly describes the end behavior of f(x) = 3·(0.7)^x?",
        difficulty: "Easy",
        choices: [
          "A) As x → +∞, f(x) → +∞; as x → −∞, f(x) → 0",
          "B) As x → +∞, f(x) → 0; as x → −∞, f(x) → +∞",
          "C) As x → +∞, f(x) → 3; as x → −∞, f(x) → 3",
          "D) As x → +∞, f(x) → −∞; as x → −∞, f(x) → +∞"
        ],
        answer_text: "B) As x → +∞, f(x) → 0; as x → −∞, f(x) → +∞",
        explanation: "b = 0.7, so 0 < b < 1: exponential decay. As x → +∞, (0.7)^x → 0, so f(x) → 0. As x → −∞, (0.7)^x = (1/1.428...)^x → +∞, so f(x) → +∞. Choice A describes growth (b > 1), which is incorrect here."
      },
      {
        question_text: "A function f is defined by f(x) = a·b^x where a > 0 and 0 < b < 1. Which of the following statements is true?",
        difficulty: "Medium",
        choices: [
          "A) f has an x-intercept at x = 0",
          "B) f is decreasing for all real x",
          "C) f has a horizontal asymptote at y = a",
          "D) The range of f includes negative values"
        ],
        answer_text: "B) f is decreasing for all real x",
        explanation: "When 0 < b < 1, multiplying by b decreases the output, so f is decreasing everywhere. Choice A is false — there is no x-intercept because f(x) > 0 always. Choice C is false — the asymptote is y = 0, not y = a (y = a is the y-intercept). Choice D is false — the range is (0, ∞), all positive."
      },
      {
        question_text: "A city's population is modeled by P(t) = 25000·(1.03)^t, where t is years since 2000. In what year will the population be approximately 33,598? (Use (1.03)^10 ≈ 1.344.)",
        difficulty: "Medium",
        choices: [
          "A) 2008",
          "B) 2010",
          "C) 2013",
          "D) 2020"
        ],
        answer_text: "B) 2010",
        explanation: "Set 25000·(1.03)^t = 33598. Then (1.03)^t = (33598) / (25000) = 1.344 ≈ (1.03)^10. So t ≈ 10, corresponding to year 2000 + 10 = 2010."
      },
      {
        question_text: "The graph of f(x) = ab^x passes through (0, 6) and (2, 54). What is the value of b?",
        difficulty: "Medium",
        choices: [
          "A) 3",
          "B) 9",
          "C) 6",
          "D) 48"
        ],
        answer_text: "A) 3",
        explanation: "f(0) = a = 6. f(2) = 6·b² = 54, so b² = 9, giving b = 3 (since b > 0). Verify: f(2) = 6·3² = 6·9 = 54 ✓."
      },
      {
        question_text: "A function h satisfies h(x) = a·b^x with h(1) = 10 and h(2) = 2. Which of the following gives the values of a and b?",
        difficulty: "Medium",
        choices: [
          "A) a = 50, b = 0.2",
          "B) a = 5, b = 2",
          "C) a = 10, b = 0.2",
          "D) a = 50, b = 5"
        ],
        answer_text: "A) a = 50, b = 0.2",
        explanation: "From h(1) = ab = 10 and h(2) = ab² = 2. Dividing: (ab²)/(ab) = b = (2) / (10) = 0.2. Then a = 10/b = (10) / (0).2 = 50. Verify: h(1) = 50·0.2 = 10 ✓, h(2) = 50·0.04 = 2 ✓."
      },
      {
        question_text: "A function f is defined by f(x) = 100·(b)^x. The value of f decreases by 60% each time x increases by 1. What is b, and what is the horizontal asymptote of f?",
        difficulty: "Hard",
        choices: [
          "A) b = 0.6; asymptote y = 0",
          "B) b = 0.4; asymptote y = 0",
          "C) b = 0.6; asymptote y = 100",
          "D) b = 1.6; asymptote y = 0"
        ],
        answer_text: "B) b = 0.4; asymptote y = 0",
        explanation: "Decreasing by 60% means the remaining amount is 40% = 0.40 of the previous value. So the output is multiplied by 0.4 each step: b = 0.4. The horizontal asymptote is y = 0 (since 0 < b < 1, the function decays toward zero). A common mistake: 'decreases by 60%' means b = 0.6 — this confuses the percent decrease (60%) with the remaining factor (40% = 0.4)."
      },
      {
        question_text: "Let f(x) = 2·(3)^x and g(x) = 2·(3)^(−x). Which of the following statements about these two functions is true?",
        difficulty: "Hard",
        choices: [
          "A) Both functions have the same range and the same horizontal asymptote",
          "B) f is increasing and g is decreasing; they have different horizontal asymptotes",
          "C) f and g are reflections of each other across the y-axis and have the same y-intercept",
          "D) f has range (0, ∞) but g has range (−∞, 0)"
        ],
        answer_text: "C) f and g are reflections of each other across the y-axis and have the same y-intercept",
        explanation: "g(x) = 2·(3)^(−x) = 2·(1/3)^x. It is f evaluated at −x: g(x) = f(−x). This means g is the reflection of f across the y-axis. Both have y-intercept f(0) = g(0) = 2·1 = 2. Both have range (0, ∞) and asymptote y = 0. f is increasing (b=3>1), g is decreasing (b=(1) / (3)<1). Choice B is wrong about the asymptotes — both have y=0."
      }
    ]
  },

  "2.4": {
    essentialQuestion:
      "How can exponent rules be used to rewrite and convert between different forms of exponential expressions, and why is the conversion f(x) = ab^x = ae^(kx) significant?",

    apBoardNote:
      "CED Topic 2.4 requires students to apply exponent rules fluently to rewrite exponential expressions. The key skills are: using the product, power, negative, and fractional exponent rules; converting between the base-b form f(x) = ab^x and the base-e form ae^(kx) using k = ln(b); and recognizing common algebraic errors in exponent manipulation. The conversion to base-e form previews calculus and appears in AP exam items that test algebraic fluency.",

    teacherNote:
      "The most impactful teaching move here is to have students convert a concrete exponential function both ways: starting with 3·2^x, show step by step that this equals 3·e^(x·ln 2). Then start with 5·e^(0.4x) and recover b = e^0.4. This round-trip builds the insight that b and e^k are two ways of expressing the same base. Spend extra time on the fractional exponent rule b^(1/n) = ⁿ√b — students frequently confuse b^(1/2) with b/2. The most-tested error is (ab)^n = a^n·b^n versus the mistake of only applying the exponent to one factor.",

    studentVoice:
      "I never understood why my calculator has an e^x button. Now I get it — any exponential can be rewritten with base e. It's like e is the 'universal base' that everything converts to.",

    narration: [
      "Exponent rules are not arbitrary — they follow from the definition of exponentiation. When you multiply b^m · b^n, you are combining m copies of b with n copies of b, giving m+n copies total: b^(m+n). When you raise a power to a power, (b^m)^n, you are taking n groups of m copies each: b^(mn). These rules let you rewrite exponential expressions in equivalent but strategically useful forms.",
      "The five rules you must know for AP Precalculus are: the product rule (b^m · b^n = b^(m+n)); the power rule ((b^m)^n = b^(mn)); the negative exponent rule (b^(−n) = 1/b^n); the square-root rule (b^(1/2) = √b, more generally b^(1/n) = ⁿ√b); and the fractional exponent rule (b^(m/n) = (ⁿ√b)^m). These rules apply to any positive base b.",
      "A critical and frequently confused rule involves products raised to a power. The rule states (ab)^n = a^n · b^n — the exponent distributes to BOTH factors. However, the exponent does NOT distribute over addition: (a + b)^n ≠ a^n + b^n. This is one of the most common algebraic errors in all of mathematics — sometimes called the 'freshman's dream' — and it appears repeatedly on standardized tests.",
      "Now for the most consequential manipulation in this lesson: every exponential function f(x) = ab^x can be rewritten in the form ae^(kx) where k = ln(b). Why? Because b = e^(ln b) for any positive b (that is the definition of the natural logarithm). So b^x = (e^(ln b))^x = e^(x·ln b). Setting k = ln(b) gives the conversion. Going the other direction: if you are given f(x) = ae^(kx), then b = e^k.",
      "For example, f(x) = 3·2^x = 3·e^(x·ln 2) ≈ 3·e^(0.693x). And g(x) = 5·e^(0.4x) has base b = e^0.4 ≈ 1.492, meaning roughly 49.2% growth per unit. This conversion will be essential in calculus, where differentiation of exponential functions is far simpler in base-e form. But even in precalculus, it unifies the apparent variety of exponential functions: they all live in the same family, just expressed with different bases.",
      "Fractional exponents deserve special attention. The notation 8^(2/3) means (∛8)² = 2² = 4. You can also compute it as (8^2)^(1/3) = 64^(1/3) = 4 — both orders give the same answer, but taking the root first usually involves smaller numbers. When applying these rules in context, always write out the intermediate steps to avoid errors."
    ],

    priorKnowledge: [
      "Basic exponent definition: b^n = b · b · b · ... (n times)",
      "b⁰ = 1 for any non-zero b",
      "Understanding that b^x for non-integer x requires a broader definition (connected to roots)",
      "Square roots and cube roots as inverse operations",
      "The natural logarithm ln as the inverse of e^x: if e^k = b, then ln(b) = k"
    ],

    connections: [
      "Lesson 2.3: the base b in f(x) = ab^x can now be expressed as e^k, connecting exponential functions to the universal base e",
      "Lesson 2.5: manipulating exponential expressions is required when solving for a and b from data",
      "Precalculus/Calc preview: derivatives of exponential functions — d/dx[ae^(kx)] = ak·e^(kx) — are cleanest in base-e form",
      "Logarithms (Unit 3): all logarithm rules derive from these exponent rules via the inverse relationship"
    ],

    concepts: [
      "Product rule: b^m · b^n = b^(m+n) — add exponents when multiplying same base",
      "Power rule: (b^m)^n = b^(mn) — multiply exponents when raising a power to a power",
      "Negative exponent rule: b^(−n) = 1/b^n — negative exponent means reciprocal",
      "Fractional exponent rule: b^(1/n) = ⁿ√b and b^(m/n) = (ⁿ√b)^m — rational exponents connect to radicals",
      "Product-to-power rule: (ab)^n = a^n · b^n — exponent distributes over multiplication, NOT addition",
      "Base conversion: ab^x = ae^(kx) where k = ln(b); equivalently b = e^k"
    ],

    keyFormula:
      "b^m·b^n = b^(m+n)  |  (b^m)^n = b^(mn)  |  b^(−n) = 1/b^n  |  b^(1/n) = ⁿ√b  |  b^(m/n) = (ⁿ√b)^m  |  (ab)^n = a^n·b^n  |  Conversion: ab^x = ae^(kx) where k = ln(b)",

    keyTerms: [
      { term: "Product rule (exponents)", definition: "b^m · b^n = b^(m+n): when multiplying powers with the same base, add the exponents." },
      { term: "Power rule", definition: "(b^m)^n = b^(mn): when raising a power to another power, multiply the exponents." },
      { term: "Negative exponent", definition: "b^(−n) = 1/b^n: a negative exponent indicates the reciprocal of the corresponding positive-exponent expression." },
      { term: "Fractional exponent", definition: "b^(m/n) = (ⁿ√b)^m: a fractional exponent with denominator n corresponds to the nth root." },
      { term: "Natural base e", definition: "The irrational constant e ≈ 2.718, base of the natural exponential function e^x. Every exponential ab^x can be expressed as ae^(kx) with k = ln(b)." },
      { term: "k = ln(b)", definition: "The conversion constant that relates base b to base e: b^x = e^(kx) where k = ln(b). Also called the continuous growth rate." }
    ],

    workedExample: {
      problem:
        "Rewrite the expression (16)^(3/4) using fractional exponent rules, and also rewrite f(x) = 5·4^x in the form ae^(kx).",
      steps: [
        "Part 1 — Evaluate 16^(3/4).",
        "Step 1 — Apply b^(m/n) = (ⁿ√b)^m: 16^(3/4) = (⁴√16)^3.",
        "Step 2 — Find the fourth root: ⁴√16 = 16^(1/4). Since 2⁴ = 16, ⁴√16 = 2.",
        "Step 3 — Raise to the third power: 2³ = 8.",
        "Step 4 — Therefore 16^(3/4) = 8.",
        "Part 2 — Rewrite f(x) = 5·4^x as ae^(kx).",
        "Step 5 — Identify a = 5 and b = 4.",
        "Step 6 — Compute k = ln(4) = ln(2²) = 2·ln(2) ≈ 2·0.693 = 1.386.",
        "Step 7 — Write the result: f(x) = 5·e^(1.386x).",
        "Step 8 — Verify at x=1: 5·4¹ = 20; 5·e^1.386 ≈ 5·3.999 ≈ 20 ✓."
      ],
      answer: "16^(3/4) = 8. f(x) = 5·4^x = 5·e^(x·ln4) ≈ 5·e^(1.386x)."
    },

    workedExample2: {
      problem:
        "A function is given in base-e form: g(x) = 7·e^(−0.5x). (a) Identify the corresponding base b and rewrite in the form ab^x. (b) Is this growth or decay? (c) Evaluate g(4) exactly.",
      steps: [
        "Step 1 — Identify k = −0.5 from g(x) = 7·e^(−0.5x).",
        "Step 2 — Find b: b = e^k = e^(−0.5). Since e^(−0.5) = 1/e^(0.5) = 1/√e ≈ (1) / (1).6487 ≈ 0.6065.",
        "Step 3 — Rewrite: g(x) = 7·(e^(−0.5))^x = 7·(0.6065)^x approximately.",
        "Step 4 — Growth or decay? b ≈ 0.6065 and 0 < b < 1, so this is DECAY. (Also k = −0.5 < 0 confirms decay.)",
        "Step 5 — Evaluate g(4): g(4) = 7·e^(−0.5·4) = 7·e^(−2).",
        "Step 6 — Leave exact: g(4) = 7e^(−2) = 7/e² ≈ (7) / (7).389 ≈ 0.947."
      ],
      answer: "b = e^(−0.5) ≈ 0.6065; g(x) ≈ 7·(0.6065)^x. Decay (b < 1). g(4) = 7e^(−2) = 7/e² ≈ 0.947."
    },

    commonMistakes: [
      "(a + b)^n ≠ a^n + b^n — the exponent does NOT distribute over addition; this error is extremely common and completely invalid.",
      "b^(1/2) is √b, not b/2 — fractional exponents mean roots, not fractions of the base.",
      "When applying the power rule, multiplying the base instead of the exponents: writing (b^m)^n = b^(m+n) instead of b^(mn).",
      "In the conversion f(x) = ab^x → ae^(kx), computing k = b instead of k = ln(b) — always take the natural log of the base.",
      "(2x)^3 = 8x³, not 2x³ — the coefficient is raised to the power too: (2x)^3 = 2³·x³ = 8x³."
    ],

    tip: "For the conversion ab^x → ae^(kx), remember: k is what you take the ln of. So k = ln(b). To go back: b = e^k. When k > 0, growth. When k < 0, decay. If you see e^(kx) with k negative, that's still decay — negative k and base less than 1 are the same reality expressed differently.",

    questions: [
      {
        question_text: "Which of the following correctly simplifies 2^3 · 2^5?",
        difficulty: "Easy",
        choices: [
          "A) 2^15",
          "B) 4^8",
          "C) 2^8",
          "D) 2^2"
        ],
        answer_text: "C) 2^8",
        explanation: "Product rule: b^m · b^n = b^(m+n). So 2^3 · 2^5 = 2^(3+5) = 2^8. Do not multiply the bases (choice B) or the exponents (choice A)."
      },
      {
        question_text: "What is the value of 27^(2/3)?",
        difficulty: "Easy",
        choices: [
          "A) 18",
          "B) 9",
          "C) 3",
          "D) 6"
        ],
        answer_text: "B) 9",
        explanation: "27^(2/3) = (∛27)² = 3² = 9. The denominator of the fractional exponent (3) gives the root; the numerator (2) gives the power. Alternatively: 27^(2/3) = (27^2)^(1/3) = 729^(1/3) = 9."
      },
      {
        question_text: "Which expression is equivalent to b^(−3)?",
        difficulty: "Easy",
        choices: [
          "A) −b^3",
          "B) 1/b^3",
          "C) b^(1/3)",
          "D) −1/b^3"
        ],
        answer_text: "B) 1/b^3",
        explanation: "The negative exponent rule: b^(−n) = 1/b^n. So b^(−3) = 1/b³. The negative exponent does NOT make the expression negative (choice A or D). Choice C is the cube root, which is b^(1/3), not b^(−3)."
      },
      {
        question_text: "A function f is defined by f(x) = 6·(2)^x. Which of the following is an equivalent expression for f(x) in the form ae^(kx)? (Use ln 2 ≈ 0.693.)",
        difficulty: "Easy",
        choices: [
          "A) f(x) = 6·e^(2x)",
          "B) f(x) = 6·e^(0.693x)",
          "C) f(x) = 6·e^(x/2)",
          "D) f(x) = 12·e^x"
        ],
        answer_text: "B) f(x) = 6·e^(0.693x)",
        explanation: "k = ln(b) = ln(2) ≈ 0.693. So f(x) = 6·2^x = 6·e^(0.693x). The initial value a = 6 stays the same. Choice A uses k = 2 (the base itself) — this is the most common mistake."
      },
      {
        question_text: "Simplify (x^3)^4.",
        difficulty: "Medium",
        choices: [
          "A) x^7",
          "B) x^12",
          "C) x^(3/4)",
          "D) 4x^3"
        ],
        answer_text: "B) x^12",
        explanation: "Power rule: (x^m)^n = x^(mn). So (x^3)^4 = x^(3·4) = x^12. A common error is adding exponents (3+4=7) instead of multiplying, giving choice A."
      },
      {
        question_text: "A function g is defined by g(x) = 10·e^(0.3x). What is the equivalent base b such that g(x) = 10·b^x? (Use e^0.3 ≈ 1.35.)",
        difficulty: "Medium",
        choices: [
          "A) b = 0.3",
          "B) b = e^(1/0.3) ≈ 28.03",
          "C) b = e^0.3 ≈ 1.35",
          "D) b = ln(0.3) ≈ −1.20"
        ],
        answer_text: "C) b = e^0.3 ≈ 1.35",
        explanation: "If g(x) = 10·e^(0.3x) = 10·(e^0.3)^x, then b = e^0.3 ≈ 1.35. The formula is b = e^k where k is the coefficient of x in the exponent. Here k = 0.3, so b = e^0.3."
      },
      {
        question_text: "Which of the following is NOT a valid application of exponent rules?",
        difficulty: "Medium",
        choices: [
          "A) (3x)^2 = 9x^2",
          "B) (a + b)^2 = a^2 + b^2",
          "C) (2^3)^4 = 2^12",
          "D) 5^(−2) = (1) / (25)"
        ],
        answer_text: "B) (a + b)^2 = a^2 + b^2",
        explanation: "(a + b)^2 = a^2 + 2ab + b^2 by the distributive property (FOIL). The rule (a+b)^2 = a^2 + b^2 omits the cross term 2ab. Exponents do NOT distribute over addition. The other choices are all correct: (3x)^2 = 9x^2, (2^3)^4 = 2^12, and 5^(−2) = (1) / (25)."
      },
      {
        question_text: "Simplify the expression (8x^6)^(2/3).",
        difficulty: "Medium",
        choices: [
          "A) 4x^4",
          "B) 8x^4",
          "C) 4x^9",
          "D) 16x^4"
        ],
        answer_text: "A) 4x^4",
        explanation: "(8x^6)^(2/3) = 8^(2/3) · (x^6)^(2/3) = (∛8)^2 · x^(6·2/3) = 2^2 · x^4 = 4x^4. Apply the power to each factor: 8^(2/3) = (∛8)^2 = 2^2 = 4, and (x^6)^(2/3) = x^4."
      },
      {
        question_text: "A function f is given by f(x) = 3^(2x+1). Which of the following is an equivalent simplified form?",
        difficulty: "Hard",
        choices: [
          "A) 3^(2x) + 3",
          "B) 3·9^x",
          "C) 9^(x+1)",
          "D) 6^x · 3"
        ],
        answer_text: "B) 3·9^x",
        explanation: "f(x) = 3^(2x+1) = 3^(2x) · 3^1 = (3^2)^x · 3 = 9^x · 3 = 3·9^x. Use the product rule to split the exponent: 3^(2x+1) = 3^(2x)·3^1. Then apply the power rule: 3^(2x) = (3^2)^x = 9^x."
      },
      {
        question_text: "If f(x) = ae^(kx) and g(x) = ae^(−kx) with k > 0, which of the following statements is true?",
        difficulty: "Hard",
        choices: [
          "A) f(x)·g(x) = a^2 for all x",
          "B) f(x)·g(x) = a^2·e^(2k) for all x",
          "C) f(x) + g(x) = 2a for all x",
          "D) f(x)·g(x) = 1 for all x"
        ],
        answer_text: "A) f(x)·g(x) = a^2 for all x",
        explanation: "f(x)·g(x) = ae^(kx)·ae^(−kx) = a²·e^(kx+(−kx)) = a²·e^0 = a²·1 = a². The exponential terms cancel because the exponents are opposites (kx + (−kx) = 0). This is a beautiful consequence of the product rule for exponents."
      }
    ]
  },

  "2.5": {
    essentialQuestion:
      "How do you construct an exponential model from two data points or a context description, and how do you interpret the base b in real-world terms?",

    apBoardNote:
      "CED Topic 2.5 is heavily applied: students must find a and b from two data points, interpret b as a growth/decay factor, convert between percent rate r and base b using b = 1 + r (or b = 1 − r for decay), and evaluate or make predictions using the model. AP exam items in this topic typically give context (population, investment, radioactive decay, medication dosage) and ask for model construction, parameter interpretation, or prediction. The distinction between b and r is a perennial source of student error.",

    teacherNote:
      "The 'find a and b from two points' procedure is the workhorse of this lesson. Walk through the full solution method: if one point is (0, y₀), then a = y₀ immediately. If neither point is at x = 0, divide the two equations to eliminate a, then solve for b. Students benefit from seeing both cases worked explicitly. Then shift immediately to interpretation: spend half the lesson having students say out loud what b = 1.07 means ('the population is multiplied by 1.07 each year, meaning it grows by 7%') versus what b = 0.88 means ('the quantity decays to 88% of its previous value each year, a 12% decrease'). This verbal fluency is directly tested.",

    studentVoice:
      "It finally clicked when I realized b IS the multiplier — b = 1.07 means 'multiply by 1.07 each year' which is the same as 'add 7% each year.' I was always confusing the rate and the base. Now I just remember: b = 1 + rate.",

    narration: [
      "When a real-world quantity grows or decays exponentially, we model it with f(x) = ab^x. The challenge is finding a and b from context or data. This lesson covers two scenarios: finding a and b from a context description (like '7% annual growth') and finding them from two data points in a table.",
      "When the context gives you the initial value and a percent change: the initial value is a (it's the output at time zero). If a quantity grows by r percent per period, the base is b = 1 + r (where r is expressed as a decimal). If it decays by r percent per period, the base is b = 1 − r. For example, a town with population 5,000 that loses 12% of its population each year has model P(t) = 5000·(0.88)^t. The base b = 0.88 = 1 − 0.12 means '88% of the previous year's population remains each year.'",
      "The most important distinction in applied exponential modeling: b is the growth FACTOR (what you multiply by), while r is the growth RATE (the percent change, expressed as a decimal). They are related by b = 1 + r for growth or b = 1 − r for decay. Students who confuse them — writing b = 0.07 when they mean 7% growth — will get a function that decays to nearly zero rather than growing.",
      "When you have two data points (x₁, y₁) and (x₂, y₂): if one is (0, y₀), then a = y₀ directly, and you substitute the second point to solve for b. If neither point is at x = 0, write the two equations y₁ = ab^(x₁) and y₂ = ab^(x₂), then divide the second by the first: y₂/y₁ = b^(x₂ − x₁). Solve for b by raising both sides to the power 1/(x₂ − x₁). Then substitute back to find a.",
      "Interpreting the model after constructing it is just as important as finding a and b. Given f(x) = 1200·(1.035)^x: the initial value is 1200 (the quantity at x=0), and b = 1.035 means 3.5% growth per unit period. Given g(t) = 800·(0.92)^t: the initial value is 800, and b = 0.92 means 8% decay per period (since 1 − 0.92 = 0.08).",
      "Compound interest is a canonical application: A = P(1 + r)^t models the amount A in an account with principal P after t years at annual interest rate r (compounded annually). Here P plays the role of a and (1+r) plays the role of b. The percent growth rate equals b − 1. This formula appears throughout finance and is a direct instantiation of the exponential model.",
      "A subtlety worth noting: the exponential model assumes continuous, proportional growth. In reality, populations are discrete and growth conditions change. But as a mathematical model, f(x) = ab^x fits an enormous range of real phenomena — from bacteria to investments to radioactive decay — making it one of the most practically important functions in all of mathematics."
    ],

    priorKnowledge: [
      "The form f(x) = ab^x and the roles of a and b (from Lesson 2.3)",
      "Percent increase and decrease: adding 7% means multiplying by 1.07; losing 15% means multiplying by 0.85",
      "Solving simple exponential equations by matching exponents or taking roots",
      "Substituting points into equations to find unknown parameters",
      "The exponent rule (b^m)^(1/m) = b for recovering a base from a power"
    ],

    connections: [
      "Lesson 2.3: the properties of f(x) = ab^x (range, asymptote, intercepts) apply to all models built here",
      "Lesson 2.2: the constant-ratio property of exponential functions explains why dividing two equations to find b works",
      "Lesson 2.4: converting to base-e form ae^(kx) after finding a and b is a natural follow-up",
      "Finance/statistics: compound interest and exponential regression in data science are direct applications"
    ],

    concepts: [
      "From context: a = initial value; b = 1 + r for growth, b = 1 − r for decay, where r is the percent rate as a decimal",
      "From two points with x₁ = 0: a = y₁ directly; solve ab^(x₂) = y₂ for b",
      "From two points (x₁, y₁) and (x₂, y₂): divide equations to get b^(x₂−x₁) = y₂/y₁, then solve for b",
      "Interpret b: b − 1 is the growth rate (if b > 1); 1 − b is the decay rate (if 0 < b < 1)",
      "Compound interest: A = P(1 + r)^t where P = principal, r = annual rate, t = time in years",
      "Distinguish percent rate r from growth factor b — they differ by 1"
    ],

    keyFormula:
      "f(x) = ab^x: a = initial value, b = growth/decay factor  |  Growth: b = 1 + r  |  Decay: b = 1 − r  |  From two points: b^(x₂−x₁) = y₂/y₁  |  Compound interest: A = P(1+r)^t",

    keyTerms: [
      { term: "Growth factor (b)", definition: "The constant base in f(x) = ab^x; the number by which the output is multiplied for each unit increase in input. b = 1 + r for growth." },
      { term: "Growth rate (r)", definition: "The percent change per unit period, expressed as a decimal. Related to the growth factor by r = b − 1." },
      { term: "Decay rate", definition: "The percent by which the quantity decreases per unit period, expressed as a decimal. The decay factor is b = 1 − r." },
      { term: "Compound interest", definition: "Interest computed on both the principal and previously earned interest: A = P(1+r)^t, where P is principal, r is the annual rate, and t is time in years." },
      { term: "Initial value", definition: "The output of the model when the input is zero: a = f(0). In context, it is the starting amount before any growth or decay." },
      { term: "Exponential model", definition: "A function of the form f(x) = ab^x used to represent real-world quantities that change by a constant multiplicative factor per unit time." }
    ],

    workedExample: {
      problem:
        "A population of 3,000 rabbits is decreasing at a rate of 8% per year. Write an exponential model for the population P(t) after t years, and find the population after 5 years.",
      steps: [
        "Step 1 — Identify the initial value: P(0) = 3000, so a = 3000.",
        "Step 2 — Identify the decay rate: 8% decrease per year, so r = 0.08.",
        "Step 3 — Compute b: decay means b = 1 − r = 1 − 0.08 = 0.92.",
        "Step 4 — Write the model: P(t) = 3000·(0.92)^t.",
        "Step 5 — Interpret: b = 0.92 means 92% of the population remains each year (an 8% decrease).",
        "Step 6 — Find P(5): P(5) = 3000·(0.92)^5.",
        "Step 7 — Compute (0.92)^5: 0.92² = 0.8464; 0.92⁴ = (0.8464)² ≈ 0.7164; 0.92⁵ ≈ 0.7164·0.92 ≈ 0.6591.",
        "Step 8 — P(5) ≈ 3000·0.6591 ≈ 1977 rabbits."
      ],
      answer: "P(t) = 3000·(0.92)^t. After 5 years, the population is approximately 1,977 rabbits."
    },

    workedExample2: {
      problem:
        "A function f is defined by an exponential model. The table shows two values: f(2) = 50 and f(6) = 800. Find the exponential model f(x) = ab^x, and identify the growth rate per unit period.",
      steps: [
        "Step 1 — Set up equations using f(x) = ab^x: ab² = 50 and ab⁶ = 800.",
        "Step 2 — Divide the second equation by the first to eliminate a: (ab⁶)/(ab²) = (800) / (50), giving b⁴ = 16.",
        "Step 3 — Solve for b: b = 16^(1/4) = (2⁴)^(1/4) = 2. Since b > 0, b = 2.",
        "Step 4 — Substitute b = 2 into ab² = 50: a·4 = 50, so a = (50) / (4) = 12.5.",
        "Step 5 — Write the model: f(x) = 12.5·2^x.",
        "Step 6 — Verify: f(2) = 12.5·4 = 50 ✓; f(6) = 12.5·64 = 800 ✓.",
        "Step 7 — Interpret b: b = 2 means the function doubles each unit period. Growth rate r = b − 1 = 2 − 1 = 1 = 100% growth per period."
      ],
      answer: "f(x) = 12.5·2^x. The function grows by 100% (doubles) each unit period."
    },

    commonMistakes: [
      "Confusing the growth rate r with the growth factor b: if a quantity grows by 7%, then b = 1.07, NOT b = 0.07. Writing b = 0.07 gives a function that decays to nearly zero.",
      "For decay, using b = 1 + r instead of b = 1 − r: if a quantity decays by 15%, b = 0.85, not 1.15.",
      "When given two points neither at x = 0, forgetting to divide the equations to eliminate a before solving for b.",
      "After finding b, forgetting to solve for a by substituting back into one of the original equations.",
      "Interpreting the model: stating 'b = 1.07 means 107% growth' instead of '7% growth' — b is the factor, and the rate is b − 1."
    ],

    tip: "Memorize the two setups: (1) If you know initial value and percent change: a = initial value, b = 1 ± rate. (2) If you have two data points: divide equations to find b, then substitute to find a. These two procedures cover nearly every AP exam scenario in this topic.",

    questions: [
      {
        question_text: "A savings account contains $2,000 and earns 5% interest compounded annually. Which function models the account balance A(t) after t years?",
        difficulty: "Easy",
        choices: [
          "A) A(t) = 2000 + 0.05t",
          "B) A(t) = 2000·(0.05)^t",
          "C) A(t) = 2000·(1.05)^t",
          "D) A(t) = 2000·(1.5)^t"
        ],
        answer_text: "C) A(t) = 2000·(1.05)^t",
        explanation: "Compound interest: A = P(1+r)^t. Here P = 2000 and r = 0.05, so b = 1 + 0.05 = 1.05. Choice A is linear (not compounding). Choice B uses the rate as the base (b = 0.05, which is a decay), not the growth factor."
      },
      {
        question_text: "A function f is defined by f(x) = 500·(0.75)^x. What is the percent decrease per unit period?",
        difficulty: "Easy",
        choices: [
          "A) 75%",
          "B) 25%",
          "C) 0.75%",
          "D) 125%"
        ],
        answer_text: "B) 25%",
        explanation: "The decay factor is b = 0.75. The decay rate is 1 − b = 1 − 0.75 = 0.25 = 25%. Each period, 25% of the value is lost (75% remains). Choice A confuses the factor (75%) with the rate (25%)."
      },
      {
        question_text: "The value of a car decreases by 18% each year. If the car initially costs $24,000, which of the following models the value V(t) after t years?",
        difficulty: "Easy",
        choices: [
          "A) V(t) = 24000·(1.18)^t",
          "B) V(t) = 24000 − 18t",
          "C) V(t) = 24000·(0.18)^t",
          "D) V(t) = 24000·(0.82)^t"
        ],
        answer_text: "D) V(t) = 24000·(0.82)^t",
        explanation: "18% decrease per year: b = 1 − 0.18 = 0.82. a = 24000. Model: V(t) = 24000·(0.82)^t. Choice A uses b = 1.18 (18% increase). Choice C uses the rate itself as the base (b = 0.18, massive decay). Choice B is linear."
      },
      {
        question_text: "A function g is defined by an exponential model passing through (0, 40) and (3, 320). What is the value of b?",
        difficulty: "Easy",
        choices: [
          "A) 2",
          "B) 8",
          "C) 3",
          "D) 4"
        ],
        answer_text: "A) 2",
        explanation: "From (0, 40): a = 40. From (3, 320): 40·b³ = 320, so b³ = 8, giving b = 2. Verify: 40·2³ = 40·8 = 320 ✓."
      },
      {
        question_text: "A radioactive substance has an initial mass of 200 grams and decays to 162 grams after 1 year. Which exponential function models the mass M(t) after t years?",
        difficulty: "Medium",
        choices: [
          "A) M(t) = 200·(0.81)^t",
          "B) M(t) = 200·(0.19)^t",
          "C) M(t) = 162·(0.81)^t",
          "D) M(t) = 200·(1.19)^t"
        ],
        answer_text: "A) M(t) = 200·(0.81)^t",
        explanation: "Initial value a = 200. After t=1, M = 162: 200·b = 162 → b = (162) / (200) = 0.81. Model: M(t) = 200·(0.81)^t. The decay rate is 1 − 0.81 = 0.19 = 19% per year, but b = 0.81 not 0.19."
      },
      {
        question_text: "A function f is defined by f(x) = ab^x with f(1) = 6 and f(4) = 48. What is the value of a?",
        difficulty: "Medium",
        choices: [
          "A) 3",
          "B) 2",
          "C) 1.5",
          "D) 6"
        ],
        answer_text: "A) 3",
        explanation: "Divide f(4)/f(1): b³ = (48) / (6) = 8, so b = 2. Substitute into f(1) = ab = 6: a·2 = 6, giving a = 3. Verify: f(1) = 3·2 = 6 ✓; f(4) = 3·16 = 48 ✓."
      },
      {
        question_text: "A population model gives P(t) = a·b^t. The population grows from 1,000 to 1,210 in 2 years. Which of the following gives the annual growth rate?",
        difficulty: "Medium",
        choices: [
          "A) 10%",
          "B) 21%",
          "C) 5%",
          "D) 20%"
        ],
        answer_text: "A) 10%",
        explanation: "a = 1000, P(2) = 1210 = 1000·b². So b² = 1.21, giving b = √1.21 = 1.10. Annual growth rate = b − 1 = 0.10 = 10%. Note: 210 total growth over 2 years ≠ 21% per year (that's a linear thinking error — choice B)."
      },
      {
        question_text: "An exponential function f satisfies f(x) = ab^x. It is known that f doubles in value every 4 units. If f(0) = 7, what is f(12)?",
        difficulty: "Medium",
        choices: [
          "A) 21",
          "B) 56",
          "C) 84",
          "D) 28"
        ],
        answer_text: "B) 56",
        explanation: "Doubling every 4 units means f(4) = 2·f(0), f(8) = 4·f(0), f(12) = 8·f(0). That's 3 doublings over 12 units. f(12) = 7·2³ = 7·8 = 56."
      },
      {
        question_text: "A researcher models a drug's concentration in the bloodstream as C(t) = 80·(0.6)^t mg/L, where t is measured in hours. After how many hours will the concentration first fall below 10 mg/L? (Use log base 0.6: (0.6)^3 ≈ 0.216, (0.6)^4 ≈ 0.130, (0.6)^5 ≈ 0.078.)",
        difficulty: "Hard",
        choices: [
          "A) After 3 hours",
          "B) After 4 hours",
          "C) After 5 hours",
          "D) After 6 hours"
        ],
        answer_text: "C) After 5 hours",
        explanation: "Need C(t) < 10: 80·(0.6)^t < 10 → (0.6)^t < 0.125. Check: C(4) = 80·0.130 = 10.4 > 10. C(5) = 80·0.078 = 6.24 < 10. The concentration first falls below 10 mg/L between t=4 and t=5, so after 5 hours (the first whole-hour time when the condition is met)."
      },
      {
        question_text: "Two exponential models are given: f(x) = 4·(2)^x and g(x) = 32·(0.5)^x. For how many values of x do f(x) = g(x)?",
        difficulty: "Hard",
        choices: [
          "A) Zero — they never intersect",
          "B) Exactly one",
          "C) Exactly two",
          "D) Infinitely many"
        ],
        answer_text: "B) Exactly one",
        explanation: "Set 4·2^x = 32·(0.5)^x = 32·(2^(−1))^x = 32·2^(−x). Then 4·2^x = 32·2^(−x). Divide both sides by 4: 2^x = 8·2^(−x). Multiply both sides by 2^x: 2^(2x) = 8 = 2³. So 2x = 3, giving x = 1.5. One solution. Verify: f(1.5) = 4·2^1.5 = 4·2√2 ≈ 11.31; g(1.5) = 32·(0.5)^1.5 = 32/(2√2) ≈ 11.31 ✓."
      }
    ]
  }
}
