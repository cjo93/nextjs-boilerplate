import Link from "next/link";
import { routes } from "@/lib/routes";

export function SiteHeader() {
  return (
    <header className="w-full border-b border-[var(--border-color)] bg-[rgba(0,0,0,0.4)] backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-8 h-16 flex items-center justify-between">
        <Link href={routes.home} className="brand-wordmark">
          DEFRAG
        </Link>
        <nav className="flex items-center gap-8">
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
    <footer className="border-t border-[var(--border-color)]">
      <div className="max-w-7xl mx-auto px-8 py-16 space-y-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <p className="mono-label">Product</p>
            <div className="space-y-2">
              <Link href={routes.product} className="block text-sm text-[var(--text-secondary)] hover:text-[var(--foreground)] transition-colors">The Baseline</Link>
              <Link href={routes.product} className="block text-sm text-[var(--text-secondary)] hover:text-[var(--foreground)] transition-colors">The Now</Link>
              <Link href={routes.product} className="block text-sm text-[var(--text-secondary)] hover:text-[var(--foreground)] transition-colors">The Connection</Link>
            </div>
          </div>
          <div className="space-y-4">
            <p className="mono-label">Resources</p>
            <div className="space-y-2">
              <Link href={routes.howItWorks} className="block text-sm text-[var(--text-secondary)] hover:text-[var(--foreground)] transition-colors">How It Works</Link>
              <Link href={routes.useCases} className="block text-sm text-[var(--text-secondary)] hover:text-[var(--foreground)] transition-colors">Use Cases</Link>
              <Link href={routes.pricing} className="block text-sm text-[var(--text-secondary)] hover:text-[var(--foreground)] transition-colors">Pricing</Link>
            </div>
          </div>
          <div className="space-y-4">
            <p className="mono-label">Company</p>
            <div className="space-y-2">
              <Link href="#" className="block text-sm text-[var(--text-secondary)] hover:text-[var(--foreground)] transition-colors">About</Link>
              <Link href="#" className="block text-sm text-[var(--text-secondary)] hover:text-[var(--foreground)] transition-colors">Blog</Link>
              <Link href="#" className="block text-sm text-[var(--text-secondary)] hover:text-[var(--foreground)] transition-colors">Contact</Link>
            </div>
          </div>
          <div className="space-y-4">
            <p className="mono-label">Legal</p>
            <div className="space-y-2">
              <Link href="#" className="block text-sm text-[var(--text-secondary)] hover:text-[var(--foreground)] transition-colors">Privacy</Link>
              <Link href="#" className="block text-sm text-[var(--text-secondary)] hover:text-[var(--foreground)] transition-colors">Terms</Link>
              <Link href="#" className="block text-sm text-[var(--text-secondary)] hover:text-[var(--foreground)] transition-colors">Cookies</Link>
            </div>
          </div>
        </div>
        <div className="border-t border-[var(--border-color)] pt-8">
          <p className="text-sm text-[var(--text-tertiary)]">© 2024 DEFRAG. A clearer way to understand yourself and your relationships.</p>
        </div>
      </div>
    </footer>
  );
}

export function Stage({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full border border-[var(--border-color)] p-8 bg-rgba(255, 255, 255, 0.02)">
      {children}
    </div>
  );
}
