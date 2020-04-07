// Packages
import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";

// Components
import Layout from "@components/layout";
import SEO from "@components/seo";
import Header from "@components/header";
import Gallery from "@components/grid/gallery";
import Footer from "@components/footer";

const Version = styled.div`
	position: absolute;
	top: 750px;
	color: white;
	cursor: pointer;
`;

const Hop = styled.div`
	opacity: ${props => (props.display === props.renderHeader ? "1" : "0.5")};
`;

class PortfolioIndex extends React.Component {
	state = {
		renderHeader: 1,
	};
	updateHeader = newVal => {
		this.setState({
			renderHeader: newVal,
		});
	};
	render() {
		const { data } = this.props;
		return (
			<Layout>
				<SEO title="Portfolio - Adrien Rahier" />
				<Header renderHeader={this.state.renderHeader} />
				<Gallery posts={data.allMdx.edges} />
				<Version className="coucou">
					<Hop
						display={1}
						renderHeader={this.state.renderHeader}
						onClick={() => {
							this.updateHeader(1);
						}}
					>
						Header 1
					</Hop>
					<Hop
						display={2}
						renderHeader={this.state.renderHeader}
						onClick={() => {
							this.updateHeader(2);
						}}
					>
						Header 2
					</Hop>
					<Hop
						display={3}
						renderHeader={this.state.renderHeader}
						onClick={() => {
							this.updateHeader(3);
						}}
					>
						Header 3
					</Hop>
					<Hop
						display={4}
						renderHeader={this.state.renderHeader}
						onClick={() => {
							this.updateHeader(4);
						}}
					>
						Header 4
					</Hop>
				</Version>
				<Footer />
			</Layout>
		);
	}
}

export default PortfolioIndex;

export const pageQuery = graphql`
	query {
		allMdx(
			filter: { frontmatter: { draft: { eq: false } } }
			sort: { fields: [frontmatter___date], order: DESC }
		) {
			edges {
				node {
					id
					excerpt
					fields {
						slug
					}
					frontmatter {
						date
						title
						path
						hashtags
						typeOfArticle
						description
						featuredImage {
							childImageSharp {
								duotone: fluid(
									maxWidth: 900
									duotone: { highlight: "#FFFFFF", shadow: "#2f3238" }
								) {
									...GatsbyImageSharpFluid
								}
								grayscale: fluid(maxWidth: 400, grayscale: true) {
									...GatsbyImageSharpFluid
								}
							}
						}
					}
				}
			}
		}
	}
`;
