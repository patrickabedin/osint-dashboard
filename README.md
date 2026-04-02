# OSINT Dashboard

Live monitoring dashboard for the SKYNET OSINT_ENGINE.

## Deploy

Connected to Cloudflare Pages via GitHub:
```
git push origin main → CF Pages auto-deploys
```

## Local Dev

```bash
npm install
npm run dev
# → http://localhost:3000
```

## Build (static export)

```bash
npm run build
# Output: out/ directory
```

## Architecture

- Next.js 15 (static export)
- Polls CRUCIX API at `localhost:3117/api/state`
- Reads signals from `v3_signals.json` via adapter stub
- CF Pages: `git push` to `patrickabedin/osint-dashboard` = auto-deploy
