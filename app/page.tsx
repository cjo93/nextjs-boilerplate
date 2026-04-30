import Link from "next/link";
import { PageShell } from "@/components/system/page-shell";
import { SectionShell } from "@/components/system/section-shell";
import { CtaRow } from "@/components/system/cta-row";
import { routes } from "@/lib/routes";

export default function Home() {
  return (
    <PageShell>
      {/* HERO SECTION */}
      <SectionShell className="text-center py-20">
        <div className="space-y-8 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-glow animate-fade-in-up">
            Healing isn&apos;t optional. But the pain is.
          </h1>
          <p className="text-lg md:text-xl text-neutral-300 leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Life requires us to grow, but it doesn&apos;t require us to suffer through the friction of being misunderstood. DEFRAG is a personal clarity platform that helps you understand how you are made, read the tension in a moment, and finally see the world from the other person&apos;s side.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <Link
              href={routes.start}
              className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 glow-blue hover:scale-105 animate-glow-pulse"
            >
              Start Your Baseline
            </Link>
            <Link
              href={routes.howItWorks}
              className="px-8 py-3 border border-neutral-400 text-neutral-200 rounded-lg font-semibold hover:border-blue-400 hover:text-blue-300 transition-all duration-300 glass hover:shadow-lg"
            >
              See How It Works
            </Link>
          </div>
        </div>
      </SectionShell>

      {/* SECTION 2: THE CAPABILITY */}
      <SectionShell className="space-y-12">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in-up">
            The Capability: Seeing the Bridge
          </h2>
          <p className="text-lg text-neutral-300 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Most of our frustration lives in the gap between what we meant and what they heard.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Column 1: The Moment */}
          <div
            className="glass p-8 rounded-xl hover:glow-blue transition-all duration-300 hover:scale-105 animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            <h3 className="text-xl font-bold mb-4 text-blue-400">The Moment</h3>
            <p className="text-neutral-300">
              You ask for a little more time to finish a task.
            </p>
          </div>

          {/* Column 2: The Miss */}
          <div
            className="glass p-8 rounded-xl hover:glow-purple transition-all duration-300 hover:scale-105 animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            <h3 className="text-xl font-bold mb-4 text-purple-400">The Miss</h3>
            <p className="text-neutral-300">
              They hear a lack of commitment and start to worry.
            </p>
          </div>

          {/* Column 3: The Truth */}
          <div
            className="glass p-8 rounded-xl hover:glow-blue transition-all duration-300 hover:scale-105 animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <h3 className="text-xl font-bold mb-4 text-blue-400">The Truth</h3>
            <p className="text-neutral-300">
              You aren&apos;t &apos;failing,&apos; and they aren&apos;t &apos;being difficult.&apos; You are simply seeing the same moment from two different sides. DEFRAG shows you the bridge between them.
            </p>
          </div>
        </div>
      </SectionShell>

      {/* SECTION 3: UNDERSTAND WHY PEOPLE DO WHAT THEY DO */}
      <SectionShell className="space-y-12">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in-up">
            When you see the truth of how people are made, conflict turns back into connection.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Feature 1 */}
          <div
            className="glass p-8 rounded-xl hover:glow-blue transition-all duration-300 hover:scale-105 animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            <h3 className="text-xl font-bold mb-4 text-blue-400">
              Understand your nature
            </h3>
            <p className="text-neutral-300">
              See how you were made to handle the world and what you need to feel clear.
            </p>
          </div>

          {/* Feature 2 */}
          <div
            className="glass p-8 rounded-xl hover:glow-purple transition-all duration-300 hover:scale-105 animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            <h3 className="text-xl font-bold mb-4 text-purple-400">
              Read the moment
            </h3>
            <p className="text-neutral-300">
              Recognize the tension in a room before it turns into a regret.
            </p>
          </div>

          {/* Feature 3 */}
          <div
            className="glass p-8 rounded-xl hover:glow-blue transition-all duration-300 hover:scale-105 animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <h3 className="text-xl font-bold mb-4 text-blue-400">
              See their side
            </h3>
            <p className="text-neutral-300">
              Understand why someone else reacts the way they do—without the guesswork.
            </p>
          </div>

          {/* Feature 4 */}
          <div
            className="glass p-8 rounded-xl hover:glow-purple transition-all duration-300 hover:scale-105 animate-fade-in-up"
            style={{ animationDelay: "0.5s" }}
          >
            <h3 className="text-xl font-bold mb-4 text-purple-400">
              Find the response that fits
            </h3>
            <p className="text-neutral-300">
              Know what to say when it matters most to resolve the friction.
            </p>
          </div>
        </div>
      </SectionShell>

      {/* FOOTER CTA */}
      <SectionShell className="text-center py-16">
        <div className="space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold">
            Ready to find your clarity?
          </h2>
          <CtaRow>
            <Link
              href={routes.start}
              className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 glow-blue hover:scale-105 animate-glow-pulse"
            >
              Start Your Baseline
            </Link>
            <Link
              href={routes.pricing}
              className="px-8 py-3 border border-neutral-400 text-neutral-200 rounded-lg font-semibold hover:border-blue-400 hover:text-blue-300 transition-all duration-300 glass"
            >
              View Pricing
            </Link>
          </CtaRow>
        </div>
      </SectionShell>
    </PageShell>
  );
}
