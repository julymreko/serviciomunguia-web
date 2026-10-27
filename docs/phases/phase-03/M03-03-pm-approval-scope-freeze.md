# M03-03 — Product Manager Approval & Scope Freeze

## Identification

Phase: 03 — CÓMO TRABAJAMOS
Milestone: M03-03 — Product Manager Approval & Scope Freeze
Status: COMPLETED

Owner: Julián Cely — Product Manager
Executing Agent: Claude Code (Claude Sonnet 5.5), acting only as transcriber of the Product Manager's decisions (see "PM Directive on Roles")
Audit Agent: Not applicable (no formal audit gate at this milestone)

## Objective

Record in the repository, exactly as given, the Product Manager's decisions on the M03-02 decision register, map them to the extraction's UNKNOWN items, and state truthfully what remains before scope can be frozen.

## PM Directive on Roles

`docs/phases/phase-03/M03-00-claude-discovery-planning-requirement.md` section 2 assigns M03-03 to the Product Manager + coordinating ChatGPT. For this milestone the Product Manager explicitly directed Claude Code to act only as transcriber of the PM's decisions.

- Claude Code is not the approver. The approver of every decision in this document is Julián Cely.
- Claude Code did not approve, interpret, extend, correct, reopen, or reword the substance of any decision.
- Source of the decisions: Product Manager statements during a PM review session, 2026-10-10 to 2026-10-11, relayed to Claude Code in a prompt. They are recorded here because that session is the only place they existed (`docs/CONTEXT-PROTOCOL.md`, Conversation Rule).

## State Boundary

- Scope freeze: **PENDING PM CONFIRMATION.** The Product Manager has not given the explicit freeze confirmation. Scope is NOT frozen.
- Implementation: **NOT AUTHORIZED.** No OpenCode instruction and no M03-04 specification exist or are authorized. No `src/` change is authorized, with one PM-approved exception: the transfer of the approved CTA image asset into `src/assets/images/` (see "D-07 Image Transfer Resolution"). The exception covers that single file and nothing else.
- This milestone is not COMPLETED. The reassessed extraction readiness result is recorded in the extraction (section 18, per "O-07 Extraction Evidence Approval"); it is not a scope freeze and not an implementation authorization.

## Decisions (state: PM APPROVED; approver: Julián Cely)

IDs match the decision register in `docs/phases/phase-03/M03-02-review-improvement-proposal.md` section 8.

| ID | Related | Decision as given by the PM |
|---|---|---|
| D-01 | ISS-01, ISS-02, PI-02, U-01 | Type scale: option (c), a new explicit scale in which H2 > steps-group title >= step title and no step title overflows its column. The exact sizes are determined by measurement during the approval phase, not specified now. |
| D-02 | PI-05, U-02 | `#contacto` is the canonical anchor of the Contact section. `#agendar-diagnostico` is the canonical deep-link target of the diagnostic/appointment form that will live inside the future Contact section. The two anchors are intentionally distinct and must not be normalized into one target. No change to the approved Menu (`#contacto`) or Bottom Navigation (`#agendar-diagnostico`). |
| D-03 | ISS-03, PI-05, U-02 | The primary CTA of "Cómo trabajamos" links now to `#agendar-diagnostico`, even though the target does not exist yet. The PM accepts that the link will not lead anywhere until the Contact section exists. |
| D-04 | ISS-06, PI-03 | Option A. The steps-group title stays H3; the five step titles become H4; the trust-strip title and the CTA-card title stay H3. Visual styling must not depend on the tag name. |
| D-05 | ISS-04, ISS-05, PI-06, MOT-07 | Secondary button hover = fill `#25d366` with text `#111a38`. Keyboard focus indicator = outline `#1a2ad3` on the light card and white on the dark card. The implementer must keep a visible separation (offset) where the blue outline meets the blue primary button and verify contrast on both card backgrounds. |
| D-06 | ISS-11, PI-07, U-03 | Step text is rendered as separate paragraphs. |
| D-07 | ISS-09, PI-08, U-07 | Approved to self-host the CTA image with intrinsic width/height. The PM confirms ownership/rights. PM-supplied source file: `F:\0_Proyectos web\serviciomunguia.com\Diseño\Fotos\Originales\servicio-munguia-tecnico-diagnostico-lavadora-cta.webp` (outside the repository; it was not accessed, copied, or committed when D-07 was transcribed; transfer is governed by "D-07 Image Transfer Resolution"). |
| D-08 | MOT-01 to MOT-07, ISS-12 | MOT-01 through MOT-07 are all approved. MOT-02 is the one-shot variant only; the scroll-linked variant is NOT approved. MOT-03 is approved (MEDIUM risk; Mobile Portrait only; its lower-cost alternative was "omit"). The PM accepted the proposed ranges: reveal 350–600ms, 12–24px, stagger 60–100ms; connector 600–900ms; badge 200–300ms; CTA image 500–800ms; button transition about 0.2s. |
| D-09 | M03-02 §5 | Component `src/_includes/components/process.njk`, root class `sm-process`, anchor id `como-trabajamos`. |
| D-10 | UX redundancy | Keep both the steps and the trust strip as in the reference (no merge, no removal, no copy changes). PM note: the PM first chose "merge", then reverted to "keep" after learning that the "approximate duration" trust item has no equivalent in the steps. |
| D-11 | U-09 | No minimum browser baseline and no numeric performance threshold. Use the native IntersectionObserver path (no scroll-driven CSS dependency). Testing reports measured values only, with no invented PASS criterion. |
| D-12 | SEO | No structured data in this section. |
| D-13 | U-08 | The PM confirms the six commercial claims in the copy are accurate: approximate two-hour appointment window with a call before arrival; visit cost informed before scheduling and deducted if the repair is authorized; work starts only with authorization; a second visit may be required if a part is missing; foliated note delivered with the work done and applicable warranty; warranty depends on the part used. |
| D-14 | U-04 | Layout: option (a). Keep the three observed layouts (5 columns, 3+2, vertical). The title overflow must be solved only through the title sizes defined under D-01. If no reasonable title size fits the columns, the implementer must STOP and return to the PM instead of changing the layout. |
| D-15 | PROJECT-STATE | The PROJECT-STATE entry (Phase 3, discovery/planning, implementation not authorized, next item M03-03) is accepted. |

## D-07 Image Transfer Resolution (state: PM APPROVED; approver: Julián Cely; transcribed by Claude Code)

Resolves open item O-03. The PM decision was relayed to Claude Code on 2026-10-11, after the commit that recorded D-01 to D-15.

- Responsible agent: Claude Code.
- Milestone: M03-03.
- Permitted exception: Claude Code may transfer the approved CTA image asset into `src/assets/images/` and nothing else. Source (PM-supplied, outside the repository): `F:\0_Proyectos web\serviciomunguia.com\Diseño\Fotos\Originales\servicio-munguia-tecnico-diagnostico-lavadora-cta.webp`. Target file name: the same as the source file name.
- Before the transfer, verify source identity and integrity by recording: file name, byte size, SHA-256 of the source, pixel dimensions, and format. After the copy, verify that the SHA-256 and byte size of the copy are identical to the source. Compare the dimensions and aspect ratio with the values recorded in `docs/reference-extraction/COMO-TRABAJAMOS-EXTRACTION.md`. On any mismatch: STOP and ask the PM.
- Prohibited: any change to Nunjucks, CSS, JavaScript, or the production section implementation; any other file under `src/`; referencing the image from any template.
- Scope freeze remains PENDING PM CONFIRMATION. Implementation remains NOT AUTHORIZED.
- Transfer status: **PERFORMED** on 2026-10-11, on the PM's instruction, by Claude Code. The destination directory `src/assets/images/` already existed (no directory was created); the destination file did not exist and no `.gitignore` rule ignores it.
- Integrity record:
  - File name (source and copy): `servicio-munguia-tecnico-diagnostico-lavadora-cta.webp`
  - Copy location: `src/assets/images/servicio-munguia-tecnico-diagnostico-lavadora-cta.webp`
  - Byte size: source 134966; copy 134966 (identical)
  - SHA-256: source `DBFDB587317FCDF95457F50299CDF03FF0254162E2525650D0F3E22FA020A60C`; copy `DBFDB587317FCDF95457F50299CDF03FF0254162E2525650D0F3E22FA020A60C` (identical)
  - Format: WebP, VP8X extended (the header flags indicate EXIF and XMP metadata chunks are present)
  - Pixel dimensions: 1600 × 1280 (read from the WebP header with a throwaway script outside the repository; no dependency added)
  - Aspect ratio: 1.25:1 (1600/1280)
  - Comparison with `docs/reference-extraction/COMO-TRABAJAMOS-EXTRACTION.md` §8: the extraction records a 1024 × 819 rendition (≈1.25:1) and a 1600w original in the reference `srcset`, and does not record the original's height. 1600 matches the recorded 1600w width, and 1024 × 819 equals the 1600 × 1280 original scaled to 1024 wide (1280 × 1024 / 1600 = 819.2). No mismatch was found; the extraction was not modified.
  - Image content (as viewed): a technician in a navy cap and polo crouching beside a front-loading washing machine, holding a blue multimeter with a red probe at the machine's lower service panel, with a stainless-steel refrigerator and an open toolbox in the background.
  - The image is not referenced from any template.
  - Metadata: inspected on 2026-10-11 (read-only). The EXIF and XMP chunks contain no GPS location, personal names, e-mail addresses, camera data, author, copyright, or dates. The XMP writer is `Image::ExifTool 12.98` and the XMP title is `image.png`. PM decision: keep the file unmodified.

## O-01 and O-02 Measurement Resolution (state: PM APPROVED; approver: Julián Cely; transcribed by Claude Code)

Resolves open items O-01 and O-02 under D-01 and D-14. Claude Code measured and proposed; the Product Manager reviewed the measurement report and approved Option A, all values in px, and the `.98px` switch-point convention. Relayed 2026-10-11.

### Approved values
- H2: Inter 700, `clamp(21.25px, 3.6vw, 31.25px)`. No change from the reference as computed.
- Steps-group heading: Inter 700, `clamp(15px, 2.4vw, 20px)`. No change.
- Step titles: Inter 700, `font-size: clamp(15px, 2.4vw, 20px)`, `line-height: 1.25`, normal word wrap, `overflow-wrap: normal`, `hyphens: none`.
- Layouts and switch-points: the three D-14 layouts are unchanged. Switch-points remain the observed 991/992 (3+2 below, 5 columns above) and 478/479 (vertical below, 3+2 above), written with the project's existing `.98px` convention so no fractional-width gap remains (for example `max-width: 478.98px` and `max-width: 991.98px`).
- Units: all sizes are in px. The reference uses rem against a 10px root (62.5%); the project root is 16px, so reference rem values must NOT be copied literally (about 1.6x larger).
- No hard minimum size is set. The 15px clamp floor is the approved value, not a PM-mandated threshold.
- Hierarchy: H2 > steps-group heading >= step title holds at every measured width. The step title equals the group heading size from about 833px upward, which D-01 allows.

### Evidence summary (observed)
- Method: dense sweep of 167 widths (320–1920 in 10px steps, plus 478/479, 767/768, 991/992) and the five inspected reference viewports (1920 × 945, 1024 × 1366, 820 × 1180, 844 × 414, 390 × 844), with temporary CSS injected in the reference page only. The project defines no widths for the four viewport classes (Desktop, Tablet, Mobile Landscape, Mobile Portrait); the widths above are measured viewport widths, not project definitions.
- Proposed values: 0 failing rows for overflow, clipping, or fusion; tightest slack 7.5px at 992px with a 15px classic scrollbar (10.9px without); at most 3 lines.
- Observed reference: step titles at 28.8px overflow at 320–370px, 479–780px, and 992–1300px (worst case 94px overflow, up to 5 lines, fused titles); the H2 > group >= step rule failed at all 167 widths.
- Cause of the earlier U-01 mismatch: the reference authors its sizes in rem against a 10px root, so the computed 31.25px and 20px agree with the authored values; the step title has no authored size.
- The reference leaves gaps between `max-width: 478px` / `min-width: 479px` and between 991px / 992px; at fractional widths inside a gap the steps fall into the wrong layout. This explains the inconsistent 478px reading previously flagged as U-05.
- Text-only zoom at 200%: px sizes keep fitting but do not scale; rem sizes would overflow again at 500px, 1024px, and 1920px. Page zoom works for both.
- Fonts: Inter 700 from the project's self-hosted file measured identically to the reference's Google-hosted Inter (13 words compared).
- Evidence screenshots are outside the repository and are not committed.

## O-06 Decisions Resolution (state: PM APPROVED; approver: Julián Cely; transcribed by Claude Code)

Resolves open item O-06. The Product Manager explicitly approved the seven decisions below. Relayed 2026-10-11. They are recorded under their own proposal identifiers; D-01 to D-15 are not renumbered.

| Item | Decision as given by the PM |
|---|---|
| PI-01 (ISS-07) | APPROVED. Use `ol > li` for the five process steps, preserving visuals and preventing duplicate numbering announcements to assistive technology. |
| PI-04 (ISS-08) | APPROVED. Add `aria-labelledby` to the section, referencing its H2 heading ID. |
| PI-05(c) (ISS-10) | APPROVED. Open the WhatsApp link in a new tab using `target="_blank"` and `rel="noopener noreferrer"`, with an accessible indication of the new-tab behavior. |
| PI-08 (ISS-09) | APPROVED IN FULL. Use responsive `srcset`, native `loading="lazy"`, `decoding="async"`, the documented descriptive alt text, and an image that works without JavaScript. Preserve D-07. |
| PI-09 | APPROVED. Use responsive `scroll-margin-top` based on measured fixed-Header geometry, verified across all four project viewport classes. |
| PI-10 (ISS-12) | APPROVED. Under `prefers-reduced-motion: reduce`, remove CTA hover translation and animated transitions. Preserve instantaneous color-state changes. |
| MOT-03 reduced-motion treatment | APPROVED. Maintain static, instantaneous emphasis of the active step in Mobile Portrait, without scale animation or transitions. Retain active-step detection; do not add ARIA current-state semantics. |

### Factual notes (not PM decisions)
- PI-05(c): the mechanism of the "accessible indication" of new-tab behavior is NOT defined by the PM or by M03-02. It remains to be specified in the M03-04 specification. The implementer must not choose it independently.
- PI-01: the treatment of the visual number badge for assistive technology (hidden from AT or visual-only) follows M03-02 PI-01 and the approved goal of preventing duplicate numbering announcements. No other badge treatment is recorded.
- PI-09: the repository does not define widths for the four viewport classes (Desktop, Tablet, Mobile Landscape, Mobile Portrait); see the "O-01 and O-02 Measurement Resolution" evidence note and the handoff proposal P-08. The wording "four viewport classes" must not be read as a definition of widths. The Header geometry (U-10) remains to be measured at implementation or testing.

## O-04 Section Order Resolution (state: PM APPROVED; approver: Julián Cely; transcribed by Claude Code)

Resolves open item O-04. The Product Manager explicitly approved Option A as the final OnePage section order. Relayed 2026-10-11.

### Approved physical OnePage section order
1. Hero
2. Cómo trabajamos
3. Servicios
4. Marcas
5. Zonas de cobertura
6. Testimonios
7. Contacto
8. Footer

Legal pages remain separate pages linked from the Footer.

This is the physical order of the sections on the OnePage. It is distinct from the navigation-menu order. This decision does NOT change the approved Menu, the Bottom Navigation, or any anchor.

### Factual notes (not PM decisions)
For later review under handoff proposal P-04 (the handoff is not edited in this task).
- The approved Menu order (¿Cómo trabajamos?, Servicios, Cobertura, Marcas, Contacto) differs from the approved physical order (Marcas before Zonas de cobertura), and Testimonios is not in the Menu. No change to the Menu is authorized.
- `docs/ARCHITECTURE.md` lines 106–116 list the sections as a set in a different order (Process after Brands; Coverage before Brands). It is not modified here.
- #cobertura is the PM-approved canonical Coverage anchor (Phase 02, F-10). The approved Menu links to #marcas, which is not listed among the ARCHITECTURE.md approved targets. No anchor for Testimonios is defined in the repository and none may be invented.
- The handoff still shows O-04 as unresolved (line 80) and P-04 still says no order can be proposed; both are to be synchronized in the later wording-cleanup commit.

## O-07 Extraction Evidence Approval (state: PM APPROVED; approver: Julián Cely; transcribed by Claude Code)

Resolves open item O-07. The Product Manager explicitly approved O-07 Option A. Relayed 2026-10-11.

- Approve the original extraction as evidence of the observed staging reference.
- Authorize documentation of PM-approved deviations.
- Preserve the original observations without rewriting history.
- Reevaluate extraction UNKNOWN items using verified PM decisions.
- Reevaluate reconstruction readiness without inventing requirements.

Approving the extraction as evidence corresponds to the acceptance step attributed to M03-01 ("Julián Cely approves the extraction evidence"). No milestone Status line (M03-00, M03-01, M03-02) is changed by this record.

Applied in `docs/reference-extraction/COMO-TRABAJAMOS-EXTRACTION.md`: section 16 now lists the PM-approved deviations with references to this document; annotations (original text preserved) were added to sections 6, 9, 15, and 17; section 18 carries a reassessment under the readiness criterion defined by the documentation. The reassessed readiness result is recorded there. That result is not a scope freeze and not an implementation authorization.

## Approval Coverage of ISS / PI / MOT Items

Factual mapping of proposals to recorded PM decisions. Later M03-03 resolution sections document subsequent approvals and take precedence over the earlier approval-coverage snapshot.

| Item | Recorded PM decision |
|---|---|
| ISS-01, ISS-02 / PI-02 | D-01 (scale intent; sizes pending), D-14 |
| ISS-03 | D-03 (with D-02) |
| ISS-04, ISS-05 / PI-06 | D-05 |
| ISS-06 / PI-03 | D-04 |
| ISS-07 / PI-01 (ordered-list semantics) | "O-06 Decisions Resolution" (PI-01 approved) |
| ISS-08 / PI-04 (section accessible name) | "O-06 Decisions Resolution" (PI-04 approved) |
| ISS-09 / PI-08 | D-07 covers self-hosting and intrinsic width/height. `srcset`, native lazy loading, `decoding="async"`, the descriptive alt, and a no-JavaScript image: "O-06 Decisions Resolution" (PI-08 approved in full) |
| ISS-10 / PI-05(c) (`rel`, new-tab behavior of the WhatsApp link) | "O-06 Decisions Resolution" (PI-05(c) approved) |
| ISS-11 / PI-07 | D-06 |
| ISS-12 / PI-10 | "O-06 Decisions Resolution" (PI-10 approved). MOT-07 is approved under D-08 |
| PI-09 (anchor offset under the fixed Header) | "O-06 Decisions Resolution" (PI-09 approved) |
| MOT-01, MOT-02 (one-shot), MOT-04, MOT-05, MOT-06, MOT-07 | D-08 |
| MOT-03 | D-08 (approved). The reduced-motion treatment listed in M03-02 as "static non-animated style change or omitted (PM choice)": "O-06 Decisions Resolution" |
| MOT-02 scroll-linked variant | Not approved (D-08) |

## Extraction UNKNOWN Mapping (EXT §15)

Only what is clearly resolved by a recorded decision is mapped. The extraction's original rows are preserved; a resolution-status annotation table using this same mapping was added to its section 15 under O-07.

| UNKNOWN | Mapping |
|---|---|
| U-01 type scale | Resolved by D-01 (new explicit scale, option c) and the approved sizes in "O-01 and O-02 Measurement Resolution" (open item O-02). The measurement also established the cause of the authored-versus-computed difference (rem against a 10px root) |
| U-02 primary CTA destination | Resolved by D-02 and D-03 |
| U-03 step-text paragraphs | Resolved by D-06 |
| U-04 layout where titles overflow | Layout intent resolved by D-14 (keep three layouts; solve only via D-01 sizes; STOP if no reasonable size fits). Switch-points resolved in "O-01 and O-02 Measurement Resolution" (open item O-01); the measurement shows 0 failing rows with the approved title sizes, so no title collision remains and no STOP condition applies |
| U-05 overflow at Mobile Landscape 844 and at 478/479 | Established for the reference by the measurement in "O-01 and O-02 Measurement Resolution": 844 × 414 shows no overflow at 28.8px, and the inconsistent 478px reading is explained by the fractional-width gap between 478/479. Fit of the implementation is verified at testing |
| U-06 focus ring on the light mobile card | Remains UNKNOWN — to be measured at implementation or testing; D-05 requires the implementer to verify contrast on both card backgrounds |
| U-07 CTA image self-hosting | Approval and rights resolved by D-07. Responsibility, milestone, and conditions for the transfer resolved by the "D-07 Image Transfer Resolution" (open item O-03). The transfer was PERFORMED on 2026-10-11 (integrity record in the "D-07 Image Transfer Resolution"); the extraction's original row is preserved and carries the resolution annotation under O-07 |
| U-08 commercial claims | Resolved by D-13 |
| U-09 browser baseline | Resolved by D-11 |
| U-10 Header offset on anchor navigation | Remains UNKNOWN until measured at implementation or testing (PI-09 is approved in "O-06 Decisions Resolution"; the Header geometry itself is not yet measured) |

## Documentation Proposal Decision Register — P-01 to P-09

Approval authority: Julián Cely, Product Manager. Decisions approved by the Product Manager on 2026-10-11. This register is a proposed documentation update pending review and publication; scope freeze remains pending.

| Proposal | PM decision | Approved scope |
|---|---|---|
| P-01 | PM APPROVED — Option A | General PM-directed transcription rule in CONTEXT-PROTOCOL; cross-reference in M03-00 requirement. |
| P-02 | PM APPROVED — Option A | Historical supersession note in Phase 02 handoff; preserve original transition. |
| P-03 | PM APPROVED — Option A | M03-00 requirement canonical Identification Status IN PROGRESS. |
| P-04 | PM APPROVED — Option A | Approved O-04 physical OnePage order in ARCHITECTURE, without navigation or anchor changes. |
| P-05 | PM APPROVED — Option A | Reference extraction and PM decision recording conventions. |
| P-06 | PM APPROVED — Option B | Individual milestone Status canonical if its specification exists; otherwise phase specification authoritative. |
| P-07 | PM APPROVED — Option A | Fix stale ARCHITECTURE undefined statements and approve npm run build. |
| P-08 | PM APPROVED — Option A, principle only | Centralize reference testing viewports separately from CSS breakpoints. Numeric values remain UNAPPROVED. |
| P-09 | PM REJECTED — Option B | Preserve existing UTF-8 BOMs; no BOM normalization. |

No milestone completion or implementation authorization follows from these decisions.

## Open Item Register

- **O-01 Layout switch-points — RESOLVED.** See "O-01 and O-02 Measurement Resolution".
- **O-02 D-01 sizes — RESOLVED.** See "O-01 and O-02 Measurement Resolution".
- **O-03 D-07 image transfer — transfer PERFORMED on 2026-10-11.** The source file lives outside the repository. The PM decision on who transfers it, in which milestone, and under which conditions is recorded in "D-07 Image Transfer Resolution" above, which also holds the integrity record of the performed transfer.
- **O-04 Section order discrepancy — RESOLVED.** The approved order is recorded in "O-04 Section Order Resolution". The original four-source discrepancy is retained below as evidence:
  - PM statement: Cómo trabajamos, Servicios, Marcas, Zonas de cobertura, Contacto, legal pages, Footer.
  - `docs/ARCHITECTURE.md` confirmed major sections: Header, Hero, Services, Coverage, Brands, Process, Testimonials, Contact, Footer.
  - Approved Menu (`src/_includes/components/menu-overlay.njk`) order: ¿Cómo trabajamos?, Servicios, Cobertura, Marcas, Contacto.
  - Reference page section order observed in the extraction work: Hero, Cómo trabajamos, Servicios, Cobertura.
- **O-05 Later page-wide structured-data and AI-search-visibility milestone** (PM proposal; does NOT change D-12; no milestone is created or scheduled by this document).
  - Context stated by the PM: the business is a service-area business that serves clients at their address only and has no public address. Whether Google's LocalBusiness `address` requirement applies, and the correct treatment, is UNKNOWN and must be verified before any implementation.
  - Candidate markup per section (all must match visible text): business info and phone on Hero/Contact; Service entries in Services; `areaServed` in Coverage; no markup in Brands or Process; no self-review or `aggregateRating` markup for the business's own testimonials; consistent business data in legal pages and Footer.
  - Actions outside the repository: Google Business Profile as a service-area business; Search Console and sitemap; check that Cloudflare and `robots.txt` do not block crawlers.
  - PM-cited reference: Google states that no special markup or AI-specific files are needed for AI Overviews or AI Mode (https://developers.google.com/search/docs/appearance/ai-features). Not verified by Claude Code in this task.
- **O-06 PM decisions — RESOLVED.** All seven items (PI-01, PI-04, PI-05(c), the PI-08 details, PI-09, PI-10, the MOT-03 reduced-motion treatment) are decided in "O-06 Decisions Resolution". The factual notes recorded there remain (the new-tab accessible-indication mechanism is to be specified in the M03-04 specification; the Header geometry is to be measured).
- **O-07 Extraction approval and readiness — RESOLVED.** See "O-07 Extraction Evidence Approval".
- **O-08 OpenCode inputs — PM APPROVED for planning only (2026-10-11).** The PM approved the planning file allow-list below. This approval does not authorize creating M03-04, changing production source files, or beginning OpenCode implementation. The M03-04 specification does not yet exist.

### O-08 PM Decision — Planning File Allow-list (2026-10-11)

Approver: Julián Cely, Product Manager. Decision: APPROVED for documentation/planning only.

| File | Planning permission | Boundary |
|---|---|---|
| `src/_includes/components/process.njk` | Proposed creation approved | Process section component; D-09 naming and frozen scope |
| `src/assets/css/main.css` | Proposed limited modification approved | New `sm-process` styles only |
| `src/index.njk` | Proposed limited modification approved | Include process section in approved OnePage physical order |
| `src/assets/images/servicio-munguia-tecnico-diagnostico-lavadora-cta.webp` | Read-only use approved | Existing transferred CTA image; no transfer or modification |
| `src/assets/js/process.js` | CONDITIONAL | Proposed filename only; justify whether JavaScript is necessary and avoid duplication with existing architecture |
| `src/_includes/base.njk` | CONDITIONAL | One script include only if justified by the approved JavaScript approach |

Prohibited: unauthorized edits to Header, Hero, Menu, Mobile Navigation, unrelated styles/scripts, dependencies, architecture or governance; do not modify issued audits or original extraction observations.

The implementation specification must explicitly resolve whether conditional JavaScript files are necessary, document the accessible indication for WhatsApp opening in a new tab, and require measurement of the fixed Header geometry for anchor offset. Any technical choice beyond the frozen PM decisions must remain within that scope or be returned to the PM for approval.

**Authorization boundary:** M03-03 remains IN PROGRESS; scope freeze already APPROVED. M03-04 specification creation, OpenCode instruction, and implementation remain NOT AUTHORIZED.

### O-08 — Subsequent PM Planning Approvals (2026-10-11)

The Product Manager approved these refinements for future M03-04 planning only. They do not authorize M03-04 publication or implementation:

- PI-05(c): visibly rendered text that states the WhatsApp link opens in a new tab, also accessible to assistive technologies. Existing link-target and rel requirements remain unchanged.

  ANNOTATION — D8 (2026-10-13): the visibly-rendered-text mechanism was superseded during M03-04 implementation by the PM-approved `aria-label` disclosure (see `docs/phases/phase-03/M03-04-opencode-implementation.md`, "Implementation PM Decision and Evidence Record — D8"). Existing link-target, `rel`, and accessibility requirements are unchanged. The original text above is preserved as historical evidence.
- PI-08: retain the original 1600 × 1280 WebP without modification. Extend the future planning file allow-list with exactly three derived WebP files: `src/assets/images/servicio-munguia-tecnico-diagnostico-lavadora-cta-480.webp` (480 × 384), `src/assets/images/servicio-munguia-tecnico-diagnostico-lavadora-cta-800.webp` (800 × 640), and `src/assets/images/servicio-munguia-tecnico-diagnostico-lavadora-cta-1200.webp` (1200 × 960). Preserve the original composition and 5:4 ratio.
- Proposal A: for planning, approve `src/assets/js/process.js` as an independent native ES module and a single `type="module"` script reference in `src/_includes/base.njk`. The previously conditional JavaScript paths are justified and approved for planning. The ten technical refinements from Claude Code's read-only review are approved: CSS owns animations; JS toggles state; only activate hidden reveal styling after successful enhancement; no-JS/failed-IO content stays visible; reduced motion retains instantaneous MOT-03 detection; portrait observer connects/disconnects on media changes and measures bottom-nav occlusion; one-shot observers clean up without scroll or animation-frame loops; MOT-06 waits for image load; local helpers with no Hero JS modification; section existence guard; test deep-link/reload flashes.

These decisions extend the planning scope, not the frozen visual/product behavior. M03-03 remains IN PROGRESS, M03-04 remains NOT AUTHORIZED, and implementation has NOT STARTED.

## Implementer STOP Rule Recorded from D-14

If no reasonable step-title size fits the columns under the D-01 scale, the implementer must STOP and return to the Product Manager instead of changing the layout.

## Scope Freeze — PM Approval Recorded

The Product Manager explicitly APPROVED the scope freeze for the Cómo trabajamos section on 2026-10-11. This approval freezes the recorded M03-03 reconstruction decisions and deviations. It does NOT close M03-03, authorize M03-04, authorize OpenCode, or permit production source modifications. The remaining milestones and publication criteria below still apply. Per `docs/phases/PHASE-03-como-trabajamos.md` (M03-03 acceptance criteria) and section 13 of the requirement document, the following remain:

1. Explicit PM confirmation of scope freeze: APPROVED on 2026-10-11; recording/publication and subsequent milestone criteria remain separate.
2. Reconstruction-critical UNKNOWN items: resolved; the reassessed readiness result is recorded in the extraction's section 18 (see "O-07 Extraction Evidence Approval").
3. PM approval of the extraction evidence and PM-approved deviations recorded in the extraction: done (O-07 RESOLVED; see "O-07 Extraction Evidence Approval").
4. Every PI-xx and MOT-xx recorded by the PM as approved, rejected, or deferred: recorded for PI-01 to PI-10 and MOT-01 to MOT-07 (see the "Approval Coverage of ISS / PI / MOT Items" table; O-06 RESOLVED in "O-06 Decisions Resolution").
5. Section-order discrepancy (O-04): resolved by the PM (physical OnePage order recorded in "O-04 Section Order Resolution"). The Menu, the Bottom Navigation, and all anchors are unchanged by that decision.
6. The M03-04 specification and the confirmed file allow-list (O-08), created only after freeze.
7. Publication: committed and pushed; HEAD = origin/main; working tree clean.

## Acceptance Criteria (this milestone)

Unchanged from `docs/phases/PHASE-03-como-trabajamos.md`:
- Every reconstruction-critical UNKNOWN is OBSERVED, PM APPROVED, or NOT APPLICABLE; extraction result is READY FOR RECONSTRUCTION.
- Every proposal is recorded as approved, rejected, or deferred by the PM.
- Scope is frozen in the repository; the OpenCode milestone specification exists.
- HEAD = origin/main; working tree clean.

## Execution Record

### Started
2026-10-11 (transcription of decisions given 2026-10-10 to 2026-10-11)

### Completed
2026-10-11 — proposed formal closure subject to PM authorization and publication of this closure record. M03-04 specification was published in commit 368afd7; O-08 planning decisions are recorded. Final synchronized working-tree confirmation is required at publication.

### Git Commit
See Git history (`docs: record Phase 03 PM decisions (M03-03)`).

## Findings
None recorded. Documentation proposals P-01 through P-09 were resolved by the PM and their approved documentation changes were published in commit `9de3d66` (P-09 requires no file modification). The historical proposal inventory remains in `docs/handoffs/PHASE-03-M03-HANDOFF.md`.

## Bugs
None recorded.

## Pending Items

O-01, O-02, O-03, O-04, O-06, and O-07 are resolved. The PM expressly approved scope freeze on 2026-10-11. O-08 planning allow-list and the M03-04 specification were subsequently approved and published, with the latest planning decision recorded in this file. Publication of this milestone closure does NOT authorize OpenCode or M03-04 execution. O-05 is a separate, non-blocking future proposal. See "Scope Freeze — Remaining Before Freeze".

## Decisions Required
No outstanding scope-freeze decision blocks the proposed M03-03 closure. O-05 remains a separate non-blocking future proposal. M03-04 execution requires separate explicit PM authorization.

## Handoff
`docs/handoffs/PHASE-03-M03-HANDOFF.md` (for the coordinating ChatGPT).

## Amendments by later PM decisions

The original D-08 and D-11 rows and the O-06 text above are historical and unedited. Later PM decisions of 2026-10-13, recorded in `docs/phases/phase-03/M03-04-opencode-implementation.md` under "Priority B — PM Decision Record (2026-10-13)", amend them for Priority B only: **PD-1** supersedes the D-08 restriction on the MOT-02 scroll-linked variant, and **PD-2** relaxes the D-11 IntersectionObserver-only path. **PD-3** extends the "Mobile Portrait only" scope of MOT-03 in D-08 and in the O-06 MOT-03 row to all layouts (see also PD-16 to PD-29 in the same record). Priority B implementation remains NOT AUTHORIZED.
