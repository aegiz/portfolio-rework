// Packages
import React from "react";
import styled from "styled-components";

// Components
import CTAhome from "@components/shared/CTAhome";
import Layout from "@components/shared/layout";
import SEO from "@components/shared/seo";

// Utils
import CustImg from "@utils/StaticImg";

// Assets
import githubIcon from "@static/github.svg";
import twitterIcon from "@static/twitter.svg";
import polarstepIcon from "@static/polarstep.svg";
import mediumIcon from "@static/medium.svg";
import discordIcon from "@static/discord.svg";

// Styled Components
const WIDTH_ILLUSTRATION = (571 * 70) / 100;
const HEIGHT_ILLUSTRATION = (603 * 70) / 100;

const Content = styled.div`
	display: flex;
	flex-direction: row;
	align-items: flex-start;
	justify-content: flex-start;
`;

const LeftColumn = styled.div`
	position: relative;
	width: 40%;
	min-height: 100vh;
`;

const CTAHomeContainer = styled.div`
	position: absolute;
	top: 8%;
	left: 13%;
`;

const Illustration = styled.div`
	z-index: 1;
	mix-blend-mode: multiply;
	position: absolute;
	top: calc(50% - ${HEIGHT_ILLUSTRATION / 2 - 55}px);
	right: 0;
	width: ${WIDTH_ILLUSTRATION}px;
	user-select: none;
	&:after {
		content: "";
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		background: transparent;
	}
`;

const RightColumn = styled.div`
	position: relative;
	background: ${({ theme }) => theme.colors.grey.dark};
	width: 60%;
	min-height: 100vh;
`;

const RightColumnContent = styled.div`
	position: absolute;
	top: calc(50% + 20px);
	left: 50%;
	transform: translate(-50%, -50%);
	width: 100%;
	max-width: 750px;
	padding: 25px;
`;

const Title = styled.h2`
	color: ${({ theme }) => theme.colors.white};
	font-size: ${({ theme }) => theme.fontSizes["5xl"]};
	font-weight: ${({ theme }) => theme.fontWeights.medium};
`;

const Paragraphs = styled.p`
	color: ${({ theme }) => theme.colors.white};
	font-size: ${({ theme }) => theme.fontSizes["xl"]};
`;

const CTA = styled.a`
	text-decoration: none;
	display: block;
`;

const CTAinner = styled.button`
	border: 1px solid ${({ theme }) => theme.colors.white};
	color: ${({ theme }) => theme.colors.white};
	font-size: ${({ theme }) => theme.fontSizes["l"]};
	margin: 15px 0 50px 0;
	padding: 15px 20px;
	transition: all 0.2s;
	user-select: none;
	&:hover {
		text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);
		background-image: linear-gradient(
			to right,
			#e40303,
			#e40303 16.65%,
			#ff8c00 16.65%,
			#ff8c00 33.3%,
			#ffed00 33.3%,
			#ffed00 49.95%,
			#008026 49.95%,
			#008026 66.6%,
			#004dff 66.6%,
			#004dff 83.25%,
			#750787 83.25%,
			#750787 100%,
			#e40303 100%
		);
		animation: slidebg 2s linear infinite;
	}
	/* Credits: https://codepen.io/althi/pen/eKdmaa */
	@keyframes slidebg {
		to {
			background-position: 20vw;
		}
	}
`;

const List = styled.ul`
	list-style: none;
	margin: 15px 0 0 0;
	padding: 0;
`;

const ListItem = styled.li`
	margin: 3px 0;
	padding: 0 0 0 23px;
	color: ${({ theme }) => theme.colors.white};
	font-size: ${({ theme }) => theme.fontSizes["xl"]};
	position: relative;
	a {
		text-decoration: none;
		color: ${({ theme }) => theme.colors.white};
	}
	&:before {
		content: "";
		position: absolute;
		top: calc(50% - 8px);
		left: 0;
		width: 16px;
		height: 16px;
		background-image: url(${props => props.img});
		background-position: center;
		background-size: 100% 100%;
	}
`;

export default class AboutPage extends React.Component {
	render() {
		return (
			<Layout>
				<SEO title="About" />
				<Content>
					<LeftColumn>
						<CTAHomeContainer>
							<CTAhome text={"Homepage"} />
						</CTAHomeContainer>
						<Illustration>
							<CustImg src={`bike2.jpg`} alt={`Hello bikey`} />
						</Illustration>
					</LeftColumn>
					<RightColumn>
						<RightColumnContent>
							<Title>Offline</Title>
							<Paragraphs>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
								urna dui, interdum consequat arcu bibendum, dapibus scelerisque
								purus. Nulla et lacus vel urna pulvinar placerat. Suspendisse eu
								vehicula, fringilla mi vitae, semper nisl. Duis commodo lacinia
								nisl.
							</Paragraphs>
							<Paragraphs>
								dignissim. Vivamus aliquet, libero id feugiat dignissim, metus
								dolor facilisis lorem, quis sollicitudin ligula risus in lorem.
								Aenean volutpat eros euismod leo viverra tristique. Aliquam eget
							</Paragraphs>
							<CTA href="mailto:adrien.rahier@gmail.com">
								<CTAinner>Get in touch</CTAinner>
							</CTA>
							<Title>Online</Title>
							<List>
								<ListItem img={twitterIcon}>
									<a
										href="https://twitter.com/adrienrahier"
										target="_blank"
										rel="noopener noreferrer"
									>
										Twitter
									</a>
								</ListItem>
								<ListItem img={githubIcon}>
									<a
										href="https://github.com/aegiz"
										target="_blank"
										rel="noopener noreferrer"
									>
										Github
									</a>
								</ListItem>
								<ListItem img={polarstepIcon}>
									<a
										href="https://www.polarsteps.com/oncleernest/"
										target="_blank"
										rel="noopener noreferrer"
									>
										Polarstep
									</a>
								</ListItem>
								<ListItem img={mediumIcon}>
									<a
										href="https://medium.com/@adrienrahier"
										target="_blank"
										rel="noopener noreferrer"
									>
										Medium
									</a>
								</ListItem>
								<ListItem img={discordIcon}>
									<a
										href="https://discord.com/users/572285758455545873"
										target="_blank"
										rel="noopener noreferrer"
									>
										Discord
									</a>
								</ListItem>
							</List>
						</RightColumnContent>
					</RightColumn>
				</Content>
			</Layout>
		);
	}
}
