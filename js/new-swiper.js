// Ініціалізація Swiper з превʼю
const mainSwiper = new Swiper(".mySwiper2", {
  spaceBetween: 10,
  thumbs: {
    swiper: new Swiper(".mySwiper", {
      spaceBetween: 10,
      slidesPerView: 4,
      watchSlidesProgress: true,
    }),
  },
});

const congratulationImg = document.querySelector(".congratulation-img img");
const boxesPrizeImgs = document.querySelectorAll(".boxes__prize img");

function updateSelectedImageEverywhere() {
  const activeSlide = mainSwiper.slides[mainSwiper.activeIndex];
  const selectedImg = activeSlide.querySelector("img");

  if (selectedImg) {
    const newSrc = selectedImg.src;

    // Поставити картинку у блок привітання
    if (congratulationImg) {
      congratulationImg.src = newSrc;
    }

    // Поставити картинку у всі коробки (призи)
    boxesPrizeImgs.forEach((img) => {
      img.src = newSrc;
    });
  }
}

// Одразу при завантаженні
updateSelectedImageEverywhere();

// При зміні слайду
mainSwiper.on("slideChange", updateSelectedImageEverywhere);
