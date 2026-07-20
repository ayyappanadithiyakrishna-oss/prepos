import type { Metadata } from 'next'
import LegalPage from '@/components/legal/LegalPage'

export const metadata: Metadata = { title: 'Privacy Policy' }

export default function Privacy() {
  return (
    <LegalPage title="Privacy Policy" updated="July 19, 2026">
      <p>Short version: PrepOS collects the little it needs to run your study account, stores it securely, and never sells it or shows you ads. Here’s the detail.</p>

      <h2>What we collect</h2>
      <ul>
        <li><strong>Account info</strong> — your username, email, and a securely hashed password (we never store the password itself). If you sign in with Google, we receive your name and email from Google instead.</li>
        <li><strong>Study activity</strong> — the questions you answer, whether you got them right, your mastery per sub-skill, streaks, and error-log entries. This is the whole point of the tool.</li>
      </ul>

      <h2>What we do with it</h2>
      <p>We use your data only to run PrepOS: to sign you in, show your dashboard, pick your next session, and track your progress over time. That’s it.</p>

      <h2>What we don’t do</h2>
      <ul>
        <li>We don’t sell or rent your data to anyone.</li>
        <li>We don’t run ads or third-party advertising trackers.</li>
        <li>We don’t share your data except with the infrastructure providers needed to host the app (see below).</li>
      </ul>

      <h2>Where it’s stored</h2>
      <p>Your data lives in a managed PostgreSQL database (Neon) and the app is hosted on Vercel. Passwords are hashed with bcrypt. Sign-in uses a single secure session cookie — no advertising or cross-site tracking cookies.</p>

      <h2>Google sign-in</h2>
      <p>Google sign-in is optional. If your school Chromebook blocks it, use email and password instead — you never need a Google account to use PrepOS.</p>

      <h2>Your choices</h2>
      <p>You can ask to see or delete everything tied to your account at any time. Email <a href="mailto:ayyappan.adithiyakrishna@gmail.com">ayyappan.adithiyakrishna@gmail.com</a> and we’ll remove your account and study data.</p>

      <h2>Students and families</h2>
      <p>PrepOS was built for a high-school student and is used by students. If you’re a parent or guardian and want your child’s account or data removed, email us and we’ll take care of it promptly.</p>

      <h2>Contact</h2>
      <p>Privacy questions go to <a href="mailto:ayyappan.adithiyakrishna@gmail.com">ayyappan.adithiyakrishna@gmail.com</a>.</p>
    </LegalPage>
  )
}
