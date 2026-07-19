// Tiny in-memory fixed-window rate limiter. Per-instance (resets on cold
// start / deploy) — fine for throttling abusive signup bursts on a personal
// single-student app. Not a substitute for a shared store at real scale.
type Bucket = { count: number; resetAt: number }
const buckets = new Map<string, Bucket>()

export interface RateLimitResult {
  allowed: boolean
  retryAfterSec: number
}

export function rateLimit(key: string, max: number, windowMs: number): RateLimitResult {
  const now = Date.now()
  const b = buckets.get(key)

  if (!b || now >= b.resetAt) {
    buckets.set(key, { count: 1, resetAt: now + windowMs })
    return { allowed: true, retryAfterSec: 0 }
  }

  b.count++
  if (b.count > max) {
    return { allowed: false, retryAfterSec: Math.ceil((b.resetAt - now) / 1000) }
  }
  return { allowed: true, retryAfterSec: 0 }
}

// Best-effort client IP from proxy headers (Vercel sets x-forwarded-for).
export function clientIp(req: Request): string {
  const xff = req.headers.get('x-forwarded-for')
  if (xff) return xff.split(',')[0].trim()
  return req.headers.get('x-real-ip') ?? 'unknown'
}
