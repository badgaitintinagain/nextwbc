// src/lib/supabase.ts
import { siteConfig } from '@/config/site';
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

if (!siteConfig.supabase.url) {
  throw new Error('Missing NEXT_PUBLIC_SUPABASE_URL');
}

if (!siteConfig.supabase.anonKey) {
  throw new Error('Missing NEXT_PUBLIC_SUPABASE_ANON_KEY');
}

export const supabase = createClient<Database>(
  siteConfig.supabase.url,
  siteConfig.supabase.anonKey,
  {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
    }
  }
);