import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Sidebar from '@/components/Sidebar'

const inter = Inter({
  variable: '--font-sans',
  subsets: ['latin'],
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
    <html lang="en" className={`${inter.variable} h-full`}>
      <body className="min-h-full flex" style={{ background: 'var(--bg-base)', color: 'var(--text-primary)' }}>
        <Sidebar />
        <main className="flex-1 min-h-screen overflow-y-auto ml-[220px]">
          {children}
        </main>
      </body>
    </html>
  )
}
