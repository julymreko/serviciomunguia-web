# M04-02 - PM Approval & Scope Freeze (Phase 04 - Servicios)

DRAFT FOR PRODUCT MANAGER REVIEW AND COMMIT. Transcription of decisions the Product Manager gave in the project conversation on 2026-11-24. The transcriber is not an approver (`docs/ARTIFACT-CONVENTIONS.md`). Nothing in this file authorizes implementation, commit, push or deployment.

Status:
IN PROGRESS (closes when the Product Manager commits this record)

Phase specification:
`docs/phases/PHASE-04-servicios.md`

Reference extraction:
`docs/reference-extraction/SERVICIOS-EXTRACTION.md` (READY FOR RECONSTRUCTION; section 3 holds the frozen content, section 8 the assets, sections 5 to 7 the measured geometry and styles)

## Decision Record

### PD-56 - Phase 04 scope freeze (PM APPROVED - 2026-11-24)

The Product Manager decided, in this order, and approved every option marked as recommended in the proposal:

Extraction decisions:

- **E-1 Trust-bar figures.** `1,500+` Clientes atendidos, `4.5/5` Calificación promedio, `Menos de 24 h` Tiempo de respuesta and `60 días` Garantía sobre la falla reparada are confirmed. Related: extraction section 15, item 1.
- **E-2 Headings.** The H2 follows the reference CSS rule `clamp(2.125rem, 3.6vw, 3.125rem)` (the root font size of the stylesheet is 10px, so the observed sizes are that rule). The H3 uses the computed 28.8 px because no rule was located. Related: item 3.
- **E-3 Mobile Landscape.** 844 × 414 is the only Mobile Landscape viewport. The `(max-width: 767px) and (orientation: landscape)` rule of the reference is out of scope. Related: item 4 and D-9.
- **E-4 CTA target.** The three CTAs keep `#contacto` as observed. No element with that id exists until the Contacto section is built (PD-55 order). A WhatsApp prefilled message and any automation are deferred to the Contacto phase. Related: item 2; backlog item 49.

Scope decisions:

- **D-1 Icons.** Replace the 13 Ionicons font icons (9 chips, 4 trust items) with equivalent inline SVG; no font dependency is added. The three card icons stay inline SVG as observed. The Product Manager's visual approval of the equivalence is part of the M04-03 visual validation.
- **D-2 Images.** Transfer the three WebP images, four size variants each, into `src/assets/images/services/` under a PM-approved transfer, with an integrity record (file name, bytes, SHA-256, dimensions, format).
- **D-3 Image loading.** Native `loading="lazy"`, `width="1024"`, `height="768"`, `srcset` (300, 768, 1024, 1200 w) and `sizes="(max-width: 1024px) 100vw, 1024px"`, with the real URL in `src`. No Bricks lazy-load placeholder.
- **D-4 Section anchor.** `id="servicios"` on the section and a responsive `scroll-margin-top` following the Smart Header geometry, as for the process section. This closes only the `#servicios` part of backlog item 49; `#contacto`, `#cobertura`, `#marcas` and `#agendar-diagnostico` stay open.
- **D-5 Semantics.** SVG icons carry `aria-hidden="true"` and `focusable="false"`. The heading outline stays H2 then three H3. Cards and chips do not use `ul`/`li`.
- **D-6 Card 3 pill.** `Agenda de diagnóstico` is kept as observed.
- **D-7 Motion.** The reference hover (card lift 6 px, border and shadow change, 0.3 s; button arrow shift, 0.22 s) and its `prefers-reduced-motion: reduce` handling are preserved. No new motion.
- **D-8 JavaScript.** None.
- **D-9 Mobile Landscape rule.** Not reproduced (see E-3).

Phase entry: with these decisions the Product Manager enters Phase 04 at M04-02. The implementation (M04-03) requires its own explicit Product Manager authorization.

**Not authorized by this decision:** M04-03, M04-04, M04-05, push and deployment, and any change to `src/` other than the image transfer that the Product Manager performed himself.

## Frozen Requirement Set

The section reproduces the reference content and measured behavior recorded in the extraction, with only the deviations of PD-56 (D-1, D-3, D-4, D-5):

- Order inside the section: eyebrow `SERVICIOS`, H2, intro, grid of three cards, trust bar of four items (extraction section 3).
- Card order and text: washing machines, refrigerators, preventive maintenance, exactly as in extraction section 3.
- Layout: 3 columns at 1920 and 1024; 2 columns with the third card centered at `calc(50% - 12px)` at 820 and 844; 1 column at 390. Trust bar: 4 columns at 1920 and 1024; 2 × 2 at 820 and 844; 1 column at 390 (extraction section 5).
- Typography, colors, radii, shadows and spacing as measured (extraction sections 5 to 7).
- Static HTML only; no JavaScript; the staging `noindex` in `base.njk` is unchanged.

## Image Transfer (performed by the Product Manager, 2026-11-24)

Purpose: bring the approved images into the repository. Same pattern as the Phase 03 CTA image (D-07).

Source base: `https://staging.serviciomunguia.com/wp-content/uploads/2026/08/`

For each of the three names below, four files are transferred (suffixes `-300x225`, `-768x576`, `-1024x768` and none, the 1200 px original), 12 files in total:

- `servicio-munguia-diagnostico-reparacion-lavadoras`
- `servicio-munguia-diagnostico-reparacion-refrigeradores`
- `servicio-munguia-mantenimiento-preventivo-electrodomesticos`

Destination: `src/assets/images/services/`, same file names, extension `.webp`.

Executor: the Product Manager, from his own terminal; the integrity record below was transcribed from his output. No agent task was created for the transfer.

## Image Integrity Record

Transfer performed by the Product Manager from his own terminal on 2026-11-24 (HTTP 200 for all 12 requests; source base `https://staging.serviciomunguia.com/wp-content/uploads/2026/08/`; destination `src/assets/images/services/`). Bytes from `ls -l`, SHA-256 from `sha256sum`, dimensions and format from `file` (WebP, VP8 encoding, YUV color). Transcribed from the output the Product Manager pasted in the project conversation. Repository baseline at that moment: HEAD `38eda2bcf63758538a965e96ce112c57ef7c0916`; the files were untracked.

| File | Bytes | SHA-256 | Dimensions |
|---|---|---|---|
| `servicio-munguia-diagnostico-reparacion-lavadoras-300x225.webp` | 6328 | `476753819d501133741e9a42eb456ca8ae7d36fe010e017b5404bdc83cd83297` | 300x225 |
| `servicio-munguia-diagnostico-reparacion-lavadoras-768x576.webp` | 23658 | `6d03f9d43a97f96ddcdc42e09855e5dac9ef01583eb86a1eb8884d40a0b7ffd5` | 768x576 |
| `servicio-munguia-diagnostico-reparacion-lavadoras-1024x768.webp` | 34966 | `5dcaf58e37c52f6ef4bcf3a3e6357edb07574e62c86de901c5724c179ecb2436` | 1024x768 |
| `servicio-munguia-diagnostico-reparacion-lavadoras.webp` | 83580 | `2272d365633df8a49838fd8a0ae1e127453a5738306d48fa9a58158953ab94b9` | 1200x900 |
| `servicio-munguia-diagnostico-reparacion-refrigeradores-300x225.webp` | 6750 | `1890029c2e97417db80ff58c34ecf443c3db7f683dd5db399ec4dbad373080e4` | 300x225 |
| `servicio-munguia-diagnostico-reparacion-refrigeradores-768x576.webp` | 24902 | `e7557e9e09d6ab53b2b2696cfa8a063ad02b7c9fee1e468007cc35addf87d0bb` | 768x576 |
| `servicio-munguia-diagnostico-reparacion-refrigeradores-1024x768.webp` | 37292 | `16562ee86b3886ae89725183df153fb69fed224e87cc6dbd1c37bf83821c8bde` | 1024x768 |
| `servicio-munguia-diagnostico-reparacion-refrigeradores.webp` | 84334 | `309bcba5f528c6c79c7bf30f209e6ff02be2c37b7597afe692271dd37954f93d` | 1200x900 |
| `servicio-munguia-mantenimiento-preventivo-electrodomesticos-300x225.webp` | 5808 | `54ba0ea677a190aca3b68c40ebfae7433a12258e406765ce79751bc640a99c21` | 300x225 |
| `servicio-munguia-mantenimiento-preventivo-electrodomesticos-768x576.webp` | 19240 | `4f539c328a7fb269b069617eb3f1ffb1c5f813437523f6496f63dabfa84f5017` | 768x576 |
| `servicio-munguia-mantenimiento-preventivo-electrodomesticos-1024x768.webp` | 27472 | `acf9592d9513b1d7a1d0409e391a24cb414c998fdf70f134b37695ca43960e99` | 1024x768 |
| `servicio-munguia-mantenimiento-preventivo-electrodomesticos.webp` | 64496 | `ddf2cfbd33b8e570ead1c147396f2f468596beefcb0bc562a4d9987220db0cdb` | 1200x900 |

Each name appears without a size suffix for the 1200 × 900 original. Files are not modified after download.

## M04-03 Allow-List (frozen proposal, authorized only by a later PM decision)

- `src/_includes/components/services.njk` (new)
- `src/index.njk` (one include after `process.njk`, inside `<main>`)
- `src/assets/css/main.css` (one Services block; no selectors of the Header, Menu, Hero, process or Bottom Navigation)
- `src/assets/images/services/*` (transferred by the image task)

Not touched: `src/_includes/base.njk`, `process.njk`, `mobile-nav.njk`, `menu-overlay.njk`, `header.njk`, all JavaScript files, `package.json`, `package-lock.json`, `eleventy.config.js`, `wrangler.jsonc`.

## Open Items After This Record

- Backlog item 49 stays open for `#contacto`, `#cobertura`, `#marcas` and `#agendar-diagnostico`.
- The WhatsApp prefilled message and its automation: to be decided in the Contacto phase.
- Non-critical extraction unknowns (extraction section 15, items 5 and 7 to 11 and the Ionicons license) do not block M04-03.
- Contrast of the white text on `#1a2ad3` and of `#526078` on the tinted background is measured in M04-04.

## Decision Record (continued)

### PD-57 - M04-03 authorized; clarifications of PD-56 (PM APPROVED - 2026-11-24)

The Product Manager authorized OpenCode to implement the Servicios section as specified in `.coordination/tasks/M04-03-SV-01/spec.md` and the contract `contract-r1.md` of the same folder, within the allow-list of PD-56. Executor: OpenCode. Reviewer: Claude Code. The authorization is the matching `.coordination/approvals/M04-03-SV-01/approval.md`, which identifies the contract and its SHA-256. The implementation is one task, not stages (PD-56). The task starts from baseline `0146c687f360ab2cdaa14976b9620e723d008a84` or a descendant whose changes from it are limited to `docs/`.

Clarifications that the reference evidence required while the specification was written (extraction amendment; the committed extraction is not edited, Historical Records Rule):

- **A-1 Icons.** The pill of each card uses two Font Awesome glyphs (`fa-calendar-days` on cards 1 and 2, `fa-calendar-plus` on card 3) in addition to the 13 Ionicons that the extraction lists. D-1 (inline SVG, no font dependency) applies to these three as well, so 16 glyphs are replaced in total. The equivalents are Material Design paths proposed in the specification; the Product Manager validates the visual equivalence in the M04-03 visual validation, and a rejected glyph is replaced in a later round.
- **A-2 Breakpoints.** The reference breakpoints 991 px, 767 px and 478 px are written as 991.98 px, 767.98 px and 478.98 px, the convention of the current `main.css`. Results are identical at integer widths.
- **A-3 H2 size.** The reference root font size is 10px, so its H2 rule renders 21.25 px to 31.25 px; the current stylesheet has no root rule, so the H2 is written in px (`clamp(21.25px, 3.6vw, 31.25px)`). This applies E-2 of PD-56 and preserves the rendering observed in the reference.
- **A-4 Scroll margin.** `scroll-margin-top` of the section copies the two values of the process section (D-4).

**Not authorized by this decision:** M04-04, M04-05, commit, push and deployment. Commit of the implementation is a separate Product Manager act after the review is CONFORME and the visual validation of the five viewports (1920 × 945, 1024 × 1366, 820 × 1180, 844 × 414, 390 × 844) is given.
