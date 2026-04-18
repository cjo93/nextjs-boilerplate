import { NextResponse } from "next/server";
import { ingestWorkspaceRead } from "@/lib/connectors/ingest";

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const record = await ingestWorkspaceRead(body);

    return NextResponse.json({ ok: true, data: record });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ ok: false, error: "Invalid connector payload" }, { status: 400 });
  }
}
