// Package
import React, { Component } from "react";
import styled from "styled-components";

// Components
import Carousel from "@components/post/inner/carousel";

// Utils
import withWindowDimensions from "@utils/withWindowDimensions";

const SlideShow = styled.div`
	width: 100%;
`;

class SlideShowComp extends Component {
	render() {
		const heighCarousel = `${Math.floor(
			(this.props.windowHeight * 81) / 100
		)}px`;
		return (
			<SlideShow heighCarousel={heighCarousel}>
				<Carousel
					withoutCounter
					height={heighCarousel}
					margin={"0 0 0 0"}
					data={this.props.data}
				/>
			</SlideShow>
		);
	}
}

export default withWindowDimensions(SlideShowComp);
