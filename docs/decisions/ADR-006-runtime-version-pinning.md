# ADR-006 - Runtime Version Pinning

Status: ACCEPTED

## Decision

Phase 01 uses the following approved runtime and build-tool versions:

- Node.js runtime line: 24.x LTS
- Phase 01 validated Node.js version: 24.19.0
- Eleventy version: @11ty/eleventy@3.1.6

Eleventy v4 prerelease versions are not approved for Phase 01.

## Rationale

The project governance rules prohibit AI agents from inventing or assuming undefined implementation decisions.

ARCHITECTURE.md previously listed both the Node.js version and the Eleventy version as explicitly undefined.

These versions are now approved so that Phase 01 milestone M01-01 can be executed reproducibly without violating ADR-004.

Using Node.js 24.x LTS defines the approved runtime line while pinning Phase 01 validation to Node.js 24.19.0 provides a concrete reproducible starting point.

Eleventy 3.1.6 is the approved stable version for Phase 01.

## Scope

This ADR governs runtime version selection for Phase 01.

A later Node.js 24.x patch update does not require a new architecture decision unless it introduces a compatibility issue or materially changes project behavior.

Changing the approved Node.js major runtime line or changing the approved Eleventy major/minor version requires explicit Product Manager approval and repository documentation.

## Product Manager Approval

Approved by:
Julián Cely

Approval date:
2026-08-12

## Related Decisions

- ADR-001 - Frontend Stack
- ADR-004 - Project Governance and Source of Truth
