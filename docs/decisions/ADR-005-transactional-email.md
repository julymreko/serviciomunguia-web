# ADR-005 — Transactional Email

Status: ACCEPTED

## Decision

ZeptoMail will be the transactional email service for serviciomunguia.com.

The Cloudflare Worker API will be responsible for invoking ZeptoMail when approved application events require email delivery.

## Intended Uses

Confirmed transactional email use cases include:

- Customer confirmation after form submission
- Service team notifications
- Administrative alerts
- Application error notifications when explicitly implemented

## Architecture Boundary

Frontend
        ↓
Cloudflare Worker API
        ↓
Validation and approved business logic
        ↓
ZeptoMail

Client-side code must not contain ZeptoMail credentials or invoke privileged ZeptoMail operations directly.

## Constraints

Credentials and secrets must not be committed to Git.

Exact ZeptoMail configuration, templates, sender identities, routing rules, retry behavior, and error handling are not yet defined.

These items require separate implementation decisions.

## Authority

Approved by:

Julián Cely
Product Manager
