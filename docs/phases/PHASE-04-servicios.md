# PHASE 04 - SERVICIOS

DRAFT FOR PRODUCT MANAGER REVIEW. This document is a proposal prepared by Claude (specification and verification role). It is not committed, creates no authorization, and changes no file under `src/`. It becomes effective only after the Product Manager records its entry in the repository (PD-55 requires the PM's approval of the phase entry).

## Identification

Phase:
04 - SERVICIOS (OnePage services section)

Status:
NOT AUTHORIZED (proposed)

Owner:
Julián Cely

Executing Agent:
OpenCode (implementation, M04-03). Claude: specification and verification only; no commit, push or deploy.

Audit Agent:
Claude Code (independent testing M04-04 and formal audit M04-05).

## Objective

Rebuild the "Servicios" section (`#servicios`) of the OnePage on the approved architecture, from the staging reference, preserving the reference content, hierarchy and responsive behavior except for PM-approved deviations. Third section in the approved order (PD-55): Hero, Cómo trabajamos, **Servicios**, Zonas de cobertura, Marcas, Contacto, Footer.

## Preconditions (verified from the repository, 2026-11-13 state)

- Phase 03 COMPLETED (R01 and R02 PASS); staging `new.serviciomunguia.com` deployed with `noindex` (PD-54).
- Production release NOT AUTHORIZED; blocked by missing sections (PD-55).
- Reference accessible: `https://staging.serviciomunguia.com/inicio-bricks/#servicios` (HTTP 200, read on 2026-11-24).
- Current page composition (`src/index.njk`): Hero, then `<main>` with `components/process.njk`; Menu overlay and Bottom Navigation already link to `#servicios` and `#cobertura`.

## Method (leaner than Phase 03, same gates)

PD-55 requires each phase to follow Phase 03's structure: extraction, PM approval and scope freeze, implementation, independent testing, formal audit. This proposal keeps those five gates and removes the sub-division that made Phase 03 long:

- No separate discovery milestone and no separate improvement-proposal milestone: the review of reference defects is a section inside M04-02, answered by the PM in the same pass.
- One implementation task, not Priority A/B/C or stages. The section has no scroll-driven behavior and no JavaScript, so one verifiable capability is delivered: the static section.
- Testing and audit run back to back by the same agent; the audit is a no-write PASS/FAIL under `docs/PRE-DEPLOYMENT-AUDIT.md`.
- One PM decision record (a single PD) at the scope freeze, and one at closure.

## Evidence Convention

- Extraction: `docs/reference-extraction/SERVICIOS-EXTRACTION.md` (follows `REFERENCE-EXTRACTION-WORKFLOW.md` and `REFERENCE-SECTION-TEMPLATE.md`); states OBSERVED / PM APPROVED / UNKNOWN / NOT APPLICABLE.
- Defects in the reference are recorded in the extraction and in M04-02, not as project bugs. Verified project discrepancies go to `docs/tracking/FINDINGS.md`; defects in implemented work to `docs/tracking/BUGS.md` (`docs/TESTING-PROTOCOL.md`).
- Performance has no invented PASS threshold; results are reported as observed.

## Milestones

### M04-01 - "Servicios" Reference Extraction

Status:
DRAFT COMPLETE (not committed)

Output:
`docs/reference-extraction/SERVICIOS-EXTRACTION.md`. Result: READY FOR RECONSTRUCTION. Five viewports measured (1920 × 945, 1024 × 1366, 820 × 1180, 844 × 414, 390 × 844); 62 section CSS rules read; three images, three card SVGs and thirteen Ionicons identified.

PM decisions already given in conversation on 2026-11-24 (to be recorded in the repository): trust-bar figures confirmed; H2 follows the reference CSS rule; Mobile Landscape = 844 × 414 only; CTA target `#contacto` kept as is, with an empty anchor until Contacto is built.

Closure: PM commits the extraction file.

### M04-02 - PM Approval & Scope Freeze

Status:
PENDING

Purpose:
Resolve the open decisions below, record the frozen requirement set and the file allow-list. No `src/` change before this closes.

Decisions to answer (recommended option first; none is approved until recorded):

1. **Icons.** The reference uses the Ionicons icon font for 9 chip icons and 4 trust icons, plus 3 inline SVG card icons. Options: (A) replace the 13 font icons with equivalent inline SVG, adding no font dependency (recommended; visually equivalent, needs PM visual approval); (B) add the Ionicons font as a vendored asset.
2. **Images.** Transfer the three WebP images (four size variants each: 300, 768, 1024, 1200 px) from the reference into `src/assets/images/services/`, with an integrity record (name, bytes, SHA-256, dimensions). Recommended: yes, same pattern as the CTA image of Phase 03 (D-07).
3. **Image loading.** Reference lazy loading comes from Bricks; the static equivalent is native `loading="lazy"`, `width`/`height` and `srcset`/`sizes` taken from the reference. Recommended: yes.
4. **Section anchor.** Add `id="servicios"` and a responsive `scroll-margin-top` matching the Smart Header geometry, as done for the process section (PI-09). Recommended: yes. This also resolves the `#servicios` part of backlog item 49 (FIND-019); `#contacto`, `#cobertura`, `#marcas` and `#agendar-diagnostico` stay open.
5. **Semantics.** The reference has no ARIA attributes and no lists. Recommended minimum: SVG icons `aria-hidden="true"` and `focusable="false"` (as in Phase 03); keep heading outline H2 → three H3. Whether to wrap cards or chips in `ul`/`li` is a PM choice (recommended: no, to stay faithful to the reference).
6. **Card 3 availability pill** reads `Agenda de diagnóstico`, unlike `Agenda disponible` on cards 1 and 2. Keep as observed, or align? Recommended: keep as observed, since the extraction cannot say it is a defect.
7. **Motion.** Preserve the reference hover (card lift 6 px, shadow, 0.3 s; button arrow) and its `prefers-reduced-motion` handling. Recommended: yes; no new motion.
8. **JavaScript.** None. Recommended: yes (SEO-critical content is static HTML; ADR-003).
9. **Mobile Landscape rule.** The `(max-width: 767px) and (orientation: landscape)` card layout exists in the reference CSS but is outside the measured viewports. Recommended: do not reproduce what was not measured; it is listed as out of scope unless the PM asks for an extra measurement.

Outputs:
`docs/phases/phase-04/M04-02-pm-approval-scope-freeze.md` (decision record, frozen requirement set, allow-list), updated extraction with the PM APPROVED items, and the M04-03 task contract.

Proposed M04-03 allow-list (not authorized until recorded):
- `src/_includes/components/services.njk` (new)
- `src/index.njk` (one include after `process.njk`, inside `<main>`)
- `src/assets/css/main.css` (one Services block only; no Bottom Navigation, Header, Menu, Hero or process selectors)
- `src/assets/images/services/*` (new; PM-approved transfer in M04-02 only)

Not touched: `base.njk` (no new script, the staging `noindex` stays), `process.njk`, `mobile-nav.njk`, `menu-overlay.njk`, all JavaScript files, `package.json`, `package-lock.json`, `eleventy.config.js`, `wrangler.jsonc`.

### M04-03 - OpenCode Implementation

Status:
NOT AUTHORIZED (needs its own explicit PM authorization after M04-02 closes)

Purpose:
Implement only the frozen scope as one task: static section with three cards, trust bar, images and responsive layout at the five viewports.

Acceptance (all must hold before PM visual validation):
- `npm run build` succeeds; the built `dist/index.html` contains the H2, three H3, intro, descriptions, chips, CTAs and trust figures as static text, and `#servicios` appears once.
- Layout matches the extraction at the five viewports: 3 columns at 1920 and 1024; 2 columns with the third card centered at half width at 820 and 844; 1 column at 390; trust bar 4 / 4 / 2×2 / 2×2 / 1 columns respectively.
- Section padding, grid gap 24 px, card radius, shadows, typography and colors as measured (H2 `clamp(2.125rem, 3.6vw, 3.125rem)` with 1rem = 10px root as in the existing stylesheet; H3 28.8 px).
- No JavaScript added; existing sections unchanged (regression).
- Reviewed CONFORME by Claude Code, validated visually by the PM, committed by the PM.

STOP conditions: the allow-list is not enough; an existing selector would have to change; a font or dependency would be needed; a reconstruction-critical value is UNKNOWN.

### M04-04 - Claude Code Independent Testing

Status:
NOT AUTHORIZED

Scope: exact OpenCode commit; the nine areas of `docs/TESTING-PROTOCOL.md` as applicable (Build, Functional, Responsive, SEO, Accessibility, Performance, Security, Integrations, Regression), including reduced motion and no-JavaScript rendering. Regression covers Hero, process stepper, Smart Header, Menu overlay and Bottom Navigation. Outputs: test records PASS / FAIL / BLOCKED / NOT RUN with evidence; BUGS.md and FINDINGS.md entries for verified defects.

### M04-05 - Formal Audit & Phase Closure Gate

Status:
NOT AUTHORIZED

Scope: audit request, no-write audit under `docs/PRE-DEPLOYMENT-AUDIT.md`, immutable result `docs/audits/PHASE-04-AUDIT-RESULT-YYYY-MM-DD-R01.md`. PASS or FAIL. Closure documentation after PASS: phase specification, `docs/PROJECT-STATE.md`, handoff, backlog.

## Out of Phase 04

Deployment to staging or production (each needs its own explicit PM authorization; the production release stays blocked until all sections exist, PD-55); the Contacto section and the `#contacto` target; WhatsApp prefilled messages and any automation (deferred to the Contacto phase); Zonas de cobertura; Marcas; Footer; the staging `noindex`; the production indexing, canonical, robots and sitemap policy.

## General STOP / BLOCKED Conditions

Execution stops when: the reference cannot be inspected; the repository is dirty with unrelated changes; authoritative documents contradict each other; a reconstruction-critical UNKNOWN would require invention; a dependency or architecture change would be required; existing approved behavior would have to be redefined without PM approval; a required test is FAIL, BLOCKED or NOT RUN.

## Phase 04 Acceptance Criteria

1. The PM records the phase entry and the scope freeze before any `src/` change.
2. Extraction follows the approved workflow and template and has no reconstruction-critical UNKNOWN.
3. Nothing outside the frozen allow-list changes.
4. SEO-critical content is static HTML; no JavaScript is added.
5. Responsive and accessibility checks pass at the five viewports.
6. M04-05 returns PASS; the repository is synchronized (HEAD = origin/main, clean working tree).
7. `PROJECT-STATE.md` and `BACKLOG.md` are updated at closure, including item 49 for the ids that now exist.
