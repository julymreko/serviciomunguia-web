# M01-04 — Cloudflare Static Deployment Foundation

## Status

COMPLETED

## Objective

Establish the minimum Cloudflare deployment foundation required to publish the validated Phase 01 Eleventy static build at https://new.serviciomunguia.com.

M01-04 is not complete until the public staging hostname is reachable over HTTPS, returns HTTP 200, and serves the expected Phase 01 static content.

## Preconditions

- Phase 01 is IN PROGRESS.
- M01-03 is COMPLETED and published.
- Cloudflare zone readiness has been verified.
- M01-03.5 was determined NOT REQUIRED.
- serviciomunguia.com is administrable in the applicable Cloudflare account.
- Workers and Pages functionality is available in that account.
- HEAD equals origin/main.
- Working tree is clean.
- The approved build boundary remains src/ -> dist/.
- Eleventy remains pinned to 3.1.6.

## In Scope

- Determine the minimum supported Cloudflare static deployment configuration for the approved Phase 01 architecture.
- Add only the repository configuration required to deploy dist/ as static content.
- Authenticate to Cloudflare through an explicit PM-controlled login or credential action when required.
- Create the minimum Cloudflare project/resource required for the static deployment.
- Deploy the current validated Phase 01 static build.
- Configure new.serviciomunguia.com for that deployment.
- Verify public HTTPS availability.
- Verify HTTP 200 at https://new.serviciomunguia.com.
- Verify the public response contains the expected Phase 01 synthetic content.
- Verify the synthetic asset pipeline remains publicly reachable if applicable.
- Record observable deployment evidence.
- Preserve production serviciomunguia.com without replacement or migration.

## Out of Scope

- Production deployment to serviciomunguia.com.
- Replacing the existing production site.
- Bricks migration.
- Production copy or design.
- Final navigation, CSS, JavaScript, imagery, or production assets.
- Cloudflare Worker API implementation.
- D1.
- Turnstile.
- ZeptoMail.
- Forms or user input.
- Production caching strategy.
- Advanced redirects or routing policy.
- SEO implementation belonging to M01-05.
- Reference extraction belonging to M01-06.
- Any M01-05 or later implementation.

## Deployment Target

Public staging hostname:

https://new.serviciomunguia.com

Static build source:

dist/

The deployment must serve the validated Eleventy-generated static output.

## Authentication Policy

Cloudflare authentication, manual login, account selection, credential provisioning, or secret entry is a PM-controlled user action.

Agents must not invent Cloudflare credentials, tokens, account identifiers, zone identifiers, or secrets.

If authentication is required, STOP at the exact user action and request it explicitly.

## DNS and Hostname Policy

Do not modify unrelated DNS records.

Do not change nameservers.

Do not replace the current production hostname.

Only the configuration required for new.serviciomunguia.com is within M01-04 scope.

Any proposed DNS operation that could affect serviciomunguia.com production traffic requires explicit PM approval before execution.

## External Dependency Policy

DNS propagation, certificate issuance, and public edge propagation are external asynchronous dependencies.

If the deployment and hostname configuration are correct but public HTTPS is not yet observable, M01-04 must be marked BLOCKED with an external dependency.

A successful deployment command alone is not sufficient for PASS.

## Required Deliverables

- Repository Cloudflare deployment configuration required by the selected supported deployment method.
- Successful static deployment of dist/.
- new.serviciomunguia.com connected to that deployment.
- Public HTTPS response from new.serviciomunguia.com.
- HTTP 200 evidence.
- Expected Phase 01 synthetic HTML content evidence.
- Deployment verification record.
- Updated Phase 01 and PROJECT-STATE records after technical verification.

## Testing Classification

### Build

APPLIES

Verify npm run build still succeeds before deployment and produces the expected dist/ output.

### Functional

APPLIES

Verify https://new.serviciomunguia.com publicly returns HTTP 200 and serves the expected Phase 01 content.

### Responsive

N/A - M01-04 deploys the synthetic Phase 01 foundation and does not implement production responsive behavior.

### SEO

N/A - The formal static SEO baseline belongs to M01-05.

### Accessibility

N/A - M01-04 does not introduce production UI or an accessibility implementation milestone.

### Performance

N/A - M01-04 does not establish production performance budgets, optimization, or cache policy.

### Security

APPLIES

Verify no credentials, tokens, secrets, or account-sensitive values are committed to the repository and production traffic is not redirected or replaced.

### Integrations

APPLIES

Verify the repository static output is successfully connected to Cloudflare and the staging hostname resolves to the deployed site.

### Regression

APPLIES

Verify M01-01 runtime, M01-02 Nunjucks generation, and M01-03 static asset behavior remain operational after Cloudflare deployment configuration is introduced.

## PASS Criteria

M01-04 may be marked COMPLETED only when:

1. All preconditions remain satisfied.
2. The selected deployment method is supported by the current Cloudflare platform.
3. Required repository deployment configuration exists.
4. npm run build succeeds.
5. dist/ contains the expected Phase 01 static output.
6. No secret or credential is committed.
7. A real Cloudflare deployment completes successfully.
8. new.serviciomunguia.com is connected to the deployment.
9. https://new.serviciomunguia.com is publicly reachable over HTTPS.
10. The public staging hostname returns HTTP 200.
11. The public response contains the expected Phase 01 synthetic content.
12. The synthetic asset pipeline remains available if tested.
13. Existing production serviciomunguia.com traffic is not replaced or redirected.
14. No Worker API, D1, Turnstile, ZeptoMail, production migration, or M01-05+ implementation is introduced.
15. All applicable technical, security, integration, regression, and governance verification criteria are satisfied.

## Publication Gate

After M01-04 is marked COMPLETED:

- Commit the validated milestone state.
- Push the commit to origin/main.
- Verify HEAD equals origin/main.
- Verify the working tree is clean.

M01-05 must not begin until this publication gate passes.

## STOP / BLOCKED Conditions

Set M01-04 to BLOCKED and STOP if:

- the repository is not synchronized and clean at milestone start;
- current Cloudflare documentation contradicts the planned deployment mechanism;
- authentication or account selection requires PM action;
- a required Cloudflare account, zone, or property identifier cannot be established safely;
- deployment requires an undefined architecture decision;
- production DNS would be affected without explicit PM approval;
- npm run build fails for an unresolved reason;
- deployment fails for an unresolved reason;
- new.serviciomunguia.com cannot be connected safely;
- public HTTPS remains unavailable after correct configuration because of DNS, TLS, or edge propagation;
- the public hostname does not return HTTP 200;
- required behavior depends on M01-05 or later work;
- a governance or architecture contradiction prevents safe continuation.

## Verification Record

Build:
- npm run build completed successfully with Eleventy 3.1.6.
- dist/index.html and the synthetic static asset were generated successfully.

Cloudflare Deployment:
- Wrangler 4.122.0 was installed and verified locally.
- Wrangler OAuth authentication completed successfully.
- Workers Static Assets dry-run completed successfully.
- A real Cloudflare deployment completed successfully.
- Initial workers.dev deployment returned HTTP 200 with expected Phase 01 content.
- Custom Domain new.serviciomunguia.com was configured through Wrangler.
- Real deployment with the Custom Domain completed successfully.
- Public HTTPS at https://new.serviciomunguia.com returned HTTP 200.
- Public HTML contained "Phase 01 Foundation" and "Nunjucks layout inheritance verified."
- https://new.serviciomunguia.com/assets/pipeline-proof.txt returned HTTP 200 with the expected synthetic asset content.

Security:
- Cloudflare credentials were handled through Wrangler OAuth and were not added to the repository.
- No tokens, secrets, account credentials, zone identifiers, or private authentication material were committed.

Regression:
- Production serviciomunguia.com was visually verified by the PM as still operational after staging deployment.
- Production traffic was not intentionally replaced or redirected.
- M01-01 runtime, M01-02 Nunjucks, and M01-03 static asset behavior remained operational.
- git diff --check reported no blocking errors.

Findings:
- When a Custom Domain route is configured and workers_dev is omitted, Wrangler disables workers.dev and Preview URLs by default. This did not block M01-04 because the required target is new.serviciomunguia.com.
- Cloudflare Web Analytics injected a beacon script into the public HTML response. This script is not present in the repository source and did not block the milestone.

## Execution Record

### Started

2026-08-12

### Completed

2026-08-12

## Findings

None recorded yet.

## Bugs

None recorded yet.

## Pending Items

- Complete the M01-04 publication gate before M01-05 begins.

## Handoff

Not generated. A formal milestone handoff is not required while execution remains in the same coordinated context.

## Final Status

COMPLETED

Use COMPLETED only after all applicable acceptance criteria have been verified.