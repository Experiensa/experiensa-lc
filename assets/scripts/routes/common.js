import renderShowcase from '../modules/showcase';
import renderRequest from '../modules/request';
import renderCatalog from '../modules/catalog/index';
import renderExtraCatalog from '../modules/extracatalog';

export default {
	init() {
		// JavaScript to be fired on all pages
		renderShowcase();
		renderCatalog();
		renderExtraCatalog();
		renderRequest();
		module.hot.accept();
	},
	finalize() {
		// JavaScript to be fired on all pages, after page specific JS is fired
	},
};
