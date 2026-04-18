import { ReactNode } from "react";

export function ArtifactStage({ children }: { children: ReactNode }) {
  return (
    <div className="w-full rounded-2xl border border-black/10 dark:border-white/10 bg-white/50 dark:bg-neutral-900/50 p-6 md:p-8">
      {children}
    </div>
  );
}

export function ArtifactFrame({ children }: { children: ReactNode }) {
  return <div className="space-y-4">{children}</div>;
}

export function ArtifactFocal({ children }: { children: ReactNode }) {
  return <div className="text-sm font-medium">{children}</div>;
}

export function ArtifactSupport({ children }: { children: ReactNode }) {
  return <div className="text-sm text-neutral-500">{children}</div>;
}
