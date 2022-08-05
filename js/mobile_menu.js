// open and close mobile menu in javascript
const hamburger = document.getElementById('hamburger');
const navul = document.getElementById('navUL');

hamburger.addEventListener('click', () => {
    navul.classList.toggle('show');
});


// the same thing but in jquery
// $(document).ready(function () {
//     $("#hamburger").click(function () {
//         $("#navUL").slideToggle(500).css("display", "flex");
//     });
// });