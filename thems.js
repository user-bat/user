document.addEventListener("DOMContentLoaded", () => {
  init();
});

var timeInMs = 2000;

function init() {
  const themeIcon = document.getElementById("toggle-theme");
  
  if (localStorage.getItem('theme')) {
    document.documentElement.classList.add("dark-theme");
    themeIcon.src = "moon.svg";
  } else {
    document.documentElement.classList.remove("dark-theme");
    themeIcon.src = "sun.svg";
  }
}

const toggleBtn = document.querySelector("#toggle-theme");
toggleBtn.addEventListener("click", function() {
  const themeIcon = document.getElementById("toggle-theme");
  
  if (document.documentElement.classList.contains("dark-theme")) {
    document.documentElement.classList.remove("dark-theme");
    localStorage.removeItem('theme');
    themeIcon.src = "sun.svg";  // Изменяем на солнце
  } else {
    document.documentElement.classList.add("dark-theme");
    localStorage.setItem('theme', 1);
    themeIcon.src = "moon.svg";  // Изменяем на луне
  }
});
