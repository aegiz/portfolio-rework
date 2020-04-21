// Package
//import React, { lazy, Suspense, Component } from "react";
import React, { Component } from "react";

// Components

import Video from "@components/post/video";
import Carousel from "@components/post/carousel";

// Styles
import styled from "styled-components";

//const CustomSlickCarousel = lazy(() => import("@components/post/carousel"));

const Container = styled.div`
	position: relative;
`;

const Project = styled.div`
	position: relative;
	cursor: pointer;
`;

const ProjectTitle = styled.p`
	position: relative;
`;

const ProjectDescription = styled.p`
	position: relative;
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

// const Calendar = React.lazy(() => {
// 	return new Promise(resolve => setTimeout(resolve, 5 * 1000)).then(() =>
// 		import("@components/post/carousel")
// 	);
// });

export default class middleColumn extends Component {
	state = {
		comp: null,
	};
	render() {
		const renderComp = data => {
			console.log(data);
			this.setState({
				comp: <Carousel images={data} />,
			});
		};
		return (
			<Container>
				{this.props.content.map((project, i) => {
					return (
						<Project
							key={i}
							onClick={() => {
								renderComp(project.data);
							}}
						>
							<ProjectTitle>{project.title}</ProjectTitle>
							<ProjectDescription>{project.description}</ProjectDescription>
							{this.state.comp}
						</Project>
					);
				})}
			</Container>
		);
	}
}
