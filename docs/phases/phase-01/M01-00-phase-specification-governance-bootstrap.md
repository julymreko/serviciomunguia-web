# M01-00 - Phase Specification & Governance Bootstrap

## Identification

Phase:
01 - Foundation

Milestone:
M01-00 - Phase Specification & Governance Bootstrap

Status:
COMPLETED

Owner:
Julián Cely

Executing Agent:
ChatGPT coordinating with the Product Manager

Audit Agent:
N/A - this milestone is not a formal audit gate

## Objective

Create and version the authoritative Phase 01 specification, execution policies, milestone segmentation, and milestone specification structure before technical implementation begins.

## Required Inputs

- Phase 00 status is COMPLETED.
- Repository governance from Phase 00 is authoritative.
- ADR-006 is ACCEPTED and committed to main.
- Node.js runtime line is approved as 24.x LTS.
- Phase 01 validation runtime is approved as Node.js 24.19.0.
- Eleventy is approved as @11ty/eleventy@3.1.6.
- Product Manager has approved the Phase 01 milestone segmentation and execution policies.

Execution must not continue if any required input is missing, contradictory, or not recorded in the repository.

## Scope

### In Scope

- Create docs/phases/PHASE-01-foundation.md.
- Create the docs/phases/phase-01/ milestone specification structure.
- Record the approved Phase 01 milestone sequence.
- Record the Phase 01 audit-gate policy.
- Record the milestone handoff policy.
- Record the testing applicability policy.
- Record explicit PASS and STOP/BLOCKED requirements.
- Record the M01-04 Cloudflare deployment closure requirement.
- Record the conditional M01-03.5 Cloudflare Zone Readiness milestone.
- Record the M01-02 scope guard against premature real-content migration.
- Record the M01-06 known limitation.
- Record the M01-07 formal phase-closure responsibilities.

### Out of Scope

- Installing Node.js packages.
- Initializing Eleventy.
- Creating package.json.
- Implementing Nunjucks.
- Creating production CSS or JavaScript.
- Configuring Wrangler.
- Accessing Cloudflare.
- Deploying any site.
- Extracting real Bricks content.
- Implementing any production page or component.
- Performing the Phase 01 audit gate.

## Dependencies

- docs/ARTIFACT-CONVENTIONS.md
- docs/CONTEXT-PROTOCOL.md
- docs/TESTING-PROTOCOL.md
- docs/PRE-DEPLOYMENT-AUDIT.md
- docs/ARCHITECTURE.md
- docs/PROJECT-STATE.md
- docs/decisions/ADR-004-project-governance.md
- docs/decisions/ADR-006-runtime-version-pinning.md

## Tasks

- Create the Phase 01 master specification.
- Create the milestone specification directory.
- Create milestone specification files M01-00 through M01-07, including conditional M01-03.5.
- Verify that approved execution policies are present in the master specification.
- Verify naming and paths against ARTIFACT-CONVENTIONS.md.
- Verify no technical implementation work has started.
- Record M01-00 closure evidence in this specification.
- Update the authoritative Phase 01 state before M01-01 begins.

## Deliverables

- docs/phases/PHASE-01-foundation.md
- docs/phases/phase-01/M01-00-phase-specification-governance-bootstrap.md
- docs/phases/phase-01/M01-01-repository-runtime-skeleton.md
- docs/phases/phase-01/M01-02-nunjucks-layout-foundation.md
- docs/phases/phase-01/M01-03-static-asset-pipeline.md
- docs/phases/phase-01/M01-03.5-cloudflare-zone-readiness.md
- docs/phases/phase-01/M01-04-cloudflare-static-deployment-foundation.md
- docs/phases/phase-01/M01-05-seo-html-baseline.md
- docs/phases/phase-01/M01-06-reference-site-extraction-framework.md
- docs/phases/phase-01/M01-07-foundation-integration-check.md

## Testing Applicability Matrix

Build:
N/A - this milestone creates governance and specification artifacts only.

Functional:
APPLIES

Responsive:
N/A - no user interface is implemented.

SEO:
N/A - SEO implementation belongs to M01-05.

Accessibility:
N/A - no user-facing interface is implemented.

Performance:
N/A - no runtime or production asset is implemented.

Security:
N/A - no secrets, authentication, API, or external runtime integration is introduced.

Integrations:
N/A - no external integration is executed.

Regression:
APPLIES

## Verification Evidence Required

Functional:
- Phase 01 master specification exists and is non-empty.
- Milestone specification paths conform to ARTIFACT-CONVENTIONS.md.
- Approved Phase 01 policies are explicitly documented.
- No milestone execution depends solely on decisions remaining only in chat.

Regression:
- Phase 00 remains COMPLETED.
- ADR-006 remains authoritative.
- No Phase 00 governance rule is contradicted.
- No undefined implementation decision is presented as approved.

## PASS Criteria

M01-00 may be marked COMPLETED only when:

1. PHASE-01-foundation.md exists and contains the approved Phase 01 scope and execution policies.
2. The milestone specification directory and required milestone files exist.
3. The milestone naming and paths comply with ARTIFACT-CONVENTIONS.md.
4. The sole formal Phase 01 audit gate is M01-07.
5. M01-01 through M01-06 are explicitly self-verified milestones.
6. Testing applicability rules are documented.
7. PASS and STOP/BLOCKED behavior is documented.
8. M01-04 requires observable HTTPS, HTTP 200, and expected content.
9. Conditional Cloudflare Zone Readiness handling is documented.
10. M01-02 real-content scope protection is documented.
11. M01-06 real-section validation deferral is documented.
12. M01-07 formal closure responsibilities are documented.
13. No technical implementation has begun.
14. Repository diff validation succeeds.

## STOP / BLOCKED Conditions

Stop execution and mark the milestone BLOCKED if:

- an approved Phase 01 decision conflicts with existing governance;
- a required execution policy remains undefined;
- an artifact path or naming convention conflicts with ARTIFACT-CONVENTIONS.md;
- an unresolved Product Manager decision is required to finish the specification;
- Phase 00 or ADR-006 is found not to be authoritative in the repository.

## Execution Record

### Started

2026-08-12

### Completed

2026-08-12

### Git Commit

Recorded by the commit that establishes the authoritative Phase 01 opening state.

## Findings

None recorded.

## Bugs

None recorded.

## Pending Items

- NONE

## Decisions Required

None currently recorded.

If a required decision becomes undefined, execution must stop and request clarification from Julián Cely.

## Handoff

Not generated.

A formal handoff is not required for M01-00 unless the executing agent changes or material execution context cannot be reconstructed from repository artifacts.

## Final Status

COMPLETED

Use COMPLETED only after all applicable acceptance criteria have been verified.
