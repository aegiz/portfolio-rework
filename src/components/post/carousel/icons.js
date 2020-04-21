// Package
import React from "react";

// Assets
import previousIcon from "./assets/previous.svg";
import nextIcon from "./assets/next.svg";

class CTAicon extends React.Component {
	render() {
		const icons = {
			previous: previousIcon,
			next: nextIcon,
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
