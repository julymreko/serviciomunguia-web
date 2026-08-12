# PRE-DEPLOYMENT AUDIT PROTOCOL

## Purpose

Define the mandatory audit gate before any deployment is treated as approved.

## Designated Auditor

Claude Code

## Audit Trigger

A formal audit is mandatory before closing any phase or milestone designated as an audit gate, even when no deployment occurs.

A pre-deployment audit is required before deploying a milestone, release candidate, or material change to a shared staging or production environment.

## Required Inputs

The auditor must receive:

- docs/00-START-HERE.md
- docs/PROJECT-STATE.md
- docs/ARTIFACT-CONVENTIONS.md
- Relevant ADR files
- Relevant phase or milestone specification
- Relevant AI handoff
- Relevant component specifications
- Git diff or commit range under review
- Current bug and findings records

If any required input is missing, the audit must stop.

## Audit Scope

The auditor must verify only the approved scope and must not redefine product decisions.

The audit must check, when applicable:

- Compliance with approved architecture
- Acceptance criteria
- Functional regressions
- Security issues
- Secret exposure
- Invalid assumptions
- Undefined behavior
- SEO constraints
- Accessibility regressions
- Performance risks
- Build integrity
- Test results
- Unresolved bugs that block deployment

## Audit Output

The audit result must be one of:

PASS

or

FAIL

If FAIL, the auditor must identify each blocking issue using concise, actionable findings.

## Deployment Rule

No deployment may be treated as approved unless the required audit result is PASS.

A FAIL result blocks deployment until the identified blocking issues are resolved and the audit is repeated.

## Decision Boundary

Claude Code audits implementation quality and compliance.

Claude Code does not approve undefined product, scope, or architecture decisions.

Undefined decisions must be escalated to Julián Cely.

## Evidence Rule

Audit conclusions must be based on repository state, executed checks, verified outputs, or other explicit evidence.

No audit conclusion may be based on assumption.


### Pre-Commit Governance Bootstrap Exception

A governance audit that occurs before the repository's first commit may use the uncommitted working tree as its Git reference.

This exception is permitted only when all of the following are true:

- The repository has zero commits.
- The audit is a governance or source-of-truth audit required before the initial baseline commit.
- The audit record identifies the branch, configured remote, and uncommitted working tree state.
- The auditor verifies the actual working tree being reviewed.
- After the first baseline commit exists, this exception no longer applies.

For an audit using this exception, "uncommitted working tree" satisfies any requirement for a Git diff, commit, commit range, or Git reference under this protocol.


### Post-Baseline Working-Tree Diff Reference

After the initial baseline commit exists, an audit of uncommitted changes may use:

Working-tree diff against validated commit: <commit-hash>

This is a permitted Git reference only when all of the following are true:

- The validated base commit is identified explicitly.
- The auditor verifies the current branch and working tree.
- The diff from that commit to the working tree is the exact audit scope.


### No-Write Audit Result Recording

When an auditor is explicitly operating under a no-write constraint:

- The auditor returns the complete audit result in its response.
- The coordinating agent or Product Manager records that response as the next immutable audit-result artifact.
- The recorded artifact must preserve the auditor's PASS/FAIL decision, blockers, evidence, and required corrections without changing their meaning.
- The auditor must not modify project files merely to satisfy the audit-result artifact requirement.

Recording the result after the auditor response satisfies the audit-result artifact requirement.

## Audit Record

Audit record location and naming must follow docs/ARTIFACT-CONVENTIONS.md.

Each completed audit must record:

- Phase
- Milestone
- Commit, commit range, permitted pre-commit governance working-tree reference, or permitted post-baseline working-tree diff reference
- Audit result
- Blocking issues, if any
- Auditor
- Date
