import type { Metadata } from 'next'
import LegalPage from '@/components/legal/LegalPage'

export const metadata: Metadata = { title: 'Terms of Service' }

export default function Terms() {
  return (
    <LegalPage title="Terms of Service" updated="July 19, 2026">
      <p>PrepOS is a free personal study tool for the digital SAT Math section and AP Precalculus. By creating an account or using the site, you agree to these terms. They’re written plainly on purpose — if anything is unclear, <a href="mailto:ayyappan.adithiyakrishna@gmail.com">email us</a>.</p>

      <h2>What PrepOS is</h2>
      <p>PrepOS gives you practice questions, explanations, and mastery tracking. It’s built and run by one person for their family and shared freely. It is <strong>not</strong> affiliated with, endorsed by, or connected to the College Board, the SAT, or the AP program. “SAT” and “AP” are trademarks of their respective owners and are used here only to describe what the tool helps you study.</p>

      <h2>Your account</h2>
      <ul>
        <li>You’re responsible for keeping your password private. Don’t share your account.</li>
        <li>Give a real email so you can recover access. One account per person.</li>
        <li>You can ask us to delete your account and data at any time — just email the address below.</li>
      </ul>

      <h2>Acceptable use</h2>
      <p>Use PrepOS to study. Don’t try to break it, scrape it, resell it, overload it, or use it to harm anyone. We may suspend an account that’s abusing the service, but for a tool like this that’s a last resort, not a habit.</p>

      <h2>No guarantees</h2>
      <p>PrepOS is provided “as is.” We work hard to keep the questions correct — SAT answer keys are checked by a symbolic solver before they ship — but we can’t promise the service will be perfect, always available, or that using it guarantees any particular score. Your results depend mostly on the work you put in.</p>

      <h2>Cost</h2>
      <p>PrepOS is free. There’s no trial, no subscription, and nothing to buy. If that ever changes, existing users will be told first.</p>

      <h2>Changes to these terms</h2>
      <p>If we update these terms, we’ll change the date at the top. Continuing to use PrepOS after a change means you accept the new version.</p>

      <h2>Contact</h2>
      <p>Questions about these terms? Email <a href="mailto:ayyappan.adithiyakrishna@gmail.com">ayyappan.adithiyakrishna@gmail.com</a>.</p>
    </LegalPage>
  )
}
