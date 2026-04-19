import { NextRequest, NextResponse } from "next/server";
import { generateClarity } from "@/lib/clarity-engine";
import type { ClarityRequest } from "@/lib/defrag-types";

export async function POST(req: NextRequest) {
  let body: unknown;

  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid JSON body." },
      { status: 400 }
    );
  }

  if (
    !body ||
    typeof body !== "object" ||
    typeof (body as { input?: unknown }).input !== "string"
  ) {
    return NextResponse.json(
      { error: "Input is required and must be a string." },
      { status: 400 }
    );
  }

  const {
    input: rawInput,
    counterpart,
    context,
  } = body as Partial<Omit<ClarityRequest, "mode">>;

  if (typeof rawInput !== "string" || !rawInput.trim()) {
    return NextResponse.json(
      { error: "Input must not be blank." },
      { status: 400 }
    );
  }

  const input = rawInput;

  const result = await generateClarity({
    input,
    counterpart,
    context,
    mode: "now",
  });

  return NextResponse.json(result);
}
