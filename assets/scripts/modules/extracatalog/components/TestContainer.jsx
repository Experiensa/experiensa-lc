import React from 'react';
import { Link } from 'react-router-dom';

class TestContainer extends React.Component {
  constructor(){
    super();
  }
  
  render() {
    console.log('****', this.props)
    return(
      <div>
        <h1>Hola Mundo</h1>
        <ul>
          <li><Link to="/experiensa/">with query string</Link></li>
        </ul>
      </div>
    );
  }
}
export default TestContainer;
