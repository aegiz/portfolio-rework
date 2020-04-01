import React, { Component } from "react";
import styled from "styled-components";

const Filter = styled.div`
	cursor: pointer;
	margin: 0 20px 0 0;
	padding: 0;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	.square {
		width: 15px;
		height: 15px;
		background: ${props => {
			console.log(props.typeOfArticle);
			if (props.typeOfArticle === "freelancework") {
				return ({ theme }) => theme.colors.yellow.main;
			} else if (props.typeOfArticle === "full-timework") {
				return ({ theme }) => theme.colors.blue.main;
			} else if (props.typeOfArticle === "sideproject") {
				return ({ theme }) => theme.colors.red.main;
			} else {
				return `transparent`;
			}
		}};
	}
	button {
		font-size: ${({ theme }) => theme.fontSizes["l"]};
		background: transparent;
		margin: 0 0 0 5px;
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
					this.props.filterGrid(
						this.props.filter.toLowerCase().replace(/\s/g, "")
					);
				}}
			>
				{/* <div className="square" typeOfArticle={typeOfArticleClean} /> */}
				<button>{this.props.filter}</button>
			</Filter>
		);
	}
}

export default GalleryFilter;
