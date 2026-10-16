---
name: decision-transcription
description: Transcribe explicit Product Manager decisions into a repository document, exactly as given, when the Product Manager directs it. Records approver, provenance and verified dates, and separates approved decisions from proposals. Manual use only. Never approves, interprets or extends a decision. Invoke with /decision-transcription at the start of the message.
disable-model-invocation: true
metadata:
  opencode/autoinvoke: "false"
---

# Decision Transcription

Use only when the Product Manager has directed a transcription (PM-Directed Decision Transcription, `docs/CONTEXT-PROTOCOL.md`). You are the transcriber: never approve, interpret, extend, correct or reopen a decision.

## Required inputs

Stop and ask if any is missing.

- The decision text, supplied by the Product Manager or quoted in the assignment. Never reconstruct a decision from memory or conversation history.
- The target path, named in the assignment or determined by `docs/ARTIFACT-CONVENTIONS.md` (Product Manager Decision Records; Governance Initiatives).
- For each item, whether the Product Manager states it as APPROVED or as a proposal.

## Procedure

1. Target. If the target document exists, read it and follow its format and ID scheme; do not renumber. If it does not exist, create it only when the assignment authorizes creating that path and an authorized format exists: a format defined in `docs/ARTIFACT-CONVENTIONS.md`, an applicable template under `docs/templates/`, or a format stated in the assignment. Otherwise stop and ask.
2. Each decision record: the ID as given (never invent one); the text, preserving substance and quoting where the wording matters; approver: the Product Manager, named as in `docs/00-START-HERE.md` (Project Authority); status exactly as stated (APPROVED, or PROPOSED, NOT APPROVED); related IDs if stated.
3. Dates: record a decision date or range only if the assignment or the repository verifies it. Otherwise write `NOT RECORDED`. Never invent one.
4. Provenance: record where the text came from (assignment ID; "conversation only before this record" when true) and that the transcriber is not an approver. If the target is a milestone artifact, record the transcription assignment itself, as `docs/CONTEXT-PROTOCOL.md` requires.
5. If the text is a condensed form or its original wording is unavailable, say so in the record.
6. Keep proposals apart from approved decisions. Do not promote a proposal.
7. If the new text appears to contradict an existing record, do not reconcile it. Stop and report the conflict.
8. Edit or create only the paths the assignment allows. Re-read the result and confirm each decision matches the text supplied. Run `git status --short` and `git diff --stat` and confirm no other path changed. Do not commit, push or deploy unless separately authorized.

## Report

List each decision ID and where it was written; every `NOT RECORDED` date; every condensed item; any conflict found.
