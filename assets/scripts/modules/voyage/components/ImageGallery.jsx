import React from 'react';
import Lightbox from 'react-images';
import { Image } from 'semantic-ui-react';
import imageDefaultUrl from '../../../../images/travel-no-image.jpg';
/*
isOpen={this.state.lightboxIsOpen}
onClickPrev={this.gotoPrevLightboxImage}
onClickNext={this.gotoNextLightboxImage}
onClose={this.closeLightbox}
*/
class ImageGallery extends React.Component {
  constructor(){
    super();
  }
  imageList = () => {
    const { info } = this.props;
    let image = info.cover_image;
    let gallery = [];
    if(image.gallery.length > 0){
      gallery.push(image.gallery);
    }
    if(image.feature){
      gallery.push(image.feature_image);
    }
    if(gallery.length < 1){
      gallery.push(imageDefaultUrl);
    }
    return gallery;
  }
  imageBox = () => {
    const list = this.imageList();
    if(list.length > 1){
      return(
        <Lightbox
          images={list}
        />
      );
    }else{
      return(<Image size='large' src={list[0]} />);
    }
  }
  render(){
    return(this.imageBox());
  }
}

export default ImageGallery;
