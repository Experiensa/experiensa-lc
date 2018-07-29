
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import { createBrowserHistory } from 'history'
import { routerMiddleware, connectRouter } from 'connected-react-router'
import App from './App';
import rootReducer from './reducers';
import thunk from 'redux-thunk';
import 'semantic-ui-css/semantic.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'tachyons/css/tachyons.css';

require('es6-symbol/implement');

const history = createBrowserHistory()

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = [ routerMiddleware(history), thunk ];
const store = createStore(
  connectRouter(history)(rootReducer),
  composeEnhancer(
    applyMiddleware(
     ...middlewares
    ),
  ),
)

/*if (!global._babelPolyfill && !window._babelPolyfill) { 
    import 'babel-polyfill';
}*/
console.log('experiensa_vars', experiensa_vars);
export default function renderExtraCatalog() {
  let extra_catalog_app = document.getElementById('extracatalogApp');
  if (extra_catalog_app != null) {
		let options = JSON.parse(extra_catalog_app.dataset.options);
		let filters = JSON.parse(extra_catalog_app.dataset.filters);
		render(
			<Provider store={store}>
				<App history={history} options={options} filters={filters} />
			</Provider>,
			extra_catalog_app);
  } else {
		let lc_preview = document.getElementById('page-builder-frame');
		if (lc_preview != null) {
			extra_catalog_app = typeof window.frames['page-builder-frame'].frameElement !== "undefined" 
			&& typeof window.frames['page-builder-frame'].frameElement.contentDocument !== "undefined" ? 
			window.frames['page-builder-frame'].frameElement.contentDocument.getElementById('extracatalogApp') : null;
			if (extra_catalog_app != null) {
				let options = JSON.parse(extra_catalog_app.dataset.options);
				let filters = JSON.parse(extra_catalog_app.dataset.filters);
				render(
				<Provider store={store}>
					<App history={history} options={options} filters={filters} />
				</Provider>,
				extra_catalog_app,
				);
			}
		}
	}
}
