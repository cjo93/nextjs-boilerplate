import Link from "next/link";
import { PageShell } from "@/components/system/page-shell";
import { routes } from "@/lib/routes";

const useCases = [
  {
    n: "01",
    title: "Before you send the message",
    body: "The canvas looks different at 11pm than it does at 9am. DEFRAG reads the moment so you know whether your timing and tone are going to land — before you commit.",
  },
  {
    n: "02",
    title: "When a conversation keeps repeating",
    body: "The same argument returning is not a failure of effort. It is a picture neither person can fully see. DEFRAG shows you what is actually in the frame so you can find the first move out.",
  },
  {
    n: "03",
    title: "When something is off but you cannot name it",
    body: "Tension has a shape. DEFRAG helps you identify it precisely — so you can address what is there instead of reacting to your interpretation of it.",
  },
  {
    n: "04",
    title: "When you need to be understood",
    body: "Being heard is not about speaking louder. It is about knowing how the other person receives. DEFRAG gives you the words that reach their side of the canvas.",
  },
  {
    n: "05",
    title: "When the stakes are high",
    body: "High-stakes moments require more precision, not more effort. DEFRAG gives you a clear read on both sides before you act.",
  },
  {
    n: "06",
    title: "When you are trying to come back",
    body: "Repair is harder than the initial break because the canvas has changed. DEFRAG helps you find the path back to someone without pretending the distance was not real.",
  },
];

export default function UseCasesPage() {
  return (
    <PageShell>

      {/* ── HERO ── */}
      <section className="border-b border-[var(--border)]">
        <div className="max-w-5xl mx-auto px-6 md:px-12 pt-28 pb-24 md:pt-36 md:pb-32">
          <p className="label mb-6 animate-fade-up">Situations</p>
          <h1 className="text-[clamp(38px,6vw,68px)] font-bold leading-[1.05] tracking-[-0.03em] text-[var(--foreground)] mb-6 max-w-3xl animate-fade-up-d1">
            Six places where a clearer picture changes the outcome.
          </h1>
          <p className="text-[17px] text-[var(--muted)] leading-relaxed max-w-[440px] animate-fade-up-d2">
            The situations below are ordinary. The cost of navigating them without enough information is not.
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
              The picture is already there. DEFRAG just makes it readable.
            </h2>
            <p className="text-sm text-[var(--muted)] mt-4 max-w-xs leading-relaxed">
              Start with your baseline. From there, every situation has a clearer entry point.
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
