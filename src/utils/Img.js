// In order to import images src, srcset etc in custom components we need to retrieve all the image
// See https://github.com/wesbos/Gatsby-Workshop/blob/master/notes/04%20-%20Images.md for more info

import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

export default function Image({ src, alt }) {
	const { allImageSharp } = useStaticQuery(graphql`
		query {
			allImageSharp {
				edges {
					node {
						fluid(maxWidth: 500) {
							...GatsbyImageSharpFluid
							originalName
						}
					}
				}
			}
		}
	`);
	const image = allImageSharp.edges.find(
		edge => edge.node.fluid.originalName === src
	);
	if (!image) {
		return null;
	}
	return <Img fluid={image.node.fluid} alt={alt} />;
}
