import React from 'react';
import InformationContent from './InformationContent';
import IncludedExcludedContent from './IncludedExcludedContent';

class MenuContent extends React.Component {
  constructor(){
    super();
  }
  
  render() {
    console.log('MenuContent',this.props);
    const { context, voyage } = this.props;
    if(context === "information"){
      return(
        <div>
          <InformationContent voyage={voyage} />
        </div>
      );
    }
    return(
      <div>
        <IncludedExcludedContent voyage={voyage} />
      </div>
    );
  }
}
export default MenuContent;
