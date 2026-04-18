# DEFRAG Artifact Spec
## Purpose
Artifacts are the visual expression of DEFRAG's intelligence.
They are not decoration.
They are not marketing illustrations.
They are not dashboards.
They are not abstract diagrams for their own sake.
Artifacts should make the product feel:
- structured
- operational
- calm
- premium
- legible
---
## Artifact System Rules
### 1. One dominant focal zone
An artifact must always have one visually dominant reading area.
Avoid:
- equal-weight panels
- infographic sprawl
- multi-center layouts
### 2. Support the product, do not compete with it
Artifacts should support:
- interpretation
- structure
- transition
- clarity
They should not overwhelm the page or become the main event unless the page is specifically built around them.
### 3. Sequential clarity on mobile
Artifacts must collapse or sequence cleanly on smaller screens.
Desktop may allow:
- side-by-side comparison
- layered emphasis
- multi-zone structure
Mobile should prefer:
- stepwise reveal
- single emphasis state
- obvious reading order
### 4. No decorative motion
Motion must communicate:
- activation
- shift
- reveal
- clarification
- progression
Do not add motion for "energy," branding flair, or delight alone.
---
## Core Artifacts
### Split Read
Purpose:
- Show a moment, how it may have landed, and the clarified interpretation
Best used on:
- homepage hero
- runtime explanation moments
- relationship surface previews
States:
1. initial moment
2. second-side read appears
3. clarified interpretation becomes primary
Rules:
- clarified state should become visually strongest
- should not resemble a chat transcript
- should not feel like a message app
---
### Reaction Decode
Purpose:
- Show how a moment can be decomposed into signal zones such as pressure, pattern, landing, repetition, and response
Best used on:
- homepage value section
- runtime surfaces
- explanation pages
Rules:
- one zone should dominate at a time
- should not resemble analytics software
- labels must remain human-readable
---
### Three-Lens
Purpose:
- Represent DEFRAG as one system with three working lenses:
  - Baseline
  - Now
  - Relationships
Best used on:
- homepage product overview
- `/product`
- `/how-it-works`
Rules:
- must feel like one system
- should not look like three unrelated products
- transition between lenses should feel coherent
---
### Foundation Field
Purpose:
- Represent onboarding progression and foundational setup
Best used on:
- `/start`
Rules:
- should evolve across steps
- should feel computational, not mystical wallpaper
- should communicate progression and structure
---
### Branching Path
Purpose:
- Represent one entry point leading to multiple clarity paths
Best used on:
- `/app` entry chamber
Rules:
- must clearly show one origin and multiple valid paths
- should not look like a sitemap
- should feel intentional and minimal
---
### Clarified Output
Purpose:
- Represent final resolution / integrated understanding
Best used on:
- CTA transitions
- completion moments
- learned interpretation moments
Rules:
- should feel quieter than activation artifacts
- should communicate closure, not excitement
---
## Implementation Order
Preferred build order:
1. artifact stage shell
2. Split Read
3. Three-Lens
4. Reaction Decode
5. Foundation Field
6. Branching Path
7. Clarified Output
---
## Technical Rules
Artifacts should:
- live under `components/artifacts/`
- use shared container logic when possible
- accept structured props instead of hardcoded demo content
- degrade gracefully if interactive state is unavailable
Artifacts should not:
- own routing logic
- own business logic
- fetch data directly unless explicitly required
---
## Non-goals
Artifacts are not:
- full data visualizations
- charts
- decorative SVG systems
- abstract brand ornaments
