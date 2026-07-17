import { sql } from '@vercel/postgres'

interface LessonSeed {
  unit_number: number
  lesson_number: string
  title: string
  description: string
  learning_objectives: string
  key_concepts: string
  unit_title: string
  subject: string
  order_index: number
}

const lessons: LessonSeed[] = [
  // Unit 1: Polynomial and Rational Functions
  {
    unit_number: 1, lesson_number: '1.1', title: 'Change in Tandem',
    description: 'Explore how two quantities change together and represent relationships between them.',
    learning_objectives: 'Describe how two quantities change together; represent covariation with graphs and tables.',
    key_concepts: 'covariation, dependent variable, independent variable, increasing, decreasing',
    unit_title: 'Polynomial and Rational Functions', subject: 'ap_precalc', order_index: 1,
  },
  {
    unit_number: 1, lesson_number: '1.2', title: 'Rates of Change',
    description: 'Calculate and interpret average rates of change over intervals.',
    learning_objectives: 'Calculate average rate of change; interpret rate of change in context; compare rates.',
    key_concepts: 'average rate of change, secant line, slope, interval',
    unit_title: 'Polynomial and Rational Functions', subject: 'ap_precalc', order_index: 2,
  },
  {
    unit_number: 1, lesson_number: '1.3', title: 'Rates of Change in Linear and Quadratic Functions',
    description: 'Compare rates of change in linear and quadratic functions.',
    learning_objectives: 'Distinguish constant vs. changing rates of change; connect to function type.',
    key_concepts: 'constant rate of change, linear function, quadratic function, second difference',
    unit_title: 'Polynomial and Rational Functions', subject: 'ap_precalc', order_index: 3,
  },
  {
    unit_number: 1, lesson_number: '1.4', title: 'Polynomial Functions and Rates of Change',
    description: 'Analyze rates of change for polynomial functions and their graphs.',
    learning_objectives: 'Identify degree from rate patterns; describe end behavior; locate extrema.',
    key_concepts: 'degree, leading coefficient, end behavior, local maximum, local minimum',
    unit_title: 'Polynomial and Rational Functions', subject: 'ap_precalc', order_index: 4,
  },
  {
    unit_number: 1, lesson_number: '1.5', title: 'Polynomial Functions and Complex Zeros',
    description: 'Find and interpret zeros including complex zeros of polynomial functions.',
    learning_objectives: 'Apply the Fundamental Theorem of Algebra; find complex zeros; factor polynomials.',
    key_concepts: 'zero, root, complex number, conjugate pairs, Fundamental Theorem of Algebra',
    unit_title: 'Polynomial and Rational Functions', subject: 'ap_precalc', order_index: 5,
  },
  {
    unit_number: 1, lesson_number: '1.6', title: 'Polynomial Functions and End Behavior',
    description: 'Describe end behavior of polynomial functions using degree and leading coefficient.',
    learning_objectives: 'Determine end behavior; write limit notation for end behavior; connect to graph.',
    key_concepts: 'end behavior, limit notation, leading term, even/odd degree',
    unit_title: 'Polynomial and Rational Functions', subject: 'ap_precalc', order_index: 6,
  },
  {
    unit_number: 1, lesson_number: '1.7', title: 'Rational Functions and End Behavior',
    description: 'Explore end behavior of rational functions and horizontal asymptotes.',
    learning_objectives: 'Find horizontal asymptotes; determine end behavior; interpret in context.',
    key_concepts: 'rational function, horizontal asymptote, degree comparison, limit at infinity',
    unit_title: 'Polynomial and Rational Functions', subject: 'ap_precalc', order_index: 7,
  },
  {
    unit_number: 1, lesson_number: '1.8', title: 'Rational Functions and Zeros',
    description: 'Find zeros and vertical asymptotes of rational functions.',
    learning_objectives: 'Identify zeros; find vertical asymptotes; distinguish holes from asymptotes.',
    key_concepts: 'zero, vertical asymptote, hole, removable discontinuity, factoring',
    unit_title: 'Polynomial and Rational Functions', subject: 'ap_precalc', order_index: 8,
  },
  {
    unit_number: 1, lesson_number: '1.9', title: 'Rational Functions and Vertical Asymptotes',
    description: 'Analyze behavior near vertical asymptotes of rational functions.',
    learning_objectives: 'Describe behavior approaching vertical asymptotes; use limit notation.',
    key_concepts: 'vertical asymptote, limit, one-sided limit, unbounded behavior',
    unit_title: 'Polynomial and Rational Functions', subject: 'ap_precalc', order_index: 9,
  },
  {
    unit_number: 1, lesson_number: '1.10', title: 'Rational Functions and Holes',
    description: 'Identify and interpret holes (removable discontinuities) in rational functions.',
    learning_objectives: 'Find holes; evaluate limits at holes; connect algebraic and graphical representations.',
    key_concepts: 'hole, removable discontinuity, common factor, limit, undefined point',
    unit_title: 'Polynomial and Rational Functions', subject: 'ap_precalc', order_index: 10,
  },
  {
    unit_number: 1, lesson_number: '1.11', title: 'Equivalent Representations of Polynomial and Rational Expressions',
    description: 'Convert between different equivalent forms of polynomial and rational expressions.',
    learning_objectives: 'Perform polynomial long division; rewrite rational expressions; simplify.',
    key_concepts: 'polynomial long division, partial fractions, equivalent forms, simplification',
    unit_title: 'Polynomial and Rational Functions', subject: 'ap_precalc', order_index: 11,
  },
  {
    unit_number: 1, lesson_number: '1.12', title: 'Transformations of Functions',
    description: 'Apply translations, reflections, and dilations to functions.',
    learning_objectives: 'Graph transformations; write equations of transformed functions; describe effects.',
    key_concepts: 'translation, reflection, dilation, vertical shift, horizontal shift, stretch, compression',
    unit_title: 'Polynomial and Rational Functions', subject: 'ap_precalc', order_index: 12,
  },
  {
    unit_number: 1, lesson_number: '1.13', title: 'Function Model Selection and Assumption Articulation',
    description: 'Select appropriate function models and articulate modeling assumptions.',
    learning_objectives: 'Choose models based on data patterns; state assumptions; evaluate model fit.',
    key_concepts: 'model selection, assumptions, residuals, goodness of fit, context interpretation',
    unit_title: 'Polynomial and Rational Functions', subject: 'ap_precalc', order_index: 13,
  },
  {
    unit_number: 1, lesson_number: '1.14', title: 'Function Model Construction and Application',
    description: 'Build function models from data and apply them to real-world situations.',
    learning_objectives: 'Construct models from data; use models to predict; interpret results in context.',
    key_concepts: 'regression, extrapolation, interpolation, domain restriction, context',
    unit_title: 'Polynomial and Rational Functions', subject: 'ap_precalc', order_index: 14,
  },

  // Unit 2: Exponential and Logarithmic Functions
  {
    unit_number: 2, lesson_number: '2.1', title: 'Change in Arithmetic and Geometric Sequences',
    description: 'Compare arithmetic and geometric sequences as models of change.',
    learning_objectives: 'Identify arithmetic vs geometric sequences; write explicit and recursive formulas.',
    key_concepts: 'arithmetic sequence, geometric sequence, common difference, common ratio, explicit formula',
    unit_title: 'Exponential and Logarithmic Functions', subject: 'ap_precalc', order_index: 15,
  },
  {
    unit_number: 2, lesson_number: '2.2', title: 'Change in Linear and Exponential Functions',
    description: 'Distinguish linear growth from exponential growth patterns.',
    learning_objectives: 'Compare additive vs multiplicative change; connect sequences to continuous functions.',
    key_concepts: 'linear growth, exponential growth, additive change, multiplicative change, growth factor',
    unit_title: 'Exponential and Logarithmic Functions', subject: 'ap_precalc', order_index: 16,
  },
  {
    unit_number: 2, lesson_number: '2.3', title: 'Exponential Functions',
    description: 'Define, evaluate, and graph exponential functions.',
    learning_objectives: 'Evaluate exponential functions; identify domain/range; graph and interpret.',
    key_concepts: 'exponential function, base, growth/decay factor, initial value, asymptote',
    unit_title: 'Exponential and Logarithmic Functions', subject: 'ap_precalc', order_index: 17,
  },
  {
    unit_number: 2, lesson_number: '2.4', title: 'Exponential Function Manipulation',
    description: 'Manipulate exponential expressions using properties of exponents.',
    learning_objectives: 'Apply exponent rules; rewrite exponential expressions; convert between forms.',
    key_concepts: 'product rule, quotient rule, power rule, negative exponent, fractional exponent',
    unit_title: 'Exponential and Logarithmic Functions', subject: 'ap_precalc', order_index: 18,
  },
  {
    unit_number: 2, lesson_number: '2.5', title: 'Exponential Function Context and Data Modeling',
    description: 'Model real-world data with exponential functions.',
    learning_objectives: 'Fit exponential models to data; interpret parameters; predict values.',
    key_concepts: 'exponential model, percent rate of change, doubling time, half-life, decay rate',
    unit_title: 'Exponential and Logarithmic Functions', subject: 'ap_precalc', order_index: 19,
  },
  {
    unit_number: 2, lesson_number: '2.6', title: 'Competing Function Model Validation',
    description: 'Compare linear and exponential models to determine best fit.',
    learning_objectives: 'Evaluate model appropriateness; compare residuals; justify model choice.',
    key_concepts: 'model comparison, residuals, regression, R-squared, model validation',
    unit_title: 'Exponential and Logarithmic Functions', subject: 'ap_precalc', order_index: 20,
  },
  {
    unit_number: 2, lesson_number: '2.7', title: 'Composition of Functions',
    description: 'Compose functions and interpret composition in context.',
    learning_objectives: 'Evaluate composite functions; find domain of composition; interpret meaning.',
    key_concepts: 'composition, f(g(x)), domain of composition, inner function, outer function',
    unit_title: 'Exponential and Logarithmic Functions', subject: 'ap_precalc', order_index: 21,
  },
  {
    unit_number: 2, lesson_number: '2.8', title: 'Inverse Functions',
    description: 'Define and find inverse functions algebraically and graphically.',
    learning_objectives: 'Determine if a function has an inverse; find inverse; verify with composition.',
    key_concepts: 'inverse function, one-to-one, horizontal line test, f⁻¹(x), reflection y=x',
    unit_title: 'Exponential and Logarithmic Functions', subject: 'ap_precalc', order_index: 22,
  },
  {
    unit_number: 2, lesson_number: '2.9', title: 'Logarithmic Expressions',
    description: 'Define logarithms and evaluate logarithmic expressions.',
    learning_objectives: 'Convert between exponential and logarithmic form; evaluate logarithms.',
    key_concepts: 'logarithm, base, log₁₀, natural log ln, change of base formula',
    unit_title: 'Exponential and Logarithmic Functions', subject: 'ap_precalc', order_index: 23,
  },
  {
    unit_number: 2, lesson_number: '2.10', title: 'Logarithmic Functions',
    description: 'Graph logarithmic functions and identify their properties.',
    learning_objectives: 'Graph log functions; identify domain/range/asymptotes; describe transformations.',
    key_concepts: 'logarithmic function, domain, vertical asymptote, inverse of exponential, graph',
    unit_title: 'Exponential and Logarithmic Functions', subject: 'ap_precalc', order_index: 24,
  },
  {
    unit_number: 2, lesson_number: '2.11', title: 'Logarithmic Function Manipulation',
    description: 'Apply properties of logarithms to expand and condense expressions.',
    learning_objectives: 'Apply product, quotient, and power properties; expand and condense logarithms.',
    key_concepts: 'log product rule, log quotient rule, log power rule, expand, condense',
    unit_title: 'Exponential and Logarithmic Functions', subject: 'ap_precalc', order_index: 25,
  },
  {
    unit_number: 2, lesson_number: '2.12', title: 'Exponential and Logarithmic Equations and Inequalities',
    description: 'Solve exponential and logarithmic equations and inequalities.',
    learning_objectives: 'Solve equations using logs; check for extraneous solutions; solve inequalities.',
    key_concepts: 'exponential equation, logarithmic equation, extraneous solution, inequality, domain check',
    unit_title: 'Exponential and Logarithmic Functions', subject: 'ap_precalc', order_index: 26,
  },
  {
    unit_number: 2, lesson_number: '2.13', title: 'Exponential and Logarithmic Function Context and Data Modeling',
    description: 'Apply exponential and logarithmic models to real-world data.',
    learning_objectives: 'Construct models from data; interpret semi-log plots; make predictions.',
    key_concepts: 'semi-log plot, linearization, exponential regression, logarithmic model, interpretation',
    unit_title: 'Exponential and Logarithmic Functions', subject: 'ap_precalc', order_index: 27,
  },

  // Unit 3: Trigonometric and Polar Functions
  {
    unit_number: 3, lesson_number: '3.1', title: 'Periodic Phenomena',
    description: 'Identify and describe periodic patterns in real-world contexts.',
    learning_objectives: 'Recognize periodic behavior; identify period, amplitude, and midline from data.',
    key_concepts: 'periodic, period, amplitude, midline, cycle, oscillation',
    unit_title: 'Trigonometric and Polar Functions', subject: 'ap_precalc', order_index: 28,
  },
  {
    unit_number: 3, lesson_number: '3.2', title: 'Sine, Cosine, and Tangent',
    description: 'Define sine, cosine, and tangent using the unit circle.',
    learning_objectives: 'Evaluate trig functions at key angles; use the unit circle; understand signs by quadrant.',
    key_concepts: 'unit circle, sine, cosine, tangent, reference angle, quadrant signs',
    unit_title: 'Trigonometric and Polar Functions', subject: 'ap_precalc', order_index: 29,
  },
  {
    unit_number: 3, lesson_number: '3.3', title: 'Sine and Cosine Function Values',
    description: 'Find exact values of sine and cosine for standard angles.',
    learning_objectives: 'Recall exact values; apply symmetry; evaluate for any angle using reference angles.',
    key_concepts: 'exact values, 30-60-90, 45-45-90, reference angle, radian measure',
    unit_title: 'Trigonometric and Polar Functions', subject: 'ap_precalc', order_index: 30,
  },
  {
    unit_number: 3, lesson_number: '3.4', title: 'Sine and Cosine Function Graphs',
    description: 'Graph sine and cosine functions and identify key features.',
    learning_objectives: 'Graph y = sin(x) and y = cos(x); identify period, amplitude, and intercepts.',
    key_concepts: 'sinusoidal graph, period 2π, amplitude 1, x-intercepts, maximum, minimum',
    unit_title: 'Trigonometric and Polar Functions', subject: 'ap_precalc', order_index: 31,
  },
  {
    unit_number: 3, lesson_number: '3.5', title: 'Sinusoidal Functions',
    description: 'Write equations of sinusoidal functions with transformations.',
    learning_objectives: 'Apply vertical/horizontal shifts and stretches; write equations from graphs.',
    key_concepts: 'amplitude, period, phase shift, vertical shift, f(x) = A sin(B(x-C)) + D',
    unit_title: 'Trigonometric and Polar Functions', subject: 'ap_precalc', order_index: 32,
  },
  {
    unit_number: 3, lesson_number: '3.6', title: 'Sinusoidal Function Transformations',
    description: 'Analyze and apply transformations to sinusoidal functions.',
    learning_objectives: 'Identify effects of A, B, C, D; graph transformed sinusoidals; write equations.',
    key_concepts: 'vertical stretch, horizontal compression, period = 2π/B, phase shift = C/B',
    unit_title: 'Trigonometric and Polar Functions', subject: 'ap_precalc', order_index: 33,
  },
  {
    unit_number: 3, lesson_number: '3.7', title: 'Sinusoidal Function Context and Data Modeling',
    description: 'Model periodic real-world phenomena with sinusoidal functions.',
    learning_objectives: 'Fit sinusoidal models to data; interpret parameters; make predictions.',
    key_concepts: 'sinusoidal regression, modeling, tides, temperature cycles, day length',
    unit_title: 'Trigonometric and Polar Functions', subject: 'ap_precalc', order_index: 34,
  },
  {
    unit_number: 3, lesson_number: '3.8', title: 'The Tangent Function',
    description: 'Graph and analyze the tangent function.',
    learning_objectives: 'Graph y = tan(x); identify period, asymptotes, and zeros; apply transformations.',
    key_concepts: 'tangent graph, period π, vertical asymptotes, odd function, tan = sin/cos',
    unit_title: 'Trigonometric and Polar Functions', subject: 'ap_precalc', order_index: 35,
  },
  {
    unit_number: 3, lesson_number: '3.9', title: 'Inverse Trigonometric Functions',
    description: 'Define and evaluate inverse trigonometric functions.',
    learning_objectives: 'Evaluate arcsin, arccos, arctan; understand restricted domains; compose with trig.',
    key_concepts: 'arcsin, arccos, arctan, restricted domain, principal value, composition',
    unit_title: 'Trigonometric and Polar Functions', subject: 'ap_precalc', order_index: 36,
  },
  {
    unit_number: 3, lesson_number: '3.10', title: 'Trigonometric Equations and Inequalities',
    description: 'Solve trigonometric equations and inequalities.',
    learning_objectives: 'Solve trig equations using inverse functions; find all solutions; solve inequalities.',
    key_concepts: 'trig equation, general solution, coterminal angles, unit circle, inequality',
    unit_title: 'Trigonometric and Polar Functions', subject: 'ap_precalc', order_index: 37,
  },
  {
    unit_number: 3, lesson_number: '3.11', title: 'The Secant, Cosecant, and Cotangent Functions',
    description: 'Define and evaluate the three reciprocal trigonometric functions.',
    learning_objectives: 'Define sec, csc, cot as reciprocals; find their values; identify asymptotes and ranges.',
    key_concepts: 'secant, cosecant, cotangent, reciprocal functions, asymptotes, range (−∞,−1]∪[1,∞)',
    unit_title: 'Trigonometric and Polar Functions', subject: 'ap_precalc', order_index: 38,
  },
  {
    unit_number: 3, lesson_number: '3.12', title: 'Equivalent Representations of Trigonometric Functions',
    description: 'Apply Pythagorean, co-function, even/odd, periodicity, and sum identities to rewrite trig expressions.',
    learning_objectives: 'Use Pythagorean and sum identities; simplify trig expressions; find trig values from given info.',
    key_concepts: 'Pythagorean identity, co-function, even/odd, periodicity, sum identities sin(α+β), cos(α+β), double-angle',
    unit_title: 'Trigonometric and Polar Functions', subject: 'ap_precalc', order_index: 39,
  },
  {
    unit_number: 3, lesson_number: '3.13', title: 'Trigonometry and Polar Coordinates',
    description: 'Represent points and equations using polar coordinates; convert between coordinate systems.',
    learning_objectives: 'Convert between polar and rectangular coordinates; convert equations; understand non-uniqueness.',
    key_concepts: 'polar coordinates (r, θ), polar-to-rectangular, rectangular-to-polar, r²=x²+y², arctan quadrant check',
    unit_title: 'Trigonometric and Polar Functions', subject: 'ap_precalc', order_index: 40,
  },
  {
    unit_number: 3, lesson_number: '3.14', title: 'Polar Function Graphs',
    description: 'Graph and analyze polar curves including circles, rose curves, and limaçons.',
    learning_objectives: 'Identify and graph circles, rose curves, limaçons; apply petal count rules; determine symmetry.',
    key_concepts: 'polar graph, rose curve (n/2n petals), limaçon, cardioid, symmetry tests',
    unit_title: 'Trigonometric and Polar Functions', subject: 'ap_precalc', order_index: 41,
  },
  {
    unit_number: 3, lesson_number: '3.15', title: 'Rates of Change in Polar Functions',
    description: 'Analyze how r changes as θ changes in polar functions.',
    learning_objectives: 'Interpret rate of change of r with respect to θ; find where r is increasing/decreasing; relate to graph features.',
    key_concepts: 'dr/dθ, average rate of change in polar, increasing/decreasing r, maximum/minimum r, interpreting polar change',
    unit_title: 'Trigonometric and Polar Functions', subject: 'ap_precalc', order_index: 42,
  },

  // ────────────────────────────────────────────
  // SAT MATH
  // ────────────────────────────────────────────

  // Unit 5: Algebra
  {
    unit_number: 5, lesson_number: '5.1', title: 'Linear Equations in One Variable',
    description: 'Solve linear equations and interpret solutions in real-world contexts.',
    learning_objectives: 'Solve one-variable linear equations; identify number of solutions; apply to word problems.',
    key_concepts: 'linear equation, solution, coefficient, variable, isolating the variable, no solution, infinitely many solutions',
    unit_title: 'Algebra', subject: 'sat_math', order_index: 42,
  },
  {
    unit_number: 5, lesson_number: '5.2', title: 'Linear Equations in Two Variables',
    description: 'Write and interpret linear equations in two variables from contexts and graphs.',
    learning_objectives: 'Write linear equations from context; find slope and intercepts; interpret meaning.',
    key_concepts: 'slope, y-intercept, x-intercept, slope-intercept form, standard form, point-slope form',
    unit_title: 'Algebra', subject: 'sat_math', order_index: 43,
  },
  {
    unit_number: 5, lesson_number: '5.3', title: 'Linear Functions',
    description: 'Analyze linear functions, their graphs, and rate of change.',
    learning_objectives: 'Identify and interpret slope as rate of change; evaluate linear functions; graph lines.',
    key_concepts: 'rate of change, function notation, f(x), slope, parallel lines, perpendicular lines',
    unit_title: 'Algebra', subject: 'sat_math', order_index: 44,
  },
  {
    unit_number: 5, lesson_number: '5.4', title: 'Systems of Two Linear Equations',
    description: 'Solve systems of linear equations using substitution and elimination.',
    learning_objectives: 'Solve systems algebraically and graphically; interpret solutions; identify no-solution and infinite-solution cases.',
    key_concepts: 'system of equations, substitution, elimination, consistent, inconsistent, dependent',
    unit_title: 'Algebra', subject: 'sat_math', order_index: 45,
  },
  {
    unit_number: 5, lesson_number: '5.5', title: 'Linear Inequalities in One Variable',
    description: 'Solve and graph linear inequalities and compound inequalities.',
    learning_objectives: 'Solve inequalities; flip inequality when multiplying by negative; graph solution sets on number line.',
    key_concepts: 'inequality, solution set, interval notation, compound inequality, number line, boundary point',
    unit_title: 'Algebra', subject: 'sat_math', order_index: 46,
  },
  {
    unit_number: 5, lesson_number: '5.6', title: 'Systems of Linear Inequalities',
    description: 'Graph and interpret systems of linear inequalities in two variables.',
    learning_objectives: 'Graph linear inequalities; find feasible regions; interpret constraints.',
    key_concepts: 'linear inequality, feasible region, boundary line, shading, test point',
    unit_title: 'Algebra', subject: 'sat_math', order_index: 47,
  },
  {
    unit_number: 5, lesson_number: '5.7', title: 'Equivalent Expressions',
    description: 'Manipulate algebraic expressions to produce equivalent forms.',
    learning_objectives: 'Expand, factor, and simplify expressions; identify equivalent forms; use structure.',
    key_concepts: 'equivalent expression, like terms, distributive property, factoring, combining terms',
    unit_title: 'Algebra', subject: 'sat_math', order_index: 48,
  },

  // Unit 6: Advanced Math
  {
    unit_number: 6, lesson_number: '6.1', title: 'Nonlinear Functions',
    description: 'Identify and interpret nonlinear functions from equations, tables, and graphs.',
    learning_objectives: 'Distinguish linear from nonlinear; identify key features; interpret in context.',
    key_concepts: 'nonlinear function, quadratic, exponential, absolute value, vertex, axis of symmetry',
    unit_title: 'Advanced Math', subject: 'sat_math', order_index: 49,
  },
  {
    unit_number: 6, lesson_number: '6.2', title: 'Quadratic Equations',
    description: 'Solve quadratic equations using multiple methods.',
    learning_objectives: 'Solve by factoring, completing the square, and quadratic formula; interpret discriminant.',
    key_concepts: 'quadratic equation, factoring, quadratic formula, discriminant, roots, completing the square',
    unit_title: 'Advanced Math', subject: 'sat_math', order_index: 50,
  },
  {
    unit_number: 6, lesson_number: '6.3', title: 'Systems of Equations — Linear and Nonlinear',
    description: 'Solve systems involving one linear and one nonlinear equation.',
    learning_objectives: 'Solve linear-quadratic systems; interpret number of intersections; apply substitution.',
    key_concepts: 'linear-quadratic system, substitution, intersection, tangent, no solution',
    unit_title: 'Advanced Math', subject: 'sat_math', order_index: 51,
  },
  {
    unit_number: 6, lesson_number: '6.4', title: 'Polynomial Operations',
    description: 'Add, subtract, multiply, and factor polynomials.',
    learning_objectives: 'Perform polynomial arithmetic; apply FOIL; factor polynomials; use remainder theorem.',
    key_concepts: 'polynomial, degree, FOIL, factoring, remainder theorem, factor theorem',
    unit_title: 'Advanced Math', subject: 'sat_math', order_index: 52,
  },
  {
    unit_number: 6, lesson_number: '6.5', title: 'Exponential Functions',
    description: 'Analyze and apply exponential growth and decay functions.',
    learning_objectives: 'Identify exponential functions; solve exponential equations; apply to real contexts.',
    key_concepts: 'exponential function, base, growth factor, decay factor, percent change, compound interest',
    unit_title: 'Advanced Math', subject: 'sat_math', order_index: 53,
  },
  {
    unit_number: 6, lesson_number: '6.6', title: 'Radicals and Rational Exponents',
    description: 'Simplify radical expressions and convert between radical and exponential form.',
    learning_objectives: 'Apply rational exponent rules; simplify radicals; solve radical equations.',
    key_concepts: 'radical, square root, nth root, rational exponent, index, radicand, exponent laws',
    unit_title: 'Advanced Math', subject: 'sat_math', order_index: 54,
  },
  {
    unit_number: 6, lesson_number: '6.7', title: 'Equivalent Expressions with Exponents',
    description: 'Rewrite expressions using exponent rules to produce equivalent forms.',
    learning_objectives: 'Apply product, quotient, and power rules; simplify complex expressions.',
    key_concepts: 'exponent rules, product rule, quotient rule, power rule, zero exponent, negative exponent',
    unit_title: 'Advanced Math', subject: 'sat_math', order_index: 55,
  },

  // Unit 7: Problem Solving & Data Analysis
  {
    unit_number: 7, lesson_number: '7.1', title: 'Ratios, Rates, and Proportions',
    description: 'Set up and solve ratio and proportion problems in real-world contexts.',
    learning_objectives: 'Write ratios; set up proportions; solve for unknown quantities; scale problems.',
    key_concepts: 'ratio, proportion, unit rate, cross-multiplication, scale factor, direct variation',
    unit_title: 'Problem Solving & Data Analysis', subject: 'sat_math', order_index: 56,
  },
  {
    unit_number: 7, lesson_number: '7.2', title: 'Percentages',
    description: 'Calculate percent change, percent of a number, and reverse-percent problems.',
    learning_objectives: 'Find percent of a number; calculate percent increase/decrease; solve multi-step percent problems.',
    key_concepts: 'percent, percent change, percent increase, percent decrease, original value, new value',
    unit_title: 'Problem Solving & Data Analysis', subject: 'sat_math', order_index: 57,
  },
  {
    unit_number: 7, lesson_number: '7.3', title: 'Units and Unit Conversions',
    description: 'Convert between units and analyze dimensional relationships.',
    learning_objectives: 'Convert units using conversion factors; analyze units in multi-step problems; interpret rates.',
    key_concepts: 'unit conversion, conversion factor, dimensional analysis, rate, speed, density',
    unit_title: 'Problem Solving & Data Analysis', subject: 'sat_math', order_index: 58,
  },
  {
    unit_number: 7, lesson_number: '7.4', title: 'Data Distributions',
    description: 'Interpret and compare data displayed in graphs, tables, and plots.',
    learning_objectives: 'Read histograms, dot plots, box plots; compare distributions; identify shape, center, spread.',
    key_concepts: 'histogram, dot plot, box plot, distribution, shape, center, spread, outlier, skew',
    unit_title: 'Problem Solving & Data Analysis', subject: 'sat_math', order_index: 59,
  },
  {
    unit_number: 7, lesson_number: '7.5', title: 'Statistical Measures',
    description: 'Calculate and interpret mean, median, mode, range, and standard deviation.',
    learning_objectives: 'Find mean, median, mode; interpret spread; apply weighted averages; reason about standard deviation.',
    key_concepts: 'mean, median, mode, range, standard deviation, weighted average, outlier effect',
    unit_title: 'Problem Solving & Data Analysis', subject: 'sat_math', order_index: 60,
  },
  {
    unit_number: 7, lesson_number: '7.6', title: 'Probability',
    description: 'Calculate theoretical and experimental probabilities including compound events.',
    learning_objectives: 'Find probability of single and compound events; use two-way tables; apply conditional probability.',
    key_concepts: 'probability, sample space, event, complement, two-way table, conditional probability, independent events',
    unit_title: 'Problem Solving & Data Analysis', subject: 'sat_math', order_index: 61,
  },
  {
    unit_number: 7, lesson_number: '7.7', title: 'Two-Variable Data and Scatterplots',
    description: 'Analyze scatterplots and lines of best fit.',
    learning_objectives: 'Interpret scatterplot trends; find and use line of best fit; evaluate correlation.',
    key_concepts: 'scatterplot, correlation, line of best fit, residual, interpolation, extrapolation, r-value',
    unit_title: 'Problem Solving & Data Analysis', subject: 'sat_math', order_index: 62,
  },

  // Unit 8: Geometry & Trigonometry
  {
    unit_number: 8, lesson_number: '8.1', title: 'Area and Volume',
    description: 'Calculate area, perimeter, surface area, and volume of geometric figures.',
    learning_objectives: 'Apply area/perimeter formulas; calculate volume of 3D solids; solve composite figure problems.',
    key_concepts: 'area, perimeter, volume, surface area, composite figure, prism, cylinder, cone, sphere, pyramid',
    unit_title: 'Geometry & Trigonometry', subject: 'sat_math', order_index: 63,
  },
  {
    unit_number: 8, lesson_number: '8.2', title: 'Lines, Angles, and Triangles',
    description: 'Apply properties of lines, angles, and triangles to solve geometric problems.',
    learning_objectives: 'Use angle relationships; apply triangle sum; identify congruence and similarity; apply proportionality.',
    key_concepts: 'vertical angles, supplementary, complementary, parallel lines, transversal, triangle sum, similar triangles, congruent',
    unit_title: 'Geometry & Trigonometry', subject: 'sat_math', order_index: 64,
  },
  {
    unit_number: 8, lesson_number: '8.3', title: 'Right Triangles and Pythagorean Theorem',
    description: 'Apply the Pythagorean theorem and special right triangle relationships.',
    learning_objectives: 'Apply a² + b² = c²; identify 30-60-90 and 45-45-90 triangles; find missing sides.',
    key_concepts: 'Pythagorean theorem, hypotenuse, leg, 30-60-90, 45-45-90, Pythagorean triple',
    unit_title: 'Geometry & Trigonometry', subject: 'sat_math', order_index: 65,
  },
  {
    unit_number: 8, lesson_number: '8.4', title: 'Trigonometry',
    description: 'Apply trigonometric ratios to find missing sides and angles.',
    learning_objectives: 'Set up and evaluate sin, cos, tan; use inverse trig; apply SOH-CAH-TOA in context.',
    key_concepts: 'sine, cosine, tangent, SOH-CAH-TOA, inverse trig, angle of elevation, angle of depression',
    unit_title: 'Geometry & Trigonometry', subject: 'sat_math', order_index: 66,
  },
  {
    unit_number: 8, lesson_number: '8.5', title: 'Circles',
    description: 'Analyze circle equations and properties in the coordinate plane.',
    learning_objectives: 'Write and interpret circle equations; find center and radius; work with arc length and sector area.',
    key_concepts: 'circle equation, center, radius, diameter, chord, arc length, sector area, central angle, inscribed angle',
    unit_title: 'Geometry & Trigonometry', subject: 'sat_math', order_index: 67,
  },

]

export async function seedLessons(): Promise<void> {
  for (const lesson of lessons) {
    await sql`
      INSERT INTO lessons
        (unit_number, lesson_number, title, description, learning_objectives, key_concepts, unit_title, subject, order_index)
      VALUES
        (${lesson.unit_number}, ${lesson.lesson_number}, ${lesson.title}, ${lesson.description},
         ${lesson.learning_objectives}, ${lesson.key_concepts}, ${lesson.unit_title}, ${lesson.subject}, ${lesson.order_index})
    `
  }
}
