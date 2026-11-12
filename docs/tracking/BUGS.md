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

ID:
BUG-002

Status:
OPEN

Severity:
MEDIUM (reason: the stepper scroll handler keeps running outside its section, contrary to an approved gating rule; no visible failure was observed)

Phase:
03 — Como trabajamos

Milestone:
M03-05 — Independent testing, task 2 (M03-05-02)

Summary:
The stepper scroll listener of `src/assets/js/process.js` stays registered and runs while the Process section is outside the viewport.

Expected Behavior:
Priority B specification `docs/phases/phase-03/M03-04-priority-b-technical-specification.md` section 4.1 step 3: while the section does not intersect the viewport the controller is stopped and its `scroll` listener is removed. Section 4.2: one passive `scroll` listener, attached only while active.

Actual Behavior:
At scroll 0 at 390 x 844 (section top at 844 px, outside the viewport) the window has one `scroll` listener registered by `process.js` (`handleStepperScroll`), and a synthetic `scroll` event there makes that handler request an animation frame. The count of window `scroll` listeners is 1 before, inside and after the section at all four set-L classes (FUN-03).

Evidence:
Test record `docs/phases/phase-03/tests/M03-05-02-functional-responsive-accessibility.md`, FUN-03; raw data and probe outputs in the M03-05-02 harness directory (outside the repository).

Impact:
Per-scroll work outside the Process section, against the approved gating. The Priority B measurements assume the listener is absent outside the section.

Related Test IDs:
FUN-03

Required Action:
Fix in `process.js` under a separate authorized task. No change was made under `src/` in this task. Product Manager decision 2026-11-11 (PD-48): accepted for the production release and moved to the backlog (item 60 of the Product Manager's tracking sheet); to be fixed after the production release, under its own task, allowed paths and authorization.

Resolution:
UNDEFINED

Verified By:
Claude Code (executor), test FUN-03. Reviewer (Codex): confirmed independently (M03-05-02 review-02 and review-04, CONFORME).

Verification Evidence:
Test record, FUN-03.

Closed Date:
UNDEFINED

ID:
BUG-003

Status:
OPEN

Severity:
MEDIUM (reason: keyboard focus of two interactive elements is not perceptible on the Desktop Hero; no approved threshold exists)

Phase:
03 — Como trabajamos

Milestone:
M03-05 — Independent testing, task 2 (M03-05-02)

Summary:
On the Desktop Hero the default keyboard-focus ring of the logo and of the Menu trigger is not visible against the hero photograph.

Expected Behavior:
Spec section 2.3 ACC-05 of `.coordination/tasks/M03-05-02/spec.md`: every interactive element has a visible focus indicator.

Actual Behavior:
At 1440 x 900 (HERO, scroll 0) the focus ring of the logo and of the trigger is `1px auto rgb(16, 16, 16)`. The sampled contrast of that ring against the surrounding photograph is 1.01:1 (median 1.01:1; 2781 logo pixels, 1017 trigger pixels). At 390 x 844 the same ring has a median contrast of 5.92:1 (logo) and 6.99:1 (trigger). With the Menu open, the trigger ring is present (`rgb(16, 16, 16)`).

Evidence:
Test record ACC-05; raw data and probe output in the M03-05-02 harness directory (outside the repository).

Impact:
Keyboard users on Desktop cannot see the focus position on the logo and on the Menu trigger in the Hero.

Related Test IDs:
ACC-05

Required Action:
Product Manager decision (class B) on the Desktop Hero focus treatment, since the approved Priority C text keeps the baseline focus treatment. No change was made in this task. Whether the Phase 02 baseline showed the same was not tested. Product Manager decision 2026-11-11 (PD-48): accepted for the production release and moved to the backlog (item 59 of the Product Manager's tracking sheet); to be fixed after the production release, under its own task, allowed paths and authorization.

Resolution:
UNDEFINED

Verified By:
Claude Code (executor), test ACC-05. Reviewer (Codex): confirmed independently (M03-05-02 review-04, CONFORME).

Verification Evidence:
Test record, ACC-05.

Closed Date:
UNDEFINED
