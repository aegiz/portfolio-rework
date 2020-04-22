// Package
import React, { lazy, Suspense, Component } from "react";

// Styles
import styled from "styled-components";

// Components
const Carousel = lazy(() => import("@components/post/carousel"));
const Video = lazy(() => import("@components/post/video"));

const Container = styled.div`
	position: relative;
`;

const Project = styled.div`
	position: relative;
	cursor: pointer;
`;

const ProjectTitle = styled.h2`
	margin: 48px 0 0 0;
	font-size: ${({ theme }) => theme.fontSizes["2xl"]};
	${({ theme }) => theme.mediaQueries.l} {
		font-size: ${({ theme }) => theme.fontSizes["xl"]};
	}
`;

const ProjectDescription = styled.p`
	margin: 13px 0 0 0;
	font-size: ${({ theme }) => theme.fontSizes["l"]};
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
	state = {
		currentProject: null,
	};
	render() {
		const importAsset = (type, data) => {
			return (
				<Suspense fallback="Loading charts">
					{type === "carousel" && <Carousel images={data} />}
					{type === "video" && <Video data={data} />}
				</Suspense>
			);
		};
		const renderProject = (type, data) => {
			const asset = importAsset(type, data);
			this.setState({
				currentProject: asset,
			});
		};
		return (
			<Container>
				{this.props.content.map((project, i) => {
					return (
						<Project
							key={i}
							onClick={() => {
								renderProject(project.type, project.data);
							}}
						>
							<ProjectTitle>{project.title}</ProjectTitle>
							<ProjectDescription>{project.description}</ProjectDescription>
						</Project>
					);
				})}
				{this.state.currentProject && (
					<ProjectInner>{this.state.currentProject}</ProjectInner>
				)}
			</Container>
		);
	}
}
