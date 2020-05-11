// Package
import PropTypes from "prop-types";
import React, { Component } from "react";
import Shuffle from "shufflejs";
import styled from "styled-components";

// Components
import Filter from "./filter";

const FiltersContainer = styled.div`
	position: relative;
	display: flex;
	flex-direction: row;
	opacity: 1;
	height: 50px;
	margin: 0 15px;
	transition: all 0.2s;
	${({ theme }) => theme.mediaQueries.m} {
		${props =>
			props.filterOpen ? "opacity:1; height:50px;" : "opacity:0; height:0;"};
	}
`;

export default class GridComp extends Component {
	static propTypes = {
		updateGallery: PropTypes.func,
		filterOpen: PropTypes.bool.isRequired,
		currentFilter: PropTypes.string,
		updateFilter: PropTypes.func,
	};
	render() {
		return (
			<FiltersContainer filterOpen={this.props.filterOpen}>
				<Filter
					filter={"All"}
					currentFilter={this.props.currentFilter}
					updateFilter={this.props.updateFilter}
					updateGallery={this.props.updateGallery}
				/>
				<Filter
					filter={"Full-Time Work"}
					currentFilter={this.props.currentFilter}
					updateFilter={this.props.updateFilter}
					updateGallery={this.props.updateGallery}
				/>
				<Filter
					filter={"Freelance Work"}
					currentFilter={this.props.currentFilter}
					updateFilter={this.props.updateFilter}
					updateGallery={this.props.updateGallery}
				/>
				<Filter
					filter={"Side Project"}
					currentFilter={this.props.currentFilter}
					updateFilter={this.props.updateFilter}
					updateGallery={this.props.updateGallery}
				/>
			</FiltersContainer>
		);
	}
}
