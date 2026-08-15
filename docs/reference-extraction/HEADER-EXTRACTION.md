# Header Reference Extraction

## 1. Reference Identification

- Section name: Header
- Reference URL: https://staging.serviciomunguia.com/inicio-bricks/
- Reference environment: staging.serviciomunguia.com
- Extraction date: 2026-08-15
- Extractor: OpenAI GPT-5.6 Sol
- Evidence state: OBSERVED

## 2. Section Purpose

- Purpose: Provide persistent site branding and access to the navigation overlay.
- User goal: Return to the beginning of the one-page site or open the site navigation.
- Content priority:
  1. Brand logo
  2. Menu trigger
- Evidence state: OBSERVED
- Evidence references:
  - Desktop screenshot 1920×1080
  - Tablet screenshot 1024×768
  - Mobile landscape screenshot 844×390
  - Mobile portrait screenshot 390×844
  - DOM and computed-style observations

## 3. Content Hierarchy

- Primary heading: NOT APPLICABLE
- Secondary headings: NOT APPLICABLE
- Body copy: NOT APPLICABLE
- CTAs:
  - Logo link to `#inicio`
  - Menu trigger button
- Labels:
  - Logo link aria-label: `Ir al inicio`
  - Menu button aria-label: `Abrir menú de navegación`
- Supporting content: NOT APPLICABLE
- Evidence state: OBSERVED

## 4. DOM / Structural Hierarchy

- Outer container:
  - `HEADER#sm-hero-header.brxe-div`
- Parent:
  - `DIV#brxe-xlpmux.brxe-container`
- Direct children:
  - `A#sm-hero-logo.brxe-image.tag`
  - `BUTTON#sm-menu-trigger.brxe-button.sm-menu-trigger.bricks-button`
- Source order:
  1. Logo link
  2. Menu trigger
- Evidence state: OBSERVED

## 5. Layout and Spacing

### Desktop 1920×1080

- Header:
  - position: absolute
  - top: 0
  - left: 0
  - right: 0
  - width: 1100px
  - height: 256px
  - display: flex
  - align-items: center
  - justify-content: space-between
  - padding: 32px 50px
  - max-width: 100%
  - z-index: 1001
  - pointer-events: none
  - background: transparent
- Parent width: 1100px
- Observed header x-position: 402.5px
- Observed left gap: 402.5px
- Observed right gap: 417.5px

### Tablet 1024×768 reference capture

- Header width: 1024px
- Header height: 190.9375px
- Padding:
  - top/bottom: 20.48px
  - left/right: 40.96px
- display: flex
- align-items: center
- justify-content: space-between
- position: absolute
- background: transparent
- z-index: 1001

### Mobile Landscape 844×390

- Header width: 844px
- Header height: 183.75px
- Padding:
  - top/bottom: 16.88px
  - left/right: 33.76px
- display: flex
- align-items: center
- justify-content: space-between
- position: absolute
- background: transparent
- z-index: 1001

### Mobile Portrait 390×844

- Header width: 390px
- Header height: 152px
- Padding:
  - top/bottom: 16px
  - left/right: 20px
- display: flex
- align-items: center
- justify-content: space-between
- position: absolute
- background: transparent
- z-index: 1001

- Evidence state: OBSERVED

## 6. Typography

- Header visible text: NOT APPLICABLE
- Menu trigger inherited font family: `Open Sans`
- Menu trigger inherited font size: 16px
- Menu trigger font weight: 400
- Menu trigger letter spacing: 0.5px
- Evidence state: OBSERVED

## 7. Colors and Visual Treatment

- Header background: transparent
- Menu icon line color: rgb(255, 255, 255)
- Menu button background: transparent
- Menu button border: none
- Menu button border radius: 50%
- Evidence state: OBSERVED

## 8. Assets and Media

### Logo

- Asset:
  `https://staging.serviciomunguia.com/wp-content/uploads/2026/07/servicio-munguia-logo-fondo-oscuro.webp`
- Type: WebP
- Intrinsic dimensions observed on desktop/landscape: 512×512
- Rendered dimensions:
  - Desktop: 192×192
  - Tablet: 150×150
  - Mobile Landscape: 150×150
  - Mobile Portrait: 120×120
- Aspect ratio: 1:1
- object-fit: contain
- object-position: 50% 50%
- img alt: `Servicio Munguía`
- Link aria-label: `Ir al inicio`
- Link href:
  `https://staging.serviciomunguia.com/inicio-bricks/#inicio`
- Evidence state: OBSERVED

## 9. Responsive Behavior

### Desktop

- Header constrained to 1100px.
- Logo rendered at 192×192.
- Menu trigger 52×52.
- Layout horizontal with `space-between`.
- Evidence state: OBSERVED

### Tablet

- Header expands to 1024px reference width.
- Logo reduces to 150×150.
- Menu trigger remains 52×52.
- Horizontal layout preserved.
- Evidence state: OBSERVED

### Mobile Landscape

- Header width follows 844px viewport.
- Logo remains 150×150.
- Menu trigger remains 52×52.
- Horizontal layout preserved.
- Evidence state: OBSERVED

### Mobile Portrait

- Header width follows 390px viewport.
- Logo reduces to 120×120.
- Menu trigger remains 52×52.
- Horizontal layout preserved.
- Evidence state: OBSERVED

## 10. Interactive Behavior and States

### Logo

- Trigger: click/tap
- Destination: `#inicio`
- aria-label: `Ir al inicio`
- Evidence state: OBSERVED

### Menu Trigger

- Element: `BUTTON#sm-menu-trigger`
- type: button
- aria-label: `Abrir menú de navegación`
- aria-controls: `sm-menu-overlay`
- closed state:
  - aria-expanded: false
- open state:
  - aria-expanded: true
- disabled: false
- cursor: pointer
- Evidence state: OBSERVED

### Menu Icon Default State

`::before`
- width: 30px
- height: 2px
- background: white
- transform: translate(-15px, -7px)

`::after`
- width: 22px
- height: 2px
- background: white
- transform: translate(-11px, 6px)

### Menu Icon Hover State

`::before`
- width: 22px
- transform: translate(-11px, -7px)

`::after`
- width: 30px
- transform: translate(-15px, 6px)

Transition:
- transform: 0.45s cubic-bezier(0.22, 1, 0.36, 1)
- width: 0.3s
- background-color: 0.3s

- Evidence state: OBSERVED

### Keyboard Behavior

- Menu trigger reachable by Tab.
- Visible focus observed.
- Enter opens overlay.
- aria-expanded changes to true.
- Esc closes overlay.
- Focus returns to menu trigger.
- Evidence state: OBSERVED

## 11. Accessibility Observations

- Logo link has accessible name through `aria-label="Ir al inicio"`.
- Logo image has `alt="Servicio Munguía"`.
- Menu trigger is a native button.
- Menu trigger has `aria-controls="sm-menu-overlay"`.
- `aria-expanded` correctly reflects closed/open state.
- Button is keyboard reachable.
- Visible focus observed.
- Enter activates menu.
- Esc closes menu and restores focus.
- Observation:
  - `aria-label` remains `Abrir menú de navegación` while the menu is open.
- State of whether this label behavior is an accessibility defect requiring deviation:
  UNKNOWN
- Reconstruction critical: NO
- Evidence state: OBSERVED / UNKNOWN where noted

## 12. SEO-Relevant Static Content

- Header contains no visible heading content.
- Logo link is static HTML.
- Logo accessible text exists.
- Menu trigger exists in HTML as a button.
- Evidence state: OBSERVED

## 13. Technical Implementation Observations

- Reference builder: Bricks
- Header ID: `sm-hero-header`
- Parent class: `brxe-container`
- Logo ID: `sm-hero-logo`
- Menu trigger ID: `sm-menu-trigger`
- Header z-index: 1001
- Header pointer-events: none
- Menu trigger pointer-events: auto
- Evidence state: OBSERVED

## 14. Dependencies

- Logo image asset
- Open Sans font
- Navigation overlay identified by `sm-menu-overlay`
- JavaScript required for menu open/close state
- Evidence state: OBSERVED

## 15. Unknowns and Ambiguities

- Item: Responsive Header sizing rules
- State: OBSERVED
- Reconstruction critical: NO
- Evidence:
  - Header vertical padding: clamp(16px, 2vw, 32px)
  - Header horizontal padding: var(--sm-space-inline)
  - --sm-space-inline: clamp(20px, 4vw, 50px)
  - Logo base width: clamp(150px, 10vw, 200px)
  - Logo width at max-width 478px: clamp(120px, 8vw, 180px)
  - Explicit Header media queries: max-width 991px and max-width 478px

- Item: Whether open-state menu trigger aria-label should remain `Abrir menú de navegación`
- State: UNKNOWN
- Why unresolved: observed behavior may be intentional or an accessibility defect.
- Reconstruction critical: NO
- Required evidence or PM decision: PM decision only if reconstruction is intended to deviate from reference.

## 16. PM-Approved Deviations

NONE

## 17. Evidence References

- Reference URL:
  https://staging.serviciomunguia.com/inicio-bricks/
- Desktop viewport evidence: 1920×1080
- Tablet reference capture: 1024×768
- Mobile Landscape viewport: 844×390
- Mobile Portrait viewport: 390×844
- DOM observations: DevTools Elements
- Computed-style observations: DevTools Computed / Console
- Interaction observations:
  - mouse hover
  - click open/close
  - keyboard Tab
  - keyboard Enter
  - keyboard Esc

## 18. Reconstruction Readiness

- Critical UNKNOWN values present: NO
- Result: READY FOR RECONSTRUCTION
- Blocking items:
  NONE
- PM approval required:
  NO
- PM approval status:
  APPROVED — Julián Cely — 2026-08-15
- Notes:
  - Responsive sizing rules have been technically observed.
  - M02-01 evidence approval checkpoint completed by Julián Cely on 2026-08-15.