import React from 'react';
import Lightbox from 'react-image-lightbox';
import { Image } from 'semantic-ui-react';
import 'react-image-lightbox/style.css';
import imageDefaultUrl from '../../../../images/travel-no-image.jpg';

class ImageGallery extends React.Component {
  constructor(){
    super();
    this.state = {
      photoIndex: 0,
      isOpen: false
    };
  }
  imageList = () => {
    const { info } = this.props;
    console.log('info', info);
    console.log('imageDefaultUrl', imageDefaultUrl);
    let image = info.cover_image;
    let gallery = [];
    if(image.gallery.length > 0){
      gallery = image.gallery;
    }
    if(image.feature_image && gallery.length < 1){
      gallery.push(image.feature_image);
    }
    if(gallery.length < 1){
      gallery.push(imageDefaultUrl);
    }
    return gallery;
  }
  imageSrcList = (list) => {
    let auxList = [];
    for(let i = 0; i < list.length; i++){
      auxList.push({
        src: list[i],
      });
    }
    return auxList;
  }
  imageBox = () => {
    const { photoIndex, isOpen } = this.state;
    const list = this.imageList();
    console.log('my imageList', list);
    if(list.length > 1){
      const images = list;
      return(
        <div>
          <Image 
            size='large'
            src={list[0]}
            onClick={() => this.setState({ isOpen: true })}
          />
          {isOpen && (
            <Lightbox
              mainSrc={images[photoIndex]}
              nextSrc={images[(photoIndex + 1) % images.length]}
              prevSrc={images[(photoIndex + images.length - 1) % images.length]}
              onCloseRequest={() => this.setState({ isOpen: false })}
              onMovePrevRequest={() =>
                this.setState({
                  photoIndex: (photoIndex + images.length - 1) % images.length
                })}
              onMoveNextRequest={() =>
                this.setState({
                  photoIndex: (photoIndex + 1) % images.length
                })}
            />
          )}
        </div>
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
