# M03-05-02 — Functional, Responsive and Accessibility

## 1. Identification

| Field | Value |
|---|---|
| Task | M03-05-02 (task 2 of 3 of M03-05: Functional, Responsive, Accessibility) |
| Spec and contract | `.coordination/tasks/M03-05-02/spec.md` (SHA-256 `988407a155d64316be1aac1b45901186fb872c4949dbfc1de0c5a178952715c7`), `.coordination/tasks/M03-05-02/contract-r1.md` (SHA-256 `6398a8a78458ca92ac061001186739d3c1db65925c671773e7184daa48a25bbd`), approval `.coordination/approvals/M03-05-02/approval.md` (PD-45) |
| Baseline commit | `0560aa03a0a4d3163979b52202179463c3611eef` (contract baseline). HEAD at execution: `6a86594762260e1dbe1284156ecdcb5eff931ab9` (PD-45 transcription, child of the baseline; `git diff --name-only 0560aa0 6a86594` lists only `docs/PROJECT-STATE.md`, `docs/phases/PHASE-03-como-trabajamos.md` and `docs/phases/phase-03/M03-04-opencode-implementation.md`). Authorized by the Product Manager to continue on that basis. |
| Commit range under test | `4d44331..0560aa0` for `src/`: nine commits, oldest first: `9e34424`, `4a8794d`, `22a4999`, `542601e`, `6f1e252`, `3436414`, `f0743d5`, `3865a34`, `ac58265`. No file under `src/` changed after `ac58265`. |
| Date | 2026-11-10 |
| Executor | Claude Code |
| Reviewer | Codex (not yet run; see section 9) |
| Operating system | Microsoft Windows 11 Pro 10.0.26300 |
| Node.js | v24.19.0 |
| npm | 11.17.0 |
| Eleventy | 3.1.6 (`node_modules/@11ty/eleventy`, `npm run build` only) |
| Chrome | Google Chrome 157.0.8103.38, `C:\Program Files\Google\Chrome\Application\chrome.exe`, `--headless=new`, CDP over `127.0.0.1:9229`, one `--user-data-dir` per run under the harness directory |
| SHA-256 of `dist/index.html` | `11d50d332d3c04e12e7330af0c0bd60412926fe0c444662cb5d5cd6441d44c2d` (built by `npm run build` before the browser work; the build was not repeated) |
| Scrollbar condition | `--hide-scrollbars` for every session except RSP-06, which also ran without the flag (classic scrollbars, measured 15 px). `innerWidth − documentElement.clientWidth = 0` in the hidden-scrollbar sessions. Device pixel ratio 1. Emulation with `mobile: false`. |
| Viewport sets | Set L: Desktop 1440 × 900, Tablet 820 × 1180, Mobile Landscape 844 × 390, Mobile Portrait 390 × 844. Set B: 478 × 844, 479 × 844, 991 × 900, 992 × 900. Set D: 1920 × 1080, 1024 × 768. Heights not given by a document: as above (none needed). Viewports are observations of this task and not project standards (`docs/TESTING-PROTOCOL.md`). |
| Local server | Node `http` static server on `127.0.0.1:8765` serving `dist/`; `.js` and `.mjs` as `text/javascript`. Every other request was failed by the harness (`Fetch` domain). No external request was made (`externalRequests` empty). It does not show the behaviour of Cloudflare. |
| Harness directory | `C:\Users\July\AppData\Local\Temp\claude\5b10d4d364210f5c\9f4370c5-5b53-4a89-a395-647e9036b3c1\scratchpad\m03-05-02` (outside the repository, not committed). Contents: `lib.mjs`, `run.mjs`, `results.json`, `results-classic.json`, `run.log`, `run-classic.log`, probes, `shots\`. |

Known limits of the run: headless Chrome only; no screen reader; no real device; the local server; the scrollbar condition above. Blob IDs and `git status`: see section 10.

## 2. Summary

| Test ID | Status | Note |
|---|---|---|
| ACC-01 | PASS | semantics as specified (static source and DOM) |
| ACC-02 | PASS | accessible names and states as specified; observation: the unnamed overlay navigation landmark |
| ACC-03 | PASS | order follows DOM and visual order; the logo is not reached in CONTENT |
| ACC-04 | PASS | Enter and Space open; Escape closes and returns focus to the trigger |
| ACC-05 | FAIL (BUG-003) | CTA outlines as specified; trigger with the X open visible; Desktop HERO logo and trigger ring not visible on the photograph (1.01:1) |
| ACC-06 | PASS | the four contrast values match; sweep minimum is known item 2 |
| ACC-07 | PASS | required elements have no animated change under reduce; the list of other animating elements is recorded |
| ACC-08 | PASS | smallest visible target 32 × 32 px; none below 24 × 24 px; Menu trigger 52 × 52 px |
| FUN-01 | PASS | four classes |
| FUN-02 | PASS | one-shot reveal; durations inside their ranges |
| FUN-03 | FAIL (BUG-002) | progress correct; scroll listener stays registered outside the section |
| FUN-04 | PASS | settled styles as specified; at most one active step at every sample (see note) |
| FUN-05 | PASS | fades in the row gaps; fills progress in the 3+2 layout |
| FUN-06 | PASS | no backward movement, no stand-still; ratio spread recorded |
| FUN-07 | PASS | no stepper listener, no stepper frame, discrete states, no marker |
| FUN-08 | PASS | same threshold in both directions; 0 mismatches; CONTENT values |
| FUN-09 | PASS | every case matches the position of the Hero |
| FUN-10 | PASS | close paths and non-closing clicks as specified (coverage note at 844 × 390) |
| FUN-11 | PASS | final states correct; first-frame changes recorded as observation |
| FUN-12 | BLOCKED (FIND-024, class C) | links and visibility recorded; the new-tab expectation contradicts approved documents |
| FUN-13 | PASS | attributes, hover colours and reduced-motion transitions as specified |
| FUN-14 | PASS | process and smart-header cases as specified; the menu-overlay case is FIND-023 (class B) |
| RSP-01 | PASS | layout per width exactly as specified |
| RSP-02 | PASS | no document overflow in any class; clipped carousel and CTA image only |
| RSP-03 | PASS | typography equals the evaluated clamp values |
| RSP-04 | PASS | trigger 52 × 52 px; top edges and surface as specified; lines above the surface |
| RSP-05 | PASS | trigger and Bottom Navigation do not intersect |
| RSP-06 | PASS | equal within each configuration; D8 values reproduced (see table) |
| RSP-07 | PASS | target headings below the Header; scroll-margin-top equals the measured Header bottom |
| RSP-08 | PASS | candidate width sufficient; loaded; intrinsic ratio 5:4 |
| RSP-09 | PASS | live state equals fresh load; listener counts restored; no non-favicon console error |

Counts: 31 tests. PASS 28. FAIL 2 (FUN-03, ACC-05). BLOCKED 1 (FUN-12). NOT RUN 0.

## 3. Method notes

- Each test runs in the harness `run.mjs`; `node run.mjs all` runs all groups, `node run.mjs <prefix>` one group, `node run.mjs RSP-06 --classic` the classic-scrollbar run.
- Scroll sampling: `window.scrollTo`, then two animation frames before reading (plus a 25 to 60 ms settle in long sweeps, 450 ms before settled-style reads). Mouse input uses `Input.dispatchMouseEvent` at element centres; each click is followed by a 700 ms settle so the overlay and the Header finish their transitions before the next read.
- Keyboard input uses `Input.dispatchKeyEvent`. Keyboard focus rings are read after a keyboard event (`Shift`) so that `:focus-visible` applies.
- The harness rejects any non-local request. Links to `wa.me` and `mailto:` were prevented from navigating (a capture-phase `preventDefault` on those two link types, FUN-10 only), so the overlay could be tested without leaving the page.
- Raw values are in `results.json` (final main run) and `results-classic.json` (final classic run), both 2026-11-10. Earlier runs were superseded by harness corrections (settle times, keyboard modality, row grouping, clipping classification) and are not cited.

## 4. Functional

### FUN-01 Rendering without JavaScript

- **Test ID:** FUN-01
- **Scope:** Process section, Header, contact links, at set L.
- **Environment:** Chrome 157 headless; `Emulation.setScriptExecutionDisabled`; four set-L classes.
- **Preconditions:** `dist/index.html`.
- **Action:** load with scripts disabled; read opacity and visibility of the steps, trust items and CTA; count markers and fills; read `data-sm-header`; read the Menu trigger and the logo; count contact links.
- **Expected Result:** all content visible; no marker or fill; no `data-sm-header`; logo visible; trigger transparent with white lines; WhatsApp, `tel:` and `mailto:` links present.
- **Actual Result:** at all four classes: 5 steps opacity 1 and visible, 5 trust items opacity 1, CTA card and image visible; markers 0, fills 0; `data-sm-header` absent; logo opacity 1; trigger background `rgba(0, 0, 0, 0)`, line pseudo-element `rgb(255, 255, 255)`; links: WhatsApp 4, `tel:` 2, `mailto:` 1.
- **Status:** PASS
- **Evidence:** `results.json` FUN-01.
- **Related Bug ID:** none

### FUN-02 One-shot reveal (MOT-01, MOT-04 to MOT-07)

- **Test ID:** FUN-02
- **Scope:** reveal targets of the Process section (13 `[data-sm-reveal]` elements), durations, at set L, reduced motion `no-preference`.
- **Environment:** as FUN-01 with scripts enabled.
- **Preconditions:** top of the page.
- **Action:** load at the top; read the targets; scroll down through the section and to its bottom; scroll back to the top; read the reveal state and opacity after each step; read the computed durations.
- **Expected Result:** each target starts hidden, becomes visible once and stays visible after scrolling back; the connector and badge do not repeat; durations are reported against the approved ranges (content 350–600 ms, 12–24 px, stagger 60–100 ms; connector 600–900 ms; badge 200–300 ms; CTA image 500–800 ms).
- **Actual Result:** 0 of 13 targets revealed at load; all 13 revealed after the scroll; all 13 still revealed and opacity 1 after scrolling back at every class. Computed: content reveal `480 ms`, translate 16 px (`translateY(16px)`), stagger 0/70/140/210/280 ms: all inside range; step badge `250 ms`: inside; connector `750 ms`: inside; CTA image `650 ms`: inside. At load the targets are not hidden instantly: their opacity moves from opaque to 0 over about 0.5 s while they are off-screen (the enhancement transition from the baseline to the hidden state). Observation, no visible effect in the tested states.
- **Status:** PASS
- **Evidence:** `results.json` FUN-02 (`durations`, `targets`, `afterScrollBack`).
- **Related Bug ID:** none

### FUN-03 Stepper progress

- **Test ID:** FUN-03
- **Scope:** progress, marker and fills of the stepper, and the scroll-listener gating of the controller, at set L, reduced motion `no-preference`.
- **Environment:** as FUN-02.
- **Preconditions:** top of the page.
- **Action:** scroll from 700 px before the section to 300 px after it (steps of 30 or 45 px), then back; sample the traversed count, fills, marker transform and opacity; read the window `scroll` listeners (`DOMDebugger.getEventListeners`) before, inside (middle of the section), after and past the section.
- **Expected Result:** progress never decreases going down; reverses and returns the same values going up; start state before the section, end state after it; the controller computes only while the section intersects the viewport, and the window `scroll` listener is absent when it does not (Priority B §4.1 step 3, §4.2).
- **Actual Result:** progress: 0 traversed at the start and 5 at the end at all classes; no decrease going down (0 in 64, 74, 100 and 96 samples); fills going up equal the fills going down at every sampled position; marker opacity 0 at both ends. Listeners: `scroll` count 1 before, 1 in the middle, 1 after, 1 past the section at all four classes (the listener is registered at the top of the page, where the section is outside the viewport, and it remains registered afterwards). A `scroll` event dispatched at scroll 0 (section outside the viewport) makes `handleStepperScroll` request an animation frame (`probe-top.mjs`: `sectionInView false`, one frame from `process.js`). The count is therefore not removed when the section leaves the viewport.
- **Status:** FAIL
- **Evidence:** `results.json` FUN-03; `probe-scroll.mjs` (listener location `process.js` line 858 source / registration line 887); `probe-top.mjs`.
- **Related Bug ID:** BUG-002

### FUN-04 Step states

- **Test ID:** FUN-04
- **Scope:** step visual, ring, number badge, at set L, reduced motion `no-preference`.
- **Environment:** as FUN-02.
- **Preconditions:** scroll positions where each step is pending, active, traversed, or active and traversed.
- **Action:** at each sampled position read the computed box-shadow of the visual, and background, border, colour and transitions of the number badge, after 450 ms settle; count `is-current` steps at every FUN-03 sample.
- **Expected Result:** pending unchanged from baseline; active ring `0 0 0 6px rgba(26,42,211,0.16)`; traversed badge background `#bfeacf`, border 2 px `#ffffff`, numeral `#0f5c33`, with no transition; exactly one active step at a time; no `aria-current`, `aria-selected` or `aria-live` (checked in ACC-01).
- **Actual Result:** settled values at every class: active ring `rgba(26, 42, 211, 0.16) 0px 0px 0px 6px`; traversed badge `rgb(191, 234, 207)` background, `2px solid rgb(255, 255, 255)` border, `rgb(15, 92, 51)` colour; the badge transition covers `opacity` and `transform` only (background changes instantly). At most one active step at every sample (0 samples with two active steps out of 128, 148, 200 and 192). Zero active steps occur at 107, 110, 144 and 133 samples respectively: positions where no step box intersects the reading band, which the Priority B band rule and PD-20 leave without a current step. The test wording "exactly one" does not hold at those positions; the observed value is recorded here and no discrepancy is raised for the wording.
- **Status:** PASS
- **Evidence:** `probe-fun04.mjs` and `fun04-settled.json` (harness); `results.json` FUN-03 and FUN-04.
- **Related Bug ID:** none

### FUN-05 Marker in the 3 + 2 layout

- **Test ID:** FUN-05
- **Scope:** marker opacity and position at 820 × 1180 and 844 × 390.
- **Environment:** as FUN-02.
- **Preconditions:** none.
- **Action:** sample the marker opacity and transform while the reading line crosses the rows (steps of 15 px); read the marker transition.
- **Expected Result:** the marker fades out after the connector stub of step 3 and fades in before the connector stub of step 4; no new path element; the connector fills progress in the wrapped layout (PD-6, PD-7).
- **Actual Result:** marker transition `opacity 0.15 s`. Row-gap transitions (reading line in px): at 820 × 1180 the marker fades out at 2055 and in at 2115 (the first fade-in at 1710 and last fade-out at 2475 are the start and end of the path); at 844 × 390 it fades out at 1245 and in at 1305 (start 930, end 1665). The gap lies between the bottom of row 1 and the top of row 2 in both classes. Connector stub geometry was not measured as separate elements; the transition boundaries are recorded. Fills were monotone in FUN-03.
- **Status:** PASS
- **Evidence:** `results.json` FUN-05.
- **Related Bug ID:** none

### FUN-06 Marker path in Mobile Portrait

- **Test ID:** FUN-06
- **Scope:** marker path along the vertical section at 390 × 844.
- **Environment:** as FUN-02.
- **Preconditions:** none.
- **Action:** scroll the section in steps of 20 px; read the marker `translate3d` position and opacity; compute the ratio of marker travel to scroll travel per step.
- **Expected Result:** the marker never stands still while visible and moves along the path; never backward while scrolling down (PD-9). The ratio is an observation; no tolerance.
- **Actual Result:** 180 samples; 0 backward moves; 0 stand-still steps while visible; ratio of marker travel to scroll travel between 0.596 and 1.000 (observation, spread recorded; no threshold).
- **Status:** PASS
- **Evidence:** `results.json` FUN-06.
- **Related Bug ID:** none

### FUN-07 Stepper under reduced motion

- **Test ID:** FUN-07
- **Scope:** stepper scroll listener, animation-frame requests, marker and state updates at set L, reduced motion `reduce`.
- **Environment:** as FUN-02; an init script counts `requestAnimationFrame` calls with their caller.
- **Preconditions:** load at the top.
- **Action:** wait 600 ms; count window listeners; scroll the page through the section; count frames and their caller; read the states and fills.
- **Expected Result:** no stepper `scroll` listener, no stepper animation-frame loop, discrete step states, no travelling marker, traversed connectors in their final state (Option R3).
- **Actual Result:** window listeners `resize` 2 and `orientationchange` 1 (no `scroll`), before and after scrolling, at all four classes. No marker element. Frames requested during scrolling: none from `process.js` (the frames observed come from the hero carousel autoplay and from the harness's own scroll helper). States are discrete (for example `-- -- -- -- --`, `-C -C -C -C -C`, `TC TC TC TC TC` at desktop).
- **Status:** PASS
- **Evidence:** `results.json` FUN-07.
- **Related Bug ID:** none

### FUN-08 Smart Header states

- **Test ID:** FUN-08
- **Scope:** state threshold in both directions, logo and trigger in each state, at set L.
- **Environment:** as FUN-02.
- **Preconditions:** top of the page.
- **Action:** scroll from 0 to past the Hero in steps of 4 px and back; record the state, the Hero bottom and the Header bottom; read the settled logo, trigger and surface after 450 ms at the top and below the Hero.
- **Expected Result:** the state equals HERO while the Hero bottom is at least 0.5 px below the Header bottom, CONTENT otherwise; the same threshold in both directions; in CONTENT the logo is `opacity 0` and `visibility: hidden`; the trigger is 52 × 52 px with `#111a38` circular surface and shadow `rgba(17, 26, 56, 0.22) 0px 4px 14px`; in HERO the trigger is transparent with white lines and the logo is visible.
- **Actual Result:** at all four classes the change to CONTENT when scrolling down and to HERO when scrolling up occurs at the same position (for example 1440 × 900: down at 692 px with Hero bottom 208 px and Header bottom 207.59 px; up at 688 px with Hero bottom 212 px); mismatches with the geometry rule: 0 in every class. CONTENT: logo opacity 0, `visibility: hidden`; trigger 52 × 52 px; surface `rgb(17, 26, 56)`, 52 × 52 px, shadow `rgba(17, 26, 56, 0.22) 0px 4px 14px 0px`. HERO: logo opacity 1 and visible; trigger background transparent; line pseudo-element `rgb(255, 255, 255)`.
- **Status:** PASS
- **Evidence:** `results.json` FUN-08 (`changesDown`, `changesUp`, `top`, `content`).
- **Related Bug ID:** none

### FUN-09 Smart Header initialization and edge cases

- **Test ID:** FUN-09
- **Scope:** every case of Priority C §12 that applies, at set L and the boundary widths of set B.
- **Environment:** as FUN-02.
- **Preconditions:** none.
- **Action:** 43 cases: load at `#inicio`; reload while scrolled to 1500 px; direct navigation to `#como-trabajamos`; Menu link to the Process section and back to the top; Menu open and close inside and outside the Hero; resize inside and below the Hero; orientation change both ways; crossings 478/479 and 991/992 (scrolled 300 px); reduced-motion reload; no-JavaScript baseline. After each case the attribute is compared with the geometry.
- **Expected Result:** after each case the state matches the Hero position; the state is recalculated when the Menu closes; the reduced-motion case has no transition; the Bottom Navigation case does not apply (SH-D31).
- **Actual Result:** every case: attribute equals the geometry rule (0 failures). Examples: reload at 1500 px → CONTENT at all classes; Menu link to `#como-trabajamos` → CONTENT at the new scroll position; 478 → 479 and 991 → 992 crossings keep HERO at scroll 300 px. No-JavaScript: attribute absent (baseline HERO appearance). No non-favicon console error in the case series.
- **Status:** PASS
- **Evidence:** `results.json` FUN-09 (`cases`). The first-frame reload behaviour is in FUN-11.
- **Related Bug ID:** none

### FUN-10 Menu overlay behaviour

- **Test ID:** FUN-10
- **Scope:** open and close paths; `#` link click; `mailto:`, WhatsApp and empty-area clicks; focus; at set L.
- **Environment:** as FUN-02; mouse input; external links prevented by capture (see section 3).
- **Preconditions:** top of the page.
- **Action:** open with the trigger (mouse); close with the trigger; open with `Enter`; close with `Escape`; click the Process link in the overlay; click `mailto:`, the WhatsApp link and the empty area of the overlay.
- **Expected Result:** while `aria-expanded="true"` the Smart Header state is not written; a plain click on a `#` link closes the overlay in the click handler, releases `body.sm-menu-open`, does not cancel navigation and does not force focus to the trigger; `mailto:`, WhatsApp and the empty area do not close the overlay; trigger and `Escape` return focus to the trigger.
- **Actual Result:** at 1440 × 900, 820 × 1180 and 390 × 844: open by trigger `expanded true`, `body` class `sm-menu-open`; close by trigger `false`; open by `Enter` `true`; close by `Escape` `false`, focus on `sm-menu-trigger`. Process-link click: `expanded false`, body class removed, hash `#como-trabajamos`, page moved (scroll 692, 997 and 692 px), focus on `BODY` (not the trigger). `mailto:`, WhatsApp and empty-area clicks: overlay stays open (`true`). At 844 × 390 the `mailto:` and WhatsApp clicks did not land on their links (hit test false), so those two clicks are not verified at that class; the empty-area click and the `#` link path are verified there. Links with no target (known item 1) were not clicked.
- **Status:** PASS
- **Evidence:** `results.json` FUN-10.
- **Related Bug ID:** none

### FUN-11 Anchor navigation, deep link and reload

- **Test ID:** FUN-11
- **Scope:** deep link to `#como-trabajamos`, reload there, Menu link, and navigation to `#inicio`, at set L.
- **Environment:** as FUN-02, with an init script that records `data-sm-header` changes from document start.
- **Preconditions:** none.
- **Action:** load at `#como-trabajamos`; reload; open the Menu from the top and click the Process link; set `location.hash = '#inicio'`.
- **Expected Result:** the target heading is not hidden under the Header; the state is correct at the end; any first-frame flash is an observation with the number of frames in which the wrong state was painted.
- **Actual Result:** after the reload the H2 is below the Header at all classes (1440 × 900: H2 top 348 px, Header bottom 208 px; 390 × 844: 250 px and 152 px). Menu link: scroll 692/997/206/692, H2 below the Header, state CONTENT. `#inicio`: state HERO, scroll 0. First-frame observation: the attribute changed during load at the deep-link classes (820 × 1180 sequence: CONTENT at 51 ms, CONTENT at 66 ms, HERO at 579 ms, HERO at 1711 ms, CONTENT at 1719 ms, and later changes at 3043 to 3729 ms). The number of painted frames with a wrong state was not measured (the attribute timeline does not count painted frames). This resembles known item 3 (SH-D29, SH-D30, PD-42) and is not recorded as a new entry.
- **Status:** PASS
- **Evidence:** `results.json` FUN-11 (`deep.smLog`, `reloaded`, `menuNav`, `toInicio`).
- **Related Bug ID:** none

### FUN-12 Bottom Navigation

- **Test ID:** FUN-12
- **Scope:** Bottom Navigation links, visibility and new-tab attributes, at 390 × 844, 478 × 844, 479 × 844 and set L (other classes).
- **Environment:** as FUN-02.
- **Preconditions:** none.
- **Action:** list the links (label, href, target, rel), display, position and rectangle at each width.
- **Expected Result:** present and fixed in Mobile Portrait (390 and 478), absent at the other widths; links as in the source; the WhatsApp link opens in a new tab with `rel="noopener noreferrer"`; `Llamar` is a `tel:` link.
- **Actual Result:** `display: block`, `position: fixed` at 390 × 844 and 478 × 844 (rectangle 0, 764 to 844); `display: none` at 479 × 844, 820 × 1180, 844 × 390 and 1440 × 900. Links in source order: `Servicios` (`#servicios`), `Cobertura` (`#cobertura`), `WhatsApp` (`https://wa.me/…`), `Llamar` (`tel:+525647957364`), `Agendar visita` (`#agendar-diagnostico`). The WhatsApp link has no `target` and no `rel`. The `tel:` link is correct. Links without target: known item 1.
- **Status:** BLOCKED
- **Blocker:** the new-tab sub-expectation of this test (`target="_blank"`, `rel="noopener noreferrer"` on the Bottom Navigation WhatsApp link) contradicts the approved documents, which do not require it: `docs/phases/phase-03/M03-04-opencode-implementation.md` line 60 says not to modify the existing Bottom Navigation, and PI-05(c) (`docs/phases/phase-03/M03-03-pm-approval-scope-freeze.md` line 108; M03-04 line 94) scopes the new-tab requirement to the Process section's secondary CTA. Per spec section 4 the test stops at that point (class C, FIND-024). The remaining observations above are recorded.
- **Evidence:** `results.json` FUN-12; `src/_includes/components/mobile-nav.njk`.
- **Related Bug ID:** none (FIND-024)

### FUN-13 CTA buttons

- **Test ID:** FUN-13
- **Scope:** Process CTA buttons, attributes, hover, reduced motion, at set L.
- **Environment:** as FUN-02.
- **Preconditions:** CTA card in view.
- **Action:** read attributes; hover the secondary button; read colours and transition; repeat under `reduce` at 1440 × 900.
- **Expected Result:** primary `href` `#agendar-diagnostico`; WhatsApp label `Contactar por WhatsApp`, `aria-label="Contactar por WhatsApp (abre en una nueva pestaña)"`, `target="_blank"`, `rel="noopener noreferrer"`; hover background `#25d366` and text `#111a38`; transition about 0.2 s; under `reduce` no translation and instant colour change.
- **Actual Result:** attributes exactly as expected at all classes. Hover at each class: background `rgb(37, 211, 102)` (`#25d366`), text `rgb(17, 26, 56)` (`#111a38`), transition `0.2s` on each property. Under `reduce`: transition `0s`, transform `none`, colours applied at once.
- **Status:** PASS
- **Evidence:** `results.json` FUN-13.
- **Related Bug ID:** none

### FUN-14 Script failure paths

- **Test ID:** FUN-14
- **Scope:** blocked `process.js`, `smart-header.js` and `menu-overlay.js`, at 1440 × 900 and 390 × 844.
- **Environment:** as FUN-02; `Network` requests to the named script failed by the harness.
- **Preconditions:** none.
- **Action:** load with each script blocked; read section, CTA, header and trigger state; click the trigger; list the primary-navigation links and their visibility; read console errors.
- **Expected Result:** without `process.js` the Process section is fully visible and readable; without `smart-header.js` the Header stays in its baseline HERO appearance and the trigger stays usable; without `menu-overlay.js` record whether any primary-navigation link is reachable (class B if not).
- **Actual Result:** `process.js` blocked: section opacity 1 in all five steps, CTA visible, header attribute `hero`, logo opacity 1, trigger 52 × 52 px and opens the Menu (`expanded true`). `smart-header.js` blocked: header attribute absent (baseline), logo opacity 1, trigger 52 × 52 px and opens the Menu; the Process section stays hidden until scrolled into view (as designed). `menu-overlay.js` blocked: trigger does not open (`expanded false`); 0 of 5 primary-navigation links visible at both classes. Console errors are the blocked-resource messages only (`net::ERR_BLOCKED_BY_CLIENT`). The menu-overlay result is class B: FIND-023.
- **Status:** PASS
- **Evidence:** `results.json` FUN-14.
- **Related Bug ID:** none (FIND-023)

## 5. Responsive

### RSP-01 Layout per width

- **Test ID:** RSP-01
- **Scope:** grouping of the five steps by row at sets L and B.
- **Environment:** as FUN-02.
- **Preconditions:** none.
- **Action:** group the five `.sm-process-step` elements by `offsetTop` (layout, not transform).
- **Expected Result:** five in one row at 992 px and above; three plus two from 479 to 991.98 px (including 844 × 390); one column at 478.98 px and below; changes only at 478/479 and 991/992.
- **Actual Result:** 1440 × 900: `[1,2,3,4,5]`; 820 × 1180: `[1,2,3] [4,5]`; 844 × 390: `[1,2,3] [4,5]`; 390 × 844: five rows; 478 × 844: five rows; 479 × 844: `[1,2,3] [4,5]`; 991 × 900: `[1,2,3] [4,5]`; 992 × 900: `[1,2,3,4,5]`.
- **Status:** PASS
- **Evidence:** `results.json` RSP-01. Note: an earlier run grouped by `getBoundingClientRect` and was affected by the enhancement transition; it was replaced by the `offsetTop` grouping.
- **Related Bug ID:** none

### RSP-02 No unintended overflow

- **Test ID:** RSP-02
- **Scope:** whole page scrolled top to bottom, at sets L, B and D.
- **Environment:** as FUN-02.
- **Preconditions:** none.
- **Action:** sample every 350 px; record document `scrollWidth` against `clientWidth`; elements leaving the viewport horizontally that are not clipped by an ancestor with overflow other than `visible`; elements whose `scrollWidth` exceeds `clientWidth` with overflow not visible.
- **Expected Result:** no horizontal overflow of the document; no clipped text; no overlap of interactive elements; each finding listed.
- **Actual Result:** document horizontal overflow 0 at all ten classes. Unclipped elements leaving the viewport: none. Items with overflow not visible: the hero carousel container (`sm-hero__carousel`, scroll width up to 1793 px in a 478 px viewport, clipped by design) and the CTA image container (`sm-process-cta__media`, the image scaled 1.04 and cropped by its container). These are decorative clipping, not text. No interactive overlap was found in the sampled positions (overlap of trigger and Bottom Navigation: RSP-05).
- **Status:** PASS
- **Evidence:** `results.json` RSP-02.
- **Related Bug ID:** none

### RSP-03 Typography of the Process section

- **Test ID:** RSP-03
- **Scope:** H2, steps-group H3, step H4 typography at sets L, B and D.
- **Environment:** as FUN-02.
- **Preconditions:** fonts loaded (`document.fonts.status` `loaded`).
- **Action:** read computed `font-size`, `font-weight`, `line-height`, `overflow-wrap`, `hyphens`; compare with the approved clamps evaluated at the viewport width.
- **Expected Result:** H2 Inter 700 `clamp(21.25px, 3.6vw, 31.25px)`; H3 and H4 Inter 700 `clamp(15px, 2.4vw, 20px)`; H4 `line-height` 1.25, `overflow-wrap: normal`, `hyphens: none`.
- **Actual Result:** H2: 1440 → 31.25 px; 820 → 29.52 px; 844 → 30.38 px; 390, 478, 479 → 21.25 px; 991, 992, 1920, 1024 → 31.25 px. H3/H4: 390, 478 and 479 → 15 px; 820 → 19.68 px; 844, 991, 992, 1024, 1440 and 1920 → 20 px. Each matches its evaluated clamp. H4 `line-height` 25 px at 20 px (1.25), `overflow-wrap: normal`, `hyphens: none`. Font family Inter 700.
- **Status:** PASS
- **Evidence:** `results.json` RSP-03.
- **Related Bug ID:** none

### RSP-04 Menu trigger geometry and surface

- **Test ID:** RSP-04
- **Scope:** trigger, surface and logo in HERO and CONTENT at sets L and B.
- **Environment:** as FUN-02.
- **Preconditions:** none.
- **Action:** measure trigger, logo, header padding and the surface (layer pseudo-element) in HERO and after scrolling to CONTENT; check the line pixels in a screenshot of the CONTENT trigger.
- **Expected Result:** trigger 52 × 52 px; top edge equal to the logo top and to the header padding `clamp(16px, 2vw, 32px)`; surface within 0.5 px of the trigger on each edge; lines above the surface.
- **Actual Result:** trigger 52 × 52 px at all classes; logo top equal to the trigger top; header padding: 1440 → 28.8 px, 820 → 16.4 px, 844 → 16.88 px, 390/478/479 → 16 px, 991 → 19.82 px, 992 → 19.84 px (each equal to `2vw` clamped to 16–32 px); surface within 0.5 px of the trigger on all edges (`surface` values equal the trigger rectangle). Pixel check of the CONTENT trigger (`probe-lines.mjs`): 52 × 52 px area with 353 (Desktop) and 487 (390 px) white pixels over 1840 surface-coloured pixels, so the lines are drawn above the surface.
- **Status:** PASS
- **Evidence:** `results.json` RSP-04; `probe-lines.mjs`; screenshots `shots\ACC-05-*-content-trigger.png`.
- **Related Bug ID:** none

### RSP-05 Trigger against the Bottom Navigation

- **Test ID:** RSP-05
- **Scope:** rectangles of the fixed trigger and of the Bottom Navigation at 390 × 844 and 478 × 844, at the top, inside the section and near the bottom.
- **Environment:** as FUN-02.
- **Preconditions:** none.
- **Action:** measure both rectangles at three scroll positions.
- **Expected Result:** measured; no intersection (an intersection would be a discrepancy).
- **Actual Result:** trigger `[406, 16, 52, 52]` at 478 × 844 and `[318, 16, 52, 52]` at 390 × 844 at every position; Bottom Navigation fixed at `[0, 764, width, 80]`; `intersects: false` at all six positions.
- **Status:** PASS
- **Evidence:** `results.json` RSP-05.
- **Related Bug ID:** none

### RSP-06 CTA button size

- **Test ID:** RSP-06
- **Scope:** width and height of the two Process CTA buttons at sets L and D, with hidden and with classic scrollbars.
- **Environment:** as FUN-02; second run without `--hide-scrollbars` for the classic condition.
- **Preconditions:** CTA card in view.
- **Action:** measure both buttons at each class; read the scrollbar width.
- **Expected Result:** equal width and height within each configuration; values recorded beside D8.
- **Actual Result:** within each configuration the two buttons are equal (in all twelve measurements). Values and D8:

| Class | Hidden scrollbars (measured) | Classic scrollbars, 15 px (measured) | D8 value | Result |
|---|---|---|---|---|
| 1920 × 1080 | 281.5 × 50 | 281.5 × 50 | 281 × 50 at 1920 and 1440 | equal within 0.5 px (rounding of D8) |
| 1440 × 900 | 281.5 × 50 | 281.5 × 50 | 281 × 50 | equal within 0.5 px |
| 1024 × 768 | 199.5 × 64 | 195.4 × 64 | 195 × 64 | classic: equal within 0.4 px; the hidden value differs by the scrollbar condition |
| 820 × 1180 | 328.4 × 48 | 313.4 × 48 | 313 × 48 | classic: equal within 0.4 px; hidden differs by 15 px = scrollbar width |
| 844 × 390 | 350.5 × 48 | 335.5 × 48 | 336 × 48 (classic); 350.5 × 48 (hidden) | equal in each condition |
| 390 × 844 | 308 × 50 | 293 × 50 | 293 × 50 (classic); 308 × 50 (hidden) | equal in each condition |

  Scrollbar width measured: 0 (hidden) and 15 px (classic). Differences between the two conditions are explained by the scrollbar condition (class A).
- **Status:** PASS
- **Evidence:** `results.json` RSP-06 and `results-classic.json` RSP-06.
- **Related Bug ID:** none

### RSP-07 Anchor target visibility

- **Test ID:** RSP-07
- **Scope:** `#como-trabajamos` and `#inicio` at sets L and B.
- **Environment:** as FUN-02.
- **Preconditions:** none.
- **Action:** navigate to each anchor; read the target heading top, the Header bottom, and the computed `scroll-margin-top` of the target.
- **Expected Result:** target heading fully visible below the Header in each class; the `scroll-margin-top` used is the measured one.
- **Actual Result:** `#como-trabajamos`: heading top below the Header bottom at every class (clearance 97 to 141 px), `scroll-margin-top` equal to the measured Header bottom (207.6, 182.8, 183.76, 152, 182, 189.64 px for the classes listed in `results.json`). `#inicio`: `.sm-hero__heading` top below the Header bottom at every class (clearance 92 to 645 px); `scroll-margin-top` `0px` on the Hero section.
- **Status:** PASS
- **Evidence:** `results.json` RSP-07.
- **Related Bug ID:** none

### RSP-08 CTA image selection

- **Test ID:** RSP-08
- **Scope:** CTA image source, natural size, rendered size and aspect ratio at sets L and D.
- **Environment:** as FUN-02.
- **Preconditions:** CTA image in view.
- **Action:** read `currentSrc`, `naturalWidth`, `naturalHeight`, `complete`, rendered size, `sizes` and device pixel ratio.
- **Expected Result:** one of the four approved WebP candidates (480, 800, 1200, 1600 px); candidate width at least the rendered width times DPR when such a candidate exists; loaded; aspect ratio 5:4.
- **Actual Result:** selected candidates: 800 px at 1440 × 900 and 1920 × 1080 (rendered width 557.09 px); 480 px at 820 × 1180 (rendered 360), 844 × 390 (360), 390 × 844 (348) and 1024 × 768 (423). Each candidate is at least the rendered width. All `complete` true. The intrinsic ratio is 5:4 (`naturalWidth`/`naturalHeight` 546/436 and 369/295 are the density-adjusted values for the `sizes` slot, and the files are 800 × 640 and 480 × 384 px; the 1200 and 1600 candidates measured 1200 × 960 and 1600 × 1280). The rendered box is cropped by `object-fit` (for example 557 × 360 px); the crop is D7 (task 3 scope).
- **Status:** PASS
- **Evidence:** `results.json` RSP-08; WebP headers read from `dist/assets/images`.
- **Related Bug ID:** none

### RSP-09 Resize and orientation without reload

- **Test ID:** RSP-09
- **Scope:** live resizes from 1440 × 900 to 820 × 1180, 844 × 390, 479 × 844, 478 × 844 and 390 × 844, and back.
- **Environment:** as FUN-02.
- **Preconditions:** the page at the Process section (scroll 1200 px).
- **Action:** resize in steps; read state, step classes, marker, fills and scroll position; compare each with a fresh load at the same scroll position; count window listeners; read console errors.
- **Expected Result:** layout, stepper geometry and Header state recomputed; marker and fills match a fresh load; listener count returns to the first-load count; no console error.
- **Actual Result:** at 820 × 1180, 844 × 390, 479 × 844, 478 × 844 and 390 × 844 the live state, the step classes, the marker transform and the fills equal the fresh load (`equal to fresh: true` at each size). Window listeners before and after the resize: `resize` 2, `orientationchange` 1, `scroll` 1 (same). Console: four `404` messages for `/favicon.ico` (the site has no favicon); no other error.
- **Status:** PASS
- **Evidence:** `results.json` RSP-09.
- **Related Bug ID:** none. Observation: no favicon in `dist/` (404 for `/favicon.ico`); not a test expectation.

## 6. Accessibility

### ACC-01 Semantics of the Process section

- **Test ID:** ACC-01
- **Scope:** static source and DOM of the Process section.
- **Environment:** as FUN-02; `src/_includes/components/process.njk`, `src/assets/js/process.js`.
- **Preconditions:** none.
- **Action:** read `aria-labelledby`, headings, lists, aria attributes and the marker attributes.
- **Expected Result:** section labelled by the H2; H2, steps-group H3, five H4, trust H3 and CTA H3; five `ol > li`; badges and decorative graphics hidden; marker `aria-hidden="true"` without role or label; no `aria-current`, `aria-selected` or `aria-live`.
- **Actual Result:** `aria-labelledby="sm-process-title"` → H2 (one H2); H3 ×3 (`Así funciona…`, `ANTES DE COMENZAR SIEMPRE SABRÁS:`, `¿Tu lavadora o refrigerador presenta una falla?`); H4 ×5; `ol` with five `LI` children; badges `aria-hidden="true"` ×5; all SVG hidden; marker `aria-hidden="true"`, no role; `aria-current`, `aria-selected`, `aria-live` counts 0.
- **Status:** PASS
- **Evidence:** `results.json` ACC-01.
- **Related Bug ID:** none

### ACC-02 Accessibility tree

- **Test ID:** ACC-02
- **Scope:** accessibility tree at 1440 × 900: HERO, CONTENT with the Menu closed, and CONTENT with the Menu open; HERO after close.
- **Environment:** as FUN-02; `Accessibility.getFullAXTree`.
- **Preconditions:** none.
- **Action:** read roles, names and states.
- **Expected Result:** every interactive element has a non-empty name; trigger exposes expanded; WhatsApp CTA name includes `(abre en una nueva pestaña)`; logo absent or ignored in CONTENT; distinct names for repeated landmarks.
- **Actual Result:** HERO: `link Ir al inicio`, `button Abrir menú de navegación` (`expanded false`), CTA links with names; `button Pausar carrusel`, `Go to slide 1–5`. CONTENT closed: logo absent; trigger `expanded false`. CONTENT open: trigger `Cerrar menú de navegación` (`expanded true`); `navigation Menu` with links `¿Cómo trabajamos?`, `Servicios`, `Cobertura`, `Marcas`, `Contacto`; contact links named by their text. The WhatsApp CTA name is `Contactar por WhatsApp (abre en una nueva pestaña)`. Observation: an unnamed `navigation` landmark (the overlay root) appears when the Menu is open, next to the named `Menu` navigation.
- **Status:** PASS
- **Evidence:** `results.json` ACC-02.
- **Related Bug ID:** none

### ACC-03 Keyboard order

- **Test ID:** ACC-03
- **Scope:** Tab order from the top (HERO) and from scroll 1500 px (CONTENT), at set L.
- **Environment:** as FUN-02; `Input.dispatchKeyEvent` Tab.
- **Preconditions:** focus on the body.
- **Action:** press Tab up to 45 times; record the focused element, its text and whether it is in the viewport.
- **Expected Result:** every interactive element reached; visual and DOM order; the hidden logo in CONTENT and the closed overlay are not reached; no trap outside the overlay.
- **Actual Result:** from the top at 1440 × 900 and 820 × 1180: logo → trigger → carousel pause → slide bullets 1–5 → `Solicitar revisión` → WhatsApp CTA → end. At 844 × 390 the same sequence. At 390 × 844 the hero CTAs (WhatsApp, `Llámanos ahora`) and the Bottom Navigation links follow the Process CTAs in DOM order. From scroll 1500 px (CONTENT) the sequence starts at the trigger; the logo is not reached at any class. The closed overlay links are not reached.
- **Status:** PASS
- **Evidence:** `results.json` ACC-03 (both sequences).
- **Related Bug ID:** none

### ACC-04 Menu overlay by keyboard

- **Test ID:** ACC-04
- **Scope:** `Enter`, `Space`, `Tab`, `Shift+Tab`, `Escape` on the trigger and the overlay, at set L.
- **Environment:** as FUN-02.
- **Preconditions:** the Menu closed.
- **Action:** focus the trigger; press `Enter`; press `Tab` and `Shift+Tab`; press `Escape`; focus the trigger; press `Space`; press `Escape`.
- **Expected Result:** both keys open; `Escape` closes and returns focus to the trigger; `aria-expanded` follows the state; focus with Tab while open is recorded.
- **Actual Result:** at all four classes: `Enter` → `expanded true`, focus on the first overlay link (`Servicios`); `Tab` → `Cobertura`; `Shift+Tab` → `Servicios` (focus stays inside the overlay); `Escape` → `expanded false`, focus `sm-menu-trigger`; `Space` → `expanded true`; `Escape` → `false`, focus on the trigger.
- **Status:** PASS
- **Evidence:** `results.json` ACC-04.
- **Related Bug ID:** none

### ACC-05 Focus indicators

- **Test ID:** ACC-05
- **Scope:** keyboard focus of the logo, the Menu trigger (HERO, CONTENT and with the X open), the overlay links, the Bottom Navigation links and the CTA buttons, at set L; contrast of each indicator against its adjacent background.
- **Environment:** as FUN-02; `:focus-visible` applied by a keyboard event before focus.
- **Preconditions:** top of the page.
- **Action:** focus each element; read outline width, style, colour and offset and box-shadow; screenshot the CONTENT trigger; with the Menu open focus the trigger; sample the ring pixels of the logo and trigger against the hero photograph (`probe-acc05.mjs`).
- **Expected Result:** CTA buttons: 2 px white outline with 3 px offset on the dark card, and `#1a2ad3` at 478.98 px and below; the trigger keeps its baseline focus treatment in HERO, CONTENT and with the X open; every listed element shows a visible indicator; contrast recorded.
- **Actual Result:** primary and secondary CTA at 1440 × 900: `2px solid rgb(255, 255, 255)`, offset 3 px; contrast of white against the card `#111a38`: 17.09:1 (computed). At 390 × 844: `2px solid rgb(26, 42, 211)`, offset 3 px; contrast of `#1a2ad3` against the card `#f2f5ff`: 8.33:1 (computed). Logo and trigger (HERO and CONTENT): the baseline Chrome focus ring `1px auto rgb(16, 16, 16)`. Trigger with the X open: `1px auto rgb(16, 16, 16)`, focused, `:focus-visible` true. Against the hero photograph at 1440 × 900 the ring has contrast 1.01:1 for the logo (median; 2781 pixels) and 1.01:1 for the trigger (1017 pixels). At 390 × 844 the median is 5.92:1 (logo) and 6.99:1 (trigger). The desktop HERO ring is therefore not visible. The Bottom Navigation links: visible ring at 390 × 844 (`1px auto`).
- **Status:** FAIL
- **Evidence:** `results.json` ACC-05; `probe-acc05.mjs`; `shots\ACC-05-*-hero-top.png` and `shots\ACC-05-*-content-trigger.png`.
- **Related Bug ID:** BUG-003

### ACC-06 Contrast measurements

- **Test ID:** ACC-06
- **Scope:** computed contrast pairs; sweep of the trigger surface against pixels around it at set L.
- **Environment:** as FUN-02; screenshots decoded in the page with a canvas.
- **Preconditions:** CONTENT state for the sweep.
- **Action:** compute WCAG relative-luminance ratios of the pairs; capture 13 screenshots along a vertical scroll sweep in CONTENT and take the minimum contrast of the surface colour against the 6 px ring around the trigger.
- **Expected Result:** values recorded and compared with 17.09, 17.09, 15.69 and 6.11 (tolerance 0.01 for arithmetic); the sweep minimum is known item 2 when it agrees with SH-D28. No threshold.
- **Actual Result:** white against `#111a38`: 17.09; `#111a38` against `#ffffff`: 17.09; `#111a38` against `#f2f5ff`: 15.69; `#0f5c33` against `#bfeacf`: 6.11. All match the stated values within 0.01. Sweep minimum: 1.01 (1440 × 900), 1.10 (820 × 1180), 1.10 (844 × 390), 1.02 (390 × 844), i.e. dark page pixels next to the dark trigger surface. This agrees with SH-D28 (known item 2): no new entry.
- **Status:** PASS
- **Evidence:** `results.json` ACC-06.
- **Related Bug ID:** none (known item 2)

### ACC-07 Reduced motion across the page

- **Test ID:** ACC-07
- **Scope:** elements (and pseudo-elements) with `transition-duration` or `animation-duration` above 0, at set L with `reduce` and `no-preference`.
- **Environment:** as FUN-02.
- **Preconditions:** scrolled to 1500 px and to the top.
- **Action:** list the elements with a non-zero duration in both modes.
- **Expected Result:** under `reduce`, no animated change of the Smart Header logo and surface, the Process reveal, the CTA translation or the stepper marker; the MOT-03 ring may keep its `box-shadow` transition only under `no-preference` (PD-11); every element that still animates under `reduce` listed.
- **Actual Result:** under `reduce` none of the Smart Header logo, the surface (`.sm-menu-trigger-layer::before`), the Process reveal targets, the CTA buttons or the marker animates (absent from the list). Still animating under `reduce` (listed): the trigger line pseudo-elements (0.45 s and 0.3 s), `.sm-hero__aspa`, the hero pagination and bullets (Swiper), the Menu overlay and its links (0.2 s, 0.35 s and 0.45 s), and the overlay contact links (0.3 s). Under `no-preference` the list is longer (47 entries at scroll 1500 px), including the reveal and the ring.
- **Status:** PASS
- **Evidence:** `results.json` ACC-07.
- **Related Bug ID:** none (observation: the trigger lines and Menu transitions still animate under `reduce`; the approved text names the logo and surface only)

### ACC-08 Target size

- **Test ID:** ACC-08
- **Scope:** rectangles of visible links and buttons at 390 × 844 and 1440 × 900.
- **Environment:** as FUN-02.
- **Preconditions:** none.
- **Action:** list every visible link and button over the page (rectangles greater than zero); record the smallest and the elements below 24 × 24 px.
- **Expected Result:** measured and recorded; the Menu trigger 52 × 52 px.
- **Actual Result:** 390 × 844: 12 visible targets, smallest `sm-hero__autoplay-toggle` 32 × 32 px; 0 below 24 × 24 px. 1440 × 900: 5 visible targets, smallest 32 × 32 px; 0 below 24 × 24 px. The Menu trigger is 52 × 52 px.
- **Status:** PASS
- **Evidence:** `results.json` ACC-08.
- **Related Bug ID:** none

## 7. Discrepancies

| ID | Class | Test | Document and section | Observed | Expected | Entry |
|---|---|---|---|---|---|---|
| D-1 | defect | FUN-03 | Priority B specification §4.1 step 3, §4.2 | scroll listener registered and running outside the section | listener removed when the section leaves the viewport | BUG-002 |
| D-2 | defect | ACC-05 | spec §2.3 ACC-05 (every listed element has a visible indicator) | desktop HERO logo and trigger ring 1.01:1 against the photograph | visible indicator | BUG-003 (decision of the Product Manager on the baseline treatment) |
| D-3 | B | FUN-14 | spec §2.1 FUN-14 (class B if the primary navigation is not reachable) | menu-overlay.js blocked: no primary-navigation link reachable | observation reported as class B | FIND-023 |
| D-4 | C | FUN-12 | M03-04 line 60; M03-03 line 108; M03-04 line 94 | Bottom Navigation WhatsApp link without new-tab attributes | spec §2.1 FUN-12 expects `target="_blank"` and `rel="noopener noreferrer"` | FIND-024 |
| O-1 | A | RSP-06 | spec §2.2 RSP-06 | hidden and classic values differ by the scrollbar width; 1440 and 1920 by 0.5 px from D8 | equal or explained by the scrollbar condition | recorded (no entry) |
| O-2 | A | FUN-11, FUN-02 | known item 3 family (SH-D29, SH-D30, PD-42) | attribute changes during load; off-screen reveal transition | observation | recorded (no entry) |
| O-3 | A | ACC-02 | spec §2.3 ACC-02 | unnamed overlay `navigation` landmark while the Menu is open | distinct landmark names | recorded (no entry) |
| O-4 | A | FUN-04 | spec wording "exactly one active step" | zero active steps at positions with no step box in the band | approved band rule and PD-20 | recorded (no entry) |
| O-5 | A | RSP-09 | not a spec expectation | `/favicon.ico` 404 | none | recorded (no entry) |

Known items of spec section 0 (1 to 6) were not opened as new entries: item 1 (links without target, FUN-10 and FUN-12), item 2 (ACC-06 sweep minimum), item 3 (FUN-11 first frame), item 5 (Bottom Navigation breakpoint, RSP-01 at 478/479).

## 8. Tests not run or blocked

| Test ID | Status | Blocker |
|---|---|---|
| FUN-12 | BLOCKED | spec §2.1 new-tab expectation contradicts M03-04 line 60 and PI-05(c) (class C, FIND-024); the other sub-results are recorded |

No test is NOT RUN. ACC-05 is FAIL (BUG-003), not blocked. Not performed by design: real screen readers, real devices, browsers other than Chrome 157, the initialization-error path of `process.js` (spec section 0 limits).

## 9. Entries created

| ID | Status | Kind | Related tests |
|---|---|---|---|
| BUG-002 | OPEN (MEDIUM) | defect: scroll listener outside the section | FUN-03 |
| BUG-003 | OPEN (MEDIUM) | defect: Desktop HERO focus indicator not visible | ACC-05 |
| FIND-023 | ACTION_REQUIRED | class B: no primary navigation without `menu-overlay.js` | FUN-14 |
| FIND-024 | ACTION_REQUIRED | class C: new-tab expectation for Bottom Navigation | FUN-12 |

No existing entry was edited. Reviewer (Codex) has not run; the review is listed as pending.

## 10. Statement on repository changes

No file under `src/` changed. No file under `package.json`, `package-lock.json`, configuration, governance, audit or reference-extraction paths changed. `npm run build` wrote only the git-ignored `dist/`. No `--output` option was used. No package was installed. Only `127.0.0.1` was contacted. No secret value was printed or recorded. No commit, push or deploy was performed.

Blob IDs of the files under test: recorded in `.coordination/tasks/M03-05-02/report-01.md` (before and after).
