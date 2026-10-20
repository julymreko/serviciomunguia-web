# Contract <TASK-ID> r<N>

Task ID:

Mode:
<!-- read-only | implement | research | review -->

Executor:

Reviewer:

Baseline:
<!-- Full commit SHA -->

Objective:

Inputs:
<!-- Repository paths or other approved inputs. Reference authoritative files; do not duplicate them unnecessarily. -->

Allowed paths:
<!-- Exact repository paths the executor may modify. Use `none` when no repository write is allowed. -->

Expected review paths:
<!-- Review mode only. Exact repository-relative paths written exactly as `git status --short` prints them. No directories, globs, wildcards, recursive patterns, inferred paths or partial matches. Use `none` when not applicable. -->

Requested operations:
<!-- read | edit | commit. Push and deploy are never granted by this contract. -->

Deliverables:
<!-- Exact report and review paths under `.coordination/`. -->

Acceptance criteria:

Stop conditions:

Max fix rounds:
<!-- Default: 3. A contract may specify fewer. -->

## Authorization Rule

This contract requests operations but does not authorize them.

Execution requires the matching:

`.coordination/approvals/<TASK-ID>/approval.md`

The approval must identify this exact contract filename and its SHA-256.

The executor and reviewer must recompute the contract SHA-256 and STOP if it does not match the approved value.

Commit, push and deployment require separate explicit Product Manager authorization.

## Review Rule

Expected review paths are review inputs only.

They do not authorize implementation writes.

The current published `task-preflight` rules determine whether working-tree paths qualify as declared expected review paths.

## Reporting Rule

Execution reports use:

`report-NN.md`

Reviews use:

`review-NN.md`

Existing reports and reviews are never overwritten.

The default maximum is three fix rounds unless this contract specifies fewer.
