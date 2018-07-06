import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import Showcase from './components/Showcase';
import 'semantic-ui-css/semantic.css';
require('es6-symbol/implement');


const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

export default function renderShowcase() {
	let showcaseComponent = document.getElementById('showcase-component');
	if (showcaseComponent != null) {
		const options = JSON.parse(showcaseComponent.dataset.options);
		const query = JSON.parse(showcaseComponent.dataset.query);
		ReactDOM.render(
			<Provider store={createStoreWithMiddleware(reducers)}>
				<Showcase options={options} query={query} />
			</Provider>,
			showcaseComponent,
		);
	} else {
		const lc_preview = document.getElementById('page-builder-frame');
		if (lc_preview != null) {
			showcaseComponent = typeof window.frames['page-builder-frame'].frameElement !== 'undefined' && typeof window.frames['page-builder-frame'].frameElement.contentDocument !== 'undefined' ? window.frames['page-builder-frame'].frameElement.contentDocument.getElementById('showcase-component') : null;
			if (showcaseComponent != null) {
				const options = JSON.parse(showcaseComponent.dataset.options);
				const query = JSON.parse(showcaseComponent.dataset.query);
				ReactDOM.render(
					<Provider store={createStoreWithMiddleware(reducers)}>
						<Showcase options={options} query={query} />
					</Provider>,
					showcaseComponent,
				);
			}
		}
	}
}
