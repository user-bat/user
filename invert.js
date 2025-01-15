const button = document.getElementById("toggle-theme");
const element = document.getElementById("particles");
const element_audio = document.getElementById("toggle-audio");
const element_icon_tg = document.getElementById("icon-tg")
const element_icon_gt = document.getElementById("icon-gt")
const element_icon_ds = document.getElementById("icon-ds")
const element_icon_vk = document.getElementById("icon-vk")

button.addEventListener("click", () => {
  element.classList.toggle("inverted");
  element_audio.classList.toggle("inverted")
  element_icon_tg.classList.toggle("inverted")
  element_icon_gt.classList.toggle("inverted")
  element_icon_ds.classList.toggle("inverted")
  element_icon_vk.classList.toggle("inverted")
});
