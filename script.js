console.log("Welcome to my bio page");

document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('enter-btn');
  const splash = document.getElementById('splash');
  const content = document.querySelector('.content');
  const audioElement = document.getElementById('bg-music');

  btn.addEventListener('click', async () => {
    // Fade out splash screen
    splash.style.opacity = '0';
    setTimeout(() => {
      splash.style.display = 'none';
      content.style.display = 'block';
    }, 500);

    if (audioElement) {
      // Create AudioContext for fade-in
      const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      await audioCtx.resume(); // required to start audio after user interaction

      const track = audioCtx.createMediaElementSource(audioElement);
      const gainNode = audioCtx.createGain();
      track.connect(gainNode).connect(audioCtx.destination);

      gainNode.gain.setValueAtTime(0, audioCtx.currentTime); // start muted
      audioElement.play().catch(err => console.log("Playback blocked:", err));

      // Fade in over 3 seconds
      gainNode.gain.linearRampToValueAtTime(1, audioCtx.currentTime + 3);
    }
  });
});
