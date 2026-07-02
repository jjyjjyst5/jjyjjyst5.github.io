// "Her voice" sample player: ties the waveform animation to actual audio playback.
(function () {
  const btn = document.getElementById("voice-play-btn");
  const audio = document.getElementById("voice-audio");
  const wave = document.getElementById("voice-wave");
  if (!btn || !audio || !wave) return;

  const label = btn.querySelector(".voice-play-label");
  const icon = btn.querySelector(".voice-play-icon");

  function setPlaying(playing) {
    wave.classList.toggle("wave-paused", !playing);
    btn.classList.toggle("is-playing", playing);
    icon.innerHTML = playing ? "&#10074;&#10074;" : "&#9658;";
    label.textContent = playing ? "Playing..." : "Hear her voice";
  }

  btn.addEventListener("click", () => {
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  });

  audio.addEventListener("play", () => setPlaying(true));
  audio.addEventListener("pause", () => setPlaying(false));
  audio.addEventListener("ended", () => setPlaying(false));
})();
