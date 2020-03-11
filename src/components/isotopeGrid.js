import React, { Component } from "react";
import ReactDOM from "react-dom";
import styled, { withTheme } from "styled-components";
import AniLink from "gatsby-plugin-transition-link/AniLink";

const GridItem = styled.div`
	width: 33.33%;
	@media (max-width: 1000px) {
		width: 50%;
	}
`;

const InnerIso = styled.div`
	margin: 0 auto;
	max-width: 250px;
	border-radius: 3px;
	border: 2px solid palevioletred;
	padding: 1em;
`;

class IsotopeGrid extends Component {
	componentDidMount() {
		this.props.createIsotopeGrid(ReactDOM.findDOMNode(this));
	}

	render() {
		return (
			<div id="ar-isotope">
				{this.props.posts.map((post, i) => (
					<GridItem
						className={`filter-item filter-${post.node.frontmatter.typeOfArticle}`}
					>
						<AniLink
							cover
							bg="#663399"
							top="entry"
							direction="left"
							duration={1}
							key={i}
							to={post.node.frontmatter.path}
						>
							<InnerIso>{post.node.frontmatter.title}</InnerIso>
						</AniLink>
					</GridItem>
				))}
			</div>
		);
	}
}

export default withTheme(IsotopeGrid);
