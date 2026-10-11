# PHASE 03 — Claude Code Discovery & Planning Requirement

## Identification

Status: IN PROGRESS  
Project: SERVICIOMUNGUIA.COM  
Repository: `julymreko/serviciomunguia-web`  
Product Manager: Julián Cely  
Target section: **CÓMO TRABAJAMOS**  
Reference source: `https://staging.serviciomunguia.com/inicio-bricks/`

This document defines the initial Claude Code assignment for Phase 03 discovery, reference extraction, review, proposal, and planning.

Claude Code is **not** the implementation agent for this stage.

The Git repository is the authoritative project memory.

---

## 1. Mission

Claude Code must inspect the existing **CÓMO TRABAJAMOS** section in the legacy/reference staging site and prepare a complete, evidence-based proposal for Phase 03.

The assignment includes:

1. Reference extraction.
2. Identification of objective issues or defects.
3. UX improvement proposals.
4. Accessibility review.
5. Responsive review.
6. OnePage SEO review.
7. Motion / animation / interaction proposals.
8. Performance-risk assessment for proposed motion.
9. Architecture-fit review.
10. Phase 03 milestone planning.
11. Creation or update of the documentation artifacts required for Product Manager review.

Claude Code must **not implement the production section** during this assignment.

Implementation will be performed later by **OpenCode**, after explicit Product Manager approval and scope freeze.

---

## 2. Agent Responsibilities for Phase 03

The intended responsibility chain is:

**Claude Code → Product Manager + coordinating ChatGPT → OpenCode → Claude Code → coordinating ChatGPT**

### Claude Code — Discovery & Planning

Responsible for:

- reference inspection;
- extraction;
- evidence collection;
- issue detection;
- improvement proposals;
- SEO review;
- accessibility review;
- motion/interaction proposals;
- performance-risk analysis;
- phase planning;
- repository documentation for review.

Claude Code must not convert its own recommendations into approved product requirements.

### Product Manager + coordinating ChatGPT — Approval Gate

Responsible for:

- reviewing the extraction;
- resolving UNKNOWN items;
- approving or rejecting issues/remediation proposals;
- approving or rejecting motion proposals;
- approving SEO decisions;
- approving milestone scope;
- freezing implementation scope.

### OpenCode — Implementation

Responsible for:

- implementing only approved repository specifications;
- following the approved architecture;
- preserving scope;
- running implementation-level tests;
- publishing its implementation and evidence to Git.

OpenCode must not reinterpret staging once scope has been frozen.

### Claude Code — Independent Testing & Formal Audit

Responsible for:

- independently testing OpenCode's implementation;
- verifying the exact implementation commit;
- auditing against approved extraction, PM decisions, milestone specifications, architecture, testing protocol, and audit protocol;
- producing PASS or FAIL with evidence.

Claude Code must not silently repair OpenCode's implementation during the formal audit.

### Coordinating ChatGPT — Closure

Responsible for:

- recording immutable audit results when required;
- synchronizing final documentation;
- closing findings;
- synchronizing phase state;
- preparing the next phase entry point for Product Manager approval.

---

### PM-directed transcription

The Product Manager may designate an agent to transcribe approved decisions. This does not transfer approval authority. The transcriber must follow `docs/CONTEXT-PROTOCOL.md` and record the PM direction in the milestone artifact.

## 3. Mandatory Repository Context

Before performing any project work, Claude Code must read the authoritative documentation in this order.

### Governance

1. `docs/00-START-HERE.md`
2. `docs/PROJECT-STATE.md`
3. `docs/ARTIFACT-CONVENTIONS.md`
4. `docs/CONTEXT-PROTOCOL.md`

### Architecture and validation

5. `docs/ARCHITECTURE.md`
6. `docs/TESTING-PROTOCOL.md`
7. `docs/PRE-DEPLOYMENT-AUDIT.md`
8. `docs/SECRETS-POLICY.md` when relevant

### Previous phase context

9. `docs/handoffs/PHASE-02-HANDOFF.md`
10. `docs/phases/PHASE-02-controlled-reference-migration.md`

### Reference extraction methodology

11. `docs/reference-extraction/REFERENCE-EXTRACTION-WORKFLOW.md`
12. `docs/reference-extraction/REFERENCE-SECTION-TEMPLATE.md`

### Relevant examples only when needed

13. `docs/reference-extraction/HEADER-EXTRACTION.md`
14. `docs/reference-extraction/MENU-EXTRACTION.md`
15. Relevant Phase 02 milestone documents only when needed to understand established conventions or dependencies.
16. Relevant ADRs only when the proposed Phase 03 design or implementation depends on them.
17. `docs/tracking/BUGS.md`
18. `docs/tracking/FINDINGS.md`

Do not load unrelated project areas unless required by the assigned scope.

Do not rely on prior AI conversations as project truth when the same decision is not recorded in the repository.

---

## 4. Current Approved Architecture That Must Be Respected

The current approved frontend architecture is:

- Eleventy
- Nunjucks
- Static HTML first
- Plain CSS
- BEM-lite naming
- Canonical stylesheet: `src/assets/css/main.css`
- Native browser JavaScript / ESM when interaction requires JavaScript
- No additional bundler without explicit architecture approval
- Static assets through the existing Eleventy passthrough pipeline
- GitHub as source of truth
- Cloudflare Workers Static Assets for public delivery

Relevant existing component convention:

```text
src/
├── index.njk
├── _includes/
│   ├── base.njk
│   └── components/
│       └── <section-name>.njk
└── assets/
```

OnePage sections belong under:

`src/_includes/components/`

Component filenames use lowercase semantic kebab-case names.

SEO-critical content must exist in generated static HTML and must not depend on JavaScript for indexing or semantic interpretation.

Do not reproduce Bricks implementation details merely because they exist in staging.

The staging site is a **behavior/design/content reference**, not an architecture specification.

---

## 5. Product Manager Direction for “CÓMO TRABAJAMOS”

The next planned section is:

**CÓMO TRABAJAMOS**

Reference:

`https://staging.serviciomunguia.com/inicio-bricks/`

The new section must be based on the staging reference, but the reference must not be assumed to be perfect.

Claude Code must:

- preserve verified useful behavior and hierarchy;
- identify objective problems;
- identify weak UX or static presentation;
- identify SEO, accessibility, responsive, semantic, or performance issues;
- propose justified improvements;
- clearly distinguish reference evidence from new recommendations.

The reference section is considered **too static** for the intended evolution of SERVICIOMUNGUIA.COM.

A Product Manager directive for Phase 03 is therefore:

> Propose a purposeful motion and interaction system for “CÓMO TRABAJAMOS” that improves the experience without compromising performance, accessibility, responsiveness, content clarity, or static HTML-first rendering.

This directive authorizes **proposal and analysis**, not automatic implementation.

Every proposed motion behavior requires Product Manager approval before OpenCode implements it.

---

## 6. Evidence Classification

The existing project extraction framework uses:

- `OBSERVED`
- `PM APPROVED`
- `UNKNOWN`
- `NOT APPLICABLE`

For this discovery assignment, Claude Code must preserve those canonical evidence states and may additionally organize review findings under the following proposal labels:

### OBSERVED

Directly verified reference behavior or content.

### ISSUE / DEFECT

An objectively problematic behavior, technical problem, semantic problem, accessibility problem, SEO problem, responsive failure, inconsistency, or verified defect.

An ISSUE / DEFECT is **not** automatically permission to change product behavior.

### PROPOSED IMPROVEMENT

A recommended evolution that differs from or extends the reference.

It is not approved until the Product Manager explicitly approves it.

### UNKNOWN

A relevant point that cannot be verified from available evidence or requires Product Manager clarification.

Claude Code must never silently convert an UNKNOWN into an assumption.

### PM APPROVED

May only be used for decisions already documented as approved, or after explicit Product Manager approval is recorded in the repository.

---

## 7. Reference Extraction Requirements

Inspect the exact “CÓMO TRABAJAMOS” section at:

`https://staging.serviciomunguia.com/inicio-bricks/`

Follow:

- `docs/reference-extraction/REFERENCE-EXTRACTION-WORKFLOW.md`
- `docs/reference-extraction/REFERENCE-SECTION-TEMPLATE.md`

Capture and document, when applicable:

### Identification

- exact reference URL;
- section boundaries;
- extraction date;
- extractor;
- evidence source.

### Purpose and content

- section goal;
- user goal;
- content hierarchy;
- heading copy;
- body copy;
- step/process content;
- CTA content;
- labels;
- supporting content.

### DOM / semantic structure

- outer section;
- child hierarchy;
- source order;
- repeated process items;
- heading hierarchy;
- semantic elements;
- links;
- buttons;
- decorative elements;
- accessibility-relevant attributes.

### Layout

- width behavior;
- max width;
- grid/flex structure;
- column count;
- alignment;
- spacing;
- padding;
- margins;
- gaps;
- positioning;
- overflow;
- stacking.

### Typography

- family;
- size;
- weight;
- line height;
- letter spacing;
- alignment;
- transform;
- responsive changes.

### Visual treatment

- background;
- foreground colors;
- borders;
- radius;
- shadows;
- gradients;
- separators;
- connectors;
- icons;
- illustration treatment;
- decorative layers.

### Assets

- images;
- icons;
- SVG;
- media dimensions;
- source URLs;
- aspect ratios;
- crop/fit;
- accessible text;
- dependencies.

### Responsive behavior

Observe at minimum the established project viewport classes:

- Desktop
- Tablet
- Mobile Landscape
- Mobile Portrait

Do not invent exact breakpoint values unless directly observed or already defined by approved project documentation.

Document:

- layout changes;
- reordering;
- content visibility;
- sizing;
- spacing;
- alignment;
- interaction changes;
- overflow/clipping;
- typography adjustments.

### Interaction

Document existing:

- default state;
- hover;
- focus;
- active;
- pointer behavior;
- scroll behavior;
- animation;
- transition;
- keyboard behavior;
- reduced-motion behavior if present.

### Technical observations

Record Bricks/WordPress implementation details only as evidence.

Do not treat Bricks classes, generated markup, plugins, animation libraries, or builder-specific structures as requirements for the new architecture.

---

## 8. UX / Content Review

Evaluate whether the staging reference communicates the process clearly and efficiently.

Review:

- process sequencing;
- number of steps;
- clarity of each step;
- user understanding;
- visual hierarchy;
- scanability;
- CTA placement;
- CTA relevance;
- redundancy;
- repetition with other OnePage sections;
- relationship with Hero, Services, Coverage, Brands, Testimonials, Contact, and future sections;
- mobile comprehension;
- interaction value versus complexity.

For every proposal document:

- Problem or opportunity
- Evidence
- Proposed change
- Expected user benefit
- Possible regression/risk
- PM approval required: YES

Do not rewrite copy merely because a different phrasing is subjectively preferred.

Proposed copy changes must have a clear UX, SEO, semantic, or accuracy reason.

---

## 9. Accessibility Review

Review, when applicable:

- semantic section structure;
- heading hierarchy;
- source order;
- meaningful landmarks;
- keyboard access;
- focus visibility;
- accessible names;
- icon accessibility;
- decorative content handling;
- image alt strategy;
- contrast;
- link/button semantics;
- interaction discoverability;
- motion sensitivity;
- reduced-motion handling;
- touch target implications;
- content availability without JavaScript.

Identify accessibility defects separately from optional enhancements.

A visual match to staging does not justify reproducing an accessibility defect.

---

## 10. OnePage SEO Review

This website is a **OnePage**.

Do not treat “CÓMO TRABAJAMOS” as an independent landing page.

Evaluate the section in relationship to the complete page.

Review:

### Heading hierarchy

- relationship with the page H1;
- whether “CÓMO TRABAJAMOS” should be an H2;
- appropriate heading levels inside process steps;
- avoidance of hierarchy jumps;
- static HTML presence.

### Search intent

- whether the section reinforces service intent;
- whether copy supports trust, process clarity, diagnosis, repair flow, and service expectations;
- avoidance of keyword stuffing;
- avoidance of competing pseudo-H1 messaging.

### Content duplication

Identify possible duplication with:

- Hero
- Services
- Coverage
- Brands
- Testimonials
- Contact
- future sections

### Anchors and navigation

Review:

- canonical section anchor;
- anchor naming;
- internal navigation semantics;
- descriptive link text;
- whether links should exist before target sections are available.

### Images and media

Review:

- descriptive alt strategy;
- decorative image handling;
- whether visual assets add indexable meaning or are purely decorative.

### Structured data

Only propose structured data when technically and semantically justified.

Do not add schema simply because an SEO checklist suggests it.

### JavaScript independence

SEO-relevant section content must exist in generated static HTML.

Motion or interaction must not make primary content dependent on JavaScript.

Clearly separate:

- OBSERVED SEO STATE
- SEO ISSUE
- SEO PROPOSED IMPROVEMENT
- PM DECISION REQUIRED

---

## 11. Motion / Interaction Design Review

The staging reference is visually too static for the intended product evolution.

Claude Code must propose a deliberate motion and interaction system for the section.

Do not simply reproduce static staging behavior.

Evaluate, where justified:

- section entrance/reveal behavior;
- step-by-step process sequencing;
- scroll-triggered progression;
- connector/progress-line animation;
- active/current-step emphasis;
- icon motion;
- illustration motion;
- hover feedback;
- focus feedback;
- subtle micro-interactions;
- transitions between visual process states;
- mobile-specific behavior;
- touch/coarse-pointer behavior;
- reduced-motion alternatives;
- whether some effects should be disabled on constrained devices.

### Every animation proposal must document

- Name / identifier
- Purpose
- User benefit
- Trigger
- Affected element
- Motion behavior
- Suggested duration/range when justified
- Desktop behavior
- Tablet behavior
- Mobile Landscape behavior
- Mobile Portrait behavior
- Pointer/coarse-pointer implications
- Keyboard/focus implications
- `prefers-reduced-motion` behavior
- JavaScript required: YES / NO
- CSS-only alternative available: YES / NO
- Expected performance risk: LOW / MEDIUM / HIGH
- Implementation complexity
- Regression risk
- PM approval required: YES

### Performance is a hard constraint

Animation proposals must:

- avoid unnecessary JavaScript;
- avoid continuous expensive animation loops unless strongly justified;
- avoid layout thrashing;
- prefer `transform` and `opacity` when appropriate;
- avoid blocking or delaying LCP-critical content;
- avoid delaying static content rendering;
- avoid heavy animation libraries unless there is a documented need and explicit architecture/PM approval;
- preserve static HTML-first rendering;
- degrade cleanly when JavaScript is unavailable;
- respect `prefers-reduced-motion`;
- remain usable on lower-powered mobile devices;
- avoid creating content that is only understandable after animation completes.

No performance PASS threshold may be invented.

If the repository has no approved numeric threshold, report measured or expected risk without fabricating a PASS criterion.

### Risk classification

Classify each proposed animation:

- LOW
- MEDIUM
- HIGH

Any MEDIUM or HIGH proposal must include a lower-cost alternative.

Clearly distinguish:

- OBSERVED MOTION STATE
- MOTION ISSUE / LIMITATION
- PROPOSED ANIMATION / INTERACTION
- PERFORMANCE RISK
- ACCESSIBILITY IMPLICATION
- PM DECISION REQUIRED

The final proposal must include a recommended motion system, but recommendations remain unapproved until Product Manager review.

---

## 12. Architecture Review for the Proposed Reconstruction

Determine how the section should fit the approved implementation architecture.

Evaluate:

- likely Nunjucks component boundary;
- expected BEM-lite root class;
- likely placement in `src/index.njk`;
- CSS organization inside `src/assets/css/main.css`;
- whether any JavaScript is required;
- whether CSS alone is sufficient;
- whether IntersectionObserver or equivalent native browser APIs are appropriate if scroll-triggered behavior is proposed;
- static fallback;
- reduced-motion behavior;
- self-hosted asset requirements;
- dependency impact;
- regression risk to existing Header, Hero, Menu, and Mobile Navigation;
- interaction with the mobile app shell and bottom navigation.

Do not add:

- Tailwind;
- Bootstrap;
- Sass/Less;
- Vite/Webpack/Rollup/Parcel;
- animation frameworks;
- external font CDNs;
- new architectural layers;

unless a concrete requirement justifies the change and explicit Product Manager / architecture approval is obtained before implementation.

---

## 13. Proposed Phase 03 Milestone Structure

Claude Code must document a proposed Phase 03 structure.

Recommended baseline:

### M03-00 — Phase 03 Discovery & Planning

Purpose:

Establish Phase 03 documentation, discovery scope, responsibilities, governance boundaries, and planning artifacts.

Owner:

Claude Code for discovery/planning.

### M03-01 — “Cómo Trabajamos” Reference Extraction

Purpose:

Create evidence-based extraction of the staging reference.

Owner:

Claude Code.

### M03-02 — UX / Accessibility / SEO / Motion Review & Improvement Proposal

Purpose:

Document issues, improvement proposals, SEO recommendations, accessibility corrections, animation proposals, and performance risks.

Owner:

Claude Code.

### M03-03 — Product Manager Approval & Scope Freeze

Purpose:

Resolve UNKNOWN items and convert explicitly approved proposals into implementation requirements.

Owner:

Julián Cely + coordinating ChatGPT.

No implementation begins before this milestone closes.

### M03-04 — OpenCode Implementation

Purpose:

Implement only the approved, frozen Phase 03 scope.

Owner:

OpenCode.

OpenCode must work from approved repository artifacts.

Once scope is frozen, staging is not an independent authority for OpenCode unless the approved milestone explicitly requires reference verification.

### M03-05 — Claude Code Independent Testing

Purpose:

Independently verify OpenCode's implementation.

Owner:

Claude Code.

The exact OpenCode commit or commit range must define the test scope.

### M03-06 — Formal Audit & Phase Closure Gate

Purpose:

Perform formal Claude Code audit under `docs/PRE-DEPLOYMENT-AUDIT.md`.

Owner:

Claude Code for the audit.

Final phase-state synchronization and closure documentation are performed by the coordinating ChatGPT agent after PASS.

### Planning freedom

Claude Code may recommend changing this milestone structure only when there is a concrete governance or technical reason.

Any proposed structural change requires Product Manager approval.

For every milestone define:

- Purpose
- Status
- Scope
- Inputs
- Outputs
- Responsible agent
- Files allowed to change
- Files prohibited from change when relevant
- Testing applicability
- Acceptance criteria
- STOP / BLOCKED conditions
- Required evidence
- Publication gate
- Dependencies

---

## 14. OpenCode Implementation Boundary to Prepare

The Phase 03 planning package must be explicit enough that a new external implementation agent can execute without relying on conversation history.

The future OpenCode implementation instructions must establish at minimum:

### Required context order

```text
docs/00-START-HERE.md
→ docs/PROJECT-STATE.md
→ docs/ARTIFACT-CONVENTIONS.md
→ docs/CONTEXT-PROTOCOL.md
→ approved Phase 03 specification
→ approved Phase 03 milestone specification
→ approved CÓMO TRABAJAMOS extraction
→ PM-approved deviations / scope freeze
→ docs/ARCHITECTURE.md
→ relevant ADRs
→ docs/TESTING-PROTOCOL.md
→ relevant BUGS/FINDINGS
```

### Fundamental implementation rule

> Approved repository artifacts define WHAT must be implemented.  
> The reference staging site must not be independently reinterpreted after scope freeze.

OpenCode must be told explicitly:

- which files it may edit;
- which files it may create;
- which files it must not modify;
- required Git procedure;
- required commits;
- required tests;
- required evidence;
- STOP conditions;
- no undocumented product decisions;
- no silent scope expansion;
- no editing the extraction to justify implementation differences;
- no changing PM-approved requirements;
- no architecture changes without approval;
- no self-declaration of formal audit PASS.

Claude Code's planning output must make later OpenCode onboarding possible.

---

## 15. Claude Code Testing / Audit Boundary

Claude Code will later test and audit OpenCode's implementation.

That future audit must focus on the exact implementation baseline produced by OpenCode.

Claude Code must later verify, as applicable:

- Build
- Functional behavior
- Responsive behavior
- SEO
- Accessibility
- Performance
- Security
- Integrations
- Regression
- Reduced motion
- Documentation consistency
- Architecture compliance
- Repository synchronization

Testing must follow:

`docs/TESTING-PROTOCOL.md`

Formal audit must follow:

`docs/PRE-DEPLOYMENT-AUDIT.md`

Formal audit output must be:

- PASS

or

- FAIL

Claude Code must not redefine product decisions during audit.

If implementation fails the approved scope, report the finding.

Do not rewrite the approved extraction or scope to make the implementation appear compliant.

---

## 16. Documentation Claude Code May Create or Modify During Discovery

Claude Code may create or edit documentation necessary for the discovery/planning package.

Expected artifacts to evaluate include:

```text
docs/phases/PHASE-03-como-trabajamos.md
docs/reference-extraction/COMO-TRABAJAMOS-EXTRACTION.md
docs/phases/phase-03/
```

Potential milestone artifacts:

```text
docs/phases/phase-03/M03-00-discovery-planning.md
docs/phases/phase-03/M03-01-como-trabajamos-reference-extraction.md
docs/phases/phase-03/M03-02-review-improvement-proposal.md
docs/phases/phase-03/M03-03-pm-approval-scope-freeze.md
docs/phases/phase-03/M03-04-opencode-implementation.md
docs/phases/phase-03/M03-05-independent-testing.md
docs/phases/phase-03/M03-06-formal-audit-closure-gate.md
```

Claude Code may adjust filenames to comply with the existing artifact conventions, but must preserve semantic clarity.

Create additional artifacts only when justified by current repository conventions.

### Important state boundary

Phase 03 discovery/planning is authorized.

Phase 03 **implementation is not authorized** until Product Manager approval and scope freeze.

Therefore, during this assignment Claude Code must not:

- modify production implementation files;
- implement “CÓMO TRABAJAMOS”;
- mark implementation milestones COMPLETED;
- claim READY FOR RECONSTRUCTION while reconstruction-critical UNKNOWN items remain;
- make unapproved product decisions;
- alter immutable Phase 02 audit results;
- rewrite historical Phase 02 evidence.

If updating `docs/PROJECT-STATE.md` becomes necessary to represent that Phase 03 discovery/planning has formally started, Claude Code must first verify that this requirement is consistent with the current governance model and must keep implementation explicitly unauthorized.

If any state transition is ambiguous, STOP and request Product Manager approval rather than inferring it.

---

## 17. Git and Repository Rules

Claude Code has access to the project directory and may create or modify documentation files required by this assignment.

Before editing:

1. verify current branch;
2. verify working-tree status;
3. verify `HEAD`;
4. verify `origin/main`;
5. verify whether local and remote are synchronized.

If unrelated local changes exist:

STOP.

Do not:

- discard them;
- reset them;
- overwrite them;
- stash them without explicit authorization.

Git is the authoritative project memory.

Documentation produced by this assignment must be committed and pushed only when it accurately represents the work performed.

Do not commit secrets.

At the end report:

- branch;
- files created;
- files modified;
- commit SHA(s);
- push status;
- `HEAD`;
- `origin/main`;
- working-tree status.

---

## 18. STOP / BLOCKED Conditions

Claude Code must stop and request clarification when:

- the reference section cannot be identified reliably;
- staging cannot be inspected;
- required project context is missing;
- repository state is dirty with unrelated changes;
- authoritative documents contradict each other;
- a reconstruction-critical point remains UNKNOWN and would require invention;
- a proposed improvement requires a product decision before planning can continue;
- an architecture change would be required but is not approved;
- a motion proposal depends on an unapproved library or dependency;
- SEO recommendations depend on missing page-wide information that cannot be established from the repository;
- exact responsive behavior cannot be verified;
- existing project behavior would need to be redefined without PM approval.

Do not compensate for missing evidence by guessing.

---

## 19. Required Claude Code Deliverable

Return a concise but complete review package containing:

1. Reference extraction summary
2. Confirmed observed behavior
3. Content hierarchy
4. DOM / semantic observations
5. Responsive behavior
6. Issues / defects
7. Proposed UX improvements
8. Accessibility review
9. OnePage SEO review
10. Architecture implications
11. Motion / interaction proposal
12. Performance-risk assessment for each motion pattern
13. Open questions / UNKNOWN items
14. Product Manager decisions required
15. Proposed Phase 03 milestone plan
16. Repository artifacts created
17. Repository artifacts modified
18. Git state
19. Explicit statement: **IMPLEMENTATION NOT STARTED**

The deliverable must be based on observable evidence and repository authority.

---

## 20. Recommended Claude Code Model — Cost / Quality

### Recommended default

**Claude Sonnet 5.5**, using **Medium effort** where Claude Code exposes effort selection.

Reason:

- this assignment is substantial but well-scoped;
- it requires browser/terminal/repository work;
- it requires strong coding-context comprehension even though production implementation is out of scope;
- it requires document creation, visual/design reasoning, extraction, and structured planning;
- cost efficiency matters because the task may require multiple staging inspections and repository passes.

Anthropic currently positions Sonnet 5.5 as a faster, lower-cost complement to Opus 5.5 and reports that it is particularly strong for well-scoped work, coding, and polished document creation. Anthropic also states that Claude Code defaults to Medium effort, which balances latency, token usage, and quality.

Official reference:

`https://www.anthropic.com/claude-sonnet-5-5`

### Escalation option

Use **Claude Opus 5.5** selectively only if the discovery reveals:

- substantial contradictory evidence;
- complex architecture tradeoffs;
- difficult cross-section SEO conflicts;
- unusually ambiguous interaction design;
- complex accessibility conflicts;
- a planning problem requiring sustained open-ended judgment.

Do not default to Opus simply because it is the highest-capability model.

For this discovery/planning assignment, Sonnet 5.5 is the preferred cost/quality starting point.

---

# Claude Code Execution Instruction

The following block may be given directly to Claude Code.

---

## BEGIN CLAUDE CODE INSTRUCTION

You are performing the Phase 03 discovery and planning assignment for SERVICIOMUNGUIA.COM.

Your scope is:

**DISCOVERY + REFERENCE EXTRACTION + REVIEW + PROPOSAL + PHASE PLANNING**

Target section:

**CÓMO TRABAJAMOS**

Reference:

`https://staging.serviciomunguia.com/inicio-bricks/`

You are not the implementation agent.

OpenCode will implement later after Product Manager approval and scope freeze.

Read this complete requirement document first, then load the repository context in the mandatory order defined above.

Your primary objectives are:

1. Inspect and extract the existing reference section.
2. Preserve observable evidence without reinterpretation.
3. Identify objective issues and defects.
4. Propose justified UX improvements.
5. Review accessibility.
6. Review SEO specifically in the context of the complete OnePage.
7. Propose a purposeful motion/interaction system because the staging reference is too static.
8. Treat performance, accessibility, reduced-motion behavior, static HTML-first rendering, and mobile usability as hard constraints for motion proposals.
9. Review architectural fit with Eleventy, Nunjucks, BEM-lite CSS, native browser ESM, and the existing asset pipeline.
10. Prepare a documented Phase 03 milestone plan.
11. Create or update the required documentation artifacts in the repository.
12. Do not implement production code.

Use the canonical extraction states:

- OBSERVED
- PM APPROVED
- UNKNOWN
- NOT APPLICABLE

For review/proposal organization, clearly distinguish:

- ISSUE / DEFECT
- PROPOSED IMPROVEMENT

Do not convert your own proposal into an approved requirement.

Do not silently fix the reference inside the extraction.

For every proposed motion or interaction, document:

- purpose;
- user benefit;
- trigger;
- affected element;
- behavior;
- responsive variants;
- reduced-motion behavior;
- JavaScript requirement;
- CSS-only alternative;
- performance risk;
- implementation complexity;
- regression risk;
- PM approval required.

Prefer low-cost motion built from native browser capabilities, CSS transforms/opacity, and progressive enhancement.

Do not introduce an animation library, build tool, CSS framework, or architecture change without explicit approval.

At the end, provide the complete deliverable defined in this requirement and explicitly state:

**IMPLEMENTATION NOT STARTED**

Before writing files, verify Git branch, working tree, HEAD, and origin/main.

If unrelated local changes exist, STOP.

If evidence or governance is contradictory or incomplete, STOP rather than infer.

## END CLAUDE CODE INSTRUCTION
