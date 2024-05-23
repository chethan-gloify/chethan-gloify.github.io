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
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 2,
  slidesToScroll: 3,
  adaptiveHeight: true,
  // prevArrow: "<span class='slick-prev'>&lt;</span>",
  // nextArrow: "<span class='slick-next'>&gt;</span>",
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
