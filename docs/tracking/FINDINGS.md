# FINDINGS

## Purpose

Record verified discoveries that may affect implementation, migration, architecture, design, SEO, performance, security, testing, or operations.

## Allowed Status Values

- OPEN
- ACTION_REQUIRED
- RESOLVED
- CLOSED

## Severity Scale

- CRITICAL
- HIGH
- MEDIUM
- LOW
- INFO

## Entry Format

ID:
FIND-000

Status:
OPEN

Severity:
UNDEFINED

Phase:
UNDEFINED

Milestone:
UNDEFINED

Finding:
UNDEFINED

Evidence:
UNDEFINED

Impact:
UNDEFINED

Related Test IDs:
NONE

Required Action:
UNDEFINED

Resolution:
UNDEFINED

Verified By:
UNDEFINED

Verification Evidence:
UNDEFINED

Closed Date:
UNDEFINED

## Current Findings

### FIND-001

ID:
FIND-001

Status:
OPEN

Severity:
HIGH

Source Audit Finding:
F-01 — Reference typefaces are never loaded

Source Severity:
BLOCKER

Phase:
02 — Controlled Reference Migration

Milestone:
M02-05 — Phase 02 Workflow Gate

Finding:
Inter and Open Sans were referenced by the reconstruction without being loaded.

Evidence:
docs/audits/PHASE-02-AUDIT-RESULT-2026-09-15-R01.md

Impact:
Reference typography fidelity could not be guaranteed.

Related Test IDs:
NONE

Required Action:
Self-host and load the required reference typefaces and verify browser loading.

Resolution:
Remediation is published on main: self-hosted Inter and Open Sans WOFF2 assets, @font-face declarations, and browser font-loading verification were added.

Verified By:
OpenAI GPT-5.6 Sol

Verification Evidence:
docs/handoffs/PHASE-02-HANDOFF.md

Closed Date:
UNDEFINED — formal closure pending re-audit PASS

### FIND-002

ID:
FIND-002

Status:
OPEN

Severity:
HIGH

Source Audit Finding:
F-02 — Menu responsive coverage incomplete

Source Severity:
BLOCKER

Phase:
02 — Controlled Reference Migration

Milestone:
M02-05 — Phase 02 Workflow Gate

Finding:
Menu responsive rules did not adequately cover portrait widths 479–991 or desktop/laptop widths 1025–1438.

Evidence:
docs/audits/PHASE-02-AUDIT-RESULT-2026-09-15-R01.md

Impact:
Horizontal overflow and inaccessible contact content occurred at intermediate widths.

Related Test IDs:
NONE

Required Action:
Add responsive coverage and verify 768, 820, 1280, and 1366 widths.

Resolution:
Remediation is published on main with portrait-tablet and intermediate desktop/laptop rules; the required remediation viewports were verified without horizontal overflow.

Verified By:
OpenAI GPT-5.6 Sol

Verification Evidence:
docs/handoffs/PHASE-02-HANDOFF.md

Closed Date:
UNDEFINED — formal closure pending re-audit PASS

### FIND-003

ID:
FIND-003

Status:
OPEN

Severity:
HIGH

Source Audit Finding:
F-03 — M02-03B / M02-03C status inconsistency

Source Severity:
BLOCKER

Phase:
02 — Controlled Reference Migration

Milestone:
M02-05 — Phase 02 Workflow Gate

Finding:
M02-03B and M02-03C contained stale milestone state and forbidden secondary Final Status fields.

Evidence:
docs/audits/PHASE-02-AUDIT-RESULT-2026-09-15-R01.md

Impact:
Repository governance state contradicted the actual completed implementation state.

Related Test IDs:
NONE

Required Action:
Synchronize canonical statuses and remove stale or duplicate state fields.

Resolution:
Remediation is published on main; both milestone artifacts now use the canonical completed state and stale secondary status fields were removed.

Verified By:
OpenAI GPT-5.6 Sol

Verification Evidence:
docs/handoffs/PHASE-02-HANDOFF.md

Closed Date:
UNDEFINED — formal closure pending re-audit PASS

### FIND-004

ID:
FIND-004

Status:
OPEN

Severity:
HIGH

Source Audit Finding:
F-04 — Missing Phase 02 audit request / handoff

Source Severity:
BLOCKER

Phase:
02 — Controlled Reference Migration

Milestone:
M02-05 — Phase 02 Workflow Gate

Finding:
Required Phase 02 audit-request and handoff artifacts were absent before the first formal audit.

Evidence:
docs/audits/PHASE-02-AUDIT-RESULT-2026-09-15-R01.md

Impact:
The formal phase-gate workflow lacked required audit/handoff artifacts.

Related Test IDs:
NONE

Required Action:
Create the Phase 02 audit request and handoff before re-audit.

Resolution:
Remediation is published on main. The audit request, immutable R01 result, and Phase 02 handoff artifacts now exist.

Verified By:
OpenAI GPT-5.6 Sol

Verification Evidence:
docs/audits/PHASE-02-AUDIT-REQUEST.md
docs/audits/PHASE-02-AUDIT-RESULT-2026-09-15-R01.md
docs/handoffs/PHASE-02-HANDOFF.md

Closed Date:
UNDEFINED — formal closure pending re-audit PASS

### FIND-005

ID:
FIND-005

Status:
OPEN

Severity:
MEDIUM

Source Audit Finding:
F-05 — UTF-8 BOM emitted into production HTML

Phase:
02 — Controlled Reference Migration

Milestone:
M02-05 — Phase 02 Workflow Gate

Finding:
A UTF-8 BOM in menu-overlay.njk emitted an unwanted line box into production HTML.

Evidence:
docs/audits/PHASE-02-AUDIT-RESULT-2026-09-15-R01.md

Impact:
An extra 18px layout artifact appeared in affected viewports.

Related Test IDs:
NONE

Required Action:
Save menu-overlay.njk as UTF-8 without BOM.

Resolution:
Remediation is published on main; the BOM was removed and the layout artifact disappeared after rebuild.

Verified By:
OpenAI GPT-5.6 Sol

Verification Evidence:
docs/handoffs/PHASE-02-HANDOFF.md

Closed Date:
UNDEFINED — formal closure pending re-audit PASS

### FIND-006

ID:
FIND-006

Status:
OPEN

Severity:
MEDIUM

Source Audit Finding:
F-06 — Header DOM / positioning deviation not recorded

Phase:
02 — Controlled Reference Migration

Milestone:
M02-05 — Phase 02 Workflow Gate

Finding:
The PM-approved separation of the menu trigger from the Header stacking context was implemented but not documented in the Header extraction.

Evidence:
docs/audits/PHASE-02-AUDIT-RESULT-2026-09-15-R01.md

Impact:
Implementation and approved reference-deviation records were inconsistent.

Related Test IDs:
NONE

Required Action:
Record the approved trigger-layer separation and positioning change.

Resolution:
Remediation is published on main; HEADER-EXTRACTION.md now records the approved structural deviation and stacking relationship.

Verified By:
OpenAI GPT-5.6 Sol

Verification Evidence:
docs/reference-extraction/HEADER-EXTRACTION.md
docs/handoffs/PHASE-02-HANDOFF.md

Closed Date:
UNDEFINED — formal closure pending re-audit PASS

### FIND-007

ID:
FIND-007

Status:
OPEN

Severity:
LOW

Source Audit Finding:
F-07 — MENU-EXTRACTION.md evidence section stale

Phase:
02 — Controlled Reference Migration

Milestone:
M02-05 — Phase 02 Workflow Gate

Finding:
The evidence-reference section incorrectly stated that several viewports, DOM observations, and computed-style observations had not been captured.

Evidence:
docs/audits/PHASE-02-AUDIT-RESULT-2026-09-15-R01.md

Impact:
Evidence provenance contradicted the completed Menu extraction.

Related Test IDs:
NONE

Required Action:
Synchronize the evidence-reference section with the actual completed extraction.

Resolution:
Remediation is published on main; all four observed viewports and DOM/computed-style provenance are now recorded.

Verified By:
OpenAI GPT-5.6 Sol

Verification Evidence:
docs/reference-extraction/MENU-EXTRACTION.md
docs/handoffs/PHASE-02-HANDOFF.md

Closed Date:
UNDEFINED — formal closure pending re-audit PASS

### FIND-008

ID:
FIND-008

Status:
OPEN

Severity:
LOW

Source Audit Finding:
F-08 — Menu base opacity documentation gap

Phase:
02 — Controlled Reference Migration

Milestone:
M02-05 — Phase 02 Workflow Gate

Finding:
The observed default primary-navigation opacity was not explicitly documented alongside the hover state.

Evidence:
docs/audits/PHASE-02-AUDIT-RESULT-2026-09-15-R01.md

Impact:
The extraction did not fully trace the observed link-state behavior implemented in the reconstruction.

Related Test IDs:
NONE

Required Action:
Document the observed/default opacity behavior consistently.

Resolution:
Remediation is published on main; MENU-EXTRACTION.md records default opacity 0.72 and hover opacity 1 with translateX(18px).

Verified By:
OpenAI GPT-5.6 Sol

Verification Evidence:
docs/reference-extraction/MENU-EXTRACTION.md
docs/handoffs/PHASE-02-HANDOFF.md

Closed Date:
UNDEFINED — formal closure pending re-audit PASS

### FIND-009

ID:
FIND-009

Status:
OPEN

Severity:
LOW

Source Audit Finding:
F-09 — Bottom-navigation component naming inconsistency

Phase:
02 — Controlled Reference Migration

Milestone:
M02-05 — Phase 02 Workflow Gate

Finding:
The component filename mobile-sticky-nav.njk did not match the semantic root naming convention.

Evidence:
docs/audits/PHASE-02-AUDIT-RESULT-2026-09-15-R01.md

Impact:
Component naming violated the documented architecture convention.

Related Test IDs:
NONE

Required Action:
Align filename/root naming or explicitly preserve the existing convention.

Resolution:
PM approved mobile-nav.njk as the canonical filename. The component was renamed and src/index.njk updated; CSS class behavior was preserved.

Verified By:
OpenAI GPT-5.6 Sol

Verification Evidence:
docs/handoffs/PHASE-02-HANDOFF.md

Closed Date:
UNDEFINED — formal closure pending re-audit PASS

### FIND-010

ID:
FIND-010

Status:
OPEN

Severity:
LOW

Source Audit Finding:
F-10 — Coverage section anchors differ

Phase:
02 — Controlled Reference Migration

Milestone:
M02-05 — Phase 02 Workflow Gate

Finding:
The Menu and Mobile Navigation used different anchors for the future Coverage section.

Evidence:
docs/audits/PHASE-02-AUDIT-RESULT-2026-09-15-R01.md

Impact:
Future Coverage navigation could resolve inconsistently.

Related Test IDs:
NONE

Required Action:
PM must approve one canonical Coverage anchor.

Resolution:
PM approved #cobertura. Menu overlay and Mobile Navigation now use #cobertura, while the observed historical #zonas-de-cobertura reference remains documented as evidence.

Verified By:
OpenAI GPT-5.6 Sol

Verification Evidence:
docs/reference-extraction/MENU-EXTRACTION.md
docs/handoffs/PHASE-02-HANDOFF.md

Closed Date:
UNDEFINED — formal closure pending re-audit PASS

### FIND-011

ID:
FIND-011

Status:
OPEN

Severity:
LOW

Source Audit Finding:
F-11 — Phase 02 remediation history absent from FINDINGS.md

Phase:
02 — Controlled Reference Migration

Milestone:
M02-05 — Phase 02 Workflow Gate

Finding:
Verified Phase 02 audit findings and remediation history had not been recorded in the canonical findings tracker.

Evidence:
docs/audits/PHASE-02-AUDIT-RESULT-2026-09-15-R01.md

Impact:
Repository tracking did not contain the formal Phase 02 discrepancy/remediation history.

Related Test IDs:
NONE

Required Action:
Backfill relevant Phase 02 findings.

Resolution:
This tracker now records the Phase 02 R01 findings F-01 through F-11 and their published remediation/disposition state. Entries remain OPEN until the formal re-audit confirms closure.

Verified By:
OpenAI GPT-5.6 Sol

Verification Evidence:
docs/tracking/FINDINGS.md
docs/handoffs/PHASE-02-HANDOFF.md

Closed Date:
UNDEFINED — formal closure pending re-audit PASS
