console.log("Welcome to my bio page");

document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('enter-btn');
  const splash = document.getElementById('splash');
  const content = document.querySelector('.content');
  const audioElement = document.querySelector('.music-player audio');

  btn.addEventListener('click', () => {
    // Fade out splash
    splash.style.opacity = '0';
    setTimeout(() => {
      splash.style.display = 'none';
      content.style.display = 'block';
    }, 500);

    // Play music with fade-in
    if (audioElement) {
      // Create AudioContext for smooth volume control
      const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      const track = audioCtx.createMediaElementSource(audioElement);
      const gainNode = audioCtx.createGain();
      track.connect(gainNode).connect(audioCtx.destination);

      gainNode.gain.setValueAtTime(0, audioCtx.currentTime); // start at 0 volume
      audioElement.play();

      // Fade in over 3 seconds
      gainNode.gain.linearRampToValueAtTime(1, audioCtx.currentTime + 3);
    }
  });
});
