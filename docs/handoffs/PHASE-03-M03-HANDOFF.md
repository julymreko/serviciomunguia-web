# PHASE 03 — M03-03 HANDOFF

## Identification

Phase:
03 — CÓMO TRABAJAMOS

Milestone:
M03-03 — Product Manager Approval & Scope Freeze

From Agent:
Claude Code (Claude Sonnet 5.5) — transcriber of PM decisions only

To Agent:
Coordinating ChatGPT (with Product Manager Julián Cely)

Current phase-state authority:
docs/phases/PHASE-03-como-trabajamos.md

Milestone record:
docs/phases/phase-03/M03-03-pm-approval-scope-freeze.md

## Required Reading

- docs/00-START-HERE.md
- docs/PROJECT-STATE.md
- docs/ARTIFACT-CONVENTIONS.md
- docs/CONTEXT-PROTOCOL.md
- docs/phases/PHASE-03-como-trabajamos.md
- docs/phases/phase-03/M03-03-pm-approval-scope-freeze.md
- docs/phases/phase-03/M03-02-review-improvement-proposal.md
- docs/reference-extraction/COMO-TRABAJAMOS-EXTRACTION.md
- This handoff

Do not infer missing context from previous conversations.

## Current State

- M03-03 is IN PROGRESS. The Product Manager's decisions D-01 to D-15 are recorded as PM APPROVED.
- Scope freeze: **PENDING PM CONFIRMATION** (not given).
- Implementation: **NOT AUTHORIZED.** IMPLEMENTATION NOT STARTED.
- M03-00, M03-01, M03-02 remain IN PROGRESS. No milestone is COMPLETED.
- Role directive recorded: the PM directed Claude Code to act only as transcriber for M03-03; the approver of every decision is Julián Cely.
- The PM-approved CTA image transfer exception is recorded in M03-03, "D-07 Image Transfer Resolution", which is the only place that states whether the transfer was performed.

## Completed Work

- Transcribed D-01 to D-15 into M03-03 without changing their substance.
- Mapped each decision to its ISS/PI/MOT/U identifiers; mapped U-01 to U-10 to resolved / remains UNKNOWN / to be measured.
- Recorded the open items O-01 to O-08 and the remaining-before-freeze list.
- Updated the Phase 03 specification (M03-03 status and references) and PROJECT-STATE (working item and next item; implementation still NOT AUTHORIZED).
- Recorded the PM-approved D-07 image transfer exception in M03-03, PROJECT-STATE and the Phase 03 specification (commit 5fe5399fc42bbcc7b0c16c120846a8a5abc253b7).

## Files Created

- docs/phases/phase-03/M03-03-pm-approval-scope-freeze.md
- docs/handoffs/PHASE-03-M03-HANDOFF.md

## Files Modified

- docs/phases/PHASE-03-como-trabajamos.md (M03-03 Status and Record lines only)
- docs/PROJECT-STATE.md (Current Working Item and Next Item only)
- Commit 5fe5399fc42bbcc7b0c16c120846a8a5abc253b7 (image transfer exception only): docs/PROJECT-STATE.md, docs/phases/PHASE-03-como-trabajamos.md, docs/phases/phase-03/M03-03-pm-approval-scope-freeze.md, docs/handoffs/PHASE-03-M03-HANDOFF.md.

## Verified Results

- Git precheck before editing: branch `main`; working tree clean; HEAD = origin/main = `0b1e31eb708b79074f295934e4645565b1554050`; local and remote synchronized.
- No file under `src/` was changed. The CTA source image was not accessed, copied, or committed. (true as of commit da9e840; a later PM-approved exception permits the CTA image transfer, see M03-03 "D-07 Image Transfer Resolution").
- `COMO-TRABAJAMOS-EXTRACTION.md`, `M03-02`, the M03-00 requirement, ARCHITECTURE, ARTIFACT-CONVENTIONS, CONTEXT-PROTOCOL, BUGS, FINDINGS, and all Phase 02 artifacts were not modified.

## Decisions Made

D-01 to D-15, all PM APPROVED by Julián Cely, exactly as recorded in `docs/phases/phase-03/M03-03-pm-approval-scope-freeze.md`. Summary:
D-01 new explicit type scale (sizes by measurement); D-02 `#contacto` and `#agendar-diagnostico` intentionally distinct; D-03 primary CTA links now to `#agendar-diagnostico`; D-04 steps H4; D-05 secondary hover `#25d366` with `#111a38` text and focus outlines `#1a2ad3` (light) / white (dark); D-06 separate paragraphs; D-07 self-host CTA image; D-08 MOT-01 to MOT-07 approved (MOT-02 one-shot only); D-09 `process.njk` / `sm-process` / `como-trabajamos`; D-10 keep steps and trust strip; D-11 no browser baseline, no numeric threshold, IntersectionObserver; D-12 no structured data in this section; D-13 six commercial claims confirmed; D-14 keep three layouts, STOP if no title size fits; D-15 PROJECT-STATE entry accepted.

## Open Questions

- O-01 Layout switch-point values are UNDEFINED.
- O-02 D-01 sizes are UNDEFINED; who measures and when is not stated.
- O-03 Decision recorded: Claude Code transfers the image in M03-03 under the single exception in M03-03 "D-07 Image Transfer Resolution". Transfer status: see M03-03, "D-07 Image Transfer Resolution".
- O-04 Section-order discrepancy between PM statement, ARCHITECTURE.md, and the approved Menu (recorded, not resolved).
- O-05 Later page-wide structured-data / AI-search-visibility milestone proposed by the PM; LocalBusiness `address` applicability for a service-area business with no public address is UNKNOWN.
- O-06 No PM decision recorded for PI-01, PI-04, PI-05(c), the PI-08 details, PI-09, PI-10, and the MOT-03 reduced-motion treatment.
- O-07 Extraction evidence approval and readiness re-evaluation not recorded; PM APPROVED deviations not yet written into the extraction.
- O-08 M03-04 specification and the OpenCode file allow-list do not exist.
- U-05, U-06, U-10 remain UNKNOWN (to be measured at implementation or testing).

## Pending Items

The "Scope Freeze — Remaining Before Freeze" list in M03-03 (items 1–7).

## Findings

- None recorded in `docs/tracking/FINDINGS.md`. The documentation inconsistencies below are proposals only.

## Bugs

- None.

## Constraints for Next Agent

- Do not modify files outside the assigned scope.
- Do not assume unfinished work is complete. Scope is not frozen.
- Do not invent missing requirements; do not convert UNKNOWN items into assumptions.
- Do not start M03-04 or write OpenCode instructions before the PM confirms scope freeze.
- Do not apply the proposals below without PM approval.
- Stop and request clarification when required information is undefined.
- The only permitted `src/` change before scope freeze is the CTA image transfer in M03-03, under its integrity conditions.

## Required Next Action

Product Manager (Julián Cely) and the coordinating ChatGPT: review the open items O-01 to O-08, decide the proposed documentation changes below, and, when ready, give the explicit scope-freeze confirmation. Only after that may the M03-03 closure steps (extraction update, M03-04 specification) be performed. The PM instructs Claude Code when to perform the CTA image transfer.

## PROPOSED DOCUMENTATION CHANGES

For review by the coordinating ChatGPT and the PM. **None has been applied.** Approver for every item: Julián Cely (PM). Limited to what is verifiable in the repository. Issued audit results are immutable (`docs/ARTIFACT-CONVENTIONS.md`) and are excluded from every proposal.

### P-01 — Role assignment versus PM-directed transcription (item a)
- File: `docs/phases/phase-03/M03-00-claude-discovery-planning-requirement.md`, section 2, "Product Manager + coordinating ChatGPT — Approval Gate" (and the chain line "Claude Code → Product Manager + coordinating ChatGPT → OpenCode → …").
- Current text: "Responsible for: reviewing the extraction; resolving UNKNOWN items; approving or rejecting issues/remediation proposals; …; freezing implementation scope."
- Verified situation: M03-03 is assigned to the PM + coordinating ChatGPT; the PM directed Claude Code to transcribe the PM's decisions for M03-03. The requirement document has no provision for transcription.
- Proposed text (append to section 2): "Any agent may be directed by the Product Manager to transcribe the Product Manager's decisions into the repository. A transcriber records decisions verbatim in substance, labels the Product Manager as approver, and does not approve, interpret, extend, correct, or reopen them. The direction must itself be recorded in the milestone artifact."
- Proposed general rule (candidate location: `docs/CONTEXT-PROTOCOL.md`, after "Conversation Rule", or the same sentence in `docs/00-START-HERE.md` Mandatory Agent Rules): the same sentence as above, so it applies to every milestone and no per-milestone exception is needed.
- Reason: avoids a role conflict each time the PM relays decisions through an agent that is not the approver; consistent with the existing Conversation Rule (decisions living only in a conversation must be recorded).

### P-02 — Phase 02 handoff versus PROJECT-STATE (item b)
- File: `docs/handoffs/PHASE-02-HANDOFF.md`, "Required Next Action" (line 383) and "Handoff Status" (line 387); also "Current State" line "No next phase entry point is authorized. It remains UNDEFINED pending Product Manager approval."
- Current text: "Await Product Manager approval of the next phase entry point. Do not infer or start Phase 03 work without that approval." / "PHASE 02 CLOSED — R03 PASS — NEXT ITEM UNDEFINED".
- Verified situation: `docs/PROJECT-STATE.md` now records Phase 3 IN PROGRESS (accepted by the PM under D-15) and a Next Item that is not UNDEFINED. A newly loaded agent reads two contradictory statements, and CONTEXT-PROTOCOL says the current state document governs freshness.
- Proposed option A (preferred, preserves the Phase 02 transition record): leave the handoff text unchanged and add one line at the top of "Current State": "Superseded for entry-point status: Phase 03 entry approved by the Product Manager; see docs/PROJECT-STATE.md and docs/phases/PHASE-03-como-trabajamos.md. This handoff is otherwise unchanged."
- Option B: leave the Phase 02 handoff entirely unchanged and rely on PROJECT-STATE precedence (CONTEXT-PROTOCOL "Context Freshness": a stale handoff must not be relied on when a newer validated state exists).
- Reason: removes the "do not start Phase 03" instruction as a trap for later agents without rewriting Phase 02 evidence.

### P-03 — M03-00 "Document Status" heading versus the canonical Status rule (item c)
- File: `docs/phases/phase-03/M03-00-claude-discovery-planning-requirement.md`, lines 3–5.
- Current text: "## Document Status" with "Status: DRAFT FOR EXECUTION".
- Verified situation: `docs/CONTEXT-PROTOCOL.md` (Canonical Status Rule) requires exactly one canonical `Status:` under `## Identification`. The requirement document has no Identification section, and "DRAFT FOR EXECUTION" is not a vocabulary value used elsewhere. `docs/phases/PHASE-03-como-trabajamos.md` records M03-00 as IN PROGRESS, so two different state values exist for the M03-00 artifact.
- Proposed text: rename the heading to "## Identification" and set "Status: IN PROGRESS" (or the status the PM chooses), keeping all other text unchanged.
- Reason: single canonical state value per artifact.

### P-04 — Section-order discrepancy (item d)
- Files and current text:
  - `docs/ARCHITECTURE.md` lines 106–116 ("Confirmed major OnePage sections": Header, Hero, Services, Coverage, Brands, Process, Testimonials, Contact, Footer).
  - `src/_includes/components/menu-overlay.njk` (approved Menu order: ¿Cómo trabajamos?, Servicios, Cobertura, Marcas, Contacto).
  - PM statement (M03-03 O-04): Cómo trabajamos, Servicios, Marcas, Zonas de cobertura, Contacto, legal pages, Footer.
  - Reference page observed order: Hero, Cómo trabajamos, Servicios, Cobertura.
- Verified differences: Process position (after Brands in ARCHITECTURE; first after Hero in the Menu, PM statement, and reference); Coverage vs Brands order (Coverage before Brands in ARCHITECTURE and Menu; Brands before "Zonas de cobertura" in the PM statement); Testimonials absent from the Menu and from the PM statement; "legal pages" appear only in the PM statement.
- Proposed text: none can be proposed without a PM decision on the intended order. Proposal: the PM states the final OnePage order and the coordinating ChatGPT records it once, either in `docs/ARCHITECTURE.md` (Component Architecture Principle, which currently lists sections as a set, not an order) or in an ADR; the Menu, Bottom Navigation, and `src/index.njk` then follow it.
- Reason: `src/index.njk` composes sections "in approved order" (ARCHITECTURE) but no single approved order is recorded.

### P-05 — Location and naming for reference-extraction artifacts and PM decision records (item e)
- File: `docs/ARTIFACT-CONVENTIONS.md`.
- Verified situation: it defines phase specifications, milestone specifications, handoffs, audit requests, and audit results. It defines no location or naming for reference-extraction artifacts (the repository uses `docs/reference-extraction/<NAME>-EXTRACTION.md` plus the workflow and template) and none for PM decision records (Phase 03 uses a milestone specification, `docs/phases/phase-03/M03-03-…`).
- Proposed text (new sections): "## Reference Extractions — Location: docs/reference-extraction/ — Naming: <SECTION>-EXTRACTION.md — Method: REFERENCE-EXTRACTION-WORKFLOW.md and REFERENCE-SECTION-TEMPLATE.md." and "## PM Decision Records — Location: the milestone specification of the milestone in which the decision was made (docs/phases/phase-XX/MXX-YY-<slug>.md); each decision carries an ID, the approver, the date range, and the related identifiers; decisions given only in conversation must be recorded there before dependent work starts."
- Reason: codifies existing practice; avoids per-phase invention.

### P-06 — Milestone `Status:` lines inside phase specifications (item f)
- Files: `docs/phases/PHASE-03-como-trabajamos.md` (eight `Status:` lines, one per milestone plus the phase), and by precedent `docs/phases/PHASE-02-controlled-reference-migration.md` (M02-04, M02-05).
- Verified situation: `docs/CONTEXT-PROTOCOL.md` says each phase or milestone specification contains exactly one canonical `Status:` under `## Identification` and no secondary field may independently represent state. Per-milestone status inside a phase specification is used in both phases but is not addressed by the rule; milestone files in `docs/phases/phase-03/` also carry their own `Status:` (M03-02, M03-03), so the same milestone state exists in two places.
- Proposed text: add one sentence to the Canonical Status Rule stating either (a) the milestone `Status:` in its own milestone file is canonical and the phase specification lists milestones without a status value, or (b) the phase specification is canonical for milestones that have no file, and the milestone file is canonical when it exists.
- Reason: removes a duplicate-state risk that CONTEXT-PROTOCOL treats as a STOP condition at closure.

### P-07 — ARCHITECTURE.md "undefined" statements that no longer match approved content (item f)
- File: `docs/ARCHITECTURE.md`.
- Current text: line 118 "Detailed component structure is not yet defined."; "Explicitly Undefined" list line 225 "Build command" and line 230 "Final component file structure".
- Verified situation: the same file defines the approved Nunjucks component structure (line 120 onward); `package.json` defines `"build": "eleventy"` and Phase 02 handoff evidence uses `npm run build`.
- Proposed text: remove or qualify the three statements (for example "Detailed component structure: see 'Nunjucks Component Structure' below"; "Build command: `npm run build` (eleventy), per package.json"), only if the PM confirms the build command is approved rather than merely present.
- Reason: ARCHITECTURE.md states it contains only confirmed decisions; stale "undefined" markers contradict approved sections.

### P-08 — Viewport definitions are not centralized (item f)
- Files: `docs/TESTING-PROTOCOL.md` ("Exact viewport requirements must come from the relevant specification and must not be invented"), `docs/reference-extraction/MENU-EXTRACTION.md` (Tablet observed at 1024 × 1366), `docs/reference-extraction/COMO-TRABAJAMOS-EXTRACTION.md` (at 1024 × 1366 the reference applies its ≥992px "desktop" rules).
- Verified situation: "Desktop / Tablet / Mobile Landscape / Mobile Portrait" are used as classes in every spec, but no repository document defines their widths or reference viewports for the project. M03-03 O-01 depends on this.
- Proposed text: a PM-approved table (class, reference viewport(s), CSS range if any) in one governance document or ADR. Values are a PM decision; none are proposed here.
- Reason: avoids each phase re-deriving viewport classes.

### P-09 — UTF-8 BOM in governance documents (item f)
- Files (verified by checking the first three bytes): `docs/TESTING-PROTOCOL.md`, `docs/tracking/BUGS.md`, `docs/tracking/FINDINGS.md`, `docs/decisions/ADR-001`, `ADR-003`, `ADR-004`, `ADR-005`. Six issued Phase 00 audit results (R01–R06) also begin with a BOM and are excluded (immutable).
- Verified situation: Phase 02 finding F-05 removed a BOM from a Nunjucks component because it caused a layout artifact. The documents above are Markdown and no defect from them has been observed.
- Proposed text: none required. If the PM wants consistency, remove the BOM from the seven non-immutable files in a single documentation commit.
- Reason: consistency only; low severity; no behavior impact observed.

## Git Reference

Branch:
main

Last validated commit (before this handoff):
5fe5399fc42bbcc7b0c16c120846a8a5abc253b7

Commit containing this handoff: see Git history (`docs: record Phase 03 PM decisions (M03-03)`).

## Handoff Status

READY — scope freeze PENDING PM CONFIRMATION — IMPLEMENTATION NOT AUTHORIZED
