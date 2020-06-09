// Package
import AniLink from "gatsby-plugin-transition-link/AniLink";
import React from "react";
import styled from "styled-components";

// Components
import Logo from "./logo";

// Utils
import withWindowDimensions from "@utils/withWindowDimensions";
import CustImg from "@utils/StaticImg";

const MainContainer = styled.div`
	width: 100%;
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
`;

const BackgroundContainer = styled.div`
	width: 100%;
	height: 730px;
	position: absolute;
	top: -80px;
	left: 0;
	.box-shadow {
		z-index: 2;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		box-shadow: inset 0px 160px 40px rgba(0, 0, 0, 0.05);
	}
	.gatsby-image-wrapper {
		height: 100%;
	}
	& :after {
		content: "";
		width: 100%;
		height: 400px;
		position: absolute;
		bottom: 0;
		left: 0;
		opacity: 1;
		background: linear-gradient(
			0deg,
			rgba(47, 50, 56, 1) 0%,
			rgba(47, 50, 56, 0) 100%
		);
	}
`;

const InnerContainer = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
	max-width: 1400px;
	padding: 190px 0;
	${({ theme }) => theme.mediaQueries.m} {
		padding: 155px 0;
	}
`;

const OtherLinks = styled.div`
	position: absolute;
	z-index: 2;
	top: 25px;
	right: 0;
	padding: 0 15px;
	${({ theme }) => theme.mediaQueries.m} {
		right: 50%;
		transform: translateX(50%);
		ul li:first-child {
			margin: 0;
		}
	}
	ul {
		list-style: none;
		margin: 0;
		padding: 0;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		li {
			opacity: 0.3;
			transition: all 0.3s;
			margin-left: 30px;
			user-select: none;
			&:first-child {
				font-weight: ${({ theme }) => theme.fontWeights.medium};
				opacity: 1;
			}
			&:hover {
				opacity: 1;
			}
		}
		a {
			color: ${({ theme }) => theme.colors.black};
			text-decoration: none;
		}
	}
`;

class Header extends React.Component {
	render() {
		return (
			<header>
				<MainContainer>
					<BackgroundContainer>
						<div className="box-shadow" />
						<CustImg src={`new-zealand.jpg`} alt={`New Zealand background`} />
					</BackgroundContainer>
					<InnerContainer>
						<OtherLinks>
							<ul>
								<li>Portfolio</li>
								<li>
									{!this.props.isM ? (
										<AniLink
											cover
											bg="#000000"
											direction="left"
											duration={0.8}
											to="/about"
											style={{
												display: "block",
												width: "calc(100% - 10px)",
												height: "100%",
												margin: "0 auto",
												textDecoration: "none",
											}}
										>
											About
										</AniLink>
									) : (
										<AniLink
											fade
											to="/about"
											duration={0.2}
											style={{
												display: "block",
												width: "calc(100% - 10px)",
												height: "100%",
												margin: "0 auto",
												textDecoration: "none",
											}}
										>
											About
										</AniLink>
									)}
								</li>
								<li>
									<a
										href="https://medium.com/@adrienrahier"
										target="_blank"
										rel="noopener noreferrer"
									>
										Blog
									</a>
								</li>
							</ul>
						</OtherLinks>
						<Logo />
					</InnerContainer>
				</MainContainer>
			</header>
		);
	}
}

export default withWindowDimensions(Header);
