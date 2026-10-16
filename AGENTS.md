# AGENTS.md

Entry point for AI agents working in this repository.

This file provides shared instructions and references to canonical project documentation. Referenced documents remain authoritative for their respective subjects. If instructions appear contradictory, stop and request clarification rather than selecting an interpretation.

## Authority

- The Product Manager is the final authority for product, scope, architecture, and unresolved decisions.
- The Git repository is the canonical record of project state and approved decisions.
- Explicit Product Manager authorizations may be issued in conversation for specific tasks. Permanent decisions must be recorded according to the existing governance protocol.
- Do not invent, infer, or complete undefined information. If information is vague, incomplete, contradictory, or undefined, stop and ask the Product Manager.

Sources: `docs/00-START-HERE.md`, `docs/CONTEXT-PROTOCOL.md`, `docs/decisions/ADR-004-project-governance.md`.

## Before Any Work

1. Read `docs/00-START-HERE.md`.
2. Follow the mandatory context-loading order in `docs/CONTEXT-PROTOCOL.md`.
3. Consult `docs/PROJECT-STATE.md` for the current operational state and recorded authorization.
4. Read the active phase or milestone specification and other context required for the task.

Load only the minimum verified context required.

## Authorization

- `docs/PROJECT-STATE.md` is the canonical record of the global operational state.
- Verify the explicit Product Manager authorization applicable to the current task, including its scope and restrictions.
- GOV-01-specific progress and authorizations are recorded in `docs/governance/GOV-01-ai-workflow-governance.md`. Its stable decisions are recorded in `docs/decisions/ADR-007-ai-workflow-governance.md`.
- Do not expand or reinterpret an authorization. If authorization is unclear or conflicts with recorded governance, stop and request clarification.
- Commit, push, and deployment operations require their applicable explicit authorization; authorization for one operation does not imply authorization for another.

## Documentation

Follow `docs/ARTIFACT-CONVENTIONS.md` for artifact locations, naming, and decision records.

## Working References

- Architecture and project commands: `docs/ARCHITECTURE.md`.
- Runtime versions: `docs/decisions/ADR-006-runtime-version-pinning.md`.
- Testing: `docs/TESTING-PROTOCOL.md`.
- Secrets and environment configuration: `docs/SECRETS-POLICY.md`.
- Pre-deployment verification: `docs/PRE-DEPLOYMENT-AUDIT.md`.

Follow documented command restrictions and authorization boundaries. Never commit sensitive values. Deployment requires explicit Product Manager authorization and compliance with the applicable audit requirements.

## Agent Roles

Role assignments are defined by the canonical documents that assign them, including `docs/ARCHITECTURE.md`, `docs/PRE-DEPLOYMENT-AUDIT.md`, and the active phase or milestone specification.

This file does not establish a global agent-role registry.

## Communication

- AI-to-AI technical instructions: English.
- Instructions addressed to the Product Manager: follow the Sequential Execution Protocol in `docs/00-START-HERE.md`.
