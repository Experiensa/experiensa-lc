import React from 'react';
import {connect} from 'react-redux';
import { Grid } from 'semantic-ui-react';
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
    return(
      <Grid stackable columns={2} divided>
        <Grid.Column width={4}>
          <ul>
            <li><Link to="/experiensa/voyage/22">Voy al viaje</Link></li>
          </ul>
          <FiltersContainer filters={filters} values={values}/>
        </Grid.Column>
        <Grid.Column width={12}>
          <ResultsContainer voyages={catalog} elements={elements} options={options}/>
        </Grid.Column>
      </Grid>
    )
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
