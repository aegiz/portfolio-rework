// Icons
import playImg from "./icons/play.svg";
import pauseImg from "./icons/pause.svg";
import previousImg from "./icons/previous.svg";
import nextImg from "./icons/next.svg";

// Package
import React from "react";

class CTAicon extends React.Component {
	render() {
		const icons = {
			play: playImg,
			pause: pauseImg,
			previous: previousImg,
			next: nextImg,
		};
		return (
			<img
				width={this.props.width}
				height={this.props.height}
				alt={this.props.alt}
				src={icons[this.props.type]}
				onClick={this.props.onClick}
				style={{ padding: "20px" }}
			></img>
		);
	}
}

export default CTAicon;
