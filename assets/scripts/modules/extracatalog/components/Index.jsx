import React from 'react';
import { connect } from 'react-redux';
import { Grid, Loader } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
//import SearchContainer from './SearchContainer';
import FiltersContainer from './FiltersContainer';
import ResultsContainer from './ResultsContainer';

class Index extends React.Component {
  constructor(){
    super()
  }

  render() {
    console.log('Index mis props son', this.props);
    const { catalog, categories, includes, excludes, themes, destinations, countries, options, filters } = this.props;
    const { elements } = options;
    const values = {
      categories,
      includes,
      excludes,
      themes,
      destinations,
      countries
    };
    let siteUrl = experiensa_vars.siteurl.replace('http://','')+'/extra-catalogue/';
    const MainRoute = siteUrl.replace('localhost','');
    const voyageUrl = MainRoute+'voyage/22';

    if (catalog.constructor === Array && catalog.length > 0) {
      return(
        <Grid stackable columns={2} divided>
          <Grid.Column width={4}>
            <FiltersContainer filters={filters} values={values}/>
          </Grid.Column>
          <Grid.Column width={12}>
            <ResultsContainer voyages={catalog} elements={elements} options={options}/>
          </Grid.Column>
        </Grid>
      );
    }
    return (
			<div>
				<Loader
					active
					inline='centered'
					content='Loading'
				/>
			</div>
		);
  }
}
function mapStateToProps(state){
  console.log('Index state es', state);
  const { catalog, categories, includes, excludes, themes, destinations, countries } = state.catalog
  return {
      catalog,
      categories,
      includes,
      excludes,
      themes,
      destinations,
      countries
  }
}

export default connect( mapStateToProps )( Index );
