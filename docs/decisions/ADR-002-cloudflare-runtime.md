# ADR-002 — Cloudflare Runtime Architecture

Status: ACCEPTED

## Decision

serviciomunguia.com will use Cloudflare as the primary runtime and delivery platform.

The architecture will use:

- Cloudflare Workers Static Assets for the public frontend.
- Cloudflare Worker API for dynamic server-side logic.
- Cloudflare D1 for relational application data.
- Cloudflare Turnstile for bot protection.

## Runtime Boundary

Static delivery:

Generated HTML
CSS
JavaScript
Images
Other static assets

        ↓

Cloudflare Workers Static Assets

Dynamic execution:

Browser request
        ↓
Cloudflare Worker API
        ↓
Approved backend services

## Confirmed Backend Services

- Cloudflare D1
- Cloudflare Turnstile
- ZeptoMail

## Architecture Principle

Static content must remain static whenever dynamic execution is not required.

Worker execution must be reserved for functionality that requires server-side logic, validation, security, data access, or external service integration.

## Environment Roles

Production:
serviciomunguia.com

Legacy/reference staging:
staging.serviciomunguia.com

New architecture staging:
new.serviciomunguia.com

## Migration Constraint

The WordPress and Bricks implementation remains a reference during migration.

The new Cloudflare architecture must not modify or replace the reference staging environment until explicitly approved by Julián Cely.

## Undefined Items

This ADR does not define:

- Worker route structure
- D1 schema
- Wrangler configuration
- Cloudflare account structure
- Environment variables
- Secrets
- CI/CD configuration

These items require separate definition and approval.

The approved Worker deployment command is documented in docs/SECRETS-POLICY.md.

## Authority

Approved by:

Julián Cely
Product Manager
