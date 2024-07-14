let countdownInterval;
let totalMilliseconds = 0;
let countdownPaused = false;

function startCountdown() {
  let hours = parseInt(document.getElementById("hoursInput").value) || 0;
  let minutes = parseInt(document.getElementById("minutesInput").value) || 0;
  let seconds = parseInt(document.getElementById("secondsInput").value) || 0;

  totalMilliseconds = (hours * 3600 + minutes * 60 + seconds) * 1000;

  updateDisplay(totalMilliseconds);

  if (countdownInterval) {
    clearInterval(countdownInterval);
  }

  countdownInterval = setInterval(updateCountdown, 1000);
}

function updateCountdown() {
  if (!countdownPaused) {
    totalMilliseconds -= 1000;
    updateDisplay(totalMilliseconds);

    if (totalMilliseconds <= 0) {
      clearInterval(countdownInterval);
      document.getElementById("countdown").innerHTML = "EXPIRED";
    }
  }
}

function pauseCountdown() {
  countdownPaused = true;
}

function resumeCountdown() {
  countdownPaused = false;
}

function updateDisplay(milliseconds) {
  let hours = Math.floor(
    (milliseconds % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  let minutes = Math.floor((milliseconds % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((milliseconds % (1000 * 60)) / 1000);

  document.getElementById(
    "countdown"
  ).innerHTML = ` ${hours}h ${minutes}m ${seconds}s`;
}
