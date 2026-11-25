# PROJECT STATE

## Project

Name: serviciomunguia.com

Repository: serviciomunguia-web

Product Manager: Julián Cely

## Environment Roles

Production domain:
serviciomunguia.com

Legacy/reference staging:
staging.serviciomunguia.com

New architecture staging:
new.serviciomunguia.com

## Current Phase

Phase:
4 — SERVICIOS

Status:
COMPLETED

Implementation authorization:
PM APPROVED — Phase 04 Servicios: PD-56 (scope freeze), PD-57 (M04-03 implementation authorization), PD-58 (M04-04 results, ACC-03 exception accepted) and PD-59 (Phase 04 closure after the M04-05 audit R01 PASS, `docs/audits/PHASE-04-AUDIT-RESULT-2026-11-25-R01.md`). Deployment of the Phase 04 state is NOT AUTHORIZED.

Phase specification:
docs/phases/PHASE-04-servicios.md

Previous phase:
3 — CÓMO TRABAJAMOS — COMPLETED

## Confirmed Architecture

Frontend:
Eleventy + Nunjucks

Hosting:
Cloudflare Workers Static Assets

Backend:
Cloudflare Worker API

Database:
Cloudflare D1

Bot protection:
Cloudflare Turnstile

Transactional email:
ZeptoMail

Version control and source of truth:
GitHub

## Current Repository State

Repository created:
YES

Repository cloned locally:
YES

Remote configured:
YES

Governance entry document created:
YES

## Current Working Item

Phase 04 — Servicios: COMPLETED (PD-59, 2026-11-25). Milestones M04-01 to M04-05 are COMPLETED: extraction (commit `3019910`), PM approval and scope freeze (PD-56, PD-57), implementation (commit `dfc4f96`), independent testing (commit `b558b4b`; 24 tests: PASS 22, FAIL 1 (ACC-03, accepted exception), NOT APPLICABLE 1) and formal audit R01 PASS (commit `9dd20b7`). The Phase 03 history is recorded in `docs/phases/PHASE-03-como-trabajamos.md` and `docs/handoffs/PHASE-03-M03-HANDOFF.md`.

## Approved Runtime Baseline

Node.js runtime line:
24.x LTS

Phase 01 validated Node.js version:
24.19.0

Eleventy version:
@11ty/eleventy@3.1.6

Decision record:
docs/decisions/ADR-006-runtime-version-pinning.md

## Next Item

Deployment of the Phase 04 state to `new.serviciomunguia.com` is NOT AUTHORIZED and not performed; as far as the repository shows, `new.serviciomunguia.com` still serves the Phase 03 state. The production site is untouched and its release stays blocked until all sections exist (PD-55). The next section in the approved order is Zonas de cobertura; its phase is not defined or authorized. Pending work is in `docs/tracking/BACKLOG.md`.

## Parallel Initiatives

GOV-01 — AI Workflow Governance: separate governance initiative prioritized by the Product Manager. It does not change approved Phase 03 behavior or scope. GOV-01 progress and authorization details: docs/governance/GOV-01-ai-workflow-governance.md. Stable decisions: docs/decisions/ADR-007-ai-workflow-governance.md.
