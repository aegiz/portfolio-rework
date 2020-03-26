// Package
import React, { Component } from "react";
import styled from "styled-components";
import Shuffle from "shufflejs";

// Components
import GalleryGrid from "./galleryGrid";
import GalleryFilter from "./galleryFilter";

const FilterContainer = styled.div`
	background: transparent;
	border-radius: 3px;
	border: 2px solid black;
	margin: 0 1em;
	padding: 0.25em 1em;
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
		this.state.shuffle = null;
	};
	render() {
		return (
			<>
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
					<GalleryFilter filter={"Side Project"} filterGrid={this.filterGrid} />
				</FilterContainer>
				<GalleryGrid
					createIsotopeGrid={this.createIsotopeGrid}
					destroyGrid={this.destroyGrid}
					posts={this.props.posts}
				/>
			</>
		);
	}
}

export default Gallery;
