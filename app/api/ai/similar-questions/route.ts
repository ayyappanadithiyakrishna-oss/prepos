import { NextResponse } from 'next/server'
import { anthropic, MODEL, CURRICULUM_SYSTEM_PROMPT } from '@/lib/ai-client'

export async function POST(req: Request) {
  try {
    const { domain, skill, difficulty, wrongQuestion, wrongAnswer, correctAnswer } = await req.json()

    if (!domain || !skill) {
      return NextResponse.json({ error: 'domain and skill are required' }, { status: 400 })
    }

    const userPrompt = `Generate 3 new SAT Math practice questions targeting:
- Domain: ${domain}
- Skill: ${skill}
- Difficulty: ${difficulty ?? 'Medium'}
${wrongQuestion ? `
The student just got this question wrong:
"${wrongQuestion}"
Their answer: ${wrongAnswer ?? 'skipped'}
Correct answer: ${correctAnswer}

Generate questions that practice the same concept but with different numbers/contexts.
` : ''}

Return ONLY a JSON array of exactly 3 questions in this exact format:
[
  {
    "id": "ai_gen_1",
    "domain": "${domain}",
    "skill": "${skill}",
    "difficulty": "${difficulty ?? 'Medium'}",
    "type": "mc",
    "question": "...",
    "choices": ["...", "...", "...", "..."],
    "answer": "A",
    "explanation": "Step-by-step solution..."
  }
]

Vary the question types: at least 2 multiple-choice and 1 student-produced response (for SPR, omit "choices" and set "type": "spr", "answer" should be the numeric value as a string).`

    const response = await anthropic.messages.create({
      model: MODEL,
      max_tokens: 2000,
      system: [
        {
          type: 'text',
          text: CURRICULUM_SYSTEM_PROMPT,
          cache_control: { type: 'ephemeral' },  // Cache the large curriculum prompt
        },
      ],
      messages: [
        { role: 'user', content: userPrompt },
      ],
    })

    const content = response.content[0]
    if (content.type !== 'text') {
      return NextResponse.json({ error: 'Unexpected response type' }, { status: 500 })
    }

    // Parse JSON — Claude should return clean JSON per instructions
    let questions: unknown
    try {
      // Strip any accidental markdown code fences
      const clean = content.text.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim()
      questions = JSON.parse(clean)
    } catch {
      return NextResponse.json({ error: 'Failed to parse AI response', raw: content.text }, { status: 500 })
    }

    return NextResponse.json({
      questions,
      cached: (response.usage.cache_read_input_tokens ?? 0) > 0,
      inputTokens: response.usage.input_tokens,
      cacheReadTokens: response.usage.cache_read_input_tokens ?? 0,
    })
  } catch (err: unknown) {
    console.error('[ai/similar-questions]', err)
    const message = err instanceof Error ? err.message : String(err)
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
