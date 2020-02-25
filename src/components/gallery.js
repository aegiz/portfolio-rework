// Package
import React, { Component } from "react";
import Isotope from "isotope-layout/js/isotope";
import styled, { withTheme } from "styled-components";

// Components
import IsotopeGrid from "../components/isotopeGrid";
import FilterGrid from "../components/filterGrid";

const Container = styled.div`
	background: transparent;
	border-radius: 3px;
	border: 2px solid palevioletred;
	color: palevioletred;
	margin: 0 1em;
	padding: 0.25em 1em;
`;

class Gallery extends Component {
	state = {
		isotope: null,
	};
	createIsotopeGrid = isotopeNode => {
		this.setState({
			isotope: new Isotope(isotopeNode, {percentPosition: true})
		});
	};
	updateIsotopeGrid = newFilter => {
		if (newFilter === "*") {
			this.state.isotope.arrange({ filter: `*` });
		} else {
			this.state.isotope.arrange({ filter: `.${newFilter}` });
		}
	};
	render() {
		return (
			<Container>
				<div className="filters-container">
					<FilterGrid
						filter={"*"}
						text={"All"}
						updateIsotopeGrid={this.updateIsotopeGrid}
					/>
					<FilterGrid
						filter={"filter-web"}
						text={"web"}
						updateIsotopeGrid={this.updateIsotopeGrid}
					/>
					<FilterGrid
						filter={"filter-DIY"}
						text={"DIY"}
						updateIsotopeGrid={this.updateIsotopeGrid}
					/>
				</div>
				<IsotopeGrid
					createIsotopeGrid={this.createIsotopeGrid}
					posts={this.props.posts}
				/>
			</Container>
		);
	}
}

export default withTheme(Gallery);
