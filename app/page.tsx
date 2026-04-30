import Link from "next/link";
import { PageShell } from "@/components/system/page-shell";
import { routes } from "@/lib/routes";

export default function Home() {
  return (
    <PageShell>

      {/* ── HERO ─────────────────────────────── */}
      <section className="relative overflow-hidden border-b border-[var(--border)]">

        {/* Radial glow — warm white, barely visible */}
        <div
          className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[500px] animate-fade-in"
          aria-hidden
          style={{
            background: "radial-gradient(ellipse at center, rgba(255,252,240,0.055) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />

        {/* Column grid lines */}
        <div className="absolute inset-0 grid grid-cols-6 pointer-events-none" aria-hidden>
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="border-r border-[var(--border)] last:border-r-0" />
          ))}
        </div>

        <div className="relative max-w-5xl mx-auto px-6 md:px-12 pt-32 pb-32 md:pt-44 md:pb-44">
          <p className="label mb-8 animate-fade-up">Personal clarity platform</p>
          <h1
            className="text-[clamp(44px,7vw,80px)] font-bold leading-[1.04] tracking-[-0.03em] text-[var(--foreground)] mb-8 max-w-3xl animate-fade-up-d1"
          >
            Healing isn&apos;t optional.<br />
            <span style={{ color: "var(--muted)" }}>But the pain is.</span>
          </h1>
          <p className="text-[17px] text-[var(--muted)] leading-relaxed max-w-[480px] mb-12 animate-fade-up-d2" style={{ fontWeight: 400 }}>
            DEFRAG is a personal clarity platform that helps you understand how you are made, read the tension in a moment, and finally see the world from the other person&apos;s side.
          </p>
          <div className="flex flex-wrap gap-3 animate-fade-up-d3">
            <Link href={routes.start} className="btn-primary">Start Your Baseline</Link>
            <Link href={routes.product} className="btn-secondary">How It Works</Link>
          </div>
        </div>
      </section>

      {/* ── THE GAP ─────────────────────────── */}
      <section className="border-b border-[var(--border)]">
        <div className="max-w-5xl mx-auto px-6 md:px-12 py-20 md:py-28 space-y-10">

          <div className="space-y-2">
            <p className="label">The clarity gap</p>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-[var(--foreground)] max-w-xl">
              We suffer in the space between what we meant and what they heard.
            </h2>
          </div>

          {/* 3-column grid strip */}
          <div className="grid md:grid-cols-3 gap-px bg-[var(--border)] rounded-[var(--radius-lg)] overflow-hidden">
            {[
              { tag: "The Moment", copy: "You ask for a little more time to finish a task." },
              { tag: "The Miss",   copy: "They hear a lack of commitment and start to worry." },
              { tag: "The Truth",  copy: "You aren\u2019t failing. They aren\u2019t being difficult. You\u2019re seeing the same moment from two sides." }
            ].map((item, i) => (
              <div key={i} className="cell bg-[var(--surface)]">
                <p className="label mb-4">{item.tag}</p>
                <p className="text-[var(--foreground)] text-[15px] leading-relaxed">{item.copy}</p>
              </div>
            ))}
          </div>

          <p className="text-[var(--muted-2)] text-sm">
            DEFRAG shows you the bridge between them.
          </p>
        </div>
      </section>

      {/* ── HOW IT WORKS ────────────────────── */}
      <section className="border-b border-[var(--border)]">
        <div className="max-w-5xl mx-auto px-6 md:px-12 py-20 md:py-28 space-y-12">

          <div className="space-y-3">
            <p className="label">How it works</p>
            <h2 className="text-3xl md:text-[42px] font-bold tracking-[-0.025em] leading-tight text-[var(--foreground)] max-w-lg">
              Understand why people do what they do.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-px bg-[var(--border)] rounded-[var(--radius-lg)] overflow-hidden">
            {[
              { n: "01", title: "Know Your Nature",  body: "See how you were made to handle the world and what you need to feel clear." },
              { n: "02", title: "Read the Moment",   body: "Recognize the tension in a room before it turns into a regret." },
              { n: "03", title: "See Their Side",    body: "Understand why someone else reacts the way they do — without guesswork." },
              { n: "04", title: "Find the Response", body: "Know exactly what to say when it matters most." }
            ].map((item) => (
              <div key={item.n} className="cell bg-[var(--surface)] flex gap-5">
                <span className="label pt-0.5 shrink-0 tabular-nums">{item.n}</span>
                <div>
                  <h3 className="text-[var(--foreground)] font-semibold text-[15px] mb-2 tracking-tight">{item.title}</h3>
                  <p className="text-[var(--muted)] text-sm leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SCENARIOS ───────────────────────── */}
      <section className="border-b border-[var(--border)]">
        <div className="max-w-5xl mx-auto px-6 md:px-12 py-20 md:py-28 space-y-10">

          <div className="space-y-3">
            <p className="label">When it matters most</p>
            <h2 className="text-3xl md:text-[42px] font-bold tracking-[-0.025em] leading-tight text-[var(--foreground)] max-w-xl">
              Made for the moments that change things.
            </h2>
          </div>

          <div className="space-y-3">
            {[
              {
                moment: "You reschedule for the third time.",
                miss:   "They decide you don\u2019t respect them.",
                truth:  "You\u2019re overwhelmed. They need reliability. DEFRAG gives you the words to reset the relationship, not just the calendar."
              },
              {
                moment: "They question your decision publicly.",
                miss:   "You hear it as a threat and armor up.",
                truth:  "They want clarity. You want autonomy. DEFRAG shows you how to lead together instead of apart."
              },
              {
                moment: "You commit, then feel like pulling back.",
                miss:   "They experience betrayal and brace for impact.",
                truth:  "You need recalibration. They need reassurance. DEFRAG helps you renegotiate the future instead of repeating the past."
              }
            ].map((s, i) => (
              <div key={i} className="card group">
                <div className="grid md:grid-cols-3 gap-6 md:gap-10">
                  <div>
                    <p className="label mb-3">The Moment</p>
                    <p className="text-[15px] text-[var(--foreground)] leading-relaxed">{s.moment}</p>
                  </div>
                  <div>
                    <p className="label mb-3">The Miss</p>
                    <p className="text-[15px] text-[var(--foreground)] leading-relaxed">{s.miss}</p>
                  </div>
                  <div>
                    <p className="label mb-3">The Truth</p>
                    <p className="text-[15px] text-[var(--muted)] leading-relaxed">{s.truth}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ───────────────────────── */}
      <section className="relative overflow-hidden">

        {/* Subtle bottom glow */}
        <div
          className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px]"
          aria-hidden
          style={{
            background: "radial-gradient(ellipse at bottom, rgba(255,252,240,0.04) 0%, transparent 70%)",
            filter: "blur(30px)",
          }}
        />

        <div className="relative max-w-5xl mx-auto px-6 md:px-12 py-28 md:py-40 flex flex-col md:flex-row md:items-end md:justify-between gap-12">
          <div>
            <p className="label mb-5">Get started</p>
            <h2 className="text-3xl md:text-[52px] font-bold tracking-[-0.03em] leading-[1.06] text-[var(--foreground)] max-w-md">
              Ready to find your clarity?
            </h2>
            <p className="text-[var(--muted)] text-[16px] mt-5 max-w-sm leading-relaxed">
              Your baseline takes minutes. The clarity it gives you lasts.
            </p>
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
