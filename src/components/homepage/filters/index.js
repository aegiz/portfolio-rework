// Package
import PropTypes from "prop-types";
import React, { Component } from "react";
import styled from "styled-components";

// Components
import Filter from "./filter";

const FiltersContainer = styled.div`
	position: relative;
	display: ${props => (props.mobileDisplay ? "none" : "flex")};
	flex-direction: ${props => (props.mobileDisplay ? "column" : "row")};
	align-items: flex-start;
	opacity: 1;
	margin: 0 5px;
	transition: all 0.2s;
	${({ theme }) => theme.mediaQueries.s} {
		display: ${props => (props.mobileDisplay ? "flex" : "none")};
	}
`;

export default class FiltersComp extends Component {
	static propTypes = {
		mobileDisplay: PropTypes.bool,
		updateGallery: PropTypes.func.isRequired,
		currentFilter: PropTypes.string.isRequired,
		updateFilter: PropTypes.func.isRequired,
	};
	render() {
		return (
			<FiltersContainer mobileDisplay={this.props.mobileDisplay}>
				<Filter
					filter={"All"}
					mobileDisplay={this.props.mobileDisplay}
					currentFilter={this.props.currentFilter}
					updateFilter={this.props.updateFilter}
					updateGallery={this.props.updateGallery}
				/>
				<Filter
					filter={"Full-Time Work"}
					mobileDisplay={this.props.mobileDisplay}
					currentFilter={this.props.currentFilter}
					updateFilter={this.props.updateFilter}
					updateGallery={this.props.updateGallery}
				/>
				<Filter
					filter={"Freelance Work"}
					mobileDisplay={this.props.mobileDisplay}
					currentFilter={this.props.currentFilter}
					updateFilter={this.props.updateFilter}
					updateGallery={this.props.updateGallery}
				/>
				<Filter
					filter={"Side Project"}
					mobileDisplay={this.props.mobileDisplay}
					currentFilter={this.props.currentFilter}
					updateFilter={this.props.updateFilter}
					updateGallery={this.props.updateGallery}
				/>
			</FiltersContainer>
		);
	}
}
