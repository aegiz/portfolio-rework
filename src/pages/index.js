// Packages
import React from "react";
import { graphql } from "gatsby";
import Shuffle from "shufflejs";
import styled from "styled-components";

// Components
import Footer from "@components/shared/footer";
import Filters from "@components/homepage/filters";
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

const HomepageContent = styled.div`
	z-index: 2;
	position: relative;
	width: 100%;
	max-width: 1400px;
	margin: 80px auto 0;
	padding: 0 10px;
`;

const MobileFilterMenu = styled.div`
	display: none;
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0%;
	left: 0;
	${({ theme }) => theme.mediaQueries.m} {
		display: block;
	}
`;

export default class PortfolioIndex extends React.Component {
	state = {
		gallery: null,
		filterOpen: false,
		currentFilter: "all",
	};
	createGallery = (gallery, sizer) => {
		this.setState({
			gallery: new Shuffle(gallery, {
				itemSelector: ".gallery-item",
				sizer: sizer,
				initialSort: {
					reverse: true,
					by: function(element) {
						return element.getAttribute("data-date");
					},
				},
			}),
		});
	};
	updateGallery = newFilter => {
		this.state.gallery.filter(element => {
			return newFilter === "all"
				? element
				: element.dataset.type.includes(newFilter);
		});
	};
	destroyGallery = () => {
		this.state.gallery.destroy();
	};
	updateFilter = newFilter => {
		this.setState({
			currentFilter: newFilter,
		});
	};
	render() {
		const { data } = this.props;
		return (
			<Layout>
				<SEO title="Portfolio - Adrien Rahier" />
				<Header />
				<MobileFilterMenu>
					<Menu
						customBurgerIcon={<img src={filterIcon} alt={"filters"} />}
						styles={styles}
					>
						<Filters
							updateGallery={this.updateGallery}
							filterOpen={this.state.filterOpen}
							currentFilter={this.state.currentFilter}
							updateFilter={this.updateFilter}
						/>
					</Menu>
				</MobileFilterMenu>
				<HomepageContent>
					<Filters
						updateGallery={this.updateGallery}
						filterOpen={this.state.filterOpen}
						currentFilter={this.state.currentFilter}
						updateFilter={this.updateFilter}
					/>
					<Grid
						instance={this.state.gallery}
						currentFilter={this.state.currentFilter}
						createGallery={this.createGallery}
						destroyGallery={this.destroyGallery}
						posts={data.allMdx.edges}
					/>
				</HomepageContent>
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
