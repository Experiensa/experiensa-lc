import React from 'react';
import DataRow from '../common/DataRow';
import DetailsModal from '../voyages/layouts/DetailsModal';
import DetailsLink from '../voyages/layouts/DetailsLink';
import i18n from '../../../../util/i18n';
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
    getDuration = (duration) => {
        let duration_text = '';
        duration_text += duration.days? duration.days+' '+i18n.t('days.label'):'';
        duration_text += duration_text===''? '': ' - ';
        duration_text += duration.nights? duration.nights+' '+i18n.t('nights.label'):'';
        duration_text = duration_text === ' - '? '' : duration_text;
        return duration_text;
    }
    render() {
        const {voyage, options, show, dType} = this.props;
        let priceComponent = '';
        // console.log('props de VoyageCards', this.props);
        const price = Info.getVoyagePrice(voyage);
        if(price !== 'Non disponible'){
            priceComponent = <DataRow show={show.price} title={i18n.t('price.label')} value={price} showTitle={false} strongContent={true} isTitle={false}/>;
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
                    <DetailsLink
                        voyage={voyage}
                        price={price}
                        options={options}
                        type="image"
                        vIndex={voyage.index}
                    />  
                ) : (
                    <DetailsModal
                        voyage={voyage}
                        price={price}
                        options={options}
                        type="image"
                    />
                )}
                <div className="content">
                    <DataRow 
                        show={show.title}
                        title={voyage.title}
                        value="" showTitle={true}
                        strongContent={false}
                        isTitle={true}
                    />
                    <DataRow
                        show={show.excerpt}
                        title={i18n.t('excerpt.label')}
                        value={voyage.excerpt}
                        strongContent={false}
                        showTitle={true}
                        isTitle={false}
                    />
                    <DataRow
                        show={show.duration}
                        title={i18n.t('duration.label')}
                        value={this.getDuration(voyage.duration)}
                        showTitle={true}
                        strongContent={false}
                        isTitle={false}
                    />
                    <DataRow
                        show={show.themes}
                        title={i18n.t('themes.label')}
                        value={voyage.theme.text}
                        showTitle={true}
                        strongContent={false}
                        isTitle={false}
                    />
                    <DataRow
                        show={show.destination}
                        title="Lieux"
                        value={voyage.location.text}
                        showTitle={true}
                        strongContent={false}
                        isTitle={false}
                    />
                    <DataRow
                        show={show.country}
                        title={i18n.t('country.label')}
                        value={voyage.country.text}
                        showTitle={true}
                        strongContent={false}
                        isTitle={false}
                    />
                    <DataRow
                        show={show.includes}
                        title={i18n.t('includes.label')}
                        value={voyage.included.text}
                        showTitle={true}
                        strongContent={false}
                        isTitle={false}
                    />
                    <DataRow
                        show={show.excludes}
                        title={i18n.t('excludes.label')}
                        value={voyage.excluded.text}
                        showTitle={true}
                        strongContent={false}
                        isTitle={false}
                    />
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
