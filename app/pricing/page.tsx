import Link from "next/link";
import { PageShell } from "@/components/system/page-shell";
import { SectionShell } from "@/components/system/section-shell";
import { routes } from "@/lib/routes";

export default function PricingPage() {
  const tiers = [
    {
      name: "Baseline",
      subtitle: "For those who want to understand how they are uniquely made.",
      features: [
        "Your natural way of being and decision style.",
        "How you handle intense moments.",
        "Guidance on returning to clarity."
      ],
      cta: "Start with Baseline",
      badge: null,
      featured: false,
      color: "blue"
    },
    {
      name: "Premium",
      subtitle: "For those who want guidance when life gets loud.",
      features: [
        "Everything in Baseline.",
        "The 'Now' workspace for real-time reads.",
        "Live support for timing and reactions.",
        "Saved history of your insights."
      ],
      cta: "Choose Premium",
      badge: "Most Popular",
      featured: true,
      color: "purple"
    },
    {
      name: "Signature",
      subtitle: "For those who want to heal their relationships.",
      features: [
        "Everything in Premium.",
        "The Relationship workspace for deep connection.",
        "Support for your hardest conversations.",
        "Mapping the shared patterns between you and another."
      ],
      cta: "Choose Signature",
      badge: null,
      featured: false,
      color: "blue"
    }
  ];

  return (
    <PageShell>
      {/* HERO SECTION */}
      <SectionShell className="text-center py-20">
        <div className="space-y-6 max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-glow animate-fade-in-up">
            Pricing
          </h1>
          <p className="text-lg text-neutral-300 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Choose the level of clarity that matches your needs.
          </p>
        </div>
      </SectionShell>

      {/* PRICING CARDS */}
      <SectionShell className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <div
              key={tier.name}
              className={`relative animate-fade-in-up ${
                tier.featured ? "md:scale-105" : ""
              }`}
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              {/* Badge */}
              {tier.badge && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="px-4 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-bold rounded-full animate-soft-pulse">
                    {tier.badge}
                  </span>
                </div>
              )}

              {/* Card */}
              <div
                className={`glass p-8 rounded-xl h-full flex flex-col transition-all duration-300 ${
                  tier.featured
                    ? "border-2 border-blue-500/50 hover:glow-blue ring-2 ring-blue-500/20"
                    : `hover:${tier.color === "blue" ? "glow-blue" : "glow-purple"}`
                } hover:scale-105`}
              >
                {/* Header */}
                <div className="space-y-2 mb-6">
                  <h2 className={`text-2xl font-bold ${
                    tier.color === "blue" ? "text-blue-400" : "text-purple-400"
                  }`}>
                    {tier.name}
                  </h2>
                  <p className="text-sm text-neutral-300">
                    {tier.subtitle}
                  </p>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8 flex-1">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-3">
                      <span className={`text-lg flex-shrink-0 ${
                        tier.color === "blue" ? "text-blue-400" : "text-purple-400"
                      }`}>
                        ✓
                      </span>
                      <span className="text-neutral-300 text-sm">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  href={routes.start}
                  className={`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-300 text-center ${
                    tier.featured
                      ? "bg-blue-600 text-white hover:bg-blue-700 glow-blue hover:shadow-lg"
                      : "border border-neutral-400 text-neutral-200 hover:border-blue-400 hover:text-blue-300"
                  }`}
                >
                  {tier.cta}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </SectionShell>

      {/* FOOTER SECTION */}
      <SectionShell className="text-center py-16">
        <div className="space-y-6 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold">
            Start with the level that matches your need.
          </h2>
          <p className="text-lg text-neutral-300">
            You can move deeper into the system as your clarity needs evolve.
          </p>
        </div>
      </SectionShell>
    </PageShell>
  );
}
