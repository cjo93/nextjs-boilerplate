# Current State (for Codex)

What exists:
- Single Next.js app with app router
- Public pages: homepage, /product, /how-it-works, /use-cases, /pricing, /start
- Runtime surfaces: /app, /app/baseline, /app/now, /app/relationships, /app/learn
- Shared primitives (PageShell, SectionShell, CtaRow)
- Centralized copy registry in lib/site-copy.ts
- Route constants in lib/routes.ts
- Artifact components and stage shell under components/artifacts/
- Current API/runtime scaffolding in app/api/clarity/route.ts and app/api/ai/now/route.ts

What is incomplete:
- Login route
- Pricing CTA flow uses decorative buttons instead of real navigation
- /start is present but still a lightweight onboarding surface
- Runtime outputs are still placeholder/demo-style reads rather than integrated product logic
- Persistence and saved-history flows
- Billing
- Placeholder/split-path cleanup between app/api/ai/now/route.ts and /api/clarity

Constraints:
- Do not restructure repo
- Do not introduce new architecture layers

Goal:
- Build DEFRAG step-by-step via tickets
