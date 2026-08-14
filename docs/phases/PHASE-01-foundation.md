# PHASE 01 - Foundation

## Identification

Phase:
01 - Foundation

Status:
IN PROGRESS

Owner:
Julián Cely

Executing Agent:
UNDEFINED

Audit Agent:
Claude Code for the final Phase 01 audit gate only

## Objective

Build and validate the minimum technical foundation for the new SERVICIOMUNGUIA.COM implementation using Eleventy and Nunjucks, with static HTML generation, asset handling, SEO-safe output, Cloudflare deployment readiness, and a controlled migration preparation workflow.

Phase 01 must not begin real reconstruction of approved Bricks content or production visual design.

## Secondary Objectives

- Establish the local Eleventy runtime and build skeleton.
- Validate reusable Nunjucks layouts and partial composition.
- Establish static asset handling.
- Deploy the minimal static foundation to Cloudflare at new.serviciomunguia.com.
- Validate the minimum static SEO HTML baseline.
- Define a reusable Bricks extraction framework without performing real section migration.
- Perform one final integrated foundation audit before Phase 01 closure.

## Required Inputs

- Phase 00 governance baseline completed.
- ADR-001 through ADR-006 available in the repository.
- Node.js runtime line approved as 24.x LTS.
- Phase 01 validation runtime approved as Node.js 24.19.0.
- Eleventy approved as @11ty/eleventy@3.1.6.
- Cloudflare access available before M01-04.
- Product Manager approval for all unresolved implementation decisions.

Execution must stop when a required input is missing, contradictory, or undefined.

## Scope

### In Scope

- Eleventy local project foundation.
- Nunjucks layout and partial architecture.
- Static asset pipeline.
- Cloudflare Workers Static Assets deployment foundation.
- Real deployment verification at https://new.serviciomunguia.com.
- Static HTML SEO baseline.
- Bricks extraction framework/template.
- Final integrated Phase 01 verification and audit.
- Repository state synchronization and formal Phase 01 closure.

### Out of Scope

- Real migration of approved Bricks sections.
- Production page copy migration.
- Final design system.
- Production visual styling.
- D1 schema or database implementation.
- Worker API routes.
- Turnstile implementation.
- ZeptoMail implementation.
- Postal-code coverage logic.
- Production contact forms.
- Real Bricks extraction validation against a live section.
- Phase 2 implementation work.

## Phase Execution Policies

### Audit Gate Policy

M01-01 through M01-06 are self-verified milestones and are not formal audit gates.

Each milestone closes only after observable evidence verifies its milestone-specific acceptance criteria.

M01-07 is the sole formal audit gate for Phase 01 and requires Claude Code PASS before Phase 01 may be marked COMPLETED.

Earlier audit escalation is required only if a blocking inconsistency, undefined decision, governance conflict, or architecture conflict prevents safe continuation.

### Handoff Policy

A formal milestone handoff is required only when milestone completion changes the execution context for a subsequent agent, the executing agent changes, or material context cannot be safely reconstructed from repository artifacts.

Otherwise, milestone closure is recorded directly in the milestone specification.

A formal Phase 01 closing handoff is required during M01-07.

### Testing Applicability Policy

Every Phase 01 milestone specification must explicitly classify all nine testing areas defined by TESTING-PROTOCOL.md:

- Build
- Functional
- Responsive
- SEO
- Accessibility
- Performance
- Security
- Integrations
- Regression

Each area must be classified as exactly one of:

- APPLIES
- N/A - <reason>

No testing area may be omitted.

Only areas marked APPLIES require milestone closure evidence.

### Publication Gate Policy

For self-verified milestones M01-01 through M01-06, technical verification determines whether the milestone may be marked COMPLETED.

Commit, push, HEAD = origin/main verification, and clean working-tree verification are mandatory publication checks performed after the milestone is marked COMPLETED and before execution of the next milestone begins.

A self-verified milestone must not require an additional post-commit documentation commit solely to record its own commit hash.

The next milestone must not begin until the preceding milestone publication gate has passed.

### Blocking Policy

Every Phase 01 milestone must define explicit PASS criteria and explicit STOP/BLOCKED conditions.

A milestone must not be forced to PASS while an unresolved external dependency prevents observable verification.

### Scope Guard Policy

Placeholder content used in technical foundation milestones must remain synthetic and disposable.

No real SERVICIOMUNGUIA.COM content may be introduced before the approved extraction workflow reaches the appropriate migration phase.

## Milestones

### M01-00 - Phase Specification & Governance Bootstrap

Purpose:
Create and version the authoritative Phase 01 specification and milestone structure before implementation begins.

Audit gate:
NO

Status:
COMPLETED

### M01-01 - Repository Runtime Skeleton

Status:
COMPLETED

Purpose:
Establish a minimal Eleventy project that runs locally and produces a successful static build.

Audit gate:
NO

### M01-02 - Nunjucks Layout Foundation

Status:
COMPLETED

Purpose:
Validate reusable Nunjucks layouts and partial composition using synthetic placeholder content only.

Audit gate:
NO

Scope guard:
Real Bricks content, final production copy, final design system, production CSS, approved section migration, images, navigation behavior, and interaction patterns are out of scope.

### M01-03 - Static Asset Pipeline

Status:
COMPLETED

Purpose:
Establish and verify static CSS, JavaScript, image, and related asset handling.

Audit gate:
NO

### M01-03.5 - Cloudflare Zone Readiness

Conditional milestone:
YES

Purpose:
Resolve Cloudflare zone ownership, nameserver, hostname, or account-access readiness only if the prerequisite check shows that serviciomunguia.com is not already manageable from the applicable Cloudflare account.

This milestone is not created or executed if the Cloudflare readiness prerequisite is already satisfied.

Audit gate:
NO

### M01-04 - Cloudflare Static Deployment Foundation

Status:
COMPLETED

Purpose:
Deploy the minimal Eleventy static foundation through Cloudflare Workers Static Assets and expose it at https://new.serviciomunguia.com.

Audit gate:
NO

Closure evidence:
- Public HTTPS availability.
- HTTP 200 response from https://new.serviciomunguia.com.
- Expected Phase 01 static content is observable.
- A successful Wrangler deployment command alone is insufficient.

External dependency rule:
DNS propagation and TLS certificate issuance are asynchronous external dependencies.

If configuration is correct but public HTTPS verification is not yet observable, the milestone must be marked BLOCKED with the external blocker recorded.

Out of scope:
D1, Worker API routes, Turnstile, ZeptoMail, and application secrets.

### M01-05 - SEO HTML Baseline

Status:
COMPLETED

Purpose:
Validate that the minimum SEO-critical metadata and semantic baseline exist directly in generated static HTML without JavaScript dependency.

Audit gate:
NO

### M01-06 - Reference-Site Extraction Framework — COMPLETED
Purpose:
Create the reusable framework and template that will later be used to extract approved content, responsive behavior, assets, links, and interaction decisions from the Bricks reference site.

Audit gate:
NO

Known limitation:
The extraction template remains unvalidated against a real SERVICIOMUNGUIA.COM section during Phase 01.

Real-world validation is deferred to Phase 2 and is not required for M01-06 closure.

### M01-07 - Foundation Integration Check

Purpose:
Verify that the complete Phase 01 foundation works as an integrated system and close the phase.

Audit gate:
YES - sole formal Phase 01 audit gate

Closure tasks:
- Verify all Phase 01 acceptance criteria.
- Execute the final Claude Code audit.
- Require PASS before marking Phase 01 COMPLETED.
- Update PROJECT-STATE.md.
- Clear the active Current Working Item.
- Set Next Item only to a Product Manager-approved Phase 2 entry point.
- If Phase 2 is not approved, keep Next Item explicitly undefined.
- Synchronize PHASE-01-foundation.md.
- Create and finalize docs/handoffs/PHASE-01-HANDOFF.md.
- Set the handoff to READY only after final audit PASS.
- Commit the validated Phase 01 closure state.
- Push the validated closure state to GitHub.
- Verify HEAD equals origin/main.
- Verify the working tree is clean.

## Deliverables

- docs/phases/PHASE-01-foundation.md
- Milestone specifications under docs/phases/phase-01/
- Working Eleventy project foundation
- Nunjucks layout/partial foundation
- Static asset pipeline
- Cloudflare staging deployment at https://new.serviciomunguia.com
- Static SEO baseline
- Bricks extraction framework/template
- Final Phase 01 audit result
- docs/handoffs/PHASE-01-HANDOFF.md

## Acceptance Criteria

1. All required milestone specifications exist before their execution begins.
2. M01-01 through M01-06 are closed by self-verification evidence and are not treated as formal audit gates.
3. Each milestone explicitly classifies all nine testing areas.
4. Every milestone defines PASS and STOP/BLOCKED conditions.
5. Node.js and Eleventy execution follows ADR-006.
6. Real Bricks content is not migrated during Phase 01.
7. Cloudflare zone readiness is verified before M01-04 deployment work begins.
8. M01-04 is not complete until https://new.serviciomunguia.com is publicly reachable over HTTPS with HTTP 200 and expected content.
9. DNS or TLS propagation delays are recorded as BLOCKED rather than forced to PASS.
10. M01-06 closes with a reusable extraction framework/template and does not require real-section validation.
11. M01-07 completes the sole formal Phase 01 audit gate with Claude Code PASS.
12. PHASE-01-HANDOFF.md is finalized to READY only after the audit PASS.
13. PROJECT-STATE.md and the Phase 01 specification reflect the final verified state.
14. The validated closure state is committed and pushed.
15. HEAD equals origin/main and the working tree is clean at final closure.

## Audit Record

No Phase 01 audit has been executed yet.

## Pending Items

- Create and execute M01-01 through M01-07 sequentially.
- Verify Cloudflare zone readiness before M01-04.
- Obtain final Phase 01 audit PASS at M01-07.
- Finalize Phase 01 handoff and repository closure state.

## Git Reference

Phase 01 opening baseline:
29f6147

Authoritative runtime decision:
docs/decisions/ADR-006-runtime-version-pinning.md

## Final Status

IN PROGRESS

Use COMPLETED only after all applicable Phase 01 acceptance criteria and the M01-07 audit gate have been verified.
