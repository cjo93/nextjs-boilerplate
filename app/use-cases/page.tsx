import { PageShell } from "@/components/system/page-shell";
import { SectionShell } from "@/components/system/section-shell";
import { siteCopy } from "@/lib/site-copy";

export default function UseCasesPage() {
  return (
    <PageShell>
      <SectionShell>
        <h1 className="text-3xl font-semibold">
          {siteCopy.useCasesPage.heroTitle}
        </h1>
        <p className="text-neutral-600 max-w-2xl">
          {siteCopy.useCasesPage.heroBody}
        </p>
      </SectionShell>

      <SectionShell>
        <ul className="space-y-3 text-neutral-600 max-w-2xl">
          {siteCopy.useCasesPage.items.map((item) => (
            <li key={item}>• {item}</li>
          ))}
        </ul>
      </SectionShell>

      <SectionShell className="text-center">
        <h2 className="text-2xl font-semibold">
          Made for the moments that matter.
        </h2>
        <p className="text-neutral-600 max-w-2xl mx-auto">
          Use DEFRAG when clarity matters more than more information.
        </p>
      </SectionShell>
    </PageShell>
  );
}
