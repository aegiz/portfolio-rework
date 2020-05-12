// Package
import React from "react";
import { useStaticQuery, graphql } from "gatsby"; // useStaticQuery -> Because we are in a functional component
import Img from "gatsby-image";
import styled from "styled-components";

// Components
import Logo from "./logo";

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

const Header = props => {
	const data = useStaticQuery(graphql`
		query HeadingQuery {
			file(relativePath: { eq: "new-zealand.jpg" }) {
				childImageSharp {
					fluid(maxWidth: 1500) {
						...GatsbyImageSharpFluid
					}
				}
			}
		}
	`);
	return (
		<header>
			<MainContainer>
				<BackgroundContainer>
					<div className="box-shadow"></div>
					<Img fluid={data.file.childImageSharp.fluid} />
				</BackgroundContainer>
				<InnerContainer>
					<OtherLinks>
						<ul>
							<li>Portfolio</li>
							<li>
								<a
									href="https://medium.com/@adrienrahier"
									target="_blank"
									rel="noopener noreferrer"
								>
									Blog
								</a>
							</li>
							<li>
								<a href="/about">About</a>
							</li>
						</ul>
					</OtherLinks>
					<Logo />
				</InnerContainer>
			</MainContainer>
		</header>
	);
};

export default Header;
