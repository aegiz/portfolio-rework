// Package
import React, { Component } from "react";

// Styles
import styled from "styled-components";

const Video = styled.div`
	position: relative;
`;

export default class CustomVideo extends Component {
	render() {
		return (
			<Video>
				<iframe
					title={this.props.data.title}
					width={this.props.data.width}
					height={this.props.data.height}
					src={this.props.data.src}
					frameBorder="0"
					allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
					allowFullScreen
				></iframe>
			</Video>
		);
	}
}
