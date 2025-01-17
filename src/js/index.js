// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';
const hamburgerButton = document.getElementById('header__hamburger');
const menuElement = document.getElementById('menu');

const toggleMenu = () => {
  menuElement.classList.toggle('menu--active');

  const isMenuActive = menuElement.classList.contains('menu--active');
  hamburgerButton.src = isMenuActive
    ? './assets/images/mobile/icon-cross.svg'
    : './assets/images/mobile/icon-hamburger.svg';
};

hamburgerButton.addEventListener('click', toggleMenu);
