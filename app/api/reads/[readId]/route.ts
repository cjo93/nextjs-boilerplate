import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db/prisma";

export const dynamic = "force-dynamic";

type RouteContext = { params: Promise<{ readId: string }> };

export async function GET(_req: NextRequest, context: RouteContext) {
  try {
    const { readId } = await context.params;

    const read = await prisma.workspaceRead.findUnique({
      where: { id: readId },
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
