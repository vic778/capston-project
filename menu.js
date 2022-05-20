const menuLink = document.querySelectorAll('.mob-link');
const checkBox = document.querySelector('.nav-checkbox');

function closeMenu() {
  checkBox.click();
}

menuLink.forEach((el) => {
  el.addEventListener('click', closeMenu);
});