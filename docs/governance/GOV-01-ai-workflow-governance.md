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
- GOV-01-004: the three Skills under `.claude/skills/` (`task-preflight`, `task-report`, `decision-transcription`) and the update to this document were committed and published in `6fa14a7`.

GOV-01-004: the Product Manager authorized the creation of three Skills under `.claude/skills/` (`task-preflight`, `task-report`, `decision-transcription`) with the exact contents given in that assignment. Their publication is recorded above.

GOV-01-005: the Product Manager authorized a controlled, read-only validation of the three Skills. Results: see "GOV-01-005 Controlled Validation".

Except GOV-01-006 M2 local implementation (see table and "GOV-01-006 M2 Governance Reconciliation"), no other GOV-01 item has been authorized. Every other item below is NOT AUTHORIZED until the Product Manager authorizes it explicitly.

| Item | Status |
|---|---|
| `AGENTS.md` | Committed and published in `d06a88c` (GOV-01-002) |
| `CLAUDE.md` | Committed and published in `2ff2819` (GOV-01-003) |
| Skills under `.claude/skills/` (`task-preflight`, `task-report`, `decision-transcription`) | Committed and published in `6fa14a7` (GOV-01-004) |
| GOV-01-006 M2 mailbox, local implementation | AUTHORIZED (local implementation). Commit, push/publication, and deploy each require separate explicit Product Manager authorization. |
| Technical permission controls for push and deployment (G-04) | NOT AUTHORIZED, except the GOV-01-G04-001 documentation-only scope authorized in Decision GOV-01-G04-002 |
| Scripts or hooks | NOT AUTHORIZED |
| Codex installation and integration (G-09) | NOT AUTHORIZED |
| Small controlled verification (G-10) | Completed as GOV-01-005 (see below) |
| Priority B pilot (G-10) | NOT AUTHORIZED |
| G-06 research | NOT AUTHORIZED |
| Independent GOV-01 repository (G-11) | NOT AUTHORIZED |

## GOV-01-005 Controlled Validation

Authorization: the Product Manager authorized a controlled, read-only validation of the three Skills. No repository modification was authorized. This validation is not deployment authorization and not blanket authorization for future repository modifications.

Results, as provided by the Product Manager (summary only; complete test reports are not reproduced):

- Claude Code 2.1.301: tests T1-T6 PASS. T1 passed after the Product Manager confirmed slash-menu discovery. `task-preflight` and `task-report` loaded. `decision-transcription` rejected model invocation and accepted explicit `/decision-transcription` invocation. No files changed.
- OpenCode 2.0.26, model DeepSeek V4 Pro (New), Windows / PowerShell: tests O1-O6 PASS. All three Skills were discovered or loaded explicitly. `decision-transcription` was excluded from automatic selection but explicitly loadable by name. No files changed.

Limitations:

- No real decision transcription was performed.
- Dirty-tree and baseline-mismatch scenarios were not executed.
- The individual OpenCode frontmatter fields were not tested in isolation.
- The Priority B pilot (G-10) remains NOT AUTHORIZED.

## GOV-01-006 Published Task-Preflight Verification

Authorization: the Product Manager authorized a read-only verification of the published `task-preflight` Skill, executed in disposable clones, and this local documentation update to this document only. This verification does not authorize GOV-01-006 M2 implementation.

Published Skill change: expected-review-path support for `task-preflight` was published in `2bacf50089fc99b194d2d4ee65767931e31ee53f`. The verification used the Skill text as published in that commit.

Published-text verification (disposable clones, baseline `2bacf50`):

- PUB-U1: undeclared dirty path (mode review, one tracked file modified, no declaration) => STOP. Expected STOP.
- PUB-G1: directory or glob declaration instead of an exact path (mode review, one tracked file modified) => STOP. Expected STOP.
- PUB-N1: exact declared new or untracked path, as printed by `git status --short` (mode review) => READY. Expected READY.
- PUB-C1: clean working tree (matching baseline) => READY. Expected READY.
- Result: 4/4 expected outcomes achieved, PASS.

Methodological limitation: Claude Code applied the published `SKILL.md` rules by reading the written checks and executing them against disposable clones. This was NOT a deterministic per-case runtime invocation of `/task-preflight`.

Repository safety: during the verification the real repository remained unchanged. HEAD = origin/main = `2bacf50089fc99b194d2d4ee65767931e31ee53f`, the working tree was clean, nothing was staged, and there was no commit, no push and no deploy.

Governance consequence: this verification removes the technical blocker for the GOV-01-006 M2 mailbox design. It does not authorize M2 implementation. M2 implementation remains NOT AUTHORIZED. G-04 (technical permission controls for push and deployment) remains a separate item and is NOT AUTHORIZED. No broader GOV-01 authorization is implied.

## GOV-01-006 M2 Governance Reconciliation

Approved design: GOV-01-006 M2 Revision 2 is the approved final mailbox design. The Product Manager is the approver. The decisions below were transcribed from conversation by the executing agent; the transcriber is not an approver.

Approved M2 design decisions:

- Mailbox root: `.coordination/`, Git-ignored and local only.
- Structure: `.coordination/tasks/<TASK-ID>/`, `.coordination/approvals/<TASK-ID>/`, `.coordination/archive/<TASK-ID>/`.
- `.coordination/` holds temporary operational evidence only. It is not the permanent source of truth.
- `approval.md` and `decision.md` are Product Manager-only artifacts.
- Routine approval flow: ChatGPT Work, after explicit Product Manager approval, plus an external-path "Allow once" confirmation.
- Contract approval is bound to the exact contract filename and its SHA-256. Executor and reviewer recompute the approved contract hash and STOP on mismatch.
- Expected review paths are exact repository-relative review inputs under the published `task-preflight` rules. They never authorize implementation writes.
- Task state is derived from mailbox artifacts, not from Git dirty state.
- Default maximum fix rounds: 3, unless the contract specifies fewer.
- Existing reports and reviews are never overwritten; later rounds use the next number.
- Closed tasks are archived by default. Purge requires a later Product Manager decision.
- Commit, push and deploy remain separate Product Manager authorization gates.
- G-08 role separation remains unchanged.

Prerequisites:

- `task-preflight` expected-review-path support is published in `2bacf50089fc99b194d2d4ee65767931e31ee53f`.
- Published-text verification is recorded in `f7cc373fc61407878d4be6fd4437a6bc65b8fd40` (section "GOV-01-006 Published Task-Preflight Verification"). This is a historical commit reference, not the current HEAD.

Local implementation authorization: the Product Manager authorized local M2 implementation limited to `.gitignore`, `AGENTS.md`, `docs/ARTIFACT-CONVENTIONS.md` and `docs/templates/TASK-CONTRACT-TEMPLATE.md`. For this local scope only, this section supersedes the statement "M2 implementation remains NOT AUTHORIZED" in the preceding section. That earlier statement is preserved as historical record.

Existing worktree audit (read-only): the uncommitted M2 implementation was reviewed and classified against M2 Revision 2:

- `.gitignore`: MATCH
- `AGENTS.md`: MATCH
- `docs/ARTIFACT-CONVENTIONS.md`: MATCH
- `docs/templates/TASK-CONTRACT-TEMPLATE.md`: MATCH
- Overall conclusion: KEEP AS-IS. No missing requirements. No extra or unapproved content changes.

Point-in-time state (historical): at reconciliation time, the authorized local M2 implementation was present in the working tree and had not yet been committed or published.

Standing authorization boundary:

- Local M2 implementation: authorized.
- Commit requires separate Product Manager authorization.
- Push/publication requires separate Product Manager authorization.
- Deploy requires separate Product Manager authorization and is NOT AUTHORIZED.
- G-04 (technical permission controls for push and deployment) remains separate and NOT AUTHORIZED.
- No broader GOV-01 authorization is implied.

## GOV-01-G04 Decisions

Approver: Julián Cely, Product Manager. Transcribed from the Product Manager's `/decision-transcription` assignment in conversation; the transcriber is not an approver. Decision date: NOT RECORDED.

### GOV-01-G04-POLICY-1 (APPROVED)

Related: G-04; GOV-01-006 M2.

Authorization for any task handed to an agent must be materialized as contract-rN.md + approval.md inside .coordination/ before execution, effective from this decision forward. It does not apply retroactively: authorizations already given in conversation and already acted upon and recorded in the repository (including the GOV-01-006 M2 local implementation, commit, and push at 542d03f) remain valid and are not reopened by this decision.

### GOV-01-G04-002 (APPROVED)

Related: GOV-01-G04-001; G-04. Note: GOV-01-G04-001 is defined by this decision; no prior record of it exists in the repository.

GOV-01-G04-001 is the task of documenting, in AGENTS.md and docs/SECRETS-POLICY.md, that agent process environments must never contain a push-capable Git credential or a deploy-capable Cloudflare credential, and that push/deploy readiness is reported (not authorized) via the existing task-report "Open for the Product Manager" field. The documentation-only scope of GOV-01-G04-001 is authorized. This does not authorize any script, hook, or credential-provisioning mechanism, which remains NOT AUTHORIZED under G-04.

### GOV-01-G04-003 (APPROVED)

Related: G-04; docs/governance/GOV-01-G04-DESIGN-DRAFT.md.

The GOV-01 G-04 design proposal (Revision 2) is recorded as a draft at docs/governance/GOV-01-G04-DESIGN-DRAFT.md, status DRAFT, not an approved architecture, for citation as a task input only. The file is currently untracked; it is to be committed together with the GOV-01-G04-001 implementation, under that task's own commit authorization, not as a separate commit.

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

Assignment `/decision-transcription` (conversation) directed the transcription of GOV-01-G04-POLICY-1, GOV-01-G04-002 and GOV-01-G04-003 into this document. The transcriber acted as transcriber only and did not approve, interpret, extend, correct, or reopen any decision. See "GOV-01-G04 Decisions".
