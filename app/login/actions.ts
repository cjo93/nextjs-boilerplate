"use server";

import { createSupabaseServerClient } from "@/lib/supabase/server";
import { sanitizeRedirectTo } from "@/lib/supabase/redirects";

export async function requestSmsOtp(
  phone: string,
  redirectTo: string
): Promise<{
  ok: boolean;
  message: string;
}> {
  const supabase = await createSupabaseServerClient();
  const safeRedirectTo = sanitizeRedirectTo(redirectTo, "/app");

  // Normalize phone to E.164 — strip spaces/dashes, ensure leading +
  const normalized = phone.trim().replace(/[\s\-().]/g, "");
  const e164 = normalized.startsWith("+") ? normalized : `+1${normalized}`;

  const { error } = await supabase.auth.signInWithOtp({
    phone: e164,
  });

  if (error) {
    return {
      ok: false,
      message: "We couldn't send a code. Check your number and try again.",
    };
  }

  return { ok: true, message: "Code sent! Check your texts." };
}

export async function verifySmsOtp(
  phone: string,
  token: string,
  redirectTo: string
): Promise<{
  ok: boolean;
  message: string;
  redirectTo?: string;
}> {
  const supabase = await createSupabaseServerClient();
  const safeRedirectTo = sanitizeRedirectTo(redirectTo, "/app");

  const normalized = phone.trim().replace(/[\s\-().]/g, "");
  const e164 = normalized.startsWith("+") ? normalized : `+1${normalized}`;

  const { error } = await supabase.auth.verifyOtp({
    phone: e164,
    token: token.trim(),
    type: "sms",
  });

  if (error) {
    return {
      ok: false,
      message: "Invalid or expired code. Please try again.",
    };
  }

  return { ok: true, message: "Verified!", redirectTo: safeRedirectTo };
}
