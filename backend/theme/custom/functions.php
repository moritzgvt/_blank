<?php

// Register Menu
function register_my_menu() {
    register_nav_menu('menu',__( 'Menu' ));
}

add_action( 'init', 'register_my_menu' );


function initCors( $value ) {
    $origin_url = '*';
  
    // // Check if production environment or not
    // if (ENVIRONMENT === 'production') {
    //   $origin_url = 'https://abdera-bc.de';
    // }
  
    header( 'Access-Control-Allow-Origin: ' . $origin_url );
    header( 'Access-Control-Allow-Methods: GET' );
    header( 'Access-Control-Allow-Credentials: true' );
    header( 'Cache-Control: max-age=86400' );
    return $value;
}

add_action( 'rest_api_init', function() {
    remove_filter( 'rest_pre_serve_request', 'rest_send_cors_headers' );
    add_filter( 'rest_pre_serve_request', 'initCors');
}, 15 );



function get_menu() {
    return wp_get_nav_menu_items('menu');
}

add_action( 'rest_api_init', function () {
        register_rest_route( 'custom', '/menu', array(
            'methods' => 'GET',
            'callback' => 'get_menu',
    ) );
} );


/////
///// BLOCKS
/////

// Filter allowed Blocks
function set_allowed_blocks( $allowed_block_types ) {
    return array(
        'core/heading',
        'core/paragraph',
        'core/image',
        'core/list',
        'core/file',
        'core-embed/youtube',
        'core-embed/spotify'
    );
}

add_filter( 'allowed_block_types', 'set_allowed_blocks' );
