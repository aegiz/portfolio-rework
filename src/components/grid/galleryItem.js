import React, { Component } from "react";
import styled from "styled-components";
import Img from "gatsby-image";

const GalleryItem = styled.div`
	margin: 0 auto;
	max-width: 250px;
	border-radius: 3px;
	border: 2px solid palevioletred;
	padding: 1em;
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

class galleryItem extends Component {
	render() {
		const project = this.props.post;
		return (
			<GalleryItem>
				<Category>Category</Category>
				<Title>{project.node.frontmatter.title}</Title>
				{project.node.frontmatter.featuredImage && (
					<Img
						fluid={project.node.frontmatter.featuredImage.childImageSharp.fluid}
					/>
				)}
				<Hashtags>#hop</Hashtags>
			</GalleryItem>
		);
	}
}

export default galleryItem;
