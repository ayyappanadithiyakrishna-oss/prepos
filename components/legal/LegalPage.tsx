'use client'

import Link from 'next/link'
import { C, UI, DISPLAY, MAXW, WopeHeader, WopeFooter, WopeStyle } from '@/components/wope'

export default function LegalPage({ title, updated, children }: { title: string; updated?: string; children: React.ReactNode }) {
  return (
    <div style={{ background: C.bg, minHeight: '100vh', position: 'relative', overflowX: 'hidden' }}>
      <WopeStyle />
      <style>{`
        .prose h2 { font-family: ${UI}; font-weight: 700; font-size: 20px; color: ${C.text}; letter-spacing: -0.4px; margin: 36px 0 12px; }
        .prose p, .prose li { font-family: ${UI}; font-size: 16px; line-height: 1.72; color: ${C.muted}; letter-spacing: -0.16px; }
        .prose p { margin: 0 0 14px; }
        .prose ul { margin: 0 0 14px; padding-left: 22px; display: flex; flex-direction: column; gap: 8px; }
        .prose li::marker { color: ${C.uv}; }
        .prose a { color: ${C.lilac}; text-decoration: none; }
        .prose a:hover { text-decoration: underline; }
        .prose strong { color: ${C.steel}; font-weight: 600; }
      `}</style>
      <WopeHeader />

      <div aria-hidden style={{ position: 'absolute', top: -160, left: '50%', transform: 'translateX(-50%)', width: 900, height: 500, background: 'radial-gradient(50% 50% at 50% 40%, rgba(113,61,255,0.20), transparent 68%)', pointerEvents: 'none', zIndex: 0 }} />

      <main style={{ position: 'relative', zIndex: 1, maxWidth: 760, margin: '0 auto', padding: '150px 24px 80px' }}>
        <Link href="/" className="wope-navlink" style={{ fontFamily: UI, fontSize: 14, color: C.fog, textDecoration: 'none', letterSpacing: '-0.16px' }}>← Back to PrepOS</Link>
        <h1 style={{ fontFamily: DISPLAY, fontWeight: 700, fontSize: 48, color: C.text, letterSpacing: '-1px', lineHeight: 1.1, margin: '22px 0 8px' }}>{title}</h1>
        {updated && <p style={{ fontFamily: UI, fontSize: 13, color: C.fog, letterSpacing: '-0.16px', marginBottom: 8 }}>Last updated {updated}</p>}
        <div className="prose" style={{ marginTop: 24 }}>{children}</div>
      </main>

      <WopeFooter />
    </div>
  )
}

export { MAXW }
