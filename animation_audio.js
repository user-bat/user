let box = document.querySelector('.audio-icon');

box.addEventListener("click", function() {
  box.classList.add('audio-icon_animate_2');
});

box.addEventListener("animationend", AnimationHandler, false);

function AnimationHandler () {
  box.classList.remove('audio-icon_animate_2');
  
}