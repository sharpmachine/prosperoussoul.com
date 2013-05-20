<?php
/**
 * 404 Monitor Settings Module
 * 
 * @since 2.1
 */

if (class_exists('SU_Module')) {

class SU_FofsSettings extends SU_Module {
	
	function get_parent_module() { return 'fofs'; }
	function get_child_order() { return 20; }
	function is_independent_module() { return false; }
	
	function get_module_title() { return __('404 Monitor Settings', 'seo-ultimate'); }
	function get_module_subtitle() { return __('Settings', 'seo-ultimate'); }
	function get_settings_key() { return '404s'; }
	
	function get_default_settings() {
		return array(
			  'exceptions' => "*/favicon.ico\n*/apple-touch-icon.png\n*/pingserver.php\n*/xmlrpc.php"
			, 'max_log_size' => 100
			, 'log_enabled' => $this->flush_setting('log_hits', true, 'settings')
			, 'restrict_logging' => true
			, 'log_spiders' => true
			, 'log_errors_with_referers' => true
		);
	}
	
	function init() {
		add_filter('su_get_setting-404s-max_log_size', array('sustr', 'to_int'));
	}
	
	function admin_page_contents() {
		$this->admin_form_start();
		$this->checkbox('log_enabled', __('Continue monitoring for new 404 errors', 'seo-ultimate'), __('Monitoring Settings', 'seo-ultimate'));
		$this->checkboxes(array(
			  'restrict_logging' => __('Only log these types of 404 errors:', 'seo-ultimate')
			, 'log_spiders' => array('description' => __('404s generated by search engine spiders', 'seo-ultimate'), 'indent' => true)
			, 'log_errors_with_referers' => array('description' => __('404s with referring URLs', 'seo-ultimate'), 'indent' => true)
		), __('Log Restrictions', 'seo-ultimate'));
		$this->textbox('max_log_size', __('Maximum Log Entries', 'seo-ultimate'), $this->get_default_setting('max_log_size'));
		$this->textarea('exceptions', __('URLs to Ignore', 'seo-ultimate') . '<br /><small><em>' . __('(Use * as wildcard)', 'seo-ultimate') . '</em></small>', 15);
		$this->admin_form_end();
	}
}

}
?>