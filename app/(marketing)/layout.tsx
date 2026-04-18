import Link from "next/link";

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      <header className="border-b border-neutral-800">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="text-sm font-semibold tracking-[0.2em] uppercase">
            Defrag
          </Link>
          <nav className="flex items-center gap-6 text-sm text-neutral-300">
            <Link href="/product">Product</Link>
            <Link href="/how-it-works">How it works</Link>
            <Link href="/pricing">Pricing</Link>
            <Link href="/api/auth/signin">Sign in</Link>
            <Link href="/app" className="rounded-md bg-white px-3 py-2 text-neutral-950">
              Open app
            </Link>
          </nav>
        </div>
      </header>
      <main>{children}</main>
    </div>
  );
}
