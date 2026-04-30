import Link from "next/link";
import { routes } from "@/lib/routes";

export function SiteHeader() {
  return (
    <header className="w-full border-b border-[var(--border-color)]">
      <div className="max-w-7xl mx-auto px-8 h-16 flex items-center justify-between">
        <Link href={routes.home} className="brand-wordmark">
          DEFRAG
        </Link>
        <nav className="flex items-center gap-6">
          <Link href={routes.product} className="nav-link">Product</Link>
          <Link href={routes.howItWorks} className="nav-link">How It Works</Link>
          <Link href={routes.useCases} className="nav-link">Use Cases</Link>
          <Link href={routes.pricing} className="nav-link">Pricing</Link>
          <Link href={routes.login} className="nav-link">Sign In</Link>
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-[var(--border-color)]">
      <div className="max-w-7xl mx-auto px-8 py-12 text-sm text-[var(--text-tertiary)]">
        <p>© DEFRAG — A clearer way to understand yourself and your relationships.</p>
      </div>
    </footer>
  );
}

export function Stage({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full border border-[var(--border-color)] p-8 bg-white/[0.02]">
      {children}
    </div>
  );
}
