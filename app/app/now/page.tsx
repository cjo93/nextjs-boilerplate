"use client";

import { useState } from "react";
import { PageShell } from "@/components/system/page-shell";

const sections = [
  {
    title: "Current read",
    body: "The moment looks more like a pressure event than a final conclusion about what is true.",
  },
  {
    title: "Pressure",
    body: "Urgency, uncertainty, or a perceived mismatch may be amplifying the intensity of the read.",
  },
  {
    title: "Drift risk",
    body: "If you keep reacting at the current pace, the moment may harden into a more confused or escalated exchange.",
  },
  {
    title: "Timing",
    body: "This looks like a moment where slowing slightly would improve the quality of the next move.",
  },
  {
    title: "Best posture",
    body: "Stay clear, reduce interpretive overreach, and respond from observation rather than urgency.",
  },
  {
    title: "Best next step",
    body: "Name what seems active, narrow the response, and choose the smallest action that keeps the moment workable.",
  },
] as const;

export default function NowPage() {
  const [input, setInput] = useState("");
  const hasInput = input.trim().length > 0;

  return (
    <PageShell>

      {/* ── HEADER ── */}
      <section className="border-b border-[var(--border)]">
        <div className="max-w-5xl mx-auto px-6 md:px-12 pt-20 pb-16">
          <p className="label mb-5 animate-fade-up">Now</p>
          <h1 className="text-3xl md:text-4xl font-bold tracking-[-0.025em] text-[var(--foreground)] mb-4 max-w-xl animate-fade-up-d1">
            What is actually happening right now?
          </h1>
          <p className="prose-body animate-fade-up-d2">
            Describe the moment. The canvas will return a clear read on what is present — beneath the reaction and the noise.
          </p>
        </div>
      </section>

      {/* ── INPUT ── */}
      <section className="border-b border-[var(--border)]">
        <div className="max-w-5xl mx-auto px-6 md:px-12 py-10">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Describe the situation, moment, or what you are sensing..."
            rows={5}
            className="w-full bg-[var(--surface-2)] border border-[var(--border-2)] rounded-[var(--radius-lg)] px-5 py-4 text-[14px] text-[var(--foreground)] placeholder:text-[var(--muted-2)] resize-none focus:outline-none focus:border-[var(--border-3)] transition-colors leading-relaxed"
          />
        </div>
      </section>

      {/* ── OUTPUT ── */}
      {hasInput && (
        <section className="animate-fade-in">
          <div className="max-w-5xl mx-auto px-6 md:px-12 py-12">
            <p className="label mb-6">Your now read</p>
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
