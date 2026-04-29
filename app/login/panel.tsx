"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { requestSmsOtp, verifySmsOtp } from "./actions";

export function LoginPanel({ redirectTo }: { redirectTo: string }) {
  const router = useRouter();
  const [phone, setPhone] = useState("");
  const [token, setToken] = useState("");
  const [step, setStep] = useState<"phone" | "code">("phone");
  const [message, setMessage] = useState<string | null>(null);
  const [pending, startTransition] = useTransition();

  const onSubmitPhone = (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);
    startTransition(async () => {
      const result = await requestSmsOtp(phone.trim(), redirectTo);
      setMessage(result.message);
      if (result.ok) setStep("code");
    });
  };

  const onSubmitCode = (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);
    startTransition(async () => {
      const result = await verifySmsOtp(phone.trim(), token.trim(), redirectTo);
      setMessage(result.message);
      if (result.ok && result.redirectTo) {
        router.push(result.redirectTo);
      }
    });
  };

  if (step === "code") {
    return (
      <form onSubmit={onSubmitCode} className="space-y-3">
        <label className="block text-sm">Enter the code we texted you</label>
        <input
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          maxLength={6}
          required
          value={token}
          onChange={(e) => setToken(e.target.value)}
          className="w-full border rounded-lg p-2 tracking-widest text-center text-lg"
          placeholder="000000"
          autoFocus
        />
        <button
          type="submit"
          disabled={pending}
          className="px-5 py-3 bg-black text-white rounded-lg disabled:opacity-60"
        >
          {pending ? "Verifying…" : "Verify code"}
        </button>
        <button
          type="button"
          onClick={() => { setStep("phone"); setMessage(null); setToken(""); }}
          className="block text-sm text-neutral-500 hover:underline"
        >
          Use a different number
        </button>
        {message ? <p className="text-sm text-neutral-600">{message}</p> : null}
      </form>
    );
  }

  return (
    <form onSubmit={onSubmitPhone} className="space-y-3">
      <label className="block text-sm">Phone number</label>
      <input
        type="tel"
        required
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className="w-full border rounded-lg p-2"
        placeholder="+1 (555) 000-0000"
      />
      <button
        type="submit"
        disabled={pending}
        className="px-5 py-3 bg-black text-white rounded-lg disabled:opacity-60"
      >
        {pending ? "Sending…" : "Send code"}
      </button>
      {message ? <p className="text-sm text-neutral-600">{message}</p> : null}
    </form>
  );
}
