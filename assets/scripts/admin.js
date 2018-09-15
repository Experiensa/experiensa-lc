import 'jquery';

import renderShowcase from './modules/showcase';
import renderRequest from './modules/request';
import renderCatalog from './modules/catalog/index';
import renderExtraCatalog from './modules/extracatalog';

jQuery(document).ajaxSuccess(function(event, xhr, settings) {
	const action = 'action=dslc-ajax-add-module';
	if (typeof settings.data !== 'undefined' && settings.data.indexOf(action) !== -1) {
		if (settings.data.indexOf('dslc_module_id=Showcase_LC_Module') !== -1) {
			renderShowcase();
		}
		if (settings.data.indexOf('dslc_module_id=Catalog_LC_Module') !== -1) {
			renderCatalog();
		}
		if (settings.data.indexOf('dslc_module_id=ExtraCatalog_LC_Module') !== -1) {
			renderExtraCatalog();
		}
		if (settings.data.indexOf('dslc_module_id=Request_LC_Module') !== -1) {
			renderRequest();
		}
	}
});
