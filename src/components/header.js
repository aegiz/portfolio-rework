import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";

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

const SocialIcons = styled.div`
	z-index: 2;
	position: absolute;
	top: 20px;
	right: 0;
	padding: 0 30px;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	a {
		display: block;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		& :nth-child(2) {
			margin: 0 15px 0 15px;
		}
	}
	img {
		opacity: 0.2;
		width: 35px;
		height: 35px;
		transition: all 0.3s;
		&:hover {
			opacity: 1;
		}
	}
`;

// First version
const FirstVersion = styled.div`
	display: ${props => (props.renderHeader === 1 ? "block" : "none")};
`;

const Hexagon = styled.div`
	position: absolute;
	top: 155px;
	left: 50%;
	transform: translateX(-50%);
	img {
		width: 50px;
		height: 50px;
	}
`;

const FolioLogoFirst = styled.div`
	position: absolute;
	z-index: 1;
	top: 120px;
	left: 50%;
	transform: translateX(-50%);
	padding: 45px;
	opacity: 0.3;
	.intro {
		margin: 0 0 20px 0;
		p {
			margin: 0 0 0 8px;
			text-transform: uppercase;
			letter-spacing: 0.4em;
			font-weight: ${({ theme }) => theme.fontWeights["l"]};
			font-size: ${({ theme }) => theme.fontSizes["xl"]};
			color: ${({ theme }) => theme.colors.grey.dark};
			text-align: center;
		}
	}
	h1 {
		margin: 0;
		font-size: ${({ theme }) => theme.fontSizes["7xl"]};
		font-weight: ${({ theme }) => theme.fontWeights["medium"]};
		line-height: 0.8;
		text-transform: uppercase;
		color: ${({ theme }) => theme.colors.grey.main};
		&:after {
			content: none;
			background: ${({ theme }) => theme.colors.white};
			display: block;
			width: 10%;
			height: 3px;
			margin: 40px auto 0;
			transition: all 0.35s ease-out;
		}
	}
`;

// Second version
const SecondVersion = styled.div`
	display: ${props => (props.renderHeader === 2 ? "block" : "none")};
`;

const FolioLogoSecond = styled.div`
 	position: absolute;
 	z-index: 1;
	top: 180px;
 	left: 50%;
 	transform: translateX(-50%);
	.intro {
		margin: 0 0 5px 0;
		p {
			opacity: 0.5;
			margin:0;
			text-transform: uppercase;
			letter-spacing: ${({ theme }) => theme.fontSizes["xs"]};
			font-weight: ${({ theme }) => theme.fontWeights["l"]};
			font-size: ${({ theme }) => theme.fontSizes["xl"]};
			color: ${({ theme }) => theme.colors.grey.main};
			text-align: center;
			&:after {
				content: "";
				background: ${({ theme }) => theme.colors.white};
				display: block;
				width: 30px;
				height: 3px;
				margin: 10px auto 10px;
				transition: all 0.35s ease-out;
			}
		}
	}
 	h1 {
 		margin:0;
 		font-size: ${({ theme }) => theme.fontSizes["7xl"]};
 		font-weight: ${({ theme }) => theme.fontWeights["medium"]};
		line-height: 0.8;
 		text-transform: uppercase;
 		background-image: url("${props => props.imageBase}");
 		background-size: 120% auto;
 		background-clip: text;
 		-webkit-background-clip: text;
 		color: transparent;
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
					fluid(maxWidth: 2000) {
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
					<Img
						fluid={data.file.childImageSharp.fluid}
						alt="A corgi smiling happily"
					/>
				</BackgroundContainer>
				<InnerContainer>
					<SocialIcons>
						<a href="/">
							<img src={`twitter.svg`} alt="Twitter icon" />
						</a>
						<a href="/">
							<img src={`github.svg`} alt="Github icon" />
						</a>
						<a href="/">
							<img src={`linkedin.svg`} alt="linkedin icon" />
						</a>
					</SocialIcons>
					<FirstVersion renderHeader={props.renderHeader}>
						<Hexagon>
							<img src={`hexagon.svg`} alt="hexa icon" />
						</Hexagon>
						<FolioLogoFirst imageBase={data.file.childImageSharp.fluid.base64}>
							<div className="intro">
								<p>Adrien Rahier</p>
							</div>
							<h1>Portfolio</h1>
						</FolioLogoFirst>
					</FirstVersion>
					<SecondVersion renderHeader={props.renderHeader}>
						<FolioLogoSecond imageBase={data.file.childImageSharp.fluid.base64}>
							<div className="intro">
								<p>Adrien Rahier</p>
							</div>
							<h1>Portfolio</h1>
						</FolioLogoSecond>
					</SecondVersion>
				</InnerContainer>
			</MainContainer>
		</header>
	);
};
