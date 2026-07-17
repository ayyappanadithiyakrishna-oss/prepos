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

export const SAT_UNIT8_CONTENT: Record<string, LessonContent> = {
  '8.1': {
    essentialQuestion:
      'How do you calculate the area of flat figures and the volume of 3D solids, and what happens to volume when you scale a dimension?',
    concepts: [
      'Area measures the interior of a flat shape in square units; volume measures the interior of a 3D solid in cubic units.',
      'For composite figures, break the shape into familiar pieces, find each area, then add or subtract.',
      'To find a missing dimension from a given area, write the area formula, substitute the known values, then solve algebraically.',
      'Scaling all dimensions of a solid by a factor k multiplies volume by k³ — doubling every dimension multiplies volume by 8.',
      'Leave answers in terms of π when a problem involves circles or curved solids, unless you are told to approximate.',
    ],
    keyTerms: [
      {
        term: 'Area',
        definition:
          'The amount of space enclosed by a flat (2D) shape, measured in square units such as cm² or in².',
      },
      {
        term: 'Volume',
        definition:
          'The amount of space enclosed inside a 3D solid, measured in cubic units such as cm³ or ft³.',
      },
      {
        term: 'Composite Figure',
        definition:
          'A shape made by combining or subtracting two or more simple geometric figures.',
      },
      {
        term: 'Scale Factor',
        definition:
          'The ratio by which every dimension of a figure is multiplied; for volume, the scale factor is cubed.',
      },
      {
        term: 'Sector',
        definition:
          'A "pie-slice" region of a circle bounded by two radii and an arc.',
      },
    ],
    workedExample: {
      problem:
        'A cylinder has radius 3 cm and height 10 cm. A cone with the same radius and height is removed from the cylinder. What is the remaining volume? Leave your answer in terms of π.',
      steps: [
        'Volume of cylinder: V = πr²h = π(3)²(10) = 90π cm³.',
        'Volume of cone: V = ⅓πr²h = ⅓π(3)²(10) = ⅓ × 90π = 30π cm³.',
        'Remaining volume = cylinder − cone = 90π − 30π = 60π cm³.',
      ],
      answer: '60π cm³',
    },
    commonMistakes: [
      'Using diameter instead of radius in A = πr² or V = πr²h.',
      'Forgetting the ½ in the triangle area formula A = ½bh.',
      'Forgetting the ⅓ in the cone volume formula V = ⅓πr²h.',
      'Thinking that doubling the radius doubles the volume — it actually multiplies it by 4 (for a cylinder) or 8 (for a sphere).',
    ],
    tip: 'Write the formula first, then substitute numbers. This one habit catches most formula errors before they happen.',
    graphType: 'solid-3d',
    questions: [
      // Easy ×4
      {
        question_text:
          'A rectangle has a length of 12 inches and a width of 5 inches. What is its area?',
        difficulty: 'Easy',
        choices: ['17 in²', '34 in²', '60 in²', '120 in²'],
        answer_text: '60 in²',
        explanation:
          'Area of a rectangle = length × width = 12 × 5 = 60 in². Adding the dimensions (17) gives perimeter, not area, and 34 is twice the perimeter divided incorrectly.',
      },
      {
        question_text:
          'A triangle has a base of 10 cm and a height of 6 cm. What is its area?',
        difficulty: 'Easy',
        choices: ['16 cm²', '30 cm²', '60 cm²', '120 cm²'],
        answer_text: '30 cm²',
        explanation:
          'Area of a triangle = ½ × base × height = ½ × 10 × 6 = 30 cm². A common error is forgetting the ½, which gives 60 cm².',
      },
      {
        question_text:
          'A circle has a radius of 7 m. What is its area? (Leave in terms of π.)',
        difficulty: 'Easy',
        choices: ['7π m²', '14π m²', '49π m²', '98π m²'],
        answer_text: '49π m²',
        explanation:
          'Area = πr² = π(7²) = 49π m². Using the diameter (14) instead of squaring the radius gives 14π, which is the circumference, not the area.',
      },
      {
        question_text:
          'A rectangular prism has length 4 ft, width 3 ft, and height 5 ft. What is its volume?',
        difficulty: 'Easy',
        choices: ['12 ft³', '47 ft³', '60 ft³', '120 ft³'],
        answer_text: '60 ft³',
        explanation:
          'Volume = l × w × h = 4 × 3 × 5 = 60 ft³. Adding all dimensions gives 12, which is not a volume formula.',
      },
      // Medium ×4
      {
        question_text:
          'An L-shaped figure is formed by a 10 × 8 rectangle with a 4 × 3 rectangle cut from one corner. What is the area of the L-shape?',
        difficulty: 'Medium',
        choices: ['68 m²', '71 m²', '80 m²', '92 m²'],
        answer_text: '68 m²',
        explanation:
          'Area of the full rectangle = 10 × 8 = 80 m². Area of the cut-out = 4 × 3 = 12 m². L-shape area = 80 − 12 = 68 m².',
      },
      {
        question_text:
          'A circle with radius 6 has an inscribed square removed from it. The inscribed square has a diagonal equal to the diameter of the circle (diagonal = 12). What is the area of the remaining region? (Leave in terms of π and simplify radicals.)',
        difficulty: 'Medium',
        choices: ['36π − 36', '36π − 72', '36π − 72', '72π − 72'],
        answer_text: '36π − 72',
        explanation:
          'Circle area = π(6²) = 36π. For the inscribed square, diagonal = 12, so side = 12/√2 = 6√2, and area = (6√2)² = 72. Remaining area = 36π − 72.',
      },
      {
        question_text:
          'The area of a trapezoid is 60 cm². One base is 8 cm and the height is 6 cm. What is the length of the other base?',
        difficulty: 'Medium',
        choices: ['6 cm', '12 cm', '14 cm', '22 cm'],
        answer_text: '12 cm',
        explanation:
          'A = ½(b₁ + b₂)h → 60 = ½(8 + b₂)(6) → 60 = 3(8 + b₂) → 20 = 8 + b₂ → b₂ = 12 cm.',
      },
      {
        question_text:
          'A cylinder has a radius of 4 cm and a height of 9 cm. What is its volume? (Leave in terms of π.)',
        difficulty: 'Medium',
        choices: ['36π cm³', '72π cm³', '144π cm³', '576π cm³'],
        answer_text: '144π cm³',
        explanation:
          'V = πr²h = π(4²)(9) = π(16)(9) = 144π cm³. A common error is using 4 (not 4²), giving 36π cm³.',
      },
      // Hard ×4
      {
        question_text:
          'A sphere has a volume of 36π cm³. If the radius of the sphere is doubled, what is the new volume?',
        difficulty: 'Hard',
        choices: ['72π cm³', '144π cm³', '216π cm³', '288π cm³'],
        answer_text: '288π cm³',
        explanation:
          'Doubling the radius multiplies volume by 2³ = 8. New volume = 8 × 36π = 288π cm³. The original radius can be confirmed: (4/3)πr³ = 36π → r³ = 27 → r = 3. New volume = (4/3)π(6³) = 288π.',
      },
      {
        question_text:
          'A cone has a base radius of 5 cm and a slant height of 13 cm. What is the volume of the cone? (Leave in terms of π.)',
        difficulty: 'Hard',
        choices: ['100π cm³', '200π cm³', '300π cm³', '325π cm³'],
        answer_text: '100π cm³',
        explanation:
          'The height is found using the Pythagorean theorem: h² + 5² = 13² → h² = 169 − 25 = 144 → h = 12 cm. V = ⅓πr²h = ⅓π(25)(12) = 100π cm³.',
      },
      {
        question_text:
          'A rectangular swimming pool is 20 m long and 10 m wide. It is uniformly filled with water to a depth of 1.5 m. Water is then added to raise the depth by 0.5 m. What volume of water (in m³) is added?',
        difficulty: 'Hard',
        choices: ['50 m³', '100 m³', '150 m³', '300 m³'],
        answer_text: '100 m³',
        explanation:
          'The additional volume equals base area × increase in depth = (20 × 10) × 0.5 = 200 × 0.5 = 100 m³. The original depth is irrelevant — only the change in depth matters.',
      },
      {
        question_text:
          'Two similar cones have volumes of 8 cm³ and 64 cm³. If the smaller cone has a base radius of 2 cm, what is the base radius of the larger cone?',
        difficulty: 'Hard',
        choices: ['4 cm', '6 cm', '8 cm', '16 cm'],
        answer_text: '4 cm',
        explanation:
          'The ratio of volumes is 64/8 = 8 = k³, so the scale factor k = 2. The larger cone\'s radius = 2 × 2 = 4 cm. Volume scales as the cube of the linear scale factor, not linearly.',
      },
    ],
  },

  '8.2': {
    essentialQuestion:
      'How do angle relationships — in parallel lines, triangles, and similar figures — let you find unknown angles with algebra?',
    concepts: [
      'Vertical angles are formed by two intersecting lines and are always equal.',
      'Supplementary angles sum to 180°; complementary angles sum to 90°.',
      'When a transversal crosses two parallel lines, corresponding angles are equal, alternate interior angles are equal, and co-interior (same-side interior) angles are supplementary.',
      'The three interior angles of any triangle always sum to 180°.',
      'An exterior angle of a triangle equals the sum of the two non-adjacent interior angles.',
      'Similar triangles have equal corresponding angles and proportional corresponding sides.',
    ],
    keyTerms: [
      {
        term: 'Vertical Angles',
        definition:
          'The pair of opposite angles formed when two lines intersect; they are always congruent.',
      },
      {
        term: 'Supplementary Angles',
        definition: 'Two angles whose measures add up to 180°.',
      },
      {
        term: 'Transversal',
        definition:
          'A line that crosses two or more other lines, creating multiple angle pairs.',
      },
      {
        term: 'Alternate Interior Angles',
        definition:
          'Angle pairs that lie between two parallel lines on opposite sides of the transversal; they are congruent.',
      },
      {
        term: 'Exterior Angle Theorem',
        definition:
          'An exterior angle of a triangle equals the sum of the two remote (non-adjacent) interior angles.',
      },
      {
        term: 'Similar Triangles',
        definition:
          'Triangles with the same shape but not necessarily the same size; corresponding angles are equal and corresponding sides are in proportion.',
      },
    ],
    workedExample: {
      problem:
        'Two parallel lines are cut by a transversal. One angle measures (3x + 20)° and its alternate interior angle measures (5x − 10)°. Find x and the measure of each angle.',
      steps: [
        'Alternate interior angles are equal when lines are parallel: 3x + 20 = 5x − 10.',
        'Subtract 3x from both sides: 20 = 2x − 10.',
        'Add 10 to both sides: 30 = 2x, so x = 15.',
        'Each angle = 3(15) + 20 = 45 + 20 = 65°.',
      ],
      answer: 'x = 15; each angle = 65°',
    },
    commonMistakes: [
      'Treating co-interior angles as equal (they are supplementary, not congruent).',
      'Applying the exterior angle theorem to an interior angle instead.',
      'Confusing corresponding and alternate interior angles — draw an arrow to label which pair you are using.',
      'Forgetting that similarity gives proportional sides, not equal sides.',
    ],
    tip: 'Label every angle you know with its measure as soon as you find it — angle chasing goes much faster when your diagram is fully annotated.',
    graphType: 'triangle',
    questions: [
      // Easy ×4
      {
        question_text:
          'Two lines intersect. One angle measures 47°. What is the measure of its vertical angle?',
        difficulty: 'Easy',
        choices: ['43°', '47°', '133°', '143°'],
        answer_text: '47°',
        explanation:
          'Vertical angles are congruent, so the opposite angle also measures 47°. The supplement of 47° is 133°, which describes the adjacent angle, not the vertical angle.',
      },
      {
        question_text:
          'Two angles are supplementary. One measures 112°. What is the measure of the other angle?',
        difficulty: 'Easy',
        choices: ['22°', '68°', '78°', '248°'],
        answer_text: '68°',
        explanation:
          'Supplementary angles sum to 180°. The other angle = 180° − 112° = 68°. Complementary angles sum to 90°, not 180°, so 90° − 112° is not applicable here.',
      },
      {
        question_text:
          'A triangle has two angles measuring 54° and 73°. What is the measure of the third angle?',
        difficulty: 'Easy',
        choices: ['43°', '53°', '63°', '127°'],
        answer_text: '53°',
        explanation:
          'The three angles of a triangle sum to 180°. Third angle = 180° − 54° − 73° = 53°.',
      },
      {
        question_text:
          'Two angles are complementary. One measures 38°. What is the other angle?',
        difficulty: 'Easy',
        choices: ['38°', '52°', '62°', '142°'],
        answer_text: '52°',
        explanation:
          'Complementary angles sum to 90°. Other angle = 90° − 38° = 52°.',
      },
      // Medium ×4
      {
        question_text:
          'Two parallel lines are cut by a transversal. A co-interior (same-side interior) angle measures (4x + 10)°. Its co-interior partner measures (2x + 50)°. Find x.',
        difficulty: 'Medium',
        choices: ['10', '20', '25', '30'],
        answer_text: '20',
        explanation:
          'Co-interior angles are supplementary: (4x + 10) + (2x + 50) = 180 → 6x + 60 = 180 → 6x = 120 → x = 20.',
      },
      {
        question_text:
          'An exterior angle of a triangle measures 115°. One of the two non-adjacent interior angles measures 58°. What is the measure of the other non-adjacent interior angle?',
        difficulty: 'Medium',
        choices: ['57°', '65°', '115°', '122°'],
        answer_text: '57°',
        explanation:
          'By the Exterior Angle Theorem, the exterior angle equals the sum of the two remote interior angles: 115° = 58° + other angle → other angle = 57°.',
      },
      {
        question_text:
          'Two parallel lines are cut by a transversal. Corresponding angles measure (6x − 4)° and (4x + 18)°. What is x?',
        difficulty: 'Medium',
        choices: ['7', '11', '14', '22'],
        answer_text: '11',
        explanation:
          'Corresponding angles are equal: 6x − 4 = 4x + 18 → 2x = 22 → x = 11. The angles each measure 6(11) − 4 = 62°.',
      },
      {
        question_text:
          'In triangle ABC, angle A = 40° and angle B = 2 × angle C. Find the measure of angle C.',
        difficulty: 'Medium',
        choices: ['35°', '40°', '46.7°', '70°'],
        answer_text: '46.7°',
        explanation:
          'Angles sum to 180°: 40 + 2C + C = 180 → 40 + 3C = 180 → 3C = 140 → C ≈ 46.7°. (Exact: 140/3°.)',
      },
      // Hard ×4
      {
        question_text:
          'Triangle PQR is similar to triangle STU with PQ corresponding to ST and QR corresponding to TU. PQ = 8, QR = 12, PR = 10, and ST = 12. What is the length of TU?',
        difficulty: 'Hard',
        choices: ['8', '15', '16', '18'],
        answer_text: '18',
        explanation:
          'Scale factor = ST/PQ = 12/8 = 3/2. TU = QR × (3/2) = 12 × 1.5 = 18. All sides of the larger triangle are 3/2 times the corresponding sides of the smaller triangle.',
      },
      {
        question_text:
          'In a figure, two parallel lines are cut by a transversal. One angle is labeled (5x + 15)° and a non-adjacent, non-supplementary angle on the same side is labeled (3x + 45)°. These two angles are corresponding angles. A third angle at the same intersection is vertically opposite to (5x + 15)°. What is the measure of that vertical angle?',
        difficulty: 'Hard',
        choices: ['75°', '90°', '105°', '120°'],
        answer_text: '90°',
        explanation:
          'Corresponding angles are equal: 5x + 15 = 3x + 45 → 2x = 30 → x = 15. The angle = 5(15) + 15 = 90°. Its vertical angle is also 90°.',
      },
      {
        question_text:
          'In triangle ABC, the exterior angle at C is (8x − 4)°. Angle A = (3x + 6)° and angle B = (2x + 14)°. Find x and determine whether triangle ABC is acute, right, or obtuse.',
        difficulty: 'Hard',
        choices: [
          'x = 6; acute',
          'x = 6; obtuse',
          'x = 8; right',
          'x = 8; obtuse',
        ],
        answer_text: 'x = 8; obtuse',
        explanation:
          'By the Exterior Angle Theorem, the exterior angle equals the sum of the two remote interior angles: 8x − 4 = (3x + 6) + (2x + 14) → 8x − 4 = 5x + 20 → 3x = 24 → x = 8. Angle A = 30°, angle B = 30°, exterior at C = 60°, so interior C = 180° − 60° = 120°. Check: 30 + 30 + 120 = 180°. ✓ Since C > 90°, the triangle is obtuse.',
      },
      {
        question_text:
          'Triangle ABC has angle A = 50° and angle B = 70° (so angle C = 60°). A line DE is drawn parallel to BC, with D on AB and E on AC. What is the measure of angle ADE (the interior angle of triangle ADE at vertex D)?',
        difficulty: 'Hard',
        choices: ['50°', '60°', '70°', '110°'],
        answer_text: '70°',
        explanation:
          'Since DE ∥ BC, transversal AB creates corresponding angles at D and B. Angle ADE (above DE, on the right of AB) corresponds to angle ABC = 70°. Alternatively, in triangle ADE: angle A = 50° and angle AED = angle ACB = 60° (corresponding angles, DE ∥ BC, transversal AC), so angle ADE = 180° − 50° − 60° = 70°.',
      },
    ],
  },

  '8.3': {
    essentialQuestion:
      'How does the Pythagorean theorem connect the sides of a right triangle, and how do special right triangles let you skip calculation?',
    concepts: [
      'In any right triangle with legs a and b and hypotenuse c: a² + b² = c².',
      'Pythagorean triples are whole-number sets that satisfy the theorem: 3-4-5, 5-12-13, 8-15-17. Multiples work too (6-8-10, 10-24-26).',
      'In a 30-60-90 triangle, sides are in ratio x : x√3 : 2x (short leg : long leg : hypotenuse).',
      'In a 45-45-90 triangle, sides are in ratio x : x : x√2 (leg : leg : hypotenuse).',
      'The distance between two coordinate points uses the same formula as the Pythagorean theorem: d = √((x₂−x₁)² + (y₂−y₁)²).',
    ],
    keyTerms: [
      {
        term: 'Hypotenuse',
        definition:
          'The longest side of a right triangle, always opposite the right angle.',
      },
      {
        term: 'Pythagorean Triple',
        definition:
          'A set of three positive integers (a, b, c) that satisfy a² + b² = c², such as 3-4-5 or 5-12-13.',
      },
      {
        term: '30-60-90 Triangle',
        definition:
          'A special right triangle with angle measures 30°, 60°, and 90°; its sides are always in ratio 1 : √3 : 2.',
      },
      {
        term: '45-45-90 Triangle',
        definition:
          'An isosceles right triangle with angle measures 45°, 45°, and 90°; its sides are in ratio 1 : 1 : √2.',
      },
      {
        term: 'Distance Formula',
        definition:
          'd = √((x₂−x₁)² + (y₂−y₁)²), derived directly from the Pythagorean theorem on a coordinate plane.',
      },
    ],
    workedExample: {
      problem:
        'A ladder 13 feet long leans against a vertical wall. The base of the ladder is 5 feet from the wall. How high up the wall does the ladder reach?',
      steps: [
        'The ladder, wall, and ground form a right triangle with hypotenuse 13 (the ladder) and one leg 5 (base).',
        'Use a² + b² = c²: 5² + h² = 13².',
        '25 + h² = 169 → h² = 144 → h = 12.',
        'Recognize 5-12-13 as a Pythagorean triple — this confirms the answer quickly.',
      ],
      answer: '12 feet',
    },
    commonMistakes: [
      'Adding legs then square-rooting instead of adding squares: √(a + b) ≠ c.',
      'Treating the longest given side as a leg instead of the hypotenuse.',
      'In a 30-60-90 triangle, assigning x√3 to the 30° side — the shortest side (x) is opposite 30°.',
      'In the distance formula, subtracting x from y coordinates — you must pair x with x and y with y.',
    ],
    tip: 'Before calculating, check if the numbers look like a Pythagorean triple or a multiple of one. Recognizing 6-8-10 saves all the arithmetic.',
    graphType: 'triangle',
    questions: [
      // Easy ×4
      {
        question_text:
          'A right triangle has legs of length 6 cm and 8 cm. What is the length of the hypotenuse?',
        difficulty: 'Easy',
        choices: ['10 cm', '12 cm', '14 cm', '√28 cm'],
        answer_text: '10 cm',
        explanation:
          '6² + 8² = 36 + 64 = 100, so c = √100 = 10 cm. This is a 3-4-5 triple scaled by 2 (6-8-10).',
      },
      {
        question_text:
          'A right triangle has a hypotenuse of 17 and one leg of 8. What is the length of the other leg?',
        difficulty: 'Easy',
        choices: ['9', '13', '15', '√225'],
        answer_text: '15',
        explanation:
          'a² + 8² = 17² → a² = 289 − 64 = 225 → a = 15. This is the 8-15-17 Pythagorean triple.',
      },
      {
        question_text:
          'Which set of numbers forms a right triangle? (i.e., is a Pythagorean triple)',
        difficulty: 'Easy',
        choices: ['2, 3, 4', '5, 10, 13', '9, 40, 41', '7, 24, 26'],
        answer_text: '9, 40, 41',
        explanation:
          '9² + 40² = 81 + 1600 = 1681 = 41². This is a valid Pythagorean triple. Check: 7² + 24² = 49 + 576 = 625 ≠ 26² = 676.',
      },
      {
        question_text:
          'A right triangle has legs of length 5 and 12. What is the length of the hypotenuse?',
        difficulty: 'Easy',
        choices: ['13', '15', '17', '√119'],
        answer_text: '13',
        explanation:
          '5² + 12² = 25 + 144 = 169 = 13². This is the classic 5-12-13 Pythagorean triple.',
      },
      // Medium ×4
      {
        question_text:
          'In a 30-60-90 triangle, the side opposite the 30° angle is 7 cm. What is the length of the hypotenuse?',
        difficulty: 'Medium',
        choices: ['7 cm', '7√2 cm', '7√3 cm', '14 cm'],
        answer_text: '14 cm',
        explanation:
          'In a 30-60-90 triangle, the hypotenuse is twice the short leg (opposite 30°). Hypotenuse = 2 × 7 = 14 cm. The long leg would be 7√3 cm.',
      },
      {
        question_text:
          'In a 45-45-90 triangle, the hypotenuse is 10 cm. What is the length of each leg?',
        difficulty: 'Medium',
        choices: ['5 cm', '5√2 cm', '10√2 cm', '5√3 cm'],
        answer_text: '5√2 cm',
        explanation:
          'In a 45-45-90 triangle, hypotenuse = leg × √2, so leg = hypotenuse/√2 = 10/√2 = 10√2/2 = 5√2 cm.',
      },
      {
        question_text:
          'What is the distance between the points (1, 2) and (7, 10) on the coordinate plane?',
        difficulty: 'Medium',
        choices: ['8', '10', '√68', '14'],
        answer_text: '10',
        explanation:
          'd = √((7−1)² + (10−2)²) = √(36 + 64) = √100 = 10. The horizontal and vertical separations are 6 and 8 — a 6-8-10 triple.',
      },
      {
        question_text:
          'A 30-60-90 triangle has a hypotenuse of 20 cm. What is the length of the side opposite the 60° angle?',
        difficulty: 'Medium',
        choices: ['10 cm', '10√2 cm', '10√3 cm', '20√3 cm'],
        answer_text: '10√3 cm',
        explanation:
          'Short leg (opposite 30°) = hypotenuse/2 = 10 cm. Long leg (opposite 60°) = short leg × √3 = 10√3 cm.',
      },
      // Hard ×4
      {
        question_text:
          'An equilateral triangle has a side length of 8 cm. What is its area?',
        difficulty: 'Hard',
        choices: ['16√3 cm²', '32 cm²', '32√3 cm²', '64 cm²'],
        answer_text: '16√3 cm²',
        explanation:
          'Drop an altitude to split the equilateral triangle into two 30-60-90 triangles. The altitude = 8 × (√3/2) = 4√3. Area = ½ × base × height = ½ × 8 × 4√3 = 16√3 cm².',
      },
      {
        question_text:
          'A ladder 26 feet long leans against a building. The foot of the ladder is 10 feet from the base of the building. How far up the building does the ladder reach?',
        difficulty: 'Hard',
        choices: ['20 ft', '24 ft', '25 ft', '√576 ft'],
        answer_text: '24 ft',
        explanation:
          'h² + 10² = 26² → h² = 676 − 100 = 576 → h = 24 ft. Note that 10-24-26 is a 5-12-13 triple scaled by 2.',
      },
      {
        question_text:
          'A right triangle has legs of length (x + 2) and x, and hypotenuse (x + 4). Find x and the area of the triangle.',
        difficulty: 'Hard',
        choices: [
          'x = 5; area = 17.5',
          'x = 6; area = 24',
          'x = 8; area = 40',
          'x = 10; area = 60',
        ],
        answer_text: 'x = 6; area = 24',
        explanation:
          'By Pythagorean theorem: x² + (x+2)² = (x+4)². Expand: x² + x² + 4x + 4 = x² + 8x + 16 → x² − 4x − 12 = 0 → (x−6)(x+2) = 0 → x = 6. Legs are 6 and 8, hypotenuse = 10 (a 6-8-10 triple). Area = ½(6)(8) = 24.',
      },
      {
        question_text:
          'Point A is at (0, 0), B is at (4, 0), and C is at (4, 6). What is the perimeter of triangle ABC?',
        difficulty: 'Hard',
        choices: ['14', '2√13 + 10', '4 + 6 + √52', '10 + 2√13'],
        answer_text: '10 + 2√13',
        explanation:
          'AB = 4 (horizontal segment). BC = 6 (vertical segment). AC = √(4² + 6²) = √(16 + 36) = √52 = 2√13. Perimeter = 4 + 6 + 2√13 = 10 + 2√13.',
      },
    ],
  },

  '8.4': {
    essentialQuestion:
      'How do sine, cosine, and tangent relate angles to side lengths in a right triangle, and how are they used to solve real-world problems?',
    concepts: [
      'SOH-CAH-TOA: sin θ = opposite/hypotenuse, cos θ = adjacent/hypotenuse, tan θ = opposite/adjacent.',
      'The "opposite" and "adjacent" labels always depend on which acute angle you are working with — re-label when you switch angles.',
      'Angle of elevation: the angle measured upward from horizontal to a line of sight.',
      'Angle of depression: the angle measured downward from horizontal to a line of sight.',
      'Cofunction identity: sin θ = cos(90° − θ) and cos θ = sin(90° − θ).',
      'Key values: sin 30° = 0.5, cos 30° = √3/2; sin 45° = cos 45° = √2/2; sin 60° = √3/2, cos 60° = 0.5.',
    ],
    keyTerms: [
      {
        term: 'Sine (sin)',
        definition:
          'In a right triangle, the ratio of the length of the side opposite to a given acute angle to the length of the hypotenuse.',
      },
      {
        term: 'Cosine (cos)',
        definition:
          'In a right triangle, the ratio of the length of the side adjacent to a given acute angle to the length of the hypotenuse.',
      },
      {
        term: 'Tangent (tan)',
        definition:
          'In a right triangle, the ratio of the side opposite to a given acute angle to the side adjacent to that angle.',
      },
      {
        term: 'SOH-CAH-TOA',
        definition:
          'A mnemonic for the three trig ratios: Sine = Opposite/Hypotenuse, Cosine = Adjacent/Hypotenuse, Tangent = Opposite/Adjacent.',
      },
      {
        term: 'Angle of Elevation',
        definition:
          'The angle formed between the horizontal and the line of sight when looking upward at an object.',
      },
      {
        term: 'Cofunction Identity',
        definition:
          'The relationship sin θ = cos(90° − θ), meaning the sine of an angle equals the cosine of its complement.',
      },
    ],
    workedExample: {
      problem:
        'From a point 50 meters from the base of a building, the angle of elevation to the top of the building is 60°. How tall is the building? (Use sin 60° = √3/2, cos 60° = 1/2, tan 60° = √3.)',
      steps: [
        'Draw a right triangle: the horizontal distance (50 m) is adjacent to the 60° angle, and the building height is opposite.',
        'Use tan θ = opposite/adjacent: tan 60° = height/50.',
        '√3 = height/50 → height = 50√3 meters.',
      ],
      answer: '50√3 meters',
    },
    commonMistakes: [
      'Mixing up opposite and adjacent — always identify the angle first, then label the sides relative to that angle.',
      'Using sine when tangent is needed (tangent uses both legs; sine/cosine always involve the hypotenuse).',
      'Applying the cofunction identity backwards: sin 30° = cos 60° (NOT cos 30°).',
      'Forgetting that angles of elevation and depression are both measured from the horizontal.',
    ],
    tip: 'Write out sin θ = O/H, cos θ = A/H, tan θ = O/A before you set up any equation. One second spent labeling saves three minutes of backtracking.',
    graphType: 'triangle',
    questions: [
      // Easy ×4
      {
        question_text:
          'In a right triangle, the side opposite angle θ has length 5, the side adjacent to θ has length 12, and the hypotenuse has length 13. What is sin θ?',
        difficulty: 'Easy',
        choices: ['5/13', '12/13', '5/12', '13/5'],
        answer_text: '5/13',
        explanation:
          'sin θ = opposite/hypotenuse = 5/13. The ratio 12/13 is cos θ, and 5/12 is tan θ.',
      },
      {
        question_text:
          'In a right triangle, the side opposite angle θ is 7 and the hypotenuse is 25. What is cos θ if the adjacent side is 24?',
        difficulty: 'Easy',
        choices: ['7/25', '7/24', '24/25', '25/24'],
        answer_text: '24/25',
        explanation:
          'cos θ = adjacent/hypotenuse = 24/25. The ratio 7/25 = sin θ and 7/24 = tan θ.',
      },
      {
        question_text:
          'In a right triangle, the side adjacent to angle θ is 9 and the side opposite is 12. What is tan θ?',
        difficulty: 'Easy',
        choices: ['9/12', '4/3', '3/4', '12/9'],
        answer_text: '4/3',
        explanation:
          'tan θ = opposite/adjacent = 12/9 = 4/3. Note: 12/9 simplifies to 4/3; 9/12 = 3/4 = tan(complement of θ).',
      },
      {
        question_text:
          'What is the value of sin 30°?',
        difficulty: 'Easy',
        choices: ['√3/2', '1/2', '√2/2', '1'],
        answer_text: '1/2',
        explanation:
          'In a 30-60-90 triangle, sin 30° = opposite/hypotenuse = 1/2. The value √3/2 is sin 60° (or cos 30°), and √2/2 is sin 45°.',
      },
      // Medium ×4
      {
        question_text:
          'In a right triangle, angle θ = 45° and the hypotenuse is 10 cm. What is the length of the side opposite θ? (sin 45° = √2/2)',
        difficulty: 'Medium',
        choices: ['5 cm', '5√2 cm', '10√2 cm', '√50 cm'],
        answer_text: '5√2 cm',
        explanation:
          'sin 45° = opposite/hypotenuse → √2/2 = opposite/10 → opposite = 10 × √2/2 = 5√2 cm. This matches the 45-45-90 ratio x : x : x√2.',
      },
      {
        question_text:
          'A ramp rises at an angle of 30° to the horizontal. If the ramp is 20 feet long, how high does it rise? (sin 30° = 0.5)',
        difficulty: 'Medium',
        choices: ['5 ft', '10 ft', '10√3 ft', '20 ft'],
        answer_text: '10 ft',
        explanation:
          'The ramp is the hypotenuse and the height is opposite the 30° angle. sin 30° = height/20 → 0.5 = height/20 → height = 10 ft.',
      },
      {
        question_text:
          'From the top of a 40-meter-tall cliff, the angle of depression to a boat is 30°. How far is the boat from the base of the cliff? (tan 30° = 1/√3 = √3/3)',
        difficulty: 'Medium',
        choices: ['20 m', '40 m', '40√3 m', '80 m'],
        answer_text: '40√3 m',
        explanation:
          'The cliff height (40 m) is opposite the 30° angle of depression, and the horizontal distance to the boat is adjacent. tan 30° = 40/distance → 1/√3 = 40/d → d = 40√3 m.',
      },
      {
        question_text:
          'If sin θ = cos 20°, what is the value of θ?',
        difficulty: 'Medium',
        choices: ['20°', '70°', '80°', '160°'],
        answer_text: '70°',
        explanation:
          'By the cofunction identity, sin θ = cos(90° − θ). So cos 20° = sin 70°, meaning θ = 70°. The angles 20° and 70° are complementary (sum to 90°).',
      },
      // Hard ×4
      {
        question_text:
          'A surveyor stands 80 meters from a tree. The angle of elevation to the top of the tree is 60°. A bird sits 10 meters directly above the surveyor. How much higher is the top of the tree than the bird? (tan 60° = √3 ≈ 1.732)',
        difficulty: 'Hard',
        choices: [
          '80√3 − 10 m',
          '80√3 + 10 m',
          '80/√3 − 10 m',
          '80√3 m',
        ],
        answer_text: '80√3 − 10 m',
        explanation:
          'Tree height = 80 × tan 60° = 80√3 m. The bird is 10 m above the surveyor (ground level). Height difference = 80√3 − 10 m ≈ 138.6 − 10 = 128.6 m.',
      },
      {
        question_text:
          'In right triangle DEF, angle D = 90°, DE = 6, and EF = 10. What is cos F?',
        difficulty: 'Hard',
        choices: ['3/5', '4/5', '3/4', '5/4'],
        answer_text: '4/5',
        explanation:
          'Angle D = 90°, so EF (length 10) is the hypotenuse. Find DF using the Pythagorean theorem: DF² + DE² = EF² → DF² = 100 − 36 = 64 → DF = 8. For angle F, the adjacent side is DF = 8 and the hypotenuse is EF = 10, so cos F = 8/10 = 4/5. The value 3/5 = sin F (opposite DE = 6 over hypotenuse 10).',
      },
      {
        question_text:
          'In a right triangle, sin θ = 3/5. What is the value of cos θ × tan θ?',
        difficulty: 'Hard',
        choices: ['3/5', '4/5', '9/20', '3/4'],
        answer_text: '3/5',
        explanation:
          'sin θ = 3/5, so opposite = 3, hypotenuse = 5, adjacent = 4 (3-4-5 triple). cos θ = 4/5. tan θ = 3/4. cos θ × tan θ = (4/5)(3/4) = 12/20 = 3/5. Notice this equals sin θ — a useful identity: cos θ × tan θ = sin θ always.',
      },
      {
        question_text:
          'Two buildings stand 50 meters apart. From the top of the shorter building (height 20 m), the angle of elevation to the top of the taller building is 30°. How tall is the taller building? (tan 30° = √3/3)',
        difficulty: 'Hard',
        choices: [
          '20 + 50√3/3 m',
          '20 + 25√3 m',
          '50√3/3 m',
          '70 m',
        ],
        answer_text: '20 + 50√3/3 m',
        explanation:
          'The height difference between the buildings is opposite the 30° angle, and the horizontal distance (50 m) is adjacent. tan 30° = height difference/50 → √3/3 = Δh/50 → Δh = 50√3/3 m. Taller building height = 20 + 50√3/3 m.',
      },
    ],
  },

  '8.5': {
    essentialQuestion:
      'How does the equation of a circle encode its center and radius, and how do arc, sector, and inscribed angle formulas extend that understanding?',
    concepts: [
      'The standard equation of a circle with center (h, k) and radius r is (x − h)² + (y − k)² = r².',
      'To find center and radius when the equation is expanded, complete the square on both x and y terms.',
      'Arc length = (central angle / 360°) × 2πr; sector area = (central angle / 360°) × πr².',
      'An inscribed angle is exactly half the central angle that intercepts the same arc.',
      'A tangent line to a circle is perpendicular to the radius drawn to the point of tangency.',
    ],
    keyTerms: [
      {
        term: 'Standard Form of a Circle',
        definition:
          '(x − h)² + (y − k)² = r², where (h, k) is the center and r is the radius.',
      },
      {
        term: 'Completing the Square',
        definition:
          'An algebraic technique for rewriting a quadratic expression as a perfect square trinomial, used to convert a circle equation into standard form.',
      },
      {
        term: 'Arc Length',
        definition:
          'The portion of the circumference cut off by a central angle; arc length = (θ/360°) × 2πr.',
      },
      {
        term: 'Sector Area',
        definition:
          'The "pie-slice" area bounded by two radii and an arc; sector area = (θ/360°) × πr².',
      },
      {
        term: 'Inscribed Angle',
        definition:
          'An angle formed by two chords that share an endpoint on the circle; it equals half the central angle intercepting the same arc.',
      },
      {
        term: 'Tangent Line',
        definition:
          'A line that touches a circle at exactly one point and is perpendicular to the radius at that point.',
      },
    ],
    workedExample: {
      problem:
        'Find the center and radius of the circle given by x² + y² − 6x + 4y − 3 = 0.',
      steps: [
        'Group x and y terms: (x² − 6x) + (y² + 4y) = 3.',
        'Complete the square for x: add (6/2)² = 9 to both sides → (x² − 6x + 9) + (y² + 4y) = 12.',
        'Complete the square for y: add (4/2)² = 4 to both sides → (x² − 6x + 9) + (y² + 4y + 4) = 16.',
        'Write in standard form: (x − 3)² + (y + 2)² = 16.',
        'Center = (3, −2), radius = √16 = 4.',
      ],
      answer: 'Center (3, −2), radius 4',
    },
    commonMistakes: [
      'Reading center as (h, k) from (x + h)² + (y + k)² — remember the signs flip: (x − 3)² means h = 3, not −3.',
      'Forgetting to add the completing-the-square amounts to BOTH sides of the equation.',
      'Using the diameter instead of the radius in arc length and sector area formulas.',
      'Confusing inscribed angle (half the arc) with central angle (equal to the arc).',
    ],
    tip: 'For inscribed angles, draw a dot at the center and the intercepted arc — the central angle is always the "big" one that the inscribed angle is half of.',
    graphType: 'circle',
    questions: [
      // Easy ×4
      {
        question_text:
          'What is the center and radius of the circle (x − 4)² + (y + 1)² = 25?',
        difficulty: 'Easy',
        choices: [
          'Center (4, 1), r = 5',
          'Center (−4, 1), r = 5',
          'Center (4, −1), r = 5',
          'Center (4, −1), r = 25',
        ],
        answer_text: 'Center (4, −1), r = 5',
        explanation:
          'Standard form is (x − h)² + (y − k)² = r². Here h = 4, k = −1 (note: y + 1 = y − (−1)), and r = √25 = 5.',
      },
      {
        question_text:
          'A circle has equation x² + y² = 49. What is its circumference? (Leave in terms of π.)',
        difficulty: 'Easy',
        choices: ['7π', '14π', '49π', '98π'],
        answer_text: '14π',
        explanation:
          'The radius is √49 = 7. Circumference = 2πr = 2π(7) = 14π. The area would be 49π — a common mix-up.',
      },
      {
        question_text:
          'A circle has center (0, 0) and radius 6. Which equation represents this circle?',
        difficulty: 'Easy',
        choices: [
          'x² + y² = 6',
          'x² + y² = 12',
          'x² + y² = 36',
          '(x + 6)² + (y + 6)² = 36',
        ],
        answer_text: 'x² + y² = 36',
        explanation:
          'For a circle centered at the origin with radius r, the equation is x² + y² = r² = 6² = 36.',
      },
      {
        question_text:
          'A circle has radius 10. What is the area of the circle? (Leave in terms of π.)',
        difficulty: 'Easy',
        choices: ['10π', '20π', '50π', '100π'],
        answer_text: '100π',
        explanation:
          'Area = πr² = π(10²) = 100π. A common error is using 20π = 2πr (the circumference), not the area.',
      },
      // Medium ×4
      {
        question_text:
          'Find the center and radius of x² + y² + 8x − 6y + 9 = 0 by completing the square.',
        difficulty: 'Medium',
        choices: [
          'Center (4, −3), r = 4',
          'Center (−4, 3), r = 4',
          'Center (−4, 3), r = 16',
          'Center (4, −3), r = 16',
        ],
        answer_text: 'Center (−4, 3), r = 4',
        explanation:
          'Group: (x² + 8x) + (y² − 6y) = −9. Complete: (x+4)² − 16 + (y−3)² − 9 = −9 → (x+4)² + (y−3)² = 16. Center (−4, 3), r = 4.',
      },
      {
        question_text:
          'A circle has radius 12 cm. What is the arc length of a 90° central angle? (Leave in terms of π.)',
        difficulty: 'Medium',
        choices: ['3π cm', '6π cm', '12π cm', '36π cm'],
        answer_text: '6π cm',
        explanation:
          'Arc length = (90/360) × 2π(12) = (1/4) × 24π = 6π cm.',
      },
      {
        question_text:
          'A circle with radius 9 has a sector with a central angle of 120°. What is the area of the sector? (Leave in terms of π.)',
        difficulty: 'Medium',
        choices: ['9π', '27π', '54π', '81π'],
        answer_text: '27π',
        explanation:
          'Sector area = (120/360) × π(9²) = (1/3) × 81π = 27π. The full circle area would be 81π.',
      },
      {
        question_text:
          'A circle has center (2, 5) and passes through the point (2, 11). What is the equation of the circle?',
        difficulty: 'Medium',
        choices: [
          '(x − 2)² + (y − 5)² = 6',
          '(x − 2)² + (y − 5)² = 36',
          '(x + 2)² + (y + 5)² = 36',
          '(x − 2)² + (y − 5)² = 12',
        ],
        answer_text: '(x − 2)² + (y − 5)² = 36',
        explanation:
          'Radius = distance from center to the point = √((2−2)² + (11−5)²) = √(0 + 36) = 6. Equation: (x−2)² + (y−5)² = 36.',
      },
      // Hard ×4
      {
        question_text:
          'A tangent line is drawn from a point P, which is 10 cm from the center of a circle with radius 6 cm. What is the length of the tangent segment from P to the point of tangency?',
        difficulty: 'Hard',
        choices: ['4 cm', '4√2 cm', '8 cm', '4√7 cm'],
        answer_text: '8 cm',
        explanation:
          'The radius to the point of tangency is perpendicular to the tangent line, forming a right triangle: radius² + tangent² = distance². 6² + t² = 10² → t² = 100 − 36 = 64 → t = 8 cm.',
      },
      {
        question_text:
          'An inscribed angle in a circle intercepts an arc of 140°. What is the measure of the inscribed angle?',
        difficulty: 'Hard',
        choices: ['35°', '70°', '140°', '280°'],
        answer_text: '70°',
        explanation:
          'An inscribed angle equals half the intercepted arc: inscribed angle = 140°/2 = 70°. The central angle intercepting the same arc would be 140°.',
      },
      {
        question_text:
          'Find all points where the line y = x + 1 intersects the circle x² + y² = 25.',
        difficulty: 'Hard',
        choices: [
          '(3, 4) and (−4, −3)',
          '(3, 4) and (4, 3)',
          '(−3, −4) and (4, 5)',
          '(−4, −3) and (5, 4)',
        ],
        answer_text: '(3, 4) and (−4, −3)',
        explanation:
          'Substitute y = x + 1 into x² + y² = 25: x² + (x+1)² = 25 → x² + x² + 2x + 1 = 25 → 2x² + 2x − 24 = 0 → x² + x − 12 = 0 → (x+4)(x−3) = 0 → x = −4 or x = 3. Points: (3, 4) and (−4, −3).',
      },
      {
        question_text:
          'A circle passes through the origin and has center (3, 4). What is the equation of the circle, and what is its radius?',
        difficulty: 'Hard',
        choices: [
          '(x − 3)² + (y − 4)² = 5; r = 5',
          '(x − 3)² + (y − 4)² = 7; r = 7',
          '(x − 3)² + (y − 4)² = 25; r = 5',
          '(x + 3)² + (y + 4)² = 25; r = 5',
        ],
        answer_text: '(x − 3)² + (y − 4)² = 25; r = 5',
        explanation:
          'Radius = distance from center (3, 4) to origin (0, 0) = √(3² + 4²) = √25 = 5. Equation: (x − 3)² + (y − 4)² = 25.',
      },
    ],
  },
}
