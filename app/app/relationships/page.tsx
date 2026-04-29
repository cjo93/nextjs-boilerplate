"use client";

import { useState } from "react";
import { PageShell } from "@/components/system/page-shell";
import { SectionShell } from "@/components/system/section-shell";
import type { ClarityResponse } from "@/lib/defrag-types";

export default function RelationshipsPage() {
  const [input, setInput] = useState("");
  const [counterpart, setCounterpart] = useState("");
  const [context, setContext] = useState("");
  const [result, setResult] = useState<ClarityResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const hasInput = input.trim().length > 0;

  async function handleSubmit() {
    if (!hasInput) return;
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const res = await fetch("/api/ai/relationships", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          input: input.trim(),
          counterpart: counterpart.trim() || undefined,
          context: context.trim() || undefined,
        }),
      });

      if (!res.ok) {
        const err = await res.json().catch(() => ({ error: "Unexpected error." }));
        throw new Error(err?.error ?? "Something went wrong.");
      }

      const data: ClarityResponse = await res.json();
      setResult(data);
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : "Unexpected error.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <PageShell>
      <SectionShell>
        <h1 className="text-3xl font-semibold">What's happening between you?</h1>
        <p className="text-neutral-500 max-w-2xl">
          Describe the interaction or relationship. We'll help you understand the dynamic more clearly.
        </p>
      </SectionShell>

      <SectionShell>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Describe the interaction or relationship dynamic..."
          className="w-full border rounded-xl p-4 min-h-[120px]"
        />
        <input
          value={counterpart}
          onChange={(e) => setCounterpart(e.target.value)}
          placeholder="Who is the other person? (optional)"
          className="w-full border rounded-xl p-3 mt-2"
        />
        <input
          value={context}
          onChange={(e) => setContext(e.target.value)}
          placeholder="Any additional context? (optional)"
          className="w-full border rounded-xl p-3 mt-2"
        />
        <button
          onClick={handleSubmit}
          disabled={!hasInput || loading}
          className="mt-4 px-6 py-2 rounded-xl bg-black text-white disabled:opacity-40"
        >
          {loading ? "Analyzing..." : "Analyze"}
        </button>
        {error && (
          <p className="mt-2 text-sm text-red-500">{error}</p>
        )}
      </SectionShell>

      {result && (
        <SectionShell>
          {result.summary && (
            <p className="text-neutral-700 mb-4">{result.summary}</p>
          )}
          <div className="grid gap-6 md:grid-cols-2">
            {result.sections.map((section) => (
              <div key={section.title} className="rounded-xl border p-6 space-y-2">
                <h2 className="text-lg font-medium">{section.title}</h2>
                <p className="text-sm text-neutral-500">{section.body}</p>
              </div>
            ))}
          </div>
        </SectionShell>
      )}
    </PageShell>
  );
}
