# M02-03B — Hero Mobile Landscape Two-Column Restructure

> **Draft status:** Prepared by Claude (design/technical advisory role) at direct Product Manager request. This is a proposal document, not yet an authoritative phase artifact. Per the established agent-role split for Phase 2 (GPT-5.6 Sol executes/authors phase and milestone specifications; Claude audits), this draft should be reviewed and formally adopted into `docs/phases/phase-02/` by the executing agent before it governs execution. This document does not have direct visibility into the current live `PHASE-02` specification and cannot confirm sequencing/adjacency against it — verify before merging.

## Identification

Phase: 02 — Controlled Reference Migration
Milestone: M02-03B — Hero Mobile Landscape Two-Column Restructure
Status: PROPOSED — not started, pending confirmation of placement in the Phase 02 sequence and formal adoption

Owner: Julián Cely — Product Manager
Executing Agent: TBD (per Phase 2 assignment — GPT-5.6 Sol)
Audit Agent: Claude Code

## Objective

Restructure the Hero layout at the Mobile Landscape breakpoint (reference viewport ~844×390) from the current stacked composition (carousel above, text below/in document flow) to a two-column composition: text column on the left (~40% width), carousel column on the right (~60% width), no gutter between them. This directly resolves the current defect where Hero height (~750px) is roughly double the available viewport height (~390px), forcing scroll before the value proposition is visible. The Header remains unchanged (absolute-positioned overlay), which makes the full viewport height available to the two-column composition beneath it. Coverflow side slides are permitted to visually extend into the text column, and coverflow depth may be reduced as needed to avoid vertical clipping — both accepted as intentional design decisions, not defects.

## Origin and Decisions Already Made

This milestone originates from product feedback on the Hero UX/UI review's Mobile Landscape finding (Hero height nearly 2× viewport height). It is a structural layout change at this breakpoint only, not a preservation of the Bricks reference behavior at this breakpoint — recorded here for traceability, consistent with ADR-002's migration constraint requiring explicit authorization for departures from validated reference behavior.

Decisions confirmed in the originating conversation:

- **Header behavior: confirmed overlay.** The Header remains absolutely positioned over the Hero composition; it does not consume flow height. The full ~390px viewport height is available to the two-column layout beneath/behind it.
- **Column split: 40% text / 60% carousel, no gap.** No gutter is enforced between the two columns.
- **Intentional bleed: coverflow side slides may visually extend into the text column.** This is an approved design choice, not a containment bug — the effect is meant to read as borderless/merged rather than as two strictly separated regions.
- **Legibility over fixed values: darkening, not just opacity reduction, is required** wherever carousel imagery falls behind or near text, so text stays readable regardless of which slide image is present. The exact treatment (gradient overlay, per-slide tint, or both) is an implementation-time decision, governed by the contrast acceptance criterion below — no fixed preset value is prescribed here, consistent with the project's evidence-based testing culture (do not invent a threshold; measure against the real rendered result).
- **Coverflow depth flattening accepted.** If avoiding vertical clipping requires reducing Z-axis translation/rotation to the point that the 3D effect reads flatter than on Desktop/Tablet/Portrait, that trade-off is explicitly accepted for this breakpoint only.

## Required Inputs

- Hero base implementation, functionally complete and staged (as covered in the Hero UX/UI review)
- Confirmation of the exact CSS breakpoint/media query currently classifying "Mobile Landscape" in the codebase (reference viewport ~844×390 used throughout this document; exact boundary to be confirmed during execution, not assumed)
- This document formally adopted into the Phase 02 artifact tree by the executing agent

## Scope

### In Scope

- Layout restructure scoped exclusively to the Mobile Landscape breakpoint
- Two-column composition: text column ~40% width (left, left-aligned content), carousel column ~60% width (right), no gap/gutter between columns
- Text column contains the persistent H1 and the dynamic slide title, using the full available vertical height of the breakpoint rather than bottom-anchored absolute positioning (as used in the Desktop/Tablet pattern)
- Carousel column sized to use the full available vertical height beneath the Header overlay (~390px reference, minus only whatever top/bottom safe margin is needed to prevent slide clipping)
- Coverflow side (non-active) slides permitted to visually extend into the text column area — no hard containment boundary between columns
- Darkening/legibility treatment applied wherever carousel imagery renders behind or near the text column, tuned and verified against the contrast acceptance criterion below
- Coverflow Z-axis depth (translation/rotation) reduced as needed, specific to this breakpoint, to prevent slides from clipping at the top or bottom edge of the viewport

### Out of Scope

- Any change to Header sizing, positioning, or styling (already validated; confirmed unchanged — overlay behavior)
- Any change to Desktop, Tablet, or Mobile Portrait Hero geometry, column structure, or text positioning
- The cursor/reveal pointer interaction layer and mobile affordance icon (tracked in M02-03C, which depends on this milestone completing first for this breakpoint)
- Autoplay timing, pagination styling/behavior, slide content, or slide count (unchanged, already validated elsewhere)
- Any new CTA element (flagged separately in the Hero UX/UI review as an unapproved product decision)

## Dependencies

- Hero base implementation staged and stable
- Confirmation of the actual CSS breakpoint boundary for Mobile Landscape in the current codebase

## Tasks

Listed for scoping purposes; execution order is the executing agent's determination, not prescribed here.

1. Confirm the exact media query / breakpoint boundary currently used for Mobile Landscape classification.
2. Implement the two-column container structure (40% text / 60% carousel, no gutter) scoped to that breakpoint only.
3. Reposition text content (H1 + dynamic title) into the left column, using full available vertical height instead of bottom-anchored absolute positioning.
4. Resize/reposition the carousel column to use full available vertical height beneath the Header overlay.
5. Adjust coverflow configuration (Z-axis depth, and any offset needed) for this breakpoint so side slides visually extend into the text column without vertical clipping.
6. Implement the darkening/legibility treatment behind text, tuned iteratively against the contrast acceptance criterion using actual slide imagery.
7. Verify against real device viewport dimensions, not only the reference 844×390 value.

## Deliverables

- Updated Hero component styles/markup implementing the two-column Mobile Landscape layout
- Verification evidence per Acceptance Criteria below

## Acceptance Criteria

A milestone is not complete until every criterion below has been verified with observable evidence, per `docs/TESTING-PROTOCOL.md`.

- Total Hero height at the Mobile Landscape breakpoint does not exceed the viewport height — no forced vertical scroll to see the complete Hero — verified against real device viewport dimensions, not only the ~844×390 reference figure.
- Text column renders at ~40% width, left-aligned; carousel column at ~60% width; no visible gap between them.
- H1 and the dynamic slide title both render fully within the text column without unintended clipping or awkward line-wrapping, verified using the actual approved copy (not placeholder text).
- Coverflow side slides may visually extend into the text column; wherever slide imagery renders directly behind or near text, the computed text contrast ratio is verified ≥ 4.5:1 (WCAG AA, normal text) against the actual rendered background — tested across all five slides, not assumed from a single case.
- No slide image is clipped at the top or bottom edge of the viewport. If coverflow depth reduction is required to satisfy this, the resulting reduced-depth appearance is accepted per the confirmed decision above and does not itself count as a defect.
- Header sizing, position, and overlay behavior remain unchanged from the already-validated implementation.
- No regression to autoplay timing or pagination appearance/behavior at this breakpoint.
- No regression to Desktop, Tablet, or Mobile Portrait Hero geometry.

## Testing Applicability Matrix

| Area | Applicability | Notes |
|---|---|---|
| Build | Applicable | Standard build verification |
| Functional | Applicable | Two-column layout, coverflow bleed behavior, and legibility treatment each verified |
| Responsive | Applicable | Scoped exclusively to the Mobile Landscape breakpoint; verified not to regress adjacent breakpoints |
| SEO | Not applicable | Layout/visual change only; no change to indexable content or markup semantics |
| Accessibility | Applicable | Text contrast ratio against carousel bleed-through is the primary accessibility concern for this milestone |
| Performance | Applicable | Confirm no LCP/CLS regression introduced by the restructured layout |
| Security | Not applicable | No dependency or secret exposure surface |
| Integrations | Not applicable | No external service dependency |
| Regression | Applicable | Verified against Desktop, Tablet, and Mobile Portrait Hero geometry, and against Header behavior |

## Open Questions / Decisions Required

- Exact CSS breakpoint/media query boundary for "Mobile Landscape" — to be confirmed against the current codebase, not assumed from the ~844×390 reference figure alone.
- Exact darkening technique (gradient overlay vs. per-slide tint vs. both) — implementation-time decision, governed by the contrast acceptance criterion, not fixed here.
- Confirmation of this milestone's actual placement/numbering within the live `PHASE-02` specification.

## Findings

None recorded.

## Bugs

None recorded.

## Pending Items

- Formal adoption of this document into `docs/phases/phase-02/` by the executing agent.
- Confirmation of the real breakpoint boundary before implementation begins.

## Handoff

Not generated. This document is a proposal pending formal adoption.

## Final Status

PROPOSED — NOT STARTED
