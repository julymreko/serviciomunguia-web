# Reference Section Extraction

Evidence-only document. It records what the legacy reference renders. It contains no recommendations. Issues, improvements, motion proposals, and PM decisions are in `docs/phases/phase-03/M03-02-review-improvement-proposal.md`.

Evidence states: OBSERVED / PM APPROVED / UNKNOWN / NOT APPLICABLE.

## 1. Reference Identification
- Section name: CÓMO TRABAJAMOS (OnePage process section)
- Reference URL: https://staging.serviciomunguia.com/inicio-bricks/
- Reference environment: Legacy/reference staging — WordPress + Bricks
- Section boundary: `<section id="como-trabajamos" class="brxe-section sm-process-section">`. Preceded by the Hero (`#inicio`). Followed by `<section id="servicios">`. Ends at the closing `</section>` after the CTA card.
- Viewports inspected: Desktop 1920 × 945; Tablet 1024 × 1366; additional tablet-class 820 × 1180; Mobile Landscape 844 × 414; Mobile Portrait 390 × 844.
- Extraction date: 2026-10-10
- Extractor: Claude Code (Claude Sonnet 5.5), Discovery & Planning agent
- Evidence state: OBSERVED
- Method: raw HTML download of the reference URL; Bricks inline page CSS extracted from the same response (58 rules containing `sm-process`); live browser inspection (Playwright/Chromium) for computed styles, bounding boxes, hover/focus, reduced-motion emulation, and JavaScript-disabled load; viewport screenshots (kept outside the repository).

## 2. Section Purpose
- Purpose: Explain the home-service repair process and what the customer is told before authorizing work; end with a request-service CTA.
- User goal: Understand the sequence from request to delivery, and the cost/diagnosis conditions, before contacting the business.
- Content priority: (1) heading + intro, (2) five-step process, (3) "before we start you will always know" trust strip, (4) CTA card.
- Evidence state: OBSERVED (content); purpose wording is the extractor's description of observed content.
- Evidence references: Reference URL; `section.html` HTML capture; screenshots at 1920 and 1024.

## 3. Content Hierarchy
Source order as rendered. Copy is verbatim.

1. Eyebrow (not a heading element): `CÓMO TRABAJAMOS`
2. H2: `¿Cómo funciona nuestro servicio de reparación a domicilio?`
3. Intro: `Nuestro proceso de reparación de lavadoras y refrigeradores a domicilio está diseñado para que conozcas el diagnóstico, el costo y las condiciones del servicio antes de autorizar cualquier reparación.`
4. Supporting: `En Servicio Munguía te acompañamos desde la solicitud de atención hasta la entrega del equipo reparado. Antes de comenzar cualquier trabajo, te explicamos la falla encontrada, la solución recomendada, las refacciones necesarias y el costo del servicio.`
5. H3 (steps group title): `Así funciona nuestro proceso de atención`
6. Five steps, each = number badge + icon + H3 title + text:
   1. `Solicita la atención` — `Cuéntanos qué falla presenta tu equipo y compártenos los datos necesarios para revisar tu solicitud.` / `Tipo de equipo, marca, falla observada, código postal y contacto.`
   2. `Confirmamos disponibilidad y horario` — `Validamos cobertura y disponibilidad para proponerte una fecha de visita.` / `La cita se maneja dentro de una ventana aproximada de dos horas. El técnico llama antes de acudir.`
   3. `Realizamos el diagnóstico` — `Revisamos el equipo en su lugar de uso para identificar la causa real de la falla.` / `El costo de la visita se informa antes de agendar y se descuenta si autorizas la reparación.`
   4. `Explicamos la solución y el presupuesto` — `Te explicamos la falla, el trabajo recomendado, las refacciones y el costo antes de comenzar.` / `Solo comenzamos cuando autorizas la reparación.` / `Si falta una refacción, puede requerirse una segunda visita.`
   5. `Reparamos, probamos y documentamos` — `Probamos el funcionamiento frente a ti y entregamos una nota foliada con el trabajo realizado y la garantía aplicable.` / `La garantía depende de la refacción utilizada.`
7. H3 (trust strip title, typed in capitals in the source): `ANTES DE COMENZAR SIEMPRE SABRÁS:`
8. Five trust items (icon + text): `Qué falla presenta el equipo.` / `Qué reparación recomendamos.` / `Cuánto costará el servicio.` / `Cuánto tiempo aproximado tomará.` / `Qué garantía aplica al trabajo realizado.`
9. CTA card: image; H3 `¿Tu lavadora o refrigerador presenta una falla?`; text `Solicita una revisión a domicilio. Confirmamos cobertura, disponibilidad y el costo de la visita antes de agendar.`
10. CTAs: primary `Solicitar revisión` → `href="#contacto"`; secondary `Contactar por WhatsApp` → `https://wa.me/525647957364?text=Hola%2C%20quiero%20solicitar%20un%20servicio%20de%20diagn%C3%B3stico%20para%20mi%20lavadora%20o%20refrigerador.` with `target="_blank"` (no `rel` attribute present in the served HTML).

- Paragraph structure: in the served HTML the step text blocks contain blank-line-separated text with no `<p>` elements. The browser renders each block as one continuous paragraph (verified in screenshots). The authored CSS contains `.sm-process-step__text p + p` spacing rules that therefore match nothing.
- Evidence state: OBSERVED
- Evidence references: raw HTML of the reference URL; screenshots.

## 4. DOM / Structural Hierarchy
- Outer container: `SECTION#como-trabajamos.sm-process-section` → `DIV.sm-process` (flex column, `max-width: 1240px`, `row-gap: 56px`).
- Child hierarchy (`div` unless noted):
  - `.sm-process-header` → `.sm-process-eyebrow`, `H2.sm-process-title`, `.sm-process-intro`, `.sm-process-supporting`
  - `H3.sm-process-steps__title`
  - `.sm-process-steps` → 5 × `.sm-process-step` → `.sm-process-step__visual` (`span.sm-process-step__number` + inline `svg`), `H3.sm-process-step__title`, `.sm-process-step__text`
  - `.sm-process-trust` → `H3.sm-process-trust__title`, `.sm-process-trust__items` → 5 × `.sm-process-trust__item` → `.sm-process-trust__icon` (inline `svg`), `.sm-process-trust__text`
  - `.sm-process-cta` → `.sm-process-cta__media` → `img.sm-process-cta__image`; `.sm-process-cta__content` → `H3.sm-process-cta__title`, `.sm-process-cta__text`, `.sm-process-cta__actions` → 2 × `a.sm-process-cta__button`
- Semantic elements: one `section` with no `aria-labelledby`/`aria-label`. Steps and trust items are `div`s; no `ol`/`ul`/`li` are used. Step order is conveyed by visible number badges and DOM order only. Number badge is a `span` that precedes the step heading in source order.
- Heading outline of the section: H2 → H3 (steps group title) → five H3 (step titles, same level as the group title) → H3 (trust) → H3 (CTA).
- Page-level outline (reference page): one H1 (`Diagnóstico y reparación de lavadoras y refrigeradores a domicilio`); H2 `¿Cómo funciona…?` (this section); H2 `Servicios de diagnóstico y reparación`; H2 `Consulta la cobertura en tu domicilio`; H2 `Consulta tu cobertura por código postal`.
- Decorative elements: eyebrow `::before` bar; connector line(s) between step circles (pseudo-elements); all 10 inline SVG icons carry `aria-hidden="true"` and `focusable="false"`.
- Focusable elements in the section: exactly two links (the two CTAs). No `tabindex` attributes.
- Anchors: section id `como-trabajamos` (the staging element). Primary CTA targets `#contacto`; **no element with `id="contacto"` exists on the reference page** (page ids observed: `inicio`, `como-trabajamos`, `servicios`, `cobertura`, `zonas-de-cobertura`, and others unrelated).
- Evidence state: OBSERVED
- Evidence references: raw HTML; live DOM query; `document.getElementById('contacto') === null`.

## 5. Layout and Spacing
Authored values come from the extracted Bricks CSS; computed values were measured in the browser. Where they differ it is stated in §6 and §15.
- Width behavior: section is full width; inner `.sm-process` is `width: 100%` up to `max-width: 1240px`, centered by the section's inline padding (Desktop: container x=332, w=1240 at a 1920 viewport).
- Section padding: `padding-block: clamp(72px, 8vw, 132px)`; `padding-inline: clamp(20px, 4vw, 50px)`. Computed: Desktop 132px / 50px; Tablet 1024: 81.92px / 40.96px; 820: 72px / 32.8px; Mobile Landscape 844: 72px / 33.76px; Mobile Portrait 390: 72px / 20px.
- Section background: `#ffffff`.
- Container gap: 56px (≥992px); 48px (≤991px); 40px (≤478px).
- Header block: eyebrow `margin: 0 0 12px`; title `margin: 0 0 1.25em`; intro `margin: 0 0 16px`.
- Steps grid: `display: grid; gap: 24px; align-items: start; padding: 0 0 40px`; columns: 5 equal (≥992px); 6-track grid with `span 2` per step so steps 1–3 sit on row 1 and steps 4–5 are centered on row 2 (479–991px; row gap 48px); single column (≤478px; gap 40px).
- Step: flex column, centered text (≥479px); at ≤478px a two-column grid `84px | 1fr`, `column-gap: 20px`, left-aligned.
- Step visual: 84 × 84px circle, `background: #1a2ad3`, `margin: 0 auto 22px` (≤478px: `margin: 0`, spans two rows). Number badge: 30 × 30px circle, `top/right: -6px`, 2px `#1a2ad3` border, white fill.
- Connectors (authored): ≥992px — one 2px line `top: 42px; left: 10%; right: 10%`, `rgba(26,42,211,0.20)` behind the circles (computed width 992px at 1920 viewport, 741.5px at 1024). 479–991px — solid 2px segments after steps 1, 2, 4 and dashed (3px dash) segments linking row-1 end to row-2 start for steps 3→4; computed `::before` of the grid is `none` at these widths. ≤478px — vertical 2px line from `top: 84px` to `bottom: -40px` at `left: 41px` on every step except the last.
- Trust strip: `margin-top: 50px; padding: 32px 36px` (28px 24px at 479–767px; 28px 20px at ≤478px); `border: 1px solid rgba(26,42,211,0.14)`; `border-radius: 16px`; white background; `box-shadow: 0 16px 38px rgba(26,42,211,.12), 0 3px 10px rgba(15,23,42,.06)`; inner grid `repeat(5, 1fr)`, gap 24px (479–767px: 6-track, `span 2`, items 4–5 centered, gap 28px 16px; ≤478px: one column, items become rows with a 1px `rgba(26,42,211,.08)` divider and 18px vertical padding).
- CTA card: `margin-top: 80px` (50px ≤478px); `min-height: 360px` (420px at 768–991px); grid `minmax(360px,0.9fr) minmax(0,1.1fr)` (768–991px: `44% / 56%`; ≤767px behavior: see below); `border-radius: 20px` (16px ≤478px); `overflow: hidden`; background `#111a38`; `border: 1px solid rgba(26,42,211,0.10)`; `box-shadow: 0 18px 42px rgba(17,26,56,.16), 0 3px 10px rgba(15,23,42,.06)`. Content padding `48px 52px` (36px 32px at 768–991px; 26px 20px 24px at ≤478px). Actions: 2-column grid, gap 14px (1 column at 768–991px, landscape 479–767px, and ≤478px, gap 12px).
- Evidence state: OBSERVED
- Evidence references: extracted CSS (58 rules); computed-style and bounding-box measurements per viewport.

## 6. Typography
Computed values (browser) — these are the OBSERVED rendered values.

| Element | Family | Size (Desktop 1920) | Weight | Line height | Color |
|---|---|---|---|---|---|
| Eyebrow | Open Sans | 13px | 700 | 1 (authored) | `#1a2ad3`, letter-spacing 1.56px (0.12em), uppercase |
| H2 title | Inter | **31.25px** | 700 | 35.94px | `#111111` |
| Intro / Supporting | Open Sans | 18px | 400 | 30.6px | `#526078` |
| H3 steps group title | Inter | 20px | 700 | 25px | `#111111`, centered |
| H3 step title | Inter | **28.8px** | 700 | 31.68px | `#111111`, centered |
| Step text | Open Sans | 15px | 400 | 24.75px | `#526078` |
| Number badge | Open Sans | 14px | 700 | 1 | `#1a2ad3` |
| H3 trust title | Inter | 17px | 700 | — | `#111a38`, letter-spacing 0.68px (0.04em); capitals are typed in source |
| Trust text | Open Sans | 15px | 600 | 1.55 | `#34405f` |
| H3 CTA title | Inter | 38px | 700 | 44.84px | `#ffffff` (≥479px); `#111111` at ≤478px (24px) |
| CTA text | Open Sans | 17px | 400 | 1.7 | `rgba(255,255,255,.78)`; `#526078` at ≤478px (16px) |
| CTA buttons | Open Sans | 15px | 700 | 1.2 | see §7 |

- Authored vs computed: the extracted CSS authors the H2 as `clamp(2.125rem, 3.6vw, 3.125rem)` and `.sm-process-steps__title` as `clamp(1.5rem, 2.4vw, 2rem)`, but the browser computes 31.25px and 20px respectively at 1920. `.sm-process-step__title` has **no authored font-size** in the extracted CSS; the computed 28.8px therefore comes from another stylesheet (Bricks default or theme). The cause of the H2/steps-title discrepancy is not determined (see §15).
- ANNOTATION (O-07, 2026-10-11; original text above is preserved): the cause is recorded in M03-03, "O-01 and O-02 Measurement Resolution": the reference authors its sizes in rem against a 10px root, so the computed 31.25px and 20px agree with the authored clamp values. The step title has no authored size (unchanged).
- Responsive computed values (H2 / step title / steps group title): Tablet 1024 — 31.25 / 28.8 / 20; 820 — 29.52 / 28.8 / 19.68; Mobile Landscape 844 — 30.384 / 28.8 / 20; Mobile Portrait 390 — 21.25 / 28.8 / 15. CTA title: 38 / 30.72 / 31.16 / 32 / 24px.
- Evidence state: OBSERVED (computed); cause of mismatch UNKNOWN.
- ANNOTATION (O-07, 2026-10-11; original line above is preserved): the cause is no longer UNKNOWN; see the annotation above and M03-03, "O-01 and O-02 Measurement Resolution".
- Evidence references: `getComputedStyle` per viewport; extracted CSS.

## 7. Colors and Visual Treatment
- Tokens used by the section (reference): `--sm-primary #1a2ad3`, `--sm-primary-hover #101fb5`, `--sm-text-secondary #526078`, `--sm-white`, `--sm-dark-soft #111a38`, `--sm-text #111111`. These names and values match the tokens already present in `src/assets/css/main.css` `:root` (`--sm-primary`, `--sm-primary-hover`, `--sm-dark-soft`, `--sm-text`, `--sm-text-secondary`, `--sm-white`). Hard-coded values also appear: `#f2f5ff`, `#34405f`, `#25d366`, `#111a38`.
- Step circles: solid `#1a2ad3`; icon stroke `#f2f5ff` (1.6 stroke width, 34px).
- Trust icon discs: 54px, `#f2f5ff` fill, `1px rgba(26,42,211,.08)` border, `box-shadow: 0 8px 24px rgba(17,26,56,.08)`; icon stroke `#111a38` with accent strokes `#1a2ad3` (24px, 1.6 width).
- Primary button: `#1a2ad3` fill/border, white text; hover `#101fb5`. Secondary button (desktop): transparent, `1px rgba(255,255,255,.34)` border, white text; hover `#25d366` fill/border, white text, `box-shadow: 0 8px 22px rgba(37,211,102,.24)`. Secondary button (≤478px, light card `#f2f5ff`): white fill, `#1a2ad3` border, `#111a38` text.
- Measured contrast ratios (computed from observed colors): `#ffffff` on `#1a2ad3` 9.07:1; step text `#526078` on white 6.36:1; trust text `#34405f` on white 10.27:1; CTA text (white @ .78 over `#111a38`) 10.50:1; `#111a38` on white 17.09:1; **`#ffffff` on `#25d366` (secondary hover) 1.98:1**.
- Evidence state: OBSERVED
- Evidence references: extracted CSS; hover computed values; contrast computed from observed RGB values.

## 8. Assets and Media
- Step icons (5) — inline SVG, 24×24 viewBox, rendered 34px; `aria-hidden="true"`. Motifs: chat bubble (1), clock (2), magnifier (3), checklist document (4), shield-check (5).
- Trust icons (5) — inline SVG 24px: magnifier, wrench, coin-in-circle, sun/settings, shield-check. Contained in `div.brxe-code` wrappers.
- CTA image:
  - Source: `https://staging.serviciomunguia.com/wp-content/uploads/2026/07/servicio-munguia-tecnico-diagnostico-lavadora-cta-1024x819.webp`; `srcset` variants 300w, 768w, 1024w, 1536w, and a 1600w original `…-cta.webp`.
  - Intrinsic aspect 1024 × 819 (≈1.25:1). Rendered `object-fit: cover; object-position: center` (`object-position` 35% center at 768–991px and at 479–767px landscape; 38% center at ≤478px). Desktop box 557.3 × 360px; ≤478px box 333.6 × 187.7px (16/9).
  - Alt text (verbatim): `Técnico de Servicio Munguía realizando el diagnóstico de una lavadora a domicilio`.
  - Delivery: Bricks lazy-load — served `src` is an empty SVG placeholder (viewBox 1024×819); real URL in `data-src`/`data-srcset`; swapped by JavaScript after scroll. With JavaScript disabled the placeholder remains (verified).
- Dependency fonts: Inter and Open Sans (see §14).
- Evidence state: OBSERVED
- Evidence references: raw HTML; live image `currentSrc` and `naturalWidth` per viewport.

## 9. Responsive Behavior
Breakpoints observed in the reference CSS (not project-approved values): `max-width: 991px`, `min-width: 992px`, `min-width: 768px … max-width: 991px`, `max-width: 767px`, `min-width: 479px … max-width: 767px` + `orientation: landscape`, `max-width: 478px`. Project breakpoints are defined by the project's own `main.css` and approved documentation, not by this table.

### Desktop (1920 × 945; also ≥992px)
- Layout: 5-column steps with one continuous connector behind the circles; trust strip 5 columns; CTA 2-column (image left ≈ 557px, content right).
- Visibility: all content visible. Sizing: see §5/§6.
- Overflow: none (document scroll width equals viewport minus scrollbar).
- Evidence state: OBSERVED

### Tablet
- 1024 × 1366 (still ≥992px, so the Desktop rules apply): 5 columns of 166.2px. **Step titles at 28.8px do not fit the columns**: measured `scrollWidth` > `clientWidth` for titles 2, 4, 5 (198/178/220 vs 166px); titles 2 and 3 render visually fused ("ConfirmamosRealizamos"), title 5's last word is clipped at the right edge, titles wrap to 3–4 lines, and step heights vary 367–505px. Trust items remain 5 columns (151px). CTA: image 416px / content 509px.
- 820 × 1180 (≤991px rules): 6-track grid, steps 1–3 on row 1 (230px each) and steps 4–5 centered on row 2; connectors as segments; title overflow: none at 820 (see sweep below). CTA 2-column 44/56 with a single-column actions stack and `min-height: 420px`.
- Step-title overflow sweep (live resize without reload, 900px-high window; "over" = step titles whose `scrollWidth` exceeds `clientWidth`; step-title column width in parentheses): 992px → 4 titles (160px); 1000 → 4 (162); 1024 → 3 (166); 1100 → 2 (180); 1200 → 1 (199); 1280 → 1 (214); 1366 and wider → 0 (229); 820 → 0 (230); 768 → 1 (214); 600 → 4 (163); 479 → 4 (125px, up to 5 lines); 390 → 0 (231); 360 → 1 (201). A reading at 478px returned the same column width as 479px (125px) although the ≤478px single-column rule should apply; that single reading is not relied upon. Step-title font size stays 28.8px at every width.
- ANNOTATION (O-07, 2026-10-11; original text above is preserved): the inconsistent 478px reading is explained by the fractional-width gap between `max-width: 478px` and `min-width: 479px` (likewise 991/992); see M03-03, "O-01 and O-02 Measurement Resolution", which also summarizes a denser sweep (167 widths) and the five inspected viewports.
- Evidence state: OBSERVED (geometry and overflow counts at the listed widths only; widths not listed are not measured).

### Mobile Landscape (844 × 414)
- Layout: same 6-track composition as 820 (steps 237.8px wide); trust strip 5 columns at 118px (the 6-track rule applies only up to 767px, so at 844px the Desktop 5-column rule applies); CTA 2-column (334/425px) with stacked buttons.
- Overflow: none at document level.
- Evidence state: OBSERVED

### Mobile Portrait (390 × 844)
- Layout: single column; each step is a two-column row (84px visual | text) with a vertical connector; trust strip rows with dividers; CTA stacked on a light `#f2f5ff` card (image 16/9 on top, then title/text/buttons stacked); buttons full width.
- Overflow: none. The reference page has no Bottom Navigation (NOT APPLICABLE; the project's Bottom Navigation is a PM-approved new-architecture feature).
- Evidence state: OBSERVED

## 10. Interactive Behavior and States
- Trigger: none for steps, trust items, or media; only the two CTA links are interactive.
- Default state: all content is visible at load/scroll (opacity 1, `transform: none`); no entrance animation is applied (0 running animations on section elements; no `data-interactions`/`data-animation` attributes).
- Hover:
  - Primary CTA: background/border → `#101fb5`; `transform: translateY(-1px)`; no shadow.
  - Secondary CTA (desktop styling): fill/border → `#25d366`; `translateY(-1px)`; green shadow.
  - Step circles, trust items, image: no hover change (computed `transform`, `box-shadow`, `cursor` unchanged).
- Focus: browser-default focus ring on both CTAs (computed `outline: auto 2.4px`, outline color = the button's text color: white on the primary, white on the secondary at desktop). No authored `:focus-visible` rules were found among the 58 extracted rules.
- Active: none authored.
- Transitions: only on CTA buttons — `background-color, border-color, color, box-shadow, transform` at 0.2s ease.
- Scroll behavior: none (no scroll-linked effects). Image lazy-load swap occurs on scroll via Bricks.
- Keyboard: Tab reaches the primary then the secondary CTA; no other tab stops in the section.
- Reduced motion: the page defines 5 `prefers-reduced-motion` blocks; none reference `sm-process`. The only section motion is the 0.2s CTA transition and 1px hover lift, which are not reduced.
- Evidence state: OBSERVED
- Evidence references: computed hover/focus values at 1024 × 1366; `document.getAnimations()`; stylesheet rule scan; reduced-motion emulation.

## 11. Accessibility Observations
- Heading structure: H1 (Hero) → H2 (section). Inside the section the steps-group title, the five step titles, the trust title, and the CTA title are all H3 (flat). The eyebrow is not a heading.
- Landmark structure: the section has no accessible name (`aria-labelledby`/`aria-label` absent).
- List semantics: no ordered/unordered list semantics for steps or trust items.
- Keyboard access: two links, native focus order matches visual order.
- Focus visibility: default outline; outline color follows `currentColor` (white). On the dark desktop card this is visible; on the light mobile card (`#f2f5ff`) the primary button's white outline sits against a light background — not directly measured at 390px (UNKNOWN; to be verified).
- Accessible names: CTAs have visible text names. The WhatsApp link opens a new tab (`target="_blank"`) without an indication in its accessible name and without `rel`.
- Alt text: CTA image has descriptive alt; SVG icons are hidden from AT.
- Contrast: see §7; one failing pair (white on `#25d366`, 1.98:1) on secondary-button hover at desktop widths.
- Motion observations: no autoplay or looping animation; no reduced-motion handling needed for current effects beyond the CTA transition.
- Evidence state: OBSERVED
- Evidence references: accessibility-relevant DOM queries; computed outline values; contrast calculation.

## 12. SEO-Relevant Static Content
- Static heading content: H2 + five H3 step titles + trust and CTA H3 are present in the served HTML (not injected by JavaScript).
- Static body content: all intro, step, trust, and CTA text is present in the served HTML (verified by raw HTML download and by loading with JavaScript disabled: 2024 characters of inner text).
- Links: `#contacto` (target absent on page), external `wa.me` link. No internal links to other sections inside the section.
- Metadata observations: page-level `title` is `Inicio Bricks – Reparación de Lavadoras y Refrigeradores | Servicio Munguía` (staging page; not the production title).
- JavaScript dependency: text content none. The CTA image requires JavaScript (Bricks lazy-load) to display; its alt text and placeholder are present without JavaScript.
- Structured data: none observed in the section.
- Evidence state: OBSERVED
- Evidence references: raw HTML; JS-disabled load.

## 13. Technical Implementation Observations
Recorded as evidence only; not requirements.
- Builder: Bricks (WordPress). Element ids `brxe-*`; classes `brxe-*`, `bricks-lazy-hidden` (5 elements remain flagged after scroll), `bricks-button`, `bricks-background-primary`, `css-filter`.
- Project classes in the reference: `sm-process*` BEM-like names (`sm-process-section`, `sm-process`, `sm-process-header`, `sm-process-eyebrow`, `sm-process-title`, `sm-process-intro`, `sm-process-supporting`, `sm-process-steps__title`, `sm-process-steps`, `sm-process-step`, `__visual`, `__number`, `__title`, `__text`, `sm-process-trust`, `__title`, `__items`, `__item`, `__icon`, `__text`, `sm-process-cta`, `__media`, `__image`, `__content`, `__title`, `__text`, `__actions`, `__button`, `--primary`, `--secondary`).
- CSS: injected inline by Bricks (`bricks-frontend-inline-css`), not in the child theme stylesheet (child `style.css` is 260 bytes with no `sm-process` rules). Contains dead/duplicate rules: `.sm-process-steps__title` declared twice; `.sm-process-step__icon` rules match no element; `.sm-process-eyebrow p`, `.sm-process-intro p`, `.sm-process-supporting p`, `.sm-process-step__text p`, `.sm-process-trust__text p`, `.sm-process-cta__text p` match no element.
- JavaScript: no section-specific script. Bricks `bricks.min.js` handles lazy-loading. No animation library involved in the section.
- Evidence state: OBSERVED

## 14. Dependencies
- Fonts: Inter, Open Sans (reference loads them from Google Fonts). The project self-hosts both (Inter and Open Sans 400/500/600/700 normal) per `docs/ARCHITECTURE.md`; weights used by this section: Inter 700; Open Sans 400, 600, 700. Open Sans 700 and Inter 700 are within the approved working set.
- Images: one CTA photograph (WebP; see §8).
- Icons: 10 inline SVGs (no icon font).
- Scripts: none specific to the section.
- Plugins: none specific.
- External services: WhatsApp `wa.me` link.
- Evidence state: OBSERVED

## 15. Unknowns and Ambiguities

| ID | Item | State | Why unresolved | Reconstruction critical | Required evidence / PM decision |
|---|---|---|---|---|---|
| U-01 | Intended H2 and step-title type scale (authored `clamp(34px–50px)` vs computed 31.25px; step title 28.8px with no authored size) | UNKNOWN | Authored and computed values disagree; the cause was not isolated and the source of the 28.8px step-title size was not identified | YES | PM decision: which scale is the design intent (observed computed values, authored values, or a PM-specified scale) |
| U-02 | Destination of the primary CTA (`#contacto` does not exist on the reference; the new-architecture Menu uses `#contacto`, the approved Mobile Bottom Navigation uses `#agendar-diagnostico`) | UNKNOWN | No anchor named `contacto` exists on the reference page; the Contact/Scheduling section is not extracted | YES | PM decision: canonical anchor and CTA target |
| U-03 | Intended paragraph breaks inside step text (source has blank-line separators without `<p>`; CSS targets `p`) | UNKNOWN | Authored intent vs rendered run-in paragraph | NO (text content is complete either way) | PM decision: render as separate paragraphs or one block |
| U-04 | Intended layout for widths where step titles overflow (observed 992–1280px, 768px, 479–600px, 360px) | UNKNOWN | Overflow is observed but intent is not documented; the reference authors no step-title size | YES | PM decision (see PI-02 and D-14 in the review document) |
| U-05 | Title overflow at Mobile Landscape 844 and at the 478/479px boundary | UNKNOWN | Sweep did not include 844; the 478px reading was inconsistent | NO | Re-measure at implementation/test time |
| U-06 | CTA primary-button focus ring visibility on the light mobile card | UNKNOWN | Measured at 1024 only | NO | Verify at M03-05 or decide via improvement proposal |
| U-07 | Self-hosting the CTA image (file not downloaded in this assignment; licence/ownership statement not in repository) | UNKNOWN | Asset acquisition and approval not performed; discovery may not change `src/` | YES | PM approval and delivery of the source image, or PM-approved alternative |
| U-08 | Accuracy of commercial claims in the copy (two-hour window, visit cost deducted if repair authorized, folio note, warranty depends on part, possible second visit) | UNKNOWN | Business facts cannot be verified from the repository | NO for extraction; YES for publishing | PM confirmation that the copy is accurate |
| U-09 | Browser-support baseline for any proposed progressive-enhancement CSS/JS features | UNKNOWN | No approved browser-support policy exists in the repository | NO for extraction; YES for motion implementation | PM decision |
| U-10 | Header offset when navigating to `#como-trabajamos` (fixed header may cover the section heading) | UNKNOWN | Header height at all viewports not measured here; the section's `scroll-margin` on the reference is not present in the extracted rules | NO | Measure during implementation |

### Resolution status after M03-03 (annotation added under O-07, 2026-10-11)
The original rows above are preserved unchanged. This table maps each item to the decisions or measurements recorded in `docs/phases/phase-03/M03-03-pm-approval-scope-freeze.md`. An item with no recorded decision or measurement stays UNKNOWN.

| ID | Status after M03-03 | Basis (M03-03 section) |
|---|---|---|
| U-01 | PM APPROVED | D-01; "O-01 and O-02 Measurement Resolution" |
| U-02 | PM APPROVED | D-02, D-03 |
| U-03 | PM APPROVED | D-06 |
| U-04 | PM APPROVED | D-14; "O-01 and O-02 Measurement Resolution" |
| U-05 | OBSERVED (measurement); fit of the implementation is verified at testing | "O-01 and O-02 Measurement Resolution" |
| U-06 | UNKNOWN — to be measured at implementation or testing | D-05 requires the implementer to verify contrast on both card backgrounds; no measurement is recorded |
| U-07 | PM APPROVED; transfer performed | D-07; "D-07 Image Transfer Resolution" |
| U-08 | PM APPROVED | D-13 |
| U-09 | PM APPROVED | D-11 |
| U-10 | UNKNOWN — to be measured at implementation or testing | PI-09 is approved in "O-06 Decisions Resolution"; the Header geometry is not yet measured |

## 16. PM-Approved Deviations
- None recorded for this section.
- PM-approved items existing elsewhere that touch this section's integration (not deviations of this section): the Menu link `¿Cómo trabajamos?` already targets `#como-trabajamos` (`MENU-EXTRACTION.md`, approved); the Mobile Portrait Bottom Navigation is a PM-approved product evolution (`docs/ARCHITECTURE.md`).
- State: NOT APPLICABLE

### Deviations recorded in M03-03 (added 2026-10-11; the original lines above are preserved)
The Product Manager approved this extraction as evidence of the observed staging reference (O-07 Option A, relayed 2026-10-11; M03-03, "O-07 Extraction Evidence Approval"). The observed statements in §1–§14 are unchanged. The table below separates what was observed from what the PM approved; full text is in the referenced M03-03 section, not copied here.

| M03-03 item | Observed reference | PM-approved | Deviates from observed? |
|---|---|---|---|
| D-01, "O-01 and O-02 Measurement Resolution" | Step titles 28.8px, no authored size (§6) | Step titles `clamp(15px, 2.4vw, 20px)`, line height 1.25, normal wrap; H2 and group heading unchanged; all sizes in px | YES (step titles) |
| "O-01 and O-02 Measurement Resolution", D-14 | Switch-points 991/992 and 478/479 with fractional-width gaps (§9) | Same switch-points and three layouts, written with the `.98px` convention | Gaps closed only |
| D-02, D-03 | Primary CTA `href="#contacto"`, no such id on the page (§4) | Primary CTA links to `#agendar-diagnostico`; `#contacto` and `#agendar-diagnostico` stay distinct | YES |
| D-04 | Group title and five step titles all H3 (§4) | Steps-group title H3; step titles H4; trust and CTA titles H3 | YES |
| D-05 | Secondary hover fill `#25d366` with white text; default focus outline (§7, §10) | Hover fill `#25d366` with text `#111a38`; focus outline `#1a2ad3` on the light card, white on the dark card, with offset | YES |
| D-06 | Step text renders run-in (§3) | Separate paragraphs | YES |
| D-07, "D-07 Image Transfer Resolution" | CTA image via Bricks JavaScript lazy-load from the WordPress upload (§8) | Self-hosted image with intrinsic width/height; file transferred to `src/assets/images/` | YES |
| D-08 (MOT-01 to MOT-07) | No entrance, scroll, or progress motion (§10) | Approved motion system with the stated ranges; MOT-02 one-shot only | YES |
| "O-06 Decisions Resolution", PI-01 | Steps are `div`s (§4) | `ol > li` | YES |
| "O-06 Decisions Resolution", PI-04 | Section has no accessible name (§4) | `aria-labelledby` to the H2 | YES |
| "O-06 Decisions Resolution", PI-05(c) | WhatsApp link `target="_blank"` without `rel` (§3) | New tab with `rel="noopener noreferrer"` and an accessible indication (mechanism not defined) | YES |
| "O-06 Decisions Resolution", PI-08 | Placeholder `src`, JavaScript swap (§8) | `srcset`, native lazy loading, `decoding="async"`, descriptive alt, works without JavaScript | YES |
| "O-06 Decisions Resolution", PI-09 | No `scroll-margin` observed (§15 U-10) | Responsive `scroll-margin-top` from measured Header geometry | YES |
| "O-06 Decisions Resolution", PI-10 | CTA hover lift and 0.2s transition not covered by reduced motion (§10) | Under `prefers-reduced-motion: reduce`, no hover translation or animated transitions; color changes instantaneous | YES |
| "O-06 Decisions Resolution", MOT-03 | No current-step emphasis (§10) | Static, instantaneous active-step emphasis in Mobile Portrait; detection retained; no ARIA current state | YES |
| D-09, D-10, D-11, D-12, D-13, D-15, "O-04 Section Order Resolution" | Not observed behavior | Component naming, trust strip kept as observed, no browser baseline, no structured data in the section, copy claims confirmed, PROJECT-STATE entry, physical OnePage order | Constraints on reconstruction; no change to observed content |

- State: PM APPROVED (as recorded in M03-03).

## 17. Evidence References
- Reference URL: https://staging.serviciomunguia.com/inicio-bricks/ (HTTP 200 on 2026-10-10)
- Screenshots: captured for Desktop, Tablet 1024, Tablet 820, Mobile Landscape, Mobile Portrait during inspection; stored outside the repository (not committed).
- Viewports: 1920 × 945, 1024 × 1366, 820 × 1180, 844 × 414, 390 × 844.
- DOM observations: raw HTML section capture (≈11.8 KB); live DOM queries.
- Computed-style observations: per §5–§7 and §10.
- Asset references: §8 URLs.
- Interaction observations: hover and focus on both CTAs at 1024 × 1366; reduced-motion media emulation; JavaScript-disabled load.
- PM specifications: `docs/phases/phase-03/M03-00-claude-discovery-planning-requirement.md` (scope authority).
- PM decisions (added 2026-10-11): `docs/phases/phase-03/M03-03-pm-approval-scope-freeze.md`.

## 18. Reconstruction Readiness
- Critical UNKNOWN values present: YES (U-01, U-02, U-04, U-07)
- Result: NOT READY FOR RECONSTRUCTION
- Blocking items: U-01, U-02, U-04, U-07
- PM approval required: YES — see decision register in `docs/phases/phase-03/M03-02-review-improvement-proposal.md`
- Notes: This extraction records the reference as-is. Defects visible in the reference (for example the 1024px title collision) are recorded as observations here and classified in the review document; none was corrected inside this extraction.

### Reassessment under M03-03 (added 2026-10-11; the original assessment above is preserved)
- Criterion defined by the documentation: `REFERENCE-EXTRACTION-WORKFLOW.md` ("Reconstruction Readiness") and the template field "Critical UNKNOWN values present": READY FOR RECONSTRUCTION requires every reconstruction-critical field to be OBSERVED, PM APPROVED, or NOT APPLICABLE; any reconstruction-critical UNKNOWN results in NOT READY FOR RECONSTRUCTION. No other criterion is defined, and none is added here.
- Critical UNKNOWN values present: NO. The four items listed as critical in the original assessment (U-01, U-02, U-04, U-07) are each PM APPROVED (see the §15 annotation table).
- Result: READY FOR RECONSTRUCTION
- Blocking items: none under the criterion above.
- PM approval: the extraction is approved as evidence (O-07 Option A, relayed 2026-10-11; M03-03, "O-07 Extraction Evidence Approval").
- Remaining UNKNOWN items (none reconstruction-critical in §15): U-06 and U-10, both to be measured at implementation or testing.
- Notes: this result is not a scope freeze and not an implementation authorization; both are governed by M03-03 and remain pending or not authorized. Items recorded in M03-03 as still open outside this extraction's UNKNOWN register (the PI-05(c) accessible-indication mechanism, the M03-04 specification and file allow-list) are not extraction UNKNOWN items and are not used to justify the result either way.
