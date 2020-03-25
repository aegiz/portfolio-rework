import React, { Component } from "react";
import styled from "styled-components";
import Img from "gatsby-image";

const InnerIso = styled.div`
	margin: 0 auto;
	max-width: 250px;
	border-radius: 3px;
	border: 2px solid palevioletred;
	padding: 1em;
`;

class galleryItem extends Component {
	render() {
		return (
			<InnerIso>
				{this.props.post.node.frontmatter.featuredImage && (
					<Img
						fluid={
							this.props.post.node.frontmatter.featuredImage.childImageSharp
								.fluid
						}
					/>
				)}
			</InnerIso>
		);
	}
}

export default galleryItem;
