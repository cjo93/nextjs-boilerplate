import Link from "next/link";
import { PageShell } from "@/components/system/page-shell";
import { routes } from "@/lib/routes";
import { BridgeDiagram, IconNature, IconMoment, IconPerspective, IconLanguage, IconBaseline, IconNow, IconConnection } from "@/components/site/diagrams";

export default function Home() {
  return (
    <PageShell>

      {/* ── 1. HERO ──────────────────────────── */}
      <section className="relative overflow-hidden border-b border-[var(--border)]">

        {/* Subtle accent ambient */}
        <div
          className="pointer-events-none absolute -top-40 right-1/4 w-[700px] h-[500px] animate-fade-in"
          aria-hidden
          style={{
            background: "radial-gradient(ellipse at center, rgba(75,158,143,0.06) 0%, transparent 65%)",
            filter: "blur(60px)",
          }}
        />

        {/* Column grid lines */}
        <div className="absolute inset-0 grid grid-cols-6 pointer-events-none" aria-hidden>
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="border-r border-[var(--border)] last:border-r-0" style={{ opacity: 0.5 }} />
          ))}
        </div>

        <div className="relative max-w-5xl mx-auto px-6 md:px-12 pt-24 pb-20 md:pt-36 md:pb-32">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">

            {/* Left: text */}
            <div>
              <p className="label mb-7 animate-fade-up">Human Intelligence Platform</p>
              <h1 className="text-[clamp(36px,5.5vw,68px)] font-bold leading-[1.05] tracking-[-0.04em] text-[var(--foreground)] mb-7 animate-fade-up-d1">
                Understand the &lsquo;Why&rsquo; Behind<br />
                <span style={{ color: "rgba(240,240,240,0.32)" }}>Every Interaction.</span>
              </h1>
              <p className="text-[16px] leading-[1.72] mb-10 animate-fade-up-d2" style={{ color: "var(--muted)", fontWeight: 400, maxWidth: "44ch" }}>
                DEFRAG is a human intelligence platform. We map the hidden dynamics of how people work so you can move through relationships with precision, empathy, and absolute clarity.
              </p>
              <div className="flex flex-wrap gap-3 mb-6 animate-fade-up-d3">
                <Link href={routes.start} className="btn-primary">Start Your Baseline</Link>
                <Link href="#developers" className="btn-secondary">View API Docs</Link>
              </div>
              <p className="text-[12px] animate-fade-up-d3" style={{ color: "var(--muted-2)" }}>
                This is serious software — built for human dynamics, not dashboards.
              </p>
            </div>

            {/* Right: hero visual */}
            <div className="hidden md:flex items-center justify-center animate-fade-in">
              <BridgeDiagram className="w-full max-w-[420px]" />
            </div>

          </div>
        </div>
      </section>

      {/* ── 2. VALUE PROOF: MEANING SPLIT ── */}
      <section className="border-b border-[var(--border)] bg-[var(--surface)]">
        <div className="max-w-5xl mx-auto px-6 md:px-12 py-20 md:py-28">

          <div className="mb-14">
            <p className="label mb-5">Actionable Clarity</p>
            <h2 className="text-2xl md:text-[34px] font-bold tracking-[-0.025em] leading-[1.1] text-[var(--foreground)] max-w-2xl">
              Turn Friction into Clarity
            </h2>
            <p className="text-[16px] text-[var(--muted)] leading-relaxed mt-4 max-w-xl">
              Human dynamics are complex — but they are not random. Every moment of friction has a clear explanation. DEFRAG finds it.
            </p>
          </div>

          {/* Three-column diagnostic strip */}
          <div className="grid md:grid-cols-3 gap-px bg-[var(--border)] rounded-[var(--radius-lg)] overflow-hidden">
            {[
              {
                tag: "What you said",
                icon: (
                  <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4" aria-hidden>
                    <path d="M3 10h10M9 6l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ),
                copy: "A clear, direct request. You needed more time to finish the work you were already inside of.",
                accent: false,
              },
              {
                tag: "What they heard",
                icon: (
                  <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4" aria-hidden>
                    <path d="M17 10H7M11 6L7 10l4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ),
                copy: "A personal criticism. A withdrawal. A signal that the thing between you mattered less than the task in front of you.",
                accent: false,
              },
              {
                tag: "The DEFRAG Read",
                icon: (
                  <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4" aria-hidden>
                    <circle cx="10" cy="10" r="6" stroke="currentColor" strokeWidth="1.2"/>
                    <path d="M10 7v3.5l2 1.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                  </svg>
                ),
                copy: "This isn't a lack of respect — it's a Meaning Split. You're speaking two different languages. Here is how to bridge it.",
                accent: true,
              },
            ].map((col) => (
              <div
                key={col.tag}
                className="cell flex flex-col gap-4"
                style={{
                  background: col.accent ? "rgba(75,158,143,0.05)" : "var(--surface)",
                  borderLeft: col.accent ? "2px solid var(--accent-border)" : undefined,
                }}
              >
                <div className="flex items-center gap-2.5">
                  <span style={{ color: col.accent ? "var(--accent)" : "var(--muted-2)" }}>{col.icon}</span>
                  <p className="label" style={{ color: col.accent ? "var(--accent)" : undefined }}>{col.tag}</p>
                </div>
                <p className="text-[14.5px] leading-[1.7]" style={{ color: col.accent ? "var(--foreground)" : "var(--muted)" }}>
                  {col.copy}
                </p>
              </div>
            ))}
          </div>

          {/* You → DEFRAG → Them connector */}
          <div className="mt-8 flex items-center gap-0 justify-center" aria-hidden>
            <span className="text-[11px] tracking-[0.1em] uppercase" style={{ color: "var(--muted-2)" }}>You</span>
            <div className="flex-1 mx-4 flex items-center gap-1">
              <div className="h-px flex-1 bg-[var(--border-2)]" />
              <svg viewBox="0 0 8 8" fill="none" className="w-2 h-2 shrink-0">
                <circle cx="4" cy="4" r="3" fill="rgba(75,158,143,0.5)" />
              </svg>
              <div className="h-px flex-1" style={{ background: "var(--accent-border)" }} />
              <span className="text-[10px] font-semibold tracking-[0.12em] px-2 py-0.5 rounded border" style={{ color: "var(--accent)", borderColor: "var(--accent-border)", background: "rgba(75,158,143,0.07)" }}>DEFRAG</span>
              <div className="h-px flex-1" style={{ background: "var(--accent-border)" }} />
              <svg viewBox="0 0 8 8" fill="none" className="w-2 h-2 shrink-0">
                <circle cx="4" cy="4" r="3" fill="rgba(75,158,143,0.3)" />
              </svg>
              <div className="h-px flex-1 bg-[var(--border-2)]" />
            </div>
            <span className="text-[11px] tracking-[0.1em] uppercase" style={{ color: "var(--muted-2)" }}>Them</span>
          </div>

        </div>
      </section>

      {/* ── 3. FEATURE GRID: TURN FRICTION INTO CLARITY ── */}
      <section className="border-b border-[var(--border)]">
        <div className="max-w-5xl mx-auto px-6 md:px-12 py-20 md:py-28">

          <div className="mb-12">
            <p className="label mb-5">What DEFRAG Helps You Do</p>
            <h2 className="text-2xl md:text-[34px] font-bold tracking-[-0.025em] leading-snug text-[var(--foreground)] max-w-xl">
              Map, read, bridge, and act.
            </h2>
            <p className="text-[15px] text-[var(--muted)] leading-relaxed mt-4 max-w-xl">
              Understand why people do what they do. When you see the truth of how people are made, conflict turns back into connection.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-3">
            {[
              {
                icon: <IconNature />,
                title: "Map Your Wiring",
                body: "See how you were made to handle the world and what you need to feel clear — before you can be misread.",
              },
              {
                icon: <IconMoment />,
                title: "Read the Moment",
                body: "Recognize the tension in a room before it turns into a regret. See what is actually happening beneath the noise.",
              },
              {
                icon: <IconPerspective />,
                title: "Bridge the Gap",
                body: "Understand why someone else reacts the way they do — without the guesswork, without the story you told yourself.",
              },
              {
                icon: <IconLanguage />,
                title: "Act with Precision",
                body: "Find the response that actually lands. The words that reach their side of the canvas and resolve the friction.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="card flex gap-5 group"
                style={{ padding: "28px 32px" }}
              >
                <div
                  className="w-10 h-10 rounded-[var(--radius)] flex items-center justify-center shrink-0 transition-colors"
                  style={{
                    background: "var(--surface-2)",
                    border: "1px solid var(--border-2)",
                  }}
                >
                  {card.icon}
                </div>
                <div>
                  <h3 className="text-[var(--foreground)] font-semibold text-[14px] tracking-[-0.01em] mb-2">{card.title}</h3>
                  <p className="text-[var(--muted)] text-[13px] leading-[1.68]">{card.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. ONE SYSTEM, THREE LENSES ── */}
      <section className="border-b border-[var(--border)] bg-[var(--surface)]">
        <div className="max-w-5xl mx-auto px-6 md:px-12 py-20 md:py-28">

          <div className="mb-14">
            <p className="label mb-5">Technical Precision for Human Dynamics</p>
            <h2 className="text-2xl md:text-[34px] font-bold tracking-[-0.025em] leading-snug text-[var(--foreground)]">
              One System, Three Lenses
            </h2>
            <p className="text-[15px] text-[var(--muted)] leading-relaxed mt-4 max-w-xl">
              DEFRAG doesn&apos;t give you more to do. It gives you a clear way to navigate the three areas where we get lost most.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-3">
            {[
              {
                icon: <IconBaseline />,
                chip: "Baseline",
                title: "Your Architecture",
                body: "Understand the truth of who you are. See what makes you feel alive, what makes you shut down, and how to find your way back to center when things get intense.",
              },
              {
                icon: <IconNow />,
                chip: "Now",
                title: "Real-Time Intelligence",
                body: "Get a clear read on what is happening right this second. Stop the overthinking and find the move that fits the situation — before you say the wrong thing.",
              },
              {
                icon: <IconConnection />,
                chip: "Relationships",
                title: "The Interface",
                body: "Understand the person across from you. See the world through their eyes so you can stop fighting their nature and start building a real connection.",
              },
            ].map((pillar, i) => (
              <div
                key={pillar.chip}
                className="card flex flex-col gap-6 group"
                style={i === 1 ? {
                  borderColor: "var(--accent-border)",
                  boxShadow: "0 0 0 1px var(--accent-border), 0 8px 28px rgba(0,0,0,0.4), 0 0 24px rgba(75,158,143,0.06) inset"
                } : {}}
              >
                <div className="flex items-start justify-between">
                  <div
                    className="w-9 h-9 rounded-[var(--radius)] flex items-center justify-center shrink-0"
                    style={{
                      background: i === 1 ? "rgba(75,158,143,0.1)" : "var(--surface-2)",
                      border: `1px solid ${i === 1 ? "var(--accent-border)" : "var(--border)"}`,
                    }}
                  >
                    {pillar.icon}
                  </div>
                  <span
                    className="label py-0.5 px-2 rounded border text-[9px] tracking-[0.12em]"
                    style={{
                      color: i === 1 ? "var(--accent)" : "var(--muted-2)",
                      borderColor: i === 1 ? "var(--accent-border)" : "var(--border)",
                      background: i === 1 ? "rgba(75,158,143,0.07)" : "transparent",
                    }}
                  >
                    {pillar.chip.toUpperCase()}
                  </span>
                </div>
                <div>
                  <h3 className="text-[var(--foreground)] font-semibold text-[15px] tracking-[-0.015em] mb-3">{pillar.title}</h3>
                  <p className="text-[var(--muted)] text-[13px] leading-[1.72]">{pillar.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. HOW IT WORKS ── */}
      <section id="how-it-works" className="border-b border-[var(--border)]">
        <div className="max-w-5xl mx-auto px-6 md:px-12 py-20 md:py-28">

          <div className="mb-14">
            <p className="label mb-5">Simple Inputs, Sharp Outputs</p>
            <h2 className="text-3xl md:text-[42px] font-bold tracking-[-0.03em] leading-[1.07] text-[var(--foreground)]">
              How DEFRAG Works
            </h2>
          </div>

          {/* Step connector */}
          <div className="hidden md:block mb-2" aria-hidden>
            <svg viewBox="0 0 960 20" fill="none" className="w-full">
              <circle cx="160" cy="10" r="2.5" fill="var(--accent)" fillOpacity="0.6" />
              <line x1="163" y1="10" x2="477" y2="10" stroke="var(--accent)" strokeOpacity="0.2" strokeWidth="0.75" strokeDasharray="4 4" />
              <circle cx="480" cy="10" r="2.5" fill="var(--accent)" fillOpacity="0.35" />
              <line x1="483" y1="10" x2="797" y2="10" stroke="var(--accent)" strokeOpacity="0.12" strokeWidth="0.75" strokeDasharray="4 4" />
              <circle cx="800" cy="10" r="2.5" fill="var(--accent)" fillOpacity="0.18" />
            </svg>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-[var(--border)] rounded-[var(--radius-lg)] overflow-hidden">
            {[
              {
                n: "01",
                title: "Input the Data",
                body: "We use your birth details to establish your natural baseline. No long quizzes, no labels — just a precise look at how you were uniquely made.",
              },
              {
                n: "02",
                title: "Select Your Lens",
                body: "Choose whether you need to check in with yourself, read a specific moment, or understand the dynamics of a relationship.",
              },
              {
                n: "03",
                title: "Receive the Read",
                body: "DEFRAG returns a clear, human explanation of the \"why\" and a precise path forward that fits the situation — not a generic response.",
              },
            ].map((s, i) => (
              <div key={s.n} className="cell bg-[var(--surface)] flex flex-col gap-5">
                <div className="flex items-center justify-between">
                  <span className="label tabular-nums">{s.n}</span>
                  <span
                    className="block w-1.5 h-1.5 rounded-full"
                    style={{ background: `rgba(75,158,143,${0.7 - i * 0.2})` }}
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

      {/* ── 6. PRICING ── */}
      <section className="border-b border-[var(--border)] bg-[var(--surface)]">
        <div className="max-w-5xl mx-auto px-6 md:px-12 py-20 md:py-28">

          <div className="mb-12">
            <p className="label mb-5">Scalable Support</p>
            <h2 className="text-3xl md:text-[40px] font-bold tracking-[-0.03em] leading-tight text-[var(--foreground)]">
              Choose Your Level of Clarity
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-4 items-stretch mb-4">
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
                layer: "Layers I–II",
                subtitle: "For those who want guidance when life gets loud.",
                features: [
                  "Everything in Baseline + The Now Workspace.",
                  "Real-time reads for daily situations.",
                  "Support for finding the right timing.",
                ],
                cta: "Choose Premium",
                featured: true,
              },
              {
                name: "Signature",
                layer: "Layers I–III",
                subtitle: "For those who want to heal their relationships.",
                features: [
                  "Everything in Premium + The Relationship Workspace.",
                  "Help with the hardest conversations.",
                  "Understanding the patterns between two people.",
                ],
                cta: "Choose Signature",
                featured: false,
              },
            ].map((tier) => (
              <div
                key={tier.name}
                className="card flex flex-col"
                style={tier.featured ? {
                  borderColor: "var(--accent-border)",
                  background: "var(--surface-2)",
                  boxShadow: "0 0 0 1px var(--accent-border), 0 12px 40px rgba(0,0,0,0.5), 0 0 32px rgba(75,158,143,0.07) inset",
                } : {}}
              >
                <div className="flex items-center justify-between mb-5">
                  <p className="label">{tier.layer}</p>
                  {tier.featured && (
                    <span
                      className="text-[9px] font-semibold tracking-[0.14em] py-0.5 px-2 rounded border"
                      style={{ color: "var(--accent)", borderColor: "var(--accent-border)", background: "rgba(75,158,143,0.08)" }}
                    >
                      RECOMMENDED
                    </span>
                  )}
                </div>

                <h3 className="text-[var(--foreground)] text-xl font-bold tracking-[-0.025em] mb-2">{tier.name}</h3>
                <p className="text-[var(--muted)] text-[13px] leading-[1.6] mb-6">{tier.subtitle}</p>

                <div className="h-px bg-[var(--border)] mb-6" />

                <div className="space-y-2.5 flex-1 mb-8">
                  {tier.features.map((f, i) => (
                    <p
                      key={f}
                      className="text-[13px] leading-relaxed"
                      style={{ color: i === 0 && tier.name !== "Baseline" ? "var(--muted-2)" : "var(--muted)" }}
                    >
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

          {/* Developer API strip */}
          <div
            className="rounded-[var(--radius)] border px-6 py-4 flex flex-col md:flex-row md:items-center justify-between gap-4"
            style={{ borderColor: "var(--border-2)", background: "var(--surface-3)" }}
          >
            <div className="flex items-center gap-4">
              <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 shrink-0" aria-hidden>
                <path d="M8 9l-3 3 3 3M16 9l3 3-3 3M13 6l-2 12" stroke="rgba(75,158,143,0.7)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <div>
                <p className="text-[13px] font-semibold text-[var(--foreground)] tracking-tight">Developer API</p>
                <p className="text-[12px] text-[var(--muted-2)] mt-0.5">Integrate DEFRAG&apos;s logic layer into your own platform. Deterministic, scalable intelligence for any B2B or B2C application.</p>
              </div>
            </div>
            <Link href="#developers" className="btn-secondary shrink-0 text-[12px]" style={{ height: "34px", padding: "0 16px" }}>
              Learn more
            </Link>
          </div>

        </div>
      </section>

      {/* ── 7. BASELINE CTA ── */}
      <section className="border-b border-[var(--border)]">
        <div className="max-w-5xl mx-auto px-6 md:px-12 py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">

            {/* Left: copy */}
            <div className="space-y-5">
              <p className="label">Map Your Architecture</p>
              <h2 className="text-3xl md:text-[44px] font-bold tracking-[-0.03em] leading-[1.06] text-[var(--foreground)]">
                Establish Your Baseline.
              </h2>
              <p className="text-[15px] text-[var(--muted)] leading-[1.72]">
                Your birth details are the simplest, most precise way to map your cognitive architecture. This becomes the foundation — derived once, applied everywhere.
              </p>
              <p className="text-[12.5px] leading-relaxed" style={{ color: "var(--muted-2)" }}>
                Your data is used solely to generate your cognitive map. No fluff. Just logic.
              </p>
            </div>

            {/* Right: form card */}
            <div
              className="rounded-[var(--radius-lg)] overflow-hidden"
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border-2)",
                boxShadow: "0 8px 40px rgba(0,0,0,0.4)",
              }}
            >
              <div className="px-7 pt-7 pb-5 border-b border-[var(--border)]">
                <p className="label mb-1.5">Your Foundation</p>
                <p className="text-[12px]" style={{ color: "var(--muted-2)" }}>Three coordinates. Derived once, applied everywhere.</p>
              </div>
              <div className="px-7 py-6 space-y-4">
                {[
                  { label: "Date of Birth",  helper: "",                                            placeholder: "mm / dd / yyyy" },
                  { label: "Time of Birth",  helper: "Crucial for technical precision.",             placeholder: "hh : mm  AM / PM" },
                  { label: "Place of Birth", helper: "",                                            placeholder: "City, Country" },
                ].map((field) => (
                  <div key={field.label}>
                    <div className="flex items-baseline justify-between mb-1.5">
                      <p className="label">{field.label}</p>
                      {field.helper && <p className="text-[10.5px]" style={{ color: "var(--accent)", opacity: 0.8 }}>{field.helper}</p>}
                    </div>
                    <div
                      className="h-10 w-full rounded-[var(--radius)] border px-4 flex items-center text-[12.5px]"
                      style={{ color: "var(--muted-2)", background: "var(--surface-2)", borderColor: "var(--border-2)" }}
                    >
                      {field.placeholder}
                    </div>
                  </div>
                ))}
              </div>
              <div className="px-7 pb-7 space-y-3">
                <div className="h-px mb-5" style={{ background: "var(--border)" }} />
                <Link href={routes.start} className="btn-primary w-full justify-center">
                  Establish Baseline
                </Link>
                <p className="text-[11px] text-center" style={{ color: "var(--muted-2)" }}>
                  Your data is used solely to generate your cognitive map. No fluff. Just logic.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 8. COMING SOON: DEVELOPERS ── */}
      <section id="developers" className="border-b border-[var(--border)] bg-[var(--surface)]">
        <div className="max-w-5xl mx-auto px-6 md:px-12 py-12 md:py-16">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">

            <div className="flex items-start gap-5">
              <div
                className="w-10 h-10 rounded-[var(--radius)] flex items-center justify-center shrink-0 mt-0.5"
                style={{ background: "var(--surface-2)", border: "1px solid var(--border-2)" }}
              >
                <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" aria-hidden>
                  <path d="M8 9l-3 3 3 3M16 9l3 3-3 3M13 6l-2 12" stroke="rgba(75,158,143,0.6)" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <p className="label mb-1.5">Coming Soon</p>
                <h3 className="text-[var(--foreground)] font-semibold text-[16px] tracking-tight mb-1.5">For Developers</h3>
                <p className="text-[13.5px] text-[var(--muted)] leading-relaxed max-w-lg">
                  Use DEFRAG&apos;s human intelligence layer as an API inside your own product. Deterministic, scalable logic for any B2B or B2C application.
                </p>
              </div>
            </div>

            <Link
              href="#"
              className="btn-secondary shrink-0"
              style={{ borderColor: "var(--border-2)", whiteSpace: "nowrap" }}
            >
              Join the Developer Waitlist
            </Link>

          </div>
        </div>
      </section>

    </PageShell>
  );
}
