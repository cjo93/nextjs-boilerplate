import Link from "next/link";
import { PageShell } from "@/components/system/page-shell";
import { routes } from "@/lib/routes";

const steps = [
  {
    n: "01",
    title: "Map Your Nature",
    body: "DEFRAG begins with your birth data — not to sort you into a category, but to find the precise configuration that is unique to you. This becomes the baseline layer of your canvas: how you were made to move through the world, and what you need to stay clear inside it.",
  },
  {
    n: "02",
    title: "Choose Your Layer",
    body: "From your baseline, you move into the layer that fits the moment. Looking inward, reading a situation in real time, or trying to understand the person across from you — each brings a different part of the canvas into focus.",
  },
  {
    n: "03",
    title: "Read What Is Actually There",
    body: "DEFRAG gives you a plain account of what it finds — not a reframe, not a reinterpretation. The canvas as it is, rendered in language you can use immediately, on both sides of the conversation.",
  },
];

export default function HowItWorksPage() {
  return (
    <PageShell>

      {/* ── HERO ── */}
      <section className="border-b border-[var(--border)]">
        <div className="max-w-5xl mx-auto px-6 md:px-12 pt-28 pb-24 md:pt-36 md:pb-32">
          <p className="label mb-6 animate-fade-up">How it works</p>
          <h1 className="text-[clamp(38px,6vw,68px)] font-bold leading-[1.05] tracking-[-0.03em] text-[var(--foreground)] mb-6 max-w-3xl animate-fade-up-d1">
            Every interaction has a picture underneath it.
          </h1>
          <p className="text-[17px] text-[var(--muted)] leading-relaxed max-w-[480px] animate-fade-up-d2">
            DEFRAG reads the canvas — what is actually there, beneath the reaction — and gives you something you can work with immediately.
          </p>
        </div>
      </section>

      {/* ── STEPS ── */}
      <section className="border-b border-[var(--border)]">
        <div className="max-w-5xl mx-auto px-6 md:px-12 py-20 md:py-28">
          <div className="grid md:grid-cols-3 gap-px bg-[var(--border)] rounded-[var(--radius-lg)] overflow-hidden">
            {steps.map((s) => (
              <div key={s.n} className="cell bg-[var(--surface)] flex flex-col gap-5">
                <span className="label tabular-nums">{s.n}</span>
                <h3 className="text-[var(--foreground)] text-lg font-semibold tracking-tight">{s.title}</h3>
                <p className="text-[var(--muted)] text-sm leading-relaxed flex-1">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DEEPER DETAIL ── */}
      <section className="border-b border-[var(--border)]">
        <div className="max-w-5xl mx-auto px-6 md:px-12 py-20 md:py-28 space-y-10">
          <div className="space-y-4">
            <p className="label">What makes it different</p>
            <h2 className="text-3xl md:text-[42px] font-bold tracking-[-0.025em] leading-tight text-[var(--foreground)] max-w-lg">
              Precision without jargon.
            </h2>
            <p className="text-[15px] text-[var(--muted)] leading-relaxed max-w-lg">
              Most tools give you a framework and ask you to do the work of applying it. DEFRAG does the application for you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-3">
            {[
              {
                title: "Your baseline is unique to you",
                body: "It is derived from your birth data — a specific, unrepeatable configuration, not a category you share with millions of other people."
              },
              {
                title: "The canvas updates in real time",
                body: "The Now workspace reads the current moment as it is unfolding. Not a retrospective analysis. Not a prediction. What is actually present."
              },
              {
                title: "Both sides of the canvas are visible",
                body: "Every insight is rendered with the other person in frame. You see yourself and you see them — simultaneously, with the same level of resolution."
              },
              {
                title: "The output is language, not theory",
                body: "DEFRAG gives you something to say. Specific words, calibrated to how the other person is made and what they can receive in this moment."
              }
            ].map((item) => (
              <div key={item.title} className="card">
                <h3 className="text-[var(--foreground)] font-semibold text-[15px] mb-2 tracking-tight">{item.title}</h3>
                <p className="text-[var(--muted)] text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section>
        <div className="max-w-5xl mx-auto px-6 md:px-12 py-24 md:py-32 flex flex-col md:flex-row md:items-end justify-between gap-10">
          <div>
            <p className="label mb-4">Ready</p>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[var(--foreground)] max-w-sm leading-tight">
              A more precise way to work with what the moment actually contains.
            </h2>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <Link href={routes.start} className="btn-primary">Start Your Baseline</Link>
            <Link href={routes.pricing} className="btn-secondary">View Pricing</Link>
          </div>
        </div>
      </section>

    </PageShell>
  );
}
