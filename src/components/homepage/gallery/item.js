// Package
import Img from "gatsby-image";
import PropTypes from "prop-types";
import styled from "styled-components";
import React, { Component } from "react";

// Utils
import { handleColorType, cleanProjectName } from "@utils/projectHelpers";

const GalleryItem = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
	margin: 0 auto;
`;

const SideProject = styled.div`
	height: 100%;
	&:after {
		content: "";
		width: 100%;
		height: 100%;
		position: absolute;
		bottom: 0;
		left: 0;
		opacity: 1;
		z-index: 2;
		background: linear-gradient(
			0deg,
			rgba(0, 0, 0, 0.7) 0%,
			rgba(0, 0, 0, 0) 100%
		);
		transition: all 0.35s;
	}
	&:hover {
		&:after {
			height: 200px;
			${({ theme }) => theme.mediaQueries.m} {
				height: 100%;
			}
		}
	}
`;

const TitleSideProject = styled.h2`
	position: absolute;
	left: 0;
	padding: 0 30px;
	bottom: 70px;
	transition: all 0.35s;
	color: ${({ theme }) => theme.colors.white};
	text-transform: uppercase;
	font-size: ${({ theme }) => theme.fontSizes["4xl"]};
	word-break: break-word;
	z-index: 3;
	&:after {
		content: "";
		background: ${({ theme }) => theme.colors.white};
		display: block;
		width: 30px;
		height: 3px;
		margin-top: 10px;
		transition: all 0.35s ease-out;
	}
	${({ theme }) => theme.mediaQueries.l} {
		span {
			display: none;
		}
	}
	${({ theme }) => theme.mediaQueries.xxs} {
		hyphens: auto;
	}
`;

const Figcap = styled.div`
	opacity: 0;
	transition: all 0.35s;
	z-index: 4;
	position: absolute;
	top: 10px;
	right: 10px;
	bottom: 10px;
	left: 10px;
	border: 1px solid ${({ theme }) => theme.colors.yellow.main};
	${SideProject}:hover & {
		opacity: 0.2;
		${({ theme }) => theme.mediaQueries.m} {
			opacity: 0;
		}
	}
`;

const SideProjectImg = styled.div`
	height: 100%;
	img {
		transition: all 0.35s !important;
		opacity: 0.7;
		transform: scale(1);
		${SideProject}:hover & {
			opacity: 0.5;
			transform: scale(1.05);
			${({ theme }) => theme.mediaQueries.m} {
				opacity: 0.7;
				transform: scale(1);
			}
		}
	}
	.gatsby-image-wrapper {
		height: 100%;
	}
`;

// Project inherit from most of Side Project
const Project = styled(SideProject)`
	position: relative;
	background: ${props => handleColorType(props.typeOfProject)};
	&:after {
		height: 250px;
		opacity: 0;
	}
	&:hover & {
		&:after {
			opacity: 1;
			${({ theme }) => theme.mediaQueries.m} {
				opacity: 0;
			}
		}
	}
`;

const TitleProject = styled(TitleSideProject)`
	left: 30px;
	padding: 0;
	text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
	transition: all 0.3s;
	&:after {
		margin-top: 57px;
	}
	${Project}:hover & {
		text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);
		${({ theme }) => theme.mediaQueries.m} {
			text-shadow: none;
		}
		&:after {
			width: 0;
			${({ theme }) => theme.mediaQueries.m} {
				width: 30px;
			}
		}
	}
	${({ theme }) => theme.mediaQueries.xs} {
		padding: 0 15px 0 0;
	}
`;

const TypeProject = styled.h3`
	z-index: 3;
	position: absolute;
	bottom: 87px;
	left: 30px;
	text-transform: uppercase;
	word-break: break-word;
	color: ${({ theme }) => theme.colors.white};
	margin: 0;
	font-weight: ${({ theme }) => theme.fontWeights.medium};
	font-size: 1.5rem;
	${Project}:hover & {
		text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);
		${({ theme }) => theme.mediaQueries.m} {
			text-shadow: none;
		}
	}
`;

const Hashtags = styled.p`
	opacity: 0;
	z-index: 3;
	position: absolute;
	bottom: 40px;
	left: 30px;
	margin: 0;
	transform: translate3d(-10px, 0, 0);
	color: ${({ theme }) => theme.colors.white};
	transition: all 0.35s;
	font-size: ${({ theme }) => theme.fontSizes["m"]};
	${Project}:hover & {
		opacity: 1;
		transform: translate3d(0, 0, 0);
		${({ theme }) => theme.mediaQueries.m} {
			opacity: 0;
			transform: translate3d(-10px, 0, 0);
		}
	}
`;

const Hashtag = styled.span`
	margin-right: 5px;
	background-color: ${({ theme }) => theme.colors.black};
`;

const Diese = styled.span`
	font-weight: ${({ theme }) => theme.fontWeights.medium};
	color: ${({ theme }) => theme.colors.yellow.main};
`;

const Overlay = styled.div`
	z-index: 2;
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	transition: all 0.3s;
	opacity: 1;
	background: ${props => handleColorType(props.typeOfProject)};
	${Project}:hover & {
		opacity: 0;
		${({ theme }) => theme.mediaQueries.m} {
			opacity: 1;
		}
	}
`;

const ProjectImg = styled(SideProjectImg)`
	img {
		width: calc(100% + 60px);
		opacity: 1;
		transform: translate3d(-50px, 0, 0);
		${Project}:hover & {
			opacity: 0.7;
			transform: translate3d(0, 0, 0);
			${({ theme }) => theme.mediaQueries.m} {
				opacity: 1;
				transform: translate3d(-50px, 0, 0);
			}
		}
	}
`;

const FigcapProject = styled(Figcap)`
	transform: translate3d(-20px, 0, 0);
	${({ theme }) => theme.mediaQueries.m} {
		display: none;
	}
	${Project}:hover & {
		transform: translate3d(0, 0, 0);
	}
`;

export default class galleryItemComp extends Component {
	static propTypes = {
		frontmatter: PropTypes.shape({
			typeOfProject: PropTypes.string.isRequired,
			title: PropTypes.string.isRequired,
			featuredImage: PropTypes.object.isRequired,
			hashtags: PropTypes.string.isRequired,
		}),
	};
	render() {
		const frontmatter = this.props.frontmatter;
		const typeOfProjectClean = cleanProjectName(frontmatter.typeOfProject);
		return (
			<GalleryItem>
				{typeOfProjectClean === "sideproject" ? (
					<SideProject>
						<TitleSideProject>{frontmatter.title}</TitleSideProject>
						<SideProjectImg>
							<Img
								loading="eager"
								fluid={frontmatter.featuredImage.childImageSharp.grayscale}
							/>
						</SideProjectImg>
						<Figcap />
					</SideProject>
				) : (
					<Project typeOfProject={typeOfProjectClean}>
						<TitleProject>{frontmatter.title}</TitleProject>
						<TypeProject>
							{typeOfProjectClean === "freelancework"
								? "Freelance Work"
								: "Full-time Work"}
						</TypeProject>
						<Hashtags>
							{frontmatter.hashtags.split(",").map((word, i) => (
								<Hashtag key={i}>
									<Diese> #</Diese>
									{word.trim()}
								</Hashtag>
							))}
						</Hashtags>
						<Overlay typeOfProject={typeOfProjectClean} />
						<ProjectImg>
							<Img
								loading="eager"
								fluid={frontmatter.featuredImage.childImageSharp.grayscale}
							/>
						</ProjectImg>
						<FigcapProject />
					</Project>
				)}
			</GalleryItem>
		);
	}
}
