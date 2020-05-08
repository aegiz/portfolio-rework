// Automatically calculate the Width / Height of the class component it wraps
// See: https://stackoverflow.com/questions/36862334/get-viewport-window-height-in-reactjs

import React, { Component } from "react";
import { theme } from "@components/layout";

export default function withWindowDimensions(WrappedComponent) {
	return class extends Component {
		state = { width: 0, height: 0 };

		componentDidMount() {
			this.updateWindowDimensions();
			window.addEventListener("resize", this.updateWindowDimensions);
		}

		componentWillUnmount() {
			window.removeEventListener("resize", this.updateWindowDimensions);
		}

		updateWindowDimensions = () => {
			this.setState({ width: window.innerWidth, height: window.innerHeight });
		};
		render() {
			return (
				<WrappedComponent
					{...this.props}
					windowWidth={this.state.width}
					windowHeight={this.state.height}
					isXXs={this.state.width <= theme.breakpoints.xxs}
					isXs={this.state.width <= theme.breakpoints.xs}
					isS={this.state.width <= theme.breakpoints.s}
					isM={this.state.width <= theme.breakpoints.m}
					isL={this.state.width <= theme.breakpoints.l}
					isXL={this.state.width <= theme.breakpoints.xl}
					isXXL={this.state.width > theme.breakpoints.xl}
				/>
			);
		}
	};
}
