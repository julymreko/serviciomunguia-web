# M04-04 — Independent testing of the Services section

## 1. Identification

| Field | Value |
|---|---|
| Task | M04-04 (independent testing of the Services section, Phase 04) |
| Spec and contract | `.coordination/tasks/M04-04/spec.md` (SHA-256 `ddb1757ee2e4cd458c20accfef319ffe04ee7b0ab6643f74f338f53cabd8fb5b`), `.coordination/tasks/M04-04/contract-r1.md` (SHA-256 `bc850a726d362f913e5984408d211f0939e707236827d65de23ea55a66a2b737`), approval `.coordination/approvals/M04-04/approval.md`. Both SHA-256 values were recomputed before the work and match the approval. |
| Baseline | HEAD `dfc4f969cfebc011ad15c77465ce80f256b274e5` (`feat(services): add Services section (M04-03-SV-01)`); `git diff --name-only dfc4f96 HEAD` is empty. Previous state for comparison: `d5b38507233ada4629cd33dde8615f3f7b6d8dc1`. `git diff --name-only d5b3850 dfc4f96` lists exactly `src/_includes/components/services.njk`, `src/assets/css/main.css`, `src/index.njk`. |
| Blob IDs under test (`dfc4f96`) | `services.njk` `7dfc77164fe3a8626dffa36ba23826f18f50d957`; `main.css` `1b0ee5c8816e96b68a86b2985183fc18e7e68dd7` (previous `b3b2e1ca653c0ee195f514d385565351dfc50f01`); `index.njk` `cddd137e58c3fa0998f407de8a9bbf7c71ffac3a` (previous `4a080b4ed08a6038ab5c79d4da4697c844850f9b`). Every `src/` file of both exports was compared with its blob id (61 files at `d5b3850`, 62 at `dfc4f96`): 0 mismatches. |
| Date | 2026-11-24 / 2026-11-25 (UTC-6 local time) |
| Executor | Claude Code (independent tester) |
| Reviewer | Claude (spec and verification role; reads this record, no-write) |
| Operating system | Microsoft Windows 11 Pro 10.0.26300 |
| CPU / RAM | AMD Ryzen 7 5825U with Radeon Graphics / 15.4 GB |
| Node.js / npm / Eleventy | v24.19.0 / 11.17.0 / 3.1.6 |
| Chrome | Google Chrome 157.0.8103.79, `--headless=new`, `--hide-scrollbars`, one `--user-data-dir` per session, driven over the DevTools protocol by scripts written for this task |
| Scrollbar and DPR | `innerWidth − documentElement.clientWidth = 0` at every viewport of V and B; device pixel ratio 1 |
| Method | `dfc4f96` built with `npm run build` in the repository (writes only the git-ignored `dist/`). `d5b3850` exported with `git -c core.autocrlf=false archive` into an empty scratch directory (`node_modules` linked by a directory junction, no installation) and built with `npm run build`. Each `dist/` served by a Node static server on `127.0.0.1` (new 8101, old 8102; `.js`/`.mjs` as `text/javascript`). Chrome ran with `--host-resolver-rules="MAP * ~NOTFOUND, EXCLUDE 127.0.0.1"`, so every host except `127.0.0.1` fails to resolve. The servers do not show the behaviour of Cloudflare. |
| Viewport set V | 1920 × 945, 1024 × 1366, 820 × 1180, 844 × 414, 390 × 844, 440 × 956 |
| Viewport set B | 992, 991, 768, 767, 479, 478 at height 900 |
| Raw data | Harness directory in the operating-system temporary directory, outside the repository, not committed: `C:\Users\July\AppData\Local\Temp\claude\5b10d4d364210f5c\322dc7f5-36b5-4121-aa70-91c3a7a8e772\scratchpad\` (scripts `h\`, results `res1-new.json`, `res1-old.json`, `res2.json`, `res3.json`, `res4.json`, `res5.json`, build logs, hash lists) |

`git status --short` before the work: only untracked `Claude outputs/`. Secrets: none were handled; names and counts only.

## 2. Summary

| Test ID | Status | Note |
|---|---|---|
| BLD-01 | PASS | exit 0, no warning, `Copied 51 Wrote 1 file` |
| BLD-02 | PASS | only `index.html` and `assets/css/main.css` differ; 12 images match M04-02; JS identical; CSS diff has 0 removed lines |
| FUN-01 | PASS | 32 text nodes equal the extraction in order |
| FUN-02 | PASS | 3 CTAs `#contacto`; no `id="contacto"`; click changes only the hash |
| FUN-03 | PASS | hover, focus-visible and durations as specified |
| FUN-04 | PASS | deep link, Menu overlay and Bottom Navigation land with the H2 below the Header at every viewport |
| FUN-05 | PASS | 3 images load; lazy, async, 1024 × 768 attributes; variant per viewport recorded |
| RSP-01 | PASS | rules equal the extraction; column width and card height differences at 1024, 820 and 844 reported (FIND-026) |
| RSP-02 | PASS | columns change exactly between 992/991 and 768/767; light opaque background at 478 and 479; no overflow, no clipped or overlapping text |
| RSP-03 | PASS | white plus tint, sampled pixel `rgb(219, 222, 248)` at 440 and 478 |
| SEO-01 | PASS | content in the static HTML and with scripting disabled |
| SEO-02 | PASS | 1 h1, 1 h2, 3 h3, `id="servicios"` once, non-empty alt, 1 noindex, no structured data |
| ACC-01 | PASS | 10 pairs, lowest 4.77:1 (intro); all at or above the threshold |
| ACC-02 | PASS | order, visible indicator, no trap; indicator contrast measured (observation) |
| ACC-03 | FAIL | 19/19 SVG correct; two links share the accessible name `Solicitar servicio →` (FIND-027, no BUG: approved content) |
| ACC-04 | PASS | arrow and card motion disabled under reduce; button background transition (0.25 s) remains (observation) |
| ACC-05 | PASS | with scripting disabled the section is identical |
| PRF-01 | PASS (report only) | measurements reported without thresholds |
| SEC-01 | PASS | no inline script or handler, no external URL, no form; 0 requests off `127.0.0.1`; 0 secret-pattern matches |
| INT-01 | NOT APPLICABLE | the section has no integration |
| REG-01 | PASS | 452 added lines, 0 removed or changed |
| REG-02 | PASS | no bounding-box difference except document height |
| REG-03 | PASS | only the `favicon.ico` 404 in both builds |
| REG-04 | PASS | `Servicios` reaches `#servicios`; `Cobertura` and the other items have no target, as before |

Counts: 24 tests. PASS 22 (PRF-01 counted as PASS because the test asks only for a report), FAIL 1 (ACC-03), BLOCKED 0, NOT RUN 0, NOT APPLICABLE 1 (INT-01).

Tracking entries appended: `FIND-026`, `FIND-027`. `BUGS.md` is unchanged (no defect of the implementation was verified).

## 3. Records

Environment for every record: section 1 (Chrome 157.0.8103.79, Windows 11, DPR 1, scrollbar 0, local servers) unless the record names a narrower one.

### Build

Test ID: BLD-01
Scope: build of `dfc4f96`.
Preconditions: `git status --short` shows only `Claude outputs/`; HEAD `dfc4f96`.
Action: `npm run build` in the repository.
Expected Result: exit 0, no warning about the Services files, files written.
Actual Result: exit 0. Output `[11ty] Writing ./dist/index.html from ./src/index.njk` and `[11ty] Copied 51 Wrote 1 file in 0.13 seconds (v3.1.6)`. No warning. The build of `d5b3850` printed the same two lines (`Copied 51 Wrote 1 file`).
Status: PASS
Evidence: `build-repo.txt`, `build-old.txt` (harness directory).
Related Bug: NONE

Test ID: BLD-02
Scope: output comparison, images, JavaScript, CSS diff.
Preconditions: both builds done.
Action: SHA-256 of every file of both `dist/` (52 files each); image name, bytes and SHA-256 against the integrity table of M04-02; `git diff d5b3850 dfc4f96 -- src/assets/css/main.css`.
Expected Result: only `dist/index.html` and `dist/assets/css/main.css` differ; 12 images present and equal to the table; JavaScript identical; the CSS diff has only added lines.
Actual Result: `diff h-old.txt h-new.txt` reports exactly two differing lines: `assets/css/main.css` (`773bed70…` → `98cb7bc4…`) and `index.html` (`056f2098…` → `90550ca1…`). 12 files in `dist/assets/images/services/`; name, bytes and SHA-256 of all 12 equal the M04-02 table (0 differences). The 4 JavaScript files (`hero-carousel.js`, `menu-overlay.js`, `smart-header.js`, `process.js`) plus the vendor files have identical hashes. `git diff --numstat`: `services.njk` +96/−0, `main.css` +452/−0, `index.njk` +1/−0; 0 lines start with `-` (excluding file headers).
Status: PASS
Evidence: `h-old.txt`, `h-new.txt`, `img-actual.txt`, `img-doc.txt`.
Related Bug: NONE

### Functional

Test ID: FUN-01
Scope: Services content.
Preconditions: `dist/index.html` of `dfc4f96`.
Action: extract the text nodes of `<section id="servicios">` (SVG removed) and compare them one by one, in source order, with the strings of extraction section 3.
Expected Result: eyebrow, H2, intro, 3 titles and descriptions, pills, chips, trust bar and CTA labels equal the extraction character by character, accents included.
Actual Result: 32 text nodes, 32 expected; 0 differences; all strings are NFC. Pills: `Agenda disponible` (cards 1 and 2) and `Agenda de diagnóstico` (card 3). CTAs: `Solicitar servicio`, `Solicitar servicio`, `Solicitar diagnóstico`. Trust: `1,500+`, `4.5/5`, `Menos de 24 h`, `60 días` with the four labels. The eyebrow is `SERVICIOS` in the source (and `text-transform: uppercase`).
Status: PASS
Evidence: `h/static.mjs` output (`FUN-01 static text identical in order: true`).
Related Bug: NONE

Test ID: FUN-02
Scope: the three CTAs.
Preconditions: 1920 × 945, page loaded, first CTA scrolled to the centre.
Action: read the `href` and label of the CTAs; real mouse click on the first CTA; look for `id="contacto"` in the page.
Expected Result: three links `href="#contacto"` with the labels above; no element `id="contacto"` (known item E-3, backlog item 49); the click changes only the hash.
Actual Result: three `<a class="sm-service-button" href="#contacto">`. No `id="contacto"` in the new build or the previous one. Before the click: hash empty, path `/`, search empty, `scrollY` 3289. After: hash `#contacto`, path `/`, search empty, `scrollY` 3289 (no scroll, no navigation, `document.getElementById("contacto")` null).
Status: PASS
Evidence: `res2.json` (`fun.click`).
Related Bug: NONE

Test ID: FUN-03
Scope: CTA hover and focus-visible.
Preconditions: 1920 × 945, first CTA centred. `--sm-primary` `#1a2ad3`, `--sm-primary-hover` `#101fb5`.
Action: rest, mouse hover (600 ms), keyboard Tab until the CTA, computed styles.
Expected Result: hover background `--sm-primary-hover`; arrow `translate(4px, -2px)`, duration 0.22 s; focus-visible outline `3px solid rgba(26,42,211,0.32)`, offset 3 px.
Actual Result: rest: background `rgb(26, 42, 211)`, `::after` transform `matrix(1, 0, 0, 1, 0, -1)`, `::after` transition 0.22 s. Hover: background `rgb(16, 31, 181)` (= `#101fb5`), `::after` transform `matrix(1, 0, 0, 1, 4, -2)`, transition-property `transform`, duration 0.22 s; the card also lifts (`matrix(1, 0, 0, 1, 0, -6)`, border `rgba(26, 42, 211, 0.18)`, 0.3 s). Focus-visible by keyboard: `:focus-visible` true, outline `solid 3px rgba(26, 42, 211, 0.32)`, offset 3px. Observation: the button's own background transition is 0.25 s (`background-color, transform`); the 0.22 s belongs to the arrow.
Status: PASS
Evidence: `res2.json` (`fun.rest`, `fun.hover`, `fun.focus`, `acc02`).
Related Bug: NONE

Test ID: FUN-04
Scope: deep link and navigation to `#servicios`.
Preconditions: set V; Header fixed.
Action: load `/#servicios`; open the Menu overlay with a mouse click and click `Servicios`; at 390 and 440 click the Bottom Navigation `Servicios` item. Measure with `getBoundingClientRect` after 1.5 to 1.8 s.
Expected Result: the H2 is visible below the fixed Header; `scroll-margin-top` equals that of the process section.
Actual Result (px; section top / H2 top / Header bottom / `scroll-margin-top` of Services and of `#como-trabajamos`): 1920: 256.06 / 369.06 / 256 / 256 and 256. 1024: 190.61 / 277.05 / 190.94 / 190.96 and 190.96. 820: 182.56 / 263.56 / 182.78 / 182.8 and 182.8. 844: 183.84 / 264.84 / 183.75 / 183.76 and 183.76. 390: 152.31 / 234.31 / 152 / 152 and 152. 440: 152.25 / 234.25 / 152 / 152 and 152. The three paths (deep link, Menu overlay, Bottom Navigation) give the same positions; the overlay closes (`aria-expanded` false, `aria-hidden` true). The section top is at most 0.33 px under the Header at 1024; the H2 top is 80.8 to 113 px below the Header bottom at every viewport.
Status: PASS
Evidence: `res2.json` (`fun4`), `res5.json`.
Related Bug: NONE

Test ID: FUN-05
Scope: images.
Preconditions: page scrolled through so lazy images load.
Action: read `naturalWidth`, `loading`, `decoding`, `width`/`height` attributes and `currentSrc` at set V.
Expected Result: `naturalWidth > 0`, `loading="lazy"`, `decoding="async"`, width/height present.
Actual Result: all three images load at every viewport (`naturalWidth` 1024, 820, 843, 390 or 440: the density-corrected width for the `sizes` slot, always > 0); `loading="lazy"`, `decoding="async"`, `width="1024"`, `height="768"`. Variant chosen (`currentSrc`): 1920 and 1024: `-1024x768.webp`; 820 and 844: `-1024x768.webp`; 390 and 440: `-768x576.webp`.
Status: PASS
Evidence: `res1-new.json`, `res2.json` (`fun4[*].imgs`).
Related Bug: NONE

### Responsive

Test ID: RSP-01
Scope: geometry at set V against extraction sections 5 and 6.
Preconditions: page loaded and scrolled so the images are loaded.
Action: computed styles and bounding boxes of the section, grid, cards, media, content and trust bar.
Expected Result: grid 3 / 3 / 2 / 2 / 1 / 1 columns, gap 24, image 280 px, extraction paddings and H2 sizes; differences reported without adjusting.
Actual Result:
- Columns and gap: 3 / 3 / 2 / 2 / 1 / 1; gap 24 px in rows and columns. Equal.
- Image height 280 px in every card at every viewport. Equal. Content padding `34px 20px 20px`, card row gap 18 px. Equal. Trust bar margin-top 48 px, padding 24 px 20 px (≥ 992 px).
- Section padding (top/bottom/inline): 1920 88 / 132 / 50; 1024 61.44 / 81.92 / 40.96; 820 56 / 72 / 32.8; 844 56 / 72 / 33.76; 390 and 440 56 / 72 / 20. Equal to the extraction.
- H2: 31.25, 31.25, 29.52, 30.384, 21.25 and 21.25 px (extraction 31.25, 31.25, 29.52, 30.38, 21.25). Equal. H3 28.8 / 31.68, intro 18 / 30.6, description 16 / 27.2, chip 12.5, pill 13, button 16 with min-height 44, trust value 30 px at 1920 and 22 px elsewhere, label 13, eyebrow 13 px (12 px at 390 and 440). Equal.
- Column width: 1920 397.33 (extraction 397.3, equal); 1024 298.03 (293, +5.03); 820 365.20 (357.6, +7.60); 844 376.25 (368.6, +7.65); 390 350 (350.4, −0.4).
- Card height (cards 1 / 2 / 3): 1920 768.84 ×3 (768.5); 1024 859.22 ×3 (859); 820 746.14 / 746.14 / 768.84 (773 / 795.8); 844 746.14 / 746.14 / 768.84 (745.8 / 768.5); 390 746.14 / 773.33 / 796.03 (745.8, 773, 795.8); 440 687.28 / 678.47 / 768.84 (not in the extraction). At 820 the difference of about 27 px is one description line.
- Media 280 px; content height = card height − 280 − 1 px borders as listed in `res1-new.json`. Trust bar height: 157.55 (1920), 167.09 (1024), 290.09 (820, 844), 539.19 (390, 440). Section height: 1395.58, 1418.84, 2232.69, 2204.17, 3373.09, 3167.75.
- Analysis of the differences: the extraction column widths at 1024, 820 and 844 equal the same layout computed with a content width 15 px narrower, for example 1024: (1024 − 2 × 40.96 − 15 − 48) / 3 = 293.03; 820: (820 − 2 × 32.8 − 15 − 24) / 2 = 357.7; 844: (844 − 2 × 33.76 − 15 − 24) / 2 = 368.7; at 1920 the 1240 px cap hides it. A vertical scrollbar of 15 px in the extraction session explains all of them, but the extraction does not state the scrollbar and the reference page was not reachable in this task (no network beyond localhost), so the cause is not verified. The 0.4 px at 390 is not explained. Nothing was adjusted.
Status: PASS (rules, counts and sizes equal; the listed measurement differences are reported in FIND-026)
Evidence: `res1-new.json`, `res1-old.json`; extraction sections 5 and 6.
Related Bug: NONE (FIND-026)

Test ID: RSP-02
Scope: breakpoints at set B and overflow at sets V and B.
Preconditions: heights 900.
Action: grid columns, section background, `scrollWidth`/`clientWidth`, text clipping, bounding-box containment and overlap of eyebrow, H2, intro, titles, descriptions, pills, icon circles, chips, CTAs and the four trust items.
Expected Result: columns change at 991.98 and 767.98; opaque light background at 478 and 479; no horizontal overflow; no clipped or overlapping text or pill.
Actual Result: columns 992 → 3, 991 → 2, 768 → 2, 767 → 1; 479 and 478 → 1. The media queries are `max-width: 991.98px`, `767.98px` and `478.98px` (and `min-width: 768px`) in the CSS source; fractional viewport widths cannot be set through the device-metrics override (integers only), so the `.98` threshold is verified at the integer widths on both sides and in the source. Third card centred at 768, 820, 844 and 991 (`x` 213.36 at 768, width 341.28 = `calc(50% − 12px)`). Background at 478 and 479: `background-color rgb(255, 255, 255)` plus the tint gradient (opaque). `scrollWidth` equals `clientWidth` and `body.scrollWidth` equals the viewport width at all 12 viewports. No element is outside its card or the trust bar and no pair of text elements, pills, chips, icon circles or trust items overlaps (0 entries in `outside` and `overlaps` at 12 viewports). Probe note: a `scrollHeight > clientHeight` check flagged 8 to 11 elements per viewport by 1 to 3 px (eyebrow, H3, pill text, trust value); these have `line-height` ≤ 1.1 and `overflow: visible`, the bounding boxes are inside the cards and `scrollWidth` equals `clientWidth`, so it is the glyph ink box, not clipping.
Status: PASS
Evidence: `res1-new.json` (12 viewports).
Related Bug: NONE

Test ID: RSP-03
Scope: light background below 478 px.
Preconditions: 440 × 956 and 478 × 900 (and 479 × 900), section scrolled into view.
Action: computed background and one screenshot pixel at the left edge and the right edge of the section.
Expected Result: white plus tint gradient, effective colour about `rgb(219, 222, 248)`, H2 readable.
Actual Result: 440: `background-color rgb(255, 255, 255)`, `background-image linear-gradient(rgba(26, 42, 211, 0.157), rgba(26, 42, 211, 0.157))`, app shell `rgb(13, 14, 19)` behind it, sampled pixels `rgb(219, 221, 248)` and `rgb(219, 222, 248)`. 478: sampled `rgb(219, 222, 248)` and `rgb(219, 221, 248)`. 479: `rgb(220, 222, 249)` and `rgb(219, 222, 248)` (shell transparent). H2 `rgb(17, 17, 17)` 21.25 px, fully inside the viewport.
Status: PASS
Evidence: `res3.json` (`rsp03`).
Related Bug: NONE

### SEO

Test ID: SEO-01
Scope: static content.
Preconditions: none.
Action: read `dist/index.html` as text; render with `Emulation.setScriptExecutionDisabled` at 1920, 820 and 390.
Expected Result: the FUN-01 content exists without JavaScript.
Actual Result: all 32 text nodes are in the generated HTML (FUN-01). With scripting disabled the rendered `innerText` of the section is identical to the one with scripting (1348 characters at the three viewports).
Status: PASS
Evidence: `h/static.mjs`, `res3.json` (`nojs`).
Related Bug: NONE

Test ID: SEO-02
Scope: structure.
Preconditions: `dist/index.html`.
Action: count elements; compare with the previous build.
Expected Result: 1 `h1` (page), 1 `h2` and 3 `h3` in the section, `id="servicios"` unique, non-empty `alt`, one `noindex`, no structured data added.
Actual Result: `h1` 1; `h2` in the section 1; `h3` 3; `id="servicios"` 1; 3 images with non-empty `alt` (the three texts of extraction section 8); `<meta name="robots" content="noindex">` 1 in both builds; `application/ld+json` 0 and `itemscope`/`itemtype` 0 in both builds. Outside the section the page HTML is identical to `d5b3850` (whitespace ignored). The section has no `ul`/`li` (D-5), no `style` attribute, no `script`.
Status: PASS
Evidence: `h/static.mjs` output.
Related Bug: NONE

### Accessibility

Test ID: ACC-01
Scope: text contrast.
Preconditions: 1920 × 945 and 390 × 844; effective background computed by compositing every ancestor background colour and gradient over white.
Action: WCAG 2.1 contrast ratio of each pair.
Expected Result: at least 4.5:1 (3:1 for text of 24 px or more, or 18.66 px bold or more).
Actual Result (ratio, size, background): H2 14.18:1, 31.25 px (21.25 px at 390; large in both), `rgb(219.0, 221.6, 248.1)`. Intro 4.77:1, 18 px, same background (threshold 4.5). Eyebrow 6.81:1, 13 px (12 px at 390), same background. H3 18.88:1, 28.8 px, white. Description 18.88:1, 16 px, white. Chip text 12.99:1, 12.5 px, `rgb(241.3, 242.2, 252.4)`. Pill text 9.07:1, 13 px bold, `#1a2ad3`. Button text 9.07:1, 16 px bold, `#1a2ad3` (11.14:1 on hover, `#101fb5`). Trust value 9.07:1, 30 px (22 px at 390; large), white. Trust label 6.36:1, 13 px, white. Values are the same at both viewports. No pair is below its threshold.
Status: PASS
Evidence: `res3.json` (`acc01`).
Related Bug: NONE

Test ID: ACC-02
Scope: keyboard.
Preconditions: 1920 × 945, focus starts at the document start.
Action: press Tab through the page (13 presses) and record the focused element, `:focus-visible` and the outline; sample the focus ring pixels from a screenshot.
Expected Result: the three CTAs are reached in visual order, each with a visible indicator, no keyboard trap.
Actual Result: order of focus stops: Menu trigger, Hero pause control, five pagination bullets, process CTA `Solicitar revisión`, process CTA `Contactar por WhatsApp`, then the three Services CTAs (`x` 361, 782 and 1204 at the same `y`, left to right), then focus leaves the section and wraps to the Menu trigger. Each CTA has `:focus-visible` true and outline `solid 3px rgba(26, 42, 211, 0.32)`, offset 3px. No trap. Ring pixel `rgb(181, 187, 241)`; contrast of the ring against the surrounding card background `rgb(255, 255, 255)` 1.85:1 and against the button `rgb(26, 42, 211)` 4.90:1 (observation, listed for the Product Manager; the style is the approved reference style, extraction section 10, and no threshold is approved for focus indicators).
Status: PASS
Evidence: `res2.json` (`acc02`, `fun.ringSample`).
Related Bug: NONE

Test ID: ACC-03
Scope: SVG attributes and accessible names.
Preconditions: 1920 × 945.
Action: read the attributes of the 19 inline SVG; read the accessibility tree of the section (`Accessibility.getFullAXTree`).
Expected Result: 19 SVG with `aria-hidden="true"` and `focusable="false"`; no duplicate or empty accessible names.
Actual Result: 19 of 19 SVG have both attributes; none appears in the accessibility tree. Tree of the section: 1 H2, 3 H3, 3 images named by their `alt`, 3 links, plain text (eyebrow, intro, descriptions, chips, trust bar). No empty name on an exposed node. Links: `Solicitar servicio →` (card 1), `Solicitar servicio →` (card 2), `Solicitar diagnóstico →` (card 3). The first two links have the same role and the same accessible name; the name includes the arrow glyph, which is generated content (`::after { content: "→" }`) and is exposed to assistive technology. Definition used: two or more exposed interactive nodes with the same role and the same accessible name. The text of the CTAs is frozen content (extraction section 3 and section 11; D-6 and PD-56) and the arrow is the reference design, so this is not a defect of the implementation; it is recorded as a Product Manager decision (FIND-027) and the test is recorded FAIL against the literal criterion.
Status: FAIL
Evidence: `res3.json` (`acc03svg`, `acc03tree`).
Related Bug: NONE (FIND-027)

Test ID: ACC-04
Scope: reduced motion.
Preconditions: 1920 × 945, first CTA centred; `prefers-reduced-motion` emulated.
Action: hover the CTA with `reduce` and with `no-preference`; read computed transforms and durations; sample 60 ms after leaving the hover.
Expected Result: with `reduce` the CTA transition and arrow shift are disabled; with `no-preference` they run.
Actual Result: `reduce`: `::after` transition duration 0 s, hover transform `none`, card transition 0 s, card hover transform `none`; 60 ms after leaving, the arrow is at `matrix(1, 0, 0, 1, 0, -1)` (no interpolation). `no-preference`: `::after` 0.22 s, hover `matrix(1, 0, 0, 1, 4, -2)`, card 0.3 s with `matrix(1, 0, 0, 1, 0, -6)`; 60 ms after leaving the arrow is at `matrix(1, 0, 0, 1, 2.56897, -1.64224)` (interpolating). Observation: under `reduce` the button's own `background-color` transition (0.25 s) is not disabled (60 ms after leaving the hover the colour is `rgb(18, 33, 186)`, between the two colours); the reference rule disables only the card and the arrow, and PD-56 D-7 preserves that handling. It is a colour change, not movement.
Status: PASS
Evidence: `res2.json` (`acc04`).
Related Bug: NONE

Test ID: ACC-05
Scope: no JavaScript.
Preconditions: viewports 1920 × 945, 820 × 1180, 390 × 844.
Action: compare the section with and without scripting (probe of rectangles, computed sizes, text and images).
Expected Result: same text, images and layout.
Actual Result: identical section rectangle, card, trust bar and type measurements at the three viewports; identical text (1348 characters); the three images complete with the same variant (the lazy images load without scripting). Section height 1395.58 / 2232.69 / 3373.09 and document height 4234 / 5716 / 7597 in both states.
Status: PASS
Evidence: `res3.json` (`nojs`).
Related Bug: NONE

### Performance

Test ID: PRF-01
Scope: weight, requests and layout shift (reported, no threshold approved).
Preconditions: browser cache disabled; each viewport loaded fresh, then the page scrolled through.
Action: record `encodedDataLength` of the three images, requests of the new and previous build, CSS and HTML size and gzip, JavaScript hashes, `layout-shift` entries (5 runs at each of 3 viewports).
Expected Result: measurements reported.
Actual Result:
- Images transferred (variant, bytes, after scrolling to the section): 1920, 1024, 820, 844: three `-1024x768` files, 35 118 + 37 444 + 27 624 = 100 186 bytes. 390 and 440: three `-768x576` files, 23 810 + 25 054 + 19 392 = 68 256 bytes. At first load without scrolling no Services image is requested at any viewport (all lazy).
- Requests added by the section: 3 (the three images); the request lists of the two builds differ only by those three paths (34 requests before, 37 after, at 1920 with a full scroll). CSS and HTML are not extra requests. No new font or script request.
- CSS `main.css`: 49 628 → 58 506 bytes (+8 878); gzip 8 977 → 10 230 (+1 253). `index.html`: 19 237 → 33 760 bytes (+14 523); gzip 4 412 → 7 555 (+3 143).
- JavaScript: the hashes of every `.js` file are identical, +0 bytes.
- CLS, 5 runs each: 1920 total 0.0002, 0.00057, 0.00057, 0.00057, 0.00057; 820 total 0.00018 ×5; 390 total 0.00064 ×5. Layout shift attributed to nodes inside `#servicios`: 0 in all 15 runs (the total comes from elements outside the section).
Status: PASS (report only)
Evidence: `res3.json` (`perf`), `res4.json` (`net.diff`), `h-old.txt`, `h-new.txt`.
Related Bug: NONE

### Security

Test ID: SEC-01
Scope: markup, requests, secret patterns.
Preconditions: none.
Action: scan the section markup; log every request of the page loads at set V in both builds; scan `git diff d5b3850 dfc4f96` (574 lines) and the 12 image names with 8 secret patterns (AWS key id, GitHub token, `sk-` key, PEM private key header, JWT, `api key|secret|password|token|bearer|authorization` assignment, Slack token, 40+ character base64 run).
Expected Result: no inline script, inline event handler, external URL or form; every request to `127.0.0.1`; 0 matches.
Actual Result: in the section: `<script>` 0, `on*=` attributes 0, `style=` attributes 0, form elements (`form`, `input`, `button`, `select`, `textarea`) 0; `http(s)://` occurrences 3, all `xmlns="http://www.w3.org/2000/svg"` namespace attributes of the three card icons (no request). Requests: 0 not to `127.0.0.1` in the page loads at 6 viewports and in 1 026 requests of the navigation runs (the six off-host requests recorded in a first navigation run came from the harness clicking the Bottom Navigation WhatsApp and `tel:` items; they were blocked by the resolver rule and the run was discarded). Secret scan: 0 matches for each pattern; 0 of 12 image names match.
Status: PASS
Evidence: `h/static.mjs` output, `res3.json` (`perf.bytes[*].nonLocal`), `res5.json` (`nonLocal` empty, 1 026 requests).
Related Bug: NONE

### Integrations

Test ID: INT-01
Scope: integrations.
Preconditions: none.
Action: inspect the section for a form, API call, Cloudflare binding or external service.
Expected Result: NOT APPLICABLE.
Actual Result: the section has no form, no script, no network call and no external URL (SEC-01). NOT APPLICABLE: nothing to verify. The status is not PASS, FAIL, BLOCKED or NOT RUN.
Status: NOT APPLICABLE
Evidence: SEC-01.
Related Bug: NONE

### Regression

Test ID: REG-01
Scope: CSS and template diff.
Preconditions: none.
Action: `git diff d5b3850 dfc4f96 -- src/assets/css/main.css src/index.njk`.
Expected Result: no removed or changed existing line; every selector of existing rules unchanged.
Actual Result: `main.css`: one hunk `@@ -2589,0 +2590,452 @@`, 452 added lines, 0 removed; the hunk starts after the last pre-existing rule (`body.sm-menu-open .sm-menu-trigger-layer::before`). `index.njk`: 1 added line (`{% include "components/services.njk" %}` after `process.njk`), 0 removed. All new selectors begin with `.sm-services` or `.sm-service`.
Status: PASS
Evidence: `git diff --numstat`, hunk header.
Related Bug: NONE

Test ID: REG-02
Scope: layout of Hero, process, Smart Header, Menu overlay, Bottom Navigation.
Preconditions: both builds served; set V.
Action: bounding boxes of every element with an `id` outside the section (27 per viewport), the Menu and Bottom Navigation items, the process CTAs and title; class changes after scroll down 900, scroll up 300 and scroll to the process section; Menu overlay state and link boxes when open.
Expected Result: only the document height and elements after Services differ.
Actual Result: at the six viewports all boxes are equal (tolerance 0.05 px) except the two `swiper-wrapper-<random id>` elements whose id is generated per load (equal boxes by position; the key differs between loads). Header, Hero and process classes after the three scroll steps are identical in both builds, the Menu overlay opens (`aria-expanded` true, `aria-hidden` false) with identical link boxes and closes on the second click. Document height: 2838 → 4234 (1920), 3310 → 4728 (1024), 3484 → 5716 (820), 2698 → 4902 (844), 4224 → 7597 (390), 4123 → 7291 (440).
Status: PASS
Evidence: `res4.json` (`reg02`).
Related Bug: NONE

Test ID: REG-03
Scope: console.
Preconditions: set V, load, scroll behaviours, full page scroll, Menu open and close.
Action: collect console errors and warnings, uncaught exceptions, log entries and HTTP status ≥ 400 or failures in both builds.
Expected Result: only the `favicon.ico` 404; no error from `process.js`, `smart-header.js`, `menu-overlay.js`.
Actual Result: both builds at 1920: one entry `Failed to load resource: the server responded with a status of 404 (Not Found) …/favicon.ico`, one 404 (`/favicon.ico`). The other five viewports (same browser session) show no entry (the browser does not request the icon again). No exception, no console error or warning, no failed request in either build.
Status: PASS
Evidence: `res4.json` (`reg03`).
Related Bug: NONE

Test ID: REG-04
Scope: navigation targets.
Preconditions: 1920 × 945 and 390 × 844; real mouse clicks; the overlay confirmed open before the click.
Action: click every Menu overlay link and every in-page Bottom Navigation item in both builds; record target existence, hash and scroll.
Expected Result: `Servicios` reaches an existing target; `Cobertura` has no target.
Actual Result: new build, Menu overlay (both viewports): `#como-trabajamos` scrolls (target top 256 / 152 px, equal to the Header bottom); `#servicios` now scrolls to the section (`scrollY` 2582 at 1920, 3986 at 390; top 256.1 / 152.3); `#cobertura`, `#marcas`, `#contacto` have no target: the hash changes, no scroll (`scrollY` 0), the overlay closes. Bottom Navigation at 390: `Servicios` scrolls to the section (`scrollY` 3986); `Cobertura` (`#cobertura`) and `Agendar visita` (`#agendar-diagnostico`) change the hash only (no target); WhatsApp and `Llamar` are not in-page links (not clicked). Previous build: `#servicios` had no target (hash changes, `scrollY` 0). The Bottom Navigation is `display: none` at 1920. Note: a first navigation run (shorter waits) clicked before the overlay animation settled and recorded no navigation; it was discarded and repeated with an explicit check that the overlay was open (`openedBeforeClick` true in every record of the second run).
Status: PASS
Evidence: `res5.json` (`reg04`).
Related Bug: NONE

## 4. Discrepancies

- FIND-026 (RSP-01): column widths and card heights of the extraction at 1024, 820 and 844 differ from the implementation by an amount equal to a 15 px narrower container; cause not verified.
- FIND-027 (ACC-03): two Services links have the same accessible name (`Solicitar servicio →`), and the generated arrow is part of the name.

No BUG was opened: no defect of the implementation against the approved specification was verified.

## 5. Open for the Product Manager

- ACC-03 is recorded FAIL against the literal criterion; the cause is approved frozen content (FIND-027). Decision needed: keep the identical link text, or differentiate the accessible names (class B). No change was made.
- Under the acceptance rule of `docs/TESTING-PROTOCOL.md` the milestone cannot close with a FAIL unless an exception is recorded; this record does not grant it.
- Focus indicator of the CTA: the approved reference outline `rgba(26,42,211,0.32)` over the white card measures 1.85:1 against its surroundings (4.90:1 against the button). No threshold is approved; reported only.
- Performance (PRF-01): no threshold approved; values reported in the record.
- Known items, not defects of this task: the three CTAs and `#contacto`, `#cobertura`, `#marcas`, `#agendar-diagnostico` have no target (backlog item 49); `noindex` is the staging measure (PD-52); the Mobile Landscape rule below 767 px is out of scope (PD-56, D-9).
- The Product Manager commits this record; the agent performed no commit, push or deployment.
