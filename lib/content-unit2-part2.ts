import type { LessonContent } from './lesson-content'

export const UNIT2_PART2: Record<string, LessonContent> = {
  "2.6": {
    essentialQuestion: "How do you decide whether a linear or exponential model better fits a real-world dataset — and how do you justify that choice with evidence?",
    apBoardNote: "CED Topic 2.6 — Competing Function Model Validation: Students determine whether a linear or exponential model is more appropriate for a dataset by examining first differences, ratios, and residual patterns.",
    teacherNote: "Emphasize that model selection must be justified with mathematical evidence, not visual intuition. Push students to compute both first differences AND ratios before concluding. In calculator-active work, residual plots are the gold standard — a curved residual pattern reveals that the chosen model is wrong.",
    studentVoice: "I always just guessed 'exponential' when the numbers grew fast. Now I actually check the ratios and it's way more satisfying when the math confirms what I suspected.",
    narration: [
      "Every real-world dataset tells a story, but the math underneath that story takes one of a few basic shapes. Two of the most common are linear growth — where something increases by the same amount each step — and exponential growth — where something increases by the same factor each step. Knowing which story your data is telling is not about guessing; it's about reading mathematical evidence.",
      "The key diagnostic for a linear model is constant first differences. If you subtract consecutive output values and always get the same number, the data grows linearly. Imagine a savings account where you deposit exactly $200 every month: the balance increases by $200 each month, so the first differences are all 200. That's linear.",
      "The key diagnostic for an exponential model is constant ratios. If you divide each output value by the previous one and always get the same number, the data is exponential. A bacterial colony doubling every hour has ratios of 2, 2, 2, ... no matter when you look. That constant ratio is the base of your exponential function.",
      "In practice, real-world data is messy. Neither differences nor ratios will be perfectly constant. This is where residual analysis becomes powerful. You fit both a linear and an exponential model to the data, then examine the residuals — the differences between each actual value and the model's predicted value. If the residuals from a linear fit show a curved, U-shaped, or arcing pattern, the linear model is systematically wrong, and exponential fits better. If the residuals look like random scatter with no pattern, your model is capturing the structure of the data.",
      "On calculator-active sections, your graphing calculator can compute regression equations and display residual plots directly. Two models might have similar R² values, but the residual plot breaks the tie. A model whose residuals show curvature is missing something the data is trying to tell you.",
      "The most important discipline here is evidence-first thinking. You may look at a table and immediately think 'that's exponential.' Prove it. Compute the consecutive ratios. If they're constant (or nearly so), you're right. If they drift, check differences. Let the numbers speak before you commit to a model.",
      "Justifying your model choice is also an AP exam skill — you'll often be asked to 'explain your reasoning.' A complete justification names the evidence: 'The consecutive ratios are approximately constant at 1.5, so an exponential model is more appropriate than a linear model.'"
    ],
    priorKnowledge: [
      "Linear functions have constant rate of change (slope)",
      "Exponential functions have the form f(x) = a · bˣ",
      "Residuals are the difference between observed and predicted values",
      "R² measures how well a model fits data (closer to 1 is better)"
    ],
    connections: [
      "Lesson 2.1–2.2: Linear and exponential function definitions",
      "Lesson 2.4: Constructing exponential functions from data points",
      "Statistics: Residual analysis and regression",
      "AP Exam: Data-based justification questions in free response"
    ],
    concepts: [
      "Constant first differences indicate a linear model",
      "Constant ratios between consecutive outputs indicate an exponential model",
      "Residual analysis distinguishes which model fits better when data is imperfect",
      "A curved residual pattern from a linear fit suggests exponential is more appropriate",
      "Model choice must be justified with mathematical evidence, not visual impression"
    ],
    keyFormula: "First differences: Δy = y_{n+1} − y_n (constant → linear). Consecutive ratios: r = y_{n+1}/y_n (constant → exponential). Residual = actual − predicted.",
    keyTerms: [
      { term: "First differences", definition: "The differences between consecutive output values in a table; constant first differences indicate a linear relationship." },
      { term: "Consecutive ratios", definition: "The ratios of consecutive output values; a constant ratio indicates an exponential relationship." },
      { term: "Residual", definition: "The difference between an observed data value and the value predicted by a model: residual = actual − predicted." },
      { term: "Residual plot", definition: "A graph of residuals versus input values; a random scatter indicates a good fit, while a curved pattern indicates the model is inappropriate." },
      { term: "Model validation", definition: "The process of using evidence — differences, ratios, or residuals — to confirm that a chosen function model appropriately represents a dataset." }
    ],
    workedExample: {
      problem: "The table below shows the number of subscribers (in thousands) to a streaming service over five years. Determine whether a linear or exponential model is more appropriate.\n\nYear (x): 0, 1, 2, 3, 4\nSubscribers (y): 4, 12, 36, 108, 324",
      steps: [
        "Step 1 — Check first differences: 12−4=8, 36−12=24, 108−36=72, 324−108=216. The differences are 8, 24, 72, 216 — NOT constant. A linear model is not appropriate.",
        "Step 2 — Check consecutive ratios: (12) / (4)=3, (36) / (12)=3, (108) / (36)=3, (324) / (108)=3. The ratio is constantly 3.",
        "Step 3 — Conclude: Because the consecutive ratios are constant at 3, an exponential model is more appropriate. The data suggests f(x) = 4 · 3ˣ.",
        "Step 4 — Justify: State the evidence explicitly: 'The consecutive ratios of the output values are all equal to 3, indicating exponential growth with base 3.'"
      ],
      answer: "Exponential model: f(x) = 4 · 3ˣ. Justified by constant ratio of 3 between consecutive outputs."
    },
    workedExample2: {
      problem: "A student fits both a linear and an exponential regression to a dataset and reports: Linear model residuals (in order): −2.1, 3.4, 6.8, 3.2, −1.9, −6.4, −3.0. Exponential model residuals (in order): 0.3, −0.5, 0.8, −0.2, 0.4, −0.6, 0.1. Which model is more appropriate? Justify your answer.",
      steps: [
        "Step 1 — Examine the linear residuals: −2.1, 3.4, 6.8, 3.2, −1.9, −6.4, −3.0. Notice the pattern: residuals start negative, rise to positive values in the middle, then fall negative again. This is a curved (arch-shaped) pattern.",
        "Step 2 — Interpret the linear residual pattern: A curved pattern in residuals means the linear model is systematically over- or under-predicting at different x-values. The model is missing a nonlinear structure in the data.",
        "Step 3 — Examine the exponential residuals: 0.3, −0.5, 0.8, −0.2, 0.4, −0.6, 0.1. These alternate between small positive and negative values with no trend or curve. This is consistent with random scatter.",
        "Step 4 — Conclude: The exponential model's residuals show no pattern, indicating it captures the structure of the data well. The linear model's curved residuals show it is not appropriate.",
        "Step 5 — Justify completely: 'The residuals from the linear model display a curved pattern (positive in the middle, negative at the extremes), indicating the linear model does not fit the data well. The residuals from the exponential model show no pattern, so the exponential model is more appropriate.'"
      ],
      answer: "The exponential model is more appropriate. The linear residuals show a systematic curved pattern, while the exponential residuals are randomly scattered — indicating the exponential model adequately captures the structure of the data."
    },
    commonMistakes: [
      "Choosing exponential just because the values grow quickly — always verify with constant ratios, not growth speed alone",
      "Forgetting to check BOTH differences and ratios before concluding",
      "Misreading a residual plot: random scatter is GOOD (model fits well); a pattern is BAD (model is wrong)",
      "Stopping at R² values without examining residual plots — two models can have similar R² but very different residual patterns",
      "Computing first differences when the x-values are NOT evenly spaced — differences only diagnose linear vs. exponential when inputs are equally spaced"
    ],
    tip: "Remember this diagnostic order: (1) Check first differences. Constant? → Linear. (2) If not, check consecutive ratios. Constant? → Exponential. (3) Neither perfectly constant? → Fit both models and use residual plots to decide. Always state your evidence explicitly.",
    questions: [
      {
        question_text: "A table of values shows output values 5, 10, 20, 40, 80 for equally spaced inputs. Which statement best describes the appropriate model?",
        difficulty: "Easy",
        choices: [
          "A linear model is appropriate because the values increase steadily.",
          "An exponential model is appropriate because the consecutive ratios are constant at 2.",
          "An exponential model is appropriate because the first differences increase.",
          "Neither model is appropriate because the values double each time."
        ],
        answer_text: "B",
        explanation: "Consecutive ratios: (10) / (5)=2, (20) / (10)=2, (40) / (20)=2, (80) / (40)=2. The ratio is constantly 2, which is the defining feature of an exponential function. First differences (5, 10, 20, 40) are not constant, ruling out linear. Choice B correctly identifies the evidence (constant ratio of 2) and names the appropriate model."
      },
      {
        question_text: "A table shows output values 3, 7, 11, 15, 19 for equally spaced inputs. What evidence supports using a linear model?",
        difficulty: "Easy",
        choices: [
          "The output values are all odd numbers.",
          "The consecutive ratios are constant.",
          "The first differences are all equal to 4.",
          "The output values increase at an accelerating rate."
        ],
        answer_text: "C",
        explanation: "First differences: 7−3=4, 11−7=4, 15−11=4, 19−15=4. All first differences equal 4, which is the defining feature of a linear function with slope 4. Consecutive ratios (7/3≈2.33, (11) / (7)≈1.57, ...) are not constant, so exponential is not appropriate."
      },
      {
        question_text: "For which dataset is an exponential model most appropriate?",
        difficulty: "Easy",
        choices: [
          "x: 0,1,2,3 and y: 2, 5, 8, 11",
          "x: 0,1,2,3 and y: 1, 3, 9, 27",
          "x: 0,1,2,3 and y: 4, 6, 8, 10",
          "x: 0,1,2,3 and y: 10, 8, 6, 4"
        ],
        answer_text: "B",
        explanation: "Dataset B has consecutive ratios (3) / (1)=3, (9) / (3)=3, (27) / (9)=3 — all equal to 3. This constant ratio confirms exponential growth with base 3. Dataset A has constant first difference 3 (linear), Dataset C has constant first difference 2 (linear), and Dataset D has constant first difference −2 (linear)."
      },
      {
        question_text: "A residual plot for a linear regression model shows residuals that form a curved, U-shaped pattern. What does this indicate?",
        difficulty: "Easy",
        choices: [
          "The linear model fits the data very well.",
          "The residuals are randomly distributed, confirming the linear model.",
          "The linear model is not appropriate; a nonlinear model may fit better.",
          "The data contains outliers that should be removed."
        ],
        answer_text: "C",
        explanation: "A curved pattern in residuals from a linear fit means the linear model is systematically wrong — it over-predicts at some inputs and under-predicts at others in a nonrandom way. This suggests the underlying relationship is nonlinear (possibly exponential). Random scatter in residuals would indicate a good fit; curvature indicates a poor fit."
      },
      {
        question_text: "A dataset has equally spaced inputs and output values 2, 6, 18, 54, 162. What is the consecutive ratio, and what model is appropriate?",
        difficulty: "Medium",
        choices: [
          "Ratio of 4; linear model with slope 4",
          "Ratio of 3; exponential model with base 3",
          "Ratio of 3; linear model with first difference 3",
          "Ratio of 6; exponential model with base 6"
        ],
        answer_text: "B",
        explanation: "Consecutive ratios: (6) / (2)=3, (18) / (6)=3, (54) / (18)=3, (162) / (54)=3. The constant ratio is 3. This confirms an exponential model f(x) = 2 · 3ˣ (starting value 2, base 3). First differences (4, 12, 36, 108) are not constant, so a linear model is ruled out. The ratio of 4 (choice A) is the first difference, not the ratio."
      },
      {
        question_text: "Student A claims: 'The data must be exponential because the values are growing very fast.' Student B claims: 'We need to check whether the consecutive ratios are constant before concluding it's exponential.' Which student is using valid mathematical reasoning?",
        difficulty: "Medium",
        choices: [
          "Student A, because fast growth is the defining characteristic of exponential functions.",
          "Student B, because constant ratios are the mathematical evidence for exponential models.",
          "Both students, because fast growth and constant ratios are equivalent evidence.",
          "Neither student, because you need a calculator regression to determine the model."
        ],
        answer_text: "B",
        explanation: "Student B is correct. 'Growing fast' is a visual impression, not mathematical evidence. A quadratic function also grows fast but is neither linear nor exponential. The defining characteristic of exponential data is a constant ratio between consecutive output values. Student A's reasoning would lead to incorrect model choices. Calculator regression can help, but analyzing differences and ratios from the table is the primary algebraic method."
      },
      {
        question_text: "A table shows: x = 0, 1, 2, 3 and y = 100, 97, 88, 73. A student checks first differences: −3, −9, −15. What can be concluded?",
        difficulty: "Medium",
        choices: [
          "The data is linear because the differences are all negative.",
          "The data is exponential because the differences are increasing in magnitude.",
          "The data is not linear because the first differences are not constant; another model should be investigated.",
          "The data is linear with slope −3."
        ],
        answer_text: "C",
        explanation: "First differences: 97−100=−3, 88−97=−9, 73−88=−15. These are NOT constant (−3, −9, −15), so the data is not linear. The increasing magnitude of differences might suggest a quadratic or other model. Consecutive ratios: (97) / (100)=0.97, (88) / (97)≈0.907, (73) / (88)≈0.830 — also not constant, so not exponential. The correct conclusion is that neither a simple linear nor exponential model fits."
      },
      {
        question_text: "Two regression models are fit to a dataset. Model 1 (linear) has R²=0.97. Model 2 (exponential) has R²=0.99. The residual plot for Model 1 shows a curved arch pattern; the residual plot for Model 2 shows random scatter. Which model should be chosen?",
        difficulty: "Medium",
        choices: [
          "Model 1, because an R² of 0.97 is still very high.",
          "Model 1, because linear models are always simpler and preferred.",
          "Model 2, because the higher R² and random residuals both indicate a better fit.",
          "Model 2, only because it has a higher R²."
        ],
        answer_text: "C",
        explanation: "Both the higher R² (0.99 > 0.97) AND the random residual pattern for Model 2 support choosing the exponential model. The curved residuals for Model 1 are the stronger evidence — even an R² of 0.97 can be misleading if residuals show a systematic pattern, meaning the model is structurally wrong. The best justification cites both the R² values and the residual plot patterns."
      },
      {
        question_text: "A population dataset has equally spaced time inputs (every 5 years) and outputs 50, 75, 112.5, 168.75. A student computes first differences as 25, 37.5, 56.25 and consecutive ratios as 1.5, 1.5, 1.5. Which model is appropriate, and what is the growth factor?",
        difficulty: "Hard",
        choices: [
          "Linear model with slope 25, because differences are all positive",
          "Exponential model with base 1.5, because consecutive ratios are constant at 1.5",
          "Exponential model with base 0.5, because 1 − 1.5 = −0.5",
          "Linear model with slope 37.5, because 37.5 is the middle difference"
        ],
        answer_text: "B",
        explanation: "First differences (25, 37.5, 56.25) are not constant, ruling out linear. Consecutive ratios (75/50=1.5, 112.(5) / (75)=1.5, 168.(75) / (112).5=1.5) are all 1.5. This constant ratio confirms an exponential model. The growth factor (base) is 1.5, meaning the population grows by 50% every 5-year period. The function is f(t) = 50 · 1.5^(t/5) where t is years."
      },
      {
        question_text: "A researcher models a dataset with both linear and exponential functions. The linear model produces residuals with a clear decreasing trend from left to right. The exponential model produces residuals: +0.2, −0.1, +0.3, −0.2, +0.1. Which of the following statements is most accurate?",
        difficulty: "Hard",
        choices: [
          "The linear model fits better because a decreasing trend is expected in residuals.",
          "The exponential model fits better because its residuals are small in absolute value.",
          "The exponential model fits better because its residuals show no systematic pattern, indicating the model captures the structure of the data.",
          "Neither model fits because perfect residuals should all equal zero."
        ],
        answer_text: "C",
        explanation: "A systematic trend in residuals (decreasing from left to right for the linear model) means the model is consistently over-predicting at some inputs and under-predicting at others — a sign of model misspecification. The exponential model's residuals (+0.2, −0.1, +0.3, −0.2, +0.1) alternate randomly with no trend or pattern. Random scatter is the hallmark of a well-fitting model: the model has captured all the systematic structure, leaving only random noise. Choice B is tempting but wrong — small absolute values without a pattern assessment is insufficient evidence. It's the absence of a pattern, not just small magnitude, that matters."
      }
    ]
  },

  "2.7": {
    essentialQuestion: "When you apply two functions in sequence, does the order matter — and how do you determine what inputs are actually valid for the combined process?",
    apBoardNote: "CED Topic 2.7 — Composition of Functions: Students evaluate and interpret composite functions (f ∘ g)(x) = f(g(x)), determine domains of composite functions, and decompose a given function into component functions.",
    teacherNote: "Students most commonly swap the order of composition — computing g(f(x)) when asked for f(g(x)). Reinforce: the rightmost function always acts first. Use process-based contexts (assembly line, conversion formulas) to build intuition for why order matters. Domain restriction is a frequent source of error on free-response; always ask 'does the output of g live in the domain of f?'",
    studentVoice: "The assembly line analogy finally made composition click for me. Machine G runs first, then its output gets fed into Machine F. You can't reverse the assembly line and get the same product.",
    narration: [
      "In mathematics, functions are processes — machines that take an input and produce an output. Composition of functions is what happens when you connect two machines in sequence, feeding the output of the first directly into the input of the second. This is one of the most powerful and frequently used ideas in all of mathematics.",
      "The notation (f ∘ g)(x) is read 'f composed with g of x' and means f(g(x)): apply g first, then take that result and apply f. The symbol ∘ does not mean multiplication — it means 'feed into.' The function on the right always acts first.",
      "Order matters enormously. (f ∘ g)(x) and (g ∘ f)(x) are generally different functions. If f(x) = x + 3 and g(x) = 2x, then (f ∘ g)(x) = f(2x) = 2x + 3, but (g ∘ f)(x) = g(x+3) = 2(x+3) = 2x + 6. These are not the same. Switching the order changes the result.",
      "Real contexts make composition natural. Suppose a store charges a 10% discount and then adds 8% sales tax. Let d(p) = 0.90p (discount applied to price p) and t(p) = 1.08p (tax applied). The final price is t(d(p)) = 1.08 · 0.90p = 0.972p. If you applied tax first and then the discount, you'd get d(t(p)) = 0.90 · 1.08p = 0.972p — in this case they're equal. But change one of the functions and they'd differ. Always track which process happens first.",
      "The domain of (f ∘ g) requires careful thought. You need x to be in the domain of g — otherwise you can't compute g(x). But you also need g(x) to land in the domain of f — otherwise f can't accept it. The domain of f ∘ g is: all x in the domain of g such that g(x) is in the domain of f.",
      "Decomposing a function means identifying the inner and outer parts. Given h(x) = (x² + 1)³, you can write h = f ∘ g where g(x) = x² + 1 (the inner function, computed first) and f(x) = x³ (the outer function, applied to the result). This decomposition skill is critical in calculus for applying the chain rule.",
      "When evaluating numerical compositions, resist the urge to build a formula. If you need (f ∘ g)(3), compute g(3) first to get a number, then plug that number into f. Step by step is safer than trying to do everything at once."
    ],
    priorKnowledge: [
      "Evaluating a function at a specific input value",
      "Domain and range of basic functions",
      "Notation f(x) and function as a process/rule",
      "Square root, polynomial, and rational function domains"
    ],
    connections: [
      "Lesson 2.8: Inverse functions are a special composition where f(f⁻¹(x)) = x",
      "Calculus: Chain rule is the derivative rule for composite functions",
      "Lesson 2.9–2.10: log and exponential as inverses via composition",
      "Modeling: Multi-step real-world processes often involve composition"
    ],
    concepts: [
      "(f ∘ g)(x) = f(g(x)): apply g first, then apply f to the result",
      "Composition is not commutative: (f ∘ g)(x) ≠ (g ∘ f)(x) in general",
      "Domain of f ∘ g: all x in domain(g) where g(x) is also in domain(f)",
      "Decomposing a function identifies inner and outer component functions",
      "Numerical evaluation: compute the inner function value first, then plug into the outer"
    ],
    keyFormula: "(f ∘ g)(x) = f(g(x)). Domain of f ∘ g = {x ∈ dom(g) : g(x) ∈ dom(f)}.",
    keyTerms: [
      { term: "Composition of functions", definition: "An operation where the output of one function becomes the input of another: (f ∘ g)(x) = f(g(x))." },
      { term: "Inner function", definition: "In a composition f(g(x)), the function g is the inner function — it is applied first to the original input." },
      { term: "Outer function", definition: "In a composition f(g(x)), the function f is the outer function — it is applied second, to the output of g." },
      { term: "Decomposition", definition: "The process of writing a single function as a composition of two simpler functions by identifying the inner and outer parts." },
      { term: "Domain of a composite function", definition: "The set of all x-values in the domain of the inner function such that the inner function's output is in the domain of the outer function." }
    ],
    workedExample: {
      problem: "Let f(x) = 3x − 1 and g(x) = x². Find (f ∘ g)(x) and (g ∘ f)(x). Are they equal?",
      steps: [
        "Step 1 — Find (f ∘ g)(x) = f(g(x)): Replace the x in f with g(x) = x². So f(g(x)) = f(x²) = 3(x²) − 1 = 3x² − 1.",
        "Step 2 — Find (g ∘ f)(x) = g(f(x)): Replace the x in g with f(x) = 3x−1. So g(f(x)) = g(3x−1) = (3x−1)² = 9x² − 6x + 1.",
        "Step 3 — Compare: (f ∘ g)(x) = 3x² − 1 and (g ∘ f)(x) = 9x² − 6x + 1. These are different functions.",
        "Step 4 — Verify with a value: At x = 2, (f ∘ g)(2) = 3(4)−1 = 11. (g ∘ f)(2) = g(5) = 25. Indeed 11 ≠ 25, confirming order matters."
      ],
      answer: "(f ∘ g)(x) = 3x² − 1; (g ∘ f)(x) = 9x² − 6x + 1. They are NOT equal — composition is not commutative."
    },
    workedExample2: {
      problem: "Let f(x) = √x and g(x) = x − 4. Find (f ∘ g)(x) and determine its domain. Then evaluate (f ∘ g)(13).",
      steps: [
        "Step 1 — Find (f ∘ g)(x) = f(g(x)): Replace x in f(x) = √x with g(x) = x−4. So (f ∘ g)(x) = f(x−4) = √(x−4).",
        "Step 2 — Find the domain of (f ∘ g): First, g(x) = x−4 has domain all real numbers. Second, f(x) = √x requires its input to be ≥ 0. So we need g(x) ≥ 0: x − 4 ≥ 0, which gives x ≥ 4.",
        "Step 3 — State the domain: Domain of (f ∘ g) is [4, ∞). Note: this is more restrictive than the domain of either f or g alone.",
        "Step 4 — Evaluate (f ∘ g)(13): First compute g(13) = 13−4 = 9. Then compute f(9) = √9 = 3.",
        "Step 5 — Verify using the formula: (f ∘ g)(13) = √(13−4) = √9 = 3. ✓"
      ],
      answer: "(f ∘ g)(x) = √(x−4), domain: x ≥ 4, or [4, ∞). (f ∘ g)(13) = 3."
    },
    commonMistakes: [
      "Computing g(f(x)) when asked for f(g(x)) — always identify which function is the 'inner' (applied first)",
      "Thinking (f ∘ g)(x) means f(x) · g(x) — the ∘ symbol means composition (plug in), not multiplication",
      "Forgetting to restrict the domain when the inner function's output must satisfy the outer function's domain conditions",
      "Writing f(g(x)) = f(x) · g(x) or f(x) + g(x) — composition is substitution, not arithmetic",
      "Evaluating the outer function at x instead of at g(x) — always substitute the full expression"
    ],
    tip: "Say it out loud: 'Apply g FIRST, then feed the result to f.' If you're asked for (f ∘ g)(x), your first pencil stroke should be to write f( _____ ) and fill the blank with g(x). This prevents the most common order-of-operations error.",
    questions: [
      {
        question_text: "If f(x) = 2x + 1 and g(x) = x − 3, what is (f ∘ g)(x)?",
        difficulty: "Easy",
        choices: [
          "2x − 5",
          "2x + 1 − 3",
          "2x² − 5x − 3",
          "2(x+1) − 3"
        ],
        answer_text: "A",
        explanation: "(f ∘ g)(x) = f(g(x)) = f(x−3). Substitute x−3 into f: 2(x−3) + 1 = 2x − 6 + 1 = 2x − 5. Apply g first (subtract 3), then apply f (multiply by 2, add 1). Answer: 2x − 5."
      },
      {
        question_text: "Let f(x) = x² and g(x) = 5x. What is (g ∘ f)(2)?",
        difficulty: "Easy",
        choices: [
          "20",
          "100",
          "40",
          "10"
        ],
        answer_text: "A",
        explanation: "(g ∘ f)(2) = g(f(2)). First apply f: f(2) = 2² = 4. Then apply g: g(4) = 5(4) = 20. Note: (f ∘ g)(2) = f(g(2)) = f(10) = 100 — confirming order matters. The answer is 20."
      },
      {
        question_text: "The function h(x) = (3x + 2)⁴ is best expressed as a composition f(g(x)) where:",
        difficulty: "Easy",
        choices: [
          "f(x) = x + 2 and g(x) = 3x⁴",
          "f(x) = x⁴ and g(x) = 3x + 2",
          "f(x) = 3x + 2 and g(x) = x⁴",
          "f(x) = 4x and g(x) = 3x + 2"
        ],
        answer_text: "B",
        explanation: "To decompose h(x) = (3x+2)⁴, identify what is done last (applied outermost): raising to the 4th power. So f(x) = x⁴. What is inside the parentheses (applied first): 3x+2. So g(x) = 3x+2. Verify: f(g(x)) = f(3x+2) = (3x+2)⁴ = h(x). ✓"
      },
      {
        question_text: "If f(x) = x + 4 and g(x) = 2x, which expression equals (f ∘ g)(x)?",
        difficulty: "Easy",
        choices: [
          "2x + 4",
          "2x + 8",
          "2(x + 4)",
          "x + 8"
        ],
        answer_text: "A",
        explanation: "(f ∘ g)(x) = f(g(x)) = f(2x) = 2x + 4. Apply g first (double the input), then apply f (add 4). Choice C is 2x+8 which equals (g ∘ f)(x) = g(x+4) = 2(x+4) = 2x+8 — that's the reversed order."
      },
      {
        question_text: "Let f(x) = √x and g(x) = 4 − x². What is the domain of (f ∘ g)(x)?",
        difficulty: "Medium",
        choices: [
          "All real numbers",
          "x ≥ 0",
          "−2 ≤ x ≤ 2",
          "x ≤ −2 or x ≥ 2"
        ],
        answer_text: "C",
        explanation: "(f ∘ g)(x) = f(g(x)) = f(4−x²) = √(4−x²). The domain of g is all reals. For f(x)=√x, we need the input ≥ 0. So we need 4 − x² ≥ 0, which means x² ≤ 4, so −2 ≤ x ≤ 2. The domain is [−2, 2]."
      },
      {
        question_text: "A store applies a $10 coupon and then a 20% discount. Let c(p) = p − 10 (coupon) and d(p) = 0.80p (discount). What does (d ∘ c)(p) represent, and what is it for p = 60?",
        difficulty: "Medium",
        choices: [
          "Coupon applied after discount; final price = $38",
          "Discount applied after coupon; final price = $40",
          "Discount applied after coupon; final price = $38",
          "Both processes give the same result; final price = $40"
        ],
        answer_text: "B",
        explanation: "(d ∘ c)(p) = d(c(p)) means apply c first (coupon), then d (discount). c(60) = 60−10 = $50. d(50) = 0.80(50) = $40. So the coupon is applied first ($50), then the 20% discount brings it to $40. This is different from applying discount first: c(d(60)) = c(48) = $38. Order matters."
      },
      {
        question_text: "Given f(x) = 1/(x−2) and g(x) = 3x + 2, find (f ∘ g)(x) and identify any x-values that must be excluded from its domain.",
        difficulty: "Medium",
        choices: [
          "(f ∘ g)(x) = 1/(3x); exclude x = 0",
          "(f ∘ g)(x) = 1/(3x+4); exclude x = −(4) / (3)",
          "(f ∘ g)(x) = 3/(x−2)+2; exclude x = 2",
          "(f ∘ g)(x) = 1/(3x); exclude x = (2) / (3)"
        ],
        answer_text: "A",
        explanation: "(f ∘ g)(x) = f(g(x)) = f(3x+2) = 1/((3x+2)−2) = 1/(3x). For f(x) = 1/(x−2), the denominator x−2 cannot equal 0, so g(x) ≠ 2: 3x+2 ≠ 2, so 3x ≠ 0, so x ≠ 0. The composed function is 1/(3x), excluding x=0."
      },
      {
        question_text: "If (f ∘ g)(x) = 4x² − 12x + 9 and g(x) = 2x − 3, which function could be f(x)?",
        difficulty: "Medium",
        choices: [
          "f(x) = x²",
          "f(x) = 2x²",
          "f(x) = x² + 9",
          "f(x) = (x−3)²"
        ],
        answer_text: "A",
        explanation: "We need f(g(x)) = f(2x−3) = 4x²−12x+9. Notice that (2x−3)² = 4x²−12x+9. So if f(x) = x², then f(2x−3) = (2x−3)² = 4x²−12x+9. ✓ This confirms f(x) = x²."
      },
      {
        question_text: "The number of bacteria B in a sample depends on temperature T (in °C) as B(T) = 200 · T². The temperature in the lab is T(h) = 20 + 2h, where h is hours since 9 a.m. Interpret (B ∘ T)(3) and find its value.",
        difficulty: "Hard",
        choices: [
          "The temperature at hour 3; value = 26°C",
          "The number of bacteria at hour 3; value = 135,200",
          "The number of bacteria at 200°C; value = 8,000,000",
          "The temperature when there are 3 bacteria; value = 0.122°C"
        ],
        answer_text: "B",
        explanation: "(B ∘ T)(h) = B(T(h)) gives the number of bacteria as a function of time. T(3) = 20 + 2(3) = 26°C. Then B(26) = 200 · 26² = 200 · 676 = 135,200 bacteria. The composition B(T(h)) tells us: at time h hours, what is the temperature, and consequently what is the bacteria count? At h=3, bacteria count is 135,200."
      },
      {
        question_text: "Let f(x) = √(x+1) and g(x) = x² − 1. Find the domain of (f ∘ g)(x) and determine (f ∘ g)(3).",
        difficulty: "Hard",
        choices: [
          "Domain: all reals; (f ∘ g)(3) = √8",
          "Domain: x ≤ −1 or x ≥ 1 (no, wait — x² ≥ 0 always); domain: all reals; (f ∘ g)(3) = √8",
          "Domain: all reals; (f ∘ g)(3) = 3",
          "Domain: x ≥ 0; (f ∘ g)(3) = 3"
        ],
        answer_text: "C",
        explanation: "(f ∘ g)(x) = f(g(x)) = f(x²−1) = √((x²−1)+1) = √(x²) = |x|. Domain: We need x²−1 ≥ −1, i.e., x² ≥ 0, which is always true, so the domain is all real numbers. At x = 3: g(3) = 9 − 1 = 8, then f(8) = √(8+1) = √9 = 3. So (f ∘ g)(3) = 3. Choice C correctly states domain all reals and (f ∘ g)(3) = 3."
      }
    ]
  },

  "2.8": {
    essentialQuestion: "How can a function be 'undone,' and what makes an inverse function different from simply dividing by the original function?",
    apBoardNote: "CED Topic 2.8 — Inverse Functions: Students determine whether a function has an inverse, construct inverse functions algebraically, interpret inverses in context, and connect the domain/range swap to graphical reflection over y = x.",
    teacherNote: "The critical misconception to address immediately and repeatedly: f⁻¹(x) is NOT 1/f(x). Use f(x)=2x as a concrete example: f⁻¹(x)=x/2 (undo multiplying by 2), but 1/f(x) = 1/(2x). Emphasize the horizontal line test for existence, and require students to verify inverses by confirming f(f⁻¹(x))=x and f⁻¹(f(x))=x. Contextual interpretation (output becomes input) is heavily tested on the AP exam.",
    studentVoice: "I kept writing f⁻¹(x) as 1/f(x) until my teacher showed me: the inverse of 'multiply by 3' is 'divide by 3,' not '1 divided by 3x.' The exponent −1 means 'undo,' not 'reciprocal.'",
    narration: [
      "Every function is a process — a rule that transforms inputs into outputs. An inverse function is the 'undo' process: it takes the output of the original function and returns the original input. If f is a machine that converts raw material into a product, then f⁻¹ is the disassembly machine that reconstructs the raw material from the product.",
      "Not every function has an inverse that is also a function. For the inverse to be a function, each output of f must have come from exactly one input. This is the one-to-one condition: every output value appears at most once. Graphically, we test this with the horizontal line test — if any horizontal line crosses the graph more than once, the function is not one-to-one and its inverse is not a function.",
      "To construct an inverse algebraically, you swap x and y and then solve for y. Starting with y = f(x), replace x with y and y with x to get x = f(y), then isolate y. What you're doing conceptually is recognizing that f sends a to b, so f⁻¹ must send b back to a. Swapping x and y implements this reversal.",
      "The two key identities that define an inverse relationship are: f(f⁻¹(x)) = x for all x in the domain of f⁻¹, and f⁻¹(f(x)) = x for all x in the domain of f. These identities are the gold standard verification — if both hold, you have the correct inverse.",
      "The critical warning that cannot be overstated: f⁻¹(x) does NOT mean 1/f(x). The '−1' is not an exponent on the output values; it is notation for the inverse function. The reciprocal of f(x) is written [f(x)]⁻¹ or 1/f(x). The inverse function f⁻¹ undoes f; the reciprocal 1/f(x) divides 1 by f(x). These are completely different objects.",
      "Graphically, f and f⁻¹ are reflections of each other over the line y = x. This makes geometric sense: if (a, b) is on the graph of f, then f sends a to b, so f⁻¹ sends b to a, meaning (b, a) is on the graph of f⁻¹. Swapping coordinates is the same as reflecting over y = x.",
      "In real contexts, inverses answer a different kind of question. If f(t) gives the temperature of an oven at time t, then f⁻¹(T) gives the time when the oven reaches temperature T. The domain and range swap: what was an output (temperature) becomes an input. Understanding this conceptual reversal is essential for AP free-response interpretation questions."
    ],
    priorKnowledge: [
      "Domain and range of a function",
      "Solving linear and simple nonlinear equations for a variable",
      "Graphing functions and reading coordinates",
      "One-to-one functions and the vertical line test"
    ],
    connections: [
      "Lesson 2.7: Composition is used to verify inverses (f ∘ f⁻¹ = identity)",
      "Lesson 2.9–2.10: Logarithms are inverses of exponential functions",
      "Graphing: Reflection over y = x connects f and f⁻¹ visually",
      "AP context questions: interpreting what the inverse function represents"
    ],
    concepts: [
      "A function has an inverse function if and only if it is one-to-one (passes horizontal line test)",
      "Algebraic construction: swap x and y in y=f(x), then solve for y to get f⁻¹(x)",
      "Verification: f(f⁻¹(x)) = x and f⁻¹(f(x)) = x",
      "f⁻¹(x) ≠ 1/f(x) — inverse function is NOT the reciprocal",
      "Domain of f = range of f⁻¹; range of f = domain of f⁻¹",
      "Graphically: f⁻¹ is the reflection of f over the line y = x"
    ],
    keyFormula: "To find f⁻¹: (1) Write y = f(x). (2) Swap x and y. (3) Solve for y. That y is f⁻¹(x). Verify: f(f⁻¹(x)) = x.",
    keyTerms: [
      { term: "Inverse function", definition: "A function f⁻¹ that reverses the action of f: if f(a) = b, then f⁻¹(b) = a. Defined only when f is one-to-one." },
      { term: "One-to-one function", definition: "A function where each output value corresponds to exactly one input value. Required for the inverse to also be a function." },
      { term: "Horizontal line test", definition: "A graphical test: if every horizontal line intersects the graph at most once, the function is one-to-one and has an inverse function." },
      { term: "Domain/Range swap", definition: "The domain of f becomes the range of f⁻¹, and the range of f becomes the domain of f⁻¹." },
      { term: "Reflection over y = x", definition: "The geometric relationship between f and f⁻¹: if (a, b) is on f, then (b, a) is on f⁻¹, which is the reflection of (a, b) over the line y = x." }
    ],
    workedExample: {
      problem: "Find the inverse of f(x) = 2x + 3. Verify your answer using composition.",
      steps: [
        "Step 1 — Write y = f(x): y = 2x + 3.",
        "Step 2 — Swap x and y: x = 2y + 3.",
        "Step 3 — Solve for y: x − 3 = 2y, so y = (x − 3)/2.",
        "Step 4 — Write the inverse: f⁻¹(x) = (x − 3)/2.",
        "Step 5 — Verify f(f⁻¹(x)) = x: f((x−3)/2) = 2·(x−3)/2 + 3 = (x−3) + 3 = x. ✓",
        "Step 6 — Verify f⁻¹(f(x)) = x: f⁻¹(2x+3) = ((2x+3)−3)/2 = 2x/2 = x. ✓"
      ],
      answer: "f⁻¹(x) = (x − 3)/2. Both composition verifications confirm this is correct."
    },
    workedExample2: {
      problem: "A company's profit P (in thousands of dollars) from selling x units is P(x) = 3x − 12 for x ≥ 4. (a) Find P⁻¹(x) and state its domain. (b) Interpret P⁻¹(x) in context. (c) How many units must be sold to achieve a profit of $18,000?",
      steps: [
        "Step 1 — Find the inverse algebraically: Write y = 3x − 12. Swap x and y: x = 3y − 12. Solve: x + 12 = 3y, so y = (x + 12)/3.",
        "Step 2 — Write: P⁻¹(x) = (x + 12)/3.",
        "Step 3 — Determine domain of P⁻¹: The range of P is the domain of P⁻¹. For x ≥ 4: P(4) = 3(4)−12 = 0. As x increases, P increases without bound. So range of P is [0, ∞), which means domain of P⁻¹ is [0, ∞) — that is, P must be non-negative (profit ≥ 0).",
        "Step 4 — Interpret P⁻¹(x) in context: P(x) = profit from selling x units. So P⁻¹(x) = the number of units that must be sold to achieve a profit of x thousand dollars.",
        "Step 5 — Answer part (c): P⁻¹(18) = (18 + 12)/3 = (30) / (3) = 10 units. Verify: P(10) = 3(10)−12 = 18. ✓ So 10 units must be sold to achieve $18,000 profit."
      ],
      answer: "P⁻¹(x) = (x+12)/3, domain x ≥ 0. It gives the number of units to sell to achieve profit of x thousand dollars. 10 units are needed for $18,000 profit."
    },
    commonMistakes: [
      "Writing f⁻¹(x) = 1/f(x) — the inverse function undoes f; it is NOT the reciprocal of f",
      "Forgetting to swap x and y, and instead just solving for x — the swap is what creates the inverse",
      "Failing to restrict the domain of the inverse to match the range of the original function",
      "Not verifying the inverse using composition — always check that f(f⁻¹(x)) = x",
      "Assuming every function has an inverse — if f is not one-to-one, f⁻¹ is not a function"
    ],
    tip: "The −1 in f⁻¹ is function notation for 'inverse,' NOT an exponent. To remember: 'undo' starts with u, inverse starts with i — both mean 'reverse the process.' The reciprocal 1/f(x) divides; the inverse f⁻¹(x) reverses.",
    questions: [
      {
        question_text: "Which statement correctly distinguishes f⁻¹(x) from 1/f(x)?",
        difficulty: "Easy",
        choices: [
          "f⁻¹(x) = 1/f(x) for all functions f",
          "f⁻¹(x) is the function that undoes f, while 1/f(x) is the reciprocal of the output",
          "f⁻¹(x) and 1/f(x) are equal only when f is linear",
          "f⁻¹(x) multiplies the output of f by −1"
        ],
        answer_text: "B",
        explanation: "f⁻¹(x) is the inverse function: it reverses the action of f, so f(f⁻¹(x)) = x. It is NOT related to division. For example, if f(x) = 3x, then f⁻¹(x) = x/3 (undo multiplying by 3), while 1/f(x) = 1/(3x) — completely different. The '−1' in f⁻¹ is notation for 'inverse function,' not an exponent."
      },
      {
        question_text: "If f(x) = x + 7, what is f⁻¹(x)?",
        difficulty: "Easy",
        choices: [
          "f⁻¹(x) = x − 7",
          "f⁻¹(x) = 1/(x+7)",
          "f⁻¹(x) = −x − 7",
          "f⁻¹(x) = x + 7"
        ],
        answer_text: "A",
        explanation: "To find f⁻¹: write y = x+7, swap: x = y+7, solve: y = x−7. So f⁻¹(x) = x−7. Verify: f(f⁻¹(x)) = f(x−7) = (x−7)+7 = x. ✓ The inverse undoes 'add 7' by 'subtracting 7.'"
      },
      {
        question_text: "Which function does NOT have an inverse function over all real numbers?",
        difficulty: "Easy",
        choices: [
          "f(x) = 3x + 2",
          "f(x) = x³",
          "f(x) = x²",
          "f(x) = x − 5"
        ],
        answer_text: "C",
        explanation: "f(x) = x² fails the horizontal line test: for example, f(2) = f(−2) = 4, so two different inputs produce the same output. This means f(x) = x² is not one-to-one over all real numbers, so its inverse is not a function. The other choices (linear functions and x³) are all one-to-one over all reals."
      },
      {
        question_text: "If the point (3, 7) is on the graph of f, what point must be on the graph of f⁻¹?",
        difficulty: "Easy",
        choices: [
          "(−3, −7)",
          "(7, 3)",
          "(3, 1/7)",
          "(−7, −3)"
        ],
        answer_text: "B",
        explanation: "If (3, 7) is on f, then f(3) = 7. The inverse function sends outputs back to inputs, so f⁻¹(7) = 3. This means (7, 3) is on the graph of f⁻¹. Graphically, (7, 3) is the reflection of (3, 7) over the line y = x — coordinates are swapped."
      },
      {
        question_text: "Find f⁻¹(x) for f(x) = (x − 1)/4.",
        difficulty: "Medium",
        choices: [
          "f⁻¹(x) = 4x + 1",
          "f⁻¹(x) = 4/(x−1)",
          "f⁻¹(x) = 4x − 1",
          "f⁻¹(x) = (x+1)/4"
        ],
        answer_text: "A",
        explanation: "Write y = (x−1)/4. Swap x and y: x = (y−1)/4. Solve: 4x = y−1, so y = 4x+1. Therefore f⁻¹(x) = 4x+1. Verify: f(f⁻¹(x)) = f(4x+1) = ((4x+1)−1)/4 = 4x/4 = x. ✓"
      },
      {
        question_text: "A function f has domain [−2, 5] and range [0, 10]. What are the domain and range of f⁻¹?",
        difficulty: "Medium",
        choices: [
          "Domain [0, 10] and range [−2, 5]",
          "Domain [−2, 5] and range [0, 10]",
          "Domain [−10, 0] and range [−5, 2]",
          "Domain [0, 10] and range [0, 10]"
        ],
        answer_text: "A",
        explanation: "The domain and range swap when you take the inverse. Domain of f = [−2, 5] becomes the range of f⁻¹. Range of f = [0, 10] becomes the domain of f⁻¹. So f⁻¹ has domain [0, 10] and range [−2, 5]."
      },
      {
        question_text: "If f(x) = 4x − 8, what is f⁻¹(f(x))?",
        difficulty: "Medium",
        choices: [
          "4x − 8",
          "x",
          "1/(4x−8)",
          "16x − 40"
        ],
        answer_text: "B",
        explanation: "By the definition of inverse functions, f⁻¹(f(x)) = x for all x in the domain of f. This is the inverse identity — applying f then f⁻¹ (or vice versa) returns you to your starting value. You don't need to compute f⁻¹ explicitly; the identity f⁻¹(f(x)) = x holds for any invertible function."
      },
      {
        question_text: "The function f(t) = 50t + 200 gives the distance (in miles) from a starting point after t hours of driving. Interpret f⁻¹(d) in context.",
        difficulty: "Medium",
        choices: [
          "The speed of the vehicle at distance d",
          "The number of hours of driving needed to reach distance d from the starting point",
          "The distance remaining after d hours",
          "The total distance traveled at time d"
        ],
        answer_text: "B",
        explanation: "f(t) takes time t and returns distance d = 50t+200. The inverse f⁻¹(d) reverses this: given a distance d, it returns the time t needed to reach that distance. Finding f⁻¹: swap t and d in d=50t+200 → t=(d−200)/50. So f⁻¹(d) = (d−200)/50 gives the time (in hours) to reach distance d miles."
      },
      {
        question_text: "Let f(x) = x³ + 2. Find f⁻¹(x) and verify with composition.",
        difficulty: "Hard",
        choices: [
          "f⁻¹(x) = (x−2)^(1/3); verified by f(f⁻¹(x)) = ((x−2)^(1/3))³ + 2 = x",
          "f⁻¹(x) = x^(1/3) − 2; verified by f(f⁻¹(x)) = (x^(1/3)−2)³ + 2 = x",
          "f⁻¹(x) = 1/(x³+2); verified by f · f⁻¹ = 1",
          "f⁻¹(x) = (x+2)^(1/3); verified by f(f⁻¹(x)) = ((x+2)^(1/3))³ + 2 = x+4"
        ],
        answer_text: "A",
        explanation: "Write y = x³+2. Swap: x = y³+2. Solve: x−2 = y³, so y = (x−2)^(1/3) = ∛(x−2). Therefore f⁻¹(x) = ∛(x−2). Verify: f(f⁻¹(x)) = (∛(x−2))³ + 2 = (x−2) + 2 = x. ✓ Also f⁻¹(f(x)) = ∛((x³+2)−2) = ∛(x³) = x. ✓"
      },
      {
        question_text: "A function f is defined on [0, ∞) by f(x) = x² + 3. Is f one-to-one on this restricted domain? If so, find f⁻¹(x) and state its domain.",
        difficulty: "Hard",
        choices: [
          "f is not one-to-one on [0, ∞) because x² is always positive",
          "f is one-to-one on [0, ∞); f⁻¹(x) = √(x−3) with domain x ≥ 3",
          "f is one-to-one on [0, ∞); f⁻¹(x) = √(x+3) with domain x ≥ 0",
          "f is one-to-one on [0, ∞); f⁻¹(x) = (x−3)² with domain x ≥ 3"
        ],
        answer_text: "B",
        explanation: "On [0,∞), x² is strictly increasing (larger x always gives larger x²), so x²+3 is also strictly increasing. This means f is one-to-one on [0,∞). To find the inverse: y = x²+3 → x = y²+3 (swap) → y²= x−3 → y = √(x−3) (taking positive root since domain of f is [0,∞)). So f⁻¹(x) = √(x−3). Domain: range of f on [0,∞) is [3,∞) (minimum value f(0)=3), so domain of f⁻¹ is x ≥ 3."
      }
    ]
  },

  "2.9": {
    essentialQuestion: "What question does a logarithm answer, and why is understanding logarithms as exponents the key to evaluating and interpreting them?",
    apBoardNote: "CED Topic 2.9 — Logarithmic Expressions: Students evaluate logarithmic expressions, apply logarithm properties, and interpret logarithmic notation by converting between logarithmic and exponential forms.",
    teacherNote: "The central insight is that a logarithm IS an exponent — log_b(x) is the exponent you put on b to get x. Reinforce this with every evaluation. A common student error is treating log as a factor or applying subtraction properties incorrectly (e.g., 'log(−x) = −log(x)'). Practice converting between log and exponential form extensively before moving to algebraic manipulation.",
    studentVoice: "Once I realized that log₂(8) is literally just asking 'what power of 2 equals 8?', I stopped being scared of logs. The answer is 3 because 2³ = 8. That's it.",
    narration: [
      "The logarithm is the mathematical answer to the question: 'To what power must I raise this base to get this number?' If you know that 2⁵ = 32, then you know that log₂(32) = 5. The logarithm is the exponent. Full stop.",
      "The formal definition is: log_b(x) = y if and only if b^y = x. This bidirectional equivalence is your primary tool. Every logarithmic statement can be rewritten as an exponential statement, and vice versa. This conversion is the foundation of all logarithm work.",
      "Two logarithms have special names because of their frequency: log(x) without a specified base means log₁₀(x) — the common logarithm. It asks 'what power of 10 gives x?' The natural logarithm ln(x) = log_e(x) uses the base e ≈ 2.718 and appears throughout calculus, finance, and natural sciences.",
      "Four key identities follow directly from the definition. First: log_b(b) = 1, because b¹ = b. Second: log_b(1) = 0, because b⁰ = 1 for any base b. Third: log_b(b^x) = x — the logarithm undoes the exponent. Fourth: b^(log_b(x)) = x — the exponent undoes the logarithm. These identities are inverse-function relationships at work.",
      "To evaluate logarithms without a calculator, rewrite the question as an exponential equation. log₃(81) = ? means 3^? = 81. Since 3⁴ = 81, the answer is 4. log₄(1/16) = ? means 4^? = (1) / (16) = 4⁻². The answer is −2. Negative logarithms arise when the argument is between 0 and 1 — corresponding to negative exponents on the base.",
      "The domain of a logarithmic function is all positive real numbers. You can only take the log of a positive number. log(0) is undefined (no exponent on a positive base gives exactly 0). log(negative) is undefined over the real numbers (no real exponent on a positive base gives a negative result). The statement 'log(−x) = −log(x)' is FALSE — the left side is undefined when x > 0, since you'd be taking the log of a negative number.",
      "Logarithms were invented by John Napier in the 1600s to simplify multiplication — turning products into sums, and powers into products. That original insight lives on in the log properties you'll use in the next lessons and throughout calculus. For now, the priority is building the reflex: every time you see log_b(x), your mind should translate it to 'the exponent on b that gives x.'"
    ],
    priorKnowledge: [
      "Exponential expressions: b^n means multiply b by itself n times",
      "Negative exponents: b⁻ⁿ = 1/bⁿ",
      "The number e ≈ 2.718 as a mathematical constant",
      "Inverse function concept from Lesson 2.8"
    ],
    connections: [
      "Lesson 2.10: Logarithm as the inverse of the exponential function",
      "Lesson 2.8: Inverse functions — log undoes exponential",
      "Future: Log properties (product, quotient, power rules)",
      "Science: pH, decibels, Richter scale all use logarithms"
    ],
    concepts: [
      "log_b(x) = y is equivalent to b^y = x — logarithm and exponential are interchangeable forms",
      "A logarithm IS an exponent: log_b(x) answers 'to what power must b be raised to get x?'",
      "log(x) = log₁₀(x) and ln(x) = log_e(x)",
      "Key identities: log_b(b) = 1; log_b(1) = 0; log_b(b^x) = x; b^(log_b(x)) = x",
      "Domain of log_b(x) is x > 0 only — logarithms of non-positive numbers are undefined over the reals"
    ],
    keyFormula: "log_b(x) = y ↔ b^y = x. Special cases: log_b(1) = 0; log_b(b) = 1; log_b(b^x) = x; b^(log_b(x)) = x.",
    keyTerms: [
      { term: "Logarithm", definition: "log_b(x) is the exponent to which base b must be raised to equal x: log_b(x) = y means b^y = x. A logarithm is an exponent." },
      { term: "Common logarithm", definition: "The logarithm with base 10, written log(x) or log₁₀(x). Asks: 'What power of 10 equals x?'" },
      { term: "Natural logarithm", definition: "The logarithm with base e ≈ 2.718, written ln(x). Asks: 'What power of e equals x?'" },
      { term: "Logarithmic form", definition: "An equation written using the logarithm notation: log_b(x) = y." },
      { term: "Exponential form", definition: "The equivalent equation written using an exponent: b^y = x. Converting between forms is a core skill." }
    ],
    workedExample: {
      problem: "Evaluate each expression without a calculator: (a) log₂(32), (b) log₅(1/25), (c) log₇(7), (d) log₃(1).",
      steps: [
        "Part (a) log₂(32): Ask '2 to what power equals 32?' Since 2⁵ = 32, log₂(32) = 5.",
        "Part (b) log₅(1/25): Ask '5 to what power equals (1) / (25)?' Since 5² = 25, we need 5⁻² = (1) / (25). So log₅(1/25) = −2.",
        "Part (c) log₇(7): Ask '7 to what power equals 7?' Since 7¹ = 7, log₇(7) = 1. (This is the identity log_b(b) = 1.)",
        "Part (d) log₃(1): Ask '3 to what power equals 1?' Since 3⁰ = 1, log₃(1) = 0. (This is the identity log_b(1) = 0.)"
      ],
      answer: "(a) 5, (b) −2, (c) 1, (d) 0"
    },
    workedExample2: {
      problem: "Rewrite each in the opposite form, and determine whether the expression is defined: (a) log₄(64) = 3 in exponential form. (b) 3⁻³ = (1) / (27) in logarithmic form. (c) Is log₅(−25) defined? (d) Evaluate 10^(log(17)).",
      steps: [
        "Part (a): log₄(64) = 3. Exponential form: b^y = x → 4³ = 64. Check: 4·4·4 = 64. ✓",
        "Part (b): 3⁻³ = (1) / (27). Logarithmic form: log_b(x) = y → log₃(1/27) = −3. The base is 3, the result is (1) / (27), and the exponent is −3.",
        "Part (c): Is log₅(−25) defined? The argument is −25, which is negative. The domain of log₅ requires the argument to be strictly positive (>0). Therefore log₅(−25) is undefined over the real numbers. No real power of 5 produces a negative number.",
        "Part (d): 10^(log(17)): By the identity b^(log_b(x)) = x with b=10, 10^(log₁₀(17)) = 17. The exponential and logarithm (same base) are inverse operations that cancel."
      ],
      answer: "(a) 4³ = 64. (b) log₃(1/27) = −3. (c) Undefined — argument is negative. (d) 17."
    },
    commonMistakes: [
      "log(−x) = −log(x) is FALSE — log of a negative number is undefined, full stop",
      "log_b(0) = anything — log(0) is undefined because no real power of a positive base equals 0",
      "Thinking log(x + y) = log(x) + log(y) — the product rule is log(xy) = log x + log y, NOT log(x+y)",
      "Confusing the base: log(x) without a stated base is log₁₀, NOT log₂ or log_e",
      "Writing log_b(x) = b^x — the logarithm and exponential are inverses, not equal expressions"
    ],
    tip: "When evaluating log_b(x), convert to the question: 'b to what power equals x?' Then use your knowledge of powers. For fractions, remember that 1/bⁿ = b⁻ⁿ, so the answer is negative. Make this conversion automatic.",
    questions: [
      {
        question_text: "What is log₂(64)?",
        difficulty: "Easy",
        choices: [
          "4",
          "5",
          "6",
          "32"
        ],
        answer_text: "C",
        explanation: "log₂(64) asks: '2 to what power equals 64?' Since 2¹=2, 2²=4, 2³=8, 2⁴=16, 2⁵=32, 2⁶=64. Therefore log₂(64) = 6."
      },
      {
        question_text: "Which exponential equation is equivalent to log₃(81) = 4?",
        difficulty: "Easy",
        choices: [
          "4³ = 81",
          "3⁴ = 81",
          "3⁸¹ = 4",
          "81⁴ = 3"
        ],
        answer_text: "B",
        explanation: "Using the definition log_b(x) = y ↔ b^y = x: log₃(81) = 4 converts to 3⁴ = 81. The base (3) stays as the base of the exponential, the logarithm's value (4) becomes the exponent, and the argument (81) is the result. Check: 3⁴ = 81. ✓"
      },
      {
        question_text: "What is the value of log₁₀(0.001)?",
        difficulty: "Easy",
        choices: [
          "3",
          "−3",
          "0.001",
          "−0.001"
        ],
        answer_text: "B",
        explanation: "log₁₀(0.001) asks: '10 to what power equals 0.001?' Since 0.001 = (1) / (1000) = (1) / (10)³ = 10⁻³, the answer is −3. Verify: 10⁻³ = 0.001. ✓"
      },
      {
        question_text: "Evaluate log₆(6⁹).",
        difficulty: "Easy",
        choices: [
          "6",
          "54",
          "9",
          "1"
        ],
        answer_text: "C",
        explanation: "Using the identity log_b(b^x) = x: log₆(6⁹) = 9. The logarithm and exponential with the same base cancel each other. The logarithm asks 'to what power must 6 be raised to get 6⁹?' — the answer is simply 9."
      },
      {
        question_text: "Which of the following expressions is undefined over the real numbers?",
        difficulty: "Medium",
        choices: [
          "log₂(1/8)",
          "log₅(5)",
          "log₃(−27)",
          "log₁₀(0.01)"
        ],
        answer_text: "C",
        explanation: "log₃(−27) is undefined because the argument is negative. No real power of 3 produces a negative number (3^x > 0 for all real x). The other expressions are defined: log₂(1/8) = −3 (since 2⁻³=1/8), log₅(5) = 1 (identity), log₁₀(0.01) = −2 (since 10⁻²=0.01)."
      },
      {
        question_text: "If log_b(36) = 2, what is b?",
        difficulty: "Medium",
        choices: [
          "b = 6",
          "b = 18",
          "b = 4",
          "b = 12"
        ],
        answer_text: "A",
        explanation: "log_b(36) = 2 converts to b² = 36. Solving: b = √36 = 6 (taking positive root since base must be positive and not equal to 1). Verify: log₆(36) = 2 because 6² = 36. ✓"
      },
      {
        question_text: "Evaluate e^(ln(15)).",
        difficulty: "Medium",
        choices: [
          "ln(15)",
          "15",
          "e¹⁵",
          "15e"
        ],
        answer_text: "B",
        explanation: "Using the identity b^(log_b(x)) = x with base b = e: e^(ln(15)) = e^(log_e(15)) = 15. The natural exponential and natural logarithm are inverse functions — they cancel each other. This is equivalent to saying 'raise e to the power that e must be raised to get 15' — the answer is simply 15."
      },
      {
        question_text: "A student claims that log₂(−8) = −3 because log₂(8) = 3. Is this reasoning correct?",
        difficulty: "Medium",
        choices: [
          "Yes, because a negative argument gives a negative result.",
          "Yes, because −8 = −1 · 8 and the −1 pulls out as a factor.",
          "No, because log₂(−8) is undefined; negative arguments are outside the domain of logarithmic functions.",
          "No, because the correct value is log₂(−8) = (1) / (3)."
        ],
        answer_text: "C",
        explanation: "The student's reasoning is incorrect. The domain of log₂(x) is x > 0 only. No real number raised to a power can make 2^y = −8 (since 2^y > 0 always). Therefore log₂(−8) is undefined over the real numbers. The common mistake 'log(−x) = −log(x)' has no mathematical basis."
      },
      {
        question_text: "Solve for x: log_x(125) = 3.",
        difficulty: "Hard",
        choices: [
          "x = 5",
          "x = 25",
          "x = 41.7",
          "x = 375"
        ],
        answer_text: "A",
        explanation: "Convert to exponential form: log_x(125) = 3 means x³ = 125. Solving: x = ∛125 = 5. Verify: log₅(125) = 3 because 5³ = 125. ✓ Note: x must be positive and not equal to 1 to be a valid logarithm base, and 5 satisfies both conditions."
      },
      {
        question_text: "The sound intensity level in decibels is given by L = 10 · log₁₀(I/I₀), where I₀ is the reference intensity. If a sound has intensity 10,000 times the reference (I = 10,000 · I₀), what is L?",
        difficulty: "Hard",
        choices: [
          "L = 40 decibels",
          "L = 400 decibels",
          "L = 4 decibels",
          "L = 10,000 decibels"
        ],
        answer_text: "A",
        explanation: "L = 10 · log₁₀(I/I₀) = 10 · log₁₀(10,000 · I₀/I₀) = 10 · log₁₀(10,000). Now evaluate: log₁₀(10,000) = log₁₀(10⁴) = 4 (since 10⁴ = 10,000). Therefore L = 10 · 4 = 40 decibels. This is why logarithms are used in acoustics — they compress enormous ranges of intensity into manageable numbers."
      }
    ]
  },

  "2.10": {
    essentialQuestion: "How are exponential and logarithmic functions related as inverses, and how does this relationship help you solve equations and interpret real-world models?",
    apBoardNote: "CED Topic 2.10 — Inverses of Exponential Functions: Students establish that the logarithm is the inverse of the exponential function, use this relationship to solve equations, connect the domain/range swap to asymptotic behavior, and interpret inverse relationships in context.",
    teacherNote: "Connect explicitly to Lesson 2.8 (inverse functions). The graphical reflection over y=x is powerful — exponential has horizontal asymptote y=0, logarithm has vertical asymptote x=0. These asymptotes are inverses of each other (swap x and y). Push students to solve exponential equations by applying logarithms as the 'undo' operation, connecting to the composition identities ln(e^x)=x and e^(ln x)=x.",
    studentVoice: "The asymptotes being inverses of each other finally made me understand why the graphs look like mirror images. The horizontal wall of the exponential becomes the vertical wall of the logarithm when you flip across y=x.",
    narration: [
      "In Lesson 2.8, you learned that inverse functions undo each other — and that their graphs are reflections over y = x. In Lesson 2.9, you learned that a logarithm is an exponent. Now these two ideas merge: the logarithmic function log_b(x) is precisely the inverse function of the exponential function b^x.",
      "Every inverse relationship works as follows: if f and f⁻¹ are inverses, then f(f⁻¹(x)) = x and f⁻¹(f(x)) = x. With b^x and log_b(x): log_b(b^x) = x (the log undoes the exponential), and b^(log_b(x)) = x (the exponential undoes the log). These identities let you 'cancel' a log or an exponential when they share the same base.",
      "The most important special case uses base e: e^x and ln(x) are inverses. So ln(e^x) = x and e^(ln x) = x. These two identities appear constantly in calculus and in solving natural growth and decay equations. Anytime you see e and ln together with the same argument, they cancel.",
      "The domain-range swap provides deep insight into the shapes of these functions. The exponential f(x) = b^x has domain (−∞, ∞) and range (0, ∞) — it produces only positive outputs and never actually reaches 0 (horizontal asymptote at y = 0). When you swap domain and range for the inverse, log_b(x) has domain (0, ∞) and range (−∞, ∞) — it accepts only positive inputs and never touches x = 0 (vertical asymptote at x = 0). The horizontal asymptote of the exponential becomes the vertical asymptote of the logarithm.",
      "Graphically, plotting b^x and log_b(x) on the same axes reveals perfect symmetry over the line y = x. The point (0, 1) is on every exponential (since b⁰ = 1), so (1, 0) is on every logarithm. The point (1, b) is on the exponential, so (b, 1) is on the logarithm. Coordinates swap across the line of reflection.",
      "Solving exponential equations now becomes straightforward: to solve b^x = k, apply log_b to both sides: x = log_b(k). For equations with base e, apply ln: e^(3x) = 7 gives ln(e^(3x)) = ln(7), so 3x = ln(7), so x = ln(7)/3. The key step is recognizing that ln is the 'undo' operation for e.",
      "In context, if a model P(t) = P₀ · e^(kt) gives population at time t, the inverse function P⁻¹(x) = (1/k) · ln(x/P₀) gives the time when population reaches level x. You're now treating the output (population) as the input and asking for the corresponding time. This kind of inverse interpretation is a core AP free-response skill."
    ],
    priorKnowledge: [
      "Inverse functions (Lesson 2.8): f⁻¹ undoes f; domain/range swap",
      "Logarithmic expressions (Lesson 2.9): log_b(x) = y ↔ b^y = x",
      "Exponential functions (Lessons 2.1–2.4): f(x) = b^x, asymptotes, growth/decay",
      "Composition of functions (Lesson 2.7): f(f⁻¹(x)) = x"
    ],
    connections: [
      "Lesson 2.8: Inverse functions — graphical reflection, domain/range swap",
      "Lesson 2.9: Logarithm definitions and key identities",
      "Calculus: Derivatives of e^x and ln(x), solving differential equations",
      "Finance and science: Solving A = Pe^(rt) for t using natural logarithm"
    ],
    concepts: [
      "f(x) = b^x and g(x) = log_b(x) are inverse functions: log_b(b^x) = x and b^(log_b(x)) = x",
      "f(x) = e^x and g(x) = ln(x) are inverses: ln(e^x) = x and e^(ln x) = x",
      "Exponential domain (−∞,∞), range (0,∞) ↔ Logarithm domain (0,∞), range (−∞,∞)",
      "Horizontal asymptote y=0 of exponential ↔ Vertical asymptote x=0 of logarithm",
      "Solve b^x = k by applying log_b: x = log_b(k). Solve e^(cx) = k using ln: cx = ln(k)"
    ],
    keyFormula: "log_b(b^x) = x and b^(log_b(x)) = x. For base e: ln(e^x) = x and e^(ln x) = x. To solve e^(cx) = k: x = ln(k)/c.",
    keyTerms: [
      { term: "Inverse of an exponential", definition: "The logarithmic function log_b(x) is the inverse of b^x — they undo each other via composition, and their graphs are reflections over y = x." },
      { term: "Natural logarithm", definition: "ln(x) = log_e(x), the inverse of e^x. Satisfies ln(e^x) = x and e^(ln x) = x." },
      { term: "Horizontal asymptote", definition: "A horizontal line that the graph of a function approaches but never reaches. Exponential functions b^x have horizontal asymptote y = 0." },
      { term: "Vertical asymptote", definition: "A vertical line that the graph of a function approaches but never reaches. Logarithmic functions log_b(x) have vertical asymptote x = 0." },
      { term: "Cancellation identities", definition: "The paired identities log_b(b^x) = x and b^(log_b(x)) = x, which result from the inverse relationship between exponential and logarithmic functions." }
    ],
    workedExample: {
      problem: "Solve the equation e^(2x) = 50. Give your answer in exact form and approximate it to four decimal places.",
      steps: [
        "Step 1 — Identify the operation: the variable x appears in an exponent with base e. To isolate x, apply the inverse of e^x, which is ln(x).",
        "Step 2 — Apply ln to both sides: ln(e^(2x)) = ln(50).",
        "Step 3 — Simplify the left side using the cancellation identity ln(e^u) = u: 2x = ln(50).",
        "Step 4 — Solve for x: x = ln(50)/2.",
        "Step 5 — Approximate: ln(50) ≈ 3.9120, so x ≈ 3.(9120) / (2) ≈ 1.9560.",
        "Step 6 — Verify: e^(2·1.9560) = e^(3.9120) ≈ 50. ✓"
      ],
      answer: "x = ln(50)/2 ≈ 1.9560"
    },
    workedExample2: {
      problem: "A population model is given by P(t) = 500 · e^(0.06t), where t is time in years and P is population. (a) Find the inverse function P⁻¹(x). (b) Interpret P⁻¹(x) in context. (c) When does the population reach 2000?",
      steps: [
        "Step 1 — Find the inverse: Write P = 500 · e^(0.06t). Swap P and t: t = 500 · e^(0.06P). Wait — this is incorrect notation. Let's be careful: write y = 500e^(0.06x). Swap x and y: x = 500e^(0.06y). Now solve for y.",
        "Step 2 — Isolate the exponential: x/500 = e^(0.06y).",
        "Step 3 — Apply ln to both sides: ln(x/500) = ln(e^(0.06y)) = 0.06y.",
        "Step 4 — Solve for y: y = ln(x/500)/0.06.",
        "Step 5 — Write the inverse: P⁻¹(x) = ln(x/500)/0.06.",
        "Step 6 — Interpret: P(t) gives the population at time t. So P⁻¹(x) gives the time (in years) when the population reaches level x.",
        "Step 7 — Find when P = 2000: P⁻¹(2000) = ln(2000/500)/0.06 = ln(4)/0.06 ≈ 1.(3863) / (0).06 ≈ 23.1 years."
      ],
      answer: "P⁻¹(x) = ln(x/500)/0.06. It gives the time (in years) when the population reaches x. The population reaches 2000 after approximately 23.1 years."
    },
    commonMistakes: [
      "Thinking log_b and b^x cancel only when the arguments match exactly — the identities are log_b(b^x) = x and b^(log_b(x)) = x, not log_b(b^x) = b^x",
      "Applying ln to only one side of an equation — always apply the same operation to both sides",
      "Confusing the asymptotes: exponential has HORIZONTAL asymptote y=0; logarithm has VERTICAL asymptote x=0",
      "Writing log_b(b^x) = b^x (treating log_b and b^... as multiplying rather than inverting)",
      "Forgetting that the domain of ln(x) is x > 0 — when solving equations, check that arguments are positive"
    ],
    tip: "To solve b^(expression) = k: take log_b of both sides, simplify the left side to just the expression using log_b(b^u)=u, then solve. For base e specifically: e^(cx)=k → ln both sides → cx=ln(k) → x=ln(k)/c. Memorize this three-step pattern.",
    questions: [
      {
        question_text: "What is ln(e⁸)?",
        difficulty: "Easy",
        choices: [
          "e⁸",
          "8e",
          "8",
          "(1) / (8)"
        ],
        answer_text: "C",
        explanation: "Using the cancellation identity ln(e^x) = x: ln(e⁸) = 8. The natural logarithm and the natural exponential are inverse functions — they cancel each other when composed. The answer is simply the exponent: 8."
      },
      {
        question_text: "Which function is the inverse of f(x) = 3^x?",
        difficulty: "Easy",
        choices: [
          "f⁻¹(x) = x³",
          "f⁻¹(x) = log₃(x)",
          "f⁻¹(x) = 3x",
          "f⁻¹(x) = 1/(3^x)"
        ],
        answer_text: "B",
        explanation: "The inverse of the exponential function b^x is the logarithm log_b(x). For f(x) = 3^x, the inverse is f⁻¹(x) = log₃(x). Verify: f(f⁻¹(x)) = 3^(log₃(x)) = x ✓ and f⁻¹(f(x)) = log₃(3^x) = x ✓. The other choices are cubing (not the same), multiplying by 3 (not the inverse), and the reciprocal (not the inverse function)."
      },
      {
        question_text: "What is the domain of f(x) = log₄(x)?",
        difficulty: "Easy",
        choices: [
          "All real numbers",
          "x > 0",
          "x ≥ 0",
          "x > 1"
        ],
        answer_text: "B",
        explanation: "The logarithmic function log₄(x) is the inverse of 4^x. Since 4^x has range (0, ∞), the inverse log₄(x) has domain (0, ∞), i.e., x > 0. The logarithm is defined only for positive inputs — you cannot take the log of 0 or any negative number over the reals."
      },
      {
        question_text: "If f(x) = e^x has a horizontal asymptote at y = 0, what type of asymptote does f⁻¹(x) = ln(x) have, and where?",
        difficulty: "Easy",
        choices: [
          "Horizontal asymptote at y = 0",
          "Vertical asymptote at x = 1",
          "Vertical asymptote at x = 0",
          "Horizontal asymptote at y = 1"
        ],
        answer_text: "C",
        explanation: "When you take the inverse of a function, the domain and range swap, and the graph reflects over y=x. A horizontal asymptote y=0 on the exponential (as x→−∞, e^x→0) becomes a vertical asymptote x=0 on the logarithm (as x→0⁺, ln(x)→−∞). The coordinate swap (x,y)↔(y,x) turns a horizontal boundary into a vertical boundary."
      },
      {
        question_text: "Solve for x: e^x = 15. Give the answer in exact form.",
        difficulty: "Medium",
        choices: [
          "x = 15/e",
          "x = ln(15)",
          "x = log(15)",
          "x = e¹⁵"
        ],
        answer_text: "B",
        explanation: "To solve e^x = 15, apply the inverse of e^x (which is ln) to both sides: ln(e^x) = ln(15). Using the identity ln(e^x) = x: x = ln(15). This is the exact form. Numerically, ln(15) ≈ 2.708. Note: log(15) = log₁₀(15) ≈ 1.176 — different base, different answer."
      },
      {
        question_text: "Solve for x: 3 · e^(2x) = 24.",
        difficulty: "Medium",
        choices: [
          "x = ln(8)/2",
          "x = ln(24)/2",
          "x = ln(8)",
          "x = ln(24) − ln(3)"
        ],
        answer_text: "A",
        explanation: "Step 1: Divide both sides by 3: e^(2x) = 8. Step 2: Apply ln to both sides: ln(e^(2x)) = ln(8). Step 3: Simplify: 2x = ln(8). Step 4: Divide: x = ln(8)/2. Verify: 3·e^(2·ln(8)/2) = 3·e^(ln(8)) = 3·8 = 24. ✓"
      },
      {
        question_text: "The value of an investment is modeled by V(t) = 1000e^(0.05t), where t is years. Which expression gives the time when the investment reaches $2500?",
        difficulty: "Medium",
        choices: [
          "t = ln(2500)/0.05",
          "t = ln(2.5)/0.05",
          "t = 0.05/ln(2.5)",
          "t = ln(2500 − 1000)/0.05"
        ],
        answer_text: "B",
        explanation: "Set V(t) = 2500: 1000e^(0.05t) = 2500. Divide by 1000: e^(0.05t) = 2.5. Apply ln: 0.05t = ln(2.5). Solve: t = ln(2.5)/0.05 ≈ 0.(9163) / (0).05 ≈ 18.3 years. Choice A is wrong because you must divide by 1000 first (not take ln of 2500 directly). Choice D incorrectly subtracts before applying ln."
      },
      {
        question_text: "Evaluate e^(ln(7) + ln(2)) using inverse function properties.",
        difficulty: "Medium",
        choices: [
          "9",
          "14",
          "ln(14)",
          "e^9"
        ],
        answer_text: "B",
        explanation: "First simplify the exponent using log properties: ln(7) + ln(2) = ln(7·2) = ln(14). Then e^(ln(14)) = 14 by the cancellation identity e^(ln x) = x. Alternatively: e^(ln(7)+ln(2)) = e^(ln 7) · e^(ln 2) = 7 · 2 = 14. Both approaches confirm the answer is 14."
      },
      {
        question_text: "The half-life of a radioactive substance is modeled by A(t) = A₀ · e^(−0.035t). Find the inverse function and interpret what it gives you. Which expression represents the time when A(t) = A₀/4 (one-quarter of the original amount)?",
        difficulty: "Hard",
        choices: [
          "t = ln(4)/0.035",
          "t = −ln(4)/0.035",
          "t = ln(0.25)·0.035",
          "t = −0.035/ln(4)"
        ],
        answer_text: "A",
        explanation: "Set A(t) = A₀/4: A₀·e^(−0.035t) = A₀/4. Divide by A₀: e^(−0.035t) = (1) / (4) = 4⁻¹. Apply ln: −0.035t = ln(1/4) = ln(4⁻¹) = −ln(4). Divide by −0.035: t = −ln(4)/(−0.035) = ln(4)/0.035. This is positive since ln(4) > 0, as expected (time must be positive). Numerically: t ≈ 1.(386) / (0).035 ≈ 39.6 time units."
      },
      {
        question_text: "The exponential function f(x) = 2^x contains the point (3, 8). Its inverse g(x) = log₂(x) must contain which point? Also, what does f⁻¹(f(7)) equal?",
        difficulty: "Hard",
        choices: [
          "Point (8, 3) on g; f⁻¹(f(7)) = (1) / (128)",
          "Point (3, 8) on g; f⁻¹(f(7)) = 7",
          "Point (8, 3) on g; f⁻¹(f(7)) = 7",
          "Point (8, 3) on g; f⁻¹(f(7)) = 49"
        ],
        answer_text: "C",
        explanation: "Part 1: If (3, 8) is on f, then f(3)=8, so f⁻¹(8)=3. This means (8, 3) is on g = f⁻¹. Graphically, (8,3) is the reflection of (3,8) over y=x — coordinates swap. Part 2: f⁻¹(f(7)) = 7 by the inverse identity f⁻¹(f(x)) = x. Explicitly: f(7) = 2⁷ = 128. Then f⁻¹(128) = log₂(128) = log₂(2⁷) = 7. ✓ The answer to both parts is (8,3) and 7."
      }
    ]
  }
}
