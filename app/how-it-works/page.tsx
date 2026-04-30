import Link from "next/link";
import { PageShell } from "@/components/system/page-shell";
import { routes } from "@/lib/routes";

const steps = [
  {
    n: "01",
    title: "Map Your Nature",
    body: "We use your birth details to find your natural starting point. No long quizzes or personality labels — just a clear look at how you were uniquely made to experience the world.",
  },
  {
    n: "02",
    title: "Pick Your Lens",
    body: "Choose the focus that matches your need. Whether you are looking inward, reading a specific moment, or trying to understand a relationship, move into the part of the system that fits.",
  },
  {
    n: "03",
    title: "Find the Way Forward",
    body: "DEFRAG gives you a simple, human explanation of the why and a clear path forward that feels right for everyone involved.",
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
            From confusion to clarity.
          </h1>
          <p className="text-[17px] text-[var(--muted)] leading-relaxed max-w-[480px] animate-fade-up-d2">
            DEFRAG takes the complexity of human interaction and turns it into simple, honest guidance you can use immediately.
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
          <div className="space-y-3">
            <p className="label">What makes it different</p>
            <h2 className="text-3xl md:text-[42px] font-bold tracking-[-0.025em] leading-tight text-[var(--foreground)] max-w-lg">
              No labels. No jargon. Just clarity.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-3">
            {[
              {
                title: "Built on your actual nature",
                body: "Your baseline is derived from your birth data — a precise starting point that is unique to you, not a category you are sorted into."
              },
              {
                title: "Real-time, not just retrospective",
                body: "The Now workspace helps you read a moment as it is happening, not just understand it after the fact."
              },
              {
                title: "Designed for both sides",
                body: "Every insight accounts for the other person. You see yourself clearly and you see them clearly — at the same time."
              },
              {
                title: "Language you can actually use",
                body: "DEFRAG translates what it finds into plain language. No interpretation required."
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
              A calmer way to work with what is happening.
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
