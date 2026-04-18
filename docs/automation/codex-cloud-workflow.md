# Codex Cloud Workflow for `cjo93/nextjs-boilerplate`

## Summary
- Use Codex in the ChatGPT Mac desktop app against the GitHub-connected repo `cjo93/nextjs-boilerplate`, not the current local thread folder.
- Run two separate Codex tasks in order:
  1. Repo audit in `Ask` mode with no code changes
  2. Implementation in `Code` mode only if the audit confirms the next ticket
- Use this operating rule every time: `Audit first. If audit agrees on next ticket, run implementation. If audit disagrees, rewrite implementation prompt to match audit.`

## Task Setup
- Execution: `Cloud`
- Model: default Codex coding model shown in UI
- Reasoning: `High` for both tasks
- Network: `Off` unless Codex explicitly needs docs or package lookup
- Setup command:
```bash
npm install
npm run typecheck || true
```
- Minimal env vars only if prompted:
```bash
OPENAI_API_KEY=your_key_here
NEXT_PUBLIC_APP_URL=http://localhost:3000
```
- Branch behavior: new branch per task for implementation runs
- Output behavior: open PR, never direct merge

## Audit Run
- Mode: `Ask`
- Execution: `Cloud`
- Network: `Off`
- Branch: none preferred; if the UI forces a branch selection, that is acceptable because the prompt forbids code changes
- Paste this prompt exactly:

```text
Read these files first:
- AGENTS.md
- docs/automation/current-state.md
- docs/spec/overview.md
- docs/spec/runtime.md
- docs/tickets/EPIC-1-foundation.md
- docs/tickets/EPIC-2-public-pages.md

Task:
Audit the current DEFRAG repo state without making any code changes.

Report:
1. What is already implemented
2. What is incomplete
3. What appears inconsistent with the DEFRAG specs
4. The single best next ticket to implement
5. Any build risks, code drift, or structural issues already present

Rules:
- Do not modify files
- Do not propose a monorepo
- Do not widen scope
- Base your answer on the repo as it exists now

Output format:
Current implementation:
- ...

Gaps:
- ...

Risks:
- ...

Next recommended ticket:
- ...
```

## Implementation Run
- Start only after the audit names the next recommended ticket.
- If the audit recommends a different next step, stop and rewrite the implementation prompt to match that recommendation instead of forcing a predefined ticket.
- Mode: `Code`
- Execution: `Cloud`
- Network: `Off`
- Branch: create new branch
- PR: `On`
- Use this template and change only the ticket reference, files to read, and acceptance criteria for future tickets:

```text
Read these files first:
- AGENTS.md
- docs/automation/current-state.md
- docs/spec/overview.md
- docs/spec/runtime.md
- docs/tickets/EPIC-2-public-pages.md
- docs/automation/codex-task.md
- lib/site-copy.ts
- components/system/page-shell.tsx
- components/system/section-shell.tsx
- lib/routes.ts

Task:
Implement the next recommended ticket only if the audit identified:
Ticket 2.2 — Build /how-it-works page

Requirements:
- Create the page at /how-it-works
- Use shared primitives only
- Use siteCopy.howItWorksPage as the source of copy
- Keep the page calm, minimal, and premium
- Do not introduce new product terminology
- Do not refactor unrelated files
- Do not add dependencies
- Keep the implementation inside the current single-app repo structure

Acceptance criteria:
- /how-it-works exists
- Uses PageShell and SectionShell
- Uses centralized copy from siteCopy.howItWorksPage
- No unrelated code changes
- npm run ci passes
- Open a PR at the end

Process:
1. Inspect only the files needed for this ticket
2. Implement the smallest complete change
3. Run npm run ci
4. Fix all errors
5. Prepare a PR

Return:
- Summary of changes
- Files changed
- Acceptance check result
- PR link
```

## Validation
- Audit success:
  - No file edits
  - Output matches the required four sections
  - Recommendation is based on current repo state only
- Implementation success:
  - Work matches the audit’s recommended next ticket
  - For Ticket `2.2`, `/how-it-works` exists and uses `PageShell`, `SectionShell`, and `siteCopy.howItWorksPage`
  - No unrelated refactors or new dependencies
  - `npm run ci` passes
  - PR is opened from a new task branch

## Operating Sequence
1. Run the audit exactly as written.
2. Wait for Codex to name the next ticket.
3. Run the implementation prompt only for that matching ticket.
4. Review the PR.
5. Merge.
6. Let Vercel deploy.

## Assumptions
- `cjo93/nextjs-boilerplate` is the intended source-of-truth repo in Codex Cloud.
- The repo contains the exact files referenced by the audit prompt and the relevant implementation prompt.
- `npm run ci` is the authoritative verification command and may subsume `typecheck`, `lint`, and `build`.
- This workflow should be stored in-repo at `docs/automation/codex-cloud-workflow.md` when you switch from planning to execution.
