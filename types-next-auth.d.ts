// Expose the DB user id on the session type (set in the session callback).
import type { DefaultSession } from 'next-auth'

declare module 'next-auth' {
  interface Session {
    user: { id: string } & DefaultSession['user']
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    id?: string
    username?: string
  }
}
