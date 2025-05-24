$(document).ready(function () {
  // Slider
  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 14,
    slidesPerView: 3,
    freeMode: true,
    watchSlidesProgress: true,
  });
  var swiper2 = new Swiper(".mySwiper2", {
    spaceBetween: 14,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiper,
    },
  });

  $("#formComments").on("submit", function (e) {
    e.preventDefault();

    var commentText = $('input[name="comments"]').val();

    if (commentText.trim() !== "") {
      var newComment = `
                <li class="comments-item">
                    <div class="comments-item--img">
                        <img src="images/comment-ico.svg" alt="account">
                    </div>
                    <div class="comments-union">
                        <div class="comments-middle">
                            <h3>Użytkownik</h3>
                            <p>${commentText}</p>
                        </div>
                        <div class="comments-bottom">
                            <div class="comments-bottom--left">
                                <span>Teraz</span>
                                <span>Jak</span>
                                <span>Odpowiedz</span>
                            </div>
                            <div class="comments-bottom--right">
                                <ul class="comments-likes--list">
                                    <li class="comments-likes--item">
                                        <img src="images/liked.svg" alt="liked">
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </li>
            `;

      $(".comments-list").prepend(newComment);
      $('input[name="comments"]').val("");
    }
  });

  $(".congratulation-product--item").on("click", function () {
    $(".congratulation-product--item").removeClass("active");
    $(this).addClass("active");
    var imgSrc = $(this).find("img").attr("src");
    $(".basket-middle--img img").attr("src", imgSrc);
  });

  $(".congratulation-size--item").on("click", function () {
    $(".congratulation-size--item").removeClass("active");
    $(this).addClass("active");
  });

  // Steps
  $(".js-btn--next").on("click", function () {
    setTimeout(function () {
      $(".step-item.step-active")
        .removeClass("step-active")
        .next()
        .addClass("step-active");
    }, 400);
  });

  $(".js-question").on("click", function () {
    $(".question-item--second")
      .not($(this).find(".question-item--second"))
      .slideUp();
    $(this).find(".question-item--second").slideToggle();
  });

  $(".js-question--btn").on("click", function () {
    $("#question-block").fadeIn(200);
  });

  $(".js-question--close").on("click", function () {
    $("#question-block").fadeOut(200);
  });

  $(".js-btn--final").on("click", function () {
    $("#loading-block").fadeIn(200);

    setTimeout(function () {
      $(".main-block").fadeOut(200);
      $(".boxes-block").fadeIn(200);
    }, 2000);
    setTimeout(function () {
      $("#loading-block").fadeOut(200);
      $("#congrats-block").fadeIn(200);
      $(".main-block").fadeOut(200);
      $(".boxes-block").fadeIn(200);
    }, 2400);
  });

  $(".js-play--box").on("click", function () {
    $("#congrats-block").fadeOut(200);
  });

  $(".js-win--off").on("click", function () {
    $("#winoff-block").fadeOut(200);
  });

  $(".js-congratulation").on("click", function () {
    $(".congratulation-block").fadeOut(200);
    $(".basket-block").fadeIn(200);
  });

  // Box cards

  $(".boxes__item").on("click", function () {
    if ($(this).hasClass("abierta")) return;

    $("#boxes").addClass("noevents");

    if (!$(".boxes__item.abierta").length) {
      $(this).addClass("abierta");

      setTimeout(function () {
        $("#winoff-block").fadeIn(200);
        $("#boxes").removeClass("noevents");
      }, 2000);

      return;
    }

    $(this).addClass("abierta premiazo");

    setTimeout(function () {
      $(".boxes__main-prize").fadeIn();
      setTimeout(function () {
        $(".boxes-block").hide();
      }, 1400);
      setTimeout(function () {
        $(".congratulation-block").fadeIn(200);
        $("#boxes").removeClass("noevents");
      }, 1500);
    }, 2000);
  });

  function addParamToUrl(url, key, value) {
    var baseUrl = url.split("?")[0];
    var queryString = url.split("?")[1] || "";
    var params = new URLSearchParams(queryString);

    params.set(key, value);

    return baseUrl + "?" + params.toString();
  }

  $.validator.addMethod(
    "validPhone",
    function (value, element) {
      return this.optional(element) || /^(\+)?[0-9]{1,15}$/.test(value);
    },
    "Proszę wpisać prawidłowy numer telefonu"
  );

  $("#formRegister").validate({
    rules: {
      username: {
        required: true,
        minlength: 2,
      },
      lastname: {
        required: true,
        minlength: 4,
      },
      address: {
        required: true,
      },
      city: {
        required: true,
      },
      state: {
        required: true,
      },
      zip: {
        required: true,
      },
      phone: {
        required: true,
        validPhone: true,
      },
      email: {
        required: true,
        email: true,
      },
      checks: {
        required: true,
      },
    },
    messages: {
      username: {
        required: "Proszę wpisać swoje imię",
        minlength: "Więcej niż 4 znaki",
      },
      lastname: {
        required: "Proszę podać swoje nazwisko",
        minlength: "Więcej niż 4 znaki",
      },
      address: {
        required: "Proszę wpisać swój adres",
      },
      city: {
        required: "Proszę wpisać swoje miasto",
      },
      state: {
        required: "Proszę wpisać swój stan",
      },
      zip: {
        required: "Proszę wpisać swój zip",
      },
      phone: {
        required: "Proszę podać swój numer telefonu",
        validPhone: "Proszę wpisać prawidłowy numer telefonu",
      },
      email: {
        required: "Proszę wpisać swój adres e-mail",
        email: "Proszę wpisać prawidłowy adres e-mail",
      },
      },
    submitHandler: function (form) {
let currentUrl = $(".btn-final").attr("href");

let currentUrlWithParams = addParamToUrl(
  currentUrl,
  "aff_unique1",
  username.value
);
currentUrlWithParams = addParamToUrl(
  currentUrlWithParams,
  "aff_unique2",
  lastname.value
);
currentUrlWithParams = addParamToUrl(
  currentUrlWithParams,
  "aff_unique3",
  state.value
);
currentUrlWithParams = addParamToUrl(
  currentUrlWithParams,
  "aff_unique4",
  zip.value
);
currentUrlWithParams = addParamToUrl(
  currentUrlWithParams,
  "aff_unique5",
  city.value
);
currentUrlWithParams = addParamToUrl(
  currentUrlWithParams,
  "aff_sub3",
  address.value
);
currentUrlWithParams = addParamToUrl(
  currentUrlWithParams,
  "aff_sub4",
  email.value
);
currentUrlWithParams = addParamToUrl(
  currentUrlWithParams,
  "adv_sub",
  phone.value
);

$(".btn-final").attr("href", currentUrlWithParams);

setTimeout(function () {
  window.location.href = $(".btn-final").attr("href");
}, 600);
      },
  });
});
//   ==================
function selectPrizeImage(src, el) {
  $(".congratulation-product--item").removeClass("active");
  $(el).addClass("active");
  $(".basket-middle--img img").attr("src", src);
}

function toggleDropdown() {
  $("#size-options").slideToggle(200);
}

function selectSize(size, el) {
  $("#selected-size").text(size);
  $(".custom-options li").removeClass("selected");
  $(el).addClass("selected");
  $("#size-options").slideUp(200);
}

$(".js-congratulation").on("click", function () {
  const selectedImage = $(".congratulation-product--item.active img").attr(
    "src"
  );
  const selectedSize = $("#selected-size").text();

  // Зберігаємо у localStorage
  localStorage.setItem("selectedImage", selectedImage);
  localStorage.setItem("selectedSize", selectedSize);

  $(".congratulation-block").fadeOut(200);
  $(".basket-block").fadeIn(200);
});

// При завантаженні сторінки корзини
const image = localStorage.getItem("selectedImage");
const size = localStorage.getItem("selectedSize");

if (image) {
  $(".basket-middle--img img").attr("src", image); // Картинка у формі
}

if (size) {
  const labelSize = $("<p>")
    .text(`Taille: ${size}`)
    .addClass("basket-middle--text");
  $(".basket-middle--top").append(labelSize); // Додаємо розмір у форму
}
