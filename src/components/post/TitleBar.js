import React from "react";
import Slider from "react-slick";

const TitleBar = ({ text, size, bkgdColor, settings }) => (
	<div
		style={{
			margin: "2rem 0",
			padding: "2rem",
			backgroundColor: bkgdColor || "#fff",
		}}
	>
		<h2
			style={{
				fontSize: size || "18px",
				margin: 0,
			}}
		>
			{text}
		</h2>
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
		</Slider>
	</div>
);

export default TitleBar;
