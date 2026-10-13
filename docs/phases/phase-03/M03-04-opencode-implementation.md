# M03-04 — OpenCode Implementation Specification (PM EXECUTION AUTHORIZED)

## Identification

Phase: 03 — CÓMO TRABAJAMOS
Milestone: M03-04 — OpenCode Implementation
Status: IN PROGRESS
Owner / Approver: Julián Cely — Product Manager
Proposed executing agent: OpenCode
Audit agent: Claude Code (independent testing M03-05; formal audit M03-06)
Draft basis: repository HEAD `a06f10f6710e205f8aacd5fd47d133ed081d12e2` (2026-10-11)

**AUTHORIZATION RECORD — PM APPROVED (2026-10-11):** Following publication of the specification and closure of M03-03 in commit `63c25ec1916533fe631f78d84960886b8c9bdfb9`, the Product Manager explicitly authorized M03-04 execution through OpenCode in the project conversation, under the final approved implementation prompt. This authorization is to be registered in the repository before source work resumes. After publication and renewed clean Git preflight, OpenCode may implement **only** the frozen M03-04 source-file allow-list and must obey all tests and STOP conditions. Deployment, M03-05, M03-06, unrelated source edits and governance changes remain NOT AUTHORIZED.

## Purpose and Scope

After separate PM authorization and closure of M03-03, implement only the frozen Cómo trabajamos section. The authoritative product decisions, copy, evidence, motion limits and deviations live in M03-03, M03-02 and the approved extraction. Do not reinterpret staging or change product decisions.

## Source of Truth / Required Reading (in order)

1. `docs/00-START-HERE.md`
2. `docs/PROJECT-STATE.md`
3. `docs/ARTIFACT-CONVENTIONS.md`
4. `docs/CONTEXT-PROTOCOL.md`
5. `docs/phases/PHASE-03-como-trabajamos.md`
6. This approved M03-04 specification (once published and authorized)
7. `docs/reference-extraction/COMO-TRABAJAMOS-EXTRACTION.md`
8. `docs/phases/phase-03/M03-03-pm-approval-scope-freeze.md`
9. `docs/ARCHITECTURE.md` and relevant ADRs (frontend stack, static HTML SEO)
10. `docs/TESTING-PROTOCOL.md`, relevant `docs/tracking/BUGS.md` and `docs/tracking/FINDINGS.md`

M03-02 is a proposal/evidence mapping, not an independent authority to implement rejected or undecided proposals.

## Planning Allow-list — O-08

These permissions are proposed implementation boundaries only, and become executable ONLY after separate PM authorization of M03-04:

| Path | Future permission and limitation |
|---|---|
| `src/_includes/components/process.njk` | Create section component, root class `sm-process`, section id `como-trabajamos` |
| `src/assets/css/main.css` | Add new process-specific CSS block only; no unrelated/global alterations |
| `src/index.njk` | Add process include in physical OnePage order immediately after Hero |
| `src/assets/images/servicio-munguia-tecnico-diagnostico-lavadora-cta.webp` | Read-only reference to existing PM-approved transferred image; no asset replacement |
| `src/assets/images/servicio-munguia-tecnico-diagnostico-lavadora-cta-480.webp` | PM APPROVED for planning only: generate 480 × 384 WebP derivative from unchanged original |
| `src/assets/images/servicio-munguia-tecnico-diagnostico-lavadora-cta-800.webp` | PM APPROVED for planning only: generate 800 × 640 WebP derivative from unchanged original |
| `src/assets/images/servicio-munguia-tecnico-diagnostico-lavadora-cta-1200.webp` | PM APPROVED for planning only: generate 1200 × 960 WebP derivative from unchanged original |
| `src/assets/js/process.js` | PM APPROVED for planning only: dedicated native-ESM module with ten mandatory technical refinements; no implementation authorization |
| `src/_includes/base.njk` | PM APPROVED for planning only: one `type="module"` script reference to `/assets/js/process.js`; no implementation authorization |

Prohibited: any other source files, other components (Header, Hero, Menu, Mobile Navigation), their scripts/styles, dependencies/`package.json`, ADRs, governance, issued audits, original extraction observations, and Phase 02 artifacts. No authorization for extra libraries, frameworks or bundlers. If an integration requires additional files or shared CSS changes, STOP and ask the PM rather than expand the allow-list.

## Frozen Product and Presentation Requirements

- The five process steps and trust strip both remain, preserving approved copy and commercial claims; use HTML present without JavaScript.
- Hierarchy: section H2, steps-group H3, each step H4, trust-strip title H3, CTA-card title H3. Use `section[aria-labelledby]` referencing the H2 ID; `ol > li` for five steps, visual numbering badges hidden from assistive technology to avoid duplicate announcements; decorative graphics hidden appropriately.
- Approved typography: H2 Inter 700 `clamp(21.25px, 3.6vw, 31.25px)`; steps-group heading Inter 700 `clamp(15px, 2.4vw, 20px)`; step H4 Inter 700 `clamp(15px, 2.4vw, 20px)`, line-height 1.25, normal wrapping, `overflow-wrap: normal`, `hyphens: none`.
- Three layouts only: >= 992px five columns; 479–991.98px three plus two; <= 478.98px vertical. Use the project's `.98px` convention; do not invent viewport testing class dimensions.
- Primary CTA href `#agendar-diagnostico` intentionally targets a future form; do not replace with `#contacto` or modify existing Menu/Bottom Navigation. WhatsApp secondary CTA opens new tab `target="_blank" rel="noopener noreferrer"` and must disclose new-tab behavior accessibly.
- Secondary hover: background `#25d366`, text `#111a38`. Focus outline: `#1a2ad3` on light surface and white on dark, separated visibly and contrast-tested.
- CTA image must preserve approved intrinsic dimensions, responsive `srcset` strategy, `loading="lazy"`, `decoding="async"`, documented descriptive alt text, and no-JS rendering; create only the three PM-approved derivative paths listed in the planning allow-list, once implementation is separately authorized.
- Anchor `scroll-margin-top` must be based on measured fixed-Header geometry across all four viewport classes; U-10 is implementation measurement, not a license to invent pixel values.
- No structured data in this section; no unsupported claims or modified warranty copy.

## Approved Motion and Progressive Enhancement

Implement only PM-approved MOT-01–MOT-07, with MOT-02 **one-shot** (never scroll-linked). Approved ranges: content reveal 350–600ms, 12–24px, stagger 60–100ms; connector 600–900ms; badge 200–300ms; CTA image 500–800ms; button transition approximately 0.2s. Scope and triggers follow M03-02 as approved in M03-03.

MOT-03 active-step emphasis applies to Mobile Portrait only. Under reduced motion retain instantaneous/static active-step emphasis without scale/transition; no ARIA current-state indicator. Under `prefers-reduced-motion: reduce` remove CTA translation and animated transitions, keeping instantaneous colors. The section must remain readable, navigable, and fully populated without JavaScript. Use the approved native IntersectionObserver strategy (D-11); do not add scroll-driven CSS dependencies, a new polyfill, or an unsupported minimum browser baseline.

**JavaScript architecture — Proposal A, PM APPROVED for planning only (2026-10-11):** Independent native-ESM `src/assets/js/process.js` with exactly one `<script type="module" src="/assets/js/process.js"></script>` addition to `src/_includes/base.njk`. Independent Claude Code read-only architecture review verified the existing module-per-feature pattern, the section guard convention, Eleventy passthrough and absence of a shared reveal utility. The ten PM-approved technical refinements are mandatory in the future specification:

1. CSS owns all visual motion and transitions; JavaScript only toggles state classes for reveal, one-shot connector, active step and image readiness. MOT-04, MOT-05 and MOT-07 need no separate JS triggers.
2. Gate pre-reveal hidden styles on a successfully enabled JS class such as `.sm-process.is-enhanced`. Default content stays visible without JS or IntersectionObserver; on initialization error clear the enhanced state and ensure all content is visible. On successful one-shot completion, unobserve finished targets and disconnect the reveal observer without reversing already completed reveals.
3. Apply hidden/pre-animation CSS only under `prefers-reduced-motion: no-preference`; on reduced motion show final content and connector states without animation.
4. Do not globally disable `process.js` under reduced motion: MOT-03 active-step detection must continue, with instantaneous emphasis and no scale/transition.
5. Attach the MOT-03 active-step observer only at Mobile Portrait widths (<=478.98px); use a `matchMedia` change listener for resize/orientation; disconnect and clear active state outside portrait. Measure its viewport-center band with respect to the fixed Bottom Navigation rather than inventing geometry.
6. Use one reveal IntersectionObserver for one-shot targets; unobserve targets after reveal and disconnect when finished. No continuous scroll listeners or requestAnimationFrame loop.
7. For MOT-06, gate the image-settle class on `img.complete` or a one-time `load` event, so an unloaded placeholder is not animated.
8. Keep helper functions local to `process.js`. Do not introduce a shared observer module or change the Hero's existing JavaScript.
9. Guard initialization on the existence of `#como-trabajamos` before attaching observers or listeners, following the existing module pattern.
10. Test deep-link/reload at `#como-trabajamos` for a possible flash between first paint and enhancement; document observed behavior and fix only within approved files/scope, or STOP for PM review.

**Boundary:** The O-08 planning approval by itself did not authorize source edits. A subsequent explicit PM execution authorization is recorded above, limited to the frozen allow-list and only actionable after the authorization record is published and clean preflight reconfirmed. M03-03 is COMPLETED (commit `63c25ec`).

## Approved Technical Specifications — Planning Only

**New-tab disclosure — PI-05(c), PM APPROVED (2026-10-11):** Include concise, visibly rendered explanatory text associated with the WhatsApp link indicating that it opens a new tab (for example, “Abre en una nueva pestaña”). The indication must also be exposed in the link's accessible name or equivalent accessible association, without relying on icon-only cues or JavaScript. Preserve the approved `target="_blank" rel="noopener noreferrer"` behavior. The visible-and-accessible textual mechanism is part of the PM-approved scope for authorized M03-04 implementation. If the placement creates a conflict with the frozen reference layout or copy, STOP and request a PM decision rather than silently redesigning.

ANNOTATION — D8 (2026-10-13): The Product Manager superseded only the *visibly rendered* portion of this requirement (see "Implementation PM Decision and Evidence Record — D8" below). The accessible disclosure is preserved through an `aria-label` on the WhatsApp link; `target="_blank"` and `rel="noopener noreferrer"` are unchanged. The original text above is preserved as historical evidence.

**Image srcset — PI-08 / O-08 extension, PM APPROVED for planning (2026-10-11):** Produce exactly three additional WebP derivatives, 480 × 384, 800 × 640, and 1200 × 960, from the existing unchanged 1600 × 1280 original; preserve the 5:4 aspect ratio, framing and visual appearance without cropping. Verify each output's dimensions and inspect its image quality. Record byte sizes and verify the original remains byte-identical. The three explicitly named files in the allow-list above are the only newly permitted image outputs for future planning. Retain the existing original intact. Specify responsive `srcset` and accurate `sizes` against rendered image widths and device pixel density, with a no-JavaScript `<img>` fallback, intrinsic dimensions, `loading="lazy"`, `decoding="async"` and the already approved descriptive alt. No additional derivatives, production dependencies, image-pipeline changes, or image generation are authorized. The three derivatives and only these paths may be created during separately PM-authorized M03-04 execution, after the authorization record is published and clean preflight reconfirmed.

## Pre-implementation Gate

Before any OpenCode execution:
1. PM approves the final M03-04 specification; Proposal A and the accessible new-tab indication have been approved for planning, but publication and execution are separate decisions.
2. M03-03 is closed with the required canonical-status and state synchronization.
3. M03-04 has separate explicit PM implementation authorization.
4. Working branch, clean local tree, and HEAD/origin/main verified; no unapproved local changes.

The published-specification and M03-03 closure gates have been met. The separate PM execution authorization has been granted and is recorded above; it becomes operational upon publication of this record. OpenCode must still reconfirm branch, HEAD/origin/main and clean working tree before implementation.

## Implementation and Evidence Requirements (when separately authorized)

Use one logical change per commit. Confirm allowed paths, verify `npm run build`, and collect evidence for Build, Functional, Responsive, SEO (static HTML), Accessibility, Performance (measured results only: no invented numeric threshold), Security, Integrations (WhatsApp), and Regression. Test actual breakpoint edges including 478/479 and 991/992, the four recognized responsive classes (Desktop, Tablet, Mobile Landscape and Mobile Portrait), using explicitly documented observed viewport dimensions when applicable, without treating those observations as project-wide approved numeric standards, reduced-motion emulation, keyboard focus, and JavaScript-disabled rendering. No passing result without observable evidence. Preserve previously approved Hero/Header/Menu/Mobile Navigation behavior. Report commit SHA(s), diff, build outputs, test records, and explicit unresolved blockers. Test evidence may be returned in the implementation report without modifying prohibited repository documentation. Creating or editing test-record documents, tracking files or other paths requires separate authorization under the applicable protocol; evidence requirements do not extend this source-file allow-list. Do not self-declare the formal audit PASS; independent M03-05 and M03-06 remain separate.

## STOP / BLOCKED

STOP if any source conflicts with frozen decisions; reconstruction-critical UNKNOWN appears; typography fails the approved D-14 fit constraint; image work requires any unapproved additional derivative or modification of the original; the approved visible-and-accessible new-tab indication cannot fit without unapproved changes; an additional file, global CSS edit or dependency is required; JavaScript implementation would require changes beyond the approved Proposal A; the branch is dirty; or any required test is blocked/failed. Escalate to Product Manager without silent changes.

## Acceptance Criteria (implementation in progress; applicable)

- Only authorized files changed; no unapproved scope changes.
- Generated static HTML contains all approved content and semantic structure; no-JavaScript fallback functional.
- Responsive and motion behavior matches frozen evidence and PM decisions.
- Tests supported by recorded observations, no known blocking regression.
- Commit(s) published and synchronized before M03-05.
- No formal-audit status is self-assigned.

## Implementation PM Decision and Evidence Record (2026-10-13)

Chronological record of Product Manager decisions and evidence produced during the authorized M03-04 implementation and its visual validation. State: M03-04 remains `IN PROGRESS`; the implementation restrictions of this document are unchanged; deployment, M03-05 and M03-06 remain NOT AUTHORIZED.

### Priority sequence (PM-approved)
- **A — IMMEDIATE (visually approved):** CTA corrections (D7, D8) and complete responsive visual inspection across all approved viewports, including the post-D9/D10 regression.
- **B — DEFERRED:** dynamic scroll-driven process stepper — pending a separate specification and implementation authorization; not started.
- **C — LAST:** intelligent Header — deferred until A and B are completed; not started.

### D7 — CTA image (2026-10-13)
Resolved by PM visual validation after a local server refresh. The CTA image required no change: the original WebP, the three approved derivatives, `srcset`, `sizes`, `object-fit`, and lazy-loading remain as implemented. No image asset was replaced. Implementation-level investigation measured local rendering geometry and crop equal to the staging reference at Desktop, Tablet, Mobile Landscape, and Mobile Portrait.

### D8 — CTA button size and visible disclosure (2026-10-13)
The Product Manager superseded only the visibly rendered new-tab disclosure of PI-05(c). Approved current behavior:
- Visible label: `Contactar por WhatsApp` (unchanged).
- Accessible name: `aria-label="Contactar por WhatsApp (abre en una nueva pestaña)"`.
- `target="_blank"` and `rel="noopener noreferrer"` preserved.
- Both CTA buttons must render equal width and height within each approved responsive configuration. Implementation-level computed measurements (headless Chrome CDP): 281×50 at 1920 and 1440; equal 195×64 at 1024; 313×48 at 820; 336×48 at 844; 293×50 at 390.
- Implementation-level verification: `npm run build` passed; keyboard focus outline confirmed (`2px` white with `3px` offset on the dark card; `#1a2ad3` override at ≤478.98px); hover states preserved.

### D9 — CTA card shadow (2026-10-13)
The invented Mobile Portrait override `box-shadow: 0 12px 30px rgba(17,26,56,0.10)` on `.sm-process-cta` was removed from `@media (max-width: 478.98px)`. Both cards now retain the original staging shadows at every viewport:
- Trust: `0 16px 38px rgba(26,42,211,0.12), 0 3px 10px rgba(15,23,42,0.06)`.
- CTA: `0 18px 42px rgba(17,26,56,0.16), 0 3px 10px rgba(15,23,42,0.06)`.

Verified by computed-style measurement at 1920, 1024, 844, 478, and 390 widths; no invented shadow values remain.

### D10 — Mobile Portrait card backgrounds (2026-10-13)
At widths ≤478.98px only:
- Trust card background `#f2f5ff` — **explicit PM-approved deviation** from the staging reference, which keeps the Trust card white at every width (per `COMO-TRABAJAMOS-EXTRACTION.md`).
- CTA card background `#f2f5ff` (matches the staged mobile rule).
- Process section background remains `#ffffff`.
- Trust icon discs set to `#ffffff` for visible contrast against the light-blue card.
- Wider viewports unchanged (verified Trust `#ffffff` and CTA `#111a38` at 1920, 1024, and 844).
- No horizontal overflow observed at 390×844 or 478×844.

### PM visual approval record (2026-10-13)
- Desktop: PASS.
- Tablet 820 × 1180: PASS.
- Mobile Landscape 844 × 390: PASS.
- Mobile Portrait 390 × 844: PASS.
- Post-D9/D10 visual regression across the previously approved viewports: PASS.

This record is the Product Manager's **visual acceptance** and, where stated, OpenCode implementation-level measurements. It is not an independent implementation-level test record (M03-05) and not a formal audit verdict (M03-06); both milestones remain NOT STARTED.

## Review / Publication State

Specification publication and M03-03 closure were approved and published. The Product Manager subsequently authorized M03-04 execution on 2026-10-11; this documentation update records that decision. Implementation may resume only after publication and fresh clean Git preflight. Deployment, M03-05 and M03-06 remain NOT AUTHORIZED.
