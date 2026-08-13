# M01-03 — Static Asset Pipeline

## Status

COMPLETED

## Objective

Establish the minimum Eleventy static-asset pipeline required by Phase 01 so files placed in the approved source asset directory are copied predictably into the public dist/ output without introducing production assets or production styling.

## Preconditions

- Phase 01 is IN PROGRESS.
- M01-02 is COMPLETED.
- M01-02 publication gate has passed.
- HEAD equals origin/main.
- Working tree is clean.
- Eleventy remains pinned to 3.1.6.
- The approved build boundary remains src/ -> dist/.

## In Scope

- Establish src/assets/ as the Phase 01 source directory for static assets.
- Configure Eleventy passthrough copying from src/assets/ to dist/assets/.
- Create only minimal synthetic/disposable asset fixtures needed to prove the pipeline.
- Reference a synthetic asset from the synthetic Phase 01 page when required for observable verification.
- Verify npm run build copies assets to the expected public path.
- Verify generated HTML remains valid and the M01-02 Nunjucks layout foundation remains operational.
- Verify the development server can serve the copied synthetic asset successfully.
- Record observable verification evidence.
- Update Phase 01 state after technical verification.
- Complete the publication gate before M01-04 or conditional M01-03.5 begins.

## Out of Scope

- Real production images, logos, fonts, icons, maps, media, or documents.
- Final CSS or JavaScript.
- Bundling, minification, hashing, fingerprinting, optimization, image transformation, compression, or CDN policy.
- Final cache-control policy.
- Bricks reference-site asset extraction.
- Production design tokens.
- Responsive visual implementation.
- SEO implementation.
- Cloudflare deployment, Wrangler, DNS, TLS, Workers, D1, API, Turnstile, or ZeptoMail.
- Any M01-04 or later implementation.

## Approved Asset Boundary

Source static assets:

src/assets/

Generated public assets:

dist/assets/

M01-03 uses Eleventy passthrough copying only.

No additional bundler, asset processor, optimizer, or transformation system is introduced in this milestone.

## Scope Guard

All asset fixtures introduced by M01-03 must be synthetic and disposable.

M01-03 must not introduce or migrate real SERVICIOMUNGUIA.COM assets.

If implementation requires a production asset decision, optimization strategy, cache policy, bundler, image processor, migration decision, or Cloudflare behavior, STOP and request PM direction.

## Required Deliverables

- Eleventy configuration supporting src/assets/ -> dist/assets/ passthrough copying.
- Minimal synthetic asset fixture under src/assets/.
- Successful copied fixture under dist/assets/ after build.
- Observable local HTTP verification of the copied asset.
- Completed M01-03 verification record.
- Updated Phase 01 and project state after technical verification.

## Testing Classification

### Build

APPLIES

Verify npm run build succeeds and copies the synthetic fixture from src/assets/ to dist/assets/.

### Functional

APPLIES

Verify the copied asset is available at its expected local public URL and returns HTTP 200.

### Responsive

N/A - M01-03 does not implement production visual or responsive behavior.

### SEO

N/A - M01-03 does not implement the Phase 01 SEO baseline.

### Accessibility

N/A - M01-03 introduces no production user-interface asset requiring accessibility validation.

### Performance

N/A - Optimization, compression, bundling, hashing, and production performance policy are outside M01-03.

### Security

N/A - M01-03 introduces no secrets, user input, authentication, API, or execution boundary.

### Integrations

N/A - M01-03 connects to no external service.

### Regression

APPLIES

Verify the M01-01 Eleventy runtime and M01-02 Nunjucks layout foundation continue to build and serve correctly.

## PASS Criteria

M01-03 may be marked COMPLETED only when:

1. All preconditions remain satisfied.
2. src/assets/ is established as the source static-asset directory.
3. Eleventy passthrough copying maps src/assets/ to dist/assets/.
4. Only synthetic/disposable fixture assets are introduced.
5. npm run build completes successfully.
6. The synthetic fixture exists at the expected dist/assets/ path.
7. Existing Nunjucks-generated dist/index.html still builds correctly.
8. npm run dev starts successfully.
9. The copied synthetic asset returns HTTP 200 from its expected local URL.
10. M01-01 and M01-02 behavior remain operational.
11. No production asset processing, optimization, bundling, or M01-04+ implementation is introduced.
12. All applicable technical and governance verification criteria are satisfied.

## Publication Gate

After M01-03 is marked COMPLETED:

- Commit the validated milestone state.
- Push the commit to origin/main.
- Verify HEAD equals origin/main.
- Verify the working tree is clean.

The next milestone must not begin until this publication gate passes.

Before M01-04 begins, Cloudflare zone readiness must be checked. If the readiness precondition is not satisfied, execute conditional M01-03.5 first.

## STOP / BLOCKED Conditions

Set M01-03 to BLOCKED and STOP if:

- M01-02 publication state is not synchronized and clean;
- the approved src/ -> dist/ boundary would need to change;
- static asset copying requires an undefined architecture decision;
- build or local asset serving fails for an unresolved reason;
- implementation requires production assets or asset-processing policy;
- implementation requires M01-04 or later work;
- a governance or architecture contradiction prevents safe continuation.

## Verification Record

Build:
- npm run build completed successfully with Eleventy 3.1.6.
- Eleventy reported one copied asset and one generated page.
- src/assets/pipeline-proof.txt was copied to dist/assets/pipeline-proof.txt.
- dist/index.html continued to generate successfully from the M01-02 Nunjucks foundation.

Functional:
- npm run dev started successfully.
- The local development server was available at http://localhost:8080/.
- /assets/pipeline-proof.txt returned HTTP 200.
- The served asset contained the expected synthetic pipeline proof content.

Regression:
- The approved src/ -> dist/ build boundary remains unchanged.
- M01-01 runtime behavior remains operational.
- M01-02 Nunjucks layout behavior remains operational.
- No production assets, optimization, bundling, Cloudflare behavior, or M01-04+ implementation was introduced.
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

- Complete the M01-03 publication gate.

## Handoff

Not generated. A formal milestone handoff is not required while execution remains in the same coordinated context.

## Final Status

COMPLETED

Use COMPLETED only after all applicable acceptance criteria have been verified.