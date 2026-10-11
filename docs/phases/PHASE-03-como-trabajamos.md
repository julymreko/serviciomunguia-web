# PHASE 03 - CÓMO TRABAJAMOS

## Identification

Phase:
03 - CÓMO TRABAJAMOS (OnePage process section)

Status:
IN PROGRESS

Owner:
Julián Cely

Executing Agent:
Claude Code (discovery/planning, M03-00 to M03-02); OpenCode (implementation, M03-04, not yet authorized)

Audit Agent:
Claude Code for M03-06 (formal audit); Claude Code for M03-05 (independent testing)

## Authorization Boundary

Authorized now: discovery, reference extraction, review, proposals, and planning documentation (M03-00, M03-01, M03-02).

NOT authorized: any implementation. No file under `src/` may be created or modified for this phase until M03-03 closes with a recorded Product Manager approval and scope freeze. One PM-approved exception: the transfer of the approved CTA image asset into `src/assets/images/` during M03-03 (see M03-03, "D-07 Image Transfer Resolution"). The status of this transfer is recorded only in M03-03, "D-07 Image Transfer Resolution". This boundary is not a status; `Status` above is the only canonical state field.

## Objective

Rebuild the "CÓMO TRABAJAMOS" section of the OnePage with the approved architecture, based on the staging reference, correcting objective reference defects and adding only a Product Manager-approved motion and interaction system.

Scope authority for discovery:
`docs/phases/phase-03/M03-00-claude-discovery-planning-requirement.md`

## Preconditions

- Phase 02 is COMPLETED (`docs/PROJECT-STATE.md`; R03 PASS).
- `staging.serviciomunguia.com/inicio-bricks/` accessible (verified 2026-10-10, HTTP 200).
- Hero, Header, Menu, and Mobile Navigation exist and are approved (Phase 02).
- Undefined product, visual, responsive, content, SEO, motion, or architecture decisions require Product Manager approval.

## Evidence Convention

- Extraction: `docs/reference-extraction/COMO-TRABAJAMOS-EXTRACTION.md` (follows `REFERENCE-EXTRACTION-WORKFLOW.md` and `REFERENCE-SECTION-TEMPLATE.md`).
- Review and proposals: `docs/phases/phase-03/M03-02-review-improvement-proposal.md`.
- Evidence states: OBSERVED / PM APPROVED / UNKNOWN / NOT APPLICABLE. Review labels: ISSUE / DEFECT and PROPOSED IMPROVEMENT.
- A reconstruction-critical UNKNOWN blocks reconstruction. Current extraction result: NOT READY FOR RECONSTRUCTION.
- Proposals are never requirements until the Product Manager approval is recorded in the repository (M03-03).

## Responsibility Chain

Claude Code (discovery/planning) → Product Manager + coordinating ChatGPT (approval, UNKNOWN resolution, scope freeze) → OpenCode (implementation) → Claude Code (independent testing and formal audit) → coordinating ChatGPT (closure).

## Audit Policy

M03-00 through M03-05 are not formal audit gates. M03-06 is the sole planned formal Claude Code audit gate for Phase 03, under `docs/PRE-DEPLOYMENT-AUDIT.md`. Result is PASS or FAIL. Claude Code does not repair OpenCode's implementation during the audit and does not redefine product decisions.

## Publication Policy

Validated work is committed and pushed before the next milestone begins. Publication verification: HEAD = origin/main and working tree clean.

## Finding and Remediation Policy

Verified project discrepancies are recorded in `docs/tracking/FINDINGS.md`; verified defects in implemented work are recorded in `docs/tracking/BUGS.md` per `docs/TESTING-PROTOCOL.md`. Defects in the reference itself are recorded in the extraction and in M03-02 (ISS-xx), not as project bugs.

## General STOP / BLOCKED Conditions

Execution stops when: the reference section cannot be identified or inspected; required context is missing; the repository is dirty with unrelated changes; authoritative documents contradict each other; a reconstruction-critical UNKNOWN would require invention; a proposal requires an unmade product decision; an architecture change or unapproved dependency would be required; page-wide SEO information is missing and cannot be established; responsive behavior cannot be verified; existing approved project behavior would have to be redefined without PM approval; a required test is FAIL, BLOCKED, or NOT RUN.

## Testing Classification Used Below

Nine areas per `docs/TESTING-PROTOCOL.md`: Build, Functional, Responsive, SEO, Accessibility, Performance, Security, Integrations, Regression. Performance PASS thresholds do not exist; results are reported without an invented threshold unless the PM approves one (M03-02 D-11).

## Milestones

### M03-00 - Phase 03 Discovery & Planning

Status:
IN PROGRESS

Purpose:
Establish Phase 03 documentation, discovery scope, responsibilities, governance boundaries, and planning artifacts.

Scope:
This specification; the requirement document; the Phase 03 entry in `docs/PROJECT-STATE.md`.

Inputs:
M03-00 requirement; governance documents per `docs/CONTEXT-PROTOCOL.md`.

Outputs:
`docs/phases/PHASE-03-como-trabajamos.md`; PROJECT-STATE Phase 03 entry.

Responsible agent:
Claude Code (planning); Julián Cely (acknowledgement).

Files allowed to change:
`docs/phases/PHASE-03-como-trabajamos.md`; `docs/PROJECT-STATE.md`.

Files prohibited from change:
Everything under `src/`; `docs/audits/*`; `docs/handoffs/PHASE-02-HANDOFF.md`; Phase 02 specifications and extractions; `docs/ARCHITECTURE.md`; ADRs; `docs/tracking/*` (no verified project finding or bug exists).

Testing applicability:
Build N/A - documentation only; Functional N/A; Responsive N/A; SEO N/A; Accessibility N/A; Performance N/A; Security N/A; Integrations N/A; Regression N/A.

Note:
`docs/phases/phase-03/M03-00-claude-discovery-planning-requirement.md` records `Status: DRAFT FOR EXECUTION` under "Document Status" rather than under "Identification". It was not modified by this assignment; the Product Manager decides whether to normalize it.

Acceptance criteria:
- Specification published with all milestones fully defined.
- PROJECT-STATE records Phase 03 with implementation explicitly unauthorized, consistent with this specification.
- HEAD = origin/main; working tree clean.
- Julián Cely acknowledges the Phase 03 entry (D-15).

STOP / BLOCKED:
Governance documents contradict each other; the PM does not accept the PROJECT-STATE entry.

Required evidence:
Git commit; verified synchronized state values.

Publication gate:
Committed and pushed before M03-03.

Dependencies:
Phase 02 COMPLETED.

### M03-01 - "Cómo Trabajamos" Reference Extraction

Status:
IN PROGRESS

Purpose:
Create the evidence-based extraction of the staging reference.

Scope:
Section `#como-trabajamos` on the reference URL at Desktop, Tablet, Mobile Landscape, Mobile Portrait.

Inputs:
Reference URL; extraction workflow and template.

Outputs:
`docs/reference-extraction/COMO-TRABAJAMOS-EXTRACTION.md`.

Responsible agent:
Claude Code.

Files allowed to change:
`docs/reference-extraction/COMO-TRABAJAMOS-EXTRACTION.md`.

Files prohibited from change:
`HEADER-EXTRACTION.md`, `MENU-EXTRACTION.md`, workflow, template, all `src/`.

Testing applicability:
Build N/A - extraction only; Functional APPLIES; Responsive APPLIES; SEO APPLIES; Accessibility APPLIES; Performance N/A - extraction only; Security N/A; Integrations N/A; Regression N/A - no implementation.

Acceptance criteria:
- Required reference evidence recorded; responsive, accessibility, and SEO observations documented.
- Interactions, assets, links, and dependencies documented.
- Reference defects are not silently corrected.
- Reconstruction readiness stated truthfully. Current result: NOT READY FOR RECONSTRUCTION (U-01, U-02, U-04, U-07).
- Julián Cely approves the extraction evidence.
- M03-01 cannot be COMPLETED without that approval, and M03-04 cannot begin without READY FOR RECONSTRUCTION.

STOP / BLOCKED:
Reference inaccessible; a reconstruction-critical UNKNOWN remains unresolved; evidence not approved.

Required evidence:
The extraction document; PM approval recorded in the repository.

Publication gate:
Committed and pushed before M03-03.

Dependencies:
M03-00.

### M03-02 - UX / Accessibility / SEO / Motion Review & Improvement Proposal

Status:
IN PROGRESS

Purpose:
Document issues, improvement proposals, SEO and accessibility recommendations, motion proposals, performance-risk classification, and the PM decision register.

Scope:
Review of the reference section against UX, accessibility, OnePage SEO, architecture fit, and motion/performance constraints.

Inputs:
Approved extraction; architecture, testing, and SEO governance.

Outputs:
`docs/phases/phase-03/M03-02-review-improvement-proposal.md`.

Responsible agent:
Claude Code.

Files allowed to change:
`docs/phases/phase-03/M03-02-review-improvement-proposal.md`.

Files prohibited from change:
Extraction evidence (proposals must not be written into it); all `src/`.

Testing applicability:
Build N/A - documentation only; Functional N/A; Responsive APPLIES (review of observed behavior); SEO APPLIES; Accessibility APPLIES; Performance APPLIES (risk classification only, no threshold); Security N/A; Integrations N/A; Regression N/A.

Acceptance criteria:
- Every proposal is labeled PROPOSED and records "PM approval required: YES".
- Every motion proposal carries all fields required by the requirement document §11; every MEDIUM/HIGH proposal lists a lower-cost alternative.
- No dependency, library, or architecture change is proposed.
- Decision register complete.

STOP / BLOCKED:
A proposal depends on an unapproved library; a decision needed to continue planning is undefined.

Required evidence:
The proposal document.

Publication gate:
Committed and pushed before M03-03.

Dependencies:
M03-01.

### M03-03 - Product Manager Approval & Scope Freeze

Status:
IN PROGRESS

Record:
PM decisions D-01 to D-15 are transcribed in `docs/phases/phase-03/M03-03-pm-approval-scope-freeze.md` (Claude Code acted only as transcriber at the PM's direction). Scope freeze is PENDING PM CONFIRMATION; open items are listed there. Handoff: `docs/handoffs/PHASE-03-M03-HANDOFF.md`.

Purpose:
Resolve UNKNOWN items and convert explicitly approved proposals into implementation requirements. No implementation begins before this milestone closes.

Scope:
Decisions D-01 to D-15 in M03-02; approval or rejection of each PI-xx and MOT-xx; extraction evidence approval; final list of files OpenCode may touch.

Inputs:
M03-01 and M03-02 artifacts.

Outputs:
`docs/phases/phase-03/M03-03-pm-approval-scope-freeze.md` (to be created at this milestone; it records decisions, the frozen requirement set, and the approved deviations from the reference); updated extraction with PM APPROVED deviations and readiness; `docs/phases/phase-03/M03-04-opencode-implementation.md`; the approved CTA image asset in `src/assets/images/` (integrity record: file name, byte size, SHA-256, dimensions, format).

Responsible agent:
Julián Cely + coordinating ChatGPT. Claude Code may be asked to update planning artifacts after decisions are given. Claude Code performs the approved CTA image transfer (M03-03, "D-07 Image Transfer Resolution").

Files allowed to change:
Phase 03 documents; the extraction (only to record PM-approved deviations and readiness; observed evidence stays untouched); the approved CTA image asset under `src/assets/images/` (transfer only).

Files prohibited from change:
All `src/` except the single approved CTA image asset transfer into `src/assets/images/` (M03-03, "D-07 Image Transfer Resolution"); Phase 02 documents and audit results.

Testing applicability:
Build N/A - documentation only; Functional N/A; Responsive N/A; SEO N/A; Accessibility N/A; Performance N/A; Security N/A; Integrations N/A; Regression N/A.

Acceptance criteria:
- Every reconstruction-critical UNKNOWN is OBSERVED, PM APPROVED, or NOT APPLICABLE; extraction result is READY FOR RECONSTRUCTION.
- Every proposal is recorded as approved, rejected, or deferred by the PM.
- Scope is frozen in the repository; the OpenCode milestone specification exists.
- HEAD = origin/main; working tree clean.

STOP / BLOCKED:
Any reconstruction-critical UNKNOWN remains; the PM has not decided D-01, D-02, D-03, D-07, D-13, or D-14.

Required evidence:
Recorded PM decisions; synchronized artifacts; image transfer integrity record (source and copy SHA-256 and byte size identical; dimensions and aspect ratio compared with the extraction).

Publication gate:
Committed and pushed before M03-04.

Dependencies:
M03-01, M03-02.

### M03-04 - OpenCode Implementation

Status:
NOT STARTED

Purpose:
Implement only the approved, frozen Phase 03 scope.

Scope:
Defined by M03-03. Nothing outside it.

Inputs:
Approved artifacts in the context order of the OpenCode Implementation Boundary below.

Outputs:
Section component, CSS block, assets, and any approved script; implementation-level test evidence; Git commits.

Responsible agent:
OpenCode.

Files allowed to change (proposed, to be confirmed by M03-03):
`src/index.njk` (add the include); one new component under `src/_includes/components/`; `src/assets/css/main.css` (new section block only); `src/assets/images/` (approved image; M03-04 references it and does not transfer it; it may be used only if M03-03 records the transfer as performed, otherwise STOP and ask the PM); optionally one new file under `src/assets/js/` and one script line in `src/_includes/base.njk`, only if a JavaScript-dependent motion proposal is approved.

Files prohibited from change:
`docs/reference-extraction/*`; `docs/audits/*`; Phase 02 documents; `docs/ARCHITECTURE.md`; ADRs; governance documents; existing Header, Hero, Menu, and Mobile Navigation components, styles, and scripts (except where M03-03 explicitly authorizes an integration change); `package.json` dependencies.

Testing applicability:
Build APPLIES; Functional APPLIES; Responsive APPLIES; SEO APPLIES; Accessibility APPLIES; Performance APPLIES; Security APPLIES; Integrations APPLIES when applicable (WhatsApp link); Regression APPLIES.

Acceptance criteria:
- Implementation matches the frozen artifacts; no unapproved deviation.
- SEO-critical text exists in generated static HTML; section is fully usable without JavaScript.
- `prefers-reduced-motion: reduce` behavior matches the approved motion specification.
- No new dependency, library, bundler, or architecture change.
- Implementation-level tests pass with evidence; no regression to Header, Hero, Menu, Mobile Navigation.
- No self-declared formal audit PASS.

STOP / BLOCKED:
Frozen evidence insufficient; a reconstruction-critical UNKNOWN appears; an unapproved deviation, dependency, or architecture change is required; required testing cannot complete.

Required evidence:
Commit SHA(s); build output; test records per `docs/TESTING-PROTOCOL.md`.

Publication gate:
Committed and pushed; HEAD = origin/main; working tree clean before M03-05.

Dependencies:
M03-03 closed.

### M03-05 - Claude Code Independent Testing

Status:
NOT STARTED

Purpose:
Independently verify OpenCode's implementation at the exact commit or commit range.

Scope:
The exact OpenCode commit range; all nine testing areas as applicable, including reduced motion and static (no-JavaScript) rendering.

Inputs:
Approved artifacts; OpenCode commit range; `docs/TESTING-PROTOCOL.md`.

Outputs:
Test records with PASS / FAIL / BLOCKED / NOT RUN and evidence; BUGS.md and FINDINGS.md entries for verified defects/discrepancies.

Responsible agent:
Claude Code.

Files allowed to change:
`docs/tracking/BUGS.md`; `docs/tracking/FINDINGS.md`; Phase 03 test-record documents.

Files prohibited from change:
All `src/` (no silent repair); approved extraction and scope documents.

Testing applicability:
Build APPLIES; Functional APPLIES; Responsive APPLIES; SEO APPLIES; Accessibility APPLIES; Performance APPLIES (measured values reported; no invented threshold); Security APPLIES; Integrations APPLIES when applicable; Regression APPLIES.

Acceptance criteria:
- All required tests have an observable result; none left NOT RUN or BLOCKED without a named blocker.
- Defects are recorded with evidence and sent back to OpenCode.

STOP / BLOCKED:
Commit range undefined; implementation not published; required environment unavailable.

Required evidence:
Terminal/build output, browser observations, screenshots, generated-HTML inspection, Git diff.

Publication gate:
Test records committed and pushed before M03-06.

Dependencies:
M03-04.

### M03-06 - Formal Audit & Phase Closure Gate

Status:
NOT STARTED

Purpose:
Perform the formal Claude Code audit under `docs/PRE-DEPLOYMENT-AUDIT.md`.

Scope:
Approved scope and the exact implementation baseline.

Inputs:
All inputs required by `docs/PRE-DEPLOYMENT-AUDIT.md`, plus M03-03 decisions and M03-05 records.

Outputs:
Audit request `docs/audits/PHASE-03-AUDIT-REQUEST.md` and immutable result `docs/audits/PHASE-03-AUDIT-RESULT-YYYY-MM-DD-RNN.md` (result recorded per `docs/ARTIFACT-CONVENTIONS.md`); closure documentation by the coordinating ChatGPT after PASS.

Responsible agent:
Claude Code (audit); coordinating ChatGPT (closure, immutable recording, state synchronization).

Files allowed to change:
Audit artifacts only.

Files prohibited from change:
All `src/`; the approved extraction; prior audit results.

Testing applicability:
Build APPLIES; Functional APPLIES; Responsive APPLIES; SEO APPLIES; Accessibility APPLIES; Performance APPLIES; Security APPLIES; Integrations APPLIES when applicable; Regression APPLIES.

Acceptance criteria:
- Audit result is PASS.
- Repository closure state synchronized (phase specification, PROJECT-STATE, handoff, audit references, pending items, Git references).
- HEAD = origin/main; working tree clean.

STOP / BLOCKED:
Audit FAIL; required audit input missing; required test FAIL/BLOCKED/NOT RUN; blocking UNKNOWN, decision, bug, or finding remains.

Required evidence:
Audit record: Phase, Milestone, commit range, result, blocking issues, auditor, date.

Publication gate:
Closure commit pushed after synchronized-state verification (`docs/CONTEXT-PROTOCOL.md`).

Dependencies:
M03-05.

## Milestone Structure Changes

None proposed relative to the recommended baseline. The M03-03 to M03-06 specification files are created when each milestone starts, so they record frozen decisions instead of speculation.

## OpenCode Implementation Boundary (prepared; inactive until M03-03 closes)

This section defines the instructions OpenCode will receive. It is not authorization to start.

Required context order:

```text
docs/00-START-HERE.md
→ docs/PROJECT-STATE.md
→ docs/ARTIFACT-CONVENTIONS.md
→ docs/CONTEXT-PROTOCOL.md
→ docs/phases/PHASE-03-como-trabajamos.md
→ docs/phases/phase-03/M03-04-opencode-implementation.md
→ docs/reference-extraction/COMO-TRABAJAMOS-EXTRACTION.md
→ docs/phases/phase-03/M03-03-pm-approval-scope-freeze.md (PM-approved deviations / scope freeze)
→ docs/ARCHITECTURE.md
→ relevant ADRs (ADR-001 frontend stack, ADR-003 SEO static HTML)
→ docs/TESTING-PROTOCOL.md
→ docs/tracking/BUGS.md and docs/tracking/FINDINGS.md (relevant entries)
```

Fundamental rule: approved repository artifacts define WHAT is implemented. The reference staging site is not independently reinterpreted after scope freeze.

OpenCode instructions must state, at minimum:
- Files it may edit and create: the M03-04 allow-list frozen in M03-03.
- Files it must not modify: the M03-04 prohibited list; the extraction; audit results; governance documents.
- Git procedure: verify branch, working tree, HEAD, and origin/main before editing; stop on unrelated local changes; commit only the approved scope; push; report SHA(s).
- Required commits: documentation-conventional messages in the repository's existing style (`feat:`/`fix:`/`docs:` prefixes), one logical change per commit.
- Required tests and evidence: all applicable areas in `docs/TESTING-PROTOCOL.md`, including viewport coverage at the four project classes, reduced-motion emulation, and JavaScript-disabled rendering.
- STOP conditions: those of M03-04 and the general list above.
- No undocumented product decisions; no silent scope expansion; no editing the extraction to justify differences; no changing PM-approved requirements; no architecture changes without approval; no self-declared audit PASS.

## Phase 03 Acceptance Criteria

1. Phase 03 specification published before implementation work.
2. Reference accessibility verified before M03-01 (done 2026-10-10).
3. Extraction follows the approved workflow and template.
4. Responsive and Accessibility apply in M03-01, M03-02, and M03-04 to M03-06.
5. Julián approves the extraction evidence and records scope freeze before M03-04.
6. Reconstruction-critical UNKNOWN values block implementation.
7. No proposal is implemented without a recorded PM approval.
8. Motion is progressive enhancement; SEO-critical content is static HTML; reduced-motion is supported.
9. M03-06 is the sole planned formal Claude Code audit gate.
10. Every milestone classifies all nine testing areas and defines acceptance and STOP/BLOCKED criteria.
11. Dependent validated work is published before the next milestone.
12. Phase closure requires synchronized repository state, HEAD = origin/main, and a clean working tree.

## Closure

Phase 03 is not closed. Closure conditions are defined above; `Status` under Identification is changed to COMPLETED only after M03-06 PASS and a synchronized-state verification.
