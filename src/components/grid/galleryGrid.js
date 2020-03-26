// Package
import React, { Component } from "react";
import styled from "styled-components";
import AniLink from "gatsby-plugin-transition-link/AniLink";

// Component
import GalleryItem from "./galleryItem";

const GridItem = styled.div`
	border: 1px solid rebeccapurple;
	width: ${props => props.gridDisplay * 20}%;
	height: 300px;
	${({ theme }) => theme.mediaQueries.m} {
		width: 50%;
	}
`;

const Sizer = styled.div`
	width: 20%;
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
	componentWillUnmount() {
		this.props.destroyGrid();
	}
	render() {
		return (
			<div ref={this.element}>
				{this.props.posts.map((post, i) => (
					<GridItem
						key={i}
						className="grid-item"
						data-type={post.node.frontmatter.typeOfArticle
							.toLowerCase()
							.replace(/\s/g, "")}
						data-date={Math.floor(
							new Date(post.node.frontmatter.date).getTime() / 1000
						)}
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
							style={{
								display: "block",
								width: "100%",
								height: "100%",
							}}
						>
							<GalleryItem post={post} />
						</AniLink>
					</GridItem>
				))}
				<Sizer ref={this.sizer}></Sizer>
			</div>
		);
	}
}

export default GalleryGrid;
