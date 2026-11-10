# M03-05-01 — Build, SEO, Security and contact links

## 1. Identification

| Field | Value |
|---|---|
| Task | M03-05-01 (task 1 of 3 of M03-05: Build, SEO, Security, contact links) |
| Spec and contract | `.coordination/tasks/M03-05-01/spec.md` (SHA-256 `9555cd7c9c8581d8c3a2e0ef912122fa211c4f534f7e5eb5772632efbc02747d`), `.coordination/tasks/M03-05-01/contract-r1.md` (SHA-256 `e90ca7ba33a227980a88a3c8d6bfa1294c67c48596d3dc60a6aac2adf8a63e76`), approval `.coordination/approvals/M03-05-01/approval.md` |
| Baseline commit | `c040cbb2a5a08029cb973a76deea9bafb6f0fb3b` (HEAD of `main`, equal to `origin/main` at start) |
| Commit range under test | `4d44331..c040cbb` for `src/`: nine commits, oldest first: `9e34424`, `4a8794d`, `22a4999`, `542601e`, `6f1e252`, `3436414`, `f0743d5`, `3865a34`, `ac58265`. Commits after `ac58265` change only documentation. |
| Date | 2026-11-09 |
| Executor | Claude Code |
| Reviewer | Codex (not run in this record) |
| Operating system | Microsoft Windows 11 Pro 10.0.26300 |
| Node.js | v24.19.0 |
| npm | 11.17.0 |
| Eleventy | 3.1.6 |
| Chrome | Google Chrome 157.0.8103.38, `--headless=new`, one `--user-data-dir` per session under the scratchpad |
| Scrollbar condition | `--hide-scrollbars`; measured `innerWidth − documentElement.clientWidth = 0` in every browser session (BLD, SEO-06, SEC-03 sessions). Device pixel ratio 1. |
| Viewports of the browser sessions | Desktop 1440 × 900 and Mobile Portrait 390 × 844 (observations, not project standards) |
| Local server | Node static server on `127.0.0.1` serving the scratch build `out-a` (the build of `c040cbb`) only. It does not show the behavior of Cloudflare. |
| Raw data | `C:\Users\July\AppData\Local\Temp\claude\5b10d4d364210f5c\05031bf4-aa84-441b-bb65-0d6953ab3af6\scratchpad\m0501\` (outside the repository, not committed) |

Blob IDs of the files under test (`git hash-object`), checked before the work: all 22 files of `spec.md` section 0 matched their stated blob IDs. `git status --short` was empty before the work.

## 2. Summary

| Test ID | Status | Note |
|---|---|---|
| BLD-01 | PASS | Node 24.19.0, Eleventy 3.1.6 |
| BLD-02 | PASS | `npm run build` and `npx eleventy` exit 0, no warning or error |
| BLD-03 | PASS | three builds, 40 files each, identical SHA-256 |
| BLD-04 | PASS | all 39 `src/assets` files identical in the output; one tracked pre-existing file published (FIND-021) |
| BLD-05 | PASS | 31 references resolved, exact case |
| BLD-06 | PASS | HTTP 200 for every resolved URL; local server only |
| BLD-07 | PASS | `assets.directory` = `./dist`; Eleventy output `dist` |
| BLD-08 | PASS | no change to `package.json` or `package-lock.json`; no tracked `node_modules` or `dist` |
| BLD-09 | PASS | nine commits; every changed path covered by an allow-list entry |
| SEO-01 | PASS | `<html lang="es-MX">` equals the front matter |
| SEO-02 | PASS | one title, equal to the front matter (value recorded, not judged) |
| SEO-03 | PASS | one description, equal to the front matter, 61 characters (not judged) |
| SEO-04 | PASS | one `h1`; outline recorded; no skipped level |
| SEO-05 | PASS | one `<main>`; landmarks recorded as observations |
| SEO-06 | PASS | no SEO-critical text added only by JavaScript; carousel labels recorded (interaction chrome) |
| SEO-07 | FAIL (known, PD-41) | five `#id` targets missing; known and decided, backlog (FIND-019) |
| SEO-08 | PASS | every `<img>` has `alt`, `width` and `height` |
| SEO-09 | PASS | no approved-but-absent directive is required; none of the not-approved directives exists |
| SEC-01 | PASS | no secret value found; policy names and documented placeholders only (file and line recorded, values masked) |
| SEC-02 | FAIL | `CLOUDFLARE_API_TOKEN` is non-empty in the agent environment (name suggests a deploy-capable credential); not tested (BUG-001) |
| SEC-03 | PASS | every request same-origin; absolute URLs classified; no third-party resource loaded |
| SEC-04 | PASS | no `eval`, `new Function` or `document.write`; `import()` only with fixed paths; vendor `swiper` 14.1.0 listed |
| SEC-05 | PASS | no `javascript:` URL, no inline event handler, no inline script; the only `target="_blank"` link has `noopener` |
| SEC-06 | PASS | no `fetch`, XHR, WebSocket, beacon or storage use in first-party JavaScript; storage and cookies empty in both sessions |
| SEC-07 | PASS (command ran) | full audit: 7 high, all in dev-only packages; production audit: 0 (FIND-022) |
| INT-01 | PASS | number and address equal to the frozen reference; WhatsApp message text not stated by any reference (observation) |

Counts: 26 tests. PASS 24 (SEC-07 counted as PASS: the command ran and its output is recorded), FAIL 2 (SEO-07 known, PD-41; SEC-02), BLOCKED 0, NOT RUN 0.

CLARIFYING ANNOTATION (2026-11-09): the SEC-02 FAIL stays as recorded for this execution, but its cause was the test criterion, not the environment. `CLOUDFLARE_API_TOKEN` holds the G-04 sentinel (BUG-001, CLOSED as a false positive) and `CLAUDE_CODE_MESSAGING_TOKEN` is set by Claude Code itself (FIND-020, CLOSED). FIND-021 was closed as accepted (commit `df5649f`).

## 3. Build

### BLD-01 Runtime versions

- **Test ID:** BLD-01
- **Scope:** Node.js, npm and Eleventy versions.
- **Environment:** the workspace of `c040cbb`.
- **Preconditions:** none.
- **Action:** `node --version`, `npm --version`, `npx eleventy --version`.
- **Expected Result:** Node major 24 (ADR-006, Node.js 24.x LTS, 24.19.0 as reference); Eleventy exactly 3.1.6 (ADR-006).
- **Actual Result:** Node `v24.19.0`; npm `11.17.0`; Eleventy `3.1.6`. The npm version is not fixed by a document; recorded as an observation.
- **Status:** PASS
- **Evidence:** the three command outputs above.
- **Related Bug ID:** none

### BLD-02 Build runs clean

- **Test ID:** BLD-02
- **Scope:** `npm run build` (repository `dist/`) and `npx eleventy --output=<scratch>/out-a`.
- **Environment:** repository; scratchpad `m0501\out-a`.
- **Preconditions:** BLD-01 passed.
- **Action:** `npm run build`; `npx eleventy --output=…\out-a`; searched the output of both for `error` and `warn`.
- **Expected Result:** both exit 0; no line reporting an error or a warning.
- **Actual Result:** `npm run build` exit 0: `[11ty] Writing ./dist/index.html from ./src/index.njk`, `[11ty] Copied 39 Wrote 1 file in 0.35 seconds (v3.1.6)`. The scratch build exit 0: `Copied 39 Wrote 1 file in 0.26 seconds`. No line matched `error` or `warn`.
- **Status:** PASS
- **Evidence:** `m0501\build-npm.txt`, `m0501\build-a.txt`, `m0501\build-b.txt`.
- **Related Bug ID:** none

### BLD-03 Reproducible output

- **Test ID:** BLD-03
- **Scope:** three builds (`dist/`, `out-a`, `out-b`).
- **Environment:** clean scratch directories.
- **Preconditions:** BLD-02 passed.
- **Action:** built `out-a` and `out-b` into clean directories; listed every file with `sha256sum`; compared the three lists.
- **Expected Result:** identical file sets and identical SHA-256 for every file.
- **Actual Result:** 40 files in each of the three outputs; `diff` of the lists: no difference (`a==b identical`, `a==dist identical`).
- **Status:** PASS
- **Evidence:** `m0501\h-a.txt`, `m0501\h-b.txt`, `m0501\h-dist.txt`.
- **Related Bug ID:** none

### BLD-04 Output inventory

- **Test ID:** BLD-04
- **Scope:** the file list of `out-a` and the passthrough of `src/assets`.
- **Environment:** `out-a`.
- **Preconditions:** BLD-03 passed.
- **Action:** listed the output; compared every `src/assets` file with its output copy with `cmp`; searched for `.njk` files and `_includes` directories.
- **Expected Result:** `index.html` and an `assets/` tree; every `src/assets` file present with equal content; no `.njk` file and no `_includes` directory. Other files listed.
- **Actual Result:** `index.html` and `assets/` present; 39 of 39 `src/assets` files identical in the output; 0 `.njk` files; 0 `_includes` directories; no output file outside `src/assets` and `index.html`. The tracked file `src/assets/pipeline-proof.txt` (added in commit `696aac3`, before the range) is published as `assets/pipeline-proof.txt`; no page references it. Recorded as FIND-021.
- **Status:** PASS
- **Evidence:** `m0501\out-list.txt`, `m0501\src-assets-list.txt`; `git log --oneline --follow -- src/assets/pipeline-proof.txt` (`696aac3`).
- **Related Bug ID:** none (FIND-021)

### BLD-05 Reference integrity

- **Test ID:** BLD-05
- **Scope:** root-relative URLs of `index.html` (`href`, `src`, `srcset`, `poster`), `url(...)` of `main.css`, and `/assets/` strings and `import` specifiers of the first-party and vendor JavaScript.
- **Environment:** `out-a`; `git ls-files src/assets` for exact-case names.
- **Preconditions:** BLD-04 passed.
- **Action:** extracted every reference with a Node script; checked existence in `out-a`; checked the exact case against `git ls-files`.
- **Expected Result:** every reference resolves with exact case; unresolved references recorded; a `/favicon.ico` request recorded as observation.
- **Actual Result:** 31 references (html and css: 26; vendor and first-party JavaScript: 5); 0 unresolved; 0 case mismatches. No favicon is declared; the browser sessions request `/favicon.ico` and receive 404 (observation, no favicon requirement is approved).
- **Status:** PASS
- **Evidence:** `m0501\bld05.mjs` output (in the scratchpad).
- **Related Bug ID:** none

### BLD-06 Local serving

- **Test ID:** BLD-06
- **Scope:** HTTP status and `Content-Type` of `/` and of every reference of BLD-05.
- **Environment:** a local Node static server on `127.0.0.1:8950` serving `out-a`. This does not prove the behavior of Cloudflare.
- **Preconditions:** BLD-05 passed.
- **Action:** requested each URL; recorded the status and the `Content-Type` per extension.
- **Expected Result:** HTTP 200 for each; `.js` and `.mjs` served as JavaScript.
- **Actual Result:** all 32 requests HTTP 200. `Content-Type`: `.html` `text/html; charset=utf-8`; `.css` `text/css`; `.js` and `.mjs` `text/javascript`; `.webp` `image/webp`; `.woff2` `font/woff2`; `.svg` `image/svg+xml`.
- **Status:** PASS
- **Evidence:** `m0501\bld05.mjs` output.
- **Related Bug ID:** none

### BLD-07 Deployment configuration consistency (read only)

- **Test ID:** BLD-07
- **Scope:** `wrangler.jsonc` and `eleventy.config.js`. No deploy command was run.
- **Environment:** repository (read only).
- **Preconditions:** none.
- **Action:** read the two files.
- **Expected Result:** `assets.directory` points to the Eleventy output directory.
- **Actual Result:** `wrangler.jsonc`: `"compatibility_date": "2026-08-12"`, `"assets": { "directory": "./dist" }`, `routes` with `custom_domain: true`. `eleventy.config.js`: passthrough copy with `dir.output = "dist"`. Consistent.
- **Status:** PASS
- **Evidence:** `wrangler.jsonc` lines 4–11; `eleventy.config.js` lines 2–9.
- **Related Bug ID:** none

### BLD-08 No new dependency

- **Test ID:** BLD-08
- **Scope:** `package.json`, `package-lock.json`, tracked `node_modules` and `dist`.
- **Environment:** repository.
- **Preconditions:** none.
- **Action:** `git diff 4d44331 c040cbb -- package.json package-lock.json`; `git ls-files -- node_modules dist`.
- **Expected Result:** both empty.
- **Actual Result:** diff: 0 lines; tracked `node_modules` or `dist` paths: 0.
- **Status:** PASS
- **Evidence:** command outputs above.
- **Related Bug ID:** none

### BLD-09 Scope of the source changes

- **Test ID:** BLD-09
- **Scope:** the commits and the paths under `src/` in the range `4d44331..c040cbb`, against the allow-lists of M03-04 and Priority C.
- **Environment:** repository.
- **Preconditions:** none.
- **Action:** `git log --oneline 4d44331..c040cbb -- src`; `git diff --name-status 4d44331 c040cbb -- src`; read the allow-lists: the planning allow-list of `docs/phases/phase-03/M03-04-opencode-implementation.md` (lines 38–52), the Priority B allow-list (section 12 of the Priority B specification as authorized by PD-31) and section 15 of `docs/phases/phase-03/M03-04-priority-c-smart-header-specification.md`.
- **Expected Result:** the commit list equals the nine commits of section 1; every changed path is covered by an allow-list entry; ambiguities reported as class B.
- **Actual Result:** commit list: the nine commits, oldest first, as in section 1. Changed paths (10 entries): `src/_includes/base.njk` (M), `src/_includes/components/process.njk` (A), `src/assets/css/main.css` (M), three `src/assets/images/servicio-munguia-tecnico-diagnostico-lavadora-cta-{480,800,1200}.webp` (A), `src/assets/js/menu-overlay.js` (M), `src/assets/js/process.js` (A), `src/assets/js/smart-header.js` (A), `src/index.njk` (M).
  - `process.njk`, the three CTA derivatives, `process.js`, `src/index.njk`: Priority B / Priority A planning allow-list (M03-04 lines 38–52 and the CTA image entries of line 62 and 98).
  - `main.css`: the process block of the planning allow-list, and the Smart Header block of Priority C section 15. Checked: no line added that selects the Bottom Navigation (`sm-mobile-nav`, `sm-bottom-nav`: 0 added lines).
  - `base.njk`: the planning allow-list (one `type="module"` reference to `process.js`) and Priority C section 15 (the `smart-header.js` include). The diff since `4d44331` adds exactly two script lines, one per module.
  - `menu-overlay.js`, `smart-header.js`: Priority C section 15 (only SH-D16, SH-D18 and the hand-off).
  - No path is covered by no allow-list. The file `src/assets/pipeline-proof.txt` is not in the range (added in `696aac3`, before `4d44331`); it is outside every allow-list and is published (FIND-021, class B).
- **Status:** PASS
- **Evidence:** the two git commands above; `git show --stat 542601e` for the Priority A commit.
- **Related Bug ID:** none (FIND-021 for the pre-existing published file)

## 4. SEO (static HTML, read as text; the browser test is SEO-06)

Method: the built `out-a/index.html` read as text with regular expressions; no JavaScript executed. Source: `src/index.njk` front matter.

### SEO-01 Language

- **Test ID:** SEO-01
- **Scope:** `<html lang>`.
- **Environment:** `out-a/index.html`.
- **Preconditions:** BLD-02 passed.
- **Action:** read the `lang` attribute; compared with the front matter `lang: es-MX`.
- **Expected Result:** `lang="es-MX"`, equal to the front matter (`docs/phases/phase-01/M01-05-seo-html-baseline.md`, corrected baseline).
- **Actual Result:** `<html lang="es-MX">`. Equal to the front matter.
- **Status:** PASS
- **Evidence:** the first line of `out-a/index.html`; `src/index.njk` line 3.
- **Related Bug ID:** none

### SEO-02 Title

- **Test ID:** SEO-02
- **Scope:** `<title>`.
- **Environment:** `out-a/index.html`.
- **Preconditions:** SEO-01 passed.
- **Action:** counted the `<title>` elements; compared the text with the front matter `title`.
- **Expected Result:** exactly one non-empty title equal to the front matter.
- **Actual Result:** one title: `SERVICIO MUNGUÍA`; equal to the front matter `title: SERVICIO MUNGUÍA`. The value is not judged (the final production title is not approved).
- **Status:** PASS
- **Evidence:** `out-a/index.html` line 6; `src/index.njk` line 4.
- **Related Bug ID:** none

### SEO-03 Meta description

- **Test ID:** SEO-03
- **Scope:** `<meta name="description">`.
- **Environment:** `out-a/index.html`.
- **Preconditions:** SEO-01 passed.
- **Action:** counted the description meta elements; compared the content with the front matter `description`; counted characters.
- **Expected Result:** one non-empty description equal to the front matter.
- **Actual Result:** one description: `Servicio técnico de reparación de lavadoras y refrigeradores.` (61 characters). Equal to the front matter. The value is not judged.
- **Status:** PASS
- **Evidence:** `out-a/index.html` line 7; `src/index.njk` line 5.
- **Related Bug ID:** none

### SEO-04 Heading structure

- **Test ID:** SEO-04
- **Scope:** `h1` to `h6` in document order.
- **Environment:** `out-a/index.html`.
- **Preconditions:** SEO-01 passed.
- **Action:** listed the heading levels in order; counted `h1`; checked for skipped levels.
- **Expected Result:** at least one `h1`; headings present in the static HTML; observations for count and skips.
- **Actual Result:** 10 headings, levels `1,2,3,4,4,4,4,4,3,3`; one `h1`; no skipped level (a skip is a level more than one above the previous heading).
- **Status:** PASS
- **Evidence:** the regular-expression count on `out-a/index.html`.
- **Related Bug ID:** none

### SEO-05 Landmarks and viewport

- **Test ID:** SEO-05
- **Scope:** `<main>`, `<nav>`, `<header>`, `<footer>`, `<section>` with their labels, charset and viewport meta.
- **Environment:** `out-a/index.html`.
- **Preconditions:** SEO-01 passed.
- **Action:** counted the landmarks; read the labels of the sections; read the charset and viewport meta.
- **Expected Result:** exactly one `<main>`; the rest observations.
- **Actual Result:** `<main>` 1; `<nav>` 3; `<header>` 1; `<footer>` 0; `<section>` 2, of which one has `aria-labelledby="sm-process-title"` and the other has no label (observation). Charset `utf-8`; viewport `width=device-width, initial-scale=1`.
- **Status:** PASS
- **Evidence:** `out-a/index.html` (head lines 3–6).
- **Related Bug ID:** none

### SEO-06 Content does not depend on JavaScript

- **Test ID:** SEO-06
- **Scope:** the rendered DOM of the served output in headless Chrome, with JavaScript enabled, at Desktop and Mobile Portrait (section 2 of the spec).
- **Environment:** Chrome 157 headless, `--hide-scrollbars`, DPR 1, local server; sessions `Desktop` and `MobilePortrait`.
- **Preconditions:** BLD-06 passed.
- **Action:** loaded `/`; waited for the load event and 1.2 s; scrolled to the bottom and back to the top; opened and closed the Menu with real mouse and Escape; collected the text nodes of `document.body` (excluding `script`, `style`, `noscript`) and the `alt` and `aria-label` values; compared with the static source (text nodes between tags, with `script` and `style` removed).
- **Expected Result:** every visible text string and every `alt` and `aria-label` string of the rendered DOM exists in the static source. A SEO-critical string added only by JavaScript is a FAIL.
- **Actual Result:** Desktop: 57 rendered text nodes, 54 static strings; **0** visible texts absent from the static source. Mobile Portrait: the same counts. JavaScript-only `aria-label` values, in both sessions: `1 / 5` to `5 / 5` (on the five `ARTICLE` slides) and `Go to slide 1` to `Go to slide 5` (on the five `SPAN` pagination bullets). Added by the carousel (`hero-carousel.js` through Swiper 14.1.0): interaction chrome (carousel pagination and slide labels), not SEO-critical content.
- **Status:** PASS
- **Evidence:** `m0501\browser-out.json` (`jsOnlyTexts`, `jsOnlyAttrs`); `m0501\browser-console.txt`.
- **Related Bug ID:** none

### SEO-07 Internal links and anchors

- **Test ID:** SEO-07
- **Scope:** `href` values of the static source; `#id` links and their targets; duplicated `id`.
- **Environment:** `out-a/index.html`.
- **Preconditions:** SEO-01 passed.
- **Action:** grouped the 20 `href` values by scheme (`#fragment` 10, `https` 4, `tel` 2, `mailto` 1, root-relative 3); listed the `id` attributes (9) and checked for duplicates (none); checked each `#id` target.
- **Expected Result:** each `#id` link has a target; no duplicated `id`.
- **Actual Result:** the seven distinct `#id` targets: present `inicio`, `como-trabajamos`; **missing 5**: `servicios`, `cobertura`, `marcas`, `contacto` (Menu overlay) and `servicios`, `cobertura`, `agendar-diagnostico` (Bottom Navigation; `agendar-diagnostico` also in the process call to action). No duplicate `id`. The five missing targets are the set recorded as finding D-1 of PD-41 (`docs/phases/phase-03/M03-04-opencode-implementation.md`, line 215), which keeps them as a backlog item. This is known, PD-41, and is not a new defect.
- **Status:** FAIL (known, PD-41)
- **Evidence:** `out-a/index.html`; PD-41 line 215.
- **Related Bug ID:** none; recorded as FIND-019 (known, not duplicated as a bug)

### SEO-08 Images

- **Test ID:** SEO-08
- **Scope:** every `<img>`.
- **Environment:** `out-a/index.html`.
- **Preconditions:** SEO-01 passed.
- **Action:** read the attributes of the 7 `<img>` elements.
- **Expected Result:** every `<img>` has `alt`; observations for empty `alt` and missing `width` or `height`.
- **Actual Result:** 7 of 7 with `alt`; 0 empty `alt`; 7 of 7 with `width` and `height`; 1 with `loading`; 1 with `srcset`.
- **Status:** PASS
- **Evidence:** `out-a/index.html` `<img>` elements.
- **Related Bug ID:** none

### SEO-09 Directives that are not approved

- **Test ID:** SEO-09
- **Scope:** canonical, robots meta, robots.txt, sitemap, JSON-LD, Open Graph, Twitter, hreflang.
- **Environment:** `out-a` (all files).
- **Preconditions:** SEO-01 passed.
- **Action:** searched the static HTML; listed the output files (no `robots.txt` or `sitemap.xml` in the output).
- **Expected Result:** none is required to exist; if one exists, class B.
- **Actual Result:** canonical absent; robots meta absent; `robots.txt` absent; `sitemap.xml` absent; `application/ld+json` absent; `og:` absent; `twitter:` absent; `hreflang` absent. Absence is an observation.
- **Status:** PASS
- **Evidence:** the search on `out-a/index.html`; the output file list.
- **Related Bug ID:** none

## 5. Security

### SEC-01 Secrets are not in Git or in the output

- **Test ID:** SEC-01
- **Scope:** (a) the content of every tracked text file, the scratch output and the patch text of `git log -p 4d44331..c040cbb`; (b) the ignore status of `.env`, `.env.local`, `.dev.vars`, `secrets/x`, `credentials/x`, `.wrangler/x`.
- **Environment:** repository; `git ls-files`; `out-a`; the patch text (605,808 bytes).
- **Preconditions:** none.
- **Action:** a Node scan for private-key blocks, `policy-name` strings from `docs/SECRETS-POLICY.md`, keyword followed by a long value (20 or more characters), AWS-style and GitHub-style token shapes. Every hit is recorded by file and line with the value masked to its first two characters and its length. Then `git check-ignore -v` and `git ls-files` for the listed paths.
- **Expected Result:** no sensitive value; each hit classified as policy text, placeholder or value.
- **Actual Result:** 105 tracked text files, 22 output files, the patch. Hits: 14, all of the kind `policy-name` (no private key, no long keyword value, no token shape):
  - `docs/SECRETS-POLICY.md` line 26 (`ZEPTOMAIL_API_KEY`) and line 27 (`TURNSTILE_SECRET_KEY`): policy text (names).
  - `docs/governance/GOV-01-G04-DESIGN-DRAFT.md` lines 46 and 107, and `docs/governance/GOV-01-ai-workflow-governance.md` lines 174 and 178: `CLOUDFLARE_API_TOKEN`-named text and one value of length 40 that the document labels as "a non-credential sentinel": policy text and a labelled placeholder, classified as a documented placeholder (value not recorded).
  - The same lines in the patch text (8 hits): the same two governance commits.
  - Output files: 0 hits.
  The paths `.env`, `.env.local`, `.dev.vars`, `secrets/x`, `credentials/x`, `.wrangler/x` are ignored by `.gitignore` lines 1, 2, 5, 18, 19 and 10; `git ls-files` lists none of them (0 matches).
- **Status:** PASS
- **Evidence:** `m0501\sec01.mjs` output (masked); `git check-ignore -v` output above.
- **Related Bug ID:** none

### SEC-02 Agent environment (G-04)

- **Test ID:** SEC-02
- **Scope:** names and non-empty status of the environment variables of the Claude Code process whose name matches `TOKEN|SECRET|KEY|PASSWORD|CREDENTIAL|CLOUDFLARE|WRANGLER|GITHUB|GH_|GIT_ASKPASS|SSH`. Values are never printed.
- **Environment:** the agent process.
- **Preconditions:** none.
- **Action:** a Node script listed the names and whether each value is non-empty; for two names it checked yes/no properties only.
- **Expected Result:** no push-capable Git credential and no deploy-capable Cloudflare credential in the agent environment (`AGENTS.md` G-04; `docs/SECRETS-POLICY.md`). Isolation variables set by G-04 recorded as such. A name that suggests a live credential is reported as a discrepancy without testing it.
- **Actual Result:** 5 names matched; 4 non-empty:
  - `CLOUDFLARE_API_TOKEN`: **non-empty**. The name suggests a deploy-capable Cloudflare credential, which G-04 forbids in the agent environment. Not tested (no call to Cloudflare, no deploy command). **FAIL (BUG-001).**
  - `CLAUDE_CODE_MESSAGING_TOKEN`: **non-empty**. The name suggests a live credential; its purpose is not documented in the repository. Reported as a discrepancy (FIND-020); not tested.
  - `GIT_ASKPASS`: non-empty. An isolation variable set by G-04; recorded as such.
  - `SSH_ASKPASS`: non-empty. Not in the G-04 list; the value is a program path, not a credential (checked for `askpass` or `helper` in the path only); recorded.
  - `GIT_CONFIG_KEY_0`: set, and it names a credential-helper setting (`credential.helper`); `GIT_CONFIG_VALUE_0` is not set, so the helper is reset to empty. Recorded; no credential value present.
  - `WRANGLER_HOME`: not set (an isolation variable of G-04 that is absent).
  The `git config` keys with `credential` in their name, from the command line and the system Git configuration: `credential.helper` (command line) and `credential.helper` and a host-scoped key (system file). Names only.
- **Status:** FAIL
- **Evidence:** the name list and the yes/no properties above (no value printed).
- **Related Bug ID:** BUG-001 (`CLOUDFLARE_API_TOKEN`); FIND-020 (`CLAUDE_CODE_MESSAGING_TOKEN`)

### SEC-03 Network requests at runtime

- **Test ID:** SEC-03
- **Scope:** every request of the page in the two sessions (load, scroll to the bottom and back, Menu open and close), and every absolute `http://` or `https://` URL of the output.
- **Environment:** Chrome 157 headless, `--hide-scrollbars`, local server; sessions `Desktop` and `MobilePortrait`.
- **Preconditions:** SEO-06 passed.
- **Action:** `Network.requestWillBeSent` and `Network.responseReceived` recorded per session; the absolute URLs of the output grep-listed and classified.
- **Expected Result:** every loaded resource is same-origin with the local server; no third-party script, style, font or image.
- **Actual Result:** 36 requests per session; **0 non-same-origin**; statuses 200 (35) and 404 (the `/favicon.ico` request, observation). Types: Document 1, Stylesheet 3, Image 8 (the logo, five hero images and the CTA derivative of the viewport: 800 px at Desktop, 480 px at Mobile Portrait), Script 16, Font 7, Other 1 (favicon). The same counts in both sessions.
  Absolute URLs in the output and their classes: `https://wa.me/525647957364` and the WhatsApp text URL (3 in the HTML) — links the user can follow; `mailto:` and `tel:` are not absolute `https` URLs; `https://swiperjs.com` (2) — the licence banner comment of the vendor `swiper.min.css` and `swiper.min.mjs`; `http://www.w3.org/2000/svg` and `http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd` — XML namespace identifiers in `aspa.svg`. None is a loaded third-party resource.
- **Status:** PASS
- **Evidence:** `m0501\browser-out.json` (`requests`, `origins`); the grep output of section 5.
- **Related Bug ID:** none

### SEC-04 Dangerous sinks in first-party JavaScript

- **Test ID:** SEC-04
- **Scope:** `src/assets/js/*.js` (not `vendor/`).
- **Environment:** repository.
- **Preconditions:** none.
- **Action:** `grep` for `eval`, `new Function`, `document.write`, `innerHTML`, `outerHTML`, `insertAdjacentHTML`, `setTimeout`, `setInterval`, `postMessage`, `import(`, and `location` assignments.
- **Expected Result:** no `eval`, `new Function` or `document.write`; each other hit listed with its origin.
- **Actual Result:** no hit for `eval`, `new Function`, `document.write`, `innerHTML`, `outerHTML`, `insertAdjacentHTML`, `setTimeout`, `setInterval`, `postMessage` or `location` assignment. `import(` in `src/assets/js/hero-carousel.js` lines 12–16: five dynamic imports of fixed `/assets/js/vendor/swiper/…` paths (static string arguments; no user input). Vendor library: `swiper` 14.1.0 (`package.json` line 31); the vendor code was not audited.
- **Status:** PASS
- **Evidence:** the grep output above.
- **Related Bug ID:** none

### SEC-05 Markup hygiene

- **Test ID:** SEC-05
- **Scope:** `src/_includes` and `src/index.njk`: inline event handlers, `javascript:` URLs, inline `<script>`, `<form>`, `<input>`, `<iframe>`, `<object>`, `<embed>`, every `target="_blank"` link and its `rel`.
- **Environment:** repository.
- **Preconditions:** none.
- **Action:** `grep` for the patterns; listed the `target="_blank"` links with their `rel`.
- **Expected Result:** no `javascript:` URL, no inline event handler; every `target="_blank"` link has `noopener`.
- **Actual Result:** no inline event handler, no `javascript:` URL, no inline `<script>`, no `<form>`, `<input>`, `<iframe>`, `<object>` or `<embed>`. One `target="_blank"` link: `src/_includes/components/process.njk` line 168, `rel="noopener noreferrer"`.
- **Status:** PASS
- **Evidence:** the grep output.
- **Related Bug ID:** none

### SEC-06 Input and API surface is absent

- **Test ID:** SEC-06
- **Scope:** use of `fetch`, `XMLHttpRequest`, `WebSocket`, `sendBeacon`, `localStorage`, `sessionStorage`, `document.cookie` in first-party JavaScript; cookies and storage at the end of the two runtime sessions.
- **Environment:** repository; the two browser sessions.
- **Preconditions:** SEC-03 passed.
- **Action:** `grep` on `src/assets/js/*.js`; read `localStorage.length`, `sessionStorage.length` and `Network.getAllCookies` at the end of each session.
- **Expected Result:** none used; cookie and storage lists empty.
- **Actual Result:** no hit in first-party JavaScript. Desktop: localStorage 0, sessionStorage 0, cookies none. Mobile Portrait: the same.
- **Status:** PASS
- **Evidence:** the grep output; `m0501\browser-out.json` (`storage`, `cookies`).
- **Related Bug ID:** none

### SEC-07 Dependency advisories

- **Test ID:** SEC-07
- **Scope:** `npm audit` (full) and `npm audit --omit=dev`.
- **Environment:** npm registry (reachable). No `npm audit fix`, no installation.
- **Preconditions:** none.
- **Action:** `npm audit --json` and `npm audit --omit=dev --json`; counts by severity and affected packages recorded; `git status --short` checked afterwards.
- **Expected Result:** the command runs and its output is recorded; no threshold applied.
- **Actual Result:** full audit: 7 high, 0 critical, 0 moderate, 0 low, 0 info; affected packages `wrangler`, `miniflare`, `sharp`, `undici`, `js-yaml`, `markdown-it`, `brace-expansion` (development dependencies, not in the static output). Production audit (`--omit=dev`): 0 vulnerabilities. Repository unchanged (`git status --short` empty).
- **Status:** PASS (the command ran and its output is recorded; no advisory was judged against a threshold)
- **Evidence:** `m0501\audit-full.json`, `m0501\audit-prod.json`.
- **Related Bug ID:** none; recorded as FIND-022

## 6. Contact links

### INT-01 WhatsApp, phone and email links

- **Test ID:** INT-01
- **Scope:** every `https://wa.me/…`, `tel:` and `mailto:` link of the static source and of the output, with the template that contains it.
- **Environment:** repository; `out-a`.
- **Preconditions:** SEO-01 passed.
- **Action:** `grep` on the source templates and the output; decoded the `text` query; compared the number and the address with `docs/reference-extraction/MENU-EXTRACTION.md` (lines 25, 148–156, 177) and `docs/reference-extraction/COMO-TRABAJAMOS-EXTRACTION.md` (line 42).
- **Expected Result:** (a) the same number in every WhatsApp and phone link and the same address in every mailto link; (b) each URL well formed; (c) each value equal to the value of a frozen reference that states it. Do not open the links.
- **Actual Result:**
  - Source (7 occurrences): `hero-cta.njk` lines 5 (`https://wa.me/525647957364?text=…`) and 21 (`tel:+525647957364`); `menu-overlay.njk` lines 28 (`mailto:contacto@serviciomunguia.com`) and 31 (`https://wa.me/525647957364`); `mobile-nav.njk` lines 25 (WhatsApp with text) and 36 (`tel:+525647957364`); `process.njk` line 168 (WhatsApp with text). Every WhatsApp and phone link uses `525647957364`; the single mailto uses `contacto@serviciomunguia.com`. (a) holds.
  - Well formed: `https://wa.me/<digits>` with an optional `text` that decodes to `Hola, quiero solicitar un servicio de diagnóstico para mi lavadora o refrigerador.`; `tel:+525647957364`; `mailto:contacto@serviciomunguia.com`. (b) holds.
  - Reference: `MENU-EXTRACTION.md` line 25 states "Visible number `+52 56 4795 7364` → `https://wa.me/525647957364`" and line 148 states the address; line 156 states the same number. `COMO-TRABAJAMOS-EXTRACTION.md` line 42 states `wa.me/525647957364`. (c) holds for the number and the address. No frozen reference states the WhatsApp message text; recorded as an observation, not as a mismatch.
- **Status:** PASS
- **Evidence:** the grep output and the reference lines above.
- **Related Bug ID:** none

## 7. Discrepancies

| ID | Class | Item | Where | Entry |
|---|---|---|---|---|
| D-1 | A | SEO-07: five `#id` targets missing, known, PD-41 | `out-a/index.html`; PD-41 | FIND-019 |
| D-2 | C | SEC-02: `CLOUDFLARE_API_TOKEN` non-empty in the agent environment, against G-04 (deploy-capable name) | agent environment; `AGENTS.md` G-04 | BUG-001 |
| D-3 | B | SEC-02: `CLAUDE_CODE_MESSAGING_TOKEN` non-empty; name suggests a live credential; PM to confirm its nature | agent environment | FIND-020 |
| D-4 | B | BLD-04 / BLD-09: `src/assets/pipeline-proof.txt` (tracked since `696aac3`) published in the output; no allow-list entry | `src/assets/pipeline-proof.txt`; `out-a/assets/pipeline-proof.txt` | FIND-021 |
| D-5 | A | SEC-07: 7 high advisories in development dependencies; none in production; no threshold applied | `package.json` development dependencies | FIND-022 |
| D-6 | A | SEO-05: one of two `<section>` elements has no label | `out-a/index.html` | observation only |
| D-7 | A | SEO-06: carousel `aria-label` values added by JavaScript (interaction chrome) | `hero-carousel.js` (Swiper) | observation only |
| D-8 | A | BLD-05 / SEC-03: `/favicon.ico` requested and 404 (no favicon declared) | output | observation only |
| D-9 | A | INT-01: WhatsApp message text not stated by any frozen reference | `hero-cta.njk`, `mobile-nav.njk`, `process.njk`, `menu-overlay.njk` | observation only |

The severity of each entry and its reason are stated in `docs/tracking/BUGS.md` and `docs/tracking/FINDINGS.md`.

## 8. Tests not run or blocked

None. Every test of `spec.md` section 3 has a status. No test was blocked: `npm audit` reached the npm registry, and Chrome was available.

Not covered by these tests (the spec's scope of tasks 2 and 3): functional, responsive, accessibility and performance tests. Not run here by design (`spec.md` section 0).

## 9. BUG and FIND identifiers created

- BUG-001 — OPEN, severity HIGH: deploy-capable name present in the agent environment (SEC-02).
- FIND-019 — OPEN: SEO-07 known missing targets, PD-41.
- FIND-020 — ACTION_REQUIRED: `CLAUDE_CODE_MESSAGING_TOKEN` present (SEC-02).
- FIND-021 — ACTION_REQUIRED: pre-existing tracked `pipeline-proof.txt` published (BLD-04, BLD-09).
- FIND-022 — OPEN: npm audit advisories in development dependencies (SEC-07).

## 10. Statement

No file under `src/` changed during this task. No file under `package.json`, `package-lock.json`, `eleventy.config.js`, `wrangler.jsonc` or `.gitignore` changed. No secret value was printed, recorded or committed; the secret scan recorded file and line only, with values masked. No command was run against Cloudflare, no deploy command was run, no package was installed, and no commit, push or deploy was performed. Raw data stay in the scratchpad.
