// Packages
import AniLink from "gatsby-plugin-transition-link/AniLink";
import React from "react";

// Components
import Layout from "@components/shared/layout";
import SEO from "@components/shared/seo";
import styled from "styled-components";

// Utils
import CustImg from "@utils/StaticImg";

// Styled Components
const Content = styled.div`
	position: relative;
	min-height: 100vh;
	user-select: none;
`;

const BackgroundContainer = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	min-height: 100vh;
	top: 0;
	left: 0;
	user-select: none;
	.gatsby-image-wrapper {
		height: 100%;
	}
`;

const Shadows = styled.div`
	z-index: 1;
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	box-shadow: inset 0px 0px 40px 4px rgba(0, 0, 0, 0.2);
`;

const TextContainer = styled.div`
	z-index: 2;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	text-align: center;
`;

const Title = styled.h1`
	text-transform: uppercase;
	color: ${({ theme }) => theme.colors.white};
	font-size: ${({ theme }) => theme.fontSizes["11xl"]};
	font-weight: ${({ theme }) => theme.fontWeights.medium};
	mix-blend-mode: multiply;
	${({ theme }) => theme.mediaQueries.s} {
		font-size: ${({ theme }) => theme.fontSizes["8xl"]};
	}
	${({ theme }) => theme.mediaQueries.xs} {
		font-size: ${({ theme }) => theme.fontSizes["7xl"]};
	}
`;

const SubTitle = styled.h2`
	text-transform: uppercase;
	color: ${({ theme }) => theme.colors.white};
	font-size: ${({ theme }) => theme.fontSizes["5xl"]};
	${({ theme }) => theme.mediaQueries.s} {
		font-size: ${({ theme }) => theme.fontSizes["3xl"]};
	}
`;

const CTAContainer = styled.div`
	z-index: 2;
	position: absolute;
	bottom: 5%;
	left: 50%;
	transform: translateX(-50%);
`;

const CTA = styled.button`
	padding: 10px 15px;
	border: 1px solid ${({ theme }) => theme.colors.white};
	color: ${({ theme }) => theme.colors.white};
	font-size: ${({ theme }) => theme.fontSizes["xl"]};
	background: rgba(255, 255, 255, 0.2);
	text-transform: uppercase;
	${({ theme }) => theme.mediaQueries.s} {
		font-size: ${({ theme }) => theme.fontSizes["l"]};
	}
	${({ theme }) => theme.mediaQueries.xs} {
		font-size: ${({ theme }) => theme.fontSizes["normal"]};
	}
`;

export default class NotFoundPage extends React.Component {
	render() {
		return (
			<Layout>
				<SEO title="404: Not Found" />
				<Content>
					<BackgroundContainer>
						<Shadows />
						<CustImg src={`404.jpg`} alt={`404 background`} />
					</BackgroundContainer>
					<TextContainer>
						<Title>404</Title>
						<SubTitle>Page Not Found</SubTitle>
					</TextContainer>
					<CTAContainer>
						<AniLink fade to={"/"} duration={0.2}>
							<CTA>Back to Home</CTA>
						</AniLink>
					</CTAContainer>
				</Content>
			</Layout>
		);
	}
}
