<?php
    //テーマサポート
    add_theme_support( 'title-tag' );
    add_theme_support( 'post-thumbnails' );
    add_theme_support( 'html5', array( /* HTML5のタグで出力 */
		'search-form',
		'comment-form',
		'comment-list',
		'gallery',
		'caption',
	) );

    register_nav_menus( array(
        'eat_in' => 'イートイン',
        'take_out' => 'テイクアウト',
        'categorymenu'   => 'サイドバー',
        'footer_nav' => 'フッター'
     ) );

    //タイトル出力
    function wpbeg_title( $title ) {
        if ( is_front_page() && is_home() ) { //トップページなら
            $title = get_bloginfo( 'name', 'display' );
        } elseif ( is_singular() ) { //シングルページなら
            $title = single_post_title( '', false );
        }
            return $title;
        }
    add_filter( 'pre_get_document_title', 'wpbeg_title' );

    function wpbeg_script(){
        wp_register_style( 'ress',get_theme_file_uri( '/css/ress.min.css'),array(),'',false);
        wp_enqueue_style('fontsgoogleapis','fonts.googleapis.com/css2?family=M+PLUS+1p:wght@400;700&family=Roboto:wght@700&display=swap');
        wp_enqueue_style( 'stylecss',get_theme_file_uri( '/css/style.css' ), array('ress') ,'',false);
        wp_enqueue_script( 'jquery',get_theme_file_uri( '/js/jquery-3.6.1.min.js' ),'','', true );
        wp_enqueue_script( 'index',get_theme_file_uri( '/js/index.js' ),'jquery','', true );
        add_theme_support( 'automatic-feed-links' );
    }
    
    add_action( 'wp_enqueue_scripts', 'wpbeg_script' );




    // 空欄・スペース検索の結果を変更する関数（結果非表示）
    function mycus_empty_and_blank_search_invalid_func( $search, \WP_Query $q ) {
        if ( $q->is_search() && $q->is_main_query() && ! $q->is_admin() ) {
            $s = $q->get( 's' );
            $s = trim( $s );
            if ( empty( $s ) ) {
                $search .=" AND 0=1 ";
            }
        }
        return $search;
    }
    add_filter( 'posts_search', 'mycus_empty_and_blank_search_invalid_func', 10, 2 );