import React from 'react'
import DataRow from '../common/DataRow'
import DetailsModal from '../voyages/layouts/DetailsModal'
import * as Info from '../common/Info'
// import { Card } from 'semantic-ui-react'

export default class VoyageCards extends React.Component {
    constructor(){
        super()
    }
    renderDetailButton(price){
        if(this.props.show.detail_button){
            return(
                <DetailsModal voyage={this.props.voyage} price={price} options={this.props.options} type="button"/>
            )
        }else{
            return(
                <div></div>
            )
        }
    }
    render() {
        const {voyage, options, show} = this.props;
        let priceComponent = '';
        //console.log('props de VoyageCards', this.props);
        const price = Info.getVoyagePrice(voyage)
        if(price !== 'Non disponible'){
            priceComponent = <DataRow show={show.price} title="Prix" value={price} isTitle={false}/>;
        }
        return(
            <div className="ui card">
                <DetailsModal voyage={voyage} price={price} options={options} type="image"/>
                <div className="content">
                    <DataRow show={show.title} title={voyage.title} value="" isTitle={true}/>
                    <DataRow show={show.excerpt} title="Extrait" value={voyage.excerpt} isTitle={false}/>
                    <DataRow show={show.duration} title="Durée" value={voyage.duration} isTitle={false}/>
                    <DataRow show={show.themes} title="Thème" value={voyage.theme.text} isTitle={false}/>
                    <DataRow show={show.destination} title="Lieux" value={voyage.location.text} isTitle={false}/>
                    <DataRow show={show.country} title="Pays" value={voyage.country.text} isTitle={false}/>
                    <DataRow show={show.includes} title="Comprend" value={voyage.included.text} isTitle={false}/>
                    <DataRow show={show.excludes} title="Exclut" value={voyage.excluded.text} isTitle={false}/>
                    {priceComponent}
                </div>
                {this.renderDetailButton(price)}
            </div>
        )
    }
}
