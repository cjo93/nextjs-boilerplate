#!/usr/bin/env bash
set -euo pipefail

REPO="cjo93/nextjs-boilerplate"
BASE="main"
BOT_ASSIGNEES=("copilot-swe-agent" "jules-bot")

PR_BODY_FILE="$(mktemp)"
cat > "$PR_BODY_FILE" <<'EOF'
## Summary
Implements DEFRAG public-site visual refinement route-by-route using `DEFRAG_VISUAL_IMPLEMENTATION_HANDOFF.md` as source of truth.
EOF

ENTRIES=(
  "feat/defrag-visual-route-home|feat(public-site): refine DEFRAG landing page visual implementation"
  "feat/defrag-visual-route-product|feat(public-site): refine DEFRAG product page visual implementation"
  "feat/defrag-visual-route-how-it-works|feat(public-site): refine DEFRAG how-it-works page visual implementation"
  "feat/defrag-visual-route-use-cases|feat(public-site): refine DEFRAG use-cases page visual implementation"
  "feat/defrag-visual-route-pricing|feat(public-site): refine DEFRAG pricing page visual implementation"
  "feat/defrag-visual-route-start|feat(public-site): refine DEFRAG start page visual implementation"
)

gh auth status >/dev/null
git fetch origin
git checkout "$BASE"
git pull --ff-only origin "$BASE"

for item in "${ENTRIES[@]}"; do
  BRANCH="${item%%|*}"
  TITLE="${item#*|}"

  git checkout -B "$BRANCH" "origin/$BASE"
  git commit --allow-empty -m "chore(pr): initialize $BRANCH" || true
  git push -u origin "$BRANCH" --force-with-lease

  PR_NUMBER="$(gh pr list --repo "$REPO" --head "$BRANCH" --base "$BASE" --state open --json number --jq '.[0].number // empty')"
  if [[ -z "$PR_NUMBER" ]]; then
    gh pr create \
      --repo "$REPO" \
      --base "$BASE" \
      --head "$BRANCH" \
      --title "$TITLE" \
      --body-file "$PR_BODY_FILE" \
      --draft >/dev/null
    PR_NUMBER="$(gh pr list --repo "$REPO" --head "$BRANCH" --base "$BASE" --state open --json number --jq '.[0].number')"
  fi

  for bot in "${BOT_ASSIGNEES[@]}"; do
    gh pr edit "$PR_NUMBER" --repo "$REPO" --add-assignee "$bot" >/dev/null 2>&1 || true
  done

  echo "Ready: $BRANCH -> PR #$PR_NUMBER"
done

gh pr list --repo "$REPO" --state open --json number,title,url,assignees --jq '.[] | "#\(.number) \(.title)\n\(.url)\nassignees: \([.assignees[].login] | join(", "))\n"'
