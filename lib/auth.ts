import NextAuth from 'next-auth'
import Google from 'next-auth/providers/google'
import Credentials from 'next-auth/providers/credentials'
import bcrypt from 'bcryptjs'
import { sql } from '@vercel/postgres'
import { PostgresAuthAdapter } from './auth-adapter'

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PostgresAuthAdapter(),
  // JWT sessions: required by the Credentials provider (Auth.js cannot persist
  // a database session for credential logins). The adapter still owns Google
  // user/account rows; the session id now rides on the token instead of a DB
  // session row.
  session: { strategy: 'jwt' },
  secret: process.env.NEXTAUTH_SECRET,
  // On Vercel the deployment URL varies; trust the host header (NEXTAUTH_URL
  // still pins the canonical callback URL for the OAuth redirect).
  trustHost: true,
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    Credentials({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        const email = typeof credentials?.email === 'string' ? credentials.email.trim().toLowerCase() : ''
        const password = typeof credentials?.password === 'string' ? credentials.password : ''
        if (!email || !password) return null

        const { rows } = await sql`
          SELECT id, email, username, password_hash FROM users WHERE LOWER(email) = ${email} LIMIT 1`
        const user = rows[0]
        if (!user || !user.password_hash) return null // no such user, or Google-only account

        const valid = await bcrypt.compare(password, user.password_hash)
        if (!valid) return null

        return { id: user.id, email: user.email, name: user.username }
      },
    }),
  ],
  pages: {
    signIn: '/login',
  },
  callbacks: {
    // Persist the DB user id (and username) on the token at sign-in so every
    // later request can read it without a DB hit.
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
        if (user.name) token.username = user.name
      }
      return token
    },
    // Surface the id on the session so the app can attach user_id to writes and
    // gate per-student data.
    session({ session, token }) {
      if (session.user && token.id) session.user.id = token.id as string
      return session
    },
  },
  events: {
    // One-time anonymous-data claim — the FOUNDING user only. All pre-auth
    // practice rows have a NULL user_id; the original student (Krish) claimed
    // them on first login. Every account created afterward starts clean: if any
    // user already exists, skip the migration entirely. Credentials signups
    // never reach here (they INSERT directly, bypassing adapter.createUser).
    async createUser({ user }) {
      if (!user.id) return
      const { rows } = await sql`SELECT COUNT(*)::int AS n FROM users`
      if (rows[0].n > 1) {
        console.log(`[auth:createUser] user ${user.id} starts clean — ${rows[0].n} users exist, no anon migration`)
        return
      }
      const claimedSessions = await sql`UPDATE sessions SET user_id = ${user.id} WHERE user_id IS NULL`
      const claimedErrors = await sql`UPDATE errors SET user_id = ${user.id} WHERE user_id IS NULL`
      console.log(
        `[auth:createUser] founding user ${user.id} claimed anonymous data: ` +
          `${claimedSessions.rowCount} sessions, ${claimedErrors.rowCount} errors`,
      )
    },
  },
})
