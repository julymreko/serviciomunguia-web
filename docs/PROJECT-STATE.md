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
NOT AUTHORIZED — M03-03 scope freeze and completed documentation closure do not authorize `src/` modifications, OpenCode execution, or deployment. M03-04 implementation requires separate explicit Product Manager approval. The prior CTA asset transfer is documented in M03-03, "D-07 Image Transfer Resolution".

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

M03-03 — Product Manager Approval & Scope Freeze: COMPLETED; formal closure was approved and published in commit `63c25ec1916533fe631f78d84960886b8c9bdfb9`. PM decisions D-01 to D-15, scope freeze, approved O-08 planning decisions, and the published M03-04 specification are documented. M03-04 remains NOT STARTED and its execution, including OpenCode, is NOT AUTHORIZED. M03-00, M03-01, and M03-02: COMPLETED; formal closures were approved and published in commit `8f2594562352450d829a52b1e928cfe58be8ae80`. Their supporting evidence and decision references are recorded in the Phase 03 specification and M03-03.

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

M03-04 — OpenCode Implementation: NOT STARTED, awaiting separate explicit Product Manager authorization. The specification and approved O-08 planning allow-list are published; no implementation, deployment, or source modification is authorized by this closure.
