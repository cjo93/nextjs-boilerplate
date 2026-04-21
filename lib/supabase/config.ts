export function getSupabaseConfig(): {
  url: string | null;
  anonKey: string | null;
} {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL ?? null;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? null;
  return { url, anonKey };
}

