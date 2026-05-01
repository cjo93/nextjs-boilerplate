"use client";

import { useState } from "react";
import { PageShell } from "@/components/system/page-shell";
import type { ClarityResponse } from "@/lib/defrag-types";

export default function RelationshipsPage() {
  const [input, setInput]           = useState("");
  const [counterpart, setCounterpart] = useState("");
  const [context, setContext]       = useState("");
  const [result, setResult]         = useState<ClarityResponse | null>(null);
  const [loading, setLoading]       = useState(false);
  const [error, setError]           = useState<string | null>(null);

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

      {/* ── HEADER ── */}
      <section className="border-b border-[var(--border)]">
        <div className="max-w-5xl mx-auto px-6 md:px-12 pt-20 pb-16">
          <p className="label mb-5 animate-fade-up">Relationships</p>
          <h1 className="text-3xl md:text-4xl font-bold tracking-[-0.025em] text-[var(--foreground)] mb-4 max-w-xl animate-fade-up-d1">
            What is happening between you?
          </h1>
          <p className="prose-body animate-fade-up-d2">
            Describe the interaction or the dynamic. The canvas will render both sides simultaneously — and show you what is actually in the space between.
          </p>
        </div>
      </section>

      {/* ── FORM ── */}
      <section className="border-b border-[var(--border)]">
        <div className="max-w-5xl mx-auto px-6 md:px-12 py-10 space-y-4">

          <div className="space-y-2">
            <label className="label block" htmlFor="rel-input">Describe the interaction or dynamic</label>
            <textarea
              id="rel-input"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="What is happening between you and this person?"
              rows={5}
              className="w-full bg-[var(--surface-2)] border border-[var(--border-2)] rounded-[var(--radius-lg)] px-5 py-4 text-[14px] text-[var(--foreground)] placeholder:text-[var(--muted-2)] resize-none focus:outline-none focus:border-[var(--border-3)] transition-colors leading-relaxed"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="label block" htmlFor="rel-counterpart">Who is the other person?</label>
              <input
                id="rel-counterpart"
                type="text"
                value={counterpart}
                onChange={(e) => setCounterpart(e.target.value)}
                placeholder="Optional — a name, role, or description"
                className="w-full h-11 bg-[var(--surface-2)] border border-[var(--border-2)] rounded-[var(--radius)] px-4 text-[14px] text-[var(--foreground)] placeholder:text-[var(--muted-2)] focus:outline-none focus:border-[var(--border-3)] transition-colors"
              />
            </div>

            <div className="space-y-2">
              <label className="label block" htmlFor="rel-context">Additional context</label>
              <input
                id="rel-context"
                type="text"
                value={context}
                onChange={(e) => setContext(e.target.value)}
                placeholder="Optional — history, patterns, or what you need"
                className="w-full h-11 bg-[var(--surface-2)] border border-[var(--border-2)] rounded-[var(--radius)] px-4 text-[14px] text-[var(--foreground)] placeholder:text-[var(--muted-2)] focus:outline-none focus:border-[var(--border-3)] transition-colors"
              />
            </div>
          </div>

          <div className="flex items-center gap-4 pt-2">
            <button
              onClick={handleSubmit}
              disabled={!hasInput || loading}
              className="btn-primary disabled:opacity-40 disabled:cursor-not-allowed"
            >
              {loading ? "Reading the canvas..." : "Analyze the dynamic"}
            </button>
            {error && (
              <p className="text-[13px] text-red-400">{error}</p>
            )}
          </div>

        </div>
      </section>

      {/* ── OUTPUT ── */}
      {result && (
        <section className="animate-fade-in">
          <div className="max-w-5xl mx-auto px-6 md:px-12 py-12">
            {result.summary && (
              <div className="callout mb-8">
                <p className="text-[15px] text-[var(--foreground)] leading-relaxed">{result.summary}</p>
              </div>
            )}
            <p className="label mb-6">Relationship read</p>
            <div className="grid md:grid-cols-2 gap-3">
              {result.sections.map((section) => (
                <div key={section.title} className="card">
                  <p className="text-[13px] font-semibold text-[var(--foreground)] tracking-tight mb-2">
                    {section.title}
                  </p>
                  <p className="text-[13px] text-[var(--muted)] leading-relaxed">{section.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

    </PageShell>
  );
}
