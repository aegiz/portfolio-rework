// Package
import PropTypes from "prop-types";
import React, { Component } from "react";
import styled from "styled-components";

// Components
import Gallery from "./gallery";

const GridContainer = styled.div`
	z-index: 2;
	position: relative;
	width: 100%;
	max-width: 1400px;
	margin: 80px auto 0;
	${({ theme }) => theme.mediaQueries.m} {
		margin: 40px auto 0;
	}
`;

export default class GridComp extends Component {
	static propTypes = {
		createGallery: PropTypes.func.isRequired,
		destroyGallery: PropTypes.func.isRequired,
		posts: PropTypes.arrayOf(
			PropTypes.shape({
				instance: PropTypes.shape(),
				currentFilter: PropTypes.string,
			}).isRequired
		),
	};
	render() {
		return (
			<GridContainer>
				<Gallery
					instance={this.props.gallery}
					currentFilter={this.props.currentFilter}
					createGallery={this.props.createGallery}
					destroyGallery={this.props.destroyGallery}
					posts={this.props.posts}
				/>
			</GridContainer>
		);
	}
}
