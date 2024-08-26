$(document).ready(function () {
  // Look for .hamburger
  const hamburger = document.querySelector(".hamburger");
  const hamburgerMenu = document.querySelector("div#navigation");
  // On click
  hamburger.addEventListener("click", function () {
    // Toggle class "is-active"
    hamburger.classList.toggle("is-active");
    // Do something else, like open/close menu
    // hamburgerMenu.classList.toggle("hamburger-hidden");
    hamburgerMenu.classList.toggle("hamburger-show");
  });
  $(".multiple-items").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    prevArrow: '<button type="button" class="slick-prev">Previous</button>',
    nextArrow: '<button type="button" class="slick-next">Next</button>',
  });
});
