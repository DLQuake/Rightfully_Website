const togglePassword1 = document.querySelector("#togglePassword1");
const togglePassword2 = document.querySelector("#togglePassword2");
const password1 = document.querySelector("#password1");
const password2 = document.querySelector("#password2");

togglePassword1.addEventListener("click", function () {
    const type1 = password1.getAttribute("type") === "password" ? "text" : "password";
    password1.setAttribute("type", type1);
    this.classList.toggle("bi-eye");
});


togglePassword2.addEventListener("click", function () {
    const type2 = password2.getAttribute("type") === "password" ? "text" : "password";
    password2.setAttribute("type", type2);
    this.classList.toggle("bi-eye");
});