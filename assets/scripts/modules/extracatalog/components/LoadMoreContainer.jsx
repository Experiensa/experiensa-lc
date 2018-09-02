import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'semantic-ui-react';
import { initLoadMore } from '../actions';

class LoadMoreContainer extends React.Component {
  constructor(){
    super()
  }
  componentWillMount(){
    const { post_per_row } = this.props;
    this.props.initLoadMore(post_per_row);
  }
  handleOpen = (e) => {
    const { post_per_row } = this.props;
    console.log('voy a cargar mas viajes');
    e.preventDefault();
}
  render() {
    const { show_load_more } = this.props;
    console.log('props de LoadMoreContainer', this.props);
    if(show_load_more === false ){
      return(
        <div></div>
      );
    }
    return(
      <Button
        fluid
        size='huge'
        onClick={this.handleOpen}
      >
        Load More
      </Button>
    );
  }
}

function mapStateToProps(state){
  const { show_load_more, catalog } = state.catalog;
  return {
    catalog,
    show_load_more
  }
}

export default connect( mapStateToProps, {initLoadMore} )( LoadMoreContainer );
