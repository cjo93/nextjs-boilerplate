import Link from "next/link";
import { PageShell } from "@/components/system/page-shell";
import { routes } from "@/lib/routes";
import { CanvasDiagram } from "@/components/site/canvas-diagram";
import {
  BridgeDiagram,
  IconNature, IconMoment, IconPerspective, IconLanguage,
  IconBaseline, IconNow, IconConnection,
} from "@/components/site/diagrams";

export default function Home() {
  return (
    <PageShell>

      {/* ── 1. HERO ──────────────────────────── */}
      <section className="relative overflow-hidden border-b border-[var(--border)]">

        {/* Radial ambient glow */}
        <div
          className="pointer-events-none absolute -top-32 left-1/3 w-[600px] h-[500px] animate-fade-in"
          aria-hidden
          style={{
            background: "radial-gradient(ellipse at center, rgba(255,252,240,0.05) 0%, transparent 68%)",
            filter: "blur(48px)",
          }}
        />

        {/* Column grid lines */}
        <div className="absolute inset-0 grid grid-cols-6 pointer-events-none" aria-hidden>
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="border-r border-[var(--border)] last:border-r-0" style={{ opacity: 0.6 }} />
          ))}
        </div>

        <div className="relative max-w-5xl mx-auto px-6 md:px-12 pt-24 pb-20 md:pt-36 md:pb-32">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">

            {/* Left: text */}
            <div>
              <p className="label mb-7 animate-fade-up">The Clarity Layer</p>
              <h1 className="text-[clamp(38px,6vw,72px)] font-bold leading-[1.04] tracking-[-0.04em] text-[var(--foreground)] mb-7 animate-fade-up-d1">
                Healing isn&apos;t optional.<br />
                <span style={{ color: "rgba(240,240,240,0.3)" }}>But the pain is.</span>
              </h1>
              <p className="text-[17px] leading-[1.72] mb-9 animate-fade-up-d2" style={{ color: "var(--muted)", fontWeight: 400, maxWidth: "42ch" }}>
                We all have to grow, but we don&apos;t have to suffer through the friction of being misunderstood. DEFRAG helps you understand how you are made, how to read a tough moment, and how to finally see what the person across from you is seeing.
              </p>
              <div className="flex flex-wrap gap-3 mb-6 animate-fade-up-d3">
                <Link href={routes.start} className="btn-primary">Start Here</Link>
                <Link href="#how-it-works" className="btn-secondary">See How It Works</Link>
              </div>
              <p className="text-[12.5px] animate-fade-up-d3" style={{ color: "var(--muted-2)" }}>
                This is about how you are made. No jargon, just you.
              </p>
            </div>

            {/* Right: hero visual */}
            <div className="hidden md:flex items-center justify-center animate-fade-in">
              <CanvasDiagram className="w-full max-w-[400px]" />
            </div>

          </div>
        </div>
      </section>

      {/* ── 2. THE CAPABILITY: SEEING THE BRIDGE ── */}
      <section className="border-b border-[var(--border)]">
        <div className="max-w-5xl mx-auto px-6 md:px-12 py-20 md:py-28">

          <div className="mb-12">
            <p className="label mb-5">The Capability</p>
            <h2 className="text-2xl md:text-[34px] font-bold tracking-[-0.025em] leading-snug text-[var(--foreground)] max-w-2xl">
              Seeing the Bridge
            </h2>
            <p className="text-[17px] text-[var(--muted)] leading-relaxed mt-4 max-w-2xl">
              Most of our frustration comes from the space between what we meant and what they heard.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">

            {/* Left: Moment / Miss / Truth block */}
            <div className="space-y-6">
              {[
                {
                  tag: "The Moment",
                  copy: "You ask for a little more time to finish a task.",
                },
                {
                  tag: "The Miss",
                  copy: "They hear a lack of commitment and start to worry.",
                },
                {
                  tag: "The Truth",
                  copy: "You aren\u2019t \u201cfailing,\u201d and they aren\u2019t \u201cbeing difficult.\u201d You are simply seeing the same moment from two different sides. DEFRAG shows you how to bridge that distance.",
                },
              ].map((item) => (
                <div key={item.tag} className="callout">
                  <p className="label mb-2">{item.tag}</p>
                  <p className="text-[15px] text-[var(--foreground)] leading-[1.68]">{item.copy}</p>
                </div>
              ))}
            </div>

            {/* Right: Bridge diagram */}
            <div className="flex items-center justify-center">
              <BridgeDiagram className="w-full max-w-[380px]" />
            </div>

          </div>
        </div>
      </section>

      {/* ── 3. WHAT DEFRAG HELPS YOU DO ── */}
      <section className="border-b border-[var(--border)] bg-[var(--surface)]">
        <div className="max-w-5xl mx-auto px-6 md:px-12 py-20 md:py-28">

          <div className="mb-12">
            <p className="label mb-5">What DEFRAG Helps You Do</p>
            <p className="text-[17px] text-[var(--muted)] leading-relaxed max-w-xl">
              Understand why people do what they do. When you see the truth of how people are made, conflict turns back into connection.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              {
                icon: <IconNature />,
                title: "Understand your nature",
                body: "See how you were made to handle the world and what you need to feel clear.",
              },
              {
                icon: <IconMoment />,
                title: "Read the moment",
                body: "Recognize the tension in a room before it turns into a regret.",
              },
              {
                icon: <IconPerspective />,
                title: "See their side",
                body: "Understand why someone else reacts the way they do\u2014without the guesswork.",
              },
              {
                icon: <IconLanguage />,
                title: "Speak their language",
                body: "Find the response that actually lands and resolves the friction.",
              },
            ].map((card) => (
              <div key={card.title} className="card flex flex-col gap-5">
                <div
                  className="w-10 h-10 rounded-[var(--radius)] flex items-center justify-center"
                  style={{ background: "var(--surface-3)", border: "1px solid var(--border-2)" }}
                >
                  {card.icon}
                </div>
                <div>
                  <h3 className="text-[var(--foreground)] font-semibold text-[14px] tracking-[-0.01em] mb-2">{card.title}</h3>
                  <p className="text-[var(--muted)] text-[13px] leading-[1.65]">{card.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. THREE WAYS TO FIND CLARITY ── */}
      <section className="border-b border-[var(--border)]">
        <div className="max-w-5xl mx-auto px-6 md:px-12 py-20 md:py-28">

          <div className="mb-12">
            <p className="label mb-5">Three Ways to Find Clarity</p>
            <p className="text-[17px] text-[var(--muted)] leading-relaxed max-w-xl">
              DEFRAG doesn&apos;t give you more to do. It gives you a clear way to navigate the three areas where we get lost most.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-3">
            {[
              {
                icon: <IconBaseline />,
                label: "The Baseline",
                title: "Your Nature",
                body: "Understand the truth of who you are. See what makes you feel alive, what makes you shut down, and how to find your way back to center when things get intense.",
                href: routes.product,
              },
              {
                icon: <IconNow />,
                label: "The Now",
                title: "The Moment",
                body: "Get a clear read on what is happening right this second. Stop the overthinking and find the move that fits the situation.",
                href: routes.product,
              },
              {
                icon: <IconConnection />,
                label: "The Relationships",
                title: "The Connection",
                body: "Understand the person across from you. See the world through their eyes so you can stop fighting their nature and start building a real connection.",
                href: routes.product,
              },
            ].map((pillar) => (
              <div key={pillar.title} className="card flex flex-col gap-6 group">
                <div className="flex items-start justify-between">
                  <div
                    className="w-9 h-9 rounded-[var(--radius)] flex items-center justify-center shrink-0"
                    style={{ background: "var(--surface-2)", border: "1px solid var(--border)" }}
                  >
                    {pillar.icon}
                  </div>
                  <p className="label">{pillar.label}</p>
                </div>
                <div>
                  <h3 className="text-[var(--foreground)] font-semibold text-[16px] tracking-[-0.015em] mb-3">{pillar.title}</h3>
                  <p className="text-[var(--muted)] text-[13px] leading-[1.7]">{pillar.body}</p>
                </div>
                <Link
                  href={pillar.href}
                  className="text-[12px] text-[var(--muted-2)] hover:text-[var(--muted)] transition-colors mt-auto tracking-[0.04em] uppercase"
                >
                  Learn more &rarr;
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. HOW IT WORKS ── */}
      <section id="how-it-works" className="border-b border-[var(--border)] bg-[var(--surface)]">
        <div className="max-w-5xl mx-auto px-6 md:px-12 py-20 md:py-28">

          <div className="mb-14">
            <p className="label mb-5">How It Works</p>
            <h2 className="text-3xl md:text-[42px] font-bold tracking-[-0.03em] leading-[1.07] text-[var(--foreground)]">
              From confusion to clarity.
            </h2>
          </div>

          {/* Step connector */}
          <div className="hidden md:block mb-4" aria-hidden>
            <svg viewBox="0 0 960 24" fill="none" className="w-full">
              <circle cx="160" cy="12" r="2.5" fill="rgba(240,240,240,0.3)" />
              <line x1="163" y1="12" x2="477" y2="12" stroke="rgba(240,240,240,0.1)" strokeWidth="0.75" strokeDasharray="4 4" />
              <circle cx="480" cy="12" r="2.5" fill="rgba(240,240,240,0.18)" />
              <line x1="483" y1="12" x2="797" y2="12" stroke="rgba(240,240,240,0.07)" strokeWidth="0.75" strokeDasharray="4 4" />
              <circle cx="800" cy="12" r="2.5" fill="rgba(240,240,240,0.1)" />
            </svg>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-[var(--border)] rounded-[var(--radius-lg)] overflow-hidden">
            {[
              {
                n: "01",
                title: "Map Your Nature",
                body: "We use your birth details to find your natural starting point. No long quizzes or labels\u2014just a clear look at how you were uniquely made.",
              },
              {
                n: "02",
                title: "Pick Your Focus",
                body: "Choose whether you need to check in with yourself, read a specific moment, or understand a relationship.",
              },
              {
                n: "03",
                title: "Find the Way Forward",
                body: "DEFRAG gives you a simple, human explanation of the \u201cwhy\u201d and a clear path forward that feels right.",
              },
            ].map((s, i) => (
              <div key={s.n} className="cell bg-[var(--surface-2)] flex flex-col gap-5">
                <div className="flex items-center justify-between">
                  <span className="label tabular-nums">{s.n}</span>
                  <span
                    className="block w-1.5 h-1.5 rounded-full"
                    style={{ background: `rgba(240,240,240,${0.3 - i * 0.08})` }}
                    aria-hidden
                  />
                </div>
                <h3 className="text-[var(--foreground)] text-[16px] font-semibold tracking-[-0.015em]">{s.title}</h3>
                <p className="text-[var(--muted)] text-[13.5px] leading-[1.68]">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. PRICING TEASER ── */}
      <section className="border-b border-[var(--border)]">
        <div className="max-w-5xl mx-auto px-6 md:px-12 py-20 md:py-28">

          <div className="mb-12">
            <p className="label mb-5">Pricing</p>
            <h2 className="text-3xl md:text-[40px] font-bold tracking-[-0.03em] leading-tight text-[var(--foreground)]">
              Choose Your Level of Clarity
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-4 items-stretch">
            {[
              {
                name: "Baseline",
                layer: "Layer I",
                subtitle: "For those who want to understand their own nature.",
                features: [
                  "Your natural way of being and making decisions.",
                  "How you handle intense moments.",
                  "How to find your way back to clarity.",
                ],
                cta: "Start with Baseline",
                featured: false,
              },
              {
                name: "Premium",
                layer: "Layers I\u2013II",
                subtitle: "For those who want guidance when life gets loud.",
                features: [
                  "Everything in Baseline + The \u201cNow\u201d Workspace.",
                  "Real-time reads for daily situations.",
                  "Support for finding the right timing.",
                ],
                cta: "Choose Premium",
                featured: true,
              },
              {
                name: "Signature",
                layer: "Layers I\u2013III",
                subtitle: "For those who want to heal their relationships.",
                features: [
                  "Everything in Premium + The Relationship Workspace.",
                  "Help with the hardest conversations.",
                  "Understanding the patterns between you and another.",
                ],
                cta: "Choose Signature",
                featured: false,
              },
            ].map((tier) => (
              <div
                key={tier.name}
                className="card flex flex-col"
                style={tier.featured ? {
                  borderColor: "var(--border-3)",
                  background: "var(--surface-2)",
                  boxShadow: "0 0 0 1px var(--border-3), 0 12px 40px rgba(0,0,0,0.5), 0 1px 0 rgba(255,252,245,0.025) inset",
                } : {}}
              >
                {/* Tier header */}
                <div className="flex items-center justify-between mb-5">
                  <p className="label">{tier.layer}</p>
                  {tier.featured && (
                    <span className="label py-0.5 px-2 border border-[var(--border-3)] text-[9px] tracking-[0.14em]"
                      style={{ background: "var(--surface-3)", color: "var(--muted)" }}>
                      RECOMMENDED
                    </span>
                  )}
                </div>

                <h3 className="text-[var(--foreground)] text-xl font-bold tracking-[-0.025em] mb-2">{tier.name}</h3>
                <p className="text-[var(--muted)] text-[13px] leading-[1.6] mb-6">{tier.subtitle}</p>

                <div className="h-px bg-[var(--border)] mb-6" />

                <div className="space-y-2.5 flex-1 mb-8">
                  {tier.features.map((f, i) => (
                    <p key={f} className="text-[13px] leading-relaxed"
                      style={{ color: i === 0 && tier.name !== "Baseline" ? "var(--muted-2)" : "var(--muted)" }}>
                      {f}
                    </p>
                  ))}
                </div>

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

      {/* ── 7. CTA + FORM PREVIEW ── */}
      <section className="border-b border-[var(--border)] bg-[var(--surface)]">
        <div className="max-w-5xl mx-auto px-6 md:px-12 py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">

            {/* Left: copy */}
            <div className="space-y-5">
              <p className="label">Start</p>
              <h2 className="text-3xl md:text-[44px] font-bold tracking-[-0.03em] leading-[1.06] text-[var(--foreground)]">
                Find your starting point.
              </h2>
              <p className="text-[16px] text-[var(--muted)] leading-[1.7]">
                Your birth details are the simplest way to see your natural nature. This becomes the foundation for every insight you receive.
              </p>
            </div>

            {/* Right: stylised form card */}
            <div className="border border-[var(--border)] rounded-[var(--radius-lg)] bg-[var(--surface-2)] overflow-hidden">
              <div className="px-7 pt-7 pb-5 border-b border-[var(--border)]">
                <p className="label mb-1.5">Your Foundation</p>
                <p className="text-[12px] text-[var(--muted-2)]">Three coordinates. Derived once.</p>
              </div>
              <div className="px-7 py-6 space-y-4">
                {[
                  { label: "Date of Birth", placeholder: "mm / dd / yyyy" },
                  { label: "Time of Birth", placeholder: "hh : mm  AM / PM" },
                  { label: "Place of Birth", placeholder: "City, Country" },
                ].map((field) => (
                  <div key={field.label}>
                    <p className="label mb-1.5">{field.label}</p>
                    <div
                      className="h-10 w-full rounded-[var(--radius)] border border-[var(--border-2)] px-4 flex items-center text-[12.5px]"
                      style={{ color: "var(--muted-2)", background: "var(--surface)" }}
                    >
                      {field.placeholder}
                    </div>
                  </div>
                ))}
              </div>
              <div className="px-7 pb-7 space-y-3">
                <div className="h-px bg-[var(--border)] mb-5" />
                <Link href={routes.start} className="btn-primary w-full justify-center">
                  Establish Your Baseline
                </Link>
                <p className="text-[11px] text-center" style={{ color: "var(--muted-2)" }}>
                  This is about how you are made. No jargon, just you.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 8. COMING SOON: FOR DEVELOPERS ── */}
      <section className="border-b border-[var(--border)]">
        <div className="max-w-5xl mx-auto px-6 md:px-12 py-12 md:py-16">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-center gap-5">
              {/* Dev badge icon */}
              <div
                className="w-9 h-9 rounded-[var(--radius)] flex items-center justify-center shrink-0"
                style={{ border: "1px solid var(--border-2)", background: "var(--surface-2)" }}
                aria-hidden
              >
                <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
                  <path d="M8 9l-3 3 3 3M16 9l3 3-3 3M14 6l-4 12" stroke="rgba(240,240,240,0.35)" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <p className="label mb-1.5">Coming Soon</p>
                <h3 className="text-[var(--foreground)] font-semibold text-[15px] tracking-tight mb-1">For Developers</h3>
                <p className="text-[13px] text-[var(--muted)] leading-relaxed max-w-sm">
                  Bring The Clarity Layer into your own product with a developer-ready way to add human context, not more noise.
                </p>
              </div>
            </div>
            <Link
              href="#"
              className="btn-secondary shrink-0"
            >
              Join the Developer Waitlist
            </Link>
          </div>
        </div>
      </section>

    </PageShell>
  );
}
