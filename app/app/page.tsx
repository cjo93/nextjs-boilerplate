import { PageShell } from "@/components/system/page-shell";
import { siteCopy } from "@/lib/site-copy";
import { BranchingPath } from "@/components/artifacts/branching-path";

export default function AppHome() {
  return (
    <PageShell>
      <section className="border-b border-[var(--border-subtle)]" style={{ background: "var(--background)" }}>
        <div className="max-w-5xl mx-auto px-6 md:px-10 pt-20 pb-14">
          <p className="label mb-4 animate-fade-up text-[var(--muted-2)]">
            DEFRAG · App
          </p>
          <h1 className="text-3xl md:text-4xl font-serif tracking-[-0.035em] text-[var(--foreground)] mb-4 max-w-2xl animate-fade-up-d1">
            Where does it actually hurt?
          </h1>
          <p className="text-[15px] leading-relaxed text-[var(--muted)] max-w-xl animate-fade-up-d2">
            Start with one situation, not your whole life. DEFRAG gives you one read and one move, then gets out of the way.
          </p>
        </div>
      </section>

      <section style={{ background: "var(--background)" }}>
        <div className="max-w-5xl mx-auto px-6 md:px-10 pb-16 animate-fade-up-d2">
          <BranchingPath
            paths={[
              {
                title: "DEFRAG",
                href: "/app/relationships",
                description: "I need help with a conversation or relationship situation.",
              },
              {
                title: "Restore",
                href: "/app/restore",
                description: "I'm carrying something I can't get past.",
              },
              {
                title: "Alignment",
                href: "/app/baseline",
                description: "I'm making a choice and don't know if it's true for me.",
              },
              {
                title: "Compression",
                href: "/app/learn",
                description: "I want a sane explanation for a concept everyone keeps using.",
              },
            ]}
          />
        </div>
      </section>
    </PageShell>
  );
}
