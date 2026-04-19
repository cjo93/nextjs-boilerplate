"use client";

import { useState, useTransition } from "react";
import { requestMagicLink } from "./actions";

export function LoginPanel({ redirectTo }: { redirectTo: string }) {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState<string | null>(null);
  const [pending, startTransition] = useTransition();

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);

    startTransition(async () => {
      const result = await requestMagicLink(email.trim());
      setMessage(result.message);
    });
  };

  return (
    <form onSubmit={onSubmit} className="space-y-3">
      <label className="block text-sm">Email</label>
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full border rounded-lg p-2"
        placeholder="you@example.com"
      />
      <button
        type="submit"
        disabled={pending}
        className="px-5 py-3 bg-black text-white rounded-lg disabled:opacity-60"
      >
        {pending ? "Sending…" : "Send sign-in link"}
      </button>
      <input type="hidden" name="redirectTo" value={redirectTo} />
      {message ? <p className="text-sm text-neutral-600">{message}</p> : null}
    </form>
  );
}

