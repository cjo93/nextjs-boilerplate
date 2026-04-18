# DEFRAG Ticket Queue
## Operating Rule
Codex should work from the top of the Active list downward.
Do not skip ahead unless:
- the current ticket is blocked, or
- the audit identifies a higher-priority integrity issue
If a ticket is already implemented, remove or rewrite it instead of re-running it.
---
## Active
1. Sync `docs/automation/current-state.md` to actual repo state
2. Fix `package.json` / `package-lock.json` consistency so Codex setup does not fail on install
3. Build `/how-it-works` page using shared primitives and centralized copy
4. Add artifact stage shell under `components/artifacts/`
5. Upgrade `/app` entry chamber from simple link grid to a structured DEFRAG entry surface
6. Complete `/pricing` CTA flow with real navigation
7. Replace illustrative runtime output blocks with surface-specific structured sections
8. Resolve placeholder `app/api/ai/now/route.ts` vs real `/api/clarity` split
---
## Next
9. Build Foundation Field artifact scaffold for `/start`
10. Build Split Read artifact scaffold for homepage and product surfaces
11. Build Three-Lens artifact scaffold for `/product`
12. Add `docs/spec/onboarding.md`
13. Add `docs/spec/pricing.md`
14. Add `docs/spec/persistence.md`
15. Add `docs/spec/non-goals.md`
---
## Later
16. Persist reads to database
17. Add saved-read / history scaffolding
18. Add recurrence memory scaffolding
19. Implement billing flow
20. Add verification / post-checkout state
21. Tighten public-page copy pass
22. Tighten runtime module copy pass
---
## Blocked
- Full billing implementation, pending plan and checkout confirmation
- Final persistence design, pending decision on exact save/reopen behavior
---
## Notes for Codex
- Always read `AGENTS.md`
- Always read `docs/automation/current-state.md`
- Prefer the smallest complete diff
- Do not widen scope
- Do not fix unrelated files unless they block the current ticket
- Open a PR at the end of each implementation task
