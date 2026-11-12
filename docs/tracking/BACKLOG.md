# BACKLOG

All items below are NOT AUTHORIZED unless an item states an authorization. Item numbers refer to the Product Manager's tracking sheet. Sections follow the Product Manager's decision of 2026-11-11 (PD-48, PD-51): fixes come after the production release.

## NOW

- UNDEFINED

## NEXT

After the production release (PD-48):

- Item 59 — BUG-003: give the logo and the Menu trigger a visible focus indicator on light and dark backgrounds (CSS in the Smart Header block of `main.css`).
- Item 60 — BUG-002: remove the stepper scroll listener of `process.js` when the section is left, then re-measure the stepper cost and rerun the B1-B11 regression.
- Item 61 — FIND-023: decide whether to accept the behavior without `menu-overlay.js` or add a no-JavaScript navigation alternative.
- Item 62 — FIND-024: confirm that the new-tab rule of PI-05(c) does not apply to the Bottom Navigation WhatsApp link and close the finding.
- Item 63 — FIND-025: decide whether the Hero autoplay must stop under `prefers-reduced-motion`.

Smart Header and navigation follow-ups (PD-41, PD-42):

- Item 49 — add the target ids when the sections #servicios, #cobertura, #marcas, #contacto and #agendar-diagnostico are built, or change the links (FIND-019).
- Item 50 — decide whether the Menu trigger circle needs a visible border, outline or shadow over dark backgrounds (measured contrast 1.0 to 1.13:1).
- Item 51 — decide whether to avoid the Hero-state first frame on reload when the page is already scrolled (accepted limitation today).

## LATER

- Item 54 — FIND-022: review the 7 high `npm audit` advisories in development dependencies and decide whether to update any dependency (changes `package.json` and the lockfile; ADR-006 pins Eleventy 3.1.6).
- Item 55 — remove `src/assets/pipeline-proof.txt` so it stops being published (own task, single allowed path; `/assets/pipeline-proof.txt` will return 404 after the next deploy).
- Item 10 — examine and configure `.remember/` and `.playwright-mcp/` (deferred, no date).
- Before the production release: decide the indexing, canonical, robots and sitemap policy (ADR-003 leaves it open) and make sure the staging `noindex` of M03-07 is not carried to production.
- Footer: PM decision recorded in `docs/PROJECT-STATE.md` — implemented as the final global component after the main page is completed; phase UNDEFINED.

## BLOCKED

- NONE

## Rules

- Items must be concise and actionable.
- Undefined work must remain undefined.
- A blocked item must state its blocker.
- Completed items must be removed from active sections and recorded in the relevant phase or milestone specification and, when required, in the corresponding handoff artifact.
