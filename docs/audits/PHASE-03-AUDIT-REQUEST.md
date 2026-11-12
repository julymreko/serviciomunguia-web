# PHASE 03 AUDIT REQUEST

## Identification

Phase:
03 — CÓMO TRABAJAMOS (OnePage process section)

Milestone:
M03-06 — Formal Audit & Phase Closure Gate

Audit Gate:
YES — sole formal Phase 03 audit gate

Designated Auditor:
Claude Code

## Audit Objective

Verify that the approved Phase 03 implementation (the "Cómo trabajamos" section and the Product Manager-approved enhancements of M03-04: Priority A, Priority B and Priority C) is compliant with the approved scope, architecture and decisions, that its test evidence is sound, and that the repository is eligible for formal Phase 03 closure and for a pre-deployment decision.

The auditor must audit implementation quality and compliance only.

The auditor must not redefine product, architecture, governance, approved Product Manager deviations, or later-phase scope.

## Git Reference Under Review

Branch:
main

Implementation commit range (the nine commits that change files under `src/`, oldest first, after `4d44331`):
`9e34424`, `4a8794d`, `22a4999`, `542601e`, `6f1e252`, `3436414`, `f0743d5`, `3865a34`, `ac58265`.

Later commits change only documentation: the Priority B and Priority C documentation tasks, the M03-05 test records (`d5386c2`, `31cc91e`, `f3d1158`) and the decision records PD-44 to PD-49. The commit that adds this request is the audit baseline.

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
- docs/phases/PHASE-03-como-trabajamos.md
- docs/phases/phase-03/M03-00-claude-discovery-planning-requirement.md
- docs/phases/phase-03/M03-02-review-improvement-proposal.md
- docs/phases/phase-03/M03-03-pm-approval-scope-freeze.md
- docs/phases/phase-03/M03-04-opencode-implementation.md (decisions PD-1 to PD-49)
- docs/phases/phase-03/M03-04-priority-b-technical-specification.md
- docs/phases/phase-03/M03-04-priority-c-smart-header-specification.md
- docs/reference-extraction/COMO-TRABAJAMOS-EXTRACTION.md
- docs/reference-extraction/HEADER-EXTRACTION.md
- docs/reference-extraction/MENU-EXTRACTION.md
- docs/handoffs/PHASE-03-M03-HANDOFF.md
- docs/phases/phase-03/tests/M03-05-01-build-seo-security.md
- docs/phases/phase-03/tests/M03-05-02-functional-responsive-accessibility.md
- docs/phases/phase-03/tests/M03-05-03-performance-regression.md
- docs/tracking/BUGS.md
- docs/tracking/FINDINGS.md
- this audit request

Inspect the implementation relevant to Phase 03, including at minimum:

- src/index.njk
- src/_includes/base.njk
- src/_includes/components/header.njk
- src/_includes/components/hero.njk
- src/_includes/components/hero-content.njk
- src/_includes/components/hero-cta.njk
- src/_includes/components/hero-media.njk
- src/_includes/components/menu-overlay.njk
- src/_includes/components/mobile-nav.njk
- src/_includes/components/process.njk
- src/assets/css/main.css
- src/assets/js/process.js
- src/assets/js/smart-header.js
- src/assets/js/menu-overlay.js
- src/assets/js/hero-carousel.js
- package.json, package-lock.json, eleventy.config.js, wrangler.jsonc, .gitignore

Inspect additional relevant files when required.

## PM-Approved Scope Decisions

The following are authoritative and must not be reported as defects:

1. The Smart Header (Priority C) is a Product Manager-approved enhancement of the reconstructed site; it is not behavior observed in the staging reference (PD-38, SH-D01 to SH-D31).
2. The dynamic scroll-driven process stepper (Priority B) and its reduced-motion rule are Product Manager-approved (PD-30, PD-31, PD-33, PD-34).
3. Mobile Portrait Bottom Navigation is a Product Manager-approved evolution carried from Phase 02.
4. The Footer is not part of Phase 03.
5. The alignment of the Bottom Navigation breakpoint with the Process Mobile Portrait breakpoint was closed without implementation (PD-37).
6. The test statuses and open entries below are accepted by the Product Manager for the production release and are NOT blocking for M03-06 or for deployment (PD-48 and PD-49). The auditor records them as known accepted items and does not treat them as blocking:
   - tests in FAIL: FUN-03 (BUG-002) and ACC-05 (BUG-003) of M03-05-02;
   - test in BLOCKED: FUN-12 of M03-05-02 (specification error, FIND-024);
   - tests in NOT RUN: PRF-03 and PRF-04 of M03-05-03 (reduced timed scope decided by the Product Manager on 2026-11-10);
   - open entries: BUG-002, BUG-003, FIND-023, FIND-024, FIND-025, all moved to the backlog to be fixed after the production release.
7. Other items already recorded and accepted or closed: FIND-021 (accepted), BUG-001 (false positive, closed), the Menu overlay and Bottom Navigation links without a target element (PD-41, FIND-019), the Smart Header observations SH-D28 to SH-D30, and the open cause of the Mobile Portrait CPU 6x ratio spread (PD-35, PD-36). Verify their current state in `docs/tracking/` and in the decision records.

Any other FAIL, BLOCKED or NOT RUN test, any new bug or finding, and any blocking issue that the audit discovers remains subject to the STOP / BLOCKED conditions of M03-06 and to `docs/PRE-DEPLOYMENT-AUDIT.md`.

## Required Verification

Audit, when applicable:

- Phase 03 acceptance criteria (`docs/phases/PHASE-03-como-trabajamos.md`);
- compliance of the implementation with the frozen scope (M03-03) and the M03-04 allowed and prohibited file lists;
- compliance with the architecture and ADRs (Eleventy + Nunjucks static output, SEO-critical content in static HTML, progressive-enhancement JavaScript, Cloudflare Workers Static Assets configuration);
- the Priority B and Priority C specifications against the implementation;
- consistency between the decision records (PD-1 to PD-49), the specifications, PROJECT-STATE, the phase file and the handoff;
- the three M03-05 test records: soundness of evidence, statuses, and agreement of the numbers with the summaries;
- responsive behavior at the four project classes and the boundary widths, reduced-motion behavior and rendering without JavaScript;
- accessibility regressions;
- SEO constraints;
- security and secret exposure (no secret value in the repository or in the build);
- build integrity;
- performance risks, from measured values only and without inventing thresholds (PD-2, D-11);
- bugs and findings, and whether any unresolved entry other than the accepted ones blocks deployment;
- repository synchronization and scope compliance.

Run at minimum:

- `npm run build`
- `git status --short`
- `git rev-parse HEAD`
- `git rev-parse origin/main`
- `git diff --stat 4d44331 HEAD -- src package.json package-lock.json eleventy.config.js wrangler.jsonc`

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

The coordinating agent or Product Manager will record the response as the immutable audit-result artifact under the no-write audit-result policy (`docs/audits/PHASE-03-AUDIT-RESULT-YYYY-MM-DD-RNN.md`). A PASS does not authorize deployment, which requires a separate explicit Product Manager authorization.
