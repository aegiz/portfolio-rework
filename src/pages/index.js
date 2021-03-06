// Packages
import React from "react";
import { graphql } from "gatsby";
import Shuffle from "shufflejs";
import styled from "styled-components";

// Components
import Filters from "@components/homepage/filters";
import Footer from "@components/homepage/footer";
import Gallery from "@components/homepage/gallery";
import Layout from "@components/shared/layout";
import MobileFilterMenu from "@components/homepage/mobileFilterMenu";
import Header from "@components/homepage/header";
import SEO from "@components/shared/seo";

const HomepageContent = styled.div`
	z-index: 2;
	position: relative;
	width: 100%;
	max-width: 1400px;
	margin: 95px auto 0;
	padding: 0 10px;
`;

export default class PortfolioIndex extends React.Component {
	state = {
		gallery: null,
		currentFilter: `all`,
	};
	createGallery = (gallery, sizer) => {
		this.setState({
			gallery: new Shuffle(gallery, {
				itemSelector: `.gallery-item`,
				sizer: sizer,
				initialSort: {
					reverse: true,
					by: function(element) {
						return element.getAttribute(`data-date`);
					},
				},
			}),
		});
		this.updateGallery("all");
	};
	updateGallery = newFilter => {
		setTimeout(() => {
			this.state.gallery.update();
			this.state.gallery.filter(element => {
				return newFilter === `all`
					? element
					: element.dataset.type.includes(newFilter);
			});
		}, 0); // Ugly hack to force the reflow of the sizer
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
			<Layout background="linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(47,50,56,1) 45%)">
				<SEO title="Portfolio" />
				<Header />
				<MobileFilterMenu
					updateGallery={this.updateGallery}
					currentFilter={this.state.currentFilter}
					updateFilter={this.updateFilter}
				/>
				<HomepageContent>
					<Filters
						updateGallery={this.updateGallery}
						currentFilter={this.state.currentFilter}
						updateFilter={this.updateFilter}
					/>
					<Gallery
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
								grayscale: fluid(maxWidth: 950, grayscale: true) {
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
