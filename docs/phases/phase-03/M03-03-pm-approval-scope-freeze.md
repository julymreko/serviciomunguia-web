# M03-03 — Product Manager Approval & Scope Freeze

## Identification

Phase: 03 — CÓMO TRABAJAMOS
Milestone: M03-03 — Product Manager Approval & Scope Freeze
Status: IN PROGRESS

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
- This milestone is not COMPLETED. The extraction readiness result remains as recorded in the extraction (NOT READY FOR RECONSTRUCTION); this document does not re-evaluate it.

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

## Approval Coverage of ISS / PI / MOT Items

Factual mapping of what the PM decisions above address. "No PM decision recorded" is not a rejection; it means the item is still open for the PM.

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

Only what is clearly resolved by a recorded decision is mapped. The extraction document itself is unchanged.

| UNKNOWN | Mapping |
|---|---|
| U-01 type scale | Resolved by D-01 (new explicit scale, option c) and the approved sizes in "O-01 and O-02 Measurement Resolution" (open item O-02). The measurement also established the cause of the authored-versus-computed difference (rem against a 10px root) |
| U-02 primary CTA destination | Resolved by D-02 and D-03 |
| U-03 step-text paragraphs | Resolved by D-06 |
| U-04 layout where titles overflow | Layout intent resolved by D-14 (keep three layouts; solve only via D-01 sizes; STOP if no reasonable size fits). Switch-points resolved in "O-01 and O-02 Measurement Resolution" (open item O-01); the measurement shows 0 failing rows with the approved title sizes, so no title collision remains and no STOP condition applies |
| U-05 overflow at Mobile Landscape 844 and at 478/479 | Established for the reference by the measurement in "O-01 and O-02 Measurement Resolution": 844 × 414 shows no overflow at 28.8px, and the inconsistent 478px reading is explained by the fractional-width gap between 478/479. Fit of the implementation is verified at testing |
| U-06 focus ring on the light mobile card | Remains UNKNOWN — to be measured at implementation or testing; D-05 requires the implementer to verify contrast on both card backgrounds |
| U-07 CTA image self-hosting | Approval and rights resolved by D-07. Responsibility, milestone, and conditions for the transfer resolved by the "D-07 Image Transfer Resolution" (open item O-03). The transfer was PERFORMED on 2026-10-11 (integrity record in the "D-07 Image Transfer Resolution"); the extraction, which was not modified, still records U-07 as UNKNOWN |
| U-08 commercial claims | Resolved by D-13 |
| U-09 browser baseline | Resolved by D-11 |
| U-10 Header offset on anchor navigation | Remains UNKNOWN until measured at implementation or testing (PI-09 is approved in "O-06 Decisions Resolution"; the Header geometry itself is not yet measured) |

## Open Items (not resolved by this document)

- **O-01 Layout switch-points — RESOLVED.** See "O-01 and O-02 Measurement Resolution".
- **O-02 D-01 sizes — RESOLVED.** See "O-01 and O-02 Measurement Resolution".
- **O-03 D-07 image transfer — transfer PERFORMED on 2026-10-11.** The source file lives outside the repository. The PM decision on who transfers it, in which milestone, and under which conditions is recorded in "D-07 Image Transfer Resolution" above, which also holds the integrity record of the performed transfer.
- **O-04 Section order discrepancy (recorded, not resolved).**
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
- **O-07 Extraction approval and readiness.** No PM approval of the extraction evidence (M03-01 acceptance) and no re-evaluation of reconstruction readiness are recorded. The extraction has not been updated with PM APPROVED deviations (not performed in this task).
- **O-08 OpenCode inputs.** The M03-04 specification does not exist and the OpenCode file allow-list is not confirmed.

## Implementer STOP Rule Recorded from D-14

If no reasonable step-title size fits the columns under the D-01 scale, the implementer must STOP and return to the Product Manager instead of changing the layout.

## Scope Freeze — Remaining Before Freeze

Scope freeze requires the Product Manager's explicit confirmation, which has not been given. Per `docs/phases/PHASE-03-como-trabajamos.md` (M03-03 acceptance criteria) and section 13 of the requirement document, the following remain:

1. Explicit PM confirmation of scope freeze.
2. Reconstruction-critical UNKNOWN items resolved so the extraction result can be READY FOR RECONSTRUCTION: at minimum the image transfer (O-03: transfer performed; see "D-07 Image Transfer Resolution"), unless the PM decides otherwise.
3. PM approval of the extraction evidence, and PM-approved deviations recorded in the extraction (O-07).
4. Every PI-xx and MOT-xx recorded by the PM as approved, rejected, or deferred: recorded for PI-01 to PI-10 and MOT-01 to MOT-07 (see the "Approval Coverage of ISS / PI / MOT Items" table; O-06 RESOLVED in "O-06 Decisions Resolution").
5. Resolution of the section-order discrepancy where it affects the implementation scope (O-04), as decided by the PM.
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
UNDEFINED — scope freeze pending PM confirmation.

### Git Commit
See Git history (`docs: record Phase 03 PM decisions (M03-03)`).

## Findings
None recorded. Proposed documentation changes are listed in `docs/handoffs/PHASE-03-M03-HANDOFF.md` and are not applied.

## Bugs
None recorded.

## Pending Items
O-01 to O-08 and the "Scope Freeze — Remaining Before Freeze" list.

## Decisions Required
The PM decisions needed to close the open items above. If a required decision is undefined, execution must stop and request clarification from Julián Cely.

## Handoff
`docs/handoffs/PHASE-03-M03-HANDOFF.md` (for the coordinating ChatGPT).
