import { redirect } from "next/navigation";
import { PageShell } from "@/components/system/page-shell";
import { SectionShell } from "@/components/system/section-shell";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { sanitizeRedirectTo } from "@/lib/supabase/redirects";
import { LoginPanel } from "./panel";

export default async function LoginPage({
  searchParams,
}: {
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
}) {
  const params = (await searchParams) ?? {};
  const redirectToRaw = params.redirectTo;
  const redirectTo = sanitizeRedirectTo(redirectToRaw, "/app");

  const supabase = await createSupabaseServerClient();
  const { data } = await supabase.auth.getUser();
  if (data.user) {
    redirect(redirectTo);
  }

  return (
    <PageShell>
      <div className="min-h-[calc(100vh-56px)] flex items-center justify-center px-6 py-16">
        <div className="w-full max-w-sm space-y-8 animate-fade-up">

          {/* Header */}
          <div className="space-y-2">
            <p className="label">Welcome back</p>
            <h1 className="text-2xl font-bold tracking-tight text-[var(--foreground)]">
              Sign in to DEFRAG
            </h1>
            <p className="text-sm text-[var(--muted)]">
              Sign in with Apple or your email.
            </p>
          </div>

          {/* Panel */}
          <div className="border border-[var(--border)] rounded-[var(--radius-lg)] bg-[var(--surface)] p-6">
            <LoginPanel redirectTo={redirectTo} />
          </div>

        </div>
      </div>
    </PageShell>
  );
}
