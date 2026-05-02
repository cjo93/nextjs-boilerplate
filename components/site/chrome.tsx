import Link from "next/link";
import { routes } from "@/lib/routes";

export function SiteHeader() {
  return (
    <header
      className="sticky top-0 z-50 w-full border-b border-[var(--border)]"
      style={{ background: "rgba(0,0,0,0.92)", backdropFilter: "blur(12px)" }}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10 h-[52px] flex items-center justify-between gap-8">

        <Link href={routes.home} className="brand-wordmark shrink-0">
          DEFRAG
        </Link>

        <nav className="hidden md:flex items-center gap-7 flex-1">
          <Link href={routes.product}    className="nav-link">Product</Link>
          <Link href={routes.howItWorks} className="nav-link">How It Works</Link>
          <Link href={routes.useCases}   className="nav-link">Use Cases</Link>
          <Link href={routes.pricing}    className="nav-link">Pricing</Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link href={routes.login} className="nav-link hidden md:inline-flex">
            Sign In
          </Link>
          <Link
            href={routes.start}
            className="btn-primary"
            style={{ height: "32px", padding: "0 16px", fontSize: "11px" }}
          >
            [ Initialize ]
          </Link>
        </div>

      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--border)]" style={{ background: "var(--background)" }}>
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-12">

        <div className="flex flex-col md:flex-row justify-between gap-10 mb-10">
          <div>
            <span className="brand-wordmark block mb-3">DEFRAG</span>
            <p
              className="text-[11px] leading-[1.7] max-w-[240px]"
              style={{ color: "var(--muted-2)", fontFamily: "var(--font-geist-mono), monospace" }}
            >
              Private relational intelligence. No training data. No cloud sync. Just clarity.
            </p>
          </div>

          <div className="flex flex-wrap gap-x-8 gap-y-2 items-start md:pt-1">
            {[
              { label: "How It Works", href: routes.howItWorks },
              { label: "Pricing",      href: routes.pricing },
              { label: "Start",        href: routes.start },
            ].map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="nav-link"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="pt-6 border-t border-[var(--border)] flex flex-col md:flex-row md:items-center justify-between gap-3">
          <p
            className="text-[10px]"
            style={{ color: "var(--muted-2)", fontFamily: "var(--font-geist-mono), monospace", letterSpacing: "0.08em" }}
          >
            &copy; {new Date().getFullYear()} DEFRAG. All rights reserved.
          </p>
          <p
            className="text-[10px]"
            style={{ color: "var(--accent)", fontFamily: "var(--font-geist-mono), monospace", letterSpacing: "0.1em" }}
          >
            [ SYSTEM_STATUS: OPERATIONAL ]
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
