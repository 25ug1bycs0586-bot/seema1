const menuToggle = document.querySelector(".menu-toggle");
const primaryNav = document.querySelector(".primary-nav");

const setMenuOpen = (isOpen) => {
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  primaryNav.classList.toggle("is-open", isOpen);
};

menuToggle.addEventListener("click", () => {
  const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
  setMenuOpen(!isExpanded);
});

primaryNav.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    setMenuOpen(false);
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && menuToggle.getAttribute("aria-expanded") === "true") {
    setMenuOpen(false);
    menuToggle.focus();
  }
});

window.matchMedia("(min-width: 821px)").addEventListener("change", (event) => {
  if (event.matches) {
    setMenuOpen(false);
  }
});

document.querySelector("#year").textContent = String(new Date().getFullYear());
