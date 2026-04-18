# Branch Protection Checklist
## Purpose
This checklist defines the minimum GitHub protection rules required for DEFRAG so Codex can work safely through PRs.
The goal is:
- no direct breakage to `main`
- all changes reviewed through PRs
- CI is the enforcement layer
- Vercel deploys from the protected branch workflow
---
## Branch to Protect
- `main`
---
## Required GitHub Settings
### 1. Require a pull request before merging
Enable:
- Require a pull request before merging
Recommended:
- Require at least 1 approval before merge
Why:
- Prevents direct pushes
- Ensures Codex changes are reviewed
---
### 2. Require status checks to pass before merging
Enable:
- Require status checks to pass before merging
Required checks:
- CI
Why:
- Prevents broken code from merging
- Keeps Vercel production deploys cleaner
---
### 3. Require branches to be up to date before merging
Enable if available:
- Require branches to be up to date before merging
Why:
- Reduces stale PR merges
- Ensures CI reflects latest base branch state
---
### 4. Restrict direct pushes to `main`
Enable:
- Block direct pushes to `main`
Why:
- Keeps workflow PR-only
- Prevents accidental bypass of Codex + CI process
---
### 5. Do not allow force pushes
Enable:
- Disallow force pushes
Why:
- Preserves review history
- Protects branch integrity
---
### 6. Do not allow branch deletion
Enable:
- Prevent branch deletion
Why:
- Protects the production branch
---
## Recommended Vercel Pairing
Use Git-based deploys:
- PR branch -> preview deployment
- merge to `main` -> production deployment
Do not rely on manual production deploys for normal workflow.
---
## Codex-Specific Working Rules
When Codex is used:
- work on a new branch
- never merge directly
- always open a PR
- always pass CI before merge
If Codex finds a docs-only ticket:
- PR is still required
- CI should still run unless intentionally scoped otherwise
---
## Exceptions
The following should not be changed casually:
- branch protection settings
- CI workflow names
- production branch name
Any change to these should be treated as an explicit repo administration task.
---
## Manual Verification Checklist
Before relying on Codex for implementation, verify:
- [ ] `main` is protected
- [ ] PR required before merge
- [ ] CI required before merge
- [ ] direct pushes blocked
- [ ] Vercel connected to repo
- [ ] preview deploys appear on PRs
- [ ] production deploys occur from `main`
---
## Notes
If CI starts failing because of setup issues rather than ticket work:
- fix install / lockfile consistency first
- do not ask Codex to ignore CI permanently
- do not weaken protections to compensate for broken setup
