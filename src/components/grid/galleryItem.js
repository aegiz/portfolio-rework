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
	color: ${props => props.theme.colors.black};
	text-transform: uppercase;
	font-size: 24px;
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
				<Title>{project.node.frontmatter.title}</Title>
				{project.node.frontmatter.featuredImage && (
					<Img
						fluid={project.node.frontmatter.featuredImage.childImageSharp.fluid}
					/>
				)}
			</GalleryItem>
		);
	}
}

export default galleryItem;
