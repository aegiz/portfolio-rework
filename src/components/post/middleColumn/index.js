// Package
import PropTypes from "prop-types";
import React, { Component } from "react";
import styled from "styled-components";

// Components
import Steps from "./steps";
import TriggerCTA from "./triggerCTA";

// Styles
const MiddleColumn = styled.div`
	z-index: 1;
	position: absolute;
	left: calc(45% - 40px);
	bottom: 0;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	background: ${({ theme }) => theme.colors.black};
	color: ${({ theme }) => theme.colors.white};
	width: 31.7%;
	height: ${props => (props.middleColumnOpen ? "100%" : "400px")};
	transition: all 0.3s;
	${({ theme }) => theme.mediaQueries.l} {
		padding: 25px 50px 0;
	}
	${({ theme }) => theme.mediaQueries.m} {
		padding: 25px 70px 0;
		position: relative;
		width: 100%;
		left: auto;
		bottom: auto;
	}
`;

export default class middleColumn extends Component {
	static propTypes = {
		textCTAopen: PropTypes.string,
		textCTAclose: PropTypes.string,
		content: PropTypes.arrayOf(
			PropTypes.shape({
				title: PropTypes.string.isRequired,
				description: PropTypes.string.isRequired,
				components: PropTypes.arrayOf(
					PropTypes.shape({
						type: PropTypes.string.isRequired,
						data: PropTypes.shape.isRequired,
					}).isRequired
				).isRequired,
			}).isRequired
		).isRequired,
	};
	state = {
		middleColumnOpen: false,
	};
	updateColumnOpen = open => {
		this.setState({
			middleColumnOpen: open,
		});
	};
	render() {
		return (
			<MiddleColumn middleColumnOpen={this.state.middleColumnOpen}>
				<Steps
					content={this.props.content}
					middleColumnOpen={this.state.middleColumnOpen}
				/>
				{this.props.content.length > 2 && (
					<TriggerCTA
						updateColumnOpen={this.updateColumnOpen}
						middleColumnOpen={this.state.middleColumnOpen}
					/>
				)}
			</MiddleColumn>
		);
	}
}
