# GOV-01 G-04 Design Proposal — Revision 2 (DRAFT)

## Status

DRAFT. Not an approved architecture. Recorded here only so a task contract
can cite it as an input. Authorized for citation under Decision
GOV-01-G04-003 (Product Manager, Julián Cely). This document does not
itself authorize any implementation.

## Governing principle

Agents are never provisioned with any credential capable of `git push` or
`wrangler deploy`. There is nothing for an agent to bypass, because the
capability does not exist in its environment. The Product Manager performs
every actual push and every actual deployment personally, from their own
terminal, with their own credentials.

## 4. Recommended Architecture

```
Agent shell (Claude Code / OpenCode)
  process environment: GIT_ASKPASS -> always fails / empty (no GitHub credential reachable)
                        WRANGLER_HOME or CLOUDFLARE_API_TOKEN -> points nowhere / invalid
        |
        +- git push         --> auth required, no credential available --> fails, unconditionally
        +- npx wrangler deploy --> auth required, no credential available --> fails, unconditionally

ChatGPT Work: no network access in its command tool at all (already true today) --> fails, unconditionally

Agent, when work is ready:
   writes "Open for the Product Manager: ready to push/deploy, commit <SHA>"
   in its existing task-report (.coordination/tasks/<ID>/report-NN.md) -- advisory only, grants nothing

Product Manager, personally, from their own terminal, own credentials:
   reviews report-NN.md -> runs `git push` / `npx wrangler deploy` directly
```

No daemon, no hook, no wrapper, no new mailbox artifact. The entire mechanism
is "the capability is absent," enforced by GitHub's and Cloudflare's own
authentication, not by any file this repository or an agent could edit.

## 5. Push Guard

- Protected operation: `git push`.
- Enforcement point: none local. GitHub's own authentication, against a
  GitHub-side credential the agent's process never holds.
- Mechanism: the agent's process environment carries no usable Git credential
  for `origin`. On Windows, isolation must be a per-process override (e.g.
  `GIT_ASKPASS` pointing to a script that always returns empty, set only in
  the agent tool's own launch profile), never a change to the shared clone's
  `.git/config`, since the Product Manager's terminal uses that same clone.
- Lifetime / scope / expiration: not applicable -- there is no authorization
  object to expire. The absence is permanent until the Product Manager
  deliberately reconfigures that agent's environment.
- Failure behavior: `git push` fails with an authentication error before
  reaching the remote -- Git's and GitHub's own fail-closed behavior.
- Bypass considerations: `--no-verify` is irrelevant -- it only skips local
  hooks, and no hook is part of this design. The only way to defeat this is
  for the agent's process to obtain a working credential it was never given
  (credential leakage -- see section 11 of the full proposal, held in
  conversation, not reproduced here).
- PM workflow: the agent reports readiness via the existing `task-report`
  "Open for the Product Manager" field, naming the exact commit SHA. The
  Product Manager reviews it and runs `git push` personally.

## 6. Deploy Guard

- Protected operation: `npx wrangler deploy` (and any equivalent direct
  Cloudflare API call).
- Enforcement point: none local. Cloudflare's own authentication, against a
  credential the agent's process never holds.
- Cloudflare credential model: the agent's process environment carries no
  Wrangler OAuth session and no `CLOUDFLARE_API_TOKEN`. On Windows,
  `WRANGLER_HOME` (or an equivalent config-path override) for the agent's
  launch profile must point somewhere that does not contain the Product
  Manager's own Wrangler login.
- Lifetime / scope / expiration: not applicable, same reasoning as the push
  guard.
- Failure behavior: `wrangler deploy` fails authentication immediately;
  nothing is uploaded.
- Bypass considerations: direct `npx wrangler deploy` is not a "bypass" of
  anything in this design, because there is no wrapper to go around -- the
  same absent-credential failure applies to every invocation path equally.
- PM workflow: same pattern as push -- the agent reports the commit is
  build-ready; the Product Manager runs `npx wrangler deploy` personally.

## 7. Authorization Lifecycle

```
Agent finishes work -> states readiness in report-NN.md (advisory, not a grant)
        |
        v
PM reads the report, decides when to act
        |
        v
PM runs git push / wrangler deploy personally
        |
        v
PM's own task-report or decision-transcription records the resulting SHA/evidence
```

## 8. M2 Integration

No new mailbox location. No new artifact types. The existing `task-report`
skill already carries the field this design needs: `Open for the Product
Manager: <items>`. An agent writes `ready to push, commit <SHA>` or `ready
to deploy, commit <SHA>` there. `AGENTS.md`'s existing rule that "Commit,
push and deploy each remain separate Product Manager authorization gates"
is satisfied structurally: there is no gate to open for an agent, because an
agent was never a candidate to perform the operation in the first place.

## 9. Repository Changes

| Path | Change | Purpose |
|---|---|---|
| `AGENTS.md` | Modify | Add a short "G-04 Push and Deploy Capability" section: agents are never provisioned with a push- or deploy-capable credential, by design, enforced at the environment level; readiness is reported, not authorized, via the existing `task-report` "Open for the Product Manager" field. |
| `docs/SECRETS-POLICY.md` | Modify (one line) | State that agent process environments must never contain a push-capable Git credential or a deploy-capable Cloudflare credential. |

No scripts, no hooks, no templates, no `.gitignore` change, no
`package.json` change. Credential isolation itself (environment variables
per agent launch profile) is an external, machine-level action performed by
the Product Manager, not a repository change.
