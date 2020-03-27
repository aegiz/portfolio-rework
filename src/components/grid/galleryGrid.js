// Package
import React, { Component } from "react";
import styled from "styled-components";
import AniLink from "gatsby-plugin-transition-link/AniLink";

// Component
import GalleryItem from "./galleryItem";

const ShuffleGrid = styled.div`
	margin: 0 10px;
`;

const GridItem = styled.div`
	margin: 20px 0 0 0;
	width: ${props => {
		if (props.typeOfArticle === "sideproject") {
			return `20%`;
		} else if (props.typeOfArticle === "freelancework") {
			return `40%`;
		} else if (props.typeOfArticle === "full-timework") {
			return `60%`;
		} else {
			return `20%`;
		}
	}};
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
			<ShuffleGrid ref={this.element}>
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
								width: "calc(100% - 20px)",
								height: "100%",
								margin: "0 auto",
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
