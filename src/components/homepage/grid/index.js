// Package
import PropTypes from "prop-types";
import React, { Component } from "react";
import Shuffle from "shufflejs";
import styled from "styled-components";

// Components
import Filter from "./filter";
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

const FilterTrigger = styled.div`
	display: none;
	${({ theme }) => theme.mediaQueries.m} {
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
		cursor: pointer;
		padding: 0 15px;
	}
`;

const CTA = styled.button`
	display: flex;
	flex-direction: row;
	align-items: center;
	padding: 10px;
	border: 1px solid rgba(255, 255, 255, 0.2);
	transition: all 0.3s;
	background: ${props =>
		props.filterOpen ? "rgba(255, 255, 255, 0.2)" : "rgba(255, 255, 255, 0)"};
	&:hover {
		border: 1px solid rgba(255, 255, 255, 0.5);
	}
	&:focus {
		outline: none;
	}
`;

const CTAText = styled.span`
	user-select: none;
	color: ${({ theme }) => theme.colors.white};
	margin-left: 8px;
	font-size: ${({ theme }) => theme.fontSizes["normal"]};
`;

const FilterContainer = styled.div`
	position: relative;
	display: flex;
	flex-direction: row;
	opacity: 1;
	height: 50px;
	margin: 0 15px;
	transition: all 0.2s;
	${({ theme }) => theme.mediaQueries.m} {
		${props =>
			props.filterOpen ? "opacity:1; height:50px;" : "opacity:0; height:0;"};
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
	updateFilter = newFilter => {
		this.setState({
			currentFilter: newFilter,
		});
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
	_handleKeyDown = ev => {
		if (ev.keyCode === 13) {
			this._handleClick(ev);
		}
	};
	_handleClick = e => {
		e.preventDefault();
		this.setState({ filterOpen: !this.state.filterOpen });
		this.updateFilter("all");
		this.updateGallery("all");
	};
	render() {
		return (
			<GridContainer>
				<FilterTrigger filterOpen={this.state.filterOpen}>
					<CTA onClick={this._handleClick} onKeyDown={this._handleKeyDown}>
						<img src={`filter.svg`} alt="filter" />
						<CTAText>Filters</CTAText>
					</CTA>
				</FilterTrigger>
				<FilterContainer filterOpen={this.state.filterOpen}>
					<Filter
						filter={"All"}
						currentFilter={this.state.currentFilter}
						updateGallery={this.updateGallery}
						updateFilter={this.updateFilter}
					/>
					<Filter
						filter={"Full-Time Work"}
						currentFilter={this.state.currentFilter}
						updateGallery={this.updateGallery}
						updateFilter={this.updateFilter}
					/>
					<Filter
						filter={"Freelance Work"}
						currentFilter={this.state.currentFilter}
						updateGallery={this.updateGallery}
						updateFilter={this.updateFilter}
					/>
					<Filter
						filter={"Side Project"}
						currentFilter={this.state.currentFilter}
						updateGallery={this.updateGallery}
						updateFilter={this.updateFilter}
					/>
				</FilterContainer>
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
