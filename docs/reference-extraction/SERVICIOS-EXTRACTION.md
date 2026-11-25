# Reference Section Extraction

Evidence-only DRAFT for review. It records what the legacy reference renders. It contains no recommendations. Phase 04 is NOT defined or authorized (PD-55); this draft is not committed and creates no scope.

Evidence states: OBSERVED / PM APPROVED / UNKNOWN / NOT APPLICABLE.

## 1. Reference Identification
- Section name: SERVICIOS (OnePage services section)
- Reference URL: https://staging.serviciomunguia.com/inicio-bricks/ (anchor `#servicios`)
- Reference environment: Legacy/reference staging — WordPress + Bricks
- Section boundary: `<section id="servicios" class="brxe-section sm-services-section">`. Preceded by `#como-trabajamos`; followed by `#cobertura`.
- Viewports measured (emulated in the Claude desktop built-in browser): 1920 × 945, 1024 × 1366, 820 × 1180, 844 × 414, 390 × 844.
- Extraction date: 2026-11-24
- Extractor: Claude (chat session), read-only
- Method: raw HTML fetched from the reference URL and parsed (section markup, lazy-load attributes, Bricks inline CSS rules containing `sm-service`: 62 rules, 7 963 characters); live DOM and computed-style queries per viewport. No screenshots were taken or stored in this pass.
- Evidence state: OBSERVED

## 2. Section Purpose
- Purpose: present the three service lines and the trust figures, each service leading to the contact request.
- Evidence state: OBSERVED (content); purpose wording is a description of the content, not an observed statement.

## 3. Content Hierarchy
- Eyebrow: `SERVICIOS`
- H2: `Servicios de diagnóstico y reparación`
- Intro: "Todo servicio comienza con un diagnóstico técnico. Revisamos el equipo, identificamos la causa real de la falla y te informamos el presupuesto antes de realizar cualquier reparación."
- Card 1 — availability pill `Agenda disponible`; H3 `Diagnóstico y reparación de lavadoras`; description "Evaluamos fallas de carga, centrifugado, drenado, fugas, ruidos y sistemas eléctricos o electrónicos. Después del diagnóstico te explicamos la causa y el costo de la reparación."; chips `Carga y drenado`, `Ruidos y vibración`, `Controles`; CTA `Solicitar servicio` → `#contacto`.
- Card 2 — pill `Agenda disponible`; H3 `Diagnóstico y reparación de refrigeradores`; description "Revisamos problemas de enfriamiento, fugas, ruidos, controles eléctricos y formación excesiva de hielo. No recomendamos recargar gas ni cambiar piezas sin comprobar primero la causa real de la falla."; chips `No enfría`, `Fugas`, `Hielo excesivo`; CTA `Solicitar servicio` → `#contacto`.
- Card 3 — pill `Agenda de diagnóstico` (differs from cards 1–2); H3 `Mantenimiento preventivo`; description "El mantenimiento no es una recomendación general para todos los equipos. Puede ser conveniente en refrigeración comercial y en determinados modelos de lavadora. Primero evaluamos el estado del equipo para determinar si corresponde mantenimiento o reparación."; chips `Evaluación previa`, `Uso comercial`, `Modelos compatibles`; CTA `Solicitar diagnóstico` → `#contacto`.
- Trust bar (4 items, value / label): `1,500+` Clientes atendidos; `4.5/5` Calificación promedio; `Menos de 24 h` Tiempo de respuesta; `60 días` Garantía sobre la falla reparada.
- Evidence state: OBSERVED

## 4. DOM / Structural Hierarchy
- Outer container: `section#servicios.sm-services-section` containing `.sm-services` (max-width 1240 px).
- Children in source order: eyebrow (`.sm-services-eyebrow`), H2 (`.sm-services-title`), intro (`.sm-services-intro`), `.sm-services-grid` with 3 `.sm-service-card`, `.sm-service-trust-bar` with 4 `.sm-service-trust-item`.
- Card children: `.sm-service-media` (image, `.sm-service-availability` pill, `.sm-service-icon` circle) and `.sm-service-content` (H3, `.sm-service-description`, `.sm-service-specialties` with `.sm-service-chip`, `.sm-service-button`).
- Heading outline: H2 → three H3 (one per card). Trust values are not headings.
- Semantic elements: one `section`; whether cards and chips use `ul`/`li` was not checked (UNKNOWN, non-critical).
- Evidence state: OBSERVED (class names, headings, links, counts).

## 5. Layout and Spacing
- Section padding (computed): 1920 → 88/132 top/bottom, 50 inline; 1024 → 61.44/81.92, 40.96 inline; 820 → 56/72, 32.8 inline; 844 → 56/72, 33.76 inline; 390 → 56/72, 20 inline. Background `rgba(26,42,211,0.157)` (`#1a2ad328`).
- Grid (computed): 3 equal columns, gap 24 px, at 1920 (397.3 px columns) and 1024 (293 px). 2 columns at 820 and 844 (357.6 px / 368.6 px); the third card spans the row width `calc(50% - 12px)` and is centered (CSS rule for 768–991 px). 1 column at 390 (350.4 px).
- Card: flex column, row-gap 18 px, white background, 1 px border, radius `--sm-radius-md`; content padding `34px 20px 20px`; image 280 px high.
- Trust bar: grid 4 columns at 1920 and 1024; 2 columns (768–991 px rules) at 820 and 844; 1 column at 390; margin-top 48 px, padding 24 px 20 px, radius 16 px.
- Measured card heights: 1920 → 768.5; 1024 → 859; 820 → 773 / 795.8; 844 → 745.8 / 768.5; 390 → 745.8, 773, 795.8. Heights depend on lazy-loaded state and font loading and were measured once each.
- Evidence state: OBSERVED

## 6. Typography
- Family: Inter.
- Eyebrow: 13 px (12 px at ≤478 px), weight 700, letter-spacing 0.12em, uppercase.
- H2 computed: 31.25 px at 1920 and 1024; 29.52 px at 820; 30.38 px at 844; 21.25 px at 390; weight 700; color `#111111`. Source rule `.sm-services-title { font-size: clamp(2.125rem, 3.6vw, 3.125rem) }` is the only matching font-size rule; the computed values match it because the root font size is 10px (`html` 62.5%), so 1rem = 10px: min 21.25 px, max 31.25 px, 3.6vw between (29.52 px at 820, 30.38 px at 844). Resolved, not a discrepancy.
- Intro: 18 px / 30.6 px, color `#526078`.
- H3 computed: 28.8 px / 31.68 px, weight 700, color `#111111` at all five widths. No author font-size rule matched the H3 by selector (only the global `h1…h6` rule for color, family, weight, line-height 1.1); the parent font size is 16 px, so 28.8 px is a 1.8 ratio whose source rule was not located. Computed value taken as the reference.
- Description: 16 px / 27.2 px, `#111111`; clamped to 3 lines only in the ≤767 px landscape rule.
- Chip text 12.5 px, weight 600. Pill text 13 px, weight 700. Button 16 px, min-height 44 px.
- Trust value: `clamp(22px, 2vw, 30px)` → 30 px at 1920, 22 px at the other widths; label 13 px, `#526078`.
- Evidence state: OBSERVED

## 7. Colors and Visual Treatment
- Primary `#1a2ad3` (button, pill, trust value, chip icon); button hover `--sm-primary-hover`; chip background `rgba(26,42,211,0.06)`, chip text `#17245f`; card shadow `0 14px 34px rgba(26,42,211,0.10), 0 2px 8px rgba(15,23,42,0.05)`; availability pill white text on `#1a2ad3`; icon circle 48 px white with 1 px border, centered on the image bottom edge.
- Evidence state: OBSERVED

## 8. Assets and Media
- Three images, `webp`, each with `width=1024 height=768`, class `size-large`, lazy (`bricks-lazy-hidden`, `data-src`/`data-srcset`, placeholder SVG until loaded). Variants 300w, 768w, 1024w, 1200w; sizes `(max-width: 1024px) 100vw, 1024px`.
  - `https://staging.serviciomunguia.com/wp-content/uploads/2026/08/servicio-munguia-diagnostico-reparacion-lavadoras-1024x768.webp` — alt "Técnico diagnosticando una lavadora de carga frontal a domicilio"
  - `.../servicio-munguia-diagnostico-reparacion-refrigeradores-1024x768.webp` — alt "Técnico revisando la falla de un refrigerador doméstico"
  - `.../servicio-munguia-mantenimiento-preventivo-electrodomesticos-1024x768.webp` — alt "Técnico evaluando un electrodoméstico para mantenimiento preventivo"
- Card icon circles (`.sm-service-icon`): 3 inline SVG, class `stroke brxe-icon sm-service-icon-symbol`, 24×24 viewBox, stroke `#1C274C`, width 1.5, no fill; one per card (washing machine, refrigerator, shield-check). Markup captured in the session; per-card path data starts with: card 1 `M21 14C21 17.7712 21 19.6569 …`, card 2 `M4 10V13C4 16.7712 …`, card 3 `M9.5 12.4L10.9286 14L14.5 10`.
- Chip and trust icons: Ionicons font classes `ion-md-refresh`, `ion-ios-pulse`, `ion-md-expand` (card 1 chips); `ion-ios-thermometer`, `ion-ios-log-out`, `ion-ios-snow` (card 2); `ion-md-clipboard`, `ion-ios-appstore`, `ion-md-checkmark-circle-outline` (card 3); trust icons `ion-ios-people`, `ion-md-star-outline`, `ion-md-time`, `ion-md-checkmark-circle`.
- Image fit: `object-fit: cover`, height 280 px (all widths except the ≤767 landscape rule).
- Evidence state: OBSERVED.

## 9. Responsive Behavior
- Desktop (1920): 3 columns, trust bar 4 columns. OBSERVED.
- Tablet 1024: same 3 columns at 293 px each; trust bar 4 columns. OBSERVED.
- Tablet 820: 2 columns, third card centered at half width; trust bar 2×2 with dividers. OBSERVED.
- Mobile Landscape 844 × 414: width exceeds 767 px, so the `(max-width: 767px) and (orientation: landscape)` card rule (image 34% / content 66%, min-height 220 px, 3-line description clamp, right-aligned auto-width button) does NOT apply; layout equals the 820 px tablet layout. OBSERVED. The ≤767 landscape layout was not measured (§15).
- Mobile Portrait 390: 1 column, trust bar 1 column with horizontal dividers. OBSERVED.
- Evidence state: OBSERVED

## 10. Interactive Behavior and States
- Card hover (CSS): `translateY(-6px)`, border `rgba(26,42,211,0.18)`, larger shadow, 0.3 s; removed under `prefers-reduced-motion: reduce`.
- Button: background → `--sm-primary-hover`; arrow `::after` shifts `translate(4px,-2px)` on hover, 0.22 s, disabled under reduced motion; focus-visible outline `3px solid rgba(26,42,211,0.32)`, offset 3 px.
- No JavaScript behavior was identified in the section other than Bricks lazy loading of images. Not tested live: hover, focus and reduced-motion states were read from CSS, not exercised.
- Evidence state: OBSERVED (CSS); live interaction UNKNOWN.

## 11. Accessibility Observations
- Heading structure: H2 then three H3 (above).
- No `aria-label`, `role`, `tabindex` or `aria-hidden` attributes found in the section markup, including on the three inline SVGs.
- Focusable elements: three links (`Solicitar servicio` ×2, `Solicitar diagnóstico`); zero buttons.
- Alt text present on all three images (see §8).
- Contrast, keyboard order and screen-reader output were not measured.
- Evidence state: OBSERVED (attributes); contrast UNKNOWN.

## 12. SEO-Relevant Static Content
- All headings, intro, card text, chips, CTAs and trust figures are present in the raw HTML (fetched without executing JavaScript). Image `src` is a placeholder; real URLs are in `data-src`/`data-srcset` in the raw HTML.
- Links: three in-page links to `#contacto`. No element with `id="contacto"` exists on the reference page (also recorded in COMO-TRABAJAMOS-EXTRACTION.md).
- No structured data inside the section was checked.
- Evidence state: OBSERVED

## 13. Technical Implementation Observations
- Builder: Bricks (`brxe-section`, `brxe-image`, `bricks-button`, `bricks-lazy-hidden`). Section CSS is in the page-level inline Bricks CSS (62 `sm-service*` rules).
- The page also carries `<meta name="robots">` (a robots meta exists on the reference page; its value was not read).
- Evidence state: OBSERVED

## 14. Dependencies
- Font: Inter. Images: three WebP files above. Icons: 3 inline SVG (card circles) and 13 Ionicons font icons (9 chips, 4 trust items); the Ionicons font file and its URL were not inspected. Scripts: Bricks lazy loading only. External services: none identified.
- Evidence state: OBSERVED; Ionicons font file URL UNKNOWN (§15).

## 15. Unknowns and Ambiguities
1. Trust-bar claims: RESOLVED — PM confirmed the four figures on 2026-11-24 (PM APPROVED, conversation; no archived artifact yet).
2. CTA target: RESOLVED — PM decided on 2026-11-24 to keep `#contacto` as is, with no target element until the Contacto section is built (PD-55); the WhatsApp prefilled-message and automation ideas are deferred to the Contacto phase. No deviation from the reference. Backlog item 49 (missing ids) still applies.
3. H2 and H3 sizes: RESOLVED — H2 follows the CSS rule (the computed values are that rule with 1rem = 10px); H3 uses the computed 28.8 px because no rule was located. PM instruction: follow the current CSS rule.
4. Mobile Landscape: RESOLVED — PM decided 844 × 414 is sufficient; the ≤767 px landscape rule stays unmeasured and out of scope (NOT APPLICABLE by PM decision).
5. Card 3 pill text `Agenda de diagnóstico` differs from `Agenda disponible`: UNKNOWN whether intentional; critical: NO.
6. Icons: RESOLVED for identity (§8). Open, non-critical: the Ionicons font file and its license were not inspected.
7. Hover, focus and reduced-motion states: read from CSS only: critical: NO.
8. Color contrast was not measured: critical: NO.
9. Section heights vary between measurements because images load lazily; no screenshot comparison: critical: NO.
10. Value of the reference page robots meta: not read; critical: NO.
11. `ul/li` use in cards and chips was not checked: critical: NO.
- Evidence state: see each item.

## 16. PM-Approved Deviations and Decisions
- PM decisions of 2026-11-24 given in the project conversation (no archived approval artifact yet): trust-bar figures confirmed; H2 follows the CSS rule; Mobile Landscape is 844 × 414 only; icons to be captured (done). CTA target `#contacto` kept as is, with an empty anchor until Contacto is built.
- Deviations from the reference: none recorded. State: NOT APPLICABLE.

## 17. Evidence References
- Reference URL: https://staging.serviciomunguia.com/inicio-bricks/ (loaded 2026-11-24, HTTP 200 as served to the built-in browser).
- Viewports: 1920 × 945, 1024 × 1366, 820 × 1180, 844 × 414, 390 × 844.
- DOM observations: raw HTML section parse (14 223 bytes of rendered section markup); live DOM queries.
- Computed-style observations: §5–§7.
- Asset references: §8.
- Screenshots: none taken in this pass.
- PM specifications: PD-55 (section order, one section per phase).

## 18. Reconstruction Readiness
- Critical UNKNOWN values present: NO
- Result: READY FOR RECONSTRUCTION (content of this extraction only)
- Blocking items: none.
- PM approval required: entry to Phase 04 and its scope freeze (PD-55); this draft is not committed and does not authorize any phase.
- Notes: open non-critical items are listed in §15 (items 5 and 7 to 11 and the Ionicons font file).
