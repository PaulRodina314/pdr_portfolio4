const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

themeToggle.addEventListener("click", () => {
  if (body.getAttribute("data-theme") === "dark") {
    body.removeAttribute("data-theme");
    themeToggle.textContent = "Toggle Dark Mode";
  } else {
    body.setAttribute("data-theme", "dark");
    themeToggle.textContent = "Toggle Light Mode";
  }
});-1.js