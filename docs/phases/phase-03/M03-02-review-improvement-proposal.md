# M03-02 — UX / Accessibility / SEO / Motion Review & Improvement Proposal

## Identification

Phase: 03 — CÓMO TRABAJAMOS
Milestone: M03-02 — UX / Accessibility / SEO / Motion Review & Improvement Proposal
Status: IN PROGRESS

Owner: Julián Cely — Product Manager
Executing Agent: Claude Code (Claude Sonnet 5.5) — Discovery & Planning
Audit Agent: Not applicable (no formal audit gate at this milestone)

## Objective

Record, separately from the reference evidence, every objective issue found in the staging "CÓMO TRABAJAMOS" section, every proposed improvement, the proposed motion/interaction system, and every decision the Product Manager must make before scope can be frozen.

## Authority and Labels

- Scope authority: `docs/phases/phase-03/M03-00-claude-discovery-planning-requirement.md`.
- Reference evidence (OBSERVED / UNKNOWN): `docs/reference-extraction/COMO-TRABAJAMOS-EXTRACTION.md`. This document does not restate it; it cites it as `EXT §n`.
- Labels used here: **ISSUE / DEFECT** (objective problem in the reference; not permission to change product behavior) and **PROPOSED IMPROVEMENT** (not approved).
- **Nothing in this document is a PM-approved requirement.** No item below carries the state PM APPROVED. Every proposal records `PM approval required: YES`.
- No performance PASS threshold exists in the repository (`docs/TESTING-PROTOCOL.md`). None is invented here. Risk levels are expected-risk classifications, not measurements of an implementation.
- Breakpoints: none are proposed. The reference's own observed values are in EXT §9; the project's breakpoints live in `src/assets/css/main.css`.

## 1. Issues / Defects (reference)

| ID | Class | Issue | Evidence | Severity (extractor's view) |
|---|---|---|---|---|
| ISS-01 | Responsive / layout | Step titles are 28.8px (inherited; no authored size) and do not fit their columns across wide ranges: at 992–1280px 1–4 titles overflow their column; at 1024px titles 2 and 3 visually fuse ("ConfirmamosRealizamos") and title 5's last word is clipped; at 479–600px columns are 125–163px wide with up to 5 lines; also overflow at 768 and 360px. | EXT §9 sweep; screenshot at 1024 | HIGH (content collision/clipping) |
| ISS-02 | Visual hierarchy | Step titles (28.8px) are larger than the steps-group title (20px) and nearly equal to the H2 (31.25px). The H2 renders at 31.25px although the authored CSS specifies `clamp(2.125rem, 3.6vw, 3.125rem)`. | EXT §6 | MEDIUM |
| ISS-03 | Link integrity | Primary CTA `href="#contacto"` points to an id that does not exist on the reference page. | EXT §4 | HIGH |
| ISS-04 | Accessibility (contrast) | Secondary CTA hover state: white text on `#25d366` = 1.98:1. | EXT §7 | MEDIUM |
| ISS-05 | Accessibility (focus) | No authored `:focus-visible` styles; the browser outline takes the button's `currentColor`, which is white on the primary button. Visible on the dark desktop card; the light mobile card (`#f2f5ff`) is **derived, not measured** (EXT U-06). | EXT §10, §11 | MEDIUM (to be verified) |
| ISS-06 | Semantics | Heading outline is flat: steps-group title, five step titles, trust title, and CTA title are all H3. | EXT §4, §11 | LOW |
| ISS-07 | Semantics | The ordered process is five `div`s; sequence is conveyed only by visible badges and source order. No list semantics for steps or trust items. | EXT §4 | LOW |
| ISS-08 | Semantics | The `section` has no accessible name. | EXT §4, §11 | LOW |
| ISS-09 | Robustness / SEO | The CTA image is shown only after Bricks JavaScript swaps `data-src` into `src`; with JavaScript disabled the placeholder remains. | EXT §8, §12 | LOW (alt text and text content are static) |
| ISS-10 | Link hygiene | `target="_blank"` on the `wa.me` link without `rel`, and without any indication that it opens a new tab. | EXT §3, §11 | LOW |
| ISS-11 | CSS hygiene | Authored paragraph-spacing rules (`p + p`) match nothing because the HTML has no `<p>`; step text renders run-in. Duplicate and dead rules exist. | EXT §3, §13 | LOW (reference-internal; relevant to intent, U-03) |
| ISS-12 | Motion / accessibility | The only section motion (CTA 0.2s transition + 1px hover lift) is not covered by any reduced-motion rule. | EXT §10 | LOW |

Not an issue, recorded for completeness: no horizontal document overflow was measured at the five inspected viewports (EXT §9).

## 2. UX / Content Review

Evaluated: sequencing, step count, clarity, hierarchy, scanability, CTA placement/relevance, redundancy, relationship with other OnePage sections, mobile comprehension, interaction value versus complexity.

Observations (OBSERVED unless stated):
- Sequence is clear and linear (request → availability → diagnosis → quote/authorization → repair + documentation). Five steps is scannable. Badges + connectors communicate order. Mobile Portrait converts it to a vertical timeline that reads well.
- The trust strip restates cost, recommendation, and warranty already present in steps 3–5. That is deliberate reinforcement or redundancy depending on intent — a PM call (D-10); no change is proposed by default.
- Before the first step the reader passes H2, intro, supporting paragraph, and an H3 ("Así funciona nuestro proceso de atención") that restates the H2's meaning. The copy is not proposed for rewriting (M03-00 §8: no copy changes for subjective preference).
- The CTA card placement after the trust strip is appropriate (decision point after information).
- Cross-section: the section's CTA text promises coverage confirmation, which the following Coverage section serves; the Hero already carries a WhatsApp CTA. No contradiction found; sequencing Hero → process → services → coverage matches the reference page order.

### Proposed improvements

Each: Problem/opportunity · Evidence · Proposed change · Expected user benefit · Possible regression/risk · **PM approval required: YES**

**PI-01 — Ordered-list semantics for the steps.**
Problem: ISS-07. Evidence: EXT §4. Change: render the five steps as an ordered list (`ol > li`), each `li` keeping its heading, badge, icon, and text, with identical visuals. Benefit: assistive technology announces "list, 5 items" and position. Risk: list-style/margin resets must be controlled; badge text duplicates list numbering for screen readers (badge to be hidden from AT or kept as visual-only). PM approval: YES.

**PI-02 — Step-title fit and type hierarchy.**
Problem: ISS-01, ISS-02. Evidence: EXT §6, §9. Change: define an explicit step-title size and wrapping behavior that keeps titles inside their columns at every layout the project supports, and set a hierarchy in which H2 > steps-group title ≥ step title (exact values and any layout switch-point to be PM-specified or validated by measurement; none are proposed here). Benefit: no collision/clipping; consistent hierarchy. Risk: deviates from rendered reference typography (PM decision D-01). PM approval: YES.

**PI-03 — Heading levels inside the section.**
Problem: ISS-06. Evidence: EXT §4. Options: (A) steps-group title stays H3 and the five step titles become H4; trust and CTA titles remain H3. (B) leave levels as observed. Recommendation: A. Benefit: correct nesting; no jumps. Risk: none to content; styling must not rely on tag names. PM approval: YES (D-04).

**PI-04 — Section accessible name.**
Problem: ISS-08. Change: `aria-labelledby` pointing at the H2's id on the `section`. Benefit: named region in screen-reader landmark/region lists. Risk: none identified. PM approval: YES.

**PI-05 — CTA targets and new-tab handling.**
Problem: ISS-03, ISS-10. Change: (a) primary CTA targets the canonical Contact/Scheduling anchor once PM decides it (D-02: `#contacto` observed in reference/Menu vs `#agendar-diagnostico` in the approved Bottom Navigation); (b) if the target section does not exist when the section ships, follow the Phase 02 precedent (F-16: link deferred until destination exists) — PM decision D-03; (c) WhatsApp link: add `rel="noopener noreferrer"` and decide whether it should open a new tab at all (the project's Hero WhatsApp link does not use `target`). Benefit: no dead anchor; consistent link behavior. Risk: depends on Contact section scope. PM approval: YES.

**PI-06 — CTA hover/focus states.**
Problem: ISS-04, ISS-05. Change: replace the white-on-`#25d366` hover with a combination meeting WCAG 1.4.3 (4.5:1 for 15px/700 text), and add an explicit `:focus-visible` indicator with sufficient contrast on both the dark (≥479px) and light (≤478px) card backgrounds. Colors are a PM decision (D-05). Benefit: usable states for low-vision and keyboard users. Risk: departs from the observed WhatsApp-green hover. PM approval: YES.

**PI-07 — Paragraph rendering of step text.**
Problem: ISS-11 / U-03. Change: render the source's blank-line-separated blocks as separate paragraphs (as the authored CSS intended) or keep the run-in rendering. Recommendation: separate paragraphs; step 4 has three distinct statements run together. Benefit: scanability. Risk: increases step height. PM approval: YES (D-06).

**PI-08 — Static, self-hosted, non-JS image.**
Problem: ISS-09 / U-07. Change: self-host the image per the architecture asset pipeline, with intrinsic `width`/`height`, `srcset`, and native `loading="lazy"` and `decoding="async"` instead of a JavaScript lazy-loader; retain the descriptive alt text (consistent with the Phase 02 PM decision that Hero alts are descriptive, `docs/tracking/FINDINGS.md` FIND-017). Benefit: image visible without JavaScript; reserves space (no layout shift). Risk: source asset must be supplied/approved (D-07). PM approval: YES.

**PI-09 — Anchor offset under the fixed Header.**
Problem: EXT U-10. Change: give the section a `scroll-margin-top` sized to the measured Header height at each viewport so the H2/eyebrow is not hidden after anchor navigation (Menu and Bottom Navigation link to `#como-trabajamos`). Benefit: correct landing position. Risk: Header geometry changes per viewport; measure at implementation. PM approval: YES.

**PI-10 — Reduced-motion coverage for the CTA transition.**
Problem: ISS-12. Change: under `prefers-reduced-motion: reduce`, remove the 1px hover lift; color changes may remain. Covered by MOT-07. PM approval: YES.

## 3. Accessibility Review

Defects (verified in the reference): ISS-04 (hover contrast), ISS-05 (focus indication; mobile variant to be verified), ISS-06/07/08 (semantics), ISS-10 (new-tab link).
Verified OK: step/trust/CTA text contrast (6.36:1, 10.27:1, 10.50:1, 17.09:1); decorative SVGs hidden from AT; descriptive image alt; two links only in tab order, source order matches visual order; content present without JavaScript (text); no autoplay or looping motion.
Optional enhancements (not defects): PI-01, PI-03, PI-04; touch targets — CTA buttons are 50px tall (EXT §7), no smaller targets exist in the section; not measured against a PM-approved target size (none approved).
Interaction discoverability: steps, trust items, and image are non-interactive and must remain so. Do not add tab stops or focus styling to non-interactive items.
Motion sensitivity: every motion proposal below defines a `prefers-reduced-motion: reduce` behavior; content never depends on animation completing.

## 4. OnePage SEO Review

**OBSERVED SEO STATE** (reference page): one H1 in the Hero (`Diagnóstico y reparación de lavadoras y refrigeradores a domicilio`); this section's H2 is a question (`¿Cómo funciona nuestro servicio de reparación a domicilio?`); sibling H2s follow for Servicios and Cobertura; all section text is in served HTML; section id is `como-trabajamos`, already the target of the approved Menu link; no structured data in the section; CTA image needs JavaScript to display.

**SEO ISSUES:** ISS-03 (dead `#contacto` anchor — an internal link to a missing target); ISS-09 (image only via JavaScript); ISS-06 (flat H3 outline).

**SEO PROPOSED IMPROVEMENTS:**
- Keep the section as an H2 beneath the page H1 (no new H1, no competing pseudo-H1). The eyebrow remains a non-heading element. PI-03 removes the sibling-H3 flattening.
- Keep `#como-trabajamos` as the canonical anchor. Already used by the approved Menu; the staging id is identical. No second anchor alias is proposed.
- Link text is descriptive (`Solicitar revisión`, `Contactar por WhatsApp`); no change.
- Keyword use: H2, intro, CTA, and image alt repeat "reparación/lavadoras y refrigeradores/a domicilio" naturally; no stuffing observed; no additional keyword insertion is proposed.
- Duplication risk: the H1 and the H2/intro share the "reparación … a domicilio" phrasing. This reinforces service intent without competing; copy is not proposed for change. Duplicate checks against Services, Coverage, Brands, Testimonials, Contact cannot be completed for the new architecture because those sections do not exist in the repository (only the staging reference is available). Staging H2s observed: Servicios, Cobertura. Brands/Testimonials/Contact were not extracted (UNKNOWN; page-wide SEO sign-off must wait for those sections).
- Images: the single photograph is informational (technician diagnosing a washing machine) and keeps a descriptive alt; icons are decorative and hidden from AT.
- Structured data: **not proposed.** The repository has no page-wide structured-data strategy (UNKNOWN), and nothing in the section is a self-contained entity that justifies markup on its own. Any process markup would need a PM-approved page-wide strategy first (D-12).
- JavaScript independence: all motion proposals are progressive enhancement; text content must remain visible with JavaScript unavailable or failing (see §6 constraints).

**PM DECISION REQUIRED:** D-02, D-03, D-04, D-12.

## 5. Architecture-Fit Review

All items are proposals for the later implementation milestone; none changes approved architecture.

- Component boundary: one Nunjucks component under `src/_includes/components/`, included from `src/index.njk` inside the existing `<main>` after the Hero, in OnePage order. Filename is a PM decision (D-09). Proposal: `process.njk` with root class `sm-process` — the architecture's confirmed section list names the section "Process", the reference's own classes are `sm-process*`, and the project already prefixes roots with `sm-` (`sm-hero`, `sm-menu-overlay`). Alternative: `como-trabajamos.njk` / `sm-como-trabajamos`. The anchor id remains `como-trabajamos` either way.
- BEM-lite: elements with `__`, modifiers with `--`; reference class names are evidence, not requirements.
- CSS: new block appended to `src/assets/css/main.css` in the same order as the components, with a section comment, using existing `:root` tokens (`--sm-primary`, `--sm-primary-hover`, `--sm-dark-soft`, `--sm-text`, `--sm-text-secondary`, `--sm-white`, `--sm-space-section`, `--sm-space-inline`). Values not present as tokens (`#f2f5ff`, `#34405f`) should become tokens only if reused.
- Fonts: Inter 700 and Open Sans 400/600/700 are already self-hosted; no new font assets.
- Assets: one CTA image (WebP) under `src/assets/images/` through the existing passthrough pipeline; SVG icons inline in the template (as in the reference) or as repeated includes only if reuse appears — no sprite/macro layer unless justified.
- JavaScript: the base section (static HTML + CSS) needs none. Motion proposals marked JS YES would add at most one small native-ESM file under `src/assets/js/` (e.g., one IntersectionObserver), loaded from `src/_includes/base.njk` like the existing modules. IntersectionObserver is an appropriate native API for one-shot reveal; no library is needed or proposed.
- CSS-only path: scroll-driven animation (`animation-timeline: view()`) could replace the observer; browser support baseline is not defined in the repository (D-11), so it is offered only as a CSS-only alternative behind `@supports`.
- Static fallback: first paint must show the final, complete section; hidden/offset starting states may be applied only by a script-added class or inside `@supports`/`prefers-reduced-motion: no-preference` conditions.
- Regression surface: Header (fixed, `z-index: 40`), Hero, Menu overlay (1300) and Menu trigger (1301), Bottom Navigation (1200, fixed; `.sm-page-scroll` reserves `86px + safe-area` bottom padding at ≤478px). The shell scrolls with the document (`.sm-page-scroll` is not a scroll container), so an IntersectionObserver with the default viewport root works; observer margins must account for the fixed Bottom Navigation overlapping the lower viewport edge. No section element may set `z-index` at or above 40 against the Header, and no `transform` should be applied to an ancestor of fixed elements.
- Files likely touched at implementation (for scoping in M03-04, not authorization): `src/index.njk`, new component `.njk`, `src/assets/css/main.css`, optionally one new `src/assets/js/*.js` and `src/_includes/base.njk`, image asset.
- Prohibited without separate approval: Tailwind, Bootstrap, Sass/Less, bundlers, animation libraries, external font/CDN, new architecture layers. None is needed by any proposal below.

## 6. Motion / Interaction System

### 6.1 Observed motion state
No entrance, scroll, or progress animation exists. The only motion is a 0.2s CTA transition with a 1px hover lift, not covered by reduced-motion rules (EXT §10). Verdict: **MOTION LIMITATION** — the process is a sequence, yet nothing communicates progression; the section reads as a static poster.

### 6.2 Design intent (proposed, unapproved)
Motion should reinforce one idea — *a guided sequence toward a decision* — and do nothing else. It should: reveal content once as it enters view, draw the connector to communicate order, give the current step a restrained emphasis on narrow layouts, and give interactive elements consistent feedback. It should not loop, track the pointer, or run while content is off-screen.

### 6.3 Global constraints for every proposal
1. Final state is the default state. Content is fully visible and laid out with no JavaScript, no animation support, and under `prefers-reduced-motion: reduce`.
2. Only `transform` and `opacity` animate (compositor-friendly); no layout properties; no `box-shadow`/`filter`/`stroke-dashoffset` animation in the base proposals.
3. One-shot, not looping. No `requestAnimationFrame` loops. No scroll listener doing per-frame work.
4. No animation library, bundler, or dependency.
5. Nothing may delay or hide LCP-critical content; the section is below the Hero.
6. Elements revealed by motion must also be revealed when they receive keyboard focus or are reached via anchor navigation.
7. Hover-only effects are gated to `(hover: hover) and (pointer: fine)`; coarse-pointer devices get no hover effects and no pointer-following behavior.
8. The only device-capability signals proposed are `prefers-reduced-motion` and the hover/pointer media features. No heuristic device-capability sniffing is proposed, and low-end-device performance has not been measured (D-11).
9. Durations/ranges below are proposal ranges for PM to approve or adjust; they are not tested values.

### 6.4 Proposals

Fields common to all: PM approval required: **YES**. Reduced motion means `@media (prefers-reduced-motion: reduce)`.

**MOT-01 — Content reveal on entry (header block, steps, trust items, CTA card)**
- Purpose: signal sequence and pace reading. Benefit: the process unfolds in reading order instead of arriving as one block.
- Trigger: element/group enters the viewport (once). Affected: `sm-process` header block, each step, each trust item, CTA card.
- Behavior: opacity 0→1 with translateY (small distance; proposal range 12–24px) → 0; stagger between siblings (proposal range 60–100ms per item, capped so the whole group finishes quickly); total per element proposal range 350–600ms ease-out. Once only; never replays on scroll back.
- Desktop: steps reveal left→right with stagger. Tablet / Mobile Landscape: reveal by DOM order, row by row. Mobile Portrait: each step reveals as it enters, no stagger (vertical sequence), shorter distance.
- Pointer/coarse: no dependence. Keyboard/focus: reveal on `focusin` so a tabbed-to CTA is never invisible; anchor navigation reveals the target group.
- Reduced motion: no animation; elements render in final state immediately.
- JavaScript required: YES (one IntersectionObserver adds a class). CSS-only alternative: **YES** — `animation-timeline: view()` with `@supports`, falling back to static (browser support undefined, D-11).
- Performance risk: **LOW** (transform/opacity, one-shot, 1 observer for ~17 targets; expected, not measured). Complexity: LOW–MEDIUM. Regression risk: LOW; main risk is hidden content if the hidden state is applied without a guaranteed reveal path (mitigated by constraint 1 and 6) and find-in-page matching not-yet-revealed text.

**MOT-02 — Connector draw (progress line)**
- Purpose: show order and direction. Benefit: the line "leads" the eye step 1→5.
- Trigger: steps group enters the viewport (once). Affected: the connector pseudo-element(s).
- Behavior: Desktop (the single horizontal line): `scaleX` 0→1 from the left over a range of 600–900ms, starting with step 1's reveal. Mobile Portrait (vertical line): `scaleY` 0→1 per segment, top→bottom, tied to each step's reveal. The segmented 479–991px composition (solid and dashed pieces): **no draw proposed** — connectors fade in with their step (MOT-01), because segment drawing across a wrapped grid is complex for little benefit.
- Reduced motion: lines render fully drawn. Keyboard/focus: not focusable; no implication. Pointer: none.
- JavaScript required: YES (shared observer). CSS-only alternative: **YES** (view-timeline, support-gated).
- Performance risk: **LOW** for the one-shot variant. A scroll-linked variant (line progress follows scroll position) is **MEDIUM**: continuous updates tied to scroll and more interaction with the fixed Bottom Navigation; its lower-cost alternative is the one-shot variant (recommended).
- Complexity: MEDIUM (four layout variants). Regression risk: LOW–MEDIUM (connector geometry is layout-dependent: `top: 42px` center-line, `left/right: 10%`).

**MOT-03 — Current-step emphasis (Mobile Portrait vertical timeline only)**
- Purpose: orient the reader inside a tall vertical list. Benefit: shows "where am I in the process" on small screens.
- Trigger: a step crosses a band near the viewport center while scrolling. Affected: that step's visual disc/badge (subtle scale and ring via transform/opacity on a pseudo-element).
- Behavior: the step in the band gets the emphasis; others return to default; no persistent "completed" state; no ARIA state is added (purely visual; not navigation, so no `aria-current`).
- Desktop / Tablet / Mobile Landscape: not applied (all steps visible together). Pointer/keyboard: none; focus never moves.
- Reduced motion: no scale transition; emphasis may be a static non-animated style change or omitted (PM choice).
- JavaScript required: YES. CSS-only alternative: **NO** (reliable "current element" detection needs observer or support-gated scroll-driven animation).
- Performance risk: **MEDIUM** (state changes repeatedly while scrolling; observer margin must be tuned around the fixed Bottom Navigation). Lower-cost alternative: omit MOT-03 and rely on MOT-01/02 (recommended default).
- Complexity: MEDIUM. Regression risk: MEDIUM (interacts with shell bottom space and nav overlap).

**MOT-04 — Step disc hover feedback (optional)**
- Purpose: tactile polish. Benefit: marginal; risk is implying the step is clickable.
- Trigger: pointer hover over a step on `(hover: hover) and (pointer: fine)`. Affected: step disc.
- Behavior: scale 1→~1.04 over 150–250ms; no color change; cursor unchanged (default).
- Desktop/Tablet/Landscape: as described when a fine pointer exists. Mobile Portrait/coarse pointer: none.
- Keyboard/focus: none — steps stay non-focusable. Reduced motion: removed.
- JavaScript required: NO. CSS-only alternative: N/A (it is CSS). Performance risk: **LOW**. Complexity: LOW. Regression risk: LOW. Recommendation: PM may reasonably decline (D-08).

**MOT-05 — Badge / icon settle inside each step reveal**
- Purpose: add hierarchy to MOT-01 (disc first, then number badge). Trigger: with the step's reveal. Affected: number badge (opacity 0→1, scale 0.85→1) and icon.
- Behavior: starts ~80–120ms after the disc; 200–300ms. Responsive: all layouts identically; Mobile Portrait uses the same.
- Reduced motion: none (final state). Keyboard/pointer: none.
- JavaScript required: YES (inherits MOT-01 class). CSS-only alternative: YES (same view-timeline mechanism).
- Performance risk: **LOW**. Complexity: LOW. Regression risk: LOW. Dependent on MOT-01 approval.

**MOT-06 — CTA media settle**
- Purpose: give the closing decision card presence. Trigger: card reveal. Affected: the photograph.
- Behavior: scale 1.04→1 on the image inside its `overflow: hidden` frame, 500–800ms ease-out, with MOT-01's card reveal. No parallax, no scroll-linked movement.
- Desktop/Tablet/Landscape: image column; Mobile Portrait: 16/9 image above content, same effect.
- Reduced motion: no scale. Keyboard/pointer: none.
- JavaScript required: YES (shared class). CSS-only alternative: YES (view-timeline, support-gated).
- Performance risk: **LOW** (transform on a 1024–1600px WebP in a clipped frame; decode/paint of the image itself is unchanged). Complexity: LOW. Regression risk: LOW; must start only after the image is loaded to avoid animating a placeholder.

**MOT-07 — CTA button state feedback**
- Purpose: make hover/focus/active states consistent and accessible. Evidence: the 0.2s transition and hover lift already exist (OBSERVED); focus/active/contrast do not (ISS-04, ISS-05).
- Trigger: hover (fine pointer), `:focus-visible`, `:active`. Affected: both CTA links.
- Behavior: keep observed color/background/border transition (≈0.2s) and 1px lift on hover; add explicit `:focus-visible` indicator and a pressed state (lift removed); contrast per PI-06.
- Desktop/Tablet/Landscape: dark-card styling; Mobile Portrait: light-card styling with its own focus color. Coarse pointer: no hover lift; `:active` press feedback only.
- Reduced motion: remove the lift/transform; color changes stay (instant or ≤0.2s).
- JavaScript required: NO. CSS-only alternative: N/A. Performance risk: **LOW**. Complexity: LOW. Regression risk: LOW.

### 6.5 Considered and not proposed
| Pattern | Reason |
|---|---|
| Parallax / scroll-pinned or horizontally hijacked process | HIGH risk: scroll-jacking, accessibility and anchor-navigation conflicts, interaction with fixed Header and Bottom Navigation |
| Scroll-linked connector progress | MEDIUM; one-shot variant (MOT-02) gives most of the value at lower cost |
| Icon stroke-draw (`stroke-dashoffset`) on the ten SVG icons | MEDIUM: paint-bound, ten simultaneous paths; transform-only MOT-05 is the lower-cost alternative |
| Looping/idle animations (pulsing discs, floating icons) | Continuous cost, motion-sensitivity risk, no user benefit |
| Number count-ups, typing effects | No numeric content; delays comprehension |
| Animation libraries (GSAP, Lottie, anime.js, etc.) | Not allowed without approved architecture change; no documented need |
| Illustration motion | NOT APPLICABLE — the section has a photograph and icons, no illustration |
| Section-aware active navigation | Global feature already planned elsewhere (`docs/ARCHITECTURE.md`); outside this section |

### 6.6 Performance-risk summary

| ID | Mechanism | JS | CSS-only alt | Expected risk | Lower-cost alternative (required for MEDIUM/HIGH) |
|---|---|---|---|---|---|
| MOT-01 | one-shot reveal, transform/opacity | yes | yes | LOW | — |
| MOT-02 (one-shot) | `scaleX/Y` on pseudo-element | yes | yes | LOW | — |
| MOT-02 (scroll-linked) | per-scroll progress | yes | partial | MEDIUM | one-shot variant |
| MOT-03 | observer band, repeated state toggles | yes | no | MEDIUM | omit; rely on MOT-01/02 |
| MOT-04 | hover scale | no | n/a | LOW | omit |
| MOT-05 | badge/icon settle | yes | yes | LOW | omit |
| MOT-06 | image scale in clipped frame | yes | yes | LOW | static image |
| MOT-07 | button states | no | n/a | LOW | — |

No numeric performance threshold is approved; none is asserted. All classifications are expected risk to be measured later under `docs/TESTING-PROTOCOL.md` (report measured results without an invented PASS criterion unless the PM approves one — D-11).

### 6.7 Recommended motion system (unapproved)
Recommend approving, as one coherent package: **MOT-01, MOT-02 (one-shot), MOT-05, MOT-06, MOT-07**. Offer **MOT-04** and **MOT-03** as optional, with MOT-03 defaulting to omitted. Implement as progressive enhancement with a single small native-ESM observer (or the `@supports` CSS-only path if the PM sets a browser baseline that supports it). This yields: static-first HTML, no dependency, compositor-only animation, and complete reduced-motion parity.

## 7. Open Questions / UNKNOWN Items
See `EXT §15` (U-01 … U-10). Additional UNKNOWN items raised in this review:
- Brands, Testimonials, Contact sections are not extracted; page-wide SEO duplication checks against them are not possible yet.
- Browser-support baseline and low-end-device targets (D-11).
- Whether `#contacto` or `#agendar-diagnostico` is canonical (D-02).
- Header height at all viewports for the anchor offset (PI-09).

## 8. Product Manager Decision Register

Reconstruction-critical = blocks scope freeze (EXT §18).

| ID | Decision required | Options / extractor recommendation | Blocks freeze |
|---|---|---|---|
| D-01 | Type scale for H2, steps-group title, step titles (U-01, ISS-01, ISS-02) | (a) reproduce observed computed values; (b) reproduce authored values; (c) PM-specified scale. Recommendation: (c) or a measured scale that keeps step titles inside their columns (PI-02) | YES |
| D-02 | Canonical Contact/Scheduling anchor and primary CTA target (U-02, ISS-03) | `#contacto` (reference/Menu) vs `#agendar-diagnostico` (Bottom Navigation) | YES |
| D-03 | Behavior of the primary CTA if its target section does not exist at ship time | link now / non-link until target exists (F-16 precedent) / point to WhatsApp only | YES |
| D-04 | Heading levels in the section (PI-03) | A (steps H4) / B (as observed). Recommendation: A | NO |
| D-05 | CTA hover and focus colors (PI-06) | PM-specified palette meeting contrast | NO |
| D-06 | Step text paragraphs (PI-07, U-03) | separate paragraphs / run-in | NO |
| D-07 | CTA image: supply source file, confirm ownership/licence, approve self-hosting (PI-08, U-07) | approve / provide alternative | YES |
| D-08 | Motion package approval, per MOT-ID (§6.7) | approve / reject / amend each; confirm duration ranges | NO for freeze of static scope; YES for any motion scope |
| D-09 | Component filename and root class (§5) | `process.njk` / `sm-process` (recommended) vs `como-trabajamos.njk` | NO |
| D-10 | Keep both the step list and the trust strip (redundancy) | keep (default) / merge / drop | NO |
| D-11 | Browser-support baseline; whether any numeric performance threshold is approved | PM-defined, or "report measured values only" | NO (needed before motion testing) |
| D-12 | Structured data for the page | none (recommended for this section) / page-wide strategy | NO |
| D-13 | Confirm accuracy of commercial claims in the copy (U-08) | confirm / correct | YES before publication |
| D-14 | Layout for widths where steps overflow (U-04) — validate the intended layout once D-01 is decided | PM decision with measurement | YES |
| D-15 | Whether Phase 03 PROJECT-STATE entry (Phase 3, discovery/planning, implementation not authorized) is accepted as written by this assignment | accept / revise | NO |

## 9. Acceptance Criteria (this milestone)
- Every issue is evidence-linked (EXT section).
- Every proposal carries Problem/Evidence/Change/Benefit/Risk/PM-approval fields; every motion proposal carries all fields required by M03-00 §11.
- No proposal is recorded as approved.
- Every MEDIUM/HIGH proposal lists a lower-cost alternative.
- Decision register complete.
- Milestone moves to COMPLETED only after the Product Manager records approval or rejection of each proposal in the repository (M03-03).

## 10. Execution Record

### Started
2026-10-10

### Completed
UNDEFINED — pending Product Manager review.

### Git Commit
Recorded in the final report; see Git history for `docs: add Phase 03 discovery and planning package`.

## Findings
None recorded. Reference defects are recorded above as ISS-xx, not as project findings. No project bug exists (no implementation).

## Bugs
None recorded.

## Pending Items
All decisions in §8.

## Decisions Required
D-01 … D-15 (§8). If a required decision is undefined, execution must stop and request clarification from Julián Cely.

## Handoff
Not generated. An implementation handoff is produced only after scope freeze (M03-03).
