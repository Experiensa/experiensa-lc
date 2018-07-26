import React from 'react';
import { Grid } from 'semantic-ui-react';

class InformationContent extends React.Component {
  constructor(){
    super();
  }
  
  render() {
    /*console.log('MenuContent',this.props);
    const { context } = this.props;*/
    return(
      <div>
        <Grid stackable columns={2} divided>
          <Grid.Column width={6}>
          adadadsa
          </Grid.Column>
          <Grid.Column width={10}>
            adas
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}
export default InformationContent;
