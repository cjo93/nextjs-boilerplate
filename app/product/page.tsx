import Link from "next/link";
import { PageShell } from "@/components/system/page-shell";
import { routes } from "@/lib/routes";

const pillars = [
  {
    n: "01",
    label: "The Baseline",
    title: "Your Nature",
    body: "Understand the truth of who you are. See what makes you feel alive, what makes you shut down, and how to find your way back to center when things get intense.",
  },
  {
    n: "02",
    label: "The Now",
    title: "The Moment",
    body: "Get a clear read on what is happening right this second. Stop the overthinking and find the move that actually fits the situation.",
  },
  {
    n: "03",
    label: "The Relationships",
    title: "The Connection",
    body: "Understand the person across from you. See the world through their eyes so you can stop fighting their nature and start building a real connection.",
  },
];

export default function ProductPage() {
  return (
    <PageShell>

      {/* ── HERO ── */}
      <section className="border-b border-[var(--border)]">
        <div className="max-w-5xl mx-auto px-6 md:px-12 pt-28 pb-24 md:pt-36 md:pb-32">
          <p className="label mb-6 animate-fade-up">Platform overview</p>
          <h1 className="text-[clamp(38px,6vw,68px)] font-bold leading-[1.05] tracking-[-0.03em] text-[var(--foreground)] mb-6 max-w-3xl animate-fade-up-d1">
            A simpler way to navigate your life.
          </h1>
          <p className="text-[17px] text-[var(--muted)] leading-relaxed max-w-[520px] animate-fade-up-d2">
            DEFRAG gives you a clear way to navigate the three areas where we get lost most: ourselves, our timing, and our people.
          </p>
        </div>
      </section>

      {/* ── THREE PILLARS ── */}
      <section className="border-b border-[var(--border)]">
        <div className="max-w-5xl mx-auto px-6 md:px-12 py-20 md:py-28 space-y-3">
          {pillars.map((p) => (
            <div key={p.n} className="card group flex flex-col md:flex-row md:items-start gap-6 md:gap-10">
              <div className="shrink-0 flex items-start gap-5 md:w-48">
                <span className="label pt-0.5 tabular-nums">{p.n}</span>
                <div>
                  <p className="label mb-0.5">{p.label}</p>
                  <p className="text-[var(--foreground)] font-semibold text-[15px] tracking-tight mt-1">{p.title}</p>
                </div>
              </div>
              <div className="h-px md:h-auto md:w-px bg-[var(--border)] shrink-0" />
              <p className="text-[var(--muted)] text-[15px] leading-relaxed flex-1">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section>
        <div className="max-w-5xl mx-auto px-6 md:px-12 py-24 md:py-32 flex flex-col md:flex-row md:items-end justify-between gap-10">
          <div>
            <p className="label mb-4">Get started</p>
            <h2 className="text-3xl md:text-[44px] font-bold tracking-[-0.025em] leading-tight text-[var(--foreground)] max-w-md">
              Move into the part of the system that matches your need.
            </h2>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <Link href={routes.start} className="btn-primary">Start Here</Link>
            <Link href={routes.app}   className="btn-secondary">Go to App</Link>
          </div>
        </div>
      </section>

    </PageShell>
  );
}
