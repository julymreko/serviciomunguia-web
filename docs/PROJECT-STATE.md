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
NOT AUTHORIZED — Phase 03 discovery and planning only. No `src/` change is authorized until M03-03 (Product Manager approval and scope freeze) closes, with one PM-approved exception: the transfer of the approved CTA image asset into `src/assets/images/` (docs/phases/phase-03/M03-03-pm-approval-scope-freeze.md, "D-07 Image Transfer Resolution"). The status of this transfer is recorded only in M03-03, "D-07 Image Transfer Resolution". Implementation remains NOT AUTHORIZED.

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

M03-03 — Product Manager Approval & Scope Freeze. IN PROGRESS: PM decisions D-01 to D-15 are recorded in `docs/phases/phase-03/M03-03-pm-approval-scope-freeze.md`; scope freeze was expressly APPROVED by the PM on 2026-10-11, but M03-03 remains IN PROGRESS pending its remaining acceptance criteria; M03-04 and implementation are NOT AUTHORIZED. M03-00, M03-01, and M03-02 remain IN PROGRESS (no PM closure recorded).

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

Record and publish the PM-approved scope freeze, then resolve remaining M03-03 acceptance criteria and O-08 authorization separately. M03-04 (OpenCode implementation) remains NOT AUTHORIZED and does not begin before M03-03 closes and a separate PM authorization is recorded.
