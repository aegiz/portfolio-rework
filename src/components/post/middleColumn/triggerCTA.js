// Package
import PropTypes from "prop-types";
import React, { Component } from "react";

// Assets
import PlusIcon from "@static/plus.svg";
import MinusIcon from "@static/minus.svg";
import styled from "styled-components";

/* Styles */

// Helpers
const handleCTAappearance = (more, stepsColumnOpen) => {
	let opacity, visibility;
	if (more && stepsColumnOpen) {
		opacity = "0";
		visibility = "hidden";
	} else if (more && !stepsColumnOpen) {
		opacity = "1";
		visibility = "visible";
	} else if (!more && stepsColumnOpen) {
		opacity = "1";
		visibility = "visible";
	} else if (!more && !stepsColumnOpen) {
		opacity = "0";
		visibility = "hidden";
	}
	return `opacity:${opacity}; visibility:${visibility};`;
};

// Styled Components
const TriggerCTAContainer = styled.div`
	position: relative;
	width: 100%;
	height: 80px;
	opacity: ${props => (props.innerStepsOpen ? `0` : `1`)};
	transition: ${props =>
		`opacity ${props.TIME_TRANSITION}s ease ${props.nbSteps *
			props.TIME_TRANSITION -
			0.1 * props.nbSteps +
			0.1}s`};
	padding: 0 119px;

	${({ theme }) => theme.mediaQueries.xl} {
		padding: 0 70px;
	}
	${({ theme }) => theme.mediaQueries.l} {
		padding: 0;
	}
`;

const TriggerCTA = styled.button`
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
	${props => handleCTAappearance(props.more, props.stepsColumnOpen)};
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

export default class TriggerComp extends Component {
	static propTypes = {
		updateStepsColumnOpen: PropTypes.func.isRequired,
		stepsColumnOpen: PropTypes.bool.isRequired,
		innerStepsOpen: PropTypes.bool.isRequired,
		nbSteps: PropTypes.number.isRequired,
		TIME_TRANSITION: PropTypes.number.isRequired,
	};
	state = {
		isTransitioning: false,
	};
	_handleCTAClick = open => {
		this.props.updateStepsColumnOpen(open);
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
			<TriggerCTAContainer
				innerStepsOpen={this.props.innerStepsOpen}
				nbSteps={this.props.nbSteps}
				TIME_TRANSITION={this.props.TIME_TRANSITION}
			>
				<TriggerCTA
					more
					stepsColumnOpen={this.props.stepsColumnOpen}
					onClick={() => {
						this._handleCTAClick(true);
					}}
					disabled={this.state.isTransitioning}
				>
					<img src={PlusIcon} alt="plus icon" />
					<span>{this.props.textCTAopen}</span>
				</TriggerCTA>
				<TriggerCTA
					stepsColumnOpen={this.props.stepsColumnOpen}
					onClick={() => {
						this._handleCTAClick(false);
					}}
					disabled={this.state.isTransitioning}
				>
					<img src={MinusIcon} alt="minus icon" />
					<span>{this.props.textCTAclose}</span>
				</TriggerCTA>
			</TriggerCTAContainer>
		);
	}
}
