import Link from "next/link";
import { routes } from "@/lib/routes";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[var(--border)] bg-[var(--background)]/90 backdrop-blur-md">
      <div className="max-w-5xl mx-auto px-6 md:px-12 h-14 flex items-center justify-between">
        <Link href={routes.home} className="brand-wordmark">
          DEFRAG
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link href={routes.product} className="nav-link">Product</Link>
          <Link href={routes.howItWorks} className="nav-link">How It Works</Link>
          <Link href={routes.useCases} className="nav-link">Use Cases</Link>
          <Link href={routes.pricing} className="nav-link">Pricing</Link>
        </nav>
        <Link
          href={routes.start}
          className="btn-primary text-sm"
          style={{ height: "34px", padding: "0 14px", fontSize: "13px" }}
        >
          Get Started
        </Link>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--border)]">
      <div className="max-w-5xl mx-auto px-6 md:px-12 py-12 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex items-center gap-8">
          <span className="brand-wordmark text-[var(--muted)]">DEFRAG</span>
          <p className="text-xs text-[var(--muted-2)]">
            &copy; {new Date().getFullYear()} DEFRAG. All rights reserved.
          </p>
        </div>
        <nav className="flex flex-wrap gap-6">
          {[
            { label: "Product",      href: routes.product },
            { label: "How It Works", href: routes.howItWorks },
            { label: "Pricing",      href: routes.pricing },
            { label: "Sign In",      href: routes.login },
          ].map(({ label, href }) => (
            <Link key={label} href={href} className="text-xs text-[var(--muted-2)] hover:text-[var(--foreground)] transition-colors">
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}

export function Stage({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full border border-[var(--border)] rounded-md p-8 bg-[var(--surface)]">
      {children}
    </div>
  );
}
