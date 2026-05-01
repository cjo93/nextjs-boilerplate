import { ReactNode } from "react";

export function ArtifactStage({ children }: { children: ReactNode }) {
  return (
    <div className="w-full rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8">
      {children}
    </div>
  );
}

export function ArtifactFrame({ children }: { children: ReactNode }) {
  return <div className="space-y-5">{children}</div>;
}

export function ArtifactFocal({ children }: { children: ReactNode }) {
  return (
    <div className="text-[15px] font-semibold tracking-tight text-[var(--foreground)]">
      {children}
    </div>
  );
}

export function ArtifactSupport({ children }: { children: ReactNode }) {
  return (
    <div className="text-[13px] text-[var(--muted)] leading-relaxed">
      {children}
    </div>
  );
}
