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
        pauseOnMouseEnter: true
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