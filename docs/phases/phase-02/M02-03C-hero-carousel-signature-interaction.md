# M02-03C — Hero Carousel Signature Interaction

> **Renumbering note:** This document was originally issued as `M02-03B`. The Product Manager reassigned letters so that the Mobile Landscape structural restructure is `M02-03B` and this interaction-layer document is `M02-03C`. This file supersedes the prior `M02-03B` version under the new identifier — no content changed except identification and the dependency note below.

## Identification

Phase: 02 — Controlled Reference Migration
Milestone: M02-03C — Hero Carousel Signature Interaction
Status: COMPLETED

Owner: Julián Cely — Product Manager
Executing Agent: OpenAI GPT-5.6 Sol
Audit Agent: Claude Code

## Dependency (added at renumbering)

**This milestone depends on M02-03B (Hero Mobile Landscape Two-Column Restructure) completing first, specifically for the Mobile Landscape breakpoint.** M02-03B changes the Hero's layout structure and carousel container geometry at that breakpoint (stacked → two-column, altered column bounds, coverflow depth retuned). The touch/coarse-pointer affordance icon in this milestone (Scope In, mobile path) is positioned relative to the carousel container bounds — those bounds are not final until M02-03B ships for that breakpoint. Desktop/pointer-fine behavior in this milestone has no dependency on M02-03B. Mobile Landscape uses the touch/coarse-pointer autonomous animation path, positioned against the carousel bounds finalized by M02-03B.

## Objective

Add an optional, brand-reinforcing pointer/touch interaction layer to the Hero carousel, without altering any previously validated Hero composition, geometry, or content. On pointer-capable devices, replace the default cursor with an animated fan-blade ("aspa") icon while inside the carousel bounds, and reveal a sharper version of the underlying slide image within a radius around the pointer, with a fading "foam trail" as the pointer moves and a self-playing idle animation when there is no pointer activity. On touch devices, the aspa runs an autonomous reveal-and-foam animation without following the user's finger or interfering with swipe/scroll. Additionally, scope all Hero carousel links to the rotating title text only, removing link behavior from the photo/slide area so drag and navigation don't conflict.

This milestone is additive interaction design. It does not modify the Hero composition, breakpoint geometry, coverflow configuration, autoplay behavior, or any item already reviewed and approved in the Hero UX/UI review — except where M02-03B has explicitly changed Mobile Landscape geometry, per the dependency above.

## Origin and Decisions Already Made

This milestone originates from product feedback during review of the Hero UX/UI recommendations, not from the original reference-extraction workflow. It introduces a new interaction not present in the Bricks reference and is therefore explicit new scope, not a preservation of validated behavior — recorded here for traceability.

Decisions confirmed in the originating conversation:

- **Mobile/touch path: autonomous signature animation.** The original static affordance decision was superseded during implementation by Product Manager approval. On touch/coarse-pointer devices the aspa now moves autonomously within the carousel, accompanied by reveal and foam effects, without following the user's finger or interfering with swipe/scroll.
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
- Touch/coarse-pointer devices (including Mobile Landscape): autonomous aspa movement with reveal and foam effects; no finger-following logic and no interference with native swipe/scroll behavior
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
- On touch/coarse-pointer devices, no finger-following pointer-tracking logic executes; the aspa moves autonomously with reveal and foam effects inside the carousel bounds, including Mobile Landscape, while native touch/scroll/swipe behavior remains unaffected.
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

NONE — implementation details were resolved during execution and subsequent PM-approved refinement cycles.
## PM-Approved Post-Validation Hero Refinements

The following refinements were approved by the Product Manager after the original M02-03C interaction scope was implemented. They are recorded here as later approved Hero evolution and must not be represented as behavior observed from the Bricks reference.

### Mobile Portrait Composition

State: PM APPROVED

- The active carousel slide begins at the top of the Hero composition with a consistent approximately 12px visual margin at top, left, and right.
- Header logo and menu trigger remain fixed/overlaid above the carousel with higher stacking order.
- The rotating editorial title remains a non-heading `div`; the stable service proposition remains the Hero `h1`.
- The rotating title and Hero `h1` are positioned inside the active slide in Mobile Portrait.
- The combined text block starts approximately at the beginning of the lower third of the slide.
- Text is left aligned.
- Mobile Portrait rotating-title typography was reduced to better accommodate long labels such as "¿Cómo trabajamos?".
- The `h1` width was increased to approximately 250px so the service proposition normally resolves in two lines rather than three.
- Pagination is vertical on the right side of the slide.
- Pagination bullets use increased vertical spacing.
- The autoplay control is visually separated below the pagination group.
- Pagination/autoplay alignment was refined toward the right edge while preserving the approved visual axis with the menu trigger.
- The autonomous aspa/reveal/foam interaction remains intact and was not removed by these layout changes.

### Hero Contact CTAs

State: PM APPROVED

- A dedicated `hero-cta.njk` component was added.
- The CTA component is rendered inside `#sm-hero-carousel`.
- Mobile Portrait displays two equal-width CTAs side by side at the bottom of the active slide.
- WhatsApp is the left CTA.
- Telephone is the right CTA.
- Both retain the approved compact glassmorphism treatment.
- WhatsApp visible primary label: `WhatsApp`.
- WhatsApp secondary label: `Atención inmediata`.
- Telephone visible primary label: `Llámanos ahora`.
- Telephone secondary label: `(56) 4795-7364`.
- WhatsApp target uses the approved direct `wa.me` service-diagnostic message.
- Telephone target uses `tel:+525647957364`.

### Tablet Regression Refinement

State: PM APPROVED

- At the 992–1024px Tablet breakpoint, the Hero content block uses `bottom: 82px`.
- This value supersedes the earlier inherited 24px position and the intermediate 42px test value.
- Desktop, Mobile Landscape, and Mobile Portrait were revalidated after this adjustment.

### Responsive Regression Result

State: OBSERVED / PM APPROVED

Final visual regression after the Mobile Portrait and CTA work:

- Desktop: PASS
- Tablet: PASS
- Mobile Landscape: PASS
- Mobile Portrait: PASS
- Bottom mobile navigation remains hidden outside its Mobile Portrait breakpoint.
- Aspa interaction remains present after the responsive changes.

### Mobile Bottom Navigation Relationship

State: PM APPROVED

A new mobile Bottom Navigation Bar with center FAB was approved during the same refinement cycle. It is not part of the original Hero interaction scope and is owned by M02-04 / mobile navigation architecture.

Approved actions:

- Servicios
- Cobertura
- WhatsApp — center FAB
- Llamar
- Agendar visita

Approved future section targets:

- `#servicios`
- `#cobertura`
- `#agendar-diagnostico`

WhatsApp and telephone remain direct actions.

The approved mobile shell architecture is:

`app-shell → page-scroll → bottom-nav → panel`

with dynamic viewport handling, reserved bottom navigation space, safe-area support, and a centered FAB/notch treatment.

This navigation must be documented separately as a PM-approved Menu deviation/evolution under M02-04 and in the project architecture documentation.

## Findings

None recorded.

## Bugs

None recorded.

## Pending Items

NONE

Validation note:
- Link scoping was completed and validated during implementation.
- Responsive regression was validated across Desktop, Tablet, Mobile Landscape, and Mobile Portrait.
- Performance remains governed by `docs/TESTING-PROTOCOL.md`: no pass threshold is invented where none has been approved. No observable Hero regression was identified during Phase 2 validation.
## Handoff

Milestone completed and incorporated into the validated Phase 02 Hero implementation. Its Mobile Landscape dependency on M02-03B is satisfied, the aspa interaction is integrated, and subsequent PM-approved Hero refinements are documented in this artifact.
