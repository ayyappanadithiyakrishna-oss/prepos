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
    difficulty?: 'Easy' | 'Medium' | 'Hard'
    choices: string[]
    answer_text: string
    explanation: string
  }>
}

export const UNIT3A_CONTENT: Record<string, LessonContent> = {
  '3.1': {
    essentialQuestion: 'Why do tides, seasons, and heartbeats all follow the same type of math — and what four numbers describe any repeating pattern?',

    apBoardNote: 'CED Topic 3.1 (Periodic Phenomena) — foundational vocabulary for the heaviest-weighted unit on the AP exam (30–35%). Section I (no-calculator) tests identification of period, amplitude, and midline from graphs or data tables, often using non-standard contexts like daylight hours, sound pressure, or EKG readings. Full credit requires precise definitions: period measured horizontally (peak to next peak), amplitude as (max−min)/2 (not the max value itself). Frequency (f = 1/period) is tested as a connected concept — know both directions of conversion.',

    teacherNote: 'No trig prerequisite needed — this lesson is purely about identifying features of any periodic pattern. The dominant misconception: students measure period as the distance from a maximum to the nearest minimum, giving half the true period. A second error cluster: using the maximum value as the midline instead of computing (max+min)/2, and confusing amplitude with range. Strategy: show a real dataset (ocean tides, monthly temperature) and have students describe it in plain English BEFORE introducing vocabulary — let "it repeats," "the middle seems to be around 5," and "the peaks are about 4 above the middle" emerge naturally, then attach the formal terms.',

    studentVoice: 'Period, midline, amplitude — call them the Big Three of waves. Period = how WIDE one full hump is (measure peak to NEXT peak, not peak to trough — that\'s only half). Amplitude = how TALL above the midline (not the max value — calculate (max−min)/2). Midline = the average height = (max+min)/2. The thing that tripped me up first: confusing amplitude with the maximum value. If a tide goes from 1 ft to 9 ft, the midline is 5 and the amplitude is 4 — NOT 9.',

    narration: [
      'Look around and you\'ll find repetition everywhere. Tides roll in and out on a 12.4-hour schedule. Your heart beats 60–100 times per minute. The sun rises later every day through winter, then earlier every day through spring, then the cycle repeats. Temperature in a city follows a yearly arc from cold to hot and back. These aren\'t coincidences — they\'re periodic phenomena, and mathematics has a precise vocabulary for describing them all.',
      'The first thing we measure is the period: how long one complete cycle takes. For ocean tides, one high tide to the next high tide is about 12.4 hours — that\'s the period. Notice we said "high tide to the NEXT high tide," not "high tide to low tide." Going from peak to trough is only halfway through the cycle. A common trap on the AP exam is presenting a graph and asking for the period when students can only see part of a cycle — always find two consecutive matching points (peak to peak, or midline-crossing to the next midline-crossing in the same direction).',
      'The midline is the horizontal line the wave oscillates around — the "calm water level" that the function averages out to. You calculate it with a simple formula: midline = (max + min) ÷ 2. If a tide reaches 9 feet at high tide and 1 foot at low tide, the midline sits at (9+1)/2 = 5 feet. This matters because the midline becomes the D parameter in sinusoidal functions later in Unit 3.',
      'The amplitude measures how dramatically the wave swings above (or below) the midline. Amplitude = (max − min) ÷ 2. In the tide example: (9−1)/2 = 4 feet. The amplitude is always positive — it\'s a distance, not a signed value. If someone says "the amplitude is −3," they\'ve made an error. Notice that the max equals the midline PLUS the amplitude (5+4=9) and the min equals the midline MINUS the amplitude (5−4=1). These relationships let you reconstruct the entire range from just amplitude and midline.',
      'Frequency is the fourth descriptor, and it\'s simply the reciprocal of period: frequency = 1/period. If the tide period is 12.4 hours, the frequency is (1) / (12).4 ≈ 0.081 cycles per hour. Higher frequency means more cycles per unit time — a hummingbird\'s wings beat at about 50 Hz (50 cycles per second), while a bass guitar note at 80 Hz cycles 80 times per second. The AP exam sometimes gives you frequency and asks you to find the period, or vice versa — just remember they\'re reciprocals.',
      'Not every repeating pattern is a smooth wave. A traffic light cycles through red-yellow-green-red on a schedule, but it\'s not sinusoidal — it\'s a step function. This unit focuses specifically on the smooth, continuous, wave-shaped patterns described by sine and cosine. As you\'ll see in Topics 3.2–3.4, the unit circle is what generates this smooth wave shape mathematically. For now, the key insight is this: every periodic phenomenon — no matter how complex the real-world context — can be characterized by these four numbers: period, midline, amplitude, and frequency.',
    ],

    priorKnowledge: [
      'Reading and interpreting data tables and graphs',
      'Computing averages (arithmetic mean)',
      'Understanding horizontal vs. vertical measurement on a coordinate plane',
      'Recognizing patterns in sequences of numbers',
    ],

    connections: [
      'FORWARD → Topic 3.5: amplitude becomes |A|, midline becomes D, period determines B in f(x) = A·sin(Bx+C)+D',
      'FORWARD → Topic 3.7: reading period, amplitude, and midline from real-world data is the first step in building any sinusoidal model',
      'REAL WORLD: Ocean tides — NOAA tide charts show exactly these four features; period ≈ 12.4 hours, amplitude varies by location',
      'REAL WORLD: EKG readings — the period of a normal heartbeat waveform is 60/heart-rate seconds',
      'REAL WORLD: Seasonal daylight — hours of sunlight per day follows an annual sinusoidal pattern with amplitude ≈ 3–6 hours depending on latitude',
    ],

    graphType: 'sinusoidal',

    keyFormula: 'Amplitude = (max − min) / 2   |   Midline = (max + min) / 2   |   Frequency = 1 / Period',

    keyTerms: [
      { term: 'Periodic Function', definition: 'A function whose output values repeat at regular intervals. If f(x + P) = f(x) for all x, the function is periodic with period P.' },
      { term: 'Period', definition: 'The horizontal length of one complete cycle — measured from peak to peak, or from any point to the next equivalent point. Always a positive number with units of time (or distance).' },
      { term: 'Amplitude', definition: 'How far the wave swings above (or below) the midline. Amplitude = (max − min) ÷ 2. Always positive — it\'s a distance, never negative.' },
      { term: 'Midline', definition: 'The horizontal line halfway between the maximum and minimum values. Midline = (max + min) ÷ 2. Represents the "average height" of the wave.' },
      { term: 'Frequency', definition: 'The number of complete cycles per unit of input. Frequency = 1 ÷ Period. Higher frequency means faster cycling.' },
    ],

    workedExample: {
      problem: 'A beach tide gauge records the following data. Find the period, midline, amplitude, and frequency.',
      steps: [
        'From the table: max height = 9 ft (at t = 0 and t = 12.4), min height = 1 ft (at t = 6.2).',
        'Midline = (max + min) ÷ 2 = (9 + 1) ÷ 2 = 5 ft.',
        'Amplitude = (max − min) ÷ 2 = (9 − 1) ÷ 2 = 4 ft.',
        'Period = time from one high tide to the next = 12.4 − 0 = 12.4 hours.',
        'Frequency = 1 ÷ period = 1 ÷ 12.4 ≈ 0.081 cycles per hour.',
      ],
      answer: 'Period = 12.4 hr, Midline = y = 5 ft, Amplitude = 4 ft, Frequency ≈ 0.081 cycles/hr.',
    },

    table: {
      caption: 'Tide heights (ft) at a beach over 24.8 hours',
      headers: ['Time (hr)', '0', '3.1', '6.2', '9.3', '12.4', '15.5', '18.6', '21.7', '24.8'],
      rows: [['Height (ft)', '9', '5', '1', '5', '9', '5', '1', '5', '9']],
    },

    commonMistakes: [
      'Measuring period from peak to trough. That is only half a cycle. Always measure from peak to the NEXT peak (or any matching point to the next matching point one full cycle later).',
      'Using the maximum value as the midline. The midline is (max + min)/2. If max = 9 and min = 1, the midline is 5, not 9.',
      'Confusing amplitude with range. The range of the function is [min, max] = [1, 9]. The amplitude is half the range spread: (9−1)/2 = 4.',
    ],

    tip: 'On the AP exam, when a graph or table is given, immediately identify and label: the maximum value, the minimum value, and the x-coordinates of two consecutive maxima. From those three numbers you can compute everything else in under 30 seconds.',

    questions: [
      {
        question_text: 'A sinusoidal function has a maximum value of 11 and a minimum value of 3. What is its amplitude?',
        difficulty: 'Easy',
        choices: ['3', '4', '7', '8'],
        answer_text: '4',
        explanation: 'Amplitude = (max − min) ÷ 2 = (11 − 3) ÷ 2 = 8 ÷ 2 = 4.',
      },
      {
        question_text: 'A periodic function has maximum value 14 and minimum value 2. What is its midline?',
        difficulty: 'Easy',
        choices: ['y = 2', 'y = 6', 'y = 8', 'y = 14'],
        answer_text: 'y = 8',
        explanation: 'Midline = (max + min) ÷ 2 = (14 + 2) ÷ 2 = 16 ÷ 2 = 8.',
      },
      {
        question_text: 'A function completes one full cycle every 8 seconds. What is its frequency?',
        difficulty: 'Easy',
        choices: ['8 cycles/sec', '4 cycles/sec', '0.125 cycles/sec', '16 cycles/sec'],
        answer_text: '0.125 cycles/sec',
        explanation: 'Frequency = 1 ÷ period = 1 ÷ 8 = 0.125 cycles per second.',
      },
      {
        question_text: 'Consecutive high tides occur at t = 2 hr and t = 14.4 hr. What is the period of this tide function?',
        difficulty: 'Easy',
        choices: ['6.2 hr', '12.4 hr', '14.4 hr', '16.4 hr'],
        answer_text: '12.4 hr',
        explanation: 'Period = difference between consecutive highs = 14.4 − 2 = 12.4 hours.',
      },
      {
        question_text: 'A periodic function has values f(0) = 3, f(2) = 7, f(4) = 3, f(6) = −1, f(8) = 3, and the pattern is rising at x = 0 and x = 8. What is the period?',
        difficulty: 'Medium',
        choices: ['2', '4', '6', '8'],
        answer_text: '8',
        explanation: 'At x = 0 and x = 8, the function has the same value (3) and is rising — these are equivalent points in the cycle. Period = 8 − 0 = 8. The midline is (7 + (−1))/2 = 3 and amplitude is (7−(−1))/2 = 4.',
      },
      {
        question_text: 'A sinusoidal function has amplitude 5 and midline y = 3. What are its maximum and minimum values?',
        difficulty: 'Medium',
        choices: ['max = 8, min = −2', 'max = 5, min = 1', 'max = 8, min = 3', 'max = 15, min = −9'],
        answer_text: 'max = 8, min = −2',
        explanation: 'Max = midline + amplitude = 3 + 5 = 8. Min = midline − amplitude = 3 − 5 = −2.',
      },
      {
        question_text: 'A function has a frequency of 0.25 cycles per second. What is its period?',
        difficulty: 'Medium',
        choices: ['0.25 sec', '2 sec', '4 sec', '8 sec'],
        answer_text: '4 sec',
        explanation: 'Period = 1 ÷ frequency = 1 ÷ 0.25 = 4 seconds.',
      },
      {
        question_text: 'Function A has max = 10 and min = 2. Function B has max = 18 and min = 10. Which has the greater amplitude?',
        difficulty: 'Medium',
        choices: ['Function A, amplitude 4', 'Function B, amplitude 4', 'They are equal', 'Cannot be determined without a graph'],
        answer_text: 'They are equal',
        explanation: 'Function A: amplitude = (10−2)/2 = 4. Function B: amplitude = (18−10)/2 = 4. Both have amplitude 4, so they are equal.',
      },
      {
        question_text: 'A buoy bobs in the ocean. Its height above the seafloor oscillates between 12 m and 4 m. A second buoy has double the amplitude of the first and a midline 2 m higher. What is the maximum height of the second buoy?',
        difficulty: 'Hard',
        choices: ['14 m', '18 m', '20 m', '22 m'],
        answer_text: '18 m',
        explanation: 'First buoy: amplitude = (12−4)/2 = 4 m, midline = (12+4)/2 = 8 m. Second buoy: amplitude = 2×4 = 8 m, midline = 8+2 = 10 m. Max = midline + amplitude = 10 + 8 = 18 m.',
      },
      {
        question_text: 'A sinusoidal function\'s maximum occurs at x = 1 and the next maximum occurs at x = 9. The function reaches its minimum value of −3. What is the midline if the amplitude is 5?',
        difficulty: 'Hard',
        choices: ['y = 2', 'y = −3', 'y = 5', 'y = 8'],
        answer_text: 'y = 2',
        explanation: 'Amplitude = 5, minimum = −3. Since min = midline − amplitude: midline = min + amplitude = −3 + 5 = 2. (Verify: max = midline + amplitude = 2 + 5 = 7, and (7+(−3))/2 = 2. Consistent.)',
      },
    ],
  },

  '3.2': {
    essentialQuestion: 'What does a circle have to do with triangles — and why do sine, cosine, and tangent live on the unit circle?',

    apBoardNote: 'CED Topic 3.2A–3.2B (Unit Circle Definitions). Foundational for the entire trig unit — weakness here propagates errors through Topics 3.3–3.7 and into Unit 3B. Section I (no-calculator) tests evaluating exact trig values at standard angles. The most-penalized error on graded responses: writing (sin θ, cos θ) instead of (cos θ, sin θ) for the unit circle point — this swaps every subsequent answer. Know that tan θ is undefined wherever cos θ = 0 (at (π) / (2) and (3π) / (2)). Radian-degree conversion appears in both sections: θ_rad = θ_deg · (π) / (180).',

    teacherNote: 'Prerequisites: coordinate geometry, Pythagorean theorem. The universal first mistake: students write (sin θ, cos θ) for the unit circle point — teach the mnemonic "Cosine is X, Sine is Sky (Y)" immediately and enforce it. Second trap: calculator left in degree mode during a radian problem — make radian mode the default for the entire unit and state this explicitly. Connect to 3.3 (extending to all four quadrants using symmetry), 3.4 (the graph of sin is the y-coordinates read off the unit circle as θ increases), and the Pythagorean identity sin²θ + cos²θ = 1 (which is just x² + y² = 1 on the unit circle). Pedagogical approach: have students physically trace angles counterclockwise on a unit circle printout and read coordinates — kinesthetic repetition builds automaticity faster than flashcards.',

    studentVoice: 'The unit circle clicked for me when I stopped thinking of it as a memorization task and started seeing it as a DEFINITION. Sine is defined as the y-coordinate of the point on the unit circle. Cosine is the x-coordinate. That\'s it. So sin((π) / (2)) = 1 because the point at angle (π) / (2) is (0, 1), and the y-coordinate is 1. No formula needed. And tangent is just slope: tan = y/x = sin/cos. Tan((π) / (2)) is undefined because x = 0 at that point, and you can\'t divide by zero. Everything else follows from these three definitions.',

    narration: [
      'Here\'s a question that seems strange at first: what does a circle have to do with right triangles? The answer unlocks all of trigonometry. Imagine a circle with radius exactly 1 unit, centered at the origin. Every point on this circle is exactly 1 unit from the center. Because the radius is 1, when we draw a right triangle from the center to any point on the circle, the hypotenuse is always 1 — which simplifies the trig ratios dramatically.',
      'Pick any angle θ measured counterclockwise from the positive x-axis. The terminal side of that angle intersects the unit circle at exactly one point. We define cosine and sine using that point: the x-coordinate of the intersection is cos θ, and the y-coordinate is sin θ. Written as a coordinate pair: the point is (cos θ, sin θ). This is the definition — not a formula to memorize, but a geometric fact. The unit circle IS the definition of sine and cosine.',
      'Let\'s build intuition with a few angles. At θ = 0 (pointing right), the intersection point is (1, 0). So cos(0) = 1 and sin(0) = 0. At θ = (π) / (2) (pointing straight up), the point is (0, 1). So cos((π) / (2)) = 0 and sin((π) / (2)) = 1. At θ = π (pointing left), the point is (−1, 0). So cos(π) = −1 and sin(π) = 0. Notice that you don\'t compute these — you just read the coordinates off the circle.',
      'Tangent is defined as the ratio of sine to cosine: tan θ = sin θ ÷ cos θ = y ÷ x. Geometrically, this is the slope of the line from the origin to the point (cos θ, sin θ). When θ = (π) / (4), the point is ((√2) / (2), (√2) / (2)), and the slope is ((√2) / (2))/((√2) / (2)) = 1, so tan((π) / (4)) = 1. When θ = (π) / (2), the point is (0, 1) — the x-coordinate is 0, and we\'d need to divide by zero, which is undefined. That\'s why tan((π) / (2)) is undefined.',
      'Angles can be measured in degrees or radians. You\'re already familiar with degrees (360° = full circle). Radians measure arc length on a unit circle: one full revolution = 2π radians of arc length. The conversion is: θ_rad = θ_deg × ((π) / (180)). So 90° = (π) / (2) radians, 180° = π radians, 270° = (3π) / (2) radians, 360° = 2π radians. For the AP exam, you should be comfortable in radians by default — most trig problems use radians, and your calculator should stay in radian mode throughout this unit.',
      'The five benchmark angles to memorize in Q1 are 0, (π) / (6), (π) / (4), (π) / (3), and (π) / (2). Their cosines go: 1, (√3) / (2), (√2) / (2), (1) / (2), 0 — decreasing from 1 to 0 as you rotate from right to up. Their sines go: 0, (1) / (2), (√2) / (2), (√3) / (2), 1 — increasing from 0 to 1. Notice the pattern: sin values for 0/(π) / (6)/(π) / (4)/(π) / (3)/(π) / (2) are (√0) / (2), (√1) / (2), (√2) / (2), (√3) / (2), (√4) / (2) — the numerators are √0 through √4. Cos is the same pattern reversed. One pattern to remember, not two.',
    ],

    priorKnowledge: [
      'Right triangle trigonometry: sin = opposite/hypotenuse, cos = adjacent/hypotenuse, tan = opposite/adjacent',
      'The coordinate plane: x-axis is horizontal, y-axis is vertical, origin is (0,0)',
      'The Pythagorean theorem: a² + b² = c²',
      'Basic angle measurement in degrees (right angle = 90°, straight angle = 180°, full rotation = 360°)',
    ],

    connections: [
      'FORWARD → Topic 3.3: extending unit circle values to all four quadrants using reference angles and sign rules',
      'FORWARD → Topic 3.4: the graph of sin(x) is literally the y-coordinate of the unit circle point traced as θ increases from 0 to 2π',
      'FORWARD → Topic 3.12 (Unit 3B): the Pythagorean identity sin²θ + cos²θ = 1 is the equation x² + y² = 1 of the unit circle',
      'BACKWARD → Right triangle trig: on the unit circle, cos = adjacent/hypotenuse = x/1 = x; sin = opposite/hypotenuse = y/1 = y — the definitions are consistent',
      'REAL WORLD: Circular motion — the x and y positions of anything moving in a circle are described by cosine and sine respectively',
    ],

    graphType: 'unit-circle',

    keyFormula: 'Point on unit circle at angle θ: (cos θ, sin θ)   |   tan θ = sin θ / cos θ   |   θ_rad = θ_deg × (π) / (180)',

    keyTerms: [
      { term: 'Unit Circle', definition: 'A circle with radius 1 centered at the origin. Every point on it satisfies x² + y² = 1.' },
      { term: 'Cosine (cos θ)', definition: 'The x-coordinate of the point where angle θ meets the unit circle. Range: [−1, 1].' },
      { term: 'Sine (sin θ)', definition: 'The y-coordinate of the point where angle θ meets the unit circle. Range: [−1, 1].' },
      { term: 'Tangent (tan θ)', definition: 'The ratio sin θ ÷ cos θ. Geometrically, the slope of the terminal side. Undefined when cos θ = 0.' },
      { term: 'Radian', definition: 'A unit of angle measurement equal to the arc length on a unit circle. 2π radians = 360°. One radian ≈ 57.3°.' },
    ],

    workedExample: {
      problem: 'Find the exact values of sin((π) / (6)), cos((π) / (6)), and tan((π) / (6)).',
      steps: [
        'The angle (π) / (6) is 30°. Its unit circle point is ((√3) / (2), 1/2).',
        'cos((π) / (6)) = x-coordinate = (√3) / (2).',
        'sin((π) / (6)) = y-coordinate = (1) / (2).',
        'tan((π) / (6)) = sin/cos = (1/2) ÷ ((√3) / (2)) = (1/2) × (2/√3) = 1/√3 = (√3) / (3).',
      ],
      answer: 'sin((π) / (6)) = (1) / (2), cos((π) / (6)) = (√3) / (2), tan((π) / (6)) = (√3) / (3).',
    },

    table: {
      caption: 'Exact trig values at benchmark Q1 angles',
      headers: ['Angle (rad)', 'Degrees', 'cos θ', 'sin θ', 'tan θ'],
      rows: [
        ['0', '0°', '1', '0', '0'],
        ['(π) / (6)', '30°', '(√3) / (2)', '(1) / (2)', '(√3) / (3)'],
        ['(π) / (4)', '45°', '(√2) / (2)', '(√2) / (2)', '1'],
        ['(π) / (3)', '60°', '(1) / (2)', '(√3) / (2)', '√3'],
        ['(π) / (2)', '90°', '0', '1', 'undefined'],
        ['π', '180°', '−1', '0', '0'],
      ],
    },

    commonMistakes: [
      'Swapping sine and cosine. The unit circle point is (cos θ, sin θ) — cosine is x (horizontal), sine is y (vertical). Mnemonic: "Cosine is X, Sine is Sky."',
      'Calculator in degree mode during a radian problem. Keep the calculator in radian mode for the entire unit. Check before every calculation.',
      'Saying tan((π) / (2)) = 0 instead of undefined. At (π) / (2), cos((π) / (2)) = 0, and dividing by zero produces undefined — not zero.',
    ],

    tip: 'Memorize the sine pattern for Q1: sin goes 0, (1) / (2), (√2) / (2), (√3) / (2), 1 at angles 0, (π) / (6), (π) / (4), (π) / (3), (π) / (2). Cosine is the same pattern in reverse. This one pattern gives you all 10 values across both functions.',

    questions: [
      {
        question_text: 'What is the x-coordinate of the point on the unit circle at angle θ?',
        difficulty: 'Easy',
        choices: ['sin θ', 'cos θ', 'tan θ', '(1) / (cos θ)'],
        answer_text: 'cos θ',
        explanation: 'By definition, the unit circle point at angle θ is (cos θ, sin θ). The x-coordinate is cosine.',
      },
      {
        question_text: 'What is sin((π) / (2))?',
        difficulty: 'Easy',
        choices: ['0', '(1) / (2)', '(√2) / (2)', '1'],
        answer_text: '1',
        explanation: 'At θ = (π) / (2) (straight up), the unit circle point is (0, 1). The y-coordinate gives sin((π) / (2)) = 1.',
      },
      {
        question_text: 'What is cos(π)?',
        difficulty: 'Easy',
        choices: ['0', '1', '−1', '(√2) / (2)'],
        answer_text: '−1',
        explanation: 'At θ = π (pointing left), the unit circle point is (−1, 0). The x-coordinate gives cos(π) = −1.',
      },
      {
        question_text: 'Convert 150° to radians.',
        difficulty: 'Easy',
        choices: ['(π) / (6)', '(π) / (3)', '(5π) / (6)', '(7π) / (6)'],
        answer_text: '(5π) / (6)',
        explanation: 'θ_rad = 150 × (π) / (180) = (150π) / (180) = (5π) / (6).',
      },
      {
        question_text: 'What is tan((π) / (4))?',
        difficulty: 'Medium',
        choices: ['0', '(√2) / (2)', '1', '√3'],
        answer_text: '1',
        explanation: 'At (π) / (4), the unit circle point is ((√2) / (2), (√2) / (2)). tan = sin/cos = ((√2) / (2))/((√2) / (2)) = 1.',
      },
      {
        question_text: 'Which statement about tan((π) / (2)) is correct?',
        difficulty: 'Medium',
        choices: ['tan((π) / (2)) = 0', 'tan((π) / (2)) = 1', 'tan((π) / (2)) = −1', 'tan((π) / (2)) is undefined'],
        answer_text: 'tan((π) / (2)) is undefined',
        explanation: 'cos((π) / (2)) = 0 and tan θ = sin θ/cos θ. Division by zero is undefined.',
      },
      {
        question_text: 'What is the exact value of tan((π) / (3))?',
        difficulty: 'Medium',
        choices: ['(1) / (2)', '(√3) / (3)', '1', '√3'],
        answer_text: '√3',
        explanation: 'At (π) / (3): sin((π) / (3)) = (√3) / (2) and cos((π) / (3)) = (1) / (2). tan((π) / (3)) = ((√3) / (2))/(1/2) = √3.',
      },
      {
        question_text: 'If sin θ = (√3) / (2) and θ is in the first quadrant, what is cos θ?',
        difficulty: 'Medium',
        choices: ['(1) / (4)', '(1) / (2)', '(√3) / (2)', '(√2) / (2)'],
        answer_text: '(1) / (2)',
        explanation: 'sin θ = (√3) / (2) corresponds to θ = (π) / (3) in Q1. At (π) / (3), cos((π) / (3)) = (1) / (2).',
      },
      {
        question_text: 'A point P on the unit circle satisfies cos θ = −(√3) / (2) and 0 ≤ θ < π. What is the exact value of sin θ?',
        difficulty: 'Hard',
        choices: ['−(1) / (2)', '(1) / (2)', '(√3) / (2)', '−(√3) / (2)'],
        answer_text: '(1) / (2)',
        explanation: 'cos θ = −(√3) / (2) in [0, π) means θ is in Q2 (where cosine is negative but sine is positive). The reference angle is (π) / (6) (since cos((π) / (6)) = (√3) / (2)). In Q2, sin is positive, so sin θ = +(1) / (2).',
      },
      {
        question_text: 'A point on the unit circle is at angle θ where tan θ = −√3 and (π) / (2) < θ < π. What are the coordinates of this point?',
        difficulty: 'Hard',
        choices: ['((√3) / (2), −1/2)', '(1/2, (√3) / (2))', '(−(1) / (2), (√3) / (2))', '(−(√3) / (2), 1/2)'],
        answer_text: '(−(1) / (2), (√3) / (2))',
        explanation: 'In Q2 ((π) / (2) < θ < π), cos < 0 and sin > 0. tan θ = −√3 with positive sine means reference angle is (π) / (3) (since tan((π) / (3)) = √3). At (2π) / (3): cos = −(1) / (2), sin = (√3) / (2). Point: (−(1) / (2), (√3) / (2)).',
      },
    ],
  },

  '3.3': {
    essentialQuestion: 'What happens to sine and cosine when the angle goes past 90° — and how does the ASTC rule let you find exact values in all four quadrants?',

    apBoardNote: 'CED Topic 3.3A (Trig Values in All Quadrants). Appears constantly in Section I as a prerequisite for other problems — weak knowledge here causes cascading errors across the exam. AP questions often give two constraints like "sin θ < 0 and tan θ > 0 — which quadrant?" requiring ASTC fluency. Section II may require full justification: (1) identify quadrant, (2) state reference angle, (3) apply sign from ASTC, (4) state exact value. The Pythagorean identity sin²θ + cos²θ = 1 pairs with ASTC to find one trig value given another — a common Hard question format.',

    teacherNote: 'Students need unit circle basics from 3.2. The near-universal error: finding the correct reference angle value, then forgetting to apply the sign change for the quadrant. ASTC must be automatic — drill until students can state which functions are positive in each quadrant without thinking. A subtler trap: in Q3, students correctly make sin and cos negative but then also make tan negative (wrong — negative divided by negative is positive). Connect to 3.12 (Pythagorean identity: sin²θ + cos²θ = 1 is used to find exact values when only one is known and the quadrant is given). Teaching strategy: require a three-step written process on every problem — Quadrant → Reference Angle → Sign — until it becomes habitual.',

    studentVoice: '"All Students Take Calculus" saved me on the AP. Q1: All positive. Q2: Sin positive only. Q3: Tan positive only (both sin and cos are negative, but −÷− = +). Q4: Cos positive only. My three-step process every time: Step 1 — which quadrant? Step 2 — what\'s the reference angle (acute angle to nearest x-axis)? Step 3 — look up the Q1 value, then flip the sign if ASTC says negative. Example: cos((5π) / (6)). Q2 (between (π) / (2) and π). Reference angle: π − (5π) / (6) = (π) / (6). cos((π) / (6)) = (√3) / (2). In Q2, cosine is NEGATIVE. Answer: −(√3) / (2). Three steps, done.',

    narration: [
      'In Topic 3.2, you learned the unit circle for angles in the first quadrant — between 0 and (π) / (2). But angles don\'t stop there. A Ferris wheel keeps rotating past the top, through the left side, past the bottom, and back around. A pendulum swings past zero into negative territory. Angles in the real world go anywhere from 0 to 2π (and beyond, with negative angles representing clockwise rotation). So we need to evaluate sine and cosine at any angle, not just the nice Q1 values.',
      'The key insight is symmetry. The unit circle is symmetric across both axes. This means that every angle in Q2, Q3, or Q4 has a "reference angle" — its closest equivalent in Q1 — and the trig values are the same as the Q1 values, except possibly with a sign change. The reference angle is always the acute angle between the terminal side and the nearest x-axis. It\'s always between 0 and (π) / (2).',
      'To find the reference angle: in Q2, reference = π − θ. In Q3, reference = θ − π. In Q4, reference = 2π − θ. For example, the reference angle for (5π) / (6) is π − (5π) / (6) = (π) / (6). The reference angle for (7π) / (4) is 2π − (7π) / (4) = (π) / (4). Once you have the reference angle, you know the magnitude of the trig value — now you just need the sign.',
      'The sign rule is captured by "All Students Take Calculus" (ASTC). In Q1, All trig functions are positive. In Q2, only Sine is positive (cosine and tangent are negative). In Q3, only Tangent is positive (both sine and cosine are negative, but their ratio is positive). In Q4, only Cosine is positive (sine and tangent are negative). This pattern makes sense from the coordinate definitions: in Q2, x is negative (so cosine is negative) but y is positive (so sine is positive).',
      'Let\'s put it all together with sin((7π) / (6)). Step 1: (7π) / (6) is between π and (3π) / (2), so it\'s in Q3. Step 2: reference angle = (7π) / (6) − π = (π) / (6). Step 3: sin((π) / (6)) = (1) / (2) in Q1. But in Q3, sine is negative (from ASTC). Therefore sin((7π) / (6)) = −(1) / (2). This three-step process works for every angle in every quadrant.',
      'One more powerful tool: coterminal angles. Any angle plus or minus 2π has the same terminal side — the same unit circle point — so the same trig values. This lets you handle angles greater than 2π or less than 0. For example, sin((25π) / (6)) = sin((25π) / (6) − 4π) = sin((25π) / (6) − (24π) / (6)) = sin((π) / (6)) = (1) / (2). Subtract 2π repeatedly until you\'re in [0, 2π), then proceed with ASTC.',
    ],

    priorKnowledge: [
      'Unit circle definition of sine and cosine from Topic 3.2',
      'Benchmark Q1 values: sin and cos at 0, (π) / (6), (π) / (4), (π) / (3), (π) / (2)',
      'The four quadrants of the coordinate plane and which coordinates are positive/negative in each',
      'Basic fraction arithmetic (subtracting fractions with denominator 6, 4, 3, etc.)',
    ],

    connections: [
      'BACKWARD → Topic 3.2: unit circle definitions — the reference angle trick only works because trig values are defined as coordinates',
      'FORWARD → Topic 3.4: the graph of sin(x) going negative in (π, 2π) is a direct consequence of Q3 and Q4 having negative sine values',
      'FORWARD → Topic 3.12 (Unit 3B): Pythagorean identity sin²θ + cos²θ = 1 combined with ASTC lets you find exact values given one trig value and quadrant',
      'REAL WORLD: Navigation — bearings greater than 90° require signs to distinguish directions; ASTC tells you which components are positive',
    ],

    graphType: 'unit-circle',

    keyFormula: 'Reference angles: Q2: π−θ | Q3: θ−π | Q4: 2π−θ   |   ASTC: Q1=All, Q2=Sin, Q3=Tan, Q4=Cos positive',

    keyTerms: [
      { term: 'Reference Angle', definition: 'The positive acute angle between the terminal side of θ and the nearest part of the x-axis. Always between 0 and (π) / (2).' },
      { term: 'ASTC Rule', definition: '"All Students Take Calculus." Identifies which trig functions are positive in each quadrant: Q1=All, Q2=Sin, Q3=Tan, Q4=Cos.' },
      { term: 'Coterminal Angles', definition: 'Angles that share the same terminal side. Differ by integer multiples of 2π. They have identical trig values.' },
      { term: 'Terminal Side', definition: 'The ray where an angle ends after rotating counterclockwise from the positive x-axis. Determines the unit circle point.' },
      { term: 'Quadrant', definition: 'One of four regions of the plane: Q1 (+,+), Q2 (−,+), Q3 (−,−), Q4 (+,−).' },
    ],

    workedExample: {
      problem: 'Find the exact values of sin((5π) / (3)) and cos((5π) / (3)).',
      steps: [
        '(5π) / (3) is between (3π) / (2) and 2π — it is in Quadrant IV.',
        'Reference angle = 2π − (5π) / (3) = (6π) / (3) − (5π) / (3) = (π) / (3).',
        'Q1 values: sin((π) / (3)) = (√3) / (2), cos((π) / (3)) = (1) / (2).',
        'In Q4: ASTC says only Cosine is positive. So sine is negative, cosine is positive.',
        'sin((5π) / (3)) = −(√3) / (2), cos((5π) / (3)) = +(1) / (2).',
      ],
      answer: 'sin((5π) / (3)) = −(√3) / (2), cos((5π) / (3)) = (1) / (2).',
    },

    workedExample2: {
      problem: 'Given that sin θ = −(3) / (5) and cos θ < 0, find cos θ and tan θ.',
      steps: [
        'sin θ < 0 and cos θ < 0 means θ is in Quadrant III (both coordinates negative).',
        'Use the Pythagorean identity: sin²θ + cos²θ = 1.',
        '(−3/5)² + cos²θ = 1 → (9) / (25) + cos²θ = 1 → cos²θ = (16) / (25).',
        'cos θ = ±(4) / (5). Since we\'re in Q3, cos θ is negative: cos θ = −(4) / (5).',
        'tan θ = sin θ / cos θ = (−3/5) / (−4/5) = (3) / (4). (Positive in Q3, as expected from ASTC.)',
      ],
      answer: 'cos θ = −(4) / (5), tan θ = (3) / (4).',
    },

    table: {
      caption: 'Trig values across all four quadrants (reference angle (π) / (6))',
      headers: ['Angle', 'Quadrant', 'Ref Angle', 'sin θ', 'cos θ', 'tan θ'],
      rows: [
        ['(π) / (6)', 'I', '(π) / (6)', '(1) / (2)', '(√3) / (2)', '(√3) / (3)'],
        ['(5π) / (6)', 'II', '(π) / (6)', '(1) / (2)', '−(√3) / (2)', '−(√3) / (3)'],
        ['(7π) / (6)', 'III', '(π) / (6)', '−(1) / (2)', '−(√3) / (2)', '(√3) / (3)'],
        ['(11π) / (6)', 'IV', '(π) / (6)', '−(1) / (2)', '(√3) / (2)', '−(√3) / (3)'],
      ],
    },

    commonMistakes: [
      'Applying the correct reference angle but forgetting the sign change. Finding the value is only half the work — you must check ASTC to determine the sign.',
      'Thinking tan is negative in Q3 because "everything is negative." In Q3, sin and cos are both negative, but tan = sin/cos = (−)/(−) = positive.',
      'Using the wrong reference angle formula for the quadrant. In Q2: π − θ. In Q3: θ − π. In Q4: 2π − θ. Sketch a quick diagram if unsure.',
    ],

    tip: 'Draw a small "ASTC wheel" in the corner of your scratch paper at the start of any trig exam: Q1=A (all), Q2=S (sin), Q3=T (tan), Q4=C (cos). One 10-second sketch eliminates one of the most common AP error types.',

    questions: [
      {
        question_text: 'In which quadrant is sine negative and cosine positive?',
        difficulty: 'Easy',
        choices: ['Quadrant I', 'Quadrant II', 'Quadrant III', 'Quadrant IV'],
        answer_text: 'Quadrant IV',
        explanation: 'ASTC: in Q4, only Cosine is positive. Sine is negative in Q4. This is consistent with the point being in the lower-right region where x > 0 and y < 0.',
      },
      {
        question_text: 'What is the reference angle for (4π) / (3)?',
        difficulty: 'Easy',
        choices: ['(π) / (6)', '(π) / (4)', '(π) / (3)', '(2π) / (3)'],
        answer_text: '(π) / (3)',
        explanation: '(4π) / (3) is in Q3 (between π and (3π) / (2)). Reference angle = θ − π = (4π) / (3) − π = (4π) / (3) − (3π) / (3) = (π) / (3).',
      },
      {
        question_text: 'What is cos((2π) / (3))?',
        difficulty: 'Easy',
        choices: ['(1) / (2)', '(√3) / (2)', '−(1) / (2)', '−(√3) / (2)'],
        answer_text: '−(1) / (2)',
        explanation: '(2π) / (3) is in Q2. Reference angle = π − (2π) / (3) = (π) / (3). cos((π) / (3)) = (1) / (2). In Q2, cosine is negative. Answer: −(1) / (2).',
      },
      {
        question_text: 'Which angle is coterminal with (3π) / (4)?',
        difficulty: 'Easy',
        choices: ['−(π) / (4)', '−(5π) / (4)', '(11π) / (4)', '(7π) / (4)'],
        answer_text: '(11π) / (4)',
        explanation: '(3π) / (4) + 2π = (3π) / (4) + (8π) / (4) = (11π) / (4). Adding 2π produces a coterminal angle.',
      },
      {
        question_text: 'What is sin((11π) / (6))?',
        difficulty: 'Medium',
        choices: ['(√3) / (2)', '(1) / (2)', '−(1) / (2)', '−(√3) / (2)'],
        answer_text: '−(1) / (2)',
        explanation: '(11π) / (6) is in Q4. Reference angle = 2π − (11π) / (6) = (π) / (6). sin((π) / (6)) = (1) / (2). In Q4, sine is negative. Answer: −(1) / (2).',
      },
      {
        question_text: 'What is tan((5π) / (4))?',
        difficulty: 'Medium',
        choices: ['−1', '1', '−√3', '√3'],
        answer_text: '1',
        explanation: '(5π) / (4) is in Q3. Reference angle = (5π) / (4) − π = (π) / (4). tan((π) / (4)) = 1. In Q3, tangent is positive (ASTC). Answer: +1.',
      },
      {
        question_text: 'If cos θ = −(5) / (13) and sin θ > 0, in which quadrant is θ, and what is sin θ?',
        difficulty: 'Medium',
        choices: ['Q2, sin θ = (12) / (13)', 'Q3, sin θ = (12) / (13)', 'Q2, sin θ = −(12) / (13)', 'Q3, sin θ = −(12) / (13)'],
        answer_text: 'Q2, sin θ = (12) / (13)',
        explanation: 'cos θ < 0 and sin θ > 0 → Q2. Use sin²θ + cos²θ = 1: sin²θ + (25) / (169) = 1 → sin²θ = (144) / (169) → sin θ = (12) / (13) (positive in Q2).',
      },
      {
        question_text: 'Evaluate sin((13π) / (6)).',
        difficulty: 'Medium',
        choices: ['(√3) / (2)', '(1) / (2)', '−(1) / (2)', '−(√3) / (2)'],
        answer_text: '(1) / (2)',
        explanation: '(13π) / (6) − 2π = (13π) / (6) − (12π) / (6) = (π) / (6). The coterminal angle is (π) / (6) (Q1). sin((π) / (6)) = (1) / (2).',
      },
      {
        question_text: 'A function f is defined by f(θ) = cos θ. If f(θ) = −(√2) / (2) and π < θ < (3π) / (2), find θ.',
        difficulty: 'Hard',
        choices: ['(3π) / (4)', '(5π) / (4)', '(7π) / (4)', '(5π) / (6)'],
        answer_text: '(5π) / (4)',
        explanation: 'π < θ < (3π) / (2) is Q3. cos(θ) = −(√2) / (2) → reference angle is (π) / (4) (since cos((π) / (4)) = (√2) / (2)). In Q3: θ = π + (π) / (4) = (5π) / (4).',
      },
      {
        question_text: 'Given tan θ = −√3 and cos θ > 0, find the exact value of sin θ.',
        difficulty: 'Hard',
        choices: ['(√3) / (2)', '−(√3) / (2)', '(1) / (2)', '−(1) / (2)'],
        answer_text: '−(√3) / (2)',
        explanation: 'cos θ > 0 and tan θ < 0 → Q4 (ASTC: only cos positive in Q4, so tan = sin/cos < 0 means sin < 0). |tan θ| = √3 → reference angle is (π) / (3). In Q4: sin θ = −sin((π) / (3)) = −(√3) / (2).',
      },
    ],
  },

  '3.4': {
    essentialQuestion: 'What does the graph of sin(x) actually look like — and how do you sketch it from the unit circle in under a minute?',

    apBoardNote: 'CED Topic 3.4A–3.4B (Graphs of Sine and Cosine). Appears in Section I for graph identification and feature reading, and in Section II as the foundation for transformation problems (Topic 3.5–3.6). AP graders specifically check: (1) correct period 2π, (2) correct starting values — sin starts at (0,0), cos starts at (0,1), (3) correct maximum and minimum x-coordinates, (4) correct zeros. A common AP trap: presenting an unlabeled sinusoidal graph and asking whether it represents sin, cos, or a transformation — knowing the five key points for each function enables instant identification.',

    teacherNote: 'Students need unit circle values from 3.2–3.3. The core misconception to address immediately: students think sin and cos are fundamentally different, when in fact cos(x) = sin(x + (π) / (2)) — they are the same wave, horizontally shifted. Cementing this relationship prevents double-memorization and builds conceptual depth for transformations. The second issue: students draw free-hand waves without anchoring the five key points first, producing imprecise curves. Introduce the five-point sketch method explicitly: plot the five equally-spaced special values (at intervals of T/4 = (π) / (2)), then connect with a smooth curve. Connect directly to 3.5: these parent graphs are exactly what A, B, C, D transform.',

    studentVoice: 'For sin(x), the five key points at x = 0, (π) / (2), π, (3π) / (2), 2π give y = 0, 1, 0, −1, 0. Think: "zero, up, zero, down, zero" — like a hill followed by a valley. For cos(x), same x-values give y = 1, 0, −1, 0, 1. Think: "starts at the top, comes down, goes negative, comes back." The aha moment: they\'re THE SAME WAVE. cos is just sin shifted left by (π) / (2). I only needed to memorize one wave shape. On the AP, the first thing I check on any sinusoidal graph is the y-intercept — if it\'s 0, likely sine; if it\'s at the maximum, likely cosine.',

    narration: [
      'You\'ve been reading the unit circle as a table — evaluating sine and cosine at specific angles. Now do something different: imagine slowly rotating counterclockwise from angle 0 to 2π, and plotting the y-coordinate of the unit circle point as you go. That continuous trace IS the graph of y = sin(x). The x-axis of the graph represents the angle, and the y-axis represents the height of the unit circle point.',
      'As θ starts at 0, the y-coordinate is 0. As θ increases toward (π) / (2), the point climbs to (0, 1) — the very top. So the sine graph rises from 0 to 1 over [0, (π) / (2)]. From (π) / (2) to π, the y-coordinate descends back to 0 (the point swings from the top to the left side of the circle). From π to (3π) / (2), y drops to −1 (the point is at the bottom of the circle). From (3π) / (2) to 2π, y returns to 0. One full revolution produces one complete S-shaped cycle.',
      'The five key points of y = sin(x) over one cycle are: (0, 0), ((π) / (2), 1), (π, 0), ((3π) / (2), −1), (2π, 0). Memorize these. They are the starting point, maximum, midline crossing, minimum, and return to start. To sketch any sine wave, plot these five points first, then connect them with a smooth curve. The period is 2π, the amplitude is 1, and the midline is y = 0.',
      'The graph of y = cos(x) follows the same logic, but traces the x-coordinate instead of the y-coordinate. At θ = 0, x = 1 (rightmost point). At θ = (π) / (2), x = 0. At θ = π, x = −1 (leftmost). At θ = (3π) / (2), x = 0. At θ = 2π, x = 1. Five key points of y = cos(x): (0, 1), ((π) / (2), 0), (π, −1), ((3π) / (2), 0), (2π, 1). Notice that cosine starts at its maximum instead of zero.',
      'The relationship between sine and cosine is elegant: cos(x) = sin(x + (π) / (2)). Shifting the sine graph left by (π) / (2) gives the cosine graph exactly. They are the same wave — one is just a shifted version of the other. This means you only need to master one wave shape. The difference on a graph: if the function is at 0 and rising at x = 0, it\'s sine. If the function is at its maximum at x = 0, it\'s cosine.',
      'Zeros of sine occur at every multiple of π: x = 0, ±π, ±2π, ... (places where the unit circle point crosses the x-axis). Zeros of cosine occur at every odd multiple of (π) / (2): x = ±(π) / (2), ±(3π) / (2), ... (where the point crosses the y-axis). Both functions have range [−1, 1] and period 2π. Sine is an odd function (f(−x) = −f(x)), meaning it has origin symmetry. Cosine is an even function (f(−x) = f(x)), meaning it has y-axis symmetry.',
    ],

    priorKnowledge: [
      'Benchmark unit circle values from Topics 3.2–3.3 (Q1 through Q4)',
      'Vocabulary from Topic 3.1: period, amplitude, midline',
      'Coordinate plane: plotting points and reading function values from graphs',
      'Even and odd functions (symmetry across y-axis vs. origin)',
    ],

    connections: [
      'BACKWARD → Topics 3.2–3.3: the graph values are just the unit circle coordinates read off as angle increases — the graph IS the unit circle "unrolled"',
      'FORWARD → Topic 3.5: these parent graphs (sin and cos) are what get stretched, compressed, shifted, and reflected by parameters A, B, C, D',
      'FORWARD → Topic 3.6: identifying which transformation of sin or cos best models a given graph requires knowing the parent graph precisely',
      'REAL WORLD: Alternating current — household electricity varies as a sinusoidal wave at 60 Hz (60 cycles per second)',
    ],

    graphType: 'sine-wave',

    keyFormula: 'sin: zeros at nπ | max at (π) / (2)+2nπ | min at (3π) / (2)+2nπ   |   cos: zeros at (π) / (2)+nπ | max at 2nπ | min at π+2nπ',

    keyTerms: [
      { term: 'y = sin(x)', definition: 'Parent sine function. Starts at (0,0), rises to maximum 1 at x = (π) / (2), returns to 0 at π, falls to −1 at (3π) / (2), returns to 0 at 2π. Period 2π, odd function.' },
      { term: 'y = cos(x)', definition: 'Parent cosine function. Starts at maximum (0,1), descends to 0 at (π) / (2), reaches minimum −1 at π, returns to 0 at (3π) / (2), back to 1 at 2π. Period 2π, even function.' },
      { term: 'Even Function', definition: 'f(−x) = f(x) for all x. Graph has y-axis symmetry. Cosine is even: cos(−x) = cos(x).' },
      { term: 'Odd Function', definition: 'f(−x) = −f(x) for all x. Graph has origin symmetry. Sine is odd: sin(−x) = −sin(x).' },
      { term: 'Zero of a Trig Function', definition: 'An x-value where the function equals 0. For sin(x): x = nπ. For cos(x): x = (π) / (2) + nπ, for any integer n.' },
    ],

    workedExample: {
      problem: 'Identify the five key points of y = cos(x) on [0, 2π] and describe the behavior of the graph on each interval.',
      steps: [
        'Five key points at x = 0, (π) / (2), π, (3π) / (2), 2π: y = 1, 0, −1, 0, 1.',
        'On [0, (π) / (2)]: cos decreases from 1 to 0. Decreasing, concave down portion.',
        'On [(π) / (2), π]: cos decreases from 0 to −1. Still decreasing, concave up portion.',
        'On [π, (3π) / (2)]: cos increases from −1 to 0. Increasing, concave up portion.',
        'On [(3π) / (2), 2π]: cos increases from 0 to 1. Still increasing, concave down portion.',
      ],
      answer: 'Key points: (0,1), ((π) / (2), 0), (π, −1), ((3π) / (2), 0), (2π, 1). Graph descends for the first half-period [0, π], then ascends for the second half [π, 2π].',
    },

    commonMistakes: [
      'Confusing which function starts at 0 and which starts at 1. Sin starts at (0,0). Cos starts at (0,1). If you mix these up, the entire graph is wrong.',
      'Drawing the graph without anchoring the five key points first. Free-hand sine waves look wrong. Always plot (0, start), (T/4, extremum), (T/2, midline crossing), (3T/4, other extremum), (T, start) before connecting.',
      'Thinking the graphs stop at x = 2π. Both functions extend forever in both directions, repeating every 2π.',
    ],

    tip: 'To sketch sin(x): "zero, up, zero, down, zero" at x = 0, (π) / (2), π, (3π) / (2), 2π. To sketch cos(x): "one, zero, minus one, zero, one" at the same x values. Five points, smooth curve, done in 30 seconds.',

    questions: [
      {
        question_text: 'What is the y-intercept of f(x) = sin(x)?',
        difficulty: 'Easy',
        choices: ['−1', '0', '1', 'undefined'],
        answer_text: '0',
        explanation: 'sin(0) = 0. The sine function starts at the origin, so its y-intercept is 0.',
      },
      {
        question_text: 'At which x-value does f(x) = cos(x) achieve its first minimum on (0, 2π)?',
        difficulty: 'Easy',
        choices: ['(π) / (2)', 'π', '(3π) / (2)', '2π'],
        answer_text: 'π',
        explanation: 'cos(π) = −1. The cosine function reaches its minimum at x = π on the interval (0, 2π).',
      },
      {
        question_text: 'What is the period of f(x) = cos(x)?',
        difficulty: 'Easy',
        choices: ['π', '(π) / (2)', '2π', '4π'],
        answer_text: '2π',
        explanation: 'The cosine function completes one full cycle every 2π radians. Period = 2π.',
      },
      {
        question_text: 'How many times does sin(x) = 0 on the closed interval [0, 2π]?',
        difficulty: 'Easy',
        choices: ['1', '2', '3', '4'],
        answer_text: '3',
        explanation: 'sin(x) = 0 at x = 0, π, and 2π on [0, 2π]. That is three times.',
      },
      {
        question_text: 'Which is true about the relationship between f(x) = sin(x) and g(x) = cos(x)?',
        difficulty: 'Medium',
        choices: ['They have different amplitudes', 'They have different periods', 'cos(x) = sin(x + (π) / (2))', 'sin(x) = cos(x + (π) / (2))'],
        answer_text: 'cos(x) = sin(x + (π) / (2))',
        explanation: 'Shifting sin(x) left by (π) / (2) gives sin(x + (π) / (2)) = cos(x). They are the same wave with a (π) / (2) horizontal shift.',
      },
      {
        question_text: 'On the interval ((π) / (2), (3π) / (2)), what can be said about f(x) = cos(x)?',
        difficulty: 'Medium',
        choices: ['f is always positive', 'f is always negative', 'f increases throughout', 'f has no zeros'],
        answer_text: 'f is always negative',
        explanation: 'cos((π) / (2)) = 0 and cos((3π) / (2)) = 0, but on the open interval ((π) / (2), (3π) / (2)), cos passes through −1 at x = π. The function is negative throughout this open interval.',
      },
      {
        question_text: 'How many complete cycles does f(x) = sin(x) complete on the interval [0, 8π]?',
        difficulty: 'Medium',
        choices: ['2', '4', '8', '16'],
        answer_text: '4',
        explanation: 'Period = 2π. Number of cycles = length / period = (8π) / (2)π = 4 complete cycles.',
      },
      {
        question_text: 'At what x-value in [0, 2π] do sin(x) and cos(x) first intersect?',
        difficulty: 'Medium',
        choices: ['(π) / (6)', '(π) / (4)', '(π) / (3)', '(π) / (2)'],
        answer_text: '(π) / (4)',
        explanation: 'sin(x) = cos(x) when tan(x) = 1, which first occurs at x = (π) / (4) in [0, 2π]. Both equal (√2) / (2) at x = (π) / (4).',
      },
      {
        question_text: 'A function f satisfies f(x) = sin(x). Which of the following correctly uses the odd function property?',
        difficulty: 'Hard',
        choices: ['sin(−(π) / (3)) = sin((π) / (3))', 'sin(−(π) / (3)) = −sin((π) / (3))', 'sin(−(π) / (3)) = cos((π) / (3))', 'sin(−(π) / (3)) = (1) / (sin)((π) / (3))'],
        answer_text: 'sin(−(π) / (3)) = −sin((π) / (3))',
        explanation: 'Sine is an odd function: sin(−x) = −sin(x). Therefore sin(−(π) / (3)) = −sin((π) / (3)) = −(√3) / (2).',
      },
      {
        question_text: 'The function f(x) = cos(x) is even. What does this mean for the value of cos(−(5π) / (6))?',
        difficulty: 'Hard',
        choices: ['cos(−(5π) / (6)) = cos((5π) / (6)) = −(√3) / (2)', 'cos(−(5π) / (6)) = −cos((5π) / (6)) = (√3) / (2)', 'cos(−(5π) / (6)) = sin((5π) / (6)) = (1) / (2)', 'cos(−(5π) / (6)) = 0'],
        answer_text: 'cos(−(5π) / (6)) = cos((5π) / (6)) = −(√3) / (2)',
        explanation: 'Cosine is even: cos(−x) = cos(x). So cos(−(5π) / (6)) = cos((5π) / (6)). Now (5π) / (6) is in Q2 with reference angle (π) / (6), and cosine is negative in Q2. cos((5π) / (6)) = −(√3) / (2).',
      },
    ],
  },

  '3.5': {
    essentialQuestion: 'What do A, B, C, and D each control in f(x) = A·sin(B(x−C)) + D — and why does misreading B cause a phase-shift error every time?',

    apBoardNote: 'CED Topic 3.5A–3.5B (Sinusoidal Function Parameters). Core AP topic — appears in nearly every released exam. Section I tests reading parameters from an equation; Section II asks students to write a sinusoidal equation from graph features or real-world context, and to identify sinusoidal modeling FRQs (a full 9-point free-response question in some years). The #1 scoring error: reading the phase shift directly from Bx + C as C instead of factoring to get C/B. Write functions in factored form f(x) = A·sin(B(x − C)) + D to avoid this error consistently. Graders award individual points for each correctly computed parameter.',

    teacherNote: 'Students need the parent graphs from 3.4. The most damaging error cluster: (1) treating B as the period rather than computing 2π/|B|; (2) reading phase shift as C in A·sin(Bx + C) + D without dividing by B; (3) treating amplitude as the signed value A rather than |A|. Address the phase-shift error head-on with a worked example showing both forms: sin(2x − π) = sin(2(x − (π) / (2))) — the phase shift is (π) / (2) not π. Require students to factor out B before reading phase shift on every problem. Connect to 3.4 (parent graphs being transformed) and 3.7 (this parameter framework is what you use to model real-world data).',

    studentVoice: 'Four parameters, four controls: A = amplitude (always take |A|; negative A flips the wave). B = period controller: period = 2π/|B|, NEVER just B. C = phase shift in FACTORED form: write sin(B(x−C)) and C is what you read. D = midline shift. The thing that burned me on my first practice test: I saw sin(2x − π) and wrote "phase shift = π." WRONG. Factor first: sin(2(x − (π) / (2))). Phase shift = (π) / (2). You MUST divide by B. Now I always rewrite the function in factored form before reading C.',

    narration: [
      'The parent sine and cosine functions from Topic 3.4 are just the starting point. In the real world, periodic phenomena have all kinds of amplitudes, periods, and offsets. Ocean tides don\'t all have amplitude 1 or period 2π. A Ferris wheel might complete one revolution in 3 minutes, not 2π minutes. Monthly temperature might oscillate around 60°F, not 0°F. We need a way to stretch, compress, shift, and slide the parent wave to fit any real situation.',
      'The general sinusoidal function is f(x) = A · sin(B(x − C)) + D. Each of the four parameters does exactly one job. |A| is the amplitude — how tall the wave swings above and below the midline. B controls the period: period = 2π/|B|. C is the phase shift — how far the wave is shifted horizontally. D is the vertical shift — where the midline sits. Recognize that D is also the output value the function oscillates around, so D = midline.',
      'Let\'s build intuition for each parameter separately. |A|: multiplying by 2 doubles the wave\'s height. If A = −3, the amplitude is 3 but the wave is flipped — it starts at a minimum instead of a maximum. The range of the function is [D − |A|, D + |A|], not [−1, 1]. A common trap: using A as the maximum value, when the maximum is actually D + |A|.',
      'B and the period have an inverse relationship: bigger B means shorter period (faster cycling), smaller B means longer period (slower cycling). Period = 2π ÷ |B|. If B = 2, period = π. If B = (1) / (2), period = 4π. To find B from a given period: B = 2π ÷ period. This inverse relationship trips up students who expect "bigger B = bigger period" — it is exactly backwards.',
      'Phase shift C is the most error-prone parameter, and it requires you to write the function in factored form. The standard form A·sin(Bx + C) + D hides the phase shift. Factored form A·sin(B(x − C)) + D reveals it directly: the wave is shifted C units to the RIGHT (if C > 0) or LEFT (if C < 0). To convert: A·sin(Bx + K) + D = A·sin(B(x + K/B)) + D, so the phase shift is −K/B. Example: 3·sin(2x − π) + 1. Factor: 3·sin(2(x − (π) / (2))) + 1. Phase shift = (π) / (2) to the right. The unfactored form makes it look like π — that is the classic mistake.',
      'D simply shifts the entire graph up or down. The midline moves from y = 0 to y = D. Every point on the wave goes up by D. The maximum becomes D + |A| and the minimum becomes D − |A|. In context: if a tide oscillates with midline at 5 feet and amplitude 4, then D = 5 and |A| = 4, making max = 9 ft and min = 1 ft. Reading D from a graph: it is the y-value halfway between the maximum and minimum (the midline formula from Topic 3.1).',
    ],

    priorKnowledge: [
      'Parent graphs of sin(x) and cos(x) and their five key points — Topic 3.4',
      'Period, amplitude, and midline from Topic 3.1',
      'Factoring out a coefficient from a linear expression: 2x − π = 2(x − (π) / (2))',
      'Function transformations: vertical stretch/shift, horizontal shift',
    ],

    connections: [
      'BACKWARD → Topic 3.1: amplitude = |A|, midline = D, period = 2π/|B| are the same three descriptors from periodic phenomena',
      'BACKWARD → Topic 3.4: parent graphs are the starting point; A, B, C, D transform them',
      'FORWARD → Topic 3.6: understanding each parameter is prerequisite for predicting what a transformation does to the graph',
      'FORWARD → Topic 3.7: sinusoidal modeling means working backwards — extracting A, B, C, D from real-world data',
      'REAL WORLD: Sound engineering — amplitude controls volume, B controls pitch frequency, D controls the DC offset of a waveform',
    ],

    graphType: 'sinusoidal',

    keyFormula: 'f(x) = A·sin(B(x − C)) + D   |   |A| = amplitude   |   period = 2π/|B|   |   phase shift = C (right if C>0)   |   midline: y = D',

    keyTerms: [
      { term: 'Amplitude |A|', definition: 'Half the total vertical range of the function. Always positive. The wave swings |A| units above and below the midline.' },
      { term: 'Period (2π/|B|)', definition: 'The horizontal length of one complete cycle. Larger |B| → shorter period. To find B: B = 2π ÷ period.' },
      { term: 'Phase Shift (C)', definition: 'The horizontal offset in factored form A·sin(B(x−C))+D. Positive C shifts right, negative C shifts left. MUST factor out B first.' },
      { term: 'Midline (y = D)', definition: 'The horizontal line the function oscillates around. The vertical shift applied to the parent graph. D = (max + min)/2.' },
      { term: 'Reflection (A < 0)', definition: 'When A is negative, the wave is flipped over the midline — peaks become troughs. Amplitude is still |A|, not negative.' },
    ],

    workedExample: {
      problem: 'For f(x) = 3·sin(2x − π) + 1, find the amplitude, period, phase shift, and midline. State the range.',
      steps: [
        'Factor out B from the argument: 2x − π = 2(x − (π) / (2)). So f(x) = 3·sin(2(x − (π) / (2))) + 1.',
        'Amplitude = |A| = |3| = 3.',
        'Period = 2π / |B| = (2π) / (2) = π.',
        'Phase shift = C = (π) / (2) to the right.',
        'Midline: y = D = 1.',
        'Range = [D − |A|, D + |A|] = [1 − 3, 1 + 3] = [−2, 4].',
      ],
      answer: 'Amplitude = 3, Period = π, Phase shift = (π) / (2) right, Midline: y = 1, Range: [−2, 4].',
    },

    workedExample2: {
      problem: 'A sinusoidal function has amplitude 4, period 6π, phase shift (π) / (3) to the left, and midline y = −2. Write the function using sine.',
      steps: [
        'Amplitude: |A| = 4, and no reflection mentioned, so A = 4.',
        'Period = 6π → B = (2π) / (6)π = (1) / (3).',
        'Phase shift (π) / (3) to the LEFT means C = −(π) / (3) (negative means left).',
        'Midline y = −2 → D = −2.',
        'In factored form: f(x) = 4·sin((1/3)(x − (−(π) / (3)))) − 2 = 4·sin((1/3)(x + (π) / (3))) − 2.',
        'Verify: expanding gives f(x) = 4·sin(x/3 + (π) / (9)) − 2.',
      ],
      answer: 'f(x) = 4·sin((1/3)(x + (π) / (3))) − 2, or equivalently 4·sin(x/3 + (π) / (9)) − 2.',
    },

    commonMistakes: [
      'Reading phase shift as C from Bx + C without dividing by B. In sin(2x − π), the phase shift is (π) / (2) (not π). Always factor out B first: sin(2(x − (π) / (2))).',
      'Using B as the period instead of computing 2π/|B|. If B = 3, the period is (2π) / (3), not 3.',
      'Treating A as the maximum value. The maximum is D + |A|. If A = 3 and D = 5, the max is 8, not 3.',
    ],

    tip: 'Before doing anything, always rewrite the function in fully factored form: f(x) = A·sin(B(x − C)) + D. Factor out B from the argument. Then A, B, C, D are immediately readable without computation errors.',

    questions: [
      {
        question_text: 'What is the amplitude of f(x) = −7·cos(x) + 2?',
        difficulty: 'Easy',
        choices: ['−7', '2', '7', '9'],
        answer_text: '7',
        explanation: 'Amplitude = |A| = |−7| = 7. The negative sign means the graph is reflected, but amplitude is always the absolute value.',
      },
      {
        question_text: 'What is the period of f(x) = sin(3x)?',
        difficulty: 'Easy',
        choices: ['3', '3π', '(2π) / (3)', '6π'],
        answer_text: '(2π) / (3)',
        explanation: 'B = 3. Period = 2π / |B| = (2π) / (3).',
      },
      {
        question_text: 'What is the midline of f(x) = 5·sin(x) − 4?',
        difficulty: 'Easy',
        choices: ['y = −4', 'y = 0', 'y = 1', 'y = 5'],
        answer_text: 'y = −4',
        explanation: 'D = −4. The midline is y = D = −4.',
      },
      {
        question_text: 'For f(x) = 2·sin(x − (π) / (3)) + 1, what is the phase shift?',
        difficulty: 'Easy',
        choices: ['(π) / (3) to the left', '(π) / (3) to the right', '(π) / (6) to the right', 'No phase shift'],
        answer_text: '(π) / (3) to the right',
        explanation: 'The function is already in factored form f(x) = 2·sin(1·(x − (π) / (3))) + 1. C = (π) / (3), so the phase shift is (π) / (3) to the right.',
      },
      {
        question_text: 'For g(x) = 4·sin(2x − π) + 3, what is the phase shift? (Be careful — factor first.)',
        difficulty: 'Medium',
        choices: ['π to the right', 'π to the left', '(π) / (2) to the right', '(π) / (2) to the left'],
        answer_text: '(π) / (2) to the right',
        explanation: 'Factor out B = 2: 2x − π = 2(x − (π) / (2)). So g(x) = 4·sin(2(x − (π) / (2))) + 3. Phase shift = (π) / (2) to the right. Reading "−π" directly without factoring gives the wrong answer π.',
      },
      {
        question_text: 'A sinusoidal function has amplitude 3, period 4π, and midline y = 2. Which equation matches?',
        difficulty: 'Medium',
        choices: ['f(x) = 3·sin(4πx) + 2', 'f(x) = 3·sin(2x) + 2', 'f(x) = 3·sin(x/2) + 2', 'f(x) = 3·sin(4x) + 2'],
        answer_text: 'f(x) = 3·sin(x/2) + 2',
        explanation: 'A = 3, D = 2. Period = 4π → B = 2π/(4π) = (1) / (2). So the function is 3·sin((1/2)x) + 2 = 3·sin(x/2) + 2.',
      },
      {
        question_text: 'What is the range of f(x) = −2·sin(3x − π) + 5?',
        difficulty: 'Medium',
        choices: ['[3, 7]', '[−2, 2]', '[5, 7]', '[2, 8]'],
        answer_text: '[3, 7]',
        explanation: 'Amplitude = |A| = 2. Midline = D = 5. Range = [D − |A|, D + |A|] = [5 − 2, 5 + 2] = [3, 7].',
      },
      {
        question_text: 'What is the period of h(x) = cos(πx/3) + 1?',
        difficulty: 'Medium',
        choices: ['3', '6', '(2π) / (3)', '(π) / (3)'],
        answer_text: '6',
        explanation: 'B = (π) / (3). Period = 2π / ((π) / (3)) = 2π × (3/π) = 6.',
      },
      {
        question_text: 'A function f(x) = A·sin(Bx + C) + D has phase shift (π) / (4) to the right and B = 2. What is C?',
        difficulty: 'Hard',
        choices: ['C = (π) / (4)', 'C = (π) / (2)', 'C = −(π) / (2)', 'C = −(π) / (4)'],
        answer_text: 'C = −(π) / (2)',
        explanation: 'Phase shift = −C/B. (π) / (4) to the right means phase shift = +(π) / (4). So −C/2 = (π) / (4) → C = −(π) / (2).',
      },
      {
        question_text: 'A sinusoidal function has maximum value 11 and minimum value 3, period 8, and the maximum first occurs at x = 2. Write the function using cosine.',
        difficulty: 'Hard',
        choices: ['f(x) = 4·cos((π) / (4) · (x−2)) + 7', 'f(x) = 8·cos((π) / (4) · x) + 3', 'f(x) = 4·cos((π) / (8) · (x−2)) + 7', 'f(x) = 4·cos((π) / (4) · x) + 7'],
        answer_text: 'f(x) = 4·cos((π) / (4) · (x−2)) + 7',
        explanation: 'A = (11−3)/2 = 4. D = (11+3)/2 = 7. Period = 8 → B = (2π) / (8) = (π) / (4). Cosine is at its max when argument = 0, so (π) / (4) · (x−2) = 0 at x = 2 ✓. f(x) = 4·cos((π) / (4)·(x−2)) + 7.',
      },
    ],
  },

  '3.6': {
    essentialQuestion: 'Given a graph of a sinusoidal function, how do you extract A, B, C, and D from what you see — and then verify your equation by checking a known point?',

    apBoardNote: 'CED Topic 3.6A–3.6B (Sinusoidal Transformations). Section I tests predicting how a parameter change affects the graph; Section II asks students to sketch a transformed sinusoidal function with key points labeled, or to write the equation from a described or given graph. Sinusoidal modeling FRQs (see Topic 3.7) require this skill as part (a). Graders specifically check: (1) all four parameters correctly identified from graph features, (2) five key points correctly computed for the transformed graph, (3) phase shift correctly computed as −C/B (not just −C). One of the highest-frequency error types on scored FRQs.',

    teacherNote: 'Students need Topics 3.4 (parent graphs) and 3.5 (parameters). The subtlest and most persistent error: computing phase shift in the unfactored form A·sin(Bx + C) + D as just −C, without dividing by B. This produces a phase shift error by a factor of B. In f(x) = 3·sin(2x − π), C = −π and B = 2, so the phase shift is −(−π)/2 = (π) / (2), not π. Require factored form on every problem. A second practical issue: when reading phase shift from a graph, students often measure from x = 0 instead of measuring from where the cycle "should" start for the parent function. Teach the specific method: for sine, find the first upward midline crossing; for cosine, find the first maximum.',

    studentVoice: 'Reading a sinusoidal graph is a four-step process I do in order. Step 1: find max and min → A = (max−min)/2, D = (max+min)/2. Step 2: find the period (peak to next peak) → B = 2π/period. Step 3: find the phase shift — for cosine, where does the FIRST maximum occur? That x-value is C. For sine, where does the function cross the midline going UPWARD? That x-value is C. Step 4: verify by plugging one known point back into your equation. If it checks out, you\'re done. If not, check your signs.',

    narration: [
      'In Topic 3.5 you learned to extract parameters FROM a formula. Now we go the other direction: from a graph, extract the parameters and write the formula. This is the skill that enables sinusoidal modeling in Topic 3.7, and it\'s guaranteed to appear on the AP exam. The good news is that it\'s systematic — the same four steps work for any sinusoidal graph.',
      'Step 1: amplitude and midline. Find the maximum and minimum values on the graph. Then A = (max − min) / 2 and D = (max + min) / 2. These two calculations give you the vertical parameters immediately, without needing to know anything about the phase or period.',
      'Step 2: period and B. Find the x-coordinates of two consecutive maxima (or any two equivalent points one cycle apart). Period = x_2 − x_1. Then B = 2π / period. If the period is 4, then B = (π) / (2). If the period is 12, then B = (π) / (6). If you can only see part of a cycle, you can use half the period (distance from max to next min, doubled) to get the full period.',
      'Step 3: phase shift C. This is where the choice of sine vs. cosine matters. For a cosine model: identify the x-coordinate of the FIRST maximum — call it x_max. The phase shift C = x_max. For a sine model: identify the x-coordinate of the first upward midline crossing — call it x_mid. The phase shift C = x_mid. Then write the function in factored form: A·cos(B(x − C)) + D or A·sin(B(x − C)) + D.',
      'Step 4: verification. Plug one of the labeled data points back into your equation and check that the output matches. This takes 30 seconds and catches sign errors immediately. If f(3) = 10 should be your maximum and your equation gives f(3) = 4, you have a parameter error. Check A, D, then C in that order — amplitude and midline errors are easier to spot first.',
      'Two special cases: when A is negative, the wave is reflected — it starts at a minimum instead of a maximum (for cosine) or goes down before up (for sine). When you see this on the AP, use A = −|A| and write it explicitly. Second: when the period is expressed in different units (months, degrees, etc.), B has units too — B = 2π/period where period is in the same units as x.',
    ],

    priorKnowledge: [
      'f(x) = A·sin(B(x−C)) + D in factored form — Topic 3.5',
      'How to compute A, B, C, D given the four features — Topic 3.5',
      'The five key points for parent sin and cos — Topic 3.4',
      'Midline and amplitude formulas from Topic 3.1',
    ],

    connections: [
      'BACKWARD → Topic 3.5: same four parameters A, B, C, D — now reading them from graphs rather than equations',
      'FORWARD → Topic 3.7: this graph-reading process is exactly what you apply to a scatter plot of real-world data to build a model',
      'FORWARD → Topic 3.11 (Unit 3B): more complex sinusoidal modeling scenarios use the same parameter-reading framework',
      'REAL WORLD: Seismology — reading earthquake waveforms requires identifying period, amplitude, and phase from recorded graphs',
    ],

    graphType: 'sinusoidal',

    keyFormula: 'From graph: A = (max−min)/2, D = (max+min)/2, B = 2π/period, C = x-coord of first max (cosine) or first upward midline crossing (sine)',

    keyTerms: [
      { term: 'Reading Amplitude', definition: 'From a graph: A = (max − min) ÷ 2. The vertical distance from midline to peak.' },
      { term: 'Reading Period', definition: 'From a graph: measure horizontal distance from one peak to the next peak (or any equivalent pair of points). Then B = 2π ÷ period.' },
      { term: 'Reading Phase Shift (Cosine)', definition: 'Find the x-coordinate of the first maximum. That is C in f(x) = A·cos(B(x − C)) + D.' },
      { term: 'Reading Phase Shift (Sine)', definition: 'Find the x-coordinate of the first upward midline crossing. That is C in f(x) = A·sin(B(x − C)) + D.' },
      { term: 'Verification Step', definition: 'After writing the equation, substitute a known (x, y) pair from the graph to confirm the equation is correct.' },
    ],

    workedExample: {
      problem: 'A sinusoidal function has maximum 9 at x = 1, minimum 1 at x = 5, and the pattern repeats. Write an equation using cosine.',
      steps: [
        'A = (max − min)/2 = (9 − 1)/2 = 4.',
        'D = (max + min)/2 = (9 + 1)/2 = 5.',
        'Half-period = distance from max to next min = 5 − 1 = 4. Period = 2 × 4 = 8.',
        'B = 2π/period = (2π) / (8) = (π) / (4).',
        'Phase shift: first maximum is at x = 1, so C = 1.',
        'f(x) = 4·cos((π) / (4) · (x − 1)) + 5.',
        'Verify: f(1) = 4·cos(0) + 5 = 4(1) + 5 = 9 ✓. f(5) = 4·cos((π) / (4) · 4) + 5 = 4·cos(π) + 5 = 4(−1) + 5 = 1 ✓.',
      ],
      answer: 'f(x) = 4·cos((π) / (4) · (x − 1)) + 5.',
    },

    workedExample2: {
      problem: 'The graph of g(x) = A·sin(B(x − C)) + D has its first upward midline crossing at x = 3, a maximum of 7, a minimum of −1, and a period of 12. Write the equation.',
      steps: [
        'A = (7 − (−1))/2 = (8) / (2) = 4.',
        'D = (7 + (−1))/2 = (6) / (2) = 3.',
        'Period = 12 → B = (2π) / (12) = (π) / (6).',
        'First upward midline crossing at x = 3 → C = 3 (sine phase shift).',
        'g(x) = 4·sin((π) / (6) · (x − 3)) + 3.',
        'Verify: g(3) = 4·sin(0) + 3 = 3 ✓ (midline crossing). g(3 + 12/4) = g(6) = 4·sin((π) / (6) · 3) + 3 = 4·sin((π) / (2)) + 3 = 4 + 3 = 7 ✓ (max).',
      ],
      answer: 'g(x) = 4·sin((π) / (6) · (x − 3)) + 3.',
    },

    table: {
      caption: 'Four-parameter extraction from a sinusoidal graph',
      headers: ['Parameter', 'How to Find from Graph', 'Formula'],
      rows: [
        ['A (amplitude)', 'Half the distance from max to min', '(max − min) / 2'],
        ['D (midline)', 'Halfway between max and min', '(max + min) / 2'],
        ['B (from period)', 'Distance from peak to next peak', 'B = 2π ÷ period'],
        ['C — cosine', 'x-coordinate of first maximum', 'C = x_max'],
        ['C — sine', 'x-coordinate of first upward midline crossing', 'C = x_midline_up'],
      ],
    },

    commonMistakes: [
      'Computing phase shift as −C/B in the unfactored form and getting wrong sign or magnitude. Always use factored form f(x) = A·sin(B(x−C)) + D and read C directly.',
      'Using half the period when measuring from max to min. Max to min is half the period. Double it to get the full period before computing B.',
      'Skipping the verification step and submitting a wrong equation. Plugging in one known point takes 30 seconds and catches most errors.',
    ],

    tip: 'On any AP problem asking you to write a sinusoidal equation from a graph, go in order: A → D → period → B → C → verify. Never skip verification — it\'s fast and it will save you partial credit.',

    questions: [
      {
        question_text: 'A sinusoidal function has maximum 12 and minimum 4. What is the amplitude?',
        difficulty: 'Easy',
        choices: ['2', '4', '8', '16'],
        answer_text: '4',
        explanation: 'A = (max − min)/2 = (12 − 4)/2 = (8) / (2) = 4.',
      },
      {
        question_text: 'A sinusoidal function has maximum 12 and minimum 4. What is the midline?',
        difficulty: 'Easy',
        choices: ['y = 4', 'y = 8', 'y = 12', 'y = 6'],
        answer_text: 'y = 8',
        explanation: 'D = (max + min)/2 = (12 + 4)/2 = (16) / (2) = 8.',
      },
      {
        question_text: 'A sinusoidal function has consecutive maxima at x = 2 and x = 10. What is B?',
        difficulty: 'Easy',
        choices: ['(π) / (4)', '(π) / (8)', '(π) / (2)', '8'],
        answer_text: '(π) / (4)',
        explanation: 'Period = 10 − 2 = 8. B = 2π/period = (2π) / (8) = (π) / (4).',
      },
      {
        question_text: 'A cosine model has its first maximum at x = 3. In the factored form f(x) = A·cos(B(x − C)) + D, what is C?',
        difficulty: 'Easy',
        choices: ['C = −3', 'C = 0', 'C = 3', 'C = B·3'],
        answer_text: 'C = 3',
        explanation: 'For cosine, the phase shift C is the x-coordinate of the first maximum. The maximum is at x = 3, so C = 3.',
      },
      {
        question_text: 'A sinusoidal function has maximum 10 at x = (π) / (4), minimum −2. Its period is π. Write the cosine equation.',
        difficulty: 'Medium',
        choices: ['6·cos(2(x − (π) / (4))) + 4', '6·cos(π(x − (π) / (4))) + 4', '12·cos(2(x − (π) / (4))) + 4', '6·cos(2x) + 4'],
        answer_text: '6·cos(2(x − (π) / (4))) + 4',
        explanation: 'A = (10−(−2))/2 = 6. D = (10+(−2))/2 = 4. Period = π → B = 2π/π = 2. First max at x = (π) / (4) → C = (π) / (4). f(x) = 6·cos(2(x − (π) / (4))) + 4.',
      },
      {
        question_text: 'A function g(x) = A·sin(B(x−C)) + D has first upward midline crossing at x = 1, max of 5, min of −3, period of 8. What is g(5)?',
        difficulty: 'Medium',
        choices: ['−3', '0', '1', '5'],
        answer_text: '1',
        explanation: 'A = (5−(−3))/2 = 4. D = (5+(−3))/2 = 1. B = (2π) / (8) = (π) / (4). C = 1. g(x) = 4·sin((π) / (4)·(x−1)) + 1. g(5) = 4·sin((π) / (4)·4) + 1 = 4·sin(π) + 1 = 4(0) + 1 = 1 (midline).',
      },
      {
        question_text: 'Compared to f(x) = sin(x), the graph of g(x) = sin(x/3) is:',
        difficulty: 'Medium',
        choices: ['compressed horizontally, period (π) / (3)', 'stretched horizontally, period 6π', 'shifted right by 3', 'shifted up by 3'],
        answer_text: 'stretched horizontally, period 6π',
        explanation: 'B = (1) / (3). Period = 2π/(1/3) = 6π. The period tripled, so the graph is stretched horizontally (slower cycling).',
      },
      {
        question_text: 'The graph of h(x) = −3·cos(x) + 2 compared to f(x) = cos(x) has been:',
        difficulty: 'Medium',
        choices: ['amplitude tripled, shifted up 2', 'amplitude tripled, reflected, shifted up 2', 'period tripled, shifted up 2', 'amplitude tripled, shifted right 2'],
        answer_text: 'amplitude tripled, reflected, shifted up 2',
        explanation: 'A = −3: amplitude |−3| = 3 (tripled) and reflected (A negative). D = 2: shifted up 2. Period unchanged (B = 1).',
      },
      {
        question_text: 'A sinusoidal function has maximum 7 at x = 1 and minimum 1 at x = 4. Which equation fits using cosine?',
        difficulty: 'Hard',
        choices: ['3·cos((π) / (3)·(x−1)) + 4', '4·cos((π) / (3)·(x−1)) + 3', '3·cos((2π) / (3)·(x−1)) + 4', '4·cos((2π) / (3)·(x−1)) + 3'],
        answer_text: '3·cos((π) / (3)·(x−1)) + 4',
        explanation: 'A = (7−1)/2 = 3. D = (7+1)/2 = 4. Half-period = 4−1 = 3, full period = 6. B = (2π) / (6) = (π) / (3). First max at x = 1 → C = 1. f(x) = 3·cos((π) / (3)·(x−1)) + 4. Check: f(1) = 3(1)+4 = 7 ✓. f(4) = 3·cos(π) + 4 = −3+4 = 1 ✓.',
      },
      {
        question_text: 'A function is described as f(x) = 5·sin(B(x − 2)) + 3 with period 4π. What is f(2 + π)?',
        difficulty: 'Hard',
        choices: ['3', '8', '−2', '5'],
        answer_text: '8',
        explanation: 'Period = 4π → B = 2π/(4π) = (1) / (2). f(x) = 5·sin((1/2)(x−2)) + 3. f(2 + π) = 5·sin((1/2)(π)) + 3 = 5·sin((π) / (2)) + 3 = 5(1) + 3 = 8. This is the maximum.',
      },
    ],
  },

  '3.7': {
    essentialQuestion: 'How do you build a sinusoidal equation from real-world data — and how do you interpret each parameter in the context of the problem?',

    apBoardNote: 'CED Topic 3.7A–3.7B (Sinusoidal Context and Data Modeling). Very high priority — frequently a full standalone free-response question worth 9 points. Standard FRQ format: real-world scenario (tides, temperature, Ferris wheel, daylight hours) followed by (a) compute A, B, C, D from data, (b) write the sinusoidal model, (c) use the model to predict a value, (d) interpret a parameter in context. Each step is scored separately. Interpretation point: "A = 28 represents the amplitude of 28°F, meaning temperatures oscillate 28°F above and below the annual average" earns credit; a bare "A = 28" does not. Always interpret in context with units.',

    teacherNote: 'Students need parameter identification from 3.5–3.6. The consistently hardest step for students is finding C (phase shift) — they can compute A, B, D from the table but struggle to identify the horizontal offset. Teach two strategies explicitly: (1) for cosine models, identify where the maximum occurs and use that as C; (2) for sine models, identify the first upward midline crossing. Cosine is usually easier when the maximum occurs at a recognizable time (e.g., July for temperature, 3 AM for tides). Require a verification step (plugging in a known data point) on every modeling problem. Connect to Topics 3.5–3.6 (parameter framework) and Unit 2 modeling lessons (2.5–2.6) as a structural parallel.',

    studentVoice: 'Sinusoidal modeling is a four-step recipe that works every time. Step 1: A = (max−min)/2 and D = (max+min)/2 — these come straight from the data, no trig yet. Step 2: find the period in the context (annual = 12 months, tidal ≈ 12.4 hours, etc.) and compute B = 2π/period. Step 3: choose cosine (easier) and find where the MAX occurs — that\'s C. Step 4: verify by plugging a known data point into your model. If it checks out, done. If not, check your C. This recipe solves every tide problem, every temperature problem, every Ferris wheel problem on the AP.',

    narration: [
      'Every sinusoidal model problem you will see on the AP exam has the same underlying structure. There is a real-world phenomenon that repeats — tides, temperature, daylight hours, a Ferris wheel\'s height — and you are given data about it. Your job is to extract the four parameters and write an equation. Once you have the equation, you can predict values anywhere in time and answer interpretation questions about what each parameter means in context.',
      'The canonical AP setup gives you a table of values: either discrete data points (monthly temperatures, hourly tides) or a description of the key features (maximum height 14 ft at t = 3 hr, minimum height 2 ft). In either case, the first move is always the same: find the maximum and minimum values. From there, A = (max − min)/2 and D = (max + min)/2. These two numbers come entirely from arithmetic — no trig required.',
      'For the period, read the context carefully. Monthly temperature data repeats yearly, so the period is 12 months and B = (2π) / (12) = (π) / (6). Ocean tides repeat approximately every 12.4 hours. A Ferris wheel that completes a full rotation in 3 minutes has period 3 minutes and B = (2π) / (3). The period is usually stated or obvious from context — it is the time for one complete cycle. Memorize B = (π) / (6) for monthly data — it comes up constantly.',
      'Finding C (the phase shift) is the step that separates strong AP scorers from average ones. The easiest approach: use a cosine model. Cosine reaches its maximum at the start of a cycle, so the phase shift C is simply the time at which the maximum first occurs. If the highest temperature is in July (month 7), then C = 7 and the model is A·cos((π) / (6) · (t − 7)) + D. If you use sine instead, find the first time the function crosses the midline going upward — for temperature, that would be around April (month 4 for a spring rise), giving C = 4.',
      'The three canonical AP contexts you must know cold. First: ocean tides. h(t) = A·cos(B(t − C)) + D, where A is the tidal range/2, D is the mean water level, B = (2π) / (12).4 ≈ (π) / (6).2 (12.4-hour tidal period), and C is the time of the first high tide. Second: monthly temperature. T(m) = A·sin((π) / (6) · (m − C)) + D, where m is the month number (Jan=1, Dec=12), A is the temperature swing, D is the annual mean, and C is the month of the spring midline crossing (typically around April, m=4). Third: Ferris wheel. h(t) = −r·cos(2πt/T) + r + h_min, where r is the radius, T is the rotation period, and using −cosine means you start at the bottom.',
      'Interpretation is as important as computation on the AP FRQ. When the grader asks "what does D represent in this context?", you need to say something like "D = 60°F represents the annual mean temperature of the city" — not just "D = 60." Attach units and a physical meaning to every parameter. Amplitude A means "the temperature fluctuates 28°F above and below the annual average." Period T/B means "the temperature pattern repeats every 12 months (one year)." Phase shift C means "the minimum temperature occurs in January (month 1)." Context-grounded interpretation earns the interpretation points.',
      'After writing your model, always verify it using a known data point. If July temperature is 88°F and your model gives f(7) = 88, you are correct. If it gives 73, recheck your phase shift — that is almost always the error source. Plug in at least one maximum and one minimum to confirm both the amplitude and the phase are correct.',
    ],

    priorKnowledge: [
      'Writing sinusoidal equations from parameters — Topic 3.5',
      'Reading parameters from a graph — Topic 3.6',
      'Period, amplitude, midline from Topic 3.1',
      'Basic function evaluation and substitution',
    ],

    connections: [
      'BACKWARD → Topics 3.5–3.6: the four-parameter framework is applied directly to real data',
      'BACKWARD → Topic 3.1: amplitude = (max−min)/2 and midline = (max+min)/2 are the same formulas from the very first lesson',
      'FORWARD → Topic 3.11 (Unit 3B): extended sinusoidal modeling with more complex contexts and equation-solving',
      'REAL WORLD: Climate science — NOAA uses sinusoidal models to describe seasonal temperature cycles and detect anomalies',
      'REAL WORLD: Marine navigation — tide prediction tables are computed from sinusoidal models with multiple overlapping periods',
    ],

    graphType: 'scatter',

    keyFormula: 'A = (max−min)/2 | D = (max+min)/2 | B = 2π/period | Cosine model: f(x) = A·cos(B(x−C))+D where C = x of first max',

    keyTerms: [
      { term: 'Sinusoidal Model', definition: 'A function of the form A·sin(B(x−C))+D or A·cos(B(x−C))+D fitted to real periodic data to capture the pattern and make predictions.' },
      { term: 'Parameter Interpretation', definition: 'Stating the meaning of A, B, C, D in the real-world context, with units. Required for full credit on AP FRQs.' },
      { term: 'Interpolation', definition: 'Using a model to estimate values within the observed data range. Generally reliable.' },
      { term: 'Extrapolation', definition: 'Using a model to predict values outside the observed data range. Less reliable — real-world patterns can change.' },
      { term: 'Model Verification', definition: 'Substituting a known (t, y) data point into the model equation to confirm it produces the correct output. Always do this step.' },
    ],

    workedExample: {
      problem: 'Monthly average temperatures (°F) in a city: Jan=32, Apr=58, Jul=88, Oct=60, Dec=36. Find a sinusoidal model f(t) = A·cos(B(t − C)) + D, where t is month number (Jan=1).',
      steps: [
        'From data: max ≈ 88°F (July, t=7), min ≈ 32°F (January, t=1).',
        'A = (88 − 32)/2 = (56) / (2) = 28.',
        'D = (88 + 32)/2 = (120) / (2) = 60.',
        'Period = 12 months (annual pattern) → B = (2π) / (12) = (π) / (6).',
        'Maximum occurs at t = 7 (July) → C = 7.',
        'Model: f(t) = 28·cos((π) / (6) · (t − 7)) + 60.',
        'Verify: f(7) = 28·cos(0) + 60 = 28 + 60 = 88 ✓. f(1) = 28·cos((π) / (6)·(−6)) + 60 = 28·cos(−π) + 60 = −28 + 60 = 32 ✓.',
      ],
      answer: 'f(t) = 28·cos((π) / (6) · (t − 7)) + 60.',
    },

    workedExample2: {
      problem: 'Ocean tides at a harbor reach a high of 14 ft at t = 3 hours and a low of 2 ft at t = 9.2 hours. Write a cosine model and use it to find the tide height at t = 6 hours.',
      steps: [
        'A = (14 − 2)/2 = 6. D = (14 + 2)/2 = 8.',
        'Half-period = 9.2 − 3 = 6.2 hr → period = 12.4 hr → B = (2π) / (12).4 = (π) / (6).2.',
        'First high tide at t = 3 → C = 3.',
        'Model: h(t) = 6·cos((π) / (6).2 · (t − 3)) + 8.',
        'h(6) = 6·cos((π) / (6).2 · 3) + 8 = 6·cos((3π) / (6).2) + 8.',
        '(3π) / (6).2 ≈ 1.519 radians. cos(1.519) ≈ 0.052.',
        'h(6) ≈ 6(0.052) + 8 ≈ 0.31 + 8 ≈ 8.3 ft.',
      ],
      answer: 'h(t) = 6·cos((π) / (6).2 · (t − 3)) + 8. At t = 6: h(6) ≈ 8.3 ft (near midline, between high and low tide).',
    },

    table: {
      caption: 'Monthly average temperatures (°F) — sample city',
      headers: ['Month', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      rows: [
        ['Month #', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
        ['Temp (°F)', '32', '35', '45', '58', '70', '80', '88', '85', '74', '60', '46', '36'],
      ],
    },

    commonMistakes: [
      'Using degrees instead of radians for B. If the period is 12 months, B = (2π) / (12) = (π) / (6), not (360) / (12) = 30.',
      'Skipping the phase shift (writing A·sin(Bt) + D and hoping the timing is right). The maximum will occur at the wrong time without C.',
      'Stating a parameter value without interpreting it in context. On AP FRQs, "A = 28" earns 0 points for the interpretation part. Write "A = 28°F represents the amplitude — temperatures oscillate 28°F above and below the annual mean."',
    ],

    tip: 'For any monthly data problem: B is always (π) / (6) (memorize this). Then you only need A, D, and C. A and D come from arithmetic on the max and min. C is the month of the maximum (for cosine) or the month of the spring midline crossing (for sine). Three numbers, done.',

    questions: [
      {
        question_text: 'A city has a maximum average temperature of 94°F and a minimum of 26°F. What is the amplitude of the sinusoidal temperature model?',
        difficulty: 'Easy',
        choices: ['26', '34', '60', '68'],
        answer_text: '34',
        explanation: 'A = (max − min)/2 = (94 − 26)/2 = (68) / (2) = 34.',
      },
      {
        question_text: 'Monthly temperature data has period 12 months. What is B in the model f(t) = A·sin(Bt + C) + D?',
        difficulty: 'Easy',
        choices: ['12', '2π', '(π) / (6)', '6π'],
        answer_text: '(π) / (6)',
        explanation: 'B = 2π/period = (2π) / (12) = (π) / (6).',
      },
      {
        question_text: 'The midline of a temperature model is y = 55°F and the amplitude is 30°F. What is the maximum temperature predicted by the model?',
        difficulty: 'Easy',
        choices: ['30°F', '55°F', '85°F', '115°F'],
        answer_text: '85°F',
        explanation: 'Max = midline + amplitude = 55 + 30 = 85°F.',
      },
      {
        question_text: 'Using f(t) = 28·cos((π) / (6)·(t − 7)) + 60, what is the predicted temperature for January (t = 1)?',
        difficulty: 'Easy',
        choices: ['32°F', '60°F', '74°F', '88°F'],
        answer_text: '32°F',
        explanation: 'f(1) = 28·cos((π) / (6)·(1−7)) + 60 = 28·cos((π) / (6)·(−6)) + 60 = 28·cos(−π) + 60 = 28(−1) + 60 = 32°F.',
      },
      {
        question_text: 'A researcher models daylight hours as d(t) = 3·sin((π) / (6)·(t − 3)) + 12, where t is month. What is d(9) — the predicted daylight in September?',
        difficulty: 'Medium',
        choices: ['9 hours', '12 hours', '15 hours', '10.5 hours'],
        answer_text: '12 hours',
        explanation: 'd(9) = 3·sin((π) / (6)·(9−3)) + 12 = 3·sin((π) / (6)·6) + 12 = 3·sin(π) + 12 = 3(0) + 12 = 12 hours. September is a midline crossing (equal-length day and night near the fall equinox).',
      },
      {
        question_text: 'Ocean tides have high tide of 12 ft and low tide of 2 ft, with a period of 12.4 hours. A cosine model h(t) = A·cos(B(t−C)) + D is used, with the first high tide at t = 2 hr. What is h(8.2)?',
        difficulty: 'Medium',
        choices: ['2 ft', '7 ft', '8 ft', '12 ft'],
        answer_text: '2 ft',
        explanation: 'A=5, D=7, B=(2π) / (12).4=(π) / (6).2, C=2. h(8.2) = 5·cos((π) / (6).2·(8.2−2)) + 7 = 5·cos((π) / (6).2·6.2) + 7 = 5·cos(π) + 7 = 5(−1) + 7 = 2 ft. This is low tide — half a period after high tide.',
      },
      {
        question_text: 'A model f(t) = 30·sin((π) / (6)·(t − 4)) + 55 is used for monthly temperatures. What does the value 55 represent in this context?',
        difficulty: 'Medium',
        choices: ['The maximum temperature', 'The minimum temperature', 'The average (mean) annual temperature', 'The temperature in January'],
        answer_text: 'The average (mean) annual temperature',
        explanation: 'D = 55 is the midline — the value the function oscillates around. In context, this is the annual average (mean) temperature of 55°F.',
      },
      {
        question_text: 'A Ferris wheel has diameter 60 ft and its lowest point is 5 ft above the ground. It completes one revolution every 2 minutes. A rider starts at the bottom. Which model describes the rider\'s height h(t) in feet at time t in minutes?',
        difficulty: 'Medium',
        choices: [
          'h(t) = 30·cos(πt) + 35',
          'h(t) = −30·cos(πt) + 35',
          'h(t) = 30·sin(πt) + 35',
          'h(t) = −30·cos(2πt) + 35',
        ],
        answer_text: 'h(t) = −30·cos(πt) + 35',
        explanation: 'Radius = 30 ft, so A = 30. Midline = 5 + 30 = 35 ft (lowest point + radius). Period = 2 min → B = (2π) / (2) = π. Starts at bottom (minimum) at t = 0: use −cos since −cos(0) = −1, giving h(0) = −30 + 35 = 5 ft ✓. h(t) = −30·cos(πt) + 35.',
      },
      {
        question_text: 'Using f(t) = 28·cos((π) / (6)·(t − 7)) + 60, in which month(s) does the model predict a temperature of exactly 60°F? (Hint: when does cosine = 0?)',
        difficulty: 'Hard',
        choices: ['April and October only', 'January and July only', 'April (t=4) and October (t=10)', 'March and September'],
        answer_text: 'April (t=4) and October (t=10)',
        explanation: 'f(t) = 60 when cos((π) / (6)·(t−7)) = 0 → (π) / (6)·(t−7) = ±(π) / (2) → t−7 = ±3 → t = 10 or t = 4. So the model predicts 60°F in April (t=4) and October (t=10), the months when temperature passes through the annual average.',
      },
      {
        question_text: 'A student writes the model T(m) = 30·sin((π) / (6)·m) + 55 for monthly temperatures, but forgets to include a phase shift. The actual maximum occurs in July (m = 7). What is the maximum of T(m) as written, and in which month does it occur?',
        difficulty: 'Hard',
        choices: ['Max = 85 in month 3', 'Max = 85 in month 7', 'Max = 55 in month 7', 'Max = 85 in month 6'],
        answer_text: 'Max = 85 in month 3',
        explanation: 'T(m) = 30·sin((π) / (6)·m) + 55. Maximum when sin = 1: (π) / (6)·m = (π) / (2) → m = 3 (March). Max value = 30(1) + 55 = 85. Without the phase shift C = 4, the model peaks in March instead of July — a 4-month error.',
      },
    ],
  },
}
