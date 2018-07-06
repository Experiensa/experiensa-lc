import React from 'react';
import Masonry from 'react-masonry-component';
import TextImage from './TextImage';

const masonryOptions = {
	transitionDuration: 2,
	columnWidth: 60
};

export default class MasonryLayout extends React.Component{
	constructor(){
		super();
	}
	renderImages(){
		return this.props.posts.map((post,i) => {
			return (
				<div key={i} className="masonry-item">
					{<TextImage post={post} overlay={this.props.overlay}/>}
				</div>
			);
		});
	}
	render(){
		return(
			<Masonry
				options={masonryOptions}
				className="masonry-layout"
				style={{height:'auto'}}
			>
				{this.renderImages()}
			</Masonry>
		);
	}
}
