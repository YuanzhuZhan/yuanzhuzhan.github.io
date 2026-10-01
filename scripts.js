// All demonstrations loop silently, like GIFs. A shared pause control is optional.
const videos = [...document.querySelectorAll('.project video')];
const motionToggle = document.querySelector('#toggle-motion');
if (motionToggle && videos.length) {
  let paused = false;
  motionToggle.hidden = false;
  videos.forEach(video => { video.muted = true; });
  motionToggle.addEventListener('click', () => {
    paused = !paused;
    videos.forEach(video => {
      if (paused) video.pause();
      else video.play().catch(() => { video.controls = true; });
    });
    motionToggle.textContent = paused ? 'Play animations' : 'Pause animations';
  });
}
