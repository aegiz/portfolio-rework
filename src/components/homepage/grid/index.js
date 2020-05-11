// Package
import PropTypes from "prop-types";
import React, { Component } from "react";
import Shuffle from "shufflejs";
import styled from "styled-components";

// Components
import Filters from "./filters";
import Gallery from "./gallery";

const GridContainer = styled.div`
	z-index: 2;
	position: relative;
	width: 100%;
	max-width: 1400px;
	margin: 80px auto 0;
	${({ theme }) => theme.mediaQueries.m} {
		margin: 40px auto 0;
	}
`;

export default class GridComp extends Component {
	static propTypes = {
		post: PropTypes.shape(),
	};
	state = {
		gallery: null,
		filterOpen: false,
		currentFilter: "all",
	};
	createGallery = (gallery, sizer) => {
		this.setState({
			gallery: new Shuffle(gallery, {
				itemSelector: ".gallery-item",
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
	updateGallery = newFilter => {
		this.state.gallery.filter(element => {
			return newFilter === "all"
				? element
				: element.dataset.type.includes(newFilter);
		});
	};
	destroyGallery = () => {
		this.state.gallery.destroy();
	};
	updateFilter = newFilter => {
		this.setState({
			currentFilter: newFilter,
		});
	};
	// _handleKeyDown = ev => {
	// 	if (ev.keyCode === 13) {
	// 		this._handleClick(ev);
	// 	}
	// };
	// _handleClick = e => {
	// 	e.preventDefault();
	// 	this.setState({ filterOpen: !this.state.filterOpen });
	// 	this.updateFilter("all");
	// 	this.updateGallery("all");
	// };
	render() {
		return (
			<GridContainer>
				<Filters
					updateGallery={this.updateGallery}
					filterOpen={this.state.filterOpen}
					currentFilter={this.state.currentFilter}
					updateFilter={this.updateFilter}
				/>
				<Gallery
					instance={this.state.gallery}
					currentFilter={this.state.currentFilter}
					createGallery={this.createGallery}
					destroyGallery={this.destroyGallery}
					posts={this.props.posts}
				/>
			</GridContainer>
		);
	}
}
