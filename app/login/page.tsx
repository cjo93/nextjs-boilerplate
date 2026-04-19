import { redirect } from "next/navigation";
import { PageShell } from "@/components/system/page-shell";
import { SectionShell } from "@/components/system/section-shell";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { LoginPanel } from "./panel";

export default async function LoginPage({
  searchParams,
}: {
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
}) {
  const params = (await searchParams) ?? {};
  const redirectToRaw = params.redirectTo;
  const redirectTo =
    typeof redirectToRaw === "string" && redirectToRaw.startsWith("/")
      ? redirectToRaw
      : "/app";

  const supabase = await createSupabaseServerClient();
  const { data } = await supabase.auth.getUser();
  if (data.user) {
    redirect(redirectTo);
  }

  return (
    <PageShell>
      <SectionShell>
        <h1 className="text-3xl font-semibold">Sign in</h1>
        <p className="text-neutral-600 max-w-2xl">
          Use your email to get a sign-in link.
        </p>
      </SectionShell>

      <SectionShell className="max-w-xl">
        <LoginPanel redirectTo={redirectTo} />
      </SectionShell>
    </PageShell>
  );
}

