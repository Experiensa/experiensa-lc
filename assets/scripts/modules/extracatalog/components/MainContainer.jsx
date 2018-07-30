import React from 'react';
import {connect} from 'react-redux';
import {requestCatalog} from '../actions';
import Routes from '../routes';

class MainContainer extends React.Component {
  constructor(...args) {
    super(...args);
  }

  componentWillMount(){
    this.props.requestCatalog(this.props.filters)
  }

  render(){
    console.log('mis props sonxxx', this.props);
    const { options, filters } = this.props;
    return (
      <div>
        <Routes options={options} filters={filters} />
      </div>
    );
  }
}

function mapStateToProps(state){
  return {}
}

export default connect( mapStateToProps, { requestCatalog } )( MainContainer );