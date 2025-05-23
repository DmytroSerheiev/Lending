function toggleDropdown() {
  const options = document.getElementById("size-options");
  options.style.display = options.style.display === "block" ? "none" : "block";
}

function selectSize(size, element) {
  // Встановити текст у головному полі
  document.getElementById("selected-size").innerText = size;

  // Скинути всі selected
  document.querySelectorAll("#size-options li").forEach((li) => {
    li.classList.remove("selected");
  });

  // Позначити активним новий елемент
  element.classList.add("selected");

  // Сховати список
  document.getElementById("size-options").style.display = "none";
}

// Автоматично виділяє активний розмір при першому завантаженні
window.addEventListener("DOMContentLoaded", function () {
  const selectedSize = document.getElementById("selected-size").innerText;
  const options = document.querySelectorAll("#size-options li");

  options.forEach((option) => {
    if (option.innerText === selectedSize) {
      option.classList.add("selected");
    }
  });
});

// Закрити список при кліку поза селектом
document.addEventListener("click", function (event) {
  const select = document.querySelector(".custom-select-wrapper");
  if (!select.contains(event.target)) {
    document.getElementById("size-options").style.display = "none";
  }
});
