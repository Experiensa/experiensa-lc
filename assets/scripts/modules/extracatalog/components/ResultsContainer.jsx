import React from 'react'
import _ from 'lodash'
import { Card, Image } from 'semantic-ui-react'
import VoyageCards from '../../catalog/components/themes/VoyageCards'
const ld = _.noConflict();

class ResultsContainer extends React.Component {
  constructor(){
      super()
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
    })
  }  
  renderVoyageCards(){
    const { voyages, options } = this.props
    return voyages.map((voyage,i) => {
      return(
        <VoyageCards voyage={voyage} key={i} options={options} show={this.elementsToShow()}/>
      )
    })
  }
  render() {
    return(
      <Card.Group className="stackable" itemsPerRow={4}>
        {this.renderVoyageCards()}
      </Card.Group>
    )
  }
}
export default ResultsContainer;