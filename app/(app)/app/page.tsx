import Link from "next/link";
import { auth } from "@/lib/auth/auth";
import { prisma } from "@/lib/db/prisma";
import { redirect } from "next/navigation";
import { getReadSummary } from "@/lib/utils/get-read-summary";

export const dynamic = "force-dynamic";

async function getDashboardData(userId: string) {
  const reads = await prisma.workspaceRead.findMany({
    where: { userId },
    orderBy: { createdAt: "desc" },
    take: 6,
  });

  return {
    reads,
    latestNow: reads.find((r) => r.type === "NOW") ?? null,
    latestBaseline: reads.find((r) => r.type === "BASELINE") ?? null,
    latestRelationship: reads.find((r) => r.type === "RELATIONSHIP") ?? null,
    latestLearn: reads.find((r) => r.type === "LEARN") ?? null,
  };
}

export default async function DashboardPage() {
  const session = await auth();
  const userId = session?.user?.id;

  if (!userId) {
    redirect("/api/auth/signin");
  }

  const data = await getDashboardData(userId);

  // First-run redirect
  if (data.reads.length === 0) {
    redirect("/app/now");
  }

  const cards = [
    { title: "Latest Now", read: data.latestNow, href: "/app/now" },
    { title: "Latest Baseline", read: data.latestBaseline, href: "/app/baseline" },
    { title: "Latest Relationships", read: data.latestRelationship, href: "/app/relationships" },
    { title: "Latest Learn", read: data.latestLearn, href: "/app/learn" },
  ];

  return (
    <div className="p-6 space-y-8">
      <div>
        <h1 className="text-2xl font-semibold">Dashboard</h1>
        <p className="mt-1 text-sm text-neutral-400">
          Your recent reads and quick access to the core Defrag workspaces.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {cards.map((card) => {
          const summary = card.read ? getReadSummary(card.read) : null;
          return (
            <div key={card.title} className="rounded-lg border border-neutral-800 bg-neutral-900 p-4 space-y-3">
              <div className="text-xs uppercase tracking-widest text-neutral-500">{card.title}</div>
              <div className="text-sm text-neutral-100">
                {summary?.summary || "No reads yet."}
              </div>
              <Link href={card.href} className="text-sm underline underline-offset-4">
                Open
              </Link>
            </div>
          );
        })}
      </div>

      <div className="space-y-3">
        <h2 className="text-lg font-semibold">Recent Reads</h2>
        <div className="space-y-3">
          {data.reads.map((read) => {
            const summary = getReadSummary(read);
            return (
              <div key={read.id} className="rounded-lg border border-neutral-800 bg-neutral-900 p-4 space-y-2">
                <div className="text-xs text-neutral-500">
                  {new Date(read.createdAt).toLocaleString()} — {summary.typeLabel}
                </div>
                <div className="text-sm text-neutral-100">{summary.summary}</div>
                <div className="flex gap-4 text-sm">
                  <Link href={`/app/history/${read.id}`} className="underline underline-offset-4">
                    View
                  </Link>
                  <Link href={`/app/learn?readId=${read.id}`} className="underline underline-offset-4">
                    Explain
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="grid gap-3 md:grid-cols-4">
        <Link href="/app/now" className="rounded-lg border border-neutral-800 bg-neutral-900 p-4 text-sm underline underline-offset-4">
          New Now Read
        </Link>
        <Link href="/app/baseline" className="rounded-lg border border-neutral-800 bg-neutral-900 p-4 text-sm underline underline-offset-4">
          Generate Baseline
        </Link>
        <Link href="/app/relationships" className="rounded-lg border border-neutral-800 bg-neutral-900 p-4 text-sm underline underline-offset-4">
          Analyze Relationship
        </Link>
        <Link href="/app/history" className="rounded-lg border border-neutral-800 bg-neutral-900 p-4 text-sm underline underline-offset-4">
          View History
        </Link>
      </div>
    </div>
  );
}
