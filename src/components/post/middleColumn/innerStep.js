// Package
import PropTypes from "prop-types";
import React, { Component } from "react";
import styled from "styled-components";

/* Styles */

// Helpers
const handleInnerStepTransition = (
	nbSteps,
	TIME_TRANSITION,
	innerStepsOpen
) => {
	if (innerStepsOpen) {
		return `opacity ${TIME_TRANSITION}s ease ${nbSteps * TIME_TRANSITION}s`;
	} else {
		return `opacity ${TIME_TRANSITION}s eases, width ${TIME_TRANSITION}s eases`;
	}
};

// Styled Components
const InnerStepsContainer = styled.div`
	z-index: 2;
	position: absolute;
	top: 0;
	left: 0;
	width: ${props => (props.innerStepsOpen ? `100%` : `0`)};
	height: 100%;
	opacity: ${props => (props.innerStepsOpen ? `1` : `0`)};
	visibility: ${props => (props.innerStepsOpen ? `visible` : `hidden`)};
	transition: ${props =>
		handleInnerStepTransition(
			props.nbSteps,
			props.TIME_TRANSITION,
			props.innerStepsOpen
		)};
	padding: 30px 70px 10px;
`;

const Close = styled.button`
	position: absolute;
	top: 0;
	right: 0;
	padding: 0;
	margin: 0;
	img {
		width: 35px;
		height: 35px;
	}
`;

const Title = styled.h2`
	margin: 0 0 0 0;
	font-size: ${({ theme }) => theme.fontSizes["3xl"]};
	${({ theme }) => theme.mediaQueries.l} {
		font-size: ${({ theme }) => theme.fontSizes["xl"]};
	}
`;

export default class InnerStepsComp extends Component {
	static propTypes = {
		nbSteps: PropTypes.number.isRequired,
		innerStepsOpen: PropTypes.bool.isRequired,
		TIME_TRANSITION: PropTypes.number.isRequired,
		currentStep: PropTypes.array,
		currentTitle: PropTypes.string,
		updateStepsColumnOpen: PropTypes.func.isRequired,
		updateInnerStepsOpen: PropTypes.func.isRequired,
	};
	_clickOnClose = () => {
		this.props.updateInnerStepsOpen(false);
		if (this.props.nbSteps < 3) {
			setTimeout(() => {
				this.props.updateStepsColumnOpen(false);
			}, 500);
		}
	};
	render() {
		return (
			<InnerStepsContainer
				nbSteps={this.props.nbSteps}
				innerStepsOpen={this.props.innerStepsOpen}
				TIME_TRANSITION={this.props.TIME_TRANSITION}
			>
				{this.props.currentTitle && (
					<>
						<Close
							onClick={() => {
								this._clickOnClose();
							}}
						>
							<img src={`close.svg`} alt={"close icon"} />
						</Close>
						<Title>{this.props.currentTitle}</Title>
					</>
				)}
				{this.props.currentStep}
			</InnerStepsContainer>
		);
	}
}
