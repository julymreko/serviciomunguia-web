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
3 — CÓMO TRABAJAMOS

Status:
IN PROGRESS

Implementation authorization:
PM APPROVED — the Product Manager explicitly authorized M03-04 implementation in the project conversation on 2026-10-11, after approving the final OpenCode implementation prompt. The authorization is recorded in the repository (see docs/phases/phase-03/M03-04-opencode-implementation.md). Only the M03-04 frozen source-file allow-list is authorized, and for Priority C only the paths of PD-39 are added; deployment, M03-06 and unrelated changes remain NOT AUTHORIZED, and M03-05 is authorized only task by task (PD-44). Priority B implementation was separately authorized in stages on 2026-10-27 (PD-31 in M03-04). Priority C (Smart Header) implementation was separately authorized in stages on 2026-11-06 (PD-39 in M03-04). The previous CTA asset transfer is recorded in M03-03, "D-07 Image Transfer Resolution".

Phase specification:
docs/phases/PHASE-03-como-trabajamos.md

Previous phase:
2 — Controlled Reference Migration — COMPLETED

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

M03-03 — Product Manager Approval & Scope Freeze: COMPLETED; formal closure was approved and published in commit `63c25ec1916533fe631f78d84960886b8c9bdfb9`. PM decisions D-01 to D-15, scope freeze, approved O-08 planning decisions, and the published M03-04 specification are documented. M03-04 — OpenCode Implementation: COMPLETED (declared by the Product Manager on 2026-11-08, PD-43); Priority A (CTA corrections D7–D8, desktop remediation, D9/D10, responsive Product Manager visual validation, and local documentation) passed Product Manager visual verification; commit and publication evidence is determined from Git. Priority B (dynamic scroll-driven process stepper): Product Manager decisions PD-1 to PD-15 are recorded in M03-04; the technical specification was approved by the Product Manager on 2026-10-27 (PD-30 in M03-04, with decisions PD-16 to PD-29) and implementation was authorized in four stages by the Product Manager on 2026-10-27 (PD-31), each stage with its own contract and approval. Priority B was completed in its four stages (stage 1, Mobile Portrait, task M03-04-PB-01, commit 6f1e252; stage 2, 3+2 layouts, task M03-04-PB-02, commit 3436414; stage 3, Desktop, task M03-04-PB-03, commit f0743d5; stage 4, performance measurement and full regression, task M03-04-PB-04, completed on 2026-11-03 without a source change; decisions PD-33 to PD-35). Priority C (Smart Header) is specified (decision PD-38, 2026-11-06; `docs/phases/phase-03/M03-04-priority-c-smart-header-specification.md`) and its implementation was authorized in three stages by the Product Manager on 2026-11-06 (PD-39), each stage with its own contract and approval. Stage 1 (state model, logo and Menu trigger surface) was completed on 2026-11-07 (task M03-04-PC-01, commit `3865a34`; decisions SH-D19 to SH-D22 in PD-40). Stage 2 (SH-D16, SH-D18 and the Menu overlay interaction) was completed on 2026-11-08 (task M03-04-PC-02, commit `ac58265`; decisions SH-D23 to SH-D27 in PD-41). Stage 3 (measurement and full regression, with no source change) was completed on 2026-11-08 (task M03-04-PC-03; decisions SH-D28 to SH-D31 in PD-42), which completes the implementation of Priority C. Deployment is NOT AUTHORIZED; GitHub publication did not authorize any Cloudflare deployment. M03-00, M03-01, and M03-02: COMPLETED; formal closures were approved and published in commit `8f2594562352450d829a52b1e928cfe58be8ae80`. Their supporting evidence and decision references are recorded in the Phase 03 specification and M03-03.

Phase 02 completed after formal M02-05 R03 PASS.

M02-04 Menu Migration: COMPLETED — reconstructed, validated locally, deployed to `new.serviciomunguia.com`, and validated across Desktop, Tablet, Mobile Landscape, and Mobile Portrait.

Footer: OUT OF PHASE 2 SCOPE — PM decision. It will be implemented as the final global component after the main page is completed.

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

M03-04 — OpenCode Implementation: COMPLETED (declared by the Product Manager on 2026-11-08, PD-43). Priority A is complete. Priority B — dynamic scroll-driven process stepper — is complete (stages 1 to 4); technical specification approved on 2026-10-27 (PD-30); implementation authorized in four stages by the Product Manager on 2026-10-27 (PD-31), each stage with its own contract and approval. Stage 1 (Mobile Portrait) was completed on 2026-10-29 (task M03-04-PB-01, commit 6f1e252), stage 2 (3+2 layouts) on 2026-10-30 (commit 3436414), stage 3 (Desktop) on 2026-10-30 (commit f0743d5) and stage 4 (performance measurement and full regression) on 2026-11-03 without a source change (decisions PD-33 to PD-35); a follow-up measurement of the Mobile Portrait CPU 6x ratio (task M03-04-PB-05, decision PD-36) did not identify the cause of its spread, which remains open. The Bottom Navigation breakpoint alignment of PD-15 was closed without implementation (decision PD-37); the band above 478 px and up to 478.98 px stays handled by PD-25. Priority C (Smart Header) is specified in `docs/phases/phase-03/M03-04-priority-c-smart-header-specification.md` (decision PD-38, 2026-11-06); its implementation was authorized in three stages by the Product Manager on 2026-11-06 (PD-39), each stage with its own contract and approval, and a stage starts only after the previous stage was reviewed CONFORME, validated visually by the Product Manager and committed by the Product Manager. Stages 1 and 2 were completed on 2026-11-07 and 2026-11-08 (commits `3865a34` and `ac58265`, PD-40 and PD-41) and stage 3 (measurement and full regression, with no source change) on 2026-11-08 (PD-42); the implementation of Priority C is complete. Further GitHub publication and deployment each require explicit Product Manager authorization; M03-05 is authorized task by task (PD-44): task 1 is COMPLETED (commit `d5386c2`), tasks 2 and 3 are NOT AUTHORIZED; M03-06 remains NOT AUTHORIZED.

## Parallel Initiatives

GOV-01 — AI Workflow Governance: separate governance initiative prioritized by the Product Manager. It does not change approved Phase 03 behavior or scope. GOV-01 progress and authorization details: docs/governance/GOV-01-ai-workflow-governance.md. Stable decisions: docs/decisions/ADR-007-ai-workflow-governance.md.
