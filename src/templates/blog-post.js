// Packages
import AniLink from "gatsby-plugin-transition-link/AniLink";
import Img from "gatsby-image";
import React from "react";
import styled from "styled-components";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

// Components
import Layout from "@components/layout";
import SEO from "@components/seo";

// Assets
import Start from "@static/start.png";

const Background = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	background-image: url("${Start}");
	background-repeat: no-repeat;
	background-size: 100% 100%;
	background-position: 0 0;
`;

const BlogPostContainer = styled.div`
	position: relative;
	z-index: 1;
	display: flex;
	flex-direction: row;
	align-items: flex-start;
	justify-content: center;
	width: 100%;
	height: 1016px;
	/* height: 100vh; */
	/* max-width: 1400px; */
	margin: 0 auto;
`;

const LeftPanel = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;
	width: 45%;
	height: 100%;
	margin: 0;
	background: ${({ theme }) => theme.colors.white};
	opacity: 0.4;
	padding: 73px 90px 0;
`;

const LeftPanelInner = styled.div`
	margin-top: 40px;
`;

const Title = styled.div`
	margin-top: 15px;
	h1 {
		font-size: ${({ theme }) => theme.fontSizes["6xl"]};
	}
`;

const Date = styled.div`
	display: none;
	p {
		font-size: ${({ theme }) => theme.fontSizes.normal};
	}
`;

const Hastags = styled.div`
	display: none;
	p {
		font-size: ${({ theme }) => theme.fontSizes.normal};
	}
`;

const Description = styled.div`
	margin-top: 50px;
	p {
		margin: 0;
		font-size: ${({ theme }) => theme.fontSizes["xl"]};
	}
`;

const MiddlePanel = styled.div`
	display: none;
	position: absolute;
	left: 50%;
	transform: translateX(-50%);
`;

const RightPanel = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	width: 55%;
	margin: 0;
	background: ${({ theme }) => theme.colors.white};
`;

const Cover = styled.div``;

const NextProject = styled.div`
	position: absolute;
	left: 50%;
	transform: translateX(-50%);
`;

class BlogPostTemplate extends React.Component {
	render() {
		const post = this.props.data.mdx;
		const siteTitle = this.props.data.site.siteMetadata.title;
		const { previous, next } = this.props.pageContext;

		return (
			<Layout location={this.props.location} title={siteTitle}>
				<SEO
					title={post.frontmatter.title}
					description={post.frontmatter.description || post.excerpt}
					path={post.frontmatter.path}
				/>
				<Background />
				<BlogPostContainer>
					<LeftPanel>
						<AniLink
							cover
							bg="#000000"
							top="entry"
							direction="right"
							duration={1}
							to="/"
						>
							GO BACK TO HOMEPAGE
						</AniLink>
						<LeftPanelInner>
							<Title>
								<h1>{post.frontmatter.title}</h1>
							</Title>
							<Date>
								<p>Start:{post.frontmatter.date}</p>
								<p>Duration:{post.frontmatter.date}</p>
							</Date>
							<Hastags>
								<p>Start:{post.frontmatter.hastags}</p>
								<p>Duration:{post.frontmatter.hastags}</p>
							</Hastags>
							<Description>
								<p>{post.frontmatter.description}</p>
							</Description>
						</LeftPanelInner>
					</LeftPanel>
					<MiddlePanel>
						<MDXRenderer>{post.body}</MDXRenderer>
						{/* https://codepen.io/kathykato/pen/rZRaNe */}
						<button>Learn more</button>
					</MiddlePanel>
					<RightPanel>
						<Cover>
							<Img
								fluid={post.frontmatter.featuredImage.childImageSharp.fluid}
							/>
						</Cover>
						<NextProject>
							<ul
								style={{
									display: `flex`,
									flexWrap: `wrap`,
									justifyContent: `space-between`,
									listStyle: `none`,
									padding: 0,
								}}
							>
								<li>
									{previous && (
										<AniLink fade to={previous.fields.slug} rel="prev">
											← {previous.frontmatter.title}
										</AniLink>
									)}
								</li>
								<li>
									{next && (
										<AniLink fade to={next.fields.slug} rel="next">
											{next.frontmatter.title} →
										</AniLink>
									)}
								</li>
							</ul>
						</NextProject>
					</RightPanel>
				</BlogPostContainer>
			</Layout>
		);
	}
}

export default BlogPostTemplate;

export const pageQuery = graphql`
	query BlogPostBySlug($slug: String!) {
		site {
			siteMetadata {
				title
				author
			}
		}
		mdx(fields: { slug: { eq: $slug } }) {
			id
			excerpt(pruneLength: 160)
			body
			frontmatter {
				title
				date
				description
				description
				path
				featuredImage {
					childImageSharp {
						fluid(maxWidth: 800) {
							...GatsbyImageSharpFluid
						}
					}
				}
			}
		}
	}
`;
