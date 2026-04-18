import Link from "next/link";
import { routes } from "@/lib/routes";
import { PageShell } from "@/components/system/page-shell";
import { SectionShell } from "@/components/system/section-shell";
import { siteCopy } from "@/lib/site-copy";

export default function AppHome() {
  return (
    <PageShell>
      <SectionShell>
        <h1 className="text-3xl font-semibold">{siteCopy.app.entryTitle}</h1>
        <p className="text-neutral-500">{siteCopy.app.entryBody}</p>

        <div className="grid md:grid-cols-2 gap-4">
          {siteCopy.app.entryCards.map((card) => (
            <Link key={card.title} href={card.href} className="border p-6 rounded-xl">
              <h3 className="font-medium">{card.title}</h3>
              <p className="text-sm text-neutral-500">{card.body}</p>
            </Link>
          ))}
        </div>
      </SectionShell>
    </PageShell>
  );
}
