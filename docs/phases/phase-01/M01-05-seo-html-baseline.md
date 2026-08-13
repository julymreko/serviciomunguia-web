# M01-05 — SEO HTML Baseline

## Status

COMPLETED

## Objective

Establish the minimum static HTML SEO baseline required by Phase 01 while preserving the architectural rule that SEO-critical content must exist in generated HTML and must not depend on client-side JavaScript.

M01-05 validates structure and generation behavior only. It does not introduce final production SEO copy, production metadata strategy, or indexing policy.

## Preconditions

- Phase 01 is IN PROGRESS.
- M01-04 is COMPLETED and published.
- HEAD equals origin/main.
- Working tree is clean.
- Eleventy remains pinned to 3.1.6.
- The approved build boundary remains src/ -> dist/.
- The Nunjucks layout foundation remains operational.
- https://new.serviciomunguia.com is publicly reachable.

## In Scope

- Ensure the generated static HTML contains an explicit html lang attribute.
- Ensure the page title is generated statically in the document head.
- Add a synthetic meta description generated statically in the document head.
- Ensure the primary page heading exists in generated HTML.
- Keep all SEO-critical baseline markup present in dist/index.html without JavaScript dependency.
- Use only synthetic/disposable SEO values.
- Verify npm run build succeeds.
- Verify the generated dist/index.html contains the expected SEO baseline.
- Verify the local development server serves the expected generated HTML.
- Deploy the validated M01-05 static HTML to new.serviciomunguia.com.
- Verify the public staging HTML contains the same static SEO baseline.
- Record observable verification evidence.
- Update Phase 01 and PROJECT-STATE after technical verification.

## Out of Scope

- Final production title.
- Final production meta description.
- Final keyword targeting.
- Final production heading copy.
- Structured data / JSON-LD.
- Open Graph metadata.
- Twitter/X metadata.
- XML sitemap.
- robots.txt.
- Canonical URL policy.
- Production indexing policy.
- Redirect strategy.
- hreflang.
- Production URL architecture.
- Bricks SEO migration.
- Analytics changes.
- Production deployment.
- M01-06 extraction work.
- Any M01-06 or later implementation.

## SEO Static HTML Principle

SEO-critical content validated in M01-05 must exist in generated static HTML.

JavaScript may not be required to create, inject, replace, or expose the title, meta description, html language declaration, or primary heading.

The generated dist/index.html is the source of truth for this milestone.

## Synthetic Metadata Policy

All metadata introduced in M01-05 is synthetic and disposable.

M01-05 must not establish final production SEO language or keyword strategy.

The milestone exists to prove the static rendering mechanism, not to approve production SEO copy.

## Canonical and Indexing Policy

Canonical URL policy and robots/indexing policy are not approved by M01-05.

M01-05 must not add or modify canonical, robots meta, robots.txt, sitemap, or indexing directives without explicit PM approval.

If completion of the milestone would require one of those decisions, STOP and request PM direction.

## Required Deliverables

- Static html lang declaration in generated HTML.
- Static page title in generated HTML.
- Static synthetic meta description in generated HTML.
- Static primary h1 in generated HTML.
- Successful local build.
- Successful local generated-HTML verification.
- Successful deployment to new.serviciomunguia.com.
- Public verification that the expected SEO baseline exists in the returned HTML.
- Completed M01-05 verification record.
- Updated Phase 01 and PROJECT-STATE records after technical verification.

## Testing Classification

### Build

APPLIES

Verify npm run build succeeds and produces dist/index.html with the required static SEO baseline.

### Functional

APPLIES

Verify the generated page remains locally reachable and the expected static HTML is served correctly.

### Responsive

N/A - M01-05 does not implement production responsive behavior.

### SEO

APPLIES

Verify html lang, title, meta description, and primary h1 exist directly in generated static HTML and do not depend on JavaScript.

### Accessibility

N/A - M01-05 does not implement the production accessibility baseline. The semantic h1 is validated only as part of the static SEO structure.

### Performance

N/A - M01-05 introduces no production asset, script, or optimization strategy.

### Security

N/A - M01-05 introduces no secrets, user input, API, authentication, or security boundary.

### Integrations

APPLIES

Verify the validated SEO baseline is deployed through the existing Cloudflare staging deployment and observable at new.serviciomunguia.com.

### Regression

APPLIES

Verify M01-01 runtime, M01-02 Nunjucks, M01-03 static assets, and M01-04 Cloudflare deployment remain operational.

## PASS Criteria

M01-05 may be marked COMPLETED only when:

1. All preconditions remain satisfied.
2. Generated dist/index.html contains an explicit html lang attribute.
3. Generated dist/index.html contains a static title element.
4. Generated dist/index.html contains a static synthetic meta description.
5. Generated dist/index.html contains a primary h1.
6. Those SEO-critical elements exist without client-side JavaScript dependency.
7. No final production SEO copy is introduced.
8. No canonical, robots, sitemap, structured-data, social metadata, or indexing policy is introduced without PM approval.
9. npm run build completes successfully.
10. Local generated HTML verification passes.
11. Local development serving remains operational.
12. The validated state is deployed to new.serviciomunguia.com.
13. Public HTTPS returns HTTP 200.
14. Public HTML contains the expected static SEO baseline.
15. M01-01 through M01-04 behavior remains operational.
16. No M01-06 or later implementation is introduced.
17. All applicable technical, SEO, integration, regression, and governance verification criteria are satisfied.

## Publication Gate

After M01-05 is marked COMPLETED:

- Commit the validated milestone state.
- Push the commit to origin/main.
- Verify HEAD equals origin/main.
- Verify the working tree is clean.

M01-06 must not begin until this publication gate passes.

## STOP / BLOCKED Conditions

Set M01-05 to BLOCKED and STOP if:

- M01-04 publication state is not synchronized and clean;
- the existing Nunjucks or build boundary must change without PM approval;
- SEO-critical content would require client-side JavaScript;
- implementation requires final production SEO copy or keyword strategy;
- implementation requires canonical, robots, sitemap, indexing, structured-data, or production URL decisions not yet approved;
- local build or generated HTML verification fails for an unresolved reason;
- staging deployment fails for an unresolved reason;
- public staging verification fails;
- implementation requires M01-06 or later work;
- a governance or architecture contradiction prevents safe continuation.

## Verification Record

Build:
- npm run build completed successfully with Eleventy 3.1.6.
- dist/index.html was generated successfully.
- The existing static asset passthrough remained operational.

SEO:
- Generated HTML contains <html lang="es-MX">.
- Generated HTML contains the static title "Phase 01 Foundation".
- Generated HTML contains the static synthetic meta description.
- Generated HTML contains the primary h1 "Phase 01 Foundation".
- These SEO-critical elements are present directly in generated HTML and do not depend on client-side JavaScript.
- No canonical, robots, sitemap, structured data, social metadata, or production indexing policy was introduced.

Functional:
- npm run dev started successfully.
- The local development server returned HTTP 200.
- Locally served HTML contained the expected static SEO baseline.

Integration:
- The validated M01-05 build was deployed successfully through Wrangler to new.serviciomunguia.com.
- Public HTTPS at https://new.serviciomunguia.com returned HTTP 200.
- Public HTML contained lang="es-MX", the static title, the synthetic meta description, and the primary h1.

Regression:
- M01-01 runtime behavior remains operational.
- M01-02 Nunjucks inheritance remains operational.
- M01-03 static asset passthrough remains operational.
- M01-04 Cloudflare staging deployment remains operational.
- git diff --check reported no blocking errors.

Finding:
- The document language baseline was corrected from the initial synthetic "en" value to "es-MX" because the project targets Spanish content for Mexico.

## Execution Record

### Started

2026-08-12

### Completed

2026-08-12

## Findings

None recorded yet.

## Bugs

None recorded yet.

## Pending Items

- Complete the M01-05 publication gate before M01-06 begins.

## Handoff

Not generated. A formal milestone handoff is not required while execution remains in the same coordinated context.

## Final Status

COMPLETED

Use COMPLETED only after all applicable acceptance criteria have been verified.