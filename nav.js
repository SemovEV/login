const nav = document.querySelector('.navigation');
const logo = document.querySelector('.logo');

logo.addEventListener('click', () => {
    nav.classList.toggle('navigation_active');
})