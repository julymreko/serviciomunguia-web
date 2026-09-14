const trigger = document.querySelector("#sm-menu-trigger");
const overlay = document.querySelector("#sm-menu-overlay");

if (trigger && overlay) {
  const getFocusableElements = () =>
    Array.from(
      overlay.querySelectorAll(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      )
    );

  const openMenu = () => {
    overlay.classList.add("is-open");
    overlay.setAttribute("aria-hidden", "false");
    document.body.classList.add("sm-menu-open");

    trigger.setAttribute("aria-expanded", "true");
    trigger.setAttribute("aria-label", "Cerrar menú de navegación");

    const [firstFocusable] = getFocusableElements();

    if (firstFocusable) {
      firstFocusable.focus();
    }
  };

  const closeMenu = () => {
    overlay.classList.remove("is-open");
    overlay.setAttribute("aria-hidden", "true");
    document.body.classList.remove("sm-menu-open");

    trigger.setAttribute("aria-expanded", "false");
    trigger.setAttribute("aria-label", "Abrir menú de navegación");

    trigger.focus();
  };

  trigger.addEventListener("click", () => {
    const isOpen = trigger.getAttribute("aria-expanded") === "true";

    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (trigger.getAttribute("aria-expanded") !== "true") {
      return;
    }

    if (event.key === "Escape") {
      event.preventDefault();
      closeMenu();
      return;
    }

    if (event.key !== "Tab") {
      return;
    }

    const focusableElements = getFocusableElements();

    if (focusableElements.length === 0) {
      event.preventDefault();
      return;
    }

    const firstFocusable = focusableElements[0];
    const lastFocusable = focusableElements[focusableElements.length - 1];

    if (event.shiftKey && document.activeElement === firstFocusable) {
      event.preventDefault();
      lastFocusable.focus();
    } else if (!event.shiftKey && document.activeElement === lastFocusable) {
      event.preventDefault();
      firstFocusable.focus();
    }
  });
}
