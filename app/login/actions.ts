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
  const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? "https://defrag.app";

  const { error } = await supabase.auth.signInWithOtp({
    email,
    options: {
      emailRedirectTo: `${appUrl}/auth/callback?redirectTo=${encodeURIComponent(safeRedirectTo)}`,
    },
  });

  if (error) {
    return {
      ok: false,
      message: "We couldn't send a sign-in link. Try again in a moment.",
    };
  }

  return { ok: true, message: "Check your email for a sign-in link." };
}

export async function signInWithApple(
  redirectTo: string
): Promise<{ url: string }> {
  const supabase = await createSupabaseServerClient();
  const safeRedirectTo = sanitizeRedirectTo(redirectTo, "/app");
  const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? "https://defrag.app";

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "apple",
    options: {
      redirectTo: `${appUrl}/auth/callback?redirectTo=${encodeURIComponent(safeRedirectTo)}`,
      skipBrowserRedirect: true,
    },
  });

  if (error || !data.url) {
    throw new Error("Apple sign-in unavailable.");
  }

  return { url: data.url };
}
