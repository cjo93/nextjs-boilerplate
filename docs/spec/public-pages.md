# DEFRAG Public Pages Spec
## Purpose
This document defines the public-facing pages of DEFRAG and the role each page plays in the product system.
DEFRAG is not a general AI assistant, not a therapy product, and not a productivity dashboard.
It is a clarity product.
Public pages should feel:
- calm
- premium
- simple
- structured
- plain-language
- low-noise
They should not feel:
- clinical
- mystical-first
- startup-hype
- feature-dense
- dashboard-like
---
## Public Page Inventory
### `/`
Purpose:
- Establish the product category
- Explain the core value
- Show the three primary surfaces
- Create trust
- Move the user toward `/start`, `/product`, or `/pricing`
Core sections:
1. Hero
2. Value / differentiator
3. Product surface overview
4. Why this matters
5. Use-case framing
6. Closing CTA
Primary CTA:
- Start Your Baseline
Secondary CTA:
- See How It Works
---
### `/product`
Purpose:
- Explain the DEFRAG system as one product with three working surfaces
- Show how Baseline, Now, and Relationships fit together
- Help the user choose an entry point
Core sections:
1. Hero
2. Product overview
3. Baseline
4. Now
5. Relationships
6. Closing CTA
Primary CTA:
- Start Your Baseline
Secondary CTA:
- Go to App
---
### `/how-it-works`
Purpose:
- Explain how DEFRAG produces clarity without exposing unnecessary internal complexity
- Show the system in plain language
- Create confidence in the interpretation model
Core sections:
1. Hero
2. Intro / simple structure beneath the surface
3. Baseline explanation
4. Now explanation
5. Relationships explanation
6. Principles
7. Closing CTA
Primary CTA:
- Start Your Baseline
Secondary CTA:
- View Pricing
Rules:
- Do not expose raw framework jargon
- Do not turn this into a methodology lecture
- Do not make it sound mystical or clinical
---
### `/use-cases`
Purpose:
- Show real-world moments where DEFRAG is useful
- Translate the abstract product promise into recognizable situations
Core sections:
1. Hero
2. Self-understanding use case
3. In-the-moment use case
4. Relationship clarity use case
5. Closing CTA
Primary CTA:
- Start Your Baseline
Secondary CTA:
- See Product
---
### `/pricing`
Purpose:
- Explain support tiers
- Make plan differences understandable
- Move the user into a real checkout path
Core sections:
1. Hero
2. Tier comparison
3. Reassurance / what changes by plan
4. Closing CTA
Rules:
- Plans should feel like increasing depth of support
- Do not frame tiers as arbitrary feature bundles
- Keep the page quiet and clear
Expected plan logic:
- Baseline
- Premium
- Signature
Current implementation note:
- CTA controls must be real navigation actions, not decorative buttons
---
### `/start`
Purpose:
- Begin onboarding
- Establish serious product entry
- Gather the minimum information needed for the Baseline path
Core sections:
1. Intro
2. Input steps
3. Review
4. Continue decision
Rules:
- This should not feel like a generic wizard
- The flow should feel intentional and premium
- Over time this page should incorporate the Foundation Field artifact
---
### `/login`
Purpose:
- Provide account entry without distracting from the core product journey
Rules:
- Minimal
- Clear
- No extra product messaging beyond what is useful
---
## Shared Public-Page Rules
### Layout
All public pages should use:
- `PageShell`
- `SectionShell`
- shared route constants
- centralized copy where possible
### Copy
Public-page copy must:
- be plain-language
- avoid hype
- avoid therapy framing
- avoid mystical-first framing
- avoid excessive abstraction
### Navigation
Public pages should route toward:
- `/start`
- `/product`
- `/how-it-works`
- `/use-cases`
- `/pricing`
- `/app` only when appropriate
### Non-goals
Public pages are not:
- runtime workspaces
- artifact implementation surfaces
- storage/history surfaces
- billing backend logic
