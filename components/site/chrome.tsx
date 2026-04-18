import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="w-full border-b border-black/5 dark:border-white/10">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-semibold tracking-tight">
          DEFRAG
        </Link>
        <nav className="flex items-center gap-6 text-sm text-neutral-600 dark:text-neutral-400">
          <Link href="/product">Product</Link>
          <Link href="/how-it-works">How It Works</Link>
          <Link href="/use-cases">Use Cases</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/login">Sign In</Link>
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-black/5 dark:border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-12 text-sm text-neutral-500">
        <p>© DEFRAG — A clearer way to understand yourself and your relationships.</p>
      </div>
    </footer>
  );
}

export function Stage({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full rounded-2xl border border-black/10 dark:border-white/10 p-8 bg-neutral-100/50 dark:bg-neutral-900/50">
      {children}
    </div>
  );
}
