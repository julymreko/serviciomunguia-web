# SECRETS AND ENVIRONMENT CONFIGURATION POLICY

## Status

APPROVED

## Core Rule

Sensitive values must never be committed to Git.

## Cloudflare Production and Staging

Sensitive values must be stored as Cloudflare Worker Secrets.

Examples include:

- API keys
- Access tokens
- Passwords
- Private keys
- Service credentials
- ZEPTOMAIL_API_KEY
- TURNSTILE_SECRET_KEY

Worker code may access approved secrets through the runtime environment binding:

env.SECRET_NAME

Sensitive values must not be stored in Wrangler vars configuration.

## Non-Sensitive Configuration

Non-sensitive configuration values may use Cloudflare Worker environment variables.

## Secret Provisioning

Approved Wrangler mechanism:

npx wrangler secret put <SECRET_NAME>

Secret values must not be passed through Git-tracked files.

## Deployment

Worker deployment command:

npx wrangler deploy

Deployment and secret provisioning are separate operations.

## Local Development

Local secret values may use:

- .dev.vars
- .env

These files must not be committed.

Example files may contain placeholders only.

## Forbidden Git Content

Never commit:

- API keys
- Tokens
- Passwords
- Private keys
- Service credentials
- Cloudflare secrets
- ZeptoMail credentials
- Turnstile secret keys
- Any other sensitive authentication material

## Authority

Approved by:

Julián Cely
Product Manager
