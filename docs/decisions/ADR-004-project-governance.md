# ADR-004 — Project Governance and Source of Truth

Status: ACCEPTED

## Decision

The Git repository is the authoritative source of truth for the project.

AI conversations, chat history, temporary agent context, Slack messages, and undocumented verbal decisions are not authoritative project state.

A decision becomes authoritative only after it is approved by Julián Cely and recorded in the repository.

## Product Authority

Product Manager:

Julián Cely

The Product Manager is the final authority for:

- Product decisions
- Scope
- Architecture
- Undefined requirements
- Conflicting requirements
- Approval of material changes

No AI agent may replace or infer Product Manager decisions.

## Mandatory AI Rules

### Technical Language

All AI-to-AI instructions must be written in technical English.

### Truth Requirement

No agent may:

- Invent information
- Hallucinate facts
- Fill undefined gaps
- Present assumptions as facts
- Make unauthorized decisions

If required information is vague, incomplete, contradictory, or undefined, execution must stop and clarification must be requested from Julián Cely.

### Token Economy

Every word must serve the task.

Agents must avoid:

- Decorative explanation
- Redundant context
- Unrequested alternatives
- Speculative implementation
- Repetition of known information

Additional detail is provided when Julián Cely requests it or when required for safe execution.

## Sequential Human Execution Protocol

Instructions requiring action by Julián Cely must be atomic and sequential.

Each instruction must contain exactly:

- Action
- Location
- Expected Result

After issuing the instruction, the agent must stop and wait for verification.

No unverified success may propagate to a subsequent step.

If the actual result differs from the expected result, execution must stop and the discrepancy must be resolved before continuing.

## Agent Continuity Principle

Agent memory is not project memory.

Context required by a subsequent AI agent must be available through repository documentation, code, version history, phase artifacts, handoffs, findings, bugs, or other approved repository records.

## Authority

Approved by:

Julián Cely
Product Manager
