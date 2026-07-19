import { redirect } from 'next/navigation'
import { auth } from '@/lib/auth'

// Gate every /sat/* route: no session -> bounce to /login (which returns here).
export default async function SatLayout({ children }: { children: React.ReactNode }) {
  const session = await auth()
  if (!session?.user) redirect('/login?callbackUrl=/sat')
  return <>{children}</>
}
