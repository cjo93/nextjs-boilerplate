import Link from "next/link";
import { PageShell } from "@/components/system/page-shell";
import { SectionShell } from "@/components/system/section-shell";
import { CtaRow } from "@/components/system/cta-row";
import { routes } from "@/lib/routes";

export default function Home() {
  return (
    <PageShell>
      {/* HERO SECTION */}
      <SectionShell className="text-center py-32 md:py-40">
        <div className="space-y-8 max-w-3xl mx-auto">
          <h1 className="headline text-white animate-fade-in-up">
            Healing isn&apos;t optional. But the pain is.
          </h1>
          <p className="subheadline text-[var(--text-secondary)] leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Life requires us to grow, but it doesn&apos;t require us to suffer through the friction of being misunderstood. DEFRAG is a personal clarity platform that helps you understand how you are made, read the tension in a moment, and finally see the world from the other person&apos;s side.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <Link
              href={routes.start}
              className="btn-primary"
            >
              Start Your Baseline
            </Link>
            <Link
              href={routes.howItWorks}
              className="btn-secondary"
            >
              See How It Works
            </Link>
          </div>
        </div>
      </SectionShell>

      {/* DIVIDER */}
      <div className="h-px bg-[var(--border-color)] my-24" />

      {/* SECTION 2: THE CAPABILITY */}
      <SectionShell className="space-y-16 py-24 md:py-32">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="section-title text-white mb-4 animate-fade-in-up">
            The Capability: Seeing the Bridge
          </h2>
          <p className="text-[var(--text-secondary)] text-base animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Most of our frustration lives in the gap between what we meant and what they heard.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {/* Column 1: The Moment */}
          <div
            className="border border-[var(--border-color)] bg-white/[0.02] p-8 rounded-lg hover:border-[var(--border-color-hover)] transition-all duration-300 animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            <p className="text-xs uppercase text-[var(--text-tertiary)] mb-3 font-medium">The Moment</p>
            <p className="text-base text-[var(--text-secondary)]">
              You ask for a little more time to finish a task.
            </p>
          </div>

          {/* Column 2: The Miss */}
          <div
            className="border border-[var(--border-color)] bg-white/[0.02] p-8 rounded-lg hover:border-[var(--border-color-hover)] transition-all duration-300 animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            <p className="text-xs uppercase text-[var(--text-tertiary)] mb-3 font-medium">The Miss</p>
            <p className="text-base text-[var(--text-secondary)]">
              They hear a lack of commitment and start to worry.
            </p>
          </div>

          {/* Column 3: The Truth */}
          <div
            className="border border-[var(--border-color)] bg-white/[0.02] p-8 rounded-lg hover:border-[var(--border-color-hover)] transition-all duration-300 animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <p className="text-xs uppercase text-[var(--text-tertiary)] mb-3 font-medium">The Truth</p>
            <p className="text-base text-[var(--text-secondary)]">
              You aren&apos;t &apos;failing,&apos; and they aren&apos;t &apos;being difficult.&apos; You are simply seeing the same moment from two different sides. DEFRAG shows you the bridge between them.
            </p>
          </div>
        </div>
      </SectionShell>

      {/* DIVIDER */}
      <div className="h-px bg-[var(--border-color)] my-24" />

      {/* SECTION 3: UNDERSTAND WHY PEOPLE DO WHAT THEY DO */}
      <SectionShell className="space-y-16 py-24 md:py-32">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="section-title text-white mb-4 animate-fade-in-up">
            Understand why people do what they do.
          </h2>
          <p className="text-[var(--text-secondary)] text-base animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            When you see the truth of how people are made, conflict turns back into connection.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {/* Feature 1 */}
          <div
            className="border border-[var(--border-color)] bg-white/[0.02] p-8 rounded-lg hover:border-[var(--border-color-hover)] transition-all duration-300 animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            <h3 className="text-lg font-semibold mb-3 text-white">
              Understand your nature
            </h3>
            <p className="text-sm text-[var(--text-tertiary)]">
              See how you were made to handle the world and what you need to feel clear.
            </p>
          </div>

          {/* Feature 2 */}
          <div
            className="border border-[var(--border-color)] bg-white/[0.02] p-8 rounded-lg hover:border-[var(--border-color-hover)] transition-all duration-300 animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            <h3 className="text-lg font-semibold mb-3 text-white">
              Read the moment
            </h3>
            <p className="text-sm text-[var(--text-tertiary)]">
              Recognize the tension in a room before it turns into a regret.
            </p>
          </div>

          {/* Feature 3 */}
          <div
            className="border border-[var(--border-color)] bg-white/[0.02] p-8 rounded-lg hover:border-[var(--border-color-hover)] transition-all duration-300 animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <h3 className="text-lg font-semibold mb-3 text-white">
              See their side
            </h3>
            <p className="text-sm text-[var(--text-tertiary)]">
              Understand why someone else reacts the way they do—without the guesswork.
            </p>
          </div>

          {/* Feature 4 */}
          <div
            className="border border-[var(--border-color)] bg-white/[0.02] p-8 rounded-lg hover:border-[var(--border-color-hover)] transition-all duration-300 animate-fade-in-up"
            style={{ animationDelay: "0.5s" }}
          >
            <h3 className="text-lg font-semibold mb-3 text-white">
              Find the response that fits
            </h3>
            <p className="text-sm text-[var(--text-tertiary)]">
              Know what to say when it matters most to resolve the friction.
            </p>
          </div>
        </div>
      </SectionShell>

      {/* DIVIDER */}
      <div className="h-px bg-[var(--border-color)] my-24" />

      {/* FOOTER CTA */}
      <SectionShell className="text-center py-32">
        <div className="space-y-8 max-w-3xl mx-auto">
          <h2 className="section-title text-white">
            Ready to find your clarity?
          </h2>
          <CtaRow>
            <Link
              href={routes.start}
              className="btn-primary"
            >
              Start Your Baseline
            </Link>
            <Link
              href={routes.pricing}
              className="btn-secondary"
            >
              View Pricing
            </Link>
          </CtaRow>
        </div>
      </SectionShell>
    </PageShell>
  );
}
