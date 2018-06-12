import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import SingleCheck from './SingleCheck';

export default class CheckboxGroup extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    ///console.log('props de CheckboxGroup', this.props);
    const { options, groupName, originalName } = this.props;
    return(
      <Form.Group grouped>
		  {options.map((option, index)=>(
        <Form.Field>
          <SingleCheck key={index} valueName={option.name} inputName={`${groupName}[${index}]`} filterName={originalName}/>
			  </Form.Field>
		  ))}          
      </Form.Group>
    )
  }
}
/**
<Checkbox type='checkbox' 
  name={`${groupName}[${index}]`} 
  value={option.name}
  label={option.name}
  onChange={ (e, data)=>this.handleChange(e, data) }
/>
 */