// Smart Header — Priority C, stage 1 (M03-04-PC-01).
// Positional HERO / CONTENT state model (SH-D01, SH-D02, SH-D13, SH-D17),
// recorded on the root element as `data-sm-header`. CSS owns all animation.
// Stage 2 (M03-04-PC-02) adds the Menu overlay interaction (SH-D11, SH-D12):
// the state is suspended while the Menu trigger reports aria-expanded="true"
// and recomputed from the current Hero geometry when it closes.
//
// C-1 (2026-11-07): the state is `hero` only while the Hero bottom edge is
// strictly below the Header bottom edge (spec.md §1). The synchronous
// evaluation and the IntersectionObserver both use the same boundary, offset
// by EDGE_EPSILON (0.5 CSS px) below the measured Header bottom edge, so an
// edge-adjacent target at exact equality (Delta = 0) is `content` and the
// observer never overrides the synchronous result with a different state.
//
// B-1 (2026-11-07): transitions are enabled only after the initial state is
// applied and painted, by setting `data-sm-header-motion="on"` once per load
// through two chained one-shot requestAnimationFrame calls (the only rAF use;
// not a loop, never re-armed).

const hero = document.querySelector("#inicio");
const header = document.querySelector("#sm-hero-header");

if (hero && header && typeof IntersectionObserver !== "undefined") {
  const root = document.documentElement;

  const EDGE_EPSILON = 0.5;

  let observer = null;
  let headerBottom = null;

  // SH-D11: the Menu overlay suspends the Smart Header. The trigger reports
  // the Menu state with aria-expanded; no custom event is used.
  const menuTrigger = document.querySelector("#sm-menu-trigger");
  let menuOpen =
    menuTrigger !== null &&
    menuTrigger.getAttribute("aria-expanded") === "true";

  const measureHeaderBottom = () => header.getBoundingClientRect().bottom;

  const boundaryFor = (bottom) => bottom + EDGE_EPSILON;

  const isHeroAt = (heroBottom, boundary) => heroBottom >= boundary;

  const applyState = (boundary) => {
    // SH-D11: no state is written while the Menu overlay is open.
    if (menuOpen) {
      return;
    }

    const heroBottom = hero.getBoundingClientRect().bottom;
    root.setAttribute(
      "data-sm-header",
      isHeroAt(heroBottom, boundary) ? "hero" : "content"
    );
  };

  const observe = () => {
    headerBottom = measureHeaderBottom();
    const boundary = boundaryFor(headerBottom);

    if (observer) {
      observer.disconnect();
    }

    observer = new IntersectionObserver(
      (entries) => {
        // SH-D11: no state is written while the Menu overlay is open.
        if (menuOpen) {
          return;
        }

        const entry = entries[entries.length - 1];
        root.setAttribute(
          "data-sm-header",
          entry.isIntersecting ? "hero" : "content"
        );
      },
      {
        root: null,
        threshold: 0,
        rootMargin: `-${boundary}px 0px 0px 0px`,
      }
    );

    observer.observe(hero);

    // Synchronous initial (and post-geometry-change) evaluation, same boundary.
    applyState(boundary);
  };

  const rebuildIfChanged = () => {
    const next = measureHeaderBottom();
    if (next !== headerBottom) {
      observe();
    }
  };

  observe();

  // B-1: enable transitions once, after the initial state has been painted.
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      root.setAttribute("data-sm-header-motion", "on");
    });
  });

  if (typeof ResizeObserver !== "undefined") {
    const headerResizeObserver = new ResizeObserver(rebuildIfChanged);
    headerResizeObserver.observe(header);
  }

  window.addEventListener("resize", rebuildIfChanged);
  window.addEventListener("orientationchange", rebuildIfChanged);

  // SH-D11 / SH-D12: observe the Menu state through the trigger attribute.
  // While open nothing is written; when it closes the Header geometry is
  // measured again, the state is evaluated from the current Hero geometry and
  // the observer is re-armed. No previous state is cached or restored.
  if (menuTrigger && typeof MutationObserver !== "undefined") {
    const menuStateObserver = new MutationObserver(() => {
      const isOpen =
        menuTrigger.getAttribute("aria-expanded") === "true";

      if (isOpen === menuOpen) {
        return;
      }

      menuOpen = isOpen;

      if (!menuOpen) {
        observe();
      }
    });

    menuStateObserver.observe(menuTrigger, {
      attributes: true,
      attributeFilter: ["aria-expanded"],
    });
  }
}
