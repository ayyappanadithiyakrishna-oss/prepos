import { NextResponse } from 'next/server'
import { anthropic, MODEL, CURRICULUM_SYSTEM_PROMPT } from '@/lib/ai-client'

export async function POST(req: Request) {
  try {
    const { domain, skills, difficulty, count = 5 } = await req.json()

    const userPrompt = `Generate a targeted ${count}-question practice drill for:
Domain: ${domain}
${skills?.length ? `Focus skills: ${skills.join(', ')}` : ''}
Difficulty mix: ${difficulty ?? 'mixed (2 Easy, 2 Medium, 1 Hard)'}

Return ONLY a JSON array of ${count} questions:
[
  {
    "id": "drill_1",
    "domain": "${domain}",
    "skill": "...",
    "difficulty": "Easy|Medium|Hard",
    "type": "mc|spr",
    "question": "...",
    "choices": ["...", "...", "...", "..."],
    "answer": "A|B|C|D or numeric string",
    "explanation": "step-by-step solution",
    "strategy": "optional tip"
  }
]`

    const response = await anthropic.messages.create({
      model: MODEL,
      max_tokens: 3000,
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
      return NextResponse.json({ error: 'Unexpected' }, { status: 500 })
    }

    let questions: unknown
    try {
      const clean = content.text.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim()
      questions = JSON.parse(clean)
    } catch {
      return NextResponse.json({ error: 'Parse error', raw: content.text }, { status: 500 })
    }

    return NextResponse.json({
      questions,
      domain,
      cached: (response.usage.cache_read_input_tokens ?? 0) > 0,
    })
  } catch (err: unknown) {
    console.error('[ai/drill]', err)
    const message = err instanceof Error ? err.message : String(err)
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
