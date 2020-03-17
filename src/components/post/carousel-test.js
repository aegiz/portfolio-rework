// Package
import React, { Component } from "react";
import Slider from "react-slick";

// Components
import CTAicon from "./icons";

// Styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled, { withTheme } from "styled-components";

const MajorContainer = styled.div`
	display: flex;
	width: 100%;
	height: 500px;
`;

const Loading = styled.div`
	display: ${props => (props.sliderLoaded ? "none" : "flex")};
	background: white;
	position: fixed;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	align-items: center;
	justify-content: center;
	z-index: 2;
`;

const Container1 = styled.div`
	width: 320px;
	background: #5454aa;
	border-radius: 3px;
	border: 2px solid black;
	margin: 0 1em;
	padding: 0.25em 1em;
	img {
		max-width: 100%;
		height: 120px;
	}
`;

const Container2 = styled.div`
	position: relative;
	width: 620px;
	background: #5454aa;
	border-radius: 3px;
	border: 2px solid black;
	margin: 0 1em;
	padding: 0.25em 1em;
	img {
		max-width: 100%;
		height: auto;
	}
	.photos-counter {
		position: absolute;
		top: 10px;
		right: 0;
		padding: 0 20px;
		color: white;
		background: #292929;
	}
`;

const IconContainter = styled.div`
	position: absolute;
	bottom: 0;
	right: 0;
	display: flex;
	cursor: pointer;
`;

export default class VerticalMode extends Component {
	state = {
		nav1: null,
		nav2: null,
		currentSlide: 0,
		totalSlide: 5,
		slider1Loaded: false,
		slider2Loaded: false,
		autoplay: false,
	};

	componentDidMount() {
		this.setState({
			nav1: this.slider1,
			nav2: this.slider2,
		});
	}
	render() {
		const settings = {
			arrows: false,
			infinite: true,
			slidesToShow: 3,
			slidesToScroll: 1,
			vertical: true,
			centerMode: true,
			onInit: () => this.setState(state => ({ slider1Loaded: true })),
			beforeChange: (current, next) =>
				this.setState(state => ({ currentSlide: next })),
		};
		const settings2 = {
			arrows: false,
			useTransform: false,
			draggable: false,
			slidesToScroll: 1,
			onInit: () => this.setState(state => ({ slider2Loaded: true })),
			beforeChange: (current, next) =>
				this.setState(state => ({ currentSlide: next })),
			autoplaySpeed: 500,
			responsive: [
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 3,
					},
				},
				{
					breakpoint: 1023,
					settings: {
						slidesToShow: 1,
						vertical: true,
					},
				},
			],
		};

		return (
			<>
				<MajorContainer>
					<Loading
						className="loading"
						sliderLoaded={this.state.slider1Loaded && this.state.slider2Loaded}
					>
						Carousel is loading...
					</Loading>
					<Container1>
						<Slider
							className="gallery"
							asNavFor={this.state.nav2}
							ref={slider => (this.slider1 = slider)}
							{...settings}
						>
							<div onClick={e => this.state.nav1.slickGoTo(0)}>
								<img
									src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/gallery1.jpg"
									alt=""
								/>
							</div>
							<div onClick={e => this.state.nav1.slickGoTo(1)}>
								<img
									src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/gallery2.jpg"
									alt=""
								/>
							</div>
							<div onClick={e => this.state.nav1.slickGoTo(2)}>
								<img
									src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/gallery3.jpg"
									alt=""
								/>
							</div>
							<div onClick={e => this.state.nav1.slickGoTo(3)}>
								<img
									src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/gallery4.jpg"
									alt=""
								/>
							</div>
							<div onClick={e => this.state.nav1.slickGoTo(4)}>
								<img
									src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/gallery5.jpg"
									alt=""
								/>
							</div>
						</Slider>
					</Container1>
					<Container2>
						<Slider
							className="gallery"
							asNavFor={this.state.nav1}
							ref={slider => (this.slider2 = slider)}
							{...settings2}
						>
							<div>
								<img
									src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/gallery1.jpg"
									alt=""
								/>
							</div>
							<div>
								<img
									src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/gallery2.jpg"
									alt=""
								/>
							</div>
							<div>
								<img
									src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/gallery3.jpg"
									alt=""
								/>
							</div>
							<div>
								<img
									src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/gallery4.jpg"
									alt=""
								/>
							</div>
							<div>
								<img
									src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/gallery5.jpg"
									alt=""
								/>
							</div>
						</Slider>
						<div className="photos-counter">
							<span>{this.state.currentSlide + 1}</span>
							<span>/</span>
							<span>{this.state.totalSlide}</span>
						</div>
						<IconContainter>
							<CTAicon
								type={"previous"}
								alt={"previous icon"}
								width={24}
								height={24}
								onClick={() => this.state.nav2.slickPrev()}
							/>
							<CTAicon
								type={"next"}
								alt={"next icon"}
								width={24}
								height={24}
								onClick={() => this.state.nav2.slickNext()}
							/>
							<CTAicon
								type={this.state.autoplay ? "pause" : "play"}
								alt={"play icon"}
								width={32}
								height={32}
								onClick={() => {
									// This doesn't work
									if (this.state.autoplay) {
										this.state.nav2.slickPause();
										this.setState({
											autoplay: false,
										});
									} else {
										this.state.nav2.slickPlay();
										this.setState({
											autoplay: true,
										});
									}
								}}
							/>
						</IconContainter>
					</Container2>
				</MajorContainer>
			</>
		);
	}
}
