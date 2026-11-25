# PHASE 04 AUDIT REQUEST

## Identification

Phase:
04 — SERVICIOS (OnePage Services section)

Milestone:
M04-05 — Formal Audit & Phase Closure Gate

Audit Gate:
YES — sole formal Phase 04 audit gate

Designated Auditor:
Claude Code

## Audit Objective

Verify that the approved Phase 04 implementation (the "Servicios" section, `#servicios`, third section of the approved order, PD-55) is compliant with the approved scope, architecture and decisions, that its test evidence is sound, and that the repository is eligible for formal Phase 04 closure and for a pre-deployment decision.

The auditor must audit implementation quality and compliance only.

The auditor must not redefine product, architecture, governance, approved Product Manager deviations, or later-phase scope.

## Git Reference Under Review

Branch:
main

Implementation commits, oldest first, after `38eda2b` (the last commit of Phase 03, PD-55):

- `3019910` — documentation: the Servicios extraction `docs/reference-extraction/SERVICIOS-EXTRACTION.md`.
- `0146c68` — the 12 Servicios images under `src/assets/images/services/` (the only `src/` change besides the next one).
- `d5b3850` — PD-57, authorization of the implementation task (documentation).
- `dfc4f96` — the Services section: `src/_includes/components/services.njk` (new), `src/index.njk` (one include line) and `src/assets/css/main.css` (one appended block).
- `b558b4b` — the M04-04 test record, FIND-026, FIND-027, PD-58 and backlog item 67 (documentation).

Other commits in the range `38eda2b..HEAD` change only documentation (the auditor lists them with `git log --name-status 38eda2b..HEAD`). Later commits change only documentation. The commit that adds this request is the audit baseline.

The auditor must verify the actual HEAD, origin/main and working-tree state before issuing a result, and must state the exact commit reviewed.

## Required Reading

- docs/00-START-HERE.md
- docs/PROJECT-STATE.md
- docs/ARCHITECTURE.md
- docs/ARTIFACT-CONVENTIONS.md
- docs/CONTEXT-PROTOCOL.md
- docs/TESTING-PROTOCOL.md
- docs/PRE-DEPLOYMENT-AUDIT.md
- docs/SECRETS-POLICY.md
- docs/decisions/ADR-001-frontend-stack.md
- docs/decisions/ADR-002-cloudflare-runtime.md
- docs/decisions/ADR-003-seo-static-html.md
- docs/decisions/ADR-006-runtime-version-pinning.md
- docs/phases/PHASE-04-servicios.md
- docs/phases/phase-04/M04-02-pm-approval-scope-freeze.md (decisions PD-56 to PD-58)
- docs/reference-extraction/SERVICIOS-EXTRACTION.md
- docs/phases/phase-04/tests/M04-04-testing.md
- docs/tracking/BUGS.md
- docs/tracking/FINDINGS.md
- docs/tracking/BACKLOG.md
- docs/phases/phase-03/M03-04-opencode-implementation.md (decisions PD-1 to PD-55; the ledger continues in M04-02)
- this audit request

Inspect the implementation relevant to Phase 04, including at minimum:

- src/index.njk
- src/_includes/base.njk
- src/_includes/components/services.njk
- src/_includes/components/process.njk (regression neighbour)
- src/assets/css/main.css (the Services block and the unchanged remainder)
- src/assets/images/services/ (12 files, integrity table in M04-02)
- src/assets/js/ (unchanged)
- package.json, package-lock.json, eleventy.config.js, wrangler.jsonc, .gitignore

Inspect additional relevant files when required.

## PM-Approved Scope Decisions

The following are authoritative and must not be reported as defects:

1. The three CTAs of the Services section link to `#contacto`, an anchor that does not exist yet; the target is created in the Contacto phase (PD-56 E-3, backlog item 49). The Menu overlay and Bottom Navigation items for `#cobertura` and the others stay without a target (PD-41, FIND-019).
2. The 16 pill, chip and trust icons are inline SVG equivalents of the reference icon fonts (PD-56 D-1, PD-57 A-1); the 3 card icons are the observed inline SVG.
3. Breakpoints follow the repository `.98` convention (PD-57 A-2); the H2 is written in px (PD-57 A-3); `scroll-margin-top` copies the process section (PD-57 A-4).
4. The Mobile Landscape rule of the reference below 767 px is out of scope (PD-56 E-3/D-9).
5. The WhatsApp prefilled message and any automation are deferred to the Contacto phase.
6. Testimonials, Zonas de cobertura, Marcas and Footer are not part of Phase 04.
7. The staging `<meta name="robots" content="noindex">` (PD-52) stays; the production indexing, canonical, robots and sitemap policy is undecided and tracked in the backlog.
8. The M04-04 test record is accepted with one FAIL: ACC-03 (two links `Solicitar servicio →` with the same accessible name and destination), accepted as an exception (PD-58); FIND-027 stays OPEN as accepted. FIND-026 (INFO, column width and card height differences equal to a 15 px narrower container in the extraction session) is accepted (PD-58). The CTA focus ring contrast (1.85:1, copied from the reference) is recorded as backlog item 67 (PD-58). INT-01 is NOT APPLICABLE.
9. The implementation task M04-03-SV-01 needed four rounds because of omissions of the specification (base font, image vertical alignment, opaque base under the tint); they are corrected in the commit under review and are not defects.
10. The statuses of M04-03, M04-04 and M04-05 in `docs/phases/PHASE-04-servicios.md`, and the state in `docs/PROJECT-STATE.md`, are updated by the closure documentation after a PASS; the auditor records them as pending and does not treat them as blocking.
11. Phase 03 accepted items stay as in the Phase 03 audits (R01, R02): FUN-03 (BUG-002), ACC-05 (BUG-003), FUN-12 (FIND-024), PRF-03, PRF-04 NOT RUN and the open entries BUG-002, BUG-003, FIND-023, FIND-024, FIND-025 (PD-48, PD-49) and FIND-022 (PD-51).
12. Deployment is NOT AUTHORIZED; the Phase 04 section has not been deployed to staging.

Any other FAIL, BLOCKED or NOT RUN test, any new bug or finding, and any blocking issue that the audit discovers remains subject to the STOP / BLOCKED conditions of M04-05 and to `docs/PRE-DEPLOYMENT-AUDIT.md`.

## Required Verification

Audit, when applicable:

- Phase 04 acceptance criteria (`docs/phases/PHASE-04-servicios.md`);
- compliance of the implementation with the frozen scope and allow-list (PD-56, PD-57): only the allowed files changed in `src/`, no existing selector changed, no font, dependency or JavaScript added;
- compliance with the architecture and ADRs (Eleventy + Nunjucks static output, SEO-critical content in static HTML, no JavaScript for this section, Cloudflare Workers Static Assets configuration);
- fidelity of the section to `docs/reference-extraction/SERVICIOS-EXTRACTION.md` (content, structure, values) except PM-approved deviations;
- consistency between the decision records (PD-1 to PD-58), the specifications, PROJECT-STATE, the phase file and the backlog;
- the M04-04 test record: soundness of evidence, statuses, and agreement of the numbers with the summary and with BUGS.md and FINDINGS.md;
- responsive behavior at the viewports of the record and the boundary widths, reduced-motion behavior and rendering without JavaScript;
- accessibility regressions;
- SEO constraints;
- security and secret exposure (no secret value in the repository or in the build);
- build integrity and the integrity of the 12 images against the table of M04-02;
- performance risks, from measured values only and without inventing thresholds (PD-2, D-11);
- bugs and findings, and whether any unresolved entry other than the accepted ones blocks deployment;
- repository synchronization and scope compliance.

Run at minimum:

- `npm run build`
- `git status --short`
- `git rev-parse HEAD`
- `git rev-parse origin/main`
- `git diff --stat 38eda2b HEAD -- src package.json package-lock.json eleventy.config.js wrangler.jsonc`

## Auditor Constraints

- Do not modify repository files.
- Do not remediate findings during the audit.
- Do not invent missing requirements.
- Do not infer undefined product or architecture decisions.
- Stop if a genuinely required audit input is missing.
- Do not commit, push or deploy.
- Never print, copy or record the value of a secret, a token or a credential.
- Base conclusions only on explicit repository or executed evidence.
- Preserve audit-result immutability.

## Required Audit Output

Return exactly one audit decision:

PASS

or

FAIL

If FAIL, provide concrete actionable blocking findings with supporting evidence and required correction.

Also provide:

- Phase
- Milestone
- Git reference reviewed
- Auditor
- Date
- blocking issues, if any
- evidence supporting the decision

The coordinating agent or Product Manager will record the response as the immutable audit-result artifact under the no-write audit-result policy (`docs/audits/PHASE-04-AUDIT-RESULT-YYYY-MM-DD-RNN.md`). A PASS does not authorize deployment, which requires a separate explicit Product Manager authorization.
