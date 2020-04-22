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
	img {
		transition: all 0.35s !important;
		opacity: 0.7;
		transform: scale(1);
	}
	.gatsby-image-wrapper {
		height: 100%;
	}
	.title {
		padding: 0 40px;
		transition: all 0.35s;
		position: absolute;
		bottom: 70px;
		left: 0;
		color: ${({ theme }) => theme.colors.white};
		text-transform: uppercase;
		font-size: ${({ theme }) => theme.fontSizes["2xl"]};
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
	}
	.figcap {
		opacity: 0;
		transition: all 0.35s;
		z-index: 4;
		position: absolute;
		top: 10px;
		right: 10px;
		bottom: 10px;
		left: 10px;
		border: 1px solid ${({ theme }) => theme.colors.yellow.main};
	}
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
		img {
			opacity: 0.5;
			transform: scale(1.05);
		}
		.figcap {
			opacity: 0.2;
		}
		&:after {
			height: 200px;
		}
	}
`;

const Project = styled.div`
	position: relative;
	height: 100%;
	background: ${props =>
		props.typeOfArticle === "freelancework"
			? ({ theme }) => theme.colors.yellow.main
			: ({ theme }) => theme.colors.yellow.light};
	.gatsby-image-wrapper {
		height: 100%;
		img {
			width: calc(100% + 60px);
			transition: all 0.35s !important;
			transform: translate3d(-50px, 0, 0);
		}
	}
	.overlay {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 2;
		transition: all 0.3s;
		opacity: 1;
		background: ${props =>
			props.typeOfArticle === "freelancework"
				? ({ theme }) => theme.colors.yellow.main
				: ({ theme }) => theme.colors.yellow.light};
	}
	.title {
		transition: all 0.35s;
		position: absolute;
		bottom: 70px;
		left: 40px;
		color: ${({ theme }) => theme.colors.white};
		text-transform: uppercase;
		font-size: ${({ theme }) => theme.fontSizes["2xl"]};
		word-break: break-word;
		z-index: 3;
		p {
			margin: 0;
			font-weight: ${({ theme }) => theme.fontWeights.medium};
			font-size: ${({ theme }) => theme.fontSizes["l"]};
		}
		&:after {
			content: "";
			background: ${({ theme }) => theme.colors.white};
			display: block;
			width: 30px;
			height: 3px;
			margin-top: 10px;
			transition: all 0.35s ease-out;
		}
	}
	.hashtag {
		opacity: 0;
		position: absolute;
		bottom: 40px;
		left: 40px;
		transform: translate3d(-10px, 0, 0);
		color: ${({ theme }) => theme.colors.white};
		transition: all 0.35s;
		font-size: ${({ theme }) => theme.fontSizes["m"]};
		z-index: 3;
		p {
			margin: 0;
		}
		.diese {
			font-weight: ${({ theme }) => theme.fontWeights.medium};
			color: ${({ theme }) => theme.colors.yellow.main};
		}
	}
	.figcap {
		position: absolute;
		top: 10px;
		right: 10px;
		bottom: 10px;
		left: 10px;
		z-index: 4;
		border: 1px solid ${({ theme }) => theme.colors.yellow.main};
		opacity: 0;
		transition: all 0.35s;
		transform: translate3d(-20px, 0, 0);
	}
	&:after {
		content: "";
		opacity: 0;
		width: 100%;
		height: 250px;
		position: absolute;
		bottom: 0;
		left: 0;
		z-index: 2;
		transition: all 0.35s;
		background: linear-gradient(
			0deg,
			rgba(0, 0, 0, 0.7) 0%,
			rgba(0, 0, 0, 0) 100%
		);
	}
	&:hover {
		img {
			opacity: 0.7;
			transform: translate3d(0, 0, 0);
		}
		.title {
			&:after {
				width: 0;
			}
		}
		.hashtag {
			opacity: 1;
			transform: translate3d(0, 0, 0);
		}
		.overlay {
			opacity: 0;
		}
		.figcap {
			opacity: 0.2;
			transform: translate3d(0, 0, 0);
		}
		&:after {
			opacity: 1;
		}
	}
`;

class galleryItem extends Component {
	static propTypes = {
		frontmatter: PropTypes.shape({
			typeOfArticle: PropTypes.string.isRequired,
			title: PropTypes.string.isRequired,
			featuredImage: PropTypes.object.isRequired,
			hashtags: PropTypes.string.isRequired,
		}),
	};
	render() {
		const frontmatter = this.props.frontmatter;
		const typeOfArticleClean = frontmatter.typeOfArticle
			.toLowerCase()
			.replace(/\s/g, "");
		return (
			<GalleryItem>
				{typeOfArticleClean === "sideproject" ? (
					<SideProject>
						<div className="title">
							<h2>{frontmatter.title}</h2>
						</div>
						<Img
							loading="eager"
							fluid={frontmatter.featuredImage.childImageSharp.grayscale}
						/>
						<div className="figcap" />
					</SideProject>
				) : (
					<Project typeOfArticle={typeOfArticleClean}>
						<div className="title">
							<h2>{frontmatter.title}</h2>
							<p>
								{typeOfArticleClean === "freelancework"
									? "Freelance"
									: "Full-time"}
							</p>
						</div>
						<div className="hashtag">
							<p>
								{frontmatter.hashtags.split(" ").map((word, i) => (
									<span key={i}>
										<span className="diese"> #</span>
										{word}
									</span>
								))}
							</p>
						</div>
						<div className="overlay" />
						<Img
							loading="eager"
							fluid={frontmatter.featuredImage.childImageSharp.duotone}
						/>
						<div className="figcap" />
					</Project>
				)}
			</GalleryItem>
		);
	}
}

export default galleryItem;
