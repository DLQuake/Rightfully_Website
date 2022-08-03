jQuery(function ($) {
    $.scrollTo(0);
    $('#contact').click(function () { $.scrollTo($('#Tocontact'), 1000); });

    $('#scrollUp').click(function () { $.scrollTo($('body'), 1000); });
}
);