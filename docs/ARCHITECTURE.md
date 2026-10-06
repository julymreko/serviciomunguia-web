# SYSTEM ARCHITECTURE

## Project

serviciomunguia.com

## Architecture Status

Status: APPROVED

This document contains only confirmed architectural decisions.

Undefined implementation details must remain undefined until explicitly approved by Julián Cely.

## Product Authority

Product Manager: Julián Cely

Julián Cely is the final authority for product, scope, architecture, and unresolved implementation decisions.

## Public Web Architecture

### Frontend Build

Eleventy

Template engine:
Nunjucks

Primary frontend output:
Static HTML, CSS, JavaScript, images, and other static assets.

### Hosting

Cloudflare Workers Static Assets

The public website must be delivered primarily as static assets.

### Backend

Cloudflare Worker API

Dynamic server-side logic must be handled by Cloudflare Workers.

### Database

Cloudflare D1

### Bot Protection

Cloudflare Turnstile

### Transactional Email

ZeptoMail

### Version Control

GitHub

Repository:
julymreko/serviciomunguia-web

The Git repository is the authoritative project source of truth.

## Runtime Boundary

Static website content:

Eleventy + Nunjucks
        ↓
Build
        ↓
Static HTML / CSS / JavaScript / Assets
        ↓
Cloudflare Workers Static Assets

Dynamic functionality:

Browser
        ↓
Cloudflare Worker API
        ↓
Cloudflare services and approved external services

Confirmed dynamic dependencies:

- Cloudflare D1
- Cloudflare Turnstile
- ZeptoMail

## SEO Architecture Principle

SEO-critical content must exist in the generated static HTML.

Primary content must not depend on client-side JavaScript execution for discovery, crawling, indexing, or semantic interpretation.

JavaScript must be used only where interaction or client-side behavior requires it.

## Component Architecture Principle

The frontend must be organized into maintainable components or partials.

A change to a specific section must be locatable without searching through a monolithic HTML document.

Confirmed major OnePage sections:

- Header
- Hero
- Services
- Coverage
- Brands
- Process
- Testimonials
- Contact
- Footer

Detailed component structure is not yet defined.

## Nunjucks Component Structure

Approved Phase 02 component convention:

src/
├── index.njk
├── _includes/
│   ├── base.njk
│   └── components/
│       └── <section-name>.njk
└── assets/

Rules:

- base.njk remains directly under src/_includes/.
- OnePage sections live under src/_includes/components/.
- Component filenames use lowercase kebab-case semantic section names.
- index.njk composes the OnePage by explicitly including section components in approved order.
- base.njk remains the reusable HTML shell and does not automatically include Header or Footer.
- Do not create layouts/, partials/, macros/, atomic-design layers, per-component directories, or barrel/manifests unless a later verified requirement justifies them.
- Shared fragments or macros should be introduced only when actual reuse exists.

Approval:
Julián Cely — 2026-08-15

## Environment Roles

Production:

serviciomunguia.com

Current state:
Under construction presentation.

Legacy/reference staging:

staging.serviciomunguia.com

Purpose:
Reference implementation built with WordPress and Bricks.

New architecture staging:

new.serviciomunguia.com

Purpose:
Staging environment for the new architecture during migration.

## Migration Principle

The existing WordPress and Bricks implementation is a migration reference.

Previously approved design, content, responsive behavior, assets, and functional decisions must be extracted and documented before equivalent components are rebuilt.

The migration must not redesign approved sections unless Julián Cely explicitly authorizes a redesign.

## Deployment Principle

GitHub is the code and documentation source of truth.

Cloudflare will be the deployment platform.

Exact build configuration and remaining deployment configuration are not yet defined.

Approved Worker deployment command:

npx wrangler deploy

Secret provisioning and deployment command policy are defined in docs/SECRETS-POLICY.md.

## Audit Principle

Claude Code is the designated pre-deployment auditor.

No deployment should be treated as approved until the required audit for that deployment has passed.

The audit protocol is defined in docs/PRE-DEPLOYMENT-AUDIT.md.

## Runtime Versioning

Approved runtime line:
Node.js 24.x LTS

Phase 01 validated runtime:
Node.js 24.19.0

Approved Eleventy version:
@11ty/eleventy@3.1.6

Eleventy v4 prerelease versions are not approved for Phase 01.

Authoritative decision:
docs/decisions/ADR-006-runtime-version-pinning.md

## Explicitly Undefined

The following items are not yet approved and must not be assumed:

- Final repository directory structure
- Nunjucks configuration
- Cloudflare Worker project configuration
- D1 schema
- Worker API routes
- Turnstile configuration
- ZeptoMail configuration
- Build command
- CI/CD implementation details
- Branch strategy
- Testing framework
- Analytics implementation
- Final component file structure

## CSS Architecture

The production frontend uses plain CSS with no approved preprocessor, utility framework, or CSS bundler.

Canonical production stylesheet:

`src/assets/css/main.css`

Rules:

- A single production CSS file is used for the project.
- CSS methodology is BEM-lite.
- The root class of a component uses the same semantic kebab-case name as its Nunjucks component.
- Component elements use `__`.
- Component modifiers use `--`.
- Utility-first naming systems are not part of the approved architecture.
- Shared design values such as colors, spacing, and typography must use CSS custom properties in `:root` when they are reused.
- CSS sections inside `main.css` must be separated with clear comments and follow the same logical order as the Nunjucks components.
- No Sass, Less, PostCSS, Tailwind, Bootstrap, CSS-in-JS, or equivalent CSS processing/framework layer may be introduced without a new approved architectural decision.
- Per-component production stylesheets are not part of the current architecture.
- Splitting `main.css` into multiple source files may only be considered when maintainability justifies it and an approved concatenation or bundling strategy exists.
- The current Eleventy asset pipeline remains passthrough-based; CSS is copied, not transformed.

## Typography and Font Asset Architecture

Production typography must not depend on fonts being installed on the visitor's operating system.

Approved production font families currently required by validated reference evidence:

- Inter
- Open Sans

Rules:

- Production web fonts must be self-hosted.
- Font files live under `src/assets/fonts/`.
- WOFF2 is the preferred production format.
- During active page construction, a controlled set of reasonably anticipated font weights may be included to avoid repeated asset changes across upcoming sections.
- The currently approved working set is Inter 400/500/600/700 and Open Sans 400/500/600/700, normal style only.
- Italic variants are not included unless a later approved section requires them.
- Before final technical closure, unused font weights must be identified and removed.
- Font families referenced by production CSS must have corresponding local font assets and explicit `@font-face` declarations.
- Declaring `font-family` in CSS without loading the corresponding production font does not satisfy implementation fidelity.
- Font assets follow the existing Eleventy passthrough asset pipeline and are copied without transformation.
- External font CDNs or runtime font-provider dependencies must not be introduced without explicit architectural approval.
- Reference-extraction typography evidence must distinguish between the observed font family/weight and the mechanism used by this project to provide that font.
- Reconstruction verification must confirm that the browser actually loads the required font, not only that the CSS declaration exists.
- Where a font is required by approved reference evidence, fallback rendering must be treated as a failed fidelity check unless explicitly approved otherwise.

Current required weights:

Inter:
- 400
- 600
- 700 where already required by the approved Hero implementation

Open Sans:
- 400
- 500 where already required by the approved Hero implementation
- 600

Verification must include browser font availability checks such as:

`document.fonts.check('400 16px Inter')`

and:

`document.fonts.check('400 16px "Open Sans"')`

Both must resolve successfully for the relevant production font faces after page load.
## Mobile App Shell and Bottom Navigation Architecture

Approved mobile navigation pattern:

**Bottom Navigation Bar + Center FAB + Notch**

This is the approved architectural pattern for the SERVICIOMUNGUIA.COM Mobile Portrait experience.

### Shell Structure

Approved hierarchy:

`app-shell → page-scroll → bottom-nav → panel`

Current implementation:

- `.sm-app-shell`
- `.sm-page-scroll`
- `.sm-bottom-nav`
- `.sm-mobile-nav__panel`

Rules:

- The mobile application shell uses `min-height: 100dvh`.
- The shell owns the Mobile Portrait viewport experience.
- The shell and fixed bottom navigation share the same width boundary.
- The bottom navigation is fixed independently from scrollable page content.
- The scrollable page reserves sufficient bottom space so content is not obscured by the navigation.
- `env(safe-area-inset-bottom)` must be respected for mobile browser and device safe areas.
- The bottom navigation outer chrome and its visual panel remain separate structural layers.
- The fixed navigation is horizontally centered against the application shell rather than positioned independently against arbitrary viewport offsets.

### Bottom Navigation Bar

State: PM APPROVED

Mobile Portrait actions:

1. Servicios
2. Cobertura
3. WhatsApp
4. Llamar
5. Agendar visita

Approved future section targets:

- Servicios → `#servicios`
- Cobertura → `#cobertura`
- Agendar visita → `#agendar-diagnostico`

Direct actions:

- WhatsApp uses the approved `wa.me` service-diagnostic link.
- Llamar uses `tel:+525647957364`.

The navigation is currently intended for Mobile Portrait and must remain hidden at Desktop, Tablet, and Mobile Landscape breakpoints unless a later PM-approved decision changes that behavior.

When the full-screen Menu overlay is open in Mobile Portrait, it must cover the Bottom Navigation Bar. The Bottom Navigation must not remain visually or interactively above the open Menu overlay.

PM-approved Menu stacking adaptation:

- Bottom Navigation: z-index: 1200
- Menu overlay: z-index: 1300
- Header menu trigger: z-index: 1301

This preserves the observed reference relationship overlay < trigger while allowing the reconstructed Menu overlay to cover the PM-approved Mobile Portrait Bottom Navigation. This is a technical integration adaptation and does not redefine the Menu's visual design.

PM-approved Menu accessibility improvements:

- Closed trigger accessible name: `aria-label="Abrir menú de navegación"`
- Open trigger accessible name: `aria-label="Cerrar menú de navegación"`
- While the Menu overlay is open, keyboard focus must be trapped completely inside the Menu in both forward and reverse tab order.
- `Escape` closes the Menu.
- Closing the Menu returns focus to `#sm-menu-trigger`.

These are accessibility corrections to documented reference defects and do not alter the Menu's approved visual reconstruction.


PM-approved Menu typography refinement:

- Primary Menu overlay links use `font-weight: 400` in their default state.
- On `:hover`, primary Menu overlay links use `font-weight: 600`.
- For keyboard interaction parity, `:focus-visible` uses the same emphasized `font-weight: 600` treatment.
- This intentionally differs from the extracted Bricks reference, where the primary navigation links were observed at `font-weight: 600` by default.

This is a PM-approved visual refinement and does not redefine the Menu's layout, responsive behavior, content hierarchy, or interaction geometry.
### Center FAB

WhatsApp is the center Floating Action Button (FAB).

Rules:

- The FAB is part of the Bottom Navigation Bar structure; it is not an unrelated floating control.
- The FAB is visually elevated through a centered notch in the navigation panel.
- The FAB's central placement provides emphasis without representing an active or selected navigation state.
- The `WhatsApp` label uses the same navigation-label visual treatment as the other actions.
- The notch and FAB share the same geometric center.
- The spacing between FAB and notch should remain visually uniform around the circular control.

### Dynamic Mobile Viewport

The mobile shell uses dynamic viewport units so the layout responds correctly to browser chrome changes, including Safari's expanding and collapsing browser controls.

The combination of:

- `100dvh`
- shared shell width
- reserved bottom content space
- fixed navigation chrome
- safe-area handling

is the approved approach for stable Mobile Portrait behavior.

### Active Navigation State

Section-aware active navigation is planned but not yet implemented.

When implemented, active state must represent the section currently visible in the OnePage and must not use the center FAB's visual emphasis as a substitute for navigation state.

Approval:
Julián Cely — 2026-09-12

## Post-Implementation Code Documentation

After project coding is complete, a dedicated documentation task must document every source-code file in the repository.

This documentation must explain the responsibility, structure, dependencies, and relevant implementation decisions of each code file without changing application behavior.

For files that contain multiple logical components or sections, documentation must preserve those boundaries.

In particular, although all production CSS currently lives in `src/assets/css/main.css`, each major CSS section or component block must be documented separately rather than treating `main.css` as one undifferentiated file.

Completion of this documentation task is required before final project technical closure.

## Frontend JavaScript Architecture

The production frontend continues to use Eleventy without an additional JavaScript bundler.

Rules:

- JavaScript assets live under `src/assets/js/`.
- Third-party browser modules that must be self-hosted live under `src/assets/js/vendor/`.
- The current Eleventy pipeline copies JavaScript assets through the existing passthrough configuration; it does not transform or bundle them.
- Native browser ESM is the approved module strategy for the current architecture.
- Dynamic `import()` may be used for progressive or deferred initialization when appropriate.
- Third-party libraries must be copied selectively by module instead of importing full browser bundles when only a subset is required.
- Swiper, if used for the Hero carousel, must be self-hosted and limited to the modules required by the approved implementation.
- Hero slides must exist as static HTML generated by Nunjucks; JavaScript may enhance behavior but must not be required to create the slide content.
- No Vite, Webpack, Rollup, Parcel, or equivalent bundler may be introduced without a separate approved architectural decision.
- Adding a bundler later remains allowed if project complexity justifies it, but requires explicit approval and documentation before implementation.
