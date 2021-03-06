// Package
import PropTypes from "prop-types";
import React, { lazy, Suspense, Component } from "react";
import styled from "styled-components";

// Components
import InnerStep from "./innerStep";
const Carousel = lazy(() => import("@components/post/inner/carousel"));
const Illustration = lazy(() => import("@components/post/inner/illustration"));
const Quote = lazy(() => import("@components/post/inner/quote"));
const Paragraphs = lazy(() => import("@components/post/inner/paragraphs"));
const Video = lazy(() => import("@components/post/inner/video"));

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
	${({ theme }) => theme.mediaQueries.m} {
		position: relative;
	}
`;

const StepOuterContainer = styled.div`
	position: absolute;
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
	${({ theme }) => theme.mediaQueries.m} {
		display: ${props => (props.innerStepsOpen ? `none` : `block`)};
		position: relative;
		padding: 20px 0;
		height: auto;
		bottom: 0;
		opacity: 1;
	}
	&:nth-child(1) {
		${props => (props.nbSteps === 1 ? `bottom: auto;` : ``)}
	}
	&:nth-child(2) {
		${props => (props.nbSteps === 2 ? `padding-top: 28px;` : ``)}
	}
`;

const Step = styled.div`
	cursor: pointer;
	position: relative;
	width: 100%;
	max-width: 300px;
	${({ theme }) => theme.mediaQueries.m} {
		max-width: 500px;
	}
`;

const StepTitle = styled.h2`
	margin: 0;
	font-size: ${({ theme }) => theme.fontSizes["2xl"]};
	line-height: 1.4;
	${({ theme }) => theme.mediaQueries.l} {
		font-size: ${({ theme }) => theme.fontSizes["xl"]};
	}
	${({ theme }) => theme.mediaQueries.m} {
		width: 100%;
		max-width: 500px;
		font-size: ${({ theme }) => theme.fontSizes["2xl"]};
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
		currentlyDisplayedStep: {
			index: null,
			title: null,
			assets: null,
		},
	};
	_importAsset = (type, data, index) => {
		return (
			<Suspense key={index} fallback="">
				{type === "carousel" && data.length > 1 && (
					<Carousel data={data} id={index} />
				)}
				{type === "illustration" && <Illustration data={data} />}
				{type === "quote" && <Quote data={data} />}
				{type === "paragraphs" && <Paragraphs data={data} />}
				{type === "video" && <Video data={data} />}
			</Suspense>
		);
	};
	_renderInnerContentStep = index => {
		let assets = [];
		this.props.content[index].components.forEach((component, i) => {
			assets.push(this._importAsset(component.type, component.data, index + i));
		});
		this.setState({
			currentlyDisplayedStep: {
				index: index,
				title: this.props.content[index].title,
				assets: assets,
			},
		});
	};
	_clickOnStep = i => {
		// Start lazyloading innercontent immediatly
		this._renderInnerContentStep(i);
		// Open the Middle column immediately
		this.props.updateStepsColumnOpen(true);
		// Then wait a bit before opening the Inner step column
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
	componentDidUpdate(prevProps) {
		if (
			this.props.innerStepsOpen &&
			this.props.innerStepsOpen !== prevProps.innerStepsOpen
		) {
			setTimeout(() => {
				this._renderInnerContentStep(
					this.state.currentlyDisplayedStep.index || 0
				);
			}, 350);
		}
	}
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
						>
							<Step
								onClick={() => {
									this._clickOnStep(i);
								}}
								role={"button"}
							>
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
					assets={this.state.currentlyDisplayedStep.assets}
					title={this.state.currentlyDisplayedStep.title}
					updateStepsColumnOpen={this.props.updateStepsColumnOpen}
					updateInnerStepsOpen={this.props.updateInnerStepsOpen}
				/>
			</StepsContainer>
		);
	}
}
