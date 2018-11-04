import React from 'react';
import {connect} from 'react-redux';
import { requestCatalog } from '../actions';
import Routes from '../routes';

class MainContainer extends React.Component {
  constructor(...args) {
    super(...args);
  }

  componentWillMount(){
    const { post_per_row } = this.props.options;
    this.props.requestCatalog(this.props.filters, post_per_row);    
  }

  render(){
    const { options, filters } = this.props;
    return (
      <div>
        <Routes options={options} filters={filters} />
      </div>
    );
  }
}

function mapStateToProps(state){
  return {};
}

export default connect( mapStateToProps, { requestCatalog } )( MainContainer );
