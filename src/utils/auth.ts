import { supabase } from '@/lib/supabase';
import { NextResponse } from 'next/server';

export async function handleAuth(request: Request) {
  try {
    const body = await request.json();
    const { action, email, password, role, username } = body;

    if (action === 'login') {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;

      // Get user profile
      const { data: profile } = await supabase
        .from('profiles')
        .select('*')
        .eq('user_id', data.user.id)
        .single();

      return NextResponse.json({ 
        user: data.user,
        profile 
      });

    } else if (action === 'register') {
      // 1. Create auth user
      const { data: { user }, error: signUpError } = await supabase.auth.signUp({
        email,
        password,
      });

      if (signUpError) throw signUpError;
      if (!user) throw new Error('User creation failed');

      // 2. Create profile
      const { error: profileError } = await supabase
        .from('profiles')
        .insert({
          user_id: user.id,
          role,
          username: username || email?.split('@')[0],
        });

      if (profileError) throw profileError;

      return NextResponse.json({ 
        message: 'Registration successful! Please check your email for confirmation.',
        user 
      });
    }

    throw new Error('Invalid action');

  } catch (error) {
    console.error('Auth error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Unknown error occurred' },
      { status: 400 }
    );
  }
}