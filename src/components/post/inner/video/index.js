// Package
import PropTypes from "prop-types";
import React, { Component } from "react";
import styled from "styled-components";

/* Styles */

// Helpers
// From: https://benmarshall.me/responsive-iframes/
const calculateIframeRatio = (width, height) => {
	return `${(height / width) * 100}%`;
};

// Styled Components
const Video = styled.div`
	margin-top: 30px;
	position: relative;
	overflow: hidden;
	padding-top: ${props => calculateIframeRatio(props.width, props.height)};
	position: relative;
	iframe {
		position: absolute;
		top: 0;
		left: 0;
		border: 0;
		height: 100%;
		width: 100%;
	}
`;

export default class CustomVideo extends Component {
	static propTypes = {
		data: PropTypes.shape({
			title: PropTypes.string.isRequired,
			width: PropTypes.number.isRequired,
			height: PropTypes.number.isRequired,
			src: PropTypes.string.isRequired,
		}).isRequired,
	};
	render() {
		return (
			<Video width={this.props.data.width} height={this.props.data.height}>
				<iframe
					title={this.props.data.title}
					src={this.props.data.src}
					frameBorder="0"
					allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
					allowFullScreen
				></iframe>
			</Video>
		);
	}
}
