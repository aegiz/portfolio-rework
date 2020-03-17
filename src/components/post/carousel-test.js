import React, { Component } from "react";
import Slider from "react-slick";

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
`;
export default class VerticalMode extends Component {
	state = {
		nav1: null,
		nav2: null,
		currentSlide: 0,
		totalSlide: 5,
		slider1Loaded: false,
		slider2Loaded: false,
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
			verticalSwiping: true,
			centerMode: true,
			onInit: () => this.setState(state => ({ slider1Loaded: true })),
			beforeChange: (current, next) =>
				this.setState(state => ({ currentSlide: next })),
		};
		const settings2 = {
			arrows: true,
			useTransform: false,
			draggable: false,
			slidesToScroll: 1,
			onInit: () => this.setState(state => ({ slider2Loaded: true })),
			beforeChange: (current, next) =>
				this.setState(state => ({ currentSlide: next })),
			nextArrow: <SampleNextArrow />,
			prevArrow: <SamplePrevArrow />,
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
		function SampleNextArrow(props) {
			const { className, style, onClick } = props;
			return (
				<div
					className={className}
					style={{ ...style, display: "block", background: "red" }}
					onClick={onClick}
				>
					<button className="arrow-left">
						<svg
							width="24"
							height="24"
							xmlns="http://www.w3.org/2000/svg"
							fillRule="evenodd"
							clipRule="evenodd"
						>
							<path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
						</svg>
					</button>
				</div>
			);
		}

		function SamplePrevArrow(props) {
			const { className, style, onClick } = props;
			return (
				<div
					className={className}
					style={{ ...style, display: "block", background: "green" }}
					onClick={onClick}
				>
					<button className="arrow-right">
						<svg
							width="24"
							height="24"
							xmlns="http://www.w3.org/2000/svg"
							fillRule="evenodd"
							clipRule="evenodd"
						>
							<path d="M2.117 12l7.527 6.235-.644.765-9-7.521 9-7.479.645.764-7.529 6.236h21.884v1h-21.883z" />
						</svg>
					</button>
				</div>
			);
		}
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
					</Container2>
				</MajorContainer>
			</>
		);
	}
}
