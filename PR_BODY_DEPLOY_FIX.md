## Objective
Fix production deploy/build failures and make CI green across the entire codebase.

## AI Agent Execution Contract
The implementing agent must:

1. **Reproduce failures locally**
   - `npm ci`
   - `npm run lint` (if exists)
   - `npm run typecheck` (if exists)
   - `npm test` (if exists)
   - `npm run build`
   - `npm run ci`

2. **Find and fix root causes**
   - Resolve TypeScript/type errors
   - Resolve Next.js build/runtime errors
   - Resolve import/path/module resolution issues
   - Resolve env/config mismatches that break build
   - Resolve failing tests/lint rules blocking CI

3. **Harden deployment readiness**
   - Ensure `main` is deployable on Vercel
   - Keep changes minimal and scoped to build/CI correctness
   - No unrelated refactors

4. **Validation required before marking ready**
   - Attach outputs (or summaries) for:
     - `npm run build`
     - `npm run ci`
   - Confirm all checks pass

## Deliverables
- Code fixes
- Any required config/documentation updates
- Short root-cause report:
  - what failed
  - what changed
  - why this fixes deploy

## Acceptance Criteria
- `npm run build` passes
- `npm run ci` passes
- PR checks green
- Ready to merge for Vercel production deployment
