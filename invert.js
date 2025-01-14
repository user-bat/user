const button = document.getElementById("toggle-theme");
const element = document.getElementById("particles");
const element_audio = document.getElementById("toggle-audio");

button.addEventListener("click", () => {
  element.classList.toggle("inverted");
  element_audio.classList.toggle("inverted")
});
