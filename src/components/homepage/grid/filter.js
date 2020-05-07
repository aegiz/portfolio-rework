// Package
import PropTypes from "prop-types";
import React, { Component } from "react";
import styled from "styled-components";

// Utils
import { handleColorType, cleanProjectName } from "@utils/projectHelpers";

// Styled Components
const Filter = styled.button`
	position: relative;
	margin: 0 20px 0 0;
	padding: 0;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	opacity: ${props =>
		props.typeOfProject === props.currentFilter ? "1" : "0.5"};
	&:hover {
		&:after {
			width: 100%;
			opacity: 0.4;
		}
	}
	&:after {
		content: "";
		width: 0;
		opacity: 0;
		height: 1px;
		position: absolute;
		bottom: 5px;
		left: 0;
		background: ${props => handleColorType(props.typeOfProject)};
		transition: all 0.35s;
	}
`;

const Square = styled.span`
	border: 1px solid rgba(255, 255, 255, 0);
	transition: all 0.3s;
	width: 15px;
	height: 15px;
	background: ${props => handleColorType(props.typeOfProject)};
`;

const Text = styled.span`
	text-transform: uppercase;
	text-indent: 0.5em;
	font-size: ${({ theme }) => theme.fontSizes["l"]};
	background: transparent;
	padding: 0;
	border: none;
	color: ${({ theme }) => theme.colors.white};
`;

export default class FilterComp extends Component {
	static propTypes = {
		filter: PropTypes.string.isRequired,
		updateGallery: PropTypes.func.isRequired,
		updateFilter: PropTypes.func.isRequired,
		currentFilter: PropTypes.string.isRequired,
	};
	render() {
		const typeOfProjectClean = cleanProjectName(this.props.filter);
		return (
			<Filter
				onClick={() => {
					this.props.updateGallery(typeOfProjectClean);
					this.props.updateFilter(typeOfProjectClean);
				}}
				typeOfProject={typeOfProjectClean}
				currentFilter={this.props.currentFilter}
			>
				<Square typeOfProject={typeOfProjectClean} />
				<Text>{this.props.filter}</Text>
			</Filter>
		);
	}
}
