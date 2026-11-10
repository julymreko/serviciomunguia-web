# BUGS

## Purpose

Record verified defects found during implementation, migration, testing, or audit.

## Allowed Status Values

- OPEN
- IN_PROGRESS
- BLOCKED
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
BUG-000

Status:
OPEN

Severity:
UNDEFINED

Phase:
UNDEFINED

Milestone:
UNDEFINED

Summary:
UNDEFINED

Expected Behavior:
UNDEFINED

Actual Behavior:
UNDEFINED

Evidence:
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

## Current Bugs

### BUG-001

ID:
BUG-001

Status:
CLOSED

Severity:
HIGH (reason: a variable whose name denotes a deploy-capable Cloudflare credential is non-empty in the agent process environment, which G-04 of AGENTS.md forbids; the capability was not tested and no Cloudflare call was made)

Phase:
03 — Como trabajamos

Milestone:
M03-05 — Independent testing, task 1 (M03-05-01)

Summary:
The environment of the agent process holds the variable CLOUDFLARE_API_TOKEN, non-empty.

Expected Behavior:
No deploy-capable Cloudflare credential in the agent process environment (AGENTS.md, G-04; docs/SECRETS-POLICY.md).

Actual Behavior:
The variable exists and is non-empty. Only its name and its non-empty status were recorded; its value was not read or printed, and it was not tested.

Evidence:
docs/phases/phase-03/tests/M03-05-01-build-seo-security.md, section 5, SEC-02 (environment names, non-empty status only).

Related Test IDs:
SEC-02

Required Action:
Product Manager decision on removing the variable from the agent environment. No change was made in this repository.

Resolution:
False positive of SEC-02 (2026-11-09). The value of CLOUDFLARE_API_TOKEN in the agent environment is the non-credential sentinel g04-agent-no-deploy, defined on purpose by the G-04 isolation (Decision GOV-01-G04-005). The Product Manager confirmed the exact value in Claude Code with a comparison that printed only SENTINEL. No deploy-capable credential is present. The test checked only non-empty status and did not distinguish the sentinel.

Verified By:
Claude Code (executor), test SEC-02. Reviewer (Codex) pending.

Verification Evidence:
docs/phases/phase-03/tests/M03-05-01-build-seo-security.md, SEC-02.

Closed Date:
2026-11-09
