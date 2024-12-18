document.addEventListener("DOMContentLoaded", () => {
  init();
});

var timeInMs = 2000;

function init() {
  if (localStorage.getItem('theme')) {
    document.documentElement.classList.add("dark-theme");
  } 
  else {
    document.documentElement.classList.remove("dark-theme");
  }
}

const toggleBtn = document.querySelector("#toggle-theme");
toggleBtn.addEventListener("click", function() {
  if (document.documentElement.classList.contains("dark-theme")) {
    document.documentElement.classList.remove("dark-theme");
    localStorage.removeItem('theme');
  } else {
    document.documentElement.classList.add("dark-theme");
    localStorage.setItem('theme', 1);
  }
});
