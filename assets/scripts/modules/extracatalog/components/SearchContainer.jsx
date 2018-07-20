import React from 'react';
import { Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import SearchItem from './filters/SearchItem';

class SearchContainer extends React.Component {
  constructor(){
      super()
  }
  render() {
    return(
      <Segment fluid styled>
        <ul>
          <li><Link to="/hello?color=Blue&size=40">with query string</Link></li>      
        </ul>
      </Segment>
    )
  }
}
export default SearchContainer;
//<SearchItem/>