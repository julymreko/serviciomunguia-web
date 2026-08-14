# Reference-Site Extraction Workflow

## Purpose

Provide a repeatable repository-based method for extracting approved reference-site sections before reconstruction.

The workflow separates observable evidence from interpretation and prohibits invention of missing details.

## Evidence States

Every material field must use one of these states:

- OBSERVED
- PM APPROVED
- UNKNOWN
- NOT APPLICABLE

Assumptions are not evidence.

## Workflow

1. Identify the exact reference section and source.
2. Record the reference URL and viewport.
3. Capture observable evidence before interpretation.
4. Document content hierarchy.
5. Document DOM / structural hierarchy.
6. Document layout, spacing, typography, colors, and visual treatment.
7. Document assets and media.
8. Document responsive behavior by viewport.
9. Document interactive behavior and states.
10. Document accessibility observations.
11. Document SEO-relevant static content.
12. Document technical implementation observations and dependencies.
13. Record all unknown, ambiguous, contradictory, or unverifiable details explicitly.
14. Record every PM-approved deviation from the reference.
15. Evaluate reconstruction readiness.

## No-Invention Rule

Agents must not invent or silently infer missing reference details.

If a reconstruction-critical value is UNKNOWN, reconstruction must STOP until evidence or PM approval resolves it.

## Evidence References

Material claims should reference applicable evidence such as reference URL, viewport, screenshot, DOM inspection, computed style, asset reference, interaction observation, or PM-provided specification.

## PM Deviations

Any approved departure from the reference must record the observed behavior, approved replacement behavior, PM approval, and reason or context when provided.

A deviation must never be presented as observed reference behavior.

## Reconstruction Readiness

READY FOR RECONSTRUCTION requires every reconstruction-critical field to be OBSERVED, PM APPROVED, or NOT APPLICABLE.

Any reconstruction-critical UNKNOWN value results in NOT READY FOR RECONSTRUCTION.

## Phase 01 Limitation

Phase 01 validates this workflow and template only.

No real Bricks section extraction is required in M01-06.

The first real-world validation against staging.serviciomunguia.com is deferred to Phase 2.
