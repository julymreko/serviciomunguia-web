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

    let revealObserver = null;
    let connectorDrawn = false;
    let imageSettled = false;

    let stepperMode = null;
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

    const handleStepperScroll = () => {
      if (stepperFrameId) {
        return;
      }

      stepperFrameId = window.requestAnimationFrame(() => {
        stepperFrameId = 0;

        if (stepperControllerActive) {
          updateStepperState();
        }
      });
    };

    const startStepperController = () => {
      if (stepperControllerActive) {
        return;
      }

      stepperGeometry = measureStepperGeometry();

      if (!stepperGeometry) {
        return;
      }

      positionStepperFills();
      stepperControllerActive = true;

      if (!stepperScrollAttached) {
        window.addEventListener("scroll", handleStepperScroll, { passive: true });
        stepperScrollAttached = true;
      }

      // Compute once on activation so reload and deep links are correct
      // without waiting for a scroll event.
      updateStepperState();
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
        updateReducedStepperState();
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
        updateReducedStepperState();
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

      updateReducedStepperState();
    };

    const createStepperLayers = (withMarker) => {
      const fillCount = Math.max(0, steps.length - 1);

      for (let index = 0; index < fillCount; index += 1) {
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

      steps.forEach((step) => {
        step.classList.remove("is-current");
        step.classList.remove("is-traversed");
      });
    };

    const setupStepper = () => {
      teardownStepper();

      if (!mobilePortrait.matches || !stepsList || steps.length === 0) {
        return;
      }

      try {
        const reduced = reduceMotion.matches;

        createStepperLayers(!reduced);
        stepperGeometry = measureStepperGeometry();

        if (!stepperGeometry) {
          teardownStepper();
          return;
        }

        positionStepperFills();

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

      stepperGeometry = measureStepperGeometry();

      if (!stepperGeometry) {
        teardownStepper();
        return;
      }

      positionStepperFills();

      if (stepperMode === "controller") {
        updateStepperState();
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

    const handleReduceMotionChange = () => {
      if (mobilePortrait.matches) {
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
