import React from 'react';
import { Accordion, Icon } from 'semantic-ui-react';
import i18n from '../../../../util/i18n';
import FilterCheckGroup from './FilterCheckGroup';

function jsUcfirst(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
}
class FilterItem extends React.Component {
  constructor(){
		super();
		this.state = { isActive: true };
		this.handleClick = this.handleClick.bind(this);	
	}
	handleClick = (e, titleProps) => {
		const { isActive } = this.state;
		this.setState({
			isActive: !isActive
		})
  }
  render() {
		const { title, key, filters, originalName } = this.props;
		const { isActive } = this.state;
    let items = [];
    if(typeof filters !== 'undefined' && filters.hasOwnProperty(title)){
      items = filters[title]
    }
    if(items.length > 0){
			let mainTitle = '';
			switch(title){
				case 'countries':
					mainTitle = i18n.t('country.label');
					break;
				case 'themes': 
					mainTitle = i18n.t('themes.label');
					break;
				case 'excludes': 
					mainTitle = i18n.t('excludes.label');
					break;
				case 'includes': 
					mainTitle = i18n.t('includes.label');
					break;
				case 'regions':
					mainTitle = i18n.t('regions.label');
					break;
				default: 
					mainTitle = title;
					break;
			}
			let ucTitle = jsUcfirst(mainTitle);
			return(
				<div>
					<Accordion.Title 
						active={isActive} 
						index={key}
						onClick={(e, titleProps) => this.handleClick(e, titleProps)}
					>
						<Icon name='dropdown' />
						{ `  ${ucTitle}` }
					</Accordion.Title>
					<Accordion.Content active={isActive}>
						<FilterCheckGroup 
							options={items} 
							groupName={title} 
							originalName={originalName}
						/>
					</Accordion.Content>
				</div>
			)
    }else{
		return(<div></div>)
	}
  }
}
export default FilterItem;