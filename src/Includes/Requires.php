<?php namespace Experiensa_LC\Plugin\Includes;

/**
 * Class Requires
 * Check for all dependency plugins
 * @package Experiensa_LC\Plugin\Includes
 */
class Requires
{
    public function __construct( ) {
        add_action('admin_notices', array( $this, 'requiredPlugins' ));
    }
    /**
     * Notify if a required plugin is missing
     */
    public function requiredPlugins(){
        require_once( ABSPATH . 'wp-admin/includes/plugin.php' );
        $plugin_messages = array();
        $msg = __('This theme requires you to install the ');

        $experiensa_api = [
            'name'      => 'Experiensa API',
            'folder'    => 'experiensa-api',
            'file'      => 'experiensa-plugin.php',
            'url'       => 'https://github.com/Experiensa/experiensa-api'
        ];

        $plugins = [$experiensa_api];

        foreach ($plugins as $key => $value) {
            $plugin = $value['folder'] . '/' . $value['file'];
            if (!is_plugin_active( $plugin )) {
                if($value['name']=='WP API 2'){
                    $wp_version = get_bloginfo('version');
                    $version = explode('.',$wp_version);
                    if(!empty($version) && ((int)$version[0]<4) && (int)$version[1]<7){
                        $plugin_messages[] = $msg . $value['name'] . ' <a href="'. $value['url'] .'">'.__('Download') . '</a> '.__('Or install a Wordpress version over ','experiensa').' '.$wp_version;
                    }
                }else{
                    $plugin_messages[] = $msg . $value['name'] . ' <a href="'. $value['url'] .'" target="_blank">'.__('Download') . '</a>';
                }
            }
        }

        if(count($plugin_messages) > 0){
            echo '<div id="message" class="error">';
            foreach($plugin_messages as $message){
                echo '<p><strong>'.$message.'</strong></p>';
            }
            echo '</div>';
        }
    }
    /**
    *   Load template from start path templates/
    **/
    public static function experiensaLoadTemplate($filename = false){
        if($filename){
            $template = EXPERIENSA_LC_TEMPLATES . $filename;
            load_template( $template, false );
        }
    }
}