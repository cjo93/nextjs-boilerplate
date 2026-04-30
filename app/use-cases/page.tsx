import Link from "next/link";
import { PageShell } from "@/components/system/page-shell";
import { routes } from "@/lib/routes";

const useCases = [
  {
    n: "01",
    title: "Before you send the message",
    body: "Check if your timing and tone match the moment before you commit to a direction.",
  },
  {
    n: "02",
    title: "When a conversation loops",
    body: "Understand the pattern that keeps you and another person stuck and find the first move out.",
  },
  {
    n: "03",
    title: "When something feels off",
    body: "Name the tension you are feeling so you can address it clearly instead of reacting to it.",
  },
  {
    n: "04",
    title: "When you want to be heard",
    body: "Learn how to speak in a way the other person can actually receive, given how they are made.",
  },
  {
    n: "05",
    title: "When you need to lead",
    body: "Move with self-possession and clarity in high-stakes environments where precision matters.",
  },
  {
    n: "06",
    title: "When you are ready to repair",
    body: "Find the path back to someone after distance or damage — without pretending it did not happen.",
  },
];

export default function UseCasesPage() {
  return (
    <PageShell>

      {/* ── HERO ── */}
      <section className="border-b border-[var(--border)]">
        <div className="max-w-5xl mx-auto px-6 md:px-12 pt-28 pb-24 md:pt-36 md:pb-32">
          <p className="label mb-6 animate-fade-up">Use cases</p>
          <h1 className="text-[clamp(38px,6vw,68px)] font-bold leading-[1.05] tracking-[-0.03em] text-[var(--foreground)] mb-6 max-w-3xl animate-fade-up-d1">
            For the moments that matter.
          </h1>
          <p className="text-[17px] text-[var(--muted)] leading-relaxed max-w-[440px] animate-fade-up-d2">
            DEFRAG is for the times when you need to be sure.
          </p>
        </div>
      </section>

      {/* ── USE CASES GRID ── */}
      <section className="border-b border-[var(--border)]">
        <div className="max-w-5xl mx-auto px-6 md:px-12 py-16 md:py-24">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--border)] rounded-[var(--radius-lg)] overflow-hidden">
            {useCases.map((u) => (
              <div key={u.n} className="cell bg-[var(--surface)] flex flex-col gap-4">
                <span className="label tabular-nums">{u.n}</span>
                <h3 className="text-[var(--foreground)] font-semibold text-[15px] tracking-tight leading-snug">{u.title}</h3>
                <p className="text-[var(--muted)] text-sm leading-relaxed flex-1">{u.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section>
        <div className="max-w-5xl mx-auto px-6 md:px-12 py-24 md:py-32 flex flex-col md:flex-row md:items-end justify-between gap-10">
          <div>
            <p className="label mb-4">Get started</p>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[var(--foreground)] max-w-sm leading-tight">
              Clarity when it matters most.
            </h2>
            <p className="text-sm text-[var(--muted)] mt-4 max-w-xs leading-relaxed">
              Use DEFRAG whenever you need to move from confusion toward certainty.
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
