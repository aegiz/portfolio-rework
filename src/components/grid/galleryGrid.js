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
	componentWillUnmount() {
		// this.props.destroyIsotopeGrid();
		// this.shuffle.destroy();
		// this.shuffle = null;
	}
	render() {
		return (
			<div ref={this.element} className="row my-shuffle">
				{this.props.posts.map((post, i) => (
					<GridItem
						key={i}
						className="photo-item"
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
				<div
					ref={this.sizer}
					className="col-1@xs col-1@sm photo-grid__sizer"
					style={{ width: "20%" }}
				></div>
			</div>
		);
	}
}

export default GalleryGrid;