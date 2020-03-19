// Package
import React, { Component } from "react";
import Slider from "react-slick";

// Components
import CTAicon from "./icons";

// Styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";

const MainContainer = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
	max-width: 1000px;
	margin: 0 auto;
`;

const Thumbnails = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	align-items: flex-start;
	justify-content: flex-start;
	width: 100%;
	@media (max-width: 1023px) {
		display: none;
	}
`;

const Thumbnail = styled.div`
	width: 100px;
	height: 100px;
	padding: 0 10px;
	cursor: pointer;
	img {
		border: ${props =>
			props.current != props.index ? "none" : "1px solid red"};
		opacity: 1;
		width: 100%;
		object-fit: cover;
		transition: all 0.3s;
		&:hover {
			opacity: 0.65;
		}
	}
`;

const CarouselContainer = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
	height: 500px;
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

const ContainerSliderLeft = styled.div`
	display: none;
	@media (max-width: 1023px) {
		display: block;
		padding: 0.25em 1em;
		width: 100%;
	}
	@media (max-width: 480px) {
		display: none;
	}
	.slider-item {
		opacity: 0.8;
		transition: all 0.3s;
		cursor: pointer;
		&:focus {
			outline: none;
		}
		img {
			margin: 0 auto;
			height: 120px;
		}
	}
	.slick-current .slider-item {
		opacity: 1;
		transform: scale(1.1);
	}
`;

const ContainerSliderRight = styled.div`
	position: relative;
	width: 620px;
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
	background: rgba(255, 255, 255, 0.3);
	img {
		opacity: 1;
		padding: 0 10px;
		transition: all 0.3s;
		cursor: pointer;
		&:hover {
			opacity: 0.8;
		}
	}
`;

export default class CustomCarousel extends Component {
	state = {
		slick1: null,
		slick2: null,
		currentSlide: 0,
		totalSlide: this.props.images.length,
		sliderLeftLoaded: false,
		sliderRightLoaded: false,
		autoplay: false,
	};

	componentDidMount() {
		this.setState({
			slick1: this.slider1,
			slick2: this.slider2,
		});
	}
	render() {
		const settingsSliderLeft = {
			autoplaySpeed: 300,
			arrows: false,
			infinite: true,
			slidesToShow: this.props.images.length < 4 ? this.props.images.length : 3,
			slidesToScroll: 1,
			vertical: true,
			centerMode: true,
			onInit: () => this.setState(state => ({ sliderLeftLoaded: true })),
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
		const settingsSliderRight = {
			fade: true,
			arrows: false,
			useTransform: false,
			draggable: false,
			swipe: false,
			slidesToScroll: 1,
			autoplaySpeed: 300,
			onInit: () => this.setState(state => ({ sliderRightLoaded: true })),
			beforeChange: (current, next) =>
				this.setState(state => ({ currentSlide: next })),
			responsive: [
				{
					breakpoint: 480,
					settings: {
						fade: false,
						draggable: true,
						swipe: true,
					},
				},
			],
		};

		return (
			<>
				<MainContainer>
					<Thumbnails>
						{this.props.images.map((image, i) => (
							<Thumbnail
								className="thumbnail"
								onClick={e => this.state.slick2.slickGoTo(i)}
								key={i}
								index={i}
								current={this.state.currentSlide}
							>
								<img src={`${image.src}`} alt={`${image.alt}`}></img>
							</Thumbnail>
						))}
					</Thumbnails>
					<CarouselContainer>
						<Loading
							sliderLoaded={
								this.state.sliderLeftLoaded && this.state.sliderRightLoaded
							}
						>
							Carousel is loading...
						</Loading>
						<ContainerSliderLeft hide={this.props.images.length < 4}>
							<Slider
								asNavFor={this.state.slick2}
								ref={slider => (this.slider1 = slider)}
								{...settingsSliderLeft}
							>
								{this.props.images.map((image, i) => (
									<div
										className="slider-item"
										onClick={e => this.state.slick2.slickGoTo(i)}
										key={i}
									>
										<img src={`${image.src}`} alt={`${image.alt}`}></img>
									</div>
								))}
							</Slider>
						</ContainerSliderLeft>
						<ContainerSliderRight>
							<Slider
								asNavFor={this.state.slick1}
								ref={slider => (this.slider2 = slider)}
								{...settingsSliderRight}
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
									onClick={() => this.state.slick2.slickPrev()}
								/>
								<CTAicon
									type={"next"}
									alt={"next icon"}
									width={24}
									height={24}
									onClick={() => this.state.slick2.slickNext()}
								/>
								<CTAicon
									type={this.state.autoplay ? "pause" : "play"}
									alt={"play icon"}
									width={32}
									height={32}
									onClick={() => {
										// This doesn't work
										if (this.state.autoplay) {
											this.state.slick2.slickPause();
											this.setState({
												autoplay: false,
											});
										} else {
											this.state.slick2.slickPlay();
											this.setState({
												autoplay: true,
											});
										}
									}}
								/>
							</IconContainter>
						</ContainerSliderRight>
					</CarouselContainer>
				</MainContainer>
			</>
		);
	}
}
