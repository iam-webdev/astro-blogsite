/* ========================================
   THE GRAY JOURNAL
   Dark / Light Theme Controller
======================================== */

const themeToggle = document.querySelector("#themeToggle");
const themeIcon = document.querySelector("#themeIcon");
const themeLabel = document.querySelector("#themeLabel");

const root = document.documentElement;

/* Apply selected theme */
function applyTheme(theme) {
  root.setAttribute("data-theme", theme);

  const isDark = theme === "dark";

  themeIcon.textContent = isDark ? "☀" : "☾";
  themeLabel.textContent = isDark ? "Light Mode" : "Dark Mode";

  themeToggle.setAttribute(
    "aria-label",
    isDark ? "Switch to light theme" : "Switch to dark theme",
  );

  localStorage.setItem("blog-theme", theme);
}

/* Load saved theme or system preference */
const savedTheme = localStorage.getItem("blog-theme");

const preferredTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
  ? "dark"
  : "light";

/* Initialize theme */
applyTheme(savedTheme || preferredTheme);

/* Handle theme button click */
themeToggle.addEventListener("click", () => {
  const currentTheme = root.getAttribute("data-theme");

  const newTheme = currentTheme === "dark" ? "light" : "dark";

  applyTheme(newTheme);
});
