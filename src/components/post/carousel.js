import React, { Component } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carousel.css";
import styled, { withTheme } from "styled-components";

// https://webdesign.tutsplus.com/tutorials/how-to-build-an-attractive-responsive-image-gallery-with-slickjs--cms-31355
// https://react-slick.neostack.com/docs/example/swipe-to-slide

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

export class CustomSlickCarousel extends Component {
	state = {
		nav1: null,
		nav2: null,
		currentSlide: 0,
		totalSlide: 5,
		slider1Loaded: false,
		slider2Loaded: false,
	};

	resize = function() {
		console.log("hello");
	};

	componentDidMount() {
		this.setState({
			nav1: this.slider1,
			nav2: this.slider2,
		});
		window.addEventListener("resize", this.resize);
	}
	componentWillUnmount() {
		window.removeEventListener("resize", this.resize);
	}
	render() {
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
		const settings = {
			className: "center",
			centerMode: true,
			infinite: true,
			centerPadding: "60px",
			slidesToShow: 3,
			speed: 500,
		};

		const settings1 = {
			arrows: false,
			vertical: true,
			infinite: true,
			slidesToShow: 3,
			slidesToScroll: 1,
			onInit: () => this.setState(state => ({ slider1Loaded: true })),
			beforeChange: (current, next) =>
				this.setState(state => ({ currentSlide: next })),
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
					},
				},
			],
		};

		const settings2 = {
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
		return (
			<>
				<Slider {...settings}>
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
				<div className="container">
					<Loading
						className="loading"
						sliderLoaded={this.state.slider1Loaded && this.state.slider2Loaded}
					>
						Carousel is loading...
					</Loading>
					<div className="synch-carousels">
						<div className="left child">
							<Slider
								className="gallery"
								asNavFor={this.state.nav2}
								ref={slider => (this.slider1 = slider)}
								{...settings1}
							>
								<div className="item">
									<img
										src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/gallery1.jpg"
										alt=""
									/>
								</div>
								<div className="item">
									<img
										src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/gallery2.jpg"
										alt=""
									/>
								</div>
								<div className="item">
									<img
										src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/gallery3.jpg"
										alt=""
									/>
								</div>
								<div className="item">
									<img
										src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/gallery4.jpg"
										alt=""
									/>
								</div>
								<div className="item">
									<img
										src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/gallery5.jpg"
										alt=""
									/>
								</div>
							</Slider>
						</div>
						<div className="right child">
							<Slider
								className="gallery"
								asNavFor={this.state.nav1}
								ref={slider => (this.slider2 = slider)}
								{...settings2}
							>
								<div className="item">
									<img
										src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/gallery1.jpg"
										alt=""
									/>
								</div>
								<div className="item">
									<img
										src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/gallery2.jpg"
										alt=""
									/>
								</div>
								<div className="item">
									<img
										src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/gallery3.jpg"
										alt=""
									/>
								</div>
								<div className="item">
									<img
										src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/gallery4.jpg"
										alt=""
									/>
								</div>
								<div className="item">
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
						</div>
					</div>
				</div>
			</>
		);
	}
}

export default CustomSlickCarousel;
