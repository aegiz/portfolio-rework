import React from "react";
import { graphql } from "gatsby";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { MDXRenderer } from "gatsby-plugin-mdx";

import Layout from "../components/layout";
import SEO from "../components/seo";

// Utils
//import noMoreLonelyWords from "../utils/noMoreLonelyWords"

class BlogPostTemplate extends React.Component {
	render() {
		console.log(this.props.data);
		const post = this.props.data.mdx;
		const siteTitle = this.props.data.site.siteMetadata.title;
		const { previous, next } = this.props.pageContext;

		return (
			<Layout location={this.props.location} title={siteTitle}>
				<SEO
					title={post.frontmatter.title}
					description={post.frontmatter.description || post.excerpt}
				/>
				<AniLink paintDrip hex="#663399" duration={1} to="/">
					GO BACK TO HOMEPAGE
				</AniLink>
				<h1
					style={{
						marginBottom: 0,
					}}
				>
					{post.frontmatter.title}
				</h1>
				<p
					style={{
						display: `block`,
					}}
				>
					{post.frontmatter.date}
				</p>
				<MDXRenderer>{post.body}</MDXRenderer>
				<hr />

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
				date(formatString: "MMMM DD, YYYY")
				description
			}
		}
	}
`;
