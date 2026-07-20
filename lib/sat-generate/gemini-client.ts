const GROQ_MODEL = 'llama-3.3-70b-versatile'
const GROQ_URL = 'https://api.groq.com/openai/v1/chat/completions'

export function hasGeminiKey(): boolean {
  return !!process.env.GROQ_API_KEY
}

/** Calls Groq (Llama 3.1 8B Instant) in JSON mode via the OpenAI-compatible
 *  chat/completions API and returns the raw JSON text. Groq's sub-second
 *  latency is what lets a single generation call fit inside the Vercel timeout.
 *  Throws on missing key or API error so the pipeline can log and skip cleanly. */
export async function callGemini(prompt: string, signal?: AbortSignal): Promise<string> {
  const key = process.env.GROQ_API_KEY
  if (!key) throw new Error('GROQ_API_KEY not set')

  const res = await fetch(GROQ_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${key}`,
    },
    signal,
    body: JSON.stringify({
      model: GROQ_MODEL,
      messages: [{ role: 'user', content: prompt }],
      response_format: { type: 'json_object' },
      temperature: 0.7,
      max_tokens: 4096,
    }),
  })

  if (!res.ok) {
    const body = await res.text().catch(() => '')
    throw new Error(`Groq API ${res.status}: ${body.slice(0, 300)}`)
  }

  const data = await res.json()
  const text: string | undefined = data?.choices?.[0]?.message?.content
  if (!text) {
    const reason = data?.choices?.[0]?.finish_reason ?? 'no content'
    throw new Error(`Groq returned no text (${reason})`)
  }
  return text
}

/** Defensive parse for JSON-object mode: the model returns {"questions": [...]}.
 *  Strips accidental markdown fences, then returns the questions array. Falls
 *  back to a bare array or the first array-valued property for robustness. */
export function parseJsonArray(raw: string): unknown[] {
  let t = raw.trim()
  if (t.startsWith('```')) t = t.replace(/^```(?:json)?/i, '').replace(/```$/, '').trim()
  const parsed = JSON.parse(t)
  if (Array.isArray(parsed)) return parsed
  if (parsed && typeof parsed === 'object') {
    const obj = parsed as Record<string, unknown>
    if (Array.isArray(obj.questions)) return obj.questions
    const firstArray = Object.values(obj).find((v) => Array.isArray(v))
    if (firstArray) return firstArray as unknown[]
  }
  throw new Error('model output was not a JSON array or {"questions": [...]}')
}
