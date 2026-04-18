import { ReactNode } from "react";

export function SectionShell({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <section className={`space-y-6 ${className}`}>{children}</section>;
}
