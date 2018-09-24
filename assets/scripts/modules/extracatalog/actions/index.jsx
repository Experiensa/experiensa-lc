require('es6-promise').polyfill();
import axios from 'axios'
import _ from 'lodash'
const ld = _.noConflict();
//Action Types
export const REQUEST_CATALOG = 'REQUEST_CATALOG';
export const FILTER_CATALOG = 'FILTER_CATALOG';
export const FILTER_CATEGORY = 'FILTER_CATEGORY';
export const FILTER_COUNTRY = 'FILTER_COUNTRY';
export const FILTER_DESTINATION = 'FILTER_DESTINATION';
export const FILTER_THEME = 'FILTER_THEME';
export const FILTER_INCLUDED = 'FILTER_INCLUDED';
export const FILTER_EXCLUDED = 'FILTER_EXCLUDED';
export const FILTER_REGION = 'FILTER_REGION';
export const FILTER_PRICE = 'FILTER_PRICE';
export const FILTER_INPUT = 'FILTER_INPUT';
export const EDIT_LOAD_MORE = 'EDIT_LOAD_MORE';

/**
 * Helper functions
 */
function add_filter(value, filters){
    if (filters.indexOf(value) === -1) {
        filters.push(value);
    }
    return filters
}
function delete_filter(value, filters){
    var index = filters.indexOf(value);
    if (index !== -1) {
        filters.splice(index, 1);
    }
    return filters
}
function getFilteredCatalog(catalog = [], filters = [], object_name){
    let auxList = []
    if(filters.length > 0) {
        for (var i in catalog) {
            let intersection = ld.intersection(catalog[i][object_name]['array'], filters)
            if (intersection.length > 0 && intersection.length == filters.length) {
                auxList.push(catalog[i])
            }
        }
        return auxList
    }
    return catalog
}
function filterByObject(catalog = [], filter = '', object_name){
    let auxList = [];
    if(filter.length > 0) {
        filter = filter.toLocaleUpperCase();
        for(var i in catalog){
            let object_value = catalog[i][object_name].toUpperCase();
            if(object_value.indexOf(filter) > -1){
                auxList.push(catalog[i]);
            }
        }
        return auxList;
    }
    return catalog;
}
/**
 * Unused
 */
function filterByTextTaxonomy(catalog = [], filter = '', taxonomies = []){
    let auxList = []
    if(filter.length > 0 && taxonomies.length > 0){
        for(var i in catalog){

        }
        return auxList
    }
    return catalog
}
function filterByPriceObject(catalog = [], filter = []){
	let auxList = [];
	//console.log('entro en filterByPriceObject', filter);
	if(filter.length > 0) {
		let min = filter[0];
		let max = filter[1];
		for(var i in catalog){
			let price = catalog[i]['price'];
			price = price == ""?0:parseInt(price)
			if(price >= min && price <= max){
				auxList.push(catalog[i]);
			}
		}
		return auxList;
	}
	return catalog;
}
function searchCatalog(catalog, filters){
	let auxCatalog = [];
	if(catalog.length > 0){
		auxCatalog = getFilteredCatalog(catalog, filters.categories,'category');
		auxCatalog = getFilteredCatalog(auxCatalog, filters.countries,'country');
		auxCatalog = getFilteredCatalog(auxCatalog, filters.excludes,'excluded');
		auxCatalog = getFilteredCatalog(auxCatalog, filters.includes,'included');
		auxCatalog = getFilteredCatalog(auxCatalog, filters.destinations,'location');
		auxCatalog = getFilteredCatalog(auxCatalog, filters.themes,'theme');
		auxCatalog = getFilteredCatalog(auxCatalog, filters.regions,'region');
		auxCatalog = filterByPriceObject(auxCatalog, filters.prices);
		auxCatalog = filterByObject(auxCatalog, filters.input, 'title');
		auxCatalog = filterByObject(auxCatalog, filters.input, 'excerpt');
		// auxCatalog = filterByTextTaxonomy(auxCatalog, filters.input, filters.user_filters)
	}
	console.log('catalogo conseguido', auxCatalog);
	return auxCatalog;
}
function countShowCatalog(catalog){
	let tam = 0;
	for(var i in catalog){
		if(catalog[i]['show'] === true){
			tam++;
		}
	}
	return tam;
}
function editShowCatalog(showNumber, catalog){
	let auxList = [];
	if(catalog.length > 0) {
		for(var i in catalog){
			if(!catalog[i]['show'] && showNumber > 0){
				catalog[i]['show'] = true;
				showNumber--;
			}
			auxList.push(catalog[i]);
		}
	}
	return auxList;
}
function cleanShowCatalog(catalog){
	let auxList = [];
	if(catalog.length > 0) {
		for(var i in catalog){
			catalog[i]['show'] = true;
			auxList.push(catalog[i]);
		}
	}
	return auxList;
}
function createCatalogObject(data, type = REQUEST_CATALOG, user_filters = [], showNumber){
  let response = {};
  //console.log('createCatalogObject', data);
  const customCatalog = editShowCatalog(showNumber, data.catalog);
  switch (type){
		case REQUEST_CATALOG:
			response = {
				catalog: customCatalog,
				originalCatalog: data.catalog,
				user_filters,
				themes: data.theme_filter,
				themes_active: [],
				destinations: data.destination_filter,
				destinations_active:[],
				countries: data.country_filter,
				countries_active:[],
				categories: data.category_filter,
				categories_active: [],
				includes: data.included_filter,
				includes_active: [],
				excludes: data.excluded_filter,
				excludes_active: [],
				regions: data.region_filter,
				regions_active: [],
			}
  }
  return response;
}

/*
 * Action Creators
 */
export function requestCatalog(user_filters, showNumber) {
  return(dispatch,getState)=>{
		let localApiCatalogURL = experiensa_vars.siteurl + '/wp-json/wp/v2/catalog';
		axios.get(localApiCatalogURL, { timeout: 30000 })
		.then((response)=>{
			let catalogResponse;
			console.log('response.data', response.data);
			console.log('type of response.data', typeof response.data);
			console.log('catalog in response.data', "catalog" in response.data);
			if(response.data.length == 0){
				catalogResponse = getState().catalog;
			}else{
				catalogResponse = createCatalogObject(response.data, REQUEST_CATALOG, user_filters, showNumber * 9)
			}
			console.log('catalogo formateado', catalogResponse);
			dispatch(
				{
					type: REQUEST_CATALOG,
					payload: catalogResponse
				}
			)
		})
		.catch((error)=>{
			console.log('Error',error)
		});
  }
}

export function initLoadMore(post_per_row, init = true) {
	return(dispatch,getState)=>{
		const original_state = getState().catalog;
		let {
			catalog, 
			originalCatalog,
			user_filters, 
			categories_active, 
			countries_active, 
			excludes_active, 
			includes_active, 
			destinations_active, 
			themes_active,
			regions_active, 
			input_text,
			price_values,
		} = original_state;
		let show = false;
		if(init){
			let posts_to_show = (post_per_row * 3);
			if(posts_to_show < catalog.length){
				show = true;
			}	
		}else{
			let tam = catalog.length;
			let show_number = countShowCatalog(catalog);
			let diff = tam - show_number;
			console.log('diff', diff);
			if((diff - post_per_row) > 0){
				show = true;
			}
			catalog = editShowCatalog(post_per_row, catalog);
		}
		const catalogResponse = {
			catalog,
			originalCatalog,
			user_filters,
			categories_active, 
			countries_active, 
			excludes_active, 
			includes_active, 
			destinations_active, 
			themes_active, 
			regions_active,
			input_text,
			price_values,
			show_load_more: show,
		}
		dispatch(
			{
				type: EDIT_LOAD_MORE,
				payload: catalogResponse,
			}
		);
	}
}

export function filterCatalog(filterType, value, active, extra_values = []){
    // console.log('recibi', filterType, value, active)
    return(dispatch,getState)=>{
        // console.log('getState',getState())
        const original_state = getState().catalog;
        let {
            catalog, 
            originalCatalog,
            user_filters, 
            categories_active, 
            countries_active, 
            excludes_active, 
            includes_active, 
            destinations_active, 
            themes_active, 
            regions_active,
            input_text,
            price_values,
            show_load_more,
        } = original_state;
        console.log('original', original_state)
        switch (filterType){
					case FILTER_CATEGORY:
						categories_active = active?add_filter(value,categories_active):delete_filter(value,categories_active);
						break;
					case FILTER_COUNTRY:
						countries_active = active?add_filter(value,countries_active):delete_filter(value,countries_active);
						break;
					case FILTER_EXCLUDED:
						excludes_active = active?add_filter(value,excludes_active):delete_filter(value,excludes_active);
						break;
					case FILTER_INCLUDED:
						includes_active = active?add_filter(value,includes_active):delete_filter(value,includes_active);
						break;
					case FILTER_DESTINATION:
						destinations_active = active?add_filter(value,destinations_active):delete_filter(value,destinations_active);
						break;
					case FILTER_THEME: 
						themes_active = active?add_filter(value,themes_active):delete_filter(value,themes_active);
						break;
					case FILTER_REGION:
						regions_active = active?add_filter(value, regions_active):delete_filter(value, regions_active);
						break;
					case FILTER_PRICE:
						price_values = extra_values;
						break;
					default:
						input_text = value;
						break;            
        }
        let newCatalog;
        if( categories_active.length < 1
					&& countries_active.length < 1
					&& excludes_active.length < 1
					&& includes_active.length <1
					&& destinations_active.length < 1
					&& themes_active.length < 1
					&& regions_active.length < 1
					&& price_values.length < 1
					&& input_text.length < 1
        ){
					newCatalog = cleanShowCatalog(originalCatalog);
        }else{
					const myFilters = {
						user_filters,
						categories: categories_active,
						countries: countries_active,
						excludes: excludes_active,
						includes: includes_active,
						destinations: destinations_active,
						themes: themes_active,
						regions: regions_active,
						prices: price_values,
						input: input_text,
					}
					console.log('voy a buscar con estos datos:');
					console.log('originalCatalog', originalCatalog);
					console.log('myFilters', myFilters);
					newCatalog = searchCatalog(originalCatalog, myFilters);            
        }
        const catalogResponse = {
					catalog: newCatalog,
					originalCatalog,
					user_filters,
					themes: original_state.themes,
					themes_active,
					destinations: original_state.destinations,
					destinations_active,
					countries: original_state.countries,
					countries_active,
					categories: original_state.categories,
					categories_active,
					includes: original_state.includes,
					includes_active,
					excludes: original_state.excludes,
					excludes_active,
					regions: original_state.regions,
					regions_active,
					input_text,
					show_load_more,
        }
        dispatch(
					{
						type: FILTER_CATALOG,
						payload: catalogResponse
					}
        )
    }    
}