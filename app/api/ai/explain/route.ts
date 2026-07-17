import { NextResponse } from 'next/server'
import { anthropic, MODEL, CURRICULUM_SYSTEM_PROMPT } from '@/lib/ai-client'

export async function POST(req: Request) {
  try {
    const { question, context, domain, skill, userAnswer, correctAnswer, questionType } = await req.json()

    const userPrompt = `A student answered this ${domain} question incorrectly.

Question: "${question}"
${context ? `Context: ${context}` : ''}
Student's answer: ${userAnswer ?? 'did not answer'}
Correct answer: ${correctAnswer}
Question type: ${questionType === 'spr' ? 'Student-Produced Response (numeric)' : 'Multiple Choice'}

Please provide a personalized explanation in this JSON format:
{
  "whatWentWrong": "1-2 sentences identifying the likely error",
  "stepByStep": ["Step 1: ...", "Step 2: ...", "Step 3: ..."],
  "keyInsight": "The single most important concept to remember",
  "strategyTip": "A concrete test-taking tip for this question type",
  "similarPattern": "A brief note on how to recognize this pattern in future questions"
}`

    const response = await anthropic.messages.create({
      model: MODEL,
      max_tokens: 1000,
      system: [
        {
          type: 'text',
          text: CURRICULUM_SYSTEM_PROMPT,
          cache_control: { type: 'ephemeral' },
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

    let explanation: unknown
    try {
      const clean = content.text.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim()
      explanation = JSON.parse(clean)
    } catch {
      return NextResponse.json({ error: 'Parse error', raw: content.text }, { status: 500 })
    }

    return NextResponse.json({
      explanation,
      cached: (response.usage.cache_read_input_tokens ?? 0) > 0,
    })
  } catch (err: unknown) {
    console.error('[ai/explain]', err)
    const message = err instanceof Error ? err.message : String(err)
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
