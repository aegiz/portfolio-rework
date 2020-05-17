// Package
import PropTypes from "prop-types";
import Img from "gatsby-image";
import React, { Component } from "react";

// Styles
import styled from "styled-components";

const Cover = styled.div`
	display: ${props => (props.mobileDisplay ? `none` : `block`)};
	width: 100%;
	height: 76.05%;
	${({ theme }) => theme.mediaQueries.m} {
		display: ${props => (props.mobileDisplay ? `block` : `none`)};
		height: 400px;
	}
	.gatsby-image-wrapper {
		height: 100%;
	}
`;

export default class CoverComp extends Component {
	static propTypes = {
		mobileDisplay: PropTypes.bool,
		src: PropTypes.object.isRequired,
	};
	render() {
		return (
			<Cover mobileDisplay={this.props.mobileDisplay}>
				<Img
					fluid={{
						...this.props.src,
						sizes: "(max-width: 1000px) calc(100vw - 20px), 1000px",
					}}
				/>
			</Cover>
		);
	}
}
