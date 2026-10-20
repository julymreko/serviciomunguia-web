# PROJECT ARTIFACT CONVENTIONS

## Status

APPROVED

## Phase Specifications

Location:

docs/phases/

Naming:

PHASE-XX-<slug>.md

Example:

docs/phases/PHASE-01-foundation.md

## Milestone Specifications

Location:

docs/phases/phase-XX/

Naming:

MXX-YY-<slug>.md

Example:

docs/phases/phase-01/M01-01-eleventy-initialization.md

## AI Handoffs

Location:

docs/handoffs/

Naming:

PHASE-XX[-MYY]-HANDOFF.md

Examples:

docs/handoffs/PHASE-01-HANDOFF.md
docs/handoffs/PHASE-01-M01-HANDOFF.md

## Audit Requests

Location:

docs/audits/

Naming:

PHASE-XX[-MYY]-AUDIT-REQUEST.md

Example:

docs/audits/PHASE-01-AUDIT-REQUEST.md

## Audit Results

Location:

docs/audits/

Naming:

PHASE-XX[-MYY]-AUDIT-RESULT-YYYY-MM-DD-RNN.md

Example:

docs/audits/PHASE-01-AUDIT-RESULT-2026-08-12-R01.md


## Audit Result Versioning and Immutability

Each audit execution must create a new result artifact.

Revision format:

RNN

Rules:

- RNN increments for every audit execution on the same scope.
- Issued audit result files are immutable.
- A failed audit result must not be edited after issuance.
- Remediation status must be recorded in the subsequent audit result or relevant phase specification.
- A later PASS may supersede previous FAIL results for closure purposes.
- Previous audit results must remain in the repository and must not be deleted.
When an auditor is explicitly constrained from modifying project files, the coordinating agent or Product Manager must create the immutable audit-result artifact from the auditor response according to docs/PRE-DEPLOYMENT-AUDIT.md.

## Completion Record

Completed work must be recorded in the relevant phase or milestone specification and, when a handoff is required, in the corresponding handoff artifact.

The term "phase history" is not used as a separate project artifact.

## Authority

Approved by:

Julián Cely
Product Manager

## Phase and Milestone Completion Status

The canonical final status for a successfully completed phase or milestone is:

COMPLETED

`COMPLETED` may be assigned only after all applicable acceptance criteria have been verified.


## Reference Extractions

Location: `docs/reference-extraction/`

Naming: `<SECTION>-EXTRACTION.md`

Method: Follow `docs/reference-extraction/REFERENCE-EXTRACTION-WORKFLOW.md` and `docs/reference-extraction/REFERENCE-SECTION-TEMPLATE.md`.

## Product Manager Decision Records

Location: the applicable milestone specification under `docs/phases/phase-XX/MXX-YY-<slug>.md`.

Each decision must identify its decision ID, the Product Manager as approver, the decision date or date range, and related issue/proposal/UNKNOWN identifiers.

Decisions given only in conversations must be recorded in the repository before dependent work starts. A transcribing agent does not become an approver.

## Governance Initiatives

Location: `docs/governance/`

Naming: `GOV-XX-<slug>.md`

Content: initiative definition, authorization status, candidate work items, observations, and deferred investigations.

Stable decisions of a governance initiative are recorded as ADRs in `docs/decisions/`. Decisions not tied to a phase milestone are not recorded in milestone specifications.

## Durable Status Rule

A table or field that represents current authorization, permissions, or ongoing status must state a durable rule and must not depend on transient Git or working-tree state.

Point-in-time facts such as "present in the working tree", "not yet committed", or "not yet pushed" belong in historical or dated narrative records, not in current-status fields or tables.

Historical records must not be the sole source of a standing authorization rule.

## Local AI Coordination Mailbox

Name:

Local AI coordination mailbox

Location:

.coordination/

Tracking:

Git-ignored / local only

Purpose:

Temporary operational exchange of task contracts, specifications, approvals, reports, reviews, decisions and archived task evidence between approved AI agents and the Product Manager.

Canonical structure:

.coordination/
  tasks/<TASK-ID>/
  approvals/<TASK-ID>/
  archive/<TASK-ID>/

Rules:

- temporary operational evidence only;
- not a permanent source of truth;
- must not replace governed repository documentation;
- accepted durable outcomes are transcribed into the appropriate governed repository artifact;
- folder/task IDs are never reused;
- closed tasks are archived by default rather than deleted;
- purge requires a later PM decision.
