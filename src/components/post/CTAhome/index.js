// Package
import AniLink from "gatsby-plugin-transition-link/AniLink";
import PropTypes from "prop-types";
import React, { Component } from "react";

// Styles
import styled from "styled-components";

// Utils
import withWindowDimensions from "@utils/withWindowDimensions";

const MainContainer = styled.div`
	margin-top: 73px;
	width: 100%;
	padding: 0 90px;
	a {
		display: block;
	}
	${({ theme }) => theme.mediaQueries.l} {
		padding: 0 70px;
	}
	${({ theme }) => theme.mediaQueries.m} {
		margin: 0;
		padding: 0;
	}
`;

const Button = styled.button`
	position: relative;
	width: 166px;
	display: flex;
	flex-direction: row;
	align-items: flex-start;
	justify-content: flex-start;
	padding: 0;
`;

const Circle = styled.span`
	transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
	position: relative;
	display: block;
	margin: 0;
	background: ${({ theme }) => theme.colors.black};
	border-radius: 1.625rem;
	width: 48px;
	height: 48px;
	${({ theme }) => theme.mediaQueries.l} {
		width: 40px;
		height: 40px;
	}
	${Button}:hover & {
		width: 100%;
	}
`;

const Icon = styled.span`
	transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
	position: absolute;
	margin: auto;
	transform: rotate(180deg);
	transform-origin: 14px center;
	top: 50%;
	left: 0.625rem;
	width: 1.125rem;
	height: 0.125rem;
	background: none;
	${Button}:hover & {
		background: ${({ theme }) => theme.colors.white};
	}
	&:before {
		content: "";
		position: absolute;
		top: -0.25rem;
		right: 0.0625rem;
		width: 0.625rem;
		height: 0.625rem;
		border-top: 0.125rem solid #fff;
		border-right: 0.125rem solid #fff;
		transform: rotate(45deg);
	}
	${({ theme }) => theme.mediaQueries.l} {
		left: 0.45rem;
	}
`;

const ButtonText = styled.span`
	color: ${({ theme }) => theme.colors.black};
	font-weight: ${({ theme }) => theme.fontWeights.semibold};
	transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
	position: absolute;
	top: 50%;
	right: 22px;
	transform: translateY(-50%);
	text-align: center;
	text-transform: uppercase;
	font-size: 0.9rem;
	${Button}:hover & {
		color: ${({ theme }) => theme.colors.white};
	}
	${({ theme }) => theme.mediaQueries.l} {
		font-size: ${({ theme }) => theme.fontSizes["normal"]};
	}
`;

class BackHomeCTAComp extends Component {
	static propTypes = {
		text: PropTypes.string.isRequired,
	};
	render() {
		return (
			<MainContainer>
				{!this.props.isM ? (
					<AniLink
						cover
						bg="#000000"
						top="entry"
						direction="right"
						duration={0.8}
						to="/"
					>
						<Button>
							<Circle aria-hidden="true">
								<Icon />
							</Circle>
							<ButtonText>{this.props.text}</ButtonText>
						</Button>
					</AniLink>
				) : (
					<AniLink fade to={"/"}>
						<Button>
							<Circle aria-hidden="true">
								<Icon />
							</Circle>
							<ButtonText>{this.props.text}</ButtonText>
						</Button>
					</AniLink>
				)}
			</MainContainer>
		);
	}
}

export default withWindowDimensions(BackHomeCTAComp);
