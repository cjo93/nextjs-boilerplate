import Link from "next/link";
import { PageShell } from "@/components/system/page-shell";
import { routes } from "@/lib/routes";

const pillars = [
  {
    n: "01",
    label: "The Baseline",
    title: "Your Nature",
    body: "The first layer of the canvas is you. Not a personality type or a label — a precise picture of how you were built to process the world, what you need to stay clear, and what pulls you away from it when things get dense.",
  },
  {
    n: "02",
    label: "The Now",
    title: "The Moment",
    body: "The second layer is the present situation in full resolution. DEFRAG reads what is actually happening — the tension beneath the surface — so you can respond to the moment as it is, not as you feared it might be.",
  },
  {
    n: "03",
    label: "The Relationships",
    title: "The Connection",
    body: "The third layer brings the other person into focus. Their nature, their current state, and the gap between you — rendered with the same precision used to map your own. When you can see both sides of the canvas at once, the conflict stops feeling inevitable.",
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
            Three layers. One canvas.
          </h1>
          <p className="text-[17px] text-[var(--muted)] leading-relaxed max-w-[520px] animate-fade-up-d2">
            Every place we get lost — inside ourselves, inside a moment, inside a relationship — has a picture underneath it. DEFRAG is the tool that makes that picture readable.
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
              Start with the layer that matches where you are right now.
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
