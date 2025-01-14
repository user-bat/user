const button = document.getElementById("toggle-theme");
const element = document.getElementById("particles");
const element_eye = document.getElementById("toggle-eye");

button.addEventListener("click", () => {
  element.classList.toggle("inverted");
  element_eye.classList.toggle("inverted")
});
