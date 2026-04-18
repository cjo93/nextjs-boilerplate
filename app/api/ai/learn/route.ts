import { NextResponse } from "next/server";
import { learnInputSchema } from "@/lib/ai/schemas/learn";
import { generateLearn } from "@/lib/ai/orchestrator/learn";
import { prisma } from "@/lib/db/prisma";

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { readId } = learnInputSchema.parse(body);

    const source = await prisma.workspaceRead.findUnique({
      where: { id: readId },
    });

    if (!source) {
      return NextResponse.json({ ok: false, error: "Read not found" }, { status: 404 });
    }

    const output = await generateLearn(source.outputPayload);

    const learnRead = await prisma.workspaceRead.create({
      data: {
        userId: source.userId,
        type: "LEARN",
        inputPayload: { readId },
        outputPayload: output,
      },
    });

    return NextResponse.json({ ok: true, data: learnRead });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ ok: false, error: "Failed to generate learn" }, { status: 400 });
  }
}
