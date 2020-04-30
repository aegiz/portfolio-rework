// Package
import PropTypes from "prop-types";
import React, { Component } from "react";
import styled from "styled-components";

// Utils
import withWindowDimensions from "@utils/withWindowDimensions";

// Assets
import closeIcon from "@static/close.svg";

/* Styles */

// Helpers
const handleInnerStepTransition = (
	nbSteps,
	TIME_TRANSITION,
	innerStepsOpen,
	isM
) => {
	if (innerStepsOpen) {
		if (isM) {
			return `opacity ${TIME_TRANSITION}s ease`;
		} else {
			return `opacity ${TIME_TRANSITION}s ease ${nbSteps * TIME_TRANSITION}s`;
		}
	} else {
		return `opacity ${TIME_TRANSITION}s eases, width ${TIME_TRANSITION}s eases`;
	}
};

// Styled Components
const InnerStepsContainer = styled.div`
	z-index: 2;
	overflow: auto;
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
			props.innerStepsOpen,
			props.isM
		)};
	padding: 30px 70px 10px;
	${({ theme }) => theme.mediaQueries.m} {
		height: ${props => (props.innerStepsOpen ? `100%` : `0`)};
		padding: 0;
		position: relative;
	}
`;

const Close = styled.button`
	position: absolute;
	top: 10px;
	right: 10px;
	padding: 0;
	margin: 0;
	img {
		width: 35px;
		height: 35px;
	}
	${({ theme }) => theme.mediaQueries.m} {
		top: 20px;
		right: 5px;
	}
`;

const Title = styled.h2`
	margin: 0 0 0 0;
	font-size: ${({ theme }) => theme.fontSizes["3xl"]};
	${({ theme }) => theme.mediaQueries.l} {
		font-size: ${({ theme }) => theme.fontSizes["2xl"]};
	}
	${({ theme }) => theme.mediaQueries.m} {
		padding: 20px 0;
	}
`;

class InnerStepsComp extends Component {
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
				isM={this.props.isM}
			>
				{this.props.currentTitle && (
					<>
						<Close
							onClick={() => {
								this._clickOnClose();
							}}
						>
							<img src={closeIcon} alt={"close icon"} />
						</Close>
						<Title>{this.props.currentTitle}</Title>
					</>
				)}
				{this.props.currentStep}
			</InnerStepsContainer>
		);
	}
}

export default withWindowDimensions(InnerStepsComp);
