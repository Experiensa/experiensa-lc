import React from 'react';
import DataRow from '../common/DataRow';
import DetailsModal from '../voyages/layouts/DetailsModal';
import DetailsLink from '../voyages/layouts/DetailsLink';
import * as Info from '../common/Info';

class VoyageCards extends React.Component {
    constructor(){
        super();
    }
    renderDetailButton(price){
        const {voyage, options, show} = this.props;
        if(show.detail_button){
            return(
                <DetailsModal voyage={voyage} price={price} options={options} type="button"/>
            )
        }else{
            return(
                <div></div>
            )
        }
    }
    render() {
        const {voyage, options, show, dType} = this.props;
        let priceComponent = '';
        //console.log('props de VoyageCards', this.props);
        const price = Info.getVoyagePrice(voyage);
        if(price !== 'Non disponible'){
            priceComponent = <DataRow show={show.price} title="Prix" value={price} showTitle={false} strongContent={true} isTitle={false}/>;
        }
        let button;
        if(show.detail_button){
            button = <DetailsModal voyage={voyage} price={price} options={options} type="button"/>;
        }else{
            button = <div></div>;
        }
        return(
            <div className="ui card">
                {dType=='link' ? (
                  <DetailsLink voyage={voyage} price={price} options={options} type="image" vIndex={voyage.index} />  
                ) : (
                    <DetailsModal voyage={voyage} price={price} options={options} type="image" />
                )}
                <div className="content">
                    <DataRow show={show.title} title={voyage.title} value="" showTitle={true} strongContent={false} isTitle={true}/>
                    <DataRow show={show.excerpt} title="Extrait" value={voyage.excerpt} strongContent={false} showTitle={true} isTitle={false}/>
                    <DataRow show={show.duration} title="Durée" value={voyage.duration} showTitle={true} strongContent={false} isTitle={false}/>
                    <DataRow show={show.themes} title="Thème" value={voyage.theme.text} showTitle={true} strongContent={false} isTitle={false}/>
                    <DataRow show={show.destination} title="Lieux" value={voyage.location.text} showTitle={true} strongContent={false} isTitle={false}/>
                    <DataRow show={show.country} title="Pays" value={voyage.country.text} showTitle={true} strongContent={false} isTitle={false}/>
                    <DataRow show={show.includes} title="Comprend" value={voyage.included.text} showTitle={true} strongContent={false} isTitle={false}/>
                    <DataRow show={show.excludes} title="Exclut" value={voyage.excluded.text} showTitle={true} strongContent={false} isTitle={false}/>
                    {priceComponent}
                </div>
                {dType=='link' && show.detail_button ? (
                    <DetailsLink voyage={voyage} price={price} options={options} type="button" vIndex={voyage.index} />
                  ) : (
                    button
                  )}
            </div>
        )
    }
}
VoyageCards.defaultProps = {
    dType: ''
}
export default VoyageCards;
