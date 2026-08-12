# M01-02 — Nunjucks Layout Foundation

## Status

COMPLETED

## Objective

Establish the minimum reusable Nunjucks layout foundation required by Phase 01 without introducing real production content, visual migration, production styling, or later-phase behavior.

## Preconditions

- Phase 01 is IN PROGRESS.
- M01-01 is COMPLETED.
- M01-01 publication gate has passed.
- HEAD equals origin/main.
- Working tree is clean before M01-02 specification begins.
- Node.js and Eleventy versions remain those approved by ADR-006.
- Eleventy build boundary remains src/ -> dist/.

## In Scope

- Configure Eleventy to support Nunjucks templates within the approved src/ input boundary.
- Create the minimum reusable base layout required to prove template inheritance.
- Convert the existing synthetic Phase 01 placeholder page to use that layout.
- Use only synthetic or disposable placeholder content.
- Preserve successful static generation to dist/.
- Verify that generated HTML contains the expected inherited layout structure and placeholder page content.
- Verify the local development server still serves the generated page successfully.
- Record observable verification evidence.
- Update Phase 01 project state after technical verification.
- Complete the publication gate before M01-03 begins.

## Out of Scope

- Real Bricks reference-site content.
- Production copy.
- Approved section reconstruction or migration.
- Header or footer intended for production.
- Final navigation.
- Final design system or production design tokens.
- Production CSS.
- Production JavaScript interactions.
- Real imagery or approved assets.
- Responsive layout implementation.
- SEO implementation beyond what is incidental to valid generated HTML.
- Accessibility optimization beyond what is incidental to valid semantic placeholder markup.
- Cloudflare, Wrangler, DNS, deployment, Workers, D1, API, Turnstile, ZeptoMail, or integrations.
- Any extraction work belonging to M01-06.
- Any implementation belonging to M01-03 or later milestones.

## Scope Guard

M01-02 exists only to prove that reusable Nunjucks layout inheritance works correctly inside the Phase 01 Eleventy foundation.

All content introduced by this milestone must be synthetic and disposable.

M01-02 must not use real production copy, approved Bricks sections, final visual styling, production assets, final navigation, or any material whose reconstruction depends on the M01-06 extraction framework.

If implementation would require a real design, content, migration, responsive, SEO, asset-pipeline, deployment, or integration decision, STOP and request PM direction.

## Required Deliverables

- Nunjucks base layout under src/.
- Synthetic page template using the base layout.
- Any minimal Eleventy configuration change required for Nunjucks inheritance.
- Successful dist/index.html generation.
- Completed M01-02 milestone specification with verification evidence.
- Updated PROJECT-STATE.md and Phase 01 status records when technically verified.

## Testing Classification

### Build

APPLIES

Verify that npm run build completes successfully and produces the expected generated HTML under dist/.

### Functional

APPLIES

Verify that Nunjucks template inheritance functions and the page is locally reachable through the Eleventy development server.

### Responsive

N/A - M01-02 does not implement production layout or responsive behavior.

### SEO

N/A - M01-02 does not implement the Phase 01 SEO baseline; that belongs to M01-05.

### Accessibility

N/A - M01-02 introduces only synthetic structural markup and does not implement the production accessibility baseline.

### Performance

N/A - M01-02 does not introduce production assets, styling, scripts, or performance-sensitive behavior.

### Security

N/A - M01-02 contains no authentication, user input, secrets, APIs, or security boundary.

### Integrations

N/A - M01-02 does not connect to external services or platforms.

### Regression

APPLIES

Verify that the validated M01-01 Eleventy runtime skeleton remains operational and that no M01-03 or later implementation is introduced.

## PASS Criteria

M01-02 may be marked COMPLETED only when:

1. All preconditions remain satisfied.
2. A reusable Nunjucks base layout exists under src/.
3. The synthetic Phase 01 page uses that base layout through template inheritance.
4. No real production content or Bricks migration content is introduced.
5. No production header, footer, navigation, design system, CSS, JavaScript, or approved assets are introduced.
6. npm run build completes successfully.
7. dist/index.html is generated successfully.
8. Generated HTML proves inherited layout structure and synthetic page content are both present.
9. npm run dev starts successfully.
10. The locally served page returns HTTP 200.
11. The served page contains the expected synthetic inherited layout content.
12. M01-01 behavior remains intact with no regression.
13. No M01-03 or later milestone implementation is introduced.
14. All applicable technical and governance verification criteria are satisfied.

## Publication Gate

After M01-02 is marked COMPLETED:

- Commit the validated milestone state.
- Push the commit to origin/main.
- Verify HEAD equals origin/main.
- Verify the working tree is clean.

M01-03 must not begin until this publication gate passes.

## STOP / BLOCKED Conditions

Set M01-02 to BLOCKED and STOP if:

- M01-01 publication state is not clean or synchronized;
- Nunjucks inheritance requires an undefined architecture decision;
- the existing Eleventy boundary must be changed without PM approval;
- the build fails for an unresolved reason;
- required behavior depends on M01-03 or later milestone work;
- implementation requires real production content, approved Bricks content, final visual styling, or migration decisions;
- a governance or architecture contradiction prevents safe continuation.

## Verification Record

Build:
- npm run build completed successfully with Eleventy 3.1.6.
- src/index.njk generated dist/index.html successfully.
- The reusable layout was resolved from src/_includes/base.njk.
- Generated HTML contained inherited layout markup and synthetic page content.

Functional:
- Nunjucks template inheritance was verified.
- npm run dev started successfully.
- Local development server was available at http://localhost:8080/.
- HTTP response status was 200.
- Served HTML contained "Phase 01 Foundation" and "Nunjucks layout inheritance verified."

Regression:
- The approved src/ -> dist/ build boundary remains unchanged.
- M01-01 Eleventy runtime behavior remains operational.
- No production content, styling, assets, navigation, integrations, or M01-03+ implementation was introduced.
- git diff --check reported no blocking errors.

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

- Complete the M01-02 publication gate before M01-03 begins.

## Handoff

Not generated. A formal milestone handoff is not required while execution remains in the same coordinated context.

## Final Status

COMPLETED

Use COMPLETED only after all applicable acceptance criteria have been verified.