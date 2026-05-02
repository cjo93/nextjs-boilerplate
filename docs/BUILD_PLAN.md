# DEFRAG — Complete Build Planning & Architecture Documentation

**Current Build Status:** Phase 1 (Aesthetic & Auth) Complete | Phase 2-3 (Public Pages & Pricing) Pending

---

## 1. PROJECT OVERVIEW

**Product Category:** Relational Intelligence Platform (not therapy, not generic AI, not productivity)

**Core Promise:**
- Help users understand themselves
- Help users read relationship dynamics in real-time
- Provide one surgical move for any relational situation
- All data remains private—zero training data exposure, zero cloud sync

**Aesthetic Framework:** Esoteric Brutalism
- Pure black (`#000000`) background
- Monospace labels and buttons (JetBrains Mono)
- 1px stark borders, zero rounded corners
- Minimal accent: white borders, white-on-black inversion on hover
- No cyan, no gradient, no "AI assistant" visual language
- Reads as sovereign infrastructure, not SaaS

**Tech Stack:**
- Next.js 16 (App Router, React 19)
- Supabase (Auth + PostgreSQL database)
- Claude API (relational synthesis via Edge Functions)
- Vercel deployment
- Geist Sans + Geist Mono fonts
- Tailwind CSS v4 (zero rounding, brutalist tokens)

---

## 2. COMPLETED WORK (PHASE 1)

### 2.1 Global Aesthetic System
✅ **File:** `app/globals.css`
- Pure black (`#000000`) background, white (`#ffffff`) foreground
- Monospace button/label styling with uppercase text-transform
- 1px borders everywhere, zero border-radius
- Design tokens: `--background`, `--foreground`, `--muted`, `--border`, `--border-2`, `--border-3`
- Button styles: `.btn-primary` (white border, white-on-black inversion), `.btn-secondary` (gray border)
- Card styles: `.card` (1px border, stark hover)
- Navigation styles: `.nav-link`, `.brand-wordmark` (monospace, uppercase)

### 2.2 Layout & Fonts
✅ **File:** `app/layout.tsx`
- Geist Sans (headings/body) + Geist Mono (labels/buttons) loaded
- Removed SiteHeader/SiteFooter from root layout (full control of canvas)
- Pure black HTML/body, no wrapper components, minimal metadata
- Viewport: `themeColor: "#000000"` (OLED-safe)

### 2.3 Homepage (Esoteric Brutalism)
✅ **File:** `app/page.tsx`
- **Hero Section:** "Defrag is a private AI for relationships, emotional recovery, and hard decisions"
  - Massive headline with negative letter-spacing
  - CTA button: `[ INITIALIZE BASELINE ]` (white border, inversion on hover)
  - Terminal-style status readout on right side showing "USER_SESSION", "ENCRYPTION_ACTIVE", "SYNC_TARGET_LOCKED"
- **Section 2 — System Modules (Three Ways Defrag Shows Up):**
  - `01_ALIGNMENT` — "Understand yourself. Your nature, past patterns, wounds."
  - `02_DEFRAG` — "Read the gap. Relational synthesis. See the gap between what was said and what was meant."
  - `03_RESTORE` — "Get one move. One surgical action. Nothing else."
  - Each module: 1px border card, monospace index label, plain-language description
- **Section 3 — How It Works (5 Steps):**
  - Monospace step numbers (`01 / 02 / 03 / 04 / 05`)
  - Plain-language explanations, no jargon
  - Labels: `> INPUT_TENSION`, `> SYNC_TARGET`, `> SYSTEM_PROCESSES`, `> OUTPUT_CLARITY`, `> INTEGRATION`
- **Section 4 — Privacy (System Audit):**
  - Monospace checklist with `[ VERIFIED ]` tags in white
  - "Training data disabled" → "Local encryption active" → "End-to-end encryption" → "Zero cloud sync"
  - Reads as security audit, not marketing
- **Section 5 — Closing CTA:**
  - `[ START YOUR BASELINE ]` (white inversion button)
  - Secondary link: "→ See how it works"

### 2.4 Authentication Terminal
✅ **Files:** `app/login/page.tsx`, `app/signup/page.tsx`
- Pure black 100vh canvas with monospace input fields
- Email/password inputs: 1px `#333` border → white on focus
- OAuth buttons: GitHub/Google as `> INITIALIZE_VIA_GITHUB`, etc.
- Submit CTA: white border inversion button
- Wired to Supabase: `createSupabaseBrowserClient()` + `signInWithPassword()` + OAuth flows
- Redirect on success: `/defrag` (the Telemetry Dashboard)
- `/auth/callback/route.ts`: OAuth handler, server-side code exchange, session creation

### 2.5 Telemetry Dashboard (App Engine)
✅ **File:** `app/defrag/page.tsx`
- Two-panel interface (INPUT_STREAM | SYSTEM_OUTPUT)
- **Left Panel:** 
  - Textarea for tension log (user's relational situation)
  - Two dropdown fields: sender profile ID, receiver profile ID
  - `[ EXECUTE_SYNTHESIS ]` CTA button
- **Right Panel:**
  - JSON-style output display with Oxygen Blue accents (wait, user rejected this—needs pure white/monospace)
  - Displays: `status`, `user_intent`, `target_reaction`, `bridge_action`, `raw_data`
  - Shows structured result of relational synthesis
- POST to `/functions/v1/relational-synthesis` (Supabase Edge Function)

### 2.6 Edge Function (Relational Synthesis)
✅ **File:** `supabase/functions/relational-synthesis/index.ts`
- Receives: `senderPid`, `receiverPid`, `draftText`
- Calls Claude 3.5 Sonnet with deterministic synthesis prompt
- Returns: structured JSON with intent analysis, target reaction, one surgical bridge action
- Prompt engineering: focuses on clarity, not empathy theater
- Zero external data exposure, all reasoning stays in function

---

## 3. PENDING WORK (PHASES 2-4)

### 3.1 Public Pages (EPIC 2 — Phase 2)

#### `/product` 
**Purpose:** Explain Defrag as one integrated system
**Structure:**
- Hero: "Three ways clarity shows up"
- Section 1: System overview (Alignment + Defrag + Restore as integrated surfaces, not separate features)
- Section 2: Deep-dive on Alignment (self-understanding)
- Section 3: Deep-dive on Defrag (relational synthesis)
- Section 4: Deep-dive on Restore (recovery/integration)
- Closing CTA: `[ START_YOUR_BASELINE ]` + secondary: "→ View app"
**Content Rules:** Plain-language, no jargon, no mystical framing, no feature bloat

#### `/how-it-works`
**Purpose:** Show the system beneath the surface (without exposing unnecessary complexity)
**Structure:**
- Hero: "How clarity actually happens"
- Section 1: "One coherent system"
- Section 2: Baseline (self-understanding) explained
- Section 3: Now (real-time clarity) explained
- Section 4: Relationships (synthesis) explained
- Section 5: "Five principles" (e.g., "One move. Not ten frameworks.", "Your data stays yours.")
- Closing CTA: `[ START_YOUR_BASELINE ]` + secondary: "→ View pricing"
**Content Rules:** No methodology lecture, no therapy voice, plain English only

#### `/use-cases`
**Purpose:** Translate abstract product into recognizable situations
**Structure:**
- Hero: "Where clarity matters most"
- Section 1: Self-understanding (e.g., "Why do I keep making the same choice?")
- Section 2: In-the-moment clarity (e.g., "I'm in a conversation and something's off. What's actually happening?")
- Section 3: Relationship clarity (e.g., "I love them but something's broken. Can I fix it?")
- Closing CTA: `[ START_YOUR_BASELINE ]` + secondary: "→ Explore product"
**Content Rules:** Real scenarios, emotional resonance, no jargon

#### `/pricing`
**Purpose:** Explain support tiers and value differences
**Structure:**
- Hero: "Three ways to access Defrag"
- Section 1: Tier comparison matrix
  - `BASELINE` — One synthesis per day, email support, foundational clarity
  - `LIVE_READ` — Unlimited syntheses, priority support, real-time clarity for active relationships
  - `SIGNATURE_SYNC` — Everything + monthly coaching call with trained facilitator, deepest integration
- Section 2: "What changes by plan" (expectation-setting)
- Section 3: FAQ
- Closing CTA: CTA buttons route to `/start` with tier pre-selected
**Content Rules:** Plans as increasing depth of support, not arbitrary features; no marketing hype

#### `/start` (Onboarding)
**Purpose:** Begin Baseline creation (minimum viable entry)
**Structure:**
- Intro: "Let's build your Baseline"
- Step 1: "What's driving this right now?" (textarea input)
- Step 2: "Who are the key people?" (multi-select or text input)
- Step 3: "What outcome would clarity give you?" (textarea)
- Review: Show back user's inputs, allow edit
- Submit: Create Baseline session, redirect to `/app/baseline`
**Content Rules:** Premium, intentional, minimal; not a generic wizard

### 3.2 Runtime Surfaces (Phase 3)

#### `/app`
**Purpose:** Entry point for authenticated users
**Flow:** Display three primary modules (Alignment / Defrag / Restore) with cards for each
**Expected behavior:** User selects one, routes to `/app/alignment`, `/app/defrag`, or `/app/restore`

#### `/app/baseline` (Alignment module)
**Purpose:** Self-understanding workspace
**Expected functionality:**
- Display user's baseline profile (built during `/start`)
- Allow editing/refinement
- Show patterns/insights derived from baseline
- CTA: "Ready for real-time clarity?" → `/app/defrag`

#### `/app/defrag` (Core Engine — partially built)
**Current:** Telemetry Dashboard with two-panel interface
**Expected enhancements:**
- Persist synthesis results to Supabase
- Show history of past syntheses
- Allow annotation/notes on results
- Refinement flow: "Got clarity? What's your next move?"

#### `/app/restore` (Recovery/Integration module)
**Purpose:** Help users process difficult moments and integrate insights
**Expected functionality:**
- Input: a past difficult situation
- Output: structured guidance on integration/recovery
- Similar to `/app/defrag` but focused on processing vs. real-time clarity

### 3.3 Backend/Data Layer (Phase 3-4)

#### Database Schema (Supabase PostgreSQL)
**Tables needed:**
- `users` — auth user reference, baseline profile
- `baselines` — stored baseline profiles (self-understanding data)
- `sessions` — active workspace sessions
- `syntheses` — historical results from relational synthesis calls
- `relationships` — mapping of user's key relationships
- `annotations` — user notes on synthesis results

**RLS Policies:** All tables should have user-scoped row-level security (users can only access their own data)

#### Environment Variables
- `SUPABASE_URL` — Supabase project URL
- `SUPABASE_ANON_KEY` — Public API key for browser client
- `SUPABASE_SERVICE_KEY` — Service key for Edge Functions
- `ANTHROPIC_API_KEY` — For Claude calls in Edge Function

### 3.4 Brand Assets & Documentation (Phase 4)

#### Copy Registry
**Current state:** Inline in pages
**Expected state:** Centralized `lib/copy.ts` with all public-page copy organized by page/section
- Enables: A/B testing, multi-language support, version control of messaging

#### Component Library
**Current:** Ad-hoc styled components
**Expected:** Shared component directory (`components/`) with reusable elements:
- `SectionShell` — max-width container with section padding/borders
- `PageShell` — full-page wrapper (currently removed from layout.tsx)
- `StepCard` — step indicator + content card
- `CTAButton` — primary/secondary button variants
- `InputField` — monospace input with 1px border focus states

#### Style Guide
**Current:** `globals.css` tokens
**Expected:** Documented design system with:
- Color system (background, foreground, borders, accent)
- Typography scale (font-sizes, weights, tracking)
- Spacing scale (gaps, padding, margins)
- Border/radius rules (always 1px, never rounded)
- Motion rules (no fades, only state transitions)
- Interactive states (focus, hover, active, disabled)

---

## 4. USER JOURNEY MAP

### Unauthenticated User
```
Landing Page (/)
  ↓
[User explores "What is this?"]
  ↓ (Click "How it Works" or scroll)
/how-it-works
  ↓
[User understands the system]
  ↓ (Click "Start Your Baseline" or "See Pricing")
  ├→ /pricing (if comparing plans)
  │  ↓ (Click plan CTA)
  │  ↓
  └→ /start (Baseline creation)
      ↓
    [User inputs Baseline data]
      ↓
    [System creates account + Baseline profile]
      ↓
    /app (Dashboard)
```

### Authenticated User (Session A)
```
/app (Dashboard)
  ↓
[User chooses module: Alignment / Defrag / Restore]
  ├→ /app/alignment (Self-understanding)
  │  ↓
  │  [User reviews/edits Baseline]
  │  ↓
  │  "Ready for real-time clarity?" CTA
  │  ↓
  ├→ /app/defrag (Relational Synthesis)
  │  ↓
  │  [User inputs tension log + sync target]
  │  ↓
  │  [ EXECUTE_SYNTHESIS ]
  │  ↓
  │  [Edge Function calls Claude]
  │  ↓
  │  [Output: intent + reaction + bridge action]
  │  ↓
  │  [User annotates/saves result]
  │  ↓
  │  "What's your next move?" CTA
  │  ↓
  └→ /app/restore (Integration/Recovery)
     ↓
     [User processes difficult moment]
     ↓
     [System provides integration guidance]
```

---

## 5. FEATURE ROLLOUT ROADMAP

### Week 1 (Current)
- ✅ Global aesthetic (Brutalism)
- ✅ Homepage + three modules introduction
- ✅ Auth terminal (login/signup)
- ✅ Telemetry Dashboard UI
- ✅ Edge Function skeleton

### Week 2
- [ ] `/product` page
- [ ] `/how-it-works` page
- [ ] `/use-cases` page
- [ ] Database schema setup (Supabase)
- [ ] RLS policies

### Week 3
- [ ] `/pricing` page
- [ ] `/start` onboarding flow
- [ ] Baseline profile creation + storage
- [ ] User dashboard (`/app`)

### Week 4
- [ ] `/app/baseline` surface
- [ ] `/app/defrag` persistence (history, annotations)
- [ ] Copy registry centralization
- [ ] Component library documentation

### Week 5
- [ ] `/app/restore` surface (optional, can be Phase 2)
- [ ] Polish, edge cases, error handling
- [ ] Style guide documentation
- [ ] Beta launch readiness

---

## 6. KEY DECISIONS & CONSTRAINTS

### Design Constraints
- **Aesthetic:** Pure brutalism—no color except white/black/gray
- **Typography:** Monospace for all interactive elements (buttons, labels, inputs)
- **Interaction:** White border inversion on hover (no gradient, no shadow, no scale)
- **Spacing:** Minimal, structured; sections separated by 1px borders, not whitespace
- **Branding:** "DEFRAG" (all-caps) only in nav wordmark; everywhere else "Defrag" (sentence-case)

### Product Constraints
- **Tone:** Plain-language, premium, calm; no therapy voice, no mystical framing, no jargon
- **Data:** Zero training data exposure, zero cloud sync, all synthesis stays private
- **Scope:** Not a general AI assistant, not a therapy product, not a productivity tool
- **Copy:** Centralized, versioned, tested for clarity

### Technical Constraints
- **Frontend:** Next.js 16 App Router, React 19, Geist Sans/Mono
- **Backend:** Supabase (Auth + PG) + Edge Functions (Claude synthesis)
- **Styling:** Tailwind CSS v4 with custom tokens (no rounding, minimal accent)
- **Deployment:** Vercel (auto-deploy on main branch push)

---

## 7. SUCCESS METRICS

### Phase 1 (Current) ✅
- [x] Aesthetic applied globally (pure black, monospace, 1px borders)
- [x] Auth wired to Supabase (login/signup functional)
- [x] Telemetry Dashboard UI complete
- [x] Edge Function scaffold ready for API calls
- [x] Homepage conveys core promise

### Phase 2 (Next)
- [ ] All four public pages (`/product`, `/how-it-works`, `/use-cases`, `/pricing`) live
- [ ] Copy tested for clarity (no jargon, no hype, no mysticism)
- [ ] Navigation flows correctly (all CTAs → intended destinations)
- [ ] Mobile-responsive on all pages

### Phase 3 (Later)
- [ ] Baseline creation flow complete (`/start` → `/app/baseline`)
- [ ] Defrag synthesis runs end-to-end (Edge Function → Claude → JSON response)
- [ ] Restore surface functional (similar pattern to Defrag)
- [ ] History/persistence working (all results saved to Supabase)

### Phase 4 (Final)
- [ ] Component library documented and reusable
- [ ] Copy registry centralized (`lib/copy.ts`)
- [ ] Style guide published
- [ ] Beta cohort onboarded and feedback collected

---

## 8. CURRENT CODEBASE STRUCTURE

```
/vercel/share/v0-project/
├── app/
│   ├── page.tsx                      [✅ Homepage — Brutalist]
│   ├── layout.tsx                    [✅ Root layout — Geist fonts, no SiteHeader]
│   ├── globals.css                   [✅ Design tokens + component styles]
│   ├── login/page.tsx                [✅ Auth terminal]
│   ├── signup/page.tsx               [✅ Auth terminal]
│   ├── auth/callback/route.ts        [✅ OAuth handler]
│   ├── defrag/page.tsx               [✅ Telemetry Dashboard UI]
│   ├── product/page.tsx              [❌ TODO]
│   ├── how-it-works/page.tsx         [❌ TODO]
│   ├── use-cases/page.tsx            [❌ TODO]
│   ├── pricing/page.tsx              [❌ TODO]
│   ├── start/page.tsx                [❌ TODO]
│   └── app/
│       ├── baseline/page.tsx         [❌ TODO]
│       ├── restore/page.tsx          [❌ TODO]
│       └── page.tsx                  [❌ TODO — Dashboard entry]
├── supabase/
│   └── functions/relational-synthesis/
│       ├── index.ts                  [✅ Edge Function skeleton]
│       ├── _cors.ts                  [✅ CORS wrapper]
│       └── deno.json                 [✅ Dependencies]
├── lib/
│   ├── supabase/
│   │   ├── browser.ts                [✅ Browser client]
│   │   ├── config.ts                 [✅ Config]
│   │   └── server.ts                 [Likely present]
│   ├── routes.ts                     [Route constants]
│   └── copy.ts                       [❌ TODO — Centralize copy]
├── components/
│   ├── site/
│   │   └── chrome.tsx                [✅ SiteHeader/Footer — now stripped from layout]
│   └── system/
│       └── page-shell.tsx            [Utility]
├── docs/
│   ├── spec/
│   │   ├── overview.md               [Product overview]
│   │   ├── public-pages.md           [Public page spec]
│   │   ├── runtime.md                [App runtime spec]
│   │   └── artifacts.md              [Data model spec]
│   ├── tickets/
│   │   ├── EPIC-1-foundation.md      [Foundation tasks]
│   │   ├── EPIC-2-public-pages.md    [Public page tasks]
│   │   └── queue.md                  [Prioritized tasks]
│   └── setup.md                      [Setup instructions]
├── package.json                      [Dependencies]
├── next.config.js                    [Next.js config]
├── tailwind.config.js                [Tailwind config]
├── tsconfig.json                     [TypeScript config]
└── README.md                         [Generic starter README]
```

---

## 9. IMPLEMENTATION CHECKLIST

### Critical Path (Must Complete)
- [ ] Public pages (`/product`, `/how-it-works`, `/use-cases`, `/pricing`)
- [ ] Onboarding flow (`/start` → Baseline creation)
- [ ] User dashboard (`/app`)
- [ ] Baseline surface (`/app/baseline`)
- [ ] Defrag synthesis persistence (history, annotations)

### High Priority (Should Complete)
- [ ] Database schema + RLS policies
- [ ] Copy registry centralization
- [ ] Component library documentation
- [ ] Restore surface (`/app/restore`)
- [ ] Mobile responsiveness audit

### Nice to Have (Can Defer)
- [ ] Style guide polished documentation
- [ ] A/B testing infrastructure (copy variants)
- [ ] Advanced filtering/search (past syntheses)
- [ ] Coaching tier features (`/app/coaching`)

---

## 10. KNOWN ISSUES & NOTES

### Aesthetic
- User explicitly rejected cyan (`#00E5FF`) accent; dashboard should remain pure white/monospace
- No pill-box styling; all cards are stark 1px borders with right-angle corners
- "Defrag" capitalization: only `DEFRAG` in top-right nav wordmark; everywhere else is "Defrag"

### Architecture
- `SiteHeader`/`SiteFooter` currently stripped from `layout.tsx` for full canvas control
- `PageShell` component exists but may need refactoring to work with new aesthetic
- Copy still inline in components; needs centralization in `lib/copy.ts` before public pages

### Auth
- Supabase OAuth wired (GitHub, Google); requires `ANTHROPIC_API_KEY` env var for synthesis
- `/auth/callback` route handles server-side code exchange

### Data
- Database schema not yet created; needs `users`, `baselines`, `syntheses`, `relationships`, `annotations` tables
- RLS policies not yet implemented

---

## 11. NEXT IMMEDIATE ACTIONS

1. **Create `/product` page** — Explain Defrag system as integrated whole
2. **Set up database schema** — `users`, `baselines`, `syntheses`, `relationships` tables + RLS
3. **Build `/start` onboarding** — Baseline creation form
4. **Implement `/app` dashboard** — Three-module entry point
5. **Add persistence to `/app/defrag`** — Save/retrieve syntheses from Supabase

Each task can be tracked as a separate ticket in the GitHub issue queue.
