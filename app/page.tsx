"use client";

import Link from "next/link";
import { PageShell } from "@/components/system/page-shell";
import { routes } from "@/lib/routes";
import {
  BridgeDiagram,
  IconNature, IconMoment, IconPerspective, IconLanguage,
  IconBaseline, IconNow, IconConnection,
} from "@/components/site/diagrams";
import { useReveal } from "@/hooks/use-reveal";

export default function Home() {
  useReveal();

  return (
    <PageShell>

      {/* ── 1. HERO ──────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden border-b border-[var(--border)]" style={{ background: "var(--background)" }}>
        <div className="relative max-w-5xl mx-auto px-6 md:px-12 pt-24 pb-20 md:pt-36 md:pb-32">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">

            <div>
              <p className="label mb-6 animate-fade-up" style={{ color: "var(--accent)" }}>
                Human Intelligence Platform
              </p>
              <h1
                className="mb-7 animate-fade-up-d1 font-serif"
                style={{
                  fontSize: "clamp(38px, 5.5vw, 70px)",
                  lineHeight: 1.06,
                  letterSpacing: "-0.01em",
                  color: "var(--foreground)",
                  fontFamily: "var(--font-dm-serif)",
                }}
              >
                Healing isn&apos;t optional.<br />
                <span style={{ color: "var(--accent)" }}>But the pain is.</span>
              </h1>
              <p className="mb-10 animate-fade-up-d2" style={{ fontSize: 17, lineHeight: 1.72, color: "var(--muted)", maxWidth: "42ch" }}>
                We all have to grow. But we don&apos;t have to suffer through the friction of being misunderstood. DEFRAG helps you see how you&apos;re made, how to read a tough moment, and how to see what the person across from you is really seeing.
              </p>
              <div className="flex flex-wrap gap-3 mb-5 animate-fade-up-d3">
                <Link href={routes.start} className="btn-primary">Start Here</Link>
                <Link href={routes.howItWorks} className="btn-secondary">See How It Works</Link>
              </div>
            </div>

            <div className="hidden md:flex items-center justify-center animate-fade-in">
              <BridgeDiagram className="w-full max-w-[420px]" />
            </div>

          </div>
        </div>
      </section>

      {/* ── 2. MEANING SPLIT: DIAGNOSTIC STRIP ──────────────────────────── */}
      <section className="border-b border-[var(--border)]" style={{ background: "var(--surface)" }}>
        <div className="max-w-5xl mx-auto px-6 md:px-12 py-20 md:py-28">

          <div className="mb-14 reveal">
            <p className="label mb-4">The Meaning Split</p>
            <h2
              className="mb-4 font-serif"
              style={{ fontSize: "clamp(26px,3.5vw,40px)", lineHeight: 1.12, letterSpacing: "-0.01em", color: "var(--foreground)", fontFamily: "var(--font-dm-serif)" }}
            >
              Most friction comes from the space<br className="hidden md:block" /> between what you meant and what they heard.
            </h2>
            <p style={{ fontSize: 16, color: "var(--muted)", lineHeight: 1.7, maxWidth: "52ch" }}>
              It&apos;s not a lack of respect. It&apos;s not a personality clash. It&apos;s a Meaning Split — two people speaking two different internal languages without knowing it.
            </p>
          </div>

          {/* Diagnostic three-column strip */}
          <div className="grid md:grid-cols-3 gap-px overflow-hidden rounded-[var(--radius-lg)] reveal reveal-d1" style={{ background: "var(--border)" }}>
            {[
              {
                tag: "What you said",
                copy: "A clear, direct request. You needed more time to finish the work you were already inside of.",
                accent: false,
              },
              {
                tag: "What they heard",
                copy: "A personal criticism. A withdrawal. A signal that the thing between you mattered less than the task in front of you.",
                accent: false,
              },
              {
                tag: "The DEFRAG Read",
                copy: "This isn't a lack of respect — it's a Meaning Split. You're speaking two different internal languages. Here is how to bridge it.",
                accent: true,
              },
            ].map((col) => (
              <div
                key={col.tag}
                className="cell flex flex-col gap-4"
                style={{
                  background: col.accent ? "#fff" : "var(--surface)",
                  borderLeft: col.accent ? `2px solid var(--accent-border)` : undefined,
                }}
              >
                <p
                  className="label"
                  style={{ color: col.accent ? "var(--accent)" : "var(--muted-2)" }}
                >
                  {col.tag}
                </p>
                <p style={{ fontSize: 15, lineHeight: 1.72, color: col.accent ? "var(--foreground)" : "var(--muted)" }}>
                  {col.copy}
                </p>
              </div>
            ))}
          </div>

          {/* You → DEFRAG → Them connector */}
          <div className="mt-8 flex items-center justify-center gap-0 reveal reveal-d2" aria-hidden>
            <span style={{ fontSize: 10.5, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--muted-2)" }}>You</span>
            <div className="flex-1 mx-4 flex items-center gap-1">
              <div className="h-px flex-1" style={{ background: "var(--border-2)" }} />
              <span
                className="text-[10px] font-semibold tracking-[0.12em] px-2 py-0.5 rounded border"
                style={{ color: "var(--accent)", borderColor: "var(--accent-border)", background: "var(--accent-dim)" }}
              >
                DEFRAG
              </span>
              <div className="h-px flex-1" style={{ background: "var(--border-2)" }} />
            </div>
            <span style={{ fontSize: 10.5, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--muted-2)" }}>Them</span>
          </div>

        </div>
      </section>

      {/* ── 3. ACTIONABLE CLARITY: FEATURE GRID ─────────────────────────── */}
      <section className="border-b border-[var(--border)]" style={{ background: "var(--background)" }}>
        <div className="max-w-5xl mx-auto px-6 md:px-12 py-20 md:py-28">

          <div className="mb-12 reveal">
            <p className="label mb-4">Actionable Clarity</p>
            <h2
              className="mb-4 font-serif"
              style={{ fontSize: "clamp(26px,3.5vw,40px)", lineHeight: 1.12, letterSpacing: "-0.01em", color: "var(--foreground)", fontFamily: "var(--font-dm-serif)" }}
            >
              Turn friction into clarity.
            </h2>
            <p style={{ fontSize: 16, color: "var(--muted)", lineHeight: 1.7, maxWidth: "52ch" }}>
              Human dynamics are complex, but they aren&apos;t random. DEFRAG reveals the patterns underneath so you can stop guessing and start connecting.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { icon: <IconNature />,      title: "Understand your nature",  body: "See how you were made to handle the world and what you need to feel clear." },
              { icon: <IconMoment />,      title: "Read the moment",         body: "Recognize what&apos;s actually happening in a high-stakes interaction before it becomes a regret." },
              { icon: <IconPerspective />, title: "See their side",           body: "Understand why someone else reacts the way they do — without guesswork or the story you told yourself." },
              { icon: <IconLanguage />,    title: "Act with precision",       body: "Choose the response that resolves friction instead of fueling it." },
            ].map((card, i) => (
              <div
                key={card.title}
                className={`card flex gap-5 group reveal reveal-d${i % 2 === 0 ? 1 : 2}`}
                style={{ padding: "28px 32px" }}
              >
                <div
                  className="w-10 h-10 rounded-[var(--radius)] flex items-center justify-center shrink-0 transition-all"
                  style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
                >
                  {card.icon}
                </div>
                <div>
                  <h3 style={{ fontSize: 15, fontWeight: 600, color: "var(--foreground)", marginBottom: 6, letterSpacing: "-0.01em" }}>{card.title}</h3>
                  <p style={{ fontSize: 13.5, color: "var(--muted)", lineHeight: 1.68 }}>{card.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. THE INTELLIGENCE LAYER ────────────────────────────────────── */}
      <section className="border-b border-[var(--border)]" style={{ background: "var(--surface)" }}>
        <div className="max-w-5xl mx-auto px-6 md:px-12 py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-16 items-center">

            <div className="reveal">
              <p className="label mb-4">The Intelligence Layer</p>
              <h2
                className="mb-5 font-serif"
                style={{ fontSize: "clamp(28px,4vw,48px)", lineHeight: 1.1, letterSpacing: "-0.01em", color: "var(--foreground)", fontFamily: "var(--font-dm-serif)" }}
              >
                Understand the &lsquo;Why&rsquo; behind every interaction.
              </h2>
              <p style={{ fontSize: 16, color: "var(--muted)", lineHeight: 1.72, maxWidth: "44ch" }}>
                DEFRAG is a human intelligence platform. It maps the hidden dynamics of how people work so you can move through relationships with precision, empathy, and absolute clarity.
              </p>
            </div>

            {/* System diagram */}
            <div className="reveal reveal-d1 flex justify-center md:justify-end">
              <svg viewBox="0 0 280 200" fill="none" className="w-full max-w-[280px]" aria-hidden>
                {/* Input nodes */}
                {[
                  { label: "You", y: 40 },
                  { label: "Context", y: 100 },
                  { label: "Them", y: 160 },
                ].map((n) => (
                  <g key={n.label}>
                    <rect x="8" y={n.y - 13} width="68" height="26" rx="4" fill="#fff" stroke="var(--border)" strokeWidth="1" />
                    <text x="42" y={n.y + 4.5} textAnchor="middle" fill="var(--muted)" fontSize="10" fontFamily="inherit">{n.label}</text>
                    <line x1="76" y1={n.y} x2="112" y2={n.y} stroke="var(--border-2)" strokeWidth="0.75" strokeDasharray="3 3" />
                    <line x1="112" y1={n.y} x2="140" y2="100" stroke="var(--border-2)" strokeWidth="0.75" />
                  </g>
                ))}
                {/* Central DEFRAG node */}
                <rect x="140" y="78" width="72" height="44" rx="6" fill="var(--accent)" />
                <text x="176" y="97" textAnchor="middle" fill="#F7F3EE" fontSize="9" fontFamily="inherit" fontWeight="600" letterSpacing="0.1em">DEFRAG</text>
                <text x="176" y="110" textAnchor="middle" fill="rgba(247,243,238,0.6)" fontSize="7.5" fontFamily="inherit">intelligence layer</text>
                {/* Output nodes */}
                {[
                  { label: "Clear Read", y: 60 },
                  { label: "Next Move", y: 140 },
                ].map((n) => (
                  <g key={n.label}>
                    <line x1="212" y1="100" x2="218" y2={n.y} stroke="var(--border-2)" strokeWidth="0.75" />
                    <line x1="218" y1={n.y} x2="228" y2={n.y} stroke="var(--border-2)" strokeWidth="0.75" strokeDasharray="3 3" />
                    <rect x="228" y={n.y - 13} width="44" height="26" rx="4" fill="#fff" stroke="var(--border)" strokeWidth="1" />
                    <text x="250" y={n.y + 4.5} textAnchor="middle" fill="var(--foreground)" fontSize="9" fontFamily="inherit">{n.label}</text>
                  </g>
                ))}
              </svg>
            </div>

          </div>
        </div>
      </section>

      {/* ── 5. ONE SYSTEM, THREE LENSES ─────────────────────────────────── */}
      <section className="border-b border-[var(--border)]" style={{ background: "var(--background)" }}>
        <div className="max-w-5xl mx-auto px-6 md:px-12 py-20 md:py-28">

          <div className="mb-14 reveal">
            <p className="label mb-4">One System</p>
            <h2
              className="font-serif"
              style={{ fontSize: "clamp(26px,3.5vw,42px)", lineHeight: 1.1, letterSpacing: "-0.01em", color: "var(--foreground)", fontFamily: "var(--font-dm-serif)" }}
            >
              Three lenses. One coherent picture.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                icon: <IconBaseline />,
                chip: "Baseline",
                title: "Your Nature",
                body: "Understand your natural architecture — how you process information, how you handle high-stakes moments, and what you need to stay centered.",
                featured: false,
              },
              {
                icon: <IconNow />,
                chip: "Now",
                title: "The Moment",
                body: "Get a clear read on what&apos;s happening right now so you can stop overthinking and move with purpose.",
                featured: true,
              },
              {
                icon: <IconConnection />,
                chip: "Relationships",
                title: "The Connection",
                body: "Map the space between you and another person so you can stop fighting each other&apos;s nature and build a real connection.",
                featured: false,
              },
            ].map((pillar, i) => (
              <div
                key={pillar.chip}
                className={`card flex flex-col gap-6 reveal reveal-d${i + 1}`}
                style={pillar.featured ? {
                  borderColor: "var(--accent-border)",
                  boxShadow: "0 0 0 1px var(--accent-border), 0 8px 28px rgba(107,86,68,0.1)",
                } : {}}
              >
                <div className="flex items-start justify-between">
                  <div
                    className="w-9 h-9 rounded-[var(--radius)] flex items-center justify-center shrink-0"
                    style={{
                      background: pillar.featured ? "var(--accent-dim)" : "var(--surface)",
                      border: `1px solid ${pillar.featured ? "var(--accent-border)" : "var(--border)"}`,
                    }}
                  >
                    {pillar.icon}
                  </div>
                  <span
                    className="label px-2 py-0.5 rounded border"
                    style={{
                      fontSize: 9,
                      color: pillar.featured ? "var(--accent)" : "var(--muted-2)",
                      borderColor: pillar.featured ? "var(--accent-border)" : "var(--border)",
                      background: pillar.featured ? "var(--accent-dim)" : "transparent",
                    }}
                  >
                    {pillar.chip}
                  </span>
                </div>
                <div>
                  <h3 style={{ fontSize: 16, fontWeight: 600, color: "var(--foreground)", marginBottom: 10, letterSpacing: "-0.015em" }}>{pillar.title}</h3>
                  <p style={{ fontSize: 13.5, color: "var(--muted)", lineHeight: 1.72 }}>{pillar.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. HOW DEFRAG WORKS ──────────────────────────────────────────── */}
      <section id="how-it-works" className="border-b border-[var(--border)]" style={{ background: "var(--surface)" }}>
        <div className="max-w-5xl mx-auto px-6 md:px-12 py-20 md:py-28">

          <div className="mb-14 reveal">
            <p className="label mb-4">Simple Inputs, Sharp Outputs</p>
            <h2
              className="font-serif"
              style={{ fontSize: "clamp(26px,3.5vw,42px)", lineHeight: 1.1, letterSpacing: "-0.01em", color: "var(--foreground)", fontFamily: "var(--font-dm-serif)" }}
            >
              How DEFRAG works.
            </h2>
          </div>

          {/* Step progress line */}
          <div className="hidden md:flex items-center gap-0 mb-2 px-[calc(160px-18px)]" aria-hidden>
            {[0, 1, 2].map((i) => (
              <div key={i} className="flex items-center flex-1">
                <div
                  className="w-2 h-2 rounded-full shrink-0"
                  style={{ background: i === 0 ? "var(--accent)" : "var(--border-2)" }}
                />
                {i < 2 && (
                  <div className="flex-1 h-px mx-1" style={{ background: "var(--border)", backgroundImage: "repeating-linear-gradient(90deg, var(--border-2) 0, var(--border-2) 4px, transparent 4px, transparent 8px)" }} />
                )}
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-px rounded-[var(--radius-lg)] overflow-hidden" style={{ background: "var(--border)" }}>
            {[
              {
                n: "01",
                title: "Input the data.",
                body: "We use your birth details to map your natural baseline. No quizzes, no labels — just how you're built.",
              },
              {
                n: "02",
                title: "Select your lens.",
                body: "Choose whether you're checking in with yourself, reading a moment, or understanding a relationship.",
              },
              {
                n: "03",
                title: "Receive the read.",
                body: "DEFRAG returns a clear, human explanation of what's happening — and the move that fits.",
              },
            ].map((s, i) => (
              <div
                key={s.n}
                className={`cell flex flex-col gap-5 reveal reveal-d${i + 1}`}
                style={{ background: "var(--background)" }}
              >
                <div className="flex items-center justify-between">
                  <span className="label tabular-nums">{s.n}</span>
                  <span
                    className="w-1.5 h-1.5 rounded-full block"
                    style={{ background: i === 0 ? "var(--accent)" : "var(--border-2)" }}
                    aria-hidden
                  />
                </div>
                <h3
                  className="font-serif"
                  style={{ fontSize: 18, color: "var(--foreground)", fontFamily: "var(--font-dm-serif)", lineHeight: 1.2 }}
                >
                  {s.title}
                </h3>
                <p style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.7 }}>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. PRICING TEASER ────────────────────────────────────────────── */}
      <section className="border-b border-[var(--border)]" style={{ background: "var(--background)" }}>
        <div className="max-w-5xl mx-auto px-6 md:px-12 py-20 md:py-28">

          <div className="mb-12 reveal">
            <p className="label mb-4">Choose Your Level</p>
            <h2
              className="font-serif"
              style={{ fontSize: "clamp(26px,3.5vw,42px)", lineHeight: 1.1, letterSpacing: "-0.01em", color: "var(--foreground)", fontFamily: "var(--font-dm-serif)" }}
            >
              As much clarity as you need.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-4 items-stretch">
            {[
              {
                name: "Baseline",
                layer: "Layer I",
                subtitle: "For those who want to understand their own nature.",
                features: ["Your natural way of being and making decisions.", "How you handle intense moments.", "How to find your way back to clarity."],
                cta: "Start with Baseline",
                featured: false,
              },
              {
                name: "Premium",
                layer: "Layers I–II",
                subtitle: "For those who want guidance when life gets loud.",
                features: ["Everything in Baseline.", "The Now Workspace for real-time reads.", "Support for finding the right timing."],
                cta: "Choose Premium",
                featured: true,
              },
              {
                name: "Signature",
                layer: "Layers I–III",
                subtitle: "For those who want to heal their relationships.",
                features: ["Everything in Premium.", "The Relationship Workspace.", "Help with the hardest conversations."],
                cta: "Choose Signature",
                featured: false,
              },
            ].map((tier, i) => (
              <div
                key={tier.name}
                className={`card flex flex-col reveal reveal-d${i + 1}`}
                style={tier.featured ? {
                  borderColor: "var(--accent-border)",
                  boxShadow: "0 0 0 1px var(--accent-border), 0 8px 32px rgba(107,86,68,0.12)",
                } : {}}
              >
                <div className="flex items-center justify-between mb-5">
                  <p className="label">{tier.layer}</p>
                  {tier.featured && (
                    <span
                      className="label px-2 py-0.5 rounded border"
                      style={{ fontSize: 9, color: "var(--accent)", borderColor: "var(--accent-border)", background: "var(--accent-dim)" }}
                    >
                      RECOMMENDED
                    </span>
                  )}
                </div>
                <h3
                  className="font-serif mb-3"
                  style={{ fontSize: 24, color: "var(--foreground)", fontFamily: "var(--font-dm-serif)", letterSpacing: "-0.01em" }}
                >
                  {tier.name}
                </h3>
                <p style={{ fontSize: 13.5, color: "var(--muted)", lineHeight: 1.65, marginBottom: 20 }}>{tier.subtitle}</p>
                <div className="h-px mb-5" style={{ background: "var(--border)" }} />
                <div className="space-y-2.5 flex-1 mb-8">
                  {tier.features.map((f) => (
                    <p key={f} style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.6 }}>{f}</p>
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

          {/* Developer API mention */}
          <p className="mt-6 text-center reveal" style={{ fontSize: 13, color: "var(--muted-2)" }}>
            Building with DEFRAG?{" "}
            <a href="#developers" style={{ color: "var(--accent)", textDecoration: "underline", textUnderlineOffset: 3 }}>
              View API access
            </a>
          </p>
        </div>
      </section>

      {/* ── 8. SETUP / BASELINE CTA ──────────────────────────────────────── */}
      <section className="border-b border-[var(--border)]" style={{ background: "var(--surface)" }}>
        <div className="max-w-5xl mx-auto px-6 md:px-12 py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">

            <div className="reveal">
              <p className="label mb-4">Your Starting Point</p>
              <h2
                className="mb-5 font-serif"
                style={{ fontSize: "clamp(26px,3.5vw,40px)", lineHeight: 1.12, letterSpacing: "-0.01em", color: "var(--foreground)", fontFamily: "var(--font-dm-serif)" }}
              >
                The canvas begins here.
              </h2>
              <p style={{ fontSize: 15.5, color: "var(--muted)", lineHeight: 1.72, maxWidth: "42ch", marginBottom: 24 }}>
                Every layer of DEFRAG is calibrated to a single precise starting point — your baseline. Derived from your birth data, it is not a category you are sorted into. It is a precise picture of how you were made to move through the world.
              </p>
              <div
                className="rounded-[var(--radius)] px-4 py-3"
                style={{ border: "1px solid var(--border)", background: "var(--background)", borderLeft: "2px solid var(--accent-border)" }}
              >
                <p style={{ fontSize: 12.5, color: "var(--muted)", lineHeight: 1.65 }}>
                  This is not a personality quiz. There are no categories to identify with. The system reads what is there and returns it in plain language — specific to you, and usable immediately.
                </p>
              </div>
            </div>

            <div className="reveal reveal-d1">
              <div
                className="rounded-[var(--radius-lg)] overflow-hidden"
                style={{ border: "1px solid var(--border)", background: "#fff" }}
              >
                <div className="px-7 pt-7 pb-5" style={{ borderBottom: "1px solid var(--border)" }}>
                  <p className="label mb-1.5">Three coordinates</p>
                  <p style={{ fontSize: 12.5, color: "var(--muted)", lineHeight: 1.65 }}>
                    Date, time, and place of birth. All the system needs to establish your baseline.
                  </p>
                </div>
                <div className="px-7 py-6 space-y-4">
                  {[
                    { id: "dob", label: "Date of birth", type: "text", placeholder: "DD / MM / YYYY" },
                    { id: "tob", label: "Time of birth", type: "text", placeholder: "HH : MM" },
                    { id: "pob", label: "Place of birth", type: "text", placeholder: "City, Country" },
                  ].map((field) => (
                    <div key={field.id}>
                      <label
                        htmlFor={field.id}
                        className="label block mb-1.5"
                        style={{ color: "var(--muted-2)" }}
                      >
                        {field.label}
                      </label>
                      <input
                        id={field.id}
                        type={field.type}
                        placeholder={field.placeholder}
                        readOnly
                        className="w-full h-10 px-3 rounded-[var(--radius)] text-sm"
                        style={{
                          background: "var(--surface)",
                          border: "1px solid var(--border)",
                          color: "var(--foreground)",
                          fontSize: 14,
                          outline: "none",
                        }}
                      />
                    </div>
                  ))}
                </div>
                <div className="px-7 pb-7">
                  <Link href={routes.start} className="btn-primary w-full justify-center">
                    Establish My Baseline
                  </Link>
                  <p className="text-center mt-3" style={{ fontSize: 11, color: "var(--muted-2)" }}>
                    All three coordinates are required for an accurate read.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 9. DEVELOPERS STRIP ──────────────────────────────────────────── */}
      <section id="developers" className="border-b border-[var(--border)]" style={{ background: "var(--background)" }}>
        <div className="max-w-5xl mx-auto px-6 md:px-12 py-10">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 reveal">
            <div className="flex items-center gap-4">
              <div
                className="w-9 h-9 rounded-[var(--radius)] flex items-center justify-center shrink-0"
                style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
              >
                <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4" aria-hidden>
                  <path d="M6 7l-4 3 4 3M14 7l4 3-4 3M11 5l-2 10" stroke="var(--muted)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <p style={{ fontSize: 14, fontWeight: 600, color: "var(--foreground)", marginBottom: 2 }}>Coming Soon: Developers</p>
                <p style={{ fontSize: 13, color: "var(--muted)" }}>
                  Integrate DEFRAG&apos;s intelligence layer directly into your product.
                </p>
              </div>
            </div>
            <a
              href="#"
              style={{ fontSize: 13, color: "var(--accent)", fontWeight: 500, whiteSpace: "nowrap", textDecoration: "underline", textUnderlineOffset: 3 }}
            >
              Join the waitlist
            </a>
          </div>
        </div>
      </section>

    </PageShell>
  );
}
