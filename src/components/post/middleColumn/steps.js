// Package
import PropTypes from "prop-types";
import React, { lazy, Suspense, Component } from "react";
import styled from "styled-components";

// Components
import InnerStep from "./innerStep";
const Carousel = lazy(() => import("@components/post/carousel"));
const Video = lazy(() => import("@components/post/video"));

/* Styles */

// Helpers
const handleStepBottom = index => {
	if (index === 0) {
		return `0`;
	} else if (index === 1) {
		return `-150px;`;
	} else {
		return `-${300 + (index - 2) * 150}px;`;
	}
};

const handleStepHeight = (stepsColumnOpen, nbSteps, HEIGHT_STEP) => {
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

const handleStepOpacity = (index, stepsColumnOpen, innerStepsOpen) => {
	if (innerStepsOpen) {
		return `0`;
	} else {
		if (index === 0) {
			return `1`;
		} else if (index === 1) {
			return `1`;
		} else {
			if (stepsColumnOpen) {
				return `1`;
			} else {
				return `0`;
			}
		}
	}
};

const handleStepTransition = (
	index,
	stepsColumnOpen,
	innerStepsOpen,
	TIME_TRANSITION
) => {
	const delay = 0.45 + 0.15 * (index - 2);
	if (stepsColumnOpen) {
		return `height ${TIME_TRANSITION}s ease ${delay}s, opacity ${TIME_TRANSITION}s ease ${delay}s;`;
	} else if (innerStepsOpen) {
		return `height ${TIME_TRANSITION}s ease ${delay -
			0.2}s, opacity ${TIME_TRANSITION}s ease ${delay - 0.2}s;`;
	} else {
		return `height ${TIME_TRANSITION}s ease ${delay}s, opacity 0.15s ease;`;
	}
};

// Styled Components
const StepsContainer = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
`;

const StepOuterContainer = styled.div`
	position: absolute;
	cursor: pointer;
	width: 100%;
	left: 0;
	padding: 50px 119px 0;
	/* Custom */
	bottom: ${props => handleStepBottom(props.index)};
	height: ${props =>
		handleStepHeight(props.stepsColumnOpen, props.nbSteps, props.HEIGHT_STEP)};
	opacity: ${props =>
		handleStepOpacity(
			props.index,
			props.stepsColumnOpen,
			props.innerStepsOpen
		)};
	transition: ${props =>
		handleStepTransition(
			props.index,
			props.stepsColumnOpen,
			props.innerStepsOpen,
			props.TIME_TRANSITION
		)};
	/* Media queries */
	${({ theme }) => theme.mediaQueries.xl} {
		padding: 50px 70px 0;
	}
	&:nth-child(1) {
		${props => (props.nbSteps === 1 ? `bottom: auto;` : ``)}
	}
	&:nth-child(2) {
		${props => (props.nbSteps === 2 ? `padding-top: 28px;` : ``)}
	}
`;

const Step = styled.div`
	position: relative;
`;

const StepTitle = styled.h2`
	margin: 0;
	font-size: ${({ theme }) => theme.fontSizes["2xl"]};
	${({ theme }) => theme.mediaQueries.l} {
		font-size: ${({ theme }) => theme.fontSizes["xl"]};
	}
`;

const StepDescription = styled.p`
	margin: 13px 0 0 0;
	font-size: ${({ theme }) => theme.fontSizes["l"]};
	font-weight: ${({ theme }) => theme.fontWeights["thin"]};
	${({ theme }) => theme.mediaQueries.l} {
		font-size: ${({ theme }) => theme.fontSizes["normal"]};
	}
`;

export default class StepsComp extends Component {
	static propTypes = {
		content: PropTypes.array.isRequired,
		stepsColumnOpen: PropTypes.bool.isRequired,
		innerStepsOpen: PropTypes.bool.isRequired,
		HEIGHT_STEP: PropTypes.number.isRequired,
		TIME_TRANSITION: PropTypes.number.isRequired,
		updateStepsColumnOpen: PropTypes.func.isRequired,
		updateInnerStepsOpen: PropTypes.func.isRequired,
	};
	state = {
		currentStep: null,
		currentTitle: null,
	};
	_importAsset = (type, data, index) => {
		return (
			<Suspense key={index} fallback="Loading charts">
				{type === "carousel" && <Carousel images={data} id={index} />}
				{type === "video" && <Video data={data} />}
			</Suspense>
		);
	};
	_renderInnerContentStep = (step, index) => {
		let assets = [];
		step.components.forEach((component, i) => {
			assets.push(this._importAsset(component.type, component.data, index + i));
		});
		this.setState({
			currentStep: assets,
			currentTitle: step.title,
		});
	};
	_clickOnStep = (step, i) => {
		this._renderInnerContentStep(step, i);
		if (!this.props.stepsColumnOpen) {
			this.props.updateStepsColumnOpen(true);
		}
		if (this.props.content.length === 1) {
			setTimeout(() => {
				this.props.updateInnerStepsOpen(true);
			}, 150);
		} else if (this.props.content.length === 2) {
			setTimeout(() => {
				this.props.updateInnerStepsOpen(true);
			}, 350);
		} else {
			this.props.updateInnerStepsOpen(true);
		}
	};
	render() {
		return (
			<StepsContainer>
				{this.props.content.map((step, i) => {
					return (
						<StepOuterContainer
							key={i}
							index={i}
							stepsColumnOpen={this.props.stepsColumnOpen}
							innerStepsOpen={this.props.innerStepsOpen}
							nbSteps={this.props.content.length}
							HEIGHT_STEP={this.props.HEIGHT_STEP}
							TIME_TRANSITION={this.props.TIME_TRANSITION}
							onClick={() => {
								this._clickOnStep(step, i);
							}}
						>
							<Step>
								<StepTitle>{step.title}</StepTitle>
								<StepDescription>{step.description}</StepDescription>
							</Step>
						</StepOuterContainer>
					);
				})}
				<InnerStep
					nbSteps={this.props.content.length}
					innerStepsOpen={this.props.innerStepsOpen}
					TIME_TRANSITION={this.props.TIME_TRANSITION}
					currentStep={this.state.currentStep}
					currentTitle={this.state.currentTitle}
					updateStepsColumnOpen={this.props.updateStepsColumnOpen}
					updateInnerStepsOpen={this.props.updateInnerStepsOpen}
				/>
			</StepsContainer>
		);
	}
}
