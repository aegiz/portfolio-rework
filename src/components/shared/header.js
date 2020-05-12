// Package
import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";

// Assets
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
		${({ theme }) => theme.mediaQueries.xxs} {
			margin-left: 50px;
		}
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
			${({ theme }) => theme.mediaQueries.xs} {
				margin-left: 8px;
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
	left: 50%;
	transform: translateX(-50%);
	top: 130px;
	overflow: hidden;
	border-radius: 50%;
	--size-logo: 256px;
	${({ theme }) => theme.mediaQueries.m} {
		top: 100px;
		--size-logo: 220px;
	}
`;

const Slice = styled.div`
	opacity: 0.2;
	width: var(--size-logo);
	height: var(--size-logo);
	border-radius: 50%;
	background-image: url("${clouds}");
	background-size: var(--size-logo) var(--size-logo);
	overflow: hidden;
`;

const SliceItem = styled.div`
	width: var(--size-logo);
	overflow: hidden;
	height: calc(var(--size-logo) / 16);
	background-image: url("${clouds}");
	background-repeat: no-repeat;
	background-position: center -${props => props.index}rem;
	background-size: var(--size-logo) var(--size-logo);
	transition: all 0.3s ease-in-out;
	animation: sliceAnim 3s ease-in-out ${props => props.index * -0.5}s
		alternate infinite;
	@keyframes sliceAnim {
		from {
			transform: translateX(16px);
		}
		to {
			transform: translateX(-16px);
		}
	}
`;

const Logo = styled.div`
	position: absolute;
	top: calc(50% + 19px);
	left: 50%;
	transform: translate(-50%, -50%);
	img {
		width: 139px;
		height: 141px;
	}
	${({ theme }) => theme.mediaQueries.m} {
		top: calc(50% + 11px);
		left: calc(50% - 1px);
		img {
			width: 129px;
			height: 99px;
		}
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
					<LogoContainer>
						<Slice>
							{[...Array(16)].map((e, i) => (
								<SliceItem index={i} key={i} />
							))}
						</Slice>
						<Logo>
							<img src={`logo.svg`} alt="Logo Portfolio AR (Adrien Rahier)" />
						</Logo>
					</LogoContainer>
				</InnerContainer>
			</MainContainer>
		</header>
	);
};
