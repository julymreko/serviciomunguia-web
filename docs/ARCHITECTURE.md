# SYSTEM ARCHITECTURE

## Project

serviciomunguia.com

## Architecture Status

Status: APPROVED

This document contains only confirmed architectural decisions.

Undefined implementation details must remain undefined until explicitly approved by Julián Cely.

## Product Authority

Product Manager: Julián Cely

Julián Cely is the final authority for product, scope, architecture, and unresolved implementation decisions.

## Public Web Architecture

### Frontend Build

Eleventy

Template engine:
Nunjucks

Primary frontend output:
Static HTML, CSS, JavaScript, images, and other static assets.

### Hosting

Cloudflare Workers Static Assets

The public website must be delivered primarily as static assets.

### Backend

Cloudflare Worker API

Dynamic server-side logic must be handled by Cloudflare Workers.

### Database

Cloudflare D1

### Bot Protection

Cloudflare Turnstile

### Transactional Email

ZeptoMail

### Version Control

GitHub

Repository:
julymreko/serviciomunguia-web

The Git repository is the authoritative project source of truth.

## Runtime Boundary

Static website content:

Eleventy + Nunjucks
        ↓
Build
        ↓
Static HTML / CSS / JavaScript / Assets
        ↓
Cloudflare Workers Static Assets

Dynamic functionality:

Browser
        ↓
Cloudflare Worker API
        ↓
Cloudflare services and approved external services

Confirmed dynamic dependencies:

- Cloudflare D1
- Cloudflare Turnstile
- ZeptoMail

## SEO Architecture Principle

SEO-critical content must exist in the generated static HTML.

Primary content must not depend on client-side JavaScript execution for discovery, crawling, indexing, or semantic interpretation.

JavaScript must be used only where interaction or client-side behavior requires it.

## Component Architecture Principle

The frontend must be organized into maintainable components or partials.

A change to a specific section must be locatable without searching through a monolithic HTML document.

Confirmed major OnePage sections:

- Header
- Hero
- Services
- Coverage
- Brands
- Process
- Testimonials
- Contact
- Footer

Detailed component structure is not yet defined.

## Environment Roles

Production:

serviciomunguia.com

Current state:
Under construction presentation.

Legacy/reference staging:

staging.serviciomunguia.com

Purpose:
Reference implementation built with WordPress and Bricks.

New architecture staging:

new.serviciomunguia.com

Purpose:
Staging environment for the new architecture during migration.

## Migration Principle

The existing WordPress and Bricks implementation is a migration reference.

Previously approved design, content, responsive behavior, assets, and functional decisions must be extracted and documented before equivalent components are rebuilt.

The migration must not redesign approved sections unless Julián Cely explicitly authorizes a redesign.

## Deployment Principle

GitHub is the code and documentation source of truth.

Cloudflare will be the deployment platform.

Exact build configuration and remaining deployment configuration are not yet defined.

Approved Worker deployment command:

npx wrangler deploy

Secret provisioning and deployment command policy are defined in docs/SECRETS-POLICY.md.

## Audit Principle

Claude Code is the designated pre-deployment auditor.

No deployment should be treated as approved until the required audit for that deployment has passed.

The audit protocol is defined in docs/PRE-DEPLOYMENT-AUDIT.md.

## Runtime Versioning

Approved runtime line:
Node.js 24.x LTS

Phase 01 validated runtime:
Node.js 24.19.0

Approved Eleventy version:
@11ty/eleventy@3.1.6

Eleventy v4 prerelease versions are not approved for Phase 01.

Authoritative decision:
docs/decisions/ADR-006-runtime-version-pinning.md

## Explicitly Undefined

The following items are not yet approved and must not be assumed:

- Final repository directory structure
- Nunjucks configuration
- Cloudflare Worker project configuration
- D1 schema
- Worker API routes
- Turnstile configuration
- ZeptoMail configuration
- Build command
- CI/CD implementation details
- Branch strategy
- Testing framework
- Analytics implementation
- Final component file structure
