import type { ConnectorWorkspaceRead } from "../schemas/workspace-read";

export function mapConnectorWorkspaceRead(input: ConnectorWorkspaceRead) {
  return {
    userId: input.userId,
    type: input.type,
    inputPayload: {
      ...input.inputPayload,
      _meta: {
        source: input.source,
        sourceRunId: input.sourceRunId,
      },
    },
    outputPayload: input.outputPayload,
  };
}
