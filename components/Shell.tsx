'use client'

import { usePathname } from 'next/navigation'
import Sidebar from '@/components/Sidebar'

// Decides the app chrome. The landing (logged-out /) and the rebuilt dashboard
// (logged-in /) are both full-bleed with their own navigation, so they render
// bare. Every other authenticated route keeps the sidebar + content margin.
export default function Shell({ authed, children }: { authed: boolean; children: React.ReactNode }) {
  const pathname = usePathname()
  const bare = !authed || pathname === '/'

  if (bare) {
    return <main className="flex-1 min-h-screen overflow-y-auto">{children}</main>
  }
  return (
    <>
      <Sidebar />
      <main className="flex-1 min-h-screen overflow-y-auto main-content">{children}</main>
    </>
  )
}
