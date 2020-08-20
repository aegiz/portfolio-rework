// Package
import PropTypes from "prop-types";
import React, { Component } from "react";
import styled from "styled-components";

// Components
import Steps from "./steps";
import TriggerCTA from "./triggerCTA";

// Utils
import withWindowDimensions from "@utils/withWindowDimensions";

/* Styles */
const HEIGHT_STEP = 150;
const TIME_TRANSITION = 0.25;

// Helpers
const handleHeightMiddleColumn = (stepsColumnOpen, nbSteps) => {
	if (stepsColumnOpen) {
		return "100%";
	} else {
		if (nbSteps > 2) {
			return `${HEIGHT_STEP * 2 + 100}px`;
		} else if (nbSteps === 2) {
			return `${HEIGHT_STEP * 2}px`;
		} else if (nbSteps === 1) {
			return `23.95%`;
		}
	}
};

const handleWidthMiddleColumn = innerStepsOpen => {
	if (innerStepsOpen) {
		return `calc(55% + 40px)`;
	} else {
		return `31.7%`;
	}
};

// Styled Components
const MiddleColumn = styled.div`
	z-index: 1;
	position: absolute;
	left: calc(45% - 40px);
	bottom: 0;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-end;
	background: ${({ theme }) => theme.colors.black};
	color: ${({ theme }) => theme.colors.white};
	width: ${props => handleWidthMiddleColumn(props.innerStepsOpen)};
	height: ${props =>
		handleHeightMiddleColumn(props.stepsColumnOpen, props.nbSteps)};
	transition: height ${TIME_TRANSITION}s ease,
		width ${TIME_TRANSITION}s ease
			${props => props.nbSteps * TIME_TRANSITION - 0.1 * props.nbSteps}s;
	${({ theme }) => theme.mediaQueries.l} {
		padding: 25px 70px 0;
	}
	${({ theme }) => theme.mediaQueries.m} {
		justify-content: flex-start;
		position: relative;
		width: 100%;
		height: 100%;
		min-height: ${props => props.nbSteps * 113 + 50}px;
		left: auto;
		bottom: auto;
		padding: 25px 70px;
	}
	${({ theme }) => theme.mediaQueries.s} {
		padding: 25px;
	}
	${({ theme }) => theme.mediaQueries.xs} {
		padding: 25px 10px;
	}
`;

class middleColumnComp extends Component {
	static propTypes = {
		textCTAopen: PropTypes.string.isRequired,
		textCTAclose: PropTypes.string.isRequired,
		content: PropTypes.arrayOf(
			PropTypes.shape({
				title: PropTypes.string.isRequired,
				description: PropTypes.string.isRequired,
				components: PropTypes.arrayOf(
					PropTypes.shape({
						type: PropTypes.string.isRequired,
						data: PropTypes.shape.isRequired,
					}).isRequired
				).isRequired,
			}).isRequired
		).isRequired,
	};
	state = {
		stepsColumnOpen: false,
		innerStepsOpen: false,
	};
	componentDidMount() {
		window.addEventListener("wheel", this.listenToWheelScroll);
	}
	componentWillUnmount() {
		window.removeEventListener("wheel", this.listenToWheelScroll);
	}
	listenToWheelScroll = e => {
		// We only want to show the content of the middle column if:
		// 1. It's not on mobile
		// 2. The windows height is big enough
		// 3. It's not already open
		if (
			!this.props.isM &&
			this.props.windowHeight > 850 &&
			!this.state.stepsColumnOpen
		) {
			if (this.props.content.length === 1 || this.props.content.length === 2) {
				this.setState({
					stepsColumnOpen: true,
					innerStepsOpen: true,
				});
			} else {
				this.setState({
					stepsColumnOpen: true,
				});
			}
		}
	};
	updateStepsColumnOpen = open => {
		this.setState({
			stepsColumnOpen: open,
		});
	};
	updateInnerStepsOpen = open => {
		this.setState({
			innerStepsOpen: open,
		});
	};
	render() {
		return (
			<MiddleColumn
				stepsColumnOpen={this.state.stepsColumnOpen}
				innerStepsOpen={this.state.innerStepsOpen}
				nbSteps={this.props.content.length}
			>
				<Steps
					content={this.props.content}
					stepsColumnOpen={this.state.stepsColumnOpen}
					innerStepsOpen={this.state.innerStepsOpen}
					HEIGHT_STEP={HEIGHT_STEP}
					TIME_TRANSITION={TIME_TRANSITION}
					updateStepsColumnOpen={this.updateStepsColumnOpen}
					updateInnerStepsOpen={this.updateInnerStepsOpen}
				/>
				{!this.props.isM && this.props.content.length > 2 && (
					<TriggerCTA
						textCTAopen={this.props.textCTAopen}
						textCTAclose={this.props.textCTAclose}
						updateStepsColumnOpen={this.updateStepsColumnOpen}
						stepsColumnOpen={this.state.stepsColumnOpen}
						innerStepsOpen={this.state.innerStepsOpen}
						nbSteps={this.props.content.length}
						TIME_TRANSITION={TIME_TRANSITION}
					/>
				)}
			</MiddleColumn>
		);
	}
}

export default withWindowDimensions(middleColumnComp);
