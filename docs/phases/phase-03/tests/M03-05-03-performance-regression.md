# M03-05-03 — Performance and Regression

## 1. Identification

| Field | Value |
|---|---|
| Task | M03-05-03 (task 3 of 3 of M03-05: Performance and Regression) |
| Spec and contract | `.coordination/tasks/M03-05-03/spec.md` (SHA-256 `bdd8bd8d30f5943be2ae4f86a0ec5bedfb5bfc042e1fefdb5082498e18125885`), `.coordination/tasks/M03-05-03/contract-r1.md` (SHA-256 `5435fad18694b003041fc9d6ca357f9292ba94501c358a6763f640eee056de13`), approval `.coordination/approvals/M03-05-03/approval.md` (PD-46) |
| Baseline commit | `6a86594762260e1dbe1284156ecdcb5eff931ab9` (commit `6a86594`, PD-45). HEAD at execution: `31cc91e0bff104db16477977766d65432522babe`, a descendant. `git diff --name-only 6a86594 31cc91e` lists six files, all under `docs/` (`docs/PROJECT-STATE.md`, `docs/phases/PHASE-03-como-trabajamos.md`, `docs/phases/phase-03/M03-04-opencode-implementation.md`, `docs/phases/phase-03/tests/M03-05-02-functional-responsive-accessibility.md`, `docs/tracking/BUGS.md`, `docs/tracking/FINDINGS.md`). Baseline rule satisfied. |
| Blob IDs of files under test | All 20 files of spec section 0 matched their stated blob IDs before the work (`git hash-object`). |
| Tracking blobs before the work | `docs/tracking/BUGS.md` `f9b236a532fb56bba720a21fea8acd1d3960241a`; `docs/tracking/FINDINGS.md` `4dc70f99863ffe6ed04bc2db57d3572ac3143d98`. |
| Commit range under test | Nine commits changing `src/`, `4d44331` (exclusive) to `6a86594`: `9e34424`, `4a8794d`, `22a4999`, `542601e`, `6f1e252`, `3436414`, `f0743d5`, `3865a34`, `ac58265`. |
| Comparison builds | `CURRENT` = `6a86594` (baseline). `PRE-B` = `de983e5` (`6f1e252^`). `PRE-C` = `bbd7702` (`3865a34^`). `PRE-M03-04` = `4d44331` (`9e34424^`). |
| Date and executor | 2026-11-10 (UTC). Executor: Claude Code. Reviewer: Codex (pending, see section 10). |
| Environment | Windows 11 Pro 10.0.26300; AMD Ryzen 7 5825U, 16 logical processors, 15.4 GB RAM; Node.js v24.19.0; npm 11.17.0; Eleventy 3.1.6 (`npm run build` only); Google Chrome 157.0.8103.40 at `C:\Program Files\Google\Chrome\Application\chrome.exe`, `--headless=new`, CDP on `127.0.0.1:9333`, one `--user-data-dir` per session under the harness directory. |
| `package.json` and `package-lock.json` | Content identical in the four comparison commits (SHA-1 of the content `387b61f6b50a8d9fde52a7408fe14a4c5450e658` and `d5347c5a247624588d9804b9b828cb015fc637c3`). |
| SHA-256 of `dist/index.html` | `CURRENT` `11d50d332d3c04e12e7330af0c0bd60412926fe0c444662cb5d5cd6441d44c2d`; `PRE-B` `de2fcbf84413ca19c96e84dc8aa2e50fb65cc9ef78147f2015de3af0e5511129`; `PRE-C` `de2fcbf84413ca19c96e84dc8aa2e50fb65cc9ef78147f2015de3af0e5511129` (identical to PRE-B); `PRE-M03-04` `56c98ed870bb95800efe357f3ea6f6952f988254e83bddfa238e2b54d26a204d`. The repository `dist/` built from HEAD has the same file list and SHA-256 values as the `CURRENT` build. |
| Build method | Each comparison commit exported with `git -c core.autocrlf=false archive <commit>` into an empty scratch directory; every `src/` file was checked against its blob ID with `git hash-object` (0 mismatches in all four). `node_modules` linked by a directory junction to the repository `node_modules` (no package installed, no network). `npm run build` in each scratch directory: exit 0. An earlier export without `core.autocrlf=false` produced CRLF copies of `text=auto` files and was discarded; it is not used in any result. |
| Scrollbar condition | `--hide-scrollbars` in every session. `innerWidth − documentElement.clientWidth = 0` observed at 1440 × 900 in the first session; the flag was the same in all later sessions. Device pixel ratio 1. Emulation with `mobile: false`. |
| Viewport sets | Set L: Desktop 1440 × 900, Tablet 820 × 1180, Mobile Landscape 844 × 390, Mobile Portrait 390 × 844. Set P: set L plus 1280 × 800 and 1920 × 1080 (REG-02 used the six set-P viewports). Set B: 478, 479, 991 and 992 px widths (REG-03 fresh loads at 478 × 844, 479 × 844, 991 × 900, 992 × 900 and 844 × 390). REG-09 widths: 1920 × 1080, 1024 × 768, 844 × 390, 478 × 844, 390 × 844. Heights are harness choices; no document gives them. Viewports are observations, not project standards. |
| Load before each session | Timed sessions of the reduced run (`results-timed-r2.json`): 1-second CPU load 3.0 % to 22.8 %; free memory before each session 2.02 to 2.59 GB; chrome.exe count 35 to 40 (this includes the harness browser). The first timed run recorded 1-second load values of 3.4 % to 74.4 % (PRF-01, section 4); the load of that run was not stable. |
| Local server | Node `http` static servers on `127.0.0.1` at ports 8801 (CURRENT), 8802 (PRE-B), 8803 (PRE-C), 8804 (PRE-M03-04); `.js` and `.mjs` as `text/javascript`. Every request not to `127.0.0.1` was failed by the harness. External requests recorded: none (REG-11, 16 sessions). |
| Harness directory | `C:\Users\July\AppData\Local\Temp\m03-05-03-harness` (outside the repository, not committed). Files: `lib.mjs`, `instr.mjs` (in-page instrumentation and scroll driver), `predict.mjs` (stepper predictor), `smoke.mjs`, `untimed-a.mjs` (REG-05, REG-06, REG-07, REG-09, PRF-05), `reg02.mjs`, `reg03-04.mjs`, `reg04b.mjs`, `reg05b.mjs`, `reg08-10.mjs`, `reg11.mjs`, `timed.mjs` (first timed run), `timed-r2.mjs` (reduced timed run), `timed-r3.mjs` (completion run of the second part), `analyze.cjs`, the `results-*.json` files, the `*.log` files, and `build-base`, `build-preB`, `build-preC`, `build-preM0304` (scratch builds). Commands: `node untimed-a.mjs`; `node reg02.mjs`; `node reg03-04.mjs`; `node reg04b.mjs`; `node reg05b.mjs`; `node reg08-10.mjs`; `node reg11.mjs`; `node timed-r2.mjs`; `node analyze.cjs`. |

## 2. Reduced scope (Product Manager decision, 2026-11-10)

The Product Manager reduced the timed scope of this task on 2026-11-10. This is a scope reduction only; it grants no new permission. The timed tests are run and recorded as follows:

- **PRF-01** completed in the second part of the reduced scope (PM instruction 2026-11-11): the missing runs (PRE-B at Mobile Landscape and Mobile Portrait; PRE-M03-04 at all four set-L viewports; five runs each) were measured in `timed-r3.mjs`. The 30 runs saved before the first stop (CURRENT at four viewports; PRE-B at Desktop and Tablet) were kept and not repeated. Status PASS, with the comparability limit of section 4.1.
- **PRF-02** run for the cells Desktop (1440 × 900) and Mobile Portrait (390 × 844), CURRENT and PRE-B, CPU 1x and 6x, section scroll forward and reverse, five runs per cell. Tablet, Mobile Landscape and CPU 4x were not run.
- **PRF-03** and **PRF-04** not run. Reason, as given by the Product Manager: PRF-03 and PRF-04 repeat measurements already made in M03-04 (PB-04, PB-05, PC-03), and the untimed regression covers reduced-motion listener behaviour. No BUG or FIND is opened for that.
- **PRF-06** run as written in the spec (CURRENT and PRE-M03-04, set L, CPU 1x, five runs each: 40 sessions). The first 13 sessions (CURRENT, `timed-r2.mjs`) were kept; the stop at session 14 (memory below 2 GB) was followed by the completion run of the second part (`timed-r3.mjs`, 27 sessions: CURRENT at 844 × 390 runs 4 and 5 and at 390 × 844; PRE-M03-04 at all four viewports). Status PASS.
- **Memory pause.** The first timed run stopped on 2026-11-10 at about 22:04 UTC because the machine ran low on memory (0.3 GB free). The Product Manager resumed the task at about 01:06 UTC on 2026-11-11. The pause lasted about 3 hours.
- **Second part (2026-11-11, 03:04:27 to 03:10:17 UTC for the measurement run).** Browser closed fully after each session; free memory checked before each session (4.7 to 4.95 GB; the 2 GB stop rule was not reached); 1-second CPU load recorded before each session (3 % to 34 %).

The full ratio and range comparison (section 5 of this record) is given only for the cells that were run.

## 3. Summary of test statuses

| Test | Status | Note |
|---|---|---|
| PRF-01 | PASS | All 12 cells measured with five runs; PRE-B at 844 × 390 and 390 × 844 and all PRE-M03-04 cells were measured in fresh browsers and are not comparable with the first-run cells (section 4.1) |
| PRF-02 | PASS | Desktop and Mobile Portrait, CURRENT and PRE-B, CPU 1x and 6x, five runs each; one observation outside a recorded range (class A) |
| PRF-03 | NOT RUN | Product Manager decision 2026-11-10, reduced scope |
| PRF-04 | NOT RUN | Product Manager decision 2026-11-10, reduced scope |
| PRF-05 | PASS | Sizes and requests recorded; compression and cache headers not shown |
| PRF-06 | PASS | All 40 planned sessions measured (CURRENT and PRE-M03-04, set L, CPU 1x, five runs each); LCP outliers and one unattributed layout shift recorded (section 4.6) |
| REG-01 | PASS | Syntax checks and build exit 0; every inventory difference explained |
| REG-02 | PASS | Zero discrete mismatches at the six set-P viewports |
| REG-03 | PASS | Live changes and fresh loads at set B: values equal the layout of each width |
| REG-04 | PASS | Deep link and reload: states correct after 2 s; reload with the position inside the extent also correct |
| REG-05 | PASS | No marker, no fill, no `is-enhanced`; section and steps opacity 1 with scripting disabled |
| REG-06 | PASS | Initialization error path: steps fully visible at four viewports (targeted variant); literal variant recorded |
| REG-07 | PASS | Same focus order in CURRENT and PRE-B; markers and fills `aria-hidden`; no progress ARIA |
| REG-08 | PASS | Differences in Header logo transition, Menu trigger position and CTA elements, each explained by a decision |
| REG-09 | PASS | D9 and D10 values at all five widths |
| REG-10 | PASS | Carousel behaviour identical in CURRENT and PRE-M03-04; autoplay under reduced motion recorded (FIND-025) |
| REG-11 | PASS | Console: only the `favicon.ico` 404 in all builds; no error from `process.js`, `smart-header.js` or `menu-overlay.js` |

Counts: PASS 15; FAIL 0; BLOCKED 0; NOT RUN 2 (PRF-03, PRF-04). Total 17 tests. (First part of the reduced scope: PASS 13, BLOCKED 1, NOT RUN 3; see `report-01.md`.)

## 4. Performance tests

### 4.1 PRF-01 — Load timing (PASS; comparability limit)

- **Test ID:** PRF-01
- **Scope:** Navigation Timing `domContentLoaded` and `load` for CURRENT, PRE-B and PRE-M03-04 at set L, CPU 1x, five runs.
- **Environment:** section 1; the first timed run (`timed.mjs`, log `timed.log` and `timed2.log`).
- **Preconditions:** machine otherwise idle (not met in this run; see load values below).
- **Action:** fresh load per run, 300 ms settle, read `performance.getEntriesByType('navigation')`.
- **Expected Result:** measured and recorded, beside Priority B section 10 values (Desktop 84 / 144, Tablet 74 / 100, Mobile Landscape 76 / 105, Mobile Portrait 89 / 131 ms; single run, not a threshold).
- **Actual Result:** 60 runs (five per cell, twelve cells), medians with minimum to maximum in brackets. DCL and load in ms.

| Build | Viewport | Browser per session | DCL median [min..max] | Load median [min..max] | Max 1-s CPU load before a session |
|---|---|---|---|---|---|
| CURRENT | 1440 × 900 | one shared (first run) | 88 [82..181] | 141 [127..266] | 74.4 % |
| CURRENT | 820 × 1180 | one shared (first run) | 88 [76..101] | 135 [121..166] | 25.2 % |
| CURRENT | 844 × 390 | one shared (first run) | 79 [76..83] | 124 [118..129] | 10.9 % |
| CURRENT | 390 × 844 | one shared (first run) | 91 [88..122] | 139 [127..180] | 15.3 % |
| PRE-B | 1440 × 900 | one shared (first run) | 80 [76..156] | 136 [108..217] | 39.8 % |
| PRE-B | 820 × 1180 | one shared (first run) | 90 [78..136] | 136 [120..210] | 65.6 % |
| PRE-B | 844 × 390 | fresh per session (completion run) | 914 [873..954] | 996 [962..1070] | 34.0 % |
| PRE-B | 390 × 844 | fresh per session (completion run) | 900 [895..972] | 991 [978..1066] | 9.7 % |
| PRE-M03-04 | 1440 × 900 | fresh per session (completion run) | 851 [824..860] | 921 [889..945] | 26.8 % |
| PRE-M03-04 | 820 × 1180 | fresh per session (completion run) | 830 [811..865] | 882 [878..961] | 17.5 % |
| PRE-M03-04 | 844 × 390 | fresh per session (completion run) | 844 [814..2846] | 915 [890..2930] | 12.4 % |
| PRE-M03-04 | 390 × 844 | fresh per session (completion run) | 865 [835..892] | 948 [925..968] | 11.6 % |

- **Comparability limit (class A, A-7).** The first run used one Chrome process for all its sessions. The completion run started a new Chrome process for every session, as the Product Manager's rule (one browser at a time, closed fully afterwards) allowed. The fresh-browser cells show DCL of about 830 to 950 ms, about ten times the shared-browser cells (about 80 to 90 ms), and the same pattern appears for every fresh-browser cell. The cause is consistent with cold browser start but was not verified. Therefore the fresh-browser cells (PRE-B at 844 × 390 and 390 × 844, and all PRE-M03-04 cells) are not comparable with the shared-browser cells (CURRENT, PRE-B at 1440 and 820). No CURRENT / PRE-M03-04 DCL or load ratio is given for PRF-01. The only in-browser-state-equal comparison is CURRENT with PRE-B at 1440 and 820 (both shared-browser): DCL 88 vs 80 and 88 vs 90 ms (medians).
- **Outlier:** PRE-M03-04 at 844 × 390, one run with DCL 2846 ms and load 2930 ms, kept in the data and visible in the maximum.
- The values are not comparable with the Priority B section 10 single-run values.
- **Status:** PASS (every cell measured with five runs as specified; comparability limit stated).
- **Evidence:** `results-timed.json` (first run, 30 runs), `results-timed-r3.json` (completion run, 30 runs), `timed.log`, `timed2.log`, `timed-r3.log`.
- **Related Bug ID:** none.

### 4.2 PRF-02 — Stepper scroll cost (PASS, reduced cells)

- **Test ID:** PRF-02
- **Scope:** CURRENT and PRE-B; cells Desktop 1440 × 900 and Mobile Portrait 390 × 844; CPU 1x and 6x; section scroll (`#como-trabajamos`, from `sectionTop − innerHeight` to `sectionBottom`, 20 px per frame) forward then reverse in the same page; five runs per cell, each on a fresh page load.
- **Environment:** section 1; `timed-r2.mjs`; results `results-timed-r2.json` (40 sessions, one browser per session, closed fully after each).
- **Preconditions:** free memory at or above 2 GB before each session (observed 2.02 to 2.59 GB); scrollbars hidden; CPU throttling set after load and 500 ms idle.
- **Action:** `Emulation.setCPUThrottlingRate` at 1 or 6; the section scroll as in the spec; metrics from the in-page instrumentation and `Performance.getMetrics` deltas.
- **Expected Result:** measured and recorded; CURRENT / PRE-B ratios of the median script time and of the 95th-percentile frame interval given per cell and compared with the recorded ranges (script time 1.064 to 1.467 forward and 1.103 to 1.509 reverse; frame interval p95 0.934 to 1.012; long tasks 0; layout reads per frame 0; one `scroll` listener alive at the end). A value outside a recorded range is a class A observation. No verdict.
- **Actual Result:** tables in section 5.1. In short: all script-time ratios fall inside the recorded ranges (forward 1.201 to 1.392; reverse 1.293 to 1.388). The frame-interval p95 ratio is 1.006, 1.000, 1.057 and 1.012 forward and 1.006 reverse; the value 1.057 (Desktop, 6x, forward) is outside the recorded range (class A, A-1 in section 9). Long tasks are 0 in every run. Layout reads per frame are 0 at Desktop; at Mobile Portrait CURRENT they are 0.0296 per frame forward (5 reads per 169 frames), made by the Swiper core script of the Hero carousel and not by `process.js` (class A, A-2). One `scroll` listener from `process.js` is alive at the end of every CURRENT run, which is the known item BUG-002 (section 0 item 2): cited, no new entry.
- **Status:** PASS (measured; two class A observations).
- **Evidence:** `results-timed-r2.json` (`PRF02` array); `analyze.cjs` output; log `timed-r2.log`.
- **Related Bug ID:** BUG-002 (known item, cited; no new entry).

### 4.3 PRF-03 — Stepper under reduced motion (NOT RUN, reduced scope)

- **Test ID:** PRF-03
- **Scope:** CURRENT at set L, CPU 1x and 6x, `prefers-reduced-motion: reduce`, section scroll.
- **Environment:** section 1.
- **Preconditions:** —
- **Action:** —
- **Expected Result:** no marker, no `process.js` `scroll` listener, no `process.js` rAF request, no long task.
- **Actual Result:** not run. Product Manager decision 2026-11-10, reduced scope: PRF-03 and PRF-04 repeat measurements already made in M03-04 (PB-04, PB-05, PC-03), and the untimed regression covers reduced-motion listener behaviour. The untimed evidence is in REG-03 (`reduced ON`: 0 markers, 0 `process.js` listeners alive, at Desktop, Mobile Portrait and Mobile Landscape; the reduced-motion listener count was not measured with CPU throttling).
- **Status:** NOT RUN.
- **Evidence:** `results-reg03-04.json` (REG-03).
- **Related Bug ID:** none (no BUG or FIND is opened for this decision).

### 4.4 PRF-04 — Smart Header cost (NOT RUN, reduced scope)

- **Test ID:** PRF-04
- **Scope:** CURRENT and PRE-C, set L, CPU 1x and 6x, page scroll.
- **Environment:** section 1.
- **Preconditions:** —
- **Action:** —
- **Expected Result:** `smart-header.js` adds no `scroll` listener and no continuous rAF loop (SH-D13; SH-D20 exception of two one-shot frames at start).
- **Actual Result:** not run. Product Manager decision 2026-11-10, reduced scope (same reason as PRF-03). The listener and rAF attribution of `smart-header.js` was not measured in this run.
- **Status:** NOT RUN.
- **Evidence:** —
- **Related Bug ID:** none (no BUG or FIND is opened for this decision).

### 4.5 PRF-05 — Asset weight and requests (PASS)

- **Test ID:** PRF-05
- **Scope:** every file of `dist/` (size and type totals) for CURRENT and PRE-M03-04; requests while loading at Desktop 1440 × 900.
- **Environment:** section 1; `untimed-a.mjs`.
- **Preconditions:** builds from section 1.
- **Action:** list `dist/` files with `stat`; record each request (URL, type, status, encoded bytes) with the local server and the Network domain.
- **Expected Result:** measured and recorded, with the per-file difference between the two builds; no threshold. Compression and cache headers of Cloudflare are not shown by a local server.
- **Actual Result:**

| Type | CURRENT (files, bytes) | PRE-M03-04 (files, bytes) |
|---|---|---|
| HTML | 1, 19 196 | 1, 8 912 |
| CSS | 3, 57 630 | 3, 36 849 |
| JavaScript | 16, 150 262 | 14, 108 834 |
| WebP | 10, 768 484 | 7, 615 006 |
| Fonts | 8, 856 220 | 8, 856 220 |
| Other | 2, 5 160 | 2, 5 160 |
| **Total** | **40 files, 1 856 952 bytes** | **35 files, 1 630 981 bytes** |

  Per-file differences: three CTA image derivatives added (`…-cta-480.webp`, `…-cta-800.webp`, `…-cta-1200.webp`, added by `9e34424`); `assets/js/process.js` and `assets/js/smart-header.js` added (`4a8794d`, `3865a34`); `assets/css/main.css`, `assets/js/menu-overlay.js` and `index.html` changed. Requests at Desktop: CURRENT 34 requests, PRE-M03-04 31 requests; none external; none failed.
- **Status:** PASS.
- **Evidence:** `inv-CURRENT.txt`, `inv-PRE-M03-04.txt` (SHA-256 per file), `results-untimed-a.json` (PRF05).
- **Related Bug ID:** none.

### 4.6 PRF-06 — Paint and layout stability (PASS)

- **Test ID:** PRF-06
- **Scope:** CURRENT and PRE-M03-04, set L, CPU 1x, five runs; LCP (element and time) and CLS during load; CLS during the page scroll of section 2.
- **Environment:** section 1; `timed-r2.mjs` (13 CURRENT sessions, `results-timed-r2.json`) and `timed-r3.mjs` (27 sessions, `results-timed-r3.json`); one browser per session, closed fully after each.
- **Preconditions:** free memory at or above 2 GB before each session.
- **Action:** `PerformanceObserver` for `largest-contentful-paint` and `layout-shift` installed before page scripts; load with 1500 ms settle; page scroll 0 to maximum at 20 px per frame.
- **Expected Result:** measured and recorded; Core Web Vitals guidance cited as external evidence only; first-party layout shifts listed with selector.
- **Actual Result:** all 40 sessions. Medians of five runs (three at CURRENT 844 × 390 in the first part, see below; all five in the completion run), with minimum to maximum in brackets. LCP element is `img` in every session (no id or class; the element cannot be named further from the harness data).

| Build | Viewport | n | LCP time median [min..max] (ms) | CLS during load, median [min..max] | CLS during page scroll, max |
|---|---|---|---|---|---|
| CURRENT | 1440 × 900 | 5 | 1 024 [308..1 072] | 0.0003 [0.0001..0.0003] | 0.0000 |
| CURRENT | 820 × 1180 | 5 | 1 048 [1 036..1 056] | 0.0002 [0.0002..0.0002] | 0.0000 |
| CURRENT | 844 × 390 | 5 | 1 040 [1 036..1 240] | 0.0002 [0.0002..0.0002] | 0.0000 |
| CURRENT | 390 × 844 | 5 | 1 660 [1 640..1 680] | 0.0006 [0.0006..0.0006] | 0.0003 (see below) |
| PRE-M03-04 | 1440 × 900 | 5 | 1 176 [1 148..1 220] | 0.0003 [0.0003..0.0003] | 0.0000 |
| PRE-M03-04 | 820 × 1180 | 5 | 1 184 [1 152..1 204] | 0.0002 [0.0002..0.0002] | 0.0000 |
| PRE-M03-04 | 844 × 390 | 5 | 1 180 [1 120..1 188] | 0.0002 [0.0002..0.0002] | 0.0000 |
| PRE-M03-04 | 390 × 844 | 5 | 1 580 [1 564..1 628] | 0.0006 [0.0006..0.0006] | 0.0000 |

- **Comparison (both builds measured with one fresh browser per session, so comparable):** LCP median CURRENT minus PRE-M03-04: −152 ms at 1440, −136 ms at 820, −140 ms at 844, +80 ms at 390. Load CLS is equal at every viewport (0.0003, 0.0002, 0.0002, 0.0006). Recorded for information; no threshold.
- **LCP outliers (class A, A-8).** At CURRENT 1440 × 900, two of five runs have LCP 308 and 316 ms instead of about 1 050 ms; the median is kept. The cause was not investigated.
- **Layout shift during the page scroll (A-9).** At CURRENT 390 × 844, three of five runs have one layout shift of 0.00025 during the scroll (total 0.0003). The shift's source node is `null` in the layout-shift entry (the node is not identified), so no first-party selector can be listed; PRE-M03-04 at 390 × 844 shows no shift during the scroll. Not a FAIL: the value is far below any approved threshold, but its source is unknown.
- **Load-time layout shifts:** 1 to 2 entries per session; sources were not stored by the harness, so their selectors are not listed (limitation).
- **Status:** PASS (all 40 planned sessions measured; observations A-8 and A-9).
- **Evidence:** `results-timed-r2.json` and `results-timed-r3.json` (`PRF06` arrays, with `clsScrollEntries`); `timed-r2.log`, `timed-r3.log`.
- **Related Bug ID:** none.

## 5. Tables for PRF-02 (section 2 of the spec)

Cells: median [minimum..maximum] over five runs. Forward and reverse are separate. Ratio = median CURRENT / median PRE-B.

### 5.1 PRF-02 cells

**Desktop 1440 × 900, CPU 1x**

| Metric | CURRENT | PRE-B |
|---|---|---|
| Script time forward (s) | 0.0333 [0.0317..0.0340] | 0.0257 [0.0246..0.0262]; ratio 1.294 |
| Script time reverse (s) | 0.0326 [0.0318..0.0342] | 0.0252 [0.0226..0.0270]; ratio 1.293 |
| Task time forward (s) | 0.1798 [0.1766..0.1873] | 0.1548 [0.1490..0.1579] |
| Frames forward | 93 | 93 |
| Frame interval median (ms), forward | 16.7 | 16.7 |
| Frame interval p95 (ms), forward | 17.2 [16.8..17.2] | 17.1 [17.0..17.3]; ratio 1.006 |
| Frame interval p95 (ms), reverse | 17.3 [17.2..17.5] | 17.2 [17.2..17.3]; ratio 1.006 |
| Frame interval max (ms), forward | 41.5 [25.7..56.5] | 45.9 [30.7..53.2] |
| Long tasks, forward / reverse | 0 / 0 | 0 / 0 |
| Layout reads per frame, forward | 0 | 0 |
| rAF callback median (ms), forward | 0.1 [0.1] | 0.2 [0.2..0.25] |
| `window` scroll listeners alive at end | 1 (`process.js`) | 0 |
| `process.js` rAF requests, forward | 94 | 2 |

**Desktop 1440 × 900, CPU 6x**

| Metric | CURRENT | PRE-B |
|---|---|---|
| Script time forward (s) | 0.1742 [0.1699..0.2138] | 0.1252 [0.1228..0.1288]; ratio 1.392 |
| Script time reverse (s) | 0.1489 [0.1481..0.1697] | 0.1073 [0.0992..0.1093]; ratio 1.388 |
| Task time forward (s) | 1.0377 [0.9899..1.2330] | 0.8053 [0.7727..0.8425] |
| Frames forward | 93 | 93 |
| Frame interval median (ms), forward | 16.7 [16.7..16.8] | 16.7 [16.6..16.7] |
| Frame interval p95 (ms), forward | 18.6 [18.2..23.2] | 17.6 [17.3..18.2]; ratio 1.057 (class A, A-1) |
| Frame interval p95 (ms), reverse | 17.4 [17.3..17.7] | 17.3 [17.3..17.4]; ratio 1.006 |
| Frame interval max (ms), forward | 50.3 [42.0..55.8] | 41.8 [37.6..44.6] |
| Long tasks, forward / reverse | 0 / 0 | 0 / 0 |
| Layout reads per frame, forward | 0 | 0 |
| rAF callback median (ms), forward | 0.5 [0.5..0.6] | 1.0 [0.95..1.1] |
| `window` scroll listeners alive at end | 1 (`process.js`) | 0 |
| `process.js` rAF requests, forward | 94 | 2 |

**Mobile Portrait 390 × 844, CPU 1x**

| Metric | CURRENT | PRE-B |
|---|---|---|
| Script time forward (s) | 0.0557 [0.0538..0.0564] | 0.0463 [0.0453..0.0471]; ratio 1.201 |
| Script time reverse (s) | 0.0579 [0.0500..0.0600] | 0.0420 [0.0405..0.0469]; ratio 1.381 |
| Task time forward (s) | 0.3315 [0.3287..0.3410] | 0.3107 [0.3070..0.3135] |
| Frames forward | 169 | 169 |
| Frame interval median (ms), forward | 16.7 | 16.7 |
| Frame interval p95 (ms), forward | 17.3 [17.1..17.3] | 17.3 [17.0..17.4]; ratio 1.000 |
| Frame interval p95 (ms), reverse | 17.3 [17.3..17.5] | 17.2 [17.2..17.3]; ratio 1.006 |
| Frame interval max (ms), forward | 17.9 [17.7..19.0] | 19.0 [17.9..19.3] |
| Long tasks, forward / reverse | 0 / 0 | 0 / 0 |
| Layout reads per frame, forward / reverse | 0.0296 (Swiper core, class A, A-2) / 0 | 0.1065 / 0.0769 (`process.js`, 13 reads per forward scroll) |
| rAF callback median (ms), forward | 0.1 [0.1] | 0.2 [0.2..0.3] |
| `window` scroll listeners alive at end | 1 (`process.js`) | 0 |
| `process.js` rAF requests, forward | 170 | 2 |

**Mobile Portrait 390 × 844, CPU 6x**

| Metric | CURRENT | PRE-B |
|---|---|---|
| Script time forward (s) | 0.3068 [0.2838..0.3333] | 0.2237 [0.2175..0.2261]; ratio 1.372 |
| Script time reverse (s) | 0.2550 [0.2402..0.2835] | 0.1884 [0.1869..0.2168]; ratio 1.353 |
| Task time forward (s) | 1.8682 [1.7518..1.9782] | 1.4377 [1.4182..1.4591] |
| Frames forward | 169 | 169 |
| Frame interval median (ms), forward | 16.7 | 16.7 |
| Frame interval p95 (ms), forward | 17.5 [17.4..19.8] | 17.3 [17.2..17.5]; ratio 1.012 |
| Frame interval p95 (ms), reverse | 17.4 [17.3..17.5] | 17.3 [17.3..17.5]; ratio 1.006 |
| Frame interval max (ms), forward | 26.6 [22.0..29.1] | 20.0 [17.9..21.4] |
| Long tasks, forward / reverse | 0 / 0 | 0 / 0 |
| Layout reads per frame, forward / reverse | 0.0296 (Swiper core, A-2) / 0 | 0.1065 / 0.0769 |
| rAF callback median (ms), forward | 0.5 [0.5] | 1.0 [0.9..1.0] |
| `window` scroll listeners alive at end | 1 (`process.js`) | 0 |
| `process.js` rAF requests, forward | 170 | 2 |

### 5.2 Comparison with the recorded ranges (Priority B section 10)

| Recorded range | Observed (four cells) | Result |
|---|---|---|
| Script time ratio, forward 1.064 to 1.467 | 1.294, 1.201, 1.392, 1.372 | inside |
| Script time ratio, reverse 1.103 to 1.509 | 1.293, 1.381, 1.388, 1.353 | inside |
| Frame interval p95 ratio 0.934 to 1.012 | forward 1.006, 1.000, 1.057, 1.012; reverse 1.006 in all cells | 1.057 outside (A-1) |
| Long tasks 0 | 0 in all runs | inside |
| Layout reads per frame 0 | 0 at Desktop; 0.0296 at Mobile Portrait CURRENT (Swiper core) | outside at one cell (A-2) |
| One `scroll` listener alive at the end | 1 in every CURRENT run (`process.js`, BUG-002) | matches; known item cited |

Scope note: these four cells are the only ones measured. The PRF-03 and PRF-04 columns of the spec are not available.

## 6. Regression tests

### REG-01 — Build inventory and syntax (PASS)

- **Test ID:** REG-01
- **Scope:** `node --check` on `process.js`, `smart-header.js`, `menu-overlay.js`; `npm run build` of CURRENT; `dist/` inventory of CURRENT against PRE-M03-04 by SHA-256.
- **Environment:** section 1.
- **Preconditions:** builds from section 1.
- **Action:** `node --check` ×3; `npm run build` in the repository and in `build-base`; file lists and SHA-256 compared with `diff`/`join`.
- **Expected Result:** syntax checks pass; `npm run build` exit 0; every difference listed and explained by a decision.
- **Actual Result:** `node --check` OK for all three files. `npm run build` exit 0 (repository and scratch build); the repository `dist/` and the `CURRENT` build have identical file lists and SHA-256 values. CURRENT vs PRE-M03-04: three paths added (`servicio-munguia-tecnico-diagnostico-lavadora-cta-480.webp`, `-800.webp`, `-1200.webp`; PM approval for the derivatives, `M03-04-opencode-implementation.md` line 98, PI-08 / O-08 extension, commit `9e34424`); `process.js` and `smart-header.js` added (Priority B and Priority C, PD-31, PD-39, commits `4a8794d` onward); `main.css`, `menu-overlay.js` and `index.html` changed (Priority A to C, commits `542601e` to `ac58265`). CURRENT vs PRE-B: `main.css`, `menu-overlay.js`, `process.js` and `index.html` changed (commits `6f1e252` to `ac58265`). PRE-B vs PRE-C: `main.css` and `process.js` changed (commits `3865a34`, PD-39). Every difference is explained by a commit of the range; no unexplained difference.
- **Status:** PASS.
- **Evidence:** `build-*.log`; `inv-*.txt`; the `git diff --name-only` output for `4d44331..6a86594` (ten `src/` paths).
- **Related Bug ID:** none.

### REG-02 — Stepper states against the predictions (PASS)

- **Test ID:** REG-02
- **Scope:** CURRENT at set P, forward and backward; stops at 0, 10, 25, 50, 75, 90 and 100 % of each stepper extent (portrait: connector; grid: each row; Desktop: list).
- **Environment:** section 1; `reg02.mjs` with `predict.mjs`.
- **Preconditions:** motion allowed; section visible at every stop.
- **Action:** at each stop, scroll instantly, wait 350 ms, read the marker transform and opacity, the fill transforms, the `is-traversed` and `is-current` classes, and compare with the prediction. The prediction uses `listTop = getBoundingClientRect().top + scrollY` and integer `offsetTop`/`offsetLeft`, as `process.js` `measureStepperGeometry` does (Priority B specification sections 5, the stage specifications `PB-01` R3–R8, `PB-02` R3–R8, `PB-03` D2–D4, correction C-1).
- **Expected Result:** traversed set, current step, marker count and opacity equal the prediction at every stop; backward equals forward; largest horizontal and vertical deviation reported beside the recorded values (0.0044 px horizontal at Desktop; 0.016 px vertical at Mobile Portrait).
- **Actual Result:**

| Viewport | Mode | Stops (forward) | Max \|Δx\| px | Max \|Δy\| px | Max fill deviation | Discrete mismatches | Forward = backward |
|---|---|---|---|---|---|---|---|
| 1440 × 900 | Desktop | 7 | 0.0044 | 0.0000 | 0.0000 | 0 | yes |
| 1280 × 800 | Desktop | 7 | 0.0003 | 0.0000 | 0.0000 | 0 | yes |
| 1920 × 1080 | Desktop | 7 | 0.0030 | 0.0000 | 0.0000 | 0 | yes |
| 820 × 1180 | Grid | 14 (two rows) | 0.0005 | 0.0000 | 0.0000 | 0 | yes |
| 844 × 390 | Grid | 14 (two rows) | 0.0005 | 0.0000 | 0.0000 | 0 | yes |
| 390 × 844 | Portrait | 7 | 0.0000 | 0.0001 | 0.0000 | 0 | yes |

  The Desktop horizontal deviation (0.0044 px) equals the recorded value. The Mobile Portrait vertical deviation is 0.0001 px against the recorded 0.016 px: an observation beside the record (A-3). An earlier run of the predictor used integer offsets for the list top and gave boundary mismatches at 0 % and 100 % stops; those were a predictor error (the implementation uses the rect-based list top) and were corrected before the reported run.
- **Status:** PASS.
- **Evidence:** `results-reg02.json`.
- **Related Bug ID:** none.

### REG-03 — Live changes and boundary widths (PASS)

- **Test ID:** REG-03
- **Scope:** CURRENT; one page without reload through 1440 × 900, 991 × 900, 479 × 844, 478 × 844, 390 × 844, 844 × 390, back to 390 × 844 and 1440 × 900, 992 × 900, 991 × 900; reduced motion on and off at 1440 × 900, 390 × 844 and 844 × 390; fresh loads at 478 × 844, 479 × 844, 991 × 900, 992 × 900 and 844 × 390.
- **Environment:** section 1; `reg03-04.mjs`; `instr.mjs` listener instrumentation.
- **Preconditions:** —
- **Action:** after each change, wait 700 ms, record mode, marker count, fill count, `is-current` and `is-traversed` counts, and `process.js` `scroll` listeners alive and added.
- **Expected Result:** values equal the layout of the width (markers 1, fills 4 portrait, 5 grid, 4 Desktop; under reduced motion markers 0); net `process.js` listeners at most one attached.
- **Actual Result:** every step matched the expected layout: `1440 × 900` desktop 1/4; `991 × 900` grid 1/5; `479 × 844` grid 1/5; `478 × 844` portrait 1/4; `390 × 844` portrait 1/4; `844 × 390` grid 1/5; `992 × 900` desktop 1/4; `991 × 900` grid 1/5 again. Reduced motion ON: markers 0 at Desktop, Portrait and Landscape; fills unchanged; `process.js` listeners alive 0. Reduced motion OFF: markers 1; listeners alive 1. The cumulative `added` count increased by 2 per mode change; alive count never exceeded 1. Fresh loads: 478 × 844 portrait 1/4 alive 1; 479 × 844 grid 1/5 alive 1; 991 × 900 grid 1/5 alive 1; 992 × 900 desktop 1/4 alive 1; 844 × 390 grid 1/5 alive 1. No discrete mismatch against the predictor in any motion step.
- **Status:** PASS.
- **Evidence:** `results-reg03-04.json` (`REG03`).
- **Related Bug ID:** none (the listener remaining attached is BUG-002, cited in REG-03 and PRF-02).

### REG-04 — Deep link and reload (PASS)

- **Test ID:** REG-04
- **Scope:** CURRENT, `/#como-trabajamos` and reload at 1440 × 900, 820 × 1180 and 390 × 844; plus a variant (`reg04b.mjs`) where the page is scrolled into the middle of the extent and reloaded (1440 × 900, 820 × 1180, 390 × 844, 844 × 390).
- **Environment:** section 1.
- **Preconditions:** the in-page first-frame recorder is installed before page scripts; it records the first four animation frames.
- **Action:** navigate to the anchor (or reload); record the first frames; wait 2 s; compare with the predictor.
- **Expected Result:** state after 2 s equals the position's state; any wrong state in the first frame recorded with its frame count (Smart Header first frame is known item 4).
- **Actual Result:** the anchor scrolls to 692 px (Desktop and Portrait) and 997 px (Tablet). The anchor lands above the stepper extent at these viewports, so the state is hidden: markers at opacity 0, no traversed step; the predictor agrees (0 discrete mismatches). The first frames show no stepper state other than the hidden marker before the reveal (no traversed or current step). The reload restores the position (692 / 997) with 0 discrete mismatches. Reload variant (the position restored inside the extent): 1440 × 900 target 1150, after reload 1148, traversed steps 1 and 2, marker opacity 1; 820 × 1180 target 1288, after reload 1286, traversed steps 1 and 2; 390 × 844 target 1703, after reload 1702, traversed steps 1 to 3; 844 × 390 target 885, after reload 885, traversed steps 1 and 2. All: 0 discrete mismatches after 2 s.
- **Status:** PASS.
- **Evidence:** `results-reg03-04.json` (`REG04`); `results-reg04b.json`.
- **Related Bug ID:** none.

### REG-05 — No JavaScript (PASS)

- **Test ID:** REG-05
- **Scope:** CURRENT with script execution disabled at set L.
- **Environment:** section 1; `untimed-a.mjs` (DOM query) and `reg05b.mjs` (computed styles through the CDP CSS domain).
- **Preconditions:** `Emulation.setScriptExecutionDisabled` before navigation.
- **Action:** count markers, fills, `is-enhanced`, `is-current`, `is-traversed` and steps; read computed opacity and visibility of the section and of the five steps.
- **Expected Result:** no marker, no fill, no `is-enhanced` class, section and steps fully visible (opacity 1), content present.
- **Actual Result:** at all four viewports: markers 0, fills 0, `is-enhanced` 0, `is-current` 0, `is-traversed` 0, steps 5. Computed opacity: section 1; steps 1, 1, 1, 1, 1. Visibility visible for all steps.
- **Status:** PASS.
- **Evidence:** `results-untimed-a.json` (`REG05`); `results-reg05b.json`.
- **Related Bug ID:** none.

### REG-06 — Initialization error path (PASS)

- **Test ID:** REG-06
- **Scope:** CURRENT at set L; two variants of a script that makes `getBoundingClientRect` throw once, added before the page scripts.
- **Environment:** section 1; `untimed-a.mjs`, `reg11.mjs`.
- **Preconditions:** no source file changed.
- **Action:** variant literal: the first `getBoundingClientRect` call of the page throws. Variant targeted (harness choice): the first call made on an element inside `#como-trabajamos` throws, so the stepper's own initialization path is exercised. Load, wait 1500 ms, read the steps.
- **Expected Result:** the Process section stays fully visible and readable and the page does not stop; the console error is recorded.
- **Actual Result:** literal variant: the first call was made by `smart-header.js` (`measureHeaderBottom`), the exception was recorded in the console, and the page kept running; the process section was not affected, so its steps stay at opacity 0 until scrolled into view (the reveal state below the fold). After scrolling into view at 1440 × 900 the steps are at opacity 1 and the page works. Targeted variant at 1440 × 900, 820 × 1180, 844 × 390 and 390 × 844: steps opacity 1 (five of five at each viewport), section opacity 1, `is-enhanced` removed (the catch path of `process.js` ran), markers 0. The `process.js` catch clause does not log the error, so no console entry exists for the targeted variant (class A, A-4).
- **Status:** PASS.
- **Evidence:** `results-untimed-a.json` (`REG06`); `results-reg11.json` (`literalScrolled`).
- **Related Bug ID:** none.

### REG-07 — Keyboard order and ARIA attributes (PASS)

- **Test ID:** REG-07
- **Scope:** CURRENT and PRE-B; focusable elements inside `#como-trabajamos` at 1440 × 900 and 390 × 844; ARIA attributes inside the section.
- **Environment:** section 1.
- **Preconditions:** —
- **Action:** list focusable elements in DOM order; search for `aria-current`, `aria-selected`, `aria-live`, `aria-valuenow` and `role="progressbar"`; read `aria-hidden` of the markers and fills.
- **Expected Result:** order equal in both builds; marker and fills `aria-hidden="true"`; no progress ARIA created by the stepper.
- **Actual Result:** focusable elements, the same in both builds and both viewports, in order: `Solicitar revisión` (`a`, `#agendar-diagnostico`), `Contactar por WhatsApp` (`a`, external `wa.me` link). CURRENT: 4 fills and 1 marker, each `aria-hidden="true"`; no `aria-current`, `aria-selected`, `aria-live`, `aria-valuenow` or progressbar role. PRE-B: no stepper elements (before Priority B).
- **Status:** PASS.
- **Evidence:** `results-untimed-a.json` (`REG07`).
- **Related Bug ID:** none.

### REG-08 — Unrelated components against the earlier build (PASS)

- **Test ID:** REG-08
- **Scope:** CURRENT and PRE-M03-04 at 1440 × 900, 820 × 1180, 844 × 390 and 390 × 844; complete computed style and rect of: Hero root `#inicio`, Hero wrapper, Hero carousel `#sm-hero-carousel`, Hero heading, Header `#sm-hero-header`, logo `#sm-hero-logo`, Menu trigger `#sm-menu-trigger`, Menu overlay `#sm-menu-overlay`, Bottom Navigation `.sm-bottom-nav`, CTA card `.sm-process-cta`, CTA primary and secondary buttons, CTA image.
- **Environment:** section 1; `reg08-10.mjs`.
- **Preconditions:** hero carousel is compared on its root element only (non-deterministic content).
- **Action:** `getComputedStyle` on each element, all properties, and `getBoundingClientRect`.
- **Expected Result:** equal, except where a decision of M03-04 or of the Priority C specification changed the style on purpose; each difference listed and explained.
- **Actual Result:**
  - Hero root, wrapper, carousel, heading, Header, Menu overlay and Bottom Navigation: 0 differing properties at all four viewports.
  - Header logo `#sm-hero-logo`: five transition properties differ (CURRENT `transition-property: opacity, visibility`, `transition-duration: 0.24s`, `transition-timing-function: linear`; PRE-M03-04 `transition: all`, `ease`). Explained by SH-D20 and SH-D21 (`M03-04-priority-c-smart-header-specification.md`, `M03-04-opencode-implementation.md`, PD-40): the logo fade of Priority C stage 1.
  - Menu trigger `#sm-menu-trigger`: one difference, its position. At 1440 × 900 the top edge moves from 77.8 px to 28.8 px (49 px); at 820 × 1180, 65.4 px to 16.4 px; at 844 × 390, 65.9 px to 16.9 px; at 390 × 844, 65 px to 16 px. Explained by SH-D22 (PD-40): the trigger top edge is aligned with the logo top edge, 49 px higher than the baseline.
  - CTA card, CTA buttons and CTA image: absent in PRE-M03-04. Explained by the M03-04 Priority A implementation (the Process section, `22a4999` onward); there is no baseline element to compare.
- **Status:** PASS.
- **Evidence:** `results-reg08-10.json` (`REG08`).
- **Related Bug ID:** none.

### REG-09 — CTA card shadows and background colours (PASS)

- **Test ID:** REG-09
- **Scope:** CURRENT computed styles at 1920 × 1080, 1024 × 768, 844 × 390, 478 × 844 and 390 × 844.
- **Environment:** section 1; `untimed-a.mjs`.
- **Preconditions:** —
- **Action:** read `box-shadow` and `background-color` of the Trust card (`.sm-process-trust`), the CTA card (`.sm-process-cta`), the Process section (`#como-trabajamos`) and the Trust icon discs (`.sm-process-trust__icon`).
- **Expected Result (D9):** Trust card shadow `0 16px 38px rgba(26,42,211,0.12), 0 3px 10px rgba(15,23,42,0.06)` and CTA shadow `0 18px 42px rgba(17,26,56,0.16), 0 3px 10px rgba(15,23,42,0.06)` at every width. **(D10):** at 478 and 390, Trust card and CTA card `#f2f5ff`, Process section `#ffffff`, Trust discs `#ffffff`; at 1920, 1024 and 844, Trust card `#ffffff` and CTA card `#111a38`.
- **Actual Result:**

| Width | Trust shadow | CTA shadow | Trust card bg | CTA bg | Process bg | Trust disc bg |
|---|---|---|---|---|---|---|
| 1920 | D9 value | D9 value | `#ffffff` | `#111a38` | `#ffffff` | `#f2f5ff` |
| 1024 | D9 value | D9 value | `#ffffff` | `#111a38` | `#ffffff` | `#f2f5ff` |
| 844 | D9 value | D9 value | `#ffffff` | `#111a38` | `#ffffff` | `#f2f5ff` |
| 478 | D9 value | D9 value | `#f2f5ff` | `#f2f5ff` | `#ffffff` | `#ffffff` |
| 390 | D9 value | D9 value | `#f2f5ff` | `#f2f5ff` | `#ffffff` | `#ffffff` |

  All values match D9 and D10. The disc colour at wider widths is not specified by D10 and is recorded as observed. Five trust items in each case.
- **Status:** PASS.
- **Evidence:** `results-untimed-a.json` (`REG09`).
- **Related Bug ID:** none.

### REG-10 — Hero carousel (PASS)

- **Test ID:** REG-10
- **Scope:** CURRENT and PRE-M03-04 at set L (motion allowed) and at 1440 × 900 with reduced motion.
- **Environment:** section 1; `reg08-10.mjs`.
- **Preconditions:** —
- **Action:** count slides and bullets; sample the active slide every 50 ms for 12 s; click pagination bullet 3; click the autoplay toggle; repeat under reduced motion.
- **Expected Result:** behaviour of CURRENT equal to PRE-M03-04; any difference listed and explained or reported as class B.
- **Actual Result:** identical in both builds at all four viewports: 5 slides, 5 pagination bullets, 2 active-slide changes in 12 s (autoplay delay 4 s), clicking the third pagination bullet gives active slide index 3 (0-based) in both builds (the mapping of bullet to index was not investigated; equal in both builds), toggle present with `aria-pressed` set. Under reduced motion at 1440 × 900: 2 changes in 12 s in both builds. Observation: the autoplay continues under `prefers-reduced-motion: reduce` in both builds (no approved document states a reduced-motion rule for the Hero autoplay): recorded as class B in FIND-025.
- **Status:** PASS (behaviour equal; class B item FIND-025).
- **Evidence:** `results-reg08-10.json` (`REG10`).
- **Related Bug ID:** none. FIND-025.

### REG-11 — Console and network (PASS)

- **Test ID:** REG-11
- **Scope:** every session of this task, attributed by build.
- **Environment:** section 1; `reg11.mjs` (sixteen sessions: four builds × four viewports), plus all sessions of the other scripts.
- **Preconditions:** —
- **Action:** collect `Runtime` exceptions, console errors and warnings, failed requests and non-local requests.
- **Expected Result:** no exception, error or warning attributable to `process.js`, `smart-header.js` or `menu-overlay.js` in CURRENT; other messages listed with attribution.
- **Actual Result:** in the sixteen sessions and in all other sessions of the run, the only message is `Failed to load resource: 404` for `/favicon.ico` on every build (CURRENT, PRE-B, PRE-C, PRE-M03-04). The build has no favicon file; the request is made by the browser; it is attributed to the build, not to a script (class A, A-6). No failed request other than that; no non-local request. The only exception of the run comes from the harness-injected error of REG-06 (literal variant), attributed to the harness.
- **Status:** PASS.
- **Evidence:** `results-reg11.json`; the console arrays of the other `results-*.json` files.
- **Related Bug ID:** none.

## 7. Discrepancies

| ID | Class | Test | Document or record and section | Observed | Expected | Action |
|---|---|---|---|---|---|---|
| A-1 | A | PRF-02 | Priority B spec section 10 (recorded p95 ratio 0.934 to 1.012) | Desktop 6x forward p95 ratio 1.057 (CURRENT 18.6 ms, PRE-B 17.6 ms, medians) | inside 0.934 to 1.012 | observation only, no FIND |
| A-2 | A | PRF-02 | Priority B spec section 10 (recorded layout reads per frame 0) | Mobile Portrait CURRENT 0.0296 per frame forward, from the Swiper core script (`swiper-core.min.mjs`), not from `process.js` | 0 | observation only; attributed to the Hero carousel |
| A-3 | A | REG-02 | Priority B spec section 5 (recorded vertical deviation 0.016 px, Mobile Portrait) | 0.0001 px | recorded value as reference | observation only |
| A-4 | A | REG-06 | Priority B R11 and R12 (error path) | `process.js` catch clause does not log the exception; the steps are visible | the spec expects the error to be recorded | observation only; no requirement changed |
| A-5 | A | PRF-02 | Task M03-05-02 record (Codex review pending) and PD-46 ("after task 2 is closed and committed") | Task 2 committed in `31cc91e` with the PM's authorization of task 3; its reviewer record is pending | closure with reviewer record | observation for the Product Manager; execution not affected |
| A-6 | A | REG-11 | — | `favicon.ico` 404 on every build | — | attribution only |
| A-7 | A | PRF-01 | Method consistency of the two runs (record, section 4.1) | Cells measured in a fresh browser per session (completion run) show DCL about 830 to 950 ms; cells measured in one shared browser (first run) show about 80 to 90 ms; not comparable | same method for every cell | observation for the Product Manager; no CURRENT / PRE-M03-04 PRF-01 ratio given; a re-measurement of CURRENT with the completion-run method would be needed for a like-for-like comparison (not run; not authorized) |
| A-8 | A | PRF-06 | — | CURRENT 1440 × 900 LCP 308 and 316 ms in two of five runs (median kept) | — | observation only |
| A-9 | A | PRF-06 | Priority C and Priority B first-party layout-shift rule (PRF-06 expected result) | CURRENT 390 × 844: one layout shift of 0.00025 during the page scroll in three of five runs; source node `null`, not identified | a first-party source listed with its selector | observation only; the source could not be identified with the harness data; no FIND (not a verified defect; value far below any approved threshold) |
| B-1 | B | REG-10 | No approved document of Phase 03 states a reduced-motion rule for the Hero autoplay | Autoplay keeps running under `prefers-reduced-motion: reduce` in CURRENT and PRE-M03-04 (identical) | PM decision | FIND-025 |

Known items (spec section 0), cited and not re-opened: BUG-002 (stepper `scroll` listener remains attached; cited in PRF-02, REG-03); FIND-019 and PD-41 (Menu overlay links without target; not re-tested); SH-D28 to SH-D30 (not re-tested); PD-36 (Mobile Portrait CPU 6x ratio; not investigated; measured and reported in section 5.1).

## 8. Defects and tracking entries

- **BUG entries created:** none. No test is FAIL.
- **FIND entries created:** FIND-025 (class B, REG-10, `docs/tracking/FINDINGS.md`, status ACTION_REQUIRED).
- **Existing entries:** no existing BUG or FIND entry was edited.
- **BUG-002:** cited as a known item; no new entry.

## 9. Tests not run and blocked

| Test | Status | Blocker |
|---|---|---|
| PRF-03 | NOT RUN | Product Manager decision 2026-11-10: repeats M03-04 measurements (PB-04, PB-05, PC-03) and is covered by REG-03 |
| PRF-04 | NOT RUN | Product Manager decision 2026-11-10 (same reason) |

PRF-01 and PRF-06 were completed in the second part of the reduced scope (PM instruction 2026-11-11) and are no longer blocked or not run. The first-part BLOCKED status of PRF-06 (free memory below 2 GB before session 14) is resolved by the completion run.
| PRF-02 cells not in scope | not measured | Tablet, Mobile Landscape and CPU 4x not in the reduced scope |

## 10. Limits and statements

- Headless Chrome only; no real device; CPU throttling is an emulation of Chrome and not a slower machine; the local server does not show the behaviour of Cloudflare, its compression or its cache headers; times depend on the machine and on its load. The first timed run had 1-second load values up to 74 %, and some `chrome.exe` counts were not recorded.
- No file under `src/` was changed by this task. `git status` after the work shows only the allowed repository files (section 11 of the report).
- No commit, push or deploy was performed. No secret value was printed or recorded.
- The Reviewer (Codex) has not run. The review of section 8 of the spec is pending.
- Viewports are observations, not project standards. No pass threshold was invented; no verdict on PRF-02 is given beyond the recorded ranges.

## 11. Line endings

This record is written with LF line endings.
