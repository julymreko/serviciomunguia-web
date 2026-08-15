# PHASE 02 - Controlled Reference Migration

## Identification

Phase:
02 - Controlled Reference Migration

Status:
NOT STARTED

Owner:
Julián Cely

Executing Agent:
OpenAI GPT-5.6 Sol

Audit Agent:
Claude Code for M02-05 only

## Objective

Validate the real reference-to-extraction-to-approval-to-reconstruction-to-staging migration workflow using small approved reference components before scaling to larger sections.

Approved migration order:

1. Header
2. Menu
3. Footer

Header is the first real-world extraction pilot.

## Preconditions

- Phase 01 is COMPLETED.
- Phase 01 formal audit result is PASS.
- Phase 01 closure state is synchronized and published.
- The approved reference extraction workflow and template exist.
- staging.serviciomunguia.com must be accessible before M02-01 starts.
- Undefined product, visual, responsive, content, migration, or architecture decisions require Product Manager approval.

## Evidence Convention

Extraction artifacts:

- docs/reference-extraction/HEADER-EXTRACTION.md
- docs/reference-extraction/MENU-EXTRACTION.md
- docs/reference-extraction/FOOTER-EXTRACTION.md

Each extraction must follow:

- docs/reference-extraction/REFERENCE-EXTRACTION-WORKFLOW.md
- docs/reference-extraction/REFERENCE-SECTION-TEMPLATE.md

Evidence states:

- OBSERVED
- PM APPROVED
- UNKNOWN
- NOT APPLICABLE

A reconstruction-critical UNKNOWN blocks reconstruction.

## Audit Policy

M02-00 through M02-04 are self-verified.

M02-05 is the sole planned formal Claude Code audit gate for Phase 02.

## Publication Policy

Validated dependent milestone work must be committed and pushed before the next milestone begins.

Publication verification requires:

- HEAD = origin/main
- working tree clean

## Finding and Remediation Policy

M02-03 discrepancies are remediated as internal M02-03 iterations.

Relevant discrepancies must be recorded in:

docs/tracking/FINDINGS.md

Normal remediation does not create a new milestone.

Verified defects that meet bug criteria must follow docs/TESTING-PROTOCOL.md and be recorded in:

docs/tracking/BUGS.md

## General STOP / BLOCKED Conditions

Execution stops when:

- a required environment is inaccessible;
- required evidence cannot be verified;
- a reconstruction-critical UNKNOWN exists;
- a required PM decision is unresolved;
- repository state is contradictory or stale;
- a required dependency is unavailable;
- a required test is FAIL, BLOCKED, or NOT RUN;
- a blocking bug or finding prevents continuation.

## Milestones

### M02-00 - Phase 02 Specification & Governance

Purpose:
Approve, version, and publish the authoritative Phase 02 specification before migration work begins.

Audit gate:
NO

Testing:

- Build: N/A - documentation only
- Functional: N/A - documentation only
- Responsive: N/A - documentation only
- SEO: N/A - documentation only
- Accessibility: N/A - documentation only
- Performance: N/A - documentation only
- Security: N/A - documentation only
- Integrations: N/A - documentation only
- Regression: N/A - documentation only

PASS:

- Scope and milestone structure approved.
- Specification published.
- HEAD = origin/main.
- Working tree clean.

STOP / BLOCKED:

- Required Phase 02 decision remains undefined.

### M02-01 - Header Reference Extraction

Purpose:
Validate the Phase 01 extraction framework against the approved Header on staging.serviciomunguia.com.

Precondition:
staging.serviciomunguia.com accessibility verified.

Evidence:
docs/reference-extraction/HEADER-EXTRACTION.md

Audit gate:
NO

Testing:

- Build: N/A - extraction only
- Functional: APPLIES
- Responsive: APPLIES
- SEO: APPLIES
- Accessibility: APPLIES
- Performance: N/A - extraction only
- Security: N/A - extraction only
- Integrations: N/A - extraction only
- Regression: N/A - no implementation

PASS:

- Required reference evidence recorded.
- Responsive behavior documented.
- Accessibility observations documented.
- Interactions, assets, links, and dependencies documented.
- No reconstruction-critical UNKNOWN remains.
- Reconstruction Readiness = READY FOR RECONSTRUCTION.
- Julián Cely explicitly approves the extraction evidence.

Mandatory checkpoint:

M02-01 cannot be marked COMPLETED until Julián approves the extraction evidence.

M02-02 cannot begin before that approval.

STOP / BLOCKED:

- staging.serviciomunguia.com inaccessible.
- Reconstruction-critical UNKNOWN exists.
- Required behavior cannot be verified.
- Required PM decision unresolved.
- Extraction evidence not approved.

### M02-02 - Header Reconstruction

Purpose:
Reconstruct the approved Header using Eleventy + Nunjucks and only approved extraction evidence.

Audit gate:
NO

Testing:

- Build: APPLIES
- Functional: APPLIES
- Responsive: APPLIES
- SEO: APPLIES
- Accessibility: APPLIES
- Performance: APPLIES
- Security: APPLIES
- Integrations: N/A - no external integration expected
- Regression: APPLIES

PASS:

- Build succeeds.
- Implementation matches approved evidence.
- Responsive and accessibility requirements pass.
- No unapproved deviation exists.
- No blocking bug or finding remains.

STOP / BLOCKED:

- Approved evidence is insufficient.
- A reconstruction-critical UNKNOWN appears.
- An unapproved deviation is required.
- Required testing cannot complete.

### M02-03 - Header Staging Validation

Purpose:
Deploy and validate the reconstructed Header at new.serviciomunguia.com against approved reference evidence.

Audit gate:
NO

Testing:

- Build: APPLIES
- Functional: APPLIES
- Responsive: APPLIES
- SEO: APPLIES
- Accessibility: APPLIES
- Performance: APPLIES
- Security: APPLIES
- Integrations: APPLIES
- Regression: APPLIES

PASS:

- Deployment is publicly observable.
- Header matches approved evidence.
- Required tests pass.
- No blocking bug or finding remains.

STOP / BLOCKED:

- Deployment cannot be observed.
- External dependency blocks verification.
- Discrepancy requires an undefined PM decision.
- Required testing remains FAIL, BLOCKED, or NOT RUN.

### M02-04 - Menu and Footer Migration

Purpose:
Repeat the validated migration workflow for Menu and Footer while keeping both as separate extraction units.

Evidence:

- docs/reference-extraction/MENU-EXTRACTION.md
- docs/reference-extraction/FOOTER-EXTRACTION.md

Audit gate:
NO

Testing:

- Build: APPLIES
- Functional: APPLIES
- Responsive: APPLIES
- SEO: APPLIES
- Accessibility: APPLIES
- Performance: APPLIES
- Security: APPLIES
- Integrations: APPLIES when applicable
- Regression: APPLIES

PASS:

- Menu and Footer each reach READY FOR RECONSTRUCTION.
- Required PM approvals are recorded.
- Implementations match approved evidence.
- Required tests pass.
- No blocking bug or finding remains.

STOP / BLOCKED:

- Reconstruction-critical UNKNOWN exists.
- Required PM decision unresolved.
- Reference behavior cannot be verified.
- Required testing remains FAIL, BLOCKED, or NOT RUN.

### M02-05 - Phase 02 Workflow Gate

Purpose:
Verify that the controlled migration workflow is ready to scale to larger site sections.

Audit gate:
YES - sole formal Phase 02 Claude Code audit

Testing:

- Build: APPLIES
- Functional: APPLIES
- Responsive: APPLIES
- SEO: APPLIES
- Accessibility: APPLIES
- Performance: APPLIES
- Security: APPLIES
- Integrations: APPLIES
- Regression: APPLIES

PASS:

- Header, Menu, and Footer evidence is complete.
- Required tests pass.
- No blocking bug or finding remains.
- Claude Code audit result is PASS.
- Repository closure state is synchronized.
- HEAD = origin/main.
- Working tree clean.

STOP / BLOCKED:

- Audit result is FAIL.
- Required audit input is missing.
- Required testing is FAIL, BLOCKED, or NOT RUN.
- Blocking UNKNOWN, decision, bug, or finding remains.

## Phase 02 Acceptance Criteria

1. Phase 02 specification is approved and published before M02-01.
2. staging.serviciomunguia.com accessibility is verified before M02-01.
3. Header is the first real extraction pilot.
4. Header extraction follows the approved workflow and template.
5. Responsive and Accessibility are APPLIES in M02-01 through M02-04.
6. Julián must explicitly approve M02-01 extraction evidence.
7. M02-02 cannot begin before M02-01 closes.
8. Reconstruction-critical UNKNOWN values block reconstruction.
9. M02-03 discrepancies remain internal iterations and are recorded in FINDINGS.md when relevant.
10. Menu and Footer remain separate extraction units.
11. M02-05 is the sole planned formal Claude Code audit gate.
12. Every milestone classifies all nine testing areas.
13. Every milestone defines PASS and STOP/BLOCKED criteria.
14. Dependent validated work is published before the next milestone.
15. Phase closure requires synchronized repository state, HEAD = origin/main, and a clean working tree.

## Required Next Action

Complete and publish M02-00.

Do not begin M02-01 until M02-00 is complete and staging.serviciomunguia.com accessibility is verified.