# Current State (for Codex)

What exists:
- Single Next.js app with app router
- Public pages: homepage, /product, /how-it-works, /use-cases, /pricing, /start
- Runtime surfaces: /app, /app/baseline, /app/now, /app/relationships, /app/learn
- Runtime API surfaces: POST /api/clarity and POST /api/ai/now
- Shared primitives (PageShell, SectionShell, CtaRow)
- Centralized copy registry in lib/site-copy.ts
- Route constants in lib/routes.ts
- Artifact stage shell and multiple artifact primitives under components/artifacts/
- BranchingPath is wired into /app and FoundationField is wired into /start
- Clarity scaffolding exists in lib/clarity-scaffold.ts, lib/clarity-engine.ts, lib/ai/schemas/now.ts, and app/api/* routes
- Prisma schema and client scaffolding exist for users and workspace reads

What is incomplete:
- Artifact system is only partially integrated; most artifact components are present but not wired into live routes
- /start is present but still a lightweight onboarding surface with local state only
- Runtime pages currently render local scaffolded reads instead of using the API routes end-to-end
- Deeper structured runtime outputs are not implemented beyond scaffolded sections and schema placeholders
- Persistence is not wired through; Prisma scaffolding exists, but there are no saved-read/history routes or database-backed flows
- Billing is not implemented
- Pricing CTAs route to /start, but there is no checkout or billing completion flow
- /login is referenced in navigation and route constants, but no page exists
- API shape remains split between the generic /api/clarity route and the mode-specific /api/ai/now route

Constraints:
- Do not restructure repo
- Do not introduce new architecture layers

Goal:
- Build DEFRAG step-by-step via tickets
