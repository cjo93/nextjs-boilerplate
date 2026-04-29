import { NextRequest, NextResponse } from "next/server";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import type { ClarityRequest, ClarityResponse } from "@/lib/defrag-types";

export async function POST(req: NextRequest) {
  const supabase = await createSupabaseServerClient();

  // Use getUser() to validate auth and trigger token refresh if needed.
  // This matches what middleware.ts does and ensures the session cookie is fresh.
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError || !user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // After getUser() validates/refreshes, getSession() returns the fresh token.
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

  return NextResponse.json(data);
}
