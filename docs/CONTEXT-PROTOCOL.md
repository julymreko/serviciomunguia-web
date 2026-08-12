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

## Authority

Approved by:

Julián Cely
Product Manager

## Phase-State Authority

The relevant phase specification is the authoritative source for current phase status, blocker status, remediation status, and pending items.

Handoffs are transition artifacts. While a phase is still open, a handoff may temporarily reflect an earlier verified snapshot and must not override the current phase specification.

Before a handoff becomes READY, it must be synchronized with the authoritative phase specification.

If a handoff and phase specification disagree about current phase state, the phase specification takes precedence.
