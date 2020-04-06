// Package
import React, { Component } from "react";
import styled from "styled-components";

// Helpers
const handleColorType = type => {
	if (type === "freelancework") {
		return ({ theme }) => theme.colors.yellow.main;
	} else if (type === "full-timework") {
		return ({ theme }) => theme.colors.yellow.light;
	} else if (type === "sideproject") {
		return ({ theme }) => theme.colors.black;
	} else {
		return ({ theme }) => theme.colors.white;
	}
};

// Styles
const Filter = styled.div`
	cursor: pointer;
	position: relative;
	margin: 0 20px 0 0;
	padding: 0;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	opacity: ${props =>
		props.typeOfArticle === props.currentFilter ? "1" : "0.5"};
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
		background: ${props => handleColorType(props.typeOfArticle)};
		transition: all 0.35s;
	}
	.square {
		border: 1px solid rgba(255, 255, 255, 0);
		transition: all 0.3s;
		cursor: pointer;
		width: 15px;
		height: 15px;
		background: ${props => handleColorType(props.typeOfArticle)};
	}
	button {
		cursor: pointer;
		text-transform: uppercase;
		text-indent: 0.5em;
		font-size: ${({ theme }) => theme.fontSizes["l"]};
		background: transparent;
		padding: 0;
		border: none;
		color: ${({ theme }) => theme.colors.white};
	}
`;

class GalleryFilter extends Component {
	render() {
		const typeOfArticleClean = this.props.filter
			.toLowerCase()
			.replace(/\s/g, "");
		return (
			<Filter
				onClick={() => {
					this.props.updateGrid(typeOfArticleClean);
					this.props.updateFilter(typeOfArticleClean);
				}}
				typeOfArticle={typeOfArticleClean}
				currentFilter={this.props.currentFilter}
			>
				<div className="square" />
				<button>{this.props.filter}</button>
			</Filter>
		);
	}
}

export default GalleryFilter;
