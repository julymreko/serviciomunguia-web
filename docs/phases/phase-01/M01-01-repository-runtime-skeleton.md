# M01-01 - Repository Runtime Skeleton

## Identification

Phase:
01 - Foundation

Milestone:
M01-01 - Repository Runtime Skeleton

Status:
COMPLETED

Owner:
Julián Cely

Executing Agent:
ChatGPT coordinating with the Product Manager

Audit Agent:
N/A - self-verified milestone, not a formal audit gate

## Objective

Establish the minimum local Eleventy project foundation required to run a development server and produce a successful static build.

This milestone proves only that the approved runtime and Eleventy toolchain work correctly in the repository.

## Required Inputs

- Phase 01 is IN PROGRESS.
- M01-00 is COMPLETED.
- Working tree is clean before implementation begins.
- ADR-006 is authoritative.
- Approved Node.js runtime line: 24.x LTS.
- Phase 01 validated Node.js version: 24.19.0.
- Approved Eleventy version: @11ty/eleventy@3.1.6.

Execution must stop if the installed Node.js version does not satisfy the approved Phase 01 runtime baseline.

## Scope

### In Scope

- Verify installed Node.js and npm versions.
- Create package.json.
- Install @11ty/eleventy@3.1.6 as a development dependency.
- Create the minimum Eleventy source required to prove generation.
- Add npm scripts for local development and production build.
- Produce a successful Eleventy build.
- Verify generated static output exists.
- Verify the Eleventy development server starts successfully.
- Record observable verification evidence.
- Commit and push the validated M01-01 state.

### Out of Scope

- Reusable Nunjucks layouts.
- Header or footer partials.
- Production content.
- Real SERVICIOMUNGUIA.COM content.
- Bricks migration.
- Production CSS.
- Production JavaScript.
- Static asset pipeline design.
- SEO metadata implementation.
- Cloudflare configuration.
- Wrangler.
- Deployment.
- D1.
- Worker API routes.
- Turnstile.
- ZeptoMail.

## Approved Build Boundary

Eleventy input directory:
src/

Eleventy output directory:
dist/

The public Eleventy build must be isolated from repository governance artifacts.

docs/, .remember/, audit artifacts, ADRs, phase specifications, and other non-site repository content must not be compiled into the public output.

This decision was approved by the Product Manager on 2026-08-12 after the initial M01-01 build demonstrated that Eleventy's default repository-root input incorrectly included governance content.

## Dependencies

- docs/ARCHITECTURE.md
- docs/PROJECT-STATE.md
- docs/phases/PHASE-01-foundation.md
- docs/decisions/ADR-001-frontend-stack.md
- docs/decisions/ADR-006-runtime-version-pinning.md

## Tasks

- Verify Node.js runtime.
- Verify npm availability.
- Initialize the minimum npm project.
- Install the approved Eleventy version.
- Create the minimum Eleventy source file.
- Define dev and build scripts.
- Execute the production build.
- Verify generated HTML exists.
- Execute the local development server.
- Record verification evidence.
- Synchronize milestone and project state.
- Commit and push.

## Deliverables

- package.json
- package-lock.json
- Minimum Eleventy source file
- Generated build capability
- npm development command
- npm production build command
- Completed M01-01 milestone specification

## Testing Applicability Matrix

Build:
APPLIES

Functional:
APPLIES

Responsive:
N/A - no responsive UI is implemented.

SEO:
N/A - SEO baseline belongs to M01-05.

Accessibility:
N/A - no production user interface is implemented.

Performance:
N/A - no production performance target is evaluated in this milestone.

Security:
N/A - no secrets, authentication, API, or external integration is introduced.

Integrations:
N/A - no external service is integrated.

Regression:
APPLIES

## Verification Evidence Required

Build:
- npm build command completes successfully.
- Eleventy generates the expected static output directory.
- Generated index HTML exists.

Functional:
- npm development command starts Eleventy successfully.
- The generated placeholder page is locally reachable.

Regression:
- Phase 00 remains COMPLETED.
- Phase 01 governance artifacts remain intact.
- No work from M01-02 or later milestones is introduced.
- git diff --check succeeds before commit.

## PASS Criteria

M01-01 may be marked COMPLETED only when:

1. Installed Node.js satisfies the ADR-006 Phase 01 validation requirement.
2. npm is available.
3. package.json exists.
4. @11ty/eleventy is pinned to 3.1.6.
5. package-lock.json exists.
6. The minimum Eleventy source exists.
7. The production build completes successfully.
8. Generated static HTML exists.
9. The development server starts successfully.
10. No out-of-scope implementation has been introduced.
11. Required testing evidence is recorded.
12. Repository validation succeeds.
13. All applicable technical and governance verification criteria are satisfied.

## Publication Gate

After M01-01 is marked COMPLETED:

- Commit the validated milestone state.
- Push the commit to origin/main.
- Verify HEAD equals origin/main.
- Verify the working tree is clean.

M01-02 must not begin until this publication gate passes.

## STOP / BLOCKED Conditions

Stop execution and mark the milestone BLOCKED if:

- Node.js does not satisfy the approved ADR-006 runtime requirement;
- Eleventy 3.1.6 cannot be installed;
- npm installation fails for an unresolved environment reason;
- the build cannot complete;
- a required implementation decision is undefined;
- completing the milestone would require work assigned to a later milestone;
- a governance or architecture contradiction is discovered.

## Verification Record

Runtime:
- Node.js v24.19.0 verified.
- npm 11.17.0 verified.
- @11ty/eleventy pinned exactly to 3.1.6.

Build:
- Approved Eleventy boundary is src/ -> dist/.
- Initial repository-root build exposed governance-content leakage and was rejected.
- Eleventy configuration was corrected to isolate public build input and output.
- Final npm run build completed successfully.
- Final build generated exactly dist/index.html from src/index.html.
- Governance artifacts were not included in the final public build.

Functional:
- npm run dev started Eleventy successfully.
- Local server was available at http://localhost:8080/.
- HTTP response status was 200.
- Served content contained "Phase 01 Foundation" and "Eleventy runtime skeleton verified."

Regression:
- No M01-02 or later implementation was introduced.
- dist/ remains ignored by Git.
- git diff --check produced no blocking errors.

## Execution Record

### Started

2026-08-12

### Completed

2026-08-12

### Git Commit

UNDEFINED

## Findings

None recorded.

## Bugs

None recorded.

## Pending Items

- Complete the M01-01 publication gate before M01-02 begins.

## Decisions Required

None currently recorded.

If a required decision becomes undefined, execution must stop and request clarification from Julián Cely.

## Handoff

Not generated.

A formal handoff is not required unless the executing agent changes or material execution context cannot be reconstructed from repository artifacts.

## Final Status

COMPLETED

Use COMPLETED only after all applicable acceptance criteria have been verified.
