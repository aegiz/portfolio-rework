// Packages
import React from "react";
import { graphql } from "gatsby";

// Components
import Footer from "@components/footer";
import Gallery from "@components/grid/gallery";
import Layout from "@components/layout";
import Header from "@components/header";
import SEO from "@components/seo";

class PortfolioIndex extends React.Component {
	render() {
		const { data } = this.props;
		return (
			<Layout>
				<SEO title="Portfolio - Adrien Rahier" />
				<Header />
				<Gallery posts={data.allMdx.edges} />
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
						title
						beginning
						typeOfProject
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
						hashtags
						path
					}
				}
			}
		}
	}
`;
