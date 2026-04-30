"use client";

import { useState } from "react";
import { PageShell } from "@/components/system/page-shell";

const sections = [
  {
    title: "How you tend to work",
    body: "You appear to move toward resolution quickly and look for structure that reduces ambiguity.",
  },
  {
    title: "Under pressure",
    body: "Pressure may make your pace sharper and turn your need for clarity into urgency.",
  },
  {
    title: "At your best",
    body: "You tend to be strongest when you can stay direct, steady, and clear without needing to force the moment.",
  },
  {
    title: "What throws you off",
    body: "Repeated uncertainty, mixed signals, or a stalled response can make you push harder than the moment can hold.",
  },
  {
    title: "What helps",
    body: "Clear framing, realistic pacing, and enough room to distinguish signal from noise help you stay grounded.",
  },
  {
    title: "What brings you back",
    body: "A brief pause, a cleaner read of the pattern, and a narrower next move help you return to clarity.",
  },
] as const;

export default function BaselinePage() {
  const [input, setInput] = useState("");
  const hasInput = input.trim().length > 0;

  return (
    <PageShell>

      {/* ── HEADER ── */}
      <section className="border-b border-[var(--border)]">
        <div className="max-w-5xl mx-auto px-6 md:px-12 pt-20 pb-16">
          <p className="label mb-5 animate-fade-up">Baseline</p>
          <h1 className="text-3xl md:text-4xl font-bold tracking-[-0.025em] text-[var(--foreground)] mb-4 max-w-xl animate-fade-up-d1">
            Understand how you tend to work.
          </h1>
          <p className="prose-body animate-fade-up-d2">
            Describe yourself, your patterns, or a recurring situation. The canvas will return the structure underneath.
          </p>
        </div>
      </section>

      {/* ── INPUT ── */}
      <section className="border-b border-[var(--border)]">
        <div className="max-w-5xl mx-auto px-6 md:px-12 py-10">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Describe your tendencies, patterns, or recurring situations..."
            rows={5}
            className="w-full bg-[var(--surface-2)] border border-[var(--border-2)] rounded-[var(--radius-lg)] px-5 py-4 text-[14px] text-[var(--foreground)] placeholder:text-[var(--muted-2)] resize-none focus:outline-none focus:border-[var(--border-3)] transition-colors leading-relaxed"
          />
        </div>
      </section>

      {/* ── OUTPUT ── */}
      {hasInput && (
        <section className="animate-fade-in">
          <div className="max-w-5xl mx-auto px-6 md:px-12 py-12">
            <p className="label mb-6">Your baseline read</p>
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
