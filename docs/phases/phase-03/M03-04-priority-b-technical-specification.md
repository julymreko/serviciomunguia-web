# M03-04 — Priority B Technical Specification: Dynamic Scroll-Driven Process Stepper

## Identification

Phase: 03 — CÓMO TRABAJAMOS
Milestone: M03-04 — OpenCode Implementation, Priority B (dynamic scroll-driven process stepper)
Status: APPROVED BY THE PRODUCT MANAGER — 2026-10-27 (PD-30 in `docs/phases/phase-03/M03-04-opencode-implementation.md`). Priority B implementation was authorized in four stages by the Product Manager on 2026-10-27 (PD-31 in the same file). Priority B was implemented in four stages: stage 1 (Mobile Portrait) on 2026-10-29 (commit 6f1e252), stage 2 (3+2 layouts) on 2026-10-30 (commit 3436414), stage 3 (Desktop) on 2026-10-30 (commit f0743d5) and stage 4 (performance measurement and full regression) on 2026-11-03 without a source change; the traversed-badge colours were amended by PD-32 and the stage decisions are PD-33 to PD-35, all in the same file. The Product Manager's answers to section 13 (Q1 to Q14) were recorded on 2026-10-27 as PD-16 to PD-29 in the same file.
Owner / Approver: Julián Cely — Product Manager
Prepared by: Claude Code (executor), task GOV-01-G10-001, contract-r1 (SHA-256 `47306719eebdb12170b24bd1dca7e4bccdb7ff5dc228eda03e58b9d4da4a3474`)
Reviewer: Codex (review-01 is written by the Reviewer, not by this document)
Baseline: repository HEAD `bc691f964f6ce77848d2b4b51ff588320c2765c7` (branch `main`, working tree clean before this file was added)
Source references: `file:line` citations refer to the baseline.

**Status statement.** This document was issued as a proposal for Product Manager review and was approved by the Product Manager as a whole on 2026-10-27 (PD-30). Items marked **PROPOSAL** or **PM DECISION REQUIRED** were pending when this document was issued; those answered by the Product Manager on 2026-10-27 are resolved by PD-16 to PD-29 (see section 13). Items marked **PROPOSAL** that section 13 did not ask about are part of the approved specification. Priority B implementation was authorized in four stages by the Product Manager on 2026-10-27 (PD-31). Priority C, M03-05, M03-06, commit, push and deployment are NOT AUTHORIZED.

## 1. Traceability — PD-1 to PD-15

Source: `docs/phases/phase-03/M03-04-opencode-implementation.md`, "Priority B — PM Decision Record (2026-10-13)" (lines 132–156).

| ID | Decision (summary) | Covered in |
|---|---|---|
| PD-1 | Continuous, scroll-linked, reversible progress | §4, §5 |
| PD-2 | Architecture C: IntersectionObserver-gated scroll listener + single rAF controller; inactive under reduced motion; CPU-throttled measurement | §4, §8, §10 |
| PD-3 | Stepper absorbs MOT-03 in all layouts; one ring, one detection mechanism, plus traversed state | §4.4, §6.1 |
| PD-4 | No `aria-current` or step-progress ARIA; moving marker `aria-hidden` | §6.4 |
| PD-5 | Reduced motion: step states and connector fills update instantly; marker does not travel | §8 |
| PD-6 | 3+2 layout: marker fades out at end of step 3 stub, fades in at start of step 4 stub; no new path | §5.3, §6.3 |
| PD-7 | Connector fill also works in wrapped 3+2 layout | §5.3, §6.2 |
| PD-8a | Operates in all approved layouts incl. Desktop; geometry and span derived from measured values | §5 |
| PD-9 | Mobile Portrait marker moves at constant speed along actual path length | §5.4 |
| PD-10a | Visual treatment V1: brand-accent progression; marker = solid primary dot with white separation ring; no glow; size to be established | §6 |
| PD-11 | `box-shadow` transition of MOT-03 ring preserved as sole exception; marker and fills use `transform`/`opacity` only | §6.5, §7 |
| PD-12 | Marker created through JavaScript; `process.njk` not modified | §4.5, §12 |
| PD-13 | Not applicable (Alternative B not selected). Traceability only | — |
| PD-14 | Workflow. This document is the step-4 specification for PM review | §2 |
| PD-15 | Bottom Navigation breakpoint alignment at 478.98px: integration consideration only | §9 |

## 2. Status, scope and inputs

- Scope: specification only. No file under `src/` is changed by this document. No authorization of Priority B or PD-15 implementation is implied.
- Inputs read: M03-04 (Priority B record, refinements 1–10, lines 66–86, 123–164); M03-03 (D-08 line 44, D-11 line 47, O-06 lines 100–113, "Amendments by later PM decisions" lines 315–317); M03-02 (MOT-02 line 165–173, MOT-03 line 174–182, constraint 2 line 142); `src/_includes/components/process.njk`, `src/_includes/components/mobile-nav.njk`, `src/assets/js/process.js`, `src/assets/css/main.css` (read only).
- Conflict check (contract stop condition): one item was found and is handled in §8 and §13 as a PM decision, not as a stop: refinement 4 (M03-04 line 77) requires MOT-03 detection under reduced motion; PD-2 forbids the controller under reduced motion; PM record line 164 carries "PD-2 vs PD-5; see also refinement 4" as an open item to the specification.

## 3. Baseline facts (verified at HEAD `bc691f9`)

- `process.njk:1` section `#como-trabajamos`, class `sm-process`; `:12` `ol.sm-process-steps`; `:14, :29, :44, :59, :76` five `li.sm-process-step`; `:16` badge `span.sm-process-step__number[aria-hidden]`; `:93` trust block; `:149` CTA card. `process.njk` is not modified by this specification (PD-12).
- `process.js:9–12` two media queries: reduced motion and `(max-width: 478.98px) and (orientation: portrait)`.
- `process.js:83–105` single reveal IntersectionObserver, `rootMargin: "0px 0px -10% 0px"`, unobserves targets after reveal.
- `process.js:114–125` MOT-03 setup (`setupActiveStep`): runs regardless of reduced motion; attached only in Mobile Portrait.
- `process.js:127–143` MOT-03 detection band: centred on `(innerHeight − .sm-bottom-nav height) / 2`, band height 90px. This is the existing reading-line convention used in §5.
- `process.js:194–196` `is-enhanced` class is not added under reduced motion. `process.js:204–210` error path restores visibility.
- `process.js:212–218` `matchMedia` change listener and `resize` listener (`passive`).
- `main.css:1583–1600` `.sm-process`; `:1597–1599` `scroll-margin-top` (desktop); `:2099–2103` portrait `scroll-margin-top`.
- `main.css:1669–1676` `.sm-process-steps` (`position: relative`, grid).
- `main.css:1686–1701` `.sm-process-step__visual`: 84 × 84 px disc, `background: var(--sm-primary)`, icon colour `#f2f5ff`.
- `main.css:1708–1730` `.sm-process-step__number`: 30 × 30 px, `top: -6px; right: -6px`, 2px `--sm-primary` border, white background, primary text.
- `main.css:1989–1999` desktop track `.sm-process-steps::before` (2px, `top: 42px`, `rgba(26,42,211,0.20)` at `:1997`).
- `main.css:2017–2084` 479–991.98px grid: six columns, 3+2 placement (`:2027–2033`), MOT-02 segment connectors and dashed wrap connectors (`:2035–2078`).
- `main.css:2086–2141` ≤478.98px vertical layout; vertical connector `::after` at `top: 84px; left: 41px; bottom: -40px; width: 2px` (`:2129–2139`).
- `main.css:2323–2401` motion layer under `prefers-reduced-motion: no-preference`; reveal, badge settle (`:2378–2390`), CTA image settle (`:2393–2400`).
- `main.css:2403–2425` MOT-02 one-shot connector draw (desktop `scaleX`, portrait `scaleY`).
- `main.css:2438–2443` MOT-03 ring: `box-shadow: 0 0 0 6px rgba(26,42,211,0.16)` on `.sm-process-step.is-current .sm-process-step__visual`, scoped `max-width: 478.98px`.
- `main.css:2445–2455` MOT-03 transition `transform 250ms` and `box-shadow 250ms` (`:2447–2449`); scale `1.06` (`:2453`).
- `main.css:2457–2467` reduced-motion button rules.

## 4. Architecture C controller (PD-1, PD-2, PD-3, PD-9, PD-12)

**PROPOSAL.** All logic lives in `src/assets/js/process.js` (native ESM, existing module, PM-approved Proposal A for planning). Helper functions stay local to the module (refinement 8).

### 4.1 Gating

1. Guard: exit if `#como-trabajamos` is absent (refinement 9).
2. Reduced-motion gate: `matchMedia("(prefers-reduced-motion: reduce)")`. The scroll controller in §4.2 is **not created** while reduced motion matches. Reduced-motion behaviour is §8.
3. Visibility gate: one `IntersectionObserver` observes the process section (`.sm-process`), `threshold: 0`, no `rootMargin`. While the section intersects the viewport, the controller is active. When it leaves, the controller is stopped (listener removed, no pending frame).

### 4.2 Single rAF controller

- One passive `scroll` listener, attached only while active (§4.1-3).
- Each scroll event sets a flag and requests a frame only if no frame is pending. There is at most one pending `requestAnimationFrame` at any time.
- Inside the frame, the controller reads the reading-line position from cached geometry (§4.3), computes progress for each segment, and writes state. It does not read layout after writing (read phase first, write phase second).
- Geometry is measured on controller start, on `resize`, and on `matchMedia` change (layout change). It is not re-measured on every frame. Measurement uses `offsetTop`/`offsetLeft` chains (transform-free), as in §14.

### 4.3 Reading line

**PROPOSAL.** Reading line `Ly` in viewport coordinates:
- Bottom Navigation visible: `Ly = (innerHeight − bottomNavHeight) / 2`. This reuses the MOT-03 convention (`process.js:133–136`).
- Bottom Navigation not visible: `Ly = innerHeight / 2`.
- Reading-line fraction and whether Bottom Navigation is the only occluder: **PM DECISION REQUIRED** (§13, Q2).

### 4.4 MOT-03 absorption (PD-3)

- One detection mechanism: the controller in §4.2. The separate portrait-only MOT-03 observer (`process.js:114–179`) is removed for Priority B.
- One active-step ring: the MOT-03 ring (`main.css:2438–2443`) applies in all layouts, not only ≤478.98px.
- Additional traversed-step state (§6.3).

### 4.5 Marker ownership (PD-12)

- The marker and connector fill layers are created by JavaScript as `aria-hidden="true"` children of `.sm-process-steps`. `process.njk` is unchanged.
- The `.sm-process-steps` container is already `position: relative` (`main.css:1670`), so absolutely-positioned marker and fill elements have a containing block.

## 5. Geometry and reading-line behaviour per layout (PD-6, PD-7, PD-8a, PD-9)

### 5.1 Measured values (observed)

Measurement method and limits: §14. All values in CSS px, document coordinates, headless Chrome, single run per viewport, page as built from baseline. The "visual centre" is the centre of `.sm-process-step__visual` (84 px disc).

| Layout (viewport) | Grid | Step visual centres (x, y) | Steps list (top, left, w, h) | innerHeight | scroll-margin-top |
|---|---|---|---|---|---|
| Desktop 1440 × 900 | 5 columns, one row | 1: (207, 1433); 2: (460, 1433); 3: (713, 1433); 4: (965, 1433); 5: (1218, 1433) | 1391, 93, 1240, 418 | 900 | 207.6 px |
| Tablet 820 × 1180 | 3+2 (6 tracks) | Row 1 y = 1744: (148), (402), (657); Row 2 y = 2144: (275), (530) | 1702, 33, 739, 807 | 1180 | 182.8 px |
| Mobile Landscape 844 × 390 | 3+2 (6 tracks) | Row 1 y = 957: (153), (415), (677); Row 2 y = 1358: (284), (546) | 915, 34, 762, 809 | 390 | 183.76 px |
| Mobile Portrait 390 × 844 | 1 column | x = 62; y: 1596, 1852, 2127, 2358, 2647 | 1554, 20, 335, 1301 | 844 | 152 px |

Bottom Navigation (measured): display `none` in Desktop, Tablet and Mobile Landscape; display `block`, height 80 px at 390 × 844.

**Important observation.** 844 × 390 is inside the 479–991.98 px band (`main.css:2017`). Its layout is the 3+2 grid, not a separate layout. See §13, Q7.

**Note (2026-10-29, review of task M03-04-PB-01, discrepancy B-1).** The Mobile Portrait row above is a historical measurement taken on the baseline build; it is preserved as recorded. On the build with stage 1 (commit 6f1e252) the report of task M03-04-PB-01 measured, at 390 × 844: step visual centres at y 1571.91, 1827.91, 2077.91, 2308.91 and 2597.91; steps list top 1529.91 and height 1276. The implementation computes geometry at runtime, so no requirement depends on these values. The other rows were not re-measured.

### 5.2 Scroll span (DERIVED from §5.1; arithmetic only)

Scroll position `s` at which the reading line `s + Ly` (document coordinates) reaches step 1 and step 5 visual centres: `start = A1 − Ly`, `end = A5 − Ly`, span `= A5 − A1`. Values use the §4.3 proposal.

| Layout | Ly (derived) | Start scrollY | End scrollY | Vertical span (A5 − A1) |
|---|---|---|---|---|
| Mobile Portrait 390 × 844 | 382 (= (844 − 80) / 2) | 1214 | 2265 | **1051 px** |
| Mobile Landscape 844 × 390 | 195 | 762 | 1163 | **401 px** |
| Tablet 820 × 1180 | 590 | 1154 | 1554 | **400 px** |
| Desktop 1440 × 900 | 450 | — | — | **0 px** (all anchors on one row; see §13, Q3) |

Consequence: the reading-line principle (PD-8a) produces a usable vertical span only in the layouts with more than one row. In Desktop it produces none. This is an open PM decision (Q3), not a value chosen here.

### 5.3 Wrapped 3+2 layout (PD-6, PD-7)

Measured connector stubs (from computed pseudo-element geometry, `main.css:2050–2078`):
- Step 3 `::after` (`main.css:2050–2063`): horizontal from x ≈ 718.9 to x ≈ 795.8 at y = 957 (Mobile Landscape). This is the "end of step 3 stub".
- Step 4 `::before` (`main.css:2065–2078`): horizontal from x ≈ 34.1 to x ≈ 241.9 at y = 1358 (Mobile Landscape). This is the "start of step 4 stub".

**PROPOSAL (PD-6).** Marker opacity is 0 between the end of the step 3 stub and the start of the step 4 stub. No connecting path is drawn. Opacity fades in/out with progress, using `opacity` only.

**PROPOSAL (PD-7).** Fill for each connector segment is driven by the same progress value as the segment's own traversal, using `transform: scaleX` on a JS-created element that overlays the existing 20 % track (§6.2).

Row-1 horizontal path (Mobile Landscape, derived): x 153 → 677 = 524 px. Row-2: x 284 → 546 = 262 px. The mapping between the horizontal row path and the vertical scroll span is not defined by the PM record (Q6).

**Note (2026-11-03): behaviour as implemented in stage 2 (task M03-04-PB-02, commit 3436414; PD-33).** Each row of the wrapped layout is the box of its step items; the marker advances while the reading line crosses that row (PD-21) and is hidden in the gap between the rows, where it switches to the next row. There are five connector fills, including the two wrapped stubs, all solid primary (S-2). With motion allowed, the traversed state and the active ring follow the marker; under reduced motion the whole row changes at once (S-1). The tolerance between a fill and its track is 1 px (S-3). Observed at 820 × 1180 (reading line 590 px): row 1 spans 1701.94 to 2053.94 (352 px), row 2 spans 2101.94 to 2467.94 (366 px), and the gap is 48 px. The marker changes position only while the reading line is inside a row extent, plus the frames at the row boundaries (the clamp frames past the end of a row and the frames in the gap); in the 20 px per frame scroll of task M03-04-PB-04 at 820 × 1180 this was 39 changes in 116 frames. The historical text above is preserved.

### 5.4 Mobile Portrait constant speed (PD-9)

Constant-speed travel along the actual path length: path = centre-to-centre sum of the four vertical segments.

- Segment lengths (derived): 256, 275, 231, 289 px (sum 1051 px).
- **PROPOSAL.** Marker position `m = (s + Ly − A1)`, clamped to `[0, 1051]`. Progress `p = m / 1051`. Constant speed is inherent: `m` is linear in scroll.

### 5.5 Desktop single-row

Horizontal path (derived): x 207 → 1218 = 1011 px at y = 1433. Vertical span = 0 (§5.2). No progress mapping is proposed for Desktop beyond the open decision in §13, Q3.

**Note (2026-11-03): behaviour as implemented in stage 3 (task M03-04-PB-03, commit f0743d5; PD-18, PD-33, PD-34).** Desktop applies from 992 px. The vertical extent of the steps list is the single row extent: the row top is the list top and the row bottom is the list top plus the list height (PD-18); the horizontal path runs from the centre of step 1 to the centre of step 5; there are four solid primary fills. Observed at 1440 × 900 (reading line 450 px): the list spans 1390.56 to 1808.56 (418 px). The marker changes position only while the reading line is inside that extent, plus the one frame past the end where it clamps to the last position; in the 20 px per frame scroll of task M03-04-PB-04 this was 21 changes in 93 frames. The current-step rule is C-1 (PD-34). Under reduced motion all five steps change together (S-1). The historical text above is preserved.

## 6. Visual states and tokens (PD-3, PD-4, PD-7, PD-10a, PD-11)

### 6.1 States

| State | Visual | Source |
|---|---|---|
| Pending | Unchanged: primary disc, `#f2f5ff` icon, white-background badge with primary numeral | `main.css:1686–1730`; PD-10a |
| Active (current) | MOT-03 ring: `box-shadow: 0 0 0 6px rgba(26,42,211,0.16)` on the disc; in motion mode `transform: scale(1.06)` | `main.css:2440–2454`; PD-3 (all layouts) |
| Traversed | Badge background `#bfeacf`, 2 px border `#ffffff`, numeral `#0f5c33` (contrast 6.11 on `#bfeacf`); instantaneous change, no transition | PD-10a, amended by PD-32 |
| Current and traversed | Ring plus traversed badge (both) | PROPOSAL |

**Note (PD-32, 2026-10-29).** The Traversed row originally read: "Badge filled with `--sm-primary`; numeral `#ffffff`" (PD-10a). After visual validation of stage 1 the Product Manager amended the colours (PD-32 in `docs/phases/phase-03/M03-04-opencode-implementation.md`); the colour change is instantaneous, with no transition.

**Carry-over for the stage 2 contract (review A-2 of task M03-04-PB-01; not a decision).** The stage 1 CSS for the marker, the fills and the traversed badge is not wrapped in `@media (max-width: 478.98px)`. It has no effect outside Mobile Portrait, because those elements and the `is-traversed` class exist only there. The stage 2 contract may wrap it in that media query.

Active-state detection is the single mechanism of §4 (not `aria-current`, PD-4).

### 6.2 Connector fill

- Track: the existing 20 % tint (`rgba(26,42,211,0.20)`, `main.css:1997`, `:2046`, `:2138`).
- Fill: `--sm-primary` (`#1a2ad3`) on a JS-created element. Desktop and 3+2 horizontal segments: `transform: scaleX(progress)`, `transform-origin: left`. Mobile Portrait segments: `transform: scaleY(progress)`, `transform-origin: top`.
- Fill is scroll-linked: no CSS `transition` on fill, because the controller already moves it frame by frame.

### 6.3 Marker

- Solid `--sm-primary` dot with a white separation ring. No glow. No `box-shadow` on the marker (PD-11).
- Size: **PM DECISION REQUIRED** (PD-10a: between the 2 px connector and the 30 px badge). **PROPOSAL** for decision: 12 px diameter including a 2 px white ring. Not measured; a design proposal only.
- Position: `transform: translate(x, y)` only. Opacity for PD-6 fade: `opacity` only.
- `aria-hidden="true"`; no role, no label (PD-4).

### 6.4 Accessibility

- No `aria-current`, `aria-selected`, `aria-live` or other progress state (PD-4). O-06 preserved.
- The `ol > li` structure and visible numbers (`process.njk:14–89`) remain the only semantic progress information.

### 6.5 Animation exception (PD-11)

- Permitted `box-shadow` transition: MOT-03 ring only (`main.css:2447–2449`). No other `box-shadow` or `filter` animation.
- Marker and connector fills animate with `transform` and `opacity` only.

## 7. MOT-02 coexistence with the reversible scroll-linked system

**PROPOSAL.**

- Two layers, two elements. Layer 1 is the existing MOT-02 one-shot track draw (`main.css:2403–2425`, triggered by `drawConnector`, `process.js:32–39`). Layer 2 is the scroll-linked fill (§6.2), a separate JS-created element above the track.
- MOT-02 remains one-shot and never reverses (refinement 2). Layer 2 is reversible and follows scroll (PD-1).
- Ordering: Layer 1 runs once on entry (existing trigger). Layer 2 is set from scroll progress independently of Layer 1. Whether Layer 2 must wait for Layer 1 to complete is open (Q11).
- Reduced motion: Layer 1 shows its final state (`process.js:33`, no animation); Layer 2 follows §8.

## 8. Reduced-motion state-update mechanism (PD-2 vs PD-5; refinement 4)

The three options below are **PROPOSALS**. The choice is a **PM DECISION REQUIRED** (Q4).

- **Option R1 — controller active, instant updates.** Conflicts with PD-2 ("controller must not run under reduced motion"). Not recommended.
- **Option R2 — static final state.** Satisfies PD-2 literally. Steps are shown in their final state; the marker is absent. Conflicts with PD-5 (states must update, not stay static) and with refinement 4 (detection must continue). Not recommended.
- **Option R3 — discrete state via IntersectionObserver, no rAF, no scroll listener (recommended).**
  - A separate IntersectionObserver with a single threshold per step visual, using the same reading-line band as §4.3 (`rootMargin` derived from `Ly`).
  - A step becomes "traversed" when its visual centre crosses `Ly` downward; the current step gets the ring. States update on the observer callback, with no animation (PD-5).
  - No `requestAnimationFrame`, no scroll listener, no marker travel (PD-5). The marker is hidden under reduced motion.
  - Consistent with PD-2 (controller off), PD-5 (instant state updates), and refinement 4 (detection continues, via observer).
  - Trade-off: discrete steps instead of continuous progress; no connector fill animation. Connector fill is set to final state per traversed segment.

## 9. Bottom Navigation breakpoint alignment (PD-15)

Integration consideration only. No implementation is proposed. Future authorization must enumerate the affected selectors and state which are in scope (PD-15).

**Process side (478.98 px):**
- `process.js:11` `(max-width: 478.98px) and (orientation: portrait)`.
- `main.css:1542`, `:2086`, `:2166`, `:2256`, `:2416`, `:2439`, `:2445` (`max-width: 478.98px` blocks).

**Bottom Navigation / shell side (478 px):**
- `main.css:1090` `@media (max-width: 478px)` block: `.sm-app-shell` (`:1091`), `.sm-page-scroll` (`:1101`), `.sm-bottom-nav` (`:1108`).
- `main.css:1094` `width: min(100%, 478px)` on `.sm-app-shell`; `:1117` same on `.sm-bottom-nav`.
- Other `max-width: 478px` blocks not related to the Bottom Navigation: `main.css:168` (`.sm-hero__logo`), `:460` (`.sm-hero-cta`), `:857` (`.sm-hero__wrapper`), `:935` (`.sm-hero-cta`), `:1025` (`#sm-hero-carousel`). Listed for completeness; they are outside PD-15 unless the PM decides otherwise.

**Observed gap (A, evidence):** widths in (478, 478.98] px are inside the process MOT-03/stepper breakpoint but outside the `max-width: 478px` Bottom Navigation rules. In that band the reading line (§4.3) would be computed with `bottomNavHeight = 0`, while the nav is `display: none` (`main.css:1086–1088`). The integration decision must cover this band (Q10).

**Update (2026-11-06): PD-15 closed without implementation (PD-37).** The Product Manager decided not to implement the Bottom Navigation breakpoint alignment of this section and to close PD-15 without implementation. The band above 478 px and up to 478.98 px stays handled by the rule of PD-25, and the `max-width: 478px` selectors listed above stay unchanged. The text of this section above this update is preserved as the record of the observation (Historical Records Rule).

## 10. Performance measurement plan (PD-2)

**Plan only. No threshold is asserted (D-11, PD-2).** The stepper does not yet exist, so no stepper value is measured in this document.

- Environment: headless Chrome, production build (`npm run build` output), each approved layout (§5.1), plus 844 × 390.
- CPU throttling: Chrome DevTools `Emulation.setCPUThrottlingRate` with a rate **PM DECISION REQUIRED** (Q9). No rate is proposed as a pass criterion.
- Scroll protocol: scripted scroll from section start to section end at a fixed step size and fixed frame count; PM to decide step size (Q9).
- Metrics, observed values only: scripting time per frame, long-task count, rAF callback durations, number of `getBoundingClientRect`/`offsetTop` reads per frame, number of `scroll` listeners attached, IntersectionObserver callbacks per scroll.
- Baseline (observed in this task, not throttled, single run, not a stepper measurement): Navigation Timing `domContentLoaded` / `load` (ms): Desktop 84 / 144; Tablet 74 / 100; Mobile Landscape 76 / 105; Mobile Portrait 89 / 131.
- Stepper scroll timings: **NOT MEASURED** (stepper not implemented).

**Update (2026-11-03): observed values of Priority B stage 4 (task M03-04-PB-04; PD-24, PD-35).** The plan above was executed; no threshold is asserted and none was approved (D-11, PD-2). Conditions: Chrome 156.0.8078.74 headless (`--headless=new`) driven over CDP, device pixel ratio 1, Windows 11 with an AMD Ryzen 7 5825U; CPU throttling at 1x, 4x and 6x; a scripted scroll of 20 px per frame from the section entering the viewport (section top at the viewport bottom) to the section bottom reaching the viewport top, forward and then reverse; viewports 1440 × 900, 820 × 1180, 844 × 390 and 390 × 844; the build with Priority B (commit f0743d5) against the build before it (the parent of commit 6f1e252); 5 runs per cell, each on a fresh page load; four additional cells under emulated reduced motion. The executor harness ran with hidden scrollbars (scrollbar 0 px).

- Script time (`ScriptDuration`), median ratio with Priority B over without: 1.064 to 1.467 in the forward pass and 1.103 to 1.509 in the reverse pass, over the twelve cells of each pass. In absolute terms the forward-pass median script time with Priority B at 6x CPU was 0.132 s (Desktop), 0.146 s (Tablet), 0.162 s (Mobile Landscape) and 0.195 s (Mobile Portrait) over a scroll lasting about 1.6 to 2.8 s.
- Frame interval, 95th percentile: ratio 0.934 to 1.012; unchanged in practice.
- Long tasks: 0 in every cell with Priority B; 1 long task (57 ms) in a single run without it.
- Layout reads per frame (`getBoundingClientRect` and offset reads) during the motion passes with Priority B: 0, because the geometry is cached; without Priority B, 0.08 in Mobile Portrait.
- `requestAnimationFrame` callbacks: about two per scripted frame with Priority B and one without; medians at most 0.4 ms.
- `scroll` listeners alive at the end of a pass: 1 with Priority B, 0 without. IntersectionObserver callbacks per pass: 5 (Desktop) and 6 (Tablet, Mobile Landscape) in both builds; 13 with and 23 without in Mobile Portrait.
- Reduced motion: no marker, no stepper `scroll` listener, no stepper `requestAnimationFrame` request and no long task.
- Variability: the Mobile Portrait CPU 6x ratio was 1.107 in the first measurement, 1.30 to 1.39 in the first review and 1.437 in the second review; the absolute script times differed between sessions by factors of 1.44 to 3.93, and the cause of the ratio spread is open. The ratios of the three other cells measured in more than one session (Desktop at 1x and 6x CPU, and Mobile Portrait at 1x CPU) agreed between sessions to within 0.01 to 0.09.
- Regression (items B1 to B11 of the task): build and syntax, states against the predicted formulas at six viewports (largest horizontal deviation below 0.005 px, 0.0044 px at Desktop 1440 × 900, and largest vertical deviation 0.016 px at Mobile Portrait), reduced motion, live changes across 992/991, 479/478 and orientation, deep link and reload, no JavaScript, initialization error path, keyboard order and accessibility attributes, unrelated components, console and boundary widths: no deviation from the expectation. The source files stayed unchanged.

**Update (2026-11-04): characterisation of the Mobile Portrait CPU 6x ratio (task M03-04-PB-05; PD-36).** Conditions: Chrome 156.0.8078.80 driven over CDP, viewport 390 × 844, 16 logical processors; the build with Priority B (commit f0743d5; the `src/` files are unchanged in commit 55914de) against the build before it (the parent of commit 6f1e252); the scroll protocol of the update above; 10 runs per build in each session, the builds alternating run by run; the Product Manager's own Chrome browser was also running (30 or 31 other `chrome.exe` processes), with a 1 s CPU load of 7.1 % to 18.3 % before the sessions. No threshold is asserted and none was approved (D-11, PD-2).

- Three sessions at 6x CPU (S1, S2 and S3, at least two minutes apart; S2 started with the build without Priority B): ratio of the median script time, forward pass 1.346, 1.337 and 1.301, reverse pass 1.286, 1.287 and 1.438; forward-pass median script time with Priority B 0.241 s, 0.242 s and 0.232 s, and without it 0.179 s, 0.181 s and 0.178 s. These sessions did not reproduce the forward values 1.107 and 1.437 recorded above.
- One session (S4) at 1x, 4x and 6x CPU: forward ratio 1.334, 1.391 and 1.346; reverse ratio 1.251, 1.381 and 1.255.
- Both builds scrolled the same range (start 0 px, end 3380 px, document height 4224 px) in 169 frames in every run of S1 to S3.
- Hero carousel autoplay: in a separate session (S5) the autoplay was stopped by a page-side script and the ratio was 1.806 (forward) and 1.783 (reverse). Compared with S4 at 6x CPU, the forward-pass median script time fell from 0.238298 s to 0.182437 s with Priority B and from 0.177072 s to 0.101012 s without it. No control with the autoplay running was run in the same session, so the difference is between sessions; the report of the task does not show which code produces the removed time.
- Sampling profile (5 runs per build, 6x CPU, forward pass; profiling changes the absolute times and no ratio is computed from it): `process.js` self time 73.125 ms with Priority B and 4.395 ms without it, of which `updateStepperState` 48.585 ms; the carousel script 4.974 ms and 4.423 ms. 0.967833 (with Priority B) and 0.990389 (without it) of the profiled samples are labelled `(unknown)` and are not attributed to any script; what they contain is not known.
- The data identify no cause of the spread recorded above; the cause remains open.

## 11. Test plan (PROPOSAL)

- Functional: progress monotonic with scroll, reversible; resets at start and end; deep link to `#como-trabajamos` and reload (refinement 10: check first-paint flash).
- Layout: four approved layouts; boundary widths 478/479 and 991/992 (per M03-04 implementation requirements, line 108).
- Reduced motion: emulated `prefers-reduced-motion: reduce`; controller absent (no `scroll` listener, no pending rAF); R3 states update without travel.
- No JavaScript: content fully visible; no stepper elements rendered.
- Keyboard and screen reader: no change in tab order; marker is `aria-hidden`; no progress ARIA present.
- Resize and orientation: geometry recomputed; listener count returns to baseline after teardown.
- Error path: initialization failure restores visibility (`process.js:204–210` pattern).
- Performance: §10, observed values only.
- Regression: Hero, Header, Menu, Mobile Navigation, CTA image, CTA button size (D8), CTA card shadow (D9), Mobile Portrait card backgrounds (D10).

## 12. Proposed implementation allow-list (PROPOSAL; authorized as written by PD-31)

| Path | Proposed change | Note |
|---|---|---|
| `src/assets/js/process.js` | Controller (§4), R3 observer (§8), JS-created marker and fill layers (§4.5), remove MOT-03 portrait-only observer | Existing module; refinements 1–10 apply |
| `src/assets/css/main.css` | Process-only CSS block: marker, fill, traversed badge, ring scope change (§6), reduced-motion rules | No Bottom Navigation selectors (PD-15 separate) |
| `src/_includes/components/process.njk` | **Not included** | PD-12 |
| `src/_includes/components/mobile-nav.njk`, Bottom Navigation selectors (`main.css:1086–1122`) | **Not included** | PD-15 requires separate authorization |
| `package.json`, dependencies | **Not included** | No new dependency |

## 13. Open questions for the Product Manager (RESOLVED 2026-10-27)

Resolved on 2026-10-27. The Product Manager's answers are recorded as PD-16 to PD-29 in `docs/phases/phase-03/M03-04-opencode-implementation.md`, in the order of the questions: Q1 = PD-16, Q2 = PD-17, Q3 = PD-18, Q4 = PD-19, Q5 = PD-20, Q6 = PD-21, Q7 = PD-22, Q8 = PD-23, Q9 = PD-24, Q10 = PD-25, Q11 = PD-26, Q12 = PD-27, Q13 = PD-28, Q14 = PD-29. The questions below are preserved as originally issued. Where a proposal in this document differs from PD-16 to PD-29, the PD-16 to PD-29 text prevails. This resolution did not itself approve the specification as a whole; the Product Manager approved it later on 2026-10-27 (PD-30).

- **Q1 Marker size (PD-10a).** Proposal: 12 px diameter including 2 px white ring. Decide.
- **Q2 Reading-line definition (PD-8a).** Viewport centre, as in the existing MOT-03 band (`process.js:133–136`), or another fraction? Confirm whether Bottom Navigation is the only occluder.
- **Q3 Desktop span (PD-8a).** Vertical anchor span is 0 px in Desktop (§5.2). Choose the span definition for single-row layouts: (a) steps-list box (top 1391 to bottom 1809 at 1440 × 900, derived from §5.1), (b) horizontal progress tied to the row's own scroll window, or (c) another definition. No value is chosen here.
- **Q4 Reduced-motion mechanism (PD-2 vs PD-5; refinement 4).** Options R1, R2, R3 (§8). Recommendation: R3. Decide, and state whether refinement 4 is superseded for Priority B.
- **Q5 Marker when no step is active** (before step 1 and after step 5): hidden, parked at the nearest step, or other?
- **Q6 3+2 and Desktop path mapping (PD-8a, PD-6).** Mobile Portrait mapping is proposed (§5.4). For 3+2 and Desktop, choose linear per-row mapping, equal-time per segment, or another.
- **Q7 Mobile Landscape classification.** 844 × 390 uses the 3+2 grid (§5.1; `main.css:2017`). The contract lists it as a separate layout. Confirm the layout set for the spec: four viewport classes with two sharing the 3+2 grid.
- **Q8 MOT-03 ring scope (PD-3).** Confirm the ring applies to all layouts (§4.4, §6.1).
- **Q9 CPU throttling and scroll protocol (PD-2, §10).** Rate, scroll step size, frame count.
- **Q10 Bottom Navigation band (§9).** Decide how widths in (478, 478.98] px are handled, within PD-15 scope.
- **Q11 Progress-fill timing for Layer 2 vs Layer 1 (§7).** Start fill only after the one-shot track has completed, or immediately?
- **Q12 Connector fill direction in 3+2 (PD-7).** Fill per segment in reading order (left to right, then wrap), or fill the wrapped stub only after row 1 completes?
- **Q13 MOT-02 coexistence confirmation (§7).** Confirm the two-layer rule.
- **Q14 Discrepancy disposition.** Refinements 4 and 5 (M03-04 lines 77–78) and the "Mobile Portrait only" wording in M03-03 D-08/O-06 are not annotated for Priority B. PD-3 amends the scope; a documentary annotation is proposed (task report B item). Confirm the annotation.

## 14. Measurement record

- Build: `npm run build` (Eleventy 3.1.6) passed; output `dist/` is Git-ignored (`.gitignore:9`, verified with `git check-ignore -v dist`). `git status --short` after build: no change.
- Harness: a throwaway static server and a DOM-dump page, kept in the operating-system temporary (scratchpad) directory, outside the repository. Not committed. The page loads the built `index.html` in an `<iframe>` sized to each viewport; geometry is read with `offsetTop`/`offsetLeft` chains (transform-free) and `getComputedStyle` for pseudo-elements.
- Viewports: 1440 × 900, 820 × 1180, 844 × 390, 390 × 844. Single run each.
- Limits: Chrome headless (`--headless=new`); font loading was not separately verified, so text-dependent heights reflect whatever fonts the page resolved in that run; no CPU throttling; no interaction; navigation timing only.
- Values not measured: stepper scroll timings, CPU-throttled timings, marker size. Each is marked **NOT MEASURED** where it appears.
