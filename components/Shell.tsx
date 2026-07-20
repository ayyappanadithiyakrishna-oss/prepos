'use client'

import { usePathname } from 'next/navigation'
import Sidebar from '@/components/Sidebar'

// Decides the app chrome. The landing (logged-out /) and the rebuilt dashboard
// (logged-in /) are both full-bleed with their own navigation, so they render
// bare. Every other authenticated route keeps the sidebar + content margin.
export default function Shell({ authed, children }: { authed: boolean; children: React.ReactNode }) {
  const pathname = usePathname()
  // Marketing + legal surfaces carry their own header/footer, so they render
  // full-bleed with no app sidebar even for a logged-in visitor.
  const MARKETING = ['/', '/terms', '/privacy', '/about', '/contact']
  const bare = !authed || MARKETING.includes(pathname)

  // min-w-0 lets this flex child shrink below its content's intrinsic width
  // (default min-width:auto otherwise causes horizontal overflow on mobile);
  // overflow-x-hidden clips any ambient glow that bleeds past the viewport.
  if (bare) {
    return <main className="flex-1 min-w-0 min-h-screen overflow-y-auto overflow-x-hidden">{children}</main>
  }
  return (
    <>
      <Sidebar />
      <main className="flex-1 min-w-0 min-h-screen overflow-y-auto main-content">{children}</main>
    </>
  )
}
