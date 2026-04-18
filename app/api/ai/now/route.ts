export const dynamic = 'force-dynamic';
import { NextResponse } from "next/server";
import { nowInputSchema } from "@/lib/ai/schemas/now";
import { generateNow } from "@/lib/ai/orchestrator/now";
import { prisma } from "@/lib/db/prisma";
import { auth } from "@/lib/auth/auth";

export async function POST(req: Request) {
  try {
    const session = await auth();
    const userId = session?.user?.id;

    if (!userId) {
      return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();
    const input = nowInputSchema.parse({ ...body, userId });

    const output = await generateNow(input);

    const read = await prisma.workspaceRead.create({
      data: {
        userId,
        type: "NOW",
        inputPayload: input,
        outputPayload: output,
      },
    });

    return NextResponse.json({ ok: true, data: read });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ ok: false, error: "Failed to generate read" }, { status: 400 });
  }
}
