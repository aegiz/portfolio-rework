// Package
import Img from "gatsby-image";
import PropTypes from "prop-types";
import styled from "styled-components";
import React, { Component } from "react";

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
	padding: 0 40px;
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
	background: ${props =>
		props.typeOfProject === "freelancework"
			? ({ theme }) => theme.colors.yellow.main
			: ({ theme }) => theme.colors.yellow.light};
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
	left: 40px;
	padding: 0;
	&:after {
		margin-top: 57px;
	}
	${Project}:hover & {
		&:after {
			width: 0;
			${({ theme }) => theme.mediaQueries.m} {
				width: 30px;
			}
		}
	}
`;

const TypeProject = styled.h3`
	z-index: 3;
	position: absolute;
	bottom: 87px;
	left: 40px;
	text-transform: uppercase;
	word-break: break-word;
	color: ${({ theme }) => theme.colors.white};
	margin: 0;
	font-weight: ${({ theme }) => theme.fontWeights.medium};
	font-size: 1.5rem;
`;

const Hashtags = styled.p`
	opacity: 0;
	z-index: 3;
	position: absolute;
	bottom: 40px;
	left: 40px;
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
	background: ${props =>
		props.typeOfProject === "freelancework"
			? ({ theme }) => theme.colors.yellow.main
			: ({ theme }) => theme.colors.yellow.light};
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

class galleryItem extends Component {
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
		const typeOfProjectClean = frontmatter.typeOfProject
			.toLowerCase()
			.replace(/\s/g, "");
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
								? "Freelance"
								: "Full-time"}
						</TypeProject>
						<Hashtags>
							{frontmatter.hashtags.split(" ").map((word, i) => (
								<span key={i}>
									<Diese> #</Diese>
									{word}
								</span>
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

export default galleryItem;
