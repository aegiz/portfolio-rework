// Package
import Img from "gatsby-image";
import React, { Component } from "react";

// Styles
import styled from "styled-components";

const Cover = styled.div`
	width: 100%;
	height: 76.05%;
	.gatsby-image-wrapper {
		height: 100%;
	}
`;

export default class CoverComp extends Component {
	render() {
		return (
			<Cover>
				<Img fluid={this.props.src} />
			</Cover>
		);
	}
}
