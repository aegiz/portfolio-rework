// Packages
import React from "react";
import { graphql } from "gatsby";

// Components
import Layout from "../components/layout";
import SEO from "../components/seo";
import Header from "../components/header";
import Disclaimer from "../components/disclaimer";
import Gallery from "../components/grid/gallery";
//import Project from "../components/project";
import Footer from "../components/footer";

class PortfolioIndex extends React.Component {
	render() {
		const { data } = this.props;
		return (
			<Layout>
				<SEO title="Portfolio - Adrien Rahier" />
				<Header />
				<Disclaimer />
				<Gallery posts={data.allMdx.edges} />
				<Footer />
			</Layout>
		);
	}
}

export default PortfolioIndex;

export const pageQuery = graphql`
	query {
		allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
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
