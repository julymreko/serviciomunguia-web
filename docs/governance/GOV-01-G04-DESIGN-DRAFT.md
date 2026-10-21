# GOV-01 G-04 Design Proposal — Revision 2 (DRAFT)

## Status

DRAFT. Not an approved architecture. Recorded here only so a task contract
can cite it as an input. Authorized for citation under Decision
GOV-01-G04-003 (Product Manager, Julián Cely). This document does not
itself authorize any implementation.

Amended by task GOV-01-G04-004 under Decision GOV-01-G04-005: sections 4,
5, 6 and 9 now describe the mechanism the Product Manager actually
implemented and verified on 2026-10-20, and section 10 records that
verification. Two statements of the original draft were inaccurate and are
corrected: `WRANGLER_HOME` is not a Wrangler environment variable, and
`GIT_ASKPASS` alone does not block a push when Git Credential Manager holds
a stored credential.

## Governing principle

Agents are never provisioned with any credential capable of `git push` or
`wrangler deploy`. There is nothing for an agent to bypass, because the
capability does not exist in its environment. The Product Manager performs
every actual push and every actual deployment personally, from their own
terminal, with their own credentials.

Implementation note: the mechanism implemented on 2026-10-20 removes the
credentials from the agent's process environment, but the Product Manager's
GitHub credential remains in Windows Credential Manager under the same
Windows user. The principle is therefore met for default and accidental use,
not against a deliberate bypass. This gap is accepted in Decision
GOV-01-G04-005; a separate Windows user account for agents is pending
evaluation and NOT AUTHORIZED.

## 4. Recommended Architecture

```
Product Manager's Git Bash (~/.bashrc, loaded by ~/.bash_profile)
  claude()   -> env <isolation variables> .../npm/claude
  opencode() -> env <isolation variables> .../npm/opencode

Agent process environment (Claude Code / OpenCode), isolation variables:
  GIT_CONFIG_COUNT=1, GIT_CONFIG_KEY_0=credential.helper, GIT_CONFIG_VALUE_0=
                                      -> Git Credential Manager is not consulted
  GIT_ASKPASS=false, SSH_ASKPASS=false -> no graphical credential prompt
  GIT_TERMINAL_PROMPT=0, GCM_INTERACTIVE=never -> no terminal credential prompt
  CLOUDFLARE_API_TOKEN=g04-agent-no-deploy -> non-credential sentinel
        |
        +- git push            --> no credential available --> authentication fails
        +- npx wrangler deploy --> sentinel token rejected --> authentication fails
        +- git fetch / pull    --> public repository, no credential needed --> works

ChatGPT Work: no network access in its command tool at all (already true today) --> fails, unconditionally

Agent, when work is ready:
   writes "Open for the Product Manager: ready to push/deploy, commit <SHA>"
   in its existing task-report (.coordination/tasks/<ID>/report-NN.md) -- advisory only, grants nothing

Product Manager, personally, from their own terminal, own credentials:
   reviews report-NN.md -> runs `git push` / `npx wrangler deploy` directly
```

No daemon, no repository hook, no repository script, no new mailbox
artifact. The only wrapper is the pair of shell functions in the Product
Manager's own `~/.bashrc`, outside the repository. Enforcement is by
GitHub's and Cloudflare's own authentication, not by any file this
repository or an agent could edit.

## 5. Push Guard

- Protected operation: `git push`.
- Enforcement point: none local. GitHub's own authentication, against a
  GitHub-side credential the agent's process is not given.
- Mechanism: the remote is HTTPS and the clone's `credential.helper` is
  `manager` (Git Credential Manager). Git Credential Manager supplies the
  stored credential without calling `GIT_ASKPASS`, so the agent's process
  environment resets `credential.helper` to empty through `GIT_CONFIG_COUNT`,
  `GIT_CONFIG_KEY_0` and `GIT_CONFIG_VALUE_0`, and disables every credential
  prompt with `GIT_ASKPASS=false`, `SSH_ASKPASS=false`,
  `GIT_TERMINAL_PROMPT=0` and `GCM_INTERACTIVE=never`. The variables are set
  per process by the `claude` and `opencode` shell functions, never in the
  shared clone's `.git/config`, since the Product Manager's terminal uses
  that same clone.
- Lifetime / scope / expiration: not applicable -- there is no authorization
  object to expire. The isolation applies to every agent launched through
  the shell functions until the Product Manager changes `~/.bashrc`.
- Failure behavior: `git push` fails with an authentication error
  (verified: exit 128).
- Bypass considerations: `--no-verify` is irrelevant -- it only skips local
  hooks, and no hook is part of this design. Known gaps: an agent launched
  without the shell functions has no isolation; and because the Product
  Manager's GitHub credential remains in Windows Credential Manager under
  the same Windows user, a deliberate override such as
  `git -c credential.helper=manager push` would reach it. Both gaps are
  accepted in Decision GOV-01-G04-005.
- PM workflow: the agent reports readiness via the existing `task-report`
  "Open for the Product Manager" field, naming the exact commit SHA. The
  Product Manager reviews it and runs `git push` personally.

## 6. Deploy Guard

- Protected operation: `npx wrangler deploy` (and any equivalent direct
  Cloudflare API call). Wrangler is a project dependency (`package.json`),
  so it is reachable from any agent working in the repository.
- Enforcement point: none local. Cloudflare's own authentication, against a
  credential the agent's process is not given.
- Cloudflare credential model: the agent's process environment carries
  `CLOUDFLARE_API_TOKEN=g04-agent-no-deploy`, a non-credential sentinel.
  Wrangler uses the environment token and fails authentication instead of
  starting its OAuth login in a browser. Wrangler stores its own
  configuration and any `wrangler login` session under
  `C:\Users\July\AppData\Roaming\xdg.config\.wrangler`; no environment
  variable named `WRANGLER_HOME` exists. At verification time no `wrangler
  login` session was stored.
- Lifetime / scope / expiration: not applicable, same reasoning as the push
  guard.
- Failure behavior: Wrangler fails authentication immediately (verified:
  `npx wrangler whoami`, exit 1, no browser opened); nothing is uploaded.
- Bypass considerations: same gaps as the push guard for agents launched
  without the shell functions. Untested: whether the sentinel token takes
  precedence over a stored `wrangler login` session. If the Product Manager
  ever runs `wrangler login`, the deploy check must be repeated.
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
`package.json` change. Credential isolation itself (the `claude` and
`opencode` shell functions in the Product Manager's `~/.bashrc`) is an
external, machine-level action performed by the Product Manager, not a
repository change.

## 10. Implementation Record (2026-10-20)

Implemented and verified by the Product Manager on their own Windows
machine, outside the repository. Recorded in Decision GOV-01-G04-005.

| Check | Environment | Result |
|---|---|---|
| `git fetch --dry-run` | Simulated agent environment | Succeeded (exit 0) |
| `git push --dry-run` | Simulated agent environment | Authentication failed (exit 128) |
| `npx wrangler whoami` | Simulated agent environment | Authentication failed (exit 1), no browser opened |
| `git push --dry-run` | Product Manager's own shell | Succeeded (exit 0) |
| Isolation variables present; `git push --dry-run` | Claude Code launched through `claude` | Variables present; authentication failed (exit 128). Run before `GIT_ASKPASS=false` and `SSH_ASKPASS=false` were added. |
| All eight isolation variables present; `git push --dry-run`; `npx wrangler whoami` | OpenCode launched through `opencode` | Variables present; push authentication failed (exit 128); Wrangler authentication failed (exit 1), no browser opened |
