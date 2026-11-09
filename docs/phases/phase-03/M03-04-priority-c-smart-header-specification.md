# M03-04 — Priority C Specification: Smart Header

## Identification

Phase: 03 — CÓMO TRABAJAMOS
Milestone: M03-04 — OpenCode Implementation, Priority C (Smart Header)
Status: IMPLEMENTED IN THREE STAGES (PD-40, PD-41, PD-42) — behavior approved by the Product Manager on 2026-11-06 (PD-38 in `docs/phases/phase-03/M03-04-opencode-implementation.md`). Implementation was authorized in three stages by the Product Manager on 2026-11-06 (PD-39 in the same file); each stage has its own contract and approval. Stage 1 was implemented, reviewed and committed on 2026-11-07 (PD-40 in the same file). Stage 2 was implemented, reviewed and committed on 2026-11-08 (PD-41 in the same file). Stage 3 (measurement and full regression, with no source change) was completed on 2026-11-08 (PD-42 in the same file).
Owner / Approver: Julián Cely — Product Manager
Prepared by: Codex (documentation executor), task M03-04-PC-DOC-01
Reviewer: Claude Code
Baseline: repository HEAD `b717c26a179e7604a556b78d8bcaa19ef641c3ee` (branch `main`, working tree clean before this file was added)
Source references: `file` citations refer to the baseline.

**Status statement.** This document records the Smart Header behavior approved by the Product Manager (decisions SH-D01 to SH-D31) and reconciles it with the state of the repository at the baseline. The three implementation stages are completed (PD-40, PD-41, PD-42). The two items that were open when it was issued, U-SH-01 and U-SH-02, were resolved by PD-39 (SH-D17 and SH-D18). Items marked **PROPOSAL** are not decided unless a decision of section 14 or PD-39 adopts them.

## 1. Classification

- The Smart Header is a **Product Manager-approved enhancement** of the reconstructed site. It is **not** behavior observed in the staging reference.
- It must not be read as evidence of the reference. `docs/reference-extraction/HEADER-EXTRACTION.md` is not edited by this specification and keeps its observed evidence unchanged.
- It extends M03-04, whose original scope was the frozen Cómo trabajamos section, to Priority C. The extension is recorded in PD-38 of M03-04, in the Product Manager decision records location required by `docs/ARTIFACT-CONVENTIONS.md`.
- It is not a new milestone. It is Priority C of M03-04, as listed in the priority sequence of that file (A, B, C).

## 2. Preserved Header architecture

The following stays authoritative and is not changed by the Smart Header.

- The Header and the Menu trigger are separate stacking layers. The logo stays inside the Header (`src/_includes/components/header.njk`); the Menu trigger stays inside the dedicated fixed `.sm-menu-trigger-layer` (`src/_includes/components/hero.njk`).
- Stacking order recorded in `HEADER-EXTRACTION.md`: Bottom Navigation 1200, Menu overlay 1300, Menu trigger 1301. The Header (`z-index: 40` in `src/assets/css/main.css`) is never elevated above the Menu overlay. With the overlay open, the logo stays behind the overlay and the trigger stays above it.
- The Menu trigger keeps its dimensions, 52 × 52 px, and its line and X interaction, unless this specification changes it explicitly.
- The Bottom Navigation is unchanged.

## 3. Read-only evidence at the baseline

Observed in the repository; nothing here was changed.

### 3.1 Header, trigger and Hero

- `src/_includes/components/hero.njk`: the Hero is `<section id="inicio" class="sm-hero">`; it contains the Header include and `.sm-menu-trigger-layer` with `<button id="sm-menu-trigger" class="sm-hero__menu-trigger" aria-expanded="false" aria-controls="sm-menu-overlay">`.
- `src/_includes/components/header.njk`: `<header id="sm-hero-header" class="sm-hero__header">` with the logo link `#sm-hero-logo` (`href="#inicio"`, `aria-label="Ir al inicio"`). The logo image is `servicio-munguia-logo-fondo-oscuro.webp`, the version for dark backgrounds.
- `src/assets/css/main.css`: `.sm-hero__header` is `position: fixed`, `z-index: 40`, with no background, and `pointer-events: none` (the logo has `pointer-events: auto`). Its vertical padding is `clamp(16px, 2vw, 32px)` and the logo width is `clamp(150px, 10vw, 200px)`; at `max-width: 478px` the logo width is `clamp(120px, 8vw, 180px)`.
- `.sm-hero__menu-trigger` is 52 × 52 px, `border-radius: 50%`, `background: transparent`. Its two lines are drawn with `::before` and `::after` (white, `var(--sm-white)`). `.sm-menu-trigger-layer` is `position: fixed`, `z-index: 1301`, with `pointer-events: none`.
- The `scroll-margin-top` of `.sm-process` has two formulas in `src/assets/css/main.css`: the base rule (line 1597) uses the logo clamp `clamp(150px, 10vw, 200px)`, and the `max-width: 478.98px` block (line 2101) uses `clamp(120px, 8vw, 180px)`. The Header logo uses `clamp(120px, 8vw, 180px)` only at `max-width: 478px` (line 171). Above 478 px and up to 478.98 px the logo uses the base clamp while the `scroll-margin-top` uses the `clamp(120px, 8vw, 180px)` value, so the two values differ in that band. This is recorded as an observation from the CSS; it is not evaluated here.
- Tokens in `:root`: `--sm-dark: #0d0e13`, `--sm-dark-soft: #111a38`, `--sm-white: #ffffff`, `--sm-primary: #1a2ad3`.

### 3.2 Menu behavior (required investigation)

Sources: `src/assets/js/menu-overlay.js`, `src/assets/css/main.css`, `src/_includes/components/menu-overlay.njk`, `src/_includes/base.njk`.

- **Scroll lock.** Opening the menu adds the class `sm-menu-open` to `body`; `body.sm-menu-open { overflow: hidden; }` is the only scroll-related rule. Closing removes the class. The `html` element is not changed.
- **Close paths.** Only two: a click on the trigger (toggle) and the `Escape` key. `Tab` is trapped inside the overlay. `closeMenu()` ends with `trigger.focus()`.
- **Links inside the overlay.** `menu-overlay.js` registers no click handler on them, no handler on the overlay backdrop, and no `hashchange` handler. `process.js` and `hero-carousel.js` contain no reference to the overlay. In the code, therefore, a click on an overlay anchor link (`#como-trabajamos`, `#servicios`, `#cobertura`, `#marcas`, `#contacto`) triggers the browser's anchor navigation and does not close the overlay. The Product Manager confirmed on 2026-11-06 that the overlay does not close in this case. Browser verification of the exact sequence was not part of this documentation task.
- **Consequence.** The premise of SH-D12 (a Menu link that closes the overlay and moves the page in the same interaction) does not hold at the baseline. SH-D16 resolves it.
- **Scripts.** `base.njk` loads `hero-carousel.js`, `menu-overlay.js` and `process.js` as `type="module"` scripts at the end of `body`.

## 4. State model (SH-D01)

The Smart Header depends only on the page position relative to the Hero. It does not depend on scroll direction.

**HERO state.** Active while the bottom edge of the Hero has not crossed the bottom edge of the Header.

- The logo is visible and interactive.
- The Menu trigger is exactly as implemented at the baseline inside the Hero: 52 × 52 px, transparent background, white lines, with the existing hover and focus behavior.

**CONTENT state.** Active after the bottom edge of the Hero crosses the effective bottom edge of the Header.

- The logo fades out and, once the fade ends, is `visibility: hidden`, so it is neither focusable nor exposed as an invisible interactive link.
- The Menu trigger stays fixed and available, and gains its own circular surface.

## 5. State boundary (SH-D02)

The state changes when the bottom edge of the Hero equals the effective bottom edge of the Header. The threshold is the same when scrolling down and when scrolling back up.

- There is no direction detection, no direction tracking, and no separate enter and leave thresholds. A hysteresis may be introduced only if later evidence proves it technically necessary and the Product Manager approves it.
- A direct anchor navigation, or a reload at an already-scrolled position, results in the correct state. Returning to `#inicio` results in the HERO state.
- No fixed pixel threshold is specified. The effective Header geometry is measured from the rendered page (section 8).
- How a position exactly on the threshold is classified is recorded as an observation at implementation; it is not tuned.
- **RESOLVED (SH-D19, PD-40), implemented in stage 1:** at exact equality of the Hero bottom edge and the Header bottom edge the state is `content`. The implementation offsets the observed boundary by 0.5 CSS px below the measured Header bottom edge and uses the same boundary in the synchronous evaluation and in the observer, so the state is `hero` while the Hero bottom edge is at least 0.5 CSS px below the Header bottom edge and `content` otherwise. For a distance between 0 and 0.5 CSS px the state is `content`, which the Product Manager accepted as a deviation from the literal rule above, because in the observer an edge-adjacent target counts as intersecting (observed in stage 1) and the literal rule needed an offset to place exact equality in `content`.

## 6. Visual definition

### 6.1 Logo (SH-D03, SH-D07)

- Properties: `opacity` and `visibility`. Duration `240ms`. Timing `ease`.
- HERO to CONTENT: fade `opacity` to `0`; when the fade ends, apply `visibility: hidden`.
- CONTENT to HERO: restore `visibility`, then fade `opacity` to `1`.
- `display: none` is not the primary animated mechanism.
- The hidden logo must not remain keyboard-focusable.

### 6.2 Menu trigger surface in CONTENT state (SH-D04, SH-D05, SH-D06, SH-D07, SH-D08, SH-D15)

- The trigger stays available outside the Hero.
- Surface: circular, 52 × 52 px, `background: #111a38`, white lines, `box-shadow: 0 4px 14px rgba(17, 26, 56, 0.22)`.
- Token (SH-D15): the Product Manager's color is `#111a38`, which is `--sm-dark-soft` in `main.css`. `--sm-dark` is `#0d0e13` and is not used. The Product Manager confirmed `#111a38 / --sm-dark-soft` on 2026-11-06.
- The surface exists so the contrast is independent of the page content behind it.
- Animation: the surface is a separate layer whose `opacity` goes from `0` (HERO) to `1` (CONTENT) in `240ms ease`. `background-color` and `box-shadow` are not animated. Only compositor-friendly properties are animated where practical.
- The existing lines and X stay above the surface.
- **Constraint found at the baseline.** `::before` and `::after` of `.sm-hero__menu-trigger` already draw the two lines, so the surface cannot use them. **PROPOSAL:** use a pseudo-element of `.sm-menu-trigger-layer`, positioned behind the button, with `pointer-events: none`, coincident with the 52 × 52 px trigger. Acceptance: the surface and the trigger coincide within the tolerance the implementation contract defines, measured at the four viewport classes. If this mechanism cannot satisfy it, the alternative (a decorative element in `hero.njk`) returns to the Product Manager, because it adds a file to the allow-list.
- **RESOLVED (PD-40), implemented in stage 1:** the surface is the `::before` pseudo-element of `.sm-menu-trigger-layer`; the contract tolerance was 0.5 CSS px on each edge and the measured deviation was at most 0.015 px at every measured width.
- **Trigger position (SH-D22, PD-40):** the top edge of the Menu trigger is aligned with the top edge of the logo at every width: `.sm-menu-trigger-layer` has `top: clamp(16px, 2vw, 32px)`, the Header top padding. At the baseline the trigger was centered on the logo (its `top` was computed from the 150 to 200 px logo size), which put its top edge 49 px below the logo top at widths from 320 to 1440 px and 70 px at 1920 px (values measured in stage 1). This changes a baseline behavior and was decided by the Product Manager after the visual validation of 2026-11-07.

## 7. Menu overlay interaction (SH-D11, SH-D12, SH-D16)

- While `aria-expanded="true"`: Smart Header behavior is suspended. The trigger uses only its existing open and X state. The CONTENT-state circular surface is not shown. The logo receives no new Smart Header transition. The existing overlay stacking stays authoritative.
- On overlay close: no previously cached state is restored. The state is recalculated immediately from the current physical position of the Hero, and the HERO or CONTENT state is applied.
- SH-D16 (PM APPROVED, 2026-11-06): a click on an anchor link inside the Menu overlay closes the overlay and lets the anchor navigation proceed. The close must not cancel the navigation. This is a minimal change to `menu-overlay.js`; it does not change the Menu information architecture.
- **RESOLVED (U-SH-02, SH-D18, PD-39):** focus management when the overlay closes by a click on an anchor link. `closeMenu()` at the baseline moves focus to the trigger. On the link-click path, focus is not forced back to the trigger, so focus follows the anchor navigation. Closing with the trigger or with `Escape` keeps the baseline behavior of returning focus to the trigger.
- The order of the close, the anchor navigation and the state recalculation must be observed and recorded at implementation, with the scroll lock (`body.sm-menu-open`) taken into account.
- **RESOLVED (SH-D11, SH-D12, SH-D16, SH-D18 and SH-D23 to SH-D27, PD-41), implemented in stage 2:** a plain click on a link whose `href` starts with `#` closes the overlay in the click handler of `menu-overlay.js`, synchronously and without cancelling the navigation, so the scroll lock is released before the browser moves the page; the `mailto:` and WhatsApp links and the empty area of the overlay do not close it. The close by a link does not return focus to the trigger, and the clicked link is blurred if it still holds focus so that no element inside the overlay keeps focus while the overlay is `aria-hidden`. `smart-header.js` observes `aria-expanded` of the trigger with one `MutationObserver`, writes no state while the Menu is open, and when it closes it measures the Header again and recomputes the state from the current Hero geometry. Observed order on a link-click close (not tuned): the change of `aria-expanded`, of the `sm-menu-open` class and the state recomputation happen within 0.1 ms of each other, the scroll follows 5 to 14 ms later in the recorded runs, and the observer callbacks and the final state follow the scroll. Closing from the HERO state recomputes `hero` before the scroll and the navigation then produces `content`; the logo fade (220 to 234 ms measured, 240 ms declared) is visible only for `#como-trabajamos` from the HERO state. Of the five links, only `#como-trabajamos` has a target element in the built page (finding D-1 of PD-41).

## 8. Observation strategy (SH-D13)

- `IntersectionObserver`. No continuous `scroll` listener and no continuous `requestAnimationFrame` loop.
- The observer is based on the bottom edge of the Hero and the measured effective Header geometry.
- The Header geometry changes with the viewport. The implementation reads the rendered Header geometry, derives the observer offset (root margin) from it, recomputes it when the viewport geometry changes, and handles resize and orientation change. It does not hard-code one Header height and does not reuse the `scroll-margin-top` formula of `.sm-process` (section 3.1).
- Initialization performs an immediate state evaluation, so a reload or a deep link at an already-scrolled position is correct without waiting for a user scroll.
- **Initial paint.** The implementation must show that there is no visible flash of the wrong state on load at `#inicio`; if it cannot be avoided, it returns to the Product Manager.
- **RESOLVED (SH-D20 and SH-D21, PD-40), implemented in stage 1:** the Smart Header transitions are declared only under `html[data-sm-header-motion="on"]`, which `smart-header.js` sets once per load, after the initial state evaluation, with two chained one-shot `requestAnimationFrame` calls. This is the only use of `requestAnimationFrame`; it is not a loop and it is not used after initialization. A load at an already-scrolled position therefore shows the CONTENT state on the first painted frame with no logo fade. On a direct navigation to an anchor in a fresh document, the fragment scroll can happen after the first paint, and when the observer then changes the state after the motion attribute is set the logo fades in 240 ms. This depends on timing (it was seen at some viewport widths and not at others), the final state is always correct, and the Product Manager accepted it (SH-D21).

## 9. Reduced motion (SH-D14)

Under `prefers-reduced-motion: reduce` the positional state model stays active. The logo and the trigger surface change state immediately, with no Smart Header fade or transition.

## 10. Responsive scope (SH-D09, SH-D10)

- The Smart Header applies to Desktop, Tablet, Mobile Landscape and Mobile Portrait. The repository does not define widths for these classes; the implementation records the viewport dimensions it uses as observations, not as project standards.
- Boundaries to validate: 478 and 479, and 991 and 992. The existing `.98px` breakpoint convention is not redefined.
- Mobile Portrait: the Bottom Navigation stays unchanged and is not replaced. The fixed 52 px trigger and the Bottom Navigation must be checked spatially for collision or an unintended composition, and the result is recorded as a measurement. The Bottom Navigation holds quick actions (Servicios, Cobertura, WhatsApp, Llamar, Agendar visita); the Menu holds the site navigation (¿Cómo trabajamos?, Servicios, Cobertura, Marcas, Contacto) and the contact data.

## 11. Accessibility and contrast

Required measurements at implementation:

1. White icon lines against `#111a38`.
2. The circular `#111a38` surface against representative light page backgrounds.

Preliminary calculation by this specification (WCAG relative luminance formula; **not a measurement of the rendered page**): white against `#111a38` 17.09:1; `#111a38` against `#ffffff` 17.09:1; `#111a38` against `#f2f5ff` 15.69:1.

The implementation records the measured values. No project acceptance threshold for these contrasts exists in the repository; the WCAG non-text contrast guidance is external normative guidance and is cited as evidence, not as a project-approved threshold.

Also inspected: normal state, hover, `:focus-visible` and `aria-expanded="true"` (X). The existing visible keyboard-focus treatment is not weakened.

**Observed in stage 3 (SH-D28, PD-42).** At several CONTENT scroll positions the surface is not distinguishable from the dark page behind it (the Hero photo still behind the disc just after the state changes to CONTENT, and the dark CTA panel of Cómo trabajamos at Mobile Landscape); the white lines on the surface stay at about 17:1. No change was made in stage 3, and the matter is kept as a backlog item.

## 12. Initialization, edge cases and failure

The implementation must cover and test:

- initial load at `#inicio`;
- reload while already scrolled below the Hero;
- direct navigation to another anchor;
- Bottom Navigation jump to `#inicio`;
- Menu navigation to an anchor below the Hero;
- Menu navigation back to the Hero or start;
- open the Menu inside the Hero, then close;
- open the Menu outside the Hero, then close;
- open the Menu, click an anchor, overlay closes and the page moves;
- resize while in the Hero and while below it;
- orientation change;
- breakpoint transition across 478 and 479;
- breakpoint transition across 991 and 992;
- `prefers-reduced-motion`;
- JavaScript failure or no JavaScript.

The Smart Header fails safely: a JavaScript failure must not make the primary navigation inaccessible.

**RESOLVED (SH-D29, SH-D30, SH-D31, PD-42), edge cases measured in stage 3.** The item "Bottom Navigation jump to `#inicio`" does not apply, because no link of the Bottom Navigation points to `#inicio` (SH-D31). On a direct navigation to an anchor in a fresh document the first painted frame can be HERO at the target position, and the state then becomes CONTENT; SH-D21 covers it (SH-D30). After a reload at an already-scrolled position the first painted frame can be the HERO default in some runs, with no fade afterwards; it is accepted as a known limitation (SH-D29).

**RESOLVED (U-SH-01, SH-D17, PD-39), JavaScript baseline.** The CSS default is the HERO state (transparent trigger with white lines, logo visible), identical to the baseline, so there is no flash of the wrong state on load. JavaScript applies the CONTENT state when the Hero is no longer behind the Header. Without JavaScript the Header stays as at the baseline. At the baseline `src/assets/js/menu-overlay.js` is the only code that opens the Menu overlay, so without JavaScript the Menu trigger does not open it; the Smart Header does not change that. The Bottom Navigation in Mobile Portrait is made of plain anchors and does not depend on JavaScript. A JavaScript failure must not make inaccessible any navigation that works without JavaScript.

## 13. Non-goals

Not in scope; each needs a separate Product Manager decision: scroll-direction detection; auto-hide on scroll down; a scroll progress indicator; the current-section name or navigation highlighting; glassmorphism or backdrop blur; a full-width compact navbar; a shrinking logo; dynamic Header height animation; changes to the Bottom Navigation; changes to the Menu information architecture; changes to the Header extraction evidence; a new framework or library; a continuous scroll listener.

## 14. Product Manager decisions

All **PM APPROVED**. SH-D01 to SH-D14 are the behavior given by the Product Manager; SH-D15 and SH-D16 were decided on 2026-11-06 during the reconciliation with the repository, SH-D17 and SH-D18 on 2026-11-06 when the implementation was authorized, SH-D19 to SH-D22 on 2026-11-07 during stage 1, SH-D23 to SH-D27 on 2026-11-07 when stage 2 was approved, and SH-D28 to SH-D31 on 2026-11-08 when stage 3 was closed. SH-D01 to SH-D16 are recorded in PD-38 of M03-04, SH-D17 and SH-D18 in PD-39 of M03-04, SH-D19 to SH-D22 in PD-40 of M03-04, SH-D23 to SH-D27 in PD-41 of M03-04, and SH-D28 to SH-D31 in PD-42 of M03-04.

| ID | Decision |
|---|---|
| SH-D01 | The state depends only on Hero and Header geometry, not on scroll direction. |
| SH-D02 | The transition happens when the Hero bottom crosses the effective Header bottom, symmetrically in both directions. |
| SH-D03 | The logo fades out and becomes `visibility: hidden` after the transition ends. |
| SH-D04 | The Menu trigger stays available outside the Hero. |
| SH-D05 | Outside the Hero: `#111a38`, white lines, 52 × 52 px circular surface. |
| SH-D06 | `box-shadow: 0 4px 14px rgba(17, 26, 56, 0.22)`. |
| SH-D07 | `240ms ease` for the logo fade and the trigger surface opacity. |
| SH-D08 | The surface lives on a separate layer whose opacity is animated; `background-color` and shadow are not animated. |
| SH-D09 | Applies to Desktop, Tablet, Mobile Landscape and Mobile Portrait. |
| SH-D10 | The Mobile Portrait Bottom Navigation is independent and unchanged. |
| SH-D11 | While the Menu overlay is open the Smart Header state is suspended; the X state prevails and the circular surface is not shown. |
| SH-D12 | On overlay close, the state is recalculated from the current Hero geometry, not restored from a cache. |
| SH-D13 | `IntersectionObserver` with dynamic Header geometry measurement; no continuous scroll listener. |
| SH-D14 | Under reduced motion the positional behavior stays active and the transitions are instantaneous. |
| SH-D15 | The surface color is `#111a38`, which is `--sm-dark-soft` (not `--sm-dark`, which is `#0d0e13`). |
| SH-D16 | A click on an anchor link inside the Menu overlay closes the overlay and the navigation proceeds. |
| SH-D17 | The Menu trigger is in the HERO state by default in CSS and JavaScript applies the CONTENT state. Without JavaScript the Header stays as at the baseline. |
| SH-D18 | When the overlay closes by a click on an anchor link, focus is not forced back to the trigger. Closing with the trigger or with `Escape` returns focus to the trigger, as at the baseline. |
| SH-D19 | The state boundary is offset by 0.5 CSS px below the measured Header bottom edge, so at exact equality the state is `content`; the state is `hero` while the Hero bottom edge is at least 0.5 CSS px below the Header bottom edge. The same boundary is used in the synchronous evaluation and in the observer. |
| SH-D20 | Transitions are enabled only after the initial state is applied: `data-sm-header-motion="on"` is set once per load by two chained one-shot `requestAnimationFrame` calls, so a load at a scrolled position shows CONTENT on the first painted frame with no fade. |
| SH-D21 | A logo fade on a direct navigation to an anchor in a fresh document, when the observer changes the state after the motion attribute is set, is accepted; the final state is always correct. |
| SH-D22 | The top edge of the Menu trigger is aligned with the top edge of the logo at every width (`top: clamp(16px, 2vw, 32px)` on `.sm-menu-trigger-layer`), instead of centered on the logo as at the baseline. |
| SH-D23 | Only a plain click (primary button, no modifier key) closes the Menu overlay. |
| SH-D24 | Only links whose `href` starts with `#` close the overlay; the `mailto:` and WhatsApp links and the empty area of the overlay keep the baseline behavior. |
| SH-D25 | `smart-header.js` learns the Menu state by observing `aria-expanded` of the trigger with one `MutationObserver`; no custom event is used. |
| SH-D26 | While the Menu is open the state attribute is not written; when it closes the state is recomputed from the current Hero geometry. |
| SH-D27 | After a link-click close the clicked link is blurred if it still holds focus; no other element receives focus. |
| SH-D28 | Stage 3 makes no change to the Menu trigger surface. Where the surface is not distinguishable from a dark page behind it, the matter is kept as a backlog item for later Product Manager review. |
| SH-D29 | After a reload at an already-scrolled position, a first painted frame in the HERO default before the script runs is accepted as a known limitation. |
| SH-D30 | On a direct navigation to an anchor in a fresh document, a first painted frame in HERO followed by CONTENT is covered by SH-D21. |
| SH-D31 | The case "Bottom Navigation jump to `#inicio`" of section 12 does not apply: no Bottom Navigation link points to `#inicio`, and the Bottom Navigation stays unchanged (SH-D10). |

## 15. Implementation allow-list and staging (authorized by PD-39)

Implementation was authorized in stages by the Product Manager on 2026-11-06 (PD-39 in `docs/phases/phase-03/M03-04-opencode-implementation.md`) with the allowed paths below. Executor: OpenCode. Reviewer: Claude Code. Allowed paths:

- `src/assets/css/main.css` (a Smart Header block only; no Bottom Navigation selectors);
- `src/assets/js/smart-header.js` (new file);
- `src/assets/js/menu-overlay.js` (only SH-D16, SH-D18 and the state hand-off required by SH-D11 and SH-D12);
- `src/_includes/base.njk` (only the script include for the new file).

Not included: `src/_includes/components/header.njk`, `hero.njk`, `menu-overlay.njk`, `mobile-nav.njk`, `process.njk`, `process.js`, `package.json`, dependencies, and any other source file. If the implementation requires another file, it stops and asks the Product Manager.

Stages, each a separate task with its own contract and approval, in the order used for Priority B. A stage starts only after the previous stage was reviewed CONFORME, validated visually by the Product Manager and committed by the Product Manager. The exact boundary of each stage is set in its contract, within the limits of PD-39: (1) state model, logo and trigger surface (CSS and JavaScript) in all viewport classes; (2) SH-D16, SH-D18 and the overlay interaction (SH-D11, SH-D12); (3) measurement and full regression (contrast, geometry, Mobile Portrait composition, reduced motion, no-JavaScript baseline).

Evidence required: Build, Functional, Responsive (including 478/479 and 991/992), SEO (static HTML unchanged), Accessibility, Performance (measured values only, no invented thresholds), Security, Regression (Hero, Header, Menu, Mobile Navigation, Cómo trabajamos stepper). No passing result without observable evidence. M03-05 and M03-06 remain separate and NOT AUTHORIZED.
