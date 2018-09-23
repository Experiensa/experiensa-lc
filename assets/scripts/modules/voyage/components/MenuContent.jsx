import React from 'react';
import InformationContent from './InformationContent';
import IncludedContent from './IncludedExcludedContent';
import i18n from '../../../util/i18n';

class MenuContent extends React.Component {
  constructor(){
    super();
  }
  
  render() {
    console.log('MenuContent',this.props);
    const { context, voyage, options } = this.props;
    if(context === i18n.t('information.label').toLowerCase()){
      return(
        <div>
          <InformationContent
            voyage={voyage}
            options={options}
          />
        </div>
      );
    }
    return(
      <div>
        <IncludedContent voyage={voyage} />
      </div>
    );
  }
}
export default MenuContent;
