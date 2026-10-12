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

    let revealObserver = null;
    let activeObserver = null;
    let connectorDrawn = false;
    let imageSettled = false;

    const isInViewport = (element) => {
      const rect = element.getBoundingClientRect();
      return rect.top < window.innerHeight && rect.bottom > 0;
    };

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

    const clearActiveSteps = () => {
      steps.forEach((step) => step.classList.remove("is-current"));
    };

    const setupActiveStep = () => {
      clearActiveSteps();

      if (activeObserver) {
        activeObserver.disconnect();
        activeObserver = null;
      }

      // MOT-03 runs regardless of reduced motion (instantaneous emphasis).
      if (!mobilePortrait.matches || steps.length === 0) {
        return;
      }

      const bottomNav = document.querySelector(".sm-bottom-nav");
      const navHeight = bottomNav
        ? Math.round(bottomNav.getBoundingClientRect().height)
        : 0;
      const viewportHeight = window.innerHeight;

      // Detection band centered on the content area that is not occluded by
      // the fixed Bottom Navigation (measured, not invented).
      const visibleBottom = Math.max(0, viewportHeight - navHeight);
      const center = visibleBottom / 2;
      const bandHeight = 90;
      const topOffset = Math.max(0, Math.round(center - bandHeight / 2));
      const bottomOffset = Math.max(
        0,
        Math.round(viewportHeight - (center + bandHeight / 2))
      );
      const rootMargin = `-${topOffset}px 0px -${bottomOffset}px 0px`;

      const intersecting = new Set();

      activeObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            intersecting.add(entry.target);
          } else {
            intersecting.delete(entry.target);
          }
        });

        let currentStep = null;
        let currentDistance = Infinity;

        intersecting.forEach((step) => {
          const rect = step.getBoundingClientRect();
          const stepCenter = rect.top + rect.height / 2;
          const distance = Math.abs(stepCenter - center);

          if (distance < currentDistance) {
            currentDistance = distance;
            currentStep = step;
          }
        });

        steps.forEach((step) => {
          step.classList.toggle("is-current", step === currentStep);
        });
      }, {
        rootMargin,
        threshold: 0
      });

      steps.forEach((step) => activeObserver.observe(step));
    };

    const handleMobilePortraitChange = () => {
      setupActiveStep();
    };

    const handleResize = () => {
      if (mobilePortrait.matches) {
        setupActiveStep();
      }
    };

    try {
      setupReveal();

      if (!reduceMotion.matches) {
        root.classList.add("is-enhanced");
      }

      setupImageSettle();
      setupActiveStep();

      if (stepsList && steps.some((step) => isInViewport(step))) {
        drawConnector();
      }
    } catch (error) {
      // Recover visibility if enhancement failed at any point.
      root.classList.remove("is-enhanced");
      revealTargets.forEach((target) => target.classList.add("is-revealed"));
      drawConnector();
      clearActiveSteps();
    }

    if (mobilePortrait.addEventListener) {
      mobilePortrait.addEventListener("change", handleMobilePortraitChange);
    } else {
      mobilePortrait.addListener(handleMobilePortraitChange);
    }

    window.addEventListener("resize", handleResize, { passive: true });
  }
}
