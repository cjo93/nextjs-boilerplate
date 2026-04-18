import Link from "next/link";

export default function PricingPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-20 space-y-16">
      <section className="space-y-5">
        <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">Pricing</p>
        <h1 className="text-4xl font-bold tracking-tight">Simple for now</h1>
        <p className="text-neutral-400 max-w-2xl">
          Defrag is currently available as a single tier while the product is being refined. Pricing will evolve as more capabilities are added.
        </p>
      </section>

      <section className="rounded-lg border border-neutral-800 bg-neutral-900 p-8 space-y-4">
        <h2 className="text-xl font-semibold">Early access</h2>
        <p className="text-sm text-neutral-400">
          Full access to Now, Baseline, Relationships, and Learn. Connector-driven workflows will be included as they are released.
        </p>
        <div className="text-3xl font-bold">TBD</div>
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
