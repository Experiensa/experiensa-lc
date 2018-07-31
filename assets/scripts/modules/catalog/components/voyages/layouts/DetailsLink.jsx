import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Image, Modal, Icon, Menu } from 'semantic-ui-react';
import imageUrl from '../../../../../../images/travel-no-image.jpg';
import withImportantStyle from 'react-with-important-style';

class DetailsLink extends React.Component {
  constructor(){
    super();
  }
  createButtonAction(){
    return(
      <div className="content">
        <Button
          id="modal-card-details"
          className="catalog-detail-button"
          fluid
        >
          Détails
        </Button>
      </div>
    );
  }
  createImage(voyageImage){
    const border = this.props.options.content_border_radius;
    // console.log('mi border es', border)
    if(border !== 'inherit'){
        const imgStyle = {
            borderTopLeftRadius: `${border}rem !important`,
            borderTopRightRadius: `${border}rem !important`,
        };
        return(                
            <CardImage
                className="image catalog-image"
                src={voyageImage}
                onClick={this.handleOpen}
                style={imgStyle}
            />
        );
    }else{
        return(
            <Image
                className="image catalog-image"
                src={voyageImage}
                onClick={this.handleOpen}
            />
        );
    }
}
  render(){
    const { type, vIndex, voyage } = this.props;
    let siteUrl = experiensa_vars.siteurl.replace('http://','')+'/extra-catalogue/';
    siteUrl = siteUrl.replace('localhost','');
    siteUrl = siteUrl.replace('indalo.experiensa.com','');
    const MainRoute = siteUrl;
    const voyageUrl = MainRoute+'voyage/'+ vIndex;
    let voyageImage = () => {
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
    return(
      <div>
        <Link to={voyageUrl}>
          {type=="image"?
          (
            this.createImage(voyageImage())
          ):(
            this.createButtonAction()
          )}
        </Link>
      </div>    
    );
  }
}

export default DetailsLink;