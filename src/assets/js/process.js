const processSection = document.querySelector("#como-trabajamos");

if (processSection) {
  const root = processSection.classList.contains("sm-process")
    ? processSection
    : processSection.querySelector(".sm-process");

  if (root) {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const mobilePortrait = window.matchMedia(
      "(max-width: 478.98px) and (orientation: portrait)"
    );
    const gridLayout = window.matchMedia(
      "(min-width: 479px) and (max-width: 991.98px)"
    );

    const revealTargets = Array.from(
      root.querySelectorAll("[data-sm-reveal]")
    );
    const steps = Array.from(root.querySelectorAll(".sm-process-step"));
    const stepsList = root.querySelector(".sm-process-steps");
    const ctaCard = root.querySelector(".sm-process-cta");
    const ctaImage = root.querySelector(".sm-process-cta__image");
    const bottomNav = document.querySelector(".sm-bottom-nav");

    const STEPPER_MARKER_CLASS = "sm-process-marker";
    const STEPPER_FILL_CLASS = "sm-process-fill";
    const STEPPER_BAND_HEIGHT = 90;
    const STEPPER_MARKER_SIZE = 12;
    const STEPPER_DISC_HALF = 42;
    const GRID_FILL_COUNT = 5;
    const GRID_FILL_END_STEPS = [1, 2, 2, 3, 4];

    let revealObserver = null;
    let connectorDrawn = false;
    let imageSettled = false;

    let stepperMode = null;
    let stepperLayout = null;
    let stepperSectionObserver = null;
    let stepperReducedActiveObserver = null;
    let stepperReducedTraversedObserver = null;
    let stepperMarker = null;
    let stepperFills = [];
    let stepperGeometry = null;
    let stepperFrameId = 0;
    let stepperScrollAttached = false;
    let stepperControllerActive = false;

    const isInViewport = (element) => {
      const rect = element.getBoundingClientRect();
      return rect.top < window.innerHeight && rect.bottom > 0;
    };

    const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

    const drawConnector = () => {
      if (connectorDrawn || !stepsList || reduceMotion.matches) {
        return;
      }

      connectorDrawn = true;
      stepsList.classList.add("is-connector-drawn");
    };

    const markImageSettled = () => {
      if (imageSettled || !ctaCard) {
        return;
      }

      imageSettled = true;
      ctaCard.classList.add("is-image-settled");
    };

    const setupImageSettle = () => {
      if (!ctaImage || reduceMotion.matches) {
        return;
      }

      if (ctaImage.complete) {
        requestAnimationFrame(() => requestAnimationFrame(markImageSettled));
      } else {
        ctaImage.addEventListener("load", () => {
          requestAnimationFrame(() => requestAnimationFrame(markImageSettled));
        }, { once: true });
      }
    };

    const setupReveal = () => {
      if (revealTargets.length === 0) {
        return;
      }

      // Deep-link / reload: pre-reveal anything already on screen so the
      // enhancement never hides first-paint content, then hydrate the rest.
      revealTargets.forEach((target) => {
        if (isInViewport(target)) {
          target.classList.add("is-revealed");
        }
      });

      if (reduceMotion.matches) {
        return;
      }

      let remaining = revealTargets.length;

      revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add("is-revealed");
          observer.unobserve(entry.target);

          if (entry.target.classList.contains("sm-process-step")) {
            drawConnector();
          }

          remaining -= 1;
        });

        if (remaining <= 0) {
          observer.disconnect();
        }
      }, {
        rootMargin: "0px 0px -10% 0px",
        threshold: 0.15
      });

      revealTargets.forEach((target) => revealObserver.observe(target));
    };

    // Rendered height of the Bottom Navigation, or 0 when it is absent or
    // not displayed. Never hard-coded (PD-17, PD-25).
    const getBottomNavHeight = () => {
      if (!bottomNav) {
        return 0;
      }

      if (window.getComputedStyle(bottomNav).display === "none") {
        return 0;
      }

      return bottomNav.getBoundingClientRect().height;
    };

    const getReadingLine = () => {
      return (window.innerHeight - getBottomNavHeight()) / 2;
    };

    // Transform-free geometry, measured only on the defined triggers.
    const measureStepperGeometry = () => {
      if (!stepsList || steps.length === 0) {
        return null;
      }

      const listTop = stepsList.getBoundingClientRect().top + window.scrollY;

      const items = steps.map((step) => {
        const visual = step.querySelector(".sm-process-step__visual");
        const visualWidth = visual ? visual.offsetWidth : 0;
        const visualHeight = visual ? visual.offsetHeight : 0;
        const visualLeft = visual ? visual.offsetLeft : 0;
        const stepTop = listTop + step.offsetTop;

        return {
          step,
          top: stepTop,
          bottom: stepTop + step.offsetHeight,
          centerY: stepTop + (visual ? visual.offsetTop : 0) + visualHeight / 2,
          centerX: step.offsetLeft + visualLeft + visualWidth / 2,
          connectorX: step.offsetLeft + visualLeft + visualWidth / 2 - 1,
          connectorTop: stepTop + visualHeight
        };
      });

      return {
        items,
        listTop,
        markerX: items[0].centerX,
        navHeight: getBottomNavHeight()
      };
    };

    // Grid (3+2) geometry, measured transform-free only on the defined
    // triggers. cx is list x (relative to .sm-process-steps); cy, row top and
    // row bottom are document y. Returns null (no error) when the five steps
    // do not form exactly two rows of three then two steps in order.
    const measureGridGeometry = () => {
      if (!stepsList || steps.length === 0) {
        return null;
      }

      const listTop = stepsList.getBoundingClientRect().top + window.scrollY;
      const cx = [];
      const cy = [];
      const stepTopDoc = [];
      const stepBottomDoc = [];
      const stepFillTop = [];

      steps.forEach((step, k) => {
        const visual = step.querySelector(".sm-process-step__visual");
        const visualWidth = visual ? visual.offsetWidth : 0;
        const visualHeight = visual ? visual.offsetHeight : 0;
        const visualLeft = visual ? visual.offsetLeft : 0;
        const visualTop = visual ? visual.offsetTop : 0;

        cx[k] = step.offsetLeft + visualLeft + visualWidth / 2;
        stepTopDoc[k] = listTop + step.offsetTop;
        stepBottomDoc[k] = stepTopDoc[k] + step.offsetHeight;
        cy[k] = stepTopDoc[k] + visualTop + visualHeight / 2;
        stepFillTop[k] = step.offsetTop + visualTop + visualHeight / 2;
      });

      const rows = [];
      let groupTop = null;
      let group = null;

      steps.forEach((step, k) => {
        if (groupTop === null || Math.abs(step.offsetTop - groupTop) > 0.5) {
          groupTop = step.offsetTop;
          group = { offsetTop: groupTop, steps: [] };
          rows.push(group);
        }

        group.steps.push(k);
      });

      if (rows.length !== 2 || rows[0].steps.length !== 3 ||
          rows[1].steps.length !== 2) {
        return null;
      }

      if (rows[0].steps[0] !== 0 || rows[1].steps[0] !== 3) {
        return null;
      }

      rows.forEach((row) => {
        let maxBottomDoc = -Infinity;

        row.steps.forEach((k) => {
          maxBottomDoc = Math.max(maxBottomDoc, stepBottomDoc[k]);
        });

        row.top = listTop + row.offsetTop;
        row.bottom = maxBottomDoc;
        row.fillTop = stepFillTop[row.steps[0]];
      });

      rows[0].x0 = cx[0];
      rows[0].x1 = stepsList.offsetWidth;
      rows[1].x0 = 0;
      rows[1].x1 = cx[4];

      return {
        isGrid: true,
        listTop,
        cx,
        cy,
        stepTopDoc,
        stepBottomDoc,
        listWidth: stepsList.offsetWidth,
        rows
      };
    };

    const getGridFillExtents = () => {
      const { cx, listWidth } = stepperGeometry;
      const half = STEPPER_DISC_HALF;

      return [
        { left: cx[0] + half, right: cx[1] - half, row: 0 },
        { left: cx[1] + half, right: cx[2] - half, row: 0 },
        { left: cx[2] + half, right: listWidth, row: 0 },
        { left: 0, right: cx[3] - half, row: 1 },
        { left: cx[3] + half, right: cx[4] - half, row: 1 }
      ];
    };

    const positionStepperFills = () => {
      if (!stepperGeometry) {
        return;
      }

      stepperFills.forEach((fill, index) => {
        const item = stepperGeometry.items[index];
        const nextItem = stepperGeometry.items[index + 1];

        if (!item || !nextItem) {
          return;
        }

        const top = item.connectorTop;
        const height = Math.max(0, nextItem.top - top);

        fill.style.left = `${item.connectorX}px`;
        fill.style.top = `${top - stepperGeometry.listTop}px`;
        fill.style.height = `${height}px`;
      });
    };

    const positionGridFills = () => {
      if (!stepperGeometry || !stepperGeometry.isGrid) {
        return;
      }

      const extents = getGridFillExtents();

      stepperFills.forEach((fill, index) => {
        const extent = extents[index];

        if (!extent) {
          return;
        }

        fill.style.left = `${extent.left}px`;
        fill.style.top = `${stepperGeometry.rows[extent.row].fillTop}px`;
        fill.style.width = `${extent.right - extent.left}px`;
      });
    };

    const updateStepperState = () => {
      if (!stepperGeometry || !stepperMarker) {
        return;
      }

      const { items, listTop, markerX, navHeight } = stepperGeometry;
      const ly = (window.innerHeight - navHeight) / 2;
      const readingLine = window.scrollY + ly;
      const firstAnchor = items[0].centerY;
      const lastAnchor = items[items.length - 1].centerY;
      const pathLength = Math.max(0, lastAnchor - firstAnchor);
      const progress = clamp(readingLine - firstAnchor, 0, pathLength);
      const markerY = firstAnchor + progress - listTop;
      const markerOffset = STEPPER_MARKER_SIZE / 2;

      stepperMarker.style.transform = `translate3d(${markerX - markerOffset}px, ${markerY - markerOffset}px, 0)`;
      stepperMarker.style.opacity =
        readingLine < firstAnchor || readingLine > lastAnchor ? "0" : "1";

      stepperFills.forEach((fill, index) => {
        const segmentStart = items[index].centerY - firstAnchor;
        const segmentLength = items[index + 1].centerY - items[index].centerY;
        const fillProgress = segmentLength <= 0
          ? 0
          : clamp((progress - segmentStart) / segmentLength, 0, 1);

        fill.style.transform = `scaleY(${fillProgress})`;
      });

      const bandTop = ly - STEPPER_BAND_HEIGHT / 2;
      const bandBottom = ly + STEPPER_BAND_HEIGHT / 2;
      const scrollY = window.scrollY;
      let currentStep = null;
      let currentDistance = Infinity;

      items.forEach((item) => {
        const top = item.top - scrollY;
        const bottom = item.bottom - scrollY;

        if (bottom <= bandTop || top >= bandBottom) {
          return;
        }

        const distance = Math.abs((top + bottom) / 2 - ly);

        if (distance < currentDistance) {
          currentDistance = distance;
          currentStep = item.step;
        }
      });

      items.forEach((item) => {
        item.step.classList.toggle("is-current", item.step === currentStep);
        item.step.classList.toggle("is-traversed", readingLine >= item.centerY);
      });
    };

    const updateGridState = () => {
      if (!stepperGeometry || !stepperGeometry.isGrid || !stepperMarker) {
        return;
      }

      const { rows, cx, stepTopDoc, stepBottomDoc } = stepperGeometry;
      const ly = getReadingLine();
      const rl = window.scrollY + ly;
      const markerOffset = STEPPER_MARKER_SIZE / 2;

      // Per-row marker x (linear in rl, PD-21 / R5).
      const markerX = rows.map((row) => {
        const progress = clamp((rl - row.top) / (row.bottom - row.top), 0, 1);
        return row.x0 + progress * (row.x1 - row.x0);
      });

      const activeRow = rl < (rows[0].bottom + rows[1].top) / 2 ? 0 : 1;
      const markerY = rows[activeRow].fillTop + 1;

      stepperMarker.style.transform =
        `translate3d(${markerX[activeRow] - markerOffset}px, ${markerY - markerOffset}px, 0)`;

      const inRow = rl >= rows[0].top && rl <= rows[0].bottom ||
        rl >= rows[1].top && rl <= rows[1].bottom;

      stepperMarker.style.opacity = inRow ? "1" : "0";

      // Connector fills follow their row's marker x.
      const extents = getGridFillExtents();

      stepperFills.forEach((fill, index) => {
        const extent = extents[index];

        if (!extent) {
          return;
        }

        const progress = clamp(
          (markerX[extent.row] - extent.left) / (extent.right - extent.left),
          0,
          1
        );

        fill.style.transform = `scaleX(${progress})`;
      });

      // Traversed rule (R6): within a row, a step is traversed once the
      // marker x reaches its disc centre.
      steps.forEach((step, k) => {
        const rowIndex = k < 3 ? 0 : 1;
        const traversed = rl >= rows[rowIndex].top && markerX[rowIndex] >= cx[k];
        step.classList.toggle("is-traversed", traversed);
      });

      // Current-step rule (R7): band candidates, nearest row, nearest disc.
      const bandTop = ly - STEPPER_BAND_HEIGHT / 2;
      const bandBottom = ly + STEPPER_BAND_HEIGHT / 2;
      const scrollY = window.scrollY;
      const candidateRows = [];

      rows.forEach((row, rowIndex) => {
        const hasCandidate = row.steps.some((k) => {
          const top = stepTopDoc[k] - scrollY;
          const bottom = stepBottomDoc[k] - scrollY;
          return bottom > bandTop && top < bandBottom;
        });

        if (hasCandidate) {
          candidateRows.push(rowIndex);
        }
      });

      let currentStep = -1;

      if (candidateRows.length > 0) {
        let chosenRow = candidateRows[0];
        let rowDistance = Infinity;

        candidateRows.forEach((rowIndex) => {
          const centre = (rows[rowIndex].top + rows[rowIndex].bottom) / 2;
          const distance = Math.abs(centre - rl);

          if (distance < rowDistance) {
            rowDistance = distance;
            chosenRow = rowIndex;
          }
        });

        let stepDistance = Infinity;

        rows[chosenRow].steps.forEach((k) => {
          const distance = Math.abs(cx[k] - markerX[chosenRow]);

          if (distance < stepDistance) {
            stepDistance = distance;
            currentStep = k;
          }
        });
      }

      steps.forEach((step, k) => {
        step.classList.toggle("is-current", k === currentStep);
      });
    };

    // Reduced motion (Option R3): discrete state, no scroll listener, no frame.
    // Recomputes every step from current getBoundingClientRect() values.
    const updateReducedStepperState = () => {
      if (!stepperGeometry) {
        return;
      }

      const ly = getReadingLine();
      const bandTop = ly - STEPPER_BAND_HEIGHT / 2;
      const bandBottom = ly + STEPPER_BAND_HEIGHT / 2;
      const traversed = [];
      let currentStep = null;
      let currentDistance = Infinity;

      steps.forEach((step, index) => {
        const rect = step.getBoundingClientRect();
        const visual = step.querySelector(".sm-process-step__visual");
        const visualRect = visual ? visual.getBoundingClientRect() : rect;
        const visualCenter = visualRect.top + visualRect.height / 2;

        traversed[index] = visualCenter <= ly;

        if (rect.bottom > bandTop && rect.top < bandBottom) {
          const distance = Math.abs(rect.top + rect.height / 2 - ly);

          if (distance < currentDistance) {
            currentDistance = distance;
            currentStep = step;
          }
        }
      });

      steps.forEach((step, index) => {
        step.classList.toggle("is-current", step === currentStep);
        step.classList.toggle("is-traversed", traversed[index]);
      });

      stepperFills.forEach((fill, index) => {
        fill.style.transform = `scaleY(${traversed[index + 1] ? 1 : 0})`;
      });
    };

    // Reduced motion, grid (3+2): discrete row-level state from live
    // getBoundingClientRect() values; no cached geometry for states (R9).
    const updateReducedGridState = () => {
      if (!stepperGeometry || !stepperGeometry.isGrid) {
        return;
      }

      const { rows } = stepperGeometry;
      const ly = getReadingLine();
      const bandTop = ly - STEPPER_BAND_HEIGHT / 2;
      const bandBottom = ly + STEPPER_BAND_HEIGHT / 2;
      const traversed = [];

      steps.forEach((step, index) => {
        const visual = step.querySelector(".sm-process-step__visual");
        const rect = visual ? visual.getBoundingClientRect() : step.getBoundingClientRect();
        traversed[index] = rect.top + rect.height / 2 <= ly;
      });

      let currentRow = -1;
      let currentDistance = Infinity;

      rows.forEach((row, rowIndex) => {
        let minTop = Infinity;
        let maxBottom = -Infinity;
        let hasCandidate = false;

        row.steps.forEach((k) => {
          const rect = steps[k].getBoundingClientRect();
          minTop = Math.min(minTop, rect.top);
          maxBottom = Math.max(maxBottom, rect.bottom);

          if (rect.bottom > bandTop && rect.top < bandBottom) {
            hasCandidate = true;
          }
        });

        if (!hasCandidate) {
          return;
        }

        const centre = (minTop + maxBottom) / 2;
        const distance = Math.abs(centre - ly);

        if (distance < currentDistance) {
          currentDistance = distance;
          currentRow = rowIndex;
        }
      });

      steps.forEach((step, index) => {
        const isCurrent = currentRow >= 0 && rows[currentRow].steps.indexOf(index) !== -1;
        step.classList.toggle("is-current", isCurrent);
        step.classList.toggle("is-traversed", traversed[index]);
      });

      stepperFills.forEach((fill, index) => {
        const endStep = GRID_FILL_END_STEPS[index];
        fill.style.transform = `scaleX(${traversed[endStep] ? 1 : 0})`;
      });
    };

    const isGridStepper = () =>
      stepperLayout === "grid";

    const measureActiveGeometry = () =>
      isGridStepper() ? measureGridGeometry() : measureStepperGeometry();

    const positionActiveFills = () => {
      if (isGridStepper()) {
        positionGridFills();
      } else {
        positionStepperFills();
      }
    };

    const updateActiveState = () => {
      if (isGridStepper()) {
        updateGridState();
      } else {
        updateStepperState();
      }
    };

    const updateActiveReducedState = () => {
      if (isGridStepper()) {
        updateReducedGridState();
      } else {
        updateReducedStepperState();
      }
    };

    const handleStepperScroll = () => {
      if (stepperFrameId) {
        return;
      }

      stepperFrameId = window.requestAnimationFrame(() => {
        stepperFrameId = 0;

        if (stepperControllerActive) {
          updateActiveState();
        }
      });
    };

    const startStepperController = () => {
      if (stepperControllerActive) {
        return;
      }

      stepperGeometry = measureActiveGeometry();

      if (!stepperGeometry) {
        return;
      }

      positionActiveFills();
      stepperControllerActive = true;

      if (!stepperScrollAttached) {
        window.addEventListener("scroll", handleStepperScroll, { passive: true });
        stepperScrollAttached = true;
      }

      // Compute once on activation so reload and deep links are correct
      // without waiting for a scroll event.
      updateActiveState();
    };

    const stopStepperController = () => {
      stepperControllerActive = false;

      if (stepperScrollAttached) {
        window.removeEventListener("scroll", handleStepperScroll);
        stepperScrollAttached = false;
      }

      if (stepperFrameId) {
        window.cancelAnimationFrame(stepperFrameId);
        stepperFrameId = 0;
      }
    };

    const setupStepperController = () => {
      stepperSectionObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startStepperController();
          } else {
            stopStepperController();
          }
        });
      }, { threshold: 0 });

      stepperSectionObserver.observe(root);
      startStepperController();
    };

    const setupReducedStepper = () => {
      const ly = getReadingLine();
      const bandHeight = STEPPER_BAND_HEIGHT;

      // (a) Active-step observer: the baseline MOT-03 90 px band centred on
      // the reading line, observing the five `li` elements.
      const activeTopOffset = Math.max(0, Math.round(ly - bandHeight / 2));
      const activeBottomOffset = Math.max(
        0,
        Math.round(window.innerHeight - (ly + bandHeight / 2))
      );

      stepperReducedActiveObserver = new IntersectionObserver(() => {
        updateActiveReducedState();
      }, {
        rootMargin: `-${activeTopOffset}px 0px -${activeBottomOffset}px 0px`,
        threshold: 0
      });

      steps.forEach((step) => stepperReducedActiveObserver.observe(step));

      // (b) Traversed observer: root limited to the area from the top of the
      // viewport to the reading line, observing the visual discs at 0.5 so a
      // visual crosses exactly when its centre crosses the reading line.
      const traversedBottomOffset = Math.round(window.innerHeight - ly);

      stepperReducedTraversedObserver = new IntersectionObserver(() => {
        updateActiveReducedState();
      }, {
        rootMargin: `0px 0px -${traversedBottomOffset}px 0px`,
        threshold: 0.5
      });

      steps.forEach((step) => {
        const visual = step.querySelector(".sm-process-step__visual");

        if (visual) {
          stepperReducedTraversedObserver.observe(visual);
        }
      });

      updateActiveReducedState();
    };

    const createStepperLayers = (withMarker, fillCount) => {
      const count = fillCount == null ? Math.max(0, steps.length - 1) : fillCount;

      for (let index = 0; index < count; index += 1) {
        const fill = document.createElement("div");
        fill.className = STEPPER_FILL_CLASS;
        fill.setAttribute("aria-hidden", "true");
        stepsList.appendChild(fill);
        stepperFills.push(fill);
      }

      if (withMarker) {
        stepperMarker = document.createElement("div");
        stepperMarker.className = STEPPER_MARKER_CLASS;
        stepperMarker.setAttribute("aria-hidden", "true");
        stepperMarker.style.opacity = "0";
        stepsList.appendChild(stepperMarker);
      }
    };

    const teardownStepper = () => {
      if (stepperSectionObserver) {
        stepperSectionObserver.disconnect();
        stepperSectionObserver = null;
      }

      if (stepperReducedActiveObserver) {
        stepperReducedActiveObserver.disconnect();
        stepperReducedActiveObserver = null;
      }

      if (stepperReducedTraversedObserver) {
        stepperReducedTraversedObserver.disconnect();
        stepperReducedTraversedObserver = null;
      }

      stopStepperController();

      if (stepperMarker && stepperMarker.parentNode) {
        stepperMarker.parentNode.removeChild(stepperMarker);
      }

      stepperFills.forEach((fill) => {
        if (fill.parentNode) {
          fill.parentNode.removeChild(fill);
        }
      });

      stepperMarker = null;
      stepperFills = [];
      stepperGeometry = null;
      stepperMode = null;
      stepperLayout = null;

      steps.forEach((step) => {
        step.classList.remove("is-current");
        step.classList.remove("is-traversed");
      });
    };

    const setupStepper = () => {
      teardownStepper();

      if (!stepsList || steps.length === 0) {
        return;
      }

      const portrait = mobilePortrait.matches;
      const grid = gridLayout.matches;

      if (!portrait && !grid) {
        return;
      }

      try {
        const reduced = reduceMotion.matches;

        if (portrait) {
          stepperLayout = "portrait";
          createStepperLayers(!reduced);
          stepperGeometry = measureStepperGeometry();
        } else {
          stepperLayout = "grid";
          createStepperLayers(!reduced, GRID_FILL_COUNT);
          stepperGeometry = measureGridGeometry();
        }

        if (!stepperGeometry) {
          teardownStepper();
          return;
        }

        positionActiveFills();

        if (reduced) {
          stepperMode = "reduced";
          setupReducedStepper();
        } else {
          stepperMode = "controller";
          setupStepperController();
        }
      } catch (error) {
        teardownStepper();
      }
    };

    const remeasureStepper = () => {
      if (!stepperMode) {
        return;
      }

      stepperGeometry = measureActiveGeometry();

      if (!stepperGeometry) {
        teardownStepper();
        return;
      }

      positionActiveFills();

      if (stepperMode === "controller") {
        updateActiveState();
        return;
      }

      if (stepperReducedActiveObserver) {
        stepperReducedActiveObserver.disconnect();
        stepperReducedActiveObserver = null;
      }

      if (stepperReducedTraversedObserver) {
        stepperReducedTraversedObserver.disconnect();
        stepperReducedTraversedObserver = null;
      }

      setupReducedStepper();
    };

    const handleMobilePortraitChange = () => {
      setupStepper();
    };

    const handleGridChange = () => {
      setupStepper();
    };

    const handleReduceMotionChange = () => {
      if (mobilePortrait.matches || gridLayout.matches) {
        setupStepper();
      }
    };

    const handleResize = () => {
      remeasureStepper();
    };

    const handleLoad = () => {
      remeasureStepper();
    };

    const handleFontsReady = () => {
      remeasureStepper();
    };

    try {
      setupReveal();

      if (!reduceMotion.matches) {
        root.classList.add("is-enhanced");
      }

      setupImageSettle();
      setupStepper();

      if (stepsList && steps.some((step) => isInViewport(step))) {
        drawConnector();
      }
    } catch (error) {
      // Recover visibility if enhancement failed at any point.
      root.classList.remove("is-enhanced");
      revealTargets.forEach((target) => target.classList.add("is-revealed"));
      drawConnector();
      teardownStepper();
    }

    if (mobilePortrait.addEventListener) {
      mobilePortrait.addEventListener("change", handleMobilePortraitChange);
    } else {
      mobilePortrait.addListener(handleMobilePortraitChange);
    }

    if (gridLayout.addEventListener) {
      gridLayout.addEventListener("change", handleGridChange);
    } else {
      gridLayout.addListener(handleGridChange);
    }

    if (reduceMotion.addEventListener) {
      reduceMotion.addEventListener("change", handleReduceMotionChange);
    } else if (reduceMotion.addListener) {
      reduceMotion.addListener(handleReduceMotionChange);
    }

    window.addEventListener("resize", handleResize, { passive: true });

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad, { once: true });
    }

    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(handleFontsReady);
    }
  }
}
