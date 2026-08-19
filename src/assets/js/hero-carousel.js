const heroCarousel = document.querySelector(".sm-hero__carousel");

if (heroCarousel) {
  const loadCarousel = async () => {
    const [
      { default: Swiper },
      { default: Autoplay },
      { default: Pagination },
      { default: EffectCoverflow },
      { default: A11y }
    ] = await Promise.all([
      import("/assets/js/vendor/swiper/swiper.min.mjs"),
      import("/assets/js/vendor/swiper/modules/autoplay.min.mjs"),
      import("/assets/js/vendor/swiper/modules/pagination.min.mjs"),
      import("/assets/js/vendor/swiper/modules/effect-coverflow.min.mjs"),
      import("/assets/js/vendor/swiper/modules/a11y.min.mjs")
    ]);

    heroCarousel.classList.add("swiper");

    const slides = heroCarousel.querySelector(".sm-hero__slides");
    const pagination = heroCarousel.querySelector(".sm-hero__pagination");
    const autoplayToggle = heroCarousel.querySelector(".sm-hero__autoplay-toggle");
    const autoplayIcon = heroCarousel.querySelector(".sm-hero__autoplay-icon");
    const heroTitle = document.querySelector("#sm-hero-slide-title");

    const slideTitles = [
      "¿Cómo trabajamos?",
      "Servicios",
      "Cobertura",
      "Marcas",
      "Contacto"
    ];

    slides?.classList.add("swiper-wrapper");

    heroCarousel
      .querySelectorAll(".sm-hero__slide")
      .forEach((slide) => slide.classList.add("swiper-slide"));

    if (pagination) {
      pagination.classList.add("swiper-pagination");
    }

    const swiper = new Swiper(heroCarousel, {
      modules: [Autoplay, Pagination, EffectCoverflow, A11y],
      effect: "coverflow",
      speed: 900,
      loop: true,
      centeredSlides: true,
      slidesPerView: 2,
      slidesPerGroup: 1,
      spaceBetween: 2,
      watchSlidesProgress: true,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
        stopOnLastSlide: false,
        pauseOnMouseEnter: false
      },
      pagination: {
        el: pagination,
        clickable: true
      },
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        scale: 1,
        modifier: 1,
        slideShadows: true,
        transformEl: null
      },
      a11y: {
        enabled: true
      },
      breakpoints: {
        1: {
          slidesPerView: 1,
          slidesPerGroup: 1
        },
        768: {
          slidesPerView: 2,
          slidesPerGroup: 1
        },
        992: {
          slidesPerView: 2,
          slidesPerGroup: 1
        }
      }
    });

    const updateTitle = () => {
      if (!heroTitle) {
        return;
      }

      heroTitle.textContent =
        slideTitles[swiper.realIndex] || slideTitles[0];
    };

    const setAutoplayState = (paused) => {
      autoplayToggle?.setAttribute("aria-pressed", String(paused));
      autoplayToggle?.setAttribute(
        "aria-label",
        paused ? "Reanudar carrusel" : "Pausar carrusel"
      );

      if (autoplayIcon) {
        autoplayIcon.textContent = paused ? "▶" : "Ⅱ";
      }
    };

    autoplayToggle?.addEventListener("click", () => {
      if (swiper.autoplay.running) {
        swiper.autoplay.stop();
        setAutoplayState(true);
      } else {
        swiper.autoplay.start();
        setAutoplayState(false);
      }
    });

    swiper.on("slideChange", updateTitle);

    swiper.on("autoplayTimeLeft", (_swiper, timeLeft, percentage) => {
      if (!autoplayToggle) {
        return;
      }

      const progress = Math.max(0, Math.min(1, 1 - percentage));
      autoplayToggle.style.setProperty(
        "--sm-autoplay-progress",
        `${progress * 100}%`
      );
    });

    updateTitle();
    setAutoplayState(false);
    heroCarousel.classList.add("is-swiper-ready");

    const finePointer = window.matchMedia(
      "(hover: hover) and (pointer: fine)"
    );

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    const aspa = heroCarousel.querySelector(".sm-hero__aspa");
    const coarsePointer = window.matchMedia(
      "(hover: none), (pointer: coarse)"
    );

    if (aspa && !reducedMotion.matches) {
      const revealSlides = heroCarousel.querySelectorAll(".sm-hero__slide");

      revealSlides.forEach((slide) => {
        const image = slide.querySelector("img");

        if (image) {
          slide.style.setProperty(
            "--sm-reveal-image",
            `url("${image.getAttribute("src")}")`
          );
        }
      });

      const createFoamFactory = (minInterval, minDistance) => {
        let lastFoamAt = 0;
        let lastFoamX = 0;
        let lastFoamY = 0;

        return (clientX, clientY) => {
          const now = performance.now();
          const dx = clientX - lastFoamX;
          const dy = clientY - lastFoamY;
          const distance = Math.hypot(dx, dy);

          if (
            now - lastFoamAt < minInterval ||
            distance < minDistance
          ) {
            return;
          }

          const rect = heroCarousel.getBoundingClientRect();
          const foam = document.createElement("span");

          foam.className = "sm-hero__foam";
          foam.setAttribute("aria-hidden", "true");
          foam.style.left = `${clientX - rect.left}px`;
          foam.style.top = `${clientY - rect.top}px`;

          heroCarousel.appendChild(foam);

          foam.addEventListener(
            "animationend",
            () => foam.remove(),
            { once: true }
          );

          lastFoamAt = now;
          lastFoamX = clientX;
          lastFoamY = clientY;
        };
      };

      const setRevealPosition = (clientX, clientY) => {
        revealSlides.forEach((slide) => {
          const slideRect = slide.getBoundingClientRect();

          slide.style.setProperty(
            "--sm-reveal-x",
            `${clientX - slideRect.left}px`
          );

          slide.style.setProperty(
            "--sm-reveal-y",
            `${clientY - slideRect.top}px`
          );
        });
      };

      const rotateAspa = (step) => {
        const currentRotation =
          Number.parseFloat(
            aspa.style.getPropertyValue("--sm-aspa-rotation")
          ) || 0;

        aspa.style.setProperty(
          "--sm-aspa-rotation",
          `${currentRotation + step}deg`
        );
      };

      if (coarsePointer.matches) {
        const createFoam = createFoamFactory(90, 12);
        let frame = 0;

        const renderTouchIdle = (now) => {
          const rect = heroCarousel.getBoundingClientRect();
          const t = now / 1700;

          const x =
            rect.left +
            rect.width * (
              0.5 +
              Math.sin(t * 0.83) * 0.24 +
              Math.sin(t * 1.71) * 0.08
            );

          const y =
            rect.top +
            rect.height * (
              0.5 +
              Math.cos(t * 1.07) * 0.22 +
              Math.sin(t * 1.49) * 0.07
            );

          aspa.style.left = `${x - rect.left}px`;
          aspa.style.top = `${y - rect.top}px`;

          setRevealPosition(x, y);
          rotateAspa(2.5);
          createFoam(x, y);

          frame = requestAnimationFrame(renderTouchIdle);
        };

        frame = requestAnimationFrame(renderTouchIdle);
      }

      if (finePointer.matches) {
        const createFoam = createFoamFactory(55, 10);

        let frame = 0;
        let pointerX = 0;
        let pointerY = 0;
        let revealX = 0;
        let revealY = 0;
        let targetRevealX = 0;
        let targetRevealY = 0;
        let lastPointerMove = performance.now();
        let idleStartX = 0;
        let idleStartY = 0;
        let wasIdle = false;

        const renderPointer = () => {
          const rect = heroCarousel.getBoundingClientRect();
          const now = performance.now();
          const idleFor = now - lastPointerMove;
          const isIdle = idleFor > 1200;

          let aspaX = pointerX;
          let aspaY = pointerY;

          if (isIdle) {
            if (!wasIdle) {
              idleStartX = pointerX;
              idleStartY = pointerY;
              wasIdle = true;
            }

            const idleElapsed = idleFor - 1200;
            const blend = Math.min(1, idleElapsed / 700);
            const easedBlend = blend * blend * (3 - 2 * blend);
            const t = now / 1700;

            const autoX =
              rect.left +
              rect.width * (
                0.5 +
                Math.sin(t * 0.83) * 0.24 +
                Math.sin(t * 1.71) * 0.08
              );

            const autoY =
              rect.top +
              rect.height * (
                0.5 +
                Math.cos(t * 1.07) * 0.22 +
                Math.sin(t * 1.49) * 0.07
              );

            aspaX =
              idleStartX + (autoX - idleStartX) * easedBlend;

            aspaY =
              idleStartY + (autoY - idleStartY) * easedBlend;

            targetRevealX = aspaX;
            targetRevealY = aspaY;

            createFoam(aspaX, aspaY);
          } else {
            wasIdle = false;
          }

          revealX += (targetRevealX - revealX) * 0.18;
          revealY += (targetRevealY - revealY) * 0.18;

          setRevealPosition(revealX, revealY);

          aspa.style.left = `${aspaX - rect.left}px`;
          aspa.style.top = `${aspaY - rect.top}px`;

          rotateAspa(6);

          frame = requestAnimationFrame(renderPointer);
        };

        const handlePointerMove = (event) => {
          pointerX = event.clientX;
          pointerY = event.clientY;
          targetRevealX = event.clientX;
          targetRevealY = event.clientY;
          lastPointerMove = performance.now();

          createFoam(event.clientX, event.clientY);

          if (!revealX && !revealY) {
            revealX = event.clientX;
            revealY = event.clientY;
          }

          heroCarousel.classList.add("is-pointer-active");

          if (!frame) {
            frame = requestAnimationFrame(renderPointer);
          }
        };

        const handlePointerLeave = () => {
          heroCarousel.classList.remove("is-pointer-active");

          if (frame) {
            cancelAnimationFrame(frame);
            frame = 0;
          }

          wasIdle = false;

          heroCarousel
            .querySelectorAll(".sm-hero__foam")
            .forEach((foam) => foam.remove());

          revealSlides.forEach((slide) => {
            slide.style.setProperty("--sm-reveal-x", "50%");
            slide.style.setProperty("--sm-reveal-y", "50%");
          });
        };

        heroCarousel.addEventListener(
          "pointermove",
          handlePointerMove
        );

        heroCarousel.addEventListener(
          "pointerleave",
          handlePointerLeave
        );
      }
    }
  };

  const observer = new IntersectionObserver(
    (entries) => {
      if (!entries.some((entry) => entry.isIntersecting)) {
        return;
      }

      observer.disconnect();
      loadCarousel();
    },
    {
      rootMargin: "300px 0px"
    }
  );

  observer.observe(heroCarousel);
}