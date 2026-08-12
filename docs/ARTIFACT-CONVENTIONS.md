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

## Completion Record

Completed work must be recorded in the relevant phase or milestone specification and, when a handoff is required, in the corresponding handoff artifact.

The term "phase history" is not used as a separate project artifact.

## Authority

Approved by:

Julián Cely
Product Manager
