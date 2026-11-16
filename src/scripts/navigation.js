/* ======================================
   RESPONSIVE MOBILE NAVIGATION
====================================== */

document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.getElementById("navToggle");
  const navMenu = document.getElementById("primary-navigation");
  const navLinks = document.querySelectorAll(".nav-link");

  if (!navToggle || !navMenu) return;

  // OPEN AND CLOSE NAVIGATION
  navToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("is-open");

    navToggle.classList.toggle("active", isOpen);

    navToggle.setAttribute("aria-expanded", String(isOpen));

    navToggle.setAttribute(
      "aria-label",
      isOpen ? "Close navigation menu" : "Open navigation menu",
    );
  });

  // CLOSE MENU WHEN A LINK IS CLICKED
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      closeMenu();
    });
  });

  // CLOSE MENU WHEN CLICKING OUTSIDE
  document.addEventListener("click", (event) => {
    if (!navMenu.contains(event.target) && !navToggle.contains(event.target)) {
      closeMenu();
    }
  });

  // CLOSE MENU USING ESCAPE KEY
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
    }
  });

  // REUSABLE CLOSE FUNCTION
  function closeMenu() {
    navMenu.classList.remove("is-open");
    navToggle.classList.remove("active");

    navToggle.setAttribute("aria-expanded", "false");

    navToggle.setAttribute("aria-label", "Open navigation menu");
  }
});
