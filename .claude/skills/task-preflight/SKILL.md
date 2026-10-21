---
name: task-preflight
description: Read-only check before starting an assigned repository task. Verifies the Product Manager authorization for the operations the task performs, the mandatory governance context, the Git baseline and the working-tree state, then reports READY or STOP. Use when a task assignment is received, before editing any file. Does not grant authorization.
---

# Task Preflight

Read-only. Changes no file, ref or setting. Grants no authorization.

Rules live in `AGENTS.md`, `docs/CONTEXT-PROTOCOL.md` and `docs/PROJECT-STATE.md`. This skill only sequences the checks; if it conflicts with those documents, they win.

## Inputs

Take from the task assignment: task ID, task mode (exactly as the assignment states it), operations the task performs (read-only, edit, commit, push, deploy), allowed files, expected review paths (review mode only), baseline (commit SHA or ref), restrictions, stop conditions. An expected review path is an exact repository-relative file path, written exactly as `git status --short` prints it. Report any input the assignment does not state as `NOT STATED`. Never infer it.

## Checks

1. Authorization. Find the explicit Product Manager authorization for this task, with its scope and restrictions, in the assignment or in `docs/PROJECT-STATE.md` or the active specification. Then check each operation the task performs. Edit, commit, push and deployment each need their own explicit authorization. A task the assignment defines as read-only needs no edit authorization; record the operations it does not perform as `not required`.
2. Context. Read what the Mandatory Context Order in `docs/CONTEXT-PROTOCOL.md` requires, in that order: items 1 to 4 always, items 5 to 8 only where relevant to the task. Load no unrelated area. The active specification is the phase, milestone or initiative document that the assignment or `docs/PROJECT-STATE.md` names. Note any required document that is missing, stale, or contradicted by another canonical document.
3. Git, local evidence. Run `git rev-parse HEAD` and `git branch --show-current`, each as its own command. Classify the baseline:
   - match: HEAD equals the stated baseline.
   - MISMATCH: HEAD differs. Report both SHAs.
   - UNRESOLVED: the stated baseline does not resolve locally (`git rev-parse --verify "<baseline>^{commit}"` fails). Do not fetch to resolve it.
   - NOT STATED: the assignment gives none. Report HEAD as observed; baseline-dependent checks are `NOT VERIFIED`.
4. Git, remote state. Do not run `git fetch`, `git pull` or `git checkout` unless the assignment authorizes it. Run `git status -sb`; its first line gives the relation to the upstream as last fetched. Report it as "last fetched"; it is not live remote state. If there is no upstream or no output, remote state is `NOT VERIFIED`.
5. Deployment. Git does not show it. Report `NOT VERIFIED` unless the assignment states it.
6. Working tree. Run `git status --short`. List every path it prints (modified, staged, deleted, renamed or untracked) and flag any outside the allowed files. Exception: a printed path that exactly matches an expected review path declared by the approved assignment is review input. It is not an allowed implementation write, is not flagged by this check, and does not trigger the working-tree STOP, but only when the assignment mode is review. A renamed entry printed as `old -> new` matches only if the declaration is that exact printed text. A directory, glob, wildcard, recursive pattern, prefix, inferred path or partial path grants nothing; the path it would cover is flagged. Every other printed path is flagged.
7. Scope. Compare the requested work with the allowed files and restrictions. A read-only task writes nothing.

## Result

STOP when any of these holds: authorization for the task or for a required operation is missing or unclear; required context is missing, stale or contradictory; the baseline is MISMATCH or UNRESOLVED; working-tree changes affect the task (it writes files, or it relies on the committed content of a modified path), except paths matched as expected review paths under check 6; scope exceeds the allowed files, except paths matched as expected review paths under check 6. Report the cause and wait for the Product Manager. Do not continue by inference.

Report any discrepancy you encounter while running these checks. Do not search for others, classify them, or fix them.

Otherwise READY. Report the preflight result in exactly this format and add nothing to the block. If the assignment continues after a READY preflight, report this block first and then continue with the assignment:

PREFLIGHT: READY | STOP
- Authorization: task <stated|NOT STATED>; edit <authorized|not required|NOT STATED>; commit <...>; push <...>; deploy <...>
- Context: <files read>; <problems or none>
- Git (local): <branch>, HEAD <short SHA>, baseline <match|MISMATCH|UNRESOLVED|NOT STATED>
- Remote (origin ref as of last fetch; not live remote state): <relation|NOT VERIFIED>
- Deployment: <stated by the assignment|NOT VERIFIED>
- Working tree: <clean|paths>; expected review paths matched: <none|exact printed paths>
- Stop reasons: <list|none>
