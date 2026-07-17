export interface LessonContent {
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

export const SAT_UNIT7_CONTENT: Record<string, LessonContent> = {
  '7.1': {
    essentialQuestion:
      'When two quantities scale together, how do you set up and solve a proportion to find the missing value?',
    concepts: [
      'A ratio compares two quantities of the same type — 3 cups of flour to 2 cups of sugar is a 3:2 ratio.',
      'A rate compares two quantities of different types — 60 miles per hour compares distance to time.',
      'A proportion says two ratios are equal: a/b = c/d. Cross-multiply to solve for the unknown.',
      'Part-to-part ratios (e.g., 3 boys to 5 girls) and part-to-whole ratios (e.g., 3 boys out of 8 students) are different — read the problem carefully.',
      'Unit rate means the denominator is 1 (e.g., $2.49 per pound). Divide to find it.',
    ],
    keyTerms: [
      {
        term: 'Ratio',
        definition:
          'A comparison of two quantities, written as a:b or a/b. Both quantities must have the same units.',
      },
      {
        term: 'Rate',
        definition:
          'A ratio that compares two quantities with different units, such as miles per hour or dollars per pound.',
      },
      {
        term: 'Proportion',
        definition:
          'An equation stating that two ratios are equal: a/b = c/d. Solved by cross-multiplying: ad = bc.',
      },
      {
        term: 'Unit Rate',
        definition:
          'A rate with a denominator of 1. Found by dividing the numerator by the denominator (e.g., $3.60 for 3 pounds → $1.20 per pound).',
      },
      {
        term: 'Scale Factor',
        definition:
          'The ratio used to enlarge or reduce a figure. A map scale of 1 inch : 50 miles is a scale factor.',
      },
    ],
    workedExample: {
      problem:
        'A car travels 156 miles in 3 hours at a constant speed. At this rate, how many miles will it travel in 5 hours?',
      steps: [
        'Find the unit rate (speed): 156 miles ÷ 3 hours = 52 miles per hour.',
        'Set up a proportion: 156/3 = x/5.',
        'Cross-multiply: 156 × 5 = 3 × x → 780 = 3x.',
        'Divide both sides by 3: x = 260 miles.',
      ],
      answer: '260 miles',
    },
    commonMistakes: [
      'Confusing part-to-part ratios with part-to-whole ratios. If the ratio of red to blue marbles is 2:5, the fraction of red marbles is 2/7, not 2/5.',
      'Setting up the proportion in the wrong order. Make sure both ratios have the same units in the same position (miles/hour = miles/hour).',
      'Forgetting to convert units before comparing rates (e.g., comparing mph to feet per second).',
    ],
    tip: 'Always write out the units in your proportion — they act as a built-in check. If the units cancel correctly, your setup is right.',
    graphType: 'data-table',
    questions: [
      // Easy 1
      {
        question_text:
          'A recipe calls for 2 cups of rice for every 3 cups of water. If Maya wants to make a larger batch using 9 cups of water, how many cups of rice does she need?',
        difficulty: 'Easy',
        choices: ['4 cups', '6 cups', '4.5 cups', '5 cups'],
        answer_text: '6 cups',
        explanation:
          'Set up the proportion: 2/3 = x/9. Cross-multiply: 3x = 18, so x = 6 cups of rice. The ratio of rice to water stays constant at 2:3.',
      },
      // Easy 2
      {
        question_text:
          'A map uses a scale of 1 inch = 25 miles. If two cities are 4 inches apart on the map, what is the actual distance between them?',
        difficulty: 'Easy',
        choices: ['29 miles', '100 miles', '50 miles', '6.25 miles'],
        answer_text: '100 miles',
        explanation:
          'Set up the proportion: 1 inch / 25 miles = 4 inches / x miles. Cross-multiply: x = 4 × 25 = 100 miles.',
      },
      // Easy 3
      {
        question_text:
          'In a class of 30 students, the ratio of students who play a sport to those who do not is 2:3. How many students play a sport?',
        difficulty: 'Easy',
        choices: ['10', '15', '12', '18'],
        answer_text: '12',
        explanation:
          'The ratio 2:3 means 2 parts sport to 3 parts no sport, for 5 total parts. Each part = 30 ÷ 5 = 6 students. Students who play a sport = 2 × 6 = 12.',
      },
      // Easy 4
      {
        question_text:
          'Brand A costs $3.60 for 12 ounces. Brand B costs $4.50 for 18 ounces. Which brand has the lower unit price?',
        difficulty: 'Easy',
        choices: [
          'Brand A, at $0.25 per ounce',
          'Brand B, at $0.25 per ounce',
          'They are the same price per ounce',
          'Brand A, at $0.30 per ounce',
        ],
        answer_text: 'Brand B, at $0.25 per ounce',
        explanation:
          'Brand A unit price: $3.60 ÷ 12 = $0.30 per ounce. Brand B unit price: $4.50 ÷ 18 = $0.25 per ounce. Brand B is cheaper at $0.25 per ounce versus Brand A at $0.30 per ounce.',
      },
      // Medium 1
      {
        question_text:
          'A train travels at 80 miles per hour. A car travels the same 240-mile route but takes 1 hour longer than the train. How fast does the car travel?',
        difficulty: 'Medium',
        choices: ['48 mph', '60 mph', '72 mph', '80 mph'],
        answer_text: '60 mph',
        explanation:
          'Train time = 240 ÷ 80 = 3 hours. Car takes 1 hour longer, so 4 hours. Car speed = 240 ÷ 4 = 60 mph.',
      },
      // Medium 2
      {
        question_text:
          'On a map with a scale of 1.5 cm : 30 km, two towns measure 8 cm apart. What is the actual distance between the towns?',
        difficulty: 'Medium',
        choices: ['80 km', '120 km', '160 km', '240 km'],
        answer_text: '160 km',
        explanation:
          'First find the unit scale: 30 km ÷ 1.5 cm = 20 km per cm. Then multiply: 8 cm × 20 km/cm = 160 km.',
      },
      // Medium 3
      {
        question_text:
          'Miguel can paint a fence in 6 hours. His sister can paint the same fence in 4 hours. Working together, how many hours will it take them to paint the fence?',
        difficulty: 'Medium',
        choices: ['2 hours', '2.4 hours', '3 hours', '5 hours'],
        answer_text: '2.4 hours',
        explanation:
          "Miguel's rate = 1/6 fence per hour; sister's rate = 1/4 fence per hour. Combined rate = 1/6 + 1/4 = 2/12 + 3/12 = 5/12 fence per hour. Time = 1 ÷ (5/12) = 12/5 = 2.4 hours.",
      },
      // Medium 4
      {
        question_text:
          'A survey found that 3 out of every 8 students at Jefferson High walk to school. If there are 1,200 students at the school, how many students do NOT walk to school?',
        difficulty: 'Medium',
        choices: ['450', '750', '600', '900'],
        answer_text: '750',
        explanation:
          'Students who walk: (3/8) × 1,200 = 450. Students who do not walk: 1,200 − 450 = 750. Note that 3:8 is a part-to-whole ratio, so 3/8 of students walk.',
      },
      // Hard 1
      {
        question_text:
          'A mixture of nuts contains cashews and almonds in a ratio of 5:3 by weight. If the total mixture weighs 4 pounds, and cashews cost $8 per pound while almonds cost $6 per pound, what is the total cost of the mixture?',
        difficulty: 'Hard',
        choices: ['$27.00', '$28.50', '$29.00', '$30.00'],
        answer_text: '$29.00',
        explanation:
          'Total ratio parts = 5 + 3 = 8. Cashews = (5/8) × 4 = 2.5 pounds; Almonds = (3/8) × 4 = 1.5 pounds. Cost = (2.5 × $8) + (1.5 × $6) = $20 + $9 = $29.00.',
      },
      // Hard 2
      {
        question_text:
          'The ratio of boys to girls in a school club is 4:5. If 6 more boys join the club, the ratio becomes 2:2 (equal). How many girls are currently in the club?',
        difficulty: 'Hard',
        choices: ['15', '20', '25', '30'],
        answer_text: '30',
        explanation:
          'Let boys = 4k and girls = 5k. For the ratio to become 1:1 after 6 more boys join: (4k + 6)/(5k) = 1. So 4k + 6 = 5k → k = 6. Girls = 5k = 5(6) = 30.',
      },
      // Hard 3
      {
        question_text:
          'A car uses 5 gallons of gasoline to travel 160 miles. At this rate, if gasoline costs $3.80 per gallon, how much will the gasoline cost for a 416-mile trip?',
        difficulty: 'Hard',
        choices: ['$38.00', '$45.60', '$49.40', '$52.00'],
        answer_text: '$49.40',
        explanation:
          'Find gallons per mile: 5/160 = 0.03125 gal/mile. Gallons for 416 miles: 416 × 0.03125 = 13 gallons. Cost: 13 × $3.80 = $49.40.',
      },
      // Hard 4
      {
        question_text:
          'In a proportion p/q = r/s, if p is increased by 50% and q is decreased by 25%, what must happen to r/s so the proportion still holds?',
        difficulty: 'Hard',
        choices: [
          'r/s must increase by 25%',
          'r/s must double',
          'r/s must increase by 100%',
          'r/s must increase by 50%',
        ],
        answer_text: 'r/s must double',
        explanation:
          'New left side: (1.5p)/(0.75q) = (1.5/0.75)(p/q) = 2(p/q). So r/s must equal 2 times the original p/q — it must double. For example, if p/q = 1, new ratio = 1.5/0.75 = 2.',
      },
    ],
  },

  '7.2': {
    essentialQuestion:
      'How do percentages model real-world change, and why does a 20% increase followed by a 20% decrease NOT return you to the original value?',
    concepts: [
      'Percent means "per hundred." 45% = 45/100 = 0.45.',
      'To find a percent of a number, multiply: 30% of 80 = 0.30 × 80 = 24.',
      'Percent change = (new − old) / old × 100. Positive = increase; negative = decrease.',
      'A 20% increase followed by a 20% decrease gives 0.80 × 1.20 = 0.96 of the original — a 4% net decrease, not zero.',
      'To find the original value from a result, divide: if a price after a 15% discount is $68, original = $68 / 0.85 = $80.',
    ],
    keyTerms: [
      {
        term: 'Percent',
        definition:
          'A ratio out of 100. Written with the % symbol. 35% means 35 out of every 100.',
      },
      {
        term: 'Percent Change',
        definition:
          '(New Value − Original Value) / Original Value × 100. Positive values are increases; negative are decreases.',
      },
      {
        term: 'Percent Increase',
        definition:
          'When the new value is greater than the original. Multiply the original by (1 + rate) to find the new value.',
      },
      {
        term: 'Percent Decrease',
        definition:
          'When the new value is less than the original. Multiply the original by (1 − rate) to find the new value.',
      },
      {
        term: 'Reverse Percent',
        definition:
          'Working backward from a result to find the original. Divide the result by (1 ± percent rate).',
      },
    ],
    workedExample: {
      problem:
        'A jacket originally priced at $120 is on sale for 25% off. After the discount, a 8% sales tax is applied. What is the final price?',
      steps: [
        'Calculate the discounted price: $120 × (1 − 0.25) = $120 × 0.75 = $90.',
        'Apply the 8% sales tax to the discounted price: $90 × 1.08 = $97.20.',
        'The final price is $97.20.',
      ],
      answer: '$97.20',
    },
    commonMistakes: [
      'Applying the tax to the original price instead of the sale price.',
      'Thinking that a 25% increase then a 25% decrease returns to the start. It actually gives 0.75 × 1.25 = 0.9375, a 6.25% net decrease.',
      'Confusing "what percent of X is Y?" (answer: Y/X × 100) with "Y is X percent of what?" (answer: Y/X as a decimal, then divide).',
    ],
    tip: 'For successive percents, always multiply the multiplier factors together rather than adding or subtracting the percents. Order does not matter for the final result.',
    graphType: 'bar-chart',
    questions: [
      // Easy 1
      {
        question_text:
          'A student scored 36 out of 45 points on a quiz. What percent did the student score?',
        difficulty: 'Easy',
        choices: ['75%', '78%', '80%', '82%'],
        answer_text: '80%',
        explanation:
          'Divide the score by the total and multiply by 100: 36/45 × 100 = 0.8 × 100 = 80%.',
      },
      // Easy 2
      {
        question_text:
          'A phone that originally cost $250 is on sale for 20% off. What is the sale price?',
        difficulty: 'Easy',
        choices: ['$200', '$205', '$210', '$230'],
        answer_text: '$200',
        explanation:
          'Discount amount = 20% × $250 = 0.20 × $250 = $50. Sale price = $250 − $50 = $200. Alternatively, multiply by (1 − 0.20) = 0.80: $250 × 0.80 = $200.',
      },
      // Easy 3
      {
        question_text:
          'A town had a population of 8,000 last year. This year the population is 8,400. What is the percent increase in population?',
        difficulty: 'Easy',
        choices: ['4%', '5%', '6%', '8%'],
        answer_text: '5%',
        explanation:
          'Percent change = (8,400 − 8,000) / 8,000 × 100 = 400 / 8,000 × 100 = 0.05 × 100 = 5%.',
      },
      // Easy 4
      {
        question_text:
          'What is 15% of 240?',
        difficulty: 'Easy',
        choices: ['24', '30', '36', '40'],
        answer_text: '36',
        explanation:
          '15% of 240 = 0.15 × 240 = 36. You can also find 10% (24) and 5% (12) then add: 24 + 12 = 36.',
      },
      // Medium 1
      {
        question_text:
          'A store increases the price of a TV by 30%, then runs a sale with a 30% discount off the new price. What is the net percent change from the original price?',
        difficulty: 'Medium',
        choices: ['0% (no change)', '−4% (a decrease)', '+9% (an increase)', '−9% (a decrease)'],
        answer_text: '−9% (a decrease)',
        explanation:
          'New price after increase: original × 1.30. After 30% discount: (original × 1.30) × 0.70 = original × 0.91. Net change = 0.91 − 1 = −0.09 = −9%. A 30% increase followed by a 30% decrease always results in a net 9% decrease.',
      },
      // Medium 2
      {
        question_text:
          'After a 12% raise, Emma earns $2,240 per month. What was her original monthly salary?',
        difficulty: 'Medium',
        choices: ['$1,971', '$2,000', '$2,100', '$2,268'],
        answer_text: '$2,000',
        explanation:
          'Her new salary is 112% of the original. Set up: 1.12 × original = $2,240. Divide: original = $2,240 ÷ 1.12 = $2,000.',
      },
      // Medium 3
      {
        question_text:
          'In 2020, a school had 850 students. By 2022, enrollment decreased by 6% from 2020 to 2021, then increased by 5% from 2021 to 2022. What was the enrollment in 2022, rounded to the nearest whole number?',
        difficulty: 'Medium',
        choices: ['835', '839', '845', '851'],
        answer_text: '839',
        explanation:
          '2021 enrollment: 850 × 0.94 = 799. 2022 enrollment: 799 × 1.05 = 838.95 ≈ 839. The net effect of a 6% decrease followed by a 5% increase is 0.94 × 1.05 = 0.987, giving 850 × 0.987 ≈ 839.',
      },
      // Medium 4
      {
        question_text:
          '18 is what percent of 72?',
        difficulty: 'Medium',
        choices: ['20%', '25%', '30%', '40%'],
        answer_text: '25%',
        explanation:
          'Percent = (part / whole) × 100 = (18 / 72) × 100 = 0.25 × 100 = 25%.',
      },
      // Hard 1
      {
        question_text:
          'The price of a stock fell 40% in January. In February, the price increased by 60% from its January low. By what percent has the stock price changed overall from its original value?',
        difficulty: 'Hard',
        choices: ['+20%', '+4%', '−4%', '−16%'],
        answer_text: '−4%',
        explanation:
          'If original = $100, after 40% drop: $100 × 0.60 = $60. After 60% increase: $60 × 1.60 = $96. Overall change: (96 − 100)/100 × 100 = −4%. The stock is still 4% below its original price.',
      },
      // Hard 2
      {
        question_text:
          'A store sells a coat at a 35% markup above its wholesale cost. During a clearance sale, the coat is discounted 25% from the store price. If the clearance price is $81, what is the wholesale cost of the coat?',
        difficulty: 'Hard',
        choices: ['$60', '$72', '$75', '$80'],
        answer_text: '$80',
        explanation:
          'Clearance price = wholesale × 1.35 × 0.75. So $81 = wholesale × 1.0125. Wholesale = $81 ÷ 1.0125 = $80.',
      },
      // Hard 3
      {
        question_text:
          'In a class, 40% of students are in honors math and 30% of students are in honors English. If 15% of students are in both honors courses, what percent of students are in at least one honors course?',
        difficulty: 'Hard',
        choices: ['40%', '45%', '55%', '70%'],
        answer_text: '55%',
        explanation:
          'Using the inclusion-exclusion principle: P(at least one) = P(Math) + P(English) − P(Both) = 40% + 30% − 15% = 55%.',
      },
      // Hard 4
      {
        question_text:
          'A population of bacteria doubles every 3 hours. If there are currently 500 bacteria, what percent increase will there be after 9 hours?',
        difficulty: 'Hard',
        choices: ['200%', '600%', '700%', '800%'],
        answer_text: '700%',
        explanation:
          'After 9 hours = 3 doubling periods. New count = 500 × 2³ = 500 × 8 = 4,000. Percent increase = (4,000 − 500)/500 × 100 = 3,500/500 × 100 = 700%.',
      },
    ],
  },

  '7.3': {
    essentialQuestion:
      'How do you convert between units systematically so the answer has the right unit and the right magnitude?',
    concepts: [
      'Dimensional analysis: multiply by conversion fractions so unwanted units cancel and target units remain.',
      'A conversion fraction equals 1: (1 km / 0.621 miles) = 1 because 1 km and 0.621 miles are the same distance.',
      'Chain multiple conversions: hours → minutes → seconds, or meters/second → km/hour.',
      'For rates (like m/s to km/h), convert the numerator and denominator units separately.',
      'Always check that your answer is a reasonable size — converting 30 mph to km/h should give ~48 km/h, not 0.048.',
    ],
    keyTerms: [
      {
        term: 'Dimensional Analysis',
        definition:
          'A method of unit conversion that uses fractions equal to 1 so that unwanted units cancel out.',
      },
      {
        term: 'Conversion Factor',
        definition:
          'A ratio equal to 1 that expresses the same quantity in two different units, e.g., 60 minutes / 1 hour.',
      },
      {
        term: 'Unit Rate',
        definition:
          'A rate expressed with a denominator of 1, such as 55 miles per 1 hour or 3.5 liters per 1 minute.',
      },
      {
        term: 'Flow Rate',
        definition:
          'The volume of fluid passing a point per unit time, often expressed in liters per minute or gallons per hour.',
      },
    ],
    workedExample: {
      problem:
        'A faucet leaks at a rate of 2 liters per minute. How many gallons does it leak in one hour? (Use 1 gallon = 3.785 liters)',
      steps: [
        'Convert minutes to hours: 2 liters/minute × 60 minutes/1 hour = 120 liters/hour.',
        'Convert liters to gallons: 120 liters/hour × (1 gallon / 3.785 liters) = 31.7 gallons/hour.',
        'In one hour, the faucet leaks approximately 31.7 gallons.',
      ],
      answer: 'Approximately 31.7 gallons per hour',
    },
    commonMistakes: [
      'Multiplying when you should divide (or vice versa). Setting up the fraction so the unit you want to eliminate is in the denominator prevents this.',
      'Forgetting to square or cube the conversion factor for area or volume (e.g., 1 foot = 12 inches, but 1 ft² = 144 in²).',
      'Mixing up the given conversion direction. If 1 mile = 1.609 km, then to convert miles to km you multiply by 1.609, not divide.',
    ],
    tip: 'Write the unit you want to eliminate in the denominator of your conversion fraction. If the units cancel on paper, your setup is correct.',
    graphType: 'data-table',
    questions: [
      // Easy 1
      {
        question_text:
          'A classroom is 9 meters long. How long is it in centimeters? (1 meter = 100 centimeters)',
        difficulty: 'Easy',
        choices: ['0.09 cm', '9 cm', '90 cm', '900 cm'],
        answer_text: '900 cm',
        explanation:
          '9 meters × (100 cm / 1 meter) = 900 cm. The meter units cancel, leaving centimeters.',
      },
      // Easy 2
      {
        question_text:
          'A car travels at 60 miles per hour. How far does it travel in 45 minutes?',
        difficulty: 'Easy',
        choices: ['30 miles', '40 miles', '45 miles', '60 miles'],
        answer_text: '45 miles',
        explanation:
          '45 minutes = 45/60 hours = 0.75 hours. Distance = 60 mph × 0.75 hours = 45 miles.',
      },
      // Easy 3
      {
        question_text:
          'A recipe requires 3 pounds of strawberries. The store sells strawberries for $2.40 per pound. What is the total cost?',
        difficulty: 'Easy',
        choices: ['$5.20', '$6.00', '$7.20', '$8.40'],
        answer_text: '$7.20',
        explanation:
          '3 pounds × $2.40/pound = $7.20. The unit "pounds" cancels, leaving dollars.',
      },
      // Easy 4
      {
        question_text:
          'How many seconds are in 2.5 hours? (1 hour = 60 minutes, 1 minute = 60 seconds)',
        difficulty: 'Easy',
        choices: ['150 seconds', '3,600 seconds', '7,200 seconds', '9,000 seconds'],
        answer_text: '9,000 seconds',
        explanation:
          '2.5 hours × (60 min/hr) × (60 sec/min) = 2.5 × 3,600 = 9,000 seconds.',
      },
      // Medium 1
      {
        question_text:
          'A runner completes a 5-kilometer race in 25 minutes. What is the runner\'s average speed in meters per second? (1 km = 1,000 m)',
        difficulty: 'Medium',
        choices: ['2.33 m/s', '3.33 m/s', '3.50 m/s', '5.00 m/s'],
        answer_text: '3.33 m/s',
        explanation:
          'Convert 5 km to meters: 5,000 m. Convert 25 minutes to seconds: 25 × 60 = 1,500 s. Speed = 5,000 m ÷ 1,500 s ≈ 3.33 m/s.',
      },
      // Medium 2
      {
        question_text:
          'A pool holds 12,000 gallons of water and drains at a rate of 40 gallons per minute. How many hours will it take to drain the pool completely?',
        difficulty: 'Medium',
        choices: ['3 hours', '4 hours', '5 hours', '6 hours'],
        answer_text: '5 hours',
        explanation:
          'Time = 12,000 gallons ÷ 40 gal/min = 300 minutes. Convert to hours: 300 ÷ 60 = 5 hours.',
      },
      // Medium 3
      {
        question_text:
          'A car\'s fuel efficiency is 35 miles per gallon. The gas tank holds 12.6 gallons. If gas costs $3.50 per gallon, how much does a full tank of gas cost?',
        difficulty: 'Medium',
        choices: ['$36.40', '$38.50', '$44.10', '$46.20'],
        answer_text: '$44.10',
        explanation:
          'The question asks for the cost of a full tank, not the cost per mile. Cost = 12.6 gallons × $3.50/gallon = $44.10. The fuel efficiency (35 mpg) is extra information not needed here.',
      },
      // Medium 4
      {
        question_text:
          'A speed of 90 kilometers per hour is equivalent to how many meters per second? (1 km = 1,000 m, 1 hour = 3,600 s)',
        difficulty: 'Medium',
        choices: ['20 m/s', '25 m/s', '30 m/s', '324 m/s'],
        answer_text: '25 m/s',
        explanation:
          '90 km/hr × (1,000 m/km) ÷ (3,600 s/hr) = 90,000 ÷ 3,600 = 25 m/s.',
      },
      // Hard 1
      {
        question_text:
          'A farmer irrigates fields using a pump that delivers water at 2.5 cubic feet per second. The farmer needs 180,000 gallons of water. How many hours will the pump need to run? (1 cubic foot = 7.48 gallons)',
        difficulty: 'Hard',
        choices: ['1.5 hours', '2.25 hours', '2.67 hours', '3.0 hours'],
        answer_text: '2.67 hours',
        explanation:
          'Convert pump rate to gallons per second: 2.5 ft³/s × 7.48 gal/ft³ = 18.7 gal/s. Time in seconds: 180,000 ÷ 18.7 ≈ 9,626 s. Convert to hours: 9,626 ÷ 3,600 ≈ 2.67 hours.',
      },
      // Hard 2
      {
        question_text:
          'An athlete runs at 8 miles per hour. A second athlete runs at 11 meters per second. Which athlete is faster, and by approximately how many mph? (1 mile = 1,609 meters)',
        difficulty: 'Hard',
        choices: [
          'First athlete by 1.4 mph',
          'Second athlete by 0.6 mph',
          'Second athlete by 16.6 mph',
          'They run at the same speed',
        ],
        answer_text: 'Second athlete by 16.6 mph',
        explanation:
          'Convert 11 m/s to mph: 11 m/s × (3,600 s/hr) ÷ (1,609 m/mile) = 39,600 ÷ 1,609 ≈ 24.6 mph. The second athlete runs 24.6 − 8 = 16.6 mph faster.',
      },
      // Hard 3
      {
        question_text:
          'A swimming pool is 25 meters long, 12 meters wide, and 2 meters deep. Water is pumped in at 500 liters per minute. How many hours will it take to fill the pool? (1 cubic meter = 1,000 liters)',
        difficulty: 'Hard',
        choices: ['10 hours', '20 hours', '30 hours', '40 hours'],
        answer_text: '20 hours',
        explanation:
          'Volume = 25 × 12 × 2 = 600 cubic meters = 600,000 liters. Time = 600,000 liters ÷ 500 liters/min = 1,200 minutes. Convert to hours: 1,200 ÷ 60 = 20 hours.',
      },
      // Hard 4
      {
        question_text:
          'A car travels the first 120 miles of a trip at 60 mph and the last 80 miles at 40 mph. What is the car\'s average speed for the entire trip?',
        difficulty: 'Hard',
        choices: ['48 mph', '50 mph', '52 mph', '55 mph'],
        answer_text: '50 mph',
        explanation:
          'Average speed = total distance / total time. Time for first part: 120/60 = 2 hours. Time for second part: 80/40 = 2 hours. Total time = 4 hours. Total distance = 200 miles. Average speed = 200/4 = 50 mph. Note: you cannot simply average 60 and 40 because the times are equal here, which gives the same result — but this is coincidental.',
      },
    ],
  },

  '7.4': {
    essentialQuestion:
      'What does the shape of a data distribution tell you about where most values fall and how spread out the data is?',
    concepts: [
      'A histogram shows frequency (count) for intervals of data. Taller bars mean more data in that range.',
      'A box plot shows five key values: minimum, Q1 (25th percentile), median, Q3 (75th percentile), and maximum.',
      'IQR (Interquartile Range) = Q3 − Q1. It measures the spread of the middle 50% of data.',
      'A right-skewed (positively skewed) distribution has a longer tail on the right; the mean is greater than the median.',
      'A left-skewed distribution has a longer tail on the left; the mean is less than the median.',
    ],
    keyTerms: [
      {
        term: 'Histogram',
        definition:
          'A bar graph where bars represent frequency within equal intervals. Bars touch each other (unlike regular bar charts).',
      },
      {
        term: 'Box Plot (Box-and-Whisker)',
        definition:
          'A graph showing the five-number summary: minimum, Q1, median, Q3, and maximum.',
      },
      {
        term: 'IQR (Interquartile Range)',
        definition:
          'Q3 − Q1. Measures the spread of the middle 50% of the data. Resistant to outliers.',
      },
      {
        term: 'Skewness',
        definition:
          'The asymmetry of a distribution. Right-skewed = long tail on right (mean > median). Left-skewed = long tail on left (mean < median).',
      },
      {
        term: 'Outlier',
        definition:
          'A data point significantly different from the others. Typically defined as a value below Q1 − 1.5×IQR or above Q3 + 1.5×IQR.',
      },
    ],
    workedExample: {
      problem:
        'A box plot shows test scores with the following values: minimum = 52, Q1 = 68, median = 75, Q3 = 84, maximum = 98. What is the IQR, and what does it tell us?',
      steps: [
        'IQR = Q3 − Q1 = 84 − 68 = 16 points.',
        'The IQR of 16 means the middle 50% of students scored within a 16-point range (68 to 84).',
        'The range of all scores is 98 − 52 = 46 points, but the IQR shows the typical spread is tighter.',
      ],
      answer: 'IQR = 16; the middle 50% of scores span 16 points (from 68 to 84)',
    },
    commonMistakes: [
      'Reading histogram bars incorrectly — the height represents frequency (count), not the data value.',
      'Confusing range with IQR. Range = max − min (affected by outliers); IQR = Q3 − Q1 (resistant to outliers).',
      'Assuming the median is the middle bar of a histogram — you must add up frequencies to find the actual middle value.',
    ],
    tip: 'In a right-skewed distribution, the mean is pulled toward the long tail (right), so mean > median. Use this to check your reasoning about skewness direction.',
    graphType: 'histogram',
    questions: [
      // Easy 1
      {
        question_text:
          'A histogram shows the number of hours students study per week. The bars show: 0–5 hours: 8 students, 5–10 hours: 15 students, 10–15 hours: 12 students, 15–20 hours: 5 students. How many students study 10 or more hours per week?',
        difficulty: 'Easy',
        choices: ['12', '15', '17', '20'],
        answer_text: '17',
        explanation:
          'Students in the 10–15 hour interval: 12. Students in the 15–20 hour interval: 5. Total = 12 + 5 = 17 students.',
      },
      // Easy 2
      {
        question_text:
          'A box plot of students\' test scores has a minimum of 48, Q1 of 62, median of 74, Q3 of 82, and maximum of 96. What is the range of test scores?',
        difficulty: 'Easy',
        choices: ['20', '34', '48', '96'],
        answer_text: '48',
        explanation:
          'Range = maximum − minimum = 96 − 48 = 48 points.',
      },
      // Easy 3
      {
        question_text:
          'A box plot shows quiz scores with Q1 = 70 and Q3 = 86. What is the IQR?',
        difficulty: 'Easy',
        choices: ['8', '16', '20', '78'],
        answer_text: '16',
        explanation:
          'IQR = Q3 − Q1 = 86 − 70 = 16.',
      },
      // Easy 4
      {
        question_text:
          'A histogram of daily temperatures shows that 6 days had temperatures in the 80–90°F range and 10 days had temperatures in the 70–80°F range. Which range had more days?',
        difficulty: 'Easy',
        choices: [
          '80–90°F, with 10 days',
          '70–80°F, with 10 days',
          '80–90°F, with 6 days',
          'They had the same number of days',
        ],
        answer_text: '70–80°F, with 10 days',
        explanation:
          'The 70–80°F bar has a height of 10, while the 80–90°F bar has a height of 6. More days fell in the 70–80°F range.',
      },
      // Medium 1
      {
        question_text:
          'Two classes took the same test. Class A has a median of 78 and IQR of 12. Class B has a median of 78 and IQR of 24. Which statement best describes the difference between the two classes?',
        difficulty: 'Medium',
        choices: [
          'Class A performed better overall',
          'Class B has more consistent scores',
          'Class A has more consistent (less spread-out) scores',
          'The classes performed identically',
        ],
        answer_text: 'Class A has more consistent (less spread-out) scores',
        explanation:
          'Both classes have the same median (center) of 78, so average performance is equal. However, Class A\'s IQR of 12 is smaller than Class B\'s IQR of 24, meaning Class A\'s middle 50% of scores are more tightly clustered — less spread out.',
      },
      // Medium 2
      {
        question_text:
          'A histogram of household incomes in a neighborhood is strongly right-skewed. Which statement about the mean and median is most likely true?',
        difficulty: 'Medium',
        choices: [
          'The mean equals the median',
          'The mean is less than the median',
          'The mean is greater than the median',
          'The mean and median cannot be determined from a histogram',
        ],
        answer_text: 'The mean is greater than the median',
        explanation:
          'A right-skewed distribution has a long tail on the right, pulled by high-income outliers. The mean is sensitive to these extreme values and gets pulled right (higher). The median is resistant to outliers. So mean > median in a right-skewed distribution.',
      },
      // Medium 3
      {
        question_text:
          'A dot plot shows 9 data values: 4, 5, 5, 6, 7, 8, 8, 9, 10. A new value of 30 is added to the dataset. Which measure of center changes more significantly?',
        difficulty: 'Medium',
        choices: [
          'The median changes more',
          'The mean changes more',
          'Both change by the same amount',
          'Neither changes significantly',
        ],
        answer_text: 'The mean changes more',
        explanation:
          'Original mean = (4+5+5+6+7+8+8+9+10)/9 = 62/9 ≈ 6.9. New mean = (62+30)/10 = 92/10 = 9.2. Original median = 7 (middle value of 9). New median (10 values) = (7+8)/2 = 7.5. The mean shifted by about 2.3 points while the median shifted only 0.5 — the mean is far more affected by the outlier.',
      },
      // Medium 4
      {
        question_text:
          'A box plot for Dataset A shows: min=10, Q1=20, med=30, Q3=45, max=60. A box plot for Dataset B shows: min=15, Q1=25, med=30, Q3=35, max=50. Which dataset has greater spread in the middle 50% of data?',
        difficulty: 'Medium',
        choices: [
          'Dataset A, because its range is larger',
          'Dataset A, because its IQR is larger',
          'Dataset B, because its median is the same',
          'Dataset B, because its minimum is higher',
        ],
        answer_text: 'Dataset A, because its IQR is larger',
        explanation:
          'IQR of Dataset A = Q3 − Q1 = 45 − 20 = 25. IQR of Dataset B = 35 − 25 = 10. Dataset A has a larger IQR, meaning its middle 50% is more spread out.',
      },
      // Hard 1
      {
        question_text:
          'A dataset of 11 values has a median of 42. The values in order are: 18, 24, 31, x, 40, 42, 45, 50, 55, 61, 70. What is the value of x?',
        difficulty: 'Hard',
        choices: [
          'x can be any value less than 40',
          'x can be any value from 32 to 40',
          'x must equal 38',
          'x must equal 40',
        ],
        answer_text: 'x can be any value from 32 to 40',
        explanation:
          'With 11 values, the median is the 6th value. The 6th value in the ordered list is 42 (already given). For the list to remain in order, x must satisfy 31 ≤ x ≤ 40 (x comes after 31 and before 40). More precisely, x can range from 31 to 40 (inclusive) without changing the median.',
      },
      // Hard 2
      {
        question_text:
          'A right-skewed histogram shows the number of books read per month by 200 students. Most students read 1–3 books, but a few read 10 or more. If the school requires students to read at a "typical" pace, which measure of center should the school use to describe the typical student, and why?',
        difficulty: 'Hard',
        choices: [
          'The mean, because it uses all data values',
          'The median, because it is not affected by the students who read very many books',
          'The mode, because it shows the most common number of books',
          'The range, because it shows the full spread of reading habits',
        ],
        answer_text: 'The median, because it is not affected by the students who read very many books',
        explanation:
          'In a right-skewed distribution, the few students who read 10+ books pull the mean upward, making it unrepresentative of the typical student. The median is resistant to outliers and better represents the center of what most students actually do.',
      },
      // Hard 3
      {
        question_text:
          'A dataset has Q1 = 15 and Q3 = 35. Using the 1.5 × IQR rule, which value would be classified as an outlier?',
        difficulty: 'Hard',
        choices: ['5', '45', '55', '70'],
        answer_text: '70',
        explanation:
          'IQR = 35 − 15 = 20. Lower fence = Q1 − 1.5×IQR = 15 − 30 = −15. Upper fence = Q3 + 1.5×IQR = 35 + 30 = 65. Any value below −15 or above 65 is an outlier. Among the choices: 5 > −15 (not outlier), 45 < 65 (not), 55 < 65 (not), 70 > 65 (outlier). Only 70 falls outside the fences.',
      },
      // Hard 4
      {
        question_text:
          'Two histograms display scores from two sections of a biology test. Section 1 has a roughly symmetric distribution centered at 75 with most bars at similar heights. Section 2 has a left-skewed distribution with most scores between 80–100 and a few scores near 50. Which section most likely has a higher median score?',
        difficulty: 'Hard',
        choices: [
          'Section 1, because it is symmetric',
          'Section 2, because more scores are in the 80–100 range',
          'Both sections have the same median',
          'Cannot be determined without exact values',
        ],
        answer_text: 'Section 2, because more scores are in the 80–100 range',
        explanation:
          'Section 2 is left-skewed with most data concentrated in the high range (80–100), so the median falls in that high range. Section 1 is symmetric around 75, so its median is approximately 75. Section 2\'s median is likely higher than 75.',
      },
    ],
  },

  '7.5': {
    essentialQuestion:
      'How do mean, median, and mode each describe the "center" of a dataset, and when does each measure mislead you?',
    concepts: [
      'Mean = sum of all values ÷ number of values. Sensitive to outliers.',
      'Median = middle value when data is ordered. Use (n+1)/2 to find the position. If n is even, average the two middle values.',
      'Mode = most frequently occurring value. A dataset can have no mode, one mode, or multiple modes.',
      'Outliers pull the mean toward them but barely affect the median — the median is "resistant."',
      'Weighted average gives each value a weight based on its importance: weighted mean = Σ(value × weight) / Σ(weights).',
    ],
    keyTerms: [
      {
        term: 'Mean (Average)',
        definition:
          'The sum of all data values divided by the count of values. Sensitive to extreme values (outliers).',
      },
      {
        term: 'Median',
        definition:
          'The middle value in an ordered dataset. For even n, it is the average of the two middle values. Resistant to outliers.',
      },
      {
        term: 'Mode',
        definition:
          'The value that appears most often in a dataset. A dataset may have no mode or multiple modes.',
      },
      {
        term: 'Weighted Average',
        definition:
          'An average where each value is multiplied by its relative weight. Used for GPA, course grades with different point values, etc.',
      },
      {
        term: 'Outlier',
        definition:
          'A data value far removed from the rest. Outliers inflate or deflate the mean but have little effect on the median.',
      },
    ],
    workedExample: {
      problem:
        'A student received these test scores: 82, 78, 90, 85, 78, 95. Find the mean, median, and mode.',
      steps: [
        'Mean: (82 + 78 + 90 + 85 + 78 + 95) / 6 = 508 / 6 ≈ 84.7.',
        'Median: Order the scores: 78, 78, 82, 85, 90, 95. With 6 values, median = average of 3rd and 4th = (82 + 85)/2 = 83.5.',
        'Mode: 78 appears twice; all others appear once. Mode = 78.',
      ],
      answer: 'Mean ≈ 84.7, Median = 83.5, Mode = 78',
    },
    commonMistakes: [
      'Forgetting to order the data before finding the median — the median is the middle value of an ORDERED list.',
      'Using the mean to describe skewed data. For household income or home prices, the mean is inflated by high earners; the median is more representative.',
      'Averaging percentages or rates without weighting. If 40% of 200 students and 60% of 50 students passed, the overall pass rate is NOT (40+60)/2 = 50%.',
    ],
    tip: 'To find a missing value when you know the mean, use: missing value = (desired mean × total count) − sum of known values.',
    graphType: 'box-plot',
    questions: [
      // Easy 1
      {
        question_text:
          'Five friends recorded how many miles they jogged last week: 3, 5, 7, 4, 6. What is the mean number of miles jogged?',
        difficulty: 'Easy',
        choices: ['4', '5', '6', '7'],
        answer_text: '5',
        explanation:
          'Mean = (3 + 5 + 7 + 4 + 6) / 5 = 25 / 5 = 5 miles.',
      },
      // Easy 2
      {
        question_text:
          'Eight students scored the following points in a trivia game: 12, 15, 9, 18, 15, 11, 14, 16. What is the median score?',
        difficulty: 'Easy',
        choices: ['14', '14.5', '15', '15.5'],
        answer_text: '14.5',
        explanation:
          'Order the scores: 9, 11, 12, 14, 15, 15, 16, 18. With 8 values, the median is the average of the 4th and 5th values: (14 + 15)/2 = 14.5.',
      },
      // Easy 3
      {
        question_text:
          'A store sold the following number of smoothies each day for a week: 23, 31, 28, 31, 19, 31, 27. What is the mode?',
        difficulty: 'Easy',
        choices: ['23', '27', '28', '31'],
        answer_text: '31',
        explanation:
          '31 appears three times (on days 2, 4, and 6), while all other values appear only once. The mode is 31.',
      },
      // Easy 4
      {
        question_text:
          'The temperatures (°F) recorded each morning for 5 days were: 62, 65, 61, 63, 64. What is the mean morning temperature?',
        difficulty: 'Easy',
        choices: ['61°F', '62°F', '63°F', '64°F'],
        answer_text: '63°F',
        explanation:
          'Mean = (62 + 65 + 61 + 63 + 64) / 5 = 315 / 5 = 63°F.',
      },
      // Medium 1
      {
        question_text:
          'A class of 20 students has a mean test score of 74. A new student joins and scores 94. What is the new mean score for the class of 21 students?',
        difficulty: 'Medium',
        choices: ['74.8', '75.0', '75.2', '76.0'],
        answer_text: '75.0',
        explanation:
          'Original total = 74 × 20 = 1,480. New total = 1,480 + 94 = 1,574. New mean = 1,574 / 21 ≈ 74.95 ≈ 75.0.',
      },
      // Medium 2
      {
        question_text:
          'A dataset of salaries is: $32,000, $35,000, $38,000, $40,000, $200,000. Which statement is true?',
        difficulty: 'Medium',
        choices: [
          'The mean ($69,000) is a better measure of center than the median ($38,000)',
          'The median ($38,000) is a better measure of center than the mean ($69,000)',
          'The mean and median are both equally good measures of center',
          'The mode is the best measure of center for this dataset',
        ],
        answer_text: 'The median ($38,000) is a better measure of center than the mean ($69,000)',
        explanation:
          'The $200,000 salary is an outlier that pulls the mean up to (32+35+38+40+200)/5 = 345/5 = $69,000. This does not represent the typical worker. The median ($38,000, the 3rd value when ordered) is resistant to the outlier and better describes the typical salary.',
      },
      // Medium 3
      {
        question_text:
          'A student\'s final grade is a weighted average: homework counts 20%, quizzes 30%, and the final exam 50%. The student earned 85 on homework, 78 on quizzes, and 92 on the final exam. What is the student\'s final grade?',
        difficulty: 'Medium',
        choices: ['83.4', '85.0', '86.4', '87.2'],
        answer_text: '86.4',
        explanation:
          'Weighted grade = (85 × 0.20) + (78 × 0.30) + (92 × 0.50) = 17 + 23.4 + 46 = 86.4.',
      },
      // Medium 4
      {
        question_text:
          'A dataset of 7 values has a median of 45. Six of the values are: 28, 36, 41, 49, 52, 60. The 7th value is unknown. What can you conclude about the unknown value?',
        difficulty: 'Medium',
        choices: [
          'The unknown value must be 45',
          'The unknown value must be between 41 and 49',
          'The unknown value must be less than 41',
          'The unknown value can be any number between 41 and 49 (inclusive)',
        ],
        answer_text: 'The unknown value must be 45',
        explanation:
          'With 7 values, the median is the 4th value in order. The sorted list is 28, 36, 41, x, 49, 52, 60 (x is in the 4th position). For the median to equal 45, the 4th value must be exactly 45. Therefore x = 45. (If x were, say, 43, the 4th value and median would be 43, not 45.)',
      },
      // Hard 1
      {
        question_text:
          'The mean of six numbers is 48. Five of the numbers are 42, 55, 31, 60, and 47. What is the sixth number?',
        difficulty: 'Hard',
        choices: ['51', '53', '55', '57'],
        answer_text: '53',
        explanation:
          'Total sum = 48 × 6 = 288. Sum of known five values = 42 + 55 + 31 + 60 + 47 = 235. Sixth number = 288 − 235 = 53.',
      },
      // Hard 2
      {
        question_text:
          'A dataset of 9 values has a median of 20. If a new value of 50 is added, making 10 values total, what is the new median if the new value does not change the relative order of the other values?',
        difficulty: 'Hard',
        choices: [
          'Still 20',
          'Between 20 and the next value above 20',
          'The average of the 5th and 6th values (both above 20)',
          'Cannot be determined without the full dataset',
        ],
        answer_text: 'Cannot be determined without the full dataset',
        explanation:
          'With 9 values, the median is the 5th value = 20. When 50 is added (as the 10th, highest value), the new median = average of 5th and 6th values. We know the 5th value is 20, but we don\'t know the 6th value without the full dataset. So the new median cannot be precisely determined.',
      },
      // Hard 3
      {
        question_text:
          'Three sections of a chemistry class took the same test. Section A (25 students) averaged 72. Section B (30 students) averaged 80. Section C (45 students) averaged 85. What is the overall mean score for all students?',
        difficulty: 'Hard',
        choices: ['79', '80', '81', '82'],
        answer_text: '80',
        explanation:
          'Total points: Section A = 25 × 72 = 1,800; Section B = 30 × 80 = 2,400; Section C = 45 × 85 = 3,825. Total = 8,025. Total students = 25 + 30 + 45 = 100. Overall mean = 8,025 / 100 = 80.25 ≈ 80.',
      },
      // Hard 4
      {
        question_text:
          'A student wants to raise her test average from 82 to 85 in a class with 4 tests already taken. The fifth and final test is the only one remaining. What score must she earn on the fifth test?',
        difficulty: 'Hard',
        choices: ['88', '95', '97', '99'],
        answer_text: '97',
        explanation:
          'Current total = 82 × 4 = 328 points. To average 85 over 5 tests: needed total = 85 × 5 = 425. Required 5th test score = 425 − 328 = 97.',
      },
    ],
  },

  '7.6': {
    essentialQuestion:
      'How do you calculate the probability of an event, and how does knowing one event occurred change the probability of another?',
    concepts: [
      'Probability of an event = number of favorable outcomes / total number of outcomes. Always between 0 and 1.',
      'Two-way tables organize categorical data by two variables. The total for each row and column helps find probabilities.',
      'Conditional probability P(A|B) = P(A and B) / P(B). "Given B occurred, what is the probability of A?"',
      'Complement rule: P(not A) = 1 − P(A). The probability something does NOT happen equals 1 minus the probability it does.',
      'Independent events: P(A and B) = P(A) × P(B). Events are independent if knowing one occurred does not affect the other\'s probability.',
    ],
    keyTerms: [
      {
        term: 'Probability',
        definition:
          'A number between 0 and 1 measuring how likely an event is. 0 = impossible, 1 = certain.',
      },
      {
        term: 'Two-Way Table',
        definition:
          'A table that displays counts for two categorical variables simultaneously, with row and column totals.',
      },
      {
        term: 'Conditional Probability',
        definition:
          'P(A|B): the probability of A given that B has already occurred. Equal to P(A and B) / P(B).',
      },
      {
        term: 'Complement',
        definition:
          'The complement of event A is "not A." P(not A) = 1 − P(A).',
      },
      {
        term: 'Independent Events',
        definition:
          'Two events are independent if the occurrence of one does not affect the probability of the other: P(A and B) = P(A) × P(B).',
      },
    ],
    workedExample: {
      problem:
        'A survey of 200 students found: 80 play sports and study more than 2 hours/day; 40 play sports and study 2 hours or less; 30 don\'t play sports and study more than 2 hours; 50 don\'t play sports and study 2 hours or less. What is the probability that a randomly selected student plays sports, given that the student studies more than 2 hours per day?',
      steps: [
        'Identify the given condition: studies more than 2 hours/day. Total = 80 + 30 = 110 students.',
        'Identify the favorable outcome: plays sports AND studies more than 2 hours. Count = 80 students.',
        'P(sports | >2 hrs study) = 80/110 = 8/11 ≈ 0.727.',
      ],
      answer: 'P(sports | >2 hrs study) = 80/110 ≈ 72.7%',
    },
    commonMistakes: [
      'Using the total of the entire table instead of the row or column total for conditional probability.',
      'Confusing P(A|B) with P(B|A). "The probability a patient tests positive given they have the disease" is different from "the probability they have the disease given they test positive."',
      'Assuming events are independent when they are not. Check: is P(A|B) = P(A)?',
    ],
    tip: 'For conditional probability from a two-way table, zoom in on just the row or column that represents the given condition — that becomes your new total.',
    graphType: 'data-table',
    questions: [
      // Easy 1
      {
        question_text:
          'A bag contains 8 red marbles, 5 blue marbles, and 7 green marbles. If one marble is selected at random, what is the probability of selecting a blue marble?',
        difficulty: 'Easy',
        choices: ['1/4', '1/5', '5/20', '5/8'],
        answer_text: '1/4',
        explanation:
          'Total marbles = 8 + 5 + 7 = 20. P(blue) = 5/20 = 1/4.',
      },
      // Easy 2
      {
        question_text:
          'A school surveyed 150 students about their lunch preference. 90 prefer pizza, and 60 prefer sandwiches. What is the probability that a randomly selected student prefers sandwiches?',
        difficulty: 'Easy',
        choices: ['2/3', '2/5', '3/5', '3/8'],
        answer_text: '2/5',
        explanation:
          'P(sandwiches) = 60/150 = 2/5.',
      },
      // Easy 3
      {
        question_text:
          'The two-way table below shows data for 100 students surveyed about their preferred season. 35 prefer Summer, 25 prefer Fall, 20 prefer Spring, and 20 prefer Winter. What is the probability a randomly selected student prefers Summer or Fall?',
        difficulty: 'Easy',
        choices: ['0.35', '0.50', '0.60', '0.75'],
        answer_text: '0.60',
        explanation:
          'P(Summer or Fall) = (35 + 25)/100 = 60/100 = 0.60.',
      },
      // Easy 4
      {
        question_text:
          'A spinner has 10 equal sections numbered 1 through 10. What is the probability of NOT landing on a number greater than 7?',
        difficulty: 'Easy',
        choices: ['0.3', '0.4', '0.6', '0.7'],
        answer_text: '0.7',
        explanation:
          'Numbers greater than 7: {8, 9, 10} → P(>7) = 3/10 = 0.3. P(NOT >7) = 1 − 0.3 = 0.7.',
      },
      // Medium 1
      {
        question_text:
          'A two-way table shows survey results for 200 students:\n• Owns a pet + plays sports: 60\n• Owns a pet + does not play sports: 40\n• No pet + plays sports: 50\n• No pet + does not play sports: 50\nWhat is the probability that a student plays sports, given that the student owns a pet?',
        difficulty: 'Medium',
        choices: ['3/5', '11/20', '3/10', '2/5'],
        answer_text: '3/5',
        explanation:
          'Restrict to students who own a pet: 60 + 40 = 100. Of those, 60 play sports. P(sports | owns pet) = 60/100 = 3/5.',
      },
      // Medium 2
      {
        question_text:
          'In a class of 30 students, 18 passed the math test and 15 passed the English test. 10 students passed both. Using the complement, what is the probability that a randomly selected student did NOT pass either test?',
        difficulty: 'Medium',
        choices: ['1/6', '7/30', '23/30', '1/2'],
        answer_text: '7/30',
        explanation:
          'P(math or english) = P(math) + P(english) − P(both) = 18/30 + 15/30 − 10/30 = 23/30. P(neither) = 1 − 23/30 = 7/30.',
      },
      // Medium 3
      {
        question_text:
          'A medical test for a disease correctly identifies positive cases 95% of the time. Among 200 patients who take the test, 40 actually have the disease. How many of the 40 sick patients would you expect to test positive?',
        difficulty: 'Medium',
        choices: ['35', '38', '40', '42'],
        answer_text: '38',
        explanation:
          'Expected true positives = 95% × 40 = 0.95 × 40 = 38 patients.',
      },
      // Medium 4
      {
        question_text:
          'A bag has 4 red chips and 6 blue chips. One chip is drawn and not replaced, then a second chip is drawn. What is the probability that the first chip is red and the second chip is also red?',
        difficulty: 'Medium',
        choices: ['4/25', '2/15', '16/100', '1/5'],
        answer_text: '2/15',
        explanation:
          'P(1st red) = 4/10 = 2/5. If 1st is red, 3 red remain out of 9 total: P(2nd red | 1st red) = 3/9 = 1/3. P(both red) = (2/5) × (1/3) = 2/15.',
      },
      // Hard 1
      {
        question_text:
          'Events A and B are independent. P(A) = 0.4 and P(B) = 0.5. What is P(A or B)?',
        difficulty: 'Hard',
        choices: ['0.20', '0.70', '0.90', '0.60'],
        answer_text: '0.70',
        explanation:
          'Since A and B are independent, P(A and B) = P(A) × P(B) = 0.4 × 0.5 = 0.20. P(A or B) = P(A) + P(B) − P(A and B) = 0.4 + 0.5 − 0.20 = 0.70.',
      },
      // Hard 2
      {
        question_text:
          'A two-way table shows 400 survey responses about exercise frequency and diet quality:\n• High exercise + Good diet: 120\n• High exercise + Poor diet: 80\n• Low exercise + Good diet: 60\n• Low exercise + Poor diet: 140\nAre exercise frequency and diet quality independent events? Check using P(Good diet | High exercise) vs. P(Good diet).',
        difficulty: 'Hard',
        choices: [
          'Yes, independent: P(Good diet | High exercise) = P(Good diet)',
          'No, not independent: P(Good diet | High exercise) = 0.60, P(Good diet) = 0.45',
          'No, not independent: P(Good diet | High exercise) = 0.60, P(Good diet) = 0.80',
          'Cannot be determined from a two-way table',
        ],
        answer_text: 'No, not independent: P(Good diet | High exercise) = 0.60, P(Good diet) = 0.45',
        explanation:
          'Total with high exercise = 120 + 80 = 200. P(Good diet | High exercise) = 120/200 = 0.60. Total with good diet = 120 + 60 = 180. P(Good diet) = 180/400 = 0.45. Since 0.60 ≠ 0.45, the events are NOT independent — people who exercise more are more likely to have good diets.',
      },
      // Hard 3
      {
        question_text:
          'A carnival game costs $2 to play. You win $8 with probability 1/5, win $3 with probability 1/4, and win nothing otherwise. What is the expected net gain (or loss) per game?',
        difficulty: 'Hard',
        choices: ['−$0.35', '+$0.35', '+$0.85', '−$0.85'],
        answer_text: '+$0.35',
        explanation:
          'P(nothing) = 1 − 1/5 − 1/4 = 11/20. Expected winnings = (8)(1/5) + (3)(1/4) + (0)(11/20) = 1.60 + 0.75 = $2.35. Subtract the $2 cost: net expected gain = $2.35 − $2.00 = +$0.35 per game.',
      },
      // Hard 4
      {
        question_text:
          'A school has 60% juniors and 40% seniors. Among juniors, 70% have a driver\'s license. Among seniors, 90% have a driver\'s license. If a randomly selected student has a driver\'s license, what is the probability the student is a junior?',
        difficulty: 'Hard',
        choices: ['0.42', '0.538', '0.60', '0.70'],
        answer_text: '0.538',
        explanation:
          'P(license) = P(license|junior)×P(junior) + P(license|senior)×P(senior) = (0.70)(0.60) + (0.90)(0.40) = 0.42 + 0.36 = 0.78. P(junior|license) = P(license|junior)×P(junior) / P(license) = 0.42/0.78 ≈ 0.538.',
      },
    ],
  },

  '7.7': {
    essentialQuestion:
      'When two variables show a pattern in a scatterplot, how do you describe and use that relationship to make predictions?',
    concepts: [
      'A scatterplot displays paired (x, y) data. Each point represents one observation.',
      'Positive association: as x increases, y tends to increase. Negative association: as x increases, y tends to decrease.',
      'The line of best fit (trend line) minimizes the distance between the line and data points.',
      'Slope of the line of best fit: for every 1-unit increase in x, y changes by slope units. Always interpret in context.',
      'A residual = actual y − predicted y. Positive residual: actual is above the line. Negative: actual is below the line.',
    ],
    keyTerms: [
      {
        term: 'Scatterplot',
        definition:
          'A graph of ordered pairs (x, y) used to explore the relationship between two quantitative variables.',
      },
      {
        term: 'Correlation',
        definition:
          'The direction and strength of a linear relationship. Positive (both increase), negative (one increases as other decreases), or no correlation.',
      },
      {
        term: 'Line of Best Fit',
        definition:
          'A line drawn through a scatterplot that best represents the overall trend of the data, minimizing total distance from points to line.',
      },
      {
        term: 'Slope (in context)',
        definition:
          'The rate of change of y per 1-unit increase in x. In a line of best fit, it describes how much the response variable changes per unit of the explanatory variable.',
      },
      {
        term: 'Residual',
        definition:
          'The difference between an observed y-value and the value predicted by the line of best fit: residual = actual − predicted.',
      },
      {
        term: 'Extrapolation',
        definition:
          'Using a model to predict values outside the range of the original data. Unreliable because the pattern may not continue.',
      },
    ],
    workedExample: {
      problem:
        'A scatterplot shows study hours (x) and test scores (y) for 20 students. The line of best fit passes through (2, 65) and (8, 89). What is the slope, and what does it mean in context?',
      steps: [
        'Slope = (y₂ − y₁) / (x₂ − x₁) = (89 − 65) / (8 − 2) = 24 / 6 = 4.',
        'Interpretation: For each additional hour of studying, the predicted test score increases by 4 points.',
        'Equation of the line: y − 65 = 4(x − 2) → y = 4x + 57.',
      ],
      answer: 'Slope = 4; for each additional hour studied, the predicted score increases by 4 points',
    },
    commonMistakes: [
      'Confusing correlation with causation. Just because two variables are correlated does not mean one causes the other.',
      'Extrapolating far beyond the data range. A model valid for 1–10 hours of study may not hold for 20 hours.',
      'Misinterpreting the y-intercept when x = 0 is not meaningful in context (e.g., "0 hours of study predicts a score of 57" may not be realistic).',
    ],
    tip: 'When interpreting slope, say: "For each additional [x unit], the predicted [y] increases/decreases by [slope value] [y unit]." This forces you to think in context.',
    graphType: 'scatterplot',
    questions: [
      // Easy 1
      {
        question_text:
          'A scatterplot shows a student\'s number of absences (x) and final grade (y). As absences increase, grades tend to decrease. What type of association does this represent?',
        difficulty: 'Easy',
        choices: [
          'Positive association',
          'Negative association',
          'No association',
          'Non-linear association',
        ],
        answer_text: 'Negative association',
        explanation:
          'When one variable increases and the other decreases, the association is negative. More absences → lower grades is a classic negative (inverse) relationship.',
      },
      // Easy 2
      {
        question_text:
          'A line of best fit on a scatterplot of temperature (x, in °F) vs. ice cream sales (y, in dollars) passes through the points (70, 200) and (90, 400). What is the y-value predicted by the line for x = 80?',
        difficulty: 'Easy',
        choices: ['$250', '$300', '$350', '$400'],
        answer_text: '$300',
        explanation:
          'The slope = (400 − 200)/(90 − 70) = 200/20 = 10 dollars per °F. Equation: y − 200 = 10(x − 70) → y = 10x − 500. At x = 80: y = 10(80) − 500 = 800 − 500 = $300.',
      },
      // Easy 3
      {
        question_text:
          'A scatterplot shows that taller students tend to weigh more. Which type of association best describes this relationship?',
        difficulty: 'Easy',
        choices: [
          'No association',
          'Negative association',
          'Positive association',
          'Perfect linear association',
        ],
        answer_text: 'Positive association',
        explanation:
          'As height increases, weight tends to increase — both variables move in the same direction. This is a positive association.',
      },
      // Easy 4
      {
        question_text:
          'The line of best fit for a dataset has the equation y = 3x + 10. What is the predicted value of y when x = 7?',
        difficulty: 'Easy',
        choices: ['27', '31', '37', '41'],
        answer_text: '31',
        explanation:
          'Substitute x = 7: y = 3(7) + 10 = 21 + 10 = 31.',
      },
      // Medium 1
      {
        question_text:
          'A line of best fit for the relationship between hours of sleep (x) and reaction time in milliseconds (y) passes through (6, 280) and (8, 240). What is the slope, and what does it mean in context?',
        difficulty: 'Medium',
        choices: [
          'Slope = −20; for each additional hour of sleep, reaction time decreases by 20 ms',
          'Slope = 20; for each additional hour of sleep, reaction time increases by 20 ms',
          'Slope = −40; for each additional hour of sleep, reaction time decreases by 40 ms',
          'Slope = 40; for each additional hour of sleep, reaction time increases by 40 ms',
        ],
        answer_text: 'Slope = −20; for each additional hour of sleep, reaction time decreases by 20 ms',
        explanation:
          'Slope = (240 − 280)/(8 − 6) = −40/2 = −20. The negative slope means that as sleep hours increase, reaction time decreases (faster reactions). For each additional hour of sleep, reaction time decreases by 20 ms.',
      },
      // Medium 2
      {
        question_text:
          'A scatterplot shows weekly advertising spending (x, in $hundreds) and weekly sales (y, in $thousands) for a small business. The line of best fit is y = 1.5x + 12. According to this model, by how much are sales expected to increase if advertising spending increases by $400?',
        difficulty: 'Medium',
        choices: ['$600', '$1,500', '$2,400', '$6,000'],
        answer_text: '$6,000',
        explanation:
          '$400 in advertising = 4 units of x (since x is measured in $hundreds). Change in y = 1.5 × 4 = 6 units of y (since y is in $thousands) = $6,000. The slope 1.5 means for each additional $100 in advertising, sales rise by $1,500; for $400 more, that is 4 × $1,500 = $6,000.',
      },
      // Medium 3
      {
        question_text:
          'A data scientist notes that shoe size and reading level are positively correlated in a dataset of elementary school children. She concludes that bigger feet cause better reading. What is wrong with this conclusion?',
        difficulty: 'Medium',
        choices: [
          'There is no correlation between shoe size and reading level',
          'Correlation does not imply causation — both are caused by age/growth',
          'The correlation is negative, not positive',
          'The sample size is too small to draw any conclusions',
        ],
        answer_text: 'Correlation does not imply causation — both are caused by age/growth',
        explanation:
          'Both shoe size and reading level increase as children grow older. Age is a confounding variable that causes both to increase together. Bigger feet do not cause better reading — the relationship is a spurious correlation driven by the lurking variable of age.',
      },
      // Medium 4
      {
        question_text:
          'The line of best fit for a scatterplot of study time (hours) vs. exam score passes through (1, 55) and (5, 75). What is the equation of the line?',
        difficulty: 'Medium',
        choices: ['y = 5x + 50', 'y = 4x + 51', 'y = 5x + 45', 'y = 4x + 55'],
        answer_text: 'y = 5x + 50',
        explanation:
          'Slope = (75 − 55)/(5 − 1) = 20/4 = 5. Using point (1, 55): 55 = 5(1) + b → b = 50. Equation: y = 5x + 50.',
      },
      // Hard 1
      {
        question_text:
          'The line of best fit for a dataset is y = 2.4x + 15. A student studied for 4 hours and scored 28 on the test. What is the residual for this student, and what does it mean?',
        difficulty: 'Hard',
        choices: [
          'Residual = −2.6; the student scored below the predicted value',
          'Residual = +2.6; the student scored above the predicted value',
          'Residual = +3.4; the student scored above the predicted value',
          'Residual = −3.4; the student scored below the predicted value',
        ],
        answer_text: 'Residual = +3.4; the student scored above the predicted value',
        explanation:
          'Predicted score at x = 4: y = 2.4(4) + 15 = 9.6 + 15 = 24.6. Residual = actual − predicted = 28 − 24.6 = +3.4. The positive residual means this student scored 3.4 points above what the model predicted for 4 hours of studying.',
      },
      // Hard 2
      {
        question_text:
          'A scatterplot shows the age of used cars (x, in years) and their resale value (y, in $thousands). The data spans cars aged 1–8 years. The line of best fit is y = −2.1x + 22. A salesman uses this model to predict the value of a 15-year-old car. What is the main problem with this prediction?',
        difficulty: 'Hard',
        choices: [
          'The slope is incorrect for this type of car',
          'The prediction involves extrapolation beyond the data\'s range, making it unreliable',
          'The equation should use a quadratic, not linear, model',
          'Car values cannot be negative',
        ],
        answer_text: 'The prediction involves extrapolation beyond the data\'s range, making it unreliable',
        explanation:
          'The model was built using data from 1–8 year old cars. Predicting for a 15-year-old car requires extrapolation far outside this range. The linear trend (−$2,100/year) may not continue past 8 years; the car value might level off, drop faster, or behave differently for classic cars. Extrapolation is unreliable.',
      },
      // Hard 3
      {
        question_text:
          'A researcher collects data on daily temperature (°C) and number of hot beverages sold at a café. The scatterplot shows a moderate negative linear association with the line y = −3.2x + 180, where x is temperature and y is beverages sold. If the residual for a day with 20°C was +15, how many beverages were actually sold that day?',
        difficulty: 'Hard',
        choices: ['101', '116', '131', '147'],
        answer_text: '131',
        explanation:
          'Predicted beverages at 20°C: y = −3.2(20) + 180 = −64 + 180 = 116. Residual = actual − predicted, so actual = predicted + residual = 116 + 15 = 131 beverages.',
      },
      // Hard 4
      {
        question_text:
          'Two students examine a scatterplot and fit different models. Student A uses a linear model (y = 3x + 5) and Student B uses a curved (quadratic) model. The residuals from Student A\'s model show a clear curved pattern (positive, then negative, then positive). What does this indicate?',
        difficulty: 'Hard',
        choices: [
          'Student A\'s linear model fits the data well',
          'The data has high variability and no model is appropriate',
          'A linear model is not the best fit; a curved model would be more appropriate',
          'Student B\'s model is wrong because scatterplots only support linear models',
        ],
        answer_text: 'A linear model is not the best fit; a curved model would be more appropriate',
        explanation:
          'When residuals from a linear model show a systematic curved pattern (not random scatter around zero), it means the linear model is not capturing the true shape of the relationship. The data likely has a curve (e.g., quadratic), so a non-linear model would be more appropriate.',
      },
    ],
  },
}
