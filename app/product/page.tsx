import Link from "next/link";
import { PageShell } from "@/components/system/page-shell";
import { SectionShell } from "@/components/system/section-shell";
import { routes } from "@/lib/routes";

export default function ProductPage() {
  const pillars = [
    {
      number: "1",
      title: "The Baseline | Your Nature",
      description: "Understand the truth of who you are. See what makes you feel alive, what makes you shut down, and how to find your way back to center when things get intense.",
      color: "blue"
    },
    {
      number: "2",
      title: "The Now | The Moment",
      description: "Get a clear read on what is happening right this second. Stop the overthinking and find the move that actually fits the situation.",
      color: "purple"
    },
    {
      number: "3",
      title: "The Relationships | The Connection",
      description: "Understand the person across from you. See the world through their eyes so you can stop fighting their nature and start building a real connection.",
      color: "blue"
    }
  ];

  return (
    <PageShell>
      {/* HERO SECTION */}
      <SectionShell className="text-center py-20">
        <div className="space-y-6 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-glow animate-fade-in-up">
            A simpler way to navigate your life.
          </h1>
          <p className="text-lg md:text-xl text-neutral-300 leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            DEFRAG doesn&apos;t give you more to-do lists. It gives you a clear way to navigate the three areas where we get lost most: ourselves, our timing, and our people.
          </p>
        </div>
      </SectionShell>

      {/* THREE PILLARS - VERTICAL STACK */}
      <SectionShell className="space-y-12">
        {pillars.map((pillar, index) => (
          <div
            key={pillar.number}
            className={`glass p-12 rounded-xl hover:scale-105 transition-all duration-300 ${
              pillar.color === "blue" ? "hover:glow-blue" : "hover:glow-purple"
            } animate-fade-in-up`}
            style={{ animationDelay: `${0.2 + index * 0.1}s` }}
          >
            <div className="flex gap-8 items-start">
              <div className={`text-5xl font-bold ${pillar.color === "blue" ? "text-blue-400" : "text-purple-400"} animate-soft-pulse`}>
                {pillar.number}.
              </div>
              <div className="space-y-3 flex-1">
                <h2 className="text-2xl font-bold text-white">
                  {pillar.title}
                </h2>
                <p className="text-neutral-300 text-lg leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </SectionShell>

      {/* FOOTER SECTION */}
      <SectionShell className="text-center py-16">
        <div className="space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold">
            Move into the part of the system that matches your need.
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={routes.start}
              className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 glow-blue hover:scale-105 animate-glow-pulse"
            >
              Start Here
            </Link>
            <Link
              href={routes.app}
              className="px-8 py-3 border border-neutral-400 text-neutral-200 rounded-lg font-semibold hover:border-blue-400 hover:text-blue-300 transition-all duration-300 glass"
            >
              Go to App
            </Link>
          </div>
        </div>
      </SectionShell>
    </PageShell>
  );
}
