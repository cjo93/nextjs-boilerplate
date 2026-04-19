"use server";

import { createSupabaseServerClient } from "@/lib/supabase/server";

export async function requestMagicLink(email: string): Promise<{
  ok: boolean;
  message: string;
}> {
  const supabase = await createSupabaseServerClient();

  const { error } = await supabase.auth.signInWithOtp({
    email,
    options: {
      emailRedirectTo: `${process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000"}/auth/callback`,
    },
  });

  if (error) {
    return { ok: false, message: error.message };
  }

  return { ok: true, message: "Check your email for a sign-in link." };
}

