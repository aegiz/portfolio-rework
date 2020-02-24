// Packages
import React from "react";
import { Link, graphql } from "gatsby";
import TransitionLink from "gatsby-plugin-transition-link";
import { TransitionPortal } from "gatsby-plugin-transition-link";

// Components
import Layout from "../components/layout";
import SEO from "../components/seo";
import Header from "../components/header";
import Disclaimer from "../components/disclaimer";
import Gallery from "../components/gallery";
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
				<Gallery posts={data.allMarkdownRemark.edges} />
				<Footer />
			</Layout>
		);
	}
}

export default PortfolioIndex;

export const pageQuery = graphql`
	query {
		allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
			edges {
				node {
					excerpt
					fields {
						slug
					}
					frontmatter {
						date(formatString: "MMMM DD, YYYY")
						title
						description
					}
				}
			}
		}
	}
`;
