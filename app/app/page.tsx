import { PageShell } from "@/components/system/page-shell";
import { SectionShell } from "@/components/system/section-shell";
import { siteCopy } from "@/lib/site-copy";
import { BranchingPath } from "@/components/artifacts/branching-path";

export default function AppHome() {
  return (
    <PageShell>
      <SectionShell>
        <h1 className="text-3xl font-semibold">{siteCopy.app.entryTitle}</h1>
        <p className="text-neutral-500">{siteCopy.app.entryBody}</p>
      </SectionShell>

      <SectionShell>
        <BranchingPath
          paths={siteCopy.app.entryCards.map((card) => ({
            title: card.title,
            href: card.href,
            description: card.body,
          }))}
        />
      </SectionShell>
    </PageShell>
  );
}
