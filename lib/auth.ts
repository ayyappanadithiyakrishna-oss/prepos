import NextAuth from 'next-auth'
import Google from 'next-auth/providers/google'
import { sql } from '@vercel/postgres'
import { PostgresAuthAdapter } from './auth-adapter'

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PostgresAuthAdapter(),
  session: { strategy: 'database' },
  secret: process.env.NEXTAUTH_SECRET,
  // On Vercel the deployment URL varies; trust the host header (NEXTAUTH_URL
  // still pins the canonical callback URL for the OAuth redirect).
  trustHost: true,
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  pages: {
    signIn: '/login',
  },
  callbacks: {
    // Database strategy passes the DB `user`; surface its id on the session so
    // the app can attach user_id to writes and gate per-student data.
    session({ session, user }) {
      if (session.user) session.user.id = user.id
      return session
    },
  },
  events: {
    // Step 6 — anonymous session migration. Fires exactly once, when a user is
    // first created (first-ever login). All pre-auth practice data has a NULL
    // user_id; this claims it for the first real student. Idempotent by nature
    // (only ever touches still-unclaimed NULL rows, and createUser fires once).
    async createUser({ user }) {
      if (!user.id) return
      const claimedSessions = await sql`UPDATE sessions SET user_id = ${user.id} WHERE user_id IS NULL`
      const claimedErrors = await sql`UPDATE errors SET user_id = ${user.id} WHERE user_id IS NULL`
      console.log(
        `[auth:createUser] migrated anonymous data to user ${user.id}: ` +
          `${claimedSessions.rowCount} sessions, ${claimedErrors.rowCount} errors`,
      )
    },
  },
})
