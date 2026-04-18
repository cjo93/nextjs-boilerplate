import Link from "next/link";
import { PageShell } from "@/components/system/page-shell";
import { SectionShell } from "@/components/system/section-shell";
import { routes } from "@/lib/routes";
import { siteCopy } from "@/lib/site-copy";

export default function ProductPage() {
  return (
    <PageShell>
      <SectionShell>
        <h1 className="text-3xl font-semibold">
          {siteCopy.productPage.heroTitle}
        </h1>
        <p className="text-neutral-600 max-w-2xl">
          {siteCopy.productPage.heroBody}
        </p>
      </SectionShell>

      <SectionShell>
        <h2 className="text-2xl font-semibold">
          {siteCopy.productPage.overviewTitle}
        </h2>
        <p className="text-neutral-600 max-w-2xl">
          {siteCopy.productPage.overviewBody}
        </p>
      </SectionShell>

      <SectionShell>
        <div className="grid md:grid-cols-3 gap-6">
          {siteCopy.productCards.map((card) => (
            <Link
              key={card.title}
              href={card.href}
              className="border rounded-xl p-6 space-y-2"
            >
              <h3 className="font-medium">{card.title}</h3>
              <p className="text-sm text-neutral-500">{card.body}</p>
              <span className="text-sm">{card.cta} →</span>
            </Link>
          ))}
        </div>
      </SectionShell>

      <SectionShell>
        <div className="grid md:grid-cols-3 gap-6">
          {siteCopy.productPage.sections.map((section) => (
            <div key={section.title} className="space-y-2">
              <h3 className="font-medium">{section.title}</h3>
              <p className="text-sm text-neutral-500">{section.body}</p>
            </div>
          ))}
        </div>
      </SectionShell>

      <SectionShell className="text-center">
        <h2 className="text-2xl font-semibold">
          {siteCopy.productPage.closingTitle}
        </h2>
        <p className="text-neutral-600 max-w-2xl mx-auto">
          {siteCopy.productPage.closingBody}
        </p>
        <div className="flex justify-center gap-4 mt-4">
          <Link href={routes.start} className="px-5 py-3 bg-black text-white rounded-lg">
            Start Your Baseline
          </Link>
          <Link href={routes.app} className="px-5 py-3 border rounded-lg">
            Go to App
          </Link>
        </div>
      </SectionShell>
    </PageShell>
  );
}
