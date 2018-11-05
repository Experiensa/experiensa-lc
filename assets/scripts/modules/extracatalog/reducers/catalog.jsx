import { REQUEST_CATALOG, FILTER_CATALOG, EDIT_LOAD_MORE } from '../actions';

export const initialState = {
	catalog: [],
	originalCatalog: [],
	user_filter: [],
	themes: [],
	themes_active: [],
	destinations: [],
	destinations_active: [],
	countries: [],
	countries_active: [],
	categories: [],
	categories_active: [],
	includes: [],
	includes_active: [],
	excludes: [],
	excludes_active: [],
	regions: [],
	regions_active: [],
	price_values: [],
	input_text: '',
	show_load_more: true,
	loading: true,
	columnNumber: 0,
	rowNumber: 6,
	rowLimitNumber: 0,
};

const catalogReducer = (state = initialState, action) => {
	let newState;
	switch (action.type) {
	case REQUEST_CATALOG:
		newState = Object.assign({}, state, action.payload);
		break;
	case FILTER_CATALOG:
		newState = Object.assign({}, state, action.payload);
		break;
	case EDIT_LOAD_MORE:
		newState = Object.assign({}, state, action.payload);
		break;
	default:
		newState = Object.assign({}, state);
		break;
	}
	console.log('voy a retornar asi', newState);
	return newState;
};

export default catalogReducer;
