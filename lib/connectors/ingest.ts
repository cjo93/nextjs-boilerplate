import { prisma } from "@/lib/db/prisma";
import { connectorWorkspaceReadSchema, type ConnectorWorkspaceRead } from "./schemas/workspace-read";
import { mapConnectorWorkspaceRead } from "./mappers/workspace-read";

export async function ingestWorkspaceRead(raw: unknown) {
  const parsed: ConnectorWorkspaceRead = connectorWorkspaceReadSchema.parse(raw);

  const mapped = mapConnectorWorkspaceRead(parsed);

  const record = await prisma.workspaceRead.create({
    data: mapped,
  });

  return record;
}
