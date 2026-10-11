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
- Implementation: **NOT AUTHORIZED.** No `src/` change, no OpenCode instruction, and no M03-04 specification exist or are authorized.
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
| D-07 | ISS-09, PI-08, U-07 | Approved to self-host the CTA image with intrinsic width/height. The PM confirms ownership/rights. PM-supplied source file: `F:\0_Proyectos web\serviciomunguia.com\Diseño\Fotos\Originales\servicio-munguia-tecnico-diagnostico-lavadora-cta.webp` (outside the repository; not accessed, copied, or committed by this task). |
| D-08 | MOT-01 to MOT-07, ISS-12 | MOT-01 through MOT-07 are all approved. MOT-02 is the one-shot variant only; the scroll-linked variant is NOT approved. MOT-03 is approved (MEDIUM risk; Mobile Portrait only; its lower-cost alternative was "omit"). The PM accepted the proposed ranges: reveal 350–600ms, 12–24px, stagger 60–100ms; connector 600–900ms; badge 200–300ms; CTA image 500–800ms; button transition about 0.2s. |
| D-09 | M03-02 §5 | Component `src/_includes/components/process.njk`, root class `sm-process`, anchor id `como-trabajamos`. |
| D-10 | UX redundancy | Keep both the steps and the trust strip as in the reference (no merge, no removal, no copy changes). PM note: the PM first chose "merge", then reverted to "keep" after learning that the "approximate duration" trust item has no equivalent in the steps. |
| D-11 | U-09 | No minimum browser baseline and no numeric performance threshold. Use the native IntersectionObserver path (no scroll-driven CSS dependency). Testing reports measured values only, with no invented PASS criterion. |
| D-12 | SEO | No structured data in this section. |
| D-13 | U-08 | The PM confirms the six commercial claims in the copy are accurate: approximate two-hour appointment window with a call before arrival; visit cost informed before scheduling and deducted if the repair is authorized; work starts only with authorization; a second visit may be required if a part is missing; foliated note delivered with the work done and applicable warranty; warranty depends on the part used. |
| D-14 | U-04 | Layout: option (a). Keep the three observed layouts (5 columns, 3+2, vertical). The title overflow must be solved only through the title sizes defined under D-01. If no reasonable title size fits the columns, the implementer must STOP and return to the PM instead of changing the layout. |
| D-15 | PROJECT-STATE | The PROJECT-STATE entry (Phase 3, discovery/planning, implementation not authorized, next item M03-03) is accepted. |

## Approval Coverage of ISS / PI / MOT Items

Factual mapping of what the PM decisions above address. "No PM decision recorded" is not a rejection; it means the item is still open for the PM.

| Item | Recorded PM decision |
|---|---|
| ISS-01, ISS-02 / PI-02 | D-01 (scale intent; sizes pending), D-14 |
| ISS-03 | D-03 (with D-02) |
| ISS-04, ISS-05 / PI-06 | D-05 |
| ISS-06 / PI-03 | D-04 |
| ISS-07 / PI-01 (ordered-list semantics) | No PM decision recorded |
| ISS-08 / PI-04 (section accessible name) | No PM decision recorded |
| ISS-09 / PI-08 | D-07 covers self-hosting and intrinsic width/height. M03-02 PI-08 also lists `srcset`, native lazy loading, `decoding="async"`, and retaining the descriptive alt: no PM decision recorded on these |
| ISS-10 / PI-05(c) (`rel`, new-tab behavior of the WhatsApp link) | No PM decision recorded |
| ISS-11 / PI-07 | D-06 |
| ISS-12 / PI-10 | No explicit PM decision on PI-10. MOT-07 is approved under D-08 |
| PI-09 (anchor offset under the fixed Header) | No PM decision recorded |
| MOT-01, MOT-02 (one-shot), MOT-04, MOT-05, MOT-06, MOT-07 | D-08 |
| MOT-03 | D-08 (approved). The reduced-motion treatment listed in M03-02 as "static non-animated style change or omitted (PM choice)": no PM decision recorded |
| MOT-02 scroll-linked variant | Not approved (D-08) |

## Extraction UNKNOWN Mapping (EXT §15)

Only what is clearly resolved by a recorded decision is mapped. The extraction document itself is unchanged.

| UNKNOWN | Mapping |
|---|---|
| U-01 type scale | Intent resolved by D-01 (new explicit scale, option c). Numeric sizes remain UNDEFINED (open item O-02) |
| U-02 primary CTA destination | Resolved by D-02 and D-03 |
| U-03 step-text paragraphs | Resolved by D-06 |
| U-04 layout where titles overflow | Layout intent resolved by D-14 (keep three layouts; solve only via D-01 sizes; STOP if no reasonable size fits). Layout switch-point values remain UNDEFINED (open item O-01) |
| U-05 overflow at Mobile Landscape 844 and at 478/479 | Remains UNKNOWN — to be measured at implementation or testing (as stated in EXT §15) |
| U-06 focus ring on the light mobile card | Remains UNKNOWN — to be measured at implementation or testing; D-05 requires the implementer to verify contrast on both card backgrounds |
| U-07 CTA image self-hosting | Approval and rights resolved by D-07. Transfer of the file into the repository remains UNDEFINED (open item O-03) |
| U-08 commercial claims | Resolved by D-13 |
| U-09 browser baseline | Resolved by D-11 |
| U-10 Header offset on anchor navigation | Remains UNKNOWN — to be measured at implementation (PI-09: no PM decision recorded) |

## Open Items (not resolved by this document)

- **O-01 Layout switch-points.** The reference breakpoints (991/992, 767, 478/479) are not project-approved values. Where the three layouts (5 columns, 3+2, vertical) switch remains UNDEFINED until the PM decides.
- **O-02 D-01 sizes.** The exact H2, steps-group title, and step-title sizes are UNDEFINED. The PM stated they are determined by measurement "during the approval phase"; who measures and when is not stated.
- **O-03 D-07 image transfer.** The source file lives outside the repository. Who copies it into `src/assets/images/`, and in which milestone, is UNDEFINED.
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
- **O-06 PM decisions not recorded** for the items listed as "No PM decision recorded" in the coverage table (PI-01, PI-04, PI-05(c), the PI-08 details, PI-09, PI-10, the MOT-03 reduced-motion treatment).
- **O-07 Extraction approval and readiness.** No PM approval of the extraction evidence (M03-01 acceptance) and no re-evaluation of reconstruction readiness are recorded. The extraction has not been updated with PM APPROVED deviations (not performed in this task).
- **O-08 OpenCode inputs.** The M03-04 specification does not exist and the OpenCode file allow-list is not confirmed.

## Implementer STOP Rule Recorded from D-14

If no reasonable step-title size fits the columns under the D-01 scale, the implementer must STOP and return to the Product Manager instead of changing the layout.

## Scope Freeze — Remaining Before Freeze

Scope freeze requires the Product Manager's explicit confirmation, which has not been given. Per `docs/phases/PHASE-03-como-trabajamos.md` (M03-03 acceptance criteria) and section 13 of the requirement document, the following remain:

1. Explicit PM confirmation of scope freeze.
2. Reconstruction-critical UNKNOWN items resolved so the extraction result can be READY FOR RECONSTRUCTION: at minimum the D-01 sizes (O-02), the layout switch-points (O-01), and the image transfer (O-03), unless the PM decides otherwise.
3. PM approval of the extraction evidence, and PM-approved deviations recorded in the extraction (O-07).
4. Every PI-xx and MOT-xx recorded by the PM as approved, rejected, or deferred (O-06).
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
