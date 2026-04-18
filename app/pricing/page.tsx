import Link from "next/link";
import { PageShell } from "@/components/system/page-shell";
import { SectionShell } from "@/components/system/section-shell";
import { routes } from "@/lib/routes";
import { siteCopy } from "@/lib/site-copy";

export default function PricingPage() {
  return (
    <PageShell>
      <SectionShell>
        <h1 className="text-3xl font-semibold">Pricing</h1>
        <p className="text-neutral-600 max-w-2xl">
          Choose the level of support that fits how you want to use DEFRAG.
        </p>
      </SectionShell>

      <SectionShell>
        <div className="grid md:grid-cols-3 gap-6">
          {siteCopy.pricing.map((tier) => (
            <div
              key={tier.name}
              className="border rounded-xl p-6 space-y-4"
            >
              <div className="space-y-1">
                <h2 className="text-xl font-semibold">{tier.name}</h2>
                <p className="text-sm text-neutral-500">{tier.tagline}</p>
                {"badge" in tier && tier.badge && (
                  <span className="text-xs text-neutral-400">
                    {tier.badge}
                  </span>
                )}
              </div>

              <ul className="space-y-2 text-sm text-neutral-600">
                {tier.features.map((f) => (
                  <li key={f}>• {f}</li>
                ))}
              </ul>

              <Link
                href={routes.start}
                className="block w-full px-4 py-2 border rounded-lg text-center"
              >
                {tier.cta}
              </Link>
            </div>
          ))}
        </div>
      </SectionShell>

      <SectionShell className="text-center">
        <h2 className="text-2xl font-semibold">
          Start with the level that matches your need.
        </h2>
        <p className="text-neutral-600 max-w-2xl mx-auto">
          You can move deeper into the system as your clarity needs evolve.
        </p>
      </SectionShell>
    </PageShell>
  );
}
