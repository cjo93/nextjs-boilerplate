import { NextResponse } from "next/server";
import { prisma } from "@/lib/db/prisma";
import { relationshipsInputSchema } from "@/lib/ai/schemas/relationships";
import { generateRelationships } from "@/lib/ai/orchestrator/relationships";
import { auth } from "@/lib/auth/auth";

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  try {
    const session = await auth();
    const userId = session?.user?.id;

    if (!userId) {
      return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();
    const input = relationshipsInputSchema.parse({ ...body, userId });

    const output = await generateRelationships(input);

    const record = await prisma.workspaceRead.create({
      data: {
        userId,
        type: "RELATIONSHIP",
        inputPayload: input,
        outputPayload: output,
      },
    });

    return NextResponse.json({ ok: true, data: record });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ ok: false, error: "Failed to generate relationship read" }, { status: 400 });
  }
}
