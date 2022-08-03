const questions = document.getElementsByClassName('frequently-asked-questions__questions--question');
const answers = document.getElementsByClassName('frequently-asked-questions__questions--answer');

for (let i = 0; i < questions.length; i++) {
    questions[i].addEventListener('click', () => {
        answers[i].classList.toggle('show');
    });
}