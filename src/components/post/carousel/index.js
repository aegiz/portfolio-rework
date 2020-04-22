// Package
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

const Thumbnails = styled.ul`
	width: 100%;
	max-width: 300px;
	padding: 0;
	margin: 0;
	list-style: none;
	border: 1px solid silver;
	display: flex;
	flex-wrap: wrap;
	@media (max-width: 1023px) {
		display: none;
	}
`;

const Thumbnail = styled.li`
	width: 100px;
	height: 100px;
	padding: 5px;
	margin: 10px;
	cursor: pointer;
	img {
		border: ${props =>
			props.current !== props.index ? "none" : "1px solid red"};
		opacity: 1;
		width: 100%;
		height: 100%;
		object-fit: cover;
		transition: all 0.3s;
		&:hover {
			opacity: 0.65;
		}
	}
`;

const CarouselContainer = styled.div`
	position: relative;
	display: flex;
	flex-direction: row;
	width: 100%;
	max-width: 700px;
	@media (max-width: 1023px) {
		margin: 0 auto;
		flex-direction: column-reverse;
	}
`;

const ContainerSliderLeft = styled.div`
	display: none;
	@media (max-width: 1023px) {
		display: block;
		padding: 10px 0;
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
	state = {
		slickLeft: null,
		slickRight: null,
		currentSlide: 0,
		totalSlide: this.props.images.length,
		sliderLeftLoaded: false,
		sliderRightLoaded: false,
	};
	componentDidMount() {
		this.setState({
			slickLeft: this.sliderLeft,
			slickRight: this.sliderRight,
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
			<MainContainer
				carouselReady={
					this.state.sliderLeftLoaded && this.state.sliderRightLoaded
				}
			>
				<Thumbnails>
					{this.props.images.map((image, i) => (
						<Thumbnail
							className="thumbnail"
							onClick={e => this.state.slickRight.slickGoTo(i)}
							key={i}
							index={i}
							current={this.state.currentSlide}
						>
							<CustImg src={`${image.src}`} alt={`${image.alt}`} />
						</Thumbnail>
					))}
				</Thumbnails>
				<CarouselContainer>
					<ContainerSliderLeft hide={this.props.images.length < 4}>
						<Slider
							asNavFor={this.state.slickRight}
							ref={slider => (this.sliderLeft = slider)}
							{...settingsSliderLeft}
						>
							{this.props.images.map((image, i) => (
								<div
									className="slider-item"
									onClick={e => this.state.slickRight.slickGoTo(i)}
									onKeyDown={e => this.state.slickRight.slickGoTo(i)}
									key={i}
									role="button"
									tabIndex="0"
								>
									<CustImg src={`${image.src}`} alt={`${image.alt}`} />
								</div>
							))}
						</Slider>
					</ContainerSliderLeft>
					<ContainerSliderRight>
						<Slider
							asNavFor={this.state.slickLeft}
							ref={slider => (this.sliderRight = slider)}
							{...settingsSliderRight}
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
					</ContainerSliderRight>
				</CarouselContainer>
			</MainContainer>
		);
	}
}
