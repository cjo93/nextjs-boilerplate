import { ReactNode } from "react";

export function PageShell({ children }: { children: ReactNode }) {
  return <div className="max-w-6xl mx-auto px-6 py-20 space-y-24">{children}</div>;
}
