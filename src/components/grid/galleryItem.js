import React, { Component } from "react";
import styled from "styled-components";
import Img from "gatsby-image";

const GalleryItem = styled.div`
	width: 100%;
	height: 100%;
	position: relative;
	margin: 0 auto;
	border-radius: 3px;
	border: 2px solid palevioletred;
`;

const Content = styled.div`
	width: 100%;
	height: 100%;
	position: relative;
	z-index: 2;
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

const ImageBackground = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 1;
	.gatsby-image-wrapper {
		height: 100%;
	}
`;

class galleryItem extends Component {
	render() {
		const project = this.props.post;
		const frontmatter = project.node.frontmatter;
		return (
			<GalleryItem>
				<Content>
					<div>{frontmatter.date}</div>
					<Category>{frontmatter.typeOfArticle}</Category>
					<Title>{frontmatter.title}</Title>
					<Hashtags>{frontmatter.hashtags}</Hashtags>
				</Content>
				<ImageBackground>
					{frontmatter.featuredImage && (
						<Img fluid={frontmatter.featuredImage.childImageSharp.fluid} />
					)}
				</ImageBackground>
			</GalleryItem>
		);
	}
}

export default galleryItem;
