// Package
import PropTypes from "prop-types";
import React, { lazy, Suspense, Component } from "react";
import styled from "styled-components";

// Components
const Carousel = lazy(() => import("@components/post/carousel"));
const Video = lazy(() => import("@components/post/video"));

/* Styles */

// Helpers
const handleStepTransition = (middleColumnOpen, index) => {
	const delay = 0.45 + 0.15 * (index - 2);
	if (middleColumnOpen) {
		return `height 0.3s ease ${delay}s, opacity 0.3s ease ${delay}s;`;
	} else {
		return `height 0.3s ease ${delay}s, opacity 0.15s ease;`;
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
	height: ${props => (props.middleColumnOpen ? "100%" : "400px")};
	left: 0;
	padding: 50px 119px 0;
	/* Poperties that will affect all the element... Except the two first ones*/
	bottom: -${props => 300 + (props.index - 2) * 150}px;
	opacity: ${props => (props.middleColumnOpen ? "1" : "0")};
	transition: ${props =>
		handleStepTransition(props.middleColumnOpen, props.index)};
	${({ theme }) => theme.mediaQueries.xl} {
		padding: 50px 70px 0;
	}
	&:nth-child(1) {
		transition: height 0.3s ease 0.15s;
		bottom: 0;
		opacity: 1;
	}
	&:nth-child(2) {
		transition: height 0.3s ease 0.3s;
		bottom: -150px;
		opacity: 1;
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

const ProjectInner = styled.div`
	/* display: none;
	 overflow: hidden;
	opacity: 0;
	position: absolute;
	top: 0;
	left: 0;
	width: 0;
	height: 100%;
	transition: all 0.3s; */
`;

export default class StepsComp extends Component {
	static propTypes = {
		content: PropTypes.array.isRequired,
		middleColumnOpen: PropTypes.bool.isRequired,
	};
	state = {
		currentStep: null,
	};
	_importAsset = (type, data, index) => {
		return (
			<Suspense key={index} fallback="Loading charts">
				{type === "carousel" && <Carousel images={data} id={index} />}
				{type === "video" && <Video data={data} />}
			</Suspense>
		);
	};
	_renderStep = (components, index) => {
		let assets = [];
		components.forEach((component, i) => {
			assets.push(this._importAsset(component.type, component.data, index + i));
		});
		this.setState({
			currentStep: assets,
		});
	};
	render() {
		return (
			<StepsContainer>
				{this.props.content.map((step, i) => {
					return (
						<StepOuterContainer
							key={i}
							onClick={() => {
								this._renderStep(step.components, i);
							}}
							index={i}
							middleColumnOpen={this.props.middleColumnOpen}
						>
							<Step>
								<StepTitle>{step.title}</StepTitle>
								<StepDescription>{step.description}</StepDescription>
							</Step>
						</StepOuterContainer>
					);
				})}
				{this.state.currentStep && (
					<ProjectInner>{this.state.currentStep}</ProjectInner>
				)}
			</StepsContainer>
		);
	}
}
