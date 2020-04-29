// Package
import PropTypes from "prop-types";
import React, { Component } from "react";
import Slider from "react-slick";
import { theme } from "@components/layout";

// Utils
import CustImg from "@utils/StaticImg";

// Styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./assets/carousel.css";
import styled from "styled-components";

// Styled Components
const CarouselContainer = styled.div`
	position: relative;
	margin: 85px 0 75px 0;
	width: 100%;
	height: 473px;
	opacity: ${props => (props.carouselReady ? "1" : "0")};
`;

const PhotoCounter = styled.div`
	position: absolute;
	top: -80px;
	right: 85px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
`;

const Digits = styled.div`
	transform: rotate(-90deg);
	transform-origin: center;
	margin: 0 0 10px 0;
	color: ${({ theme }) => theme.colors.white};
	font-weight: ${({ theme }) => theme.fontWeights["semibold"]};
`;

const Current = styled(Digits)`
	margin: 10px 0 0 0;
	mix-blend-mode: exclusion;
`;

const Bar = styled.div`
	width: 3px;
	height: 45px;
	background: ${props =>
		props.bottom ? theme.colors.black : theme.colors.white};
`;

const SliderItem = styled.div`
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		margin: 0 auto;
	}
`;

const IconContainter = styled.div`
	position: absolute;
	bottom: -75px;
	left: 0;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	${({ theme }) => theme.mediaQueries.l} {
		bottom: -50px;
	}
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

const CTAprev = styled.button`
	position: relative;
	width: 60px;
	height: 75px;
	padding: 0;
	margin: 0;
	background: ${theme.colors.white};
	${({ theme }) => theme.mediaQueries.l} {
		height: 50px;
	}
	&:before {
		content: "";
		position: absolute;
		top: calc(50% - 9px);
		right: calc(50% - 10px);
		width: 17px;
		height: 17px;
		border-top: 2px solid ${theme.colors.grey.main};
		border-right: 2px solid ${theme.colors.grey.main};
		transform: rotate(225deg);
	}
`;

const CTAnext = styled(CTAprev)`
	&:before {
		transform: rotate(45deg);
		right: calc(50% - 4px);
	}
`;

export default class CarouselComp extends Component {
	static propTypes = {
		data: PropTypes.arrayOf(
			PropTypes.shape({
				src: PropTypes.string.isRequired,
				alt: PropTypes.string.isRequired,
			}).isRequired
		).isRequired,
	};
	state = {
		slider: null,
		DigitsSlide: null,
		totalSlide: null,
		sliderLoaded: false,
	};
	componentDidMount() {
		this.setState({
			slider: this.slider,
			DigitsSlide: 0,
			totalSlide: this.props.data.length,
		});
	}
	_addDigits = nb => {
		return nb < 10 ? `0${nb}` : nb;
	};
	render() {
		const settingsSlider = {
			fade: true,
			arrows: false,
			useTransform: false,
			draggable: false,
			swipe: false,
			slidesToScroll: 1,
			autoplay: false,
			onInit: () => this.setState(state => ({ sliderLoaded: true })),
			beforeChange: (Digits, next) =>
				this.setState(state => ({ DigitsSlide: next })),
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
			<CarouselContainer carouselReady={this.state.sliderLoaded}>
				<Slider ref={slider => (this.slider = slider)} {...settingsSlider}>
					{this.props.data.map((image, i) => (
						<SliderItem key={i}>
							<CustImg src={`${image.src}`} alt={`${image.alt}`} />
						</SliderItem>
					))}
				</Slider>
				<PhotoCounter>
					<Digits>/ {this._addDigits(this.state.totalSlide)}</Digits>
					<Bar />
					<Bar bottom />
					<Current>{this._addDigits(this.state.DigitsSlide + 1)}</Current>
				</PhotoCounter>
				<IconContainter>
					<CTAprev
						onClick={() => this.state.slider.slickPrev()}
						onKeyDown={() => this.state.slider.slickPrev()}
					/>
					<CTAnext
						onClick={() => this.state.slider.slickNext()}
						onKeyDown={() => this.state.slider.slickNext()}
					/>
				</IconContainter>
			</CarouselContainer>
		);
	}
}
