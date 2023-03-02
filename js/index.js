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



    //下部画像の設定
    $('.p-work__list').slick({
        infinite: true, //スライドをループさせるかどうか。初期値はtrue。
        fade: true, //フェードの有効化
        arrows: false,//左右の矢印あり
        asNavFor: '.p-work__choice-button', //連動させるサムネイルのクラス名
    });

    //選択画像の設定
    $('.p-work__choice-button').slick({
        infinite: true, //スライドをループさせるかどうか。初期値はtrue。
        slidesToShow: 5, //表示させるスライドの数
        focusOnSelect: true, //フォーカスの有効化
        prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
        nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
        asNavFor: '.p-work__list', //連動させるスライドショーのクラス名
    });

});


