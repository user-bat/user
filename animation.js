let box = document.querySelector('.theme-icon');

box.addEventListener("click", function() {
  box.classList.add('theme-icon_animate_2');
});

// Отслеживаем окончание анимации
box.addEventListener("animationend", AnimationHandler, false);

function AnimationHandler () {
  // Удаляем класс с анимацией
  box.classList.remove('theme-icon_animate_2');
  
}