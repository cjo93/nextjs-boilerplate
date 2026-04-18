import Link from "next/link";

const NAV_ITEMS = [
  { label: "Now", href: "/app/now" },
];

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-neutral-950 text-neutral-100">
      {/* Top nav */}
      <header className="sticky top-0 z-40 border-b border-neutral-800 bg-neutral-950/80 backdrop-blur">
        <div className="mx-auto flex h-14 max-w-5xl items-center gap-6 px-4">
          <Link
            href="/app/now"
            className="text-sm font-semibold tracking-tight text-white"
          >
            defrag
          </Link>
          <nav className="flex items-center gap-4 text-sm">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-neutral-400 transition-colors hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 mx-auto w-full max-w-5xl px-4 py-8">
        {children}
      </main>
    </div>
  );
}
