// Package
import React, { Component } from "react";
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
	constructor(props) {
		super(props);
		this.element = React.createRef();
		this.sizer = React.createRef();
	}
	componentDidMount() {
		this.props.createIsotopeGrid(this.element.current, this.sizer.current);
	}
	componentDidUpdate() {
		// Notify shuffle to dump the elements it's currently holding and consider
		// all elements matching the `itemSelector` as new.
		this.props.updateGrid();
	}
	componentWillUnmount() {
		// this.props.destroyIsotopeGrid();
		// this.shuffle.destroy();
		// this.shuffle = null;
	}
	render() {
		return (
			<div ref={this.element}>
				{this.props.posts.map((post, i) => (
					<GridItem
						key={i}
						className={`photo-item photo-item--${post.node.frontmatter.typeOfArticle
							.toLowerCase()
							.replace(/\s/g, "")}`}
						data-type={post.node.frontmatter.typeOfArticle
							.toLowerCase()
							.replace(/\s/g, "")}
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
				<div ref={this.sizer} style={{ width: "20%" }}></div>
			</div>
		);
	}
}

export default GalleryGrid;
