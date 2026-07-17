import type { LessonContent } from './lesson-content'

export const UNIT1_PART3: Record<string, LessonContent> = {
  "1.11": {
    essentialQuestion:
      "Why do mathematicians write the same expression in multiple forms, and how do different forms reveal different features of a polynomial or rational function?",

    apBoardNote:
      "Lesson 1.11 addresses CED Topic 1.11 (Equivalent Representations of Polynomial and Rational Expressions). FRQ prompts frequently ask students to 'write an expression in a form that reveals [specific feature]' — this is not a computation task, it is a representation-selection task. Students must be fluent in recognizing which form exposes which feature: factored form for zeros, standard form for end behavior and y-intercept, vertex form for vertex and axis of symmetry, and divided form (quotient + remainder/divisor) for slant asymptotes and end behavior of rational functions. Polynomial long division is a tested skill and appears both in isolation and embedded in rational function analysis.",

    teacherNote:
      "Students frequently memorize procedures for converting between forms without internalizing the purpose of each form. The conceptual gap is significant: they can complete a long division but cannot articulate what the quotient tells them about the rational function. Focus scaffolding here — require students to state out loud or in writing what feature they are trying to read before they choose a form. A common diagnostic: show a function in standard form and ask what form would best reveal the zeros. Students who hesitate are missing the representational layer. Also watch for confusion between the remainder theorem and polynomial long division — they are related but serve different reading purposes.",

    studentVoice:
      "It clicked when I realized it's like reading a map vs. a satellite photo of the same place — same information, but each format shows you different things at a glance. Standard form shows me where the graph ends up going. Factored form tells me where it crosses the x-axis. I don't have to memorize which to use — I just ask myself what I'm trying to see.",

    narration: [
      "Every polynomial and rational expression can be written in multiple algebraically equivalent forms. 'Equivalent' means they produce exactly the same output for every input — but that does not mean they are equally readable. Different forms foreground different features of the function's behavior. The core skill in this lesson is not performing algebraic manipulation — it is knowing which form to reach for when you need to answer a specific question.",
      "Standard form, ax² + bx + c for a quadratic (or the general aₙxⁿ + … + a₀ form for higher-degree polynomials), is the baseline. Its greatest strength is readability of the leading term: the degree and leading coefficient together determine end behavior. The constant term a₀ is the y-intercept directly. But standard form hides the zeros — you have to factor or use the quadratic formula to find them, so it is not the right form when zeros are the question.",
      "Factored form, a(x − r₁)(x − r₂)…(x − rₙ), makes zeros visible by inspection. The zeros are exactly r₁, r₂, …, rₙ — the values of x that make each factor zero. Multiplicity matters: if a factor (x − r) appears squared, the graph touches the x-axis at r and turns back rather than crossing. Factored form also preserves the leading coefficient a, which anchors end behavior, but it buries the y-intercept (you have to evaluate at x = 0). Factored form is the form of choice when the exam asks about intercepts, sign analysis, or multiplicity.",
      "Vertex form, a(x − h)² + k, applies specifically to quadratic functions. It places the vertex (h, k) front and center and makes the axis of symmetry x = h immediately readable. The parameter a still gives vertical stretch and reflection. Vertex form is obtained by completing the square from standard form. When an exam question says 'the minimum value of f is…' or 'the axis of symmetry is…', vertex form is the representation that answers the question without additional computation.",
      "For rational functions, polynomial long division converts an improper rational expression (degree of numerator ≥ degree of denominator) into quotient + remainder/divisor form. For example, (x² + 3x + 1)/(x − 2) becomes (x + 5) + 11/(x − 2). This is powerful: as x → ±∞, the remainder term 11/(x − 2) → 0, so the function approaches the line y = x + 5. That line is a slant asymptote. Long division is therefore the key technique for identifying oblique/slant asymptotes and for understanding rational function end behavior. The exam tests whether you can perform the division and then interpret what the quotient represents.",
      "The unifying principle: ask yourself 'what am I trying to read?' before you choose a form. Zeros? Reach for factored form. End behavior or y-intercept? Standard form. Vertex or minimum/maximum? Vertex form. Slant asymptote of a rational? Do long division. This question-first habit is what separates students who lose points on 'write in a form that reveals…' questions from students who earn full credit. The algebraic manipulation is secondary — the representation choice is primary.",
      "On the AP exam, you will see prompts like: 'Write f(x) in a form that reveals its zeros' or 'Use an appropriate form of g(x) to identify the vertex.' These are not asking you to simplify — they are asking you to demonstrate that you understand what each form communicates. Equally important: recognize when a form is given to you and extract the feature it reveals. If a function is given in vertex form, read the vertex immediately rather than expanding to standard form first."
    ],

    priorKnowledge: [
      "Factoring quadratics and higher-degree polynomials (GCF, difference of squares, trinomial factoring)",
      "Completing the square to convert standard form to vertex form",
      "The zero product property: if ab = 0 then a = 0 or b = 0",
      "Polynomial long division algorithm (analogous to integer long division)",
      "Degree and leading coefficient determine end behavior of polynomials"
    ],

    connections: [
      "Lesson 1.4 (zeros and factors): factored form is the direct representation of the zero-factor relationship",
      "Lesson 1.8 (rational functions): long division reveals the slant/horizontal asymptote of improper rational expressions",
      "Lesson 1.14 (model construction): choosing the right form is essential for interpreting constructed models",
      "SAT Math: vertex form appears frequently in quadratic problems asking for maximum/minimum values"
    ],

    concepts: [
      "Standard form reveals: end behavior (leading term), y-intercept (constant term), degree",
      "Factored form reveals: real zeros (x-intercepts), multiplicity of each zero, sign behavior",
      "Vertex form reveals: vertex coordinates (h, k), axis of symmetry x = h, direction of opening",
      "Polynomial long division converts improper rational to quotient + remainder/divisor",
      "The quotient from long division of a rational function gives the slant or horizontal asymptote",
      "Equivalent forms have identical output values but foreground different structural features"
    ],

    keyFormula:
      "Rational form after long division: P(x)/D(x) = Q(x) + R(x)/D(x), where degree(R) < degree(D). As x → ±∞, R(x)/D(x) → 0, so f(x) → Q(x) (the asymptote).",

    keyTerms: [
      { term: "Standard form", definition: "A polynomial written as aₙxⁿ + aₙ₋₁xⁿ⁻¹ + … + a₁x + a₀; reveals end behavior and y-intercept directly." },
      { term: "Factored form", definition: "A polynomial written as a(x − r₁)(x − r₂)…(x − rₙ); reveals real zeros and their multiplicities." },
      { term: "Vertex form", definition: "A quadratic written as a(x − h)² + k; reveals the vertex (h, k) and axis of symmetry x = h." },
      { term: "Multiplicity", definition: "The number of times a particular zero appears as a factor; even multiplicity → graph touches axis; odd → graph crosses." },
      { term: "Polynomial long division", definition: "An algorithm for dividing polynomials analogous to integer long division; used to rewrite improper rational expressions." },
      { term: "Slant (oblique) asymptote", definition: "A non-horizontal line that the graph of a rational function approaches as x → ±∞; found when degree of numerator is exactly one more than degree of denominator." }
    ],

    workedExample: {
      problem:
        "The function f is defined by f(x) = x² − 6x + 5. (a) Write f in a form that reveals its zeros. (b) Write f in a form that reveals its vertex. (c) State the y-intercept from standard form.",
      steps: [
        "Part (a) — Factored form to reveal zeros: Factor x² − 6x + 5. Find two numbers that multiply to 5 and add to −6: those are −1 and −5. So f(x) = (x − 1)(x − 5). Zeros: x = 1 and x = 5.",
        "Part (b) — Vertex form by completing the square: f(x) = x² − 6x + 5. Take half of −6: that is −3. Square it: 9. Add and subtract 9 inside: f(x) = (x² − 6x + 9) − 9 + 5 = (x − 3)² − 4. Vertex is (3, −4); axis of symmetry is x = 3.",
        "Part (c) — Y-intercept from standard form: In f(x) = x² − 6x + 5, the constant term is 5. Therefore the y-intercept is (0, 5). Verify: f(0) = 0 − 0 + 5 = 5. ✓"
      ],
      answer:
        "Factored: f(x) = (x − 1)(x − 5), zeros at x = 1 and x = 5. Vertex form: f(x) = (x − 3)² − 4, vertex at (3, −4). Y-intercept: (0, 5)."
    },

    workedExample2: {
      problem:
        "A rational function is defined by g(x) = (2x² + x − 3)/(x − 1). (a) Use polynomial long division to rewrite g in the form Q(x) + R/(x − 1). (b) Identify the slant asymptote. (c) Identify any vertical asymptote or hole.",
      steps: [
        "Step 1 — Set up long division: Divide 2x² + x − 3 by (x − 1).",
        "Step 2 — First term of quotient: 2x² ÷ x = 2x. Multiply: 2x(x − 1) = 2x² − 2x. Subtract: (2x² + x − 3) − (2x² − 2x) = 3x − 3.",
        "Step 3 — Second term of quotient: 3x ÷ x = 3. Multiply: 3(x − 1) = 3x − 3. Subtract: (3x − 3) − (3x − 3) = 0.",
        "Step 4 — Result: g(x) = 2x + 3 + 0/(x − 1) = 2x + 3. The remainder is 0, meaning (x − 1) divides evenly.",
        "Step 5 — Check for hole vs. asymptote: Factor numerator to confirm. 2x² + x − 3 = (2x + 3)(x − 1). The factor (x − 1) cancels. So x = 1 is a HOLE (removable discontinuity), not a vertical asymptote.",
        "Step 6 — Slant asymptote: Since the remainder is 0 and the division is exact, g(x) = 2x + 3 everywhere except x = 1. There is no asymptote — the function is the line y = 2x + 3 with a hole at x = 1. If remainder were nonzero, the slant asymptote would be y = 2x + 3."
      ],
      answer:
        "g(x) = 2x + 3 (with a hole at x = 1). The function simplifies completely to a linear function; the slant 'asymptote' is the line y = 2x + 3 itself. Vertical asymptote: none (the discontinuity at x = 1 is removable)."
    },

    commonMistakes: [
      "Reading the vertex from standard form as (b, c) instead of completing the square or using h = −b/(2a)",
      "Confusing a hole (removable discontinuity from a canceled factor) with a vertical asymptote",
      "Applying long division but failing to interpret the quotient as the asymptote — treating the result as 'just algebra'",
      "In factored form, writing the zeros as the values inside the factors (e.g., writing zero as −r instead of r for factor (x − r))",
      "Assuming that because two forms are algebraically equivalent they reveal the same information equally well — choosing the wrong form for a given question"
    ],

    tip: "When a question says 'write in a form that reveals…', circle the word after 'reveals' and map it to a form before you write anything. Zeros → factored. Vertex → vertex form. End behavior → standard (leading term). Slant asymptote → do long division. One second of planning prevents losing the point.",

    questions: [
      {
        question_text: "Which form of f(x) = x² − 4x − 12 most directly reveals the x-intercepts of the graph?",
        difficulty: "Easy",
        choices: [
          "A. f(x) = x² − 4x − 12",
          "B. f(x) = (x − 6)(x + 2)",
          "C. f(x) = (x − 2)² − 16",
          "D. f(x) = x(x − 4) − 12"
        ],
        answer_text: "B",
        explanation: "Factored form (x − 6)(x + 2) directly reveals the zeros x = 6 and x = −2 by the zero product property. Standard form (A) requires additional work to find zeros. Vertex form (C) reveals the vertex, not the zeros. Option D is partially factored and still requires more steps."
      },
      {
        question_text: "A function is given by f(x) = 3(x − 2)² + 7. What is the minimum value of f?",
        difficulty: "Easy",
        choices: [
          "A. −2",
          "B. 2",
          "C. 7",
          "D. 3"
        ],
        answer_text: "C",
        explanation: "In vertex form a(x − h)² + k, the vertex is (h, k). Here h = 2 and k = 7. Since a = 3 > 0 the parabola opens upward and the vertex is a minimum. The minimum value is k = 7."
      },
      {
        question_text: "The function g(x) = −2(x + 1)(x − 3) is written in factored form. What is the y-intercept of g?",
        difficulty: "Easy",
        choices: [
          "A. −6",
          "B. 6",
          "C. −2",
          "D. 3"
        ],
        answer_text: "B",
        explanation: "To find the y-intercept, evaluate g(0): g(0) = −2(0 + 1)(0 − 3) = −2(1)(−3) = 6. The y-intercept is (0, 6)."
      },
      {
        question_text: "For the polynomial p(x) = 4x³ − 7x + 2, which feature is most directly readable from this standard form?",
        difficulty: "Easy",
        choices: [
          "A. The zeros of p",
          "B. The vertex of p",
          "C. The end behavior and y-intercept of p",
          "D. The axis of symmetry of p"
        ],
        answer_text: "C",
        explanation: "Standard form reveals end behavior through the leading term (4x³ → as x→∞, p→∞; as x→−∞, p→−∞) and the y-intercept through the constant term (p(0) = 2). The zeros require factoring; vertex form applies only to quadratics; polynomials of degree ≥ 3 do not have a single axis of symmetry."
      },
      {
        question_text: "After performing polynomial long division, a student finds that (x² + 5x + 3)/(x + 2) = (x + 3) + (−3)/(x + 2). What does the expression (x + 3) represent in relation to the rational function's graph?",
        difficulty: "Medium",
        choices: [
          "A. The vertical asymptote",
          "B. The slant asymptote",
          "C. The x-intercepts",
          "D. The y-intercept"
        ],
        answer_text: "B",
        explanation: "After long division, the rational function equals Q(x) + R/(x + 2). As x → ±∞, the remainder term R/(x + 2) → 0, so the function approaches Q(x) = x + 3. This line is the slant (oblique) asymptote of the rational function."
      },
      {
        question_text: "A function f is defined by f(x) = x² + 6x + k. For what value of k does f have exactly one real zero?",
        difficulty: "Medium",
        choices: [
          "A. k = 3",
          "B. k = 6",
          "C. k = 9",
          "D. k = 12"
        ],
        answer_text: "C",
        explanation: "Exactly one real zero means the discriminant equals zero: b² − 4ac = 0. Here a = 1, b = 6, c = k. So 36 − 4k = 0 → k = 9. In vertex form: f(x) = (x + 3)² + (k − 9); when k = 9 the vertex is at (−3, 0), confirming exactly one zero at x = −3."
      },
      {
        question_text: "The function h(x) = (x² − 9)/(x + 3). Which of the following correctly describes the graph of h?",
        difficulty: "Medium",
        choices: [
          "A. A line with a vertical asymptote at x = −3",
          "B. A line with a hole at x = −3",
          "C. A parabola with a vertical asymptote at x = −3",
          "D. A parabola with a hole at (−3, 0)"
        ],
        answer_text: "B",
        explanation: "Factor the numerator: x² − 9 = (x − 3)(x + 3). Then h(x) = (x − 3)(x + 3)/(x + 3). The factor (x + 3) cancels, giving h(x) = x − 3 for x ≠ −3. This is a line with a hole (removable discontinuity) at x = −3, where h(−3) is undefined. The hole is at the point (−3, −6)."
      },
      {
        question_text: "A quadratic function passes through (0, 5), has zeros at x = 1 and x = 5, and opens upward. Which of the following is the equation of this function?",
        difficulty: "Medium",
        choices: [
          "A. f(x) = (x − 1)(x − 5)",
          "B. f(x) = −(x − 1)(x − 5)",
          "C. f(x) = (x + 1)(x + 5)",
          "D. f(x) = 2(x − 1)(x − 5)"
        ],
        answer_text: "A",
        explanation: "Zeros at x = 1 and x = 5 give factored form a(x − 1)(x − 5). Use the y-intercept (0, 5): a(0 − 1)(0 − 5) = 5a = 5 → a = 1. So f(x) = (x − 1)(x − 5). Check: opens upward since a = 1 > 0. ✓"
      },
      {
        question_text: "Let f(x) = 2x³ − 3x² − 11x + 6. Given that (x − 3) is a factor, use polynomial long division to determine which of the following is an equivalent factored form of f(x).",
        difficulty: "Hard",
        choices: [
          "A. (x − 3)(2x² + 3x − 2)",
          "B. (x − 3)(2x² − 3x + 2)",
          "C. (x − 3)(2x² + 3x + 2)",
          "D. (x + 3)(2x² − 3x − 2)"
        ],
        answer_text: "A",
        explanation: "Divide 2x³ − 3x² − 11x + 6 by (x − 3). First term: 2x³/x = 2x². Multiply: 2x²(x − 3) = 2x³ − 6x². Subtract: (−3x² + 6x²) = 3x². Bring down: 3x² − 11x. Next term: 3x²/x = 3x. Multiply: 3x(x − 3) = 3x² − 9x. Subtract: −11x + 9x = −2x. Bring down: −2x + 6. Next term: −2x/x = −2. Multiply: −2(x − 3) = −2x + 6. Subtract: 0. Quotient: 2x² + 3x − 2. So f(x) = (x − 3)(2x² + 3x − 2)."
      },
      {
        question_text: "A rational function is defined by r(x) = (3x² − 5x + 1)/(x − 2). Which of the following correctly identifies the slant asymptote of r?",
        difficulty: "Hard",
        choices: [
          "A. y = 3x + 1",
          "B. y = 3x − 11",
          "C. y = 3x + 11",
          "D. y = 3x − 1"
        ],
        answer_text: "D",
        explanation: "Perform polynomial long division of 3x² − 5x + 1 by (x − 2). First term: 3x² / x = 3x. Multiply: 3x(x − 2) = 3x² − 6x. Subtract: (−5x + 6x) = x. Bring down: x + 1. Next term: x / x = 1. Multiply: 1(x − 2) = x − 2. Subtract: 1 − (−2) = 3. So r(x) = (3x − 1) + 3/(x − 2). As x → ±∞, the remainder term 3/(x − 2) → 0. The slant asymptote is y = 3x − 1."
      }
    ]
  },

  "1.12": {
    essentialQuestion:
      "How does each parameter in g(x) = a·f(b(x − h)) + k transform the parent function f, and in what order do those transformations apply?",

    apBoardNote:
      "Lesson 1.12 addresses CED Topic 1.12 (Transformations of Functions). This is among the highest-frequency topics on both the multiple-choice and free-response sections. Students must be able to (1) describe each transformation from an equation, (2) apply transformations in correct order to a graph, and (3) write the equation of a transformed function given the parent and a verbal or graphical description. Common FRQ formats: given a graph of f, sketch g(x) = −2f(x + 1) − 3; or given a table of values for f, produce a table for a transformed version. The parameter b (horizontal dilation/compression) is the most frequently misread — emphasize that f(b(x − h)) compresses horizontally by factor 1/|b|, not stretches.",

    teacherNote:
      "The most persistent scaffolding gap here is order of operations for horizontal transformations. Students understand vertical shifts and stretches quickly but consistently misapply horizontal changes. Two specific confusions: (1) they read f(x + 2) as a shift right when it is left; (2) they read f(3x) as a stretch by 3 when it is a compression by (1) / (3). A hands-on approach that works well: have students trace a single point, like the vertex of a parabola, through each transformation step-by-step, verifying the output coordinates. Also scaffold the distinction between the transformation description ('reflects over x-axis') and the equation change (negate the a parameter) — students often confuse which parameter controls which transformation.",

    studentVoice:
      "The horizontal shift used to trip me up every time. Now I remember it this way: f(x − h) shifts RIGHT because you need x to be BIGGER to get the same output you used to get at x = 0. The minus inside the function tricks your eye — but the graph actually goes the direction opposite to what the sign says.",

    narration: [
      "Transformations of functions describe how the graph of a new function g relates to the graph of a known parent function f. Rather than analyzing g from scratch, transformations let you read off the relationship between the two graphs directly from the equation. The general template is g(x) = a · f(b(x − h)) + k. Each of the four parameters a, b, h, k controls one type of transformation. Learning to decode these four parameters is the core skill of this lesson.",
      "The parameter k controls vertical translation. Adding k outside the function shifts every point on f's graph up by k units (if k > 0) or down by |k| units (if k < 0). This makes sense because the output of g is always k more than the output of f at the same input. Vertical shifts are the most intuitive transformation — the graph simply moves up or down as a rigid body. The shape, orientation, and width of the curve are unchanged.",
      "The parameter h controls horizontal translation, and this is where most errors occur. The expression f(x − h) shifts the graph RIGHT by h units when h > 0, and LEFT by |h| units when h < 0. The confusion is that the minus sign makes it look backwards. The logic: to get the same output that f produces at x = 0, you now need to input x = h into g, because g(h) = f(h − h) = f(0). So the graph moves to the right when h is positive. Always read horizontal shifts from the factored form (x − h) — if written as f(x + 2), rewrite as f(x − (−2)) to read h = −2 (shift left 2).",
      "The parameter a controls vertical dilation and reflection. If |a| > 1, the graph stretches vertically (away from the x-axis) by factor |a|. If 0 < |a| < 1, it compresses vertically (toward the x-axis). If a < 0, there is also a reflection over the x-axis — every positive output becomes negative and vice versa. These two effects (dilation and reflection) are both encoded in a single parameter, so if a = −3, the graph is reflected over the x-axis AND stretched vertically by 3.",
      "The parameter b controls horizontal dilation and reflection. The graph of f(b·x) is compressed horizontally by factor 1/|b| when |b| > 1, or stretched horizontally by 1/|b| when 0 < |b| < 1. Note the counterintuitive direction: multiplying inside by a number greater than 1 makes the graph narrower, not wider. If b < 0, the graph is also reflected over the y-axis. This is the most counterintuitive parameter. To internalize it: f(3x) reaches the same output in (1) / (3) the horizontal distance, so it looks compressed.",
      "The order of applying transformations matters when both horizontal dilation and horizontal shift are present. The correct order for g(x) = a · f(b(x − h)) + k: (1) horizontal shift right h units, (2) horizontal compression/stretch by factor 1/|b|, (3) reflection over y-axis if b < 0, (4) vertical stretch/compression by |a|, (5) reflection over x-axis if a < 0, (6) vertical shift up k units. A practical rule: transformations inside f() happen first; transformations outside f() happen after. Always factor out b from the inside argument before reading h: f(3x − 6) should be rewritten as f(3(x − 2)) to correctly read h = 2.",
      "On the AP exam, transformation questions appear in three formats. First, given an equation for g in terms of f, describe all transformations. Second, given a graph of f, sketch the transformed graph g. Third, given points or a table of f and a transformation, produce the corresponding table for g. For the table approach: apply each transformation to the coordinates of known points. If (x, y) is on f, then a point on g(x) = 2f(x − 3) + 1 is (x + 3, 2y + 1). This coordinate-transformation approach is reliable for all transformation types."
    ],

    priorKnowledge: [
      "Parent function graphs: f(x) = x², f(x) = x³, f(x) = |x|, f(x) = √x, f(x) = 1/x",
      "Function notation and evaluating functions at specific inputs",
      "The concept of reflection over the x-axis and y-axis as sign changes in output or input",
      "Reading coordinates from a graph and plotting points",
      "Order of operations with algebraic expressions"
    ],

    connections: [
      "Lesson 1.4 (function behavior): transformations change where local maxima/minima occur — shift the x-coordinate by h and scale y by |a|",
      "Lesson 1.8 (rational functions): horizontal/vertical asymptotes shift under translations; g(x) = 1/(x − 3) + 2 has asymptotes x = 3 and y = 2",
      "Unit 2 (exponential functions): g(x) = 3 · 2^(x+1) − 5 is a transformed exponential — same framework",
      "Trigonometry (future): amplitude, period, phase shift, and vertical shift of sinusoidal functions are the trig analogue of a, b, h, k"
    ],

    concepts: [
      "k (outside): vertical shift — up k if k > 0, down |k| if k < 0",
      "h (inside, subtracted): horizontal shift — right h if h > 0, left |h| if h < 0",
      "a (outside multiplier): vertical dilation by |a|; reflection over x-axis if a < 0",
      "b (inside multiplier): horizontal compression by 1/|b|; reflection over y-axis if b < 0",
      "Correct order: horizontal transformations (inside) before vertical transformations (outside)",
      "To find transformed coordinates: if (x, y) is on f, then (x/b + h, ay + k) is on g(x) = a·f(b(x − h)) + k"
    ],

    keyFormula:
      "g(x) = a · f(b(x − h)) + k. Parameter effects: k → vertical shift up k; h → horizontal shift right h; |a| → vertical stretch/compression; |b| → horizontal compression by 1/|b|; negative a → reflect over x-axis; negative b → reflect over y-axis.",

    keyTerms: [
      { term: "Vertical translation", definition: "A rigid shift of the entire graph up or down; controlled by the parameter k in g(x) = f(x) + k." },
      { term: "Horizontal translation", definition: "A rigid shift of the entire graph left or right; controlled by h in g(x) = f(x − h); positive h shifts right." },
      { term: "Vertical dilation", definition: "A stretch or compression of the graph away from or toward the x-axis; controlled by |a| in g(x) = a·f(x)." },
      { term: "Horizontal dilation", definition: "A stretch or compression of the graph away from or toward the y-axis; controlled by 1/|b| in g(x) = f(bx)." },
      { term: "Reflection over x-axis", definition: "A transformation that negates all y-values; occurs when a < 0 in g(x) = a·f(x)." },
      { term: "Reflection over y-axis", definition: "A transformation that negates all x-values (mirrors the graph horizontally); occurs when b < 0 in g(x) = f(bx)." }
    ],

    workedExample: {
      problem:
        "Let f(x) be a function with vertex at (0, 0) on its graph. Define g(x) = −2f(x − 3) + 5. Describe all transformations applied to f to obtain g, and state the location of the transformed vertex.",
      steps: [
        "Identify each parameter: a = −2, b = 1, h = 3, k = 5.",
        "Horizontal shift: h = 3 > 0, so shift right 3 units. The vertex moves from (0, 0) to (3, 0).",
        "Horizontal dilation: b = 1, so no horizontal compression or stretch.",
        "Vertical dilation: |a| = 2, so vertical stretch by factor 2. The y-coordinate of the vertex is still 0 at this stage: (3, 0).",
        "Reflection over x-axis: a = −2 < 0, so reflect over x-axis. Vertex y-coordinate: −1 × 0 = 0. Still (3, 0).",
        "Vertical shift: k = 5, so shift up 5. Vertex moves to (3, 5).",
        "Summary of transformations (in order): (1) shift right 3, (2) stretch vertically by 2, (3) reflect over x-axis, (4) shift up 5."
      ],
      answer:
        "The graph is shifted right 3, stretched vertically by factor 2, reflected over the x-axis, then shifted up 5. The transformed vertex is at (3, 5)."
    },

    workedExample2: {
      problem:
        "A function f has known points: (−2, 4), (0, 1), (2, 4). Define g(x) = (1/2)f(2(x + 1)) − 3. Construct a table of corresponding points on g.",
      steps: [
        "Identify parameters: a = (1) / (2), b = 2, h = −1 (since inside is f(2(x − (−1)))), k = −3.",
        "Transformation of input: for each original x-value on f, the new x-value on g satisfies x_g = x_f / b + h = x_f / 2 + (−1).",
        "Transformation of output: y_g = a · y_f + k = (1/2) · y_f − 3.",
        "Point (−2, 4) on f: x_g = (−2)/2 + (−1) = −1 + (−1) = −2. y_g = (1/2)(4) − 3 = 2 − 3 = −1. New point: (−2, −1).",
        "Point (0, 1) on f: x_g = (0) / (2) + (−1) = −1. y_g = (1/2)(1) − 3 = 0.5 − 3 = −2.5. New point: (−1, −2.5).",
        "Point (2, 4) on f: x_g = (2) / (2) + (−1) = 1 − 1 = 0. y_g = (1/2)(4) − 3 = 2 − 3 = −1. New point: (0, −1).",
        "Verify interpretation: g(x) = (1/2)f(2(x + 1)) − 3. Check g(−1): g(−1) = (1/2)f(2(0)) − 3 = (1/2)f(0) − 3 = (1/2)(1) − 3 = −2.5. ✓"
      ],
      answer:
        "Transformed points on g: (−2, −1), (−1, −2.5), (0, −1). The horizontal compression by (1) / (2) and leftward shift by 1, combined with vertical compression by (1) / (2) and downward shift by 3, map the original points to these new locations."
    },

    commonMistakes: [
      "Reading f(x + 2) as a shift right 2 when it is actually a shift LEFT 2 (h = −2 in (x − h) form)",
      "Reading f(3x) as a horizontal stretch by 3 when it is a COMPRESSION by factor (1) / (3)",
      "Failing to factor out b before identifying h — reading f(2x − 6) as h = 6 instead of rewriting as f(2(x − 3)) to get h = 3",
      "Applying vertical transformations before horizontal ones when both are present inside the same expression",
      "Neglecting the order when combining reflection and dilation — the magnitude |a| and sign of a are both part of the same parameter"
    ],

    tip: "When you see f(bx − c), always factor: f(b(x − c/b)). Then h = c/b, not c. This single step eliminates the most common horizontal-shift error on the AP exam.",

    questions: [
      {
        question_text: "A function g is defined by g(x) = f(x) + 4 where f is a parent function. Which transformation does this represent?",
        difficulty: "Easy",
        choices: [
          "A. Horizontal shift right 4",
          "B. Vertical shift up 4",
          "C. Vertical stretch by 4",
          "D. Horizontal compression by (1) / (4)"
        ],
        answer_text: "B",
        explanation: "Adding a constant outside the function notation, f(x) + k, produces a vertical shift up by k. Here k = 4, so every point on f moves up 4 units. This matches g(x) = f(x) + 4."
      },
      {
        question_text: "The graph of g(x) = f(x − 5) is obtained from the graph of f by which transformation?",
        difficulty: "Easy",
        choices: [
          "A. Shift left 5",
          "B. Shift right 5",
          "C. Shift down 5",
          "D. Shift up 5"
        ],
        answer_text: "B",
        explanation: "f(x − h) shifts the graph right h units when h > 0. Here h = 5 (positive), so the graph shifts right 5 units. This is the standard horizontal translation rule: subtracting from the input shifts in the positive x-direction."
      },
      {
        question_text: "Let f(x) be a function and define g(x) = −f(x). Which transformation does this represent?",
        difficulty: "Easy",
        choices: [
          "A. Reflection over the y-axis",
          "B. Reflection over the x-axis",
          "C. Vertical compression by −1",
          "D. Horizontal reflection"
        ],
        answer_text: "B",
        explanation: "Negating the output — multiplying the function by −1 — reflects the graph over the x-axis. Every point (x, y) on f maps to (x, −y) on g. This is a reflection over the x-axis, not the y-axis."
      },
      {
        question_text: "A function f has a point at (2, 6). If g(x) = f(x) + 3, what is the corresponding point on g?",
        difficulty: "Easy",
        choices: [
          "A. (5, 6)",
          "B. (2, 9)",
          "C. (2, 3)",
          "D. (5, 9)"
        ],
        answer_text: "B",
        explanation: "A vertical shift by k = 3 moves each point (x, y) to (x, y + 3). The x-coordinate is unchanged. So (2, 6) on f maps to (2, 6 + 3) = (2, 9) on g."
      },
      {
        question_text: "The function g(x) = f(3x) is obtained from f by which transformation?",
        difficulty: "Medium",
        choices: [
          "A. Horizontal stretch by factor 3",
          "B. Vertical stretch by factor 3",
          "C. Horizontal compression by factor (1) / (3)",
          "D. Vertical compression by factor (1) / (3)"
        ],
        answer_text: "C",
        explanation: "Multiplying the input by b = 3 compresses the graph horizontally by factor 1/b = (1) / (3). Points that were at x now appear at x/3. The graph looks 'narrower.' This is horizontal compression, not stretch, because |b| > 1."
      },
      {
        question_text: "Let g(x) = 2f(x + 1) − 3. A point on f is (−1, 4). What is the corresponding point on g?",
        difficulty: "Medium",
        choices: [
          "A. (−2, 5)",
          "B. (0, 5)",
          "C. (−2, 8)",
          "D. (−1, 5)"
        ],
        answer_text: "A",
        explanation: "Rewrite g(x) = 2f(x − (−1)) − 3, so a = 2, h = −1, k = −3. A point (x_f, y_f) on f maps to (x_f + h, a·y_f + k) = (x_f − 1, 2y_f − 3). For (−1, 4): x_g = −1 + (−1) = −2; y_g = 2(4) − 3 = 5. Answer: (−2, 5)."
      },
      {
        question_text: "The function g(x) = f(2x − 6). Which correctly identifies the transformations applied to f?",
        difficulty: "Medium",
        choices: [
          "A. Horizontal shift right 6, then horizontal compression by (1) / (2)",
          "B. Horizontal compression by (1) / (2), then horizontal shift right 3",
          "C. Horizontal shift right 3, then horizontal compression by (1) / (2)",
          "D. Horizontal compression by (1) / (2), then horizontal shift right 6"
        ],
        answer_text: "C",
        explanation: "First factor: f(2x − 6) = f(2(x − 3)). Now the form is f(b(x − h)) with b = 2, h = 3. Transformations: (1) shift right 3, then (2) compress horizontally by (1) / (2). Note: reading without factoring would incorrectly give h = 6."
      },
      {
        question_text: "A function f has vertex (0, 0). If g(x) = −3f(x + 2) + 1, where is the vertex of g?",
        difficulty: "Medium",
        choices: [
          "A. (2, 1)",
          "B. (−2, 1)",
          "C. (2, −1)",
          "D. (−2, −1)"
        ],
        answer_text: "B",
        explanation: "Parameters: a = −3, h = −2 (since inside is f(x − (−2))), k = 1. The vertex (0, 0) on f transforms to: x_g = 0 + h = 0 + (−2) = −2; y_g = a·0 + k = 0 + 1 = 1. Transformed vertex: (−2, 1)."
      },
      {
        question_text: "A function f satisfies f(1) = 4, f(2) = 7, f(3) = 4. Define g(x) = f(−x + 4). Which set of points lies on g?",
        difficulty: "Hard",
        choices: [
          "A. (3, 4), (2, 7), (1, 4)",
          "B. (−1, 4), (−2, 7), (−3, 4)",
          "C. (5, 4), (6, 7), (7, 4)",
          "D. (3, 4), (2, 7), (1, 4) — same as A but reflected"
        ],
        answer_text: "A",
        explanation: "g(x) = f(−x + 4) = f(−(x − 4)). This is a reflection over y-axis (b = −1) composed with a horizontal shift. For g to use f(1), set −x + 4 = 1 → x = 3: g(3) = f(1) = 4. For f(2): −x + 4 = 2 → x = 2: g(2) = f(2) = 7. For f(3): −x + 4 = 3 → x = 1: g(1) = f(3) = 4. Points on g: (3, 4), (2, 7), (1, 4)."
      },
      {
        question_text: "A student claims that g(x) = f(−2(x − 1)) + 5 involves the following transformations in order: (1) horizontal shift right 1, (2) horizontal compression by (1) / (2), (3) reflection over y-axis, (4) vertical shift up 5. Which part of the student's description, if any, is incorrect?",
        difficulty: "Hard",
        choices: [
          "A. The order is wrong; the reflection over y-axis should come before the horizontal compression",
          "B. The student is correct; all four transformations are described accurately and in the correct order",
          "C. The horizontal compression factor is wrong; it should be compression by 2, not (1) / (2)",
          "D. The student omitted the vertical stretch; |a| = 2 creates a vertical stretch by factor 2"
        ],
        answer_text: "B",
        explanation: "The form g(x) = f(−2(x − 1)) + 5 has b = −2, h = 1, a = 1, k = 5. The horizontal transformations inside f(b(x − h)): shift right h = 1, then horizontal compression by 1/|b| = (1) / (2), then reflection over y-axis (because b < 0). Vertical: no stretch (|a| = 1), shift up 5. The student's description is correct. |a| = 1 means no vertical stretch (the coefficient outside the f(...) is 1, not −2)."
      }
    ]
  },

  "1.13": {
    essentialQuestion:
      "How do you select the most appropriate function model for a given real-world data set, and why must you explicitly state the assumptions behind your choice?",

    apBoardNote:
      "Lesson 1.13 addresses CED Topic 1.13 (Function Model Selection and Assumption Articulation). This is the highest-value partial-credit opportunity in Unit 1 free-response questions. The FRQ rubric explicitly awards separate points for: (1) correct model type with justification from data, (2) written assumptions, and (3) acknowledgment of limitations. Students who correctly identify the model type but skip written justification and assumptions routinely lose 1–2 points. Emphasize the specific language expected: 'This model assumes that [quantity] changes [linearly/quadratically] over the relevant domain and that no discontinuities or sudden behavioral changes occur.' Data analysis (first differences, second differences, ratios) must be shown, not just asserted.",

    teacherNote:
      "Students have conceptual difficulty distinguishing 'which model fits' from 'why this model and not another.' They tend to pattern-match (U-shape → quadratic) without articulating the mathematical evidence. The scaffold that works best: require students to compute first and second differences (or ratios) explicitly in a table before choosing a model. Also prepare students for the scenario where no model fits perfectly — AP FRQ may present noisy data and ask for the 'most appropriate' model with stated assumptions about why real-world variation is ignored. The word 'assumption' in AP grading means a mathematical idealization the student is accepting; it does not mean a guess.",

    studentVoice:
      "I used to just eyeball data and say 'looks quadratic' and get no credit for reasoning. The moment I started writing out first differences and second differences in a little table, I actually understood WHY the model was quadratic — and I had evidence to write about. Now I always show the differences table first, then choose, then write the assumptions.",

    narration: [
      "Every function model is a deliberate choice, not a discovery. Real-world data is messy, continuous phenomena are sampled discretely, and no data set from a physical process will fall exactly on any standard curve. Function model selection is the process of choosing the simplest, most appropriate mathematical model that captures the essential behavior of the data — and then being transparent about what you are assuming in making that choice.",
      "The primary tool for model selection from discrete data is difference analysis. Compute the first differences: subtract consecutive output values. If first differences are approximately constant, the rate of change is constant, which indicates a linear model. If first differences are not constant but second differences (differences of first differences) are approximately constant, the rate of change is itself changing at a constant rate — the hallmark of a quadratic model. If ratios of consecutive outputs are approximately constant (instead of differences), the data exhibits exponential behavior (covered in Unit 2).",
      "Contextual clues reinforce the mathematical analysis. Average cost — total cost divided by quantity produced — inherently involves dividing by a variable, which produces a rational function structure. Height of a projectile over time follows quadratic behavior because gravity produces a constant acceleration (constant second differences in position). Population growth often follows exponential patterns. Recognizing these contextual signatures helps you predict the model type before even looking at the numbers, then confirm with difference analysis.",
      "Once you select a model type, you must state your assumptions. An assumption is a simplifying mathematical idealization. Examples: 'This model assumes that the data can be represented by a quadratic function and that the rate of change in [output] per unit change in [input] increases at a constant rate over the domain.' Another example: 'This model assumes that no external factors cause abrupt changes in the relationship between [input] and [output].' These are not opinions — they are the mathematical conditions under which your chosen model is valid.",
      "Acknowledgment of limitations is the complement to assumptions. A limitation is a way the model might fail outside the observed domain or in situations the data does not capture. Example: 'This quadratic model may not be appropriate for very large values of x because [physical context] would prevent continued [behavior].' AP rubrics award a point for honest acknowledgment of where the model breaks down. Students who write confidently about limitations demonstrate mathematical maturity.",
      "The distinction between model types is sharpest at the boundaries. A data set that looks slightly curved could be quadratic or the early part of an exponential — the difference analysis tells you which. A data set with values that approach but never reach a specific level suggests a rational or exponential model with a horizontal asymptote. When data has an S-curve shape (slow start, rapid growth, leveling off), it is neither polynomial nor simple exponential — but at the AP Precalculus level, you will be tested on linear, quadratic, and rational models primarily, with exponential as a preview.",
      "On the AP free-response section, model selection questions follow a predictable pattern: you are given a table of values and asked to (a) identify the appropriate function type, (b) justify using the data, (c) state an assumption, and (d) sometimes identify a limitation. Each of these sub-parts has dedicated points. Answer them in order, use specific numbers from the table as evidence, and write complete sentences. A response that says only 'quadratic because it curves' will earn at most one of the four available points. A response that shows second differences, names the constant value, states the assumption, and acknowledges a limitation earns all four."
    ],

    priorKnowledge: [
      "Linear functions: constant first differences, slope = Δy/Δx",
      "Quadratic functions: parabolic shape, constant second differences",
      "Rational functions: quotient of polynomials, potential asymptotes",
      "Average rate of change: (f(b) − f(a))/(b − a) over an interval",
      "The concept of a mathematical model as an idealization of real-world behavior"
    ],

    connections: [
      "Lesson 1.6 (polynomial functions): model selection determines degree; difference analysis connects to polynomial degree",
      "Lesson 1.8 (rational functions): average cost and similar contexts that divide by the variable produce rational models",
      "Lesson 1.14 (model construction): after selecting the right model here, you build it in 1.14",
      "Unit 2 (exponential functions): constant ratio → exponential; the difference/ratio analysis framework from this lesson carries forward"
    ],

    concepts: [
      "Constant first differences → linear model; slope is that constant difference",
      "Constant second differences → quadratic model; second difference = 2a where a is leading coefficient",
      "Constant ratios of consecutive outputs → exponential model (Unit 2 preview)",
      "Asymptotic behavior or output = quantity/variable structure → rational model",
      "Assumptions must be stated explicitly: the mathematical conditions under which the chosen model is valid",
      "Limitations acknowledge where the model may fail (domain restrictions, real-world constraints)"
    ],

    keyFormula:
      "First differences: Δ₁(n) = f(n+1) − f(n). Second differences: Δ₂(n) = Δ₁(n+1) − Δ₁(n). If Δ₁ is constant → linear. If Δ₂ is constant → quadratic. If f(n+1)/f(n) is constant → exponential.",

    keyTerms: [
      { term: "First differences", definition: "Differences between consecutive output values; constant first differences indicate a linear relationship." },
      { term: "Second differences", definition: "Differences of first differences; constant second differences indicate a quadratic relationship." },
      { term: "Constant ratio", definition: "When consecutive outputs have a fixed quotient; indicates exponential behavior." },
      { term: "Assumption", definition: "A mathematical simplification accepted as true within the model; must be stated explicitly when selecting a model." },
      { term: "Limitation", definition: "A condition under which the model may not accurately represent reality; should be acknowledged in model justification." },
      { term: "Average cost function", definition: "A rational function of the form C̄(x) = (Fixed Cost + Variable Cost · x)/x; approaches variable cost as x → ∞." }
    ],

    workedExample: {
      problem:
        "A table of values is given: x = 1, 2, 3, 4, 5 with corresponding y = 3, 7, 13, 21, 31. Identify the most appropriate function model, justify using the data, and state one assumption.",
      steps: [
        "Compute first differences: 7−3=4, 13−7=6, 21−13=8, 31−21=10. First differences: 4, 6, 8, 10 — NOT constant, so the model is not linear.",
        "Compute second differences: 6−4=2, 8−6=2, 10−8=2. Second differences are constant at 2. This indicates a quadratic model.",
        "Identify model type: Since second differences are constant, the data is best modeled by a quadratic function f(x) = ax² + bx + c.",
        "Note: the leading coefficient a = (constant second difference)/2 = (2) / (2) = 1. So a = 1.",
        "State assumption: 'This model assumes that the relationship between x and y can be represented by a quadratic function, meaning that the rate of change of y increases at a constant rate of 2 per unit increase in x, and that no external factors disrupt this pattern across the domain.'"
      ],
      answer:
        "Quadratic model, justified by constant second differences of 2. One assumption: the rate of change of the output increases at a constant rate, with no external factors disrupting the pattern."
    },

    workedExample2: {
      problem:
        "A company's average cost (in dollars per unit) for producing x units is modeled by the data: x = 10, 20, 50, 100 and C̄ = 105, 55, 25, 15. Identify the most appropriate model type, justify your choice mathematically, state an assumption, and identify one limitation.",
      steps: [
        "Check first differences: 55−105=−50, 25−55=−30, 15−25=−10. Not constant → not linear.",
        "Check second differences: −30−(−50)=20, −10−(−30)=20. Second differences are constant at 20 across unequally spaced x values? Wait — x values are not equally spaced (10, 20, 50, 100). Second differences can only be directly compared for equal spacing. So re-examine the structure.",
        "Contextual analysis: 'average cost' = total cost / units produced. This algebraic structure (dividing by the variable) inherently produces a rational function of the form C̄(x) = (F + vx)/x where F is fixed cost and v is variable cost per unit.",
        "Numerical check: As x increases, C̄ decreases and appears to approach a non-zero horizontal asymptote near 5–10. This asymptotic behavior is a signature of rational functions.",
        "Estimate asymptote: As x→∞, (F + vx)/x → v. The data is approaching approximately 5, suggesting v ≈ 5 (variable cost per unit ≈ $5).",
        "State assumption: 'This model assumes fixed costs and variable costs are constant per unit, and that no economies of scale or other discontinuities affect the cost structure over the observed domain.'",
        "State limitation: 'The model may not be valid for very small values of x (near 0) where start-up costs or minimum production requirements could cause the actual average cost to differ substantially from the model.'"
      ],
      answer:
        "Rational model C̄(x) = (F + vx)/x, justified by the division-by-variable structure of average cost and the observed asymptotic behavior as x increases. Assumption: constant fixed and variable costs. Limitation: model may not hold near x = 0 or under economies of scale."
    },

    commonMistakes: [
      "Choosing a model based on the shape of the graph alone ('it curves, so quadratic') without showing difference or ratio analysis as evidence",
      "Computing differences on unevenly spaced x-values and treating them as if x were evenly spaced — differences are only directly comparable when x-spacing is equal",
      "Stating an assumption that is really just a restatement of the model ('I assume it is quadratic') instead of stating the mathematical condition being idealized",
      "Omitting any acknowledgment of limitations — the AP rubric awards a specific point for identifying where the model may fail",
      "Confusing average cost (rational function) with total cost (linear or polynomial) — reading the problem context carefully is essential"
    ],

    tip: "On an FRQ, structure your model-selection response in four bullet points: (1) Data evidence (show the differences or ratios with numbers). (2) Model type selected. (3) Assumption stated in a complete sentence. (4) Limitation in a complete sentence. This four-part structure directly mirrors the AP rubric and ensures you earn all available partial credit.",

    questions: [
      {
        question_text: "A data set has output values 2, 5, 8, 11, 14 for equally spaced inputs. What is the most appropriate model?",
        difficulty: "Easy",
        choices: [
          "A. Quadratic",
          "B. Linear",
          "C. Exponential",
          "D. Rational"
        ],
        answer_text: "B",
        explanation: "First differences: 5−2=3, 8−5=3, 11−8=3, 14−11=3. All first differences equal 3 (constant). Constant first differences indicate a linear model with slope 3."
      },
      {
        question_text: "A table shows output values 1, 4, 9, 16, 25 for inputs x = 1, 2, 3, 4, 5. What is the most appropriate model?",
        difficulty: "Easy",
        choices: [
          "A. Linear",
          "B. Exponential",
          "C. Quadratic",
          "D. Rational"
        ],
        answer_text: "C",
        explanation: "First differences: 3, 5, 7, 9 — not constant. Second differences: 2, 2, 2 — constant. Constant second differences indicate a quadratic model. Indeed, these are perfect squares: f(x) = x²."
      },
      {
        question_text: "A company's average cost per unit decreases as production increases and appears to level off near a fixed value. What type of function model is most appropriate?",
        difficulty: "Easy",
        choices: [
          "A. Linear (decreasing slope)",
          "B. Quadratic (opening downward)",
          "C. Rational (with a horizontal asymptote)",
          "D. Exponential (decaying)"
        ],
        answer_text: "C",
        explanation: "Average cost = Total Cost / Units = (F + vx)/x. This rational structure naturally produces a decreasing function with a horizontal asymptote at y = v (the variable cost per unit). The asymptotic leveling-off is a signature of a rational model, not exponential or quadratic."
      },
      {
        question_text: "A student selects a linear model for a data set. Which of the following is an appropriate statement of assumption for this model?",
        difficulty: "Easy",
        choices: [
          "A. 'I assume the data is linear because it looks like a line on the graph.'",
          "B. 'This model assumes that the output changes at a constant rate per unit increase in the input over the relevant domain.'",
          "C. 'This model assumes that second differences are approximately zero.'",
          "D. 'I assume the relationship is proportional.'"
        ],
        answer_text: "B",
        explanation: "A proper assumption states the mathematical condition being idealized. Option B correctly identifies the mathematical property of a linear model: constant rate of change (constant first differences). Option A is circular reasoning. Option C describes second differences equal to zero, which is true but is the mathematical criterion, not the stated assumption. Option D (proportionality) implies passing through the origin, which is not always true for linear models."
      },
      {
        question_text: "For the data set x = 1, 2, 3, 4 with y = 6, 12, 24, 48, which analysis best identifies the model type?",
        difficulty: "Medium",
        choices: [
          "A. First differences are 6, 12, 24 — increasing but not constant — so quadratic",
          "B. Second differences are 6, 12 — not constant — so rational",
          "C. Ratios of consecutive outputs are 2, 2, 2 — constant — so exponential",
          "D. First differences are constant at 6, so linear"
        ],
        answer_text: "C",
        explanation: "Ratios: (12) / (6) = 2, (24) / (12) = 2, (48) / (24) = 2. Constant ratio (not constant difference) indicates exponential behavior. Each output is double the previous — a growth factor of 2 per unit. First differences (6, 12, 24) are not constant, ruling out linear. Second differences (6, 12) are not constant, ruling out quadratic."
      },
      {
        question_text: "A researcher records the height (in meters) of a ball thrown upward at times t = 0, 1, 2, 3, 4 seconds as: 0, 15, 20, 15, 0. What model is most appropriate, and what is the evidence?",
        difficulty: "Medium",
        choices: [
          "A. Linear; the ball returns to the same height",
          "B. Quadratic; second differences are constant",
          "C. Rational; the height approaches an asymptote",
          "D. Exponential; the height increases then decreases"
        ],
        answer_text: "B",
        explanation: "First differences: 15−0=15, 20−15=5, 15−20=−5, 0−15=−15. Second differences: 5−15=−10, −5−5=−10, −15−(−5)=−10. Second differences are constant at −10, confirming a quadratic model. This reflects constant downward acceleration due to gravity, a physical reason the model is appropriate."
      },
      {
        question_text: "A student correctly identifies a quadratic model for a data set. Which of the following is the BEST statement of a limitation of this model?",
        difficulty: "Medium",
        choices: [
          "A. 'The model has two zeros.'",
          "B. 'This model may not accurately represent behavior outside the observed domain, particularly if physical constraints prevent the output from continuing to decrease (or increase) as the quadratic predicts.'",
          "C. 'The model assumes second differences are constant.'",
          "D. 'The model is not linear.'"
        ],
        answer_text: "B",
        explanation: "A limitation identifies where or why the model may fail. Option B correctly describes a domain-based limitation: a quadratic may predict negative heights or physically impossible values outside the observed range. Options A, C, and D describe properties of the model rather than its limitations in context."
      },
      {
        question_text: "Data for x = 2, 4, 6, 8 shows y = 50, 30, 20, 15. A student says the model is linear because 'the values are going down.' Which analysis should the student perform to correctly identify the model?",
        difficulty: "Medium",
        choices: [
          "A. Compute first differences on equally spaced x values to check if they are constant",
          "B. Compute second differences and check if they are constant",
          "C. Compute the ratio of consecutive y values",
          "D. Plot the data and visually confirm the shape"
        ],
        answer_text: "A",
        explanation: "The first and most important step is checking first differences on equally spaced inputs (x values are 2 apart here). First differences: 30−50=−20, 20−30=−10, 15−20=−5. These are NOT constant, ruling out linear. The student's claim is incorrect. After ruling out linear, check second differences (−10−(−20)=10, −5−(−10)=5) — also not constant, so not quadratic. Ratios: (30) / (50)=0.6, (20) / (30)≈0.67, (15) / (20)=0.75 — not constant. The asymptotic pattern suggests a rational model."
      },
      {
        question_text: "The average cost of producing x widgets is given by context: fixed cost of $500, variable cost of $8 per widget. A student writes C̄(x) = (500 + 8x)/x. As x → ∞, C̄(x) approaches which value, and what does this represent?",
        difficulty: "Hard",
        choices: [
          "A. C̄ → ∞; costs grow without bound",
          "B. C̄ → 0; average cost eventually becomes free",
          "C. C̄ → 8; the horizontal asymptote equals the variable cost per unit",
          "D. C̄ → 500; the fixed cost dominates"
        ],
        answer_text: "C",
        explanation: "C̄(x) = (500 + 8x)/x = 500/x + 8. As x → ∞, 500/x → 0, so C̄ → 8. The horizontal asymptote is y = 8, which equals the variable cost per unit. This makes economic sense: as production scales up, the fixed cost of $500 is spread over so many units that it becomes negligible, and the average cost approaches just the variable cost."
      },
      {
        question_text: "A free-response question presents a table of data and asks a student to 'justify the model type using the data.' The student writes: 'The model is quadratic. I computed second differences: 4, 4, 4. Since second differences are constant at 4, the data is best modeled by a quadratic function of the form f(x) = ax² + bx + c, where a = (4) / (2) = 2.' The student then adds: 'This model assumes that the rate of change of the output increases at a constant rate of 4 per unit of input.' Which component, if any, is the student still missing for full AP rubric credit?",
        difficulty: "Hard",
        choices: [
          "A. The student has everything needed; the response is complete",
          "B. The student must also state a limitation of the model",
          "C. The student must also compute first differences to eliminate the linear model",
          "D. The student should state the full equation, not just the leading coefficient"
        ],
        answer_text: "B",
        explanation: "The AP rubric for model selection typically awards points for: (1) correct model with data evidence, (2) stated assumption, and (3) acknowledged limitation. The student has correctly identified the quadratic model with second differences, stated the assumption, and derived the leading coefficient. However, no limitation is stated — this is a separate rubric point. The student should add a sentence such as: 'This model may not be appropriate beyond the observed domain if [contextual reason] changes the pattern.' Without it, the student likely loses one point."
      }
    ]
  },

  "1.14": {
    essentialQuestion:
      "Given a real-world scenario with specific constraints, how do you construct a function model, determine its coefficients, and then use it to make and interpret predictions?",

    apBoardNote:
      "Lesson 1.14 addresses CED Topic 1.14 (Function Model Construction and Application). This is the capstone of Unit 1 and the most synthesis-intensive topic. FRQ questions in this area require students to (1) construct a function equation from given contextual information (zeros, intercepts, specific points, asymptotes), (2) determine unknown coefficients algebraically, (3) apply the function to answer a specific question (find x such that f(x) = target, or find the maximum), and (4) interpret results in context with units. Students frequently earn the construction steps but lose the interpretation point by giving a numerical answer without context. Graders will not award the final interpretation point for a bare number — it must be restated in the problem's language with units.",

    teacherNote:
      "The hardest scaffold in this lesson is step 2: using given conditions to solve for coefficients. Students understand that a quadratic has three parameters and three conditions should determine it, but they struggle to set up the system of equations from non-standard conditions (e.g., 'the function has a zero at x = 3 and passes through (1, −8) with leading coefficient 2'). Build this as a systematic process: (A) write the general form implied by the model type, (B) substitute each condition to produce one equation per unknown, (C) solve the system. The average cost function is a particularly clean context because the rational form is given by the situation itself — students only need to identify F and v. Drug concentration functions are a more complex rational context that appears in some released FRQs.",

    studentVoice:
      "The construction step used to feel impossible — like I was supposed to magically know the equation. Then I learned to write the skeleton first. For a quadratic with zeros at 2 and 5, I write f(x) = a(x−2)(x−5) immediately. Then I use the extra information they give me — a point the function passes through — to find a. Once I had that system, it became just algebra.",

    narration: [
      "Function model construction is the synthesis of everything in Unit 1. It brings together model selection (Lesson 1.13), knowledge of function forms (Lessons 1.6–1.11), and the ability to extract structural information from given conditions. The goal: given a real-world scenario with specific numerical constraints, produce a complete function equation that satisfies all given conditions, then use that equation to answer questions and interpret results.",
      "The process has four steps. Step 1: Identify the function type from the contextual behavior described. Does the situation involve a quantity divided by a variable (rational)? Does it describe a relationship with a maximum and specific zeros (polynomial)? Does the context suggest a fixed cost plus a per-unit cost (linear or rational)? The function type determines the skeleton equation — the general form with unknown parameters. Step 2: Use the given numerical information (zeros, a specific point, an asymptote value, the leading coefficient) to set up equations and solve for the unknown parameters. Step 3: Write the complete function equation. Step 4: Apply the function to answer the specific question asked — find a particular output, solve for a particular input, or interpret the behavior.",
      "The average cost function is the canonical example of rational function construction. If a company has fixed costs of F dollars and variable costs of v dollars per unit, the total cost of producing x units is C(x) = F + vx. The average cost per unit is C̄(x) = C(x)/x = (F + vx)/x = F/x + v. This function has a vertical asymptote at x = 0 (you cannot produce zero units and divide by zero) and a horizontal asymptote at y = v. The horizontal asymptote is economically meaningful: as production grows very large, the fixed cost F is spread over more and more units, and average cost approaches the per-unit variable cost v.",
      "Polynomial construction from zeros and a point is equally important. If you are told a function has zeros at x = r₁ and x = r₂ (and no others), the factored form is f(x) = a(x − r₁)(x − r₂). The leading coefficient a is unknown until you use one additional condition — typically a specific point the function passes through. Substitute the known point (x₀, y₀) to get y₀ = a(x₀ − r₁)(x₀ − r₂), then solve for a. This technique extends to any degree polynomial: n zeros give n factors, and one additional point determines the leading coefficient.",
      "Solving for a specific input value — 'find x such that f(x) = target' — is the application step. For the average cost function, 'find the production level at which average cost equals $12' means solve C̄(x) = 12, i.e., (F + vx)/x = 12. Multiply both sides by x: F + vx = 12x. Rearrange: F = 12x − vx = x(12 − v). Solve: x = F/(12 − v). This is a valid result only if 12 > v (otherwise average cost can never reach $12, which makes sense — average cost cannot drop below variable cost). Always check whether your solution is in a valid domain before interpreting.",
      "Interpretation with units is the step that most students omit. After computing a numerical answer, restate it in the problem's language. Example: 'The company must produce approximately 83 widgets for the average cost per widget to equal $12.' The number 83 alone earns no interpretation credit. The phrase 'approximately 83 widgets' with the context of average cost and the reference to the target value ($12) earns full credit. Units matter: if x represents number of units and the output is dollars per unit, both must appear in the interpretation.",
      "Drug concentration is a second common context for rational function construction. A rational function D(t) = (at + b)/(ct² + dt + e) might model concentration (in mg/L) over time t (in hours). Given information might include: D(0) = 0 (drug not yet in system), the maximum occurs at t = 2 hours, and D(4) = 1 mg/L. Each condition generates one equation in the unknown parameters. This is more complex algebra, but the four-step construction process is identical.",
      "The capstone skill is connecting all of Unit 1: you choose the function type (1.13), write it in the most useful form (1.11), account for transformations if needed (1.12), and interpret zeros, asymptotes, and extreme values in context (1.6–1.10). Every function behavior concept from the unit becomes a tool for extracting meaning from the constructed model. The exam's FRQ capstone question for Unit 1 will ask you to do exactly this — and the rubric rewards each step individually, so partial credit is substantial even if you cannot complete the entire problem."
    ],

    priorKnowledge: [
      "Factored form of polynomials and the zero-product property (Lesson 1.11)",
      "Rational function behavior: vertical asymptotes, horizontal asymptotes, domain restrictions (Lesson 1.8)",
      "Setting up and solving systems of linear equations from two unknowns",
      "Substituting a known point into a function form to find unknown coefficients",
      "Interpreting function values and solving f(x) = c in context"
    ],

    connections: [
      "Lesson 1.11 (equivalent representations): construction begins with choosing the right form — factored for zero-based construction, standard for coefficient identification",
      "Lesson 1.13 (model selection): you cannot construct the right model unless you first select the right type",
      "Lesson 1.8 (rational functions): average cost, drug concentration, and other applied rational functions are built using asymptote-revealing structure",
      "Lesson 1.4 (extreme values): after constructing a model, finding its maximum or minimum is often the application question"
    ],

    concepts: [
      "Step 1: Identify function type from contextual behavior or structural clues (division by variable → rational; zeros given → factored polynomial)",
      "Step 2: Write the skeleton equation (general form with parameters as unknowns)",
      "Step 3: Use given conditions (zeros, points, asymptotes) to form and solve equations for each unknown parameter",
      "Step 4: Write the complete equation and verify it satisfies all given conditions",
      "Step 5: Apply the function — evaluate, solve f(x) = c, or find extrema — and interpret results in context with units",
      "Average cost C̄(x) = (F + vx)/x has horizontal asymptote y = v, meaning average cost approaches variable cost as production → ∞"
    ],

    keyFormula:
      "Average cost: C̄(x) = (F + vx)/x where F = fixed cost, v = variable cost per unit. Horizontal asymptote: y = v. To find x where C̄(x) = T (target): x = F/(T − v), valid only when T > v.",

    keyTerms: [
      { term: "Skeleton equation", definition: "The general form of a function with identified type but unknown coefficients; the starting point for model construction." },
      { term: "Fixed cost", definition: "A cost that does not vary with the number of units produced; the constant term in a total cost function." },
      { term: "Variable cost", definition: "A cost that increases proportionally with the number of units produced; the coefficient of x in a total cost function." },
      { term: "Average cost function", definition: "Total cost divided by the number of units produced: C̄(x) = C(x)/x; a rational function with horizontal asymptote at the variable cost per unit." },
      { term: "Leading coefficient", definition: "The coefficient of the highest-degree term; determines vertical stretch and end behavior; found by substituting a known point after zeros are identified." },
      { term: "Interpretation in context", definition: "Restating a numerical result using the problem's variables, units, and real-world meaning; required for full AP FRQ credit." }
    ],

    workedExample: {
      problem:
        "A factory has fixed costs of $800 per day and variable costs of $6 per unit produced. (a) Write the average cost function C̄(x). (b) Find the production level x at which the average cost equals $14 per unit. (c) Interpret the horizontal asymptote in context.",
      steps: [
        "Part (a): Total cost C(x) = Fixed + Variable = 800 + 6x. Average cost: C̄(x) = C(x)/x = (800 + 6x)/x.",
        "Part (b): Set C̄(x) = 14. Equation: (800 + 6x)/x = 14. Multiply both sides by x: 800 + 6x = 14x. Subtract 6x: 800 = 8x. Divide: x = 100.",
        "Verify: C̄(100) = (800 + 600)/100 = (1400) / (100) = 14. ✓",
        "Interpret: The factory must produce 100 units per day for the average cost to equal $14 per unit.",
        "Part (c): C̄(x) = 800/x + 6. As x → ∞, 800/x → 0, so C̄ → 6. The horizontal asymptote is y = 6. In context: as the factory produces more and more units, the average cost per unit approaches $6 — the variable cost per unit — because the fixed cost of $800 is divided among so many units that it becomes negligible."
      ],
      answer:
        "(a) C̄(x) = (800 + 6x)/x. (b) x = 100 units per day. (c) The horizontal asymptote y = 6 means average cost approaches $6 per unit at very high production volumes, reflecting the per-unit variable cost."
    },

    workedExample2: {
      problem:
        "A function f is used to model a physical process. The function has zeros at x = −1 and x = 4, has no other real zeros, and passes through the point (2, −18). The function is of the form f(x) = a(x − r₁)(x − r₂). (a) Identify r₁ and r₂. (b) Find the leading coefficient a. (c) Write the complete function. (d) Find all values of x for which f(x) = −12 and interpret which solution is relevant given that x represents time (in seconds) after the start of the process.",
      steps: [
        "Part (a): Zeros at x = −1 and x = 4 mean r₁ = −1, r₂ = 4. The skeleton is f(x) = a(x − (−1))(x − 4) = a(x + 1)(x − 4).",
        "Part (b): Substitute (2, −18): −18 = a(2 + 1)(2 − 4) = a(3)(−2) = −6a. Solve: a = −18 / −6 = 3.",
        "Part (c): f(x) = 3(x + 1)(x − 4). Verify: f(2) = 3(3)(−2) = −18. ✓ Verify zeros: f(−1) = 3(0)(−5) = 0 ✓; f(4) = 3(5)(0) = 0 ✓.",
        "Part (d): Solve f(x) = −12. Set 3(x + 1)(x − 4) = −12. Expand: 3(x² − 3x − 4) = −12 → x² − 3x − 4 = −4 → x² − 3x = 0 → x(x − 3) = 0. Solutions: x = 0 or x = 3.",
        "Interpret: Since x represents time in seconds after the start of the process, both x = 0 and x = 3 are non-negative. Both are potentially valid. x = 0 is the start of the process; x = 3 is 3 seconds after the process begins. If the process begins at x = 0 and the question asks for when f(x) = −12 during the process (after it begins), both x = 0 and x = 3 are valid: f(0) = 3(1)(−4) = −12 ✓ and f(3) = 3(4)(−1) = −12 ✓."
      ],
      answer:
        "f(x) = 3(x + 1)(x − 4). Solutions to f(x) = −12: x = 0 and x = 3. Both represent times (in seconds) during the process at which the function equals −12. In context, the process equals the target value at the very start (t = 0 s) and again at t = 3 s."
    },

    commonMistakes: [
      "Writing the zero of a factor (x − r) as r = the value inside the parentheses with the wrong sign — e.g., factor (x + 1) gives zero at x = −1, not x = 1",
      "Setting up the coefficient equation with the wrong point — accidentally using a zero of the function (which gives 0 = 0) instead of a point not at a zero",
      "Forgetting to verify the constructed function satisfies all given conditions before applying it",
      "Solving f(x) = c correctly but reporting only the number without interpreting it in the problem's units and context",
      "For average cost problems: confusing total cost C(x) with average cost C̄(x), or forgetting that C̄ cannot fall below the variable cost (horizontal asymptote)"
    ],

    tip: "After you write the skeleton equation and find the coefficient, always verify by substituting ALL given conditions — zeros, the known point, any asymptote. If one check fails, you made an algebra error, and catching it before the application step saves the entire problem.",

    questions: [
      {
        question_text: "A company's total cost to produce x items is C(x) = 200 + 10x. What is the average cost function C̄(x)?",
        difficulty: "Easy",
        choices: [
          "A. C̄(x) = 200x + 10",
          "B. C̄(x) = (200 + 10x)/x",
          "C. C̄(x) = 200/x + 10x",
          "D. C̄(x) = 10 + 200x"
        ],
        answer_text: "B",
        explanation: "Average cost = Total cost / number of items = C(x)/x = (200 + 10x)/x. This can also be written as 200/x + 10, which reveals the horizontal asymptote at y = 10 (the variable cost per unit)."
      },
      {
        question_text: "A polynomial function has zeros at x = 2 and x = −3 and no other real zeros. Which is the correct skeleton equation for this function?",
        difficulty: "Easy",
        choices: [
          "A. f(x) = a(x + 2)(x − 3)",
          "B. f(x) = a(x − 2)(x + 3)",
          "C. f(x) = a(x − 2)(x − 3)",
          "D. f(x) = a(x + 2)(x + 3)"
        ],
        answer_text: "B",
        explanation: "A zero at x = 2 corresponds to the factor (x − 2), and a zero at x = −3 corresponds to the factor (x − (−3)) = (x + 3). The skeleton is a(x − 2)(x + 3). Verify: setting x = 2 gives a(0)(5) = 0 ✓; setting x = −3 gives a(−5)(0) = 0 ✓."
      },
      {
        question_text: "For the average cost function C̄(x) = (500 + 15x)/x, what is the horizontal asymptote, and what does it represent in context?",
        difficulty: "Easy",
        choices: [
          "A. y = 0; cost approaches zero at high production",
          "B. y = 500; the fixed cost dominates at high production",
          "C. y = 15; average cost approaches the variable cost per unit at high production",
          "D. y = 515; average cost approaches the total per-unit cost"
        ],
        answer_text: "C",
        explanation: "C̄(x) = 500/x + 15. As x → ∞, 500/x → 0, so C̄ → 15. The horizontal asymptote is y = 15, equal to the variable cost per unit. In context: as production volume grows very large, the fixed cost of $500 is negligible per unit, and average cost approaches the per-unit variable cost of $15."
      },
      {
        question_text: "A function f has zeros at x = 1 and x = −2 and passes through (3, 20). Assuming f(x) = a(x − 1)(x + 2), what is the leading coefficient a?",
        difficulty: "Easy",
        choices: [
          "A. a = 2",
          "B. a = 4",
          "C. a = 5",
          "D. a = 10"
        ],
        answer_text: "A",
        explanation: "Substitute (3, 20): 20 = a(3 − 1)(3 + 2) = a(2)(5) = 10a. Solve: a = (20) / (10) = 2."
      },
      {
        question_text: "A company produces x units per month. Fixed monthly costs are $1,200 and variable costs are $5 per unit. At what production level does the average cost per unit equal $9?",
        difficulty: "Medium",
        choices: [
          "A. x = 100",
          "B. x = 150",
          "C. x = 200",
          "D. x = 300"
        ],
        answer_text: "D",
        explanation: "C̄(x) = (1200 + 5x)/x = 9. Multiply by x: 1200 + 5x = 9x. Subtract 5x: 1200 = 4x. Divide: x = 300. Verify: C̄(300) = (1200 + 1500)/300 = (2700) / (300) = 9. ✓ The company must produce 300 units per month for average cost to reach $9 per unit."
      },
      {
        question_text: "A polynomial function p(x) has exactly two real zeros: x = −4 (multiplicity 2) and x = 1 (multiplicity 1). The function passes through (0, 16). What is the complete function p(x)?",
        difficulty: "Medium",
        choices: [
          "A. p(x) = 2(x + 4)²(x − 1)",
          "B. p(x) = −(x + 4)²(x − 1)",
          "C. p(x) = (x − 4)²(x + 1)",
          "D. p(x) = −2(x + 4)(x − 1)²"
        ],
        answer_text: "B",
        explanation: "Skeleton: p(x) = a(x + 4)²(x − 1). Substitute (0, 16): 16 = a(0 + 4)²(0 − 1) = a(16)(−1) = −16a. Solve: a = −1. Therefore p(x) = −(x + 4)²(x − 1). Verify: p(0) = −(16)(−1) = 16 ✓; p(−4) = −(0)²(−5) = 0 ✓; p(1) = −(25)(0) = 0 ✓."
      },
      {
        question_text: "A function is constructed as f(x) = (x − 3)(x + 1)/((x − 2)(x + 4)). Without computing, which of the following correctly identifies the vertical asymptotes?",
        difficulty: "Medium",
        choices: [
          "A. x = 3 and x = −1",
          "B. x = 2 and x = −4",
          "C. x = −2 and x = 4",
          "D. x = 3, x = −1, x = 2, and x = −4"
        ],
        answer_text: "B",
        explanation: "Vertical asymptotes occur where the denominator equals zero (and the numerator does not also equal zero at those points). The denominator is (x − 2)(x + 4); it equals zero at x = 2 and x = −4. The numerator at x = 2: (2−3)(2+1) = (−1)(3) = −3 ≠ 0; at x = −4: (−7)(3) ≠ 0. Both are true vertical asymptotes, not holes."
      },
      {
        question_text: "A drug concentration model is given by D(t) = 10t/(t² + 4) mg/L, where t is time in hours after administration. At what time(s) does the concentration equal 2 mg/L?",
        difficulty: "Medium",
        choices: [
          "A. t = 2 only",
          "B. t = 1 and t = 4",
          "C. t = 2 and t = 6",
          "D. t = 1 and t = 3"
        ],
        answer_text: "B",
        explanation: "Set 10t/(t² + 4) = 2. Multiply both sides by (t² + 4): 10t = 2(t² + 4) = 2t² + 8. Rearrange: 2t² − 10t + 8 = 0 → t² − 5t + 4 = 0 → (t − 1)(t − 4) = 0. Solutions: t = 1 and t = 4. Verify: D(1) = 10(1)/(1 + 4) = (10) / (5) = 2 ✓; D(4) = 10(4)/(16 + 4) = (40) / (20) = 2 ✓. The drug concentration equals 2 mg/L at 1 hour and again at 4 hours after administration."
      },
      {
        question_text: "A polynomial model is constructed as p(x) = −2(x + 1)(x − 3)². What is the behavior of p at each zero, and what is the y-intercept?",
        difficulty: "Hard",
        choices: [
          "A. Crosses at x = −1; touches at x = 3; y-intercept = 18",
          "B. Touches at x = −1; crosses at x = 3; y-intercept = −18",
          "C. Crosses at x = −1; touches at x = 3; y-intercept = −18",
          "D. Crosses at both x = −1 and x = 3; y-intercept = 18"
        ],
        answer_text: "C",
        explanation: "Zero at x = −1 has multiplicity 1 (odd) → graph crosses the x-axis. Zero at x = 3 has multiplicity 2 (even) → graph touches the x-axis and turns back. Y-intercept: p(0) = −2(0+1)(0−3)² = −2(1)(9) = −18. The y-intercept is (0, −18). Answer: crosses at x = −1, touches at x = 3, y-intercept −18."
      },
      {
        question_text: "A company's average cost per unit is modeled by C̄(x) = (600 + 12x)/x, where x is the number of units produced. The company's goal is to reduce average cost to at most $15 per unit. What is the minimum production level required, and which interpretation below correctly states the answer in context?",
        difficulty: "Hard",
        choices: [
          "A. x = 200; the company must produce at least 200 units for average cost to reach $15 per unit",
          "B. x = 50; the company must produce at least 50 units for average cost to be at most $15 per unit",
          "C. x = 150; the company must produce exactly 150 units to achieve the target average cost",
          "D. x = 100; the company must produce at most 100 units to stay at or below $15 per unit"
        ],
        answer_text: "A",
        explanation: "Set C̄(x) ≤ 15: (600 + 12x)/x ≤ 15. Multiply both sides by x (x > 0, so inequality direction unchanged): 600 + 12x ≤ 15x → 600 ≤ 3x → x ≥ 200. The minimum production level is x = 200. Verify: C̄(200) = (600 + 2400)/200 = (3000) / (200) = 15. ✓ At x > 200, C̄ < 15. Interpretation: the company must produce at least 200 units for average cost to reach (or fall below) $15 per unit."
      }
    ]
  }
}
