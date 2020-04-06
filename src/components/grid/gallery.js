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
	padding: 0 15px;
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
	.filter-trigger {
		display: flex;
		flex-direction: row;
		padding: 10px;
		border: 1px solid rgba(255, 255, 255, 0.2);
		transition: all 0.3s;
		background: ${props =>
			props.filterOpen ? "rgba(255, 255, 255, 0.2)" : "rgba(255, 255, 255, 0)"};
		span {
			color: ${({ theme }) => theme.colors.white};
			margin-left: 8px;
		}
		&:hover {
			border: 1px solid rgba(255, 255, 255, 0.5);
		}
	}
`;

const FilterContainer = styled.div`
	display: flex;
	flex-direction: row;
	${props =>
		props.filterOpen ? "opacity:1; height:50px;" : "opacity:0; height:0;"};
	transition: all 0.2s;
	position: relative;
	margin: 0 1em;
	span {
		margin-left: 10px;
	}
`;

class Gallery extends Component {
	state = {
		shuffle: null,
		filterOpen: false,
		currentFilter: "all",
	};
	createGrid = (grid, sizer) => {
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
	updateGrid = newFilter => {
		this.state.shuffle.filter(element => {
			return newFilter === "all"
				? element
				: element.dataset.type.includes(newFilter);
		});
	};
	updateFilter = newFilter => {
		this.setState({
			currentFilter: newFilter,
		});
	};
	destroyGrid = () => {
		this.state.shuffle.destroy();
	};
	_handleClick = e => {
		e.preventDefault();
		this.setState({ filterOpen: !this.state.filterOpen });
		this.updateFilter("all");
		this.updateGrid("all");
	};
	render() {
		return (
			<>
				<MainContainer>
					<FilterTrigger filterOpen={this.state.filterOpen}>
						<div
							className="filter-trigger"
							onKeyDown={this._handleClick}
							onClick={this._handleClick}
							tabIndex="0"
							role="button"
						>
							<img src={`filter.svg`} alt="filter" />
							<span>Filters</span>
						</div>
					</FilterTrigger>
					<FilterContainer filterOpen={this.state.filterOpen}>
						<GalleryFilter
							filter={"All"}
							currentFilter={this.state.currentFilter}
							updateGrid={this.updateGrid}
							updateFilter={this.updateFilter}
						/>
						<GalleryFilter
							filter={"Full-Time Work"}
							currentFilter={this.state.currentFilter}
							updateGrid={this.updateGrid}
							updateFilter={this.updateFilter}
						/>
						<GalleryFilter
							filter={"Freelance Work"}
							currentFilter={this.state.currentFilter}
							updateGrid={this.updateGrid}
							updateFilter={this.updateFilter}
						/>
						<GalleryFilter
							filter={"Side Project"}
							currentFilter={this.state.currentFilter}
							updateGrid={this.updateGrid}
							updateFilter={this.updateFilter}
						/>
					</FilterContainer>
					<GalleryGrid
						instance={this.state.shuffle}
						createGrid={this.createGrid}
						destroyGrid={this.destroyGrid}
						posts={this.props.posts}
					/>
				</MainContainer>
			</>
		);
	}
}

export default Gallery;
