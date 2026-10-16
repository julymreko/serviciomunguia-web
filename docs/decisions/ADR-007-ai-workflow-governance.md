# ADR-007 - AI Workflow Governance

Status: ACCEPTED

Recorded on: 2026-10-16

Initiative: GOV-01 (docs/governance/GOV-01-ai-workflow-governance.md)

## Transcription Notice

This ADR was transcribed by Claude Code at the Product Manager's direction (assignment GOV-01-001), under "PM-Directed Decision Transcription" in docs/CONTEXT-PROTOCOL.md.

The decision statements and the additional G-06, G-11 and G-12 requirements below are transcribed from the text of the Product Manager's GOV-01-001 assignments, in which the Product Manager identifies them as approved. Those assignments existed only in conversation before this record.

Source-text limits: the original approval wording and individual approval dates are not available in the repository. The decision statements are short statements and may be condensed forms of the original approvals. This ADR makes no claim that they are the complete or original approval wording.

The transcriber did not approve, interpret, extend, correct, or reopen any decision. Approved on: NOT RECORDED.

## Decisions

Approved by: Julián Cely, Product Manager.

| ID | Approved decision |
|---|---|
| G-01 | Lightweight enhanced orchestration; no full orchestration framework |
| G-02 | File-based task contracts and reports |
| G-03 | Gitignored working folder for temporary work; approved outcomes in canonical documentation |
| G-04 | Technical permission controls for push and deployment operations |
| G-05 | Initial shared Skills library under `.claude/skills/` |
| G-06 | Initial Skills: `task-preflight`, `task-report`, `decision-transcription` |
| G-07 | Reuse proven community methods; no complete third-party framework installation at this stage |
| G-08 | Preserve current agent roles while formalizing file-based handoffs |
| G-09 | Introduce Codex later as an independent read-only reviewer |
| G-10 | Small controlled verification followed by a Priority B pilot |
| G-11 | GOV-01 as an independent governance initiative |
| G-12 | Reconcile `PROJECT-STATE.md` before implementing GOV-01 |

## Additional Product Manager Requirements

**G-06:** Schedule later research into existing GitHub solutions for:

- Website/application reverse engineering and reference extraction.
- Architecture, design rules, interactions, SEO, responsive behavior, and accessibility assessment.
- Functional, visual, responsive, performance, accessibility, and regression testing.

Research first; do not invent a replacement for established methods.

**G-11:** GOV-01 should eventually evolve into an independent GitHub repository that can serve as a reusable, versioned, continuously improvable template for future projects.

The creation of that repository is not currently authorized.

**G-12:** Propose a preventive state-reconciliation mechanism covering task preflight, task reporting, and post-publication verification.

The mechanism must detect substantive discrepancies between Git state, published evidence, and canonical governance.

Avoid generating an endless commit/push cycle by recording mutable commit synchronization facts incorrectly.

## Scope

This ADR is the authority for the stable approved decisions of GOV-01, and for nothing else.

It does not authorize implementation. GOV-01 progress and authorization details are owned by the GOV-01 initiative document. The global current operational state is owned by docs/PROJECT-STATE.md.

It contains no current milestone, publication, or authorization status.

## Product Manager Approval

Approved by:
Julián Cely
Product Manager

Approval date:
NOT RECORDED
