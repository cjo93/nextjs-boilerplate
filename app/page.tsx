"use client";

import Link from "next/link";
import { PageShell } from "@/components/system/page-shell";
import { SectionShell } from "@/components/system/section-shell";
import { CtaRow } from "@/components/system/cta-row";
import { routes } from "@/lib/routes";

export default function Home() {
  return (
    <PageShell>
      {/* HERO */}
      <div className="relative min-h-screen flex items-center justify-center pt-20 pb-24">
        <SectionShell className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[1.05]">
            Find clarity in the space between.
          </h1>
          
          <p className="text-xl md:text-2xl text-neutral-500 max-w-2xl mx-auto leading-relaxed">
            DEFRAG helps you understand yourself, read the moment, and connect with others. No jargon. No labels. Just clarity.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Link
              href={routes.start}
              className="px-8 py-4 bg-black text-white rounded-lg font-semibold text-lg hover:bg-neutral-900 transition-colors"
            >
              Get Started
            </Link>
            <Link
              href={routes.product}
              className="px-8 py-4 border-2 border-black text-black rounded-lg font-semibold text-lg hover:bg-black hover:text-white transition-colors"
            >
              Learn More
            </Link>
          </div>
        </SectionShell>
      </div>

      {/* DIVIDER */}
      <div className="h-px bg-neutral-200" />

      {/* THREE PILLARS */}
      <SectionShell className="py-24 md:py-32">
        <div className="space-y-16">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">How it works</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Three interconnected systems that give you the clarity you need.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Your Baseline",
                description: "Understand your nature. See how you're uniquely made to handle the world.",
                number: "1"
              },
              {
                title: "The Moment",
                description: "Read what's happening right now. Cut through confusion to find the right move.",
                number: "2"
              },
              {
                title: "The Connection",
                description: "See the other person clearly. Build bridges instead of walls.",
                number: "3"
              }
            ].map((item) => (
              <div key={item.number} className="space-y-4">
                <div className="text-6xl font-black text-neutral-200">{item.number}</div>
                <h3 className="text-2xl font-bold">{item.title}</h3>
                <p className="text-neutral-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionShell>

      {/* DIVIDER */}
      <div className="h-px bg-neutral-200" />

      {/* FEATURES */}
      <SectionShell className="py-24 md:py-32">
        <div className="space-y-16">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Why clarity matters</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Most conflict isn't about intent. It's about interpretation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Before you react",
                description: "Pause. See the pattern. Respond with precision instead of heat."
              },
              {
                title: "In the hard moments",
                description: "Know exactly what to say when misunderstanding is costing you something that matters."
              },
              {
                title: "With the people you care about",
                description: "Stop the loops. Build relationships that can actually hold tension without breaking."
              },
              {
                title: "When you're stuck",
                description: "Understand why—in yourself and in them—so you can move forward together."
              }
            ].map((feature, idx) => (
              <div key={idx} className="border border-neutral-300 rounded-lg p-8 hover:border-neutral-400 transition-colors">
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-neutral-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionShell>

      {/* DIVIDER */}
      <div className="h-px bg-neutral-200" />

      {/* EXAMPLES */}
      <SectionShell className="py-24 md:py-32">
        <div className="space-y-16">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Real moments</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Where DEFRAG changes the outcome.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                moment: "You reschedule for the third time.",
                miss: "They decide you don't respect them.",
                truth: "You're overwhelmed. They need reliability. DEFRAG gives you the words to reset."
              },
              {
                moment: "They question your decision publicly.",
                miss: "You hear it as a threat and armor up.",
                truth: "They want clarity. You want autonomy. DEFRAG shows you how to lead together."
              },
              {
                moment: "You commit, then feel like pulling back.",
                miss: "They experience betrayal and brace for impact.",
                truth: "You need recalibration. They need reassurance. DEFRAG helps you renegotiate, not repeat."
              }
            ].map((example, idx) => (
              <div key={idx} className="border border-neutral-300 rounded-lg p-8">
                <div className="space-y-6">
                  <div className="grid md:grid-cols-3 gap-4 md:gap-6">
                    <div>
                      <p className="text-xs font-bold text-neutral-500 mb-2 uppercase">The Moment</p>
                      <p className="text-lg">{example.moment}</p>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-neutral-500 mb-2 uppercase">The Miss</p>
                      <p className="text-lg">{example.miss}</p>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-neutral-500 mb-2 uppercase">The Truth</p>
                      <p className="text-lg text-neutral-700">{example.truth}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionShell>

      {/* DIVIDER */}
      <div className="h-px bg-neutral-200" />

      {/* CTA SECTION */}
      <SectionShell className="py-24 md:py-32">
        <div className="text-center space-y-8 max-w-3xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold">Ready for clarity?</h2>
          <p className="text-xl text-neutral-600">
            Start by understanding how you're uniquely made. Everything else flows from there.
          </p>
          <CtaRow>
            <Link
              href={routes.start}
              className="px-8 py-4 bg-black text-white rounded-lg font-semibold text-lg hover:bg-neutral-900 transition-colors"
            >
              Start Your Baseline
            </Link>
            <Link
              href={routes.pricing}
              className="px-8 py-4 border-2 border-black text-black rounded-lg font-semibold text-lg hover:bg-black hover:text-white transition-colors"
            >
              View Pricing
            </Link>
          </CtaRow>
        </div>
      </SectionShell>
    </PageShell>
  );
}
