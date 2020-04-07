// Package
import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";
import clouds from "@static/clouds.jpg";

const MainContainer = styled.div`
	width: 100%;
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
`;

const InnerContainer = styled.div`
	position: relative;
	padding: 190px 0;
	width: 100%;
	height: 100%;
	max-width: 1400px;
`;

const OtherLinks = styled.div`
	position: absolute;
	z-index: 2;
	top: 20px;
	right: 0;
	padding: 0 15px;
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

const LogoContainer = styled.div`
	position: absolute;
	z-index: 10;
	top: 130px;
	left: 50%;
	transform: translateX(-50%);
`;

const Slide = styled.div`
	opacity: 0.2;
	width: 16rem;
	height: 16rem;
	border-radius: 50%;
	background-color: black;
	background-image: url("${clouds}");
	background-size: 16rem 16rem;
	overflow: hidden;
`;

const SlideItem = styled.div`
	width: 16rem;
	overflow: hidden;
	height: 1rem;
	background-image: url("${clouds}");
	background-repeat: no-repeat;
	background-position: center -${props => props.index}rem;
	background-size: 16rem 16rem;
	transition: all 0.3s ease-in-out;
	animation: slideAnim 3s ease-in-out ${props => props.index * -0.5}s
		alternate infinite;
	@keyframes slideAnim {
		from {
			transform: translateX(1rem);
		}
		to {
			transform: translateX(-1rem);
		}
	}
`;

const Logo = styled.div`
	position: absolute;
	top: 50%;
	left: calc(50% - 7px);
	transform: translate(-50%, -50%);
	overflow: hidden;
	img {
		filter: grayscale(100%);
		width: 250px;
		height: 250px;
	}
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

export default props => {
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
								<a href="/blog">Blog</a>
							</li>
							<li>
								<a href="/about">About</a>
							</li>
						</ul>
					</OtherLinks>
					<LogoContainer>
						<Slide>
							{[...Array(16)].map((e, i) => (
								<SlideItem index={i} key={i} />
							))}
						</Slide>
						<Logo>
							<img src={`logo2.png`} alt="logo 2" />
						</Logo>
					</LogoContainer>
				</InnerContainer>
			</MainContainer>
		</header>
	);
};
