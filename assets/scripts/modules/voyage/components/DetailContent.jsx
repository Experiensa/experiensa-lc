import React from 'react';

class DetailContent extends React.Component {
  constructor(){
    super();
  }
  price = () =>{
    const { voyage } = this.props;
    let value = "";
    if(voyage.price){
        value = "<b>Prix</b>: "+ voyage.price+" "
        if(voyage.currency)
            value += voyage.currency
        value += "<br/>"
    }
    return value
  }
  duration = () =>{
    const { voyage } = this.props;
    return (voyage.duration.text?"<b>Durée</b>: " + voyage.duration.text+"<br/>":"")
  }
  country = () =>{
    const { voyage } = this.props;
    return (voyage.country.text?"<b>Pays</b>: " + voyage.country.text+"<br/>":"")
  }
  destination = () =>{
    const { voyage } = this.props;
    return (voyage.location.text?"<b>Destination</b>: " + voyage.location.text+"<br/>":"")
  }
  theme = () =>{
    const { voyage } = this.props;
    return (voyage.theme.text?"<b>Thème</b>: " + voyage.theme.text+"<br/>":"")
  }
  render(){
    return(
      <div>
        <div dangerouslySetInnerHTML={{__html: this.price()}}/>
        <div dangerouslySetInnerHTML={{__html: this.duration()}}/>
        <div dangerouslySetInnerHTML={{__html: this.country()}}/>
        <div dangerouslySetInnerHTML={{__html: this.destination()}}/>
        <div dangerouslySetInnerHTML={{__html: this.theme()}}/>
      </div>
    )
  }
}

export default DetailContent;