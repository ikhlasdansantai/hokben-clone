const hamburgerMenu = document.getElementsByClassName("hamburger-menu")[0];
const MobileNavigation = document.getElementsByClassName("nav-menus-mobile")[0];
hamburgerMenu.addEventListener("click", () => {
  MobileNavigation.classList.toggle("active");
});

document.getElementsByClassName("close-btn")[0].addEventListener("click", () => {
  MobileNavigation.classList.remove("active");
});

const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  speed: 500,
  spaceBetween: 20,
  grabCursor: true,

  autoplay: {
    delay: 4000,
  },

  pagination: {
    el: ".swiper-pagination",
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
