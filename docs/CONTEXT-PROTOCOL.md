# CONTEXT AND TOKEN EFFICIENCY PROTOCOL

## Purpose

Minimize context duplication and token consumption while preserving correctness, traceability, and continuity between AI agents.

## Core Principle

The repository is project memory.

Agents must read only the minimum verified context required to execute the assigned scope correctly.

## Mandatory Context Order

Before executing work, an agent must read:

1. docs/00-START-HERE.md
2. docs/PROJECT-STATE.md
3. docs/ARTIFACT-CONVENTIONS.md
4. The active phase or milestone specification
5. The latest relevant handoff
6. Relevant ADR files
7. Relevant component specifications
8. Relevant bugs and findings

Artifact locations and naming conventions are defined in docs/ARTIFACT-CONVENTIONS.md.

Additional files must be read only when required by the assigned task.

## Context Isolation

Agents must not load unrelated project areas.

Example:

An agent modifying Coverage should not read Contact, Testimonials, D1 implementation, or ZeptoMail documentation unless the assigned task depends on them.

## Conversation Rule

Previous AI conversations are not required context unless their approved outcome has not yet been recorded in the repository.

If required information exists only in conversation history, execution must stop until that information is verified and recorded in the repository.

## Handoff Rule

Every completed phase or milestone that changes execution context must produce a handoff.

The handoff must contain only information required by the next agent:

- Completed work
- Verified results
- Files changed
- Approved decisions
- Open questions
- Pending items
- Findings
- Bugs
- Required next action
- Git reference

## Duplication Rule

Do not duplicate complete specifications inside prompts or handoffs when the authoritative file can be referenced directly.

Reference repository paths instead.

## Prompting Rule

AI-to-AI prompts must:

- Use technical English
- Define exact scope
- Identify required input files
- Identify files allowed to change
- Define expected deliverables
- Define acceptance criteria
- Define stop conditions
- Avoid repeating repository context that can be read directly

## Stop Condition

If required context is missing, contradictory, stale, or undefined, the agent must stop and request clarification.

The agent must not compensate by inference.

## Token Economy

Agents must avoid:

- Repeating known project history
- Restating entire architecture documents
- Loading unrelated files
- Generating speculative alternatives
- Explaining completed work unless required by the handoff
- Producing verbose summaries when file references are sufficient

## Context Freshness

PROJECT-STATE.md must represent the current verified project state.

Handoffs must reference the last validated Git commit when available.

An agent must not rely on a stale handoff when a newer validated repository state exists.


## Phase Closure State Synchronization

Before a phase closure commit may be created, the coordinating agent must verify that all authoritative state artifacts represent the same verified closure state.

At minimum, the following must be synchronized and explicitly verified:

- The active phase specification status is COMPLETED.
- The active phase specification final status is COMPLETED.
- docs/PROJECT-STATE.md no longer identifies the completed phase as IN PROGRESS.
- docs/PROJECT-STATE.md Current Working Item is cleared.
- docs/PROJECT-STATE.md Next Item reflects only a Product Manager-approved next phase or remains explicitly UNDEFINED.
- The closing handoff is READY when required.
- The formal audit result is PASS when the phase requires an audit gate.

A phase closure commit must not be created while any of these artifacts contradict each other.

The final pre-commit verification must inspect the actual values in every affected authoritative state artifact.

Successful individual edits must not be treated as evidence that the complete closure state is synchronized.

## Canonical Status Rule

Each phase or milestone specification must contain exactly one canonical status field.

The canonical status field is:

Status:

under the `## Identification` section.

No secondary field such as `Final Status`, `Closure Status`, or equivalent may independently represent the current phase or milestone state.

Closure and completion sections may define the conditions required to change `Status` to `COMPLETED`, but must not duplicate the current status value.

Before a phase or milestone is declared closed, the executing agent must verify that the canonical `Status` is synchronized with:

- docs/PROJECT-STATE.md, when applicable;
- the relevant handoff;
- audit status and audit references;
- pending items;
- Git references.

Any contradiction or stale state is a STOP condition until synchronized.

## Authority

Approved by:

Julián Cely
Product Manager

## Phase-State Authority

The relevant phase specification is the authoritative source for current phase status, blocker status, remediation status, and pending items.

Handoffs are transition artifacts. While a phase is still open, a handoff may temporarily reflect an earlier verified snapshot and must not override the current phase specification.

Before a handoff becomes READY, it must be synchronized with the authoritative phase specification.

If a handoff and phase specification disagree about current phase state, the phase specification takes precedence.
