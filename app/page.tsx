import Link from "next/link";
import { PageShell } from "@/components/system/page-shell";
import { SectionShell } from "@/components/system/section-shell";
import { CtaRow } from "@/components/system/cta-row";
import { routes } from "@/lib/routes";

export default function Home() {
  return (
    <PageShell>
      {/* HERO SECTION - 70vh height with visual elements */}
      <div className="relative min-h-screen md:h-[70vh] flex items-center justify-center overflow-hidden py-20 md:py-0">
        {/* Animated gradient blob - background */}
        <div className="gradient-blob animate-blob-move absolute top-1/3 -left-32 w-96 h-96 pointer-events-none" />
        <div className="gradient-blob animate-blob-move absolute -bottom-32 right-1/4 w-96 h-96 pointer-events-none" style={{ animationDelay: "2s" }} />
        
        {/* Subtle scanline effect overlay */}
        <div className="absolute inset-0 opacity-5 pointer-events-none animate-scanlines bg-gradient-to-b from-transparent via-white to-transparent" />

        {/* Main content */}
        <SectionShell className="relative z-10 text-center max-w-3xl mx-auto space-y-8">
          <h1 className="headline headline-gradient animate-fade-in-up">
            Healing isn&apos;t optional. But the pain is.
          </h1>
          <p className="subheadline max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Life requires us to grow, but it doesn&apos;t require us to suffer through the friction of being misunderstood. DEFRAG is a personal clarity platform that helps you understand how you are made, read the tension in a moment, and finally see the world from the other person&apos;s side.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <Link
              href={routes.start}
              className="btn-primary text-sm"
            >
              Start Your Baseline
            </Link>
            <Link
              href={routes.howItWorks}
              className="btn-secondary text-sm"
            >
              See How It Works
            </Link>
          </div>
        </SectionShell>
      </div>

      {/* VISUAL SHOWCASE SECTION - Animated bento-style grid */}
      <div className="relative py-24 md:py-32 overflow-hidden">
        <SectionShell>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {/* Large feature card - spans 2 columns */}
            <div className="md:col-span-2 md:row-span-2 border border-[var(--border-color)] bg-white/[0.02] rounded-lg p-8 flex flex-col justify-between hover:border-[var(--border-color-hover)] transition-all duration-300 animate-fade-in-up group" style={{ animationDelay: "0.1s" }}>
              <div>
                <p className="text-xs uppercase text-[var(--text-tertiary)] mb-4 font-medium">Foundation</p>
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-3">Understand your nature</h3>
                <p className="text-sm text-[var(--text-secondary)]">See how you were uniquely made to experience the world.</p>
              </div>
              <div className="mt-8 h-24 bg-gradient-to-br from-purple-500/10 to-magenta-500/10 rounded-lg opacity-60 group-hover:opacity-100 transition-opacity" />
            </div>

            {/* Small feature cards */}
            <div className="border border-[var(--border-color)] bg-white/[0.02] rounded-lg p-6 hover:border-[var(--border-color-hover)] transition-all duration-300 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <p className="text-xs uppercase text-[var(--text-tertiary)] mb-2 font-medium">Timing</p>
              <h4 className="text-sm font-semibold text-white">Read the moment</h4>
              <div className="mt-4 h-12 bg-gradient-to-r from-purple-500/5 to-blue-500/5 rounded opacity-40" />
            </div>

            <div className="border border-[var(--border-color)] bg-white/[0.02] rounded-lg p-6 hover:border-[var(--border-color-hover)] transition-all duration-300 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              <p className="text-xs uppercase text-[var(--text-tertiary)] mb-2 font-medium">Connection</p>
              <h4 className="text-sm font-semibold text-white">See their side</h4>
              <div className="mt-4 h-12 bg-gradient-to-r from-magenta-500/5 to-purple-500/5 rounded opacity-40" />
            </div>

            <div className="border border-[var(--border-color)] bg-white/[0.02] rounded-lg p-6 hover:border-[var(--border-color-hover)] transition-all duration-300 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              <p className="text-xs uppercase text-[var(--text-tertiary)] mb-2 font-medium">Clarity</p>
              <h4 className="text-sm font-semibold text-white">Find the response</h4>
              <div className="mt-4 h-12 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded opacity-40" />
            </div>

            <div className="border border-[var(--border-color)] bg-white/[0.02] rounded-lg p-6 hover:border-[var(--border-color-hover)] transition-all duration-300 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
              <p className="text-xs uppercase text-[var(--text-tertiary)] mb-2 font-medium">Resilience</p>
              <h4 className="text-sm font-semibold text-white">Stay grounded</h4>
              <div className="mt-4 h-12 bg-gradient-to-r from-purple-500/5 to-magenta-500/5 rounded opacity-40" />
            </div>
          </div>
        </SectionShell>
      </div>

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
