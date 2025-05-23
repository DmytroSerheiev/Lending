let totalSeconds = 2 * 60;

const countdownEl = document.getElementById("countdown");

function updateCountdown() {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  const formattedTime = `${minutes} minuto${minutes !== 1 ? "s" : ""}  ${
    seconds < 10 ? "0" : ""
  }${seconds} segundo${seconds !== 1 ? "s" : ""}`;

  countdownEl.innerText = formattedTime;

  if (totalSeconds > 2) {
    totalSeconds--;
  } else {
    clearInterval(timerInterval);
    countdownEl.innerText = "0 minutos y 02 segundos";
  }
}

updateCountdown();
const timerInterval = setInterval(updateCountdown, 1000);