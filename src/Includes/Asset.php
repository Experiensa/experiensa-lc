<?php namespace Experiensa_LC\Plugin\Includes;

use Experiensa_LC\Plugin\Modules\Helpers;
use Experiensa_LC\Plugin\Modules\Settings;

/**
 * Class Assets
 * Load all custom javascript and CSS files on front-end and wp-admin
 */
final class Asset{
    public function __construct() {
        add_action( 'wp_enqueue_scripts', array( $this, 'load_frontend_scripts' ) );
        add_action( 'admin_enqueue_scripts', array( $this, 'load_admin_scripts' ) );
    }
    // Include scripts and style files on front-end side
    public function load_frontend_scripts($hook){
        $agency_email = Settings::getEmail();
        $agency_email = (!empty($agency_email)?$agency_email:'gabriel@experiensa.com');
        $protocol = 'http';
        if (is_ssl() ) {
            $protocol = 'https';
        }
        $recaptchaData = Settings::getRecaptchaData();
        $localized_array = array(
            'ajaxurl'=>admin_url('admin-ajax.php', $protocol),
            'siteurl'=>get_bloginfo('url'),
            'assets_url' => EXPERIENSA_LC_ASSETS_URL,
            'dist_url'=>EXPERIENSA_LC_DIST,
            'agency_email' => $agency_email,
            'google_api_key' => Settings::getGoogleAPIKey(),
            'currency' => Settings::getCurrency(),
            'recaptcha_site_key' => $recaptchaData['site_key'],
            'recaptcha_secret_key' => $recaptchaData['secret_key']
        );
        wp_enqueue_style('experiensa-css',EXPERIENSA_LC_URL . 'assets/styles/style.css', []);
        wp_enqueue_style('slick-css',EXPERIENSA_LC_URL . 'assets/styles/slick/slick.css', []);
        wp_enqueue_style('slick-theme',EXPERIENSA_LC_URL . 'assets/styles/slick/slick-theme.css', []);
        wp_enqueue_script('experiensa/common_js', EXPERIENSA_LC_URL . 'dist/common.bundle.js');
        wp_enqueue_script('experiensa/js', EXPERIENSA_LC_URL . 'dist/main.bundle.js', [], null, true);
        wp_localize_script('experiensa/js', 'experiensa_vars', $localized_array);
        /**
         * Estimate enqueues
         */
        if(is_single() && get_post_type() == 'exp_estimate' && Helpers::check_internet_connection()) {
            wp_enqueue_script('stripe/js', 'https://js.stripe.com/v2/');
        }
    }
    /**
    Include scripts and style files on wordpress administrator side
    */
    public function load_admin_scripts($hook) {
        $cpt = (isset($_GET['post_type'])?$_GET['post_type']:false);
        $action = (isset($_GET['action'])?$_GET['action']:false);
        $agency_email = Settings::getEmail();
        $agency_email = (!empty($agency_email)?$agency_email:'gabriel@experiensa.com');
        $protocol = 'http';
        if ( is_ssl() ) {
            $protocol = 'https';
        }
        $recaptchaData = Settings::getRecaptchaData();
        $localized_array = array(
            'ajaxurl'=>admin_url('admin-ajax.php', $protocol),
            'siteurl'=>get_bloginfo('url'),
            'assets_url' => EXPERIENSA_LC_ASSETS_URL,
            'dist_url'=>EXPERIENSA_LC_DIST,
            'agency_email' => $agency_email,
            'google_api_key' => Settings::getGoogleAPIKey(),
            'currency' => Settings::getCurrency(),
            'recaptcha_site_key' => $recaptchaData['site_key'],
            'recaptcha_secret_key' => $recaptchaData['secret_key']
        );
        wp_enqueue_script('experiensa/common_js', EXPERIENSA_LC_URL . 'dist/common.bundle.js');
        wp_enqueue_script('experiensa/main_js', EXPERIENSA_LC_URL . 'dist/main.bundle.js');
        wp_localize_script('experiensa/main_js', 'experiensa_vars', $localized_array);
        wp_enqueue_script('experiensa/admin_js', EXPERIENSA_LC_URL . 'dist/admin.bundle.js');
        wp_localize_script('experiensa/admin_js', 'experiensa_vars', $localized_array);
        /**
         * Load Google MAPS API
         */
        $api_key = Settings::getGoogleMapsAPIKey();
        $lang = Helpers::getSiteLanguageCode();
        if($hook == 'post-new.php' && $cpt == 'exp_place'){
            wp_enqueue_script('gplace_api/js', 'https://maps.googleapis.com/maps/api/js?libraries=places&key='.$api_key.'&language='.$lang);
        }
        if($hook == 'post.php' && $cpt == 'exp_place' && $action == 'edit'){
            wp_enqueue_script('gplace_api/js', 'https://maps.googleapis.com/maps/api/js?libraries=places&key='.$api_key.'&language='.$lang);
        }
    }
}