// Package
import PropTypes from "prop-types";
import React, { Component } from "react";
import styled from "styled-components";

// Components
import Steps from "./steps";
import TriggerCTA from "./triggerCTA";

/* Styles */
const HEIGHT_STEP = 150;

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
			return `${HEIGHT_STEP}px`;
		}
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
	width: 31.7%;
	height: ${props =>
		handleHeightMiddleColumn(props.stepsColumnOpen, props.nbSteps)};
	transition: all 0.3s;
	${({ theme }) => theme.mediaQueries.l} {
		padding: 25px 70px 0;
	}
	${({ theme }) => theme.mediaQueries.m} {
		position: relative;
		width: 100%;
		left: auto;
		bottom: auto;
	}
`;

export default class middleColumn extends Component {
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
				nbSteps={this.props.content.length}
			>
				<Steps
					content={this.props.content}
					stepsColumnOpen={this.state.stepsColumnOpen}
					innerStepsOpen={this.state.innerStepsOpen}
					HEIGHT_STEP={HEIGHT_STEP}
					updateInnerStepsOpen={this.updateInnerStepsOpen}
				/>
				{this.props.content.length > 2 && (
					<TriggerCTA
						textCTAopen={this.props.textCTAopen}
						textCTAclose={this.props.textCTAclose}
						updateStepsColumnOpen={this.updateStepsColumnOpen}
						stepsColumnOpen={this.state.stepsColumnOpen}
					/>
				)}
			</MiddleColumn>
		);
	}
}
