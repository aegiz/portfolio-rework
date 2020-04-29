// Package
import PropTypes from "prop-types";
import React, { Component } from "react";
import Slider from "react-slick";

// Components
import CTAicon from "./icons";

// Utils
import CustImg from "@utils/StaticImg";

// Styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./assets/carousel.css";
import styled from "styled-components";

const MainContainer = styled.div`
	opacity: ${props => (props.carouselReady ? "1" : "0")};
	display: flex;
	flex-direction: row;
	width: 100%;
	max-width: 1000px;
	margin: 0 auto;
`;

const CarouselContainer = styled.div`
	position: relative;
	width: 100%;
	.slider-item img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		margin: 0 auto;
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
	position: absolute;
	bottom: -50px;
	left: 0;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	background: rgba(255, 255, 255, 0.3);
	img {
		opacity: 0.5;
		padding: 0 10px;
		transition: all 0.3s;
		cursor: pointer;
		&:hover {
			opacity: 1;
		}
	}
`;

export default class CustomCarousel extends Component {
	static propTypes = {
		images: PropTypes.arrayOf(
			PropTypes.shape({
				src: PropTypes.string.isRequired,
				alt: PropTypes.string.isRequired,
			}).isRequired
		).isRequired,
	};
	state = {
		slickRight: null,
		currentSlide: null,
		totalSlide: null,
		sliderRightLoaded: false,
	};
	componentDidMount() {
		this.setState({
			slickRight: this.sliderRight,
			currentSlide: 0,
			totalSlide: this.props.images.length,
		});
	}
	render() {
		const settingsSlider = {
			autoplaySpeed: 300,
			fade: true,
			arrows: false,
			useTransform: false,
			draggable: false,
			swipe: false,
			slidesToScroll: 1,
			autoplay: false,
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
			<MainContainer carouselReady={this.state.sliderRightLoaded}>
				<CarouselContainer>
					<Slider
						ref={slider => (this.sliderRight = slider)}
						{...settingsSlider}
					>
						{this.props.images.map((image, i) => (
							<div className="slider-item" key={i}>
								<CustImg src={`${image.src}`} alt={`${image.alt}`} />
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
							onClick={() => this.state.slickRight.slickPrev()}
							onKeyDown={() => this.state.slickRight.slickPrev()}
						/>
						<CTAicon
							type={"next"}
							alt={"next icon"}
							width={24}
							height={24}
							onClick={() => this.state.slickRight.slickNext()}
							onKeyDown={() => this.state.slickRight.slickNext()}
						/>
					</IconContainter>
				</CarouselContainer>
			</MainContainer>
		);
	}
}
