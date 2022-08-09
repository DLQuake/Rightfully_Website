$(document).ready(function () {
    $("#hamburger").click(function () {
        $("#navUL").slideToggle(200).css("display", "flex");
    });
});