const menuTlacitko = document.querySelector('#menu-tlacitko');
const menuPolozky = document.querySelector('#menu-polozky');
const ikonka = menuTlacitko.querySelector('i');

menuTlacitko.addEventListener('click', () => {
  menuPolozky.classList.toggle('show');
  ikonka.classList.toggle('fa-bars');
  ikonka.classList.toggle('fa-xmark');
});