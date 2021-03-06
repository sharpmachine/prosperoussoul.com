<?php

/*---------------------------------------------------------------------------------*/
/* Loads all the .php files found in /includes/widgets/ directory */
/*---------------------------------------------------------------------------------*/

include( TEMPLATEPATH . '/includes/widgets/widget-woo-tabs.php' );
include( TEMPLATEPATH . '/includes/widgets/widget-woo-adspace.php' );
include( TEMPLATEPATH . '/includes/widgets/widget-woo-blogauthor.php' );
include( TEMPLATEPATH . '/includes/widgets/widget-woo-flickr.php' );
include( TEMPLATEPATH . '/includes/widgets/widget-woo-search.php' );
include( TEMPLATEPATH . '/includes/widgets/widget-woo-twitter.php' );
include( TEMPLATEPATH . '/includes/widgets/widget-woo-rss.php' );
include( TEMPLATEPATH . '/includes/widgets/widget-woo-feedback.php' );	

/*---------------------------------------------------------------------------------*/
/* Deregister Default Widgets */
/*---------------------------------------------------------------------------------*/
if (!function_exists('woo_deregister_widgets')) {
	function woo_deregister_widgets(){
	    unregister_widget('WP_Widget_Search');         
	}
}
add_action('widgets_init', 'woo_deregister_widgets');  


?>