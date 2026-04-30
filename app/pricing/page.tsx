import Link from "next/link";
import { PageShell } from "@/components/system/page-shell";
import { routes } from "@/lib/routes";

const tiers = [
  {
    name: "Baseline",
    subtitle: "Your personal canvas, rendered in full. Understand how you were built to move through the world — your decision style, what steadies you, and what pulls you off center.",
    features: [
      "Your nature and decision style",
      "How you process intensity",
      "What returns you to clarity",
    ],
    cta: "Start with Baseline",
    featured: false,
  },
  {
    name: "Premium",
    subtitle: "Everything in Baseline, with the canvas extended into the present. Read what is actually happening in real time — before the moment becomes a regret.",
    features: [
      "Everything in Baseline",
      "The Now workspace for real-time reads",
      "Situational guidance and timing support",
      "Saved history of your insights",
    ],
    cta: "Choose Premium",
    featured: true,
  },
  {
    name: "Signature",
    subtitle: "The complete canvas — yourself, the moment, and the person across from you — rendered simultaneously. For those doing the harder work of repair and connection.",
    features: [
      "Everything in Premium",
      "The Relationship workspace",
      "Support for your most difficult conversations",
      "Shared pattern mapping between two people",
    ],
    cta: "Choose Signature",
    featured: false,
  },
];

export default function PricingPage() {
  return (
    <PageShell>

      {/* ── HERO ── */}
      <section className="border-b border-[var(--border)]">
        <div className="max-w-5xl mx-auto px-6 md:px-12 pt-28 pb-20 md:pt-36 md:pb-24">
          <p className="label mb-6 animate-fade-up">Pricing</p>
          <h1 className="text-[clamp(38px,6vw,68px)] font-bold leading-[1.05] tracking-[-0.03em] text-[var(--foreground)] mb-6 max-w-2xl animate-fade-up-d1">
            Start with the layer you need. Expand as the work deepens.
          </h1>
          <p className="text-[17px] text-[var(--muted)] leading-relaxed max-w-md animate-fade-up-d2">
            Each tier extends the canvas. You begin with yourself and, when you are ready, bring the full picture into view.
          </p>
        </div>
      </section>

      {/* ── TIERS ── */}
      <section className="border-b border-[var(--border)]">
        <div className="max-w-5xl mx-auto px-6 md:px-12 py-16 md:py-24">
          <div className="grid md:grid-cols-3 gap-4">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className="card flex flex-col h-full"
                style={tier.featured ? {
                  borderColor: "var(--border-3)",
                  boxShadow: "0 0 0 1px var(--border-3), 0 8px 32px rgba(0,0,0,0.5)"
                } : {}}
              >
                {/* Badge */}
                {tier.featured && (
                  <div className="mb-5">
                    <span className="label py-1 px-2 border border-[var(--border-3)] bg-[var(--surface-2)] text-[var(--foreground)] text-[10px] tracking-widest">
                      Most Popular
                    </span>
                  </div>
                )}

                {/* Header */}
                <div className="mb-6">
                  <h2 className="text-[var(--foreground)] text-xl font-bold tracking-tight mb-2">{tier.name}</h2>
                  <p className="text-[var(--muted)] text-sm leading-relaxed">{tier.subtitle}</p>
                </div>

                {/* Divider */}
                <div className="h-px bg-[var(--border)] mb-6" />

                {/* Features */}
                <ul className="space-y-3 flex-1 mb-8">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <svg className="w-4 h-4 shrink-0 mt-0.5 text-[var(--muted-2)]" viewBox="0 0 16 16" fill="none">
                        <path d="M3 8l3.5 3.5L13 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span className="text-sm text-[var(--muted)] leading-relaxed">{f}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  href={routes.start}
                  className={tier.featured ? "btn-primary w-full justify-center" : "btn-secondary w-full justify-center"}
                >
                  {tier.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CLOSING ── */}
      <section>
        <div className="max-w-5xl mx-auto px-6 md:px-12 py-24 md:py-32 flex flex-col md:flex-row md:items-end justify-between gap-10">
          <div>
            <p className="label mb-4">No commitment needed</p>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[var(--foreground)] max-w-sm leading-tight">
              No commitment to the full picture. Start with what you need today.
            </h2>
          </div>
          <p className="text-sm text-[var(--muted)] max-w-xs leading-relaxed">
            Every tier builds on the last. The canvas grows as you do.
          </p>
        </div>
      </section>

    </PageShell>
  );
}
