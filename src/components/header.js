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

const BackgroundContainer = styled.div`
	position: relative;
	padding: 180px 0;
	width: 100%;
	height: 100%;
`;

const Test = styled.div`
	position: absolute;
	z-index: 1;
	top: 120px;
	left: 50%;
	transform: translateX(-50%);
	font-size: ${({ theme }) => theme.fontSizes["7xl"]};
	text-transform: uppercase;
	background-image: url("${props => props.imageBase}");
	background-size: 120% auto;
	background-clip: text;
	-webkit-background-clip: text;
	color: transparent;
`;

const InnerBackgroundContainer = styled.div`
	width: 100%;
	height: 730px;
	position: absolute;
	top: -80px;
	left: 0;
	.gatsby-image-wrapper {
		height: 100%;
	}
	& :after {
		content: "";
		width: 100%;
		height: 300px;
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

export default () => {
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
					<Test imageBase={data.file.childImageSharp.fluid.base64}>
						Portfolio
					</Test>
					<InnerBackgroundContainer>
						<Img
							fluid={data.file.childImageSharp.fluid}
							alt="A corgi smiling happily"
						/>
					</InnerBackgroundContainer>
				</BackgroundContainer>
			</MainContainer>
		</header>
	);
};
