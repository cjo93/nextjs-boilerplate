import Link from "next/link";

export default function HowItWorksPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-20 space-y-16">
      <section className="space-y-5">
        <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">How it works</p>
        <h1 className="text-4xl font-bold tracking-tight">From situation to clarity</h1>
        <p className="text-neutral-400 max-w-2xl">
          Defrag guides you through a simple loop that turns raw situations into clear next steps you can act on.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-4">
        <div className="rounded-lg border border-neutral-800 bg-neutral-900 p-5 space-y-2">
          <h3 className="font-semibold">1. Describe</h3>
          <p className="text-sm text-neutral-400">Write what’s happening, in your own words.</p>
        </div>
        <div className="rounded-lg border border-neutral-800 bg-neutral-900 p-5 space-y-2">
          <h3 className="font-semibold">2. Generate</h3>
          <p className="text-sm text-neutral-400">Get a structured read of the situation.</p>
        </div>
        <div className="rounded-lg border border-neutral-800 bg-neutral-900 p-5 space-y-2">
          <h3 className="font-semibold">3. Reflect</h3>
          <p className="text-sm text-neutral-400">Use Learn to understand why it fits.</p>
        </div>
        <div className="rounded-lg border border-neutral-800 bg-neutral-900 p-5 space-y-2">
          <h3 className="font-semibold">4. Act</h3>
          <p className="text-sm text-neutral-400">Take the next step with clarity.</p>
        </div>
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
