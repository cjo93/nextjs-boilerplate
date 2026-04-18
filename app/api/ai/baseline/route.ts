import { NextResponse } from "next/server";
import { prisma } from "@/lib/db/prisma";
import { baselineInputSchema } from "@/lib/ai/schemas/baseline";
import { generateBaseline } from "@/lib/ai/orchestrator/baseline";

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const input = baselineInputSchema.parse(body);

    const output = await generateBaseline(input);

    const record = await prisma.workspaceRead.create({
      data: {
        userId: input.userId,
        type: "BASELINE",
        inputPayload: input,
        outputPayload: output,
      },
    });

    return NextResponse.json({ ok: true, data: record });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ ok: false, error: "Failed to generate baseline" }, { status: 400 });
  }
}
