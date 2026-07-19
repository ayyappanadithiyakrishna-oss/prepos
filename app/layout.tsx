import type { Metadata } from 'next'
import { Space_Grotesk, DM_Sans, Inter } from 'next/font/google'
import './globals.css'
import Shell from '@/components/Shell'
import Providers from './providers'
import { auth } from '@/lib/auth'

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

// Pitch UI/display voice. Loaded once, used by the landing page and the
// rebuilt dashboard via --font-inter.
const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'PrepOS — From 470 to 800. One sub-skill at a time.',
  description:
    'PrepOS tracks exactly where you lose SAT Math points and makes you practice those until you stop. Verified questions, real trap explanations, mastery that compounds.',
  openGraph: {
    title: 'PrepOS',
    description: 'The SAT Math prep tool that actually knows your weak spots.',
    url: 'https://prepos-xi.vercel.app',
    siteName: 'PrepOS',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  icons: {
    icon: [
      { url: '/favicon-16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-touch-icon.png',
    shortcut: '/favicon.ico',
  },
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  // Logged-out visitors get the full-bleed marketing surface (no app chrome);
  // authenticated students get the sidebar shell.
  const session = await auth()
  const authed = !!session?.user

  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${dmSans.variable} ${inter.variable} h-full`}
    >
      <body
        className="min-h-full flex"
        style={{ background: 'var(--bg-base)', color: 'var(--text-primary)', fontFamily: 'var(--font-body)' }}
      >
        <Providers>
          <Shell authed={authed}>{children}</Shell>
        </Providers>
      </body>
    </html>
  )
}
