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

Except GOV-01-006 M2 local implementation (see table and "GOV-01-006 M2 Governance Reconciliation"), the G-04 scopes recorded in "GOV-01-G04 Decisions", the G-09 scope recorded in "GOV-01-G09 Decisions" and the G-10 pilot scope recorded in "GOV-01-G10 Decisions", no other GOV-01 item has been authorized. Every other item below is NOT AUTHORIZED until the Product Manager authorizes it explicitly.

| Item | Status |
|---|---|
| `AGENTS.md` | Committed and published in `d06a88c` (GOV-01-002) |
| `CLAUDE.md` | Committed and published in `2ff2819` (GOV-01-003) |
| Skills under `.claude/skills/` (`task-preflight`, `task-report`, `decision-transcription`) | Committed and published in `6fa14a7` (GOV-01-004) |
| GOV-01-006 M2 mailbox, local implementation | AUTHORIZED (local implementation). Commit, push/publication, and deploy each require separate explicit Product Manager authorization. |
| Technical permission controls for push and deployment (G-04) | Environment-level isolation AUTHORIZED and implemented by the Product Manager outside the repository (Decision GOV-01-G04-005). Documentation scopes authorized in Decisions GOV-01-G04-002, GOV-01-G04-005 and GOV-01-G04-006. Separate Windows user account for agents evaluated and not adopted; the residual gap is accepted (Decision GOV-01-G04-006). |
| Scripts or hooks | NOT AUTHORIZED |
| Codex installation and integration (G-09) | AUTHORIZED and implemented by the Product Manager outside the repository (Decision GOV-01-G09-003). Documentation scope authorized in Decision GOV-01-G09-003. |
| Small controlled verification (G-10) | Completed as GOV-01-005 (see below) |
| Priority B pilot (G-10) | Completed through the approved Priority B technical specification (Decision GOV-01-G10-006). Priority B implementation was authorized in stages by the Product Manager on 2026-10-27 (PD-31 in M03-04); that authorization is a Phase 03 decision, outside GOV-01. |
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

### GOV-01-G04-005 (APPROVED)

Related: G-04; GOV-01-G04-002; GOV-01-G04-004; docs/governance/GOV-01-G04-DESIGN-DRAFT.md. Decision date: 2026-10-20.

G-04 environment-level isolation is authorized and was implemented personally by the Product Manager on 2026-10-20, on the Product Manager's own Windows machine, outside the repository. Shell functions `claude` and `opencode` in the Product Manager's `~/.bashrc` (Git Bash, loaded by `~/.bash_profile`) launch each agent with `GIT_ASKPASS=false`, `SSH_ASKPASS=false`, `GIT_TERMINAL_PROMPT=0`, `GCM_INTERACTIVE=never`, `credential.helper` reset to empty through `GIT_CONFIG_COUNT=1`, `GIT_CONFIG_KEY_0=credential.helper` and an empty `GIT_CONFIG_VALUE_0`, and `CLOUDFLARE_API_TOKEN=g04-agent-no-deploy`, a non-credential sentinel. Agents are launched only through these functions; OpenCode is launched from Git Bash, not from WARP.

Verified on 2026-10-20. Inside Claude Code launched through its function, the isolation variables were present and `git push --dry-run` failed authentication (exit 128); this check ran before `GIT_ASKPASS=false` and `SSH_ASKPASS=false` were added. Inside OpenCode launched through its function, all eight isolation variables were present, `git push --dry-run` failed authentication (exit 128), and `npx wrangler whoami` failed authentication without opening a browser (exit 1). In the Product Manager's own shell, `git push --dry-run` succeeded.

Accepted residual gaps: (1) the isolation applies only to agents launched through these functions; (2) the Product Manager's GitHub credential remains in Windows Credential Manager under the same Windows user, so a deliberate bypass such as `git -c credential.helper=manager push` remains possible; (3) whether the sentinel `CLOUDFLARE_API_TOKEN` takes precedence over a stored `wrangler login` session is untested. Running agents under a separate Windows user account is pending evaluation and NOT AUTHORIZED.

GOV-01-G04-004 is the documentation-only task that transcribes this decision, updates the G-04 status in this document, and amends docs/governance/GOV-01-G04-DESIGN-DRAFT.md to record the verified mechanism. Its scope is authorized. Earlier G-04 status statements in the "GOV-01-006 Published Task-Preflight Verification" and "GOV-01-006 M2 Governance Reconciliation" sections are historical records of their own time and are not edited.

### GOV-01-G04-006 (APPROVED)

Related: G-04; GOV-01-G04-005; GOV-01-G10-005. Decision date: 2026-10-26.

The Product Manager evaluated the item that Decision GOV-01-G04-005 left pending, running agents under a separate Windows user account, and chose to accept the residual gap (option C). Running agents under a separate Windows user account is not adopted, and pushing through an SSH key protected by a passphrase was also evaluated and not adopted. The accepted residual gap is item (2) of Decision GOV-01-G04-005: the Product Manager's GitHub credential remains in Windows Credential Manager under the same Windows user, so a deliberate bypass such as `git -c credential.helper=manager push` remains possible. Items (1) and (3) of Decision GOV-01-G04-005 are unchanged. The statement "pending evaluation" in Decision GOV-01-G04-005 is a historical record of its own time and is not edited.

GOV-01-G10-005 is the documentation-only task that records this decision and Decision GOV-01-G10-006. Its scope is authorized.

## GOV-01-G09 Decisions

Approver: Julián Cely, Product Manager. Transcribed under task GOV-01-G09-002; the transcriber is not an approver.

### GOV-01-G09-003 (APPROVED)

Related: G-09; G-08; G-04; GOV-01-G04-005; GOV-01-G09-001; GOV-01-G09-002; docs/decisions/ADR-007-ai-workflow-governance.md. Decision date: 2026-10-21.

G-09 is amended. Codex is a working agent with the same standing as Claude Code and OpenCode: it may be assigned, per task, as executor or reviewer, for implementation, testing, design, planning, discovery or extraction work. All agents may read and edit files in the Product Manager's local working copy; push and deployment remain excluded for every agent under G-04. Under G-08, roles are assigned per task and an executor never reviews its own work. The G-09 line in docs/decisions/ADR-007-ai-workflow-governance.md is rewritten at the Product Manager's direction; its previous wording was "Introduce Codex later as an independent read-only reviewer". The ordering constraint "Codex is introduced later (G-09)" is fulfilled by this decision.

Implemented by the Product Manager on 2026-10-20 and 2026-10-21, outside the repository. Codex CLI (npm `@openai/codex`, codex-cli 0.163.0, signed in with ChatGPT) is launched only through a `codex` shell function in the Product Manager's `~/.bashrc`, with the same G-04 isolation variables as the other agents and with `-c sandbox_workspace_write.network_access=true`. Codex runs its commands in PowerShell, preferring PowerShell 7; PowerShell 7 is installed with the MSI installer at `C:\Program Files\PowerShell\7\pwsh.exe`. Under Windows PowerShell 5.1, Codex wrote UTF-8 text double-encoded with a BOM (task GOV-01-G09-001, reports 01 to 03).

Verified in task GOV-01-G09-001, report-04.md, on 2026-10-21: commands ran in PowerShell 7.6.7; UTF-8 text was written correctly and without a BOM; the isolation variables were present; `npx wrangler whoami` reached Cloudflare and failed authentication with the sentinel token.

Accepted limitation: Codex's Windows sandbox (elevated mode) runs commands as a separate Windows sandbox user, and Git HTTPS connections from that user fail before authentication (schannel `SEC_E_NO_CREDENTIALS`). Codex therefore cannot fetch, pull or push; the Product Manager performs Git network operations. A push attempt from Codex was not exercised beyond that failure.

Shared Skills remain in `.claude/skills/`. Agents that do not discover that directory automatically, such as Codex, read the relevant `SKILL.md` directly.

GOV-01-G09-002 is the documentation-only task that records this decision: it rewrites the G-09 line in ADR-007, updates the G-09 status and the related lines in this document, and updates AGENTS.md for Codex and for Skills discovery. Its scope is authorized.

## GOV-01-G12 Decisions

Approver: Julián Cely, Product Manager. Transcribed under task GOV-01-G12-001; the transcriber is not an approver.

### GOV-01-G12-002 (APPROVED)

Related: G-12; GOV-01-001 (Option B); GOV-01-G04-003; docs/ARTIFACT-CONVENTIONS.md; .claude/skills/task-report/SKILL.md; .claude/skills/task-preflight/SKILL.md; AGENTS.md. Decision date: 2026-10-21.

The "Proposed Derived Principles" and the "Proposed Reconciliation Mechanism" in this document, kept as PROPOSED, NOT APPROVED under GOV-01-001 Option B, are resolved as follows.

Principles 1, 2, 3, 4 and 7 are closed as already covered by existing rules, and no new text is added for them: principle 1 by the Canonical Status Rule in docs/CONTEXT-PROTOCOL.md and by AGENTS.md, which names docs/PROJECT-STATE.md as the canonical record of the global operational state; principle 2 by the Canonical Status Rule and by the Scope section of ADR-007; principle 3 by docs/00-START-HERE.md, which names the Git repository as the authoritative project memory; principle 4 by AGENTS.md and docs/CONTEXT-PROTOCOL.md; principle 7 by the Durable Status Rule in docs/ARTIFACT-CONVENTIONS.md.

Principle 5 is adopted as the Historical Records Rule in docs/ARTIFACT-CONVENTIONS.md. Under it, the statement in Decision GOV-01-G04-003 that the design draft "is currently untracked" is historical and is not corrected.

Principle 6 is adopted for reports and reviews: each discrepancy is classified as A (evidence only), B (stale wording, with the exact proposed edit; applying it requires Product Manager authorization) or C (genuine contradiction: stop and escalate to the Product Manager). It is recorded in the task-report skill and in AGENTS.md. The task-preflight skill does not classify discrepancies; it already stops on contradictions.

The Proposed Reconciliation Mechanism is not adopted. Its before-work checks are discarded: docs/PROJECT-STATE.md cites few commit SHAs, the wording check produces false positives, and it requires a fetch that the task-preflight skill does not allow. Its after-publication check is not an agent duty: the Product Manager performs every push, and the published result is verified after each push outside the agents' tasks.

The task-preflight skill is clarified: when an assignment continues after a READY preflight, the agent reports the preflight block first and then continues with the assignment.

This resolution fulfils the G-12 requirement to propose a preventive state-reconciliation mechanism.

GOV-01-G12-001 is the documentation-only task that records this decision and applies these changes to docs/ARTIFACT-CONVENTIONS.md, .claude/skills/task-report/SKILL.md, .claude/skills/task-preflight/SKILL.md, AGENTS.md and this document. Its scope is authorized.

## GOV-01-G10 Decisions

Approver: Julián Cely, Product Manager. Transcribed under task GOV-01-G10-005; the transcriber is not an approver.

### GOV-01-G10-006 (APPROVED)

Related: G-10; GOV-01-005; docs/phases/phase-03/M03-04-opencode-implementation.md (PD-16 to PD-30); docs/phases/phase-03/M03-04-priority-b-technical-specification.md. Decision date: 2026-10-27.

The Priority B pilot (G-10) is closed as completed. The Product Manager limited its scope to preparing and approving the Priority B technical specification through the GOV-01 mailbox workflow, with roles assigned per task and no executor reviewing its own work. The scope did not include implementation.

Pilot tasks, each reviewed CONFORME at its first review, with no fix round used and no stop condition triggered: GOV-01-G10-001 (specification drafted by Claude Code, reviewed by Codex); GOV-01-G10-002 (Product Manager answers recorded as PD-16 to PD-29, executed by OpenCode, reviewed by Claude Code); GOV-01-G10-003 (specification approval recorded as PD-30, executed by OpenCode, reviewed by Claude Code); GOV-01-G10-004 (status wording corrected after the approval, executed by OpenCode, reviewed by Claude Code). The results are recorded in docs/phases/phase-03/M03-04-opencode-implementation.md (PD-16 to PD-30). The Product Manager approved the specification on 2026-10-27.

Observations recorded for the Product Manager: (1) the agents classified discrepancies as 3 A and 1 B in the executor's report of GOV-01-G10-001, 1 B in the review of GOV-01-G10-002, 4 B and 1 A in the review of GOV-01-G10-003, and 1 A in the review of GOV-01-G10-004; each B was resolved by a later documentation task of the pilot. (2) An expected baseline blob ID in the specification of GOV-01-G10-002 had been computed from a stale copy; the Product Manager's verification before approval detected the mismatch and the files were reissued before approval. (3) The contract of GOV-01-G10-001 listed Mobile Landscape (844 x 390) as a separate layout; the executor reported that it uses the 3+2 grid, and the Product Manager confirmed the layout set (PD-22). (4) Two operational slips were caught by checking the mailbox before launching an agent or after archiving: an approval.md written in the wrong folder, and a folder that Windows reported as in use during archiving.

Priority B implementation remains NOT AUTHORIZED; it requires a separate explicit Product Manager authorization (PD-14 step 7, PD-30). This decision does not authorize PD-15 implementation, Priority C, M03-05, M03-06, commit, push or deployment.

GOV-01-G10-005 is the documentation-only task that records this decision. Its scope is authorized.

## Candidate Work Items

The items in Authorization Status are candidate work items. The approved decisions state only these ordering constraints:

- GOV-01-001 reconciliation comes first (G-12).
- Small controlled verification comes before the Priority B pilot (G-10).
- Codex is introduced later (G-09). Fulfilled by Decision GOV-01-G09-003.

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
- G-12 mechanism: a preventive reconciliation mechanism is required. Proposed design below. Text: ADR-007. Resolved by Decision GOV-01-G12-002.
- Q5: `.remember/` and `.playwright-mcp/` examination and configuration are deferred.

## Proposed Derived Principles (PROPOSED, NOT APPROVED)

Resolved by Decision GOV-01-G12-002; this section is kept as a historical record.

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

Resolved by Decision GOV-01-G12-002; this section is kept as a historical record.

This section proposes an implementation of decision G-12 and of the proposed principles above. It is not a decision. It requires explicit Product Manager approval before any use. No scripts or hooks are created.

**Before work.** Check branch, upstream, `HEAD` against `origin/main` after fetch, and working-tree state. Check that every SHA cited in `PROJECT-STATE.md` or the active milestone is an ancestor of `HEAD` (`git merge-base --is-ancestor`). Check that `PROJECT-STATE.md` and the active specification agree on status and authorization. Check that no wording says "local only" or "pending publication" for a commit already on `origin/main`.

**At task completion.** State the actual Git state. State that no material documentation discrepancy was found, or list each one with its classification. No other reporting is required.

**After authorized publication.** Confirm local and remote refs match and the working tree is clean. Repeat the wording check. Record the pushed range in the task report only, not in a tracked file.

**Classification.** (A) evidence only: report it, no tracked change. (B) stale wording: propose the exact edit; PM authorization is required before applying it. (C) genuine contradiction: stop and escalate to the Product Manager.

## Transcription Record

Assignment GOV-01-001 directed Claude Code to transcribe G-01 to G-12 and the associated Product Manager requirements. Claude Code acted as transcriber only and did not approve, interpret, extend, correct, or reopen any decision.

Assignment `/decision-transcription` (conversation) directed the transcription of GOV-01-G04-POLICY-1, GOV-01-G04-002 and GOV-01-G04-003 into this document. The transcriber acted as transcriber only and did not approve, interpret, extend, correct, or reopen any decision. See "GOV-01-G04 Decisions".

Task GOV-01-G04-004 (contract `.coordination/tasks/GOV-01-G04-004/contract-r1.md`) directed the transcription of GOV-01-G04-005 into this document. The transcriber acted as transcriber only and did not approve, interpret, extend, correct, or reopen any decision. See "GOV-01-G04 Decisions".

Task GOV-01-G09-002 (contract `.coordination/tasks/GOV-01-G09-002/contract-r1.md`) directed the transcription of GOV-01-G09-003 into this document. The transcriber acted as transcriber only and did not approve, interpret, extend, correct, or reopen any decision. See "GOV-01-G09 Decisions".

Task GOV-01-G12-001 (contract `.coordination/tasks/GOV-01-G12-001/contract-r1.md`) directed the transcription of GOV-01-G12-002 into this document. The transcriber acted as transcriber only and did not approve, interpret, extend, correct, or reopen any decision. See "GOV-01-G12 Decisions".

Task GOV-01-G10-005 (contract `.coordination/tasks/GOV-01-G10-005/contract-r1.md`) directed the transcription of GOV-01-G04-006 and GOV-01-G10-006 into this document. The transcriber acted as transcriber only and did not approve, interpret, extend, correct, or reopen any decision. See "GOV-01-G04 Decisions" and "GOV-01-G10 Decisions".
