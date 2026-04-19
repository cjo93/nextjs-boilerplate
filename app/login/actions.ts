"use server";

import { createSupabaseServerClient } from "@/lib/supabase/server";
import { sanitizeRedirectTo } from "@/lib/supabase/redirects";

export async function requestMagicLink(
  email: string,
  redirectTo: string
): Promise<{
  ok: boolean;
  message: string;
}> {
  const supabase = await createSupabaseServerClient();
  const safeRedirectTo = sanitizeRedirectTo(redirectTo, "/app");
  const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";

  const { error } = await supabase.auth.signInWithOtp({
    email,
    options: {
      emailRedirectTo: `${appUrl}/auth/callback?redirectTo=${encodeURIComponent(safeRedirectTo)}`,
    },
  });

  if (error) {
    return {
      ok: false,
      message: "We couldn’t send a sign-in link. Try again in a moment.",
    };
  }

  return { ok: true, message: "Check your email for a sign-in link." };
}
