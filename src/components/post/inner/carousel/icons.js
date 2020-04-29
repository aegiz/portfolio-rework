// Package
import PropTypes from "prop-types";
import React, { Component } from "react";
import styled from "styled-components";

// Assets
import previousIcon from "./assets/previous.svg";
import nextIcon from "./assets/next.svg";

const Icon = styled.button`
	margin: 0;
	padding: 15px 20px;
	img {
		width: 40px;
		height: 40px;
	}
`;

export default class CTAIcon extends Component {
	static propTypes = {
		onClick: PropTypes.func.isRequired,
		type: PropTypes.string.isRequired,
		alt: PropTypes.string.isRequired,
		width: PropTypes.number.isRequired,
		height: PropTypes.number.isRequired,
	};
	render() {
		const icons = {
			previous: previousIcon,
			next: nextIcon,
		};
		return (
			<Icon onClick={this.props.onClick} onKeyDown={this.props.onClick}>
				<img
					width={this.props.width}
					height={this.props.height}
					alt={this.props.alt}
					src={icons[this.props.type]}
				/>
			</Icon>
		);
	}
}
