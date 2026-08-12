# TESTING AND EVIDENCE PROTOCOL

## Purpose

Define how project work must be verified, what evidence is required, and how failures must be reported.

## Core Rule

A test is not PASS because an agent believes the implementation is correct.

PASS requires an observable result that matches the defined expected result.

## Test Definition

Every test must define:

- Test ID
- Scope
- Environment
- Preconditions
- Action
- Expected Result
- Actual Result
- Status
- Evidence
- Related Bug ID when failed

## Allowed Status Values

- NOT RUN
- PASS
- FAIL
- BLOCKED

## Minimum Test Areas

When applicable, implementation must be evaluated for:

### Build

Verify that the project builds successfully.

Expected result:
Build completes without unexpected errors.

### Functional Behavior

Verify implemented behavior against approved acceptance criteria.

Expected result:
Observed behavior matches the specification.

### Responsive Behavior

Verify approved viewport classes and orientations.

Expected result:
No unintended overflow, clipping, overlap, broken layout, or approved responsive regression.

Exact viewport requirements must come from the relevant specification and must not be invented.

### SEO

Verify SEO requirements defined by architecture and relevant specifications.

Expected result:
SEO-critical content exists in generated HTML and approved metadata, semantic structure, links, directives, and structured data are correct when applicable.

### Accessibility

Verify applicable semantic, keyboard, labeling, focus, and accessibility requirements.

Expected result:
No verified blocking accessibility defect remains unresolved.

### Performance

Verify applicable performance requirements.

Expected result:
Measured results satisfy explicitly approved thresholds.

If no threshold has been approved, the result must be reported without inventing a pass threshold.

### Security

Verify applicable input validation, secret handling, privileged operations, and API boundaries.

Expected result:
No verified security blocker remains unresolved.

### Integrations

Verify applicable external and Cloudflare integrations.

Expected result:
Observed behavior matches the approved integration specification and failure conditions are handled as defined.

### Regression

Verify previously approved behavior affected by the change.

Expected result:
Previously verified functionality remains operational.

## Evidence Requirements

Evidence must be sufficient to reproduce or verify the conclusion.

Valid evidence may include:

- Terminal output
- Build output
- Test runner output
- Browser observation
- Screenshots
- Network responses
- HTTP status codes
- Generated HTML inspection
- Database query results
- Logs
- Git diff
- Other reproducible technical evidence

An unsupported statement is not evidence.

## Failure Reporting

A failed test must record:

- Test ID
- Expected Result
- Actual Result
- Evidence
- Impact
- Related BUG ID

A verified defect must be added to:

docs/tracking/BUGS.md

Execution must stop when the failure blocks the current acceptance criteria or creates an unsafe dependency for subsequent work.

## Blocked Tests

A test is BLOCKED when it cannot be executed because a required dependency, environment, decision, credential, input, or implementation does not exist.

A blocked test must identify the blocker.

BLOCKED must not be reported as PASS.

## Test Responsibility

The implementing agent is responsible for executing applicable implementation-level tests.

QA or reviewing agents may execute independent verification.

Claude Code performs the required pre-deployment audit according to:

docs/PRE-DEPLOYMENT-AUDIT.md

The pre-deployment auditor verifies evidence and compliance but does not replace required implementation testing.

## Test Record Template

Test ID:
UNDEFINED

Scope:
UNDEFINED

Environment:
UNDEFINED

Preconditions:
UNDEFINED

Action:
UNDEFINED

Expected Result:
UNDEFINED

Actual Result:
UNDEFINED

Status:
NOT RUN

Evidence:
UNDEFINED

Related Bug:
NONE

## Acceptance Rule

A phase or milestone must not be marked complete while required tests are:

- FAIL
- BLOCKED
- NOT RUN

unless Julián Cely explicitly approves an exception and the exception is recorded in the repository.

## Authority

Approved by:

Julián Cely
Product Manager
