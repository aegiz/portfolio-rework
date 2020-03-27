import React, { Component } from "react";
import styled from "styled-components";
import Img from "gatsby-image";

// Helpers
const handleColorType = type => {
	if (type === "freelancework") {
		return ({ theme }) => theme.colors.red.main;
	} else if (type === "full-timework") {
		return `yellow`;
	} else if (type === "sideproject") {
		return ({ theme }) => theme.colors.red.main;
	} else {
		return `rgba(255, 255, 255, 0.15)`;
	}
};

// Styled component
const GalleryItem = styled.div`
	width: 100%;
	height: 100%;
	position: relative;
	margin: 0 auto;
	img {
		transition: all 0.3s;
		filter: grayscale(100%);
		mix-blend-mode: ${props =>
			props.gridDisplay !== 1 ? `hard-light` : `multiply`};
	}
	&:hover {
		.image-background {
			background: ${props =>
				props.gridDisplay !== 1
					? handleColorType(``)
					: handleColorType(props.typeOfArticle)};
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
	background: ${props => handleColorType(props.typeOfArticle)};
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
		return (
			<GalleryItem
				gridDisplay={frontmatter.gridDisplay}
				typeOfArticle={frontmatter.typeOfArticle
					.toLowerCase()
					.replace(/\s/g, "")}
			>
				<Content>
					<div>{frontmatter.date}</div>
					<Category>{frontmatter.typeOfArticle}</Category>
					<Title>{frontmatter.title}</Title>
					<Hashtags>{frontmatter.hashtags}</Hashtags>
				</Content>
				{frontmatter.gridDisplay === 1 && (
					<Overlay
						className="overlay"
						typeOfArticle={frontmatter.typeOfArticle
							.toLowerCase()
							.replace(/\s/g, "")}
					/>
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
