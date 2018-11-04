import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import SingleCheck from './SingleCheck';

class CheckboxGroup extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { options, groupName, originalName, post_per_row } = this.props;
    return(
      <Form.Group grouped>
		  {options.map((option, index)=>(
        <Form.Field>
          <SingleCheck
            key={index}
            valueName={option.name}
            inputName={`${groupName}[${index}]`}
            filterName={originalName}
            post_per_row={post_per_row}
          />
			  </Form.Field>
		  ))}          
      </Form.Group>
    )
  }
}
export default CheckboxGroup;