// Package
import PropTypes from "prop-types";
// import React, { Component } from "react";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { theme } from "@components/layout";

// Components
import Filters from "@components/homepage/filters";
import Menu from "react-burger-menu/lib/menus/slide";

// Assets
import filterIcon from "@static/filter.svg";

/* Styles */

// Styles fixed menu
const styles = {
	bmBurgerButton: {
		position: "fixed",
		width: "57px",
		height: "42px",
		left: "12px",
		top: "15px",
	},
	bmCrossButton: {
		height: "24px",
		width: "24px",
	},
	bmCross: {
		background: theme.colors.white,
	},
	bmMenuWrap: {
		position: "fixed",
		height: "100%",
	},
	bmMenu: {
		background: theme.colors.grey.middle,
		padding: "15px",
	},
};

// Styled Components
const MobileFilterMenuContainer = styled.div`
	${props => (props.scrollY > 200 ? `opacity:1; z-index: 10;` : `opacity:0`)};
	display: none;
	position: absolute;
	top: 0;
	left: 0;
	transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
	${({ theme }) => theme.mediaQueries.s} {
		display: block;
	}
`;
const TextMenu = styled.div`
	font-size: ${({ theme }) => theme.fontSizes["l"]};
	color: ${({ theme }) => theme.colors.white};
	margin: 15px 0;
	&:focus {
		outline: none;
	}
`;

export default function MobileFilterMenu(props) {
	const [scrollY, setScrollY] = useState(0);

	function logit() {
		setScrollY(window.pageYOffset);
	}

	useEffect(() => {
		function watchScroll() {
			window.addEventListener("scroll", logit);
		}
		watchScroll();
		// Remove listener (like componentWillUnmount)
		return () => {
			window.removeEventListener("scroll", logit);
		};
	}, []);

	return (
		<MobileFilterMenuContainer scrollY={scrollY}>
			<Menu
				customBurgerIcon={<img src={filterIcon} alt={"filters"} />}
				styles={styles}
			>
				<TextMenu>Filters:</TextMenu>
				<Filters
					mobileDisplay
					updateGallery={props.updateGallery}
					currentFilter={props.currentFilter}
					updateFilter={props.updateFilter}
				/>
			</Menu>
		</MobileFilterMenuContainer>
	);
}

MobileFilterMenu.propTypes = {
	updateGallery: PropTypes.func.isRequired,
	currentFilter: PropTypes.string.isRequired,
	updateFilter: PropTypes.func.isRequired,
};
