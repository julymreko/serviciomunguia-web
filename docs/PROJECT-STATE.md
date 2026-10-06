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
2 — Controlled Reference Migration

Status:
COMPLETED

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

NONE

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

UNDEFINED — awaiting Product Manager approval of the next phase entry point.
