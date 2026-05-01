"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { requestMagicLink, signInWithApple } from "./actions";

export function LoginPanel({ redirectTo }: { redirectTo: string }) {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [pending, startTransition] = useTransition();
  const [applePending, startAppleTransition] = useTransition();

  const onSubmitEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);
    startTransition(async () => {
      const result = await requestMagicLink(email.trim(), redirectTo);
      setMessage(result.message);
      if (result.ok) setSent(true);
    });
  };

  const onApple = () => {
    startAppleTransition(async () => {
      try {
        const { url } = await signInWithApple(redirectTo);
        router.push(url);
      } catch {
        setMessage("Apple sign-in is not available right now.");
      }
    });
  };

  return (
    <div className="space-y-4">
      {/* Apple */}
      <button
        type="button"
        onClick={onApple}
        disabled={applePending}
        className="flex w-full items-center justify-center gap-3 h-11 rounded-[var(--radius)] border border-[var(--border-2)] bg-[var(--surface-2)] px-4 text-sm font-medium text-[var(--foreground)] hover:bg-[var(--surface-3)] disabled:opacity-50 transition-colors"
      >
        <svg viewBox="0 0 814 1000" className="h-4 w-4 shrink-0" fill="currentColor">
          <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76.5 0-103.7 40.8-165.9 40.8s-105-42.3-150.3-109.2c-52.5-75.6-96.7-192.5-96.7-304.2 0-200.4 130.3-306.2 258.4-306.2 66.6 0 122.2 43.6 163.8 43.6 39.5 0 101.2-46.1 174.6-46.1 28.2 0 128.1 2.6 194.3 99.2zm-234-181.5c31.1-36.9 53.1-88.1 53.1-139.3 0-7.1-.6-14.3-1.9-20.1-50.6 1.9-110.8 33.7-147.1 75.8-28.5 32.4-55.1 83.6-55.1 135.5 0 7.8 1.3 15.6 1.9 18.1 3.2.6 8.4 1.3 13.6 1.3 45.4 0 102.5-30.4 135.5-71.3z" />
        </svg>
        {applePending ? "Redirecting…" : "Sign in with Apple"}
      </button>

      {/* Divider */}
      <div className="relative flex items-center gap-3">
        <div className="flex-grow h-px bg-[var(--border)]" />
        <span className="text-[11px] text-[var(--muted-2)] whitespace-nowrap">or continue with email</span>
        <div className="flex-grow h-px bg-[var(--border)]" />
      </div>

      {/* Email magic link */}
      {sent ? (
        <p className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface-2)] px-4 py-3 text-sm text-[var(--muted)]">
          {message ?? "Check your inbox for a sign-in link."}
        </p>
      ) : (
        <form onSubmit={onSubmitEmail} className="space-y-3">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full h-11 rounded-[var(--radius)] border border-[var(--border-2)] bg-[var(--surface-2)] px-3 text-sm text-[var(--foreground)] placeholder:text-[var(--muted-2)] focus:outline-none focus:border-[var(--border-3)] transition-colors"
            placeholder="you@example.com"
          />
          <button
            type="submit"
            disabled={pending}
            className="btn-primary w-full justify-center disabled:opacity-50"
          >
            {pending ? "Sending…" : "Email me a sign-in link"}
          </button>
          {message && !sent ? (
            <p className="text-xs text-red-400">{message}</p>
          ) : null}
        </form>
      )}
    </div>
  );
}
