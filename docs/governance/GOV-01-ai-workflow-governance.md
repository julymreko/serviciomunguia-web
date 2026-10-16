# GOV-01 - AI Workflow Governance

## Identification

Initiative:
GOV-01

Status:
IN PROGRESS

Owner:
Julián Cely

Executing Agent:
Claude Code (documentation only, assignment GOV-01-001)

Recorded on:
2026-10-16

Decision record:
docs/decisions/ADR-007-ai-workflow-governance.md

## Objective

Prepare the repository governance for GOV-01 by reconciling outdated project-state information and permanently recording the Product Manager's approved decisions G-01 through G-12.

The goal is to establish a reliable, minimal foundation before creating `AGENTS.md`, `CLAUDE.md`, project Skills, or installing Codex.

## Authority Boundaries

- `docs/PROJECT-STATE.md` owns the global current operational state (current phase, working item, next item, project-wide authorization). It records only that GOV-01 exists as a parallel initiative and does not copy GOV-01 progress.
- This document owns GOV-01-specific progress and authorization details.
- `docs/decisions/ADR-007-ai-workflow-governance.md` owns the stable approved decisions. They are not restated here.
- Commit and publication evidence is determined from Git. This document records no SHA as the current HEAD.
- If an outcome of GOV-01 changes the global operating rules, that change takes effect in `docs/PROJECT-STATE.md` only after it is authorized by the Product Manager. This document then holds the GOV-01 detail.

## Authorization Status

Completed work, recorded as historical evidence only (current HEAD is determined from Git):

- GOV-01-001: governance documentation was committed and published in `9a9e85c`.
- GOV-01-002: root `AGENTS.md` was committed and published in `d06a88c`.
- GOV-01-003: root `CLAUDE.md` was committed and published in `2ff2819`, and Claude Code successfully loaded its `@AGENTS.md` import.

GOV-01-004: the Product Manager authorized the local creation of three Skills under `.claude/skills/` (`task-preflight`, `task-report`, `decision-transcription`) with the exact contents given in that assignment. Commit, push and deployment are NOT AUTHORIZED by this grant.

No other GOV-01 item has been authorized. Every other item below is NOT AUTHORIZED until the Product Manager authorizes it explicitly.

| Item | Status |
|---|---|
| `AGENTS.md` | Committed and published in `d06a88c` (GOV-01-002) |
| `CLAUDE.md` | Committed and published in `2ff2819` (GOV-01-003) |
| Skills under `.claude/skills/` (`task-preflight`, `task-report`, `decision-transcription`) | Local creation authorized (GOV-01-004). Commit, push and deployment NOT AUTHORIZED |
| Technical permission controls for push and deployment (G-04) | NOT AUTHORIZED |
| Scripts or hooks | NOT AUTHORIZED |
| Codex installation and integration (G-09) | NOT AUTHORIZED |
| Small controlled verification and Priority B pilot (G-10) | NOT AUTHORIZED |
| G-06 research | NOT AUTHORIZED |
| Independent GOV-01 repository (G-11) | NOT AUTHORIZED |

## Candidate Work Items

The items in Authorization Status are candidate work items. The approved decisions state only these ordering constraints:

- GOV-01-001 reconciliation comes first (G-12).
- Small controlled verification comes before the Priority B pilot (G-10).
- Codex is introduced later (G-09).

No other ordering is approved. The Product Manager sets it.

## GOV-01-001 Product Manager Resolutions

Transcribed from the Product Manager's GOV-01-001 assignments. No approval dates are recorded.

- Q1 = A: Two separate artifacts: ADR-007 for stable decisions and this document for initiative tracking. Only the necessary convention is added to `docs/ARTIFACT-CONVENTIONS.md`.
- Q2 = B: The actual document registration date is used as `Recorded on`. Individual `Approved on` dates are included only when independently verified. Approval dates are never invented.
- Q3 = A: Narrowly scoped stale statements are corrected in PROJECT-STATE and in the two identified Phase 03 documents.
- Q4 = A: `docs/handoffs/PHASE-03-M03-HANDOFF.md` is preserved unchanged as a historical snapshot. (The assignment text cited this file as `docs/phases/PHASE-03-M03-HANDOFF.md`; the actual repository path is `docs/handoffs/PHASE-03-M03-HANDOFF.md`, per docs/ARTIFACT-CONVENTIONS.md.)
- Q5 = A: Examination and configuration of `.remember/` and `.playwright-mcp/` are deferred.
- Q6 = B: `docs/tracking/BACKLOG.md` is not modified.
- Derived principles = Option B: the seven derived principles and the detailed reconciliation mechanism remain in this document as PROPOSED, NOT APPROVED. They are not accepted rules in ADR-007 and not binding requirements in `docs/ARTIFACT-CONVENTIONS.md`.

## Approved Observations and Deferred Investigations

- G-06 research: existing GitHub solutions for reverse engineering and reference extraction; assessment of architecture, design rules, interactions, SEO, responsive behavior and accessibility; and functional, visual, responsive, performance, accessibility and regression testing. Research first; do not invent a replacement for established methods. Text: ADR-007.
- G-11 repository: GOV-01 should eventually become an independent, reusable, versioned template repository. Creation is not authorized. Text: ADR-007.
- G-12 mechanism: a preventive reconciliation mechanism is required. Proposed design below. Text: ADR-007.
- Q5: `.remember/` and `.playwright-mcp/` examination and configuration are deferred.

## Proposed Derived Principles (PROPOSED, NOT APPROVED)

The Product Manager's requirement, as stated in the GOV-01-001 assignment, is that the documentation must address the root cause of recurring governance inconsistencies, minimize ongoing documentation maintenance, and avoid unnecessary reporting requirements.

The principles below are a structured derivation of that requirement. They are not verbatim Product Manager text. By Product Manager decision (Option B) they remain here as PROPOSED, NOT APPROVED.

1. One authoritative location for each mutable fact.
2. Avoid duplicating current milestone or publication statuses in historical specifications and ADRs.
3. Git is authoritative for commit and publication evidence.
4. PROJECT-STATE.md is authoritative for the current operational state, subject to the existing context protocol.
5. Historical documents preserve the state at their original point in time.
6. A task is not reported as fully reconciled until any material documentation discrepancies are identified and classified.
7. Do not create an endless commit cycle by treating a recorded historical SHA as the current HEAD.

## Proposed Reconciliation Mechanism (PROPOSED, NOT APPROVED)

This section proposes an implementation of decision G-12 and of the proposed principles above. It is not a decision. It requires explicit Product Manager approval before any use. No scripts or hooks are created.

**Before work.** Check branch, upstream, `HEAD` against `origin/main` after fetch, and working-tree state. Check that every SHA cited in `PROJECT-STATE.md` or the active milestone is an ancestor of `HEAD` (`git merge-base --is-ancestor`). Check that `PROJECT-STATE.md` and the active specification agree on status and authorization. Check that no wording says "local only" or "pending publication" for a commit already on `origin/main`.

**At task completion.** State the actual Git state. State that no material documentation discrepancy was found, or list each one with its classification. No other reporting is required.

**After authorized publication.** Confirm local and remote refs match and the working tree is clean. Repeat the wording check. Record the pushed range in the task report only, not in a tracked file.

**Classification.** (A) evidence only: report it, no tracked change. (B) stale wording: propose the exact edit; PM authorization is required before applying it. (C) genuine contradiction: stop and escalate to the Product Manager.

## Transcription Record

Assignment GOV-01-001 directed Claude Code to transcribe G-01 to G-12 and the associated Product Manager requirements. Claude Code acted as transcriber only and did not approve, interpret, extend, correct, or reopen any decision.
