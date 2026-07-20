import type { Metadata } from 'next'
import LegalPage from '@/components/legal/LegalPage'

export const metadata: Metadata = { title: 'Who we are' }

export default function About() {
  return (
    <LegalPage title="Who we are" updated="July 19, 2026">
      <p>PrepOS started as a favor between brothers.</p>

      <p>The younger one had a rough freshman year and a PSAT that came back 470–540 in Algebra and Geometry. The older one — who’d been through the SAT already — didn’t want to hand him another generic prep app that throws random questions at a wall. He wanted something that knew <strong>exactly</strong> where the points were leaking and made him fix those specific holes.</p>

      <p>So he built it. PrepOS is that tool: verified SAT Math questions, AP Precalculus lessons, honest trap explanations, and a mastery system you can’t game with easy reps. It runs on a school Chromebook without needing a district Google login, because that was a real problem worth solving.</p>

      <h2>What we believe</h2>
      <ul>
        <li><strong>Practice the leak, not the section.</strong> “Get better at Algebra” is useless. “You lose points flipping inequality signs” is something you can fix.</li>
        <li><strong>Tell the truth.</strong> Verified answer keys, real explanations, and mastery that only counts when it’s earned.</li>
        <li><strong>No walls.</strong> Free, no ads, and no login your school can block.</li>
      </ul>

      <h2>Where it’s going</h2>
      <p>PrepOS is in active use and gets better every week — more verified sub-skills, more AP coverage, a sharper dashboard. It’s a personal project with a real user, not a startup chasing growth.</p>

      <h2>Say hello</h2>
      <p>Feedback, bugs, or just want to say it helped? Email <a href="mailto:ayyappan.adithiyakrishna@gmail.com">ayyappan.adithiyakrishna@gmail.com</a>. A person reads it.</p>
    </LegalPage>
  )
}
