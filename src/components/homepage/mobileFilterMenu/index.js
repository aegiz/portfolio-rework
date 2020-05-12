// Package
import PropTypes from "prop-types";
import React, { Component } from "react";
import styled from "styled-components";

// Components
import Filters from "@components/homepage/filters";
import Menu from "react-burger-menu/lib/menus/slide";

// Assets
import filterIcon from "@static/filter.svg";

const styles = {
	bmBurgerButton: {
		position: "fixed",
		width: "36px",
		height: "30px",
		left: "36px",
		top: "36px",
	},
	bmBurgerBars: {
		background: "#373a47",
	},
	bmBurgerBarsHover: {
		background: "#a90000",
	},
	bmCrossButton: {
		height: "24px",
		width: "24px",
	},
	bmCross: {
		background: "#bdc3c7",
	},
	bmMenuWrap: {
		position: "fixed",
		height: "100%",
	},
	bmMenu: {
		background: "#373a47",
		padding: "2.5em 1.5em 0",
		fontSize: "1.15em",
	},
	bmMorphShape: {
		fill: "#373a47",
	},
	bmItemList: {
		color: "#b8b7ad",
		padding: "0.8em",
	},
	bmItem: {
		display: "inline-block",
	},
	bmOverlay: {
		background: "rgba(0, 0, 0, 0.3)",
	},
};

// Styled Components

const MobileFilterMenuContainer = styled.div`
	display: none;
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0%;
	left: 0;
	${({ theme }) => theme.mediaQueries.m} {
		display: block;
	}
`;

export default class MobileFilterMenuComp extends Component {
	static propTypes = {
		updateGallery: PropTypes.func.isRequired,
		currentFilter: PropTypes.string.isRequired,
		updateFilter: PropTypes.func.isRequired,
	};
	render() {
		return (
			<MobileFilterMenuContainer>
				<Menu
					customBurgerIcon={<img src={filterIcon} alt={"filters"} />}
					styles={styles}
				>
					<Filters
						updateGallery={this.props.updateGallery}
						currentFilter={this.props.currentFilter}
						updateFilter={this.props.updateFilter}
					/>
				</Menu>
			</MobileFilterMenuContainer>
		);
	}
}
