import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SlickCarousel = ({ text, size, bkgdColor, settings, images }) => (
	<Slider {...settings}>
		{images.map((image, i) => (
			<div key={i}>
				<img width="350" src={`${image}`} alt="Lake 11"></img>
			</div>
		))}
	</Slider>
);

export default SlickCarousel;
