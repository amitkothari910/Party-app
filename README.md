
# Party App — Monorepo (MVP)

This repository contains the Party App monorepo scaffold for Sprints 1–3:
- Backend: `services/api` (NestJS)
- Frontend: `services/web` (React / Next.js)
- Mobile: `mobile` (Expo / React Native)
- Infra & Deployment: `render.yaml` (Render blueprint) and optional `infra/terraform/` for full AWS control.

## Quickstart (local - API)
```bash
cd services/api
npm install
npm run start:dev
# API will run at http://localhost:3000
# Health endpoints:
#  - http://localhost:3000/health/liveness
#  - http://localhost:3000/health/readiness
