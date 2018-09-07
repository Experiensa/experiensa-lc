import React from 'react';
import { Grid, Header, Image, Button } from 'semantic-ui-react';
import DetailContent from './DetailContent';
import imageUrl from '../../../../images/travel-no-image.jpg';

class InformationContent extends React.Component {
  constructor(){
    super();
  }
  voyageImage = () => {
    const { voyage } = this.props;
    const lostTravelImage = imageUrl;
    let image = voyage.cover_image;
    let imageSrc;
    if(!image.feature_image && image.gallery.length < 1){
        imageSrc = lostTravelImage;
    }else{
        if(image.feature_image){
            imageSrc = image.feature_image;
        }else{
            imageSrc = image.gallery[0];
        }
    }
    return imageSrc;
  }
  render() {
    const { options } = this.props;
    const { content, title } = this.props.voyage;
    const imageSrc = this.voyageImage();
    return(
      <div>
        <Header as='h1'>{title}</Header>
        <Grid stackable columns={2} divided>
          <Grid.Column width={6}>
            <Image size='large' src={imageSrc} />
            <br />
            <DetailContent voyage={this.props.voyage} options={options} />
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
