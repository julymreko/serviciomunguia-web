# M02-03C — Hero Carousel Signature Interaction

> **Draft status:** Prepared by Claude (design/technical advisory role) at direct Product Manager request. This is a proposal document, not yet an authoritative phase artifact. Per the established agent-role split for Phase 2 (GPT-5.6 Sol executes/authors phase and milestone specifications; Claude audits), this draft should be reviewed and formally adopted into `docs/phases/phase-02/` by the executing agent before it governs execution.
>
> **Renumbering note:** This document was originally issued as `M02-03B`. The Product Manager reassigned letters so that the Mobile Landscape structural restructure is `M02-03B` and this interaction-layer document is `M02-03C`. This file supersedes the prior `M02-03B` version under the new identifier — no content changed except identification and the dependency note below.

## Identification

Phase: 02 — Controlled Reference Migration
Milestone: M02-03C — Hero Carousel Signature Interaction
Status: PROPOSED — not started, pending confirmation of placement in the Phase 02 sequence and formal adoption

Owner: Julián Cely — Product Manager
Executing Agent: TBD (per Phase 2 assignment — GPT-5.6 Sol)
Audit Agent: Claude Code

## Dependency (added at renumbering)

**This milestone depends on M02-03B (Hero Mobile Landscape Two-Column Restructure) completing first, specifically for the Mobile Landscape breakpoint.** M02-03B changes the Hero's layout structure and carousel container geometry at that breakpoint (stacked → two-column, altered column bounds, coverflow depth retuned). The touch/coarse-pointer affordance icon in this milestone (Scope In, mobile path) is positioned relative to the carousel container bounds — those bounds are not final until M02-03B ships for that breakpoint. Desktop/pointer-fine behavior in this milestone has no dependency on M02-03B, since Mobile Landscape is a touch context and receives the static-icon path, not the pointer-tracking path.

## Objective

Add an optional, brand-reinforcing pointer/touch interaction layer to the Hero carousel, without altering any previously validated Hero composition, geometry, or content. On pointer-capable devices, replace the default cursor with an animated fan-blade ("aspa") icon while inside the carousel bounds, and reveal a sharper version of the underlying slide image within a radius around the pointer, with a fading "foam trail" as the pointer moves and a self-playing idle animation when there is no pointer activity. On touch devices, use the lowest-cost option: a static affordance icon indicating the carousel is draggable, without pointer-following logic. Additionally, scope all Hero carousel links to the rotating title text only, removing link behavior from the photo/slide area so drag and navigation don't conflict.

This milestone is additive interaction design. It does not modify the Hero composition, breakpoint geometry, coverflow configuration, autoplay behavior, or any item already reviewed and approved in the Hero UX/UI review — except where M02-03B has explicitly changed Mobile Landscape geometry, per the dependency above.

## Origin and Decisions Already Made

This milestone originates from product feedback during review of the Hero UX/UI recommendations, not from the original reference-extraction workflow. It introduces a new interaction not present in the Bricks reference and is therefore explicit new scope, not a preservation of validated behavior — recorded here for traceability.

Decisions confirmed in the originating conversation:

- **Mobile/touch path: Option (b) — static affordance icon.** A finger-following "ghost" icon during active drag (Option a) was considered and explicitly rejected as more costly for equivalent or lower UX value on touch devices. The Product Manager selected the least-costly option as most appropriate for mobile UX.
- **Technique: CSS mask + JS pointer tracking, not canvas/WebGL.** Chosen to stay consistent with ADR-001 (low conceptual lock-in, minimal client-side complexity) and to avoid introducing a rendering dependency for a decorative effect.
- **Link scoping: text-only.** All Hero carousel navigation links are scoped to the rotating title text element. The photo/slide area is a pure swipe/drag surface with no link behavior.

## Required Inputs

- Hero base implementation, functionally complete and staged (coverflow, breakpoints, pagination, autoplay — as covered in the Hero UX/UI review)
- M02-03B completed for the Mobile Landscape breakpoint (per dependency above)
- Fan/aspa icon asset, vector format preferred (SVG), matching the brand mark already established for the logo
- Confirmed motion-reduction handling policy for the project (if not yet defined elsewhere, this milestone defines it for this component)
- This document formally adopted into the Phase 02 artifact tree by the executing agent

## Scope

### In Scope

- Pointer-fine/hover-capable devices only: custom cursor (rotating aspa icon), active while the pointer is within the carousel bounds, restored to default outside it
- Radial reveal effect: a duller/lower-fidelity version of each slide sits above the sharp version; a CSS `mask-image` radial gradient centered on pointer position (updated via CSS custom properties, `requestAnimationFrame`-throttled) reveals the sharp image within a radius around the pointer
- Foam-trail behavior: the reveal fades/decays over roughly 600–1000ms as the pointer moves away from a given point, rather than snapping instantly — exact technique (single decaying mask vs. multiple stacked trailing masks) is an implementation decision, not prescribed here
- Idle state: when there is no pointer activity, the reveal effect animates on its own in a soft, continuous loop, so the section reads as alive without requiring interaction
- Touch/coarse-pointer devices (including Mobile Landscape): a static, persistent aspa affordance icon signaling the carousel is draggable — no pointer-following logic, no reveal-mask tracking; positioned relative to the carousel container bounds as finalized by M02-03B
- Link scoping: interactive `<a>`/link behavior exists only on the rotating title text element; the photo/slide container has no link behavior
- `prefers-reduced-motion: reduce`: disables the custom cursor, the reveal mask animation, and the idle loop entirely; the carousel falls back to its default validated appearance
- Feature gating via `@media (hover: hover) and (pointer: fine)` so touch devices never execute pointer-tracking code

### Out of Scope

- Canvas- or WebGL-based rendering of the effect (explicitly rejected in favor of the CSS mask approach)
- Finger-following ghost icon on touch devices (Option a — explicitly rejected)
- Any change to Hero composition, breakpoint geometry, coverflow configuration, autoplay timing, pagination styling, or typography already covered by the Hero UX/UI review — Mobile Landscape geometry is owned by M02-03B, not by this milestone
- Any change to Header, Menu, Footer, or any component outside the Hero
- Addition of a primary CTA button (flagged separately in the Hero UX/UI review as a distinct, unapproved product decision — not part of this milestone)
- Pause/play autoplay control and pagination touch-target sizing (tracked separately as accessibility improvements from the Hero UX/UI review — not duplicated here)

## Dependencies

- Hero base implementation staged and stable
- M02-03B completed for Mobile Landscape (structural dependency, see above)
- Aspa vector asset provided and approved
- M01-03 static asset pipeline (existing — no changes required)
- Project-wide `prefers-reduced-motion` handling convention, if one exists elsewhere; if not, this milestone establishes it for this component only

## Tasks

Listed for scoping purposes; execution order is the executing agent's determination, not prescribed here.

1. Confirm/obtain the aspa vector asset for both the cursor and the mobile affordance icon.
2. Implement the pointer-fine feature-detection gate.
3. Implement the custom cursor element, confined to the carousel bounds.
4. Implement the mask-based reveal effect, pointer-driven, `requestAnimationFrame`-throttled.
5. Implement the foam-trail fade/decay behavior.
6. Implement the idle/no-pointer-activity animation state.
7. Implement the static mobile affordance icon (Option b), positioned against M02-03B's finalized carousel bounds for Mobile Landscape.
8. Scope all Hero carousel link behavior to the title text element only; remove link behavior from the photo/slide container.
9. Implement full `prefers-reduced-motion` disablement path.
10. Cross-browser and cross-device verification.

## Deliverables

- Updated Hero component styles/markup implementing the interaction layer
- Aspa icon asset integrated into the static asset pipeline
- Verification evidence per Acceptance Criteria below

## Acceptance Criteria

A milestone is not complete until every criterion below has been verified with observable evidence, per `docs/TESTING-PROTOCOL.md`.

- On pointer-fine/hover-capable devices, moving the pointer within the carousel bounds shows the custom aspa cursor and a reveal effect that visibly tracks pointer position with no observable jank; no forced layout reflow attributable to the effect during interaction.
- When the pointer leaves the carousel, or after a defined period without pointer movement, the effect returns to its idle looping animation.
- On touch/coarse-pointer devices, no pointer-tracking JavaScript executes; the static aspa affordance icon is visible and correctly positioned against the carousel bounds (including the M02-03B two-column bounds at Mobile Landscape); native browser touch/scroll/cursor behavior is unaffected.
- With `prefers-reduced-motion: reduce` set, the custom cursor, reveal-mask animation, and idle loop are fully disabled; the carousel renders in its default validated appearance with no residual effect artifacts.
- Clicking or tapping the photo/slide area does not trigger navigation. Only the rotating title text is a clickable/tappable link — confirmed by DOM inspection (link element scoped to the text node only) and by direct interaction test.
- No regression against previously validated Hero acceptance criteria: coverflow behavior, autoplay timing, pagination appearance/behavior, and breakpoint geometry remain unchanged, except where M02-03B has explicitly changed Mobile Landscape geometry.
- No measurable negative impact on Hero LCP; the effect must not block, delay, or compete with the initial slide image render.
- No new external or CDN dependency is introduced; implementation uses CSS and vanilla JavaScript only, consistent with ADR-001.

## Testing Applicability Matrix

| Area | Applicability | Notes |
|---|---|---|
| Build | Applicable | Standard build verification |
| Functional | Applicable | Pointer, touch, and reduced-motion paths each verified independently |
| Responsive | Applicable | Desktop/pointer-fine path vs. touch path are functionally distinct, not just resized; Mobile Landscape verified against M02-03B's finalized geometry |
| SEO | Not applicable | Decorative interaction layer; no content or markup change affecting indexable content |
| Accessibility | Applicable | `prefers-reduced-motion` compliance, keyboard-user unaffected verification, link-scoping improves predictable target behavior |
| Performance | Applicable | LCP and INP impact must be measured, not assumed |
| Security | Not applicable (expected) | Confirm no new dependency or secret exposure introduced |
| Integrations | Not applicable | No external service dependency |
| Regression | Applicable | Verified against Hero UX/UI review's approved criteria and M02-03B's finalized Mobile Landscape geometry |

## Open Questions / Decisions Required

- Exact foam-trail rendering technique (single decaying mask vs. multiple stacked trailing masks) — implementation detail; can be resolved during execution unless the Product Manager wants to pre-approve a specific approach.
- Source and final format of the aspa vector asset — not yet provided.
- Confirmation of this milestone's actual placement/numbering within the live `PHASE-02` specification — this document was authored without direct visibility into that file's current state.

## Findings

None recorded.

## Bugs

None recorded.

## Pending Items

- Formal adoption of this document into `docs/phases/phase-02/` by the executing agent.
- Aspa vector asset delivery.
- Confirmation that M02-03B has shipped before this milestone's Mobile Landscape path is verified.

## Handoff

Not generated. This document is a proposal pending formal adoption.

## Final Status

PROPOSED — NOT STARTED
