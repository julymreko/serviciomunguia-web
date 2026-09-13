# Reference Section Extraction

## 1. Reference Identification
- Section name: Menu overlay
- Reference URL: https://staging.serviciomunguia.com/inicio-bricks/
- Reference environment: Legacy/reference staging — WordPress + Bricks
- Viewport: Desktop
- Extraction date: 2026-09-12
- Extractor: OpenAI GPT-5.6 Sol with Product Manager-provided visual evidence
- Evidence state: OBSERVED

## 2. Section Purpose
- Purpose: Provide primary OnePage navigation and direct contact information through a full-screen menu overlay.
- User goal: Navigate to major site sections or access the displayed email and telephone contact information.
- Content priority: Primary navigation links first; contact information secondary.
- Evidence state: OBSERVED
- Evidence references: Desktop menu-overlay screenshot supplied by Product Manager; reference URL.

## 3. Content Hierarchy
- Primary heading: NOT APPLICABLE
- Secondary headings: Contact block label `CONTACTO`
- Body copy: NOT APPLICABLE
- CTAs: Primary navigation links — `¿Cómo trabajamos?`, `Servicios`, `Cobertura`, `Marcas`, `Contacto`
- Labels: `CONTACTO`
- Supporting content: `contacto@serviciomunguia.com`; `+52 56 4795 7364`
- Evidence state: OBSERVED
- Evidence references: Desktop menu-overlay screenshot supplied by Product Manager.

## 4. DOM / Structural Hierarchy
- Outer container: `NAV#sm-menu-overlay.brxe-div.sm-menu-overlay`; open state adds `.is-open`.
- Child hierarchy: `NAV#sm-menu-overlay` → `DIV#brxe-wzzlva.brxe-div.brx-grid` → left `DIV#brxe-oywqsc` and right `DIV#brxe-vtpsjp`.
- Semantic elements: Primary navigation is `NAV#brxe-crrsxw.brxe-nav-nested` with `aria-label="Menu"`. Its links are contained in `UL#brxe-syeztb.brxe-block.brx-nav-nested-items` with `LI.menu-item` children. The overlay itself is also a `NAV`.
- Repeated components: Five primary `LI.menu-item > A.brxe-text-link` navigation entries. One additional empty `LI.menu-item` is present and remains unexplained.
- Source order: Left navigation zone first; contact zone second.
- Evidence state: OBSERVED
- Evidence references: Direct DOM inspection of open Desktop reference Menu.

## 5. Layout and Spacing
- Width behavior: Overlay is fixed to the full viewport.
- Max width: Internal grid `max-width: 1440px`.
- Columns: Internal grid uses `810px 390px` columns with `140px` gap at the observed 1920px Desktop viewport.
- Alignment: Grid uses `align-items: center`. Navigation and contact content are left aligned.
- Gaps: Grid `column-gap: 140px`; navigation `UL` uses `row-gap: 11.34px`; contact block uses `row-gap: 16px`.
- Padding: Overlay root has `0`; internal grid uses `170.1px 50px 75.6px`; contact block adds `padding-top: 24px`.
- Margins: Internal grid is horizontally centered with observed `240px` left/right margins at 1920px viewport width.
- Positioning: Overlay is `position: fixed; top: 0; left: 0; z-index: 1000`. Header menu trigger remains above it at `z-index: 1001`.
- Evidence state: OBSERVED
- Evidence references: Direct computed-style and bounding-box inspection at 1920 × 945 Desktop viewport.

## 6. Typography
- Font family: Primary navigation uses `Inter, sans-serif`. Contact label and contact links use `Open Sans`.
- Font size: Primary navigation `76px`; contact label `14px`; contact links `24px`.
- Font weight: Primary navigation `600`; contact label `600`; contact links `400`.
- Line height: Primary navigation `79.8px`; contact label `16.8px`; contact links `32.4px`.
- Letter spacing: Primary navigation `-3.04px`; contact label `1.96px`; contact links `normal`.
- Text transform: Primary navigation `none`; contact label is uppercase; contact links use normal casing.
- Alignment: Left aligned.
- Evidence state: OBSERVED
- Evidence references: Direct computed-style inspection of Desktop reference Menu.

## 7. Colors and Visual Treatment
- Background: `rgba(13, 14, 19, 0.82)`.
- Text colors: Primary navigation `rgb(255,255,255)`; contact label `rgb(255,255,255)`; contact links `rgba(255,255,255,0.72)`.
- Borders: No material overlay border observed.
- Radius: No overlay radius observed.
- Shadows: No material shadow value confirmed.
- Gradients: `background-image: none` on the overlay root.
- Decorative treatment: `backdrop-filter: blur(18px)` over the underlying page.
- Evidence state: OBSERVED
- Evidence references: Direct computed-style inspection of `#sm-menu-overlay` and Menu text elements.

## 8. Assets and Media
- Asset: Header menu trigger doubles as the visible open/close control.
- Type: CSS pseudo-element icon treatment on `BUTTON#sm-menu-trigger`.
- Source URL / file: NOT APPLICABLE — no separate image/SVG asset is used for the observed trigger icon.
- Dimensions: Button `52 × 52px`. Closed state uses `::before` `30 × 2px` and `::after` `22 × 2px`. Open state uses two `30 × 2px` lines rotated to form an X.
- Aspect ratio: Button 1:1.
- Crop / fit behavior: NOT APPLICABLE.
- Alt / accessible text: `aria-label="Abrir menú de navegación"` and `aria-controls="sm-menu-overlay"`. `aria-expanded` changes between `false` and `true`. The accessible label does not change when open.
- Evidence state: OBSERVED
- Evidence references: Direct DOM and computed-style inspection of `#sm-menu-trigger` in closed, hover, and open states.
## 9. Responsive Behavior

### Desktop
- Layout: Full-screen fixed overlay with two-column internal grid. Primary navigation occupies the left `810px` column; contact information occupies the right `390px` column; observed column gap `140px`.
- Visibility: Five primary navigation links, contact label, email link, WhatsApp number link, and Header menu trigger are visible.
- Sizing: At the observed 1920 × 945 viewport, internal grid is `1440px` wide; primary navigation typography is `76px`; contact links are `24px`.
- Reordering: No reordering observed.
- Evidence state: OBSERVED
- Evidence references: Desktop screenshot plus direct DOM, bounding-box, and computed-style inspection at 1920 × 945.

### Tablet
- Layout: At 1024 × 1366 the full-screen overlay keeps the same two-column structure. Internal grid spans the viewport and uses `580.188px 280px` columns with `81.92px` gap.
- Visibility: Primary navigation, contact block, and Header menu trigger remain visible.
- Sizing: Grid padding is `210px 40.96px 100px`. Primary navigation typography scales to `51.2px` with `53.76px` line-height and `-2.048px` letter-spacing. Contact label remains `14px`; contact links scale to `18px` with `24.3px` line-height.
- Reordering: No reordering observed. Navigation remains left; contact remains right.
- Additional geometry: Navigation list observed at `457 × 414`, `top: 531px`, `left: 41px`, `row-gap: 16.3968px`. Contact block observed at `280 × 121`, `top: 678px`, `left: 703px`, `row-gap: 16px`, `padding-top: 24px`.
- Trigger behavior: Header trigger remains `52 × 52px` and uses the same open-state X geometry as Desktop.
- Evidence state: OBSERVED
- Evidence references: Direct DOM, bounding-box, and computed-style inspection at 1024 × 1366.
### Mobile Landscape
- Layout: At the observed 844 × 414 viewport, the full-screen overlay changes to a single-column internal grid. Navigation appears first and the contact block stacks below it.
- Visibility: Primary navigation, contact block, and Header menu trigger remain visible. Because internal content is taller than the viewport, the overlay scrolls vertically.
- Sizing: Internal grid uses one `776.5px` column with `48px` gap and padding `150px 33.76px 60px`. Primary navigation typography scales to `42.2px` with `44.31px` line-height and `-1.688px` letter-spacing. Contact label remains `14px`; contact links remain `18px` with `24.3px` line-height.
- Reordering: Structural flow changes from side-by-side to stacked: navigation first, contact second.
- Additional geometry: Navigation list observed at `377 × 319`, `top: 150px`, `left: 34px`, `row-gap: 8px`. Contact block observed at `777 × 121`, `top: 517px`, `left: 34px`, `row-gap: 16px`, `padding-top: 24px`.
- Evidence state: OBSERVED
- Evidence references: Direct DOM, bounding-box, and computed-style inspection at 844 × 414.
### Mobile Portrait
- Layout: At the observed 390 × 844 viewport, the full-screen overlay uses a single-column internal grid. Navigation appears first and the contact block stacks below it.
- Visibility: Primary navigation, contact block, and Header menu trigger remain visible. Overlay retains vertical scrolling capability.
- Sizing: Internal grid uses one `350.4px` column with `48px` gap and padding `80px 20px 36px`. Primary navigation typography scales to `38px` with `39.9px` line-height and `-1.52px` letter-spacing. Contact label remains `14px`; contact links remain `18px` with `24.3px` line-height.
- Reordering: Same stacked flow as Mobile Landscape — navigation first, contact second.
- Additional geometry: Navigation list observed at `339 × 313`, `top: 203px`, `left: 20px`, `row-gap: 10.128px`. Contact block observed at `350 × 121`, `top: 564px`, `left: 20px`, `row-gap: 16px`, `padding-top: 24px`.
- Evidence state: OBSERVED
- Evidence references: Direct DOM, bounding-box, and computed-style inspection at 390 × 844.
- PM-approved relationship: The Bottom Navigation Bar used in the new architecture remains a separate PM-approved evolution and is not part of the observed Bricks Mobile Portrait overlay.
## 10. Interactive Behavior and States
- Trigger: `BUTTON#sm-menu-trigger` controls `#sm-menu-overlay` through `aria-controls="sm-menu-overlay"` and changes `aria-expanded` between `false` and `true`.
- Default state: Closed trigger uses two horizontal white pseudo-element lines: `::before` `30 × 2px` and `::after` `22 × 2px`.
- Hover state: Closed trigger swaps line lengths: `::before` becomes `22px`; `::after` becomes `30px`. Primary navigation links translate `18px` to the right on hover. Contact email and WhatsApp links change to `#1a2ad3`.
- Focus state: UNKNOWN
- Active state: UNKNOWN
- Expanded / collapsed state: Open trigger transforms both `30 × 2px` pseudo-elements into an X at approximately ±45°. Open overlay has `.is-open`, `aria-hidden="false"`, and remains below the Header trigger (`z-index: 1000` vs `1001`).
- Loading state: NOT APPLICABLE
- Error state: NOT APPLICABLE
- Success state: NOT APPLICABLE
- Keyboard behavior: UNKNOWN
- Evidence state: OBSERVED / UNKNOWN
- Evidence references: Direct DOM and computed-style inspection of trigger, primary navigation links, contact links, and open overlay.
- Motion observations: Trigger pseudo-elements use `transform 0.45s cubic-bezier(0.22, 1, 0.36, 1)`, `width 0.3s`, and `background-color 0.3s`. Primary navigation links use `opacity 0.35s` and `transform 0.45s cubic-bezier(0.22, 1, 0.36, 1)`.

## 11. Accessibility Observations
- Heading structure: Contact label is rendered as `DIV.brxe-heading`, not a semantic heading element.
- Landmark structure: Overlay root is a `NAV`; primary link group contains a nested `NAV` with `aria-label="Menu"`.
- Keyboard access: UNKNOWN
- Focus visibility: UNKNOWN
- Accessible names: Primary nested navigation has `aria-label="Menu"`. Header trigger has `aria-label="Abrir menú de navegación"` and `aria-controls="sm-menu-overlay"`.
- Alt text: NOT APPLICABLE to text navigation and CSS-generated trigger icon.
- Contrast observations: Primary links are white on `rgba(13,14,19,0.82)` overlay; contact links use `rgba(255,255,255,0.72)`. Exact WCAG contrast ratios not yet calculated.
- Motion observations: Trigger and navigation hover transitions are OBSERVED; reduced-motion behavior UNKNOWN.
- Accessibility finding: When the menu is open, `aria-expanded` correctly changes to `true`, but `aria-label` remains `Abrir menú de navegación` instead of changing to a close-state accessible name.
- Evidence state: OBSERVED / UNKNOWN
- Evidence references: Direct DOM, ARIA, and computed-style inspection; keyboard/focus testing remains pending.

## 12. SEO-Relevant Static Content
- Static heading content: Visual contact label `Contacto`; implemented as a `DIV`, not semantic heading markup.
- Static body content: `contacto@serviciomunguia.com`; `+52 56 4795 7364`.
- Links:
  - `¿Cómo trabajamos?` → `#como-trabajamos`
  - `Servicios` → `#servicios`
  - `Cobertura` → `#zonas-de-cobertura`
  - `Marcas` → `#marcas`
  - `Contacto` → `#contacto`
  - Email → `mailto:contacto@serviciomunguia.com`
  - Visible number `+52 56 4795 7364` → `https://wa.me/525647957364`
- Metadata observations: NOT APPLICABLE to the Menu overlay itself.
- JavaScript dependency: Navigation and contact content exist in the DOM as static markup. JavaScript is required for open/close state behavior.
- Evidence state: OBSERVED
- Evidence references: Direct DOM inspection of navigation and contact links.

## 13. Technical Implementation Observations
- Framework / builder: WordPress + Bricks.
- Classes / attributes: Overlay `NAV#sm-menu-overlay.brxe-div.sm-menu-overlay`; open state `.is-open`. Internal grid `DIV#brxe-wzzlva.brxe-div.brx-grid`. Primary navigation `NAV#brxe-crrsxw.brxe-nav-nested[aria-label="Menu"]`; list `UL#brxe-syeztb.brxe-block.brx-nav-nested-items`; links use `.brxe-text-link`. Header trigger is `BUTTON#sm-menu-trigger.brxe-button.sm-menu-trigger.bricks-button`.
- CSS observations: Overlay uses fixed full-viewport positioning, `rgba(13,14,19,0.82)` background, `blur(18px)`, `z-index:1000`, and `overflow:auto`. Trigger icon is generated with `::before` and `::after`.
- JavaScript observations: Runtime behavior toggles `.is-open`, `aria-expanded`, and Menu visibility. Exact event-handler implementation and focus-management logic remain UNKNOWN.
- Generated markup observations: Five populated navigation `LI.menu-item` elements plus one additional empty `LI.menu-item` are present in the reference DOM.
- Evidence state: OBSERVED / UNKNOWN
- Evidence references: Direct DOM and computed-style inspection of the live reference.
 
## 14. Dependencies
- Fonts: `Inter, sans-serif` for primary navigation; `Open Sans` for contact label and contact links.
- Images: No Menu-specific image asset confirmed; underlying page imagery remains visible through the translucent/blurred overlay.
- Icons: Header menu/open-close icon is CSS-generated with pseudo-elements; no separate image/SVG dependency observed.
- Scripts: JavaScript is required for menu open/close state; exact source/module remains UNKNOWN.
- Plugins: Bricks builder is part of the reference implementation environment.
- External services: WhatsApp via `https://wa.me/525647957364`; email via `mailto:`.
- Other dependencies: Header menu trigger and underlying page content.
- Evidence state: OBSERVED / UNKNOWN
- Evidence references: Direct DOM/computed-style inspection and reference environment.

## 15. Unknowns and Ambiguities

### Item 1 — Responsive reference behavior
- Item: Desktop, Tablet, Mobile Landscape, and Mobile Portrait Menu overlay layout and behavior.
- State: OBSERVED
- Why unresolved: RESOLVED — all required reference viewports were directly inspected.
- Reconstruction critical: NO
- Required evidence or PM decision: NOT APPLICABLE
- Observed viewports: Desktop `1920 × 945`; Tablet `1024 × 1366`; Mobile Landscape `844 × 414`; Mobile Portrait `390 × 844`.
### Item 2 — Keyboard and focus behavior
- Item: Keyboard navigation, focus visibility, focus trapping, focus return after close, and Escape-key behavior.
- State: OBSERVED
- Why unresolved: RESOLVED — direct keyboard testing completed.
- Reconstruction critical: NO
- Required evidence or PM decision: NOT APPLICABLE
- Observed behavior:
  - The Header menu trigger is keyboard reachable.
  - Pressing `Enter` on the trigger opens the overlay.
  - On open, focus moves automatically to `¿Cómo trabajamos?`.
  - Forward `Tab` navigation cycles through the menu.
  - `Shift+Tab` from the first navigation link exits the overlay, so the focus trap is asymmetric/incomplete.
  - `Escape` closes the overlay.
  - After `Escape`, focus returns to `BUTTON#sm-menu-trigger`.
  - The trigger and inspected menu links show no visible `outline` or `box-shadow` focus indicator in computed styles.
- Accessibility finding: Focus management is only partially trapped; reverse keyboard navigation can leave the overlay.
### Item 3 — Reduced-motion behavior
- Item: Behavior under `prefers-reduced-motion: reduce`.
- State: OBSERVED
- Why unresolved: RESOLVED — direct media-emulation inspection completed.
- Reconstruction critical: NO
- Required evidence or PM decision: NOT APPLICABLE
- Observed behavior:
  - `matchMedia('(prefers-reduced-motion: reduce)').matches` returns `true` under emulation.
  - Overlay transition is reduced to `opacity 0.2s`.
  - Header trigger pseudo-element transitions remain unchanged: `transform 0.45s cubic-bezier(0.22, 1, 0.36, 1)`, `width 0.3s`, `background-color 0.3s`.
  - Primary navigation link transitions remain unchanged: `opacity 0.35s`, `transform 0.45s cubic-bezier(0.22, 1, 0.36, 1)`.
- Accessibility observation: The reference simplifies overlay motion but does not fully disable all Menu-related motion.
### Item 4 — Overlay open/close animation
- Item: Exact overlay entrance/exit transition beyond the Header trigger transformation.
- State: OBSERVED
- Why unresolved: RESOLVED — direct computed-style inspection completed.
- Reconstruction critical: NO
- Required evidence or PM decision: NOT APPLICABLE
- Observed behavior: Open state uses `transform: none`, `opacity: 1`, `visibility: visible`. Closed state removes `.is-open`, sets `aria-hidden="true"`, uses an upward translated transform (`translateY(-729.6px)` at the observed Desktop viewport), `opacity: 0`, `visibility: hidden`, and `pointer-events: none`.
- Transition: `transform 0.75s cubic-bezier(0.76, 0, 0.24, 1)`, `opacity 0.4s`, and `visibility 0s linear`.
### Item 5 — Empty navigation list item
- Item: Additional empty `LI.menu-item` inside the reference navigation list.
- State: UNKNOWN
- Why unresolved: It exists in the generated Bricks DOM but has no visible link/content in the observed Desktop state.
- Reconstruction critical: NO
- Required evidence or PM decision: No reconstruction dependency unless later responsive/interactivity inspection shows functional use.
## 16. PM-Approved Deviations

### Deviation 1 — Mobile Bottom Navigation Bar
- Observed reference behavior: The supplied reference evidence currently confirms only the Desktop full-screen menu overlay. No Mobile Portrait bottom navigation has been observed in the Bricks reference evidence captured so far.
- PM-approved behavior: Mobile Portrait uses a fixed Bottom Navigation Bar with five actions: `Servicios`, `Cobertura`, center `WhatsApp` FAB, `Llamar`, and `Agendar visita`.
- Approval reference: Product Manager approval recorded in `docs/ARCHITECTURE.md`, `docs/phases/PHASE-02-controlled-reference-migration.md`, and `docs/phases/phase-02/M02-03C-hero-carousel-signature-interaction.md`.
- Reason / context: Approved product evolution introduced during the Hero refinement cycle to improve persistent access to primary mobile actions.
- State: PM APPROVED

### Deviation 2 — Mobile navigation architecture
- Observed reference behavior: UNKNOWN for Mobile Portrait.
- PM-approved behavior: Mobile navigation uses the approved architecture `app-shell → page-scroll → bottom-nav → panel`, with `100dvh`, reserved bottom content space, safe-area handling, and centered FAB/notch treatment.
- Approval reference: `docs/ARCHITECTURE.md`.
- Reason / context: Stable Mobile Portrait behavior, including dynamic browser chrome handling.
- State: PM APPROVED

### Deviation 3 — Future section targets
- Observed reference behavior: Reference href targets remain UNKNOWN.
- PM-approved behavior: `Servicios` → `#servicios`; `Cobertura` → `#cobertura`; `Agendar visita` → `#agendar-diagnostico`; WhatsApp and telephone remain direct actions.
- Approval reference: Product Manager approval recorded in Phase 02 and architecture documentation.
- Reason / context: Approved OnePage navigation targets for the new architecture.
- State: PM APPROVED

### Deviation 4 — Active-state behavior
- Observed reference behavior: UNKNOWN.
- PM-approved behavior: The center WhatsApp FAB must not be treated as selected merely because it is visually central. Section-aware active navigation is explicitly deferred.
- Approval reference: Product Manager approval recorded in `docs/ARCHITECTURE.md`.
- Reason / context: Visual emphasis and navigation state are separate concerns.
- State: PM APPROVED
## 17. Evidence References
- Reference URL: https://staging.serviciomunguia.com/inicio-bricks/
- Screenshots: Desktop open-menu overlay screenshot supplied by Product Manager.
- Viewports: Desktop observed; Tablet, Mobile Landscape, and Mobile Portrait reference overlays not yet captured.
- DOM observations: Not yet captured.
- Computed-style observations: Not yet captured.
- Asset references: Close-menu control visually observed; exact asset/source not yet identified.
- Interaction observations: Open/close states, trigger animation, navigation/contact hover states, keyboard focus flow, Escape behavior, focus return, reduced-motion behavior, and overlay transitions were directly inspected.
- PM specifications: Mobile Bottom Navigation Bar + center WhatsApp FAB + notch; approved actions and future section targets; active-state behavior deferred; architecture recorded in `docs/ARCHITECTURE.md` and Phase 02 documentation.
## 18. Reconstruction Readiness
- Critical UNKNOWN values present: NO
- Result: READY FOR RECONSTRUCTION
- Blocking items: NONE
- PM approval required: NO — APPROVED by Julián Cely on 2026-09-12 for Menu reconstruction.
- Notes: All reconstruction-critical reference evidence has been resolved across Desktop, Tablet, Mobile Landscape, Mobile Portrait, DOM structure, computed styles, interaction states, keyboard/focus behavior, reduced-motion behavior, link targets, and overlay animation. One additional empty `LI.menu-item` remains UNKNOWN but is explicitly non-critical and has no observed functional or visual role. The Mobile Bottom Navigation Bar remains a separate PM APPROVED evolution and must not be represented as observed Bricks behavior.