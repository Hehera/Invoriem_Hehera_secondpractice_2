$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    items: 3,

    // це ми добавили адаптив,шоб одна картинка на тел показувалась
    responsive: {
      // breakpoint from 0 up
      0: {
        items: 1,
        margin: 32,
        loop: true,
        // stagePadding: 90,
      },
      // breakpoint from 480 up
      601: {
        items: 2,
        dots: false,
      },
      // breakpoint from 768 up
      1001: {
        items: 3,
        margin: 48,
      },
    },
  });
});

// video
var videoBtn = document.querySelector("#video-btn");
var videoPicture = document.querySelector(".video__picture");
// 2)ми зробили що при натискані покриття забирається і відео стає яскравим
var videoWrapper = document.querySelector(".video");
// 3)Відтворення безпосередньо самого відео(також важливо зробити,щоб воно зупинялося)
var video = document.querySelector("#video-file");

// тепер на кнопку вішаємо клік
// videoBtn.addEventListener("click", function () {
//   // Добавляємо класс none
//   videoPicture.classList.add("none");
//   videoWrapper.classList.remove("video-overlay");
//   // 4)забираємо кнопку при відтворенні
//   videoBtn.classList.add("none");
//   if (video.paused) {
//     video.play();
//   }
// });

// 5)щоб ставилася пауза
videoWrapper.addEventListener("click", function () {
  if (video.paused) {
    videoPicture.classList.add("hidden");
    videoWrapper.classList.remove("video-overlay");
    videoBtn.classList.add("none");
    video.play();
    // 6)показати over-lay і кнопку,коли пауза ставиться
  } else {
    // 7)щоб превью додавалося(за бажанням)
    // videoPicture.classList.remove("none");
    videoWrapper.classList.add("video-overlay");
    videoBtn.classList.remove("none");

    video.pause();
  }
});

// 8) відтворення відео по всьому екрані а не тільки на кнопці

// mobile nav

var OpenNavbtn = document.querySelector("#openMobileNav");
var closeNavbtn = document.querySelector("#closeMobileNav");
var mobileNav = document.querySelector("#mobileNav");

openNavbtn.onclick = function () {
  mobileNav.classList.remove("none");
  document.body.classList.add("no-scroll");
};

closeNavbtn.onclick = function () {
  mobileNav.classList.add("none");
  document.body.classList.remove("no-scroll");
};
