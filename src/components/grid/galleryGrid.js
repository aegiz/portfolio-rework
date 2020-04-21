// Package
import AniLink from "gatsby-plugin-transition-link/AniLink";
import styled from "styled-components";
import React, { Component } from "react";

// Component
import GalleryItem from "./galleryItem";

const ShuffleGrid = styled.div`
	margin: 0 10px 40px;
`;

const GridItem = styled.div`
	opacity: ${props => (props.instance ? "1" : "0")} !important;
	margin: 10px 0 0 0;
	width: ${props => {
		if (props.typeOfArticle === "sideproject") {
			return `20%`;
		} else if (props.typeOfArticle === "freelancework") {
			return `40%`;
		} else if (
			props.currentFilter === "full-timework" &&
			props.typeOfArticle === "full-timework"
		) {
			return `50%`;
		} else if (props.typeOfArticle === "full-timework") {
			return `60%`;
		} else {
			return `20%`;
		}
	}};
	height: 270px;
	${({ theme }) => theme.mediaQueries.l} {
		width: 50%;
	}
	${({ theme }) => theme.mediaQueries.s} {
		width: 100%;
	}
`;

const Sizer = styled.div`
	width: 20%;
	${({ theme }) => theme.mediaQueries.l} {
		width: 50%;
	}
	${({ theme }) => theme.mediaQueries.s} {
		width: 100%;
	}
`;

class GalleryGrid extends Component {
	constructor(props) {
		super(props);
		this.element = React.createRef();
		this.sizer = React.createRef();
	}
	componentDidMount() {
		this.props.createGrid(this.element.current, this.sizer.current);
	}
	componentWillUnmount() {
		this.props.destroyGrid();
	}
	render() {
		return (
			<ShuffleGrid ref={this.element}>
				{this.props.posts.map((post, i) => (
					<GridItem
						key={i}
						instance={this.props.instance}
						currentFilter={this.props.currentFilter}
						className="grid-item"
						data-type={post.node.frontmatter.typeOfArticle
							.toLowerCase()
							.replace(/\s/g, "")}
						data-date={Math.floor(
							new Date(post.node.frontmatter.beginning).getTime() / 1000
						)}
						typeOfArticle={post.node.frontmatter.typeOfArticle
							.toLowerCase()
							.replace(/\s/g, "")}
					>
						<AniLink
							cover
							bg="#000000"
							direction="left"
							duration={0.8}
							to={post.node.frontmatter.path}
							style={{
								display: "block",
								width: "calc(100% - 10px)",
								height: "100%",
								margin: "0 auto",
								textDecoration: "none",
							}}
						>
							<GalleryItem post={post} />
						</AniLink>
					</GridItem>
				))}
				<Sizer ref={this.sizer}></Sizer>
			</ShuffleGrid>
		);
	}
}

export default GalleryGrid;
