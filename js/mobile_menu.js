const hamburger = document.getElementById('hamburger');
const navul = document.getElementById('navUL');

hamburger.addEventListener('click', () => {
    navul.classList.toggle('show');
});