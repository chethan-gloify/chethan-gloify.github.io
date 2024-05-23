const menu = document.querySelector('.mobile-menu');
const menuBtn = document.querySelector('.menu');
menuBtn.addEventListener('click', (e) => {
  if (menu.style.display === 'block') {
    menu.style.display = 'none';
  } else {
    menu.style.display = 'block';
  }
});

$('#slick').slick({
  autoplay: true,
  autoplaySpeed: 4000,
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 2,
  slidesToScroll: 3,
  adaptiveHeight: true,
  arrows: false,

  // prevArrow: "<span class='slick-prev'>&lt;</span>",
  // nextArrow: "<span class='slick-next'>&gt;</span>",
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: false,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        centerMode: true,
        variableWidth: true,
      },
    },
  ],
});
