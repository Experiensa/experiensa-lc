import React from 'react';
import i18n from '../../../util/i18n';

class DetailContent extends React.Component {
  constructor(){
    super();
  }
  price = () =>{
    const { voyage } = this.props;
    let value = "";
    if(voyage.price){
        value = "<b>"+i18n.t('price.label')+"</b>: "+ voyage.price+" "
        if(voyage.currency)
            value += voyage.currency
        value += "<br/>"
    }
    return value
  }
  duration = () =>{
    const { voyage } = this.props;
    return (voyage.duration.text?"<b>"+i18n.t('duration.label')+"</b>: " + voyage.duration.text+"<br/>":"")
  }
  country = () =>{
    const { voyage } = this.props;
    return (voyage.country.text?"<b>"+i18n.t('country.label')+"</b>: " + voyage.country.text+"<br/>":"")
  }
  destination = () =>{
    const { voyage } = this.props;
    return (voyage.location.text?"<b>Destination</b>: " + voyage.location.text+"<br/>":"")
  }
  theme = () =>{
    const { voyage } = this.props;
    return (voyage.theme.text?"<b>"+i18n.t('themes.label')+"</b>: " + voyage.theme.text+"<br/>":"")
  }
  flyer = () => {
    const { voyage, options } = this.props;
    return (voyage.flyer_file && options.show_pdf_flyer==="show"?"<b>Prospectus</b>: <a href='" + voyage.flyer_file+"' target='_blank'>Télécharger</a><br/>":"")
  }
  render(){
    return(
      <div>
        <div dangerouslySetInnerHTML={{__html: this.price()}}/>
        <div dangerouslySetInnerHTML={{__html: this.duration()}}/>
        <div dangerouslySetInnerHTML={{__html: this.country()}}/>
        <div dangerouslySetInnerHTML={{__html: this.destination()}}/>
        <div dangerouslySetInnerHTML={{__html: this.theme()}}/>
        <div dangerouslySetInnerHTML={{__html: this.flyer()}}/>
      </div>
    )
  }
}

export default DetailContent;