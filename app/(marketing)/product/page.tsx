import Link from "next/link";

export default function ProductPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-20 space-y-16">
      <section className="space-y-5">
        <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">Product</p>
        <h1 className="text-4xl font-bold tracking-tight">One platform. Three clarity layers.</h1>
        <p className="max-w-3xl text-neutral-400">
          Defrag helps you understand what is happening now, how you tend to work over time, and what may be shaping relationship dynamics — so the next step is clearer.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        <div className="rounded-lg border border-neutral-800 bg-neutral-900 p-6 space-y-3">
          <h2 className="text-xl font-semibold">Now</h2>
          <p className="text-sm text-neutral-400">Get a structured read on the current moment: what may be active, what to watch, and the best next step.</p>
        </div>
        <div className="rounded-lg border border-neutral-800 bg-neutral-900 p-6 space-y-3">
          <h2 className="text-xl font-semibold">Baseline</h2>
          <p className="text-sm text-neutral-400">See the deeper tendencies that shape how you work, respond under pressure, and come back to center.</p>
        </div>
        <div className="rounded-lg border border-neutral-800 bg-neutral-900 p-6 space-y-3">
          <h2 className="text-xl font-semibold">Relationships</h2>
          <p className="text-sm text-neutral-400">Understand the dynamic, what may be landing for them, and what move is most likely to help next.</p>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">How the platform works together</h2>
        <p className="max-w-3xl text-neutral-400">
          Each workspace produces a read you can return to, explain, and compare over time. Defrag is not just a one-off answer — it becomes a system for clarity.
        </p>
      </section>

      <section className="flex gap-4">
        <Link href="/api/auth/signin" className="rounded-md bg-white px-4 py-3 text-black">
          Get started
        </Link>
        <Link href="/app" className="rounded-md border border-neutral-700 px-4 py-3">
          Open app
        </Link>
      </section>
    </div>
  );
}
