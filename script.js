const root = document.documentElement;
const toggle = document.getElementById("themeToggle");

const savedTheme = localStorage.getItem("theme");
const systemPrefersDark = window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches;

if (savedTheme) {
  root.dataset.theme = savedTheme;
} else if (systemPrefersDark) {
  root.dataset.theme = "dark";
}

function currentTheme() {
  return root.dataset.theme === "dark" ? "dark" : "light";
}

function updateToggleLabel() {
  const mode = currentTheme();
  toggle?.setAttribute("aria-label", `Switch to ${mode === "dark" ? "light" : "dark"} mode`);
}

updateToggleLabel();

toggle?.addEventListener("click", () => {
  const next = currentTheme() === "dark" ? "light" : "dark";
  root.dataset.theme = next;
  localStorage.setItem("theme", next);
  updateToggleLabel();
});
