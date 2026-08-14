# M01-06 — Reference-Site Extraction Framework

## Status

COMPLETED

## Objective

Establish a reusable, repository-based framework for extracting and documenting approved reference-site sections before reconstruction begins in later phases.

M01-06 creates the extraction method and template only.

It does not perform or validate a real Bricks section extraction.

Real-world validation against staging.serviciomunguia.com is explicitly deferred to Phase 2.

## Preconditions

- Phase 01 is IN PROGRESS.
- M01-05 is COMPLETED and published.
- HEAD equals origin/main.
- Working tree is clean.
- The Phase 01 foundation remains operational.
- The migration principle remains authoritative: approved reference-site implementation must be audited and extracted before reconstruction.

## In Scope

- Define the minimum repeatable workflow for reference-site extraction.
- Define the minimum evidence required before rebuilding an approved section.
- Create a reusable extraction template stored in the repository.
- Capture structural, content, responsive, asset, typography, interaction, accessibility, and implementation observations as explicit fields.
- Define how unknown, ambiguous, contradictory, or unverifiable details are recorded.
- Define the rule that agents must not invent missing reference-site behavior.
- Define how PM-approved deviations from the reference are recorded.
- Ensure the framework can be reused in Phase 2 section-by-section.
- Self-verify that the framework is complete and internally consistent.
- Record observable verification evidence.
- Update Phase 01 and PROJECT-STATE after technical verification.

## Out of Scope

- Real extraction of the Bricks reference site.
- Browser inspection of staging.serviciomunguia.com.
- Screenshots or measurement of real sections.
- Rebuilding any real section.
- Production copy extraction.
- Production asset extraction.
- CSS migration.
- JavaScript migration.
- Responsive reconstruction.
- Final accessibility remediation.
- SEO migration.
- Cloudflare changes.
- Production deployment.
- Any Phase 2 implementation.
- Any M01-07 audit work.

## Framework Principle

Reference extraction must precede reconstruction.

The framework must preserve observable facts separately from interpretation.

Agents must not infer or invent missing design, behavior, content, responsive rules, assets, states, or implementation details.

If a required value is unknown, ambiguous, contradictory, or not observable, record it explicitly and STOP when that missing information prevents safe reconstruction.

## Required Extraction Categories

The reusable framework must include explicit fields for:

1. Reference identification
2. Section purpose
3. Content hierarchy
4. DOM / structural hierarchy
5. Layout and spacing
6. Typography
7. Colors and visual treatment
8. Assets and media
9. Responsive behavior
10. Interactive behavior and states
11. Accessibility observations
12. SEO-relevant static content
13. Technical implementation observations
14. Dependencies
15. Unknowns and ambiguities
16. PM-approved deviations
17. Evidence references
18. Reconstruction readiness

## Evidence Policy

Every material extraction claim must be attributable to observable evidence.

Evidence may include, when applicable in later phases:

- reference URL;
- viewport;
- screenshot;
- browser inspection;
- computed style observation;
- DOM observation;
- asset URL or file reference;
- interaction observation;
- PM-provided design specification.

The framework must distinguish:

- OBSERVED
- PM APPROVED
- UNKNOWN
- NOT APPLICABLE

Assumptions are not accepted as evidence.

## Reconstruction Readiness Rule

A section may be marked READY FOR RECONSTRUCTION only when all reconstruction-critical fields are either:

- OBSERVED;
- PM APPROVED; or
- explicitly NOT APPLICABLE.

If a reconstruction-critical field remains UNKNOWN, the section is NOT READY and implementation must stop until the missing decision or evidence is resolved.

## Phase 01 Limitation

M01-06 does not require a real reference-site extraction.

The framework/template itself is the Phase 01 deliverable.

The first real-world validation of this framework against staging.serviciomunguia.com is deferred to Phase 2.

The absence of a real extraction in M01-06 is an accepted Phase 01 limitation and is not a failure condition.

## Required Deliverables

- Repository documentation defining the extraction workflow.
- Reusable reference-section extraction template.
- Explicit evidence-state vocabulary.
- Reconstruction readiness rule.
- Explicit unknown / ambiguity handling.
- Explicit PM-deviation handling.
- Completed M01-06 verification record.
- Updated Phase 01 and PROJECT-STATE after technical verification.

## Testing Classification

### Build

N/A - M01-06 creates documentation and extraction framework artifacts only and does not modify the Eleventy build.

### Functional

APPLIES

Verify the framework is usable as a complete section-extraction checklist/template and contains all required extraction categories.

### Responsive

N/A - M01-06 defines how responsive behavior will be captured but does not implement or validate a real responsive section.

### SEO

N/A - M01-06 defines a field for SEO-relevant static content but does not perform SEO implementation or migration.

### Accessibility

N/A - M01-06 defines accessibility observation fields but does not perform accessibility remediation or real-section validation.

### Performance

N/A - M01-06 introduces no runtime code, assets, or performance-sensitive implementation.

### Security

N/A - M01-06 introduces no credentials, user input, API, authentication, or security boundary.

### Integrations

N/A - M01-06 connects to no external service and does not inspect the live reference site during Phase 01.

### Regression

APPLIES

Verify M01-01 through M01-05 remain unchanged and no real migration or Phase 2 implementation is introduced.

## PASS Criteria

M01-06 may be marked COMPLETED only when:

1. All preconditions remain satisfied.
2. A reusable extraction workflow exists in the repository.
3. A reusable section extraction template exists in the repository.
4. The template includes all required extraction categories.
5. The evidence vocabulary includes OBSERVED, PM APPROVED, UNKNOWN, and NOT APPLICABLE.
6. The framework explicitly prohibits invention of missing reference details.
7. The framework explicitly defines STOP behavior for reconstruction-critical UNKNOWN values.
8. The framework includes PM-approved deviation recording.
9. The framework includes evidence-reference fields.
10. The framework includes an explicit reconstruction-readiness result.
11. The framework clearly records that real reference-site validation is deferred to Phase 2.
12. No real Bricks extraction or reconstruction is performed.
13. No M01-07 or Phase 2 implementation is introduced.
14. M01-01 through M01-05 remain operational and unchanged.
15. All applicable technical and governance verification criteria are satisfied.

## Publication Gate

After M01-06 is marked COMPLETED:

- Commit the validated milestone state.
- Push the commit to origin/main.
- Verify HEAD equals origin/main.
- Verify the working tree is clean.

M01-07 must not begin until this publication gate passes.

## STOP / BLOCKED Conditions

Set M01-06 to BLOCKED and STOP if:

- M01-05 publication state is not synchronized and clean;
- the framework would require performing a real reference-site extraction in Phase 01;
- required extraction categories are undefined;
- the framework permits agents to invent or silently infer missing reference details;
- a reconstruction-readiness rule cannot be defined without an unresolved PM decision;
- implementation drifts into real migration or Phase 2 work;
- a governance or architecture contradiction prevents safe continuation.

## Verification Record

Functional:
- A reusable repository-based reference extraction workflow was created.
- A reusable reference-section extraction template was created.
- The template contains all 18 required extraction categories.
- The evidence vocabulary includes OBSERVED, PM APPROVED, UNKNOWN, and NOT APPLICABLE.
- The workflow explicitly prohibits invention or silent inference of missing reference details.
- Reconstruction-critical UNKNOWN values require STOP until evidence or PM approval resolves them.
- PM-approved deviations are recorded separately from observed reference behavior.
- Evidence-reference fields are included.
- Reconstruction readiness is explicitly classified as READY FOR RECONSTRUCTION or NOT READY FOR RECONSTRUCTION.

Phase 01 Limitation:
- No real Bricks section extraction was performed.
- No browser inspection of staging.serviciomunguia.com was performed.
- First real-world validation of the framework remains deferred to Phase 2 as approved.

Regression:
- No Eleventy runtime, Nunjucks, asset pipeline, SEO baseline, or Cloudflare implementation files were modified.
- No Phase 2 reconstruction or M01-07 audit implementation was introduced.
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

- Complete the M01-06 publication gate before M01-07 begins.

## Handoff

Not generated. A formal milestone handoff is not required while execution remains in the same coordinated context.

## Final Status

COMPLETED

Use COMPLETED only after all applicable acceptance criteria have been verified.