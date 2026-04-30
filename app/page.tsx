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
            className="text-[clamp(44px,7vw,80px)] font-bold leading-[1.03] tracking-[-0.035em] text-[var(--foreground)] mb-8 max-w-3xl animate-fade-up-d1"
          >
            Healing isn&apos;t optional.<br />
            <span style={{ color: "var(--muted)" }}>The suffering is.</span>
          </h1>
          <p className="text-[17px] leading-[1.7] max-w-[500px] mb-12 animate-fade-up-d2" style={{ fontWeight: 400, color: "var(--muted)" }}>
            DEFRAG is a personal canvas — a working surface for understanding how you are made, reading what is actually happening in a moment, and seeing it from the other side before the damage is done.
          </p>
          <div className="flex flex-wrap gap-3 animate-fade-up-d3">
            <Link href={routes.start} className="btn-primary">Establish Your Baseline</Link>
            <Link href={routes.product} className="btn-secondary">See the Platform</Link>
          </div>
        </div>
      </section>

      {/* ── THE GAP ─────────────────────────── */}
      <section className="border-b border-[var(--border)]">
        <div className="max-w-5xl mx-auto px-6 md:px-12 py-20 md:py-28 space-y-10">

          <div className="space-y-4">
            <p className="label">The canvas problem</p>
            <h2 className="text-2xl md:text-[32px] font-semibold tracking-[-0.02em] text-[var(--foreground)] max-w-2xl leading-snug">
              Most conflict happens because two people are painting on the same canvas without knowing it.
            </h2>
            <p className="text-[15px] text-[var(--muted)] leading-relaxed max-w-xl">
              You see your strokes. They see theirs. Neither of you is wrong about what you painted. You are just standing at different angles.
            </p>
          </div>

          {/* 3-column grid strip */}
          <div className="grid md:grid-cols-3 gap-px bg-[var(--border)] rounded-[var(--radius-lg)] overflow-hidden">
            {[
              { tag: "What happened", copy: "You asked for a little more time to finish the work you were already inside of." },
              { tag: "What they heard", copy: "A withdrawal. A signal that the thing between you was less important than the thing in front of you." },
              { tag: "What was true", copy: "You were both right about what you experienced. Neither of you had the full picture." }
            ].map((item, i) => (
              <div key={i} className="cell bg-[var(--surface)]">
                <p className="label mb-4">{item.tag}</p>
                <p className="text-[var(--foreground)] text-[15px] leading-relaxed">{item.copy}</p>
              </div>
            ))}
          </div>

          <p className="text-[var(--muted-2)] text-sm">
            DEFRAG gives you the angle they are standing at.
          </p>
        </div>
      </section>

      {/* ── HOW IT WORKS ────────────────────── */}
      <section className="border-b border-[var(--border)]">
        <div className="max-w-5xl mx-auto px-6 md:px-12 py-20 md:py-28 space-y-12">

          <div className="space-y-4">
            <p className="label">The platform</p>
            <h2 className="text-3xl md:text-[42px] font-bold tracking-[-0.025em] leading-tight text-[var(--foreground)] max-w-lg">
              A canvas with four distinct layers of resolution.
            </h2>
            <p className="text-[15px] text-[var(--muted)] leading-relaxed max-w-lg">
              Each layer brings something specific into focus. Together, they give you a complete picture of yourself, the moment, and the person across from you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-px bg-[var(--border)] rounded-[var(--radius-lg)] overflow-hidden">
            {[
              { n: "01", title: "Your Nature",       body: "The first layer is you — how you were made to handle the world, what you need to feel clear, and what pulls you away from it." },
              { n: "02", title: "The Moment",        body: "The second layer is the present. What is actually happening right now, beneath the reaction and the noise." },
              { n: "03", title: "Their Perspective", body: "The third layer is the person across from you — rendered without assumption, drawn from the same precision used to map your own." },
              { n: "04", title: "The Path Forward",  body: "The fourth layer is language. What to say, and how to say it, in a way that lands on their side of the canvas." }
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

      {/* ── SIGNAL STRIP ────────────────────── */}
      <section className="border-b border-[var(--border)] bg-[var(--surface)]">
        <div className="max-w-5xl mx-auto px-6 md:px-12 py-14">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[var(--border)] rounded-[var(--radius-lg)] overflow-hidden">
            {[
              { stat: "3",       desc: "layers of resolution on a single canvas" },
              { stat: "One",     desc: "precise baseline, derived once, applied everywhere" },
              { stat: "Both",    desc: "sides of every conversation rendered simultaneously" },
              { stat: "Plain",   desc: "language output — no interpretation required" },
            ].map((s) => (
              <div key={s.stat} className="cell bg-[var(--surface)]">
                <p className="stat-number">{s.stat}</p>
                <p className="stat-label">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SCENARIOS ───────────────────────── */}
      <section className="border-b border-[var(--border)]">
        <div className="max-w-5xl mx-auto px-6 md:px-12 py-20 md:py-28 space-y-10">

          <div className="space-y-4">
            <p className="label">Situations</p>
            <h2 className="text-3xl md:text-[42px] font-bold tracking-[-0.025em] leading-tight text-[var(--foreground)] max-w-xl">
              The moments where the picture needs to be clearer.
            </h2>
            <p className="text-[15px] text-[var(--muted)] leading-relaxed max-w-lg">
              These are ordinary situations. The damage they cause is not. DEFRAG gives you what the moment actually contains — before the reaction writes the ending.
            </p>
          </div>

          <div className="space-y-2">
            {[
              {
                moment: "You reschedule for the third time.",
                miss:   "They read it as evidence that the relationship is not a priority.",
                truth:  "You are overextended. They need a signal that they are still on the canvas. DEFRAG surfaces the words that land on their side — not just words that feel honest on yours."
              },
              {
                moment: "They challenge your decision in front of others.",
                miss:   "You read it as an attack on your authority and close off.",
                truth:  "They need to understand before they can follow. You need room to lead without defending every step. DEFRAG shows you how both things can be true at once."
              },
              {
                moment: "You commit to something and then feel yourself pulling back.",
                miss:   "They feel the withdrawal before you say a word and brace for impact.",
                truth:  "You need to recalibrate. They need reassurance that the picture has not changed. DEFRAG gives you a way to renegotiate without restarting from damage."
              }
            ].map((s, i) => (
              <div key={i} className="scenario-row md:grid md:grid-cols-3">
                <div className="scenario-col">
                  <p className="label mb-3">What happened</p>
                  <p className="text-[15px] text-[var(--foreground)] leading-relaxed">{s.moment}</p>
                </div>
                <div className="scenario-col">
                  <p className="label mb-3">What they read</p>
                  <p className="text-[15px] text-[var(--foreground)] leading-relaxed">{s.miss}</p>
                </div>
                <div className="scenario-col" style={{ borderRight: "none" }}>
                  <p className="label mb-3">What DEFRAG sees</p>
                  <p className="text-[15px] leading-relaxed" style={{ color: "var(--muted)" }}>{s.truth}</p>
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
            <p className="label mb-5">Begin</p>
            <h2 className="text-3xl md:text-[52px] font-bold tracking-[-0.03em] leading-[1.06] text-[var(--foreground)] max-w-md">
              The canvas is already there. You just need a clearer view of it.
            </h2>
            <p className="text-[var(--muted)] text-[16px] mt-5 max-w-sm leading-relaxed">
              Your baseline takes minutes to establish. What it reveals tends to change how you work with everything after it.
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
