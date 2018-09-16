import React from 'react';
import { Grid, Header, Button } from 'semantic-ui-react';
import DetailContent from './DetailContent';
import ImageGallery from './ImageGallery';

class InformationContent extends React.Component {
  constructor(){
    super();
  }
  
  render() {
    const { options, voyage } = this.props;
    const { content, title } = voyage;
    return(
      <div>
        <br />
        <Header as='h1'>{title}</Header>
        <br />
        <Grid stackable columns={2} divided>
          <Grid.Column width={6}>
            <ImageGallery info={voyage} />
            <br />
            <DetailContent voyage={voyage} options={options} />
          </Grid.Column>
          <Grid.Column width={10}>
            <p dangerouslySetInnerHTML={{__html: content}} />
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}
export default InformationContent;
