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
			<button onClick={this.props.onClick} onKeyDown={this.props.onClick}>
				<img
					width={this.props.width}
					height={this.props.height}
					alt={this.props.alt}
					src={icons[this.props.type]}
				/>
			</button>
		);
	}
}

export default CTAicon;
