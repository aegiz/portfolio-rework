import React, { Component } from "react";
import styled from "styled-components";
import Img from "gatsby-image";

const GalleryItem = styled.div`
	width: 100%;
	height: 100%;
	position: relative;
	margin: 0 auto;
	img {
		transition: all 0.3s;
		mix-blend-mode: multiply;
	}
	&:after {
		content: "";
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		opacity: 0.2;
		z-index: 2;
		background: ${({ theme }) => theme.colors.black};
	}
	&:hover {
		.image-background {
			opacity: 0.9;
			background: ${props => {
				if (props.typeOfArticle === "freelancework") {
					return ({ theme }) => theme.colors.yellow.main;
				} else if (props.typeOfArticle === "full-timework") {
					return ({ theme }) => theme.colors.yellow.light;
				} else if (props.typeOfArticle === "sideproject") {
					return ({ theme }) => theme.colors.red.main;
				} else {
					return `transparent`;
				}
			}};
		}
		.overlay {
			opacity: 0;
		}
	}
`;

const Content = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	padding: 0 30px;
	height: 100%;
	position: relative;
	z-index: 3;
`;

const Category = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
	margin: 30px 0 0 0;
	color: ${({ theme }) => theme.colors.white};
	text-transform: uppercase;
	font-size: ${({ theme }) => theme.fontSizes.l};
`;

// const ColorSquare = styled.div`
// 	width: 10px;
// 	height: 10px;
// 	margin-right: 10px;
// 	background: ${props => {
// 		if (props.typeOfArticle === "freelancework") {
// 			return ({ theme }) => theme.colors.yellow.main;
// 		} else if (props.typeOfArticle === "full-timework") {
// 			return ({ theme }) => theme.colors.blue.main;
// 		} else if (props.typeOfArticle === "sideproject") {
// 			return ({ theme }) => theme.colors.red.main;
// 		} else {
// 			return `transparent`;
// 		}
// 	}};
// `;

const Title = styled.h2`
	width: 100%;
	margin: 0 0 40px;
	color: ${({ theme }) => theme.colors.white};
	text-transform: uppercase;
	font-size: ${({ theme }) => theme.fontSizes["3xl"]};
	word-break: break-word;
	&:after {
		content: "";
		background: white;
		display: block;
		width: 40%;
		height: 3px;
		margin-top: 20px;
		transition: all 0.4s ease-out;
	}
`;

const Date = styled.div`
	display: none;
	color: ${({ theme }) => theme.colors.white};
	font-weight: ${({ theme }) => theme.fontWeights.thin};
	font-size: ${({ theme }) => theme.fontSizes.s};
`;

const Hashtags = styled.div`
	display: none;
	margin: 30px 0 0 0;
	line-height: 1.8;
	color: ${({ theme }) => theme.colors.white};
	font-weight: ${({ theme }) => theme.fontWeights.bold};
	font-size: ${({ theme }) => theme.fontSizes.normal};
`;

const Overlay = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 2;
	transition: all 0.3s;
	opacity: 1;
	background: ${props => {
		if (props.typeOfArticle === "freelancework") {
			return ({ theme }) => theme.colors.yellow.main;
		} else if (props.typeOfArticle === "full-timework") {
			return ({ theme }) => theme.colors.yellow.light;
		} else {
			return `transparent`;
		}
	}};
`;

const ImageBackground = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 1;
	transition: all 0.3s;
	.gatsby-image-wrapper {
		height: 100%;
	}
`;

class galleryItem extends Component {
	render() {
		const project = this.props.post;
		const frontmatter = project.node.frontmatter;
		const typeOfArticleClean = frontmatter.typeOfArticle
			.toLowerCase()
			.replace(/\s/g, "");
		return (
			<GalleryItem typeOfArticle={typeOfArticleClean}>
				<Content>
					<Category>
						{/* <ColorSquare typeOfArticle={typeOfArticleClean}></ColorSquare> */}
						<Title>{frontmatter.title}</Title>
					</Category>
					<Date>{frontmatter.date}</Date>
					<Hashtags>{frontmatter.hashtags}</Hashtags>
				</Content>
				{typeOfArticleClean !== "sideproject" && (
					<Overlay className="overlay" typeOfArticle={typeOfArticleClean} />
				)}
				<ImageBackground className="image-background">
					<Img
						loading="eager"
						fluid={frontmatter.featuredImage.childImageSharp.fluid}
					/>
				</ImageBackground>
			</GalleryItem>
		);
	}
}

export default galleryItem;
