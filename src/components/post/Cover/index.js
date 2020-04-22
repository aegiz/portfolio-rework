// Package
import PropTypes from "prop-types";
import Img from "gatsby-image";
import React, { Component } from "react";

// Styles
import styled from "styled-components";

const Cover = styled.div`
	width: 100%;
	height: 76.05%;
	display: ${props => (props.desktop ? "block" : "none")};
	${({ theme }) => theme.mediaQueries.m} {
		display: ${props => (props.desktop ? "none" : "block")};
		height: 400px;
		padding: 0 70px;
	}
	.gatsby-image-wrapper {
		height: 100%;
	}
`;

export default class CoverComp extends Component {
	static propTypes = {
		desktop: PropTypes.bool,
		src: PropTypes.object.isRequired,
	};
	render() {
		return (
			<Cover desktop={this.props.desktop}>
				<Img fluid={this.props.src} />
			</Cover>
		);
	}
}
