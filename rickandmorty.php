<?php
/*
* Plugin Name: The Rick and Morty
* Plugin URI: https://micaelajofre.ml
* Description: This plugin shows the characters and their respective details of the animated series The Rick and Morty.
* Version: 1.0.0
* Author: Micaela Jofré
* Author URI: https://micaelajofre.ml
* License: GPL2
*/
add_shortcode("rickandmorty", function ($atts, $content) {
    wp_enqueue_style('rickandmorty-css');
    wp_enqueue_script('rickandmorty-js');

    $output ='
    <div class="modal-container">
        <div class="modal-content">
            <button class="close">X</button>
            <div class="modal-top">
                <div class="modal-image">
                    <h2></h2>
                    <img src="" alt="">
                </div>
                <div class="modal-form">
                    <div id="afrus-container-form" data-form="63eb5735-0d30-4503-8f5e-63f7c16b036e"></div>
                </div>
            </div>
            <div class="modal-bottom">
                <div class="modal-description">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    </p>
                </div>
                <div class="modal-extras">
                    <ul>
                        <li><b>Location:</b> <span></span></li>
                        <li><b>Gender:</b> <span></span></li>
                        <li><b>Origin:</b> <span></span></li>
                        <li><b>Species:</b> <span></span></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

    <div id="rick-and-morty" class="characterContainer"></div>
    <script src="https://my.afrus.app/template/index.js"></script>';
    return $output;
});

add_action('init', function () {
	wp_register_style('rickandmorty-css', plugin_dir_url(__FILE__) . "./includes/cards.css" );
    wp_register_script('rickandmorty-js', plugin_dir_url(__FILE__) . "./includes/cards.js", '', '', true);
});

?>