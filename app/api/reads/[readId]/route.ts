import { NextResponse } from "next/server";
import { prisma } from "@/lib/db/prisma";

export const dynamic = "force-dynamic";

type Params = { params: { readId: string } };

export async function GET(_req: Request, { params }: Params) {
  try {
    const read = await prisma.workspaceRead.findUnique({
      where: { id: params.readId },
    });

    if (!read) {
      return NextResponse.json({ ok: false, error: "Read not found" }, { status: 404 });
    }

    return NextResponse.json({ ok: true, data: read });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ ok: false, error: "Failed to load read" }, { status: 500 });
  }
}
