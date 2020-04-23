// Packages
import React from "react";
import styled from "styled-components";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

// Components
import Cover from "@components/post/Cover";
import CTAhome from "@components/post/CTAhome";
import CTAotherProject from "@components/post/CTAotherProject";
import Layout from "@components/layout";
import OtherInfo from "@components/post/otherInfo";
import SEO from "@components/seo";

// Utils
import MdToHtml from "@utils/MdToHtml";

// Assets
import Middle from "@static/middle.png";

const Background = styled.div`
	position: absolute;
	/* z-index:  10; */
	/* opacity: 0.5; */
	width: 100%;
	height: 100%;
	background-image: url("${Middle}");
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
	height: 950px;
	/* height: 100vh; */
	margin: 0 auto;
	${({ theme }) => theme.mediaQueries.m} {
		flex-direction: column;
		height: auto;
	}
`;

const LeftPanel = styled.div`
	z-index: 1;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;
	height: 100%;
	margin: 0;
	background: ${({ theme }) => theme.colors.white};
	width: 45%;
	${({ theme }) => theme.mediaQueries.m} {
		z-index: 2;
		width: 100%;
	}
`;

const LeftPanelTop = styled.div`
	display: block;
	${({ theme }) => theme.mediaQueries.m} {
		position: fixed;
		z-index: 2;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: flex-start;
		height: 60px;
		width: 100%;
		background: ${({ theme }) => theme.colors.white};
		padding: 0 70px;
	}
`;

const LeftPanelIntro = styled.div`
	margin-top: 60px;
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	.upper {
		justify-content: normal;
		width: 100%;
		padding: 0 90px;
		${({ theme }) => theme.mediaQueries.l} {
			margin-top: 15px;
			padding: 0 70px;
		}
	}
`;

const Title = styled.h1`
	mix-blend-mode: exclusion;
	color: ${({ theme }) => theme.colors.white};
	font-size: ${({ theme }) => theme.fontSizes["6xl"]};
	${({ theme }) => theme.mediaQueries.l} {
		font-size: ${({ theme }) => theme.fontSizes["5xl"]};
	}
	&:after {
		content: "";
		background: ${({ theme }) => theme.colors.white};
		display: block;
		width: 30px;
		height: 3px;
		margin-top: 20px;
	}
`;

const Description = styled.div`
	margin-top: 50px;
	${({ theme }) => theme.mediaQueries.l} {
		margin: 40px auto;
	}
	p {
		margin: 0;
		font-size: ${({ theme }) => theme.fontSizes["xl"]};
		${({ theme }) => theme.mediaQueries.l} {
			font-size: ${({ theme }) => theme.fontSizes["normal"]};
		}
	}
`;

const ProjectPanel = styled.div`
	z-index: 1;
	position: absolute;
	left: calc(45% - 40px);
	bottom: 0;
	width: 31.7%;
	min-height: 425px;
	padding: 25px 50px 0 119px;
	background: ${({ theme }) => theme.colors.black};
	color: ${({ theme }) => theme.colors.white};
	${({ theme }) => theme.mediaQueries.l} {
		padding: 25px 50px 0;
	}
	${({ theme }) => theme.mediaQueries.m} {
		padding: 25px 70px 0;
		position: relative;
		width: 100%;
		left: auto;
		bottom: auto;
	}
`;

const RightPanel = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	height: 100%;
	width: 55%;
	margin: 0;
	${({ theme }) => theme.mediaQueries.m} {
		display: none;
	}
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
						<LeftPanelTop>
							<CTAhome text={"Homepage"} />
							<CTAotherProject
								previous={previous.fields.slug}
								previousText={"Previous Project"}
								next={next.fields.slug}
								nextText={"Next Project"}
							/>
						</LeftPanelTop>
						<LeftPanelIntro>
							<Cover
								src={post.frontmatter.featuredImage.childImageSharp.fluid}
							/>
							<div className="upper">
								<Title>{post.frontmatter.title}</Title>
								<Description>
									<MdToHtml content={post.frontmatter.description} />
								</Description>
							</div>
							<CTAotherProject
								desktop
								previous={previous.fields.slug}
								previousText={"Previous Project"}
								next={next.fields.slug}
								nextText={"Next Project"}
							/>
						</LeftPanelIntro>
					</LeftPanel>
					<ProjectPanel>
						<MDXRenderer>{post.body}</MDXRenderer>
						<button>Learn more</button>
					</ProjectPanel>
					<RightPanel>
						<Cover
							desktop
							src={post.frontmatter.featuredImage.childImageSharp.fluid}
						/>
						<OtherInfo
							beginning={post.frontmatter.beginning}
							duration={post.frontmatter.duration}
						/>
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
				beginning
				end
				duration
				typeOfProject
				typeOfArticle
				description
				featuredImage {
					childImageSharp {
						fluid(maxWidth: 800) {
							...GatsbyImageSharpFluid
						}
					}
				}
				techno
				role
				path
			}
		}
	}
`;
