// Packages
import React from "react";
import { graphql } from "gatsby";
import { TransitionState } from "gatsby-plugin-transition-link";
import { motion } from "framer-motion";
import styled from "styled-components";
//import TransitionLink from "gatsby-plugin-transition-link";
// import { TransitionPortal } from "gatsby-plugin-transition-link"; => To be rechechecked what that does

// Components
import Layout from "../components/layout";
import SEO from "../components/seo";
import Header from "../components/header";
import Disclaimer from "../components/disclaimer";
import Gallery from "../components/gallery";
//import Project from "../components/project";
import Footer from "../components/footer";

const MotionContainer = styled.div`
	.test {
		background: red;
		border-radius: 30px;
		width: 150px;
		height: 150px;
	}
`;

class PortfolioIndex extends React.Component {
	render() {
		const { data } = this.props;
		const variants = {
			hidden: { opacity: 0 },
			visible: { opacity: 1 },
		};
		return (
			<Layout>
				<SEO title="Portfolio - Adrien Rahier" />
				<Header />
				<Disclaimer />
				<TransitionState>
					{({ transitionStatus, exit, enter, mount }) => {
						// https://transitionlink.tylerbarnes.ca/docs/transitionlink/#usage
						console.log(
							"current page's transition status is",
							transitionStatus
						);
						console.log("exit object is", exit);
						console.log("enter object is", enter);
						return (
							<MotionContainer>
								<motion.div
									className="test"
									transition={{ duration: 2 }}
									animate={{
										scale: [1, 2, 2, 1, 1],
										rotate: [0, 0, 270, 270, 0],
										borderRadius: ["20%", "20%", "50%", "50%", "20%"],
									}}
								/>
							</MotionContainer>
						);
					}}
				</TransitionState>
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
					id
					excerpt
					fields {
						slug
					}
					frontmatter {
						date(formatString: "MMMM DD, YYYY")
						title
						path
						typeOfArticle
						description
					}
				}
			}
		}
	}
`;
