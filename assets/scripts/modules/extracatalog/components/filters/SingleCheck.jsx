import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Checkbox } from 'semantic-ui-react';
import { filterCatalog } from '../../actions';

class SingleCheck extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false
    }
  }
  handleChange = (e, data) => {
    const { isActive } = this.state;
    this.setState({isActive: !isActive});
    const { checked, value } = data;
    const { filterName } = this.props;
    let filterType = 'FILTER_' + filterName.toUpperCase();
    console.log('voy a buscar', filterType, value, checked);
    this.props.filterCatalog(filterType, value, !isActive);
  }
  render() {
    const {valueName, inputName} = this.props;
    const {isActive} = this.state;
    return(
      <Form.Field>
        <Checkbox type='checkbox' 
          name={inputName} 
          value={valueName}
          label={valueName}
          readOnly={false}
          checked={isActive}
          onChange={ (e, data)=>this.handleChange(e, data) }
        />
      </Form.Field>
    )   
  }
}
function mapStateToProps(state){
	return {isActive: false}
}
export default connect(mapStateToProps,{filterCatalog})(SingleCheck);