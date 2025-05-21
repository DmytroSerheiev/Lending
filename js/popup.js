window.addEventListener("DOMContentLoaded", () => {
  const popup = document.getElementById("fake-popup");
  const timeEl = document.getElementById("popup-time");

  function showRandomPopup() {
    // Генеруємо випадкові значення
    const minutes = Math.floor(Math.random() * 10) + 1; // 1-10 хв
    const seconds = Math.floor(Math.random() * 60) + 1; // 1-60 сек

    // Форматуємо секунди з ведучим нулем
    const formattedSeconds = seconds < 10 ? "0" + seconds : seconds;

    // Вставляємо текст
    timeEl.textContent = `${minutes} min ${formattedSeconds} sek ✔`;

    // Показуємо
    popup.classList.add("show");

    // Ховаємо через 5 секунд
    setTimeout(() => {
      popup.classList.remove("show");
    }, 5000);
  }

  // Показати перший раз через 10 секунд
  setTimeout(showRandomPopup, 10000);

  // Потім кожні 20 секунд
//   setInterval(showRandomPopup, 20000);

  // Закрити вручну
  popup.querySelector(".popup-close").addEventListener("click", () => {
    popup.classList.remove("show");
  });
});
