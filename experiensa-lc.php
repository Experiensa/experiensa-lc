<?php
/**
* Plugin Name: Experiensa-LC
* Plugin URI: https://github.com/Experiensa/experiensa-lc
* Description: This plugin adds tourist information to your website
* Version: 0.8.2
* Author: Experiensa
* License: GPL2
*/

if ( ! defined( 'ABSPATH' ) ) {
	header( 'HTTP/1.0 403 Forbidden' );
	exit;
}
// Define multiple PHP Constanst 
define('EXPERIENSA_LC_VER', '0.0.1');
define('EXPERIENSA_LC_FILE', __FILE__);
define('EXPERIENSA_LC_PLUGIN_PATH',  WP_PLUGIN_DIR . '/wp-experiensa/');
define('EXPERIENSA_LC_BASENAME', plugin_basename(__FILE__));
define('EXPERIENSA_LC_ABS', dirname(__FILE__));
define('EXPERIENSA_LC_DIST', dirname(__FILE__) . '/dist');
define('EXPERIENSA_LC_TEMPLATES', dirname(__FILE__) . '/templates/');
define('EXPERIENSA_LC_URL', plugin_dir_url(__FILE__));
define('EXPERIENSA_LC_ASSETS_URL', plugin_dir_url(__FILE__) . 'assets/');
define('EXPERIENSA_LC_DIST_URL', plugin_dir_url(__FILE__) . 'dist/');
define('EXPERIENSA_LC_MAIN_API_URL', get_bloginfo('url') . '/wp-json/wp/v2');
define('EXPERIENSA_LC_DIR_NAME', dirname(plugin_basename(__FILE__)));  
// var_dump(EXPERIENSA_LC_URL);
function init_experiensa_lc(){    
    //Include the custom autoloader
    require_once EXPERIENSA_LC_ABS . '/autoloader.php';
    new Experiensa_LC\Plugin\Includes\Requires();
    new Experiensa_LC\Plugin\Includes\Asset();
    new Experiensa_LC\Plugin\Modules\Ajax();
    new \Experiensa_LC\Plugin\Modules\Defaults();
}
add_action('init','init_experiensa_lc');

function init_livecomposer_modules(){
    // TODO: this include need to be like this because LIVEComposer modules are external 
    require_once EXPERIENSA_LC_ABS . '/src/Modules/Extensions/LiveComposer/live-composer-loader.php';
}
add_action('plugins_loaded', 'init_livecomposer_modules');
