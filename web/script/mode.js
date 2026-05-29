const toggle = document.getElementById("theme-toggle");

const savedTheme = sessionStorage.getItem("theme") || "dark";
document.documentElement.classList.add(savedTheme);

toggle.addEventListener("click", () => {
  const isDark = document.documentElement.classList.contains("dark");
  const newTheme = isDark ? "light" : "dark";

  document.documentElement.classList.replace(
    isDark ? "dark" : "light",
    newTheme,
  );
  sessionStorage.setItem("theme", newTheme);
});
