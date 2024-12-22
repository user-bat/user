let box = document.querySelector('.theme-icon');

box.addEventListener("click", function() {
  box.classList.add('theme-icon_animate_2');
});

box.addEventListener("animationend", AnimationHandler, false);

function AnimationHandler () {
  box.classList.remove('theme-icon_animate_2');
  
}