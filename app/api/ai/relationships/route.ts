import { NextRequest, NextResponse } from "next/server";
import { createServerClient, type CookieOptions } from "@supabase/ssr";
import type { ClarityRequest, ClarityResponse } from "@/lib/defrag-types";

export async function POST(req: NextRequest) {
  // Read env vars directly — avoids null type issues from getSupabaseConfig()
  const supabaseUrl =
    process.env.SUPABASE_URL ?? process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "";

  if (!supabaseUrl || !supabaseAnonKey) {
    return NextResponse.json({ error: "Missing Supabase config." }, { status: 500 });
  }

  // Build a mutable response so refreshed auth cookies are written back
  // to the browser. Required for @supabase/ssr in Next.js 15 Route Handlers —
  // await cookies() from next/headers is read-only and silently drops setAll().
  const res = NextResponse.next();

  // Wire the Supabase client directly to req cookies (read) + res cookies (write)
  const supabase = createServerClient(supabaseUrl, supabaseAnonKey, {
    cookies: {
      getAll() {
        return req.cookies.getAll();
      },
      setAll(cookiesToSet: { name: string; value: string; options: CookieOptions }[]) {
        cookiesToSet.forEach(({ name, value, options }) => {
          res.cookies.set(name, value, options);
        });
      },
    },
  });

  // getUser() validates + refreshes the token against Supabase Auth
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError || !user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // After getUser() refreshes, getSession() returns the now-valid access_token
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session?.access_token) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  let body: Partial<ClarityRequest>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  // Always force mode to relationships
  const payload: ClarityRequest = {
    mode: "relationships",
    input: body.input ?? "",
    counterpart: body.counterpart,
    context: body.context,
  };

  if (!payload.input.trim()) {
    return NextResponse.json({ error: "input is required." }, { status: 400 });
  }

  const edgeRes = await fetch(
    `${supabaseUrl}/functions/v1/relational-synthesis`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${session.access_token}`,
      },
      body: JSON.stringify(payload),
    }
  );

  // Edge functions sometimes return plain text on errors
  const contentType = edgeRes.headers.get("content-type") ?? "";
  const data: ClarityResponse | string = contentType.includes("application/json")
    ? await edgeRes.json()
    : await edgeRes.text();

  if (!edgeRes.ok) {
    return NextResponse.json(
      typeof data === "string" ? { error: data } : data,
      { status: edgeRes.status }
    );
  }

  // Return the AI response + write refreshed auth cookies back to browser
  return NextResponse.json(data, {
    headers: res.headers,
  });
}
