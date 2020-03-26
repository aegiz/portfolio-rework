// Package
import React, { Component } from "react";
import styled from "styled-components";
import Shuffle from "shufflejs";

// Components
import GalleryGrid from "./galleryGrid";
import FilterGrid from "./galleryFilter";

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
				itemSelector: ".photo-item",
				sizer: sizer,
			}),
		});
	};
	updateIsotopeGrid = newFilter => {
		// if (newFilter === "*") {
		// 	this.state.isotope.arrange({ filter: `*` });
		// } else {
		// 	this.state.isotope.arrange({ filter: `.filter-${newFilter}` });
		// }
	};
	render() {
		return (
			<>
				<FilterContainer className="filters-container">
					<FilterGrid
						filter={"*"}
						text={"All"}
						updateIsotopeGrid={this.updateIsotopeGrid}
					/>
					<FilterGrid
						filter={"web"}
						text={"web"}
						updateIsotopeGrid={this.updateIsotopeGrid}
					/>
					<FilterGrid
						filter={"DIY"}
						text={"DIY"}
						updateIsotopeGrid={this.updateIsotopeGrid}
					/>
				</FilterContainer>
				<GalleryGrid
					createIsotopeGrid={this.createIsotopeGrid}
					posts={this.props.posts}
				/>
			</>
		);
	}
}

export default Gallery;
