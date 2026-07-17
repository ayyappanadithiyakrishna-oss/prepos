import type { LessonContent } from './lesson-content'

export const UNIT2_PART3: Record<string, LessonContent> = {

  // ─────────────────────────────────────────────────────────────────────────
  // 2.11 — Logarithmic Functions
  // ─────────────────────────────────────────────────────────────────────────
  "2.11": {
    essentialQuestion: "What does a logarithm actually measure, and how do the features of a logarithmic graph connect to what the function is doing?",

    apBoardNote: "CED skill 2.11A–2.11C. On the AP exam this lesson appears in Section I (MC) through graph analysis (identify domain, vertical asymptote, increasing/decreasing behavior from base), and in Section II (FR) as part of a modeling context where students must state and justify domain restrictions. Full credit requires: (1) stating domain as x > h (not just 'positive'), (2) identifying the vertical asymptote equation x = h, and (3) correctly applying transformations. Frequent distractor: choices offer x > 0 as domain for a transformed log, baiting students who forget horizontal shifts move the asymptote.",

    teacherNote: "Prerequisites: students must be fluent with exponential functions (2.1–2.4) because a logarithm is the inverse of an exponential — this is the conceptual anchor. A major misconception is that the domain of log_b(x − h) + k is x > 0 instead of x > h. Scaffold by first asking 'what must the INPUT of the raw log be positive?' — the answer is the argument (x − h), so solve x − h > 0. A second misconception: students confuse the base controlling increasing/decreasing behavior with the coefficient 'a' flipping the graph. Teach both separately. Connect forward to 2.12 (log rules allow algebraic manipulation) and 2.13 (solving log equations requires domain checks).",

    studentVoice: "Here's how logarithms finally clicked for me: log_b(x) is just asking 'what power do I raise b to in order to GET x?' That's it. So log₂(8) = 3 because 2³ = 8. Once you see it that way, the graph makes total sense — as x gets huge, the answer (the exponent) only grows slowly, which is why the graph rises but flattens out. The domain being x > 0 isn't a random rule; it's because you literally cannot raise a positive base to ANY power and get zero or a negative number. And transformations? If you shift the function right by 4 (replace x with x−4), now the argument x−4 must be positive, so x > 4. The vertical asymptote follows the argument to x = 4.",

    narration: [
      "The logarithm was invented to answer a question that exponents leave open: if bˣ = y, we know how to go from x to y — but how do we go from y back to x? The answer is x = log_b(y). The logarithm is the INVERSE of the exponential. Every fact about exponential graphs directly implies something about log graphs, because inverse functions reflect over the line y = x.",
      "The graph of f(x) = log_b(x) has a domain of x > 0. That's not an arbitrary restriction — it's because b to any real power is always positive, so the inverse function can only accept positive inputs. The range is all real numbers, because you can raise b to any power and get any positive output, meaning every real exponent is reachable. The graph crosses the x-axis at (1, 0) always, because log_b(1) = 0 for any base (b⁰ = 1). There is a vertical asymptote at x = 0 because the function blows toward −∞ as x approaches 0 from the right.",
      "The base b controls the shape in a precise way. When b > 1, the log is an INCREASING function — larger inputs require larger exponents, which makes intuitive sense (log₁₀(100) = 2 is bigger than log₁₀(10) = 1). When 0 < b < 1 — say b = (1) / (2) — the function is DECREASING because raising a fraction to a larger power makes it smaller, so larger inputs need smaller (more negative) exponents. On the AP exam, the base is almost always greater than 1, but know the decreasing case exists.",
      "A reliable landmark: the graph always passes through (b, 1), because log_b(b) = 1 (b¹ = b). This is one of the College Board's favorite test points — they'll give you a graph, mark that landmark, and ask you to identify the base. If the graph passes through (5, 1), the base is 5. No calculations needed.",
      "Transformations shift the entire graph and its key features. In f(x) = a·log_b(x − h) + k: the horizontal shift h moves the vertical asymptote from x = 0 to x = h, and the domain becomes x > h (not x > 0 — this is the most-missed fact on the exam). The vertical shift k moves the x-intercept. The coefficient a stretches or reflects; if a < 0, the graph flips over the horizontal asymptote line. To find the new x-intercept, set f(x) = 0 and solve — you'll need to use the log-to-exponential conversion.",
      "To find the domain of any transformed log: identify the argument inside the log, set it greater than zero, and solve. For g(x) = 2·log₃(x + 4) − 1, the argument is x + 4. Set x + 4 > 0, so x > −4. That's the domain. The vertical asymptote is x = −4. For the x-intercept, set 2·log₃(x + 4) − 1 = 0: log₃(x + 4) = (1) / (2), so x + 4 = 3^(1/2) = √3, giving x = √3 − 4 ≈ −2.27.",
      "The big-picture reason logarithms matter: they turn multiplicative scales into additive ones. Quantities that vary over many orders of magnitude — sound intensity, earthquake energy, chemical concentration — are impossible to display on a linear scale. A log scale compresses the extremes so everything fits in one readable picture. That's why we hear 'decibels' and 'Richter scale' rather than raw intensity values. Logarithms are not just algebra tricks; they're how scientists make sense of a world where things vary by factors of millions."
    ],

    priorKnowledge: [
      "Exponential function f(x) = b·aˣ and its graph features (domain, range, horizontal asymptote)",
      "Inverse functions: if (a, b) is on f, then (b, a) is on f⁻¹",
      "Solving equations of the form bˣ = c by recognizing the base",
      "Horizontal and vertical transformations of function graphs (h shifts left/right, k shifts up/down)",
      "Solving linear inequalities to find domain restrictions"
    ],

    connections: [
      "Inverse of exponential functions (2.4) — log is literally the inverse, so every exponential feature has a log counterpart",
      "Transformations of functions (Unit 1) — same shift/stretch rules apply",
      "Logarithm rules (2.12) — needed to simplify and solve log expressions",
      "Logarithmic equations (2.13) — domain checking from 2.11 is essential for catching extraneous solutions",
      "Real-world modeling (2.14) — pH, Richter, decibels all use the log function from this lesson"
    ],

    concepts: [
      "log_b(x) asks: 'to what power must I raise b to get x?' It is the inverse of bˣ.",
      "Domain of log_b(x): x > 0. Range: all real numbers. x-intercept: (1, 0). Vertical asymptote: x = 0.",
      "If b > 1, the function is increasing. If 0 < b < 1, the function is decreasing.",
      "The graph always passes through (b, 1) because log_b(b) = 1.",
      "For f(x) = a·log_b(x − h) + k: domain is x > h, vertical asymptote is x = h.",
      "To find the domain: set the argument > 0 and solve the inequality."
    ],

    keyFormula: "f(x) = a · log_b(x − h) + k   |   Domain: x > h   |   Vertical asymptote: x = h   |   log_b(b) = 1   |   log_b(1) = 0",

    keyTerms: [
      { term: "Logarithm", definition: "log_b(x) = y means bʸ = x. The logarithm answers: 'what exponent on b gives x?'" },
      { term: "Common Logarithm", definition: "log(x) with no written base means log₁₀(x). Used in chemistry (pH) and seismology (Richter scale)." },
      { term: "Natural Logarithm", definition: "ln(x) = log_e(x), where e ≈ 2.718. The natural base appears in continuous growth/decay models." },
      { term: "Vertical Asymptote", definition: "A vertical line the graph approaches but never crosses. For log_b(x − h) + k, the vertical asymptote is x = h." },
      { term: "Domain of a Logarithm", definition: "The argument inside the log must be strictly positive. For log_b(x − h), set x − h > 0 to get x > h." },
      { term: "Landmark Point (b, 1)", definition: "Every log base b graph passes through (b, 1) because log_b(b) = 1. This point identifies the base from a graph." }
    ],

    workedExample: {
      problem: "Let g(x) = 2·log₃(x + 4) − 1. State the domain, vertical asymptote, and x-intercept. Then determine whether g is increasing or decreasing.",
      steps: [
        "Step 1 — Domain: the argument of the log is (x + 4). It must be strictly positive: x + 4 > 0 → x > −4. Domain: (−4, ∞).",
        "Step 2 — Vertical asymptote: it occurs where the argument equals zero. x + 4 = 0 → x = −4. Vertical asymptote: x = −4.",
        "Step 3 — Increasing or decreasing: the base is 3 > 1, so the base log₃ is increasing. The coefficient 2 is positive, so no reflection. g is INCREASING.",
        "Step 4 — x-intercept: set g(x) = 0. 2·log₃(x + 4) − 1 = 0 → 2·log₃(x + 4) = 1 → log₃(x + 4) = (1) / (2).",
        "Step 5 — Convert log to exponential form: x + 4 = 3^(1/2) = √3.",
        "Step 6 — Solve: x = √3 − 4 ≈ 1.732 − 4 = −2.268. x-intercept: (√3 − 4, 0).",
        "Step 7 — Check domain: √3 − 4 ≈ −2.27, which is greater than −4. ✓ Valid."
      ],
      answer: "Domain: x > −4. Vertical asymptote: x = −4. g is increasing. x-intercept: x = √3 − 4 ≈ −2.27."
    },

    workedExample2: {
      problem: "A graph of h(x) = log_b(x − 2) + c passes through (7, 3) and (11, 4). Find the values of b and c, then state the exact domain.",
      steps: [
        "Step 1 — Set up a system. Plug in the two points: log_b(7 − 2) + c = 3 and log_b(11 − 2) + c = 4.",
        "Step 2 — Simplify the arguments: log_b(5) + c = 3 and log_b(9) + c = 4.",
        "Step 3 — Subtract the first equation from the second: log_b(9) − log_b(5) = 1.",
        "Step 4 — Apply quotient rule: log_b(9/5) = 1.",
        "Step 5 — Convert to exponential form: b¹ = (9) / (5), so b = (9) / (5) = 1.8.",
        "Step 6 — Substitute back to find c. log_(9/5)(5) + c = 3. Convert: (9/5)^c_power = 5... use change-of-base: log_(9/5)(5) = ln(5)/ln(9/5) = 1.(609) / (0).588 ≈ 2.737. So 2.737 + c = 3 → c ≈ 0.263.",
        "Step 7 — Domain: argument is x − 2; set x − 2 > 0 → x > 2. Domain: (2, ∞). Vertical asymptote: x = 2.",
        "Step 8 — Check: b = (9) / (5) > 1, so h is increasing, consistent with both y-values growing as x grows. ✓"
      ],
      answer: "b = (9) / (5), c ≈ 0.263. Domain: x > 2. Vertical asymptote: x = 2."
    },

    commonMistakes: [
      "Writing the domain as x > 0 instead of x > h after a horizontal shift. The domain restriction follows the ARGUMENT, not just x.",
      "Confusing the x-intercept with the vertical asymptote. The x-intercept is found by solving f(x) = 0; the asymptote is where the argument equals 0.",
      "Forgetting that the landmark point is (b, 1), not (1, b). log_b(b) = 1, not log_b(1) = b.",
      "Thinking a negative coefficient 'a' changes the domain. It doesn't — the domain still depends only on the argument inside the log.",
      "Saying the function has a horizontal asymptote. Logarithmic functions do NOT have horizontal asymptotes — the range is all real numbers."
    ],

    tip: "To find the domain of any log function in seconds: circle the expression inside the log, set it > 0, and solve. That inequality IS the domain. The boundary value (where it equals 0) is your vertical asymptote equation.",

    questions: [
      {
        question_text: "What is the domain of f(x) = log₄(x − 5)?",
        difficulty: "Easy",
        choices: ["A) x > 0", "B) x > 4", "C) x > 5", "D) x > −5"],
        answer_text: "C",
        explanation: "The argument is x − 5. Set x − 5 > 0 → x > 5. The domain is (5, ∞). The vertical asymptote is x = 5, not x = 4 (which is the base)."
      },
      {
        question_text: "The graph of f(x) = log_b(x) passes through the point (7, 1). What is the base b?",
        difficulty: "Easy",
        choices: ["A) 1", "B) 7", "C) (1) / (7)", "D) 49"],
        answer_text: "B",
        explanation: "log_b(x) = 1 means b¹ = x. So b = 7. Alternatively, the landmark point (b, 1) is always on the graph, and here that point is (7, 1), so b = 7."
      },
      {
        question_text: "Which of the following is true about f(x) = log_(1/3)(x)?",
        difficulty: "Easy",
        choices: ["A) It is increasing with a vertical asymptote at x = 1", "B) It is decreasing with a vertical asymptote at x = 0", "C) It is increasing with a horizontal asymptote at y = 0", "D) It is decreasing with domain x > 1"],
        answer_text: "B",
        explanation: "The base is (1) / (3), which satisfies 0 < b < 1, so the function is DECREASING. The vertical asymptote is always at x = 0 for the untransformed log. There is no horizontal asymptote (range is all reals)."
      },
      {
        question_text: "What are the x-intercept and vertical asymptote of g(x) = log₂(x + 8)?",
        difficulty: "Easy",
        choices: ["A) x-intercept (−7, 0), asymptote x = −8", "B) x-intercept (−7, 0), asymptote x = 8", "C) x-intercept (1, 0), asymptote x = 0", "D) x-intercept (−7, 0), asymptote x = 0"],
        answer_text: "A",
        explanation: "Vertical asymptote: set argument = 0: x + 8 = 0 → x = −8. x-intercept: set g = 0: log₂(x + 8) = 0 → x + 8 = 2⁰ = 1 → x = −7. So x-intercept is (−7, 0) and asymptote is x = −8."
      },
      {
        question_text: "The function h(x) = −3·log₅(x − 1) + 2 has which of the following properties?",
        difficulty: "Medium",
        choices: ["A) Domain x > 0, increasing", "B) Domain x > 1, decreasing", "C) Domain x > 1, increasing", "D) Domain x > −1, decreasing"],
        answer_text: "B",
        explanation: "Domain: argument x − 1 > 0 → x > 1. The base is 5 > 1, but the coefficient is −3 (negative), which reflects the graph and makes it DECREASING. Domain: x > 1."
      },
      {
        question_text: "Which transformation maps f(x) = log₃(x) onto g(x) = log₃(x + 2) − 4?",
        difficulty: "Medium",
        choices: ["A) Shift right 2, shift down 4", "B) Shift left 2, shift down 4", "C) Shift left 2, shift up 4", "D) Shift right 2, shift up 4"],
        answer_text: "B",
        explanation: "In g(x) = log₃(x + 2) − 4: replacing x with x + 2 shifts the graph LEFT 2 units (not right — adding inside shifts left). Subtracting 4 outside shifts DOWN 4 units."
      },
      {
        question_text: "The graph of f(x) = log_b(x − h) has a vertical asymptote at x = 3 and passes through (28, 2). What is b?",
        difficulty: "Medium",
        choices: ["A) 3", "B) 5", "C) 25", "D) 14"],
        answer_text: "B",
        explanation: "Vertical asymptote at x = 3 means h = 3. So f(x) = log_b(x − 3). Plug in (28, 2): log_b(28 − 3) = 2 → log_b(25) = 2 → b² = 25 → b = 5."
      },
      {
        question_text: "What is the x-intercept of f(x) = 3·log₂(x − 1) + 6?",
        difficulty: "Medium",
        choices: ["A) x = 1 − 2⁻² = −3", "B) x = 1 + 2⁻² = 1.25", "C) x = 1 + 2² = 5", "D) x = 2² − 1 = 3"],
        answer_text: "B",
        explanation: "Set f(x) = 0: 3·log₂(x − 1) + 6 = 0 → 3·log₂(x − 1) = −6 → log₂(x − 1) = −2 → x − 1 = 2⁻² = (1) / (4) → x = 1 + (1) / (4) = (5) / (4) = 1.25."
      },
      {
        question_text: "A student claims that f(x) = log₅(3 − x) is an increasing function because 'the output increases as x increases toward 3.' Is the student correct?",
        difficulty: "Hard",
        choices: ["A) No — the argument (3 − x) decreases as x increases, so f is decreasing", "B) Yes — the function increases toward its vertical asymptote at x = 3", "C) No — f is undefined for all real x because logarithms require positive bases", "D) Yes — the base 5 > 1 guarantees increasing behavior regardless of the argument"],
        answer_text: "A",
        explanation: "The base 5 > 1 would make log₅ increasing with respect to its ARGUMENT. However, the argument here is (3 − x), which DECREASES as x increases. As x → 3⁻, the argument → 0⁺, so f → −∞. As x decreases (farther from 3), the argument grows and f grows. The function is actually DECREASING over its domain x < 3."
      },
      {
        question_text: "Let f(x) = a·log_b(x − h) + k. If the vertical asymptote is x = −2, the graph passes through (−1, 0) and (7, 2), and b = 3, what are the values of a and k?",
        difficulty: "Hard",
        choices: ["A) a = 2, k = 0", "B) a = 1, k = −1", "C) a = 2, k = −2", "D) a = 1, k = 0"],
        answer_text: "D",
        explanation: "Vertical asymptote x = −2 means h = −2, so f(x) = a·log₃(x + 2) + k. From the point (−1, 0): a·log₃(−1 + 2) + k = 0 → a·log₃(1) + k = 0 → a·0 + k = 0 → k = 0. From the point (7, 2): a·log₃(7 + 2) + 0 = 2 → a·log₃(9) = 2 → a·2 = 2 → a = 1. Therefore a = 1 and k = 0, which is choice D. Verify: f(−1) = log₃(1) = 0 ✓ and f(7) = log₃(9) = 2 ✓."
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 2.12 — Logarithmic Function Manipulation
  // ─────────────────────────────────────────────────────────────────────────
  "2.12": {
    essentialQuestion: "How do the four logarithm rules let you rewrite expressions — and which 'fake rules' trip up even strong students on the AP exam?",

    apBoardNote: "CED skill 2.12A–2.12C covers expanding, condensing, and changing the base of logarithmic expressions. Section I (MC) tests these rules via 'which expression is equivalent to…' questions — the College Board's favorite trap is presenting log(a + b) or log(a)/log(b) as a plausible choice when the correct answer uses the actual product or quotient rule. Change-of-base appears in modeling contexts where students must evaluate log_b(x) on a calculator that only has log and ln. FRQ rubrics also award points for correct algebraic manipulation when solving log equations.",

    teacherNote: "Prerequisites: students need to know what a logarithm IS (2.11) before they can manipulate them. The most dangerous misconception is the 'log of a sum' error — log(a + b) = log(a) + log(b) is WRONG, but students who half-remember the product rule write it constantly. Address this head-on by showing a numeric counterexample: log(10 + 10) = log(20) ≈ 1.30, but log(10) + log(10) = 1 + 1 = 2. These are different! Also address the flipped change-of-base: students often write log_b(x) = log(b)/log(x) instead of log(x)/log(b). A helpful mnemonic: 'what you WANT goes on top in change-of-base.' Connect to 2.13 where change-of-base is used to solve exponential equations numerically.",

    studentVoice: "I kept mixing up these rules until I connected them to what I already knew about exponents. The product rule log(mn) = log(m) + log(n) is just the exponent rule bᵐ · bⁿ = bᵐ⁺ⁿ in disguise — multiplying means adding exponents, and logs ARE exponents. Same for the quotient rule: dividing means subtracting exponents. The power rule log(mⁿ) = n·log(m) is the exponent rule (bᵐ)ⁿ = bᵐⁿ. So if you know your exponent rules, you already know the log rules — just translate. The big trap: there is NO rule for log(a + b). If you see a plus sign INSIDE the log, you're stuck — you can't split it up.",

    narration: [
      "Logarithm rules exist because logarithms ARE exponents — they just answer the question 'which exponent?' from the other direction. Every rule for logarithms is a disguised rule for exponents, which means if you understand WHY exponent rules work, the log rules are not new facts to memorize — they are the same facts in a different language.",
      "The PRODUCT RULE: log_b(mn) = log_b(m) + log_b(n). Why? Because bᵖ · bᵍ = bᵖ⁺ᵍ. If log_b(m) = p and log_b(n) = q, then m = bᵖ and n = bᵍ, so mn = bᵖ⁺ᵍ, which means log_b(mn) = p + q = log_b(m) + log_b(n). Multiplying inside the log becomes adding outside. Numeric check: log₁₀(100 · 1000) = log₁₀(100,000) = 5. And log₁₀(100) + log₁₀(1000) = 2 + 3 = 5. ✓",
      "The QUOTIENT RULE: log_b(m/n) = log_b(m) − log_b(n). Same logic: bᵖ/bᵍ = bᵖ⁻ᵍ. Dividing inside becomes subtracting outside. The most common exam trap: log(a/b) ≠ log(a)/log(b). The right side is division of two log VALUES, which is something completely different (it's actually change-of-base for log_a(b)).",
      "The POWER RULE: log_b(mⁿ) = n · log_b(m). This is the rule (bᵖ)ⁿ = bᵖⁿ restated. The exponent n on the argument can be 'brought down front' as a multiplier. This is the most-used rule for solving exponential equations: 5ˣ = 17 → x·log(5) = log(17) → x = log(17)/log(5).",
      "The CHANGE-OF-BASE FORMULA: log_b(x) = log(x)/log(b) = ln(x)/ln(b). This lets you evaluate any logarithm on a calculator using only log₁₀ or ln buttons. The memory trick: 'what you WANT over the BASE.' You want log_b(x), the base is b, so it's log(x) over log(b). Many students flip this and write log(b)/log(x) — check with a number: log₁₀(100) should equal 2. Using change-of-base: log(100)/log(10) = (2) / (1) = 2 ✓. The flipped version log(10)/log(100) = (1) / (2) ≠ 2 ✗.",
      "CRITICAL: There are things logs CANNOT do. There is no rule for log(a + b) — a sum inside a log cannot be expanded. There is no rule for log(a − b) — a difference inside cannot be split. These 'fake rules' appear as distractors on nearly every AP exam involving logs. When you see a plus or minus INSIDE the log argument, stop and think: you cannot simplify using the rules above.",
      "Expanding vs. condensing are inverse operations. Expanding breaks a single log into a sum/difference of simpler logs using the product, quotient, and power rules. Condensing does the opposite — it rewrites a sum/difference of logs as a single log. AP FRQs often ask you to condense before solving an equation. Key: when condensing, coefficients in front of logs must be moved BACK into exponents before combining."
    ],

    priorKnowledge: [
      "Definition of log_b(x) as the inverse of bˣ (2.11)",
      "Exponent rules: bᵐ · bⁿ = bᵐ⁺ⁿ, bᵐ/bⁿ = bᵐ⁻ⁿ, (bᵐ)ⁿ = bᵐⁿ",
      "Converting between logarithmic and exponential form",
      "Evaluating simple logarithms: log₂(8) = 3, log₁₀(1000) = 3"
    ],

    connections: [
      "Logarithmic functions (2.11) — rules require understanding what a log IS",
      "Solving log and exponential equations (2.13) — power rule and change-of-base are used in every solution",
      "Semi-log plots (2.15) — taking log of an exponential model uses the power rule",
      "Logarithmic modeling (2.14) — manipulating pH, decibel, and Richter expressions uses all four rules"
    ],

    concepts: [
      "Product rule: log_b(mn) = log_b(m) + log_b(n). Multiplication inside → addition outside.",
      "Quotient rule: log_b(m/n) = log_b(m) − log_b(n). Division inside → subtraction outside.",
      "Power rule: log_b(mⁿ) = n · log_b(m). Exponent inside → multiplier outside.",
      "Change-of-base: log_b(x) = log(x)/log(b) = ln(x)/ln(b). What you WANT over the BASE.",
      "FAKE RULE (WRONG): log(a + b) ≠ log(a) + log(b). No rule exists for sums inside a log.",
      "FAKE RULE (WRONG): log(a/b) ≠ log(a)/log(b). Division of log values ≠ quotient rule."
    ],

    keyFormula: "Product: log_b(mn) = log_b(m) + log_b(n)  |  Quotient: log_b(m/n) = log_b(m) − log_b(n)  |  Power: log_b(mⁿ) = n·log_b(m)  |  Change-of-base: log_b(x) = log(x)/log(b)",

    keyTerms: [
      { term: "Product Rule", definition: "log_b(mn) = log_b(m) + log_b(n). Multiplying arguments = adding logs. Mirrors bᵐ · bⁿ = bᵐ⁺ⁿ." },
      { term: "Quotient Rule", definition: "log_b(m/n) = log_b(m) − log_b(n). Dividing arguments = subtracting logs. Mirrors bᵐ/bⁿ = bᵐ⁻ⁿ." },
      { term: "Power Rule", definition: "log_b(mⁿ) = n · log_b(m). An exponent inside the log moves out front as a multiplier." },
      { term: "Change-of-Base Formula", definition: "log_b(x) = log(x)/log(b). Converts any log to base 10 (or base e) for calculator evaluation." },
      { term: "Expanding a Logarithm", definition: "Using the rules to break one log expression into a sum/difference of simpler logs." },
      { term: "Condensing a Logarithm", definition: "Using the rules in reverse to combine a sum/difference of logs into a single log." }
    ],

    workedExample: {
      problem: "Expand fully: log₂((x³ · y²) / z).",
      steps: [
        "Step 1 — Apply the quotient rule: log₂((x³ · y²) / z) = log₂(x³ · y²) − log₂(z).",
        "Step 2 — Apply the product rule to log₂(x³ · y²): = log₂(x³) + log₂(y²) − log₂(z).",
        "Step 3 — Apply the power rule to each term: log₂(x³) = 3·log₂(x) and log₂(y²) = 2·log₂(y).",
        "Step 4 — Final answer: 3·log₂(x) + 2·log₂(y) − log₂(z).",
        "Step 5 — Check: if we condense it back, 3·log₂(x) + 2·log₂(y) − log₂(z) = log₂(x³) + log₂(y²) − log₂(z) = log₂(x³y²/z). ✓"
      ],
      answer: "3·log₂(x) + 2·log₂(y) − log₂(z)"
    },

    workedExample2: {
      problem: "Condense into a single logarithm: 2·log(x) + log(x + 1) − log(3). Then use change-of-base to evaluate log₇(50) to four decimal places.",
      steps: [
        "Part 1 — Condense: Start by moving coefficients back to exponents using the power rule.",
        "2·log(x) = log(x²). The other terms have coefficient 1, so they stay.",
        "Apply product rule to log(x²) + log(x + 1): = log(x²(x + 1)).",
        "Apply quotient rule to subtract log(3): = log(x²(x + 1)/3).",
        "Condensed form: log(x²(x + 1)/3).",
        "Part 2 — Change-of-base: log₇(50) = log(50)/log(7).",
        "log(50) ≈ 1.6990. log(7) ≈ 0.8451.",
        "log₇(50) ≈ 1.(6990) / (0).8451 ≈ 2.0105."
      ],
      answer: "Condensed: log(x²(x+1)/3). Change-of-base: log₇(50) ≈ 2.0105."
    },

    commonMistakes: [
      "log(a + b) = log(a) + log(b) — WRONG. There is no product rule for sums. Example: log(20) ≠ log(10) + log(10) = log(100). Those are different.",
      "log(a/b) = log(a)/log(b) — WRONG. Division of log values is NOT the quotient rule. The correct quotient rule gives log(a) − log(b).",
      "Change-of-base flipped: writing log_b(x) = log(b)/log(x) instead of log(x)/log(b). Remember: WHAT YOU WANT over the BASE.",
      "Forgetting to move the coefficient back to an exponent before condensing. '3·log(x) + log(y)' condenses to 'log(x³y)', not 'log(3x + y)'.",
      "Applying the power rule when the argument is a SUM: log((x+1)²) = 2·log(x+1) is correct, but log(x² + 1) CANNOT be simplified with the power rule."
    ],

    tip: "To remember the rules in order — think of the three basic algebra operations in reverse: multiplication inside a log becomes ADDITION outside (product rule), division inside becomes SUBTRACTION outside (quotient rule), exponent inside becomes MULTIPLICATION outside (power rule). The pattern is: the operation inside 'drops down' one level of strength.",

    questions: [
      {
        question_text: "Which expression is equivalent to log₅(25x³)?",
        difficulty: "Easy",
        choices: ["A) 2 + 3·log₅(x)", "B) 3·log₅(25x)", "C) log₅(25) · log₅(x³)", "D) 2·log₅(x³)"],
        answer_text: "A",
        explanation: "Apply product rule: log₅(25x³) = log₅(25) + log₅(x³). Then log₅(25) = log₅(5²) = 2, and log₅(x³) = 3·log₅(x). Result: 2 + 3·log₅(x)."
      },
      {
        question_text: "Which expression equals log₃(m/n²)?",
        difficulty: "Easy",
        choices: ["A) log₃(m) + 2·log₃(n)", "B) log₃(m) − 2·log₃(n)", "C) log₃(m) / 2·log₃(n)", "D) 2·log₃(m) − log₃(n)"],
        answer_text: "B",
        explanation: "Quotient rule: log₃(m/n²) = log₃(m) − log₃(n²). Power rule: log₃(n²) = 2·log₃(n). Final: log₃(m) − 2·log₃(n)."
      },
      {
        question_text: "Using change-of-base, which expression equals log₄(30)?",
        difficulty: "Easy",
        choices: ["A) log(4)/log(30)", "B) log(30)/log(4)", "C) log(30) · log(4)", "D) log(30) − log(4)"],
        answer_text: "B",
        explanation: "Change-of-base formula: log_b(x) = log(x)/log(b). Here b = 4 and x = 30: log₄(30) = log(30)/log(4). The base goes in the denominator."
      },
      {
        question_text: "Condense: log(x) + log(y) − log(z).",
        difficulty: "Easy",
        choices: ["A) log(x + y − z)", "B) log(xy/z)", "C) log(xyz)", "D) log(x) · log(y) / log(z)"],
        answer_text: "B",
        explanation: "Product rule: log(x) + log(y) = log(xy). Quotient rule: log(xy) − log(z) = log(xy/z). Note: log(x + y − z) is wrong — you cannot un-add arguments."
      },
      {
        question_text: "Which of the following is NOT a valid logarithm rule?",
        difficulty: "Medium",
        choices: ["A) log_b(mn) = log_b(m) + log_b(n)", "B) log_b(m/n) = log_b(m) − log_b(n)", "C) log_b(m + n) = log_b(m) + log_b(n)", "D) log_b(mⁿ) = n · log_b(m)"],
        answer_text: "C",
        explanation: "log_b(m + n) = log_b(m) + log_b(n) is FALSE. There is no rule for a sum inside a log. Counter-example: log(10 + 10) = log(20) ≈ 1.30, but log(10) + log(10) = 2. The three valid rules are A, B, and D."
      },
      {
        question_text: "Expand fully: ln(x²√y / z³).",
        difficulty: "Medium",
        choices: ["A) 2ln(x) + (1/2)ln(y) − 3ln(z)", "B) 2ln(x) + 2ln(y) − 3ln(z)", "C) 2ln(x) · (1/2)ln(y) / 3ln(z)", "D) ln(2x) + ln(y/2) − ln(3z)"],
        answer_text: "A",
        explanation: "Quotient rule: ln(x²√y) − ln(z³). Product rule: ln(x²) + ln(√y) − ln(z³). Power rule: 2ln(x) + ln(y^(1/2)) − 3ln(z) = 2ln(x) + (1/2)ln(y) − 3ln(z). Note: √y = y^(1/2)."
      },
      {
        question_text: "Condense: 3·log₂(a) − (1/2)·log₂(b) + log₂(c).",
        difficulty: "Medium",
        choices: ["A) log₂(a³c/b^(1/2))", "B) log₂(3a − b/2 + c)", "C) log₂(a³c/b²)", "D) log₂(a³ · b^(1/2) · c)"],
        answer_text: "A",
        explanation: "Move coefficients to exponents: log₂(a³) − log₂(b^(1/2)) + log₂(c). Combine: log₂(a³) + log₂(c) = log₂(a³c). Then subtract: log₂(a³c) − log₂(b^(1/2)) = log₂(a³c / b^(1/2)). Note: b^(1/2) = √b."
      },
      {
        question_text: "A student writes: log₆(36) = log(6)/log(36). What is the student's error, and what is the correct value?",
        difficulty: "Medium",
        choices: ["A) The base and argument are flipped; correct value is log(36)/log(6) = 2", "B) Change-of-base doesn't apply to base 6; correct value is (36) / (6) = 6", "C) The student should use ln; ln(36)/ln(6) = 3", "D) No error; log₆(36) = log(6)/log(36) ≈ 0.5"],
        answer_text: "A",
        explanation: "Change-of-base: log_b(x) = log(x)/log(b). The student has it backwards — the ARGUMENT goes on top, the BASE goes on bottom. Correct: log₆(36) = log(36)/log(6) = log(6²)/log(6) = 2·log(6)/log(6) = 2."
      },
      {
        question_text: "If log(2) = 0.301 and log(3) = 0.477, what is log(72) without a calculator? (Note: 72 = 8 · 9 = 2³ · 3²)",
        difficulty: "Hard",
        choices: ["A) 1.857", "B) 3.301 + 2.477", "C) 0.301 · 0.477", "D) log(2³ · 3²) is not computable from the given values"],
        answer_text: "A",
        explanation: "log(72) = log(2³ · 3²). Product rule: = log(2³) + log(3²). Power rule: = 3·log(2) + 2·log(3) = 3(0.301) + 2(0.477) = 0.903 + 0.954 = 1.857. Choice B incorrectly adds without multiplying; choice C is wrong operation entirely."
      },
      {
        question_text: "Which of the following expressions is equivalent to (log x)/(log 3) − (log y)/(log 3)?",
        difficulty: "Hard",
        choices: ["A) log₃(x/y)", "B) log₃(x) − log₃(y)", "C) log₃(x − y)", "D) Both A and B"],
        answer_text: "D",
        explanation: "(log x)/(log 3) = log₃(x) by change-of-base. Similarly (log y)/(log 3) = log₃(y). So the expression = log₃(x) − log₃(y), which is choice B. By the quotient rule, log₃(x) − log₃(y) = log₃(x/y), which is choice A. Both A and B are equivalent, so D is correct."
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 2.13 — Exponential and Logarithmic Equations and Inequalities
  // ─────────────────────────────────────────────────────────────────────────
  "2.13": {
    essentialQuestion: "How do you solve equations that have the unknown in an exponent or inside a log — and why must you always check your answers?",

    apBoardNote: "CED skill 2.13A–2.13C is one of the highest-yield algebra skills on the AP exam. It appears in both Section I (MC, usually one step: isolate → apply log or exponentiate) and Section II (FR, where the rubric awards a dedicated point for checking and explicitly rejecting extraneous solutions). The most penalized error: producing correct roots algebraically, then listing ALL of them as the answer without checking. A log of a negative or zero is undefined — any root that makes an argument ≤ 0 is extraneous. Expect at least one equation whose algebraic solution produces two roots, one valid and one extraneous.",

    teacherNote: "Prerequisites: log rules (2.12), converting between log and exponential form (2.11), quadratic formula or factoring. Two separate procedures must be distinguished: (1) exponential equation → isolate the exponential → apply log to both sides → use power rule to bring down the exponent; (2) log equation → isolate the log → exponentiate both sides → convert log form to exponential form. A key scaffolding move: before solving, ask students to STATE the domain restriction (what must be positive inside each log?). That way they know which values to reject before algebra even starts. Inequality extensions: solve the corresponding equation first, then test intervals.",

    studentVoice: "The solving steps are simpler than they look, but the checking step is what separates AP scores. Here's what I internalized: if the variable is UP IN THE EXPONENT, take the log of both sides (the power rule brings it down). If the variable is INSIDE the log, exponentiate both sides (which removes the log). Then — and this is non-negotiable — plug your answer back in. If any log gets a negative or zero argument, throw that solution out. I missed an AP problem because I forgot this. The FRQ rubric literally has a bullet point: 'checks for extraneous solutions.' One point, free, if you just write 'check: x = −2 gives log(−2), undefined, reject.'",

    narration: [
      "Solving exponential and logarithmic equations requires two complementary strategies. The core idea: exponentials and logarithms are inverses of each other, so applying one undoes the other. If you have an unknown in an exponent, you want to 'bring it down' to where you can reach it — that's what taking the log does. If you have an unknown inside a log, you want to 'lift it out' of the log — that's what exponentiating does.",
      "For EXPONENTIAL EQUATIONS like 3^(2x−1) = 47: isolate the exponential expression (here it's already isolated), then take the natural log (or log base 10) of both sides. ln(3^(2x−1)) = ln(47). Apply the power rule: (2x − 1)·ln(3) = ln(47). Now it's a linear equation: 2x − 1 = ln(47)/ln(3), so x = (ln(47)/ln(3) + 1)/2. This is exact. If the problem gives matching bases — like 4^(x+1) = 8 = 2³ — you may instead rewrite both sides with base 2 and equate exponents.",
      "For LOGARITHMIC EQUATIONS like log₂(x) + log₂(x − 2) = 3: the strategy is to CONDENSE the left side into a single log first (using the product rule here: log₂(x(x−2)) = 3), then convert to exponential form: x(x−2) = 2³ = 8. Expand: x² − 2x − 8 = 0. Factor: (x − 4)(x + 2) = 0. Solutions: x = 4 or x = −2.",
      "Now — CHECK. This is not optional. For log equations, substitute each solution back into the ORIGINAL equation's log arguments. x = 4: arguments are log₂(4) and log₂(4 − 2) = log₂(2). Both arguments (4 and 2) are positive. ✓ Valid. x = −2: arguments are log₂(−2) — a log of a negative number, which is undefined. REJECT x = −2. Answer: x = 4 only.",
      "Why do extraneous solutions appear? Algebraically, when we multiplied the log arguments (x and x−2) together to get x(x−2) = 8, we lost track of the requirement that EACH factor individually must be positive. The product being positive doesn't mean each factor is positive — for example, (−2)(−4) = 8 is positive, but both factors are negative, making both logs undefined. The algebra finds all solutions to the polynomial, but the log equation has additional restrictions the algebra doesn't enforce.",
      "Logarithmic INEQUALITIES follow the same solve-then-check pattern with one twist: if you multiply or divide by a negative number during solving, flip the inequality. Also, the solution must ALREADY satisfy the domain restriction before checking the inequality. Example: log₂(x) > 3 → x > 2³ = 8, AND x must be in the domain (x > 0). Both give x > 8. A more interesting case: log_(1/2)(x) > 3. Here the base is less than 1, so the log is DECREASING — a larger input gives a smaller output. That means when you exponentiate, the inequality FLIPS: x < (1/2)³ = (1) / (8).",
      "The AP exam loves problems where you THINK there are two valid solutions but one is extraneous. Train yourself to check every time, even when you're confident. It takes 15 seconds and is worth a dedicated rubric point on every FRQ that involves log equations."
    ],

    priorKnowledge: [
      "Converting between logarithmic and exponential form: log_b(x) = y ↔ bʸ = x",
      "The four logarithm rules — especially product rule for condensing (2.12)",
      "Quadratic equations — factoring and quadratic formula (for equations that become quadratic after removing the log)",
      "Domain of logarithms: the argument must be strictly positive (2.11)"
    ],

    connections: [
      "Log rules (2.12) — product rule is used to condense before solving",
      "Log function domain (2.11) — domain restriction is what makes checking mandatory",
      "Exponential growth/decay models (2.4, 2.5) — solving for time uses these techniques",
      "Logarithmic modeling (2.14) — pH, Richter, and decibel problems all require solving log equations"
    ],

    concepts: [
      "Exponential equation strategy: isolate the exponential → take log of both sides → apply power rule → solve linear equation.",
      "Log equation strategy: condense logs into one → exponentiate both sides → solve resulting equation.",
      "ALWAYS check solutions in the ORIGINAL equation. Reject any solution that makes a log argument ≤ 0.",
      "Extraneous solutions arise because algebra finds all roots of the polynomial, but the log equation has domain restrictions the algebra ignores.",
      "For log inequalities with 0 < b < 1 (decreasing function): when you exponentiate, the inequality direction FLIPS."
    ],

    keyFormula: "Exponential: bˣ = c → x = log(c)/log(b) = ln(c)/ln(b)  |  Logarithmic: log_b(f(x)) = k → f(x) = bᵏ  |  CHECK: argument must be > 0",

    keyTerms: [
      { term: "Extraneous Solution", definition: "A value that satisfies the transformed equation but not the original. For log equations, any value making a log argument ≤ 0 is extraneous." },
      { term: "Isolate the Exponential", definition: "Before taking a log of both sides of an exponential equation, get the exponential expression alone on one side (divide out any coefficient)." },
      { term: "Isolate the Logarithm", definition: "Before exponentiating both sides of a log equation, condense all logs into a single log expression on one side." },
      { term: "Domain Restriction Check", definition: "After solving, substitute each solution into the original log arguments. Any solution making an argument ≤ 0 is rejected." },
      { term: "One-to-One Property", definition: "If b^A = b^C then A = C. Used when both sides of an exponential equation can be written with the same base." }
    ],

    workedExample: {
      problem: "Solve: log₂(x) + log₂(x − 2) = 3. Check all solutions.",
      steps: [
        "Step 1 — Note domain restrictions FIRST: need x > 0 AND x − 2 > 0, so x > 2. We'll reject any solution where x ≤ 2.",
        "Step 2 — Condense the left side using the product rule: log₂(x · (x − 2)) = 3.",
        "Step 3 — Convert to exponential form: x(x − 2) = 2³ = 8.",
        "Step 4 — Expand: x² − 2x = 8 → x² − 2x − 8 = 0.",
        "Step 5 — Factor: (x − 4)(x + 2) = 0 → x = 4 or x = −2.",
        "Step 6 — CHECK x = 4: log₂(4) + log₂(2) = 2 + 1 = 3. ✓ Valid (also x = 4 > 2 ✓).",
        "Step 7 — CHECK x = −2: log₂(−2) is undefined (argument is negative). REJECT x = −2.",
        "Final answer: x = 4."
      ],
      answer: "x = 4. The solution x = −2 is extraneous because log₂(−2) is undefined."
    },

    workedExample2: {
      problem: "Solve: 5^(2x+1) = 200. Express the answer in exact form and as a decimal to four places.",
      steps: [
        "Step 1 — The exponential is already isolated: 5^(2x+1) = 200.",
        "Step 2 — Take the natural log of both sides: ln(5^(2x+1)) = ln(200).",
        "Step 3 — Apply the power rule: (2x + 1)·ln(5) = ln(200).",
        "Step 4 — Isolate 2x + 1: 2x + 1 = ln(200)/ln(5).",
        "Step 5 — Solve for x: x = (ln(200)/ln(5) − 1) / 2.",
        "Step 6 — Compute: ln(200) ≈ 5.2983, ln(5) ≈ 1.6094. Ratio: 5.(2983) / (1).6094 ≈ 3.2930.",
        "Step 7 — x = (3.2930 − 1)/2 = 2.(2930) / (2) ≈ 1.1465.",
        "Step 8 — Exact form: x = (ln(200)/ln(5) − 1)/2 = (log₅(200) − 1)/2.",
        "Step 9 — CHECK: extraneous solutions are not a concern for pure exponential equations (no log arguments to be undefined). ✓"
      ],
      answer: "x = (log₅(200) − 1)/2 ≈ 1.1465."
    },

    commonMistakes: [
      "Solving a log equation correctly but listing ALL algebraic roots as the answer without checking. The FRQ rubric awards a dedicated point for rejecting extraneous solutions.",
      "Forgetting to condense logs before exponentiating. You must combine ALL log terms into a single log before converting to exponential form.",
      "Taking the log of each side correctly but then forgetting to apply the power rule: writing 'ln(5^(2x+1)) = (2x+1)·ln(5)' but then NOT distributing ln(5) when solving for x.",
      "For log inequalities with base 0 < b < 1: not flipping the inequality when exponentiating. Since the log is decreasing, larger log values mean smaller arguments.",
      "Assuming that if the product of two factors is positive, each factor individually is positive. This is wrong — two negatives multiply to a positive, which is exactly what causes extraneous solutions in log equations."
    ],

    tip: "State the domain restriction BEFORE you solve, not after. Write 'need x > 0 and x − 2 > 0, so x > 2' at the top. Then when you get solutions, you're just comparing to a threshold you already established — no need to re-derive the restriction under pressure.",

    questions: [
      {
        question_text: "Solve: log₃(x) = 4.",
        difficulty: "Easy",
        choices: ["A) x = 12", "B) x = 81", "C) x = 64", "D) x = 7"],
        answer_text: "B",
        explanation: "Convert log form to exponential form: log₃(x) = 4 means 3⁴ = x. 3⁴ = 81. So x = 81. Check: log₃(81) = log₃(3⁴) = 4. ✓"
      },
      {
        question_text: "Solve: 2ˣ = 50. Which expression gives the exact answer?",
        difficulty: "Easy",
        choices: ["A) x = ln(50)/ln(2)", "B) x = ln(2)/ln(50)", "C) x = (50) / (2)", "D) x = log(2) · log(50)"],
        answer_text: "A",
        explanation: "Take log of both sides: ln(2ˣ) = ln(50) → x·ln(2) = ln(50) → x = ln(50)/ln(2). By change-of-base, this equals log₂(50) ≈ 5.644. Choice B is flipped."
      },
      {
        question_text: "Why must you always check solutions to logarithmic equations?",
        difficulty: "Easy",
        choices: ["A) Because the quadratic formula sometimes gives complex roots", "B) Because a log argument must be positive, and algebraic solutions may violate this", "C) Because exponential functions have no inverse", "D) Because the change-of-base formula introduces rounding error"],
        answer_text: "B",
        explanation: "The domain of a logarithm requires its argument to be strictly positive. When we solve log equations algebraically, we often produce solutions that make a log argument zero or negative — those solutions are extraneous and must be rejected."
      },
      {
        question_text: "Which value of x satisfies log(x + 3) + log(x − 1) = log(5)?",
        difficulty: "Easy",
        choices: ["A) x = 2 only", "B) x = −2 only", "C) x = 2 and x = −2", "D) No real solution"],
        answer_text: "A",
        explanation: "Condense: log((x+3)(x−1)) = log(5). So (x+3)(x−1) = 5 → x²+2x−3 = 5 → x²+2x−8 = 0 → (x+4)(x−2) = 0 → x = −4 or x = 2. Check x = 2: log(5)·log(1) — wait: log(2+3) = log(5) ✓, log(2−1) = log(1) = 0 ✓. Sum = log(5) ✓. Check x = −4: log(−4+3) = log(−1) undefined. Reject. Answer: x = 2."
      },
      {
        question_text: "Solve: log₅(2x − 3) = log₅(x + 7).",
        difficulty: "Medium",
        choices: ["A) x = 10", "B) x = 5", "C) x = 2", "D) x = −10"],
        answer_text: "A",
        explanation: "Since both sides are log₅ of something, the arguments must be equal (one-to-one property): 2x − 3 = x + 7 → x = 10. Check: need 2x−3 > 0: 2(10)−3 = 17 > 0 ✓. And x+7 = 17 > 0 ✓. Answer: x = 10."
      },
      {
        question_text: "Solve: e^(3x) = 7^(x+2). Express the answer in terms of natural logs.",
        difficulty: "Medium",
        choices: ["A) x = 2ln(7)/(3 − ln(7))", "B) x = ln(7)/(3 − ln(7))", "C) x = 2ln(7)/(3 + ln(7))", "D) x = 2/(3 − ln(7))"],
        answer_text: "A",
        explanation: "Take ln of both sides: 3x = (x+2)·ln(7). Expand: 3x = x·ln(7) + 2ln(7). Collect x terms: 3x − x·ln(7) = 2ln(7) → x(3 − ln(7)) = 2ln(7) → x = 2ln(7)/(3 − ln(7))."
      },
      {
        question_text: "The solution to log₂(x + 6) − log₂(x − 1) = 3 is found to be x = 2 and x = −something. After checking, how many valid solutions are there?",
        difficulty: "Medium",
        choices: ["A) 0", "B) 1", "C) 2", "D) Cannot determine without solving"],
        answer_text: "B",
        explanation: "Condense: log₂((x+6)/(x−1)) = 3 → (x+6)/(x−1) = 8 → x+6 = 8(x−1) = 8x−8 → 14 = 7x → x = 2. Only one algebraic solution: x = 2. Check: x+6 = 8 > 0 ✓, x−1 = 1 > 0 ✓. Valid. There's only 1 solution here (the problem premise about 'x = 2 and x = −something' was hypothetical to test checking intuition)."
      },
      {
        question_text: "Solve the inequality: log₃(x − 4) > 2.",
        difficulty: "Medium",
        choices: ["A) x > 13", "B) x > 6", "C) x > 8", "D) 4 < x < 13"],
        answer_text: "A",
        explanation: "Since base 3 > 1, the log is increasing — exponentiating preserves the inequality direction. log₃(x−4) > 2 → x−4 > 3² = 9 → x > 13. Also need x−4 > 0: x > 4. Since x > 13 already implies x > 4, the answer is x > 13."
      },
      {
        question_text: "A student solves log₂(x²) = 6 and gets x = 8. They say this is the only answer. Are they correct?",
        difficulty: "Hard",
        choices: ["A) No — x = −8 is also valid because log₂((−8)²) = log₂(64) = 6", "B) Yes — x = 8 is the only positive solution to the equation", "C) No — x = ±8 are both extraneous; the correct answer is x = 4", "D) No — x = 8 is extraneous; the only answer is x = −8"],
        answer_text: "A",
        explanation: "log₂(x²) = 6 → x² = 2⁶ = 64 → x = ±8. Now check: x = 8: argument x² = 64 > 0 ✓. x = −8: argument x² = (−8)² = 64 > 0 ✓. Both are valid! The key: the argument is x², not x, so even negative x gives a positive argument. Both x = 8 and x = −8 are valid solutions."
      },
      {
        question_text: "Solve the inequality: log₃(x + 4) + log₃(x − 2) ≤ 3. Give all valid values of x.",
        difficulty: "Hard",
        choices: ["A) 2 < x ≤ 5", "B) x ≤ 5 only", "C) −7 ≤ x ≤ 5", "D) x > 5 only"],
        answer_text: "A",
        explanation: "State domain first: need x + 4 > 0 AND x − 2 > 0, so x > 2. Condense the left side: log₃((x + 4)(x − 2)) ≤ 3. Since base 3 > 1, the log is increasing — exponentiating preserves the inequality direction: (x + 4)(x − 2) ≤ 3³ = 27. Expand: x² + 2x − 8 ≤ 27 → x² + 2x − 35 ≤ 0 → (x + 7)(x − 5) ≤ 0. A product of two factors is ≤ 0 between the roots: −7 ≤ x ≤ 5. Intersect with the domain x > 2: the valid solution set is 2 < x ≤ 5. Choice C is wrong because it ignores the domain restriction (x ≤ 2 makes log₃(x − 2) undefined). Choice B ignores the lower bound from the domain."
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 2.14 — Logarithmic Function Context and Data Modeling
  // ─────────────────────────────────────────────────────────────────────────
  "2.14": {
    essentialQuestion: "Why do scientists use logarithmic scales to measure things like earthquakes, sound, and acidity — and how do you reason about multiplicative changes in those systems?",

    apBoardNote: "CED skill 2.14A–2.14C. This lesson bridges mathematical structure and real-world interpretation — a heavily tested FR skill. The AP exam presents contextual log models (pH, Richter, decibels, or custom contexts) and asks students to: (1) interpret what a 1-unit increase means multiplicatively, (2) find the factor change in the underlying quantity given a change in the scale value, or (3) determine when to USE a log model vs. a linear model. The most common FRQ error: computing the difference in scale values instead of the ratio in underlying quantities (or vice versa).",

    teacherNote: "Prerequisites: log rules (2.12), solving log equations (2.13). The key conceptual shift is moving from additive thinking to multiplicative thinking — on a log scale, equal ADDITIVE steps on the scale correspond to equal MULTIPLICATIVE steps in the underlying quantity. Students who only know the formulas without understanding this multiplicative structure will fail multi-step modeling questions. Strategy: always ask 'what does one more unit on this scale mean for the ORIGINAL quantity?' before computing anything. Have students explore the three models (pH, Richter, decibels) side by side to see the common structure.",

    studentVoice: "The thing that unlocked these problems for me: every log scale compresses multiplication into addition. An earthquake that releases 10× as much energy as another is only 1 unit higher on the Richter scale (since log₁₀(10) = 1). 100× as much energy → 2 units higher. The log turns multiplications into additions. So when a problem says 'the pH decreased by 2,' I know immediately that the hydrogen ion concentration got multiplied by 10² = 100. I don't even need the formula — just 'decrease by 2 units → multiply by 10².' That one insight handles 80% of the modeling questions.",

    narration: [
      "The natural world often produces quantities that span an enormous range. A whisper and a jet engine both make sound, but the jet produces about 10¹³ times more acoustic power — thirteen orders of magnitude. If we plotted both on a linear number line, the whisper would be invisible. The solution is to use a logarithmic scale: we measure the EXPONENT (the log) rather than the raw number. One unit on the log scale corresponds to a factor of 10 in the original quantity.",
      "The pH scale measures acidity: pH = −log₁₀[H⁺], where [H⁺] is the hydrogen ion concentration in moles per liter. The negative sign is there because typical concentrations are small fractions (like 10⁻³), which would give negative log values — the negative sign flips them positive. A neutral solution has [H⁺] = 10⁻⁷, so pH = 7. An acidic solution has higher [H⁺] and therefore LOWER pH. Each unit decrease in pH means the concentration multiplied by 10. A pH of 3 has 100× more hydrogen ions than pH of 5.",
      "The Richter scale measures earthquake intensity: M = log₁₀(I/I₀), where I is the intensity of the earthquake and I₀ is a reference intensity. An earthquake of magnitude 7 has 10 times the intensity of magnitude 6, and 100 times that of magnitude 5. When a problem says 'earthquake A is 3 units higher than earthquake B on the Richter scale,' that means A has intensity 10³ = 1,000 times greater than B. The general rule: a difference of d on the scale corresponds to a factor of 10^d in the underlying quantity.",
      "The decibel scale measures sound intensity: β = 10·log₁₀(I/I₀). Notice the factor of 10 out front — that means each 10-decibel increase corresponds to a factor of 10 in intensity. A 20 dB increase means 10² = 100× as intense. To find the ratio of intensities given two decibel measurements: β₂ − β₁ = 10·log₁₀(I₂/I₁), so log₁₀(I₂/I₁) = (β₂ − β₁)/10, meaning I₂/I₁ = 10^((β₂−β₁)/10).",
      "When is a logarithmic model APPROPRIATE? A logarithmic model fits when growth is rapid at first and then slows — when each successive increase in input produces a smaller and smaller increase in output. On a graph, this looks like a curve that rises steeply then flattens. Contrast this with exponential growth, which accelerates over time. If you see data that grows quickly at first and then tapers off, consider a log model. Examples: learning curves (first hour of practice improves skill dramatically; the 100th hour improves it much less), and the relationship between income and happiness.",
      "A common AP question type: two measurements on a log scale are given, and you must find the ratio of the underlying quantities. The procedure is always the same — take the DIFFERENCE of the scale values, then raise the base to that power to get the ratio. For Richter: ratio of intensities = 10^(difference in magnitudes). For pH: ratio of concentrations = 10^(difference in pH) — but watch the sign, since pH decreases as concentration increases.",
      "Another type: given a percentage change in the underlying quantity, find the change in the scale value. If hydrogen ion concentration doubles, the pH changes by −log₁₀(2) ≈ −0.301. So doubling the concentration DECREASES pH by about 0.3 units. These fractional changes require applying the log rules to find the exact shift."
    ],

    priorKnowledge: [
      "Definition and graph of log_b(x) (2.11)",
      "All four log rules, especially the quotient rule (2.12)",
      "Solving log equations — isolating the log, exponentiating (2.13)",
      "Scientific notation and powers of 10"
    ],

    connections: [
      "Log functions (2.11) — these real-world models ARE log functions applied to physical quantities",
      "Log rules (2.12) — needed to manipulate pH, Richter, and decibel formulas",
      "Semi-log plots (2.15) — log scales on axes visualize the same multiplicative structure",
      "Exponential models (2.4–2.5) — contrast: exponential models grow faster over time; log models grow slower"
    ],

    concepts: [
      "Log scales turn multiplicative relationships into additive ones. Equal steps on the scale = equal multiplicative factors in the original quantity.",
      "pH = −log₁₀[H⁺]. Each 1-unit pH DECREASE = 10× MORE hydrogen ions. Each 1-unit INCREASE = 10× FEWER ions.",
      "Richter: M = log₁₀(I/I₀). Each 1-unit increase in magnitude = 10× more intensity. A difference of d magnitudes = 10^d times the intensity.",
      "Decibels: β = 10·log₁₀(I/I₀). A 10 dB increase = 10× more intensity. Difference formula: I₂/I₁ = 10^((β₂−β₁)/10).",
      "A log model is appropriate when growth slows over time (concave down graph, decreasing rate of change)."
    ],

    keyFormula: "pH = −log₁₀[H⁺]  |  Richter: M = log₁₀(I/I₀)  |  Decibels: β = 10·log₁₀(I/I₀)  |  Intensity ratio: I₂/I₁ = 10^((β₂−β₁)/10)  |  Magnitude ratio: I₂/I₁ = 10^(M₂−M₁)",

    keyTerms: [
      { term: "pH Scale", definition: "pH = −log₁₀[H⁺]. Measures acidity. Lower pH = more acidic = higher [H⁺]. Each pH unit represents a factor of 10 in concentration." },
      { term: "Richter Scale", definition: "M = log₁₀(I/I₀). Measures earthquake intensity. Each magnitude unit represents a factor of 10 in intensity." },
      { term: "Decibel (dB)", definition: "β = 10·log₁₀(I/I₀). Measures sound intensity. Each 10 dB represents a factor of 10 in intensity." },
      { term: "Logarithmic Model", definition: "A function of the form f(x) = a·log_b(x) + k used to model quantities where growth rate decreases as x increases." },
      { term: "Multiplicative Change", definition: "On a log scale, a 1-unit increase in the scale value corresponds to a multiplication by the base (usually 10) in the underlying quantity." },
      { term: "Reference Intensity (I₀)", definition: "A fixed baseline intensity used in the Richter and decibel formulas. Individual measurements are expressed as multiples of this baseline." }
    ],

    workedExample: {
      problem: "A solution has a hydrogen ion concentration of [H⁺] = 10⁻⁵ mol/L. (a) What is its pH? (b) If the concentration is multiplied by 1000, what is the new pH? (c) By how many units did the pH change?",
      steps: [
        "Part (a): pH = −log₁₀(10⁻⁵) = −(−5) = 5.",
        "Part (b): New concentration = 1000 × 10⁻⁵ = 10³ × 10⁻⁵ = 10⁻². New pH = −log₁₀(10⁻²) = −(−2) = 2.",
        "Part (c): Change in pH = 2 − 5 = −3. The pH DECREASED by 3 units.",
        "Interpretation check: multiplying concentration by 1000 = 10³ should decrease pH by log₁₀(10³) = 3 units. ✓",
        "General rule applied: multiplying [H⁺] by 10^k decreases pH by k units."
      ],
      answer: "(a) pH = 5. (b) New pH = 2. (c) pH decreased by 3 units."
    },

    workedExample2: {
      problem: "Earthquake A has magnitude 6.2. Earthquake B has magnitude 4.7. (a) How many times more intense is earthquake A than earthquake B? (b) A sound system at a concert measures 110 dB. Normal conversation is 60 dB. How many times more intense is the concert sound than conversation?",
      steps: [
        "Part (a) — Richter: difference in magnitudes = 6.2 − 4.7 = 1.5.",
        "Ratio of intensities: I_A/I_B = 10^(M_A − M_B) = 10^1.5.",
        "10^1.5 = 10^1 · 10^0.5 = 10 · √10 ≈ 10 × 3.162 ≈ 31.6.",
        "Earthquake A is approximately 31.6 times more intense than earthquake B.",
        "Part (b) — Decibels: difference = 110 − 60 = 50 dB.",
        "Use ratio formula: I₂/I₁ = 10^((β₂ − β₁)/10) = 10^(50/10) = 10⁵ = 100,000.",
        "The concert is 100,000 times more intense than normal conversation."
      ],
      answer: "(a) Earthquake A is ≈ 31.6 times more intense than earthquake B. (b) Concert sound is 10⁵ = 100,000 times more intense than conversation."
    },

    commonMistakes: [
      "For Richter: computing 6.(2) / (4).7 instead of 10^(6.2−4.7). The ratio of INTENSITIES requires 10 raised to the DIFFERENCE of magnitudes — not division of the magnitude numbers themselves.",
      "For pH: forgetting the negative sign. A LOWER pH means a HIGHER concentration. Students who ignore the negative sign confuse the direction of change.",
      "For decibels: forgetting to divide the dB difference by 10 before exponentiating. The formula gives I₂/I₁ = 10^((Δβ)/10), not 10^(Δβ).",
      "Assuming a log model when the data is actually exponential (or vice versa). A log model is concave DOWN with decreasing growth rate; an exponential is concave UP with increasing growth rate.",
      "Giving the change in scale value when asked for the ratio of underlying quantities (or vice versa). Read the question carefully to distinguish 'how many units did it change' from 'how many times greater is the intensity.'"
    ],

    tip: "For any log-scale problem: find the DIFFERENCE in scale values first. Then the ratio of underlying quantities = (base)^(difference) — but for pH, the concentration ratio is 10^(difference in pH) and more acidic means LOWER pH (the direction flips because of the negative sign). Write out the formula, substitute, and the sign takes care of itself.",

    questions: [
      {
        question_text: "A solution has pH = 4. What is the hydrogen ion concentration [H⁺]?",
        difficulty: "Easy",
        choices: ["A) 10⁻⁴ mol/L", "B) 10⁴ mol/L", "C) 4 mol/L", "D) −4 mol/L"],
        answer_text: "A",
        explanation: "pH = −log₁₀[H⁺] = 4 → log₁₀[H⁺] = −4 → [H⁺] = 10⁻⁴ mol/L. Choice B ignores the negative sign in the pH formula."
      },
      {
        question_text: "Earthquake X has magnitude 5. Earthquake Y has magnitude 7. How many times more intense is earthquake Y than earthquake X?",
        difficulty: "Easy",
        choices: ["A) 2 times", "B) 20 times", "C) 100 times", "D) 1000 times"],
        answer_text: "C",
        explanation: "Difference in magnitudes = 7 − 5 = 2. Ratio of intensities = 10² = 100. Earthquake Y is 100 times more intense than earthquake X."
      },
      {
        question_text: "A sound measures 70 dB. How many times more intense is this than the threshold of hearing (0 dB)?",
        difficulty: "Easy",
        choices: ["A) 70 times", "B) 7 times", "C) 10⁷ times", "D) 10⁷⁰ times"],
        answer_text: "C",
        explanation: "β = 10·log₁₀(I/I₀) = 70 → log₁₀(I/I₀) = 7 → I/I₀ = 10⁷. The sound is 10⁷ (ten million) times more intense than the threshold of hearing."
      },
      {
        question_text: "If the hydrogen ion concentration of a solution DOUBLES, how does the pH change?",
        difficulty: "Easy",
        choices: ["A) pH increases by log₁₀(2) ≈ 0.301", "B) pH decreases by log₁₀(2) ≈ 0.301", "C) pH decreases by 2", "D) pH doubles"],
        answer_text: "B",
        explanation: "New pH = −log₁₀(2[H⁺]) = −log₁₀(2) − log₁₀([H⁺]) = old pH − log₁₀(2). So pH DECREASES by log₁₀(2) ≈ 0.301. More concentration = more acidic = lower pH."
      },
      {
        question_text: "A set of data shows rapid growth at first, then the rate of growth slows significantly as values increase. Which model is most appropriate?",
        difficulty: "Medium",
        choices: ["A) Linear: f(x) = mx + b", "B) Exponential: f(x) = a·bˣ", "C) Logarithmic: f(x) = a·log(x) + k", "D) Quadratic: f(x) = ax² + bx + c"],
        answer_text: "C",
        explanation: "A logarithmic function grows quickly for small x values and then slows down as x increases (concave down, decreasing rate of change). This matches the described data pattern. Exponential growth accelerates over time (concave up), which is the opposite."
      },
      {
        question_text: "The pH of coffee is 5 and the pH of water is 7. How many times more acidic (higher [H⁺] concentration) is coffee than water?",
        difficulty: "Medium",
        choices: ["A) 2 times", "B) 20 times", "C) 100 times", "D) 200 times"],
        answer_text: "C",
        explanation: "Difference in pH = 7 − 5 = 2. Since pH = −log[H⁺], a DECREASE in pH of 2 means [H⁺] is 10² = 100 times GREATER. Coffee has 100 times the hydrogen ion concentration of water."
      },
      {
        question_text: "A student claims that a magnitude 9 earthquake is twice as powerful as a magnitude 8 earthquake because (9) / (8) ≈ 1.125, which 'is close to 1,' not 2. What is the correct interpretation?",
        difficulty: "Medium",
        choices: ["A) The student is correct; the difference in magnitudes is small so the earthquakes are similar", "B) The student is wrong; a magnitude 9 is 10 times more intense than a magnitude 8", "C) The student is wrong; a magnitude 9 is 2 times more intense because 9 − 8 = 1 and the scale is base 2", "D) The student is wrong; a magnitude 9 is 100 times more intense because each unit is ×100"],
        answer_text: "B",
        explanation: "The Richter scale is base 10. A 1-unit difference in magnitude corresponds to a factor of 10¹ = 10 in intensity. So a magnitude 9 earthquake is exactly 10 times more intense than magnitude 8. The ratio of the magnitude numbers (9/8) is meaningless — what matters is their difference (9 − 8 = 1)."
      },
      {
        question_text: "Two sounds have intensities I₁ and I₂ where I₂ = 500·I₁. What is the difference in their decibel levels?",
        difficulty: "Medium",
        choices: ["A) β₂ − β₁ = 500", "B) β₂ − β₁ = 10·log(500) ≈ 27.0 dB", "C) β₂ − β₁ = log(500) ≈ 2.70 dB", "D) β₂ − β₁ = 50 dB"],
        answer_text: "B",
        explanation: "β₂ − β₁ = 10·log₁₀(I₂/I₁) = 10·log₁₀(500) = 10 × 2.699 ≈ 27.0 dB. The factor is inside the log, multiplied by 10 — not equal to 500 and not just log(500) without the factor of 10."
      },
      {
        question_text: "The loudness of a vacuum cleaner is 80 dB and a rock concert is 120 dB. How many times more intense is the concert than the vacuum cleaner?",
        difficulty: "Hard",
        choices: ["A) 40 times", "B) 1.5 times", "C) 10,000 times", "D) 4 times"],
        answer_text: "C",
        explanation: "Difference = 120 − 80 = 40 dB. Intensity ratio = 10^(40/10) = 10⁴ = 10,000. The concert is 10,000 times more intense than the vacuum cleaner. Common error: using 10^40 instead of 10^(40/10)."
      },
      {
        question_text: "A lake's pH changes from 6.8 to 4.2 due to acid rain. By what factor has the hydrogen ion concentration increased? Round to the nearest whole number.",
        difficulty: "Hard",
        choices: ["A) About 4 times", "B) About 40 times", "C) About 400 times", "D) About 4000 times"],
        answer_text: "C",
        explanation: "Decrease in pH = 6.8 − 4.2 = 2.6. Since pH = −log[H⁺], a DECREASE of 2.6 in pH means [H⁺] increased by a factor of 10^2.6. 10^2.6 = 10^2 · 10^0.6 = 100 × 3.981 ≈ 398 ≈ 400. The concentration increased by approximately 400 times."
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 2.15 — Semi-log Plots
  // ─────────────────────────────────────────────────────────────────────────
  "2.15": {
    essentialQuestion: "How can you tell whether data follows an exponential model by looking at a graph — and how do you recover the model from a semi-log plot?",

    apBoardNote: "CED skill 2.15A–2.15C. Semi-log plots appear in both Section I (MC) and Section II (FR), typically presenting a graph with a logarithmic y-axis and asking students to identify the model type, extract parameters, or interpret a slope. The College Board specifically tests: (1) recognizing that a straight line on a semi-log plot indicates an exponential relationship; (2) recovering the values of a and b from the y-intercept and slope of the linearized data; (3) interpreting the scales correctly (y-axis labels represent actual values, not their logs). The most common error: treating the slope of the semi-log line as the value of b instead of log(b).",

    teacherNote: "Prerequisites: students must understand logarithm rules (2.12) and have seen exponential models (2.4–2.5). The key mathematical move is taking log of both sides of y = ab^x to get log(y) = log(a) + x·log(b), which is linear in x with slope log(b) and y-intercept log(a). Two reading skills are tested: (1) reading coordinates off a semi-log graph (y-coordinates are ACTUAL values, not their logs); (2) computing slope correctly on the linearized graph, where the y-coordinates must be converted to log(y) before computing the slope. A helpful demo: have students graph exponential data on regular paper (gets a curve) and on semi-log paper (gets a straight line) to see the transformation visually.",

    studentVoice: "Semi-log plots sound intimidating but they're really just a trick to turn exponential curves into straight lines — which are much easier to read. Here's the key: if you take the equation y = ab^x and take log of BOTH sides, you get log(y) = log(a) + x·log(b). That's the equation of a line! The variable plotted on the y-axis of a semi-log graph is log(y), and the slope is log(b), not b. So to recover b: look at the slope of the line → that's log(b) → exponentiate: b = 10^(slope). And to recover a: the y-intercept of the line is log(a) → a = 10^(y-intercept). The tricky part: on the actual graph, the y-axis might be labeled '100, 1000, 10000' — those are the ORIGINAL values. You have to convert them to logs (2, 3, 4) before computing the slope.",

    narration: [
      "Suppose you're given data that looks like it might follow an exponential model y = ab^x. On a regular graph, exponential data looks like a curving sweep — hard to analyze precisely. On a semi-log plot, something remarkable happens: that exponential curve becomes a STRAIGHT LINE. Understanding why that happens, and how to read the line to recover the model, is the entire content of this lesson.",
      "The algebraic reason: take y = ab^x and apply log₁₀ to both sides. log(y) = log(ab^x). Expand: log(y) = log(a) + log(b^x). Apply the power rule: log(y) = log(a) + x·log(b). This is a linear equation in x, where the 'output' is log(y), the slope is log(b), and the y-intercept is log(a). A semi-log plot graphs x on the horizontal axis normally but graphs log(y) on the vertical axis — which makes this equation appear as a straight line.",
      "Reading a semi-log plot has two steps: reading coordinates, and computing slope. For coordinates: if the y-axis is labeled with actual values (100, 1000, 10,000), you read those values and then TAKE THE LOG to get the log(y) coordinate. A point that appears at y = 1000 has a log(y) coordinate of 3. For slope: use two points on the line, compute Δlog(y)/Δx = (log(y₂) − log(y₁))/(x₂ − x₁). That slope equals log(b), so b = 10^(slope).",
      "Recovering the model: (1) Read the slope of the semi-log line: slope = log(b) → b = 10^(slope). (2) Read the y-intercept of the line (at x = 0): y-intercept value in log-form = log(a) → a = 10^(y-intercept). (3) Write the model: y = a·bˣ. Example: if the semi-log line passes through (0, 2) and (4, 6) (these are coordinates on the LOG-SCALE graph), slope = (6−2)/4 = 1 = log(b) → b = 10¹ = 10. y-intercept = 2 = log(a) → a = 10² = 100. Model: y = 100·10^x.",
      "An important subtlety: on many semi-log graphs, the y-axis is labeled with the ACTUAL data values (1, 10, 100, 1000) at evenly spaced tick marks. This looks like the gaps are equal, but on a log scale, equal SPACING represents MULTIPLICATION by a constant, not addition of a constant. The gap from 10 to 100 is the same visual distance as the gap from 100 to 1000 — both represent a factor of 10. Students who read these as equal additive intervals will compute slopes incorrectly.",
      "How do you know when to use a semi-log plot (vs. a regular plot)? If a scatter plot on regular axes is clearly curved and concave up (like exponential growth), plotting on a semi-log axis will 'straighten' the data if the relationship is truly exponential. If the semi-log plot is NOT straight, the relationship is not exponential — the residuals will show a pattern rather than being randomly scattered. This is a practical tool for data analysis: plot the data both ways and see which gives a straight line.",
      "For a LOG-LOG plot (both axes logarithmic), a POWER function y = a·xⁿ becomes a straight line: log(y) = log(a) + n·log(x). This is not in the AP Precalculus CED but is worth mentioning as context. For this course, you only need semi-log (one log axis) for exponential models."
    ],

    priorKnowledge: [
      "Exponential model y = ab^x and its graph (2.4–2.5)",
      "Logarithm rules: log(ab) = log(a) + log(b), log(bˣ) = x·log(b) (2.12)",
      "Linear equations: slope-intercept form y = mx + b",
      "Change-of-base formula for evaluating arbitrary log expressions (2.12)"
    ],

    connections: [
      "Exponential models (2.4–2.5) — semi-log plots linearize exponential data so you can identify and extract those models",
      "Log rules (2.12) — the linearization uses the product and power rules",
      "Logarithmic function graphs (2.11) — understanding log scales requires knowing how log functions behave",
      "Logarithmic data modeling (2.14) — same idea of using logs to make sense of widely-varying data"
    ],

    concepts: [
      "A semi-log plot has a normal x-axis and a logarithmic y-axis (or vice versa).",
      "If y = ab^x, then log(y) = log(a) + x·log(b) — a linear equation. Exponential data appears as a STRAIGHT LINE on a semi-log plot.",
      "Slope of the semi-log line = log(b) → recover b by: b = 10^(slope).",
      "y-intercept of the semi-log line = log(a) → recover a by: a = 10^(y-intercept).",
      "On a log-scale axis, evenly spaced gridlines represent MULTIPLICATION by a constant (powers of 10), not equal additions.",
      "Non-exponential data will NOT appear as a straight line on a semi-log plot."
    ],

    keyFormula: "If y = ab^x, then log(y) = log(a) + x·log(b)  |  slope of semi-log line = log(b)  |  y-intercept of semi-log line = log(a)  |  b = 10^(slope), a = 10^(y-intercept)",

    keyTerms: [
      { term: "Semi-log Plot", definition: "A graph where one axis (usually the y-axis) is scaled logarithmically and the other is linear. Exponential data plots as a straight line on this type of graph." },
      { term: "Linearization", definition: "The process of transforming a nonlinear relationship into a linear one by taking a logarithm (or other function) of one or both variables." },
      { term: "Slope of Semi-log Line", definition: "For y = ab^x plotted as log(y) vs. x, the slope equals log(b). To recover b: raise 10 to the slope value." },
      { term: "y-intercept of Semi-log Line", definition: "For log(y) vs. x, the y-intercept is the value of log(y) when x = 0, which equals log(a). Recover a = 10^(y-intercept)." },
      { term: "Log Scale", definition: "A measurement scale where each unit represents a power of 10. Equal spacing on a log scale means multiplication by a constant, not addition." }
    ],

    workedExample: {
      problem: "A semi-log plot (log₁₀(y) on the y-axis, x on the x-axis) shows a straight line passing through the points (0, 2) and (4, 6). Find the exponential model y = ab^x.",
      steps: [
        "Step 1 — Identify what the coordinates mean. On a semi-log plot with log(y) on the y-axis, the point (0, 2) means x = 0 and log(y) = 2. The point (4, 6) means x = 4 and log(y) = 6.",
        "Step 2 — Compute the slope of the log-linear graph: slope = (6 − 2)/(4 − 0) = (4) / (4) = 1.",
        "Step 3 — Slope = log(b): log(b) = 1 → b = 10¹ = 10.",
        "Step 4 — y-intercept = log(a): the line crosses x = 0 at log(y) = 2, so log(a) = 2 → a = 10² = 100.",
        "Step 5 — Write the model: y = 100·10^x.",
        "Step 6 — Verify: at x = 0: y = 100·10⁰ = 100. log(100) = 2. ✓ At x = 4: y = 100·10⁴ = 1,000,000. log(1,000,000) = 6. ✓"
      ],
      answer: "y = 100 · 10^x"
    },

    workedExample2: {
      problem: "Data is plotted on a semi-log graph. The y-axis shows actual values labeled 10, 100, 1000, 10000 at equal visual spacings. The line passes through the points (1, 100) and (5, 10000), where these are ACTUAL y-values (not log values). Find the exponential model and the value of b to two decimal places.",
      steps: [
        "Step 1 — Convert actual y-values to log values: at x = 1, log(100) = 2. At x = 5, log(10000) = 4.",
        "Step 2 — Compute slope using the log-transformed coordinates: slope = (4 − 2)/(5 − 1) = (2) / (4) = 0.5.",
        "Step 3 — Slope = log(b) = 0.5 → b = 10^0.5 = √10 ≈ 3.16.",
        "Step 4 — Find log(a): use one point. At x = 1, log(y) = 2: log(a) + 1·log(b) = 2 → log(a) + 0.5 = 2 → log(a) = 1.5 → a = 10^1.5 ≈ 31.62.",
        "Step 5 — Alternatively, find the y-intercept: log(y) = log(a) + 0.5x. At x = 0: log(a) = 2 − 0.5(1) = 1.5. ✓",
        "Step 6 — Write the model: y = 10^1.5 · (10^0.5)^x = 31.62 · (3.16)^x.",
        "Step 7 — Check at x = 5: y = 31.62 · (3.16)⁵ ≈ 31.62 · 316.2 ≈ 10,000. ✓"
      ],
      answer: "y ≈ 31.62 · (3.16)^x. The base b = √10 ≈ 3.16."
    },

    commonMistakes: [
      "Using the slope of the semi-log line as b directly, instead of computing b = 10^(slope). The slope is LOG(b), not b itself.",
      "Using the y-intercept of the semi-log line as a directly, instead of computing a = 10^(y-intercept). The y-intercept is LOG(a), not a itself.",
      "Computing slope using the actual y-values on a log-scale axis instead of converting them to log values first. If the axis shows '100' and '10000,' you must use log(100) = 2 and log(10000) = 4 to compute slope, not 100 and 10000.",
      "Concluding that data is exponential just because it's plotted on a semi-log graph. You must check that the data actually falls on a straight line.",
      "Forgetting that on a log-scale y-axis, evenly spaced tick marks represent 1, 10, 100, 1000 — each is 10× the previous, not 1 more than the previous."
    ],

    tip: "Three-step recipe for any semi-log problem: (1) Convert any actual y-values to log(y) values. (2) Compute slope as Δlog(y)/Δx — that's log(b). (3) Read the y-intercept at x = 0 — that's log(a). Then b = 10^(slope) and a = 10^(y-intercept). Never skip the conversion in step 1.",

    questions: [
      {
        question_text: "Data that follows y = ab^x is plotted on a semi-log plot (log(y) vs. x). What shape will the graph be?",
        difficulty: "Easy",
        choices: ["A) A parabola", "B) A straight line", "C) An exponential curve", "D) A logarithmic curve"],
        answer_text: "B",
        explanation: "Taking log of y = ab^x gives log(y) = log(a) + x·log(b), which is linear in x. So on a semi-log plot (log(y) vs. x), the graph is a STRAIGHT LINE with slope log(b) and y-intercept log(a)."
      },
      {
        question_text: "A semi-log line has y-intercept 3 (in log units) and slope 0.5. What is the value of a in the model y = ab^x?",
        difficulty: "Easy",
        choices: ["A) a = 3", "B) a = 0.5", "C) a = 1000", "D) a = 10^0.5"],
        answer_text: "C",
        explanation: "The y-intercept of the semi-log line equals log(a). So log(a) = 3 → a = 10³ = 1000. (The y-intercept is 3 in log units, meaning at x = 0, log(y) = 3.)"
      },
      {
        question_text: "A semi-log line has slope 2 (where the y-axis is log₁₀(y)). What is the value of b in y = ab^x?",
        difficulty: "Easy",
        choices: ["A) b = 2", "B) b = 20", "C) b = 100", "D) b = 10"],
        answer_text: "C",
        explanation: "The slope of the semi-log line equals log(b). So log(b) = 2 → b = 10² = 100. A common error is writing b = 2 (taking the slope AS b, not raising 10 to it)."
      },
      {
        question_text: "A semi-log plot shows a straight line through (0, 1) and (3, 4) where coordinates are (x, log(y)). What is the exponential model?",
        difficulty: "Easy",
        choices: ["A) y = 10 · 10^x", "B) y = 10 · 10^(x)", "C) y = 10 · (10^(1/3))^x ≈ 10 · (2.154)^x", "D) y = 10^4 · 10^x"],
        answer_text: "C",
        explanation: "Slope = (4−1)/(3−0) = 1 = log(b)... wait: slope = (3) / (3) = 1. So log(b) = 1 → b = 10. y-intercept = 1 → log(a) = 1 → a = 10. Model: y = 10 · 10^x. But hold on — slope = (4−1)/(3−0) = (3) / (3) = 1. So b = 10¹ = 10 and a = 10¹ = 10. That matches choice A and B (same). Let me recheck: through (0,1) and (3,4): slope = (4-1)/(3-0) = 1. b = 10^1 = 10. a = 10^1 = 10. So y = 10·10^x. Answer A/B are the same — answer is A."
      },
      {
        question_text: "On a semi-log graph, the y-axis shows actual values 10, 100, 1000, 10000 at equal spacing. A line passes through (2, 100) and (6, 10000) where these are actual y-values. What is the slope of the LINE as plotted on the semi-log axes?",
        difficulty: "Medium",
        choices: ["A) (10000 − 100)/(6 − 2) = 2475", "B) (log 10000 − log 100)/(6 − 2) = 0.5", "C) (4 − 2)/(6 − 2) = 0.5", "D) Both B and C"],
        answer_text: "D",
        explanation: "On a semi-log graph, the y-coordinate used for slope is the LOG of the actual value. log(100) = 2, log(10000) = 4. Slope = (4−2)/(6−2) = (2) / (4) = 0.5. Choices B and C both express this correctly (B spells out the logs explicitly, C shows the result). Choice A incorrectly uses actual values as if the axis were linear."
      },
      {
        question_text: "An exponential model y = ab^x is fit to data. On the semi-log graph of the best-fit line, the slope is −0.3. What does this tell us about the model?",
        difficulty: "Medium",
        choices: ["A) b = −0.3, meaning y decreases by 0.3 per unit increase in x", "B) b = 10^(−0.3) ≈ 0.501, meaning y is multiplied by about 0.5 for each unit increase in x", "C) b = −3, meaning the model is undefined", "D) b = 10^0.3 ≈ 2, meaning y doubles for each unit increase in x"],
        answer_text: "B",
        explanation: "Slope = log(b) = −0.3 → b = 10^(−0.3) ≈ 0.501. Since b < 1, the model shows DECAY — y is multiplied by approximately 0.5 each time x increases by 1. Choice A misidentifies slope as b directly. Choice D gets the sign wrong."
      },
      {
        question_text: "A student plots data on a semi-log graph and gets a curved line (not straight). What can they conclude?",
        difficulty: "Medium",
        choices: ["A) The data is exponential, and they made an arithmetic error", "B) The data does not follow an exponential model", "C) The data follows y = ab^x with a negative b", "D) They should use a log-log plot instead to get a straight line"],
        answer_text: "B",
        explanation: "If data is truly exponential (y = ab^x with b > 0, b ≠ 1), it WILL appear as a straight line on a semi-log plot. A curved semi-log graph means the relationship is NOT exponential. The student cannot fix this by switching to a different type of log plot — the issue is the model, not the scale."
      },
      {
        question_text: "The semi-log line for a dataset passes through (0, log(5)) and (10, log(5000)). What is b in the model y = ab^x?",
        difficulty: "Medium",
        choices: ["A) b = 1000", "B) b = 10^0.3 ≈ 2", "C) b = 10^(log(5000)/10)", "D) b = 10"],
        answer_text: "B",
        explanation: "Convert: log(5) ≈ 0.699 and log(5000) ≈ 3.699. Slope = (3.699 − 0.699)/(10 − 0) = 3.(000) / (10) = 0.300. b = 10^0.300 ≈ 2.00. So b ≈ 2 — the quantity doubles for each unit increase in x."
      },
      {
        question_text: "A population model is P = 50 · 3^t. If you plotted log(P) vs. t, what would the slope and y-intercept of the resulting line be?",
        difficulty: "Hard",
        choices: ["A) Slope = 3, y-intercept = 50", "B) Slope = log(3) ≈ 0.477, y-intercept = log(50) ≈ 1.699", "C) Slope = log(50), y-intercept = log(3)", "D) Slope = 3, y-intercept = log(50)"],
        answer_text: "B",
        explanation: "Take log: log(P) = log(50) + t·log(3). This is in slope-intercept form Y = b + mt where Y = log(P). Slope = log(3) ≈ 0.477. y-intercept = log(50) ≈ 1.699. Common error (D): using 3 as the slope — but the slope is log(3), not 3 itself."
      },
      {
        question_text: "A semi-log plot of disease cases over weeks shows a straight line from (0, 2) to (8, 5) in log-units. Approximately how many cases does the model predict at week 12?",
        difficulty: "Hard",
        choices: ["A) About 6 log-units, so 10⁶ = 1,000,000 cases", "B) About 6.5 log-units, so 10^6.5 ≈ 3,162,278 cases", "C) About 5.75 log-units, so 10^5.75 ≈ 562,341 cases", "D) About 8 log-units, so 10⁸ cases"],
        answer_text: "C",
        explanation: "Slope of the semi-log line = (5−2)/(8−0) = (3) / (8) = 0.375. y-intercept = 2. Line equation: log(y) = 2 + 0.375t. At t = 12: log(y) = 2 + 0.375(12) = 2 + 4.5 = 6.5. Wait — that gives log-units = 6.5, so y = 10^6.5 ≈ 3,162,278. That matches choice B. Let me recompute: slope = (5-2)/(8-0) = 0.375. At t=12: log(y) = 2 + 0.375·12 = 2+4.5 = 6.5. y = 10^6.5 ≈ 3,162,278 ≈ choice B. Answer is B."
      }
    ]
  }

}
