// ─────────────────────────────────────────────────────────────────────────────
// Autonomous SAT question generation pipeline.
//   Gemini → validate shape → RE-VERIFY math (verify.ts) → cross-check key →
//   insert ONLY verified questions → log the run.
// Nothing unverified can ever enter the bank. Generated ids are forced unique so
// a run can never overwrite a hand-authored question.
// ─────────────────────────────────────────────────────────────────────────────

import { sql } from '@vercel/postgres'
import { buildGenerationPrompt } from './prompt-builder'
import { callGemini, parseJsonArray, hasGeminiKey } from './llm-client'
import { validateGenerated } from './types'
import { verifyProblem } from './verify'
import { upsertProblem, topicIdForDomain } from '../migrate-verified-sat'
import type { SATDomain, Difficulty, VerifiedProblem } from '../sat-practice/verified-schema'

type SkillCfg = { subSkill: string; domain: SATDomain; idPrefix: string; scoreBand: string }

// EXACT DB sub_skill strings — generated content must match these to land in the
// right bank / mastery bucket. Add rows here as new sub-skills are hand-seeded.
const SUB_SKILLS: SkillCfg[] = [
  { subSkill: 'Linear equations in one variable', domain: 'Algebra', idPrefix: 'alg-lov', scoreBand: '470-540' },
  { subSkill: 'Systems of two linear equations', domain: 'Algebra', idPrefix: 'alg-sys', scoreBand: '470-540' },
  { subSkill: 'Linear functions (slope and intercept in context)', domain: 'Algebra', idPrefix: 'alg-lfn', scoreBand: '470-540' },
  { subSkill: 'Linear equations in two variables', domain: 'Algebra', idPrefix: 'alg-ltv', scoreBand: '470-540' },
  { subSkill: 'Linear inequalities in one and two variables', domain: 'Algebra', idPrefix: 'alg-lineq', scoreBand: '540-600' },
  { subSkill: 'Absolute value equations and inequalities', domain: 'Algebra', idPrefix: 'alg-abs', scoreBand: '540-600' },
]

const DIFFICULTIES: Difficulty[] = ['Easy', 'Medium', 'Hard']
const THIN_BANK_THRESHOLD = 12 // target questions per (sub-skill, difficulty)
const BATCH_SIZE = 6 // questions requested per Gemini call (fits the token budget)
const MAX_TARGETS_PER_RUN = 1 // Hobby tier: 1 Gemini call/invocation fits the 9s maxDuration (10s cap). Raise to 3 on Pro (60s).
const MIN_PASS_RATE = 0.35 // Calibrated for llama-3.3-70b-versatile — recalibrate after first 5 production runs.

export type GenerationReport = {
  subSkill: string
  difficulty: string
  generated: number
  passed: number
  failed: number
  passRate: number
  flagged: boolean
  insertedIds: string[]
  failureReasons: string[]
}

export type PipelineOptions = {
  only?: { subSkill: string; difficulty: Difficulty } // on-demand: fill exactly this bank
  force?: boolean // ignore the threshold (used by on-demand top-ups)
  maxTargets?: number
  batchSize?: number // questions per model call; defaults to BATCH_SIZE (6, the Vercel budget). GitHub bulk run passes 20.
  threshold?: number // top up any bank below this; defaults to THIN_BANK_THRESHOLD (12). GitHub bulk run passes 20.
}

async function bankCount(subSkill: string, difficulty: string): Promise<number> {
  const { rows } = await sql`
    SELECT COUNT(*)::int AS n FROM questions
    WHERE sub_skill = ${subSkill} AND difficulty_band = ${difficulty} AND verified = TRUE`
  return rows[0].n as number
}

export async function runGenerationPipeline(opts: PipelineOptions = {}): Promise<GenerationReport[]> {
  if (!hasGeminiKey()) {
    console.warn('[generate] GROQ_API_KEY not set — skipping generation')
    return []
  }

  // Build the candidate list (neediest banks first), then bound it.
  const threshold = opts.threshold ?? THIN_BANK_THRESHOLD
  const batchSize = opts.batchSize ?? BATCH_SIZE
  let candidates: Array<SkillCfg & { difficulty: Difficulty; count: number }> = []
  const skillsToScan = opts.only
    ? SUB_SKILLS.filter((s) => s.subSkill === opts.only!.subSkill)
    : SUB_SKILLS
  for (const cfg of skillsToScan) {
    const diffs = opts.only ? [opts.only.difficulty] : DIFFICULTIES
    for (const difficulty of diffs) {
      const count = await bankCount(cfg.subSkill, difficulty)
      if (opts.force || count < threshold) candidates.push({ ...cfg, difficulty, count })
    }
  }
  candidates.sort((a, b) => a.count - b.count) // fill the emptiest first
  candidates = candidates.slice(0, opts.maxTargets ?? MAX_TARGETS_PER_RUN)

  const reports: GenerationReport[] = []
  for (const c of candidates) {
    const report = await generateBatch(c, batchSize)
    reports.push(report)
    await logGenerationRun(report)
    await new Promise((r) => setTimeout(r, 1500)) // gentle on the free-tier rate limit
  }
  return reports
}

async function generateBatch(c: SkillCfg & { difficulty: Difficulty }, batchSize: number = BATCH_SIZE): Promise<GenerationReport> {
  const base: GenerationReport = {
    subSkill: c.subSkill, difficulty: c.difficulty, generated: 0, passed: 0, failed: 0,
    passRate: 0, flagged: true, insertedIds: [], failureReasons: [],
  }

  const { rows } = await sql`SELECT external_id FROM questions WHERE sub_skill = ${c.subSkill}`
  const existingIds = rows.map((r) => r.external_id as string).filter(Boolean)

  const prompt = buildGenerationPrompt({
    subSkill: c.subSkill, domain: c.domain, difficulty: c.difficulty, count: batchSize,
    existingExternalIds: existingIds, scoreBandContext: c.scoreBand, idPrefix: c.idPrefix,
  })

  let raw: unknown[]
  try {
    const signal = typeof AbortSignal !== 'undefined' && AbortSignal.timeout ? AbortSignal.timeout(90000) : undefined
    const text = await callGemini(prompt, signal)
    raw = parseJsonArray(text)
  } catch (e) {
    base.failureReasons = [`gemini/parse error: ${e instanceof Error ? e.message : e}`]
    return base
  }

  base.generated = raw.length
  const topicId = await topicIdForDomain(c.domain)
  const passed: VerifiedProblem[] = []
  const failureReasons: string[] = []
  const letter = c.difficulty === 'Easy' ? 'e' : c.difficulty === 'Medium' ? 'm' : 'h'
  let nonce = 0

  for (const item of raw) {
    // 1) shape validation (also pins sub_skill/difficulty/domain to the target)
    const { problem, error } = validateGenerated(item, {
      expectSubSkill: c.subSkill, expectDifficulty: c.difficulty, expectDomain: c.domain,
    })
    if (error || !problem) { failureReasons.push(error ?? 'invalid shape'); continue }

    // 2) MATH verification + answer-key cross-check (the gate)
    const mathErrs = verifyProblem(problem)
    if (mathErrs.length) { failureReasons.push(mathErrs[0]); continue }

    // 3) force a globally-unique id so we never overwrite existing content
    problem.id = `${c.idPrefix}-${letter}g${Date.now().toString(36)}${nonce++}`
    passed.push(problem)
  }

  // 4) insert only verified questions
  const insertedIds: string[] = []
  for (const p of passed) {
    try {
      await upsertProblem(p, topicId)
      insertedIds.push(p.id)
    } catch (e) {
      failureReasons.push(`insert ${p.id}: ${e instanceof Error ? e.message : e}`)
    }
  }

  const passRate = base.generated > 0 ? passed.length / base.generated : 0
  const flagged = passRate < MIN_PASS_RATE
  if (flagged) console.warn(`[generate] PROMPT DRIFT: ${c.subSkill} ${c.difficulty} passRate ${Math.round(passRate * 100)}% < 60%`)

  return {
    subSkill: c.subSkill, difficulty: c.difficulty, generated: base.generated,
    passed: passed.length, failed: base.generated - passed.length, passRate,
    flagged, insertedIds, failureReasons: failureReasons.slice(0, 12),
  }
}

async function logGenerationRun(r: GenerationReport): Promise<void> {
  try {
    await sql`
      INSERT INTO generation_log (sub_skill, difficulty, generated, passed, failed, pass_rate, flagged, failure_reasons)
      VALUES (${r.subSkill}, ${r.difficulty}, ${r.generated}, ${r.passed}, ${r.failed},
              ${r.passRate}, ${r.flagged}, ${JSON.stringify(r.failureReasons)})`
  } catch (e) {
    console.error('[generate] failed to write generation_log:', e)
  }
}
