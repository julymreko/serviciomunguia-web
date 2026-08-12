# ADR-001 — Frontend Stack

Status: ACCEPTED

## Decision

The public frontend for serviciomunguia.com will use:

- Eleventy as the static site generator.
- Nunjucks as the template engine.

The generated production output will consist primarily of static HTML, CSS, JavaScript, images, and other static assets.

## Context

The public website requires:

- Strong technical SEO.
- Static HTML containing SEO-critical content.
- High performance and low client-side JavaScript requirements.
- A maintainable component or partial structure.
- Low conceptual lock-in.
- Efficient AI-assisted development with limited context consumption.
- Compatibility with Cloudflare Workers Static Assets.

## Alternatives Evaluated

- Monolithic HTML
- React + Vite
- Astro
- Hugo
- Eleventy + Nunjucks

## Rationale

Eleventy + Nunjucks was selected because it provides:

- Static HTML generation.
- Component and partial organization.
- Minimal required client-side JavaScript.
- Low runtime complexity.
- Low conceptual lock-in.
- Straightforward repository navigation.
- Strong compatibility with Git-based workflows and Cloudflare static deployment.

## Constraints

SEO-critical content must exist in generated HTML.

Client-side JavaScript must not be required for primary content discovery or semantic interpretation.

The project must not use a monolithic HTML document as its maintainability model.

## Authority

Approved by:

Julián Cely
Product Manager
