import Link from "next/link";
import { Stage } from "@/components/site/chrome";
import { siteCopy } from "@/lib/site-copy";
import { routes } from "@/lib/routes";
import { PageShell } from "@/components/system/page-shell";
import { SectionShell } from "@/components/system/section-shell";
import { CtaRow } from "@/components/system/cta-row";

export default function Home() {
  return (
    <PageShell>
      <SectionShell className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl font-semibold tracking-tight">
            {siteCopy.brand.title}
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-400">
            {siteCopy.brand.description}
          </p>
          <CtaRow>
            <Link href={routes.start} className="px-5 py-3 bg-black text-white rounded-lg">
              Start Your Baseline
            </Link>
            <Link href={routes.howItWorks} className="px-5 py-3 border rounded-lg">
              See How It Works
            </Link>
          </CtaRow>
          <p className="text-sm text-neutral-500">
            {siteCopy.homepage.microcopy}
          </p>
        </div>
        <Stage>
          <div className="space-y-4 text-sm">
            <p className="font-medium">What happened</p>
            <p className="text-neutral-500">You said something clearly.</p>
            <p className="font-medium">How it may have landed</p>
            <p className="text-neutral-500">They may have heard criticism instead of clarity.</p>
            <p className="font-medium">Clearer read</p>
            <p className="text-neutral-500">The moment may be a meaning split, not intent mismatch.</p>
          </div>
        </Stage>
      </SectionShell>

      <SectionShell className="grid md:grid-cols-2 gap-12">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">{siteCopy.homepage.valueTitle}</h2>
          <p className="text-neutral-600 dark:text-neutral-400">
            {siteCopy.homepage.valueBody}
          </p>
          <ul className="space-y-2 text-sm">
            {siteCopy.homepage.bullets.map((b) => (
              <li key={b}>• {b}</li>
            ))}
          </ul>
        </div>
        <Stage>
          <p className="text-sm text-neutral-500">Pattern · Pressure · Landing · Response</p>
        </Stage>
      </SectionShell>

      <SectionShell>
        <h2 className="text-2xl font-semibold">Three ways DEFRAG helps</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {siteCopy.productCards.map((card) => (
            <Link key={card.title} href={card.href} className="border rounded-xl p-6 space-y-2">
              <h3 className="font-medium">{card.title}</h3>
              <p className="text-sm text-neutral-500">{card.body}</p>
              <span className="text-sm">{card.cta} →</span>
            </Link>
          ))}
        </div>
      </SectionShell>

      <SectionShell>
        <h2 className="text-2xl font-semibold">{siteCopy.homepage.whyTitle}</h2>
        <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl">
          {siteCopy.homepage.whyBody}
        </p>
      </SectionShell>

      <SectionShell>
        <h2 className="text-2xl font-semibold">Made for the moments that matter.</h2>
        <ul className="grid md:grid-cols-2 gap-2 text-sm">
          {siteCopy.homepage.useCases.map((u) => (
            <li key={u}>• {u}</li>
          ))}
        </ul>
      </SectionShell>

      <SectionShell className="text-center">
        <h2 className="text-2xl font-semibold">A clearer way to understand yourself.</h2>
        <div className="flex justify-center gap-4">
          <Link href={routes.start} className="px-5 py-3 bg-black text-white rounded-lg">
            Start Your Baseline
          </Link>
          <Link href={routes.pricing} className="px-5 py-3 border rounded-lg">
            View Pricing
          </Link>
        </div>
        <p className="text-sm text-neutral-500">No jargon. No diagnosis. No generic advice.</p>
      </SectionShell>
    </PageShell>
  );
}
