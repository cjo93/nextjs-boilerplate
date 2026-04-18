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

  const parsedBody = body as Omit<ClarityRequest, "mode">;

  const result = await generateClarity({
    ...parsedBody,
    mode: "now",
  });

  return NextResponse.json(result);
}
