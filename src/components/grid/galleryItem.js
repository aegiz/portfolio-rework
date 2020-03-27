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
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
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

const ColorSquare = styled.div`
	width: 20px;
	height: 20px;
	margin-right: 10px;
	background: ${props => {
		if (props.typeOfArticle === "freelancework") {
			return ({ theme }) => theme.colors.yellow.main;
		} else if (props.typeOfArticle === "full-timework") {
			return ({ theme }) => theme.colors.blue.main;
		} else if (props.typeOfArticle === "sideproject") {
			return ({ theme }) => theme.colors.red.main;
		} else {
			return `transparent`;
		}
	}};
`;

const Title = styled.div`
	margin: 30px 0 0 0;
	color: ${({ theme }) => theme.colors.white};
	text-transform: uppercase;
	font-weight: ${({ theme }) => theme.fontWeights.bold};
	font-size: ${({ theme }) => theme.fontSizes["3xl"]};
	${({ theme }) => theme.mediaQueries.l} {
		color: blue;
	}
	${({ theme }) => theme.mediaQueries.m} {
		color: red;
	}
`;

const Date = styled.div`
	color: ${({ theme }) => theme.colors.white};
	font-weight: ${({ theme }) => theme.fontWeights.thin};
	font-size: ${({ theme }) => theme.fontSizes.s};
`;

const Hashtags = styled.div`
	margin: 30px 0 0 0;
	color: ${({ theme }) => theme.colors.white};
	text-transform: uppercase;
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
					<Category>
						<ColorSquare typeOfArticle={typeOfArticleClean}></ColorSquare>
						<div>{frontmatter.typeOfArticle}</div>
					</Category>
					<Title>{frontmatter.title}</Title>
					<Date>{frontmatter.date}</Date>
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
