import React from 'react';
import { Image, Dimmer } from 'semantic-ui-react';
import * as Images from '../functions/Images';

export default class TextImage extends React.Component {
	constructor() {
		super();
		this.state = { active: false };
	}

	getContent() {
		const { post } = this.props;
		return (
			<a
				href={post.link}
				target="_blank"
				rel="noopener noreferrer"
				style={{ color: 'inherit' }}
			>
				{post.title.rendered}
			</a>
		);
	}

	handleShow = () => this.setState({ active: true })

	handleHide = () => this.setState({ active: false })

	renderTextImage(active) {
		const { post } = this.props;
		const imgURL = Images.getImageURL(post);
		const content = this.getContent();
		return (
			<Dimmer.Dimmable
				as={Image}
				dimmed={active}
				dimmer={{ active, content }}
				onMouseEnter={this.handleShow}
				onMouseLeave={this.handleHide}
				fluid
				src={imgURL}
			/>
		);
	}

	renderSingleImage() {
		const { post } = this.props;
		const imgURL = Images.getImageURL(post);
		return (
			<Image
				src={imgURL}
				as='a'
				fluid
				href={post.link}
				target="_blank"
				alt="Post Image"
			/>
		);
	}

	render() {
		const { overlay } = this.props;
		const { active } = this.state;
		if (overlay) {
			return (
				<div>
					{this.renderTextImage(active)}
				</div>
			);
		}
		return (
			<div>
				{this.renderSingleImage()}
			</div>
		);
	}
}
