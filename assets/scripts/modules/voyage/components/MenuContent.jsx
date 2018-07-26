import React from 'react';
import InformationContent from './InformationContent';
import IncludedExcludedContent from './IncludedExcludedContent';

class MenuContent extends React.Component {
  constructor(){
    super();
  }
  
  render() {
    console.log('MenuContent',this.props);
    const { context } = this.props;
    if(context === "information"){
      return(
        <div>
          <InformationContent />
        </div>
      );
    }
    return(
      <div>
        <IncludedExcludedContent />
      </div>
    );
  }
}
export default MenuContent;
