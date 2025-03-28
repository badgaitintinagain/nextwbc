// src/lib/supabase.ts
import { siteConfig } from '@/config/site';
import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  siteConfig.supabase.url,
  siteConfig.supabase.anonKey
);