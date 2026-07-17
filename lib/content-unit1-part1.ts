import type { LessonContent } from './lesson-content'

export const UNIT1_PART1: Record<string, LessonContent> = {
  "1.1": {
    essentialQuestion: "How can we describe precisely the way two quantities change together, even without using numbers?",

    apBoardNote: "Topic 1.1 (Change in Tandem) is explicitly listed in the AP Precalculus CED as a foundational topic for Unit 1. It appears on both MCQ Part A (no calculator) and Part B (calculator). Students are assessed on their ability to describe co-variation qualitatively — using language like 'increasing at a decreasing rate' — not just on identifying increasing/decreasing intervals. This vocabulary recurs in FRQs for 1.13 and 1.14, where students model real-world scenarios and must describe behavior in context. Graders look for the rate-of-rate language; 'just increasing' earns partial credit at best.",

    teacherNote: "The most critical scaffold here is distinguishing the two levels of change: (1) is the output going up or down? and (2) is it speeding up or slowing down? Many students conflate 'the function is increasing' with 'the function is increasing fast.' Anchor the lesson with a concrete physical story — water filling a container — before any graph. Ask students to imagine pouring water steadily into a cylinder vs. a vase that widens at the top. The height in the cylinder rises at a constant rate; in the wide-top vase it rises quickly at first and then slows. Draw both scenarios on a board and have students predict the shape before seeing the graph. This builds the intuition that concavity is about the container's shape, not the rate of pouring.",

    studentVoice: "OK so I always thought 'increasing' just meant going up on a graph. But 1.1 made me realize there's a difference between going up slowly and going up faster and faster. Like if you pour water into a skinny bottle versus a wide bowl — the level in the bowl rises slower and slower even though you're pouring at the same speed. That's the 'increasing at a decreasing rate' thing. Once I got that water-filling picture in my head, all the graph descriptions clicked.",

    narration: [
      "Before we ever write an equation, mathematics asks a simpler question: when one thing changes, how does something else respond? This idea — that two quantities vary together — is called co-variation, and it is the beating heart of functions. In Lesson 1.1, we are not yet computing anything. We are learning to see and describe.",
      "Picture a cylindrical glass being filled with water at a steady, constant rate. Every second the same volume of water enters the glass. What happens to the height of the water? It rises at a perfectly steady pace — equal time, equal height increase. If you graph height vs. volume poured, you get a straight line. The rate of change of height with respect to volume is constant. Easy enough.",
      "Now swap the cylinder for a vase that is narrow at the bottom and wide at the top. Pour water in at the same steady rate. At first, when the base is narrow, even a small volume of water produces a large jump in height. But as the water rises into the wider portion, each additional unit of volume spreads out over a bigger circular cross-section, so the height barely budges. Height is still increasing (more water always means more height), but the rate at which height increases is getting smaller and smaller. We say height is increasing at a decreasing rate. On a graph this looks like a curve that bends downward — what we call concave down.",
      "Flip the vase upside down (narrow top, wide bottom) and the story reverses. Now the base is wide, so early additions of water barely raise the height. As the water climbs into the narrowing top, each unit of volume produces an ever-larger jump in height. Height is increasing at an increasing rate. On a graph the curve bends upward — concave up.",
      "We now have four core descriptions for how a quantity can change: (1) increasing at an increasing rate — graph curving upward; (2) increasing at a decreasing rate — graph curving downward; (3) decreasing at a decreasing rate — graph falling but flattening; (4) decreasing at an increasing rate — graph falling and steepening. Mastering these four phrases unlocks almost every qualitative question on the AP exam.",
      "A critical trap: 'increasing at a decreasing rate' does NOT mean the output eventually starts decreasing. The output is still going up; only the speed of that rise is shrinking. Think of a car that is moving forward but gently pressing the brakes — it is still moving forward, just more slowly each moment. Only when the 'rate of change' hits zero and goes negative does the output actually start to fall.",
      "When you look at a graph or table in 1.1, ask yourself two questions in order: First, is the output (y) going up or down as the input (x) increases? Second, is that upward or downward movement getting faster (steeper) or slower (flatter)? Those two questions together give you the complete qualitative description the AP exam rewards."
    ],

    priorKnowledge: [
      "Understand that a function assigns exactly one output to each input",
      "Read a coordinate plane and identify whether a graph is going up or down from left to right",
      "Recognize that 'slope' on a straight line tells you how steeply the line rises or falls",
      "Be comfortable using inequality language: 'as x increases, y increases' vs. 'as x increases, y decreases'",
      "Have a basic sense that graphs can be curved, not just straight lines"
    ],

    connections: [
      "Lesson 1.2 (Rates of Change) gives a numerical version of what 1.1 describes qualitatively — AROC measures exactly how fast height is rising over an interval",
      "Lesson 1.3 connects concavity to first and second differences in tables of linear and quadratic functions",
      "Real-world link: population growth that starts exponentially fast and then levels off (logistic growth) is a real example of 'increasing at a decreasing rate,' appearing in biology and economics",
      "Future link: in Unit 2, you will describe the behavior of exponential functions using the same language — exponential growth is always increasing at an increasing rate"
    ],

    concepts: [
      "Co-variation means two quantities change together; understanding how one changes as the other changes is the core of function analysis",
      "A function is increasing at an increasing rate when the graph curves upward (concave up)",
      "A function is increasing at a decreasing rate when the graph curves downward (concave down)",
      "Decreasing at an increasing rate means falling more and more steeply; decreasing at a decreasing rate means falling more and more gently",
      "'Increasing' and 'increasing at an increasing rate' are different statements — the first describes direction, the second describes how the direction is changing",
      "For a container filling with water, the shape of the container determines the concavity of the height-vs-volume graph, not the rate of pouring"
    ],

    keyFormula: "Rate-of-change language: output is [increasing / decreasing] at an [increasing / decreasing] rate as input increases",

    keyTerms: [
      { term: "Co-variation", definition: "The relationship in which two quantities change together, so that the value of one depends on the value of the other" },
      { term: "Rate of change", definition: "How fast the output value changes per unit increase in the input value" },
      { term: "Increasing at an increasing rate", definition: "Output is rising AND the speed of that rise is growing larger — graph curves upward (concave up)" },
      { term: "Increasing at a decreasing rate", definition: "Output is rising AND the speed of that rise is shrinking — graph curves downward (concave down)" },
      { term: "Concave up", definition: "A curve that bends upward like a bowl, indicating the rate of change is increasing" },
      { term: "Concave down", definition: "A curve that bends downward like an arch, indicating the rate of change is decreasing" }
    ],

    workedExample: {
      problem: "A container is being filled with water at a constant rate. As the volume of water increases from 0 to 10 liters, the height increases from 0 to 8 cm. As the volume increases from 10 to 20 liters, the height increases from 8 cm to 14 cm. As the volume increases from 20 to 30 liters, the height increases from 14 cm to 18 cm. Describe how the height is changing as volume increases.",
      steps: [
        "Find the change in height for each 10-liter interval: Interval 1 (0→10 L): height increases by 8 cm. Interval 2 (10→20 L): height increases by 6 cm. Interval 3 (20→30 L): height increases by 4 cm.",
        "Check direction: height increases in every interval, so height is increasing as volume increases.",
        "Check the rate: the height gains per equal volume interval are 8, then 6, then 4 — the increases are getting smaller.",
        "Conclusion: the height is increasing at a decreasing rate as volume increases.",
        "Physical interpretation: the container must be widening as it gets taller — each additional liter of water spreads over more area, so the height rises less."
      ],
      answer: "The height is increasing at a decreasing rate as the volume of water increases."
    },

    workedExample2: {
      problem: "The table below shows the height h (in cm) of water in a vase as volume V (in mL) increases. V: 0, 50, 100, 150, 200. h: 0, 2, 6, 12, 20. Describe how h changes as V increases, and describe the likely shape of the container.",
      steps: [
        "Compute height gains for each 50 mL interval: 0→50: gain of 2 cm. 50→100: gain of 4 cm. 100→150: gain of 6 cm. 150→200: gain of 8 cm.",
        "Direction check: height increases every interval → h is increasing as V increases.",
        "Rate check: successive height gains are 2, 4, 6, 8 — they are increasing, meaning each additional 50 mL produces a larger height jump than the previous one.",
        "Therefore, h is increasing at an increasing rate as V increases.",
        "Shape of container: because equal volumes are producing larger and larger height increases, the container must be getting narrower as it gets taller (like an inverted cone or a bottle that pinches inward at the top).",
        "Graph shape: the h vs. V graph would be concave up — curving upward."
      ],
      answer: "The height is increasing at an increasing rate as volume increases. The container narrows toward the top, causing each unit of volume to produce a larger height change. The h vs. V graph is concave up."
    },

    commonMistakes: [
      "Confusing 'increasing' with 'increasing at an increasing rate' — a graph can rise gently and still be described only as 'increasing' if the rate is constant",
      "Thinking 'increasing at a decreasing rate' means the function will eventually decrease — it will not; the output is still going up, just more slowly",
      "Confusing concave up vs. concave down — remember: concave up = bowl shape = rate of change is growing; concave down = arch shape = rate of change is shrinking",
      "Describing the rate of the input (e.g., 'water pours in faster') rather than the rate of the output (height rises faster/slower) — always anchor the description to the output",
      "Ignoring the direction of reading — always describe what happens as the input increases from left to right"
    ],

    tip: "Ask yourself two questions in order: (1) Is the output going UP or DOWN? (2) Is that movement getting FASTER or SLOWER? The first gives you 'increasing/decreasing,' the second gives you 'at an increasing/decreasing rate.' Those two answers together = the complete AP answer.",

    questions: [
      {
        question_text: "A function f is increasing on an interval. The average rate of change of f over consecutive equal-length subintervals is 5, 3, and 1. Which of the following best describes f on this interval?",
        difficulty: "Easy",
        choices: [
          "A) Increasing at an increasing rate",
          "B) Increasing at a decreasing rate",
          "C) Decreasing at an increasing rate",
          "D) Decreasing at a decreasing rate"
        ],
        answer_text: "B",
        explanation: "The rates of change are 5, 3, 1 — all positive (so f is increasing), but they are getting smaller (5 → 3 → 1). A positive but shrinking rate of change means f is increasing at a decreasing rate."
      },
      {
        question_text: "A cylindrical cup with uniform width is being filled with water at a constant rate. Which of the following correctly describes how the height of the water changes as the volume increases?",
        difficulty: "Easy",
        choices: [
          "A) Increasing at an increasing rate",
          "B) Increasing at a decreasing rate",
          "C) Increasing at a constant rate",
          "D) Decreasing at a constant rate"
        ],
        answer_text: "C",
        explanation: "A cylinder has the same circular cross-section at every height. Each equal increment of volume raises the water level by the same amount, so height increases at a constant rate with respect to volume."
      },
      {
        question_text: "The table below shows values of a function g. x: 1, 2, 3, 4. g(x): 10, 7, 5, 4. Which statement best describes g on the interval [1, 4]?",
        difficulty: "Easy",
        choices: [
          "A) Decreasing at an increasing rate",
          "B) Decreasing at a decreasing rate",
          "C) Increasing at a decreasing rate",
          "D) Increasing at an increasing rate"
        ],
        answer_text: "B",
        explanation: "Compute successive drops: 10→7 is −3, 7→5 is −2, 5→4 is −1. The output is going down (decreasing), and the amount it drops each step is getting smaller (3, 2, 1). This means g is decreasing at a decreasing rate — it is falling, but more and more gently."
      },
      {
        question_text: "A function h is described as 'increasing at an increasing rate.' Which of the following must be true?",
        difficulty: "Easy",
        choices: [
          "A) The graph of h curves downward (is concave down)",
          "B) The values of h are always positive",
          "C) The graph of h curves upward (is concave up)",
          "D) The rate of change of h is constant"
        ],
        answer_text: "C",
        explanation: "Increasing at an increasing rate means the rate of change itself is growing. Geometrically, this produces a curve that bends upward — concave up. The output values and their sign are not determined by this description alone."
      },
      {
        question_text: "A container is shaped like a cone with the wide end at the bottom, being filled with water at a constant rate. As volume increases, the height of the water increases. Which of the following describes the rate at which height changes as volume increases?",
        difficulty: "Medium",
        choices: [
          "A) The height increases at a constant rate because the volume is added constantly",
          "B) The height increases at an increasing rate because the container widens as it gets taller",
          "C) The height increases at a decreasing rate because the cross-section grows as height increases",
          "D) The height decreases at a constant rate"
        ],
        answer_text: "C",
        explanation: "A cone with its wide end at the bottom means the cross-sectional area increases as height increases. Each additional unit of volume has to fill a wider layer, so the height gained per unit of volume gets smaller — height increases at a decreasing rate."
      },
      {
        question_text: "The table below gives values of a function f at equally-spaced inputs. x: 0, 1, 2, 3. f(x): 1, 4, 9, 16. Examine the differences between consecutive outputs. Which description best fits f?",
        difficulty: "Medium",
        choices: [
          "A) Decreasing at a decreasing rate on [0, 3]",
          "B) Increasing at a constant rate on [0, 3]",
          "C) Increasing at a decreasing rate on [0, 3]",
          "D) Increasing at an increasing rate on [0, 3]"
        ],
        answer_text: "D",
        explanation: "Differences: 4−1=3, 9−4=5, 16−9=7. The output values increase (positive differences), and the differences themselves are growing (3, 5, 7). Since the rate of increase is itself growing, f is increasing at an increasing rate."
      },
      {
        question_text: "Two quantities x and y co-vary. As x increases from 0 to 10, y increases from 0 to 50. As x increases from 10 to 20, y increases from 50 to 80. As x increases from 20 to 30, y increases from 80 to 95. Which graph shape best models y as a function of x on [0, 30]?",
        difficulty: "Medium",
        choices: [
          "A) A straight line with positive slope",
          "B) A curve that is concave up throughout",
          "C) A curve that is concave down throughout",
          "D) A curve with a local minimum"
        ],
        answer_text: "C",
        explanation: "The gains in y per 10-unit interval of x are: 50, 30, and 15. The output is always increasing, but the increases are shrinking. This is increasing at a decreasing rate, which corresponds to a concave-down curve."
      },
      {
        question_text: "A student claims: 'If a function is increasing at a decreasing rate, it must eventually start decreasing.' Is this claim correct?",
        difficulty: "Medium",
        choices: [
          "A) Yes, because the rate will eventually reach zero and then become negative",
          "B) No, the rate can shrink and approach zero without the function ever decreasing",
          "C) Yes, because concave-down functions always have a maximum and then decrease",
          "D) No, because a decreasing rate of change means the function is decreasing"
        ],
        answer_text: "B",
        explanation: "The rate of change being positive but shrinking does not guarantee it will reach zero. For example, f(x) = √x is increasing at a decreasing rate for all x > 0, yet it never decreases. The claim is false; we would need additional information to conclude the function eventually decreases."
      },
      {
        question_text: "A function p has the following behavior: on [0, 3], p is increasing at an increasing rate; on [3, 6], p is increasing at a decreasing rate. Which of the following must be true about the point x = 3?",
        difficulty: "Hard",
        choices: [
          "A) p has a local maximum at x = 3",
          "B) p has a local minimum at x = 3",
          "C) The graph of p changes concavity at x = 3 (an inflection-like point)",
          "D) p(3) = 0"
        ],
        answer_text: "C",
        explanation: "Before x = 3, the rate of change of p is increasing (concave up). After x = 3, the rate of change is decreasing (concave down). A change from concave up to concave down happens at an inflection point. Since p is increasing throughout, it has no local maximum or minimum at x = 3."
      },
      {
        question_text: "A container is being filled with water. The height h (in cm) is recorded at volumes V = 0, 10, 20, 30, 40 mL. The increases in height for each 10 mL interval are: 6 cm, 6 cm, 6 cm, 6 cm. A second container has height increases: 2 cm, 4 cm, 6 cm, 8 cm over the same volume intervals. Which statements are true? I. The first container is cylindrical. II. The second container widens as height increases. III. Both containers show height increasing at a constant rate.",
        difficulty: "Hard",
        choices: [
          "A) I only",
          "B) I and II only",
          "C) II and III only",
          "D) I, II, and III"
        ],
        answer_text: "A",
        explanation: "Statement I: equal height gains per equal volume means the height increases at a constant rate, which corresponds to a uniform circular cross-section — a cylinder. Statement I is TRUE. Statement II: the second container's height gains per 10 mL are 2, 4, 6, 8 — increasing. A larger height gain per unit of volume means each successive layer of water is thinner — that is, the cross-section is getting NARROWER, not wider. Statement II is FALSE. Statement III: only the first container shows a constant rate; the second shows an increasing rate. Statement III is FALSE. Only Statement I is true, so the answer is A."
      }
    ]
  },

  "1.2": {
    essentialQuestion: "How do we measure how fast a function changes over an interval, and what does that measurement mean in context?",

    apBoardNote: "Topic 1.2 (Rates of Change) is heavily tested on MCQ Part A (no-calculator). Students are given a table of function values and asked to compute AROCs over specified intervals, then compare those AROCs to make inferences about the function's behavior. The key exam skill is computing AROC correctly, attaching units, and interpreting the result in context. FRQ scoring rubrics award separate points for correct computation, correct units, and correct contextual interpretation — three distinct opportunities to earn or lose credit on a single AROC question.",

    teacherNote: "The AROC formula is easy; the interpretation is where students lose points. Drill the unit structure early: AROC = (change in output units) / (change in input units). If f(t) = population in thousands and t is in years, then AROC has units of 'thousands of people per year.' A second common gap: students forget that AROC is the slope of the secant line, not the tangent line. Emphasize the geometric picture — connect two points on the curve, and the slope of that connecting line segment is the AROC. This foreshadows calculus without using calculus language. Third gap: students mix up which quantity goes in the numerator and which in the denominator.",

    studentVoice: "AROC totally confused me at first because I thought it just meant 'slope.' But then my teacher said: imagine you drove 60 miles in 2 hours — your average rate of change of distance with respect to time is 30 mph. You might have gone faster and slower during the trip, but on average, 30 mph. That's all AROC is — the average 'speed' of a function over an interval. And the formula [f(b) − f(a)] / (b − a) is just rise over run, which I already knew as slope.",

    narration: [
      "In Lesson 1.1 we described change qualitatively — faster, slower, speeding up, slowing down. Now we put a number on it. The average rate of change (AROC) is the single most important calculation in early function analysis, and it is nothing more than slope applied to a function over an interval.",
      "Here is the setup: we have a function f, and we pick two input values a and b. The corresponding outputs are f(a) and f(b). The AROC of f from a to b is defined as [f(b) − f(a)] / (b − a). This is the change in output divided by the change in input — rise over run — which gives the slope of the line connecting the points (a, f(a)) and (b, f(b)) on the graph. That line is called the secant line.",
      "Why is this useful? Because it summarizes in one number how much, on average, the function moved per unit of input over that interval. Think of a road trip: you travel 150 miles in 3 hours. Your average speed — your AROC of distance with respect to time — is (150) / (3) = 50 miles per hour. You might have been stuck in traffic at 10 mph or cruising at 75 mph, but the overall average was 50 mph. The AROC smooths out all the variation and gives you the big-picture rate.",
      "Units matter enormously on the AP exam. The unit of AROC is always (unit of output) per (unit of input). If f(t) measures temperature in degrees Celsius and t is in minutes, then AROC has units of °C per minute. Always include units in any contextual interpretation — graders dock points for unit-free answers.",
      "A key skill in 1.2 is comparing AROCs across multiple intervals. If you compute the AROC of f over [0,2], [2,4], and [4,6] and get 3, 5, and 7, then the AROCs themselves are increasing. This means f is changing faster and faster — it is increasing at an increasing rate. This is the numerical version of the qualitative description from Lesson 1.1. The bridge between 1.1 and 1.2 is this: the trend in the AROCs tells you the concavity of the function.",
      "One more geometric point worth cementing: the AROC is not the slope at a single point (that would require calculus). It is the slope of the secant line between two points. As the interval [a, b] gets shorter and shorter, the secant line approaches the tangent line — but we are not there yet. For now, [f(b)−f(a)]/(b−a) is our complete tool.",
      "Watch the sign of the AROC carefully: a positive AROC means f is, on average, going up over that interval; a negative AROC means f is, on average, going down. If the AROC is zero, the function starts and ends at the same output value over that interval — it might have gone up and come back down, or it might have been flat, but the net change is zero."
    ],

    priorKnowledge: [
      "Compute slope of a line given two points: slope = (y₂ − y₁) / (x₂ − x₁)",
      "Evaluate a function from a table or formula given an input value",
      "Understand that 'rate' language (miles per hour, dollars per item) always involves division of two different units",
      "Read a table of values and identify the input and output columns",
      "Know what an ordered pair (x, y) represents on a coordinate plane"
    ],

    connections: [
      "Lesson 1.1: the qualitative description 'increasing at an increasing rate' corresponds numerically to AROCs that increase across consecutive intervals — 1.2 gives the numbers behind 1.1's words",
      "Lesson 1.3: comparing AROCs across equally-spaced intervals (first differences) determines whether a function is linear or quadratic",
      "Real-world link: speed is the AROC of position with respect to time; cost per unit is the AROC of total cost with respect to quantity — AROC is everywhere in applied mathematics",
      "Future calculus link: the derivative at a point is the limit of the AROC as the interval length approaches zero — 1.2 builds the intuition that underpins all of differential calculus"
    ],

    concepts: [
      "AROC = [f(b) − f(a)] / (b − a): change in output divided by change in input over the interval [a, b]",
      "AROC equals the slope of the secant line connecting (a, f(a)) and (b, f(b)) on the graph of f",
      "Units of AROC are always (unit of output) per (unit of input) — include units in all contextual interpretations",
      "If AROCs increase across consecutive equal-length intervals, the function is increasing at an increasing rate (concave up)",
      "If AROCs decrease across consecutive equal-length intervals, the function is increasing at a decreasing rate (concave down)",
      "A positive AROC means net increase; a negative AROC means net decrease; an AROC of zero means no net change over the interval"
    ],

    keyFormula: "AROC = [f(b) − f(a)] / (b − a)   (slope of the secant line from a to b)",

    keyTerms: [
      { term: "Average Rate of Change (AROC)", definition: "The ratio of the change in output to the change in input over an interval: [f(b) − f(a)] / (b − a)" },
      { term: "Secant line", definition: "The line passing through two points on a curve; its slope equals the AROC of the function over that interval" },
      { term: "First differences", definition: "The differences between consecutive output values in a table with equally-spaced inputs; equal to the AROCs over each unit interval" },
      { term: "Net change", definition: "f(b) − f(a): the total change in output from input a to input b, the numerator of the AROC" },
      { term: "Interval notation [a, b]", definition: "The set of all input values from a to b inclusive; the AROC is computed across this interval" }
    ],

    workedExample: {
      problem: "The table below shows the value V (in dollars) of a stock at time t (in years). t: 0, 2, 4, 6. V: 100, 130, 150, 160. Find the AROC of V from t = 2 to t = 6 and interpret it in context.",
      steps: [
        "Identify the two points: at t = 2, V = 130; at t = 6, V = 160.",
        "Apply the AROC formula: AROC = [V(6) − V(2)] / (6 − 2) = (160 − 130) / (6 − 2) = (30) / (4) = 7.5.",
        "Attach units: the input is in years, the output is in dollars, so AROC has units of dollars per year.",
        "Interpret: from t = 2 to t = 6, the stock's value increased at an average rate of $7.50 per year."
      ],
      answer: "The AROC is $7.50 per year, meaning the stock's value increased by an average of $7.50 each year from year 2 to year 6."
    },

    workedExample2: {
      problem: "A function f is given by the table: x: 0, 3, 6, 9, 12. f(x): 4, 13, 18, 19, 16. (a) Compute the AROC over each 3-unit interval. (b) Based on the AROCs, describe how f behaves on [0, 12]. (c) Between which consecutive pair of inputs does f appear to reach a local maximum?",
      steps: [
        "Compute AROCs for each interval of length 3:",
        "[0, 3]: (13 − 4)/3 = (9) / (3) = 3",
        "[3, 6]: (18 − 13)/3 = (5) / (3) ≈ 1.67",
        "[6, 9]: (19 − 18)/3 = (1) / (3) ≈ 0.33",
        "[9, 12]: (16 − 19)/3 = −(3) / (3) = −1",
        "AROCs: 3, 1.67, 0.33, −1. The AROCs are decreasing throughout.",
        "From [0, 9]: AROCs are positive → f is increasing. From [9, 12]: AROC is negative → f is decreasing. AROCs are always decreasing (3 → 1.67 → 0.33 → −1), so f is increasing at a decreasing rate on [0, 9] and then decreasing.",
        "Sign change of AROC: AROCs go from positive (in [6,9]) to negative (in [9,12]). Therefore a local maximum occurs somewhere in the interval (9, 12) — or the AROC sign change suggests f peaks between x = 9 and x = 12. Since f(9) = 19 and f(12) = 16, the local max in our table appears at x = 9."
      ],
      answer: "(a) AROCs: 3, (5) / (3), (1) / (3), −1 over consecutive 3-unit intervals. (b) f increases at a decreasing rate on [0, 9], then decreases on [9, 12]. (c) f reaches a local maximum at approximately x = 9 where the AROC changes from positive to negative."
    },

    commonMistakes: [
      "Forgetting to include units in the contextual interpretation — always state (output unit) per (input unit)",
      "Subtracting in the wrong order: computing [f(a) − f(b)] / (b − a) instead of [f(b) − f(a)] / (b − a) — the output change must match the input change in direction",
      "Confusing AROC with the instantaneous rate (slope of the tangent line) — AROC is always an average over an interval, not a value at a single point",
      "Reporting AROC without simplifying the fraction — leave enough work shown that a grader can follow the computation",
      "Ignoring negative AROCs — a negative AROC means the function decreased over that interval, which is important contextual information"
    ],

    tip: "Think of AROC as your GPS summary for a road trip: it tells you the average speed from start to finish, not what you were doing at any particular moment. The formula is just slope — rise (Δy) over run (Δx) — and the units are always [output unit] per [input unit].",

    questions: [
      {
        question_text: "A function f is defined by the table: x: 1, 3, 5, 7. f(x): 8, 14, 18, 20. What is the average rate of change of f from x = 1 to x = 7?",
        difficulty: "Easy",
        choices: [
          "A) 1",
          "B) 2",
          "C) 12",
          "D) 6"
        ],
        answer_text: "B",
        explanation: "AROC = [f(7) − f(1)] / (7 − 1) = (20 − 8) / 6 = (12) / (6) = 2."
      },
      {
        question_text: "The position p(t) of a particle (in meters) at time t (in seconds) is given by: t: 0, 4, 8. p(t): 5, 21, 29. What is the average rate of change of p from t = 0 to t = 8, including units?",
        difficulty: "Easy",
        choices: [
          "A) 4 meters per second",
          "B) 3 meters per second",
          "C) 24 meters per second",
          "D) 8 meters per second"
        ],
        answer_text: "B",
        explanation: "AROC = [p(8) − p(0)] / (8 − 0) = (29 − 5) / 8 = (24) / (8) = 3 meters per second."
      },
      {
        question_text: "A function g has average rate of change −4 on the interval [2, 6]. If g(2) = 10, what is g(6)?",
        difficulty: "Easy",
        choices: [
          "A) −6",
          "B) 26",
          "C) −16",
          "D) 6"
        ],
        answer_text: "A",
        explanation: "AROC = [g(6) − g(2)] / (6 − 2) = −4. So g(6) − 10 = −4 × 4 = −16, which gives g(6) = 10 − 16 = −6."
      },
      {
        question_text: "Which of the following is the geometric interpretation of the average rate of change of a function f from x = a to x = b?",
        difficulty: "Easy",
        choices: [
          "A) The slope of the tangent line to f at x = a",
          "B) The slope of the tangent line to f at x = b",
          "C) The slope of the secant line connecting (a, f(a)) and (b, f(b))",
          "D) The y-intercept of the graph of f"
        ],
        answer_text: "C",
        explanation: "The AROC equals [f(b) − f(a)] / (b − a), which is exactly the slope formula applied to the two points (a, f(a)) and (b, f(b)). The line through these two points on the graph is the secant line."
      },
      {
        question_text: "The table shows values of f(x): x: 0, 2, 4, 6. f(x): 3, 7, 9, 9. Compute the AROC on [0,2], [2,4], and [4,6]. Which statement about the AROCs is correct?",
        difficulty: "Medium",
        choices: [
          "A) The AROCs are 4, 2, and 0, and they are increasing",
          "B) The AROCs are 4, 2, and 0, and they are decreasing",
          "C) The AROCs are 2, 1, and 0, and they are decreasing",
          "D) The AROCs are 4, 2, and 0, and they are constant"
        ],
        answer_text: "C",
        explanation: "AROC on [0,2] = (7−3)/(2−0) = (4) / (2) = 2. AROC on [2,4] = (9−7)/(4−2) = (2) / (2) = 1. AROC on [4,6] = (9−9)/(6−4) = (0) / (2) = 0. The AROCs are 2, 1, and 0 — they are decreasing. This matches choice C."
      },
      {
        question_text: "A company's revenue R (in thousands of dollars) is recorded by quarter (t = 1, 2, 3, 4): R(1) = 50, R(2) = 65, R(3) = 74, R(4) = 77. The average rate of change of R from t = 1 to t = 4 is best interpreted as:",
        difficulty: "Medium",
        choices: [
          "A) Revenue increased by $9 thousand total from quarter 1 to quarter 4",
          "B) Revenue increased by an average of $9 thousand per quarter from quarter 1 to quarter 4",
          "C) Revenue increased by $27 thousand from quarter 1 to quarter 4",
          "D) Revenue increased by an average of $27 thousand per quarter"
        ],
        answer_text: "B",
        explanation: "AROC = [R(4) − R(1)] / (4 − 1) = (77 − 50) / 3 = (27) / (3) = 9 thousand dollars per quarter. The AROC is 9 thousand dollars per quarter, not 9 thousand total and not 27 per quarter."
      },
      {
        question_text: "A function h has the following AROCs over consecutive unit intervals: on [0,1] the AROC is 6; on [1,2] the AROC is 2; on [2,3] the AROC is −2; on [3,4] the AROC is −6. What can be concluded about h on [0, 4]?",
        difficulty: "Medium",
        choices: [
          "A) h is increasing on [0, 4]",
          "B) h increases then decreases, and appears to have a local maximum near x = 2",
          "C) h decreases throughout [0, 4]",
          "D) h has a local minimum near x = 2"
        ],
        answer_text: "B",
        explanation: "AROCs: 6, 2, −2, −6. On [0,1] and [1,2]: AROC is positive, so h is increasing. On [2,3] and [3,4]: AROC is negative, so h is decreasing. The AROC changes sign between [1,2] (positive) and [2,3] (negative), so h changes from increasing to decreasing near x = 2, indicating a local maximum there."
      },
      {
        question_text: "If f(x) = x² + 1, what is the average rate of change of f from x = 3 to x = 5?",
        difficulty: "Medium",
        choices: [
          "A) 4",
          "B) 8",
          "C) 16",
          "D) 2"
        ],
        answer_text: "B",
        explanation: "f(3) = 9 + 1 = 10. f(5) = 25 + 1 = 26. AROC = (26 − 10) / (5 − 3) = (16) / (2) = 8."
      },
      {
        question_text: "A function f satisfies f(0) = 4 and has an average rate of change of 3 on [0, 5] and an average rate of change of −1 on [5, 10]. Which of the following must be true?",
        difficulty: "Hard",
        choices: [
          "A) f(5) = 19 and f(10) = 15",
          "B) f(5) = 15 and f(10) = 14",
          "C) f(5) = 19 and f(10) = 14",
          "D) f(5) = 7 and f(10) = 2"
        ],
        answer_text: "C",
        explanation: "On [0, 5]: AROC = [f(5) − 4] / 5 = 3 → f(5) − 4 = 15 → f(5) = 19. On [5, 10]: AROC = [f(10) − 19] / 5 = −1 → f(10) − 19 = −5 → f(10) = 14."
      },
      {
        question_text: "The table shows: x: 1, 2, 3, 4, 5. f(x): 2, 5, 10, 17, 26. A student claims the AROC of f on [1, 3] equals the AROC on [3, 5]. Is the student correct?",
        difficulty: "Hard",
        choices: [
          "A) Yes, because f is a polynomial and polynomials have constant rates of change",
          "B) No; AROC on [1,3] is 4 and AROC on [3,5] is 8",
          "C) Yes; both AROCs equal 6",
          "D) No; AROC on [1,3] is 5 and AROC on [3,5] is 9"
        ],
        answer_text: "B",
        explanation: "AROC on [1,3]: [f(3)−f(1)]/(3−1) = (10−2)/2 = (8) / (2) = 4. AROC on [3,5]: [f(5)−f(3)]/(5−3) = (26−10)/2 = (16) / (2) = 8. The AROCs are 4 and 8, not equal. The student is incorrect."
      }
    ]
  },

  "1.3": {
    essentialQuestion: "How can differences in a table reveal whether a function is linear, quadratic, or neither?",

    apBoardNote: "Topic 1.3 is a non-calculator MCQ staple. Given a table with equally-spaced inputs, students must compute first differences to test for linearity and second differences to test for a quadratic model. The AP exam frequently presents tables with noise to see if students systematically check differences rather than guessing. This topic also sets up 1.4 (higher-degree polynomials) and 1.13–1.14, where students choose an appropriate model. Expect one table-classification question per exam.",

    teacherNote: "The key teaching move here is insisting that students always start with first differences before computing second differences. A common pedagogical shortcut — going straight to second differences — causes students to misclassify a linear function as quadratic when they see non-zero second differences (which can happen with rounding). Scaffold the lesson in three phases: (1) recognition that linear functions have slope = constant; (2) discovery via table that constant slope = constant first differences; (3) extension that quadratic functions have constant second differences. Have students verify their classifications by writing the explicit formula and checking.",

    studentVoice: "This topic felt like a detective game. You look at a table of numbers and you're trying to figure out what kind of function it is without being given the formula. First differences are like the speed — if the speed is constant, you're on a straight road (linear). Second differences are like the acceleration — if the acceleration is constant, you're in a car that speeds up smoothly (quadratic). Once I had that car analogy, filling in difference tables was almost fun.",

    narration: [
      "Imagine you have a table of function values but no formula. Can you figure out what type of function it is? For linear and quadratic functions, the answer is yes — and the tool is finite differences.",
      "Start with linear functions. A linear function has the form f(x) = mx + b. Its defining feature is a constant rate of change — the slope m. If the inputs in your table are equally spaced (say, x = 0, 1, 2, 3, 4), then the differences between consecutive outputs — called first differences — will all equal m. For example, f(x) = 3x + 1 gives outputs 1, 4, 7, 10, 13. First differences: 4−1=3, 7−4=3, 10−7=3, 13−10=3. All 3. Constant first differences = linear function.",
      "Now consider a quadratic function f(x) = ax² + bx + c. The outputs at x = 0,1,2,3,4 are c, a+b+c, 4a+2b+c, 9a+3b+c, 16a+4b+c. The first differences are (a+b), (3a+b), (5a+b), (7a+b) — these are not constant (unless a = 0, which would collapse it to linear). But the second differences — differences of the first differences — are all 2a. Constant! So constant second differences signal a quadratic function.",
      "The procedure: given a table with equally-spaced inputs, compute first differences. If they are constant → linear. If not, compute second differences. If those are constant → quadratic. If neither is constant → neither linear nor quadratic (might be exponential, polynomial of higher degree, etc.).",
      "Why does this work? It comes back to the AROC idea from Lesson 1.2. First differences over unit intervals are exactly the AROCs over those unit intervals. For a linear function, the AROC is always the same — that is what 'linear' means. For a quadratic, the AROC itself changes at a constant rate — its AROC is constant. The second difference is the AROC of the AROC, and for a quadratic, that is always 2a.",
      "A table-reading tip: the second difference being constant (= 2a) actually lets you identify the leading coefficient a. If the second differences are all 6, then 2a = 6 and a = 3. You can then back-solve for b and c using any two points from the table. This is a complete system for reconstructing the quadratic from a table.",
      "Watch out: the inputs must be equally spaced for the finite-differences method to work. If x values are 0, 1, 3, 7, the method breaks down unless you adjust for the unequal spacing. The AP exam always provides equally-spaced inputs when asking you to apply this technique."
    ],

    priorKnowledge: [
      "Know the standard forms of linear (f(x) = mx + b) and quadratic (f(x) = ax² + bx + c) functions",
      "Compute the slope of a line given two points, and understand that slope is constant for any linear function",
      "Evaluate a quadratic function at integer inputs to produce an output table",
      "Understand what it means for a sequence of numbers to be 'constant' (all the same value)",
      "From Lesson 1.2: know that AROC = [f(b)−f(a)]/(b−a) and that for unit-spaced inputs this is just the output difference"
    ],

    connections: [
      "Lesson 1.2: first differences over unit-length intervals are exactly the AROCs over those intervals, connecting tables to rates of change",
      "Lesson 1.4: this logic extends — a degree-n polynomial has constant n-th differences — making 1.3 the foundation of the pattern",
      "Real-world link: data analysts use difference tables to detect whether a dataset is better modeled by a linear or quadratic trend before running a regression",
      "Future unit link: in Unit 3 (exponential functions), neither first nor second differences will be constant — instead, ratios between consecutive outputs are constant, which is the exponential analog of this lesson"
    ],

    concepts: [
      "First differences are the differences between consecutive outputs in a table with equally-spaced inputs",
      "Constant first differences → function is linear; the constant value equals the slope m",
      "Second differences are the differences of the first differences; constant second differences → function is quadratic",
      "The constant second difference equals 2a, where a is the leading coefficient of the quadratic",
      "The finite-differences method only works reliably when the input values are equally spaced",
      "If first differences are already constant, you should classify as linear — do not proceed to second differences and misclassify as quadratic"
    ],

    keyFormula: "First differences: Δ¹f(x) = f(x+h) − f(x). Second differences: Δ²f(x) = Δ¹f(x+h) − Δ¹f(x). For quadratic f(x) = ax²+bx+c with h=1: Δ²f = 2a (constant).",

    keyTerms: [
      { term: "First differences", definition: "The values obtained by subtracting consecutive outputs in a function table with equally-spaced inputs; constant first differences indicate a linear function" },
      { term: "Second differences", definition: "The differences of the first differences; constant second differences (when first differences are not constant) indicate a quadratic function" },
      { term: "Leading coefficient", definition: "The coefficient of the highest-degree term in a polynomial; for a quadratic ax²+bx+c, the constant second difference equals 2a" },
      { term: "Equally-spaced inputs", definition: "Input values in a table that increase by the same fixed amount h each row; required for the finite-differences method to classify function type" },
      { term: "Finite differences method", definition: "A systematic procedure of computing successive differences of output values to identify the degree of a polynomial function" }
    ],

    workedExample: {
      problem: "The table shows values of a function f. x: 0, 1, 2, 3, 4. f(x): 5, 8, 13, 20, 29. Determine whether f is linear, quadratic, or neither, and if quadratic, find the leading coefficient.",
      steps: [
        "Check that inputs are equally spaced: 0, 1, 2, 3, 4 — yes, spaced by 1.",
        "Compute first differences: 8−5=3, 13−8=5, 20−13=7, 29−20=9. First differences: 3, 5, 7, 9.",
        "First differences are NOT constant (3≠5), so f is not linear.",
        "Compute second differences: 5−3=2, 7−5=2, 9−7=2. Second differences: 2, 2, 2.",
        "Second differences ARE constant. Therefore f is quadratic.",
        "The constant second difference equals 2a: 2a = 2, so a = 1. The leading coefficient is 1.",
        "Verify: f(x) = x² + bx + c. Using f(0) = 5: c = 5. Using f(1) = 8: 1 + b + 5 = 8 → b = 2. So f(x) = x² + 2x + 5. Check: f(2) = 4+4+5 = 13 ✓, f(3) = 9+6+5 = 20 ✓."
      ],
      answer: "f is quadratic with leading coefficient a = 1. The function is f(x) = x² + 2x + 5."
    },

    workedExample2: {
      problem: "A table of values is given: x: −2, 0, 2, 4, 6. f(x): 11, 3, 3, 11, 27. Note the inputs are spaced 2 apart. Determine whether f is linear or quadratic, and find the quadratic model if applicable.",
      steps: [
        "Inputs are equally spaced with h = 2 (not 1), so we can still apply the difference method.",
        "Compute first differences: 3−11=−8, 3−3=0, 11−3=8, 27−11=16. First differences: −8, 0, 8, 16.",
        "First differences are not constant (−8, 0, 8, 16), so f is not linear.",
        "Compute second differences: 0−(−8)=8, 8−0=8, 16−8=8. Second differences: 8, 8, 8.",
        "Second differences are constant! f is quadratic.",
        "With h = 2, the constant second difference = 2a·h² = 2a·4 = 8a. Wait — more carefully: for equally-spaced inputs with step h, the second difference = 2ah². So 8 = 2a(2²) = 8a → a = 1.",
        "Use f(0) = 3: c = 3. Use f(2) = 3: 4(1) + 2b + 3 = 3 → 2b = −4 → b = −2.",
        "Model: f(x) = x² − 2x + 3. Verify: f(−2) = 4+4+3=11 ✓, f(4)=16−8+3=11 ✓, f(6)=36−12+3=27 ✓."
      ],
      answer: "f is quadratic. The model is f(x) = x² − 2x + 3, confirmed by constant second differences of 8 with step size h = 2."
    },

    commonMistakes: [
      "Computing second differences without first checking whether first differences are already constant — if they are, the function is linear, not quadratic",
      "Forgetting that the finite-differences method requires equally-spaced inputs — applying it to unequally-spaced tables produces meaningless results",
      "Misidentifying the leading coefficient: the second difference equals 2a (for h=1), not a — always divide by 2",
      "Confusing 'constant first differences' with 'constant values' — constant first differences mean the outputs increase by the same amount each step, not that the outputs themselves are the same",
      "Assuming that if second differences are not constant, the function must be exponential — it could be a polynomial of degree 3 or higher, or something else entirely"
    ],

    tip: "Build your difference table top-down: first compute all first differences in a column, then all second differences in the next column. The moment a column is constant, you have found the degree. If nothing is constant within a few columns, the function is not a low-degree polynomial.",

    questions: [
      {
        question_text: "A table of values is given: x: 0, 1, 2, 3. f(x): 2, 5, 8, 11. What are the first differences, and what does this tell you about f?",
        difficulty: "Easy",
        choices: [
          "A) First differences are 3, 3, 3 — f is linear",
          "B) First differences are 3, 3, 3 — f is quadratic",
          "C) First differences are 2, 5, 8 — f is linear",
          "D) First differences are 5, 3, 3 — f is neither linear nor quadratic"
        ],
        answer_text: "A",
        explanation: "First differences: 5−2=3, 8−5=3, 11−8=3. All equal 3. Constant first differences indicate a linear function. f(x) = 3x + 2."
      },
      {
        question_text: "For the quadratic f(x) = 2x² − x + 4, what is the constant value of the second differences when evaluated at x = 0, 1, 2, 3?",
        difficulty: "Easy",
        choices: [
          "A) 2",
          "B) 4",
          "C) 1",
          "D) 8"
        ],
        answer_text: "B",
        explanation: "For f(x) = ax² + bx + c, the second difference (with step h = 1) equals 2a. Here a = 2, so second difference = 2(2) = 4."
      },
      {
        question_text: "A table shows f values at equally-spaced x: x: 1, 2, 3, 4. f(x): 6, 10, 16, 24. First differences are 4, 6, 8. Second differences are 2, 2. What is the leading coefficient of f?",
        difficulty: "Easy",
        choices: [
          "A) 4",
          "B) 2",
          "C) 1",
          "D) 6"
        ],
        answer_text: "C",
        explanation: "The constant second difference equals 2a. Here 2a = 2, so a = 1. The leading coefficient is 1."
      },
      {
        question_text: "A student computes first differences for a table and gets: 7, 7, 7, 7. The student then computes second differences: 0, 0, 0. The student concludes the function is quadratic because the second differences are constant. Is the student's reasoning correct?",
        difficulty: "Easy",
        choices: [
          "A) Yes — constant second differences always mean quadratic",
          "B) No — constant first differences already indicate a linear function; second differences of 0 confirm linearity, not quadratic",
          "C) No — constant second differences indicate an exponential function",
          "D) Yes — every polynomial has constant second differences"
        ],
        answer_text: "B",
        explanation: "When first differences are already constant (all equal 7), the function is linear. The second differences will be 0 (constant, but 0). A true quadratic has constant NONZERO second differences. The student should have stopped at first differences and concluded: linear."
      },
      {
        question_text: "A function g has values: x: 0, 1, 2, 3, 4. g(x): 1, 3, 9, 27, 81. Compute first differences. Can this function be classified as linear or quadratic?",
        difficulty: "Medium",
        choices: [
          "A) First differences are 2, 6, 18, 54 — not constant; second differences are 4, 12, 36 — not constant; function is neither linear nor quadratic",
          "B) First differences are 2, 6, 18, 54 — constant; function is linear",
          "C) First differences are 2, 6, 18, 54 — not constant; second differences are constant; function is quadratic",
          "D) First differences are 3, 3, 3, 3 — constant; function is linear"
        ],
        answer_text: "A",
        explanation: "First differences: 3−1=2, 9−3=6, 27−9=18, 81−27=54. Not constant → not linear. Second differences: 6−2=4, 18−6=12, 54−18=36. Not constant → not quadratic. This is g(x) = 3^x, an exponential function."
      },
      {
        question_text: "A table of values for f is: x: 0, 2, 4, 6. f(x): 0, 6, 16, 30. The inputs are spaced 2 apart. The first differences are 6, 10, 14 and the second differences are 4, 4. What is the leading coefficient a of the quadratic model?",
        difficulty: "Medium",
        choices: [
          "A) a = 4",
          "B) a = 2",
          "C) a = 1",
          "D) a = 0.5"
        ],
        answer_text: "D",
        explanation: "With step size h = 2, the second difference = 2a·h² = 2a·4 = 8a. The constant second difference is 4, so 8a = 4 → a = 0.5. Verify: f(x) = 0.5x² + bx + c. f(0)=0 → c=0. f(2)=2+2b=6 → b=2. So f(x)=0.5x²+2x. Check: f(4)=8+8=16 ✓."
      },
      {
        question_text: "A function f is given by: x: −1, 0, 1, 2, 3. f(x): 4, 1, 0, 1, 4. First differences are: −3, −1, 1, 3. Second differences are all 2. Which quadratic model fits?",
        difficulty: "Medium",
        choices: [
          "A) f(x) = x² − 2x + 1",
          "B) f(x) = x² − 1",
          "C) f(x) = x²",
          "D) f(x) = 2x² − 1"
        ],
        answer_text: "A",
        explanation: "Second difference = 2a = 2 → a = 1. Using f(0) = 1: c = 1. Using f(1) = 0: 1 + b + 1 = 0 → b = −2. So f(x) = x² − 2x + 1 = (x − 1)². Verify: f(−1) = (−2)² = 4 ✓, f(0) = 1 ✓, f(1) = 0 ✓, f(2) = 1 ✓, f(3) = 4 ✓. This matches choice A."
      },
      {
        question_text: "The table shows: x: 0, 1, 2, 3, 4. f(x): 3, 7, 13, 21, 31. A student claims f could be linear. Determine whether this is possible by computing differences.",
        difficulty: "Medium",
        choices: [
          "A) Possible; first differences are all 4",
          "B) Not possible; first differences are 4, 6, 8, 10 — not constant",
          "C) Possible; second differences are all 2",
          "D) Not possible; f has only two equal values"
        ],
        answer_text: "B",
        explanation: "First differences: 7−3=4, 13−7=6, 21−13=8, 31−21=10. These are 4, 6, 8, 10 — not constant. Therefore f is not linear. Second differences: 6−4=2, 8−6=2, 10−8=2 — constant, so f is quadratic."
      },
      {
        question_text: "A quadratic function f has second differences of 6 (with unit-spaced inputs). If f(0) = 2 and f(1) = 5, find f(2), f(3), and f(4).",
        difficulty: "Hard",
        choices: [
          "A) f(2)=11, f(3)=20, f(4)=32",
          "B) f(2)=14, f(3)=29, f(4)=50",
          "C) f(2)=11, f(3)=23, f(4)=41",
          "D) f(2)=8, f(3)=11, f(4)=14"
        ],
        answer_text: "B",
        explanation: "The first difference from x=0 to x=1 is f(1)−f(0) = 5−2 = 3. Since the second difference is 6, each successive first difference increases by 6: Δ(0→1) = 3, Δ(1→2) = 3+6 = 9, Δ(2→3) = 9+6 = 15, Δ(3→4) = 15+6 = 21. Therefore: f(2) = f(1)+9 = 5+9 = 14; f(3) = 14+15 = 29; f(4) = 29+21 = 50. This matches choice B."
      },
      {
        question_text: "A scientist records measurements: x: 0, 1, 2, 3, 4, 5. f(x): 2, 5, 10, 17, 26, 37. First differences: 3, 5, 7, 9, 11. Second differences: 2, 2, 2, 2. The scientist wants to write the quadratic formula. Using f(0)=2 and f(1)=5, find the formula for f(x).",
        difficulty: "Hard",
        choices: [
          "A) f(x) = x² + 3x + 2",
          "B) f(x) = x² + 2x + 2",
          "C) f(x) = 2x² + 2",
          "D) f(x) = x² + 2x + 1"
        ],
        answer_text: "B",
        explanation: "Second difference = 2 = 2a → a = 1. f(x) = x² + bx + c. f(0) = c = 2, so c = 2. f(1) = 1 + b + 2 = 5 → b = 2. Therefore f(x) = x² + 2x + 2. Verify: f(2)=4+4+2=10 ✓, f(3)=9+6+2=17 ✓, f(5)=25+10+2=37 ✓."
      }
    ]
  },

  "1.4": {
    essentialQuestion: "How do the degree of a polynomial and the behavior of its rate of change connect to the shape of its graph?",

    apBoardNote: "Topic 1.4 extends the finite-differences framework from 1.3 to higher-degree polynomials and introduces the connection between sign changes in the AROC and local extrema. The AP exam tests 'at most' language precisely — students who write 'exactly n−1 turning points' for a degree-n polynomial lose credit. MCQ Part A may ask students to compute higher-order finite differences or to use degree information to determine the maximum number of real zeros or turning points. FRQs may present a polynomial's rate-of-change behavior and ask for conclusions about the graph.",

    teacherNote: "The two critical vocabulary distinctions for this lesson are 'at most' vs. 'exactly' for zeros and turning points, and 'local' vs. 'global' extrema. Students consistently want to say a degree-4 polynomial has exactly 3 turning points. Counterexamples: f(x) = x⁴ has only 1 turning point (the vertex at the origin); f(x) = x⁴ − x² has 3. Use specific examples to make the 'at most' language visceral. For the sign-change-AROC-to-local-extrema connection, a table with AROC values that go from positive to negative is the clearest way to identify where a local max might be — no graph needed.",

    studentVoice: "I kept messing up by saying a degree-5 polynomial has exactly 4 turning points. My teacher kept circling 'exactly' and writing 'at MOST.' Then she graphed y = x⁵ — which has zero turning points — and I finally got it. The degree gives you a ceiling, not a count. For zeros and turning points, it's a maximum, not a guarantee.",

    narration: [
      "Lesson 1.3 showed that first differences (AROCs over unit intervals) are constant for linear functions, and second differences are constant for quadratics. This pattern extends: for a polynomial of degree n with equally-spaced inputs, the n-th finite differences are constant (and equal to n! × aₙ, where aₙ is the leading coefficient). This gives you a complete numerical fingerprint for any polynomial degree.",
      "But there is more to polynomials than their differences. Two fundamental structural facts govern polynomial graphs. First: a polynomial of degree n has at most n real zeros. 'At most' is crucial — a degree-3 polynomial might have 1, 2, or 3 real zeros, depending on its specific coefficients. The upper bound is n, not the exact count. Second: a polynomial of degree n has at most n−1 local extrema (turning points). A degree-4 polynomial can have 0, 1, 2, or 3 turning points; it cannot have 4 or more.",
      "Why 'at most n−1' turning points? Intuitively, a turning point is where the function switches from increasing to decreasing or vice versa. For the function to switch direction, the AROC must change sign. For a degree-n polynomial, the AROC is itself a polynomial of degree n−1, and a degree-(n−1) polynomial has at most n−1 zeros, meaning the AROC can change sign at most n−1 times. Each sign change corresponds to one turning point.",
      "This leads to a practical tool for identifying extrema from a table: look at the signs of the AROC over consecutive intervals. If the AROC is positive on one interval and negative on the next, the function changes from increasing to decreasing — there is a local maximum in between. If the AROC is negative on one interval and positive on the next, the function changes from decreasing to increasing — there is a local minimum in between.",
      "Let's anchor this with an example. Suppose a polynomial has AROCs of 5, 2, −1, −3, 0, 4 over consecutive unit intervals. The AROC changes from positive (2) to negative (−1) between intervals 2 and 3 — local maximum there. Then the AROC changes from negative (−3) to zero (0) and then positive (4) — the sign goes from negative to non-negative between intervals 5 and 6 — local minimum there. Two sign changes, two turning points.",
      "End behavior is another key feature: for a polynomial of degree n with leading coefficient aₙ, as x → +∞ and x → −∞, the polynomial behaves like its leading term aₙxⁿ. If n is even and aₙ > 0, both ends go up. If n is odd and aₙ > 0, the left end goes down and the right end goes up. The degree and the sign of the leading coefficient together determine the 'long-run' shape of the graph.",
      "Putting it together: when you see a polynomial graph or table, ask: How many real zeros does it have (at most n)? How many turning points (at most n−1)? Where do the AROCs change sign (those are the turning points)? What is the end behavior (from degree and leading coefficient sign)? These four questions describe the skeleton of any polynomial graph."
    ],

    priorKnowledge: [
      "From Lesson 1.3: first and second differences identify linear and quadratic functions from tables",
      "Know the definitions of zero (root), local maximum, and local minimum of a function",
      "Understand that a function is increasing where its outputs go up and decreasing where they go down",
      "From Lesson 1.2: AROC is positive when a function is increasing and negative when it is decreasing over an interval",
      "Be comfortable with polynomial vocabulary: degree, leading coefficient, standard form"
    ],

    connections: [
      "Lesson 1.3: constant n-th differences for degree-n polynomials directly generalizes the first/second difference test",
      "Lesson 1.5: zeros of a polynomial (the topic of 1.5) include complex zeros; 1.4 counts the real ones as 'at most n'",
      "Lesson 1.2: the connection between sign changes in AROC and local extrema is a direct application of AROC from 1.2",
      "Real-world link: engineers model the shape of a road or roller coaster as a polynomial; the number of turning points determines the number of rises and dips, and engineers must know the maximum possible for a given degree"
    ],

    concepts: [
      "For a degree-n polynomial with equally-spaced inputs, the n-th finite differences are constant",
      "A polynomial of degree n has at most n real zeros — 'at most,' not 'exactly'",
      "A polynomial of degree n has at most n−1 local extrema (turning points)",
      "A local maximum occurs where the AROC changes from positive to negative; a local minimum where it changes from negative to positive",
      "End behavior is determined by the degree (even or odd) and the sign of the leading coefficient",
      "The AROC of a degree-n polynomial is itself a polynomial of degree n−1"
    ],

    keyFormula: "Degree n polynomial: at most n real zeros, at most n−1 turning points. Local max where AROC changes + → −; local min where AROC changes − → +.",

    keyTerms: [
      { term: "Local maximum", definition: "A point where a function's output is greater than all nearby outputs; occurs where the AROC changes from positive to negative" },
      { term: "Local minimum", definition: "A point where a function's output is less than all nearby outputs; occurs where the AROC changes from negative to positive" },
      { term: "Turning point", definition: "A point on a polynomial graph where the function changes from increasing to decreasing or decreasing to increasing; a polynomial of degree n has at most n−1 turning points" },
      { term: "End behavior", definition: "The behavior of a polynomial as x approaches positive or negative infinity, determined by the degree and the sign of the leading coefficient" },
      { term: "n-th finite differences", definition: "Applying the differencing operation n times to a table with equally-spaced inputs; for a degree-n polynomial, the n-th differences are constant" },
      { term: "Real zeros", definition: "Input values where a polynomial equals zero, corresponding to x-intercepts of the graph; a degree-n polynomial has at most n real zeros" }
    ],

    workedExample: {
      problem: "A polynomial p has values at consecutive unit-spaced inputs shown in this table: x: 0, 1, 2, 3, 4, 5. p(x): 0, 6, 4, 0, 6, 24. Compute the AROCs over each unit interval. Identify any local extrema from the AROC sign changes.",
      steps: [
        "Compute AROCs (= first differences since the step is 1): 6−0=6, 4−6=−2, 0−4=−4, 6−0=6, 24−6=18.",
        "AROCs over intervals [0,1],[1,2],[2,3],[3,4],[4,5]: 6, −2, −4, 6, 18.",
        "Sign changes: From [0,1] to [1,2]: AROC goes from +6 to −2. Sign change from positive to negative → local maximum between x=1 and x=2. The table shows p(1)=6 and p(2)=4, so the local max is near x=1 (p(1) = 6 is the highest nearby value).",
        "From [2,3] to [3,4]: AROC goes from −4 to +6. Sign change from negative to positive → local minimum between x=2 and x=3. The table shows p(2)=4, p(3)=0, so the local min is near x=3 (p(3)=0 is the lowest nearby value).",
        "Conclusion: local maximum near x=1 (p≈6), local minimum near x=3 (p=0)."
      ],
      answer: "The polynomial p has a local maximum near x = 1 (where AROC changes from positive to negative) and a local minimum near x = 3 (where AROC changes from negative to positive)."
    },

    workedExample2: {
      problem: "A degree-4 polynomial q is known to have exactly 2 positive real zeros and a positive leading coefficient. (a) What is the maximum number of turning points q can have? (b) What is q's end behavior? (c) If the first finite differences of q (at unit-spaced inputs 0,1,2,3,4,5) are −3, −1, 1, 3, 5, what do these suggest about local extrema?",
      steps: [
        "(a) A degree-4 polynomial has at most 4−1 = 3 turning points. So the maximum is 3.",
        "(b) Degree 4 (even) with positive leading coefficient: as x → ±∞, q(x) → +∞. Both ends of the graph go up.",
        "(c) First differences (AROCs): −3, −1, 1, 3, 5. Examine sign changes: from −3 to −1 (both negative, no sign change); from −1 to +1: sign changes from negative to positive → local minimum between x=2 and x=3. From 1 to 3 to 5: all positive, no sign changes.",
        "So based on this table, q appears to have one local minimum in (2, 3), and no local maximum is visible in this range.",
        "This is consistent with a degree-4 polynomial that has only 1 turning point in the observed range (though it could have up to 3 total)."
      ],
      answer: "(a) At most 3 turning points. (b) Both ends rise (q → +∞ as x → ±∞). (c) The sign change in AROC from negative to positive between x=2 and x=3 indicates a local minimum there; no local maximum is visible in [0, 5]."
    },

    commonMistakes: [
      "Claiming a degree-n polynomial has EXACTLY n−1 turning points — it has AT MOST n−1; a degree-4 polynomial can have 0, 1, 2, or 3 turning points",
      "Claiming a degree-n polynomial has exactly n real zeros — it has AT MOST n; some zeros may be complex (covered in 1.5)",
      "Confusing local max (AROC changes + to −) with local min (AROC changes − to +) — draw a quick sketch if confused",
      "Forgetting that the end behavior depends on BOTH the degree (even/odd) AND the sign of the leading coefficient — two separate factors",
      "Applying the finite-differences test to unevenly-spaced data — the n-th differences are constant only for equally-spaced inputs"
    ],

    tip: "For any polynomial question about zeros or turning points, the answer is NEVER 'exactly n' or 'exactly n−1' unless additional constraints force it. The correct default phrase is 'at most.' Write it that way on the exam and you will never lose a point for overclaiming.",

    questions: [
      {
        question_text: "A polynomial function p has degree 5. What is the maximum number of local extrema (turning points) that p can have?",
        difficulty: "Easy",
        choices: [
          "A) 5",
          "B) 6",
          "C) 4",
          "D) 3"
        ],
        answer_text: "C",
        explanation: "A degree-n polynomial has at most n−1 turning points. For degree 5: at most 5−1 = 4 turning points."
      },
      {
        question_text: "A polynomial of degree 6 with a positive leading coefficient is analyzed. Which of the following describes its end behavior?",
        difficulty: "Easy",
        choices: [
          "A) As x → +∞, p → +∞; as x → −∞, p → −∞",
          "B) As x → +∞, p → −∞; as x → −∞, p → +∞",
          "C) As x → ±∞, p → +∞",
          "D) As x → ±∞, p → −∞"
        ],
        answer_text: "C",
        explanation: "Degree 6 is even, and the leading coefficient is positive. For even-degree polynomials with positive leading coefficient, both ends of the graph rise: as x → ±∞, p(x) → +∞."
      },
      {
        question_text: "The AROCs of a function over consecutive unit intervals are: 4, 2, −1, −3. Based on this pattern, which of the following is true?",
        difficulty: "Easy",
        choices: [
          "A) The function has a local minimum between the 2nd and 3rd intervals",
          "B) The function has a local maximum between the 2nd and 3rd intervals",
          "C) The function is always increasing",
          "D) The function has a local maximum between the 1st and 2nd intervals"
        ],
        answer_text: "B",
        explanation: "The AROCs are 4, 2 (positive) then −1, −3 (negative). The AROC changes sign from positive to negative between the 2nd and 3rd intervals, which indicates a local maximum there."
      },
      {
        question_text: "Which statement about a degree-4 polynomial is always true?",
        difficulty: "Easy",
        choices: [
          "A) It has exactly 4 real zeros",
          "B) It has exactly 3 turning points",
          "C) It has at most 4 real zeros and at most 3 turning points",
          "D) It has at least 1 real zero"
        ],
        answer_text: "C",
        explanation: "A degree-4 polynomial has AT MOST 4 real zeros and AT MOST 3 turning points. It may have fewer — for example, f(x) = x⁴ + 1 has 0 real zeros and only 1 turning point. Neither 'exactly' claim is always true, and the polynomial need not have any real zeros at all."
      },
      {
        question_text: "The third finite differences of a function (with unit-spaced inputs) are all equal to 6. What does this tell you about the function?",
        difficulty: "Medium",
        choices: [
          "A) The function is linear with slope 6",
          "B) The function is quadratic with leading coefficient 3",
          "C) The function is cubic (degree 3) with leading coefficient 1",
          "D) The function is cubic (degree 3) with leading coefficient 6"
        ],
        answer_text: "C",
        explanation: "For a degree-n polynomial, the n-th differences are constant and equal to n! × aₙ. Here the 3rd differences are constant = 6, so n = 3 and 3! × a₃ = 6 → 6a₃ = 6 → a₃ = 1. The function is cubic with leading coefficient 1."
      },
      {
        question_text: "A polynomial p of degree 3 has AROCs (first differences) of −5, 1, 7 over three consecutive unit intervals. Based on sign changes, which of the following can be concluded?",
        difficulty: "Medium",
        choices: [
          "A) p has a local maximum between the 1st and 2nd intervals and no local minimum visible",
          "B) p has a local minimum between the 1st and 2nd intervals and no local maximum visible",
          "C) p has no turning points in this range",
          "D) p has both a local max and a local min in this range"
        ],
        answer_text: "B",
        explanation: "AROCs: −5 (negative), then 1 (positive), then 7 (positive). The sign change is from negative (−5) to positive (1) between intervals 1 and 2 → local minimum there. There is no negative-to-positive-to-negative pattern, so no local maximum is visible."
      },
      {
        question_text: "A degree-3 polynomial q has a negative leading coefficient. Describe its end behavior.",
        difficulty: "Medium",
        choices: [
          "A) As x → +∞, q → +∞; as x → −∞, q → +∞",
          "B) As x → +∞, q → −∞; as x → −∞, q → −∞",
          "C) As x → +∞, q → −∞; as x → −∞, q → +∞",
          "D) As x → +∞, q → +∞; as x → −∞, q → −∞"
        ],
        answer_text: "C",
        explanation: "Degree 3 is odd. For odd-degree polynomials with positive leading coefficient, the left end goes down and right end goes up. With a negative leading coefficient, this flips: right end goes down (q → −∞ as x → +∞) and left end goes up (q → +∞ as x → −∞)."
      },
      {
        question_text: "A function's finite differences table has: first differences: 2, 5, 8, 11; second differences: 3, 3, 3; third differences: 0, 0. What is the degree of the polynomial and its leading coefficient?",
        difficulty: "Medium",
        choices: [
          "A) Degree 3, leading coefficient 3",
          "B) Degree 2, leading coefficient 1.5",
          "C) Degree 2, leading coefficient 3",
          "D) Degree 1, leading coefficient 2"
        ],
        answer_text: "B",
        explanation: "The second differences are constant (= 3) and the third differences are 0 (confirming no degree-3 component). So the polynomial is degree 2. For degree 2: second difference = 2a = 3 → a = 1.5. Leading coefficient is 1.5."
      },
      {
        question_text: "A polynomial p of degree 4 satisfies: p has 4 real zeros and exactly 3 turning points. A student says: 'any degree-4 polynomial must have 4 real zeros.' Which of the following is a counterexample to the student's claim?",
        difficulty: "Hard",
        choices: [
          "A) f(x) = (x−1)(x−2)(x−3)(x−4) has 4 real zeros",
          "B) f(x) = x⁴ + 1 has no real zeros",
          "C) f(x) = x⁴ − 4x² has exactly 3 real zeros",
          "D) f(x) = x⁴ − 1 has exactly 2 real zeros"
        ],
        answer_text: "B",
        explanation: "A counterexample must be a degree-4 polynomial with fewer than 4 real zeros. f(x) = x⁴ + 1 is always positive (minimum value = 1 at x = 0) and never equals zero. It has 0 real zeros. This directly contradicts the claim that degree-4 polynomials must have 4 real zeros. Choice D also works as a partial counterexample (only 2 real zeros: x = ±1), but B is the most dramatic."
      },
      {
        question_text: "The table of a polynomial q at x = 0,1,2,3,4,5,6 gives AROCs (first differences): 10, 6, 2, −2, −6, −10. Based solely on these values, determine the number of local extrema visible in the table and whether the function appears to be quadratic, cubic, or higher degree.",
        difficulty: "Hard",
        choices: [
          "A) 1 local maximum near x=3; second differences are constant at −4, suggesting quadratic",
          "B) 2 local extrema; second differences are not constant, suggesting cubic",
          "C) 1 local maximum near x=3; the AROCs form an arithmetic sequence with constant difference −4, suggesting quadratic",
          "D) No local extrema visible; the function is linear"
        ],
        answer_text: "C",
        explanation: "Second differences (differences of the AROCs): 6−10=−4, 2−6=−4, −2−2=−4, −6−(−2)=−4, −10−(−6)=−4. All −4 — constant! This is a quadratic. The AROC changes sign from positive (at 2) to negative (at −2) between the 3rd and 4th intervals, suggesting a single local maximum near x=3. There is only 1 sign change in AROCs, consistent with a quadratic having at most 1 turning point."
      }
    ]
  },

  "1.5": {
    essentialQuestion: "Why do polynomials sometimes have fewer x-intercepts than their degree suggests, and where do the 'missing' zeros go?",

    apBoardNote: "Topic 1.5 introduces the Fundamental Theorem of Algebra and complex zeros. The AP exam tests two specific skills: (1) given some zeros of a polynomial with real coefficients, identifying all remaining zeros using the conjugate pair rule; and (2) interpreting multiplicity to predict graph behavior (touching vs. crossing the x-axis). These appear on MCQ Part A and Part B. A common FRQ setup: 'A polynomial p has real coefficients and degree 4. If x = 3+2i is a zero of p, what are all zeros of p, given that p also has a zero at x = 1 with multiplicity 2?' Students must cite conjugate pairs and multiplicity accounting explicitly.",

    teacherNote: "The most common student confusion here is between 'the polynomial has degree 4, so there must be 4 x-intercepts' and the correct statement 'there are 4 zeros counting multiplicity, real or complex.' Use the factored form to make this concrete: f(x) = (x−2)²(x²+1) has degree 4, zeros at x=2 (mult. 2) and x=±i (complex, mult. 1 each), and only one x-intercept. Count on fingers: degree 4 = 4 zeros total (2+1+1). Also be explicit about WHY conjugate pairs must occur together: the coefficients are real, so when you expand (x − (a+bi))(x − (a−bi)) = x² − 2ax + (a²+b²), all coefficients are real. This is the algebra that forces the pairing.",

    studentVoice: "The idea that a polynomial can 'be degree 4 but only cross the x-axis twice' messed me up until I understood that the other two zeros are imaginary. They're hiding in the complex number system. And the conjugate thing makes sense because if a+bi is a zero, the polynomial has a factor (x−(a+bi)), and its complex conjugate factor (x−(a−bi)) has to be there too so all the coefficients stay real numbers. That's not magic — it's just algebra.",

    narration: [
      "We have spent several lessons counting zeros of polynomials. But every time we said 'at most n real zeros,' you may have wondered: what fills the gap? A degree-4 polynomial that only crosses the x-axis twice — where are the other two zeros? The answer lies in the complex numbers.",
      "The Fundamental Theorem of Algebra (FTA) states: every polynomial of degree n ≥ 1 with complex coefficients has exactly n zeros counting multiplicity in the complex number system. This is not 'at most n' — this is exactly n. The catch is that some or all of those zeros may be complex (non-real) numbers of the form a + bi, where b ≠ 0.",
      "For polynomials with real coefficients — which is every polynomial on the AP exam — a remarkable symmetry holds: complex zeros always come in conjugate pairs. If a + bi (with b ≠ 0) is a zero, then a − bi must also be a zero. This is the Complex Conjugate Zero Theorem. The reason: if you expand (x − (a+bi))(x − (a−bi)), you get x² − 2ax + (a² + b²), which has all real coefficients. Real-coefficient polynomials can only be built from real linear factors and such real-coefficient quadratic factors — so complex zeros must appear in pairs.",
      "Multiplicity adds another layer. If (x − r)^k is a factor of a polynomial p, then r is a zero of multiplicity k. When you graph p near x = r, the behavior depends on whether k is odd or even. If k is odd, the graph crosses the x-axis at x = r (the function changes sign). If k is even, the graph touches the x-axis at x = r and bounces back without crossing (the function does not change sign). This is why f(x) = (x−2)²(x−3) touches the x-axis at x = 2 and crosses it at x = 3.",
      "Here is how to use these facts together: suppose a degree-5 polynomial p has real coefficients and you are told it has zeros at x = −1 (multiplicity 2) and x = 2 + i. By the conjugate theorem, x = 2 − i is also a zero. Count: (−1) with mult. 2 accounts for 2 zeros; (2+i) accounts for 1; (2−i) accounts for 1. Total so far: 4. Since degree is 5, one more zero remains — it must be real (because complex zeros come in pairs and there is only 1 slot left, which cannot form a pair). That real zero is wherever else the polynomial crosses zero.",
      "The multiplicity also affects how you count zeros at x-intercepts of a graph. If you see the graph touch but not cross the x-axis at x = 4, that zero has even multiplicity (2, 4, ...). If the graph crosses the x-axis at x = −3, that zero has odd multiplicity (1, 3, 5, ...). You can use a graph to read off zero multiplicities even without the formula.",
      "One more powerful implication of the FTA: the number of real zeros of a polynomial must have the same parity as its degree. A degree-5 polynomial must have an odd number of real zeros (1, 3, or 5) — it cannot have 0 or 2 real zeros, because the remaining complex zeros must come in pairs, consuming 2 at a time, and you need at least 1 real to account for the odd degree. A degree-4 polynomial can have 0, 2, or 4 real zeros — always an even number."
    ],

    priorKnowledge: [
      "Know what a zero (root) of a function is and its relationship to x-intercepts on the graph",
      "Understand complex numbers: a + bi form, where i = √(−1) and i² = −1",
      "Be able to expand products of binomials: (x − r₁)(x − r₂) = x² − (r₁+r₂)x + r₁r₂",
      "Know that a polynomial of degree n has at most n real zeros (from Lesson 1.4)",
      "Understand factor notation: if (x − r) is a factor of p(x), then p(r) = 0"
    ],

    connections: [
      "Lesson 1.4: the 'at most n real zeros' bound from 1.4 is explained here — the remaining zeros are complex, accounting for the gap up to exactly n total zeros",
      "Lesson 1.3–1.4: multiplicity of a zero determines whether the graph crosses or bounces at an x-intercept, which is visible in the sign change (or lack thereof) of the AROC",
      "Real-world link: in electrical engineering, complex zeros of polynomials (called poles and zeros of a transfer function) determine whether a circuit oscillates or damps — the pairing of conjugates ensures the circuit's physical response is a real-valued signal",
      "Future unit link: in Unit 2, when solving equations involving even-degree power functions, solutions sometimes require imaginary numbers — the conjugate pair rule applies there too"
    ],

    concepts: [
      "Fundamental Theorem of Algebra: a degree-n polynomial has exactly n zeros counting multiplicity in the complex numbers",
      "Complex Conjugate Zero Theorem: for real-coefficient polynomials, complex zeros occur in conjugate pairs (a+bi and a−bi)",
      "A zero of even multiplicity: graph touches but does not cross the x-axis — AROC does not change sign",
      "A zero of odd multiplicity: graph crosses the x-axis — AROC changes sign",
      "The number of real zeros of a polynomial must have the same parity as its degree (odd degree → odd number of real zeros)",
      "Non-real complex zeros do not produce x-intercepts on the real-number graph"
    ],

    keyFormula: "If p has real coefficients and (a + bi) is a zero (b ≠ 0), then (a − bi) is also a zero. Total zeros = degree (counting multiplicity, including complex zeros).",

    keyTerms: [
      { term: "Fundamental Theorem of Algebra", definition: "Every polynomial of degree n ≥ 1 has exactly n zeros counting multiplicity in the complex number system" },
      { term: "Complex conjugate", definition: "The conjugate of a + bi is a − bi; complex zeros of real-coefficient polynomials always occur as conjugate pairs" },
      { term: "Multiplicity", definition: "The number of times a factor (x − r) appears in the complete factorization of a polynomial; determines whether the graph crosses (odd) or bounces (even) at x = r" },
      { term: "Non-real complex zero", definition: "A zero of the form a + bi with b ≠ 0; does not produce an x-intercept on the real-coordinate graph" },
      { term: "Conjugate pair", definition: "Two complex zeros of the form a + bi and a − bi that must both appear together as zeros of any polynomial with real coefficients" },
      { term: "Parity of real zeros", definition: "For a polynomial with real coefficients, the count of real zeros must have the same parity (odd/even) as the degree" }
    ],

    workedExample: {
      problem: "A polynomial p(x) has real coefficients, degree 4, and the following known zeros: x = 3 + i and x = −2 (multiplicity 2). List all zeros of p and explain why no other zeros exist.",
      steps: [
        "Since p has real coefficients and x = 3 + i is a zero, its complex conjugate x = 3 − i must also be a zero.",
        "Known zeros so far: x = 3 + i (mult. 1), x = 3 − i (mult. 1), x = −2 (mult. 2).",
        "Count zeros: 1 + 1 + 2 = 4. The total equals the degree (4).",
        "By the FTA, a degree-4 polynomial has exactly 4 zeros counting multiplicity. We have accounted for all 4.",
        "Therefore the complete zero list is: x = 3+i, x = 3−i, and x = −2 (multiplicity 2). No other zeros exist.",
        "Graph behavior: at x = −2, the multiplicity is 2 (even), so the graph touches the x-axis and turns around without crossing. The complex zeros (3±i) produce no x-intercepts."
      ],
      answer: "All zeros of p: x = 3+i, x = 3−i, and x = −2 (multiplicity 2). The graph touches but does not cross the x-axis only at x = −2."
    },

    workedExample2: {
      problem: "A polynomial q has real coefficients and degree 5. It is known that x = 1 is a zero of multiplicity 3 and x = 2 − 3i is a zero. (a) List all zeros of q with multiplicities. (b) Write a possible factored form for q(x). (c) How many x-intercepts does the graph of q have, and what is the behavior at each?",
      steps: [
        "(a) Given zeros: x = 1 (mult. 3) and x = 2 − 3i (mult. 1). Since coefficients are real, the conjugate x = 2 + 3i (mult. 1) is also a zero. Total: 3 + 1 + 1 = 5 = degree. All zeros are accounted for.",
        "All zeros: x = 1 (multiplicity 3), x = 2 − 3i (multiplicity 1), x = 2 + 3i (multiplicity 1).",
        "(b) Factored form: q(x) = a(x − 1)³(x − (2−3i))(x − (2+3i)) for some nonzero real constant a.",
        "Simplify the complex factors: (x − (2−3i))(x − (2+3i)) = x² − 4x + (4+9) = x² − 4x + 13.",
        "So q(x) = a(x − 1)³(x² − 4x + 13). With a = 1: q(x) = (x−1)³(x²−4x+13).",
        "(c) X-intercepts come only from real zeros. The only real zero is x = 1. So the graph has exactly 1 x-intercept at x = 1.",
        "At x = 1, the multiplicity is 3 (odd), so the graph crosses the x-axis at x = 1 (the function changes sign)."
      ],
      answer: "(a) Zeros: x=1 (mult. 3), x=2−3i (mult. 1), x=2+3i (mult. 1). (b) q(x) = (x−1)³(x²−4x+13). (c) One x-intercept at x=1; the graph crosses the x-axis there because the multiplicity is odd (3)."
    },

    commonMistakes: [
      "Assuming every zero must be a real number and thus every zero must produce an x-intercept — complex zeros exist and produce no x-intercepts",
      "Forgetting to include the conjugate partner when one complex zero is given — always add both a+bi and a−bi",
      "Confusing multiplicity with the number of zeros: a zero of multiplicity 3 is still one zero value (x = r), but it counts as 3 toward the total degree",
      "Thinking 'even multiplicity means the function doesn't have a zero there' — the zero still exists, the graph just bounces rather than crosses",
      "Forgetting parity: a degree-5 polynomial cannot have exactly 2 real zeros, since the remaining 3 would need to be complex — but 3 complex zeros cannot form conjugate pairs (pairs require an even count)"
    ],

    tip: "Count zeros like a checklist: start with given real zeros (and their multiplicities), add the conjugate of each non-real complex zero, then total up. When the total equals the degree, you are done. If the total is still less than the degree and the gap is an odd number, something is wrong — you must have missed a complex conjugate partner.",

    questions: [
      {
        question_text: "A polynomial p has real coefficients and degree 4. If x = 5i is a zero of p, which of the following must also be a zero of p?",
        difficulty: "Easy",
        choices: [
          "A) x = −5i",
          "B) x = 5",
          "C) x = −5",
          "D) x = 5 + i"
        ],
        answer_text: "A",
        explanation: "By the Complex Conjugate Zero Theorem, since p has real coefficients and 5i = 0 + 5i is a zero, its complex conjugate 0 − 5i = −5i must also be a zero."
      },
      {
        question_text: "Which of the following must be true about a polynomial of degree 4 with real coefficients that has exactly 2 non-real complex zeros?",
        difficulty: "Easy",
        choices: [
          "A) It has exactly 4 real zeros",
          "B) It has exactly 2 real zeros",
          "C) It has no real zeros",
          "D) It has exactly 1 real zero"
        ],
        answer_text: "B",
        explanation: "Total zeros = 4. 2 zeros are non-real complex. Since complex zeros come in conjugate pairs, those 2 non-real zeros form one conjugate pair. The remaining 4 − 2 = 2 zeros must be real."
      },
      {
        question_text: "A graph of a polynomial p shows that the graph touches the x-axis at x = −1 without crossing it, and crosses the x-axis at x = 3. Which of the following is consistent with these observations?",
        difficulty: "Easy",
        choices: [
          "A) x = −1 has odd multiplicity; x = 3 has even multiplicity",
          "B) x = −1 has even multiplicity; x = 3 has odd multiplicity",
          "C) Both zeros have even multiplicity",
          "D) Both zeros have odd multiplicity"
        ],
        answer_text: "B",
        explanation: "A zero where the graph touches but does not cross has even multiplicity. A zero where the graph crosses has odd multiplicity. So x = −1 has even multiplicity and x = 3 has odd multiplicity."
      },
      {
        question_text: "A polynomial of degree 6 with real coefficients has zeros at x = 2 (mult. 2), x = −1 (mult. 1), and x = 4 + i (mult. 1). How many additional zeros does this polynomial have?",
        difficulty: "Easy",
        choices: [
          "A) 0",
          "B) 1",
          "C) 2",
          "D) 3"
        ],
        answer_text: "B",
        explanation: "Count the given zeros: x=2 (mult. 2) contributes 2 zeros; x=−1 (mult. 1) contributes 1 zero; x=4+i contributes 1 zero. Since the polynomial has real coefficients and 4+i is a zero, its conjugate 4−i must also be a zero, adding 1 more. Total so far: 2+1+1+1 = 5 zeros. The degree is 6, so 6−5 = 1 additional zero remains. That remaining zero must be real (a lone unpaired slot cannot be filled by a complex zero, which would require a conjugate pair). Therefore exactly 1 additional zero is needed."
      },
      {
        question_text: "A polynomial p(x) has real coefficients, degree 5, and zeros: x = 2 (mult. 1), x = −3 (mult. 2), and x = 1 − 2i (mult. 1). What is the complete list of zeros of p?",
        difficulty: "Medium",
        choices: [
          "A) x = 2, x = −3 (mult. 2), x = 1−2i, x = −1+2i",
          "B) x = 2, x = −3 (mult. 2), x = 1−2i, x = 1+2i",
          "C) x = 2, x = −3 (mult. 2), x = 1−2i only — degree 4 accounted for with one more unknown",
          "D) x = 2, x = −3, x = 1−2i, x = 1+2i, x = −1−2i"
        ],
        answer_text: "B",
        explanation: "Given: x=2 (1), x=−3 (2), x=1−2i (1). Total so far: 1+2+1=4. Since 1−2i is non-real and p has real coefficients, its conjugate 1+2i must also be a zero, adding 1 more. Total: 5 = degree. The complete list is x=2, x=−3 (mult. 2), x=1−2i, x=1+2i."
      },
      {
        question_text: "A degree-3 polynomial with real coefficients has exactly one real zero. Which statement must be true?",
        difficulty: "Medium",
        choices: [
          "A) The polynomial has two additional real zeros",
          "B) The polynomial has two non-real complex zeros that are conjugates of each other",
          "C) The polynomial has no other zeros",
          "D) The polynomial has one additional real zero and one additional non-real zero"
        ],
        answer_text: "B",
        explanation: "A degree-3 polynomial has exactly 3 zeros (FTA). 1 is real, leaving 2 more. Complex zeros with real coefficients come in conjugate pairs, so 2 non-real zeros form one conjugate pair. Therefore the other two zeros are non-real complex conjugates."
      },
      {
        question_text: "A polynomial f has the factored form f(x) = (x + 2)²(x − 5)(x² + 4). How many x-intercepts does the graph of f have, and how many total zeros does f have counting multiplicity?",
        difficulty: "Medium",
        choices: [
          "A) 2 x-intercepts; 5 total zeros",
          "B) 3 x-intercepts; 5 total zeros",
          "C) 2 x-intercepts; 4 total zeros",
          "D) 3 x-intercepts; 6 total zeros"
        ],
        answer_text: "A",
        explanation: "Degree: (x+2)² contributes degree 2, (x−5) contributes degree 1, (x²+4) contributes degree 2 — total degree 5, so 5 total zeros counting multiplicity. Real zeros: x=−2 (multiplicity 2) from (x+2)² and x=5 (multiplicity 1) from (x−5). Complex zeros: x²+4=0 gives x=±2i — two non-real zeros that produce no x-intercepts. X-intercepts come only from real zeros: x=−2 and x=5, giving exactly 2 x-intercepts. The answer is A: 2 x-intercepts and 5 total zeros."
      },
      {
        question_text: "A polynomial of degree 4 with real coefficients has the following zeros: x = 7 (multiplicity 2) and x = 3 − i. Which polynomial could be f(x)?",
        difficulty: "Medium",
        choices: [
          "A) f(x) = (x−7)²(x−(3−i))(x+(3+i))",
          "B) f(x) = (x−7)²(x−(3−i))(x−(3+i))",
          "C) f(x) = (x−7)²(x²−6x+9)",
          "D) f(x) = (x−7)²(x²+6x+10)"
        ],
        answer_text: "B",
        explanation: "Since 3−i is a zero and coefficients are real, its conjugate 3+i is also a zero. The four zeros are x=7 (mult. 2), x=3−i, x=3+i. The factored form is (x−7)²(x−(3−i))(x−(3+i)), which is choice B. Note: (x−(3−i))(x−(3+i)) = x²−6x+10, giving f(x) = (x−7)²(x²−6x+10)."
      },
      {
        question_text: "A polynomial p with real coefficients has degree 6 and exactly 2 distinct real zeros: x = 0 (mult. 2) and x = 1 (mult. 2). How many non-real complex zeros must p have?",
        difficulty: "Hard",
        choices: [
          "A) 0",
          "B) 2",
          "C) 4",
          "D) 6"
        ],
        answer_text: "B",
        explanation: "Total zeros = 6 (degree). Real zeros count: x=0 (mult. 2) + x=1 (mult. 2) = 4 real zeros. Remaining: 6 − 4 = 2 zeros must be complex. Since they must come in conjugate pairs and 2 is an even number, this is possible: one conjugate pair of non-real complex zeros. So p has 2 non-real complex zeros."
      },
      {
        question_text: "A student is told that a degree-5 polynomial p with real coefficients has zeros at x = −2, x = 1+3i, and x = 4 (mult. 2). The student concludes all zeros are accounted for. Is the student correct?",
        difficulty: "Hard",
        choices: [
          "A) Yes — x=−2 (1) + x=1+3i (1) + x=4 (2) = 4 zeros, and the 5th is implicitly x=0",
          "B) No — x=1+3i requires x=1−3i as a conjugate, giving 5 zeros total, but the student forgot to include it",
          "C) Yes — complex zeros don't need to be counted twice in a real-coefficient polynomial",
          "D) No — x=4 must have odd multiplicity for a real-coefficient polynomial"
        ],
        answer_text: "B",
        explanation: "Count the zeros the student listed: x=−2 (1) + x=1+3i (1) + x=4 mult. 2 (2) = 4 zeros. But since p has real coefficients and x=1+3i is a zero, its conjugate x=1−3i must also be a zero, adding a 5th zero. Total: 1 + 1 + 1 + 2 = 5 = degree. The student forgot to include the conjugate x=1−3i. The student's conclusion is wrong."
      }
    ]
  }
}
