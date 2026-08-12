# ADR-003 — SEO Static HTML Principle

Status: ACCEPTED

## Decision

SEO-critical content for serviciomunguia.com must exist in the generated static HTML.

Primary content must not depend on client-side JavaScript execution for:

- Discovery
- Crawling
- Indexing
- Semantic interpretation

JavaScript may enhance interaction, but must not be required for access to primary SEO content.

## SEO Priority

Organic search visibility is a primary product objective.

Technical architecture decisions must preserve:

- Semantic HTML
- Crawlable content
- Stable URLs
- Correct heading hierarchy
- Internal linking
- Metadata
- Structured data
- Sitemap support
- Robots directives
- Canonical URLs
- Core Web Vitals performance

## Constraint

Any future frontend technology or implementation that requires client-side JavaScript to expose primary SEO content must be explicitly reviewed and approved before adoption.

## Authority

Approved by:

Julián Cely
Product Manager
