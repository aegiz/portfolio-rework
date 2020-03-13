import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SlickCarousel = ({ settings, images }) => (
	<Slider {...settings}>
		{images.map((image, i) => (
			<div key={i}>
				<img width="350" src={`${image.src}`} alt={`${image.alt}`}></img>
			</div>
		))}
	</Slider>
);

export default SlickCarousel;
