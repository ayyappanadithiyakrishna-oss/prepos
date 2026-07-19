// Custom Auth.js (NextAuth v5) adapter backed by @vercel/postgres.
//
// Why custom instead of @auth/pg-adapter: the stock adapter hard-codes the
// table name `sessions`, which already exists in this app as the practice-
// session table. This adapter uses `users`, `accounts`, and `auth_sessions`
// (the auth session table is prefixed to avoid that collision) and reuses the
// project's existing @vercel/postgres client — no new pg/SSL dependency.
//
// Implements only what Google OAuth + database sessions require. Email/magic-
// link verification-token methods are intentionally omitted (Google doesn't
// use them).

import { sql } from '@vercel/postgres'
import type { Adapter, AdapterUser, AdapterSession, AdapterAccount } from 'next-auth/adapters'

type UserRow = {
  id: string
  name: string | null
  email: string
  email_verified: Date | null
  image: string | null
}

function toUser(r: UserRow): AdapterUser {
  return {
    id: r.id,
    name: r.name,
    email: r.email,
    emailVerified: r.email_verified,
    image: r.image,
  }
}

export function PostgresAuthAdapter(): Adapter {
  return {
    async createUser(user) {
      const { rows } = await sql<UserRow>`
        INSERT INTO users (name, email, email_verified, image)
        VALUES (${user.name ?? null}, ${user.email}, ${user.emailVerified?.toISOString() ?? null}, ${user.image ?? null})
        RETURNING id, name, email, email_verified, image`
      return toUser(rows[0])
    },

    async getUser(id) {
      const { rows } = await sql<UserRow>`SELECT id, name, email, email_verified, image FROM users WHERE id = ${id}`
      return rows[0] ? toUser(rows[0]) : null
    },

    async getUserByEmail(email) {
      const { rows } = await sql<UserRow>`SELECT id, name, email, email_verified, image FROM users WHERE email = ${email}`
      return rows[0] ? toUser(rows[0]) : null
    },

    async getUserByAccount({ provider, providerAccountId }) {
      const { rows } = await sql<UserRow>`
        SELECT u.id, u.name, u.email, u.email_verified, u.image
        FROM users u JOIN accounts a ON a.user_id = u.id
        WHERE a.provider = ${provider} AND a.provider_account_id = ${providerAccountId}`
      return rows[0] ? toUser(rows[0]) : null
    },

    async updateUser(user) {
      const { rows } = await sql<UserRow>`
        UPDATE users SET
          name = COALESCE(${user.name ?? null}, name),
          email = COALESCE(${user.email ?? null}, email),
          email_verified = COALESCE(${user.emailVerified?.toISOString() ?? null}, email_verified),
          image = COALESCE(${user.image ?? null}, image)
        WHERE id = ${user.id}
        RETURNING id, name, email, email_verified, image`
      return toUser(rows[0])
    },

    async deleteUser(userId) {
      await sql`DELETE FROM users WHERE id = ${userId}`
    },

    async linkAccount(account: AdapterAccount) {
      await sql`
        INSERT INTO accounts (
          user_id, type, provider, provider_account_id,
          refresh_token, access_token, expires_at, token_type, scope, id_token, session_state
        ) VALUES (
          ${account.userId}, ${account.type}, ${account.provider}, ${account.providerAccountId},
          ${account.refresh_token ?? null}, ${account.access_token ?? null},
          ${account.expires_at ?? null}, ${account.token_type ?? null},
          ${account.scope ?? null}, ${account.id_token ?? null},
          ${(account.session_state as string | undefined) ?? null}
        )`
      return account
    },

    async unlinkAccount({ provider, providerAccountId }) {
      await sql`DELETE FROM accounts WHERE provider = ${provider} AND provider_account_id = ${providerAccountId}`
    },

    async createSession(session) {
      await sql`
        INSERT INTO auth_sessions (session_token, user_id, expires)
        VALUES (${session.sessionToken}, ${session.userId}, ${session.expires.toISOString()})`
      return session
    },

    async getSessionAndUser(sessionToken) {
      const { rows } = await sql`
        SELECT
          s.session_token, s.user_id, s.expires,
          u.id AS u_id, u.name AS u_name, u.email AS u_email,
          u.email_verified AS u_email_verified, u.image AS u_image
        FROM auth_sessions s JOIN users u ON u.id = s.user_id
        WHERE s.session_token = ${sessionToken}`
      if (!rows[0]) return null
      const r = rows[0]
      const session: AdapterSession = {
        sessionToken: r.session_token,
        userId: r.user_id,
        expires: new Date(r.expires),
      }
      const user: AdapterUser = {
        id: r.u_id,
        name: r.u_name,
        email: r.u_email,
        emailVerified: r.u_email_verified,
        image: r.u_image,
      }
      return { session, user }
    },

    async updateSession(session) {
      const { rows } = await sql`
        UPDATE auth_sessions SET
          expires = COALESCE(${session.expires?.toISOString() ?? null}, expires),
          user_id = COALESCE(${session.userId ?? null}, user_id)
        WHERE session_token = ${session.sessionToken}
        RETURNING session_token, user_id, expires`
      if (!rows[0]) return null
      return {
        sessionToken: rows[0].session_token,
        userId: rows[0].user_id,
        expires: new Date(rows[0].expires),
      }
    },

    async deleteSession(sessionToken) {
      await sql`DELETE FROM auth_sessions WHERE session_token = ${sessionToken}`
    },
  }
}
