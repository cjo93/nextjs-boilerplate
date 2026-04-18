import Link from "next/link";
import { routes } from "@/lib/routes";
import { PageShell } from "@/components/system/page-shell";
import { SectionShell } from "@/components/system/section-shell";

export default function AppHome() {
  return (
    <PageShell>
      <SectionShell>
        <h1 className="text-3xl font-semibold">Choose the layer of clarity you need.</h1>
        <p className="text-neutral-500">Baseline, Now, Relationships, or Learn.</p>

        <div className="grid md:grid-cols-2 gap-4">
          <Link href={routes.appNow} className="border p-6 rounded-xl">Now</Link>
          <Link href={routes.appBaseline} className="border p-6 rounded-xl">Baseline</Link>
          <Link href={routes.appRelationships} className="border p-6 rounded-xl">Relationships</Link>
          <Link href={routes.appLearn} className="border p-6 rounded-xl">Learn</Link>
        </div>
      </SectionShell>
    </PageShell>
  );
}
