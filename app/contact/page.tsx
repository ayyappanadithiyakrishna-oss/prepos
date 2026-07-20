import type { Metadata } from 'next'
import LegalPage from '@/components/legal/LegalPage'

export const metadata: Metadata = { title: 'Contact us' }

export default function Contact() {
  return (
    <LegalPage title="Contact us" updated="July 19, 2026">
      <p>One inbox handles everything — support, bugs, privacy requests, account deletion, feedback, and hellos. A real person answers, usually within a day or two.</p>

      <p style={{ margin: '22px 0 28px' }}>
        <a href="mailto:ayyappan.adithiyakrishna@gmail.com"
          style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: 'linear-gradient(180deg, #8562ff, #713dff)', color: '#fff', fontFamily: 'var(--font-inter)', fontSize: 15, fontWeight: 500, letterSpacing: '-0.16px', padding: '12px 24px', borderRadius: 999, textDecoration: 'none', boxShadow: '0 6px 30px rgba(113,61,255,0.45)' }}>
          ✉ ayyappan.adithiyakrishna@gmail.com
        </a>
      </p>

      <h2>What to reach out about</h2>
      <ul>
        <li><strong>Something’s wrong</strong> — a question with a bad answer key, a bug, a page that won’t load.</li>
        <li><strong>Your account</strong> — can’t sign in, want to change your email, or want your account and data deleted.</li>
        <li><strong>Privacy</strong> — see what data we hold on you, or ask us to remove it.</li>
        <li><strong>Anything else</strong> — a feature idea, a subject you wish it covered, or a note that it helped.</li>
      </ul>

      <h2>For parents and guardians</h2>
      <p>If you want your child’s account or study data removed, email the address above and we’ll take care of it promptly.</p>
    </LegalPage>
  )
}
