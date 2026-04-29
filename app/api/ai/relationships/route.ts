import { NextRequest, NextResponse } from "next/server";
import { createServerClient } from "@supabase/ssr";
import type { ClarityRequest, ClarityResponse } from "@/lib/defrag-types";
import { getSupabaseConfig } from "@/lib/supabase/config";

export async function POST(req: NextRequest) {
  // Build a mutable response so we can write refreshed auth cookies back
  // to the browser. This is required for @supabase/ssr in Route Handlers.
  const res = NextResponse.next();

  const { url, anonKey } = getSupabaseConfig();
  if (!url || !anonKey) {
    return NextResponse.json({ error: "Missing Supabase config." }, { status: 500 });
  }

  // Create the Supabase client wired to req cookies (read) and res cookies (write).
  // This ensures any token refresh is committed back to the browser.
  const supabase = createServerClient(url, anonKey, {
    cookies: {
      getAll() {
        return req.cookies.getAll();
      },
      setAll(cookiesToSet) {
        cookiesToSet.forEach(({ name, value, options }) => {
          res.cookies.set(name, value, options);
        });
      },
    },
  });

  // getUser() validates the token against Supabase Auth and refreshes if needed.
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError || !user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // After getUser() refreshes, getSession() returns the now-valid access token.
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

  const supabaseUrl = process.env.SUPABASE_URL ?? process.env.NEXT_PUBLIC_SUPABASE_URL;
  if (!supabaseUrl) {
    return NextResponse.json({ error: "Missing Supabase URL." }, { status: 500 });
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

  // Return the AI response, with refreshed auth cookies applied to res
  return NextResponse.json(data, {
    headers: res.headers,
  });
}
