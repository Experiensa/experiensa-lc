import React from 'react';
import _ from 'lodash';
import { Card, Loader } from 'semantic-ui-react';
import VoyageCards from '../../catalog/components/themes/VoyageCards';
import i18n from '../../../util/i18n';
const ld = _.noConflict();

class ResultsContainer extends React.Component {
  constructor(){
    super();
  }
  elementsToShow(){
    const { elements } = this.props
    return({
      title: ld.includes(elements,'title'),
      excerpt: ld.includes(elements,'excerpt'),
      price: ld.includes(elements,'price'),
      detail_button: ld.includes(elements,'detail_button'),
      destination: ld.includes(elements,'destination'),
      duration: ld.includes(elements,'duration'),
      themes: ld.includes(elements,'themes'),
      country: ld.includes(elements,'country'),
      includes: ld.includes(elements,'includes'),
      excludes: ld.includes(elements,'excludes')
    });
  }  
  renderVoyageCards(){
    const { voyages, options } = this.props;
    return voyages.map((voyage,i) => {
      //console.log('mi viaje en renderVoyageCards es', voyage);
      if(voyage.show){
        return(
          <VoyageCards voyage={voyage} key={i} options={options} show={this.elementsToShow()} dType='link'/>
        );
      }
    })
  }
  render() {
    const { options, voyages } = this.props;
    if(voyages.length > 0){
      return(
        <Card.Group className="stackable" itemsPerRow={parseInt(options.post_per_row)}>
          {this.renderVoyageCards()}
        </Card.Group>
      );
    }else{
      return(
        <div>
          {i18n.t('page_not_found.label')}
        </div>
      );
    }
  }
}
export default ResultsContainer;
