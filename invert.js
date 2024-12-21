const button = document.getElementById("toggle-theme");
const element = document.getElementById("particles");

button.addEventListener("click", () => {
  element.classList.toggle("inverted");
});
