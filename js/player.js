const audio = document.getElementById("audio");
const playBtn = document.querySelector(".play-btn");
const progressBar = document.querySelector(".progress-bar");
const progress = document.querySelector(".progress");

window.addEventListener("load", () => {
  if (!audio.paused) {
    playBtn.textContent = "⏸";
  }
});

playBtn.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    playBtn.textContent = "⏸";
  } else {
    audio.pause();
    playBtn.textContent = "▶";
  }
});

audio.addEventListener("timeupdate", () => {
  const percentage = (audio.currentTime / audio.duration) * 100;
  progress.style.width = percentage + "%";
});

progressBar.addEventListener("click", (e) => {
  const clickX = e.offsetX;
  const width = progressBar.clientWidth;
  const duration = audio.duration;
  audio.currentTime = (clickX / width) * duration;
});
