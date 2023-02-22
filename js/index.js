$(function () {

    //メニューボタン
    let $pagetop = $('.p-header__nav');

    $(window).on('scroll', function () {
        // .p-slide-menu要素が.slideクラスを持っていない場合のみ処理を行う
        if (!$('.p-slide-menu').hasClass('slide')) {
            if ($(this).scrollTop() < 500) {
                $pagetop.removeClass('isActive');
            } else {
                $pagetop.addClass('isActive');
            }
        }
    });




    // スライドメニュー
    $(".p-header__nav").click(function (event) {
        event.stopPropagation(); // イベントのバブリングを止める
        $(".p-slide-menu").toggleClass("slide");
        $(".p-header__nav").toggleClass("isActive");
    });


    // スライドメニュー以外をクリックしたら閉じる
    $(document).on('click', function (e) {
        if (!$(e.target).closest('.p-slide-menu').length && $('.p-slide-menu').hasClass('slide')) {
            $('.p-slide-menu').removeClass('slide');
        }
    });

    $(".p-slide-menu__close-button").click(function () {
        $('.p-slide-menu').removeClass('slide');
    });


});


