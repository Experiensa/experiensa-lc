import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import { Menu, Button } from 'semantic-ui-react';
import MenuContent from './components/MenuContent';

let siteUrl = experiensa_vars.siteurl.replace('http://','')+'/extra-catalogue/';
    const MainRoute = siteUrl.replace('localhost','');

class Index extends React.Component {
  constructor(){
    super();
    this.state = {
      activeItem: 'information'
    };
  }
  searchItem = (id, catalog) => {
    if(catalog.length > 0) {
      for (var i in catalog) {
        if (catalog[i].index == id) {
          return catalog[i];
        }
      }
    }
    return {};
  }
  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
  }
  render() {
    const { activeItem } = this.state;
    const { match } = this.props;
    const myVoyage = this.searchItem(parseInt(match.params.id), this.props.catalog)
    return(
      <div>
        <Menu attached='top' tabular>
          <Menu.Item name='information' active={activeItem === 'information'} onClick={this.handleItemClick} />
          {(myVoyage.included.array.length > 0 || myVoyage.excluded.array.length > 0) &&
            <Menu.Item name='include & excluded' active={activeItem === 'include & excluded'} onClick={this.handleItemClick} />
          }
        </Menu>
        <ul>
          <li>
            <Link to={MainRoute}>
              <Button labelPosition='left' icon='left chevron' content='Back' />
            </Link>
          </li>
        </ul>
        <MenuContent context={activeItem} voyage={myVoyage} />        
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
