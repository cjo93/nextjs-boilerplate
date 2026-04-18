# Setup Instructions (Codex + Vercel)

## 1. Connect GitHub to Vercel
- Import repo into Vercel
- Set production branch = main

## 2. Set environment variables
- OPENAI_API_KEY (or AI_GATEWAY_API_KEY)

## 3. Enable Codex
- Open ChatGPT → Codex
- Connect GitHub repo

## 4. Run first task
- Use ticket prompt
- Review PR
- Merge → Vercel auto deploy

## 5. Branch protection
- Require PR
- Require CI checks
- Disable direct push to main
