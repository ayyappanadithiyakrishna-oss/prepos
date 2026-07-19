// Server-side auth guard for API routes. Returns the logged-in user's id, or
// null if unauthenticated — callers return 401 on null so no anonymous rows
// are ever written.
import { auth } from './auth'

export async function getUserId(): Promise<string | null> {
  const session = await auth()
  return session?.user?.id ?? null
}
