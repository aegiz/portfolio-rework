// Package
import PropTypes from "prop-types";
import React, { lazy, Suspense, Component } from "react";

// Styles
import styled from "styled-components";

// Components
const Carousel = lazy(() => import("@components/post/carousel"));
const Video = lazy(() => import("@components/post/video"));

const Container = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
`;

const Step = styled.div`
	position: absolute;
	cursor: pointer;
	width: 100%;
	height: 80px;
	left: 0;
	padding: 0 119px;
	&:nth-child(1) {
		top: 150px;
	}
	&:nth-child(2) {
		top: 250px;
	}
	&:nth-child(3) {
		opacity: 0;
		top: 350px;
	}
	&:nth-child(4) {
		opacity: 0;
		top: 400px;
	}
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

export default class middleColumn extends Component {
	static propTypes = {
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
		currentStep: null,
	};
	render() {
		const importAsset = (type, data, index) => {
			return (
				<Suspense key={index} fallback="Loading charts">
					{type === "carousel" && <Carousel images={data} id={index} />}
					{type === "video" && <Video data={data} />}
				</Suspense>
			);
		};
		const renderStep = (components, index) => {
			let assets = [];
			components.forEach((component, i) => {
				assets.push(importAsset(component.type, component.data, index + i));
			});
			this.setState({
				currentStep: assets,
			});
		};
		return (
			<Container>
				{this.props.content.map((step, i) => {
					return (
						<Step
							key={i}
							onClick={() => {
								renderStep(step.components, i);
							}}
						>
							<StepTitle>{step.title}</StepTitle>
							<StepDescription>{step.description}</StepDescription>
						</Step>
					);
				})}
				{this.state.currentStep && (
					<ProjectInner>{this.state.currentStep}</ProjectInner>
				)}
			</Container>
		);
	}
}
