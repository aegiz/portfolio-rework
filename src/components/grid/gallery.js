// Package
import React, { Component } from "react";
import styled from "styled-components";
import Shuffle from "shufflejs";

// Components
import GalleryGrid from "./galleryGrid";
import GalleryFilter from "./galleryFilter";

const MainContainer = styled.div`
	z-index: 2;
	position: relative;
	margin: 40px auto 0;
	width: 100%;
	max-width: 1400px;
`;

const FilterTrigger = styled.div`
	cursor: pointer;
	position: relative;
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
`;

const FilterContainer = styled.div`
	position: relative;
	background: transparent;
	border-radius: 3px;
	margin: 0 1em;
	padding: 0.25em 1em;
	span {
		margin-left: 10px;
	}
`;

class Gallery extends Component {
	state = {
		shuffle: null,
	};
	createIsotopeGrid = (grid, sizer) => {
		this.setState({
			shuffle: new Shuffle(grid, {
				itemSelector: ".grid-item",
				sizer: sizer,
				initialSort: {
					reverse: true,
					by: function(element) {
						return element.getAttribute("data-date");
					},
				},
			}),
		});
	};
	filterGrid = newFilter => {
		this.state.shuffle.filter(element => {
			return newFilter === "all"
				? element
				: element.dataset.type.includes(newFilter);
		});
	};
	destroyGrid = () => {
		this.state.shuffle.destroy();
	};
	render() {
		return (
			<>
				<MainContainer>
					<FilterTrigger>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="#000"
						>
							<path d="M0 6C0 5.17157 0.671573 4.5 1.5 4.5H22.5C23.3284 4.5 24 5.17157 24 6C24 6.82843 23.3284 7.5 22.5 7.5H1.5C0.671573 7.5 0 6.82843 0 6ZM3 12C3 11.1716 3.67157 10.5 4.5 10.5H19.5C20.3284 10.5 21 11.1716 21 12C21 12.8284 20.3284 13.5 19.5 13.5H4.5C3.67157 13.5 3 12.8284 3 12ZM7.5 16.5C6.67157 16.5 6 17.1716 6 18C6 18.8284 6.67157 19.5 7.5 19.5H16.5C17.3284 19.5 18 18.8284 18 18C18 17.1716 17.3284 16.5 16.5 16.5H7.5Z"></path>
						</svg>
						<span>Filters</span>
					</FilterTrigger>
					<FilterContainer>
						<GalleryFilter filter={"All"} filterGrid={this.filterGrid} />
						<GalleryFilter
							filter={"Freelance Work"}
							filterGrid={this.filterGrid}
						/>
						<GalleryFilter
							filter={"Full-Time Work"}
							filterGrid={this.filterGrid}
						/>
						<GalleryFilter
							filter={"Side Project"}
							filterGrid={this.filterGrid}
						/>
					</FilterContainer>
					<GalleryGrid
						createIsotopeGrid={this.createIsotopeGrid}
						destroyGrid={this.destroyGrid}
						posts={this.props.posts}
					/>
				</MainContainer>
			</>
		);
	}
}

export default Gallery;
