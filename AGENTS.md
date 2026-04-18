<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# DEFRAG Codex Instructions

Rules:
- Complete one ticket at a time.
- Do not refactor unrelated areas.
- Use shared primitives (PageShell, SectionShell, etc.).
- Do not introduce new product terminology.
- Keep copy plain, calm, and non-jargon.

Workflow:
1. Read `/docs/automation/current-state.md`
2. Read `/docs/spec/*`
3. Implement only the current ticket
4. Run:
   - npm run typecheck
   - npm run lint
   - npm run build

Never:
- Modify env or infra without explicit instruction
- Introduce new dependencies unless required
