import { PageShell } from "@/components/system/page-shell";
import { siteCopy } from "@/lib/site-copy";
import { BranchingPath } from "@/components/artifacts/branching-path";

export default function AppHome() {
  return (
    <PageShell>
      <section className="border-b border-[var(--border)]">
        <div className="max-w-5xl mx-auto px-6 md:px-12 pt-20 pb-16">
          <p className="label mb-5 animate-fade-up">Clarity workspace</p>
          <h1 className="text-3xl md:text-4xl font-bold tracking-[-0.025em] text-[var(--foreground)] mb-4 max-w-xl animate-fade-up-d1">
            {siteCopy.app.entryTitle}
          </h1>
          <p className="prose-body animate-fade-up-d2">
            {siteCopy.app.entryBody}
          </p>
        </div>
      </section>

      <section>
        <div className="max-w-5xl mx-auto px-6 md:px-12 py-12 animate-fade-up-d2">
          <BranchingPath
            paths={siteCopy.app.entryCards.map((card) => ({
              title: card.title,
              href: card.href,
              description: card.body,
            }))}
          />
        </div>
      </section>
    </PageShell>
  );
}
