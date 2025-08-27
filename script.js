console.log("Welcome to my bio page");

document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('enter-btn');
  const splash = document.getElementById('splash');
  const content = document.querySelector('.content');
  const audioElement = document.getElementById('bg-music');

  btn.addEventListener('click', () => {
    // Fade out splash screen
    splash.style.opacity = '0';

    setTimeout(() => {
      splash.style.display = 'none';
      content.style.display = 'block';

      // Play background music after user gesture
      if (audioElement) {
        audioElement.muted = false; // unmute
        audioElement.play()
          .then(() => console.log("Audio playing"))
          .catch(err => console.log("Playback blocked:", err));
      }

    }, 500); // matches the CSS transition
  });
});
