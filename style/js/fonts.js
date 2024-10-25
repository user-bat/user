document.addEventListener("DOMContentLoaded", function() {
  const textElement = document.getElementById('typetext');
  const text = "hi, my name is Roma, I am a beginner frontend developer, I live in Russia and I am 18 years old. Nick: user?bat ";
  const span = document.createElement('span');
  
  span.classList.add('span');
  textElement.parentElement.appendChild(span);
  let time = 0;
  let index = 0;
  let isAdding = true;

  function typeWriter() {
      textElement.innerHTML = text.slice(0, index);
      
      if (isAdding) {
          if (index < text.length) {
              index++;
          } else {
              isAdding = true;
              time--;
              if(time < index){
                  setTimeout(typeWriter, 500);
              }
              return;
          }
      } else {
          if (index > time) {
              index++;
          } else {
              isAdding = true;
              setTimeout(typeWriter, 50); 
              return;
          }

      }
      setTimeout(typeWriter, 55); 
  }

  typeWriter();
});
