// Package
import React, { Component } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import AniLink from "gatsby-plugin-transition-link/AniLink";

// Component
import GalleryItem from "./galleryItem";

const GridItem = styled.div`
	border: 1px solid rebeccapurple;
	width: ${props => props.gridDisplay * 20}%;
	${({ theme }) => theme.mediaQueries.m} {
		width: 50%;
	}
`;

class GalleryGrid extends Component {
	componentDidMount() {
		this.props.createIsotopeGrid(ReactDOM.findDOMNode(this));
	}

	render() {
		return (
			<div id="ar-isotope">
				{this.props.posts.map((post, i) => (
					<GridItem
						key={i}
						gridDisplay={post.node.frontmatter.gridDisplay}
						typeOfArticle={post.node.frontmatter.typeOfArticle
							.toLowerCase()
							.replace(/\s/g, "")}
					>
						<AniLink
							cover
							bg="#663399"
							top="entry"
							direction="left"
							duration={1}
							to={post.node.frontmatter.path}
						>
							<GalleryItem post={post} />
						</AniLink>
					</GridItem>
				))}
			</div>
		);
	}
}

export default GalleryGrid;
