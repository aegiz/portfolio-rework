// Package
import PropTypes from "prop-types";
import React, { Component } from "react";

// Assets
import PlusIcon from "@static/plus.svg";
import MinusIcon from "@static/minus.svg";
import styled from "styled-components";

/* Styles */

// Helpers
const handleCTAappearance = (more, middleColumnOpen) => {
	let opacity, visibility;
	if (more && middleColumnOpen) {
		opacity = "0";
		visibility = "hidden";
	} else if (more && !middleColumnOpen) {
		opacity = "1";
		visibility = "visible";
	} else if (!more && middleColumnOpen) {
		opacity = "1";
		visibility = "visible";
	} else if (!more && !middleColumnOpen) {
		opacity = "0";
		visibility = "hidden";
	}
	return `opacity:${opacity}; visibility:${visibility};`;
};

// Styled Components
const MiddleColumnCTAContainer = styled.div`
	position: relative;
	width: 100%;
	height: 80px;
	padding: 0 119px;
	${({ theme }) => theme.mediaQueries.xl} {
		padding: 0 70px;
	}
`;

const MiddleColumnCTA = styled.button`
	position: absolute;
	top: 50%;
	left: 0;
	transform: translateY(-50%);
	border: 0;
	margin: 0;
	padding: inherit;
	cursor: pointer;
	outline: none;
	background: transparent;
	text-transform: uppercase;
	color: ${({ theme }) => theme.colors.white};
	font-size: ${({ theme }) => theme.fontSizes["normal"]};
	font-weight: ${({ theme }) => theme.fontWeights["semibold"]};
	transition: all 0.3s;
	${props => handleCTAappearance(props.more, props.middleColumnOpen)};
	img {
		display: inline-block;
		width: 14px;
		height: 14px;
		margin-bottom: 3px;
		vertical-align: bottom;
	}
	span {
		height: 18px;
		margin-left: 5px;
		display: inline-block;
		vertical-align: bottom;
	}
`;

export default class CoverComp extends Component {
	static propTypes = {
		updateColumnOpen: PropTypes.func.isRequired,
		middleColumnOpen: PropTypes.bool.isRequired,
	};
	state = {
		isTransitioning: false,
	};
	_handleCTAClick = open => {
		console.log(open);
		this.props.updateColumnOpen(open);
		this.setState(() => ({
			isTransitioning: true,
		}));
		setTimeout(() => {
			this.setState(() => ({
				isTransitioning: false,
			}));
		}, 450);
	};
	render() {
		return (
			<MiddleColumnCTAContainer>
				<MiddleColumnCTA
					more
					middleColumnOpen={this.props.middleColumnOpen}
					onClick={() => {
						this._handleCTAClick(true);
					}}
					disabled={this.state.isTransitioning}
				>
					<img src={PlusIcon} alt="plus icon" />
					<span>See More</span>
				</MiddleColumnCTA>
				<MiddleColumnCTA
					middleColumnOpen={this.props.middleColumnOpen}
					onClick={() => {
						this._handleCTAClick(false);
					}}
					disabled={this.state.isTransitioning}
				>
					<img src={MinusIcon} alt="minus icon" />
					<span>See Less</span>
				</MiddleColumnCTA>
			</MiddleColumnCTAContainer>
		);
	}
}
