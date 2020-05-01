// Package
import AniLink from "gatsby-plugin-transition-link/AniLink";
import PropTypes from "prop-types";
import styled from "styled-components";
import React, { Component } from "react";

// Component
import Item from "./item";

// Utils
import withWindowDimensions from "@utils/withWindowDimensions";

const GalleryContainer = styled.div`
	margin: 0 10px 40px;
`;

const GalleryItemOuter = styled.div`
	opacity: ${props => (props.instance ? "1" : "0")} !important;
	margin: 10px 0 0 0;
	width: ${props => {
		if (props.typeOfProject === "sideproject") {
			return `20%`;
		} else if (props.typeOfProject === "freelancework") {
			return `40%`;
		} else if (
			props.currentFilter === "full-timework" &&
			props.typeOfProject === "full-timework"
		) {
			return `50%`;
		} else if (props.typeOfProject === "full-timework") {
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

class GalleryComp extends Component {
	static propTypes = {
		createGallery: PropTypes.func.isRequired,
		destroyGallery: PropTypes.func.isRequired,
		posts: PropTypes.arrayOf(
			PropTypes.shape({
				instance: PropTypes.shape(),
				currentFilter: PropTypes.string,
			}).isRequired
		),
	};
	constructor(props) {
		super(props);
		this.element = React.createRef();
		this.sizer = React.createRef();
	}
	componentDidMount() {
		this.props.createGallery(this.element.current, this.sizer.current);
	}
	componentWillUnmount() {
		this.props.destroyGallery();
	}
	render() {
		return (
			<GalleryContainer ref={this.element}>
				{this.props.posts.map((post, i) => (
					<GalleryItemOuter
						key={i}
						instance={this.props.instance}
						currentFilter={this.props.currentFilter}
						className="gallery-item"
						data-type={post.node.frontmatter.typeOfProject
							.toLowerCase()
							.replace(/\s/g, "")}
						data-date={post.node.frontmatter.dateTimeStamp}
						typeOfProject={post.node.frontmatter.typeOfProject
							.toLowerCase()
							.replace(/\s/g, "")}
					>
						{!this.props.isM ? (
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
								<Item frontmatter={post.node.frontmatter} />
							</AniLink>
						) : (
							<AniLink
								fade
								to={post.node.frontmatter.path}
								duration={0.2}
								style={{
									display: "block",
									width: "calc(100% - 10px)",
									height: "100%",
									margin: "0 auto",
									textDecoration: "none",
								}}
							>
								<Item frontmatter={post.node.frontmatter} />
							</AniLink>
						)}
					</GalleryItemOuter>
				))}
				<Sizer ref={this.sizer}></Sizer>
			</GalleryContainer>
		);
	}
}

export default withWindowDimensions(GalleryComp);
