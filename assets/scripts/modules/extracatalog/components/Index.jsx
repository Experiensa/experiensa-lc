import React from 'react';
import { connect } from 'react-redux';
import { Grid, Loader } from 'semantic-ui-react';
//import { Link } from 'react-router-dom';
//import SearchContainer from './SearchContainer';
import FiltersContainer from './FiltersContainer';
import ResultsContainer from './ResultsContainer';
import LoadMoreContainer from './LoadMoreContainer';
import i18n from '../../../util/i18n';

class Index extends React.Component {
  constructor(){
    super()
  }

  render() {
    console.log('Index mis props son', this.props);
    const { 
      catalog, 
      categories, 
      includes, 
      excludes, 
      themes, 
      destinations, 
      countries,
      regions,
      options, 
      filters,
      loading, 
    } = this.props;
    const { elements } = options;
    const values = {
      categories,
      includes,
      excludes,
      themes,
      destinations,
      countries,
      regions
    };
    if(!loading){
      return(
        <Grid
          stackable
          columns={2} 
          divided
        >
          <Grid.Column width={4}>
            <FiltersContainer
              filters={filters}
              values={values}
              post_per_row={options.post_per_row}
            />
          </Grid.Column>
          <Grid.Column width={12}>
            <ResultsContainer
              voyages={catalog}
              elements={elements}
              options={options}
            />
            <LoadMoreContainer
              post_per_row={options.post_per_row}
            />
          </Grid.Column>
        </Grid>
      );
    }
    return (
			<div>
				<Loader
					active
					inline='centered'
					content={i18n.t('loading.label')}
				/>
			</div>
    );
  }
}
function mapStateToProps(state){
  console.log('Index state es', state);
  const { 
    catalog, 
    categories, 
    includes, 
    excludes, 
    themes, 
    destinations, 
    countries,
    regions,
    loading, 
  } = state.catalog;
  return {
      catalog,
      categories,
      includes,
      excludes,
      themes,
      destinations,
      countries,
      regions,
      loading,
  }
}

export default connect( mapStateToProps )( Index );
