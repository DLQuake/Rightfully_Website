jQuery(function ($) {
    $.scrollTo(0);
    $('#contact_header').click(function () { $.scrollTo($('#Tocontact'), 1000); });
    $('#contact_footer').click(function () { $.scrollTo($('#Tocontact'), 1000); });

    $('#scrollUp').click(function () { $.scrollTo($('body'), 1000); });
}
);