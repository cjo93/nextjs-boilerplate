import { ReactNode } from "react";

export function CtaRow({ children }: { children: ReactNode }) {
  return <div className="flex gap-4">{children}</div>;
}
