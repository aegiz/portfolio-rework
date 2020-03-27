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
		filter: grayscale(100%);
		mix-blend-mode: ${props =>
			props.typeOfArticle === "sideproject" ? `multiply` : `hard-light`};
	}
	&:hover {
		.image-background {
			background: ${props =>
				props.typeOfArticle === "sideproject"
					? ({ theme }) => theme.colors.red.main
					: `rgba(255, 255, 255, 0.15)`};
		}
		.overlay {
			opacity: 0;
		}
	}
`;

const Content = styled.div`
	width: 100%;
	height: 100%;
	position: relative;
	z-index: 3;
`;

const Category = styled.div`
	color: white;
	text-transform: uppercase;
	font-size: 16px;
`;

const Title = styled.div`
	color: ${({ theme }) => theme.colors.black};
	text-transform: uppercase;
	font-weight: ${({ theme }) => theme.fontWeights.bold};
	${({ theme }) => theme.mediaQueries.l} {
		color: blue;
	}
	${({ theme }) => theme.mediaQueries.m} {
		color: red;
	}
`;

const Hashtags = styled.div`
	color: white;
	text-transform: uppercase;
	font-size: 16px;
	font-weight: bold;
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
	background: ${({ theme }) => theme.colors.black};
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
					<div>{frontmatter.date}</div>
					<Category>{frontmatter.typeOfArticle}</Category>
					<Title>{frontmatter.title}</Title>
					<Hashtags>{frontmatter.hashtags}</Hashtags>
				</Content>
				{typeOfArticleClean === "sideproject" && (
					<Overlay className="overlay" />
				)}
				<ImageBackground className="image-background">
					{frontmatter.featuredImage && (
						<Img fluid={frontmatter.featuredImage.childImageSharp.fluid} />
					)}
				</ImageBackground>
			</GalleryItem>
		);
	}
}

export default galleryItem;
