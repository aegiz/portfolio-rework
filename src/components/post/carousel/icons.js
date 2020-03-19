// Icons
import previousImg from "./icons/previous.svg";
import nextImg from "./icons/next.svg";

// Package
import React from "react";

class CTAicon extends React.Component {
	render() {
		const icons = {
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
			></img>
		);
	}
}

export default CTAicon;
