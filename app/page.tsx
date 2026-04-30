import Link from "next/link";
import { PageShell } from "@/components/system/page-shell";
import { SectionShell } from "@/components/system/section-shell";
import { routes } from "@/lib/routes";

export default function Home() {
  return (
    <PageShell>

      {/* ── HERO ── */}
      <section className="relative border-b border-[var(--border)]">
        {/* Faint column lines, like vercel.com */}
        <div className="absolute inset-0 grid grid-cols-4 pointer-events-none" aria-hidden>
          {[0,1,2,3].map(i => (
            <div key={i} className="border-r border-[var(--border)] opacity-40 last:border-r-0" />
          ))}
        </div>

        <div className="relative max-w-5xl mx-auto px-6 md:px-12 py-28 md:py-40">
          <div className="max-w-3xl animate-fade-up">
            <p className="label mb-6">Personal clarity platform</p>
            <h1 className="text-5xl md:text-7xl font-bold leading-[1.06] tracking-tight text-[var(--foreground)] mb-8">
              Healing isn&apos;t optional.<br />
              <span className="text-[var(--muted)]">But the pain is.</span>
            </h1>
            <p className="text-lg text-[var(--muted)] leading-relaxed max-w-xl mb-10">
              DEFRAG is a personal clarity platform that helps you understand how you are made, read the tension in a moment, and finally see the world from the other person&apos;s side.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href={routes.start} className="btn-primary">Start Your Baseline</Link>
              <Link href={routes.product} className="btn-secondary">How It Works</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT IS DEFRAG ── */}
      <section className="border-b border-[var(--border)]">
        <div className="max-w-5xl mx-auto px-6 md:px-12 py-20 md:py-28">
          <div className="grid md:grid-cols-3 gap-px bg-[var(--border)] rounded-lg overflow-hidden">
            {[
              {
                tag: "The Moment",
                copy: "You ask for a little more time to finish a task."
              },
              {
                tag: "The Miss",
                copy: "They hear a lack of commitment and start to worry."
              },
              {
                tag: "The Truth",
                copy: "You aren\u2019t failing. They aren\u2019t being difficult. You\u2019re just seeing the same moment from two different sides."
              }
            ].map((item) => (
              <div key={item.tag} className="bg-[var(--background)] p-8">
                <p className="label mb-4">{item.tag}</p>
                <p className="text-[var(--foreground)] text-base leading-relaxed">{item.copy}</p>
              </div>
            ))}
          </div>
          <p className="text-[var(--muted)] text-sm mt-6">
            DEFRAG shows you the bridge between them.
          </p>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="border-b border-[var(--border)]">
        <div className="max-w-5xl mx-auto px-6 md:px-12 py-20 md:py-28 space-y-14">
          <div>
            <p className="label mb-4">How it works</p>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight text-[var(--foreground)] max-w-2xl">
              Understand why people do what they do.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-px bg-[var(--border)] rounded-lg overflow-hidden">
            {[
              { n: "01", title: "Know Your Nature",    body: "See how you were made to handle the world and what you need to feel clear." },
              { n: "02", title: "Read the Moment",     body: "Recognize the tension in a room before it turns into a regret." },
              { n: "03", title: "See Their Side",      body: "Understand why someone else reacts the way they do — without guesswork." },
              { n: "04", title: "Find the Response",   body: "Know what to say when it matters most." }
            ].map((item) => (
              <div key={item.n} className="bg-[var(--background)] p-8 flex gap-6">
                <span className="label pt-0.5 shrink-0">{item.n}</span>
                <div>
                  <h3 className="text-[var(--foreground)] font-semibold mb-2">{item.title}</h3>
                  <p className="text-[var(--muted)] text-sm leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SCENARIOS ── */}
      <section className="border-b border-[var(--border)]">
        <div className="max-w-5xl mx-auto px-6 md:px-12 py-20 md:py-28 space-y-10">
          <div>
            <p className="label mb-4">When it matters most</p>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[var(--foreground)] max-w-2xl">
              Made for the moments that change things.
            </h2>
          </div>

          <div className="space-y-2">
            {[
              {
                moment: "You reschedule for the third time.",
                miss:   "They decide you don\u2019t respect them.",
                truth:  "You\u2019re overwhelmed. They need reliability. DEFRAG gives you the words to reset."
              },
              {
                moment: "They question your decision publicly.",
                miss:   "You hear it as a threat and armor up.",
                truth:  "They want clarity. You want autonomy. DEFRAG shows you how to lead together."
              },
              {
                moment: "You commit, then feel like pulling back.",
                miss:   "They experience betrayal and brace for impact.",
                truth:  "You need recalibration. They need reassurance. DEFRAG helps you renegotiate, not repeat."
              }
            ].map((s, i) => (
              <div key={i} className="card grid md:grid-cols-3 gap-6 md:gap-8">
                <div>
                  <p className="label mb-2">The Moment</p>
                  <p className="text-sm text-[var(--foreground)] leading-relaxed">{s.moment}</p>
                </div>
                <div>
                  <p className="label mb-2">The Miss</p>
                  <p className="text-sm text-[var(--foreground)] leading-relaxed">{s.miss}</p>
                </div>
                <div>
                  <p className="label mb-2">The Truth</p>
                  <p className="text-sm text-[var(--muted)] leading-relaxed">{s.truth}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section>
        <div className="max-w-5xl mx-auto px-6 md:px-12 py-24 md:py-36 flex flex-col md:flex-row md:items-end md:justify-between gap-10">
          <div>
            <p className="label mb-4">Get started</p>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight text-[var(--foreground)] max-w-lg">
              Ready to find your clarity?
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
