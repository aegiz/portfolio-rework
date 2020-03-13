import React, { Component } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carousel.css";
import styled, { withTheme } from "styled-components";

// https://webdesign.tutsplus.com/tutorials/how-to-build-an-attractive-responsive-image-gallery-with-slickjs--cms-31355
// https://react-slick.neostack.com/docs/example/swipe-to-slide

const Loading = styled.div`
	display: ${props => (props.slider1Loaded ? "none" : "block")};
`;

export class CustomSlickCarousel extends Component {
	state = {
		nav1: null,
		nav2: null,
		currentSlide: 1,
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
			className: "center",
			infinite: true,
			centerPadding: "60px",
			slidesToShow: 5,
			swipeToSlide: true,
			onInit: function() {
				console.log(`Slider Initiated!`);
			},
			afterChange: function(index) {
				console.log(
					`Slider Changed to: ${index + 1}, background: #222; color: #bada55`
				);
			},
		};
		const settings1 = {
			rows: 0,
			slidesToShow: 2,
			arrows: false,
			draggable: false,
			useTransform: false,
			mobileFirst: true,
			onInit: function() {
				console.log("Hello");
			},
			afterChange: function(index) {
				console.log(`Slider 1 Changed to: ${index + 1}`);
			},
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

		const settings2 = {
			rows: 0,
			useTransform: false,
			prevArrow: ".arrow-left",
			nextArrow: ".arrow-right",
			fade: true,
			onInit: function() {
				console.log("Hello 2");
			},
			afterChange: function(index) {
				console.log(`Slider 2 Changed to: ${index + 1}`);
			},
		};
		return (
			<>
				<Loading className="loading">Carousel is loading...</Loading>
				<Slider {...settings}>
					<div>
						<h3>1</h3>
					</div>
					<div>
						<h3>2</h3>
					</div>
					<div>
						<h3>3</h3>
					</div>
					<div>
						<h3>4</h3>
					</div>
					<div>
						<h3>5</h3>
					</div>
					<div>
						<h3>6</h3>
					</div>
					<div>
						<h3>7</h3>
					</div>
					<div>
						<h3>8</h3>
					</div>
					<div>
						<h3>9</h3>
					</div>
				</Slider>

				<div className="container">
					<div className="synch-carousels">
						<div className="left child">
							<Slider
								className="gallery"
								asNavFor={this.state.nav2}
								ref={slider => (this.slider1 = slider)}
								settings={settings1}
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
								className="gallery2"
								asNavFor={this.state.nav1}
								ref={slider => (this.slider2 = slider)}
								settings={settings2}
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
							<div className="nav-arrows">
								<button className="arrow-left">
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
								<button className="arrow-right">
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
							<div className="photos-counter">
								<span>{this.state.currentSlide}</span>
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
