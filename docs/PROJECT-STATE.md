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
NOT AUTHORIZED — Phase 03 discovery and planning only. No `src/` change is authorized until M03-03 (Product Manager approval and scope freeze) closes.

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

M03-00 / M03-01 / M03-02 — Phase 03 discovery, reference extraction, and review/proposal (documentation only). All three are IN PROGRESS pending Product Manager review.

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

M03-03 — Product Manager Approval & Scope Freeze (owner: Julián Cely + coordinating ChatGPT). Implementation (M03-04) does not begin before M03-03 closes.
