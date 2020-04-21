// Package
import React, { Component } from "react";

// Components
import CustomSlickCarousel from "@components/post/carousel";
import Video from "@components/post/video";

// Styles
import styled from "styled-components";

const Container = styled.div`
	position: relative;
`;

const Project = styled.div`
	position: relative;
`;

const ProjectTitle = styled.p`
	position: relative;
`;

const ProjectDescription = styled.p`
	position: relative;
`;

const ProjectInner = styled.div`
	display: none;
	overflow: hidden;
	opacity: 0;
	position: absolute;
	top: 0;
	left: 0;
	width: 0;
	height: 100%;
	transition: all 0.3s;
`;

export default class middleColumn extends Component {
	render() {
		return (
			<Container>
				{this.props.content.map((project, i) => {
					return (
						<Project key={i}>
							<ProjectTitle>{project.title}</ProjectTitle>
							<ProjectDescription>{project.description}</ProjectDescription>
							<ProjectInner>
								{project.type === "carousel" && (
									<CustomSlickCarousel images={project.data} />
								)}
								{project.type === "video" && <Video data={project.data} />}
							</ProjectInner>
						</Project>
					);
				})}
			</Container>
		);
	}
}
