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
	colunmNumber: 0,
	rowNumber: 6,
	rowLimitNumber: 0,
};

const catalogReducer = (state = initialState, action) => {
	switch (action.type) {
		case REQUEST_CATALOG:
			return Object.assign({},state,action.payload);
		case FILTER_CATALOG:
			return Object.assign({}, state, action.payload);
		case EDIT_LOAD_MORE:
			return Object.assign({}, state, action.payload);
		default:
			return state;
	}
}

export default catalogReducer;
