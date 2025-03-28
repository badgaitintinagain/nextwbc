import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { handleAuth } from '@/utils/auth';

export async function POST(request: Request) {
  return handleAuth(request);
}