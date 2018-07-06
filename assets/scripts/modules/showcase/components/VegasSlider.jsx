import React from 'react';
import ReactDOM from 'react-dom';
import vegas from 'vegas/dist/vegas';
import 'vegas/dist/vegas.css';
import * as Images from '../functions/Images';

export default class VegasSlider extends React.Component {
	componentDidMount() {
		const node = ReactDOM.findDOMNode(this);
		console.log('mi objeto actual es', node);
		let myVegas = new vegas.Vegas(node, {});
		console.log('my nigga', myVegas);
		// console.log('mi objeto actual es',ReactDOM.findDOMNode(this))
		// console.log('las opciones que voy a mostrar son',{slider:this.getImageData()})
		// let node = ReactDOM.findDOMNode(this)
		// const options = {
		//     slides:this.getImageData()
		// }
		// $(node).vegas(options)

		// new Vegas(ReactDOM.findDOMNode(this),options)
	}

	// componentWillUnmount(){
	//     // let vegas = new Vegas(ReactDOM.findDOMNode(this),{slider:this.getImageData()})
	//     // vegas.destroy()
	//     let node = ReactDOM.findDOMNode(this)
	//     $(node).trigger('destroy')
	// }
	getImageData() {
		const { posts } = this.props;
		const images = Images.getImageUrlList(posts);
		return images.map((image) => {
			return {src:image};
		});
	}
	render() {
		// const info = this.getImageData();
		// console.log('qwewqeqeq',overlay)
		return (
			<div className="vegas-slider">
				<div className="ui container">
					<p>hola mundo</p>
				</div>
			</div>
		);
	}
}
