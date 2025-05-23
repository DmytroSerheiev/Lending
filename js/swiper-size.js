function selectPrizeImage(src, clickedImg) {
  // Змінюємо головне зображення
  const mainImg = document.querySelector(".congratulation-img img");
  if (mainImg) {
    mainImg.src = src;
  }

  // Активний клас до <li>
  document.querySelectorAll(".congratulation-product--item").forEach((item) => {
    item.classList.remove("active");
    item.style.opacity = "0.3"; // напівпрозорість
  });

  const selectedItem = clickedImg.closest(".congratulation-product--item");
  selectedItem.classList.add("active");
  selectedItem.style.opacity = "1"; // повна непрозорість
}
new Swiper(".congratulationSwiper", {
  slidesPerView: 3,
  spaceBetween: 12,
  breakpoints: {
    480: { slidesPerView: 4 },
    768: { slidesPerView: 5 },
  },
});
document.addEventListener("DOMContentLoaded", function () {
  // Знаходимо перше зображення
  const firstImage = document.querySelector(
    ".congratulation-product--item img"
  );
  if (firstImage) {
    // Викликаємо функцію вибору зображення для першого елемента
    selectPrizeImage(firstImage.src, firstImage);
  }
});