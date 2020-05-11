// Packages
import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";

// Components
import Footer from "@components/shared/footer";
import Grid from "@components/homepage/grid";
import Layout from "@components/layout";
import Menu from "react-burger-menu/lib/menus/slide";
import Header from "@components/shared/header";
import SEO from "@components/seo";

// Assets
import filterIcon from "@static/filter.svg";

const styles = {
	bmBurgerButton: {
		position: "fixed",
		width: "36px",
		height: "30px",
		left: "36px",
		top: "36px",
	},
	bmBurgerBars: {
		background: "#373a47",
	},
	bmBurgerBarsHover: {
		background: "#a90000",
	},
	bmCrossButton: {
		height: "24px",
		width: "24px",
	},
	bmCross: {
		background: "#bdc3c7",
	},
	bmMenuWrap: {
		position: "fixed",
		height: "100%",
	},
	bmMenu: {
		background: "#373a47",
		padding: "2.5em 1.5em 0",
		fontSize: "1.15em",
	},
	bmMorphShape: {
		fill: "#373a47",
	},
	bmItemList: {
		color: "#b8b7ad",
		padding: "0.8em",
	},
	bmItem: {
		display: "inline-block",
	},
	bmOverlay: {
		background: "rgba(0, 0, 0, 0.3)",
	},
};
const OuterMenu = styled.div`
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0%;
	left: 0;
`;

export default class PortfolioIndex extends React.Component {
	render() {
		const { data } = this.props;
		return (
			<Layout>
				<SEO title="Portfolio - Adrien Rahier" />
				<Header />
				<OuterMenu>
					<Menu customBurgerIcon={<img src={filterIcon} />} styles={styles}>
						<a id="home" className="menu-item" href="/">
							Home
						</a>
						<a id="about" className="menu-item" href="/about">
							About
						</a>
						<a id="contact" className="menu-item" href="/contact">
							Contact
						</a>
						<a
							onClick={this._showSettings}
							className="menu-item--small"
							href=""
						>
							Settings
						</a>
					</Menu>
				</OuterMenu>
				<Grid posts={data.allMdx.edges} />
				<Footer />
			</Layout>
		);
	}
}

export const pageQuery = graphql`
	query {
		allMdx(
			filter: { frontmatter: { draft: { eq: false } } }
			sort: { fields: [frontmatter___dateTimeStamp], order: DESC }
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
						dateTimeStamp
						typeOfProject
						description
						featuredImage {
							childImageSharp {
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
