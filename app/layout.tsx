import type { Metadata } from 'next'
import { Space_Grotesk, DM_Sans } from 'next/font/google'
import './globals.css'
import Sidebar from '@/components/Sidebar'

const spaceGrotesk = Space_Grotesk({
  variable: '--font-heading',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

const dmSans = DM_Sans({
  variable: '--font-body',
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'PrepOS — AP Precalc & SAT Math',
  description: 'Personal learning OS for AP Precalculus and SAT Math',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${dmSans.variable} h-full`}>
      <body className="min-h-full flex" style={{ background: 'var(--bg-base)', color: 'var(--text-primary)', fontFamily: 'var(--font-body)' }}>
        <Sidebar />
        <main className="flex-1 min-h-screen overflow-y-auto main-content">
          {children}
        </main>
      </body>
    </html>
  )
}
