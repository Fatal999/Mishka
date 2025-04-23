/*Mobile menu*/
const burgerMenu = document.querySelector('.header__toggle');
const headerNav = document.querySelector('.header__navigation');

function toggleMobileMenu() {
  headerNav.classList.toggle('header__navigation--open');
  burgerMenu.classList.toggle('header__toggle--open');
}

burgerMenu.addEventListener('click', toggleMobileMenu)

/* Modal mobile menu */

let mobile_basket = document.querySelector('.main-nav__mobile-button');
let overlay = document.querySelector('.busket-overlay');
let add = document.querySelector('.busket-button');

mobile_basket.onclick = function () {
  overlay.classList.remove('hidden');
  list.classList.add('hidden');
}

add.onclick = function () {
  overlay.classList.add('hidden');
}

/* Modal tablet menu */

let tablet_basket = document.querySelector('.main-nav__tablet-button');

tablet_basket.onclick = function () {
  overlay.classList.remove('hidden');
  list.classList.add('hidden');
}

add.onclick = function () {
  overlay.classList.add('hidden');
}

/* Modal desktop menu */

let desktop_basket = document.querySelector('.main-nav__desktop-button');

desktop_basket.onclick = function () {
  overlay.classList.remove('hidden');
  list.classList.add('hidden');
}

add.onclick = function () {
  overlay.classList.add('hidden');
}
