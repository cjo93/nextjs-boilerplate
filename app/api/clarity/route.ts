import { NextRequest, NextResponse } from "next/server";
import { generateClarity } from "@/lib/clarity-engine";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const result = await generateClarity(body);
  return NextResponse.json(result);
}
