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
	flex-direction: row;
	width: 100%;
	height: 500px;
	max-width: 1000px;
	margin: 0 auto;
	@media (max-width: 1023px) {
		height: auto;
		flex-direction: column-reverse;
	}
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
	display: ${props => (props.hide ? "none" : "block")};
	width: 320px;
	background: #5454aa;
	padding: 0.25em 1em;
	.slider-item img {
		margin: 0 auto;
		height: 120px;
	}
	@media (max-width: 1023px) {
		width: 100%;
	}
	@media (max-width: 480px) {
		display: none;
	}
`;

const Container2 = styled.div`
	position: relative;
	width: 620px;
	background: #5454bb;
	.slider-item img {
		margin: 0 auto;
		width: 100%;
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
	@media (max-width: 1023px) {
		width: 100%;
	}
`;

const IconContainter = styled.div`
	height: 60px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	position: absolute;
	bottom: 0;
	right: 0;
	cursor: pointer;
	img {
		padding: 0 10px;
	}
	@media (max-width: 480px) {
		display: none;
	}
`;

export default class VerticalMode extends Component {
	state = {
		nav1: null,
		nav2: null,
		currentSlide: 0,
		totalSlide: this.props.images.length,
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
			slidesToShow: this.props.images.length < 4 ? this.props.images.length : 3,
			slidesToScroll: 1,
			vertical: true,
			centerMode: true,
			onInit: () => this.setState(state => ({ slider1Loaded: true })),
			beforeChange: (current, next) =>
				this.setState(state => ({ currentSlide: next })),
			responsive: [
				{
					breakpoint: 1023,
					settings: {
						centerMode: false,
						vertical: false,
					},
				},
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 2,
						centerMode: false,
						vertical: false,
					},
				},
			],
		};
		const settings2 = {
			fade: true,
			arrows: false,
			useTransform: false,
			draggable: false,
			slidesToScroll: 1,
			autoplaySpeed: 500,
			onInit: () => this.setState(state => ({ slider2Loaded: true })),
			beforeChange: (current, next) =>
				this.setState(state => ({ currentSlide: next })),
			responsive: [
				{
					breakpoint: 480,
					settings: {
						arrows: true,
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
					<Container1 hide={this.props.images.length < 4}>
						<Slider
							className="gallery"
							asNavFor={this.state.nav2}
							ref={slider => (this.slider1 = slider)}
							{...settings}
						>
							{this.props.images.map((image, i) => (
								<div
									className="slider-item"
									onClick={e => this.state.nav2.slickGoTo(i)}
									key={i}
								>
									<img src={`${image.src}`} alt={`${image.alt}`}></img>
								</div>
							))}
						</Slider>
					</Container1>
					<Container2>
						<Slider
							className="gallery"
							asNavFor={this.state.nav1}
							ref={slider => (this.slider2 = slider)}
							{...settings2}
						>
							{this.props.images.map((image, i) => (
								<div className="slider-item" key={i}>
									<img src={`${image.src}`} alt={`${image.alt}`}></img>
								</div>
							))}
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
