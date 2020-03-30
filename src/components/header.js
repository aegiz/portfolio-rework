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
	width: 100%;
	height: 100%;
	position: relative;
`;

const InnerBackgroundContainer = styled.div`
	width: 100%;
	height: 730px;
	position: absolute;
	top: 0;
	left: 0;
	.gatsby-image-wrapper {
		height: 100%;
	}
`;

export default () => {
	const data = useStaticQuery(graphql`
		query HeadingQuery {
			file(relativePath: { eq: "new-zealand.jpg" }) {
				childImageSharp {
					fluid {
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
					<p
						style={{
							position: "relative",
							zIndex: 1,
							textAlign: "center",
							margin: "200px auto",
						}}
					>
						Welcome to
						<br />
						is the header
					</p>
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
