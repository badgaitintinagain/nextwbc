export type Database = {
  public: {
    Tables: {
      profiles: {
        Row: {
          user_id: string
          role: 'user' | 'researcher' | 'admin'
          username: string | null
          email: string
          created_at: string
        }
        Insert: {
          user_id: string
          role: 'user' | 'researcher' | 'admin'
          username?: string | null
          email: string
          created_at?: string
        }
        Update: {
          user_id?: string
          role?: 'user' | 'researcher' | 'admin'
          username?: string | null
          email?: string
          created_at?: string
        }
      }
    }
  }
}

export type AuthError = {
  message: string
  status?: number
}

export type AuthResponse = {
  data: {
    user: User | null
    session: Session | null
  }
  error: AuthError | null
}

export type Session = {
  access_token: string
  refresh_token: string
  expires_in: number
  token_type: string
  user: User
}

export type User = {
  id: string
  email?: string
  role?: string
  aud: string
}