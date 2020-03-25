// Package
import React, { Component } from "react";
import ReactDOM from "react-dom";
import styled, { withTheme } from "styled-components";
import AniLink from "gatsby-plugin-transition-link/AniLink";

// Component
import GalleryItem from "./galleryItem";

const GridItem = styled.div`
	width: 33.33%;
	@media (max-width: 1000px) {
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
						className={`filter-item filter-${post.node.frontmatter.typeOfArticle}`}
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

export default withTheme(GalleryGrid);
