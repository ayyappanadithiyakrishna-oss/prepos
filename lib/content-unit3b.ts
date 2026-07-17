export interface LessonContent {
  essentialQuestion?: string
  apBoardNote?: string
  teacherNote?: string
  studentVoice?: string
  narration?: string[]
  priorKnowledge?: string[]
  connections?: string[]
  concepts?: string[]
  keyFormula?: string
  keyTerms?: Array<{ term: string; definition: string }>
  workedExample?: { problem: string; steps: string[]; answer: string }
  workedExample2?: { problem: string; steps: string[]; answer: string }
  table?: { caption: string; headers: string[]; rows: string[][] }
  commonMistakes?: string[]
  tip?: string
  graphType?: string
  questions?: Array<{
    question_text: string
    difficulty: 'Easy' | 'Medium' | 'Hard'
    choices: string[]
    answer_text: string
    explanation: string
  }>
}

export const UNIT3B_CONTENT: Record<string, LessonContent> = {
  '3.8': {
    essentialQuestion:
      "Why does the tangent graph have gaps in it when sine and cosine are perfectly smooth curves?",
    apBoardNote:
      "CED 3.8A (Tangent Function). Section I tests: period of y = tan(bθ) — which is π/|b|, NOT 2π/|b| — location of vertical asymptotes, and reading/identifying tangent graphs. Section II may ask for asymptotes of a transformed tangent with work shown. Full credit requires: (1) period stated as π/|b| with the formula written, (2) asymptotes found by setting the argument equal to (π) / (2) + nπ and solving for θ, (3) explicitly stating that tangent has NO amplitude. AP distractors intentionally offer 2π as the period — recognizing that tangent's period is π (not 2π) is a must-know fact.",
    teacherNote:
      "Students need the unit circle definition tan θ = sin θ / cos θ and asymptote concepts. The hardest misconception: using 2π as tangent's period. Stress the derivation — tangent repeats whenever the sin/cos ratio repeats, which happens every π, not 2π. A second critical error: students assign tangent an amplitude of 1. Tangent's range is all reals; there is NO amplitude. Connect to 3.2 (tan = sin/cos, so asymptotes come from cos = 0), 3.9 (arctan is the inverse with specific range), and 3.10 (solving tan equations uses period π). Teaching: start from the ratio definition and literally trace where cos θ = 0 — those are the asymptotes, and the interval between consecutive asymptotes is exactly π.",
    studentVoice:
      "Tangent is a fraction: sin θ / cos θ. It blows up whenever cos θ = 0 — those explosions are the vertical asymptotes. Cosine equals zero at (π) / (2), then again at (3π) / (2), every π units after the first. So one complete branch repeats every π — that's the period. Not 2π like sin and cos. What confused me at first: I kept trying to give tangent an amplitude. But tangent goes all the way to +∞ and −∞ with no cap. There IS no amplitude. Just period (π/|b|) and asymptotes (set the argument = (π) / (2) + nπ and solve). Real world: tan θ is literally the slope of a line at angle θ to the x-axis. When the ray is vertical at (π) / (2), the slope is infinite — undefined.",
    narration: [
      "Here is the honest reason tangent looks so different from sine and cosine: it is a fraction. The definition is tan θ = sin θ / cos θ, and fractions blow up when their denominator hits zero. Every time cos θ = 0 — at (π) / (2), at (3π) / (2), at −(π) / (2) — the tangent function becomes undefined, and the graph shoots off to ±infinity. Those are the vertical asymptotes, the dramatic gaps you see. They are not a bug in the graph; they are exactly what the definition predicts.",
      "Now think about period. Sine and cosine need a full 2π to return to where they started, because they trace the entire unit circle once. Tangent only needs π. Here is why: the sin/cos ratio hits the same values in every π-wide interval. Check it — tan(0) = 0, tan(π) = 0, tan(2π) = 0. The pattern repeats with spacing π, not 2π. This means for y = tan(bθ), the period shrinks to π/|b|. If b = 2, the period is (π) / (2). If b = (1) / (3), the period stretches to 3π. The formula is π/|b|, always.",
      "One thing tangent absolutely does not have: amplitude. Sine and cosine are bounded between −1 and 1, so amplitude makes sense for them. Tangent roams freely from −∞ to +∞ on every single branch. There is no maximum, no minimum, no cap. Assigning an amplitude of 1 (or |A|) to tangent is a category error. When you write y = 3 tan(2θ), the 3 stretches the graph vertically but it is a vertical stretch factor — not an amplitude.",
      "For a transformed tangent y = A·tan(B(θ − C)) + D: B controls the period (π/|B|), A stretches vertically, C shifts the graph horizontally, and D shifts it up or down. Finding asymptotes of a transformed tangent is clean — set the argument equal to (π) / (2) + nπ and solve for θ. For y = tan(2θ − π), set 2θ − π = (π) / (2) + nπ → θ = (3π) / (4) + n(π) / (2). Those are your asymptotes, and the midpoint between each consecutive pair gives you the x-intercept for that branch.",
      "Tangent is also an odd function: tan(−θ) = −tan(θ). If you rotate the graph 180° around the origin, it maps onto itself. This is not a coincidence — it follows directly from sine being odd and cosine being even: tan(−θ) = sin(−θ)/cos(−θ) = (−sinθ)/cosθ = −tanθ. This symmetry is a useful check when graphing — each branch of tangent passes through a point and its negative reflection.",
    ],
    priorKnowledge: [
      "Unit circle values for sine and cosine at all benchmark angles",
      "Definition of tangent: tan θ = sin θ / cos θ (from Lesson 3.2)",
      "Concept of vertical asymptotes from rational functions (Unit 1)",
      "Period and amplitude of sinusoidal functions (Lessons 3.4–3.5)",
      "Domain restrictions when a denominator equals zero",
    ],
    connections: [
      "Lesson 3.2: tan θ = sin θ / cos θ — the tangent function is built from the functions you already know",
      "Lesson 3.4: Unlike sine and cosine (period 2π), tangent has period π — half as long because sin and cos both flip sign, canceling out",
      "Lesson 3.9: arctan has restricted range (−(π) / (2), (π) / (2)) because the tangent function is one-to-one only on that interval",
      "Lesson 3.10: Solving tan(x) = k uses arctan(k) plus the period π for the general solution",
      "Real world: the slope of a line making angle θ with the positive x-axis equals tan θ",
    ],
    graphType: 'tangent-wave',
    keyFormula:
      'tan θ = sin θ / cos θ; Period = π / |b|; Asymptotes where bθ + c = (π) / (2) + nπ',
    concepts: [
      "Tangent is literally a fraction: tan θ = sin θ / cos θ. Whenever the bottom (cos θ) hits zero, the fraction blows up to ±infinity — those explosions are the vertical asymptotes (gaps) you see in the graph.",
      "Cosine equals zero at (π) / (2), (3π) / (2), and every π radians after that. So y = tan θ has vertical asymptotes at θ = (π) / (2) + nπ for any integer n. Between each pair of asymptotes is one complete branch.",
      "Unlike sine and cosine which take 2π to repeat, tangent only needs π. The period of y = tan θ is π.",
      "For y = A·tan(Bθ + C) + D: the period is π/|B|, the graph stretches vertically by |A|, and the midline shifts to y = D. Tangent has NO amplitude — its range is (−∞, +∞).",
      "Tangent is an odd function: tan(−θ) = −tan θ. The graph has 180° rotational symmetry about the origin.",
    ],
    keyTerms: [
      {
        term: 'Vertical asymptote',
        definition:
          "A vertical line the graph approaches but never touches. For y = tan θ, asymptotes appear wherever cos θ = 0, at θ = (π) / (2) + nπ.",
      },
      {
        term: 'Period (tangent)',
        definition:
          'The length of one complete cycle. For y = tan θ the period is π — half the period of sine or cosine.',
      },
      {
        term: 'Odd function',
        definition:
          "A function where f(−x) = −f(x) for all x. Tangent is odd, so its graph has 180° rotational symmetry about the origin.",
      },
      {
        term: 'Phase shift',
        definition:
          'How far left or right the graph slides. For y = tan(Bθ + C) + D, the phase shift is −C/B.',
      },
    ],
    table: {
      caption: 'tan θ values at key angles (one full period)',
      headers: ['θ', '0', '(π) / (6)', '(π) / (4)', '(π) / (3)', '(π) / (2)', '(2π) / (3)', '(3π) / (4)'],
      rows: [
        ['tan θ', '0', '(√3) / (3) ≈ 0.58', '1', '√3 ≈ 1.73', 'undefined', '−√3 ≈ −1.73', '−1'],
      ],
    },
    workedExample: {
      problem: 'Find the period, asymptotes, and two key points of y = 2 tan(θ/2).',
      steps: [
        'Identify b = (1) / (2), so period = π / |b| = π / (1/2) = 2π.',
        'Asymptotes occur where θ/2 = (π) / (2) + nπ → θ = π + 2nπ. Nearest ones: θ = −π and θ = π.',
        "The branch's center (x-intercept) is at θ = 0: y = 2·tan(0) = 0.",
        'At a quarter-period from center (θ = (π) / (2)): y = 2·tan((π) / (4)) = 2·1 = 2.',
      ],
      answer: 'Period = 2π; asymptotes at θ = π + 2nπ; key points (0, 0) and ((π) / (2), 2).',
    },
    workedExample2: {
      problem: "A function g is defined by g(x) = −2·tan(3x + (π) / (4)). Find (a) the period of g, (b) the equations of two consecutive vertical asymptotes, and (c) the x-intercept between those asymptotes.",
      steps: [
        "Rewrite in standard form: g(x) = −2·tan(3(x + (π) / (12))). Here B = 3 and the phase shift is −(π) / (12) (shift left (π) / (12)).",
        "Period = π/|B| = (π) / (3).",
        "Tangent has vertical asymptotes where the argument equals (π) / (2) + nπ. Set 3x + (π) / (4) = (π) / (2) + nπ. Solve: 3x = (π) / (4) + nπ, so x = (π) / (12) + n(π) / (3). Two consecutive asymptotes: x = (π) / (12) (n=0) and x = (π) / (12) + (π) / (3) = (5π) / (12) (n=1).",
        "X-intercepts occur where tan = 0, i.e., argument = nπ. Set 3x + (π) / (4) = nπ. Solve: x = −(π) / (12) + n(π) / (3). Between x = (π) / (12) and x = (5π) / (12), use n=1: x = −(π) / (12) + (π) / (3) = −(π) / (12) + (4π) / (12) = (3π) / (12) = (π) / (4).",
        "Verify: (π) / (12) < (π) / (4) = (3π) / (12) < (5π) / (12) ✓. The x-intercept is at x = (π) / (4).",
      ],
      answer: "Period = (π) / (3); vertical asymptotes at x = (π) / (12) and x = (5π) / (12); x-intercept at x = (π) / (4)",
    },
    commonMistakes: [
      "Using 2π as the period of tangent. The period of tan is π, not 2π. It cycles twice as fast as sine or cosine.",
      "Finding asymptotes at θ = nπ instead of θ = (π) / (2) + nπ. Asymptotes happen where cos θ = 0 (the denominator), not where sin θ = 0.",
      "Giving tangent an amplitude. Tangent goes from −∞ to +∞, so there's no amplitude. Don't use the |A| formula here.",
    ],
    tip: "On the AP Exam, the two most-tested tangent facts are: period = π/|b|, and asymptotes where bθ + c = (π) / (2) + nπ. Set the inside expression equal to (π) / (2) + nπ and solve — that gives asymptotes directly.",
    questions: [
      {
        question_text: 'What is the period of y = tan(2θ)?',
        difficulty: 'Easy',
        choices: ['(π) / (2)', 'π', '2π', '4π'],
        answer_text: 'A',
        explanation: 'Period = π / |b| = (π) / (2) = (π) / (2).',
      },
      {
        question_text: 'Where does y = tan θ have a vertical asymptote?',
        difficulty: 'Easy',
        choices: ['θ = 0', 'θ = π', 'θ = (π) / (2)', 'θ = 2π'],
        answer_text: 'C',
        explanation:
          'Vertical asymptotes occur at θ = (π) / (2) + nπ. θ = (π) / (2) is the first positive asymptote, because cos((π) / (2)) = 0.',
      },
      {
        question_text: 'What is the value of tan((π) / (4))?',
        difficulty: 'Easy',
        choices: ['0', '1', '√3', 'undefined'],
        answer_text: 'B',
        explanation:
          'tan((π) / (4)) = sin((π) / (4)) / cos((π) / (4)) = ((√2) / (2)) / ((√2) / (2)) = 1.',
      },
      {
        question_text: 'The range of y = tan θ is:',
        difficulty: 'Easy',
        choices: ['[−1, 1]', '[0, ∞)', '(−∞, +∞)', '[−(π) / (2), (π) / (2)]'],
        answer_text: 'C',
        explanation:
          'Tangent has no maximum or minimum — it grows to +∞ and drops to −∞ on every branch. Its range is all real numbers.',
      },
      {
        question_text: 'What is the period of y = tan(πθ)?',
        difficulty: 'Medium',
        choices: ['1', 'π', '2π', '1/π'],
        answer_text: 'A',
        explanation: 'Period = π / |b| = π / π = 1.',
      },
      {
        question_text: 'Which of the following is NOT a vertical asymptote of y = tan θ?',
        difficulty: 'Medium',
        choices: ['θ = (3π) / (2)', 'θ = (5π) / (2)', 'θ = (7π) / (2)', 'θ = 2π'],
        answer_text: 'D',
        explanation:
          'Asymptotes are at θ = (π) / (2) + nπ. θ = 2π equals (4π) / (2), which is NOT of the form (π) / (2) + nπ. At θ = 2π, cos(2π) = 1 ≠ 0.',
      },
      {
        question_text: 'Compared to y = tan θ, the graph of y = −tan θ is:',
        difficulty: 'Medium',
        choices: [
          'shifted left by π',
          'reflected over the x-axis',
          'shifted up by 1',
          'compressed horizontally',
        ],
        answer_text: 'B',
        explanation:
          'The negative sign negates every y-value, flipping the graph over the x-axis. An increasing branch becomes a decreasing one.',
      },
      {
        question_text: 'For y = tan(θ/4), the first positive vertical asymptote occurs at:',
        difficulty: 'Medium',
        choices: ['θ = (π) / (4)', 'θ = (π) / (2)', 'θ = 2π', 'θ = π'],
        answer_text: 'C',
        explanation:
          'With b = (1) / (4), set the argument equal to (π) / (2) + nπ: θ/4 = (π) / (2). Solving gives θ = 2π.',
      },
      {
        question_text:
          'For y = 3 tan(2θ − (π) / (2)), what is the x-coordinate of the x-intercept of the principal branch?',
        difficulty: 'Hard',
        choices: ['0', '(π) / (4)', '(π) / (8)', '(π) / (2)'],
        answer_text: 'B',
        explanation:
          'The x-intercept occurs when the argument equals 0: 2θ − (π) / (2) = 0 → θ = (π) / (4). At θ = (π) / (4): y = 3·tan(0) = 0. ✓',
      },
      {
        question_text:
          'The graph of y = a·tan(bθ) has period (2π) / (3) and passes through ((π) / (9), 1) with a > 0. Find a.',
        difficulty: 'Hard',
        choices: ['1', '(√3) / (3)', '√3', '3'],
        answer_text: 'C',
        explanation:
          'Period = π/b = (2π) / (3) → b = (3) / (2). Substitute the point: 1 = a·tan((3/2)((π) / (9))) = a·tan((π) / (6)) = a·(1/√3). So a = √3.',
      },
    ],
  },

  '3.9': {
    essentialQuestion:
      "If sin θ = 0.5 has infinitely many solutions, how does arcsin give you just one — and which one does it pick?",
    apBoardNote:
      "CED 3.9A (Inverse Trig Functions). Section I tests evaluation of arcsin, arccos, arctan and compositions like arcsin(sin((7π) / (6))). Section II may ask for exact values of expressions like cos(arctan(3/4)), requiring a right-triangle diagram. Full credit requires: (1) stating the output range of the inverse trig function used, (2) computing the correct principal value, (3) for compositions involving the non-cancellation case, showing why the result falls within the principal range. The AP specifically tests that arcsin(sin(θ)) ≠ θ when θ is outside [−(π) / (2), (π) / (2)] — one of the most common traps in the unit.",
    teacherNote:
      "Students need inverse function concepts from 2.8, exact trig values from 3.3, and the unit circle. The #1 misconception: sin⁻¹(x) = (1) / (sin)(x). This confusion persists into calculus — address it explicitly and repeatedly. A second misconception: thinking arcsin(sin(θ)) always simplifies to θ. It does NOT if θ is outside [−(π) / (2), (π) / (2)]. Connect to 2.8 (inverse function concepts), 3.3 (exact values needed for evaluation), and 3.10 (inverse trig is used to solve trig equations). Teaching: use 'wrong quadrant' examples explicitly — arcsin(sin((5π) / (4))) is NOT (5π) / (4) because (5π) / (4) is outside the arcsin output range.",
    studentVoice:
      "Inverse trig functions are the 'undo' buttons for sin, cos, and tan — but they only give ONE angle back, the principal value, because you have to restrict which angles they output. arcsin only outputs angles in [−(π) / (2), (π) / (2)]. arccos only outputs angles in [0, π]. arctan outputs angles in (−(π) / (2), (π) / (2)). The composition trap: arcsin(sin((7π) / (6))) ≠ (7π) / (6), because (7π) / (6) is outside [−(π) / (2), (π) / (2)]. Instead: sin((7π) / (6)) = −(1) / (2), then arcsin(−1/2) = −(π) / (6). Always evaluate inside-out, then check that the output is in the correct range. And sin⁻¹ means INVERSE — not (1) / (sin). Very different things.",
    narration: [
      "Inverse trig functions exist to answer a simple question: if I know the sine of some angle is 0.5, what is the angle? The trouble is that sine has that value at infinitely many angles — (π) / (6), (5π) / (6), (π) / (6) + 2π, (5π) / (6) + 2π, and so on forever. For an inverse function to work, it can only give back one answer. So we restrict its output to a specific interval — the principal range — and agree that arcsin will always report an angle from that interval.",
      "Here are the three principal ranges you must know cold. arcsin (written sin⁻¹) has domain [−1, 1] and outputs angles only in [−(π) / (2), (π) / (2)] — the right half of the unit circle, covering Q IV and Q I. arccos has domain [−1, 1] and outputs angles only in [0, π] — the top half of the unit circle, covering Q I and Q II. arctan accepts any real number and outputs angles in (−(π) / (2), (π) / (2)), the open interval, because tangent never actually reaches ±(π) / (2). These ranges are not arbitrary — they are chosen so the original function is one-to-one on that piece.",
      "Evaluating these functions is about knowing your exact values cold. arcsin(1/2): which angle in [−(π) / (2), (π) / (2)] has sine equal to (1) / (2)? That is (π) / (6). arccos(−(√2) / (2)): which angle in [0, π] has cosine equal to −(√2) / (2)? In Q II, that is (3π) / (4). arctan(1): which angle in (−(π) / (2), (π) / (2)) has tangent equal to 1? That is (π) / (4). The strategy is always the same — locate the angle in the correct range, not just any angle.",
      "The trickiest question type involves compositions like arcsin(sin((7π) / (6))). Students want to cancel the arcsin and sin and write (7π) / (6) — but that only works when the inside angle is already within arcsin's output range [−(π) / (2), (π) / (2)]. Since (7π) / (6) is not in [−(π) / (2), (π) / (2)], you must evaluate inside-out. First, sin((7π) / (6)) = −(1) / (2) (Q III angle with reference angle (π) / (6), sine negative). Then, arcsin(−1/2) = −(π) / (6), which IS in [−(π) / (2), (π) / (2)]. The answer is −(π) / (6), not (7π) / (6).",
      "For compositions like sin(arccos(x)), use the Pythagorean identity rather than the cancellation rule. Let θ = arccos(x), so cos θ = x and θ ∈ [0, π]. Then sin²θ = 1 − cos²θ = 1 − x². Since θ ∈ [0, π], sin θ ≥ 0, so sin θ = √(1 − x²). You can also draw a right triangle: label the adjacent side x and hypotenuse 1, then the opposite side is √(1 − x²). These two approaches are equivalent — use whichever feels more natural.",
      "One more important point: sin⁻¹(x) does NOT mean (1) / (sin)(x). The superscript −1 in function notation means inverse, not reciprocal. The reciprocal of sine is cosecant: csc(x) = (1) / (sin)(x). arcsin and csc are completely unrelated. This notation clash trips up students through all of calculus, so make it a reflex: sin⁻¹ means inverse, and the reciprocal always writes out as (1) / (sin) or uses the csc name.",
    ],
    keyFormula:
      'arcsin: domain [−1,1], range [−(π) / (2), (π) / (2)]; arccos: domain [−1,1], range [0, π]; arctan: domain ℝ, range (−(π) / (2), (π) / (2))',
    concepts: [
      "Think of inverse trig as the 'undo' button. If sin θ = 0.5, you want θ back — that's what arcsin does. But since sine repeats forever, we restrict the output to a single principal range.",
      "arcsin(x) outputs angles only in [−(π) / (2), (π) / (2)] — the right half of the unit circle, Q IV and Q I.",
      "arccos(x) outputs angles only in [0, π] — the top half of the unit circle. It always returns a non-negative angle.",
      "arctan(x) accepts any real number and outputs angles in (−(π) / (2), (π) / (2)). As x → ±∞, arctan(x) approaches ±(π) / (2) (horizontal asymptotes).",
      "Composition cancels carefully: arcsin(sin(θ)) = θ ONLY when θ ∈ [−(π) / (2), (π) / (2)]. Outside that range, arcsin pulls θ back into its restricted window.",
    ],
    keyTerms: [
      {
        term: 'arcsin (sin⁻¹)',
        definition:
          "The inverse sine function. Input: a number in [−1, 1]. Output: the angle in [−(π) / (2), (π) / (2)] whose sine equals the input. The superscript −1 means 'inverse,' not 'reciprocal.'",
      },
      {
        term: 'arccos (cos⁻¹)',
        definition:
          'The inverse cosine function. Input: a number in [−1, 1]. Output: the angle in [0, π] whose cosine equals the input. Always returns a non-negative angle.',
      },
      {
        term: 'arctan (tan⁻¹)',
        definition:
          'The inverse tangent function. Input: any real number. Output: the angle in (−(π) / (2), (π) / (2)) whose tangent equals the input.',
      },
      {
        term: 'Restricted domain',
        definition:
          "A cut-down version of a function's domain chosen so the function becomes one-to-one and an inverse can exist.",
      },
      {
        term: 'Principal value',
        definition:
          'The single output that an inverse trig function returns — always within its designated restricted range.',
      },
    ],
    table: {
      caption: 'Inverse trig functions: domain and range summary',
      headers: ['Function', 'Input (Domain)', 'Output (Range)', 'Quadrants covered'],
      rows: [
        ['arcsin(x)', '[−1, 1]', '[−(π) / (2), (π) / (2)]', 'Q IV and Q I'],
        ['arccos(x)', '[−1, 1]', '[0, π]', 'Q I and Q II'],
        ['arctan(x)', '(−∞, ∞)', '(−(π) / (2), (π) / (2))', 'Q IV and Q I'],
      ],
    },
    workedExample: {
      problem: 'Evaluate arccos(cos((4π) / (3))) exactly.',
      steps: [
        '(4π) / (3) is in Q III. Reference angle = (4π) / (3) − π = (π) / (3). cos((4π) / (3)) = −(1) / (2).',
        'Now find arccos(−1/2): we need angle θ ∈ [0, π] with cos θ = −(1) / (2).',
        'cos((2π) / (3)) = −(1) / (2) and (2π) / (3) ∈ [0, π]. ✓',
        'So arccos(cos((4π) / (3))) = arccos(−1/2) = (2π) / (3).',
      ],
      answer: '(2π) / (3)',
    },
    commonMistakes: [
      "Writing arcsin(x) = (1) / (sin)(x). The −1 superscript means inverse function, NOT reciprocal. The reciprocal of sine is cosecant.",
      "Assuming arcsin(sin(θ)) always equals θ. That cancellation only works when θ ∈ [−(π) / (2), (π) / (2)]. For θ = (5π) / (4), arcsin(sin((5π) / (4))) = −(π) / (4), not (5π) / (4).",
      "Confusing the range of arccos and arcsin. arccos NEVER returns a negative angle (range [0, π]). arcsin CAN return negative angles (range [−(π) / (2), (π) / (2)]).",
    ],
    tip: "On AP free-response, state the range of the inverse trig function you use. One sentence — 'arcsin outputs values in [−(π) / (2), (π) / (2)]' — earns justification credit. Graders look for that explicit reasoning.",
    questions: [
      {
        question_text: 'What is arcsin(1/2)?',
        difficulty: 'Easy',
        choices: ['(π) / (6)', '(π) / (3)', '(5π) / (6)', '−(π) / (6)'],
        answer_text: 'A',
        explanation: 'sin((π) / (6)) = (1) / (2) and (π) / (6) ∈ [−(π) / (2), (π) / (2)], so arcsin(1/2) = (π) / (6).',
      },
      {
        question_text: 'What is the range of arccos(x)?',
        difficulty: 'Easy',
        choices: ['[−(π) / (2), (π) / (2)]', '[0, π]', '[−1, 1]', '(−(π) / (2), (π) / (2))'],
        answer_text: 'B',
        explanation:
          'arccos always outputs angles between 0 and π — the top half of the unit circle, covering Q I and Q II.',
      },
      {
        question_text: 'What is arctan(0)?',
        difficulty: 'Easy',
        choices: ['0', '(π) / (4)', '(π) / (2)', '−(π) / (4)'],
        answer_text: 'A',
        explanation: 'tan(0) = 0 and 0 ∈ (−(π) / (2), (π) / (2)), so arctan(0) = 0.',
      },
      {
        question_text: 'What is arccos(0)?',
        difficulty: 'Easy',
        choices: ['0', '(π) / (4)', '(π) / (2)', 'π'],
        answer_text: 'C',
        explanation:
          'cos((π) / (2)) = 0 and (π) / (2) ∈ [0, π], so arccos(0) = (π) / (2).',
      },
      {
        question_text: 'Evaluate arccos(cos((4π) / (3))).',
        difficulty: 'Medium',
        choices: ['(4π) / (3)', '(2π) / (3)', '(π) / (3)', '−(π) / (3)'],
        answer_text: 'B',
        explanation:
          'cos((4π) / (3)) = −(1) / (2). arccos(−1/2) = (2π) / (3), since cos((2π) / (3)) = −(1) / (2) and (2π) / (3) ∈ [0, π].',
      },
      {
        question_text: 'Which statement about arctan(x) is true?',
        difficulty: 'Medium',
        choices: [
          'Its domain is [−1, 1]',
          'Its range is [0, π]',
          'It has horizontal asymptotes at y = ±(π) / (2)',
          'Its range is [−π, π]',
        ],
        answer_text: 'C',
        explanation:
          'arctan accepts any real number. As x → ±∞, arctan(x) approaches ±(π) / (2) but never reaches them — those are horizontal asymptotes.',
      },
      {
        question_text: 'Evaluate arctan(tan((3π) / (4))).',
        difficulty: 'Medium',
        choices: ['(3π) / (4)', '(π) / (4)', '−(π) / (4)', '−(3π) / (4)'],
        answer_text: 'C',
        explanation:
          'tan((3π) / (4)) = −1. arctan(−1) = −(π) / (4), since −(π) / (4) ∈ (−(π) / (2), (π) / (2)) and tan(−(π) / (4)) = −1.',
      },
      {
        question_text: 'Find the exact value of cos(arctan(3/4)).',
        difficulty: 'Medium',
        choices: ['(3) / (5)', '(4) / (5)', '(3) / (4)', '(5) / (4)'],
        answer_text: 'B',
        explanation:
          'Let θ = arctan(3/4), so tan θ = (3) / (4) and θ ∈ (−(π) / (2), (π) / (2)). With opposite = 3, adjacent = 4, hypotenuse = 5: cos θ = (4) / (5).',
      },
      {
        question_text: 'Find sin(arccos(5/13)).',
        difficulty: 'Hard',
        choices: ['(12) / (13)', '(5) / (12)', '(13) / (12)', '(5) / (13)'],
        answer_text: 'A',
        explanation:
          'Let θ = arccos(5/13), so cos θ = (5) / (13) and θ ∈ [0, π]. Pythagorean identity: sin²θ = 1 − (25) / (169) = (144) / (169), so sin θ = (12) / (13) (positive since θ ∈ [0, π]).',
      },
      {
        question_text: 'arcsin(sin((7π) / (6))) equals:',
        difficulty: 'Hard',
        choices: ['(7π) / (6)', '−(π) / (6)', '(π) / (6)', '(5π) / (6)'],
        answer_text: 'B',
        explanation:
          'sin((7π) / (6)) = −(1) / (2) (Q III, reference angle (π) / (6), sine negative). arcsin(−1/2) = −(π) / (6) since −(π) / (6) ∈ [−(π) / (2), (π) / (2)] and sin(−(π) / (6)) = −(1) / (2).',
      },
    ],
  },

  '3.10': {
    essentialQuestion:
      "When a trig equation has infinitely many solutions, how do you find all of them without missing any?",
    apBoardNote:
      "CED 3.10A (Solving Trig Equations and Inequalities). Section II favorite — appears as a standalone FR or embedded in a modeling problem. Scoring requires: (1) finding ALL solutions in the specified interval, (2) using substitution correctly when the argument is 2θ or similar, (3) EXPANDING the solution interval when substituting (if θ ∈ [0, 2π), then 2θ ∈ [0, 4π)), (4) checking for extraneous solutions. The AP specifically penalizes missing the second solution in a period (e.g., π − arcsin(c) for sine equations). Showing work quadrant-by-quadrant earns partial credit even if one solution is missed.",
    teacherNote:
      "Students need exact trig values (3.3), the ASTC rule, inverse trig (3.9), and algebraic manipulation. The most common failure: finding only the principal value and missing the symmetric solution in the other valid quadrant. For sin θ = c (positive c): TWO solutions per period — Q1 and Q2. For cos θ = c (positive c): TWO solutions — Q1 and Q4. For tan θ = c: ONE solution per period. The substitution mistake: students set u = 2θ but forget to solve u in a DOUBLED interval. Connect to 3.9 (inverse trig for principal values) and 3.12 (Pythagorean identity enables converting quadratic trig equations).",
    studentVoice:
      "Trig equations are sneaky because they have INFINITELY many solutions. The AP restricts you to an interval like [0, 2π). My system: (1) Isolate the trig function. (2) Use inverse trig to get the principal value α. (3) Ask 'which quadrants give this sign?' and find ALL solutions in [0, 2π). For sin θ = c: solutions in Q1 (α) and Q2 (π − α). For cos θ = c: solutions in Q1 (α) and Q4 (2π − α). For tan θ = c: only ONE per period. (4) If the argument is 2θ, DOUBLE the interval first. The thing I kept getting wrong: for sin θ = c, there are TWO solutions in [0, 2π). Finding only one and stopping is the most common lost point on the AP.",
    narration: [
      "Trig equations are fundamentally different from algebraic equations because trig functions are periodic — they hit the same output values over and over forever. The equation sin θ = 0.5 is not satisfied by just one angle; it is satisfied by infinitely many. The AP Exam always gives you an interval to work within, most commonly [0, 2π), and your job is to find every solution in that interval without missing any.",
      "The strategy is a four-step routine. First, isolate the trig function: get sin θ = c, cos θ = c, or tan θ = c alone on one side by doing algebra. Second, find the reference angle using the appropriate inverse trig function — arcsin, arccos, or arctan of |c|. Third, use your knowledge of which quadrants give which signs to list every angle in [0, 2π) that works. Fourth, write the general solution by adding the period (2πk for sine and cosine, πk for tangent).",
      "The quadrant step is where most solutions get missed. For sin θ = c with c > 0, sine is positive in Q I and Q II, so there are TWO solutions per period: θ = α and θ = π − α, where α is the reference angle from Q I. For cos θ = c with c > 0, cosine is positive in Q I and Q IV: θ = α and θ = 2π − α. For tan θ = c, tangent has period π so there is exactly one solution per π-wide interval: θ = α (and α + π, and α + 2π, etc.). These patterns are worth memorizing — the AP rewards students who can apply them automatically.",
      "When the argument is something like 2θ or (θ/2 + (π) / (3)), substitute u for the entire argument and solve for u — but critically, you must expand the solution interval proportionally. If θ ∈ [0, 2π) and u = 2θ, then u ∈ [0, 4π). This doubled interval gives you twice as many u-solutions, which then divide back to the correct number of θ-solutions. Students who forget to double the interval find only half the answers. This is one of the most consistent point-losers on AP free-response.",
      "Quadratic trig equations — like 2sin²θ − sin θ − 1 = 0 — are solved by treating them as quadratics in disguise. Let s = sin θ: 2s² − s − 1 = 0 factors as (2s + 1)(s − 1) = 0. So sin θ = −(1) / (2) or sin θ = 1, each of which is a separate simpler equation to solve. Never divide both sides by a trig function — dividing by sin θ throws away all solutions where sin θ = 0. Always factor.",
    ],
    graphType: 'sine-wave',
    keyFormula:
      'sin θ = c → θ = arcsin(c) + 2πk or (π − arcsin(c)) + 2πk; tan θ = c → θ = arctan(c) + πk',
    concepts: [
      "sin θ = c has TWO solutions per period — one in Q I (α) and one in Q II (π − α) when c > 0; one in Q III and one in Q IV when c < 0.",
      "cos θ = c has TWO solutions per period — one in Q I (α) and one in Q IV (2π − α) when c > 0.",
      "tan θ = c has ONE solution per period, since tangent's period is π not 2π.",
      "When the argument is 2θ, let u = 2θ and expand the solution interval: if θ ∈ [0, 2π), solve u ∈ [0, 4π), then divide by 2.",
      "Quadratic trig equations: factor — never divide both sides by a trig function, or you lose solutions.",
    ],
    keyTerms: [
      {
        term: 'General solution',
        definition:
          'The complete family of all solutions, written with an integer k (e.g., θ = (π) / (6) + 2πk). It captures every angle satisfying the equation.',
      },
      {
        term: 'Reference angle',
        definition:
          "The acute angle between the terminal side and the nearest x-axis. It gives the magnitude of the trig value; the quadrant gives the sign.",
      },
      {
        term: 'Principal value',
        definition:
          'The single output of an inverse trig function — your starting point for finding all solutions.',
      },
      {
        term: 'Extraneous solution',
        definition:
          'A fake solution created by algebraic steps like squaring. Always plug candidates back into the original equation.',
      },
    ],
    table: {
      caption: 'General solution patterns for trig equations',
      headers: ['Equation', 'Principal value (α)', 'Solutions in [0, 2π)', 'General solution'],
      rows: [
        ['sin θ = c', 'α = arcsin(|c|)', 'α and π − α (c > 0); π + α and 2π − α (c < 0)', 'α + 2πk and (π − α) + 2πk'],
        ['cos θ = c', 'α = arccos(|c|)', 'α and 2π − α (c > 0); π − α and π + α (c < 0)', 'α + 2πk and (2π − α) + 2πk'],
        ['tan θ = c', 'α = arctan(c)', 'α and α + π', 'α + πk'],
      ],
    },
    workedExample: {
      problem: 'Solve 2 sin(2θ) = √3 on [0, 2π). List all solutions.',
      steps: [
        'Isolate: sin(2θ) = (√3) / (2).',
        'Let u = 2θ. Since θ ∈ [0, 2π), u ∈ [0, 4π).',
        'sin u = (√3) / (2) at u = (π) / (3) and u = (2π) / (3) in [0, 2π). Adding 2π for the next full cycle: u = (π) / (3) + 2π = (7π) / (3) and u = (2π) / (3) + 2π = (8π) / (3).',
        'All four u-values: (π) / (3), (2π) / (3), (7π) / (3), (8π) / (3). Divide by 2: θ = (π) / (6), (π) / (3), (7π) / (6), (4π) / (3).',
      ],
      answer: 'θ = (π) / (6), (π) / (3), (7π) / (6), (4π) / (3).',
    },
    commonMistakes: [
      "Finding only the principal value and stopping. Most equations have TWO solutions per period — don't forget the symmetric one (π − α for sine, 2π − α for cosine).",
      "Forgetting to expand the interval when substituting u = 2θ. If θ ∈ [0, 2π), then u ∈ [0, 4π) — twice as wide, giving twice as many solutions.",
      "Dividing both sides by a trig function. Dividing by sin θ loses all solutions where sin θ = 0. Factor instead.",
    ],
    tip: "On AP free-response, work quadrant by quadrant: 'In Q I, θ = α. In Q II, θ = π − α.' That systematic approach makes it nearly impossible to miss a solution, and you earn partial credit for each one found.",
    questions: [
      {
        question_text: 'How many solutions does sin θ = (√2) / (2) have in [0, 2π)?',
        difficulty: 'Easy',
        choices: ['0', '1', '2', '4'],
        answer_text: 'C',
        explanation:
          'sin θ = (√2) / (2) at θ = (π) / (4) (Q I) and θ = (3π) / (4) (Q II). Sine is positive in both Q I and Q II, giving exactly 2 solutions.',
      },
      {
        question_text: 'What is the general solution of tan θ = √3?',
        difficulty: 'Easy',
        choices: ['θ = (π) / (3) + 2πk', 'θ = (π) / (3) + πk', 'θ = (2π) / (3) + πk', 'θ = (π) / (6) + πk'],
        answer_text: 'B',
        explanation:
          'arctan(√3) = (π) / (3). Tangent has period π, so the general solution is θ = (π) / (3) + πk.',
      },
      {
        question_text: 'How many solutions does cos θ = −1 have in [0, 2π)?',
        difficulty: 'Easy',
        choices: ['0', '1', '2', '4'],
        answer_text: 'B',
        explanation:
          'cos θ = −1 only at θ = π in [0, 2π). That is the single point on the unit circle with x-coordinate −1.',
      },
      {
        question_text: 'Solve 2 cos θ − √3 = 0 on [0, 2π). Which set is correct?',
        difficulty: 'Easy',
        choices: ['{(π) / (6), (11π) / (6)}', '{(π) / (6), (5π) / (6)}', '{(5π) / (6), (7π) / (6)}', '{(π) / (3), (5π) / (3)}'],
        answer_text: 'A',
        explanation:
          'cos θ = (√3) / (2). Reference angle = (π) / (6). Cosine is positive in Q I and Q IV: θ = (π) / (6) and θ = 2π − (π) / (6) = (11π) / (6).',
      },
      {
        question_text: 'For sin θ > (1) / (2) on [0, 2π), the solution set is:',
        difficulty: 'Medium',
        choices: ['(0, (π) / (6))', '((π) / (6), (5π) / (6))', '((π) / (3), (2π) / (3))', '((5π) / (6), π)'],
        answer_text: 'B',
        explanation:
          'sin θ = (1) / (2) at θ = (π) / (6) and (5π) / (6). The sine curve is above (1) / (2) between those values. Solution: ((π) / (6), (5π) / (6)).',
      },
      {
        question_text: 'Solve sin(3θ) = 0 on [0, π). How many solutions are there?',
        difficulty: 'Medium',
        choices: ['2', '3', '4', '6'],
        answer_text: 'B',
        explanation:
          'Let u = 3θ, u ∈ [0, 3π). sin u = 0 at u = 0, π, 2π. Back-substituting: θ = 0, (π) / (3), (2π) / (3). Three solutions.',
      },
      {
        question_text: 'Solve 2 cos²θ − cos θ = 0 on [0, 2π). How many solutions are there?',
        difficulty: 'Medium',
        choices: ['2', '3', '4', '6'],
        answer_text: 'C',
        explanation:
          'Factor: cos θ(2cos θ − 1) = 0. From cos θ = 0: θ = (π) / (2), (3π) / (2). From cos θ = (1) / (2): θ = (π) / (3), (5π) / (3). Four solutions total. Never divide by cos θ — factoring preserves all roots.',
      },
      {
        question_text: 'Solve 2 sin²θ − sin θ − 1 = 0 on [0, 2π). How many solutions?',
        difficulty: 'Medium',
        choices: ['2', '3', '4', '6'],
        answer_text: 'B',
        explanation:
          'Factor: (2 sin θ + 1)(sin θ − 1) = 0. From sin θ = −(1) / (2): θ = (7π) / (6), (11π) / (6). From sin θ = 1: θ = (π) / (2). Three solutions total.',
      },
      {
        question_text: 'Solve 2 sin(2θ) = √3 on [0, 2π). Which set is correct?',
        difficulty: 'Hard',
        choices: [
          '{(π) / (6), (π) / (3)}',
          '{(π) / (6), (5π) / (6)}',
          '{(π) / (6), (π) / (3), (7π) / (6), (4π) / (3)}',
          '{(π) / (3), (2π) / (3), (4π) / (3), (5π) / (3)}',
        ],
        answer_text: 'C',
        explanation:
          'sin(2θ) = (√3) / (2). Let u = 2θ, u ∈ [0, 4π). sin u = (√3) / (2) at u = (π) / (3), (2π) / (3), (7π) / (3), (8π) / (3). Divide by 2: θ = (π) / (6), (π) / (3), (7π) / (6), (4π) / (3).',
      },
      {
        question_text: 'Solve sin θ cos θ = (1) / (4) on [0, 2π). Which set is correct?',
        difficulty: 'Hard',
        choices: [
          '{(π) / (12), (5π) / (12)}',
          '{(π) / (12), (5π) / (12), (13π) / (12), (17π) / (12)}',
          '{(π) / (6), (5π) / (6)}',
          '{(π) / (6), (5π) / (6), (7π) / (6), (11π) / (6)}',
        ],
        answer_text: 'B',
        explanation:
          'Rewrite: sin θ cos θ = (1/2)sin(2θ), so (1/2)sin(2θ) = (1) / (4) → sin(2θ) = (1) / (2). Let u = 2θ, u ∈ [0, 4π): u = (π) / (6), (5π) / (6), (13π) / (6), (17π) / (6). Dividing by 2: θ = (π) / (12), (5π) / (12), (13π) / (12), (17π) / (12).',
      },
    ],
  },

  '3.11': {
    essentialQuestion:
      "If you flip a fraction upside down, you get its reciprocal — so what happens when you flip sine, cosine, and tangent?",
    apBoardNote:
      "CED 3.11A (Secant, Cosecant, and Cotangent). Section I tests: domain, range, and asymptotes of sec, csc, and cot; recognizing their graphs; and evaluating at specific angles. Section II may ask for the value of a reciprocal function given the original, or ask where a reciprocal function is undefined. Full credit requires explicitly stating which values of θ make the denominator zero. Key AP trap: students place asymptotes of csc/sec where the original has asymptotes instead of where it has zeros — and place asymptotes of cot where sin = 0, which is correct, but confuse it with where cos = 0.",
    teacherNote:
      "Students need unit circle values and the definitions of sin, cos, tan from 3.2–3.3. The top misconception: placing asymptotes of csc where cos = 0 (wrong — csc is (1) / (sin), so asymptotes are where sin = 0). A parallel error: placing asymptotes of sec where sin = 0 instead of where cos = 0. The graph connection is powerful pedagogically: the graph of csc θ 'hugs' the peaks and troughs of sin θ but explodes to infinity wherever sin θ = 0. Connect to 3.2 (unit circle definitions), 3.12 (Pythagorean identities involve sec and csc), and 3.10 (equations involving reciprocal trig functions). Teaching: always start from the reciprocal definition, never introduce sec/csc/cot as separate new functions.",
    studentVoice:
      "Sec, csc, and cot are just fractions — flip sin, cos, and tan upside down. sec θ = 1/cosθ. csc θ = 1/sinθ. cot θ = cosθ/sinθ (or equivalently 1/tanθ). Wherever the denominator is zero, you get a vertical asymptote. So csc has asymptotes where sinθ = 0 (at 0, π, 2π...), and sec has asymptotes where cosθ = 0 (at (π) / (2), (3π) / (2)...). The ranges are wild: sec and csc can never output values between −1 and 1 — they skip that whole interval. Their range is (−∞, −1] ∪ [1, ∞). Cot is like tan: it covers all real numbers. And the big shortcut: if sinθ = (3) / (5), then cscθ = (5) / (3) immediately. Just flip.",
    narration: [
      "Three new trig functions — secant, cosecant, and cotangent — are simply the reciprocals of the three you already know. The definitions are: sec θ = (1) / (cos θ), csc θ = (1) / (sin θ), and cot θ = cos θ / sin θ. That last one is equivalent to (1) / (tan θ), but writing it as cos θ / sin θ makes the domain clearer. Every property of these functions follows directly from these definitions — you do not need to memorize separate facts from scratch.",
      "Wherever the denominator is zero, you get a vertical asymptote. For sec θ = (1) / (cos θ), the denominator is zero wherever cos θ = 0 — at θ = (π) / (2), (3π) / (2), (5π) / (2), and generally at (π) / (2) + nπ. Those are the asymptotes of secant. For csc θ = (1) / (sin θ), the denominator is zero wherever sin θ = 0 — at θ = 0, π, 2π, and generally at nπ. For cot θ = cos θ / sin θ, the denominator is sin θ again, so cotangent also has asymptotes at nπ.",
      "The ranges of sec and csc are striking: because |cos θ| ≤ 1, we have |sec θ| = 1/|cos θ| ≥ 1. The reciprocal of a number between 0 and 1 is at least 1. So sec θ is never between −1 and 1 — its range is (−∞, −1] ∪ [1, ∞). The same logic applies to csc θ. Both functions skip the interval (−1, 1) entirely. Cotangent, by contrast, ranges over all real numbers just like tangent does.",
      "To graph csc θ, start by drawing sin θ. Wherever sin θ = 1 (its maximum), csc θ = (1) / (1) = 1 — those peaks touch. Wherever sin θ = −1, csc θ = −1 — those troughs touch. The graph of csc θ 'hugs' the graph of sin θ at its extremes, then swoops off to ±∞ on either side of each zero of sin θ. This hugging relationship is the visual key: the reciprocal function meets the original function exactly where the original achieves its maximum or minimum.",
      "Evaluating reciprocal functions at specific angles is fast once you know the original. If sin((π) / (6)) = (1) / (2), then csc((π) / (6)) = 2. If cos((2π) / (3)) = −(1) / (2), then sec((2π) / (3)) = −2. If tan((π) / (4)) = 1, then cot((π) / (4)) = 1. The only special case to watch: tan((π) / (2)) is undefined, so cot((π) / (2)) = cos((π) / (2))/sin((π) / (2)) = (0) / (1) = 0 — cotangent is zero at (π) / (2), not undefined. This surprises students who assume cot has asymptotes wherever tan does — it does not.",
    ],
    keyFormula:
      'sec θ = (1) / (cos θ); csc θ = (1) / (sin θ); cot θ = cos θ / sin θ; Ranges: sec and csc → (−∞,−1] ∪ [1,∞); cot → all reals',
    concepts: [
      "sec θ = (1) / (cos θ). Undefined (vertical asymptote) wherever cos θ = 0, at θ = (π) / (2) + nπ.",
      "csc θ = (1) / (sin θ). Undefined (vertical asymptote) wherever sin θ = 0, at θ = nπ.",
      "cot θ = cos θ / sin θ. Undefined wherever sin θ = 0 (same asymptotes as csc). Range: all real numbers.",
      "Ranges of sec and csc are (−∞, −1] ∪ [1, ∞) — they can never output values strictly between −1 and 1.",
      "The graph of csc θ hugs the graph of sin θ at its peaks (value 1) and troughs (value −1), then explodes to ±∞ at each zero of sin θ.",
    ],
    keyTerms: [
      {
        term: 'Secant (sec θ)',
        definition:
          '(1) / (cos θ). Undefined wherever cos θ = 0, at θ = (π) / (2) + nπ. Range: (−∞, −1] ∪ [1, ∞). Reciprocal of cosine.',
      },
      {
        term: 'Cosecant (csc θ)',
        definition:
          '(1) / (sin θ). Undefined wherever sin θ = 0, at θ = nπ. Range: (−∞, −1] ∪ [1, ∞). Reciprocal of sine.',
      },
      {
        term: 'Cotangent (cot θ)',
        definition:
          'cos θ / sin θ, equivalently (1) / (tan θ). Undefined wherever sin θ = 0, at θ = nπ. Range: all real numbers.',
      },
      {
        term: 'Reciprocal function',
        definition:
          'A function formed by taking 1 divided by the original. Sec, csc, and cot are the reciprocals of cos, sin, and tan respectively.',
      },
    ],
    table: {
      caption: 'Summary: reciprocal trig functions',
      headers: ['Function', 'Definition', 'Undefined at', 'Range'],
      rows: [
        ['sec θ', '(1) / (cos θ)', 'θ = (π) / (2) + nπ', '(−∞, −1] ∪ [1, ∞)'],
        ['csc θ', '(1) / (sin θ)', 'θ = nπ', '(−∞, −1] ∪ [1, ∞)'],
        ['cot θ', 'cos θ / sin θ', 'θ = nπ', '(−∞, +∞)'],
      ],
    },
    workedExample: {
      problem: 'Given sin θ = −(3) / (5) and θ is in Quadrant III, find sec θ and cot θ.',
      steps: [
        'Use sin²θ + cos²θ = 1: (−3/5)² + cos²θ = 1 → (9) / (25) + cos²θ = 1 → cos²θ = (16) / (25).',
        'In Q III, cosine is negative: cos θ = −(4) / (5).',
        'sec θ = (1) / (cos θ) = 1/(−4/5) = −(5) / (4).',
        'cot θ = cos θ / sin θ = (−4/5)/(−3/5) = (4) / (3).',
      ],
      answer: 'sec θ = −(5) / (4), cot θ = (4) / (3).',
    },
    commonMistakes: [
      "Placing asymptotes of csc where cosθ = 0. csc = 1/sinθ, so asymptotes are where sinθ = 0 (at nπ), not where cosθ = 0.",
      "Thinking cot has the same asymptotes as tan. cot = cosθ/sinθ, so asymptotes are where sinθ = 0. tan = sinθ/cosθ, so asymptotes are where cosθ = 0. They are at different locations.",
      "Writing sec θ = 1/sinθ (confusing it with csc). Secant is the reciprocal of COsine — the 'co' in cosine matches the 'co' in cosecant but secant goes with cosine. Remember: SECant = 1/COSine.",
    ],
    tip: "A fast evaluation trick: if you know sin θ = a/b, then csc θ = b/a immediately — just flip the fraction. Same for cos and sec. This shortcut saves time on multiple-choice questions where you already computed the original trig value.",
    questions: [
      {
        question_text: 'Which expression defines sec θ?',
        difficulty: 'Easy',
        choices: ['(1) / (sin θ)', '(1) / (cos θ)', 'sin θ/cos θ', 'cos θ/sin θ'],
        answer_text: 'B',
        explanation: 'sec θ = (1) / (cos θ). Secant is the reciprocal of cosine.',
      },
      {
        question_text: 'Where does csc θ have vertical asymptotes?',
        difficulty: 'Easy',
        choices: ['θ = (π) / (2) + nπ', 'θ = nπ', 'θ = (π) / (4) + nπ', 'θ = n·(π) / (2)'],
        answer_text: 'B',
        explanation:
          'csc θ = (1) / (sin θ). Asymptotes occur where sin θ = 0, which is at θ = nπ (i.e., 0, π, 2π, ...).',
      },
      {
        question_text: 'If sin θ = (4) / (5), what is csc θ?',
        difficulty: 'Easy',
        choices: ['(5) / (4)', '(4) / (5)', '(3) / (5)', '(5) / (3)'],
        answer_text: 'A',
        explanation: 'csc θ = (1) / (sin θ) = 1/(4/5) = (5) / (4).',
      },
      {
        question_text: 'What is the range of sec θ?',
        difficulty: 'Easy',
        choices: ['[−1, 1]', '(−∞, +∞)', '(−∞, −1] ∪ [1, ∞)', '(0, ∞)'],
        answer_text: 'C',
        explanation:
          'Since |cos θ| ≤ 1, |sec θ| = 1/|cos θ| ≥ 1. Secant never outputs values strictly between −1 and 1. Range: (−∞, −1] ∪ [1, ∞).',
      },
      {
        question_text: 'What is cot((π) / (4))?',
        difficulty: 'Medium',
        choices: ['1', '√2', '√3', '0'],
        answer_text: 'A',
        explanation:
          'cot((π) / (4)) = cos((π) / (4))/sin((π) / (4)) = ((√2) / (2))/((√2) / (2)) = 1. Equivalently, since tan((π) / (4)) = 1, cot((π) / (4)) = (1) / (1) = 1.',
      },
      {
        question_text: 'Which θ-value is in the domain of cot θ?',
        difficulty: 'Medium',
        choices: ['θ = 0', 'θ = π', 'θ = (3π) / (2)', 'θ = 2π'],
        answer_text: 'C',
        explanation:
          'cot θ = cos θ/sin θ is undefined where sin θ = 0: at θ = 0, π, 2π. At θ = (3π) / (2), sin((3π) / (2)) = −1 ≠ 0, so cot((3π) / (2)) = cos((3π) / (2))/sin((3π) / (2)) = 0/(−1) = 0. Valid.',
      },
      {
        question_text: 'If cos θ = −(2) / (3), what is sec θ?',
        difficulty: 'Medium',
        choices: ['−(3) / (2)', '(3) / (2)', '−(2) / (3)', '(√5) / (3)'],
        answer_text: 'A',
        explanation: 'sec θ = (1) / (cos θ) = 1/(−2/3) = −(3) / (2).',
      },
      {
        question_text: 'In which quadrant is csc θ negative?',
        difficulty: 'Medium',
        choices: ['Q I only', 'Q II only', 'Q III and Q IV', 'Q I and Q II'],
        answer_text: 'C',
        explanation:
          'csc θ = (1) / (sin θ). This is negative whenever sin θ is negative, which occurs in Q III and Q IV.',
      },
      {
        question_text: 'Given tan θ = (5) / (12) and θ in Q I, find sec θ.',
        difficulty: 'Hard',
        choices: ['(13) / (12)', '(12) / (13)', '(5) / (13)', '(13) / (5)'],
        answer_text: 'A',
        explanation:
          'tan²θ + 1 = sec²θ: (5/12)² + 1 = (25) / (144) + (144) / (144) = (169) / (144). sec θ = (13) / (12) (positive in Q I).',
      },
      {
        question_text: 'If sec θ = (5) / (3) and θ is in Q IV, find csc θ.',
        difficulty: 'Hard',
        choices: ['(5) / (4)', '−(5) / (4)', '(4) / (5)', '−(4) / (3)'],
        answer_text: 'B',
        explanation:
          'cos θ = (3) / (5) (sec = 5/3). sin²θ = 1 − (9) / (25) = (16) / (25). In Q IV, sin θ < 0: sin θ = −(4) / (5). csc θ = 1/(−4/5) = −(5) / (4).',
      },
    ],
  },

  '3.12': {
    essentialQuestion:
      "How many different ways can you rewrite a trig expression without changing its value — and why does that matter for solving harder problems?",
    apBoardNote:
      "CED 3.12A–B (Equivalent Representations of Trigonometric Functions). This topic covers TWO required skill sets: (A) Pythagorean, co-function, even/odd, and periodicity identities; and (B) the sum and difference identities for sine and cosine — sin(α+β) = sinα cosβ + cosα sinβ and cos(α+β) = cosα cosβ − sinα sinβ. Both skill sets appear on Section I (MCQ) and Section II (FRQ). The double-angle identities (sin 2α = 2 sinα cosα, cos 2α = cos²α − sin²α) are also derivable from the sum formulas and are tested. Scoring on FR: when using identities to simplify or verify, work must show (1) identity written out, (2) substitution performed, (3) algebraic steps shown. The AP particularly tests 'given one trig value + quadrant, find all six trig functions' and 'use sum identities to find exact values of non-standard angles' — this synthesizes 3.2, 3.11, and 3.12.",
    teacherNote:
      "Students need unit circle coordinates and definitions of sec, csc, cot from 3.11. Critical mistakes: (1) choosing the wrong sign when taking a square root — always check the quadrant; (2) confusing co-function identities — only sin and cos swap, not sin and tan; (3) applying sum identities in the wrong order, e.g., sin(α+β) ≠ sinα + sinβ — distribution does not work for trig functions. The sum identities should be connected to finding exact values of non-unit-circle angles: sin(75°) = sin(45° + 30°) uses both known unit circle values. Double-angle identities flow naturally: sin(2α) = sin(α + α), apply the sum formula, get 2 sinα cosα. Teach both the algebraic derivation and the memory hook.",
    studentVoice:
      "There are FIVE identity families to know. First: Pythagorean — sin²θ + cos²θ = 1, divide by cos²θ for tan²θ + 1 = sec²θ, divide by sin²θ for 1 + cot²θ = csc²θ. Second: Co-function — sin((π) / (2) − θ) = cosθ and cos((π) / (2) − θ) = sinθ. They swap. Third: Even/Odd — cos(−θ) = cosθ (even), sin(−θ) = −sinθ (odd), tan(−θ) = −tanθ (odd). Fourth: Periodicity — sin(θ + 2π) = sinθ, cos(θ + 2π) = cosθ, tan(θ + π) = tanθ. Fifth: Sum Identities — sin(α+β) = sinα cosβ + cosα sinβ; cos(α+β) = cosα cosβ − sinα sinβ. The big trap: sin(α+β) is NOT sinα + sinβ. These formulas mix both sin and cos on the right side. Double-angle: set β = α in the sum formulas to get sin(2α) = 2sinα cosα and cos(2α) = cos²α − sin²α.",
    narration: [
      "A trig identity is not an equation you solve — it is a rewriting rule you apply. When you write sin²θ + cos²θ = 1, you are not looking for a value of θ that makes this true. It is true for EVERY θ. Identities let you swap one form of an expression for an equivalent one, simplifying or restructuring it for whatever calculation you need. There are five main families of identities in the AP Precalculus CED.",
      "The Pythagorean identities come from the unit circle. Every point on the unit circle satisfies x² + y² = 1. Since x = cos θ and y = sin θ, we immediately get cos²θ + sin²θ = 1. This is the parent identity. Divide every term by cos²θ (assuming cos θ ≠ 0) and you get tan²θ + 1 = sec²θ. Divide every term by sin²θ (assuming sin θ ≠ 0) and you get 1 + cot²θ = csc²θ. Three identities, all from one circle equation — produce any of them from memory in under ten seconds.",
      "Co-function identities express the complementary-angle relationship between sine and cosine. sin((π) / (2) − θ) = cos θ and cos((π) / (2) − θ) = sin θ. In words: the sine of an angle equals the cosine of its complement, and vice versa. This is why 'sine' and 'cosine' are connected — 'co' is short for complement.",
      "Even and odd identities describe symmetry. Cosine is even: cos(−θ) = cos θ (y-axis symmetry). Sine is odd: sin(−θ) = −sin θ (origin symmetry). Tangent is odd: tan(−θ) = −tan θ. Periodicity reduces large angles: sin(θ + 2πk) = sin θ, cos(θ + 2πk) = cos θ, tan(θ + πk) = tan θ. So sin((17π) / (3)) = sin((17π) / (3) − 4π) = sin((5π) / (3)) = −(√3) / (2).",
      "The sum identities for sine and cosine are required on the AP exam and allow you to find exact trig values at angles not on the unit circle. The formulas are: sin(α + β) = sin α cos β + cos α sin β and cos(α + β) = cos α cos β − sin α sin β. There is also a difference version: sin(α − β) = sin α cos β − cos α sin β and cos(α − β) = cos α cos β + sin α sin β. A critical warning: sin(α + β) is NOT equal to sin α + sin β. Trig functions do not distribute over addition — you must use the full formula.",
      "Here is why the sum identities matter: you know sin(45°) = (√2) / (2), cos(45°) = (√2) / (2), sin(30°) = (1) / (2), cos(30°) = (√3) / (2). But what is sin(75°)? The unit circle does not list 75°. However, 75° = 45° + 30°, so you can apply the sum identity: sin(75°) = sin(45°)cos(30°) + cos(45°)sin(30°) = ((√2) / (2))((√3) / (2)) + ((√2) / (2))(1/2) = (√6) / (4) + (√2) / (4) = (√6 + √2)/4. Exact answer, no calculator needed.",
      "Double-angle identities are a special case of the sum formulas when both angles are equal. Setting α = β = θ in the sine sum formula: sin(θ + θ) = sin θ cos θ + cos θ sin θ = 2 sin θ cos θ. So sin(2θ) = 2 sin θ cos θ. For cosine: cos(2θ) = cos²θ − sin²θ. Using the Pythagorean identity, this can also be written as 2cos²θ − 1 or 1 − 2sin²θ. These three forms of the cosine double-angle identity are all equivalent.",
      "Putting it together: when asked to find all six trig values from one given value and a quadrant, the Pythagorean identity does the heavy lifting. Start with sin²θ + cos²θ = 1, substitute the known value, solve for the unknown, apply the quadrant to choose the correct sign, then compute sec, csc, cot as reciprocals. For sum/difference questions, identify the decomposition first (e.g., 105° = 60° + 45°), look up unit circle values, and carefully apply the formula term by term.",
    ],
    keyFormula:
      'sin²θ+cos²θ=1; tan²θ+1=sec²θ; sin(α+β)=sinα cosβ+cosα sinβ; cos(α+β)=cosα cosβ−sinα sinβ; sin(2θ)=2sinθ cosθ; cos(2θ)=cos²θ−sin²θ',
    concepts: [
      "Pythagorean Identity: sin²θ + cos²θ = 1. Dividing by cos²θ gives tan²θ + 1 = sec²θ; dividing by sin²θ gives 1 + cot²θ = csc²θ.",
      "Co-function identities: sin((π) / (2) − θ) = cos θ and cos((π) / (2) − θ) = sin θ. Sine and cosine swap when the angle is replaced by its complement.",
      "Even/odd identities: cos(−θ) = cos θ (even); sin(−θ) = −sin θ (odd); tan(−θ) = −tan θ (odd).",
      "Periodicity: sin(θ + 2πk) = sin θ, cos(θ + 2πk) = cos θ for any integer k. tan(θ + πk) = tan θ.",
      "Sum identities: sin(α+β) = sinα cosβ + cosα sinβ; cos(α+β) = cosα cosβ − sinα sinβ. NOT the same as sin α + sin β.",
      "Double-angle identities (derived from sum formulas): sin(2θ) = 2 sinθ cosθ; cos(2θ) = cos²θ − sin²θ = 2cos²θ − 1 = 1 − 2sin²θ.",
    ],
    keyTerms: [
      {
        term: 'Pythagorean Identity',
        definition:
          'sin²θ + cos²θ = 1. True for every θ. Derived from the unit circle equation x² + y² = 1.',
      },
      {
        term: 'Co-function identity',
        definition:
          'sin((π) / (2) − θ) = cos θ and cos((π) / (2) − θ) = sin θ. Sine and cosine are cofunctions — they are complementary.',
      },
      {
        term: 'Even/Odd identity',
        definition:
          'cos(−θ) = cos θ (cosine is even); sin(−θ) = −sin θ and tan(−θ) = −tan θ (sine and tangent are odd).',
      },
      {
        term: 'Periodicity identity',
        definition:
          'sin(θ + 2πk) = sin θ, cos(θ + 2πk) = cos θ, and tan(θ + πk) = tan θ for any integer k. Used to reduce angles.',
      },
      {
        term: 'Sum identity for sine',
        definition:
          'sin(α + β) = sin α cos β + cos α sin β. Allows finding exact trig values at non-unit-circle angles.',
      },
      {
        term: 'Sum identity for cosine',
        definition:
          'cos(α + β) = cos α cos β − sin α sin β. Note the minus sign between terms.',
      },
      {
        term: 'Double-angle identity',
        definition:
          'sin(2θ) = 2 sinθ cosθ; cos(2θ) = cos²θ − sin²θ. Derived from the sum identities with α = β = θ.',
      },
    ],
    table: {
      caption: 'The five identity families and their most useful forms',
      headers: ['Family', 'Identity', 'Use case'],
      rows: [
        ['Pythagorean', 'sin²θ + cos²θ = 1', 'Find sin or cos given the other'],
        ['Pythagorean', 'tan²θ + 1 = sec²θ', 'Find tan or sec given the other'],
        ['Co-function', 'sin((π) / (2) − θ) = cos θ', 'Simplify complementary angles'],
        ['Even/Odd', 'cos(−θ) = cos θ', 'Simplify negative angles'],
        ['Even/Odd', 'sin(−θ) = −sin θ', 'Simplify negative angles'],
        ['Periodicity', 'sin(θ + 2πk) = sin θ', 'Reduce large angles'],
        ['Sum', 'sin(α+β) = sinα cosβ + cosα sinβ', 'Find exact values like sin 75°'],
        ['Sum', 'cos(α+β) = cosα cosβ − sinα sinβ', 'Find exact values like cos 105°'],
        ['Double-angle', 'sin(2θ) = 2 sinθ cosθ', 'Simplify double-angle expressions'],
        ['Double-angle', 'cos(2θ) = cos²θ − sin²θ', 'Simplify double-angle in terms of single angle'],
      ],
    },
    workedExample: {
      problem: 'Given cos θ = −(5) / (13) with θ in Q II, find sin θ, tan θ, sec θ, csc θ, and cot θ.',
      steps: [
        'Pythagorean identity: sin²θ + (−5/13)² = 1 → sin²θ = 1 − (25) / (169) = (144) / (169).',
        'Q II: sin θ > 0, so sin θ = (12) / (13).',
        'tan θ = sin θ / cos θ = (12/13)/(−5/13) = −(12) / (5).',
        'sec θ = (1) / (cos θ) = −(13) / (5). csc θ = (1) / (sin θ) = (13) / (12). cot θ = (1) / (tan θ) = −(5) / (12).',
      ],
      answer: 'sin θ = (12) / (13), tan θ = −(12) / (5), sec θ = −(13) / (5), csc θ = (13) / (12), cot θ = −(5) / (12).',
    },
    workedExample2: {
      problem: 'Use the sum identity to find the exact value of sin(75°).',
      steps: [
        'Decompose 75° as a sum of two unit-circle angles: 75° = 45° + 30°.',
        'Apply the sine sum identity: sin(45° + 30°) = sin 45° cos 30° + cos 45° sin 30°.',
        'Substitute unit circle values: sin 45° = (√2) / (2), cos 30° = (√3) / (2), cos 45° = (√2) / (2), sin 30° = (1) / (2).',
        'Compute: ((√2) / (2))((√3) / (2)) + ((√2) / (2))(1/2) = (√6) / (4) + (√2) / (4).',
        'Combine: sin(75°) = (√6 + √2)/4.',
      ],
      answer: 'sin(75°) = (√6 + √2)/4 ≈ 0.966.',
    },
    commonMistakes: [
      "Forgetting to check the quadrant before choosing the sign. cos²θ = (9) / (25) gives cos θ = ±(3) / (5) — only the quadrant resolves which sign. Wrong sign invalidates all subsequent computations.",
      "Using co-function identities incorrectly: sin((π) / (2) − θ) = cos θ, not tan θ or csc θ. Only sine and cosine swap under complementation.",
      "Applying periodicity with the wrong period. tan has period π, not 2π. tan(θ + π) = tan θ. Using 2π for tangent gives wrong answers.",
    ],
    tip: "The AP Exam loves to give one trig value and a quadrant, then ask for the rest. Memorize the four-step pattern: (1) write the Pythagorean identity, (2) substitute, (3) solve, (4) apply quadrant sign. Then compute the three reciprocals. Same process every time — no thinking required once you have the routine.",
    questions: [
      {
        question_text: 'Which expression equals 1 − cos²θ?',
        difficulty: 'Easy',
        choices: ['tan²θ', 'sec²θ', 'sin²θ', 'cot²θ'],
        answer_text: 'C',
        explanation: 'From sin²θ + cos²θ = 1: sin²θ = 1 − cos²θ.',
      },
      {
        question_text: 'Which identity correctly expresses an even function property?',
        difficulty: 'Easy',
        choices: ['sin(−θ) = sin θ', 'cos(−θ) = −cos θ', 'cos(−θ) = cos θ', 'tan(−θ) = tan θ'],
        answer_text: 'C',
        explanation:
          'Cosine is an even function: cos(−θ) = cos θ. The graph of cosine is symmetric about the y-axis.',
      },
      {
        question_text: 'Using the co-function identity, sin((π) / (3)) equals:',
        difficulty: 'Easy',
        choices: ['cos((π) / (6))', 'cos((π) / (3))', 'tan((π) / (6))', 'cos((2π) / (3))'],
        answer_text: 'A',
        explanation:
          'sin((π) / (3)) = cos((π) / (2) − (π) / (3)) = cos((π) / (6)). The sine of an angle equals the cosine of its complement.',
      },
      {
        question_text: 'Evaluate sin((17π) / (6)) using the periodicity identity.',
        difficulty: 'Easy',
        choices: ['(√3) / (2)', '(1) / (2)', '−(1) / (2)', '−(√3) / (2)'],
        answer_text: 'B',
        explanation:
          '(17π) / (6) − 2π = (17π) / (6) − (12π) / (6) = (5π) / (6). Now sin((5π) / (6)) = sin(π − (π) / (6)) = sin((π) / (6)) = (1) / (2). So sin((17π) / (6)) = (1) / (2).',
      },
      {
        question_text: 'Which of the following is a correct Pythagorean identity?',
        difficulty: 'Medium',
        choices: [
          'sin²θ − cos²θ = 1',
          'tan²θ + 1 = sec²θ',
          '1 + sec²θ = tan²θ',
          'csc²θ = 1 − cot²θ',
        ],
        answer_text: 'B',
        explanation:
          'tan²θ + 1 = sec²θ is obtained by dividing sin²θ + cos²θ = 1 by cos²θ. All other options have incorrect signs or arrangements.',
      },
      {
        question_text: 'If sin θ = (4) / (5) and θ is in Q II, find cos θ.',
        difficulty: 'Medium',
        choices: ['(3) / (5)', '−(3) / (5)', '(4) / (3)', '−(4) / (3)'],
        answer_text: 'B',
        explanation:
          'cos²θ = 1 − (4/5)² = 1 − (16) / (25) = (9) / (25). In Q II, cosine is negative: cos θ = −(3) / (5).',
      },
      {
        question_text: 'Simplify sin(−θ) + sin θ.',
        difficulty: 'Medium',
        choices: ['2sin θ', '0', '2cos θ', '−2sin θ'],
        answer_text: 'B',
        explanation:
          'By the odd identity: sin(−θ) = −sin θ. So sin(−θ) + sin θ = −sin θ + sin θ = 0.',
      },
      {
        question_text: 'Simplify (1 − sin²θ)/cos θ.',
        difficulty: 'Medium',
        choices: ['cos θ', 'sin θ', 'sec θ', 'tan θ'],
        answer_text: 'A',
        explanation:
          '1 − sin²θ = cos²θ (Pythagorean identity). So cos²θ/cos θ = cos θ (for cos θ ≠ 0).',
      },
      {
        question_text: 'If tan θ = −(3) / (4) and sin θ > 0, find sec θ.',
        difficulty: 'Hard',
        choices: ['(5) / (4)', '−(5) / (4)', '(4) / (5)', '−(4) / (5)'],
        answer_text: 'B',
        explanation:
          'tan²θ + 1 = sec²θ: (9) / (16) + 1 = (25) / (16) → sec θ = ±(5) / (4). With sin θ > 0 and tan θ < 0, θ is in Q II where cos θ < 0, so sec θ = −(5) / (4).',
      },
      {
        question_text: 'Simplify (sec²θ − 1)/tan²θ.',
        difficulty: 'Hard',
        choices: ['tan θ', '1', 'sec²θ', 'cot²θ'],
        answer_text: 'B',
        explanation:
          'sec²θ − 1 = tan²θ (Pythagorean identity). So tan²θ/tan²θ = 1 (for tan θ ≠ 0).',
      },
    ],
  },

  '3.13': {
    essentialQuestion:
      "What if instead of locating a point by how far right and up you go, you located it by how far away it is and what direction you're facing?",
    apBoardNote:
      "CED 3.13A (Trigonometry and Polar Coordinates). Section I tests polar-to-rectangular and rectangular-to-polar conversions for both points and equations. The quadrant check on the arctan step is an explicit AP scoring criterion — answers that skip it and report an angle in the wrong quadrant lose full credit. For equation conversion, the multiply-both-sides-by-r technique is required when converting r = a·cosθ to rectangular form. Full credit requires showing x² + y² = r² and r·cosθ = x explicitly. Polar coordinates' non-uniqueness is also tested: students must recognize that (r,θ) and (−r, θ+π) name the same point.",
    teacherNote:
      "Students need the Pythagorean theorem and unit circle trig from 3.2–3.3. The top misconception: applying arctan(y/x) blindly without checking the quadrant. arctan outputs values in (−(π) / (2), (π) / (2)), so Q II and Q III points need correction (add π). A second common error: when converting polar equations to rectangular form, not multiplying both sides by r before substituting. For r = 4cosθ, you cannot directly substitute x = rcosθ — you must first write r² = 4rcosθ and then substitute r² = x² + y² and rcosθ = x. Connect to 3.9 (arctan is used in the conversion), 3.12 (r² = x² + y² is just the Pythagorean theorem), and 3.14 (polar equation graphs).",
    studentVoice:
      "Rectangular coordinates tell you 'go 3 right and 4 up.' Polar coordinates tell you 'face angle θ and walk r steps.' Same point, totally different GPS system. Converting polar → rectangular: x = r cosθ, y = r sinθ. Easy. Converting rectangular → polar: r = √(x² + y²) and tanθ = y/x — BUT you MUST check the quadrant before accepting arctan's answer. arctan only outputs angles in (−(π) / (2), (π) / (2)), so Q II and Q III points need correction. For Q II: add π. For Q III: add π. Polar coordinates are NOT unique — (r, θ) and (−r, θ+π) describe the exact same point. For equation conversion: to go from r = 4cosθ to rectangular, multiply both sides by r first to get r² = 4r cosθ, then swap r² → x²+y² and r cosθ → x.",
    narration: [
      "Rectangular coordinates and polar coordinates are two different ways to describe the exact same point. Rectangular says: from the origin, walk x units horizontally and y units vertically. Polar says: from the origin (called the pole), face direction θ (measured counterclockwise from the positive x-axis) and walk r units. The point (3, 4) in rectangular coordinates and (5, arctan(4/3)) in polar coordinates are the same location — just described two different ways.",
      "Converting from polar to rectangular is the easier direction. Given (r, θ), compute x = r cos θ and y = r sin θ. These formulas come directly from the right triangle formed by the point, the origin, and the x-axis. For example, the polar point (4, (π) / (3)) converts to x = 4cos((π) / (3)) = 4·(1/2) = 2 and y = 4sin((π) / (3)) = 4·((√3) / (2)) = 2√3, giving rectangular point (2, 2√3).",
      "Converting from rectangular to polar is the direction where mistakes happen. First compute r = √(x² + y²) using the Pythagorean theorem — this is always positive if we want r > 0. Then compute the angle using tan θ = y/x, BUT here is the critical step: arctan(y/x) only outputs values in (−(π) / (2), (π) / (2)), meaning it only ever puts you in Q I or Q IV. If the original point is in Q II or Q III, you must add π to the arctan result to get the correct angle. The adjustment: for Q II and Q III points, θ = arctan(y/x) + π.",
      "Polar coordinates are famously non-unique. The same point has infinitely many polar representations. You can always add any multiple of 2π to θ and name the same point: (r, θ) = (r, θ + 2π) = (r, θ + 4π). More interestingly, you can flip the sign of r and add π to θ: (r, θ) = (−r, θ + π). This is because going distance r in direction θ lands you at the same place as going distance r backward from direction θ + π. On the AP, if a question asks whether two polar points are identical, convert both to rectangular and compare.",
      "Converting polar equations to rectangular form requires substituting x = r cos θ, y = r sin θ, and r² = x² + y². A simple example: r = 3 becomes r² = 9, which is x² + y² = 9 — a circle of radius 3. A tricky example: r = 4 cos θ. You cannot directly substitute because r cos θ = x but you need to get rid of the bare r. Multiply both sides by r: r² = 4r cos θ. Now substitute: x² + y² = 4x. Completing the square: (x − 2)² + y² = 4. A circle of radius 2 centered at (2, 0). The multiply-by-r trick is the key move for any polar equation of the form r = a cos θ or r = a sin θ.",
      "Going the other direction — rectangular equations to polar — is usually easier. Replace x with r cos θ, y with r sin θ, and x² + y² with r². For the equation x² + y² = 9: substitute r² for x² + y² to get r² = 9, then r = 3 (taking the positive square root). For the equation x² + y² = 6x + 8y: the right side becomes 6(r cos θ) + 8(r sin θ) = r(6 cos θ + 8 sin θ). Left side is r². Divide both sides by r (r ≠ 0): r = 6 cos θ + 8 sin θ.",
    ],
    keyFormula:
      'Polar→Rect: x = r cosθ, y = r sinθ; Rect→Polar: r = √(x²+y²), tanθ = y/x (check quadrant); r² = x²+y²',
    concepts: [
      "Polar coordinates (r, θ): r is the distance from the pole (origin), θ is the angle from the positive x-axis. Both r < 0 and r > 0 are valid.",
      "Converting polar → rectangular: x = r cos θ, y = r sin θ.",
      "Converting rectangular → polar: r = √(x² + y²); tanθ = y/x with quadrant correction for Q II and Q III (add π to arctan result).",
      "Polar coordinates are NOT unique: (r, θ) = (r, θ + 2π) = (−r, θ + π).",
      "Converting equations: substitute r² = x²+y², x = r cosθ, y = r sinθ. For r = a cosθ form, multiply by r first to get r² = ar cosθ, then substitute.",
    ],
    keyTerms: [
      {
        term: 'Pole',
        definition: 'The origin of the polar coordinate system — the center from which r is measured.',
      },
      {
        term: 'Polar axis',
        definition: 'The reference ray from the pole corresponding to θ = 0, analogous to the positive x-axis.',
      },
      {
        term: 'Polar coordinates (r, θ)',
        definition:
          'A point described by distance r from the pole and angle θ from the polar axis. r can be negative, and θ can be any real number.',
      },
      {
        term: 'Non-uniqueness of polar coordinates',
        definition:
          'Any point has infinitely many polar representations: (r, θ) = (r, θ + 2πk) = (−r, θ + π) for any integer k.',
      },
    ],
    table: {
      caption: 'Polar-to-rectangular conversions for key points',
      headers: ['Polar (r, θ)', 'Rectangular (x, y)', 'Location'],
      rows: [
        ['(3, 0)', '(3, 0)', 'Positive x-axis'],
        ['(4, (π) / (2))', '(0, 4)', 'Positive y-axis'],
        ['(2, π)', '(−2, 0)', 'Negative x-axis'],
        ['(5, (π) / (4))', '(5(√2) / (2), 5(√2) / (2))', 'Q I, 45°'],
        ['(√2, (3π) / (4))', '(−1, 1)', 'Q II, 135°'],
        ['(4, (3π) / (2))', '(0, −4)', 'Negative y-axis'],
      ],
    },
    workedExample: {
      problem: 'Convert the rectangular point (−3, 3) to polar form with r > 0 and 0 ≤ θ < 2π.',
      steps: [
        'Find r: r = √(x² + y²) = √(9 + 9) = √18 = 3√2.',
        'Find θ: tan θ = y/x = 3/(−3) = −1. arctan(−1) = −(π) / (4).',
        'The point (−3, 3) is in Q II (x < 0, y > 0), so add π: θ = −(π) / (4) + π = (3π) / (4).',
        'Check: x = 3√2·cos((3π) / (4)) = 3√2·(−(√2) / (2)) = −3 ✓; y = 3√2·sin((3π) / (4)) = 3√2·((√2) / (2)) = 3 ✓.',
      ],
      answer: '(3√2, (3π) / (4))',
    },
    workedExample2: {
      problem: 'Convert the polar equation r = 4 cos θ to rectangular form.',
      steps: [
        'Multiply both sides by r: r² = 4r cos θ.',
        'Substitute r² = x² + y² and r cos θ = x: x² + y² = 4x.',
        'Rearrange: x² − 4x + y² = 0. Complete the square: (x − 2)² + y² = 4.',
      ],
      answer: 'A circle of radius 2 centered at (2, 0).',
    },
    commonMistakes: [
      "Applying arctan(y/x) without checking the quadrant. arctan returns values in (−(π) / (2), (π) / (2)). Points in Q II or Q III require adding π to the arctan result.",
      "Not multiplying by r before converting r = a cosθ. You cannot directly replace r cosθ with x — you need r² = ar cosθ first, then substitute r² = x² + y² and r cosθ = x.",
      "Thinking each polar point has exactly one representation. Adding 2π to θ or negating r while adding π to θ all name the same point.",
    ],
    tip: "For the quadrant correction on the AP: after computing arctan(y/x), ask 'is x positive or negative?' If x > 0 (Q I or Q IV), arctan is correct. If x < 0 (Q II or Q III), add π to the arctan result. This simple check prevents the most common error in polar conversion.",
    questions: [
      {
        question_text: 'Convert the polar point (5, π) to rectangular coordinates.',
        difficulty: 'Easy',
        choices: ['(5, 0)', '(0, 5)', '(−5, 0)', '(0, −5)'],
        answer_text: 'C',
        explanation:
          'x = 5·cos(π) = 5·(−1) = −5; y = 5·sin(π) = 5·0 = 0. The point is (−5, 0).',
      },
      {
        question_text: 'Convert the polar point (4, (π) / (2)) to rectangular coordinates.',
        difficulty: 'Easy',
        choices: ['(4, 0)', '(0, 4)', '(−4, 0)', '(0, −4)'],
        answer_text: 'B',
        explanation:
          'x = 4·cos((π) / (2)) = 0; y = 4·sin((π) / (2)) = 4. The rectangular point is (0, 4).',
      },
      {
        question_text: 'What is r for the rectangular point (3, 4)?',
        difficulty: 'Easy',
        choices: ['5', '7', '√7', '3.5'],
        answer_text: 'A',
        explanation: 'r = √(x² + y²) = √(9 + 16) = √25 = 5.',
      },
      {
        question_text: 'Convert the rectangular equation x² + y² = 25 to polar form.',
        difficulty: 'Easy',
        choices: ['r = 5', 'r = 25', 'r² = 5', 'θ = 5'],
        answer_text: 'A',
        explanation:
          'Substitute r² = x² + y²: r² = 25 → r = 5 (taking r > 0). A circle of radius 5.',
      },
      {
        question_text: 'Convert the rectangular point (0, −4) to polar form with r > 0 and 0 ≤ θ < 2π.',
        difficulty: 'Medium',
        choices: ['(4, (π) / (2))', '(4, π)', '(4, (3π) / (2))', '(−4, (π) / (2))'],
        answer_text: 'C',
        explanation:
          'r = √(0 + 16) = 4. The point (0, −4) is on the negative y-axis: θ = (3π) / (2).',
      },
      {
        question_text: 'Convert the rectangular point (−3, 3) to polar form with r > 0 and 0 ≤ θ < 2π.',
        difficulty: 'Medium',
        choices: ['(3√2, (π) / (4))', '(3√2, (3π) / (4))', '(3√2, (5π) / (4))', '(3√2, (7π) / (4))'],
        answer_text: 'B',
        explanation:
          'r = √(9+9) = 3√2. arctan(3/−3) = arctan(−1) = −(π) / (4). Point is in Q II (x<0, y>0), so θ = −(π) / (4) + π = (3π) / (4).',
      },
      {
        question_text: 'Which polar coordinate pair represents the same point as (2, (π) / (6))?',
        difficulty: 'Medium',
        choices: [
          '(2, (π) / (6) + π)',
          '(−2, (π) / (6) + π)',
          '(2, (π) / (6) + (π) / (2))',
          '(−2, (π) / (6))',
        ],
        answer_text: 'B',
        explanation:
          '(−r, θ + π) names the same point as (r, θ). So (−2, (π) / (6) + π) = (−2, (7π) / (6)) represents the same point as (2, (π) / (6)).',
      },
      {
        question_text: 'Convert the polar equation r = 6 sin θ to rectangular form. What shape is it?',
        difficulty: 'Medium',
        choices: [
          'A circle centered at (0, 3) with radius 3',
          'A circle centered at (3, 0) with radius 3',
          'A line with slope 6',
          'A parabola opening upward',
        ],
        answer_text: 'A',
        explanation:
          'Multiply by r: r² = 6r sinθ. Substitute: x² + y² = 6y → x² + y² − 6y = 0 → x² + (y−3)² = 9. Circle centered at (0,3), radius 3.',
      },
      {
        question_text: 'Convert the polar equation r = 4 cosθ to rectangular form.',
        difficulty: 'Hard',
        choices: [
          'x² + y² = 4',
          '(x − 2)² + y² = 4',
          'x² + (y − 2)² = 4',
          '(x + 2)² + y² = 4',
        ],
        answer_text: 'B',
        explanation:
          'Multiply by r: r² = 4r cosθ. Substitute: x² + y² = 4x → (x−2)² + y² = 4. A circle centered at (2, 0) with radius 2.',
      },
      {
        question_text: 'Convert x² + y² = 6x + 8y to polar form.',
        difficulty: 'Hard',
        choices: [
          'r = 6cosθ + 8sinθ',
          'r = 6sinθ + 8cosθ',
          'r² = 6cosθ + 8sinθ',
          'r = √(6cosθ + 8sinθ)',
        ],
        answer_text: 'A',
        explanation:
          'Substitute r² for x²+y², r cosθ for x, r sinθ for y: r² = 6r cosθ + 8r sinθ. Divide by r: r = 6cosθ + 8sinθ.',
      },
    ],
  },

  '3.14': {
    essentialQuestion:
      "What kinds of shapes can you make when the distance from the center depends on the direction you're facing?",
    apBoardNote:
      "CED 3.14A (Polar Function Graphs). This topic appears in the calculator-active Section II of the AP Exam — students may use graphing technology to plot, but must still identify curve types, petal counts, and key features analytically. Full credit on FR requires: (1) identifying the curve type (rose/limaçon/circle) with justification based on the equation form, (2) stating petal count with reasoning (n petals if n odd, 2n petals if n even), (3) finding symmetry axes by applying the symmetry tests. The most common trap: even-n rose curves — r = cos(2θ) gives 4 petals, not 2. Students who apply 'n petals always' lose this point consistently.",
    teacherNote:
      "Students need polar coordinates from 3.13. The biggest misconception: even n in r = a cos(nθ) produces n petals, not 2n. Build this up empirically — make students build a table of (θ, r) values and plot them for r = cos(2θ) before declaring the pattern. A second issue: limaçon shape classification requires comparing |a| and |b| in r = a + b cosθ. Students who memorize only 'cardioid when a = b' without understanding the a/b ratio framework will miss the inner-loop and dimpled cases. Connect to 3.13 (polar coordinates are the foundation), and any calculus course where polar area and arc length appear. Teaching: discovery approach — plot several curves, let students notice the patterns, then formalize.",
    studentVoice:
      "In polar graphing, the equation tells you how far from the center you are as a function of the angle. r = 3 means 'always 3 units away' — that is just a circle. r = cos(2θ) is more interesting: as θ sweeps around, r sometimes equals 1 (petal tip), sometimes 0 (passes through origin), sometimes negative (you go the opposite direction). The result is a 4-petal rose even though n = 2. That is the key rule: for r = a cos(nθ), you get n petals when n is ODD and 2n petals when n is EVEN. Limaçons r = a + b cosθ: if |a/b| < 1, inner loop. If |a/b| = 1, cardioid (heart shape). If 1 < |a/b| < 2, dimpled. If |a/b| ≥ 2, convex oval.",
    narration: [
      "Polar graphs are what you get when the distance from a center point varies depending on the direction you face. Instead of plotting y as a function of x, you plot r as a function of θ — so as the angle θ sweeps around from 0 to 2π, the distance r from the origin traces a curve. Simple polar equations produce surprisingly beautiful shapes: circles, heart shapes, flowers with multiple petals.",
      "The simplest polar curves are circles. r = a is a circle of radius |a| centered at the pole. r = a cos θ and r = a sin θ are also circles, but they pass through the pole (origin). To see why r = a cos θ is a circle, multiply both sides by r: r² = ar cos θ, then substitute to get x² + y² = ax — a circle with center at (a/2, 0) and radius |a|/2.",
      "Rose curves have the form r = a cos(nθ) or r = a sin(nθ). These produce petal shapes. The petal count rule is the most important fact for the AP: if n is odd, you get n petals; if n is even, you get 2n petals. The reason for the doubled count with even n is that negative r values trace a second set of petals that fill in between the ones traced with positive r. For r = a cos(3θ), you get 3 petals. For r = a cos(2θ), you get 4 petals, not 2. The petal tips occur where |cos(nθ)| = 1, and the curve passes through the pole wherever cos(nθ) = 0.",
      "Limaçons have the form r = a + b cos θ or r = a + b sin θ. The shape depends on the ratio |a/b|. When |a| = |b|, you get a cardioid — a heart shape that passes through the pole, with maximum radius 2|a| and minimum radius 0. When |a| < |b|, the limaçon has an inner loop — it actually crosses itself and surrounds the pole twice. When |a| > |b| but |a| < 2|b|, it is dimpled. When |a| ≥ 2|b|, it is a convex oval with no dimple. Classifying a limaçon is a two-step process: compute |a/b| and apply these thresholds.",
      "Symmetry tests help you graph efficiently. A polar curve is symmetric about the polar axis (x-axis) if replacing (r, θ) with (r, −θ) gives an equivalent equation. It is symmetric about the line θ = (π) / (2) (y-axis) if replacing (r, θ) with (r, π − θ) gives an equivalent equation. It is symmetric about the pole (origin) if replacing r with −r gives an equivalent equation. Rose curves r = a cos(nθ) are symmetric about the polar axis. Rose curves r = a sin(nθ) are symmetric about θ = (π) / (2). These symmetries cut your graphing work in half.",
      "To sketch any polar curve without technology: build a θ-to-r table. Choose key values of θ (the multiples of (π) / (4) or (π) / (6) depending on n), compute r, and plot the resulting (r, θ) polar points. Connect them smoothly. For a rose curve r = cos(2θ), the petal tips are at θ = 0, (π) / (2), π, (3π) / (2) (where cos(2θ) = ±1), and the curve passes through the pole at θ = (π) / (4), (3π) / (4), (5π) / (4), (7π) / (4) (where cos(2θ) = 0). Four petal tips, four pole-crossings, and you can sketch the 4-petal rose reliably.",
    ],
    graphType: 'polar-rose',
    keyFormula:
      'Rose r = a cos(nθ): n petals if n odd, 2n petals if n even; Limaçon r = a + b cosθ: cardioid if |a|=|b|, inner loop if |a|<|b|',
    concepts: [
      "r = a (constant): circle of radius |a| centered at the pole.",
      "Rose curves r = a cos(nθ) or r = a sin(nθ): n petals if n is odd; 2n petals if n is even. Each petal has length |a|.",
      "Limaçons r = a + b cosθ: cardioid when |a|=|b|; inner loop when |a|<|b|; dimpled when |b|<|a|<2|b|; convex when |a|≥2|b|.",
      "Polar coordinates are not unique: (r, θ) = (r, θ + 2πk) = (−r, θ + π). When r < 0, you plot in the opposite direction.",
      "Symmetry: r = a cos(nθ) is symmetric about the polar axis; r = a sin(nθ) is symmetric about θ = (π) / (2).",
    ],
    keyTerms: [
      {
        term: 'Rose curve',
        definition:
          'A polar curve r = a cos(nθ) or r = a sin(nθ). Produces n petals if n is odd, 2n petals if n is even, each of length |a|.',
      },
      {
        term: 'Limaçon',
        definition:
          'A polar curve r = a + b cosθ (or sinθ). Shape — inner loop, cardioid, dimpled, or convex — depends on the ratio |a/b|.',
      },
      {
        term: 'Cardioid',
        definition:
          "A limaçon where |a| = |b|. Heart-shaped, passes through the pole, maximum r = 2|a|. Example: r = 2(1 + cosθ).",
      },
      {
        term: 'Polar symmetry',
        definition:
          'A curve symmetric about the polar axis if (r, −θ) satisfies the same equation. Symmetric about θ = (π) / (2) if (r, π − θ) satisfies the equation.',
      },
    ],
    table: {
      caption: 'Polar curve types and identifying features',
      headers: ['Equation form', 'Curve type', 'Key feature'],
      rows: [
        ['r = a', 'Circle', 'Radius |a|, centered at pole'],
        ['r = a cosθ or r = a sinθ', 'Circle', 'Passes through pole, diameter |a|'],
        ['r = a cos(nθ), n odd', 'Rose', 'n petals, each length |a|'],
        ['r = a cos(nθ), n even', 'Rose', '2n petals, each length |a|'],
        ['r = a + b cosθ, |a|=|b|', 'Cardioid', 'Passes through pole, heart shape'],
        ['r = a + b cosθ, |a|<|b|', 'Limaçon with inner loop', 'Crosses itself, inner loop at pole'],
        ['r = a + b cosθ, |b|<|a|<2|b|', 'Dimpled limaçon', 'Dimpled but no inner loop'],
        ['r = a + b cosθ, |a|≥2|b|', 'Convex limaçon', 'Oval with no dimple'],
      ],
    },
    workedExample: {
      problem: 'Identify the curve r = 3 + 3 sinθ, find its maximum r, and classify it.',
      steps: [
        'This is a limaçon r = a + b sinθ with a = 3, b = 3.',
        'Since |a| = |b| = 3, the ratio |a/b| = 1 → this is a cardioid.',
        'Maximum r: sin θ = 1 at θ = (π) / (2) → r_max = 3 + 3 = 6.',
        'The curve passes through the pole: set r = 0 → 3 + 3sinθ = 0 → sinθ = −1 → θ = (3π) / (2).',
      ],
      answer: 'Cardioid; maximum r = 6 at θ = (π) / (2); passes through pole at θ = (3π) / (2).',
    },
    workedExample2: {
      problem: 'How many petals does r = 2 cos(4θ) have? Find the angle of one petal tip.',
      steps: [
        'The form is r = a cos(nθ) with n = 4 (even). Number of petals = 2n = 2·4 = 8.',
        'Petal tips occur where cos(4θ) = 1, i.e., 4θ = 0 → θ = 0. So one petal tip is at (2, 0).',
        'All petal tips: 4θ = 0, 2π, 4π, 6π → θ = 0, (π) / (2), π, (3π) / (2) (4 tips pointing right/up/left/down).',
        'Four more tips at θ = (π) / (4), (3π) / (4), (5π) / (4), (7π) / (4) (where cos(4θ) = 1 again after the negative values trace the other 4 petals).',
      ],
      answer: '8 petals; one petal tip at (2, 0), others at multiples of (π) / (4).',
    },
    commonMistakes: [
      "Counting petals as n for even n. r = cos(2θ) has 4 petals (2n = 4), NOT 2. Even n always doubles the petal count because negative r-values trace additional petals.",
      "Misclassifying limaçons by only checking if a = b. You need to compare |a/b|: < 1 for inner loop, = 1 for cardioid, between 1 and 2 for dimpled, ≥ 2 for convex.",
      "Computing arctan without a quadrant check when converting to polar. arctan returns values in (−(π) / (2), (π) / (2)) only — Q II and Q III points need π added.",
    ],
    tip: "On the AP Exam, rose curve questions usually ask: how many petals? Answer in two steps: identify n, then apply the odd/even rule. For limaçons: compute |a/b| and classify. Two questions, two pieces of analysis — both mechanical once you know the rules.",
    questions: [
      {
        question_text: 'How many petals does the rose curve r = 2 cos(3θ) have?',
        difficulty: 'Easy',
        choices: ['2', '3', '6', '9'],
        answer_text: 'B',
        explanation:
          'n = 3 is odd, so the rose has n = 3 petals. If n were even, it would have 2n petals.',
      },
      {
        question_text: 'How many petals does the rose curve r = 5 sin(4θ) have?',
        difficulty: 'Easy',
        choices: ['4', '5', '8', '10'],
        answer_text: 'C',
        explanation:
          'n = 4 is even, so the rose has 2n = 2·4 = 8 petals. Even values of n always double the petal count.',
      },
      {
        question_text: 'The polar equation r = 4 represents which curve?',
        difficulty: 'Easy',
        choices: [
          'A line through the origin',
          'A circle of radius 4 centered at the pole',
          'A parabola',
          'A rose with 4 petals',
        ],
        answer_text: 'B',
        explanation:
          'r = 4 means every point is exactly 4 units from the origin regardless of θ — a circle of radius 4 centered at the pole.',
      },
      {
        question_text: 'The curve r = 2 + 2 cosθ is best described as:',
        difficulty: 'Easy',
        choices: [
          'A rose with 2 petals',
          'A cardioid',
          'A limaçon with an inner loop',
          'A circle',
        ],
        answer_text: 'B',
        explanation:
          'r = 2 + 2cosθ has |a| = |b| = 2, so |a/b| = 1. That makes it a cardioid — the heart-shaped limaçon.',
      },
      {
        question_text: 'What is the maximum value of r for r = 3 + 3 sinθ?',
        difficulty: 'Medium',
        choices: ['3', '6', '9', '0'],
        answer_text: 'B',
        explanation:
          'Maximum when sinθ = 1: r = 3 + 3(1) = 6.',
      },
      {
        question_text: 'Which polar coordinate pair represents the same point as (2, (π) / (6))?',
        difficulty: 'Medium',
        choices: [
          '(2, (π) / (6) + π)',
          '(−2, (π) / (6) + π)',
          '(2, (π) / (6) + (π) / (2))',
          '(−2, (π) / (6))',
        ],
        answer_text: 'B',
        explanation:
          '(−r, θ + π) names the same point as (r, θ). So (−2, (π) / (6) + π) = (−2, (7π) / (6)) represents the same point as (2, (π) / (6)).',
      },
      {
        question_text: 'The curve r = 1 + 3 sinθ is a limaçon. Which feature does it have?',
        difficulty: 'Medium',
        choices: [
          'It is a cardioid (no inner loop)',
          'It has an inner loop because |a| < |b|',
          'It is convex because |a| ≥ 2|b|',
          'It is dimpled but has no inner loop',
        ],
        answer_text: 'B',
        explanation:
          'Here |a| = 1 and |b| = 3. Since |a/b| = (1) / (3) < 1, the limaçon has an inner loop.',
      },
      {
        question_text: 'At what angle θ ∈ [0, 2π) does r = 2 cos(2θ) have a petal tip on the positive x-axis?',
        difficulty: 'Medium',
        choices: ['θ = 0', 'θ = (π) / (4)', 'θ = (π) / (2)', 'θ = π'],
        answer_text: 'A',
        explanation:
          'Petal tips occur where r is maximum, i.e., where cos(2θ) = 1. At θ = 0: cos(0) = 1, so r = 2 — the petal tip is at (2, 0) on the positive x-axis.',
      },
      {
        question_text: 'Convert the polar equation r = 4 cosθ to rectangular form.',
        difficulty: 'Hard',
        choices: [
          'x² + y² = 4',
          '(x − 2)² + y² = 4',
          'x² + (y − 2)² = 4',
          '(x + 2)² + y² = 4',
        ],
        answer_text: 'B',
        explanation:
          'Multiply both sides by r: r² = 4r cosθ. Substitute r² = x²+y² and r cosθ = x: x²+y² = 4x → (x−2)² + y² = 4. A circle centered at (2,0) with radius 2.',
      },
      {
        question_text: 'The limaçon r = 5 + 2 cosθ is best classified as:',
        difficulty: 'Hard',
        choices: [
          'Cardioid',
          'Limaçon with inner loop',
          'Dimpled limaçon',
          'Convex limaçon',
        ],
        answer_text: 'D',
        explanation:
          '|a| = 5, |b| = 2. The ratio |a/b| = (5) / (2) = 2.5 ≥ 2, so the limaçon is convex — a smooth oval with no dimple or inner loop.',
      },
    ],
  },

  '3.15': {
    essentialQuestion:
      "How does the distance from the center change as you sweep around a polar curve — and what does that tell you about the curve's shape?",
    apBoardNote:
      "CED 3.15A (Rates of Change in Polar Functions). Appears in Section II (calculator-active FRQ). Students compute average rate of change of r with respect to θ over an interval, and interpret what that rate means about how the curve is changing. Full credit requires: (1) applying the AROC formula Δr/Δθ = (r(θ₂) − r(θ₁))/(θ₂ − θ₁), (2) interpreting the sign and magnitude in context (positive → r increasing, meaning curve moving away from pole), (3) connecting rate to graph behavior (where is r at a maximum? where is it zero?). Students who confuse dy/dx (slope of tangent line) with dr/dθ (rate of change of distance) lose full credit.",
    teacherNote:
      "Students need polar function graphs from 3.14 and average rate of change from 1.2. The key conceptual distinction: dr/dθ measures how r changes as θ increases, NOT the slope of the curve in the xy-plane. On a rose curve r = cos(2θ), where dr/dθ > 0, r is increasing — the curve moves away from the pole. Where dr/dθ < 0, the curve moves toward the pole. Where dr/dθ = 0 (extrema of r), the curve reaches a petal tip or returns to the pole. Connect this back to 1.2 (AROC = slope of secant) and 3.14 (polar graph shapes). A common mistake: computing dr/dθ for a rose and interpreting a positive AROC as 'the curve is going up' — it actually means 'the curve is moving farther from the center.'",
    studentVoice:
      "The rate of change in polar is all about r — how the distance from the center changes as the angle θ sweeps around. If dr/dθ > 0, r is getting bigger, so you're moving away from the pole (outward). If dr/dθ < 0, r is shrinking, so you're spiraling toward the pole (inward). The average rate of change from θ₁ to θ₂ is just (r(θ₂) − r(θ₁))/(θ₂ − θ₁) — same formula as AROC from Unit 1, just applied to polar variables. The tricky part: this is NOT the slope of the curve in the xy-plane. It's purely how the radius changes. Think of it as 'am I getting closer to or farther from the center as I rotate?'",
    narration: [
      "In polar coordinates, a function r = f(θ) tells you the distance from the pole (origin) as a function of the angle. As θ sweeps from 0 to 2π, the distance r varies, tracing out the polar curve. The rate of change of r with respect to θ answers a specific question: how fast is the distance from the pole changing as the angle increases?",
      "The average rate of change of r over a θ-interval is computed using the same AROC formula you learned in Topic 1.2, but applied to polar variables: AROC = (r(θ₂) − r(θ₁))/(θ₂ − θ₁). A positive AROC means r is increasing on average — the curve is moving away from the pole. A negative AROC means r is decreasing on average — the curve is moving toward the pole.",
      "Consider the rose curve r = cos(2θ). At θ = 0, r = cos(0) = 1 — the curve is at its maximum distance from the pole, at the tip of one petal. As θ increases from 0 to (π) / (4), r = cos(2θ) decreases from 1 to 0 — the curve returns to the pole. So on the interval [0, (π) / (4)], the AROC = (0 − 1)/((π) / (4) − 0) = −4/π. The negative rate confirms that r is decreasing: you are moving toward the pole.",
      "Critical distinction: dr/dθ is NOT the slope of the polar curve in the xy-plane. Slope in the xy-plane (dy/dx) would require the chain rule from calculus, which is beyond AP Precalculus. What dr/dθ measures is purely the radial distance — how close or far you are from the pole. Positive dr/dθ = moving outward; negative dr/dθ = moving inward; zero = momentarily neither (at a local extremum of r).",
      "The local maxima and minima of r are the key features to analyze. Where r achieves its maximum value, the curve is at the tip of a petal (for a rose) or at its outermost point (for a limaçon). Where r = 0, the curve passes through the pole. Between these critical values, the sign of the average rate of change tells you whether you are on the outward or inward half of a petal.",
      "On the AP exam, a typical problem gives you a polar function like r = 3 + 2cos(θ) (a limaçon) and asks: over the interval [0, (π) / (2)], is the distance from the pole increasing or decreasing? You compute r(0) = 5 and r((π) / (2)) = 3. AROC = (3 − 5)/((π) / (2)) = −4/π < 0. The distance is decreasing. A follow-up might ask where r achieves its maximum value — that occurs where cos(θ) = 1, i.e., θ = 0, giving r = 5.",
    ],
    keyFormula:
      'AROC of r over [θ₁, θ₂] = (r(θ₂) − r(θ₁))/(θ₂ − θ₁); positive → r increasing (moving away from pole); negative → r decreasing (moving toward pole)',
    concepts: [
      "Average rate of change of r: AROC = (r(θ₂) − r(θ₁))/(θ₂ − θ₁). Same formula as AROC for any function, applied to polar variables.",
      "Positive AROC → r increasing → curve moving away from the pole (outward).",
      "Negative AROC → r decreasing → curve moving toward the pole (inward).",
      "At a local maximum of r: the curve is at its farthest point from the pole (petal tip, outermost point).",
      "Where r = 0: the curve passes through the pole.",
      "dr/dθ measures radial change only — it is NOT the slope of the tangent line to the polar curve in the xy-plane.",
    ],
    keyTerms: [
      {
        term: 'Average rate of change of r',
        definition:
          'AROC = (r(θ₂) − r(θ₁))/(θ₂ − θ₁). Measures how much the distance from the pole changes per unit of angle over the interval [θ₁, θ₂].',
      },
      {
        term: 'Radial distance increasing',
        definition:
          'When dr/dθ > 0 (positive AROC), r is growing — the curve is moving away from the pole as θ increases.',
      },
      {
        term: 'Radial distance decreasing',
        definition:
          'When dr/dθ < 0 (negative AROC), r is shrinking — the curve is moving toward the pole as θ increases.',
      },
      {
        term: 'Maximum radial distance',
        definition:
          'The θ value where r achieves its greatest value; corresponds to the tip of a rose petal or the outermost point of a limaçon.',
      },
    ],
    table: {
      caption: 'Average rate of change of r for r = cos(2θ) on key intervals',
      headers: ['Interval [θ₁, θ₂]', 'r(θ₁)', 'r(θ₂)', 'AROC = Δr/Δθ', 'Interpretation'],
      rows: [
        ['[0, (π) / (4)]', '1', '0', '−4/π ≈ −1.27', 'r decreasing → moving toward pole'],
        ['[(π) / (4), (π) / (2)]', '0', '−1', '−4/π ≈ −1.27', 'r becoming more negative (second petal)'],
        ['[(π) / (2), (3π) / (4)]', '−1', '0', '4/π ≈ 1.27', 'r increasing (toward 0, second petal tip)'],
        ['[(3π) / (4), π]', '0', '1', '4/π ≈ 1.27', 'r increasing → moving away from pole'],
      ],
    },
    workedExample: {
      problem: "For the polar function r = 3 + 2cos(θ), a limaçon: (a) Find the average rate of change of r over [0, π]. (b) Is r increasing or decreasing on this interval? (c) At what θ value is r at its maximum?",
      steps: [
        'Compute r(0): r(0) = 3 + 2cos(0) = 3 + 2(1) = 5.',
        'Compute r(π): r(π) = 3 + 2cos(π) = 3 + 2(−1) = 1.',
        'AROC = (r(π) − r(0))/(π − 0) = (1 − 5)/π = −4/π ≈ −1.27.',
        'Since AROC < 0, r is decreasing on average over [0, π] — the curve moves closer to the pole.',
        'Maximum r occurs where cos(θ) = 1 (its maximum), so θ = 0. Maximum r = 5.',
      ],
      answer: 'AROC = −4/π ≈ −1.27 (r is decreasing). Maximum r = 5 at θ = 0.',
    },
    workedExample2: {
      problem: "For r = 2sin(3θ), a rose curve: on the interval [0, (π) / (6)], is r increasing or decreasing? What is the AROC of r?",
      steps: [
        'Compute r(0): r(0) = 2sin(0) = 0.',
        'Compute r((π) / (6)): r((π) / (6)) = 2sin(3·(π) / (6)) = 2sin((π) / (2)) = 2(1) = 2.',
        'AROC = (2 − 0)/((π) / (6) − 0) = 2/((π) / (6)) = 12/π ≈ 3.82.',
        'Since AROC > 0, r is increasing — the curve moves away from the pole, tracing out the first petal.',
        'At θ = (π) / (6), r reaches its maximum of 2 (the petal tip).',
      ],
      answer: 'AROC = 12/π ≈ 3.82 (r is increasing). The curve traces from the pole to the first petal tip on [0, (π) / (6)].',
    },
    commonMistakes: [
      "Confusing dr/dθ with the slope of the curve in the xy-plane (dy/dx). The polar rate of change measures how r changes, not the tangent line direction.",
      "Forgetting that r can be negative in polar curves. When r < 0, the point is plotted in the direction opposite to θ.",
      "Forgetting to check which interval gives maximum r. Maximum r occurs where the derivative of the generating trig function is zero and positive, not just at θ = 0.",
    ],
    tip: "On the AP exam, a positive AROC of r means the curve is sweeping outward (like a petal opening), and a negative AROC means it is sweeping inward (petal closing). Use the r values at the endpoints to quickly determine the sign before computing the full fraction.",
    questions: [
      {
        question_text: 'For r = 4cos(θ), what is the average rate of change of r over the interval [0, (π) / (2)]?',
        difficulty: 'Easy',
        choices: ['−8/π', '8/π', '−4/π', '4/π'],
        answer_text: 'A',
        explanation: 'r(0) = 4cos(0) = 4. r((π) / (2)) = 4cos((π) / (2)) = 0. AROC = (0 − 4)/((π) / (2)) = −8/π. Negative: r is decreasing.',
      },
      {
        question_text: 'For r = 1 + sin(θ) (a cardioid), over [0, (π) / (2)], is the radial distance from the pole increasing or decreasing?',
        difficulty: 'Easy',
        choices: ['Increasing', 'Decreasing', 'Constant', 'Cannot be determined'],
        answer_text: 'A',
        explanation: 'r(0) = 1 + sin(0) = 1. r((π) / (2)) = 1 + sin((π) / (2)) = 2. Since r((π) / (2)) > r(0), AROC > 0 — r is increasing.',
      },
      {
        question_text: 'For r = 3sin(2θ), at what θ value in [0, (π) / (2)] does r achieve its maximum?',
        difficulty: 'Medium',
        choices: ['θ = 0', 'θ = (π) / (4)', 'θ = (π) / (2)', 'θ = (π) / (3)'],
        answer_text: 'B',
        explanation: 'sin(2θ) is maximized when 2θ = (π) / (2), so θ = (π) / (4). At that point r = 3(1) = 3.',
      },
    ],
  },
}
