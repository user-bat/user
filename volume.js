
  var audio = document.getElementById('myAudio');
  var toggleButton = document.getElementById('toggle-audio');

 isAudioPlaying = true; 
  audio.volume=0.25;
  
  toggleButton.addEventListener('click', function() {
      if (isAudioPlaying) {
          audio.pause(); 
          toggleButton.src = "./volume_off.svg"; 
      } else {
          audio.play(); 
          toggleButton.src = "./volume_on.svg"; 
      }
      isAudioPlaying = !isAudioPlaying; 
  });