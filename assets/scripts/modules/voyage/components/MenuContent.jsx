import React from 'react';
import InformationContent from './InformationContent';
import IncludedExcludedContent from './IncludedExcludedContent';

class MenuContent extends React.Component {
  constructor(){
    super();
  }
  
  render() {
    console.log('MenuContent',this.props);
    const { context, voyage, options } = this.props;
    if(context === "information"){
      return(
        <div>
          <InformationContent voyage={voyage} options={options} />
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
