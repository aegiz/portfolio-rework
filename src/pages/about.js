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
	${({ theme }) => theme.mediaQueries.m} {
		flex-direction: column;
	}
`;

const LeftColumn = styled.div`
	position: relative;
	width: 40%;
	min-height: 100vh;
	${({ theme }) => theme.mediaQueries.m} {
		width: 100%;
		min-height: inherit;
	}
`;

const CTAHomeContainer = styled.div`
	position: absolute;
	top: 8%;
	left: 13%;
	${({ theme }) => theme.mediaQueries.m} {
		position: relative;
		top: inherit;
		left: inherit;
		padding: 10px 70px;
	}
	${({ theme }) => theme.mediaQueries.s} {
		padding: 10px 25px;
	}
	${({ theme }) => theme.mediaQueries.xs} {
		padding: 10px;
	}
`;

const DesktopIllustration = styled.div`
	position: absolute;
	z-index: 1;
	mix-blend-mode: multiply;
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
	${({ theme }) => theme.mediaQueries.m} {
		display: none;
	}
`;

const MobileIllustration = styled.div`
	display: none;
	${({ theme }) => theme.mediaQueries.m} {
		height: 200px;
		width: 347px;
		margin: 20px auto;
		display: block;
		user-select: none;
		.gatsby-image-wrapper {
			height: 100%;
		}
		${({ theme }) => theme.mediaQueries.xs} {
			padding: 0 10px;
			margin: 0 0 10px 0;
			height: 100%;
			width: 100%;
		}
	}
`;

const RightColumn = styled.div`
	position: relative;
	background: ${({ theme }) => theme.colors.grey.dark};
	width: 60%;
	min-height: 100vh;
	${({ theme }) => theme.mediaQueries.m} {
		width: 100%;
		min-height: inherit;
	}
`;

const RightColumnContent = styled.div`
	position: absolute;
	top: calc(50% + 20px);
	left: 50%;
	transform: translate(-50%, -50%);
	width: 100%;
	max-width: 750px;
	padding: 0 25px;
	${({ theme }) => theme.mediaQueries.m} {
		position: relative;
		top: inherit;
		left: inherit;
		transform: translate(0, 0);
		padding: 40px 70px;
	}
	${({ theme }) => theme.mediaQueries.s} {
		padding: 40px 25px;
	}
	${({ theme }) => theme.mediaQueries.xs} {
		padding: 30px 10px;
	}
`;

const Title = styled.h2`
	color: ${({ theme }) => theme.colors.white};
	font-size: ${({ theme }) => theme.fontSizes["5xl"]};
	font-weight: ${({ theme }) => theme.fontWeights.medium};
`;

const Paragraphs = styled.p`
	color: ${({ theme }) => theme.colors.white};
	font-size: ${({ theme }) => theme.fontSizes["xl"]};
	a {
		color: ${({ theme }) => theme.colors.white};
	}
`;

const CTA = styled.a`
	text-decoration: none;
	display: inline-block;
	margin: 15px 0 50px 0;
	${({ theme }) => theme.mediaQueries.xs} {
		margin: 15px 0 30px 0;
	}
`;

const CTAinner = styled.button`
	border: 1px solid ${({ theme }) => theme.colors.white};
	color: ${({ theme }) => theme.colors.white};
	font-size: ${({ theme }) => theme.fontSizes["l"]};
	margin: 0;
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
						<DesktopIllustration>
							<CustImg src={`bike2.jpg`} alt={`Hello bikey`} />
						</DesktopIllustration>
						<MobileIllustration>
							<CustImg src={`bike1.jpg`} alt={`Hello bikey`} />
						</MobileIllustration>
					</LeftColumn>
					<RightColumn>
						<RightColumnContent>
							<Title>Offline</Title>
							<Paragraphs>
								I’m a tireless traveller currently living in Utrech, The
								Netherlands.
								<br />
								When I am not at home, you will find me outside, sharing a
								coffee with friends or simply walking around with Lilo, our
								little{" "}
								<a
									href="https://en.wikipedia.org/wiki/Coton_de_Tulear"
									target="_blank"
									rel="noopener noreferrer"
								>
									Coton de Tulear
								</a>
								.
							</Paragraphs>
							<Paragraphs>
								As an individual, I am passionate about Geo-politics, News,
								History, Linguistic and Science. On the side, I also love
								playing cards (Bridge especially), Urbex, Streetart and trekking
								in the mountains.
							</Paragraphs>
							<CTA href="mailto:adrien.rahier@gmail.com">
								<CTAinner>Get in touch</CTAinner>
							</CTA>
							<Title>Online</Title>
							<List>
								<ListItem img={twitterIcon}>
									<a
										href="https://twitter.com/intent/follow?original_referer=&region=follow_link&screen_name=adrienrahier&tw_p=followbutton&variant=2.0"
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
