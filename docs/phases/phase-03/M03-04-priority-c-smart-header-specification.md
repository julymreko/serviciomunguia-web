# M03-04 — Priority C Specification: Smart Header

## Identification

Phase: 03 — CÓMO TRABAJAMOS
Milestone: M03-04 — OpenCode Implementation, Priority C (Smart Header)
Status: SPECIFIED — behavior approved by the Product Manager on 2026-11-06 (PD-38 in `docs/phases/phase-03/M03-04-opencode-implementation.md`). Implementation is NOT AUTHORIZED: it requires a separate explicit Product Manager authorization (PD-39).
Owner / Approver: Julián Cely — Product Manager
Prepared by: Codex (documentation executor), task M03-04-PC-DOC-01
Reviewer: Claude Code
Baseline: repository HEAD `b717c26a179e7604a556b78d8bcaa19ef641c3ee` (branch `main`, working tree clean before this file was added)
Source references: `file` citations refer to the baseline.

**Status statement.** This document records the Smart Header behavior approved by the Product Manager (decisions SH-D01 to SH-D16) and reconciles it with the state of the repository at the baseline. It is a specification, not an implementation. Items marked **PROPOSAL** or **OPEN** are not decided; they are resolved by the Product Manager in the implementation authorization (PD-39).

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

## 7. Menu overlay interaction (SH-D11, SH-D12, SH-D16)

- While `aria-expanded="true"`: Smart Header behavior is suspended. The trigger uses only its existing open and X state. The CONTENT-state circular surface is not shown. The logo receives no new Smart Header transition. The existing overlay stacking stays authoritative.
- On overlay close: no previously cached state is restored. The state is recalculated immediately from the current physical position of the Hero, and the HERO or CONTENT state is applied.
- SH-D16 (PM APPROVED, 2026-11-06): a click on an anchor link inside the Menu overlay closes the overlay and lets the anchor navigation proceed. The close must not cancel the navigation. This is a minimal change to `menu-overlay.js`; it does not change the Menu information architecture.
- **OPEN (U-SH-02):** focus management when the overlay closes by a link click. `closeMenu()` at the baseline moves focus to the trigger. The implementation contract must state whether the link-click path keeps that behavior or leaves focus to the anchor navigation, and the Product Manager decides in PD-39. Recommendation to the Product Manager: do not force focus back to the trigger on the link-click path, so focus follows the navigation.
- The order of the close, the anchor navigation and the state recalculation must be observed and recorded at implementation, with the scroll lock (`body.sm-menu-open`) taken into account.

## 8. Observation strategy (SH-D13)

- `IntersectionObserver`. No continuous `scroll` listener and no continuous `requestAnimationFrame` loop.
- The observer is based on the bottom edge of the Hero and the measured effective Header geometry.
- The Header geometry changes with the viewport. The implementation reads the rendered Header geometry, derives the observer offset (root margin) from it, recomputes it when the viewport geometry changes, and handles resize and orientation change. It does not hard-code one Header height and does not reuse the `scroll-margin-top` formula of `.sm-process` (section 3.1).
- Initialization performs an immediate state evaluation, so a reload or a deep link at an already-scrolled position is correct without waiting for a user scroll.
- **Initial paint.** The implementation must show that there is no visible flash of the wrong state on load at `#inicio`; if it cannot be avoided, it returns to the Product Manager.

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

**OPEN (U-SH-01), JavaScript baseline.** With no JavaScript, the Menu trigger must stay visible and operable in any page position. **PROPOSAL:** the CSS default is the CONTENT-state trigger surface, and JavaScript applies the HERO state when the Hero is behind the Header, so a failed script leaves a legible trigger everywhere. The logo keeps its baseline behavior without JavaScript. The Product Manager decides in PD-39.

## 13. Non-goals

Not in scope; each needs a separate Product Manager decision: scroll-direction detection; auto-hide on scroll down; a scroll progress indicator; the current-section name or navigation highlighting; glassmorphism or backdrop blur; a full-width compact navbar; a shrinking logo; dynamic Header height animation; changes to the Bottom Navigation; changes to the Menu information architecture; changes to the Header extraction evidence; a new framework or library; a continuous scroll listener.

## 14. Product Manager decisions

All **PM APPROVED**. SH-D01 to SH-D14 are the behavior given by the Product Manager; SH-D15 and SH-D16 were decided on 2026-11-06 during the reconciliation with the repository. The decisions are recorded in PD-38 of M03-04.

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

## 15. Proposed implementation allow-list and staging (PROPOSAL; not authorized)

Implementation is not authorized. PD-39 will authorize it, if the Product Manager decides, as written or amended. Proposed allowed paths:

- `src/assets/css/main.css` (a Smart Header block only; no Bottom Navigation selectors);
- `src/assets/js/smart-header.js` (new file);
- `src/assets/js/menu-overlay.js` (only SH-D16 and the state hand-off required by SH-D11 and SH-D12);
- `src/_includes/base.njk` (only the script include for the new file).

Not included: `src/_includes/components/header.njk`, `hero.njk`, `menu-overlay.njk`, `mobile-nav.njk`, `process.njk`, `process.js`, `package.json`, dependencies, and any other source file. If the implementation requires another file, it stops and asks the Product Manager.

Proposed stages, each a separate task with its own contract and approval, in the order used for Priority B: (1) state model, logo and trigger surface (CSS and JavaScript) in all viewport classes; (2) SH-D16 and the overlay interaction (SH-D11, SH-D12); (3) measurement and full regression (contrast, geometry, Mobile Portrait composition, reduced motion, no-JavaScript baseline).

Evidence required: Build, Functional, Responsive (including 478/479 and 991/992), SEO (static HTML unchanged), Accessibility, Performance (measured values only, no invented thresholds), Security, Regression (Hero, Header, Menu, Mobile Navigation, Cómo trabajamos stepper). No passing result without observable evidence. M03-05 and M03-06 remain separate and NOT AUTHORIZED.
