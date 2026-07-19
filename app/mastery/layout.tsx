import { redirect } from 'next/navigation'
import { auth } from '@/lib/auth'

// Gate /mastery: no session -> bounce to /login (which returns here).
export default async function MasteryLayout({ children }: { children: React.ReactNode }) {
  const session = await auth()
  if (!session?.user) redirect('/login?callbackUrl=/mastery')
  return <>{children}</>
}
