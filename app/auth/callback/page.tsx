import { redirect } from 'next/navigation';
import { createSupabaseServerClient } from '@/lib/supabase/server';

export default async function AuthCallbackPage() {
  const supabase = await createSupabaseServerClient();
  
  // Exchange the code for a session
  const { data, error } = await supabase.auth.exchangeCodeForSession(
    new URL(typeof location !== 'undefined' ? location.href : '').searchParams.get('code') || ''
  );

  if (error || !data.session) {
    console.error('[v0] Auth callback error:', error);
    redirect('/login?error=auth_failed');
  }

  // Get redirect target from params or default to /defrag
  const redirectTo = new URL(typeof location !== 'undefined' ? location.href : '').searchParams.get('redirectTo') || '/defrag';
  
  redirect(redirectTo);
}
