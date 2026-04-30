"use client";

import { useState } from "react";
import { PageShell } from "@/components/system/page-shell";

const sections = [
  {
    title: "Why this fits",
    body: "This read is organized around the strongest pattern, pressure cue, and relational signal visible in the moment.",
  },
  {
    title: "What may be active",
    body: "The system is reading for what appears most behaviorally relevant right now, not every possible interpretation at once.",
  },
  {
    title: "Pattern vs pressure",
    body: "Some parts of the read reflect a stable tendency, while others reflect what the current moment may be amplifying.",
  },
  {
    title: "Why this response",
    body: "The suggested move is chosen to reduce distortion, improve timing, and keep the situation workable.",
  },
  {
    title: "How to use this",
    body: "Use the read as a clarifying frame for the next move, not as a final judgment about you or anyone else.",
  },
] as const;

export default function LearnPage() {
  const [input, setInput] = useState("");
  const hasInput = input.trim().length > 0;

  return (
    <PageShell>

      {/* ── HEADER ── */}
      <section className="border-b border-[var(--border)]">
        <div className="max-w-5xl mx-auto px-6 md:px-12 pt-20 pb-16">
          <p className="label mb-5 animate-fade-up">Learn</p>
          <h1 className="text-3xl md:text-4xl font-bold tracking-[-0.025em] text-[var(--foreground)] mb-4 max-w-xl animate-fade-up-d1">
            Understand how the read was generated.
          </h1>
          <p className="prose-body animate-fade-up-d2">
            Describe a situation and see exactly how the canvas reads it — which signals it weighs, what it prioritizes, and why the suggested response fits.
          </p>
        </div>
      </section>

      {/* ── INPUT ── */}
      <section className="border-b border-[var(--border)]">
        <div className="max-w-5xl mx-auto px-6 md:px-12 py-10">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Describe a moment to understand how it is analyzed..."
            rows={5}
            className="w-full bg-[var(--surface-2)] border border-[var(--border-2)] rounded-[var(--radius-lg)] px-5 py-4 text-[14px] text-[var(--foreground)] placeholder:text-[var(--muted-2)] resize-none focus:outline-none focus:border-[var(--border-3)] transition-colors leading-relaxed"
          />
        </div>
      </section>

      {/* ── OUTPUT ── */}
      {hasInput && (
        <section className="animate-fade-in">
          <div className="max-w-5xl mx-auto px-6 md:px-12 py-12">
            <p className="label mb-6">How this read was built</p>
            <div className="grid md:grid-cols-2 gap-3">
              {sections.map((s) => (
                <div key={s.title} className="card">
                  <p className="text-[13px] font-semibold text-[var(--foreground)] tracking-tight mb-2">{s.title}</p>
                  <p className="text-[13px] text-[var(--muted)] leading-relaxed">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

    </PageShell>
  );
}
