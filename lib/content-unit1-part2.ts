import type { LessonContent } from './lesson-content'

export const UNIT1_PART2: Record<string, LessonContent> = {
  "1.6": {
    essentialQuestion:
      "How does the leading term of a polynomial determine what happens to the function's values as x grows without bound?",

    apBoardNote:
      "End behavior is a high-frequency topic on the AP Precalculus exam. Students must write limit notation correctly — specifying both direction (x → +∞ or x → −∞) and value. A response that writes lim f(x) = ∞ without a direction earns no credit. MCQ stems often show a table of values or a partially drawn graph and ask which polynomial could match; the leading term is the determining factor.",

    teacherNote:
      "I tell students to ask two questions: 'Is the degree even or odd?' and 'Is the leading coefficient positive or negative?' Those two answers uniquely determine end behavior. I make them practice saying it out loud: 'Even positive means both ends go up.' Then we move to limit notation. The biggest pitfall is forgetting that limit notation requires specifying the direction of x. Do a quick check: have students cover the middle of a graph and describe only what happens at the far left and far right.",

    studentVoice:
      "I used to try to trace the whole graph in my head, but then I realized — it doesn't matter what the function does in the middle. The end behavior is just about one thing: the leading term. Once I saw that x⁵ and 3x⁵ − 100x⁴ + 2 all do the same thing as x → ±∞, everything clicked.",

    narration: [
      "Imagine driving on a highway that stretches infinitely in both directions. No matter how many on-ramps, rest stops, or hills you pass along the way, what really matters if you drive far enough is: are you heading uphill or downhill? Polynomials work the same way. As x grows very large (positive or negative), all the middle terms become insignificant compared to the leading term, which completely dominates the function's behavior.",
      "To see why, consider f(x) = 4x³ − 50x² + 300x − 1000. At x = 1000, the leading term 4x³ = 4,000,000,000, while 50x² = 50,000,000 — a full 80 times smaller. The 300x and 1000 terms are even more negligible. This is why mathematicians say: for large |x|, a polynomial behaves like its leading term. Everything else is noise.",
      "The two key facts about the leading term are its degree and its sign. Degree tells us the shape category: even-degree polynomials (degree 2, 4, 6, …) have both ends going in the same direction, just like a parabola. Odd-degree polynomials (degree 1, 3, 5, …) have ends going in opposite directions, just like a line or a cubic. The sign of the leading coefficient tells us which direction: positive means the right end rises (+∞), negative means the right end falls (−∞).",
      "Put these together to get four rules. Even degree, positive leading coefficient: both ends rise to +∞. Even degree, negative leading coefficient: both ends fall to −∞. Odd degree, positive leading coefficient: left end falls to −∞, right end rises to +∞ (the classic upward-sloping S-shape). Odd degree, negative leading coefficient: left end rises to +∞, right end falls to −∞. These four cases cover every polynomial.",
      "On the AP exam, you must express end behavior using limit notation. The notation lim(x→+∞) f(x) = +∞ means 'as x increases without bound, f(x) increases without bound.' The notation lim(x→−∞) f(x) = −∞ means 'as x decreases without bound, f(x) decreases without bound.' You always write two limit statements — one for x → +∞ and one for x → −∞ — because end behavior has two ends.",
      "A common source of exam errors is omitting the direction. Writing lim f(x) = +∞ with no arrow is incomplete and mathematically ambiguous. Think of it as giving someone directions: saying 'the store is 5 miles' is useless without also saying which way. Always include x → +∞ or x → −∞.",
      "When matching graphs to equations on multiple-choice questions, use end behavior as your first filter. If the graph shows both ends going up, you immediately know the degree is even and the leading coefficient is positive — eliminate every answer that doesn't fit. Then use zeros and multiplicity to narrow further. End behavior alone often eliminates three of four choices.",
    ],

    priorKnowledge: [
      "Understanding what a polynomial function is and identifying its degree",
      "Evaluating polynomial expressions for large values of x",
      "Familiarity with limit notation as a way to describe function behavior",
      "Recognizing that higher-degree terms grow faster than lower-degree terms",
    ],

    connections: [
      "Limit notation introduced here is the same notation used throughout calculus for derivatives and integrals",
      "End behavior of rational functions (Lesson 1.7) is determined by comparing polynomial degrees — so this lesson is the foundation",
      "Graphing polynomial functions requires end behavior as the first step before plotting zeros",
      "Multiplicity of zeros (earlier in Unit 1) affects the middle of the graph but NOT the end behavior",
    ],

    concepts: [
      "The leading term of a polynomial dominates for large |x|, making all other terms negligible",
      "Even-degree polynomials: both ends go the same direction (up if positive, down if negative leading coefficient)",
      "Odd-degree polynomials: ends go opposite directions (right up if positive, right down if negative leading coefficient)",
      "End behavior is expressed with two limit statements: one for x → +∞ and one for x → −∞",
      "The direction of x in limit notation (x → +∞ vs. x → −∞) is required — omitting it is mathematically incomplete",
    ],

    keyFormula:
      "For f(x) = aₙxⁿ + lower-degree terms: end behavior matches y = aₙxⁿ. If n is even and aₙ > 0: lim(x→±∞) f(x) = +∞. If n is even and aₙ < 0: lim(x→±∞) f(x) = −∞. If n is odd and aₙ > 0: lim(x→+∞) f(x) = +∞ and lim(x→−∞) f(x) = −∞. If n is odd and aₙ < 0: lim(x→+∞) f(x) = −∞ and lim(x→−∞) f(x) = +∞.",

    keyTerms: [
      {
        term: "End behavior",
        definition:
          "The behavior of a function's output values as the input x increases or decreases without bound; described using limit notation.",
      },
      {
        term: "Leading term",
        definition:
          "The term in a polynomial with the highest degree; determines end behavior because it grows faster than all other terms.",
      },
      {
        term: "Leading coefficient",
        definition:
          "The coefficient of the leading term; its sign determines whether the function rises or falls at each end.",
      },
      {
        term: "Limit notation",
        definition:
          "The notation lim(x→c) f(x) = L, meaning f(x) approaches L as x approaches c; for end behavior, c is +∞ or −∞.",
      },
      {
        term: "Even-degree polynomial",
        definition:
          "A polynomial whose highest-degree term has an even exponent; both ends of the graph point in the same direction.",
      },
      {
        term: "Odd-degree polynomial",
        definition:
          "A polynomial whose highest-degree term has an odd exponent; the two ends of the graph point in opposite directions.",
      },
    ],

    workedExample: {
      problem:
        "Determine the end behavior of f(x) = −2x⁴ + 7x³ − x + 5. Write your answer using limit notation.",
      steps: [
        "Identify the leading term: the term with the highest degree is −2x⁴.",
        "Note the degree: 4, which is even. Even degree means both ends go in the same direction.",
        "Note the leading coefficient: −2, which is negative. Negative leading coefficient means both ends fall.",
        "Conclusion: as x → +∞, f(x) → −∞, and as x → −∞, f(x) → −∞.",
        "Write in limit notation: lim(x→+∞) f(x) = −∞ and lim(x→−∞) f(x) = −∞.",
      ],
      answer:
        "lim(x→+∞) f(x) = −∞ and lim(x→−∞) f(x) = −∞. Both ends of the graph fall downward because the degree is even and the leading coefficient is negative.",
    },

    workedExample2: {
      problem:
        "A polynomial function g has the following properties: g has exactly three real zeros, its graph crosses the x-axis at all three zeros, and lim(x→+∞) g(x) = +∞. What is the minimum possible degree of g, and what can you conclude about its leading coefficient?",
      steps: [
        "Since g crosses (not touches) the x-axis at all three zeros, each zero has odd multiplicity.",
        "The minimum odd multiplicity is 1, so the minimum possible degree from the zeros alone is 1 + 1 + 1 = 3.",
        "Check if degree 3 is consistent with the given end behavior: lim(x→+∞) g(x) = +∞.",
        "For an odd-degree polynomial, lim(x→+∞) g(x) = +∞ requires a positive leading coefficient.",
        "Degree 3 with a positive leading coefficient gives lim(x→+∞) g(x) = +∞ ✓ and lim(x→−∞) g(x) = −∞.",
        "Could the degree be 4? Degree 4 is even, so both ends go the same direction — but only one end behavior value was specified. Not enough information to rule out degree 4, but minimum is 3.",
        "Minimum degree is 3; leading coefficient must be positive.",
      ],
      answer:
        "The minimum possible degree of g is 3. Its leading coefficient must be positive, because an odd-degree polynomial with a positive leading coefficient satisfies lim(x→+∞) g(x) = +∞.",
    },

    commonMistakes: [
      "Writing lim f(x) = +∞ without specifying the direction of x — always write x → +∞ or x → −∞",
      "Confusing the effect of odd vs. even degree — remember: even means same direction at both ends, odd means opposite directions",
      "Letting a large negative coefficient (like −100) override the effect of an even-degree leading term — the sign alone matters, not the magnitude",
      "Thinking a polynomial with a positive value at x = 0 (y-intercept above zero) must rise on the right — the y-intercept has no bearing on end behavior",
      "Mixing up which end goes where for odd-degree negative polynomials — the right end falls (−∞) and the left end rises (+∞)",
    ],

    tip: "Make a quick 2×2 table in your head: rows are (even, odd), columns are (+, −). Fill in each cell with one word — (up/up), (down/down), (down/up), (up/down). This table covers all four end-behavior cases and takes two seconds to recall on the exam.",

    questions: [
      {
        question_text:
          "A function f is defined by f(x) = 3x⁵ − 8x³ + 2x − 1. Which of the following correctly describes the end behavior of f?",
        difficulty: "Easy",
        choices: [
          "lim(x→+∞) f(x) = +∞ and lim(x→−∞) f(x) = −∞",
          "lim(x→+∞) f(x) = −∞ and lim(x→−∞) f(x) = +∞",
          "lim(x→+∞) f(x) = +∞ and lim(x→−∞) f(x) = +∞",
          "lim(x→+∞) f(x) = −∞ and lim(x→−∞) f(x) = −∞",
        ],
        answer_text:
          "lim(x→+∞) f(x) = +∞ and lim(x→−∞) f(x) = −∞",
        explanation:
          "The leading term is 3x⁵. Degree 5 is odd, so the ends go in opposite directions. Leading coefficient 3 is positive, so the right end rises (+∞) and the left end falls (−∞). This matches choice A.",
      },
      {
        question_text:
          "A function g is defined by g(x) = −x⁴ + 6x² − 3. What is lim(x→+∞) g(x)?",
        difficulty: "Easy",
        choices: ["+∞", "−∞", "0", "3"],
        answer_text: "−∞",
        explanation:
          "The leading term is −x⁴. Degree 4 is even; both ends go the same direction. Leading coefficient −1 is negative, so both ends fall to −∞. Therefore lim(x→+∞) g(x) = −∞.",
      },
      {
        question_text:
          "Which of the following polynomials has end behavior lim(x→+∞) f(x) = +∞ and lim(x→−∞) f(x) = +∞?",
        difficulty: "Easy",
        choices: [
          "f(x) = 2x³ − x + 1",
          "f(x) = −3x² + 5",
          "f(x) = 4x⁴ − x³",
          "f(x) = −x⁵ + 2x",
        ],
        answer_text: "f(x) = 4x⁴ − x³",
        explanation:
          "End behavior with both ends going to +∞ requires an even degree and a positive leading coefficient. f(x) = 4x⁴ − x³ has degree 4 (even) and leading coefficient 4 (positive). The other options: 2x³ is odd-degree; −3x² is even but negative leading coefficient (both ends −∞); −x⁵ is odd-degree.",
      },
      {
        question_text:
          "A function h is defined by h(x) = −5x⁷ + 12x⁵ − 3x + 9. What is lim(x→−∞) h(x)?",
        difficulty: "Easy",
        choices: ["+∞", "−∞", "9", "0"],
        answer_text: "+∞",
        explanation:
          "Leading term: −5x⁷. Degree 7 is odd (opposite ends). Leading coefficient −5 is negative, meaning the right end falls (−∞) and the left end rises (+∞). So lim(x→−∞) h(x) = +∞.",
      },
      {
        question_text:
          "A function p is defined by p(x) = 6x⁶ − 100x⁵ + 500x − 3000. Which statement about the end behavior of p is correct?",
        difficulty: "Medium",
        choices: [
          "lim(x→+∞) p(x) = +∞ and lim(x→−∞) p(x) = +∞",
          "lim(x→+∞) p(x) = −∞ and lim(x→−∞) p(x) = −∞",
          "lim(x→+∞) p(x) = +∞ and lim(x→−∞) p(x) = −∞",
          "lim(x→+∞) p(x) = −∞ and lim(x→−∞) p(x) = +∞",
        ],
        answer_text:
          "lim(x→+∞) p(x) = +∞ and lim(x→−∞) p(x) = +∞",
        explanation:
          "The leading term is 6x⁶. Degree 6 is even, so both ends go the same direction. Leading coefficient 6 is positive, so both ends rise to +∞. The large coefficient on −100x⁵ is irrelevant for end behavior — only the leading term matters.",
      },
      {
        question_text:
          "A polynomial function f has degree 4 and a negative leading coefficient. A polynomial function g has degree 3 and a negative leading coefficient. Which comparison of their end behaviors is correct?",
        difficulty: "Medium",
        choices: [
          "Both f and g have the same end behavior at x → +∞ and x → −∞",
          "f has both ends going to −∞; g has its right end going to −∞ and its left end going to +∞",
          "f has both ends going to +∞; g has its right end going to +∞ and its left end going to −∞",
          "Both f and g have both ends going to −∞",
        ],
        answer_text:
          "f has both ends going to −∞; g has its right end going to −∞ and its left end going to +∞",
        explanation:
          "f: degree 4 (even) + negative leading coeff → both ends −∞. g: degree 3 (odd) + negative leading coeff → right end −∞, left end +∞. This matches choice B.",
      },
      {
        question_text:
          "The graph of a polynomial function f is shown to rise without bound as x → +∞ and fall without bound as x → −∞. The function also has exactly two x-intercepts, both of which the graph crosses (does not touch). Which of the following could be the degree of f?",
        difficulty: "Medium",
        choices: ["2", "3", "4", "6"],
        answer_text: "3",
        explanation:
          "The end behavior (right up, left down) matches an odd-degree polynomial with a positive leading coefficient. The only odd option is 3. Additionally, crossing at both x-intercepts means odd multiplicity, and two zeros each with multiplicity 1 sums to degree 2 — but the function could have an additional factor with no real zero, making degree 3 possible. Even degrees (2, 4, 6) produce same-direction end behavior, which contradicts the given description.",
      },
      {
        question_text:
          "A function q is defined by q(x) = (x − 1)(x + 2)(x − 3)(x + 4). What is lim(x→−∞) q(x)?",
        difficulty: "Medium",
        choices: ["+∞", "−∞", "24", "0"],
        answer_text: "+∞",
        explanation:
          "Expanding, the leading term comes from multiplying the leading terms of each factor: x · x · x · x = x⁴. Degree 4 is even; the leading coefficient is 1 (positive). Even degree, positive leading coefficient → both ends rise to +∞. So lim(x→−∞) q(x) = +∞.",
      },
      {
        question_text:
          "A polynomial function f satisfies lim(x→+∞) f(x) = −∞ and lim(x→−∞) f(x) = −∞. The graph of f has exactly three x-intercepts. Which of the following must be true?",
        difficulty: "Hard",
        choices: [
          "f has even degree and all three zeros have odd multiplicity",
          "f has even degree and the sum of the multiplicities of all zeros is even",
          "f has odd degree and a positive leading coefficient",
          "f has odd degree and the leading coefficient is negative",
        ],
        answer_text:
          "f has even degree and the sum of the multiplicities of all zeros is even",
        explanation:
          "Both ends → −∞ means the degree is even and the leading coefficient is negative. The function has three x-intercepts (three distinct real zeros). The sum of all zero multiplicities must equal the degree, which is even. Three zeros with multiplicities summing to an even number — for example, multiplicities 2, 1, 1 sum to 4 (even degree). Choice A is not necessarily true (some zeros could have even multiplicity). Choice B must be true because the degree is even. Choices C and D describe odd-degree behavior.",
      },
      {
        question_text:
          "A function f is defined by f(x) = −2x(x − 3)²(x + 1)³. Determine lim(x→+∞) f(x) and lim(x→−∞) f(x).",
        difficulty: "Hard",
        choices: [
          "lim(x→+∞) f(x) = −∞ and lim(x→−∞) f(x) = +∞",
          "lim(x→+∞) f(x) = +∞ and lim(x→−∞) f(x) = −∞",
          "lim(x→+∞) f(x) = −∞ and lim(x→−∞) f(x) = −∞",
          "lim(x→+∞) f(x) = +∞ and lim(x→−∞) f(x) = +∞",
        ],
        answer_text:
          "lim(x→+∞) f(x) = −∞ and lim(x→−∞) f(x) = −∞",
        explanation:
          "Find the degree by adding the degree of each factor: 1 (from x) + 2 (from (x−3)²) + 3 (from (x+1)³) = 6. Degree 6 is even, so both ends go in the same direction. Find the leading coefficient by multiplying the leading coefficient of each factor: −2 · 1 · 1 · 1 = −2. Even degree with a negative leading coefficient means both ends fall to −∞. Therefore lim(x→+∞) f(x) = −∞ and lim(x→−∞) f(x) = −∞.",
        },
    ],
  },

  "1.7": {
    essentialQuestion:
      "How does comparing the degrees of the numerator and denominator reveal the end behavior of a rational function?",

    apBoardNote:
      "Rational function end behavior appears on the AP Precalculus exam in both multiple-choice and free-response. Students must know all three cases (n < d, n = d, n > d) and express asymptotes and end behavior in correct notation. The slant asymptote case requires polynomial long division — a skill that appears directly on the exam. A common exam trap: a function CAN cross its horizontal asymptote at finite values of x; the asymptote only describes behavior as x → ±∞.",

    teacherNote:
      "I teach this as a 'degree race.' Ask students: 'Who wins — the top or the bottom?' If the bottom wins (n < d), the function shrinks toward 0. If it's a tie (n = d), the leading coefficients determine the winner. If the top wins by exactly 1 (n = d + 1), you get a slant asymptote. If the top wins by 2 or more, there's no horizontal or slant asymptote. Then spend extra time on the fact that rational functions CAN cross horizontal asymptotes — this surprises students every time and it's a common MCQ distractor.",

    studentVoice:
      "The 'degree race' framing made this so much clearer. Before, I was memorizing three rules. Now I just ask which degree is bigger and the rule follows automatically. And I'll never forget that a rational function can cross its horizontal asymptote — my teacher showed us an example where it crossed right in the middle of the graph, and I was shocked.",

    narration: [
      "A rational function is a ratio of two polynomials: r(x) = p(x)/q(x). To understand what happens as x grows very large (positive or negative), think of it as a competition between the numerator and denominator. Which one grows faster? The answer depends entirely on comparing their degrees.",
      "Case 1: the denominator wins — its degree d is strictly greater than the numerator's degree n (n < d). In this case, the denominator grows much faster, so the ratio p(x)/q(x) shrinks toward zero from above or below. The horizontal asymptote is y = 0, the x-axis. Example: r(x) = (5x + 3)/(x² − 1). Numerator degree 1, denominator degree 2. As x → ±∞, r(x) → 0. Both lim(x→+∞) r(x) = 0 and lim(x→−∞) r(x) = 0.",
      "Case 2: it's a tie — the numerator and denominator have the same degree (n = d). As x → ±∞, the lower-degree terms become negligible, so the ratio approaches the ratio of the leading coefficients. If p(x) = aₙxⁿ + … and q(x) = bₙxⁿ + …, then the horizontal asymptote is y = aₙ/bₙ. Example: r(x) = (3x² − 5x)/(2x² + 1). Both degrees are 2. The horizontal asymptote is y = (3) / (2), and lim(x→±∞) r(x) = (3) / (2).",
      "Case 3: the numerator wins by exactly 1 degree (n = d + 1). In this case, the function doesn't level off — it grows without bound, but in a linear fashion. You find the slant (oblique) asymptote by performing polynomial long division of p(x) ÷ q(x). The quotient (ignoring the remainder) gives the slant asymptote equation y = mx + b. Example: r(x) = (x² + 1)/(x − 2). Long division gives x + 2 with remainder 5, so the slant asymptote is y = x + 2. If the numerator wins by 2 or more degrees, there is no horizontal or slant asymptote — the function's end behavior resembles a polynomial.",
      "A critical conceptual point that trips up many students: a rational function CAN cross its horizontal asymptote. The asymptote describes only the end behavior — what happens as x → ±∞. For finite values of x, the function can (and often does) equal the asymptote value. To find where r(x) equals the horizontal asymptote value L, simply solve the equation r(x) = L and check that x is in the domain.",
      "Express end behavior using limit notation, just as with polynomials. For a horizontal asymptote at y = L, you write lim(x→+∞) r(x) = L and lim(x→−∞) r(x) = L. For a slant asymptote y = mx + b, the end behavior is not a single number — instead, as x → ±∞, the function approaches the line y = mx + b, growing without bound.",
      "When reading an AP exam question, the first thing to do with a rational function is count the degrees of numerator and denominator. This single comparison immediately tells you whether the end behavior is zero, a constant, a line, or a growing polynomial. Make this degree comparison a reflex.",
    ],

    priorKnowledge: [
      "Identifying the degree and leading coefficient of a polynomial",
      "End behavior of polynomial functions (Lesson 1.6)",
      "Performing polynomial long division",
      "Domain restrictions for rational functions (denominator ≠ 0)",
    ],

    connections: [
      "The horizontal asymptote rules build directly on polynomial end behavior from Lesson 1.6",
      "Vertical asymptotes and holes in rational functions are addressed in Lessons 1.9 and 1.10",
      "Slant asymptotes require polynomial long division, linking algebra to function analysis",
      "Limit notation used here is the same notation used in AP Calculus for limits at infinity",
    ],

    concepts: [
      "If degree of numerator < degree of denominator: horizontal asymptote at y = 0",
      "If degree of numerator = degree of denominator: horizontal asymptote at y = (leading coeff of num) / (leading coeff of den)",
      "If degree of numerator = degree of denominator + 1: slant asymptote found via polynomial long division",
      "If degree of numerator exceeds degree of denominator by 2 or more: no horizontal or slant asymptote",
      "A rational function CAN cross its horizontal asymptote at finite x-values — the asymptote only describes end behavior",
    ],

    keyFormula:
      "For r(x) = p(x)/q(x) where n = deg(p) and d = deg(q): n < d → HA: y = 0; n = d → HA: y = aₙ/bₙ (ratio of leading coefficients); n = d + 1 → slant asymptote y = quotient of p(x) ÷ q(x); n > d + 1 → no HA or slant asymptote.",

    keyTerms: [
      {
        term: "Rational function",
        definition:
          "A function of the form r(x) = p(x)/q(x) where p and q are polynomials and q(x) ≠ 0.",
      },
      {
        term: "Horizontal asymptote",
        definition:
          "A horizontal line y = L that a function approaches as x → +∞ or x → −∞; determined by comparing the degrees of numerator and denominator.",
      },
      {
        term: "Slant (oblique) asymptote",
        definition:
          "A non-horizontal line y = mx + b that a rational function approaches as x → ±∞, occurring when the numerator's degree exceeds the denominator's degree by exactly 1.",
      },
      {
        term: "Degree comparison",
        definition:
          "The method of determining a rational function's end behavior by comparing the degrees of the numerator and denominator polynomials.",
      },
      {
        term: "Polynomial long division",
        definition:
          "An algorithm for dividing one polynomial by another, used to find slant asymptotes when the numerator's degree exceeds the denominator's degree by 1.",
      },
      {
        term: "Leading coefficient ratio",
        definition:
          "When numerator and denominator have equal degrees, the horizontal asymptote equals the ratio of their leading coefficients: y = aₙ/bₙ.",
      },
    ],

    workedExample: {
      problem:
        "A function r is defined by r(x) = (3x² − 5x)/(2x² + 1). Determine the end behavior of r and state its horizontal asymptote.",
      steps: [
        "Identify the degree of the numerator: 3x² − 5x has degree 2.",
        "Identify the degree of the denominator: 2x² + 1 has degree 2.",
        "Compare degrees: numerator degree (2) = denominator degree (2). This is the 'tie' case.",
        "Identify the leading coefficient of the numerator: 3.",
        "Identify the leading coefficient of the denominator: 2.",
        "The horizontal asymptote is y = (3) / (2) (ratio of leading coefficients).",
        "Write end behavior in limit notation: lim(x→+∞) r(x) = (3) / (2) and lim(x→−∞) r(x) = (3) / (2).",
      ],
      answer:
        "The horizontal asymptote is y = (3) / (2). lim(x→+∞) r(x) = (3) / (2) and lim(x→−∞) r(x) = (3) / (2).",
    },

    workedExample2: {
      problem:
        "A function r is defined by r(x) = (x² + 1)/(x − 2). Find the slant asymptote of r using polynomial long division, and state the end behavior.",
      steps: [
        "Check degrees: numerator degree = 2, denominator degree = 1. Since 2 = 1 + 1, a slant asymptote exists.",
        "Perform polynomial long division: divide x² + 1 by x − 2.",
        "First step: x² ÷ x = x. Multiply: x(x − 2) = x² − 2x. Subtract: (x² + 1) − (x² − 2x) = 2x + 1.",
        "Second step: 2x ÷ x = 2. Multiply: 2(x − 2) = 2x − 4. Subtract: (2x + 1) − (2x − 4) = 5.",
        "Result: x² + 1 = (x − 2)(x + 2) + 5, so r(x) = x + 2 + 5/(x − 2).",
        "As x → ±∞, the remainder term 5/(x − 2) → 0, so r(x) → x + 2.",
        "The slant asymptote is y = x + 2.",
        "End behavior: as x → +∞, r(x) → +∞ along the line y = x + 2; as x → −∞, r(x) → −∞ along the line y = x + 2.",
      ],
      answer:
        "The slant asymptote is y = x + 2. As x → +∞, r(x) grows without bound above the line y = x + 2; as x → −∞, r(x) decreases without bound below the line y = x + 2.",
    },

    commonMistakes: [
      "Assuming a rational function can never cross its horizontal asymptote — it absolutely can for finite x values",
      "Forgetting to divide by the leading coefficient when degrees are equal — the asymptote is the ratio of leading coefficients, not just the ratio of constant terms",
      "Confusing 'no horizontal asymptote' with 'the function is undefined' — no HA just means the end behavior is unbounded",
      "Not performing long division when n = d + 1, and instead incorrectly saying there is no asymptote",
      "Writing the horizontal asymptote as x = L instead of y = L — horizontal asymptotes are horizontal lines",
    ],

    tip: "Remember the degree race: Bottom wins (n < d) → y = 0. Tie (n = d) → y = leading coeff ratio. Top wins by 1 (n = d+1) → slant asymptote via long division. Top wins by 2+ → no HA or slant. This covers every case.",

    questions: [
      {
        question_text:
          "A function r is defined by r(x) = (4x + 7)/(x² − 3). What is the horizontal asymptote of r?",
        difficulty: "Easy",
        choices: ["y = 4", "y = 0", "y = (7) / (3)", "y = −(7) / (3)"],
        answer_text: "y = 0",
        explanation:
          "Numerator degree = 1, denominator degree = 2. Since 1 < 2, the denominator wins, and the horizontal asymptote is y = 0.",
      },
      {
        question_text:
          "A function r is defined by r(x) = (5x³ − 2x)/(3x³ + x² − 1). What is lim(x→+∞) r(x)?",
        difficulty: "Easy",
        choices: ["0", "(5) / (3)", "−2", "5"],
        answer_text: "(5) / (3)",
        explanation:
          "Numerator degree = 3, denominator degree = 3. Equal degrees, so the horizontal asymptote is y = (leading coeff of num)/(leading coeff of den) = (5) / (3). Therefore lim(x→+∞) r(x) = (5) / (3).",
      },
      {
        question_text:
          "A function r is defined by r(x) = (2x² + x − 1)/(x − 3). Which of the following best describes the end behavior of r?",
        difficulty: "Easy",
        choices: [
          "r has a horizontal asymptote at y = 2",
          "r has a horizontal asymptote at y = 0",
          "r has a slant asymptote",
          "r has no asymptote of any kind",
        ],
        answer_text: "r has a slant asymptote",
        explanation:
          "Numerator degree = 2, denominator degree = 1. Since 2 = 1 + 1, the numerator's degree exceeds the denominator's by exactly 1, producing a slant asymptote. Long division would give the slant asymptote equation.",
      },
      {
        question_text:
          "A function r is defined by r(x) = (x³ + 2x)/(x + 1). Which statement correctly describes the end behavior of r?",
        difficulty: "Easy",
        choices: [
          "r has a horizontal asymptote at y = 1",
          "r has a slant asymptote",
          "r has a horizontal asymptote at y = 0",
          "r has no asymptote because the numerator degree exceeds the denominator degree by 2",
        ],
        answer_text:
          "r has no asymptote because the numerator degree exceeds the denominator degree by 2",
        explanation:
          "Numerator degree = 3, denominator degree = 1. The difference is 2, which is more than 1. Therefore there is no horizontal or slant asymptote — the end behavior resembles a degree-2 polynomial.",
      },
      {
        question_text:
          "A function r is defined by r(x) = (6x² − x + 2)/(−2x² + 5). What is lim(x→−∞) r(x)?",
        difficulty: "Medium",
        choices: ["−3", "3", "0", "−(1) / (5)"],
        answer_text: "−3",
        explanation:
          "Numerator degree = 2, denominator degree = 2. Equal degrees, so HA = leading coeff ratio = 6/(−2) = −3. Therefore lim(x→−∞) r(x) = −3.",
      },
      {
        question_text:
          "A function r is defined by r(x) = (x² − 4)/(x + 1). After performing polynomial long division, which of the following is the slant asymptote of r?",
        difficulty: "Medium",
        choices: ["y = x − 1", "y = x + 1", "y = x", "y = x − 4"],
        answer_text: "y = x − 1",
        explanation:
          "Perform long division of x² − 4 by x + 1. x² ÷ x = x; x(x+1) = x² + x; subtract: −x − 4. Then −x ÷ x = −1; −1(x+1) = −x − 1; subtract: −3. So r(x) = x − 1 + (−3)/(x+1). The slant asymptote is y = x − 1.",
      },
      {
        question_text:
          "The horizontal asymptote of a rational function r is y = 2. Which of the following must be true?",
        difficulty: "Medium",
        choices: [
          "r(x) ≠ 2 for all x in the domain of r",
          "lim(x→+∞) r(x) = 2 and lim(x→−∞) r(x) = 2",
          "The graph of r never intersects the line y = 2",
          "The degree of the numerator is less than the degree of the denominator",
        ],
        answer_text:
          "lim(x→+∞) r(x) = 2 and lim(x→−∞) r(x) = 2",
        explanation:
          "A horizontal asymptote at y = 2 means the function approaches 2 as x → ±∞, expressed as lim(x→+∞) r(x) = 2 and lim(x→−∞) r(x) = 2. The function CAN cross y = 2 for finite x values (choice A and C are false). The degree relationship depends on whether HA = 0 or a nonzero constant (choice D is only true if the HA is y = 0).",
      },
      {
        question_text:
          "A function r is defined by r(x) = (x + 5)/(x² − 1). At what value of x does r(x) equal its horizontal asymptote?",
        difficulty: "Hard",
        choices: [
          "x = −5",
          "x = 5",
          "x = 1 and x = −1",
          "r(x) never equals its horizontal asymptote",
        ],
        answer_text: "x = −5",
        explanation:
          "Step 1: Find the horizontal asymptote. Numerator degree = 1, denominator degree = 2. Since 1 < 2, the horizontal asymptote is y = 0. Step 2: Set r(x) = 0 and solve. (x + 5)/(x² − 1) = 0 → the numerator must equal zero → x + 5 = 0 → x = −5. Step 3: Check that x = −5 is in the domain. The denominator x² − 1 = (x − 1)(x + 1) equals zero at x = 1 and x = −1 only. At x = −5, the denominator = (−5)² − 1 = 24 ≠ 0 ✓. Therefore r(−5) = 0, and the function crosses its horizontal asymptote at x = −5. Note: x = 1 and x = −1 are vertical asymptotes (where the denominator is zero), not where the function equals the HA.",
      },
      {
        question_text:
          "A function r is defined by r(x) = p(x)/q(x) where p and q are polynomials. If lim(x→+∞) r(x) = 0 and lim(x→−∞) r(x) = 0, which of the following must be true about the degrees of p and q?",
        difficulty: "Hard",
        choices: [
          "degree of p = degree of q",
          "degree of p > degree of q",
          "degree of p < degree of q",
          "degree of p = 0",
        ],
        answer_text: "degree of p < degree of q",
        explanation:
          "If both limits equal 0, the horizontal asymptote is y = 0. This occurs when the denominator's degree is strictly greater than the numerator's degree (n < d case). Therefore degree of p < degree of q.",
      },
      {
        question_text:
          "A function r is defined by r(x) = (ax³ + bx)/(cx² + d), where a, b, c, d are nonzero constants. Which of the following correctly describes the end behavior of r, regardless of the specific values of a, b, c, d?",
        difficulty: "Hard",
        choices: [
          "r has a horizontal asymptote at y = a/c",
          "r has a slant asymptote",
          "r has a horizontal asymptote at y = 0",
          "r has end behavior that depends on the sign of a/c",
        ],
        answer_text: "r has a slant asymptote",
        explanation:
          "Numerator degree = 3, denominator degree = 2. Since 3 = 2 + 1, the numerator exceeds the denominator by exactly 1, always producing a slant asymptote regardless of the specific values of a, b, c, d (as long as they are nonzero). The slant asymptote would be found via long division and would equal (a/c)x + (something), but it is always a slant asymptote, not horizontal.",
      },
    ],
  },

  "1.8": {
    essentialQuestion:
      "How do you find the zeros of a rational function, and why must you check whether a zero is actually a hole in disguise?",

    apBoardNote:
      "Zeros of rational functions require careful factoring — the AP exam frequently tests whether students can distinguish a true zero from a hole. The canonical trap: a value that makes both numerator and denominator zero is a hole (removable discontinuity), not a zero. Students who set the numerator equal to zero without first checking the denominator will incorrectly identify holes as zeros. Expect to see this tested in both MCQ and FRQ format.",

    teacherNote:
      "I use the phrase 'factor first, then check' as a mantra. Before declaring any zero, factor both the numerator and denominator completely. If a factor cancels, the x-value it contributes is a hole — cross it off the zero list. Only the remaining numerator factors (after cancellation) give real zeros. I always do Example: r(x) = (x²−x−6)/(x²−9) and walk through the trap: students want to say x=3 is a zero because numerator = 0, but denominator = 0 too, making it a hole.",

    studentVoice:
      "I used to think 'zero means numerator equals zero' full stop. Then my teacher showed me a graph where the numerator was zero but there was a hole instead of a crossing — the point was just missing. It finally made sense: a zero means the function OUTPUT is zero, and if the function isn't even defined at that x, it can't output zero.",

    narration: [
      "A zero of a function is an input value that produces an output of zero — a point where the graph crosses or touches the x-axis. For polynomial functions, finding zeros is straightforward: set the polynomial equal to zero and solve. But rational functions have a complication: the function might be undefined at certain x-values. And if the function is undefined at x = c, it certainly cannot output zero at x = c.",
      "For a rational function r(x) = p(x)/q(x), the output can only be zero when the numerator is zero AND the denominator is not zero at the same point. Think about it arithmetically: the fraction p/q = 0 only when p = 0 and q ≠ 0. If both p and q are zero, you have a (0) / (0) indeterminate form — the function is undefined there.",
      "The step-by-step method for finding zeros: (1) Factor the numerator and denominator completely. (2) Identify any common factors — values that make both zero. These common factor x-values are holes (removable discontinuities), not zeros. (3) After canceling common factors, set the remaining numerator equal to zero to find the actual zeros. (4) Verify that each solution does not also make the denominator zero in the original (un-simplified) expression.",
      "The classic example: r(x) = (x²−x−6)/(x²−9). Factor: numerator = (x−3)(x+2), denominator = (x−3)(x+3). There is a common factor of (x−3). The value x = 3 makes both numerator and denominator zero — it is a hole. After canceling: simplified r(x) = (x+2)/(x+3). Set numerator equal to zero: x + 2 = 0 → x = −2. Check: at x = −2, denominator x+3 = 1 ≠ 0. So x = −2 is the only zero.",
      "Why does this matter on the graph? At x = −2, the graph crosses the x-axis (zero). At x = 3, there is no point on the graph at all — it's a hole, usually shown as an open circle. At x = −3, there is a vertical asymptote (denominator zero, numerator nonzero).",
      "A subtlety worth noting: even after finding the zeros, you can determine how the graph behaves at each zero using multiplicity — just as with polynomial functions. If the zero comes from a factor with odd multiplicity, the graph crosses the x-axis. If even multiplicity, it touches and turns back. For rational functions, apply this to the simplified numerator.",
      "Always factor completely before drawing any conclusions. Partial factoring can cause you to miss a common factor and misidentify a hole as a zero. This is one of the most common errors on the AP Precalculus exam.",
    ],

    priorKnowledge: [
      "Factoring polynomials including difference of squares, trinomials, and sum/difference of cubes",
      "Identifying zeros of polynomial functions by setting factors equal to zero",
      "Understanding domain restrictions for rational functions (denominator cannot be zero)",
      "Evaluating whether a fraction is undefined at a given input",
    ],

    connections: [
      "Holes (removable discontinuities) introduced here are analyzed in depth in Lesson 1.10",
      "Vertical asymptotes (Lesson 1.9) occur at denominator zeros that are NOT also numerator zeros",
      "Zeros and their multiplicities determine how the graph of a rational function behaves near the x-axis",
      "This lesson links to solving rational equations in algebra — the same factoring techniques apply",
    ],

    concepts: [
      "A zero of r(x) = p(x)/q(x) occurs only where the numerator equals zero AND the denominator does not equal zero",
      "If a value makes both the numerator and denominator zero, it is a hole (removable discontinuity) — not a zero",
      "Always factor both numerator and denominator completely before identifying zeros",
      "After canceling common factors, set the remaining numerator equal to zero to find zeros",
      "Verify that each candidate zero is actually in the domain of r (denominator ≠ 0)",
    ],

    keyFormula:
      "For r(x) = p(x)/q(x): zeros occur at x = c where p(c) = 0 AND q(c) ≠ 0. If p(c) = 0 AND q(c) = 0, then x = c is a hole (removable discontinuity), not a zero.",

    keyTerms: [
      {
        term: "Zero of a rational function",
        definition:
          "An x-value c where r(c) = 0, meaning the numerator equals zero and the denominator does not equal zero at x = c.",
      },
      {
        term: "Removable discontinuity (hole)",
        definition:
          "A point where a rational function is undefined due to a common factor in numerator and denominator; appears as a gap (open circle) on the graph, not a zero.",
      },
      {
        term: "Common factor",
        definition:
          "A polynomial factor that appears in both the numerator and denominator; canceling it reveals holes and simplifies the function.",
      },
      {
        term: "Simplified rational function",
        definition:
          "The form of a rational function after all common factors between numerator and denominator have been canceled.",
      },
      {
        term: "Indeterminate form",
        definition:
          "An expression of the form (0) / (0) that arises when both numerator and denominator equal zero at the same point; indicates a potential hole rather than a zero.",
      },
    ],

    workedExample: {
      problem:
        "A function r is defined by r(x) = (x² − x − 6)/(x² − 9). Find all zeros of r.",
      steps: [
        "Factor the numerator: x² − x − 6 = (x − 3)(x + 2).",
        "Factor the denominator: x² − 9 = (x − 3)(x + 3).",
        "Identify common factors: (x − 3) appears in both numerator and denominator.",
        "The value x = 3 makes both numerator and denominator zero — this is a hole, not a zero. Remove x = 3 from the candidate list.",
        "Cancel the common factor: r(x) = (x + 2)/(x + 3) for all x ≠ 3.",
        "Set the remaining numerator equal to zero: x + 2 = 0 → x = −2.",
        "Check: at x = −2, denominator x + 3 = 1 ≠ 0. So x = −2 is in the domain.",
        "Conclusion: x = −2 is the only zero of r.",
      ],
      answer:
        "The only zero of r is x = −2. The value x = 3 is a hole (not a zero), and x = −3 is a vertical asymptote.",
    },

    workedExample2: {
      problem:
        "A function r is defined by r(x) = (x³ − 4x)/(x² − x − 2). Find all zeros of r, identifying any values that are holes rather than zeros.",
      steps: [
        "Factor the numerator: x³ − 4x = x(x² − 4) = x(x − 2)(x + 2).",
        "Factor the denominator: x² − x − 2 = (x − 2)(x + 1).",
        "Identify common factors: (x − 2) appears in both numerator and denominator.",
        "The value x = 2 makes both zero — this is a hole. Remove x = 2 from the zero list.",
        "Cancel the common factor: r(x) = x(x + 2)/(x + 1) for all x ≠ 2.",
        "Set the remaining numerator equal to zero: x(x + 2) = 0 → x = 0 or x = −2.",
        "Check x = 0: denominator x + 1 = 1 ≠ 0. ✓ Zero at x = 0.",
        "Check x = −2: denominator x + 1 = −1 ≠ 0. ✓ Zero at x = −2.",
        "Conclusion: zeros at x = 0 and x = −2; hole at x = 2; vertical asymptote at x = −1.",
      ],
      answer:
        "r has zeros at x = 0 and x = −2. There is a hole (removable discontinuity) at x = 2, and a vertical asymptote at x = −1.",
    },

    commonMistakes: [
      "Setting the numerator equal to zero without checking whether those values also make the denominator zero — holes get misidentified as zeros",
      "Forgetting to factor completely — a partially factored form may miss a common factor",
      "Treating every denominator-zero value as a vertical asymptote — if the factor cancels, it's a hole, not an asymptote",
      "Confusing a zero (where the graph crosses the x-axis) with a hole (where the graph has a gap)",
      "Not checking whether candidate zeros are actually in the domain of the original function",
    ],

    tip: "Two-step check for every candidate zero: (1) Does the numerator equal zero here? (2) Does the denominator also equal zero here? If yes to both: hole. If yes to (1) only: true zero. This two-step check prevents the most common error in this lesson.",

    questions: [
      {
        question_text:
          "A function r is defined by r(x) = (x − 4)/(x² − 16). What is the zero of r?",
        difficulty: "Easy",
        choices: [
          "x = 4 and x = −4",
          "x = 4 only",
          "x = −4 only",
          "r has no zeros",
        ],
        answer_text: "r has no zeros",
        explanation:
          "Factor: numerator = (x − 4), denominator = (x − 4)(x + 4). The factor (x − 4) cancels — x = 4 is a hole, not a zero. After canceling: r(x) = 1/(x + 4). The numerator is the constant 1, which is never zero. Therefore r has no zeros.",
      },
      {
        question_text:
          "A function r is defined by r(x) = (x² − 9)/(x + 1). What are the zeros of r?",
        difficulty: "Easy",
        choices: [
          "x = 3 and x = −3",
          "x = 3 only",
          "x = −1 only",
          "x = 3, x = −3, and x = −1",
        ],
        answer_text: "x = 3 and x = −3",
        explanation:
          "Factor: numerator = (x − 3)(x + 3), denominator = (x + 1). No common factors. Set numerator = 0: x = 3 or x = −3. Check: at x = 3, denominator = 4 ≠ 0 ✓; at x = −3, denominator = −2 ≠ 0 ✓. Both are zeros. x = −1 makes the denominator zero — it is a vertical asymptote, not a zero.",
      },
      {
        question_text:
          "A function r is defined by r(x) = (x² + 3x + 2)/(x² + x − 2). Which of the following are zeros of r?",
        difficulty: "Easy",
        choices: [
          "x = −1 and x = −2",
          "x = −1 only",
          "x = −2 only",
          "r has no zeros",
        ],
        answer_text: "x = −1 only",
        explanation:
          "Factor numerator: x² + 3x + 2 = (x + 1)(x + 2). Factor denominator: x² + x − 2 = (x + 2)(x − 1). Common factor: (x + 2) — cancel it. So x = −2 is a hole (removable discontinuity), not a zero. After canceling: simplified r(x) = (x + 1)/(x − 1). Set numerator = 0: x + 1 = 0 → x = −1. Check denominator at x = −1: −1 − 1 = −2 ≠ 0. So x = −1 is the only zero.",
      },
      {
        question_text:
          "A function r is defined by r(x) = (3x − 6)/(x² − 5x + 6). What is the zero of r?",
        difficulty: "Easy",
        choices: ["x = 2 and x = 3", "x = 2 only", "x = 3 only", "r has no zeros"],
        answer_text: "r has no zeros",
        explanation:
          "Factor: numerator = 3(x − 2), denominator = (x − 2)(x − 3). Common factor: (x − 2). So x = 2 is a hole. After canceling: r(x) = 3/(x − 3). Numerator is constant 3 — never zero. r has no zeros. x = 3 is a vertical asymptote.",
      },
      {
        question_text:
          "A function r is defined by r(x) = (x² − 5x + 6)/(x² − 4). Find all zeros of r.",
        difficulty: "Medium",
        choices: [
          "x = 2 and x = 3",
          "x = 3 only",
          "x = 2 only",
          "x = −2 and x = 3",
        ],
        answer_text: "x = 3 only",
        explanation:
          "Factor numerator: x² − 5x + 6 = (x − 2)(x − 3). Factor denominator: x² − 4 = (x − 2)(x + 2). Common factor: (x − 2). So x = 2 is a hole. After canceling: r(x) = (x − 3)/(x + 2). Set numerator = 0: x = 3. Check: at x = 3, denominator = 5 ≠ 0. Zero at x = 3 only.",
      },
      {
        question_text:
          "A function r is defined by r(x) = (x³ − x)/(x² − 1). How many zeros does r have?",
        difficulty: "Medium",
        choices: ["0", "1", "2", "3"],
        answer_text: "1",
        explanation:
          "Factor numerator: x³ − x = x(x² − 1) = x(x − 1)(x + 1). Factor denominator: x² − 1 = (x − 1)(x + 1). Common factors: (x − 1) and (x + 1). Both x = 1 and x = −1 are holes. After canceling: r(x) = x. Set x = 0. Check: denominator at x = 0 is −1 ≠ 0. Zero at x = 0. r has exactly 1 zero.",
      },
      {
        question_text:
          "A function r is defined by r(x) = (2x² + x − 3)/(x² − 1). Which of the following correctly identifies all zeros and holes of r?",
        difficulty: "Medium",
        choices: [
          "Zero at x = 1, hole at x = −1",
          "Hole at x = 1, zero at x = −(3) / (2)",
          "Zeros at x = 1 and x = −(3) / (2), no holes",
          "Zero at x = −(3) / (2), hole at x = 1",
        ],
        answer_text: "Zero at x = −(3) / (2), hole at x = 1",
        explanation:
          "Factor numerator: 2x² + x − 3 = (2x + 3)(x − 1). Factor denominator: x² − 1 = (x − 1)(x + 1). Common factor: (x − 1). So x = 1 is a hole. After canceling: r(x) = (2x + 3)/(x + 1). Set 2x + 3 = 0 → x = −(3) / (2). Check: at x = −(3) / (2), denominator = −(1) / (2) ≠ 0. Zero at x = −(3) / (2).",
      },
      {
        question_text:
          "A function r is defined by r(x) = (x² − 4)/(x² + 4). How many zeros does r have?",
        difficulty: "Medium",
        choices: ["0", "1", "2", "4"],
        answer_text: "2",
        explanation:
          "Factor numerator: x² − 4 = (x − 2)(x + 2). Factor denominator: x² + 4. The denominator x² + 4 has no real factors (x² + 4 > 0 for all real x). No common factors. Set numerator = 0: x = 2 or x = −2. Check: at x = 2, denominator = 8 ≠ 0 ✓; at x = −2, denominator = 8 ≠ 0 ✓. Two zeros: x = 2 and x = −2.",
      },
      {
        question_text:
          "A function r is defined by r(x) = (x³ − 8)/(x² − 2x + 4). Find all zeros of r, if any.",
        difficulty: "Hard",
        choices: [
          "x = 2",
          "x = −2",
          "r has no zeros",
          "x = 2 is a hole and r has no zeros",
        ],
        answer_text: "x = 2",
        explanation:
          "Factor numerator using difference of cubes: x³ − 8 = (x − 2)(x² + 2x + 4). Factor denominator: x² − 2x + 4 (check discriminant: 4 − 16 = −12 < 0, so it doesn't factor over reals). Is x² + 2x + 4 = x² − 2x + 4? No — the numerator factor is x² + 2x + 4, not x² − 2x + 4. No common factors. Set numerator = 0: (x − 2)(x² + 2x + 4) = 0. x = 2 or x² + 2x + 4 = 0 (discriminant = 4 − 16 = −12 < 0, no real solutions). Check x = 2: denominator = 4 − 4 + 4 = 4 ≠ 0. Zero at x = 2.",
      },
      {
        question_text:
          "A function r is defined by r(x) = (x² − kx)/(x − k) for a nonzero constant k. For what values of x, in terms of k, does r have a zero, and where does it have a hole?",
        difficulty: "Hard",
        choices: [
          "Zero at x = 0, hole at x = k",
          "Zero at x = k, hole at x = 0",
          "Zeros at x = 0 and x = k; no holes",
          "Hole at x = 0, zero at x = k",
        ],
        answer_text: "Zero at x = 0, hole at x = k",
        explanation:
          "Factor numerator: x² − kx = x(x − k). Denominator: x − k. Common factor: (x − k). So x = k is a hole. After canceling: r(x) = x. Set x = 0 (numerator of simplified form = 0): zero at x = 0. Check: at x = 0, the original denominator (0 − k) = −k ≠ 0 since k ≠ 0. So x = 0 is a zero and x = k is a hole.",
      },
    ],
  },

  "1.9": {
    essentialQuestion:
      "How do you use one-sided limits to describe the behavior of a rational function near a vertical asymptote?",

    apBoardNote:
      "Vertical asymptotes and one-sided limit notation are directly tested on the AP Precalculus exam. Students must be able to determine not just that a vertical asymptote exists, but whether the function approaches +∞ or −∞ from each side. The one-sided limit notation — lim(x→c⁺) and lim(x→c⁻) — with correct superscript direction is required for full credit. Sign analysis (testing values just left and just right of the asymptote) is the essential technique.",

    teacherNote:
      "I have students do 'the squeeze test': pick a number just barely bigger than c (like c + 0.001) and just barely smaller than c (like c − 0.001) and evaluate the sign of the function at those values. The sign tells you whether the function goes to +∞ or −∞. I also emphasize: you don't compute the actual value — you only need the sign. This makes the technique fast and reliable under exam conditions.",

    studentVoice:
      "I used to always say 'the function goes to infinity near the asymptote' and leave it at that. Then I realized: it matters which side! The function might go to +∞ from the right and −∞ from the left, or it might go to +∞ from both sides. The one-sided limit notation captures this difference, and the exam cares about it.",

    narration: [
      "Picture a vertical wall in the middle of a hallway. You can approach the wall from the left side or the right side, but you can never pass through it. Vertical asymptotes in rational functions work similarly — the function approaches the asymptote from the left and the right, but it is undefined at the asymptote itself. What makes one-sided limits important is that the behavior from the left can be completely different from the behavior from the right.",
      "A vertical asymptote occurs at x = c when the denominator of a fully simplified rational function equals zero at x = c (and the numerator does not). Near x = c, the denominator becomes very small, making the fraction very large in absolute value — the function either shoots to +∞ or −∞. But which direction? That depends on the sign of the function near x = c.",
      "The technique for determining one-sided behavior is sign analysis. For each side of the asymptote, pick a test value just barely to that side and determine the sign of each factor in the simplified rational function. The overall sign of the product/quotient tells you whether the function is positive (+∞) or negative (−∞) on that side.",
      "Example: r(x) = 1/(x − 2) has a vertical asymptote at x = 2. For x → 2⁺ (just to the right of 2, like x = 2.001): the denominator x − 2 ≈ 0.001, which is a small positive number. So 1/(small positive) → +∞. For x → 2⁻ (just to the left of 2, like x = 1.999): the denominator x − 2 ≈ −0.001, a small negative number. So 1/(small negative) → −∞. Written in notation: lim(x→2⁺) r(x) = +∞ and lim(x→2⁻) r(x) = −∞.",
      "For more complex rational functions, analyze the sign of each factor separately. Example: r(x) = (x + 1)/((x − 2)(x + 3)). There are vertical asymptotes at x = 2 and x = −3. To analyze x → 2⁺: (x + 1) ≈ 3 (positive), (x − 2) ≈ small positive, (x + 3) ≈ 5 (positive). Overall sign: positive/(positive × positive) = positive. So lim(x→2⁺) r(x) = +∞. For x → 2⁻: (x + 1) ≈ 3, (x − 2) ≈ small negative, (x + 3) ≈ 5. Sign: positive/(negative × positive) = negative. So lim(x→2⁻) r(x) = −∞.",
      "The notation for one-sided limits uses superscripts on the arrow: x → c⁺ means x approaches c from the right (values greater than c), and x → c⁻ means x approaches c from the left (values less than c). On the AP exam, you must include these superscripts — writing lim(x→c) without a direction is ambiguous and incomplete when discussing vertical asymptote behavior.",
      "An important case: when the rational function has a factor of (x − c)² in the denominator (even multiplicity), the sign on both sides of the asymptote is the same. This means the function approaches either +∞ from both sides or −∞ from both sides. When the factor is (x − c) to an odd power, the signs are opposite on each side.",
    ],

    priorKnowledge: [
      "Identifying vertical asymptotes from the denominator of a simplified rational function",
      "Evaluating the sign of a polynomial at a specific value",
      "Understanding what it means for a function to approach infinity",
      "Factoring polynomials to identify zeros and their multiplicities",
    ],

    connections: [
      "One-sided limit notation used here is foundational for derivatives and continuity in AP Calculus",
      "Holes (Lesson 1.10) occur when a factor cancels — vertical asymptotes occur when it does not cancel",
      "Sign analysis connects to the concept of intervals of increase/decrease in polynomial and rational function analysis",
      "Behavior near vertical asymptotes affects the overall shape of a rational function's graph",
    ],

    concepts: [
      "Vertical asymptotes of r(x) = p(x)/q(x) occur at x = c where q(c) = 0 in the fully simplified form (and p(c) ≠ 0)",
      "One-sided limits — lim(x→c⁺) and lim(x→c⁻) — describe behavior approaching the asymptote from each side",
      "Sign analysis determines whether the function approaches +∞ or −∞: evaluate the sign of each factor just to the right and just to the left of c",
      "The superscript in x → c⁺ means from the right; x → c⁻ means from the left — these are required in limit notation",
      "A factor in the denominator with even multiplicity at c produces the same direction (both +∞ or both −∞) from each side",
    ],

    keyFormula:
      "For vertical asymptote at x = c in simplified r(x): use sign analysis to find lim(x→c⁺) r(x) and lim(x→c⁻) r(x). Test a value slightly greater than c for the right-side limit and slightly less than c for the left-side limit. The sign of the resulting expression determines whether the limit is +∞ or −∞.",

    keyTerms: [
      {
        term: "Vertical asymptote",
        definition:
          "A vertical line x = c where the graph of a function grows without bound as x approaches c from one or both sides; occurs at c where the simplified denominator equals zero.",
      },
      {
        term: "One-sided limit",
        definition:
          "The value a function approaches as x approaches c from only one direction: lim(x→c⁺) means from the right, lim(x→c⁻) means from the left.",
      },
      {
        term: "Sign analysis",
        definition:
          "A technique to determine the sign (positive or negative) of a rational function near a vertical asymptote by evaluating the signs of each factor just to the left and right of the asymptote.",
      },
      {
        term: "x → c⁺ notation",
        definition:
          "Limit notation meaning x approaches c from values greater than c (from the right side); the superscript + indicates the direction.",
      },
      {
        term: "x → c⁻ notation",
        definition:
          "Limit notation meaning x approaches c from values less than c (from the left side); the superscript − indicates the direction.",
      },
      {
        term: "Even-multiplicity vertical asymptote",
        definition:
          "A vertical asymptote at x = c where the factor (x − c) appears to an even power in the denominator; the function approaches the same infinity (both +∞ or both −∞) from each side.",
      },
    ],

    workedExample: {
      problem:
        "A function r is defined by r(x) = 1/(x − 2). Describe the behavior of r near its vertical asymptote using one-sided limit notation.",
      steps: [
        "Find the vertical asymptote: denominator x − 2 = 0 → x = 2. Check numerator at x = 2: numerator = 1 ≠ 0. Vertical asymptote at x = 2.",
        "Analyze x → 2⁺ (approach from the right): choose a test value like x = 2.001.",
        "At x = 2.001: denominator = 2.001 − 2 = 0.001 (small positive). Numerator = 1 (positive).",
        "1/(small positive) → +∞. So lim(x→2⁺) r(x) = +∞.",
        "Analyze x → 2⁻ (approach from the left): choose a test value like x = 1.999.",
        "At x = 1.999: denominator = 1.999 − 2 = −0.001 (small negative). Numerator = 1 (positive).",
        "1/(small negative) → −∞. So lim(x→2⁻) r(x) = −∞.",
      ],
      answer:
        "lim(x→2⁺) r(x) = +∞ and lim(x→2⁻) r(x) = −∞. The function rises to +∞ from the right of x = 2 and falls to −∞ from the left.",
    },

    workedExample2: {
      problem:
        "A function r is defined by r(x) = (x + 1)/((x − 3)(x + 2)). Identify all vertical asymptotes and determine the one-sided limit behavior at each.",
      steps: [
        "Find vertical asymptotes: denominator = 0 when x = 3 or x = −2. Check numerator: at x = 3, numerator = 4 ≠ 0; at x = −2, numerator = −1 ≠ 0. Both are vertical asymptotes.",
        "Analyze x → 3⁺: test x = 3.001. (x + 1) ≈ 4 (positive). (x − 3) ≈ 0.001 (positive). (x + 2) ≈ 5 (positive). Sign: (+)/(+·+) = positive → +∞.",
        "lim(x→3⁺) r(x) = +∞.",
        "Analyze x → 3⁻: test x = 2.999. (x + 1) ≈ 4 (positive). (x − 3) ≈ −0.001 (negative). (x + 2) ≈ 5 (positive). Sign: (+)/(−·+) = negative → −∞.",
        "lim(x→3⁻) r(x) = −∞.",
        "Analyze x → −2⁺: test x = −1.999. (x + 1) ≈ −1 (negative). (x − 3) ≈ −5 (negative). (x + 2) ≈ 0.001 (positive). Sign: (−)/(−·+) = positive → +∞.",
        "lim(x→−2⁺) r(x) = +∞.",
        "Analyze x → −2⁻: test x = −2.001. (x + 1) ≈ −1 (negative). (x − 3) ≈ −5 (negative). (x + 2) ≈ −0.001 (negative). Sign: (−)/(−·−) = negative → −∞.",
        "lim(x→−2⁻) r(x) = −∞.",
      ],
      answer:
        "Vertical asymptotes at x = 3 and x = −2. At x = 3: lim(x→3⁺) r(x) = +∞ and lim(x→3⁻) r(x) = −∞. At x = −2: lim(x→−2⁺) r(x) = +∞ and lim(x→−2⁻) r(x) = −∞.",
    },

    commonMistakes: [
      "Writing lim(x→c) r(x) = ∞ without specifying left or right — one-sided limits require the direction superscript",
      "Assuming both sides of a vertical asymptote always go in the same direction — they often go opposite directions",
      "Forgetting to simplify the rational function before identifying vertical asymptotes — canceled factors produce holes, not asymptotes",
      "Using an incorrect test value — the test value must be between the asymptote and the next zero/asymptote, not just any value on that side",
      "Not checking the sign of every factor — missing a negative factor can flip the sign of the entire result",
    ],

    tip: "For each vertical asymptote at x = c, draw a small sign chart: list each factor of the rational function and mark its sign just left (−) and just right (+) of c. Count the total negatives in the denominator and numerator separately, then determine the overall sign. This systematic approach prevents sign errors.",

    questions: [
      {
        question_text:
          "A function r is defined by r(x) = 3/(x + 5). What is lim(x→−5⁺) r(x)?",
        difficulty: "Easy",
        choices: ["+∞", "−∞", "0", "(3) / (5)"],
        answer_text: "+∞",
        explanation:
          "Vertical asymptote at x = −5. For x → −5⁺ (approaching from the right, like x = −4.999): denominator x + 5 ≈ 0.001 (small positive). Numerator = 3 (positive). 3/(small positive) → +∞.",
      },
      {
        question_text:
          "A function r is defined by r(x) = −2/(x − 1). What is lim(x→1⁻) r(x)?",
        difficulty: "Easy",
        choices: ["+∞", "−∞", "2", "−2"],
        answer_text: "+∞",
        explanation:
          "Vertical asymptote at x = 1. For x → 1⁻ (from the left, like x = 0.999): denominator x − 1 ≈ −0.001 (small negative). Numerator = −2 (negative). (−2)/(small negative) = positive/small → +∞.",
      },
      {
        question_text:
          "A function r is defined by r(x) = (x + 2)/(x − 4). Which of the following correctly describes the behavior of r near x = 4?",
        difficulty: "Easy",
        choices: [
          "lim(x→4⁺) r(x) = +∞ and lim(x→4⁻) r(x) = −∞",
          "lim(x→4⁺) r(x) = −∞ and lim(x→4⁻) r(x) = +∞",
          "lim(x→4⁺) r(x) = +∞ and lim(x→4⁻) r(x) = +∞",
          "lim(x→4⁺) r(x) = −∞ and lim(x→4⁻) r(x) = −∞",
        ],
        answer_text:
          "lim(x→4⁺) r(x) = +∞ and lim(x→4⁻) r(x) = −∞",
        explanation:
          "Vertical asymptote at x = 4. At x = 4, numerator = 6 > 0. For x → 4⁺: denominator small positive → r → +∞. For x → 4⁻: denominator small negative → r → −∞.",
      },
      {
        question_text:
          "A function r is defined by r(x) = 1/(x − 3)². What is lim(x→3⁻) r(x)?",
        difficulty: "Easy",
        choices: ["+∞", "−∞", "0", "(1) / (9)"],
        answer_text: "+∞",
        explanation:
          "Vertical asymptote at x = 3. The denominator (x − 3)² is always non-negative (and near x = 3, it is a small positive number). Numerator = 1 > 0. From either side, 1/(small positive) → +∞. So lim(x→3⁻) r(x) = +∞.",
      },
      {
        question_text:
          "A function r is defined by r(x) = (x − 1)/((x + 2)(x − 5)). What is lim(x→5⁺) r(x)?",
        difficulty: "Medium",
        choices: ["+∞", "−∞", "(4) / (7)", "0"],
        answer_text: "+∞",
        explanation:
          "Vertical asymptote at x = 5. For x → 5⁺: (x − 1) ≈ 4 (positive). (x + 2) ≈ 7 (positive). (x − 5) ≈ 0.001 (small positive). Sign: (+)/((+)(+)) = positive → +∞.",
      },
      {
        question_text:
          "A function r is defined by r(x) = (x − 1)/((x + 2)(x − 5)). What is lim(x→−2⁺) r(x)?",
        difficulty: "Medium",
        choices: ["+∞", "−∞", "(3) / (7)", "0"],
        answer_text: "+∞",
        explanation:
          "Vertical asymptote at x = −2. For x → −2⁺: (x − 1) ≈ −3 (negative). (x + 2) ≈ 0.001 (small positive). (x − 5) ≈ −7 (negative). Sign: (−)/((+)(−)) = (−)/(−) = positive → +∞.",
      },
      {
        question_text:
          "A function r is defined by r(x) = −(x + 3)/(x − 2)². What is lim(x→2⁺) r(x)?",
        difficulty: "Medium",
        choices: ["+∞", "−∞", "(5) / (4)", "0"],
        answer_text: "−∞",
        explanation:
          "Vertical asymptote at x = 2. For x → 2⁺: numerator −(x + 3) ≈ −5 (negative). Denominator (x − 2)² ≈ (small positive)² = small positive. Sign: (−)/(+) = negative → −∞. Both sides approach −∞ because the denominator is squared (always positive near x = 2).",
      },
      {
        question_text:
          "A function r is defined by r(x) = (2 − x)/((x − 1)(x − 4)). At x = 1, which statement is correct?",
        difficulty: "Medium",
        choices: [
          "lim(x→1⁺) r(x) = +∞ and lim(x→1⁻) r(x) = −∞",
          "lim(x→1⁺) r(x) = −∞ and lim(x→1⁻) r(x) = +∞",
          "lim(x→1⁺) r(x) = +∞ and lim(x→1⁻) r(x) = +∞",
          "lim(x→1⁺) r(x) = −∞ and lim(x→1⁻) r(x) = −∞",
        ],
        answer_text:
          "lim(x→1⁺) r(x) = −∞ and lim(x→1⁻) r(x) = +∞",
        explanation:
          "Vertical asymptote at x = 1. For x → 1⁺: (2 − x) ≈ 1 (positive). (x − 1) ≈ 0.001 (small positive). (x − 4) ≈ −3 (negative). Sign: (+)/((+)(−)) = (−) → −∞. For x → 1⁻: (2 − x) ≈ 1 (+). (x − 1) ≈ −0.001 (small negative). (x − 4) ≈ −3 (−). Sign: (+)/((−)(−)) = (+) → +∞.",
      },
      {
        question_text:
          "A function r is defined by r(x) = (x² − 1)/(x² − 4x + 3). After fully simplifying, identify the vertical asymptote(s) and state the one-sided behavior at each.",
        difficulty: "Hard",
        choices: [
          "Vertical asymptote at x = 1 only; lim(x→1⁺) r(x) = +∞ and lim(x→1⁻) r(x) = −∞",
          "Vertical asymptote at x = 3 only; lim(x→3⁺) r(x) = +∞ and lim(x→3⁻) r(x) = −∞",
          "Vertical asymptotes at x = 1 and x = 3; asymptotes on both sides",
          "Hole at x = 1 and vertical asymptote at x = 3; lim(x→3⁺) r(x) = +∞ and lim(x→3⁻) r(x) = −∞",
        ],
        answer_text:
          "Hole at x = 1 and vertical asymptote at x = 3; lim(x→3⁺) r(x) = +∞ and lim(x→3⁻) r(x) = −∞",
        explanation:
          "Factor: numerator = (x − 1)(x + 1), denominator = (x − 1)(x − 3). Common factor: (x − 1). Hole at x = 1. After canceling: r(x) = (x + 1)/(x − 3). Vertical asymptote at x = 3. For x → 3⁺: (x + 1) ≈ 4 (+), (x − 3) ≈ 0.001 (+). → +∞. For x → 3⁻: (x + 1) ≈ 4 (+), (x − 3) ≈ −0.001 (−). → −∞.",
      },
      {
        question_text:
          "A function r is defined by r(x) = k/(x − a) for nonzero constants k and a. If lim(x→a⁺) r(x) = −∞, which of the following must be true?",
        difficulty: "Hard",
        choices: ["k > 0", "k < 0", "a > 0", "a < 0"],
        answer_text: "k < 0",
        explanation:
          "For x → a⁺: (x − a) approaches 0 from the positive side (small positive). So r(x) = k/(small positive). For this to approach −∞, we need k to be negative. If k < 0, then (negative)/(small positive) → −∞. The sign of a does not affect this analysis. Therefore k < 0 must be true.",
      },
    ],
  },

  "1.10": {
    essentialQuestion:
      "How do you locate a hole in the graph of a rational function, and how do you find its exact coordinates?",

    apBoardNote:
      "Holes (removable discontinuities) are reported as the single most commonly missed concept on the AP Precalculus Unit 1 exam. Students must distinguish holes from vertical asymptotes: both involve denominator zeros, but a hole occurs when the zero is also a numerator zero (the factor cancels). Finding the y-coordinate of the hole — by substituting into the simplified function — is required for full credit. A complete description of a hole gives both the x- and y-coordinates as an ordered pair.",

    teacherNote:
      "I walk students through a four-step procedure and have them memorize it: (1) factor completely, (2) identify and cancel the common factor, (3) set the cancelled factor = 0 to find x, (4) substitute that x into the simplified function to find y. Many students stop at step 3 and forget step 4 — they find the x-coordinate but not the y-coordinate. Remind them: the hole is a POINT, and a point has two coordinates. Also emphasize: r(x) is NOT equal to the simplified function at the hole — it is undefined there.",

    studentVoice:
      "I kept mixing up holes and vertical asymptotes until I made myself remember: the hole is the thing that disappears. When a factor cancels from both top and bottom, that factor vanishes — and the point where it was zero vanishes from the graph too. It's like the graph was drawn correctly but then someone erased that one dot. At a vertical asymptote, nothing cancels — the graph just explodes to infinity.",

    narration: [
      "In the last two lessons, we saw that rational functions can have zeros (where the graph crosses the x-axis) and vertical asymptotes (where the graph shoots to infinity). But there is a third possibility: holes. A hole is a single missing point in the graph — the function is defined everywhere around that point, but not at that specific x-value.",
      "Holes arise because of common factors in the numerator and denominator. When you simplify the function by canceling the common factor, the resulting expression is defined at that x-value. But the original function was not — the common factor made both numerator and denominator zero, creating a (0) / (0) indeterminate form. The graph of the simplified function is essentially correct everywhere, except you must mark a hole (open circle) at the one point where the original was undefined.",
      "The four-step procedure for finding a hole: (1) Factor the numerator and denominator completely. (2) Identify any common factor — a polynomial that divides both. (3) Set the common factor equal to zero to find the x-coordinate of the hole. (4) Substitute that x-value into the simplified (post-cancellation) function to find the y-coordinate. The hole is the ordered pair (x, y).",
      "Classic example: r(x) = (x² − 4)/(x − 2). Factor: numerator = (x + 2)(x − 2), denominator = (x − 2). Common factor: (x − 2). Step 3: x − 2 = 0 → x = 2. Step 4: simplified function is x + 2; at x = 2, y = 2 + 2 = 4. The hole is at (2, 4). The graph looks like the line y = x + 2, but with a single open circle at the point (2, 4).",
      "Distinguishing holes from vertical asymptotes is the central skill of this lesson. The rule: if a denominator zero corresponds to a factor that cancels — it's a hole. If the denominator zero corresponds to a factor that does NOT cancel (doesn't appear in the numerator) — it's a vertical asymptote. After canceling all common factors, any remaining denominator zeros are vertical asymptotes; the canceled factor zeros are holes.",
      "A subtle but important point: the simplified function and the original function are not the same. They agree everywhere in their shared domain, but the original function r(x) is undefined at the hole's x-value, while the simplified function is defined there. The simplified function's value at that x is the y-coordinate of the hole — the 'limit' of r(x) as x approaches that value, but not the actual function value (which doesn't exist).",
      "On the AP exam, questions about holes may ask you to identify whether a specific x-value is a hole or a vertical asymptote, or to find the coordinates of a hole. Practice the four steps until they are automatic. This is listed as the most frequently missed topic in Unit 1 — mastering it distinguishes high-scorers from the rest.",
    ],

    priorKnowledge: [
      "Factoring polynomials, including trinomials, difference of squares, and common factor extraction",
      "Understanding domain restrictions in rational functions (denominator cannot be zero)",
      "Identifying vertical asymptotes as denominator zeros that do not cancel (from Lesson 1.9)",
      "Evaluating a function by substituting a value for x",
    ],

    connections: [
      "Holes (removable discontinuities) are the complement of vertical asymptotes — both involve denominator zeros, but holes cancel and asymptotes do not",
      "In AP Calculus, holes correspond to removable discontinuities where the limit exists but the function value does not",
      "Zeros of rational functions (Lesson 1.8) required the same factoring — holes discovered there are fully analyzed here",
      "The concept of a function being undefined at a point while the limit exists is a key bridge to calculus continuity",
    ],

    concepts: [
      "A hole (removable discontinuity) occurs at x = c when (x − c) is a common factor in both numerator and denominator and cancels",
      "To find the x-coordinate of a hole: set the cancelled common factor equal to zero",
      "To find the y-coordinate of a hole: substitute the x-coordinate into the simplified (post-cancellation) rational function",
      "A hole is an ordered pair (x, y) — both coordinates are required for a complete description",
      "After canceling, any remaining denominator zeros are vertical asymptotes (not holes)",
      "The original function is undefined at the hole's x-value; the simplified function's value there gives the y-coordinate (the limit)",
    ],

    keyFormula:
      "For r(x) = p(x)/q(x): if (x − c) is a factor of both p(x) and q(x), then x = c is a hole. Steps: (1) factor completely, (2) cancel (x − c), (3) hole x-coordinate: x = c, (4) hole y-coordinate: y = simplified r(c). Hole location: (c, simplified r(c)).",

    keyTerms: [
      {
        term: "Hole (removable discontinuity)",
        definition:
          "A single missing point in the graph of a rational function, occurring where a common factor of numerator and denominator causes a (0) / (0) form; shown as an open circle on the graph.",
      },
      {
        term: "Common factor (numerator and denominator)",
        definition:
          "A polynomial factor that divides evenly into both the numerator and denominator; canceling it reveals a hole at the x-value that makes that factor zero.",
      },
      {
        term: "Simplified rational function",
        definition:
          "The form of r(x) after all common factors are canceled; agrees with the original function everywhere except at hole locations.",
      },
      {
        term: "y-coordinate of a hole",
        definition:
          "The output value of the simplified rational function at the hole's x-coordinate; represents the limit of the function approaching the hole but is NOT the function's value (which is undefined).",
      },
      {
        term: "Cancellation",
        definition:
          "The algebraic operation of dividing both numerator and denominator by a common factor, which simplifies the expression but removes that factor's zero from the domain.",
      },
      {
        term: "Open circle",
        definition:
          "The graphical representation of a hole — a circle drawn at the coordinate (x, y) of the hole to indicate the function is not defined at that point.",
      },
    ],

    workedExample: {
      problem:
        "A function r is defined by r(x) = (x² − 4)/(x − 2). Determine whether r has a hole, a vertical asymptote, or neither at x = 2. If there is a hole, find its coordinates.",
      steps: [
        "Factor the numerator: x² − 4 = (x − 2)(x + 2).",
        "Factor the denominator: x − 2 (already factored).",
        "Identify common factors: (x − 2) appears in both. This means x = 2 is a hole, not a vertical asymptote.",
        "Cancel the common factor: r(x) = (x + 2) for all x ≠ 2.",
        "Find the x-coordinate of the hole: set x − 2 = 0 → x = 2.",
        "Find the y-coordinate: substitute x = 2 into the simplified function: y = 2 + 2 = 4.",
        "The hole is at (2, 4).",
      ],
      answer:
        "r has a hole (removable discontinuity) at (2, 4). The graph looks like y = x + 2 with an open circle at the point (2, 4). There is no vertical asymptote at x = 2.",
    },

    workedExample2: {
      problem:
        "A function r is defined by r(x) = (x² + x − 6)/(x² − x − 2). Find all holes and vertical asymptotes of r, and state the coordinates of any holes.",
      steps: [
        "Factor the numerator: x² + x − 6 = (x + 3)(x − 2).",
        "Factor the denominator: x² − x − 2 = (x − 2)(x + 1).",
        "Identify common factors: (x − 2) appears in both. So x = 2 is a hole.",
        "Cancel (x − 2): simplified r(x) = (x + 3)/(x + 1) for all x ≠ 2.",
        "Find the hole's x-coordinate: x − 2 = 0 → x = 2.",
        "Find the hole's y-coordinate: substitute x = 2 into simplified function: y = (2 + 3)/(2 + 1) = (5) / (3).",
        "Hole at (2, 5/3).",
        "Identify vertical asymptotes in the simplified function: denominator x + 1 = 0 → x = −1. Numerator at x = −1: (−1 + 3) = 2 ≠ 0. Vertical asymptote at x = −1.",
        "Summary: hole at (2, 5/3), vertical asymptote at x = −1.",
      ],
      answer:
        "r has a hole at (2, 5/3) and a vertical asymptote at x = −1. The value x = 2 produces cancellation (hole), while x = −1 remains in the simplified denominator only (vertical asymptote).",
    },

    commonMistakes: [
      "Finding the x-coordinate of the hole but stopping there — always find the y-coordinate too by substituting into the simplified function",
      "Calling every denominator zero a vertical asymptote — if the corresponding factor cancels with a numerator factor, it's a hole",
      "Substituting the hole's x-value into the original (unsimplified) function — this gives (0) / (0), not the y-coordinate; must use the simplified function",
      "Not factoring completely — a missed common factor leads to misidentifying a hole as a vertical asymptote",
      "Assuming a hole means the function is zero at that x — a hole means the function is undefined there, not zero",
    ],

    tip: "The four-step hole procedure: Factor. Cancel. x = (set cancelled factor = 0). y = (substitute into simplified). Write as an ordered pair. Practice this sequence until it becomes automatic — this topic consistently appears on the exam and is the most commonly missed.",

    questions: [
      {
        question_text:
          "A function r is defined by r(x) = (x − 3)/(x² − 9). Which of the following describes the feature of r at x = 3?",
        difficulty: "Easy",
        choices: [
          "A zero at x = 3",
          "A vertical asymptote at x = 3",
          "A hole at x = 3",
          "The function is defined and continuous at x = 3",
        ],
        answer_text: "A hole at x = 3",
        explanation:
          "Factor: numerator = (x − 3), denominator = (x − 3)(x + 3). Common factor: (x − 3). This cancels → hole at x = 3, not a vertical asymptote or zero.",
      },
      {
        question_text:
          "A function r is defined by r(x) = (x² − 9)/(x + 3). What are the coordinates of the hole of r?",
        difficulty: "Easy",
        choices: ["(−3, 0)", "(3, 6)", "(−3, −6)", "(3, 0)"],
        answer_text: "(−3, −6)",
        explanation:
          "Factor: numerator = (x − 3)(x + 3), denominator = (x + 3). Common factor: (x + 3). Cancel: simplified r(x) = x − 3 for x ≠ −3. Hole x-coordinate: x = −3. Hole y-coordinate: −3 − 3 = −6. Hole at (−3, −6).",
      },
      {
        question_text:
          "A function r is defined by r(x) = (2x − 6)/(x² − 3x). Which feature occurs at x = 3?",
        difficulty: "Easy",
        choices: [
          "Vertical asymptote at x = 3",
          "Zero at x = 3",
          "Hole at x = 3",
          "The function is continuous at x = 3",
        ],
        answer_text: "Hole at x = 3",
        explanation:
          "Factor: numerator = 2(x − 3), denominator = x(x − 3). Common factor: (x − 3). Cancels → hole at x = 3. The remaining denominator factor is x, giving vertical asymptote at x = 0.",
      },
      {
        question_text:
          "A function r is defined by r(x) = (x + 4)/(x² + 5x + 4). What are the coordinates of any holes of r?",
        difficulty: "Easy",
        choices: [
          "Hole at (−4, 0)",
          "Hole at (−4, −1/3)",
          "Hole at (−1, 1/3)",
          "No holes",
        ],
        answer_text: "Hole at (−4, −1/3)",
        explanation:
          "Factor denominator: x² + 5x + 4 = (x + 4)(x + 1). The numerator is (x + 4). Common factor: (x + 4). Cancel it. Hole x-coordinate: x = −4. Simplified: r(x) = 1/(x + 1). Substitute x = −4: y = 1/(−4 + 1) = 1/(−3) = −(1) / (3). Hole at (−4, −1/3).",
      },
      {
        question_text:
          "A function r is defined by r(x) = (x² − 5x + 6)/(x² − 4x + 3). Find the hole and vertical asymptote of r.",
        difficulty: "Medium",
        choices: [
          "Hole at (3, 1/2), vertical asymptote at x = 1",
          "Hole at (2, 1), vertical asymptote at x = 3",
          "Hole at (3, 1/2) only, no vertical asymptote",
          "Vertical asymptotes at x = 1 and x = 3, no holes",
        ],
        answer_text: "Hole at (3, 1/2), vertical asymptote at x = 1",
        explanation:
          "Factor numerator: (x − 2)(x − 3). Factor denominator: (x − 1)(x − 3). Common factor: (x − 3). Hole at x = 3. Simplified: (x − 2)/(x − 1). Hole y-coordinate: (3 − 2)/(3 − 1) = (1) / (2). Hole at (3, 1/2). Remaining denominator zero: x = 1. Numerator at x = 1: 1 − 2 = −1 ≠ 0. Vertical asymptote at x = 1.",
      },
      {
        question_text:
          "A function r is defined by r(x) = (x² − 1)/(x³ − x). What is the y-coordinate of the hole at x = 1?",
        difficulty: "Medium",
        choices: ["0", "1", "(1) / (2)", "Undefined — x = 1 is a vertical asymptote"],
        answer_text: "1",
        explanation:
          "Factor numerator: (x − 1)(x + 1). Factor denominator: x(x − 1)(x + 1). Common factors: both (x − 1) and (x + 1) cancel. Simplified: r(x) = 1/x. Vertical asymptote at x = 0. Holes at x = 1 and x = −1. At x = 1: substitute into simplified: y = (1) / (1) = 1. Hole at (1, 1).",
      },
      {
        question_text:
          "A function r is defined by r(x) = (3x² − 12)/(x² + x − 6). Find all holes and their coordinates.",
        difficulty: "Medium",
        choices: [
          "Hole at (2, 12/5)",
          "Hole at (−3, 6) only",
          "Holes at (2, 4) and (−3, 6)",
          "No holes; vertical asymptotes at x = 2 and x = −3",
        ],
        answer_text: "Hole at (2, 12/5)",
        explanation:
          "Factor numerator: 3x² − 12 = 3(x² − 4) = 3(x − 2)(x + 2). Factor denominator: x² + x − 6 = (x + 3)(x − 2). Common factor: (x − 2). Cancel it. Hole x-coordinate: x = 2. Simplified: 3(x + 2)/(x + 3). Hole y-coordinate: substitute x = 2: 3(2 + 2)/(2 + 3) = 3(4)/5 = (12) / (5). Hole at (2, 12/5). Remaining denominator zero at x = −3 is a vertical asymptote (numerator at x = −3: 3(−1) = −3 ≠ 0).",
      },
      {
        question_text:
          "A function r is defined by r(x) = (x³ − 8)/(x² − 4). Which of the following is true about the features of r?",
        difficulty: "Medium",
        choices: [
          "Hole at x = 2 and vertical asymptote at x = −2",
          "Vertical asymptotes at x = 2 and x = −2; no holes",
          "Hole at x = −2 and vertical asymptote at x = 2",
          "Holes at both x = 2 and x = −2",
        ],
        answer_text: "Hole at x = 2 and vertical asymptote at x = −2",
        explanation:
          "Factor numerator: x³ − 8 = (x − 2)(x² + 2x + 4). Factor denominator: x² − 4 = (x − 2)(x + 2). Common factor: (x − 2). Hole at x = 2. After canceling: simplified r(x) = (x² + 2x + 4)/(x + 2). At x = −2, denominator = 0 and numerator = 4 − 4 + 4 = 4 ≠ 0. Vertical asymptote at x = −2.",
      },
      {
        question_text:
          "A function r is defined by r(x) = (x² − 4x + 4)/(x² − 4). Find any holes and their exact coordinates.",
        difficulty: "Hard",
        choices: [
          "Hole at (2, 0)",
          "Hole at (−2, 4) only",
          "Vertical asymptote at x = 2; hole at (−2, 4)",
          "No holes; vertical asymptotes at x = 2 and x = −2",
        ],
        answer_text: "Hole at (2, 0)",
        explanation:
          "Factor numerator: x² − 4x + 4 = (x − 2)². Factor denominator: x² − 4 = (x − 2)(x + 2). Common factor: one (x − 2). Cancel it. Simplified: (x − 2)/(x + 2). Hole x-coordinate: x = 2. Hole y-coordinate: (2 − 2)/(2 + 2) = (0) / (4) = 0. Hole at (2, 0). Remaining denominator: (x + 2) = 0 → x = −2. Numerator at x = −2: −2 − 2 = −4 ≠ 0. Vertical asymptote at x = −2. Answer: hole at (2, 0); vertical asymptote at x = −2.",
      },
      {
        question_text:
          "A function r is defined by r(x) = (x³ − x)/(x² − 1). Which of the following correctly identifies all holes and vertical asymptotes of r?",
        difficulty: "Hard",
        choices: [
          "Holes at (1, 1) and (−1, −1); no vertical asymptotes",
          "Vertical asymptotes at x = 1 and x = −1; no holes",
          "Hole at (1, 1) only; vertical asymptote at x = −1",
          "Vertical asymptote at x = 0; holes at x = 1 and x = −1",
        ],
        answer_text: "Holes at (1, 1) and (−1, −1); no vertical asymptotes",
        explanation:
          "Factor numerator: x³ − x = x(x − 1)(x + 1). Factor denominator: x² − 1 = (x − 1)(x + 1). Common factors: (x − 1) and (x + 1) — both cancel completely. Simplified: r(x) = x for all x ≠ 1 and x ≠ −1. There are NO vertical asymptotes (all denominator zeros cancelled). Hole at x = 1: y = 1. Hole at x = −1: y = −1. Both are holes, not asymptotes. The graph is the line y = x with two open circles at (1, 1) and (−1, −1).",
      },
    ],
  },
}
