
  document.addEventListener('DOMContentLoaded', function() {
    const burgerMenu = document.querySelector('.header__burgermenu');
    const mobileNavMenu = document.getElementById('mobileNavMenu');

    burgerMenu.addEventListener('click', function() {
      mobileNavMenu.classList.toggle('active');
    });
  });