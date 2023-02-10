$(function () {

    //メニューボタン
    let $pagetop = $('.p-header__nav');

    $(window).on('scroll', function () {
        if ($(this).scrollTop() < 500) {
            $pagetop.removeClass('isActive');
        } else {
            $pagetop.addClass('isActive');
        }
    });



});


