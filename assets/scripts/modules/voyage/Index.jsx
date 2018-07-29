import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
import MenuContent from './components/MenuContent';

let siteUrl = experiensa_vars.siteurl.replace('http://','')+'/';
    const MainRoute = siteUrl.replace('localhost','');

class Index extends React.Component {
  constructor(){
    super();
    this.state = {
      activeItem: 'information'
    };
  }
  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
  }
  render() {
    const { activeItem } = this.state;
    const { match } = this.props;
    console.log('****', this.props)
    return(
      <div>
        <Menu attached='top' tabular>
          <Menu.Item name='information' active={activeItem === 'information'} onClick={this.handleItemClick}/>
          <Menu.Item name='include & excluded' active={activeItem === 'include & excluded'} onClick={this.handleItemClick}/>
        </Menu>
        <ul>
          <li><Link to={MainRoute}>Volver al catalogo</Link></li>
        </ul>
        <MenuContent context={activeItem}/>        
      </div>
    );
  }
}

function mapStateToProps(state){
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
