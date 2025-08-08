$(document).ready(function () {
    $('.openNav').click(function () {
        $(this).parent().find('.menu').addClass('openNavDiv');
    })
    $('.closeNav').click(function () {
        $(this).parent().removeClass('openNavDiv');
    })
    $('.nav-item').click(function () {
        $(this).parent().parent().parent().removeClass('openNavDiv');
    })

    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 20) {
            $('header').addClass('scrolled');
        } else {
            $('header').removeClass('scrolled');
        }
    });
});

$(window).on('load', function () {
    $(window).scrollTop(0);
    $('#loader').addClass('fade-out');
    $('body').css('overflow', 'hidden');
    setTimeout(function () {
        $('#loader').remove();
        $('body').css('overflow', 'auto');
    }, 500);
});
