// src/config/site.ts
export const siteConfig = {
  name: 'Organic Detector',
  supabase: {
    url: process.env.NEXT_PUBLIC_SUPABASE_URL!,
    anonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  }
} as const;