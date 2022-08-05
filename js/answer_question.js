//! show and hide answer question in javascript
const questions = document.getElementsByClassName('frequently-asked-questions__questions--question');
const answers = document.getElementsByClassName('frequently-asked-questions__questions--answer');

for (let i = 0; i < questions.length; i++) {
    questions[i].addEventListener('click', () => {
        answers[i].classList.toggle('show');
    });
}


//! the same thing but in jquery
// $(document).ready(function () {
//     $("#question1").click(function () { $("#answer1").slideToggle(500); });
//     $("#question2").click(function () { $("#answer2").slideToggle(500); });
//     $("#question3").click(function () { $("#answer3").slideToggle(500); });
//     $("#question4").click(function () { $("#answer4").slideToggle(500); });
//     $("#question5").click(function () { $("#answer5").slideToggle(500); });
//     $("#question6").click(function () { $("#answer6").slideToggle(500); });
//     $("#question7").click(function () { $("#answer7").slideToggle(500); });
//     $("#question8").click(function () { $("#answer8").slideToggle(500); });
//     $("#question9").click(function () { $("#answer9").slideToggle(500); });
//     $("#question10").click(function () { $("#answer10").slideToggle(500); });
//     $("#question11").click(function () { $("#answer11").slideToggle(500); });
//     $("#question12").click(function () { $("#answer12").slideToggle(500); });
//     $("#question13").click(function () { $("#answer13").slideToggle(500); });
//     $("#question14").click(function () { $("#answer14").slideToggle(500); });
// });