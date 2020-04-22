// Package
import AniLink from "gatsby-plugin-transition-link/AniLink";
import React, { Component } from "react";

// Styles
import styled from "styled-components";

const MainContainer = styled.div`
	margin-top: 73px;
	width: 100%;
	padding: 0 90px;
	${({ theme }) => theme.mediaQueries.l} {
		padding: 0 70px;
	}
`;

const Button = styled.button`
	position: relative;
	width: 166px;
	display: flex;
	flex-direction: row;
	align-items: flex-start;
	justify-content: flex-start;
	border: 0;
	cursor: pointer;
	outline: none;
	background: transparent;
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

export default class BackHomeCTA extends Component {
	render() {
		return (
			<MainContainer>
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
						<ButtonText>Homepage</ButtonText>
					</Button>
				</AniLink>
			</MainContainer>
		);
	}
}
