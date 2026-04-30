import Link from "next/link";
import { routes } from "@/lib/routes";

export function SiteHeader() {
  return (
    <header
      className="sticky top-0 z-50 w-full border-b border-[var(--border)]"
      style={{ background: "rgba(17,17,18,0.88)", backdropFilter: "blur(20px) saturate(180%)" }}
    >
      <div className="max-w-5xl mx-auto px-6 md:px-12 h-[56px] flex items-center justify-between gap-8">

        <Link href={routes.home} className="brand-wordmark shrink-0 flex items-center gap-1">
          DEFRAG
          <span
            className="block w-[5px] h-[5px] rounded-full shrink-0 mb-[1px]"
            style={{ background: "var(--accent)", opacity: 0.6 }}
            aria-hidden
          />
        </Link>

        <nav className="hidden md:flex items-center gap-6 flex-1">
          <Link href={routes.product}    className="nav-link">Product</Link>
          <span className="w-px h-3 bg-[var(--border-2)]" aria-hidden />
          <Link href={routes.howItWorks} className="nav-link">How It Works</Link>
          <span className="w-px h-3 bg-[var(--border-2)]" aria-hidden />
          <Link href={routes.useCases}   className="nav-link">Use Cases</Link>
          <span className="w-px h-3 bg-[var(--border-2)]" aria-hidden />
          <Link href={routes.pricing}    className="nav-link">Pricing</Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href={routes.login}
            className="nav-link hidden md:inline-flex"
          >
            Log in
          </Link>
          <Link
            href={routes.start}
            className="btn-primary"
            style={{ height: "34px", padding: "0 16px", fontSize: "13px", fontWeight: 600 }}
          >
            Get Started
          </Link>
        </div>

      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--border)]" style={{ background: "var(--surface)" }}>
      <div className="max-w-5xl mx-auto px-6 md:px-12 py-14">

        {/* Top row */}
        <div className="flex flex-col md:flex-row justify-between gap-10 mb-12">
          <div className="max-w-[260px]">
            <span className="brand-wordmark block mb-4">DEFRAG</span>
            <p className="text-[12px] leading-[1.7]" style={{ color: "var(--muted-2)" }}>
              A human intelligence platform. We map the hidden dynamics of how people work so you can move through relationships with precision, empathy, and absolute clarity.
            </p>
          </div>

          <div className="flex flex-wrap gap-x-8 gap-y-2 items-start md:pt-1">
            {[
              { label: "How It Works", href: routes.howItWorks },
              { label: "Pricing",      href: routes.pricing },
              { label: "Start",        href: routes.start },
              { label: "Developers",   href: "#" },
            ].map((l) => (
              <Link key={l.label} href={l.href}
                className="text-xs text-[var(--muted)] hover:text-[var(--foreground)] transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom row */}
        <div className="pt-8 border-t border-[var(--border)] flex flex-col md:flex-row md:items-center justify-between gap-4">
          <p className="text-xs text-[var(--muted-2)]">
            &copy; {new Date().getFullYear()} DEFRAG. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: "var(--muted-2)" }}>
            The canvas is already there.
          </p>
        </div>

      </div>
    </footer>
  );
}

export function Stage({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full border border-[var(--border)] rounded-[var(--radius-lg)] p-8 bg-[var(--surface)]">
      {children}
    </div>
  );
}
