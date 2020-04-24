// Package
import PropTypes from "prop-types";
import React, { Component } from "react";
import styled from "styled-components";

// Assets
import PlusIcon from "@static/plus.svg";
import MinusIcon from "@static/minus.svg";

// Components
import Steps from "./steps";

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

const MiddleColumnCTAContainer = styled.div`
	position: relative;
	width: 100%;
	height: 80px;
	padding: 0 119px;
	${({ theme }) => theme.mediaQueries.xl} {
		padding: 0 70px;
	}
`;

const MiddleColumnCTA = styled.button`
	position: absolute;
	top: 50%;
	left: 0;
	transform: translateY(-50%);
	border: 0;
	margin: 0;
	padding: inherit;
	cursor: pointer;
	outline: none;
	background: transparent;
	text-transform: uppercase;
	color: ${({ theme }) => theme.colors.white};
	font-size: ${({ theme }) => theme.fontSizes["normal"]};
	font-weight: ${({ theme }) => theme.fontWeights["semibold"]};
	transition: all 0.3s;
	opacity: ${props => {
		if (props.more && props.middleColumnOpen) {
			return "0";
		} else if (props.more && !props.middleColumnOpen) {
			return "1";
		} else if (!props.more && props.middleColumnOpen) {
			return "1";
		} else if (!props.more && !props.middleColumnOpen) {
			return "0";
		}
	}};
	img {
		display: inline-block;
		width: 14px;
		height: 14px;
		margin-bottom: 3px;
		vertical-align: bottom;
	}
	span {
		height: 18px;
		margin-left: 5px;
		display: inline-block;
		vertical-align: bottom;
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
		isTransitioning: false,
		nbOfSteps: 0,
	};
	_handleCTAClick = () => {
		this.setState(prevState => ({
			isTransitioning: true,
			middleColumnOpen: !prevState.middleColumnOpen,
		}));
		setTimeout(() => {
			this.setState(() => ({
				isTransitioning: false,
			}));
		}, 450);
	};
	initNumberOfSteps = stepNumber => {
		this.setState({
			nbOfSteps: stepNumber,
		});
	};
	render() {
		return (
			<MiddleColumn middleColumnOpen={this.state.middleColumnOpen}>
				<Steps
					content={this.props.content}
					initNumberOfSteps={this.initNumberOfSteps}
					middleColumnOpen={this.state.middleColumnOpen}
				/>
				{this.state.nbOfSteps > 2 && (
					<MiddleColumnCTAContainer>
						<MiddleColumnCTA
							more
							middleColumnOpen={this.state.middleColumnOpen}
							onClick={this._handleCTAClick}
							disabled={this.state.isTransitioning}
						>
							<img src={PlusIcon} alt="plus icon" />
							<span>See More</span>
						</MiddleColumnCTA>
						<MiddleColumnCTA
							middleColumnOpen={this.state.middleColumnOpen}
							onClick={this._handleCTAClick}
							disabled={this.state.isTransitioning}
						>
							<img src={MinusIcon} alt="minus icon" />
							<span>See Less</span>
						</MiddleColumnCTA>
					</MiddleColumnCTAContainer>
				)}
			</MiddleColumn>
		);
	}
}
