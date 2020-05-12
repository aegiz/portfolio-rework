// Package
import PropTypes from "prop-types";
import React, { Component } from "react";
import styled from "styled-components";

// Components
import Filter from "./filter";

const FiltersContainer = styled.div`
	position: relative;
	display: flex;
	flex-direction: row;
	opacity: 1;
	height: 50px;
	margin: 0 5px;
	transition: all 0.2s;
`;

export default class FiltersComp extends Component {
	static propTypes = {
		updateGallery: PropTypes.func.isRequired,
		currentFilter: PropTypes.string.isRequired,
		updateFilter: PropTypes.func.isRequired,
	};
	render() {
		return (
			<FiltersContainer>
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
