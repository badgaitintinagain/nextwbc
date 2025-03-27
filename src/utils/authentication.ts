import { NextResponse } from 'next/server'
import { supabase } from '../lib/supabaseconfig'

export async function POST(request: Request) {
  const body = await request.json()
  const { action, email, password, role } = body

  try {
    if (action === 'login') {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      if (error) throw error
      return NextResponse.json({ user: data.user })

    } else if (action === 'register') {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            role,
          },
        },
      })

      if (error) throw error
      return NextResponse.json({ user: data.user })
    }

  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 400 })
  }
}