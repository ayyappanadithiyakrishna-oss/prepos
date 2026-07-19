import { auth } from '@/lib/auth'
import { sql } from '@vercel/postgres'
import DashboardHome from '@/components/dashboard/DashboardHome'
import Landing from '@/components/landing/Landing'

export const dynamic = 'force-dynamic'

async function getLandingStats() {
  try {
    const [vq, ss] = await Promise.all([
      sql`SELECT COUNT(*)::int AS n FROM questions WHERE verified = true`,
      sql`SELECT COUNT(DISTINCT sub_skill)::int AS n FROM questions WHERE verified = true AND sub_skill IS NOT NULL`,
    ])
    return { verifiedQuestions: vq.rows[0].n as number, subSkills: ss.rows[0].n as number, domains: 4 }
  } catch {
    return { verifiedQuestions: 48, subSkills: 6, domains: 4 }
  }
}

export default async function Home() {
  const session = await auth()
  if (session?.user) return <DashboardHome />
  const stats = await getLandingStats()
  return <Landing stats={stats} />
}
