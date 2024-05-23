const menu = document.querySelector('.mobile-menu');
const menuBtn = document.querySelector('.menu');
menuBtn.addEventListener('click', (e) => {
  if (menu.style.display === 'block') {
    menu.style.display = 'none';
  } else {
    menu.style.display = 'block';
  }
});
