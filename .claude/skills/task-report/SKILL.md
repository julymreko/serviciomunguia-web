---
name: task-report
description: Produce the completion report for an assigned repository task: files actually changed, validation actually run, local Git state, remote and deployment evidence, actions performed, and discrepancies encountered. Use when finishing a task, before reporting to the orchestrator or the Product Manager. Reads state; changes nothing.
---

# Task Report

Reports facts observed now. Changes no file, ref or setting. Does not replace a handoff (Handoff Rule, `docs/CONTEXT-PROTOCOL.md`) or an audit result (`docs/ARTIFACT-CONVENTIONS.md`).

## Method

Collect evidence first. Report only what a command, a file read or your own action log showed in this session.

1. Changes. Run `git status --short` and `git diff --stat`; add `git diff --cached --stat` if anything is staged. List changed files from this output, never from memory. If a preflight recorded paths that were already modified, exclude them and say so. A read-only task reports `none`.
2. Local Git. Run `git rev-parse --short HEAD` and `git branch --show-current`. If the assignment states a baseline and `git rev-parse --verify "<baseline>^{commit}"` resolves it, run `git log --oneline <baseline>..HEAD`. Report "commits since baseline: none" only if HEAD equals the stated baseline and nothing is staged. If the baseline does not resolve, report `UNRESOLVED`, do not fetch, and list it also under Discrepancies. If none is stated, report `NOT STATED`.
3. Remote. Run `git status -sb`; its first line gives the relation to the upstream as last fetched. Report it as "last fetched". If there is no upstream or no output, report `NOT VERIFIED`. Never infer remote state from local commits.
4. Actions. From your own command log, state whether this session ran commit, push or deployment commands. Deployment state is not visible in Git: report it `NOT DETERMINABLE FROM GIT` unless the assignment or a command output you ran states it.
5. Validation. List each check actually run, with its command and result. A check not run is `NOT RUN`.
6. Discrepancies. List each conflict you encountered while doing the work, between canonical documents, between documents and Git state, or between the assignment and the repository, with the files involved. Classify each one: A, evidence only (no tracked change is needed); B, stale wording (state the exact proposed edit; applying it requires Product Manager authorization); C, genuine contradiction (stop and escalate to the Product Manager). Do not search for additional ones. Do not fix them unless the assignment allows it.

## Output

No step-by-step recap. Do not restate canonical content; cite its path. Omit the Validation, Discrepancies and Open lines when empty.

TASK <ID> REPORT
- Outcome: <one or two sentences>
- Changed files: <path - what changed | none>
- Validation: <command -> result | NOT RUN>
- Git (local): <branch>, HEAD <short SHA>, working tree <clean|dirty>; baseline <match|MISMATCH|UNRESOLVED|NOT STATED>; commits since baseline <none|list|NOT VERIFIED>
- Remote (last fetched): <relation|NOT VERIFIED>
- Actions this session: commit <none|list>; push <none|list>; deploy <none|list>
- Deployment state: <evidence|NOT DETERMINABLE FROM GIT>
- Discrepancies: <A|B|C - item - files>
- Open for the Product Manager: <items>

Redact secrets. Write the report to a file only if the assignment names the path; otherwise reply in chat. End with the exact closing statement the assignment requires, if any. Language: follow `AGENTS.md` (Communication).
