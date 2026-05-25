const sidebar = document.querySelector(".sidebar");
const toggleBtn = document.querySelector(".sidebar-toggle");
const toggleImg = toggleBtn.querySelector("img");

toggleBtn.addEventListener("click", () => {
  const expanded = sidebar.classList.toggle("expanded");
  toggleImg.src = expanded
    ? "/img/panel-right-close.svg"
    : "/img/panel-right-open.svg";
});
